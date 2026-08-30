# -*- coding: utf-8 -*-
"""
Gera js/data.js do MED_PRECOS a partir da lista oficial de preços CMED (ANVISA).

Fonte oficial (o link exato muda a cada publicação, veja como obter abaixo):
  https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos
  -> arquivo "site" (traz PF + PMC; existe também um arquivo "gov" com PF + PMVG, não é este).

Como conseguir a URL atual do arquivo (o site é renderizado em JS, o link não aparece
direto na página HTML):
  curl -s -H "Accept: application/json" \
    "https://www.gov.br/anvisa/++api++/pt-br/assuntos/medicamentos/cmed/precos" \
    | grep -oE 'https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/arquivos/xls_conformidade_site_[0-9_]*\.xlsx/@@download/file'

Regra de preço (aproximação documentada, ver STATUS.md):
- Produtos com TIPO DE PRODUTO = "Genérico" -> coluna "PMC 12 %" (alíquota SP/MG p/ genéricos)
- Demais produtos -> coluna "PMC 18 %" (alíquota ICMS padrão de SP)
Isso é uma referência única nacional para o MVP; preço real varia por UF (ver STATUS.md).

Uso: python build_data_cmed.py caminho/para/cmed_precos_site.xlsx
(baixe o .xlsx manualmente primeiro, usando o comando curl acima para achar a URL do mês)
"""
import json
import re
import sys
import unicodedata
from pathlib import Path
import openpyxl

if len(sys.argv) < 2:
    print("Uso: python build_data_cmed.py caminho/para/cmed_precos_site.xlsx")
    sys.exit(1)

SRC = sys.argv[1]
OUT = str(Path(__file__).resolve().parent.parent / 'js' / 'data.js')

MAX_GENERICOS = 6
MAX_APRESENTACOES = 4

