"""Coletor Lomadee: formato real da API (30/09/2026) -> ofertas por rede."""
from app.coleta.lomadee import ORGANIZACOES, extrair_ofertas
from app.catalogo.enriquecimento import laboratorio_amigavel


def _produto(org, nome, preco, lista, ean, url, opcoes=None):
    return {'organizationId': org, 'id': '1', 'name': nome, 'url': url, 'available': True,
            'options': opcoes or [{'id': '1', 'ean': ean, 'name': nome, 'available': True,
                                   'pricing': [{'listPrice': lista, 'price': preco, 'metadata': []}]}]}


def test_preco_em_reais_e_ean():
    dados = [_produto(ORGANIZACOES['promofarma'], 'Losartana Potássica 50mg 30 Comprimidos Revestidos Ems', 5.75, 22.23,
                      '7896004706795', 'https://www.promofarma.com.br/losartana-potassica-50mg-ems-1057851/p')]
    o = extrair_ofertas(dados)['promofarma'][0]
    assert (o.preco, o.preco_lista, o.ean) == (5.75, 22.23, '7896004706795')   # reais, não centavos
    assert o.sku_rede == 'losartana-potassica-50mg-ems-1057851'


def test_varias_opcoes_viram_varias_ofertas_e_rede_desconhecida_e_ignorada():
    opcoes = [{'id': 'a', 'ean': '111', 'name': 'X 10', 'available': True, 'pricing': [{'price': 10.0, 'listPrice': 10.0}]},
              {'id': 'b', 'ean': '222', 'name': 'X 30', 'available': False, 'pricing': [{'price': 25.0, 'listPrice': 30.0}]}]
    dados = [_produto(ORGANIZACOES['drogasmil'], 'X', 0, 0, '', 'https://www.drogasmil.com.br/x/p', opcoes),
             _produto('organizacao-desconhecida', 'Y', 5.0, 5.0, '333', 'https://outra.com/y/p')]
    ofertas = extrair_ofertas(dados)
    assert list(ofertas) == ['drogasmil']
    assert [(o.sku_rede, o.preco, o.preco_lista, o.disponivel) for o in ofertas['drogasmil']] == \
        [('x#a', 10.0, None, True), ('x#b', 25.0, 30.0, False)]


def test_laboratorio_amigavel():
    assert laboratorio_amigavel('PRATI DONADUZZI & CIA LTDA') == 'Prati Donaduzzi'
    assert laboratorio_amigavel('EMS S/A') == 'EMS'
    assert laboratorio_amigavel('SANDOZ DO BRASIL INDÚSTRIA FARMACÊUTICA LTDA') == 'Sandoz do Brasil'
    assert laboratorio_amigavel('MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA') == 'Multilab'
