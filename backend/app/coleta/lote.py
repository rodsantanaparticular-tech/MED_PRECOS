"""
Atualização de preços em lote (substitui scripts/legado/atualizar-precos.ps1 +
scrape_precos_vtex.py): busca, em cada rede ativa, os princípios ativos do
catálogo vendidos em farmácia. Redes rodam em paralelo; dentro de cada rede,
uma requisição por vez com atraso (educado com a loja).

Com a Camada B cobrindo o que é consultado, o lote serve pra manter o
histórico e o "preço de partida" de todo o catálogo; roda semanal/mensal
(agenda em workers/celery_app.py).
"""
import asyncio
import logging

from sqlalchemy import select

from ..db import sessao
from ..matching.casamento import IndiceCatalogo
from ..models import Medicamento, Rede
from . import vtex
from .persistencia import registrar_ofertas
from .sob_demanda import termos_de_busca

log = logging.getLogger(__name__)


async def atualizar_precos(limite_termos: int | None = None, rede_ids: list[str] | None = None) -> dict:
    with sessao() as s:
        meds = s.scalars(select(Medicamento).where(Medicamento.so_hospitalar.is_(False),
                                                   Medicamento.preco_referencia.is_not(None))
                         .order_by(Medicamento.id)).all()
        termos: list[str] = []
        for m in meds:
            termos += [t for t in termos_de_busca(m) if t not in termos]
        consulta = select(Rede).where(Rede.coleta_ativa.is_(True), Rede.plataforma == 'vtex')
        if rede_ids:
            consulta = consulta.where(Rede.id.in_(rede_ids))
        redes = [(r.id, r.base_url) for r in s.scalars(consulta)]
    termos = termos[:limite_termos] if limite_termos else termos
    log.info('Lote: %d termos x %d redes', len(termos), len(redes))

    resultados = await asyncio.gather(*(vtex.buscar_varios_termos(base, termos) for _, base in redes))
    resumo = {}
    with sessao() as s:
        indice = IndiceCatalogo(s)
        for (rede_id, _), ofertas in zip(redes, resultados):
            resumo[rede_id] = registrar_ofertas(s, rede_id, ofertas, indice, fonte='batch')
            log.info('Lote %s: %s', rede_id, resumo[rede_id])
    return {'termos': len(termos), 'redes': resumo}
