"""O lote respeita a loja: espera quando ela pede pausa (429/503) e desiste da rede se ela insistir."""
import asyncio

import httpx
import pytest

from app.coleta import vtex

PRODUTO = [{'productName': 'Xarelto 20mg 28 Comprimidos', 'link': 'https://loja/xarelto-20mg/p',
            'items': [{'ean': '7891106907064', 'sellers': [{'commertialOffer': {'Price': 274.99, 'IsAvailable': True}}]}]}]


def _rodar(respostas: list[int], n_termos: int = 3) -> tuple[list, list[float], int]:
    """Roda buscar_varios_termos contra uma loja falsa que responde os status na ordem dada."""
    fila, esperas, chamadas = list(respostas), [], [0]

    def responder(request):
        chamadas[0] += 1
        status = fila.pop(0) if fila else 200
        return httpx.Response(status, json=PRODUTO if status == 200 else {}, headers={'Retry-After': '7'})

    async def dormir(segundos):
        esperas.append(segundos)

    original_cliente, original_sleep = vtex.novo_cliente, asyncio.sleep
    vtex.novo_cliente = lambda timeout=15: httpx.AsyncClient(transport=httpx.MockTransport(responder))
    vtex.asyncio.sleep = dormir
    try:
        ofertas = asyncio.run(vtex.buscar_varios_termos('https://loja', [f't{i}' for i in range(n_termos)], atraso_s=0.4))
    finally:
        vtex.novo_cliente, vtex.asyncio.sleep = original_cliente, original_sleep
    return ofertas, esperas, chamadas[0]


def test_espera_o_retry_after_e_segue():
    ofertas, esperas, _ = _rodar([429, 200, 200])
    assert len(ofertas) == 1          # o mesmo produto nos termos que passaram
    assert 7.0 in esperas             # respeitou o Retry-After da loja
    assert 0.8 in esperas             # e dobrou o intervalo entre requisições


def test_desiste_da_rede_se_a_loja_insiste():
    ofertas, _, chamadas = _rodar([429] * 20, n_termos=8)
    assert ofertas == [] and chamadas == vtex.MAX_RECUSAS_SEGUIDAS  # parou nos 5, não fez os 8


@pytest.mark.parametrize('status', [404, 500])
def test_outros_erros_nao_disparam_pausa(status):
    _, esperas, _ = _rodar([status, 200, 200])
    assert 7.0 not in esperas
