"""
Coletor via Lomadee Affiliate API: catálogo que a própria rede publica no seu
programa de afiliados (acesso autorizado, sem raspagem). Validado em 30/09/2026.

    GET https://api.lomadee.com.br/affiliate/products?organizationIds=<id>&limit=100&page=N
    header x-api-key (chave só leitura: brands, campaigns, products - ver STATUS.md)

Particularidades observadas (diferem da documentação):
  - pricing[].price / listPrice vêm em REAIS (5.75), não em centavos;
  - a resposta traz só `data` (sem `count`): pagina-se até vir menos que `limit`.
Limite: 60 requisições/min por chave -> ~1 req/s, respeitando 429 + Retry-After.

Catálogos pequenos (Drogasmil ~2 mil, PromoFarma ~2 mil, Rosário ~200 produtos):
o lote baixa tudo (~45 requisições); o sob demanda faz uma busca por termo
cobrindo as 3 redes de uma vez (organizationIds separados por vírgula).
"""
import asyncio
import logging

import httpx

from ..config import obter_config
from ..matching.normalizacao import so_digitos
from .vtex import Oferta, slug_da_url

log = logging.getLogger(__name__)

# Id da "organização" (marca) na Lomadee -> id da rede no MedPreços
ORGANIZACOES = {
    'rosario': '1fcee90e-562e-455c-97a5-6bdd6d60b589',
    'drogasmil': 'd855f505-7e26-4961-a182-c2139aeadd2c',
    'promofarma': '6d69265c-6b83-4ff4-916f-95a75057947d',
}
REDE_POR_ORGANIZACAO = {org: rede for rede, org in ORGANIZACOES.items()}
POR_PAGINA = 100
INTERVALO_S = 1.05            # 60 req/min
MAX_PAGINAS = 100
MAX_ESPERAS_429 = 5


def configurada() -> bool:
    return bool(obter_config().lomadee_api_key)


def _float(v) -> float | None:
    try:
        f = float(v)
        return f if f > 0 else None
    except (TypeError, ValueError):
        return None


def extrair_ofertas(produtos: list[dict]) -> dict[str, list[Oferta]]:
    """Produtos da API -> ofertas por rede. Um produto com várias opções (variações)
    vira uma oferta por opção; cada opção tem EAN e preço próprios."""
    por_rede: dict[str, list[Oferta]] = {}
    for p in produtos or []:
        rede = REDE_POR_ORGANIZACAO.get(p.get('organizationId'))
        slug = slug_da_url(p.get('url')) or p.get('id')
        if not rede or not slug:
            continue
        opcoes = p.get('options') or []
        for opcao in opcoes:
            precos = opcao.get('pricing') or []
            preco = _float(precos[0].get('price')) if precos else None
            if not preco:
                continue
            lista = _float(precos[0].get('listPrice'))
            por_rede.setdefault(rede, []).append(Oferta(
                sku_rede=slug if len(opcoes) == 1 else f"{slug}#{opcao.get('id')}",
                titulo=(opcao.get('name') or p.get('name') or '').strip(),
                url=p.get('url'),
                preco=preco,
                preco_lista=lista if lista and lista > preco else None,
                disponivel=bool(opcao.get('available', p.get('available', True))),
                ean=so_digitos(opcao.get('ean')) or None,
            ))
    return por_rede


async def _pagina(cliente: httpx.AsyncClient, params: dict) -> list[dict]:
    for tentativa in range(1, MAX_ESPERAS_429 + 1):
        r = await cliente.get('/affiliate/products', params=params)
        if r.status_code == 429:
            espera = float(r.headers.get('Retry-After') or 30)
            log.info('Lomadee pediu pausa (429): esperando %.0fs', espera)
            await asyncio.sleep(min(espera, 120))
            continue
        r.raise_for_status()
        return r.json().get('data') or []
    raise RuntimeError('Lomadee continuou recusando (429) - rodada encerrada')


def _cliente() -> httpx.AsyncClient:
    cfg = obter_config()
    return httpx.AsyncClient(base_url=cfg.lomadee_base_url, timeout=60,
                             headers={'x-api-key': cfg.lomadee_api_key, 'User-Agent': cfg.user_agent})


async def catalogo_completo(rede_ids: list[str] | None = None) -> dict[str, list[Oferta]]:
    """Lote: baixa o catálogo inteiro de cada rede (página por página)."""
    if not configurada():
        return {}
    resultado: dict[str, list[Oferta]] = {}
    async with _cliente() as cliente:
        for rede, org in ORGANIZACOES.items():
            if rede_ids and rede not in rede_ids:
                continue
            for pagina in range(1, MAX_PAGINAS + 1):
                try:
                    dados = await _pagina(cliente, {'organizationIds': org, 'limit': POR_PAGINA, 'page': pagina})
                except Exception as e:
                    log.warning('Lomadee %s página %d: %s', rede, pagina, e)
                    break
                for r, ofertas in extrair_ofertas(dados).items():
                    resultado.setdefault(r, []).extend(ofertas)
                await asyncio.sleep(INTERVALO_S)
                if len(dados) < POR_PAGINA:
                    break
            log.info('Lomadee %s: %d ofertas', rede, len(resultado.get(rede, [])))
    return resultado


async def buscar_termos(termos: list[str], rede_ids: list[str], timeout_s: float | None = None) -> dict[str, list[Oferta]]:
    """Sob demanda: uma busca por termo cobrindo todas as redes pedidas de uma vez."""
    if not configurada() or not rede_ids:
        return {}
    orgs = ','.join(ORGANIZACOES[r] for r in rede_ids if r in ORGANIZACOES)
    resultado: dict[str, dict[str, Oferta]] = {}
    async with _cliente() as cliente:
        if timeout_s:
            cliente.timeout = httpx.Timeout(timeout_s)
        for termo in termos:
            try:
                dados = await _pagina(cliente, {'search': termo, 'organizationIds': orgs, 'limit': POR_PAGINA})
            except Exception as e:
                log.warning('Lomadee busca %r: %s', termo, e)
                continue
            for rede, ofertas in extrair_ofertas(dados).items():
                for o in ofertas:
                    resultado.setdefault(rede, {})[o.sku_rede] = o
    return {rede: list(ofertas.values()) for rede, ofertas in resultado.items()}
