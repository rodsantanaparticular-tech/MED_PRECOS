"""
Camada A - descoberta de catálogo pelos sitemaps das redes.

O sitemap é o arquivo que a própria loja publica pra robôs de busca
(declarado no robots.txt). Ele lista TODAS as URLs de produto; o slug da URL
("xarelto-rivaroxabana-20mg-28-comprimidos") já basta pra casar com o catálogo
CMED por nome + apresentação. Assim sabemos quais SKUs existem em cada rede
sem abrir página de produto nenhuma - o preço vem depois, sob demanda
(Camada B) ou no lote, só pro que interessa.

Custo: uma requisição por arquivo de sitemap (ex.: Pacheco ~94 arquivos de
1.000 URLs), com atraso entre elas. Só grava SKUs que casaram com o catálogo.
"""
import asyncio
import logging
import re

from sqlalchemy import select
from sqlalchemy.orm import Session

from ..config import obter_config
from ..matching.casamento import IndiceCatalogo
from ..models import MapeamentoSkuRede, Rede
from . import vtex

log = logging.getLogger(__name__)
RE_LOC = re.compile(r'<loc>\s*([^<\s]+)\s*</loc>')


def titulo_do_slug(slug: str) -> str:
    """ "losartana-potassica-50mg-30-comprimidos" -> "losartana potassica 50mg 30 comprimidos".
    Decimais viram "12-5mg" no slug; junta de volta como "12,5mg"."""
    t = re.sub(r'(\d)-(\d+)(mg|mcg|g|ml|ui)\b', r'\1,\2\3', slug)
    return t.replace('-', ' ')


async def urls_de_produto(base_url: str) -> list[str]:
    cfg = obter_config()
    urls: list[str] = []
    async with vtex.novo_cliente(timeout=30) as cliente:
        indice = await cliente.get(f'{base_url}/sitemap.xml')
        indice.raise_for_status()
        arquivos = [u for u in RE_LOC.findall(indice.text) if '/sitemap/product-' in u]
        for arquivo in arquivos:
            try:
                r = await cliente.get(arquivo)
                r.raise_for_status()
                urls += [u for u in RE_LOC.findall(r.text) if u.endswith('/p')]
            except Exception as e:
                log.warning('Sitemap %s: %s', arquivo, e)
            await asyncio.sleep(cfg.delay_entre_requisicoes_s)
    return urls


def registrar_descobertas(s: Session, rede_id: str, urls: list[str], indice: IndiceCatalogo) -> dict:
    existentes = set(s.scalars(select(MapeamentoSkuRede.sku_rede).where(MapeamentoSkuRede.rede_id == rede_id)))
    novos = casados = 0
    for url in urls:
        sku = vtex.slug_da_url(url)
        if not sku or sku in existentes:
            continue
        r = indice.casar(titulo_do_slug(sku))
        if r.metodo == 'sem_match':
            continue  # fora do catálogo (cosmético, fralda...): não guarda
        s.add(MapeamentoSkuRede(rede_id=rede_id, sku_rede=sku, titulo=titulo_do_slug(sku), url=url,
                                medicamento_id=r.medicamento_id, produto_cmed_ggrem=r.ggrem,
                                chave_apresentacao=r.chave_apresentacao, metodo_match=r.metodo,
                                score_match=r.score, origem='sitemap'))
        existentes.add(sku)
        novos += 1
        casados += 1
    s.flush()
    return {'urls': len(urls), 'skus_novos_casados': casados}


async def descobrir(rede_ids: list[str] | None = None) -> dict:
    from ..db import sessao
    with sessao() as s:
        consulta = select(Rede).where(Rede.coleta_ativa.is_(True), Rede.plataforma == 'vtex')
        if rede_ids:
            consulta = consulta.where(Rede.id.in_(rede_ids))
        redes = [(r.id, r.base_url) for r in s.scalars(consulta)]
    resumo = {}
    for rede_id, base_url in redes:
        urls = await urls_de_produto(base_url)
        with sessao() as s:
            resumo[rede_id] = registrar_descobertas(s, rede_id, urls, IndiceCatalogo(s))
        log.info('Sitemap %s: %s', rede_id, resumo[rede_id])
    return resumo
