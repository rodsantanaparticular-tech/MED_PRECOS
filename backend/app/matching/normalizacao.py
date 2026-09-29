"""
Normalização de texto e extração de "apresentação comparável" (dose + quantidade).

A CMED descreve a apresentação em jargão regulatório:
    "(20 + 12,5) MG COM REV CT BL AL AL X 60"
    "5 MG/ML SOL OR CT FR VD AMB X 120 ML"
e as redes, em linguagem de vitrine:
    "Olmesartana 20mg + Hidroclorotiazida 12,5mg 60 Comprimidos Revestidos"
    "Acebrofilina 25mg/5ml Xarope 120ml"
As duas viram a MESMA chave ("12.5mg+20mg|60", "5mg/ml|120ml"), o que permite
comparar preço de igual pra igual entre farmácias (e não 10 comprimidos numa
contra 28 na outra).
"""
import re
import unicodedata

_RE_NAO_ALFANUM = re.compile(r'[^a-z0-9]+')


def normalizar(texto: str | None) -> str:
    """Minúsculas, sem acento, só letras/números separados por um espaço."""
    if not texto:
        return ''
    t = unicodedata.normalize('NFKD', str(texto)).encode('ascii', 'ignore').decode('ascii').lower()
    return _RE_NAO_ALFANUM.sub(' ', t).strip()


def slug(texto: str, limite: int = 150) -> str:
    """Slug estável e ÚNICO: acima do limite, corta e acrescenta um hash do texto
    inteiro (duas combinações longas com o mesmo começo não viram o mesmo id)."""
    s = normalizar(texto).replace(' ', '-')
    if len(s) <= limite:
        return s
    import hashlib
    return s[:limite - 9].strip('-') + '-' + hashlib.sha1(s.encode()).hexdigest()[:8]


def so_digitos(valor) -> str:
    return re.sub(r'\D', '', str(valor or ''))


def _num(texto: str) -> float:
    return float(texto.replace(',', '.'))


def _fmt(valor: float) -> str:
    return ('%f' % valor).rstrip('0').rstrip('.')


# Unidades de dose. 'g' só conta como dose quando não é tamanho de embalagem
# (a embalagem é tratada à parte, na quantidade).
_UNIDADE = r'(mcg|µg|ug|mg|g|ui|u\.?i\.?|ml|%)'
_NUM = r'(\d+(?:[.,]\d+)?)'


def _unidade_canonica(u: str) -> str:
    u = u.lower().replace('.', '')
    return {'µg': 'mcg', 'ug': 'mcg'}.get(u, u)


def _dose_canonica(valor: float, unidade: str, por_valor: float | None = None, por_unidade: str | None = None) -> str:
    unidade = _unidade_canonica(unidade)
    if unidade == 'g' and not por_unidade:
        valor, unidade = valor * 1000, 'mg'
    if por_unidade:
        por_unidade = _unidade_canonica(por_unidade)
        if por_valor and por_valor != 1:
            valor = valor / por_valor
        return f'{_fmt(round(valor, 4))}{unidade}/{por_unidade}'
    return f'{_fmt(round(valor, 4))}{unidade}'


# ---------------------------------------------------------------------------
# CMED
# ---------------------------------------------------------------------------
# Início da forma farmacêutica: tudo antes disso é a dose ("(100 + 25) MG ")
_RE_FORMA_CMED = re.compile(
    r'\b(COM|CAP|DRG|SOL|SUS|XPE|CREM|POM|GEL|PO|PAST|ENV|EMU|LOC|SPR|AER|ADES|SUP|OVL|GOM|GRAN|FR|AMP|INJ|'
    r'COL|ELX|XAR|OLEO|XAMP|SAB|TAB|FLAC|CT|CX|BL|BG|EST)\b')
# "X 30", "X 120 ML + SER DOS", "X  100 (EMB FRAC)": não precisa estar no fim do texto
_RE_QTD_CMED = re.compile(r'\bX\s+' + _NUM + r'\s*(ML|G|L|UN|UNID|DOSES)?(?![\w,.])')


def doses_cmed(apresentacao: str) -> list[str]:
    texto = (apresentacao or '').upper().replace('\xa0', ' ').strip()
    m = _RE_FORMA_CMED.search(texto)
    trecho = texto[:m.start()] if m else texto
    doses = []
    # "(100 + 25) MG" -> 100 MG + 25 MG
    for grupo in re.finditer(r'\(([^)]*)\)\s*' + _UNIDADE.upper() + r'(?:\s*/\s*' + _NUM + r'?\s*(ML|G))?', trecho):
        for n in re.findall(_NUM, grupo.group(1)):
            doses.append(_dose_canonica(_num(n), grupo.group(2), _num(grupo.group(3)) if grupo.group(3) else None, grupo.group(4)))
    trecho = re.sub(r'\([^)]*\)\s*\S+', ' ', trecho)
    for n, u, pv, pu in re.findall(_NUM + r'\s*' + r'(MCG|MG|G|UI|U\.I\.|ML|%)' + r'(?:\s*/\s*' + _NUM + r'?\s*(ML|G|L))?', trecho):
        doses.append(_dose_canonica(_num(n), u, _num(pv) if pv else None, pu or None))
    return sorted(set(doses))


