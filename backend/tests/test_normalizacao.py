"""Extração de apresentação comparável: CMED e títulos de rede têm que gerar a MESMA chave."""
import pytest

from app.matching.normalizacao import chave_cmed, chave_titulo, normalizar, rotulo_chave, slug


@pytest.mark.parametrize('cmed, titulo', [
    ('50 MG COM REV CT BL AL PLAS PVC TRANS X 30', 'Losartana Potássica 50mg 30 Comprimidos Revestidos Genérico'),
    ('(20 + 12,5) MG COM REV CT BL AL AL X 30', 'Olmesartana 20mg + Hidroclorotiazida 12,5mg 30 Comprimidos'),
    ('1 G COM REV CT BL AL PLAS TRANS X 30', 'Glifage XR Cloridrato De Metformina 1g 30 Comprimidos'),
    ('25 MG/5 ML XPE CT FR VD AMB X 120 ML', 'Acebrofilina 25mg/5ml Xarope 120ml'),
    ('0,5 MG/ML XPE CT FR PLAS AMB X 60 ML + SER DOS', 'Desloratadina 0,5mg/ml Xarope 60ml'),
    ('2,5 MG COM REV CT BL AL PLAS PP TRANS X 30', 'Gn Tibolona 2,5mg 30cp Nova Qui'),
    ('20 MG COM REV CT BL AL PLAS PP TRANS X 28\xa0', 'Xarelto Rivaroxabana 20mg 28 Comprimidos'),
])
def test_mesma_chave_cmed_e_rede(cmed, titulo):
    assert chave_cmed(cmed) == chave_titulo(titulo)


def test_embalagem_em_gramas_nao_vira_dose():
    assert chave_titulo('Baycuten N Bayer Creme Dermatológico 40g') == '|40g'


def test_duas_doses_com_barra():
    assert chave_titulo('Flavonid 450/50mg 60 Comprimidos') == '450mg+50mg|60'


def test_rotulo_legivel():
    assert rotulo_chave('12.5mg+20mg|60') == '12,5mg + 20mg · 60 un'
    assert rotulo_chave('5mg/ml|120ml') == '5mg/ml · 120ml'
    assert rotulo_chave(None) == 'outras apresentações'


def test_normalizar_e_slug():
    assert normalizar('Losartana  Potássica!') == 'losartana potassica'
    assert slug('Losartana Potássica') == 'losartana-potassica'


def test_slug_longo_continua_unico():
    a, b = 'x' * 200 + ' a', 'x' * 200 + ' b'
    assert len(slug(a)) <= 150 and slug(a) != slug(b)
