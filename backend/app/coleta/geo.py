"""
Localização e farmácias próximas (porte do que antes rodava no navegador, em
js/app.js): CEP -> ViaCEP -> Nominatim; texto livre -> Nominatim; farmácias
reais via Overpass (OpenStreetMap) com escalonamento de raio. Tudo com cache
compartilhado (Camada C) e reserva offline (localidades e 54 farmácias
pré-carregadas em catalogo/dados/).
"""
import asyncio
import json
import logging
import math
import time
from datetime import timedelta
from functools import lru_cache
from pathlib import Path

import httpx

from ..config import obter_config
from ..matching.normalizacao import normalizar, so_digitos
from . import cache

log = logging.getLogger(__name__)
DADOS = Path(__file__).resolve().parent.parent / 'catalogo' / 'dados'

OVERPASS_ENDPOINTS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter']
ESCALONAMENTO_RAIO_KM = [10, 20, 35, 60]
META_LOJAS = 15
META_REDES_DISTINTAS = 5
ORCAMENTO_OVERPASS_S = 18  # tempo máximo da busca de farmácias inteira (todos os raios e tentativas)
SAO_PAULO = {'latitude': -23.5505, 'longitude': -46.6333, 'nome': 'São Paulo - SP'}
REGIAO_CEP = {
    '0': SAO_PAULO, '1': SAO_PAULO,
    '2': {'latitude': -22.9068, 'longitude': -43.1729, 'nome': 'Rio de Janeiro - RJ'},
    '3': {'latitude': -19.9167, 'longitude': -43.9345, 'nome': 'Belo Horizonte - MG'},
    '4': {'latitude': -12.9777, 'longitude': -38.5016, 'nome': 'Salvador - BA'},
    '5': {'latitude': -8.0476, 'longitude': -34.8770, 'nome': 'Recife - PE'},
    '6': {'latitude': -3.7319, 'longitude': -38.5267, 'nome': 'Fortaleza - CE'},
    '7': {'latitude': -15.8267, 'longitude': -47.9218, 'nome': 'Brasília - DF'},
    '8': {'latitude': -25.4284, 'longitude': -49.2733, 'nome': 'Curitiba - PR'},
    '9': {'latitude': -30.0346, 'longitude': -51.2177, 'nome': 'Porto Alegre - RS'},
}
REDES_COM_DELIVERY = ['droga raia', 'drogasil', 'raia drogasil', 'pague menos', 'panvel', 'extrafarma', 'ultrafarma',
                      'drogaria sao paulo', 'nissei', 'farmacias pacheco', 'drogaria araujo', 'big ben',
                      'drogaria venancio']

# Nominatim pede no máximo 1 requisição por segundo por aplicação
_trava_nominatim = asyncio.Lock()


@lru_cache
def localidades() -> list[dict]:
    return json.loads((DADOS / 'localidades.json').read_text(encoding='utf-8'))


@lru_cache
def farmacias_reserva() -> list[dict]:
    return json.loads((DADOS / 'farmacias_fallback.json').read_text(encoding='utf-8'))


def distancia_km(lat1, lon1, lat2, lon2) -> float:
    r = 6371
    d_lat, d_lon = math.radians(lat2 - lat1), math.radians(lon2 - lon1)
    a = math.sin(d_lat / 2) ** 2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(d_lon / 2) ** 2
    return r * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))


def _cliente(timeout=6.0) -> httpx.AsyncClient:
    return httpx.AsyncClient(timeout=timeout, headers={'User-Agent': obter_config().user_agent})


async def _nominatim(cliente: httpx.AsyncClient, consulta: str) -> dict | None:
    async with _trava_nominatim:
        r = await cliente.get('https://nominatim.openstreetmap.org/search',
                              params={'format': 'json', 'limit': 1, 'countrycodes': 'br', 'q': consulta})
        await asyncio.sleep(1)
    dados = r.json() if r.status_code == 200 else []
    return {'latitude': float(dados[0]['lat']), 'longitude': float(dados[0]['lon'])} if dados else None


