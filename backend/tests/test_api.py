"""Endpoints da API, sem rede (farmácias fixas no lugar do Overpass)."""
import pytest
from fastapi.testclient import TestClient

from app.coleta import geo
from app.main import app

from .conftest import FARMACIAS_FIXAS


@pytest.fixture
def cliente(monkeypatch):
    async def farmacias_fixas(lat, lon, raio):
        return FARMACIAS_FIXAS, False
    monkeypatch.setattr(geo, 'farmacias_proximas', farmacias_fixas)
    return TestClient(app)


def test_saude(cliente):
    assert cliente.get('/api/saude').json()['ok'] is True


def test_busca_por_marca_e_com_erro_de_digitacao(cliente):
    assert cliente.get('/api/medicamentos/busca', params={'q': 'xarelto'}).json()['resultados'][0]['id'] == 'rivaroxabana'
    assert cliente.get('/api/medicamentos/busca', params={'q': 'xareltu'}).json()['resultados'][0]['id'] == 'rivaroxabana'
    assert cliente.get('/api/medicamentos/busca', params={'q': 'zzzzzz'}).json()['resultados'] == []


def test_medicamento_inexistente_404(cliente):
    assert cliente.get('/api/medicamentos/nao-existe').status_code == 404


def test_comparar_por_apresentacao(cliente):
    r = cliente.get('/api/comparar', params={'medicamento': 'rivaroxabana', 'lat': -23.5505, 'lon': -46.6333,
                                             'raio': 10, 'atualizar': 'false'}).json()
    # Padrão = apresentação vendida por mais redes
    assert r['apresentacaoSelecionada'] == '20mg|28'
    por_nome = {f['dados']['nome']: f for f in r['farmacias']}
    # Pague Menos: o MAIS BARATO da rede nessa apresentação (genérico), com o produto
    assert por_nome['Pague Menos']['preco'] == 55.49 and por_nome['Pague Menos']['precoReal']
    assert 'Genérico' in por_nome['Pague Menos']['produto']['titulo']
    # "Drogaria SP" (abreviação no OSM) é reconhecida como Drogaria São Paulo
    assert por_nome['Drogaria SP']['preco'] == 280.38
    # Rede sem coleta: estimativa = menor PMC da apresentação x 0,85 x fator da farmácia
    assert por_nome['Droga Raia']['precoReal'] is False
    assert por_nome['Droga Raia']['preco'] == round(150.0 * 0.85 * 1.1, 2)
    # Fora do raio não aparece
    assert 'Farmácia Longe' not in por_nome
    assert r['medicamento']['pbm']['programas'] == ['Bayer pra você']


def test_comparar_outra_apresentacao(cliente):
    r = cliente.get('/api/comparar', params={'medicamento': 'rivaroxabana', 'lat': -23.5505, 'lon': -46.6333,
                                             'raio': 10, 'apresentacao': '10mg|10', 'atualizar': 'false'}).json()
    assert r['apresentacaoSelecionada'] == '10mg|10'
    reais = [f for f in r['farmacias'] if f['precoReal']]
    assert [f['preco'] for f in reais] == [100.15]
    # Promoção de coleta com mais de 48h não é exibida (as lojas não informam validade)
    assert r['ofertasApresentacao'] == [] and all(f['ofertas'] == [] for f in reais)


def test_ofertas_proativas_na_comparacao(cliente):
    r = cliente.get('/api/comparar', params={'medicamento': 'rivaroxabana', 'lat': -23.5505, 'lon': -46.6333,
                                             'raio': 10, 'atualizar': 'false'}).json()
    por_nome = {f['dados']['nome']: f for f in r['farmacias']}
    # Pague Menos: a promoção do próprio produto da linha aparece, sem repetir o nome do produto;
    # a do Xarelto (183,33/un.) não compensa frente ao genérico avulso (55,49) e fica de fora
    pm = por_nome['Pague Menos']['ofertas']
    assert [(o['descricao'], o['quantidadeMinima'], o['precoEfetivoUnitario'], o['produto']) for o in pm] == \
        [('LEVE 2 PAGUE 1', 2, 27.75, None)]
    assert pm[0]['precoUnitario'] == 55.49            # preço cheio sempre junto (Anvisa)
    # Drogaria São Paulo: programa do laboratório do produto da linha + preço "de"
    dsp = por_nome['Drogaria SP']
    assert [(o['tipo'], o['exigeCpf'], o['percentual']) for o in dsp['ofertas']] == \
        [('programa_laboratorio', True, 17.0)]
    assert dsp['precoLista'] == 300.0
    # Resumo do medicamento: só promoções que compensam, uma por rede
    assert [(o['rede'], o['descricao']) for o in r['ofertasApresentacao']] == [('paguemenos', 'LEVE 2 PAGUE 1')]
    assert next(a for a in r['apresentacoes'] if a['chave'] == '20mg|28')['redesComPromocao'] == 1
    # Ordenação e selo continuam pelo preço unitário avulso
    assert por_nome['Pague Menos']['preco'] == 55.49


def test_busca_informa_a_marca_e_aceita_termo_mais_longo(cliente):
    r = cliente.get('/api/medicamentos/busca', params={'q': 'xarelto 20mg'}).json()['resultados'][0]
    assert (r['id'], r['marca']) == ('rivaroxabana', 'Xarelto')
    r = cliente.get('/api/medicamentos/busca', params={'q': 'rivaroxabana'}).json()['resultados'][0]
    assert r['marca'] is None   # buscou o princípio ativo, não uma marca


def test_ofertas_da_marca_separadas_dos_genericos(cliente):
    r = cliente.get('/api/comparar', params={'medicamento': 'rivaroxabana', 'lat': -23.5505, 'lon': -46.6333,
                                             'raio': 10, 'atualizar': 'false', 'marca': 'Xarelto'}).json()
    marca = r['ofertasMarca']
    assert marca['marca'] == 'Xarelto'
    # A promoção do Xarelto aparece no bloco da marca (compensa frente ao Xarelto avulso),
    # mesmo não compensando frente ao genérico; e o programa do laboratório da DSP também
    por_rede = {x['rede']: x for x in marca['redes']}
    assert [o['descricao'] for o in por_rede['paguemenos']['ofertas']] == ['LEVE 3 PAGUE 2']
    assert por_rede['paguemenos']['preco'] == 274.99
    assert [(o['tipo'], o['precoEfetivoUnitario']) for o in por_rede['drogariasaopaulo']['ofertas']] == \
        [('programa_laboratorio', 232.72)]
    assert [x['rede'] for x in marca['redes']] == ['paguemenos', 'drogariasaopaulo']  # melhor preço primeiro
    # O bloco de genéricos/similares não repete a marca
    assert [(o['rede'], o['descricao']) for o in r['ofertasApresentacao']] == [('paguemenos', 'LEVE 2 PAGUE 1')]


def test_tarefas_exigem_token(cliente):
    assert cliente.post('/api/tarefas/limpar_cache').status_code == 403