def slugify(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode('ascii')
    s = re.sub(r'[^a-zA-Z0-9]+', '-', s).strip('-').lower()
    return s

def to_float(v):
    if v is None:
        return None
    if isinstance(v, (int, float)):
        return float(v)
    v = str(v).strip()
    if not v or v == '-':
        return None
    v = v.replace('.', '').replace(',', '.')
    try:
        return float(v)
    except ValueError:
        return None

def titlecase_pt(s):
    # Capitaliza mantendo siglas curtas comuns em maiúsculas quando fizer sentido é complexo;
    # aqui fazemos um title-case simples, adequado para nomes de princípio ativo/produto.
    return ' '.join(w.capitalize() if len(w) > 2 else w.lower() for w in s.split())

wb = openpyxl.load_workbook(SRC, read_only=True, data_only=True)
ws = wb.active

HEADER_ROW = 42  # linha 42 = cabeçalho (dados começam na 43)
headers = None
groups = {}  # substancia -> dict(produto -> {tipo, precos: [...], apresentacoes:set, classe})

col = {}

for i, row in enumerate(ws.iter_rows(min_row=HEADER_ROW, values_only=True), start=HEADER_ROW):
    if i == HEADER_ROW:
        headers = row
        for idx, h in enumerate(headers):
            if h:
                col[h.strip()] = idx
        continue
    substancia = row[col['SUBSTÂNCIA']]
    if not substancia:
        continue
    produto = row[col['PRODUTO']]
    tipo = row[col['TIPO DE PRODUTO (STATUS DO PRODUTO)']] or ''
    apresentacao = row[col['APRESENTAÇÃO']] or ''
    classe = row[col['CLASSE TERAPÊUTICA']] or ''
    laboratorio = row[col['LABORATÓRIO']] or ''
    registro = row[col['REGISTRO']] or ''

    pmc_col = 'PMC 12 %' if tipo == 'Genérico' else 'PMC 18 %'
    preco = to_float(row[col[pmc_col]])
    if preco is None or preco <= 0:
        continue

    g = groups.setdefault(substancia, {})
    p = g.setdefault(produto, {'tipo': tipo, 'precos': [], 'apresentacoes': set(), 'classe': classe, 'laboratorio': laboratorio, 'registros': set()})
    p['precos'].append(preco)
    if apresentacao:
        p['apresentacoes'].add(apresentacao)
    if registro:
        p['registros'].add(str(registro))

medicamentos = []
seq = 0
for substancia, produtos in groups.items():
    # preço mínimo por produto (apresentação mais barata "a partir de")
    items = []
    for nome_produto, info in produtos.items():
        preco_min = min(info['precos'])
        items.append({
            'nome': nome_produto,
            'tipo': info['tipo'],
            'preco': preco_min,
            'apresentacoes': sorted(info['apresentacoes'])[:MAX_APRESENTACOES],
            'classe': info['classe'],
            'registros': sorted(info['registros']),
        })
    if not items:
        continue

    referencia = None
    for it in items:
        if it['tipo'] in ('Novo', 'Biológico'):
            if referencia is None or it['preco'] > referencia['preco']:
                referencia = it
    if referencia is None:
        referencia = max(items, key=lambda x: x['preco'])

    alternativas = [it for it in items if it['nome'] != referencia['nome']]
    alternativas.sort(key=lambda x: x['preco'])
    alternativas = alternativas[:MAX_GENERICOS]

    if not alternativas:
        continue  # sem alternativa mais barata, não é útil pro comparador

    seq += 1
    classe_texto = referencia['classe'] or (alternativas[0]['classe'] if alternativas else '')
    descricao = classe_texto.split(' - ', 1)[-1].strip().capitalize() if classe_texto else ''

    medicamentos.append({
        'id': f'med-{seq:05d}',
        'nome': titlecase_pt(referencia['nome']),
        'principioAtivo': titlecase_pt(substancia),
        'descricao': descricao,
        'apresentacoes': referencia['apresentacoes'] or (alternativas[0]['apresentacoes'] if alternativas else []),
        'registrosAnvisa': referencia['registros'],  # p/ casar com preço real raspado (ver scripts/scrape_precos_vtex.py)
        'genericos': [
            {
                'nome': titlecase_pt(a['nome']),
                'precoBase': round(a['preco'], 2),
                'registrosAnvisa': a['registros'],
            }
            for a in alternativas
        ],
        'precoReferencia': round(referencia['preco'], 2),
        'sinonimias': [],
    })

medicamentos.sort(key=lambda m: m['principioAtivo'])
for i, m in enumerate(medicamentos, start=1):
    m['id'] = f'med-{i:05d}'

print('Total de medicamentos gerados:', len(medicamentos))

js_array = json.dumps(medicamentos, ensure_ascii=False, indent=4)

header = '''/**
 * MED_PRECOS - Banco de dados REAL de medicamentos
 * Fonte: Lista de Preços CMED (ANVISA) - arquivo "site" (PF + PMC por alíquota de ICMS)
 * https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos
 * Publicada em: 11/08/2026 | Gerado em: 18/08/2026
 *
 * IMPORTANTE - aproximação de preço (ver STATUS.md para detalhes):
 * PMC (Preço Máximo ao Consumidor) varia por UF conforme alíquota de ICMS.
 * Este arquivo usa uma referência única nacional:
 *   - Produtos "Genérico" -> coluna PMC 12% (alíquota reduzida SP/MG p/ genéricos)
 *   - Demais produtos     -> coluna PMC 18% (alíquota padrão SP)
 * Preço real ao consumidor pode variar (para mais ou para menos) conforme o estado.
 * BANCO_FARMACIAS abaixo permanece mock (geo-referenciamento real ainda pendente).
 */

const BANCO_MEDICAMENTOS = '''

with open(OUT, 'r', encoding='utf-8') as f:
    conteudo_atual = f.read()

marker = '// =========================================================================='
idx_farmacias = conteudo_atual.find('// Banco de Farmácias')
# Recua até o comentário de bloco anterior a "Banco de Farmácias"
idx_bloco = conteudo_atual.rfind(marker, 0, idx_farmacias)
resto = conteudo_atual[idx_bloco:]

novo_conteudo = header + js_array + ';\n\n' + resto

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(novo_conteudo)

print('Escrito em', OUT)
print('Tamanho do novo arquivo (bytes):', len(novo_conteudo.encode('utf-8')))

# Camada de enriquecimento (descricao amigavel + sinonimias) - roda por cima do
# data.js recem-gerado. Fica em JS pra ter uma unica fonte das regras; ver
# scripts/enriquecimento-medicamentos.js. Sem 'node' no PATH, so avisa.
import shutil
import subprocess

if shutil.which('node'):
    print('\nAplicando enriquecimento (node scripts/aplicar-enriquecimento.js)...')
    r = subprocess.run(
        ['node', str(Path(__file__).resolve().parent / 'aplicar-enriquecimento.js')],
        capture_output=True, text=True,
    )
    print(r.stdout, end='')
    if r.returncode != 0:
        print(r.stderr, end='')
        print('AVISO: enriquecimento falhou; data.js ficou so com a classe CMED crua.')
else:
    print('\nAVISO: "node" nao encontrado no PATH - pulei o enriquecimento.')
    print('Rode manualmente depois: node scripts/aplicar-enriquecimento.js')
