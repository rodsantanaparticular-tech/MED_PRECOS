# -*- coding: utf-8 -*-
"""
Gera o bloco BANCO_FARMACIAS (pré-carregado) de js/data.js a partir das
farmácias reais buscadas via fetch_farmacias_overpass.py (farmacias_osm.json),
usando a MESMA lógica de conversão de app.js:converterFarmaciaOsm() - para
que o pré-carregado e a busca ao vivo produzam farmácias no mesmo formato.

Uso:
  python fetch_farmacias_overpass.py        (gera farmacias_osm.json)
  python build_farmacias_overpass.py        (regenera js/data.js a partir dele)
"""
import json
import unicodedata
from pathlib import Path

JSON_PATH = Path(__file__).resolve().parent / 'farmacias_osm.json'
OUT = Path(__file__).resolve().parent.parent / 'js' / 'data.js'

REDES_COM_DELIVERY = [
    'droga raia', 'drogasil', 'raia drogasil', 'pague menos', 'panvel',
    'extrafarma', 'ultrafarma', 'drogaria são paulo', 'drogaria sao paulo',
    'nissei', 'farmácias pacheco', 'farmacias pacheco', 'drogaria araujo',
    'big ben', 'drogaria venancio',
]


def normalizar(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode('ascii')
    return s.lower()


def converter(node, cidade_fallback):
    tags = node.get('tags', {})
    nome = tags.get('name')
    if not nome:
        return None
    id_ = 'osm-' + str(node['id'])
    partes_endereco = ', '.join(filter(None, [tags.get('addr:street'), tags.get('addr:housenumber')]))
    nome_rede = normalizar(tags.get('brand') or nome)
    tem_delivery = any(normalizar(rede) in nome_rede for rede in REDES_COM_DELIVERY)

    aberto24h = '24/7' in (tags.get('opening_hours') or '')
    horario = (
        "{ abertura: 0, fechamento: 24, domingoAberto: true, domingoAbertura: 0, domingoFechamento: 24 }"
        if aberto24h else
        "{ abertura: 8, fechamento: 20, domingoAberto: false }"
    )

    # fatorPreco determinístico (mesmo algoritmo de app.js:fatorPrecoDeterministico)
    h = 0
    for ch in id_:
        h = (h * 31 + ord(ch)) & 0xFFFFFFFF
    fator = round(0.88 + (h % 1000) / 1000 * 0.24, 4)

    return {
        'id': id_, 'nome': nome,
        'endereco': partes_endereco or 'Endereço não informado pelo OpenStreetMap',
        'cidade': tags.get('addr:city') or cidade_fallback,
        'cep': tags.get('addr:postcode') or '',
        'bairro': tags.get('addr:suburb') or '',
        'telefone': tags.get('phone') or tags.get('contact:phone'),
        'latitude': node['lat'], 'longitude': node['lon'],
        'horario_raw': horario, 'fatorPreco': fator,
        'possuiDelivery': tem_delivery,
        'entregaEm': '40 min' if tem_delivery else None,
    }


def js_str(v):
    return 'null' if v is None else json.dumps(v, ensure_ascii=False)


dados = json.loads(JSON_PATH.read_text(encoding='utf-8'))
farmacias = [
    converter(node, cidade)
    for cidade, info in dados.items()
    for node in info['farmacias']
]
farmacias = [f for f in farmacias if f]
print('Total farmácias reais pré-carregadas:', len(farmacias))

linhas = [
    '// ==========================================================================',
    '// Banco de Farmácias (pré-carregado)',
    '// Farmácias REAIS (OpenStreetMap/Overpass), usadas como fallback quando a',
    '// busca em tempo real (ver buscarFarmaciasReaisProximas em app.js) falhar.',
    '// Cobre as capitais abaixo; endereço/nome/telefone/coordenadas são reais,',
    '// horário e preço são estimados (ver dadosEstimados / STATUS.md).',
    '// Gerado por scripts/build_farmacias_overpass.py',
    '// ==========================================================================',
    'const BANCO_FARMACIAS = [',
]
for f in farmacias:
    linhas.append(
        "    { id: %s, nome: %s, endereco: %s, cidade: %s, cep: %s, bairro: %s, telefone: %s, "
        "latitude: %s, longitude: %s, horario: %s, fatorPreco: %s, possuiDelivery: %s, entregaEm: %s, dadosEstimados: true },"
        % (
            js_str(f['id']), js_str(f['nome']), js_str(f['endereco']), js_str(f['cidade']),
            js_str(f['cep']), js_str(f['bairro']), js_str(f['telefone']),
            f['latitude'], f['longitude'], f['horario_raw'],
            json.dumps(f['possuiDelivery']), js_str(f['entregaEm']),
        )
    )
linhas[-1] = linhas[-1].rstrip(',')
linhas.append('];')
novo_bloco = '\n'.join(linhas)

conteudo = OUT.read_text(encoding='utf-8')
marcador = '// ==========================================================================\n// Banco de Farmácias'
inicio = conteudo.find(marcador)
if inicio == -1:
    raise SystemExit('Não encontrei o bloco BANCO_FARMACIAS em data.js')
fim = conteudo.find('\n];', inicio)
if fim == -1:
    raise SystemExit('Não encontrei o fim do bloco BANCO_FARMACIAS em data.js')
fim += len('\n];')

OUT.write_text(conteudo[:inicio] + novo_bloco + conteudo[fim:], encoding='utf-8')
print('data.js atualizado.')
