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
from ..matching.normalizacao import chave_cmed, normalizar, slug, so_digitos, substancia_canonica
from ..models import MapeamentoSkuRede, Medicamento, ProdutoCmed
from .enriquecimento import classe_limpa, derivar_sinonimias, descricao_amigavel, laboratorio_amigavel

log = logging.getLogger(__name__)

URL_API_CMED = 'https://www.gov.br/anvisa/++api++/pt-br/assuntos/medicamentos/cmed/precos'
# O nome do arquivo com PMC (preço máximo ao consumidor) muda de tempos em tempos:
# "xls_conformidade_site_AAAAMMDD_..." até 09/2026, "lista_PMC_AAAAMMDD_..." desde 23/09/2026.
# (O arquivo "PMVG"/"gov" é o de compras públicas - não é este.)
RE_ARQUIVO_SITE = re.compile(
    r'https://www\.gov\.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/arquivos/'
    r'(?:xls_conformidade_site|lista_PMC)_(\d{8})_\d+\.xlsx/@@download/file')
MAX_ALTERNATIVAS = 6
TIPOS_REFERENCIA = ('Novo', 'Biológico')


# PDF da mesma publicação: dele dá pra deduzir o nome da planilha quando a página só lista o PDF
RE_PDF_SITE = re.compile(
    r'https://www\.gov\.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/arquivos/'
    r'pdf_conformidade_site_(\d{8}_\d+)\.pdf/@@download/file')


def urls_candidatas() -> list[str]:
    """Links de planilha PMC na página oficial, do mais recente pro mais antigo.
    O site da CMED é renderizado em JS; a API do Plone devolve o JSON da página com os links.
    Em 30/09/2026 a página passou a apontar pra "lista_PMC_20260923..." QUEBRADO (404) e deixou
    de listar a planilha de 09/09 (só o PDF dela) - por isso a lista de candidatas + dedução."""
    r = httpx.get(URL_API_CMED, headers={'Accept': 'application/json'}, timeout=30, follow_redirects=True)
    r.raise_for_status()
    links = {m.group(0): m.group(1) for m in RE_ARQUIVO_SITE.finditer(r.text)}
    base = 'https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/arquivos/'
    for m in RE_PDF_SITE.finditer(r.text):
        links.setdefault(f'{base}xls_conformidade_site_{m.group(1)}.xlsx/@@download/file', m.group(1)[:8])
    return sorted(links, key=links.get, reverse=True)


def url_arquivo_mais_recente() -> str:
    candidatas = urls_candidatas()
    if not candidatas:
        raise RuntimeError('Não achei o link da planilha de preços (PMC) na página oficial da CMED')
    return candidatas[0]


def _baixar(url: str) -> Path:
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


def baixar_planilha(url: str | None = None) -> Path:
    """Baixa a planilha mais recente que de fato existe. Link quebrado no site do governo
    (acontece) é pulado; sem nenhum link válido, usa a última planilha já baixada."""
    if url:
        return _baixar(url)
    erros = []
    try:
        candidatas = urls_candidatas()
    except httpx.HTTPError as e:
        candidatas, erros = [], [f'página da CMED: {e}']
    for candidata in candidatas:
        try:
            return _baixar(candidata)
        except httpx.HTTPStatusError as e:
            erros.append(f'{candidata.split("/arquivos/")[1]}: HTTP {e.response.status_code}')
            log.warning('Link da CMED quebrado, tentando o anterior: %s', erros[-1])
    locais = sorted((obter_config().dados_dir / 'cmed').glob('*.xlsx'),
                    key=lambda p: re.search(r'_(\d{8})_', p.name).group(1) if re.search(r'_(\d{8})_', p.name) else '')
    if locais:
        log.warning('Nenhum link da CMED baixou (%s); usando a última planilha local: %s', erros, locais[-1].name)
        return locais[-1]
    raise RuntimeError(f'Nenhuma planilha da CMED disponível: {erros}')


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
    mudou_grupo: dict[str, str] = {}   # id antigo -> id novo (regra de agrupamento mudou)
    por_substancia: dict[str, list[ProdutoCmed]] = defaultdict(list)

    for l in linhas:
        ggrem = so_digitos(l.get('CÓDIGO GGREM'))
        if not ggrem or ggrem in vistos:
            continue
        vistos.add(ggrem)
        campos = _linha_para_campos(l, publicada_em)
        med_id = slug(substancia_canonica(campos['substancia']))
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
            if p.medicamento_id != med_id:
                mudou_grupo[p.medicamento_id] = med_id
            p.medicamento_id, p.ativo = med_id, True
            atualizados += mudou
        por_substancia[med_id].append(p)

    s.flush()
    saiu = [g for g in existentes if g not in vistos]
    if saiu:
        s.execute(update(ProdutoCmed).where(ProdutoCmed.ggrem.in_(saiu)).values(ativo=False))
        for g in saiu:   # inativas acompanham a regra de agrupamento, se o grupo novo existe
            p = existentes[g]
            novo = slug(substancia_canonica(p.substancia))
            if novo != p.medicamento_id and novo in medicamentos:
                mudou_grupo[p.medicamento_id] = novo
                p.medicamento_id = novo

    for med_id, produtos in por_substancia.items():
        _reconstruir_grupo(medicamentos[med_id], produtos)

    fundidos = _fundir_grupos(s, mudou_grupo)
    resumo = dict(arquivo=caminho.name, publicada_em=str(publicada_em), apresentacoes=len(vistos),
                  novas=novos, atualizadas=atualizados, inativadas=len(saiu), medicamentos=len(por_substancia),
                  grupos_fundidos=fundidos)
    log.info('Importação CMED: %s', resumo)
    return resumo


