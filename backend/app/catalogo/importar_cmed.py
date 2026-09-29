"""
Importa a lista oficial de preços CMED/ANVISA (arquivo "site": PF + PMC) para
`produtos_cmed` (âncora, uma linha por apresentação/GGREM) e reconstrói os
grupos por princípio ativo em `medicamentos`.

Porte de scripts/legado/build_data_cmed.py, com duas mudanças de propósito:
  - guarda TODAS as apresentações (antes: só 760 princípios ativos que tinham
    alternativa mais barata), com EAN, registro e PMC de todas as alíquotas;
  - acha e baixa sozinho o arquivo do mês (antes era manual).

Idempotente: rodar de novo com a mesma planilha não muda nada; com uma
planilha nova, atualiza preços, cria apresentações novas e marca como
inativas (ativo=False) as que saíram da lista - nunca apaga (os SKUs das
redes continuam apontando pra elas).
"""
import logging
import re
from collections import defaultdict
from datetime import date, datetime
from pathlib import Path

import httpx
import openpyxl
from sqlalchemy import select, update
from sqlalchemy.orm import Session

from ..config import obter_config
from ..matching.normalizacao import chave_cmed, normalizar, slug, so_digitos
from ..models import Medicamento, ProdutoCmed
from .enriquecimento import classe_limpa, derivar_sinonimias, descricao_amigavel

log = logging.getLogger(__name__)

URL_API_CMED = 'https://www.gov.br/anvisa/++api++/pt-br/assuntos/medicamentos/cmed/precos'
RE_ARQUIVO_SITE = re.compile(
    r'https://www\.gov\.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/arquivos/'
    r'xls_conformidade_site_(\d{8})_\d+\.xlsx/@@download/file')
MAX_ALTERNATIVAS = 6
TIPOS_REFERENCIA = ('Novo', 'Biológico')


def url_arquivo_mais_recente() -> str:
    """O site da CMED é renderizado em JS; a API do Plone devolve o JSON da página com os links."""
    r = httpx.get(URL_API_CMED, headers={'Accept': 'application/json'}, timeout=30, follow_redirects=True)
    r.raise_for_status()
    links = {m.group(0): m.group(1) for m in RE_ARQUIVO_SITE.finditer(r.text)}
    if not links:
        raise RuntimeError('Não achei o link do arquivo "site" da CMED na página oficial')
    return max(links, key=links.get)  # a data no nome do arquivo = mais recente


def baixar_planilha(url: str | None = None) -> Path:
    url = url or url_arquivo_mais_recente()
    nome = url.split('/arquivos/')[1].split('/@@')[0]
    destino = obter_config().dados_dir / 'cmed' / nome
    if destino.exists():
        log.info('Planilha já baixada: %s', destino)
        return destino
    destino.parent.mkdir(parents=True, exist_ok=True)
    log.info('Baixando %s', url)
    with httpx.stream('GET', url, timeout=120, follow_redirects=True) as r:
        r.raise_for_status()
        with open(destino.with_suffix('.parcial'), 'wb') as f:
            for bloco in r.iter_bytes():
                f.write(bloco)
    destino.with_suffix('.parcial').rename(destino)
    return destino


def _float_br(v) -> float | None:
    if v is None:
        return None
    if isinstance(v, (int, float)):
        return float(v)
    v = str(v).strip()
    if not v or v == '-':
        return None
    try:
        return float(v.replace('.', '').replace(',', '.'))
    except ValueError:
        return None


def _ean(v) -> str | None:
    d = so_digitos(v)
    return d if 8 <= len(d) <= 14 else None


def _titulo(s: str) -> str:
    return ' '.join(w.capitalize() if len(w) > 2 else w.lower() for w in (s or '').split())


