"""
Busca de medicamento por nome comercial, princípio ativo ou sinônimo, tolerante
a erro de digitação. Porte de buscarMedicamento()/pontuarCorrespondencia() do
front antigo, com as mesmas regras de pontuação, mas agora considerando TODAS
as marcas de cada princípio ativo (não só as 12 guardadas como sinônimo).

O índice fica em memória (≈2 mil princípios ativos) e é recarregado quando o
catálogo muda (conferido a cada minuto - ver catalogo/versao.py).
"""
from dataclasses import dataclass, field

from rapidfuzz.distance import Levenshtein
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..catalogo.versao import IndiceComVersao
from ..matching.normalizacao import normalizar
from ..models import Medicamento, ProdutoCmed

PONTUACAO_MINIMA = 55
PESO_SINONIMO = 0.9  # "losartana" deve preferir o medicamento puro à combinação que só a contém


def pontuar(termo: str, candidato: str) -> float:
    if not termo or not candidato:
        return 0
    if termo == candidato:
        return 100
    if candidato.startswith(termo):
        return 90
    # O usuário digitou MAIS que o nome cadastrado ("wellbutrin xl", "losartana 50mg"):
    # o nome inteiro no começo do termo também é correspondência forte
    if len(candidato) >= 4 and termo.startswith(candidato + ' '):
        return 85
    if termo in candidato:
        return 80
    sim_total = Levenshtein.normalized_similarity(termo, candidato)
    sim_prefixo = Levenshtein.normalized_similarity(termo, candidato[:len(termo)]) if len(candidato) > len(termo) else 0
    melhor = max(sim_total, sim_prefixo)
    limiar = 0.8 if len(termo) <= 4 else PONTUACAO_MINIMA / 70
    return round(melhor * 70) if melhor >= limiar else 0


@dataclass
class _Entrada:
    id: str
    nome: str
    principio_ativo: str
    principais: list[str]
    secundarios: list[str] = field(default_factory=list)
    marcas: dict[str, str] = field(default_factory=dict)   # nome normalizado -> nome de exibição


class IndiceBusca:
    def __init__(self, s: Session):
        marcas: dict[str, dict[str, str]] = {}
        for med_id, produto in s.execute(select(ProdutoCmed.medicamento_id, ProdutoCmed.produto)
                                         .where(ProdutoCmed.ativo.is_(True)).distinct()):
            marcas.setdefault(med_id, {})[normalizar(produto)] = _titulo(produto)
        self.entradas = []
        for m in s.scalars(select(Medicamento).where(Medicamento.so_hospitalar.is_(False))):
            principais = [normalizar(m.nome), normalizar(m.principio_ativo)]
            marcas_med = marcas.get(m.id, {})
            secundarios = {normalizar(x) for x in (m.sinonimias or [])} | set(marcas_med)
            self.entradas.append(_Entrada(m.id, m.nome, m.principio_ativo, principais,
                                          [x for x in secundarios if x and x not in principais], marcas_med))

    def buscar(self, termo: str, limite: int = 5) -> list[dict]:
        t = normalizar(termo)
        if not t:
            return []
        resultados = []
        for e in self.entradas:
            # (pontuação, marca que casou): nome de referência e marcas da CMED contam como
            # "marca buscada"; princípio ativo e sinônimos genéricos não (marca = None)
            candidatos = [(pontuar(t, e.principais[0]), e.nome), (pontuar(t, e.principais[1]), None)]
            candidatos += [(pontuar(t, c) * PESO_SINONIMO, e.marcas.get(c)) for c in e.secundarios]
            p, marca = max(candidatos, key=lambda pc: pc[0])
            if p >= PONTUACAO_MINIMA:
                resultados.append({'id': e.id, 'nome': e.nome, 'principioAtivo': e.principio_ativo,
                                   'marca': marca, 'pontuacao': round(p, 1)})
        resultados.sort(key=lambda r: (-r['pontuacao'], len(r['principioAtivo'])))
        return resultados[:limite]


def _titulo(s: str) -> str:
    return ' '.join(w.capitalize() if len(w) > 2 else w.lower() for w in (s or '').split())


_indice = IndiceComVersao(IndiceBusca)


def indice_busca(s: Session) -> IndiceBusca:
    return _indice.obter(s)
