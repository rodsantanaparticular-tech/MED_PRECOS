"""
Casa um produto de uma rede (título + EAN + registro ANVISA) com o catálogo
canônico CMED. Ordem de confiança:

  1. EAN (código de barras)   -> apresentação exata (a CMED traz até 3 EANs por apresentação)
  2. Registro ANVISA 13 díg.  -> apresentação exata;  9 díg. -> produto (marca)
  3. Nome por PREFIXO         -> princípio ativo, e a apresentação é resolvida pela
                                 chave dose+quantidade (+ laboratório, quando ajuda)
  4. Nome aproximado          -> mesmo que 3, tolerando erro de grafia no início do
                                 título ("Losartana Potássico"), similaridade >= 0.92

Lições do casamento antigo (scripts/legado/build_precos_redes.js) mantidas:
  - prefixo, não "contém": "Paracetamol" batia no meio de "Antigripal ...
    Paracetamol + Clorfeniramina" (outro remédio);
  - nome mais longo primeiro (o mais específico ganha).
Novo aqui: um título de COMBINAÇÃO (duas ou mais doses, ou "+") não casa com
princípio ativo de substância única ("Paracetamol + Pseudoefedrina" não é
"Paracetamol").
"""
from collections import defaultdict
from dataclasses import dataclass

from rapidfuzz.distance import Levenshtein
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..models import ProdutoCmed
from .normalizacao import chave_titulo, doses_titulo, normalizar, so_digitos

SIMILARIDADE_MIN_APROX = 0.92
TAMANHO_MIN_NOME = 5


@dataclass
class Resultado:
    medicamento_id: str | None = None
    ggrem: str | None = None
    chave_apresentacao: str | None = None
    metodo: str = 'sem_match'
    score: float = 0.0


@dataclass
class _Apresentacao:
    ggrem: str
    medicamento_id: str
    produto_norm: str
    laboratorio_norm: str
    chave: str | None


class IndiceCatalogo:
    """Índices em memória do catálogo (carregado uma vez por lote de casamentos)."""

    def __init__(self, s: Session):
        self.por_ean: dict[str, _Apresentacao] = {}
        self.por_registro: dict[str, _Apresentacao] = {}
        self.por_registro9: dict[str, list[_Apresentacao]] = defaultdict(list)
        self.por_med_chave: dict[tuple[str, str], list[_Apresentacao]] = defaultdict(list)
        self.combinacao: dict[str, bool] = {}
        nomes: dict[str, tuple[str, bool]] = {}  # nome normalizado -> (medicamento_id, é marca?)

        for p in s.scalars(select(ProdutoCmed)):
            a = _Apresentacao(p.ggrem, p.medicamento_id, normalizar(p.produto), normalizar(p.laboratorio),
                              p.chave_apresentacao)
            for ean in (p.ean1, p.ean2, p.ean3):
                if ean:
                    self.por_ean.setdefault(ean, a)
            if p.registro:
                self.por_registro.setdefault(p.registro, a)
                self.por_registro9[p.registro[:9]].append(a)
            if a.chave:
                self.por_med_chave[(p.medicamento_id, a.chave)].append(a)
            self.combinacao[p.medicamento_id] = any(c in p.substancia for c in (';', '+'))
            sub_norm = normalizar(p.substancia)
            if len(a.produto_norm) >= TAMANHO_MIN_NOME:
                nomes.setdefault(a.produto_norm, (p.medicamento_id, a.produto_norm != sub_norm))
            if len(sub_norm) >= TAMANHO_MIN_NOME:
                nomes.setdefault(sub_norm, (p.medicamento_id, False))

        # Do mais longo pro mais curto: o nome mais específico ganha no prefixo
        self.nomes = sorted(nomes.items(), key=lambda kv: -len(kv[0]))
        self.nomes_por_inicial: dict[str, list[tuple[str, tuple[str, bool]]]] = defaultdict(list)
        for nome, info in self.nomes:
            self.nomes_por_inicial[nome[:3]].append((nome, info))

    # ------------------------------------------------------------------
    def casar(self, titulo: str, ean: str | None = None, registros: list[str] = ()) -> Resultado:
        ean = so_digitos(ean)
        if ean and ean in self.por_ean:
            a = self.por_ean[ean]
            return Resultado(a.medicamento_id, a.ggrem, a.chave, 'ean', 1.0)

        for reg in registros or ():
            reg = so_digitos(reg)
            if len(reg) >= 13 and reg[:13] in self.por_registro:
                a = self.por_registro[reg[:13]]
                return Resultado(a.medicamento_id, a.ggrem, a.chave, 'registro', 0.97)
        for reg in registros or ():
            reg = so_digitos(reg)
            if len(reg) >= 9 and reg[:9] in self.por_registro9:
                candidatas = self.por_registro9[reg[:9]]
                return self._resolver_apresentacao(titulo, candidatas[0].medicamento_id, candidatas[0].produto_norm,
                                                   'registro', 0.9)

        titulo_norm = normalizar(titulo)
        e_combo = len(doses_titulo(titulo)) >= 2 or '+' in (titulo or '')
        for nome, (med_id, e_marca) in self.nomes:
            if titulo_norm == nome or titulo_norm.startswith(nome + ' '):
                if e_combo and not self.combinacao.get(med_id) and not e_marca:
                    continue
                return self._resolver_apresentacao(titulo, med_id, nome if e_marca else None, 'nome', 0.8)

        # Aproximado: compara as primeiras N palavras do título (N = palavras do
        # nome) com nomes de mesma inicial - tolera letra trocada, sobrando ou faltando
        palavras_titulo = titulo_norm.split()
        for nome, (med_id, e_marca) in self.nomes_por_inicial.get(titulo_norm[:3], ()):
            if len(nome) < 8:
                continue
            inicio = ' '.join(palavras_titulo[:nome.count(' ') + 1])
            sim = Levenshtein.normalized_similarity(inicio, nome)
            if sim >= SIMILARIDADE_MIN_APROX:
                if e_combo and not self.combinacao.get(med_id) and not e_marca:
                    continue
                return self._resolver_apresentacao(titulo, med_id, nome if e_marca else None, 'nome', round(0.7 * sim, 3))
        return Resultado()

    def _resolver_apresentacao(self, titulo: str, med_id: str, produto_norm: str | None, metodo: str,
                               score: float) -> Resultado:
        chave = chave_titulo(titulo)
        if not chave:
            return Resultado(med_id, None, None, metodo, score)
        candidatas = self.por_med_chave.get((med_id, chave), [])
        if produto_norm:
            da_marca = [a for a in candidatas if a.produto_norm == produto_norm]
            candidatas = da_marca or candidatas
        if not candidatas:
            # A chave do título não bate com nenhuma apresentação CMED: fica casado
            # só com o princípio ativo, com a chave do próprio título
            return Resultado(med_id, None, chave, metodo, score)
        titulo_norm = normalizar(titulo)
        melhor = max(candidatas, key=lambda a: any(t in titulo_norm.split() for t in a.laboratorio_norm.split()[:1]))
        return Resultado(med_id, melhor.ggrem, melhor.chave, metodo, score + 0.05)
