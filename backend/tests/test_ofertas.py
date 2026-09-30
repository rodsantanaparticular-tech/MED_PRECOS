"""Interpretação das promoções das redes (formatos reais de 29/09/2026)."""
import pytest

from app.coleta.ofertas import oferta_de_por, oferta_programa_laboratorio, promocoes_do_teaser


def _uma(nome, qtd, preco=30.0, geral=None):
    return promocoes_do_teaser([{'Name': nome, 'GeneralValues': geral or {}, 'Conditions': {'MinimumQuantity': qtd}}],
                               preco)[0]


@pytest.mark.parametrize('nome, qtd, descricao, unitario', [
    ('LEVE 3 PAGUE 2', 3, 'LEVE 3 PAGUE 2', 20.0),
    ('LEVE 3 PAGUE 2 - 35662', 3, 'LEVE 3 PAGUE 2', 20.0),            # Venancio: sufixo de contrato
    ('LEVE 2 PAGUE 1 ', 2, 'LEVE 2 PAGUE 1', 15.0),
    ('LEVE 4 PAGUE 3 ', 4, 'LEVE 4 PAGUE 3', 22.5),
    ('50% OFF NA 2ª UNIDADE', 2, '50% OFF NA 2ª UNIDADE', 22.5),       # (30 + 15) / 2
    ('39% OFF NA 2ªUNIDADE', 2, '39% OFF NA 2ªUNIDADE', 24.15),
    ('80% OFF NA 4ª UNIDADE', 4, '80% OFF NA 4ª UNIDADE', 24.0),       # (3x30 + 6) / 4
    ('50% OFF NA 2� UNIDADE', 2, '50% OFF NA 2� UNIDADE', 22.5),  # ª estragado pela codificação
    ('COMPRE4 GANHE DESCONTO [Compre 4 com 30% OFF]', 4, 'Compre 4 com 30% OFF', 21.0),  # Pague Menos
])
def test_formatos_reais(nome, qtd, descricao, unitario):
    o = _uma(nome, qtd)
    assert (o['tipo'], o['descricao'], o['quantidade_minima'], o['preco_efetivo_unitario']) == \
        ('promocao_rede', descricao, qtd, unitario)


def test_formato_desconhecido_nao_inventa_numero():
    o = _uma('BRINDE ESPECIAL NA COMPRA', 1)
    assert o['descricao'] == 'BRINDE ESPECIAL NA COMPRA'
    assert o['preco_efetivo_unitario'] is None and o['percentual'] is None


def test_cupom_e_marcado():
    assert _uma('CUPOM PROGRESSIVO 10% OFF', 2)['exige_cupom'] is True


def test_guarda_tipo_da_promocao_vtex():
    o = _uma('LEVE 3 PAGUE 2 - 35662', 3, geral={'KruzerPromotionType': 'TAKE_X_PAY_Y', 'CodigoPromocao': '1,2,3'})
    assert o['detalhes'] == {'nomeOriginal': 'LEVE 3 PAGUE 2 - 35662', 'tipoPromocao': 'TAKE_X_PAY_Y'}


def test_de_por_e_programa_de_laboratorio():
    assert oferta_de_por(80.0, 100.0)['percentual'] == 20.0
    assert oferta_de_por(80.0, 80.0) is None and oferta_de_por(80.0, None) is None
    pbm = oferta_programa_laboratorio({'programa': 'Bayer pra você', 'desconto': 17.0}, 100.0)
    assert pbm['exige_cpf'] is True and pbm['preco_efetivo_unitario'] == 83.0
    assert oferta_programa_laboratorio(None, 100.0) is None