def ler_planilha(caminho: Path) -> tuple[date | None, list[dict]]:
    wb = openpyxl.load_workbook(caminho, read_only=True, data_only=True)
    ws = wb.active
    publicada_em, col, linhas = None, None, []
    for row in ws.iter_rows(values_only=True):
        if col is None:
            primeira = str(row[0] or '')
            m = re.search(r'Publicada em (\d{2})/(\d{2})/(\d{4})', primeira)
            if m:
                publicada_em = date(int(m.group(3)), int(m.group(2)), int(m.group(1)))
            if primeira.strip().upper() == 'SUBSTÂNCIA':
                col = {str(h).strip(): i for i, h in enumerate(row) if h}
            continue
        if not row[col['SUBSTÂNCIA']]:
            continue
        linhas.append({h: row[i] for h, i in col.items()})
    wb.close()
    if col is None:
        raise RuntimeError(f'Cabeçalho "SUBSTÂNCIA" não encontrado em {caminho}')
    return publicada_em, linhas


def _linha_para_campos(l: dict, publicada_em: date | None) -> dict:
    tipo = (l.get('TIPO DE PRODUTO (STATUS DO PRODUTO)') or '').strip()
    pmc = {k.removeprefix('PMC ').strip(): _float_br(v) for k, v in l.items() if k.startswith('PMC ')}
    pf = {k.removeprefix('PF ').strip(): _float_br(v) for k, v in l.items() if k.startswith('PF ')}
    pmc = {k: v for k, v in pmc.items() if v}
    pf = {k: v for k, v in pf.items() if v}
    referencia = pmc.get('12 %') if tipo == 'Genérico' else pmc.get('18 %')
    apresentacao = str(l.get('APRESENTAÇÃO') or '').replace('\xa0', ' ').strip()
    return dict(
        registro=so_digitos(l.get('REGISTRO')),
        ean1=_ean(l.get('EAN 1')), ean2=_ean(l.get('EAN 2')), ean3=_ean(l.get('EAN 3')),
        substancia=str(l['SUBSTÂNCIA']).strip(),
        produto=str(l.get('PRODUTO') or '').strip(),
        laboratorio=str(l.get('LABORATÓRIO') or '').strip(),
        cnpj=str(l.get('CNPJ') or '').strip(),
        apresentacao=apresentacao,
        classe_terapeutica=str(l.get('CLASSE TERAPÊUTICA') or '').strip(),
        tipo_produto=tipo,
        regime_preco=str(l.get('REGIME DE PREÇO') or '').strip(),
        tarja=str(l.get('TARJA') or '').strip(),
        restricao_hospitalar=str(l.get('RESTRIÇÃO HOSPITALAR') or '').strip().lower() == 'sim',
        pf_por_aliquota=pf, pmc_por_aliquota=pmc,
        pmc_referencia=referencia,
        chave_apresentacao=chave_cmed(apresentacao),
        lista_publicada_em=publicada_em,
    )


def importar(s: Session, caminho: Path | None = None) -> dict:
    caminho = caminho or baixar_planilha()
    publicada_em, linhas = ler_planilha(caminho)
    log.info('%s: %d apresentações, publicada em %s', caminho.name, len(linhas), publicada_em)

    existentes = {p.ggrem: p for p in s.scalars(select(ProdutoCmed))}
    medicamentos = {m.id: m for m in s.scalars(select(Medicamento))}
    vistos, novos, atualizados = set(), 0, 0
    por_substancia: dict[str, list[ProdutoCmed]] = defaultdict(list)

    for l in linhas:
        ggrem = so_digitos(l.get('CÓDIGO GGREM'))
        if not ggrem or ggrem in vistos:
            continue
        vistos.add(ggrem)
        campos = _linha_para_campos(l, publicada_em)
        med_id = slug(campos['substancia'])
        if med_id not in medicamentos:
            medicamentos[med_id] = Medicamento(id=med_id, principio_ativo=_titulo(campos['substancia']), nome='')
            s.add(medicamentos[med_id])
        p = existentes.get(ggrem)
        if p is None:
            p = ProdutoCmed(ggrem=ggrem, medicamento_id=med_id, ativo=True, **campos)
            s.add(p)
            novos += 1
        else:
            mudou = any(getattr(p, k) != v for k, v in campos.items()) or not p.ativo or p.medicamento_id != med_id
            for k, v in campos.items():
                setattr(p, k, v)
            p.medicamento_id, p.ativo = med_id, True
            atualizados += mudou
        por_substancia[med_id].append(p)

    s.flush()
    saiu = [g for g in existentes if g not in vistos]
    if saiu:
        s.execute(update(ProdutoCmed).where(ProdutoCmed.ggrem.in_(saiu)).values(ativo=False))

    for med_id, produtos in por_substancia.items():
        _reconstruir_grupo(medicamentos[med_id], produtos)

    resumo = dict(arquivo=caminho.name, publicada_em=str(publicada_em), apresentacoes=len(vistos),
                  novas=novos, atualizadas=atualizados, inativadas=len(saiu), medicamentos=len(por_substancia))
    log.info('Importação CMED: %s', resumo)
    return resumo


