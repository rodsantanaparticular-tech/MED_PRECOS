"""
Atualização de preços em lote (substitui scripts/legado/atualizar-precos.ps1 +
scrape_precos_vtex.py): busca, em cada rede ativa, os princípios ativos do
catálogo vendidos em farmácia. Redes rodam em paralelo; dentro de cada rede,
uma requisição por vez com atraso (educado com a loja).

Com a Camada B cobrindo o que é consultado, o lote serve pra manter o
histórico e o "preço de partida" de todo o catálogo; roda semanal/mensal
(agenda em workers/celery_app.py).
"""
import asyncio
import logging

from sqlalchemy import select

from ..db import sessao
from ..matching.casamento import IndiceCatalogo
from ..models import Medicamento
from . import lomadee, vtex
from .persistencia import registrar_ofertas
from .sob_demanda import redes_coletaveis, termos_de_busca

log = logging.getLogger(__name__)


async def atualizar_precos(limite_termos: int | None = None, rede_ids: list[str] | None = None) -> dict:
    with sessao() as s:
        meds = s.scalars(select(Medicamento).where(Medicamento.so_hospitalar.is_(False),
                                                   Medicamento.preco_referencia.is_not(None))
                         .order_by(Medicamento.id)).all()
        termos: list[str] = []
        for m in meds:
            termos += [t for t in termos_de_busca(m) if t not in termos]
        coletaveis = redes_coletaveis(s, rede_ids)
        redes = [(r.id, r.base_url) for r in coletaveis if r.plataforma == 'vtex']
        redes_lomadee = [r.id for r in coletaveis if r.plataforma == 'lomadee']
    termos = termos[:limite_termos] if limite_termos else termos
    log.info('Lote: %d termos x %d redes VTEX + %d redes Lomadee (catálogo inteiro)',
             len(termos), len(redes), len(redes_lomadee))

    # VTEX busca termo a termo; Lomadee baixa o catálogo inteiro (pequeno, ~2 min) - tudo em paralelo
    resultados, catalogo_lomadee = await asyncio.gather(
        asyncio.gather(*(vtex.buscar_varios_termos(base, termos) for _, base in redes)),
        lomadee.catalogo_completo(redes_lomadee) if redes_lomadee else asyncio.sleep(0, result={}))
    por_rede = dict(zip((rede_id for rede_id, _ in redes), resultados))
    por_rede.update({r: catalogo_lomadee.get(r, []) for r in redes_lomadee})
    resumo = {}
    with sessao() as s:
        indice = IndiceCatalogo(s)
        for rede_id, ofertas in por_rede.items():
            resumo[rede_id] = registrar_ofertas(s, rede_id, ofertas, indice, fonte='batch')
            log.info('Lote %s: %s', rede_id, resumo[rede_id])
    return {'termos': len(termos), 'redes': resumo}