def _fundir_grupos(s: Session, mudou_grupo: dict[str, str]) -> int:
    """Quando a regra de agrupamento junta grupos (ex.: "dipirona-monoidratada" -> "dipirona"),
    os SKUs das redes passam pro grupo novo e o grupo antigo, se ficou sem nenhuma
    apresentação, é apagado (senão apareceria vazio na busca)."""
    removidos = 0
    for antigo, novo in mudou_grupo.items():
        s.execute(update(MapeamentoSkuRede).where(MapeamentoSkuRede.medicamento_id == antigo)
                  .values(medicamento_id=novo))
    s.flush()
    for antigo in mudou_grupo:
        if s.scalar(select(ProdutoCmed.ggrem).where(ProdutoCmed.medicamento_id == antigo).limit(1)) is None:
            med = s.get(Medicamento, antigo)
            if med is not None:
                s.delete(med)
                removidos += 1
    if mudou_grupo:
        log.info('Grupos fundidos: %s', mudou_grupo)
    return removidos


def _principio_ativo(produtos: list[ProdutoCmed]) -> str:
    """Nome de exibição do grupo: a grafia mais curta da CMED ("Dipirona", e não
    "Dipirona Monoidratada"), desempate pela mais frequente."""
    contagem: dict[str, int] = defaultdict(int)
    for p in produtos:
        contagem[p.substancia.strip()] += 1
    return _titulo(min(contagem, key=lambda sub: (len(sub), -contagem[sub], sub)))


def _reconstruir_grupo(med: Medicamento, produtos: list[ProdutoCmed]) -> None:
    """Escolhe o produto de referência do princípio ativo e as alternativas mais
    baratas. Preço de cada produto = apresentação mais barata.

    Referência = produto Novo/Biológico com MAIS apresentações vendidas em
    farmácia (a marca mais presente: Tylenol pro paracetamol), desempate pelo
    preço. A regra antiga ("o Novo mais caro") escolhia coisas como Sonridor
    (1 apresentação efervescente de R$ 99) como a cara do paracetamol.
    Apresentações de uso só hospitalar são ignoradas quando o grupo tem outras."""
    med.principio_ativo = _principio_ativo(produtos)
    med.so_hospitalar = all(p.restricao_hospitalar for p in produtos)
    vendaveis = [p for p in produtos if not p.restricao_hospitalar] or produtos

    por_produto: dict[str, dict] = {}
    for p in vendaveis:
        if not p.pmc_referencia:
            continue
        chave = normalizar(p.produto)  # a CMED grafa o mesmo produto com/sem acento
        info = por_produto.setdefault(chave, {'nome': p.produto, 'tipo': p.tipo_produto, 'preco': p.pmc_referencia,
                                              'classe': p.classe_terapeutica, 'n': 0, 'laboratorio': p.laboratorio})
        if p.pmc_referencia <= info['preco']:   # laboratório da apresentação mais barata do produto
            info['preco'], info['laboratorio'] = p.pmc_referencia, p.laboratorio
        info['n'] += 1

    classe = next((p.classe_terapeutica for p in produtos if p.classe_terapeutica), '')
    itens = list(por_produto.values())
    if not itens:
        med.nome = _titulo(produtos[0].produto)
        med.laboratorio = laboratorio_amigavel(produtos[0].laboratorio)
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
        med.laboratorio = laboratorio_amigavel(referencia['laboratorio'])
        med.preco_referencia = round(referencia['preco'], 2)
        med.alternativas = [{'nome': _titulo(a['nome']), 'precoBase': round(a['preco'], 2),
                             'laboratorio': laboratorio_amigavel(a['laboratorio'])}
                            for a in alternativas[:MAX_ALTERNATIVAS]]
        classe = referencia['classe'] or classe

    med.classe_terapeutica = classe_limpa(classe)
    med.descricao = descricao_amigavel(med.classe_terapeutica)
    marcas = sorted({_titulo(p.produto) for p in produtos})
    med.sinonimias = derivar_sinonimias(med.nome, med.principio_ativo, [a['nome'] for a in med.alternativas], marcas)
    med.atualizado_em = datetime.utcnow()
