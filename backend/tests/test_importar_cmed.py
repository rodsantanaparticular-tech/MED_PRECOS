"""Importação CMED: agrupamento por substância canônica (hidratação não separa grupos)."""
from pathlib import Path

import pytest
from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session

from app.catalogo import importar_cmed
from app.coleta.redes import semear_redes
from app.db import Base
from app.matching.normalizacao import slug, substancia_canonica
from app.models import MapeamentoSkuRede, Medicamento, ProdutoCmed


@pytest.mark.parametrize('substancia, grupo', [
    ('DIPIRONA MONOIDRATADA', 'dipirona'),
    ('DIPIRONA', 'dipirona'),
    ('DIPIRONA SÓDICA', 'dipirona'),
    ('AMOXICILINA TRI-HIDRATADA;CLAVULANATO DE POTÁSSIO', 'amoxicilina-clavulanato-de-potassio'),
    ('CAFEÍNA ANIDRA;DIPIRONA MONOIDRATADA', 'cafeina-dipirona'),
    ('SULFATO FERROSO HEPTAIDRATADO', 'sulfato-ferroso'),
    # sem hidratação no nome, o id não muda; sal diferente continua outro grupo
    ('CLORIDRATO DE METFORMINA', 'cloridrato-de-metformina'),
    ('DICLOFENACO POTÁSSICO', 'diclofenaco-potassico'),
    ('DIPIRONA MAGNÉSICA', 'dipirona-magnesica'),
])
def test_substancia_canonica(substancia, grupo):
    assert slug(substancia_canonica(substancia)) == grupo


def _linha(ggrem, substancia, produto, tipo, pmc, apresentacao='500 MG COM CT X 10'):
    return {'CÓDIGO GGREM': ggrem, 'SUBSTÂNCIA': substancia, 'PRODUTO': produto, 'LABORATÓRIO': 'LAB',
            'APRESENTAÇÃO': apresentacao, 'TIPO DE PRODUTO (STATUS DO PRODUTO)': tipo,
            'PMC 18 %': pmc, 'PMC 12 %': pmc, 'REGISTRO': '1' + ggrem}


def test_reimportacao_funde_dipirona_e_dipirona_monoidratada(monkeypatch):
    engine = create_engine('sqlite://')
    Base.metadata.create_all(engine)
    with Session(engine) as s:
        semear_redes(s)
        # Estado da regra antiga: dois grupos, e um SKU de rede casado no grupo "monoidratada"
        s.add_all([Medicamento(id='dipirona', principio_ativo='Dipirona', nome='Cafilisador'),
                   Medicamento(id='dipirona-monoidratada', principio_ativo='Dipirona Monoidratada', nome='Novalgina')])
        s.flush()
        s.add_all([
            ProdutoCmed(ggrem='10', medicamento_id='dipirona-monoidratada', registro='110', substancia='DIPIRONA MONOIDRATADA',
                        produto='NOVALGINA', apresentacao='500 MG COM CT X 10', ativo=True),
            ProdutoCmed(ggrem='13', medicamento_id='dipirona-monoidratada', registro='113', substancia='DIPIRONA MONOIDRATADA',
                        produto='DESCONTINUADO', apresentacao='500 MG COM CT X 4', ativo=True),
        ])
        s.flush()
        s.add(MapeamentoSkuRede(rede_id='drogasmil', sku_rede='novalgina-500', titulo='Novalgina 500mg 10 cp',
                                produto_cmed_ggrem='10', medicamento_id='dipirona-monoidratada', metodo_match='ean'))
        s.commit()

        linhas = [
            _linha('10', 'DIPIRONA MONOIDRATADA', 'NOVALGINA', 'Novo', '20,00'),
            _linha('11', 'DIPIRONA MONOIDRATADA', 'NOVALGINA', 'Novo', '30,00', '1 G COM CT X 10'),
            _linha('12', 'DIPIRONA', 'CAFILISADOR', 'Similar', '15,00'),
            _linha('14', 'DIPIRONA MONOIDRATADA', 'DIPIRONA MONOIDRATADA', 'Genérico', '8,00'),
        ]
        monkeypatch.setattr(importar_cmed, 'ler_planilha', lambda caminho: (None, linhas))
        resumo = importar_cmed.importar(s, Path('lista_PMC_teste.xlsx'))
        s.commit()

        assert resumo['grupos_fundidos'] == 1
        assert s.get(Medicamento, 'dipirona-monoidratada') is None
        med = s.get(Medicamento, 'dipirona')
        assert (med.principio_ativo, med.nome) == ('Dipirona', 'Novalgina')
        assert [a['nome'] for a in med.alternativas] == ['Dipirona Monoidratada', 'Cafilisador']
        assert 'metamizol' in med.sinonimias   # curado sob "dipirona monoidratada" vale pro grupo novo
        assert set(s.scalars(select(ProdutoCmed.medicamento_id))) == {'dipirona'}   # inclusive a inativa (13)
        assert s.get(ProdutoCmed, '13').ativo is False
        assert s.scalar(select(MapeamentoSkuRede.medicamento_id)) == 'dipirona'

        # Idempotente: rodar de novo não funde nada nem muda o grupo
        assert importar_cmed.importar(s, Path('lista_PMC_teste.xlsx'))['grupos_fundidos'] == 0
