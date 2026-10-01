"""
Camada B - atualização sob demanda: quando alguém consulta um medicamento e o
preço guardado de alguma rede está mais velho que o TTL (padrão 24h), busca
de novo, na hora, só aquele medicamento naquelas redes (2 requisições HTTP
leves por rede, em paralelo entre redes). É isso que substitui a raspagem
massiva: o catálogo inteiro não precisa estar fresco o tempo todo, só o que
está sendo consultado.

Termos buscados por rede: o princípio ativo e o nome do produto de referência
(ex.: "rivaroxabana" + "xarelto") - a busca só pelo princípio ativo deixava
marcas de fora (Crestor não aparecia buscando "rosuvastatina cálcica"). SKUs
que a Camada A (sitemap) descobriu e que a busca não trouxe são consultados
direto pela URL, até um limite por rede.
"""
import asyncio
import logging
from datetime import datetime, timedelta

from sqlalchemy import func, select
from sqlalchemy.orm import Session

from ..catalogo.versao import IndiceComVersao
from ..config import obter_config
from ..db import sessao
from ..matching.casamento import IndiceCatalogo
from ..matching.normalizacao import normalizar
from ..models import MapeamentoSkuRede, Medicamento, Rede
from . import lomadee, vtex
from .persistencia import registrar_ofertas

log = logging.getLogger(__name__)
MAX_SKUS_DIRETOS_POR_REDE = 6
_indice = IndiceComVersao(IndiceCatalogo)


def indice_catalogo(s: Session) -> IndiceCatalogo:
    """Índice em memória, recriado quando o catálogo muda (ver catalogo/versao.py)."""
    return _indice.obter(s)


def invalidar_indice() -> None:
    _indice.invalidar()


def redes_coletaveis(s: Session, rede_ids: list[str] | None = None) -> list[Rede]:
    """Redes com coleta ativa e coletor disponível: VTEX sempre; Lomadee só com a chave configurada."""
    plataformas = ['vtex'] + (['lomadee'] if lomadee.configurada() else [])
    consulta = select(Rede).where(Rede.coleta_ativa.is_(True), Rede.plataforma.in_(plataformas))
    if rede_ids:
        consulta = consulta.where(Rede.id.in_(rede_ids))
    return list(s.scalars(consulta))


def redes_desatualizadas(s: Session, medicamento_id: str) -> list[Rede]:
    limite = datetime.utcnow() - timedelta(hours=obter_config().ttl_preco_horas)
    ultima = dict(s.execute(
        select(MapeamentoSkuRede.rede_id, func.max(MapeamentoSkuRede.ultimo_preco_em))
        .where(MapeamentoSkuRede.medicamento_id == medicamento_id)
        .group_by(MapeamentoSkuRede.rede_id)).all())
    return [r for r in redes_coletaveis(s) if ultima.get(r.id) is None or ultima[r.id] < limite]


def termos_de_busca(med: Medicamento) -> list[str]:
    termos = []
    for t in (med.principio_ativo.replace(';', ' ').replace('+', ' '), med.nome):
        if t and normalizar(t) not in {normalizar(x) for x in termos}:
            termos.append(t)
    return termos


async def _coletar_rede(rede: Rede, termos: list[str], skus_diretos: list[str]) -> list[vtex.Oferta]:
    ofertas: dict[str, vtex.Oferta] = {}
    async with vtex.novo_cliente(timeout=obter_config().timeout_sob_demanda_s) as cliente:
        for termo in termos:
            try:
                for o in await vtex.buscar_termo(cliente, rede.base_url, termo):
                    ofertas[o.sku_rede] = o
            except Exception as e:
                log.warning('Sob demanda %s %r: %s', rede.id, termo, e)
        for sku in skus_diretos:
            if sku in ofertas:
                continue
            try:
                for o in await vtex.buscar_produto(cliente, rede.base_url, sku):
                    ofertas[o.sku_rede] = o
            except Exception as e:
                log.warning('Sob demanda %s sku %s: %s', rede.id, sku, e)
    return list(ofertas.values())


async def atualizar_medicamento(medicamento_id: str, redes_ids: list[str] | None = None) -> dict:
    """Busca preços frescos de um medicamento nas redes pedidas (ou nas desatualizadas)."""
    with sessao() as s:
        med = s.get(Medicamento, medicamento_id)
        if med is None:
            return {}
        redes = redes_coletaveis(s, redes_ids) if redes_ids else redes_desatualizadas(s, medicamento_id)
        termos = termos_de_busca(med)
        # SKUs conhecidos (ex.: vindos do sitemap) sem preço ou com preço vencido
        limite = datetime.utcnow() - timedelta(hours=obter_config().ttl_preco_horas)
        diretos = {r.id: list(s.scalars(
            select(MapeamentoSkuRede.sku_rede).where(
                MapeamentoSkuRede.rede_id == r.id, MapeamentoSkuRede.medicamento_id == medicamento_id,
                (MapeamentoSkuRede.ultimo_preco_em.is_(None)) | (MapeamentoSkuRede.ultimo_preco_em < limite))
            .limit(MAX_SKUS_DIRETOS_POR_REDE))) for r in redes}
    if not redes:
        return {}

    redes_vtex = [r for r in redes if r.plataforma == 'vtex']
    redes_lomadee = [r.id for r in redes if r.plataforma == 'lomadee']
    # VTEX: uma loja por vez em paralelo; Lomadee: uma busca por termo cobre todas as redes dela
    vtex_res, lomadee_res = await asyncio.gather(
        asyncio.gather(*(_coletar_rede(r, termos, diretos[r.id]) for r in redes_vtex)),
        lomadee.buscar_termos(termos, redes_lomadee, timeout_s=obter_config().timeout_sob_demanda_s))
    por_rede = dict(zip((r.id for r in redes_vtex), vtex_res))
    por_rede.update({r: lomadee_res.get(r, []) for r in redes_lomadee})
    resultados = [por_rede[r.id] for r in redes]

    def _gravar():
        with sessao() as s:
            indice = indice_catalogo(s)
            return {r.id: registrar_ofertas(s, r.id, ofertas, indice, fonte='sob_demanda')
                    for r, ofertas in zip(redes, resultados)}
    resumo = await asyncio.to_thread(_gravar)
    log.info('Sob demanda %s: %s', medicamento_id, {k: v['casados'] for k, v in resumo.items()})
    return resumo
