"""
Versão do catálogo, pra quem guarda índice em memória (busca na API, casamento no worker).

API e worker são processos separados: a importação da CMED roda no worker e não tem como
limpar o índice que está na memória da API. Cada processo então confere, no máximo a cada
`INTERVALO`, se o catálogo mudou (quantidade de grupos + última atualização) e recria o
índice só quando mudou. Toda importação regrava `medicamentos.atualizado_em`, e grupo
apagado na fusão muda a contagem.
"""
from datetime import datetime, timedelta

from sqlalchemy import func, select
from sqlalchemy.orm import Session

from ..models import Medicamento

INTERVALO = timedelta(seconds=60)


def versao_catalogo(s: Session) -> tuple:
    return tuple(s.execute(select(func.count(Medicamento.id), func.max(Medicamento.atualizado_em))).one())


class IndiceComVersao:
    """Guarda um índice e o recria quando o catálogo muda (ou a cada `validade`, por garantia)."""

    def __init__(self, fabrica, validade: timedelta = timedelta(hours=6)):
        self.fabrica, self.validade = fabrica, validade
        self.invalidar()

    def invalidar(self) -> None:
        self.indice, self.versao, self.criado_em, self.conferido_em = None, None, None, None

    def obter(self, s: Session):
        agora = datetime.utcnow()
        if self.indice is not None and agora - self.criado_em > self.validade:
            self.indice = None
        if self.indice is not None and agora - self.conferido_em < INTERVALO:
            return self.indice
        versao = versao_catalogo(s)
        if self.indice is None or versao != self.versao:
            self.indice, self.versao, self.criado_em = self.fabrica(s), versao, agora
        self.conferido_em = agora
        return self.indice
