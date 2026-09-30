"""
Testes rodam num SQLite temporário com um mini catálogo, sem rede. A URL do
banco precisa estar no ambiente ANTES de importar `app` (o engine é criado no import).
"""
import os
import tempfile
from datetime import datetime, timedelta
from pathlib import Path

_pasta = Path(tempfile.mkdtemp(prefix='medprecos-testes-'))
os.environ['DATABASE_URL'] = f"sqlite:///{(_pasta / 'teste.db').as_posix()}"
os.environ['REDIS_URL'] = ''
os.environ['DADOS_DIR'] = str(_pasta)

import pytest  # noqa: E402

from app.coleta.redes import semear_redes  # noqa: E402
from app.db import Base, engine, sessao  # noqa: E402
from app.models import MapeamentoSkuRede, Medicamento, OfertaSku, ProdutoCmed  # noqa: E402


def _produto(ggrem, med, produto, apresentacao, chave, pmc, ean=None, registro='', tipo='Similar', lab='LAB X'):
    return ProdutoCmed(ggrem=ggrem, medicamento_id=med, registro=registro, ean1=ean, substancia=med.upper(),
                       produto=produto, laboratorio=lab, apresentacao=apresentacao, tipo_produto=tipo,
                       pmc_referencia=pmc, chave_apresentacao=chave, ativo=True)


@pytest.fixture(scope='session', autouse=True)
def catalogo():
    Base.metadata.create_all(engine)
    with sessao() as s:
        semear_redes(s)
        s.add_all([
            Medicamento(id='rivaroxabana', principio_ativo='Rivaroxabana', nome='Xarelto', preco_referencia=300.0,
                        sinonimias=['Rivaxa'], alternativas=[{'nome': 'Rivaroxabana', 'precoBase': 150.0}],
                        descricao='Anticoagulante.'),
            Medicamento(id='paracetamol', principio_ativo='Paracetamol', nome='Tylenol', preco_referencia=23.5,
                        sinonimias=['tylenol'], alternativas=[]),
            Medicamento(id='paracetamol-cloridrato-de-pseudoefedrina', nome='Tylenol Sinus',
                        principio_ativo='Paracetamol;cloridrato de Pseudoefedrina', preco_referencia=30.0),
        ])
        s.flush()
        s.add_all([
            _produto('1', 'rivaroxabana', 'XARELTO', '20 MG COM REV CT X 28', '20mg|28', 300.0, ean='7891106907064',
                     registro='1705600480217', tipo='Novo', lab='BAYER S.A.'),
            _produto('2', 'rivaroxabana', 'RIVAROXABANA', '20 MG COM REV CT X 28', '20mg|28', 150.0, tipo='Genérico',
                     lab='EMS S/A'),
            _produto('3', 'rivaroxabana', 'XARELTO', '10 MG COM REV CT X 10', '10mg|10', 110.0, tipo='Novo'),
            _produto('4', 'paracetamol', 'TYLENOL', '750 MG COM REV CT X 20', '750mg|20', 50.0, tipo='Novo'),
            _produto('5', 'paracetamol-cloridrato-de-pseudoefedrina', 'TYLENOL SINUS', '(500 + 30) MG COM X 24',
                     '30mg+500mg|24', 30.0, tipo='Novo'),
        ])
        s.flush()
        agora = datetime.utcnow()
        tres_dias = agora - timedelta(days=3)
        # (rede, título, preço, chave, coletado em, ofertas vigentes do SKU)
        for rede, titulo, preco, chave, quando, ofertas in [
            # Promoção que NÃO compensa: 183,33/un. > avulso mais barato da rede (55,49) -> não aparece
            ('paguemenos', 'Xarelto 20mg 28 Comprimidos', 274.99, '20mg|28', agora,
             [dict(tipo='promocao_rede', descricao='LEVE 3 PAGUE 2', quantidade_minima=3, percentual=33.3,
                   preco_efetivo_unitario=183.33)]),
            # Promoção do próprio produto mais barato -> aparece na linha, sem repetir o nome do produto
            ('paguemenos', 'Rivaroxabana 20mg 28 Comprimidos Genérico', 55.49, '20mg|28', agora,
             [dict(tipo='promocao_rede', descricao='LEVE 2 PAGUE 1', quantidade_minima=2, percentual=50.0,
                   preco_efetivo_unitario=27.75)]),
            ('drogariasaopaulo', 'Xarelto Rivaroxabana 20mg 28 Comprimidos', 280.38, '20mg|28', agora,
             [dict(tipo='programa_laboratorio', descricao='Programa Bayer pra você (com cadastro do CPF)',
                   percentual=17.0, preco_efetivo_unitario=232.72, exige_cpf=True),
              dict(tipo='de_por', descricao='De R$ 300,00 por R$ 280,38', percentual=6.5,
                   preco_efetivo_unitario=280.38, detalhes={'precoLista': 300.0})]),
            # Coleta velha (3 dias): a promoção não é mais exibida
            ('drogariasaopaulo', 'Xarelto Rivaroxabana 10mg 10 Comprimidos', 100.15, '10mg|10', tres_dias,
             [dict(tipo='promocao_rede', descricao='LEVE 2 PAGUE 1', quantidade_minima=2, percentual=50.0,
                   preco_efetivo_unitario=50.08)]),
        ]:
            s.add(MapeamentoSkuRede(rede_id=rede, sku_rede=titulo.lower().replace(' ', '-'), titulo=titulo,
                                    medicamento_id='rivaroxabana', chave_apresentacao=chave, metodo_match='nome',
                                    ultimo_preco=preco, ultimo_preco_em=quando, disponivel=True,
                                    pbm={'programa': 'Bayer pra você', 'desconto': 17.0, 'precoMin': None}
                                    if rede == 'drogariasaopaulo' else None,
                                    ofertas=[OfertaSku(coletado_em=quando, **o) for o in ofertas]))
    yield


FARMACIAS_FIXAS = [
    {'id': 'osm-1', 'nome': 'Pague Menos', 'latitude': -23.5505, 'longitude': -46.6333, 'fatorPreco': 1.0,
     'horario': {'abertura': 8, 'fechamento': 20, 'domingoAberto': False}, 'endereco': 'Rua A', 'bairro': '', 'cep': ''},
    {'id': 'osm-2', 'nome': 'Drogaria SP', 'latitude': -23.5515, 'longitude': -46.6343, 'fatorPreco': 1.0,
     'horario': {'abertura': 8, 'fechamento': 20, 'domingoAberto': False}, 'endereco': 'Rua B', 'bairro': '', 'cep': ''},
    {'id': 'osm-3', 'nome': 'Droga Raia', 'latitude': -23.5525, 'longitude': -46.6353, 'fatorPreco': 1.1,
     'horario': {'abertura': 8, 'fechamento': 20, 'domingoAberto': False}, 'endereco': 'Rua C', 'bairro': '', 'cep': ''},
    {'id': 'osm-4', 'nome': 'Farmácia Longe', 'latitude': -22.0, 'longitude': -45.0, 'fatorPreco': 1.0,
     'horario': {'abertura': 8, 'fechamento': 20, 'domingoAberto': False}, 'endereco': 'Rua D', 'bairro': '', 'cep': ''},
]
