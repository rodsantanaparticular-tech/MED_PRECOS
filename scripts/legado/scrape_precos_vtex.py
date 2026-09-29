# -*- coding: utf-8 -*-
"""
Raspa preços reais de medicamentos nas redes de farmácia que usam a
plataforma VTEX e cujo robots.txt/Termos de Uso permitem (ver STATUS.md
para a checagem feita rede por rede - Droga Raia/Drogasil/Ultrafarma/
Araújo ficam de fora deste script por proibição/bloqueio).

Todas as redes abaixo expõem a API pública de busca da própria vitrine
(a mesma usada pela busca do site, endereçada a qualquer visitante):
  GET /api/catalog_system/pub/products/search/{termo}
Roda como script periódico (não em tempo real) - ver buscarFarmaciasReaisProximas
em app.js pra entender por que isso não pode rodar no navegador do usuário.

Uso: python scrape_precos_vtex.py [--limite N] [--delay SEGUNDOS]
Gera: scripts/precos_vtex.json (entrada para build_precos_redes.py)
"""
import argparse
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

REDES = {
    'paguemenos': 'https://www.paguemenos.com.br',
    'extrafarma': 'https://www.extrafarma.com.br',
    'drogariasaopaulo': 'https://www.drogariasaopaulo.com.br',
    'pacheco': 'https://www.drogariaspacheco.com.br',
    'venancio': 'https://www.drogariavenancio.com.br',
}

DATA_JS = Path(__file__).resolve().parent.parent / 'js' / 'data.js'
OUT = Path(__file__).resolve().parent / 'precos_vtex.json'
HEADERS = {'User-Agent': 'MED_PRECOS-dev/1.0 (comparador de precos, uso nao comercial em MVP)', 'Accept': 'application/json'}


def carregar_termos_busca(limite=None):
    """Extrai os principioAtivo de BANCO_MEDICAMENTOS em data.js (via regex simples,
    sem precisar rodar JS) - um termo de busca por medicamento."""
    texto = DATA_JS.read_text(encoding='utf-8')
    termos = sorted(set(re.findall(r'"principioAtivo":\s*"([^"]+)"', texto)))
    return termos[:limite] if limite else termos


def normalizar_registro(r):
    return re.sub(r'\D', '', str(r or ''))


def buscar_termo(base_url, termo):
    url = base_url + '/api/catalog_system/pub/products/search/' + urllib.parse.quote(termo)
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f'    erro em {base_url}: {e}')
        return None


# Nomes de programa que as lojas preenchem mas que não significam nada pro
# consumidor (placeholder da loja ou nome da empresa administradora/autorizadora,
# não do programa do laboratório) - descartados na hora de exibir.
PROGRAMAS_GENERICOS = {'programa pbm - industria', 'logixpharma', 'seven', 'sevenpdv', 'vidalink', 'epharma', 'funcional'}


def _primeiro(p, *campos):
    for c in campos:
        v = p.get(c)
        if isinstance(v, list) and v and str(v[0]).strip():
            return str(v[0]).strip()
    return None


def extrair_pbm(p):
    """Programa de desconto do laboratório (PBM: preço menor com cadastro de CPF).
    Cada loja VTEX usa campos customizados próprios, observados em 2026-09-29:
      - Pague Menos / Extrafarma: PBM=Sim|Não, DescontoPBM, MenorPrecoPBM, ProgramaPBM (genérico)
      - Drogaria São Paulo: 'Programa PBM' (nome real, ex. "Bayer pra você"), 'Desconto PBM'
      - Pacheco: 'PBM Programa' / 'PBM Autorizadora' (só nome da administradora)
      - Venancio: PBM=Sim
    Retorna None quando o produto não participa (ou a loja diz 'Não')."""
    marcador = _primeiro(p, 'PBM')
    programa = _primeiro(p, 'Programa PBM', 'ProgramaPBM', 'PBM Programa')
    if marcador and marcador.lower() in ('não', 'nao'):
        return None
    if not marcador and not programa:
        return None
    try:
        desconto = float((_primeiro(p, 'Desconto PBM', 'DescontoPBM') or '').replace(',', '.'))
    except ValueError:
        desconto = None
    try:
        preco_min = float((_primeiro(p, 'MenorPrecoPBM') or '').replace(',', '.'))
    except ValueError:
        preco_min = None
    if programa and programa.lower() in PROGRAMAS_GENERICOS:
        programa = None
    return {
        'programa': programa,
        'desconto': desconto if desconto and desconto > 0 else None,
        'precoMin': preco_min if preco_min and preco_min > 0 else None,
    }


def extrair_precos(produtos):
    """De uma resposta de busca VTEX, extrai uma lista de produtos com preço.
    Nem toda loja VTEX preenche NumeroRegistroMS (campo customizado por conta) -
    por isso 'registro' pode vir vazio; nesse caso o casamento cai pro nome do
    produto, feito depois em build_precos_redes.py."""
    resultado = []
    for p in produtos or []:
        registros = [normalizar_registro(r) for r in (p.get('NumeroRegistroMS') or [])]
        registros = [r for r in registros if r]
        items = p.get('items') or []
        if not items:
            continue
        melhor = None
        for item in items:
            for seller in item.get('sellers', []):
                oferta = seller.get('commertialOffer', {})
                preco = oferta.get('Price')
                disponivel = oferta.get('IsAvailable', False)
                if preco and (melhor is None or preco < melhor['preco']):
                    melhor = {'preco': preco, 'disponivel': disponivel}
        if not melhor:
            continue
        resultado.append({
            'registros': registros,
            'nome': p.get('productName'),
            'preco': melhor['preco'],
            'disponivel': melhor['disponivel'],
            'url': p.get('link'),
            'pbm': extrair_pbm(p),
        })
    return resultado


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--limite', type=int, default=None, help='Limita a N termos de busca (útil pra testar rápido)')
    ap.add_argument('--delay', type=float, default=0.4, help='Segundos de espera entre requisições (educado com a API pública)')
    args = ap.parse_args()

    termos = carregar_termos_busca(args.limite)
    print(f'{len(termos)} termos de busca (princípios ativos), {len(REDES)} redes')

    resultado = json.loads(OUT.read_text(encoding='utf-8')) if OUT.exists() else {}
    for rede in REDES:
        resultado.setdefault(rede, {})  # chave: url do produto (dedup natural)

    for i, termo in enumerate(termos, 1):
        print(f'[{i}/{len(termos)}] {termo}')
        for rede, base_url in REDES.items():
            dados = buscar_termo(base_url, termo)
            if dados is None:
                continue
            for produto in extrair_precos(dados):
                chave = produto.get('url') or produto.get('nome')
                if chave:
                    resultado[rede][chave] = produto
            time.sleep(args.delay)

    OUT.write_text(json.dumps(resultado, ensure_ascii=False, indent=2), encoding='utf-8')
    print('OK, salvo em', OUT)
    for rede, precos in resultado.items():
        print(' ', rede, '->', len(precos), 'produtos com preço')


if __name__ == '__main__':
    main()
