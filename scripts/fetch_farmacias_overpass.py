# -*- coding: utf-8 -*-
"""
Busca farmácias reais via Overpass API (OpenStreetMap) para as capitais
usadas como base pré-carregada do MED_PRECOS (fallback usado por
buscarFarmaciasReaisProximas() em app.js quando a busca em tempo real
falhar no navegador do usuário).

A API pública do Overpass é instável (fica sobrecarregada com frequência) -
por isso o script tenta várias vezes e alterna entre 3 endpoints/espelhos
antes de desistir de uma cidade. Rode de novo se alguma cidade falhar.

Uso: python fetch_farmacias_overpass.py
Gera: farmacias_osm.json (na mesma pasta) - passe esse arquivo para
      build_farmacias_overpass.py em seguida.
"""
import json
import time
import urllib.request
import urllib.parse
from pathlib import Path

CIDADES = [
    {'cidade': 'São Paulo', 'uf': 'SP', 'lat': -23.5505, 'lon': -46.6333},
    {'cidade': 'Rio de Janeiro', 'uf': 'RJ', 'lat': -22.9068, 'lon': -43.1729},
    {'cidade': 'Belo Horizonte', 'uf': 'MG', 'lat': -19.9167, 'lon': -43.9345},
    {'cidade': 'Curitiba', 'uf': 'PR', 'lat': -25.4284, 'lon': -49.2733},
    {'cidade': 'Porto Alegre', 'uf': 'RS', 'lat': -30.0346, 'lon': -51.2177},
    {'cidade': 'Salvador', 'uf': 'BA', 'lat': -12.9777, 'lon': -38.5016},
    {'cidade': 'Fortaleza', 'uf': 'CE', 'lat': -3.7319, 'lon': -38.5267},
    {'cidade': 'Recife', 'uf': 'PE', 'lat': -8.0476, 'lon': -34.8770},
    {'cidade': 'Brasília', 'uf': 'DF', 'lat': -15.8267, 'lon': -47.9218},
]

RAIO_M = 6000
MAX_POR_CIDADE = 6
ENDPOINTS = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://overpass.private.coffee/api/interpreter',
]
TENTATIVAS_POR_CIDADE = 3
OUT = Path(__file__).resolve().parent / 'farmacias_osm.json'


def buscar(cidade):
    query = f'[out:json][timeout:25];node["amenity"="pharmacy"](around:{RAIO_M},{cidade["lat"]},{cidade["lon"]});out body;'
    data = urllib.parse.urlencode({'data': query}).encode()
    for tentativa in range(TENTATIVAS_POR_CIDADE):
        for url in ENDPOINTS:
            try:
                req = urllib.request.Request(url, data=data, headers={'User-Agent': 'MED_PRECOS-dev/1.0'})
                with urllib.request.urlopen(req, timeout=40) as resp:
                    return json.loads(resp.read().decode('utf-8')).get('elements', [])
            except Exception as e:
                print(f'    tentativa {tentativa + 1} em {url}: {e}')
                time.sleep(3)
    return []


resultado = json.loads(OUT.read_text(encoding='utf-8')) if OUT.exists() else {}

for c in CIDADES:
    print('Buscando:', c['cidade'])
    elementos = buscar(c)
    nomeados = [e for e in elementos if e.get('tags', {}).get('name')]
    resultado[c['cidade']] = {'uf': c['uf'], 'farmacias': nomeados[:MAX_POR_CIDADE]}
    print(f'  {len(elementos)} encontrados, {len(nomeados)} com nome, usando {len(resultado[c["cidade"]]["farmacias"])}')
    time.sleep(2)

OUT.write_text(json.dumps(resultado, ensure_ascii=False, indent=2), encoding='utf-8')
print('OK, salvo em', OUT)
for cidade, info in resultado.items():
    print(' ', cidade, '->', len(info['farmacias']))