async def geocodificar(termo: str) -> dict:
    """CEP ou texto livre -> {latitude, longitude, nome, aproximada}. Nunca falha:
    sem rede ou sem resultado, cai pra região do CEP / cidade conhecida / São Paulo."""
    termo = (termo or '').strip()
    if not termo:
        return {**SAO_PAULO, 'aproximada': True}
    cep = so_digitos(termo)
    eh_cep = len(cep) == 8 and len(termo.replace('-', '').replace('.', '').strip()) == 8
    # "v2": desde 30/09/2026 o resultado de CEP traz também a rua (logradouro)
    chave = f'geo2:cep:{cep}' if eh_cep else f'geo:txt:{normalizar(termo)}'
    if (em_cache := cache.ler(chave)) is not None:
        return em_cache

    ttl = timedelta(days=obter_config().ttl_geocodificacao_dias)
    try:
        async with _cliente() as cliente:
            if eh_cep:
                r = await cliente.get(f'https://viacep.com.br/ws/{cep}/json/')
                end = r.json() if r.status_code == 200 else None
                if end and not end.get('erro'):
                    coord = await _nominatim(cliente, ', '.join(filter(None, [end.get('logradouro'), end.get('bairro'),
                                                                               end.get('localidade'), end.get('uf'), 'Brasil'])))
                    if not coord and end.get('bairro'):
                        coord = await _nominatim(cliente, ', '.join(filter(None, [end.get('bairro'), end.get('localidade'),
                                                                                   end.get('uf'), 'Brasil'])))
                    if coord:
                        loc = {**coord, 'nome': f"{end['localidade']} - {end['uf']}", 'bairro': end.get('bairro') or None,
                               'endereco': end.get('logradouro') or None, 'cep': f'{cep[:5]}-{cep[5:]}',
                               'aproximada': False}
                        cache.gravar(chave, loc, ttl)
                        return loc
            else:
                coord = await _nominatim(cliente, termo + ', Brasil')
                if coord:
                    loc = {**coord, 'nome': termo, 'aproximada': False}
                    cache.gravar(chave, loc, ttl)
                    return loc
    except (httpx.HTTPError, ValueError) as e:
        log.warning('Geocodificação falhou para %r: %s', termo, e)

    if eh_cep:
        return {**REGIAO_CEP.get(cep[0], SAO_PAULO), 'aproximada': True}
    termo_n = normalizar(termo)
    for loc in localidades():
        cidade = normalizar(loc['cidade'])
        if cidade in termo_n or termo_n in cidade:
            return {'latitude': loc['latitude'], 'longitude': loc['longitude'], 'nome': f"{loc['cidade']} - {loc['uf']}",
                    'aproximada': True}
    return {**SAO_PAULO, 'aproximada': True}


# ---------------------------------------------------------------------------
# Endereço das farmácias (o OSM não informa rua/bairro/CEP de muitas delas)
# ---------------------------------------------------------------------------
ENDERECO_AUSENTE = 'Endereço não informado pelo OpenStreetMap'
TTL_ENDERECO = timedelta(days=90)
ORCAMENTO_ENDERECOS_S = 5.0   # por requisição do usuário; o resto é completado em segundo plano


def _falta_endereco(f: dict) -> bool:
    return not f.get('online') and (not f.get('endereco') or f['endereco'] == ENDERECO_AUSENTE
                                    or not f.get('bairro') or not f.get('cep'))


def _chave_endereco(lat: float, lon: float) -> str:
    return f'rev:{lat:.5f},{lon:.5f}'