def quantidade_cmed(apresentacao: str) -> str | None:
    texto = (apresentacao or '').upper().replace('\xa0', ' ').strip()
    achados = list(_RE_QTD_CMED.finditer(texto))
    if not achados:
        return None
    # Volume/peso (frasco de 120 ML, bisnaga de 30 G) é o que a vitrine mostra;
    # sem isso, a primeira contagem ("X 30" comprimidos)
    m = next((a for a in achados if a.group(2) in ('ML', 'G', 'L')), achados[0])
    valor, unidade = _num(m.group(1)), (m.group(2) or '').lower()
    if unidade in ('', 'un', 'unid', 'doses'):
        return _fmt(valor)
    if unidade == 'l':
        return f'{_fmt(valor * 1000)}ml'
    return f'{_fmt(valor)}{unidade}'


def chave_cmed(apresentacao: str) -> str | None:
    doses, qtd = doses_cmed(apresentacao), quantidade_cmed(apresentacao)
    if not doses and not qtd:
        return None
    return '+'.join(doses) + '|' + (qtd or '')


# ---------------------------------------------------------------------------
# Títulos das redes
# ---------------------------------------------------------------------------
_RE_QTD_UNIDADES = re.compile(
    r'(\d+)\s*(comprimidos?|comp\b|com\b|cps?\b|c[aá]psulas?|caps?\b|dr[aá]geas?|drg\b|sach[eê]s?|envelopes?|'
    r'ampolas?|amp\b|unidades|un\b|und\b|gomas|pastilhas|adesivos|flaconetes?|seringas?|supositórios?|'
    r'supositorios?|[oó]vulos|tabletes|blisters?|frascos?)', re.I)
# "25mg/5ml" (concentração) ou "450/50mg" (duas doses)
_RE_DOSE_TITULO = re.compile(r'(?<![\d.,])' + _NUM + r'\s*(mcg|µg|mg|g|ui|u\.i\.|%)(?:\s*/\s*' + _NUM + r'?\s*(ml|g)\b)?', re.I)
_RE_DUPLA_DOSE = re.compile(r'(?<![\d.,])' + _NUM + r'\s*/\s*' + _NUM + r'\s*(mg|mcg)\b', re.I)
_RE_VOLUME = re.compile(r'(?<![/\d.,])' + _NUM + r'\s*(ml|l)\b', re.I)
_RE_PESO_EMBALAGEM = re.compile(r'(?<![/\d.,])' + _NUM + r'\s*g\b', re.I)


def doses_titulo(titulo: str) -> list[str]:
    texto = titulo or ''
    doses = []
    # "40g" solto é tamanho de embalagem (pomada, pó)... a não ser que o produto
    # seja contado em unidades ("Glifage 1g 30 Comprimidos"): aí é dose
    g_eh_dose = bool(_RE_QTD_UNIDADES.search(texto))
    for a, b, u in _RE_DUPLA_DOSE.findall(texto):
        doses += [_dose_canonica(_num(a), u), _dose_canonica(_num(b), u)]
    texto = _RE_DUPLA_DOSE.sub(' ', texto)
    for n, u, pv, pu in _RE_DOSE_TITULO.findall(texto):
        if u.lower() == 'g' and not pu and not g_eh_dose:
            continue
        doses.append(_dose_canonica(_num(n), u, _num(pv) if pv else None, pu or None))
    return sorted(set(doses))


def quantidade_titulo(titulo: str) -> str | None:
    texto = titulo or ''
    m = _RE_QTD_UNIDADES.search(texto)
    if m:
        return _fmt(float(m.group(1)))
    sem_conc = re.sub(_NUM + r'\s*(mcg|mg|g|ui|%)\s*/\s*' + _NUM + r'?\s*(ml|g)\b', ' ', texto, flags=re.I)
    m = _RE_VOLUME.search(sem_conc)
    if m:
        valor, unidade = _num(m.group(1)), m.group(2).lower()
        return f'{_fmt(valor * 1000 if unidade == "l" else valor)}ml'
    m = _RE_PESO_EMBALAGEM.search(sem_conc)
    if m:
        return f'{_fmt(_num(m.group(1)))}g'
    return None


def chave_titulo(titulo: str) -> str | None:
    doses, qtd = doses_titulo(titulo), quantidade_titulo(titulo)
    if not doses and not qtd:
        return None
    return '+'.join(doses) + '|' + (qtd or '')


def rotulo_chave(chave: str | None) -> str:
    """ "12.5mg+20mg|60" -> "12,5mg + 20mg · 60 un" (texto pro usuário). """
    if not chave:
        return 'outras apresentações'
    doses, _, qtd = chave.partition('|')
    partes = []
    if doses:
        partes.append(' + '.join(doses.split('+')).replace('.', ','))
    if qtd:
        partes.append(qtd.replace('.', ',') + ('' if qtd[-1].isalpha() else ' un'))
    return ' · '.join(partes) or 'outras apresentações'


def eh_combinacao(texto_normalizado_substancia: str, substancia_original: str) -> bool:
    return any(s in (substancia_original or '') for s in (';', '+')) or ' + ' in texto_normalizado_substancia
