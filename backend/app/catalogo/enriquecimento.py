"""
Enriquecimento do catálogo: descrição em português simples (por regra sobre a
classe terapêutica CMED) e sinônimos para a busca por nome/voz.

Porte para Python de scripts/legado/enriquecimento-medicamentos.js. As regras e
o dicionário curado ficam em dados/enriquecimento.json (exportados do JS
original, que tinha ~120 regras e ~130 princípios ativos curados) - editar lá.

Nada aqui é conselho médico: as frases descrevem, em linhas gerais, para que
serve a CLASSE do medicamento.
"""
import json
import re
from functools import lru_cache
from pathlib import Path

_ARQUIVO = Path(__file__).resolve().parent / 'dados' / 'enriquecimento.json'
MAX_SINONIMOS = 12


def _norm(s: str | None) -> str:
    import unicodedata
    t = unicodedata.normalize('NFD', str(s or '')).encode('ascii', 'ignore').decode('ascii')
    return re.sub(r'\s+', ' ', t.lower()).strip()


@lru_cache
def _dados() -> dict:
    d = json.loads(_ARQUIVO.read_text(encoding='utf-8'))
    d['regras'] = [(re.compile(r['regex']), r['texto']) for r in d['regras_descricao']]
    d['stopwords'] = set(d['stopwords_sinonimo'])
    return d


def classe_limpa(classe_cmed: str | None) -> str:
    """ "D7B2 - CORTICOESTERÓIDES ASSOCIADOS" -> "Corticoesteróides associados" """
    if not classe_cmed:
        return ''
    return classe_cmed.split(' - ', 1)[-1].strip().capitalize()


def descricao_amigavel(classe: str) -> str:
    c = _norm(classe)
    if not c:
        return ''
    for regex, texto in _dados()['regras']:
        if regex.search(c):
            return texto
    return f'Medicamento da classe "{classe}". Consulte a bula e um profissional de saúde para o uso correto.'


def derivar_sinonimias(nome: str, principio_ativo: str, nomes_alternativas: list[str], marcas_extras: list[str] = ()) -> list[str]:
    d = _dados()
    stop = d['stopwords']
    vistos: dict[str, str] = {}
    nome_n, pa_n = _norm(nome), _norm(principio_ativo)

    def add(valor: str):
        v = re.sub(r'\s*\([^)]*\)\s*', ' ', valor or '').strip()
        vn = _norm(v)
        if not vn or len(vn) < 3 or vn in (nome_n, pa_n) or vn in stop:
            return
        vistos.setdefault(vn, v)

    # 1) curados (igualdade ou prefixo do princípio ativo)
    for chave, lista in d['sinonimos_curados'].items():
        if pa_n == chave or pa_n.startswith(chave + ' ') or pa_n.startswith(chave + ';'):
            for s in lista:
                add(s)

    # 2) componentes do princípio ativo
    partes = [p.strip() for p in re.split(r';|\+|,| e ', principio_ativo, flags=re.I) if p.strip()]
    if len(partes) > 1:
        for p in partes:
            add(p)
    else:
        palavras = [w for w in principio_ativo.split() if w and _norm(w) not in stop]
        if palavras:
            add(palavras[-1])

    # 3) nomes das alternativas (mesmo princípio ativo = sinônimo de marca)
    for n in list(nomes_alternativas) + list(marcas_extras):
        add(n)

    return list(vistos.values())[:MAX_SINONIMOS]