async def endereco_por_coordenada(cliente: httpx.AsyncClient, lat: float, lon: float) -> dict:
    """Nominatim reverso (1 req/s, com cache de 90 dias). É a rua mais próxima do ponto: aproximado."""
    chave = _chave_endereco(lat, lon)
    if (em_cache := cache.ler(chave)) is not None:
        return em_cache
    async with _trava_nominatim:
        r = await cliente.get('https://nominatim.openstreetmap.org/reverse',
                              params={'format': 'jsonv2', 'lat': lat, 'lon': lon, 'zoom': 18, 'addressdetails': 1})
        await asyncio.sleep(1)
    a = (r.json() if r.status_code == 200 else {}).get('address') or {}
    endereco = {
        'endereco': ', '.join(filter(None, [a.get('road') or a.get('pedestrian') or a.get('footway'), a.get('house_number')])),
        'bairro': a.get('suburb') or a.get('neighbourhood') or a.get('quarter') or a.get('city_district') or '',
        'cep': a.get('postcode') or '',
        'cidade': a.get('city') or a.get('town') or a.get('village') or a.get('municipality') or '',
    }
    cache.gravar(chave, endereco, TTL_ENDERECO)
    return endereco


def _aplicar_endereco(f: dict, e: dict) -> None:
    if (not f.get('endereco') or f['endereco'] == ENDERECO_AUSENTE) and e.get('endereco'):
        f['endereco'], f['enderecoAproximado'] = e['endereco'], True
    for campo in ('bairro', 'cep', 'cidade'):
        if not f.get(campo) and e.get(campo):
            f[campo] = e[campo]


async def completar_enderecos(farmacias: list[dict], orcamento_s: float = ORCAMENTO_ENDERECOS_S) -> list[tuple]:
    """Preenche rua/bairro/CEP que o OSM não trouxe, dentro de um orçamento de tempo.
    Devolve as coordenadas que ficaram pendentes (pra completar em segundo plano)."""
    pendentes, prazo = [], time.monotonic() + orcamento_s
    async with _cliente() as cliente:
        for f in farmacias:
            if not _falta_endereco(f):
                continue
            em_cache = cache.ler(_chave_endereco(f['latitude'], f['longitude']))
            if em_cache is None and time.monotonic() > prazo:
                pendentes.append((f['latitude'], f['longitude']))
                continue
            try:
                _aplicar_endereco(f, em_cache or await endereco_por_coordenada(cliente, f['latitude'], f['longitude']))
            except (httpx.HTTPError, ValueError) as e:
                log.warning('Endereço reverso falhou (%s, %s): %s', f['latitude'], f['longitude'], e)
    return pendentes


async def aquecer_enderecos(coordenadas: list[list[float]]) -> int:
    """Tarefa de fundo: resolve e guarda em cache os endereços pendentes."""
    feitos = 0
    async with _cliente() as cliente:
        for lat, lon in coordenadas:
            try:
                await endereco_por_coordenada(cliente, lat, lon)
                feitos += 1
            except (httpx.HTTPError, ValueError) as e:
                log.warning('Endereço reverso falhou (%s, %s): %s', lat, lon, e)
    return feitos


def cidade_mais_proxima(lat: float, lon: float) -> dict:
    loc = min(localidades(), key=lambda l: distancia_km(lat, lon, l['latitude'], l['longitude']))
    return {'cidade': loc['cidade'], 'uf': loc['uf'], 'distanciaKm': round(distancia_km(lat, lon, loc['latitude'], loc['longitude']), 1)}


# ---------------------------------------------------------------------------
# Farmácias (Overpass)
# ---------------------------------------------------------------------------
def fator_preco_deterministico(id_farmacia: str) -> float:
    """Mesmo cálculo do front antigo (hash do id -> 0.88..1.12): o preço
    ESTIMADO de uma farmácia sem preço real não muda a cada busca."""
    h = 0
    for c in id_farmacia:
        h = (h * 31 + ord(c)) & 0xFFFFFFFF
    return 0.88 + (h % 1000) / 1000 * 0.24