def _reconstruir_grupo(med: Medicamento, produtos: list[ProdutoCmed]) -> None:
    """Escolhe o produto de referência do princípio ativo e as alternativas mais
    baratas. Preço de cada produto = apresentação mais barata.

    Referência = produto Novo/Biológico com MAIS apresentações vendidas em
    farmácia (a marca mais presente: Tylenol pro paracetamol), desempate pelo
    preço. A regra antiga ("o Novo mais caro") escolhia coisas como Sonridor
    (1 apresentação efervescente de R$ 99) como a cara do paracetamol.
    Apresentações de uso só hospitalar são ignoradas quando o grupo tem outras."""
    med.so_hospitalar = all(p.restricao_hospitalar for p in produtos)
    vendaveis = [p for p in produtos if not p.restricao_hospitalar] or produtos

    por_produto: dict[str, dict] = {}
    for p in vendaveis:
        if not p.pmc_referencia:
            continue
        chave = normalizar(p.produto)  # a CMED grafa o mesmo produto com/sem acento
        info = por_produto.setdefault(chave, {'nome': p.produto, 'tipo': p.tipo_produto, 'preco': p.pmc_referencia,
                                              'classe': p.classe_terapeutica, 'n': 0})
        info['preco'] = min(info['preco'], p.pmc_referencia)
        info['n'] += 1

    classe = next((p.classe_terapeutica for p in produtos if p.classe_terapeutica), '')
    itens = list(por_produto.values())
    if not itens:
        med.nome = _titulo(produtos[0].produto)
        med.preco_referencia, med.alternativas = None, []
    else:
        # Sem Novo/Biológico (ex.: omeprazol), a marca não genérica mais presente
        # faz o papel de referência; genérico só se não houver outra opção
        candidatos = ([i for i in itens if i['tipo'] in TIPOS_REFERENCIA]
                      or [i for i in itens if i['tipo'] != 'Genérico'] or itens)
        referencia = max(candidatos, key=lambda i: (i['n'], i['preco']))
        alternativas = sorted((i for i in itens if i is not referencia and i['preco'] < referencia['preco']),
                              key=lambda i: i['preco'])
        med.nome = _titulo(referencia['nome'])
        med.preco_referencia = round(referencia['preco'], 2)
        med.alternativas = [{'nome': _titulo(a['nome']), 'precoBase': round(a['preco'], 2)}
                            for a in alternativas[:MAX_ALTERNATIVAS]]
        classe = referencia['classe'] or classe

    med.classe_terapeutica = classe_limpa(classe)
    med.descricao = descricao_amigavel(med.classe_terapeutica)
    marcas = sorted({_titulo(p.produto) for p in produtos})
    med.sinonimias = derivar_sinonimias(med.nome, med.principio_ativo, [a['nome'] for a in med.alternativas], marcas)
    med.atualizado_em = datetime.utcnow()
