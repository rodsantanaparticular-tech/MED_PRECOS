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
    # "Drogaria SP" (abreviação no OSM) é reconhecida como Drogaria São Paulo, com PBM
    assert por_nome['Drogaria SP']['preco'] == 280.38 and por_nome['Drogaria SP']['pbm'] == {'desconto': 17.0}
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


def test_tarefas_exigem_token(cliente):
    assert cliente.post('/api/tarefas/limpar_cache').status_code == 403
