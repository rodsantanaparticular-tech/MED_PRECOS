"""
Ofertas proativas: transforma os metadados de promoção das lojas VTEX em regras
que o usuário entende sem simular quantidade ("a partir de 3 un.: R$ 33,33/un.").

Fonte: commertialOffer.PromotionTeasers da mesma API de vitrine que já traz o
preço (nada de checkout). Formatos reais observados nas 5 redes em 29/09/2026
(~35-45% dos produtos têm algum), todos com Conditions.MinimumQuantity:
    "LEVE 3 PAGUE 2"   (também 2/1 e 4/3; na Venancio vem "LEVE 3 PAGUE 2 - 35662")
    "50% OFF NA 2ª UNIDADE"   (desconto só na N-ésima unidade: 2ª, 3ª, 4ª)
    "COMPRE4 GANHE DESCONTO [Compre 4 com 30% OFF]"   (Pague Menos/Extrafarma)
Nome que não bate com nenhum formato conhecido vira oferta só com o texto
original - nunca se inventa número.

Os nomes das coleções (productClusters) NÃO são usados: estão cheios de
campanhas vencidas ("5% - Comparador - Google - Fev", "30%off - FEV2021").
"""
import re

_RE_LEVE_PAGUE = re.compile(r'\bLEVE\s*(\d+)\s*PAGUE\s*(\d+)\b', re.I)
# "2ª", "2º", "2a" ou o ª estragado por codificação da loja: qualquer 1 caractere não-espaço
_RE_OFF_NA_UNIDADE = re.compile(r'(\d+(?:[.,]\d+)?)\s*%\s*(?:OFF|DE\s+DESCONTO)\s*NA\s*(\d+)\s*\S?\s*UNIDADE', re.I)
_RE_PERCENTUAL = re.compile(r'(\d+(?:[.,]\d+)?)\s*%\s*(?:OFF|DE\s+DESCONTO)', re.I)
_RE_SUFIXO_CONTRATO = re.compile(r'\s*-\s*\d{3,}\s*$')      # "LEVE 3 PAGUE 2 - 35662"
_RE_TEXTO_ENTRE_COLCHETES = re.compile(r'\[([^\]]+)\]')      # "COMPRE4 GANHE DESCONTO [Compre 4 com 30% OFF]"


def limpar_descricao(nome: str) -> str:
    texto = ' '.join((nome or '').split())
    colchetes = _RE_TEXTO_ENTRE_COLCHETES.search(texto)
    if colchetes:
        texto = colchetes.group(1).strip()   # o trecho entre colchetes é o texto "de vitrine"
    return _RE_SUFIXO_CONTRATO.sub('', texto).strip()


def interpretar_regra(nome: str, quantidade_minima: int | None) -> tuple[int | None, float | None]:
    """Devolve (quantidade mínima, fator do preço unitário efetivo) ou (qtd, None)
    quando não dá pra calcular. Fator 0.6667 = cada unidade sai por 66,67% do preço."""
    texto = limpar_descricao(nome)
    m = _RE_LEVE_PAGUE.search(texto)
    if m:
        leve, pague = int(m.group(1)), int(m.group(2))
        if 0 < pague < leve:
            return leve, pague / leve
    m = _RE_OFF_NA_UNIDADE.search(texto)
    if m:
        pct, n = float(m.group(1).replace(',', '.')), int(m.group(2))
        if 0 < pct <= 100 and n >= 2:
            return n, ((n - 1) + (1 - pct / 100)) / n
    m = _RE_PERCENTUAL.search(texto)
    if m and quantidade_minima:
        pct = float(m.group(1).replace(',', '.'))
        if 0 < pct < 100:
            return quantidade_minima, 1 - pct / 100   # "Compre 4 com 30% OFF": 30% em todas
    return quantidade_minima, None


def promocoes_do_teaser(teasers: list[dict] | None, preco: float) -> list[dict]:
    ofertas = []
    for t in teasers or []:
        nome = (t.get('Name') or '').strip()
        if not nome:
            continue
        condicoes = t.get('Conditions') or {}
        qtd_informada = condicoes.get('MinimumQuantity') or None
        qtd, fator = interpretar_regra(nome, qtd_informada)
        geral = t.get('GeneralValues') or {}
        ofertas.append({
            'tipo': 'promocao_rede',
            'descricao': limpar_descricao(nome),
            'quantidade_minima': qtd or qtd_informada,
            'percentual': round((1 - fator) * 100, 1) if fator else None,
            'preco_efetivo_unitario': round(preco * fator, 2) if fator and preco else None,
            'exige_cpf': False,
            'exige_cupom': 'CUPOM' in nome.upper(),
            'detalhes': {k: v for k, v in {'nomeOriginal': nome,
                                           'tipoPromocao': geral.get('KruzerPromotionType')}.items() if v},
        })
    return ofertas


def oferta_de_por(preco: float, preco_lista: float | None) -> dict | None:
    if not preco_lista or preco_lista <= preco:
        return None
    return {'tipo': 'de_por', 'descricao': f'De R$ {preco_lista:.2f} por R$ {preco:.2f}'.replace('.', ','),
            'quantidade_minima': None, 'percentual': round((1 - preco / preco_lista) * 100, 1),
            'preco_efetivo_unitario': preco, 'exige_cpf': False, 'exige_cupom': False,
            'detalhes': {'precoLista': preco_lista}}


def oferta_programa_laboratorio(pbm: dict | None, preco: float) -> dict | None:
    if not pbm:
        return None
    desconto = pbm.get('desconto')
    nome = pbm.get('programa')
    descricao = f'Programa {nome}' if nome else 'Desconto do laboratório'
    return {'tipo': 'programa_laboratorio', 'descricao': descricao + ' (com cadastro do CPF)',
            'quantidade_minima': None, 'percentual': desconto,
            'preco_efetivo_unitario': round(preco * (1 - desconto / 100), 2) if desconto and preco else None,
            'exige_cpf': True, 'exige_cupom': False,
            'detalhes': {k: v for k, v in {'programa': nome, 'precoMinimoInformado': pbm.get('precoMin')}.items() if v}}