def converter_osm(node: dict) -> dict | None:
    tags = node.get('tags') or {}
    nome = tags.get('name')
    if not nome:
        return None
    fid = f"osm-{node['id']}"
    nome_rede = normalizar(tags.get('brand') or nome)
    delivery = any(r in nome_rede for r in REDES_COM_DELIVERY)
    h24 = '24/7' in (tags.get('opening_hours') or '')
    horario = ({'abertura': 0, 'fechamento': 24, 'domingoAberto': True, 'domingoAbertura': 0, 'domingoFechamento': 24}
               if h24 else {'abertura': 8, 'fechamento': 20, 'domingoAberto': False})
    return {
        'id': fid, 'nome': nome, 'marca': tags.get('brand'),
        'endereco': ', '.join(filter(None, [tags.get('addr:street'), tags.get('addr:housenumber')]))
                    or 'Endereço não informado pelo OpenStreetMap',
        'cidade': tags.get('addr:city', ''), 'cep': tags.get('addr:postcode', ''), 'bairro': tags.get('addr:suburb', ''),
        'telefone': tags.get('phone') or tags.get('contact:phone'),
        'latitude': node['lat'], 'longitude': node['lon'], 'horario': horario,
        'fatorPreco': fator_preco_deterministico(fid),
        'possuiDelivery': delivery, 'entregaEm': '40 min' if delivery else None, 'dadosEstimados': True,
    }


async def _farmacias_no_raio(cliente: httpx.AsyncClient, lat: float, lon: float, raio_km: float,
                             prazo: float) -> list[dict] | None:
    raio_m = round(raio_km * 1000)
    chave = f'farm:{lat:.2f},{lon:.2f},{raio_m}'
    if (em_cache := cache.ler(chave)) is not None:
        return em_cache
    consulta = f'[out:json][timeout:20];node["amenity"="pharmacy"](around:{raio_m},{lat},{lon});out body;'
    # O Overpass público oscila (504/429 por sobrecarga): uma 2ª tentativa no
    # principal costuma passar; depois o espelho. `prazo` (time.monotonic) é o
    # limite da busca inteira de farmácias, somando raios e tentativas
    for endpoint in [OVERPASS_ENDPOINTS[0], *OVERPASS_ENDPOINTS]:
        restante = prazo - time.monotonic()
        if restante < 2:
            break
        try:
            r = await cliente.post(endpoint, data={'data': consulta}, timeout=httpx.Timeout(min(12.0, restante), connect=4.0))
            r.raise_for_status()
            farmacias = [f for f in (converter_osm(n) for n in r.json().get('elements', [])) if f]
            cache.gravar(chave, farmacias, timedelta(hours=obter_config().ttl_farmacias_horas))
            return farmacias
        except (httpx.HTTPError, ValueError) as e:
            log.warning('Overpass %s falhou: %s %s', endpoint, type(e).__name__, e)
    return cache.ler(chave, aceitar_vencido=True)


async def farmacias_proximas(lat: float, lon: float, raio_max_km: float) -> tuple[list[dict], bool]:
    """Escalona o raio (10->20->35->60km) até ter lojas/redes suficientes pra
    comparar, sem passar do raio do usuário. Retorna (farmácias, usou_reserva).
    Se o Overpass falhar num raio, NÃO tenta um maior (consulta mais pesada num
    serviço já sobrecarregado só atrasa o usuário): fica com o que tiver."""
    melhor = None
    prazo = time.monotonic() + ORCAMENTO_OVERPASS_S
    async with _cliente() as cliente:
        for raio in ESCALONAMENTO_RAIO_KM:
            if raio > raio_max_km and melhor is not None:
                break
            achadas = await _farmacias_no_raio(cliente, lat, lon, min(raio, raio_max_km), prazo)
            if achadas is None:
                break
            melhor = achadas
            if len(achadas) >= META_LOJAS or len({normalizar(f['nome']) for f in achadas}) >= META_REDES_DISTINTAS:
                break
            if raio >= raio_max_km:
                break
    if melhor:
        return melhor, False
    return farmacias_reserva(), True
