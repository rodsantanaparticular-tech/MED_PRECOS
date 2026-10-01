"""Índices em memória acompanham o catálogo mesmo quando a importação roda em outro processo."""
from datetime import timedelta

from sqlalchemy import create_engine
from sqlalchemy.orm import Session

from app.catalogo import versao
from app.db import Base
from app.models import Medicamento


def test_indice_recriado_so_quando_o_catalogo_muda(monkeypatch):
    engine = create_engine('sqlite://')
    Base.metadata.create_all(engine)
    criados = []
    indice = versao.IndiceComVersao(lambda s: criados.append(1) or len(criados))
    with Session(engine) as s:
        s.add(Medicamento(id='dipirona-monoidratada', principio_ativo='Dipirona Monoidratada', nome='Novalgina'))
        s.commit()
        assert indice.obter(s) == 1

        # Dentro do intervalo nem consulta o banco: catálogo mudou, mas o índice ainda é o mesmo
        s.add(Medicamento(id='dipirona', principio_ativo='Dipirona', nome='Novalgina'))
        s.commit()
        assert indice.obter(s) == 1

        monkeypatch.setattr(versao, 'INTERVALO', timedelta(0))
        assert indice.obter(s) == 2          # mudou -> recria
        assert indice.obter(s) == 2          # não mudou -> reaproveita

        s.delete(s.get(Medicamento, 'dipirona-monoidratada'))   # fusão de grupos apaga o antigo
        s.commit()
        assert indice.obter(s) == 3

        indice.invalidar()
        assert indice.obter(s) == 4
