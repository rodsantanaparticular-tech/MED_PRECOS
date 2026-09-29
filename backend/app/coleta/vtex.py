"""
Cliente das lojas VTEX (5 das redes coletadas). Usa só a API pública de
vitrine - a mesma que a busca do próprio site chama pra qualquer visitante:
    GET /api/catalog_system/pub/products/search/{termo}?_from=0&_to=49
Nada de checkout/carrinho (testado em 29/09/2026: o preço é nacional; o CEP
só muda disponibilidade de entrega, então não há motivo pra simular carrinho).
"""
import asyncio
import logging
import urllib.parse
from dataclasses import dataclass, field

import httpx

from ..config import obter_config
from ..matching.normalizacao import so_digitos

log = logging.getLogger(__name__)

# Nomes que as lojas preenchem mas não significam nada pro consumidor
# (placeholder da loja ou nome da administradora, não do programa do laboratório)
PROGRAMAS_GENERICOS = {'programa pbm - industria', 'logixpharma', 'seven', 'sevenpdv', 'vidalink', 'epharma',
                       'funcional'}


@dataclass
class Oferta:
    sku_rede: str                  # slug da URL do produto (chave estável, igual no sitemap e na busca)
    titulo: str
    url: str | None
    preco: float
    preco_lista: float | None
    disponivel: bool
    ean: str | None = None
    registros: list[str] = field(default_factory=list)
    pbm: dict | None = None


def slug_da_url(url: str | None) -> str | None:
    if not url:
        return None
    caminho = urllib.parse.urlparse(url).path.strip('/')
    return caminho.removesuffix('/p') or None


def _primeiro(p: dict, *campos):
    for c in campos:
        v = p.get(c)
        if isinstance(v, list) and v and str(v[0]).strip():
            return str(v[0]).strip()
    return None


def _float(v) -> float | None:
    try:
        f = float(str(v).replace(',', '.'))
        return f if f > 0 else None
    except (TypeError, ValueError):
        return None


def extrair_pbm(p: dict) -> dict | None:
    """Programa de desconto do laboratório (PBM: preço menor com cadastro do CPF).
    Campos customizados por loja, observados em 29/09/2026:
      Pague Menos / Extrafarma: PBM=Sim|Não, DescontoPBM, MenorPrecoPBM
      Drogaria São Paulo: 'Programa PBM' (nome real), 'Desconto PBM'; o campo 'PBM'
                          às vezes só LISTA os nomes das especificações - não é marcador
      Pacheco: 'PBM' = nome da autorizadora (Seven) -> participa
      Venancio: PBM=Sim"""
    marcador = _primeiro(p, 'PBM')
    if marcador and marcador.lower() in ('não', 'nao'):
        return None
    if marcador and 'pbm' in marcador.lower():
        marcador = None  # lista de nomes de especificação, não um "sim"
    programa = _primeiro(p, 'Programa PBM', 'ProgramaPBM', 'PBM Programa')
    if programa and programa.lower() in PROGRAMAS_GENERICOS:
        programa = None
    desconto = _float(_primeiro(p, 'Desconto PBM', 'DescontoPBM'))
    preco_min = _float(_primeiro(p, 'MenorPrecoPBM'))
    if not (marcador or programa or desconto or preco_min):
        return None
    return {'programa': programa, 'desconto': desconto, 'precoMin': preco_min}


def extrair_ofertas(produtos: list[dict]) -> list[Oferta]:
    ofertas = []
    for p in produtos or []:
        melhor, ean = None, None
        for item in p.get('items') or []:
            ean = ean or so_digitos(item.get('ean')) or None
            for seller in item.get('sellers') or []:
                oferta = seller.get('commertialOffer') or {}
                preco = oferta.get('Price')
                if preco and (melhor is None or preco < melhor['Price']):
                    melhor = oferta
        sku = slug_da_url(p.get('link'))
        if not melhor or not sku:
            continue
        lista = melhor.get('ListPrice')
        ofertas.append(Oferta(
            sku_rede=sku, titulo=(p.get('productName') or '').strip(), url=p.get('link'),
            preco=float(melhor['Price']), preco_lista=float(lista) if lista and lista > melhor['Price'] else None,
            disponivel=bool(melhor.get('IsAvailable', False)), ean=ean,
            registros=[r for r in (so_digitos(x) for x in (p.get('NumeroRegistroMS') or [])) if r],
            pbm=extrair_pbm(p)))
    return ofertas


def novo_cliente(timeout: float = 15) -> httpx.AsyncClient:
    cfg = obter_config()
    return httpx.AsyncClient(timeout=timeout, follow_redirects=True,
                             headers={'User-Agent': cfg.user_agent, 'Accept': 'application/json'})


async def buscar_termo(cliente: httpx.AsyncClient, base_url: str, termo: str, quantidade: int | None = None) -> list[Oferta]:
    quantidade = quantidade or obter_config().itens_por_busca_vtex
    url = (f'{base_url}/api/catalog_system/pub/products/search/{urllib.parse.quote(termo)}'
           f'?_from=0&_to={max(0, min(quantidade, 50) - 1)}')
    r = await cliente.get(url)
    if r.status_code not in (200, 206):
        raise httpx.HTTPStatusError(f'{r.status_code} em {url}', request=r.request, response=r)
    return extrair_ofertas(r.json())


async def buscar_produto(cliente: httpx.AsyncClient, base_url: str, sku_rede: str) -> list[Oferta]:
    r = await cliente.get(f'{base_url}/api/catalog_system/pub/products/search/{sku_rede}/p')
    return extrair_ofertas(r.json()) if r.status_code in (200, 206) else []


async def buscar_varios_termos(base_url: str, termos: list[str], atraso_s: float | None = None) -> list[Oferta]:
    """Busca sequencial (educada com a loja), com atraso entre requisições."""
    atraso_s = obter_config().delay_entre_requisicoes_s if atraso_s is None else atraso_s
    resultado: dict[str, Oferta] = {}
    async with novo_cliente() as cliente:
        for termo in termos:
            try:
                for o in await buscar_termo(cliente, base_url, termo):
                    resultado[o.sku_rede] = o
            except Exception as e:  # uma busca ruim não derruba o lote
                log.warning('VTEX %s termo %r: %s', base_url, termo, e)
            await asyncio.sleep(atraso_s)
    return list(resultado.values())


