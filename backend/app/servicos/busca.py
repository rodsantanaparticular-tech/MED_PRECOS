"""
Busca de medicamento por nome comercial, princípio ativo ou sinônimo, tolerante
a erro de digitação. Porte de buscarMedicamento()/pontuarCorrespondencia() do
front antigo, com as mesmas regras de pontuação, mas agora considerando TODAS
as marcas de cada princípio ativo (não só as 12 guardadas como sinônimo).

O índice fica em memória (≈2 mil princípios ativos) e é recarregado quando o
catálogo muda.
"""
from dataclasses import dataclass, field
from datetime import datetime, timedelta

from rapidfuzz.distance import Levenshtein
from sqlalchemy import select
from sqlalchemy.orm import Session

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


class IndiceBusca:
    def __init__(self, s: Session):
        marcas: dict[str, set[str]] = {}
        for med_id, produto in s.execute(select(ProdutoCmed.medicamento_id, ProdutoCmed.produto)
                                         .where(ProdutoCmed.ativo.is_(True)).distinct()):
            marcas.setdefault(med_id, set()).add(normalizar(produto))
        self.entradas = []
        for m in s.scalars(select(Medicamento).where(Medicamento.so_hospitalar.is_(False))):
            principais = [normalizar(m.nome), normalizar(m.principio_ativo)]
            secundarios = {normalizar(x) for x in (m.sinonimias or [])} | marcas.get(m.id, set())
            self.entradas.append(_Entrada(m.id, m.nome, m.principio_ativo, principais,
                                          [x for x in secundarios if x and x not in principais]))
        self.criado_em = datetime.utcnow()

    def buscar(self, termo: str, limite: int = 5) -> list[dict]:
        t = normalizar(termo)
        if not t:
            return []
        resultados = []
        for e in self.entradas:
            p = max([pontuar(t, c) for c in e.principais] + [pontuar(t, c) * PESO_SINONIMO for c in e.secundarios])
            if p >= PONTUACAO_MINIMA:
                resultados.append({'id': e.id, 'nome': e.nome, 'principioAtivo': e.principio_ativo, 'pontuacao': round(p, 1)})
        resultados.sort(key=lambda r: (-r['pontuacao'], len(r['principioAtivo'])))
        return resultados[:limite]


_indice: IndiceBusca | None = None


def indice_busca(s: Session) -> IndiceBusca:
    global _indice
    if _indice is None or datetime.utcnow() - _indice.criado_em > timedelta(hours=6):
        _indice = IndiceBusca(s)
    return _indice
