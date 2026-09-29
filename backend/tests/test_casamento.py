"""Casamento de produtos das redes com o catálogo CMED."""
import pytest

from app.db import sessao
from app.matching.casamento import IndiceCatalogo


@pytest.fixture(scope='module')
def indice():
    with sessao() as s:
        return IndiceCatalogo(s)


def test_ean_casa_apresentacao_exata(indice):
    r = indice.casar('qualquer título', ean='7891106907064')
    assert (r.metodo, r.ggrem, r.chave_apresentacao) == ('ean', '1', '20mg|28')


def test_registro_13_digitos(indice):
    r = indice.casar('Xarelto', registros=['1705600480217'])
    assert (r.metodo, r.ggrem) == ('registro', '1')


def test_nome_de_marca_resolve_apresentacao_da_marca(indice):
    r = indice.casar('Xarelto Rivaroxabana 20mg 28 Comprimidos')
    assert (r.metodo, r.medicamento_id, r.ggrem) == ('nome', 'rivaroxabana', '1')


def test_nome_generico_usa_laboratorio_do_titulo(indice):
    r = indice.casar('Rivaroxabana 20mg 28 Comprimidos Genérico EMS')
    assert r.medicamento_id == 'rivaroxabana' and r.ggrem == '2'


def test_prefixo_nao_contem(indice):
    """Lição do casamento antigo: 'paracetamol' no MEIO do título não casa."""
    assert indice.casar('Antigripal Gripe Paracetamol 500mg 20 Comprimidos').metodo == 'sem_match'


def test_combinacao_nao_casa_com_substancia_unica(indice):
    r = indice.casar('Paracetamol 500mg + Pseudoefedrina 30mg 24 Comprimidos')
    assert r.medicamento_id != 'paracetamol'


def test_erro_de_grafia_no_inicio_do_titulo(indice):
    r = indice.casar('Rivaroxabanna 20mg 28 Comprimidos')
    assert r.medicamento_id == 'rivaroxabana' and r.metodo == 'nome'


def test_apresentacao_fora_da_cmed_fica_so_no_principio_ativo(indice):
    r = indice.casar('Xarelto 20mg 14 Comprimidos')
    assert r.medicamento_id == 'rivaroxabana' and r.ggrem is None and r.chave_apresentacao == '20mg|14'
