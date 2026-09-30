"""Endpoints HTTP do MedPreços (todos sob /api)."""
import asyncio
import math
from datetime import datetime

from fastapi import APIRouter, Depends, Header, HTTPException, Query
from sqlalchemy import func, select, text
from sqlalchemy.orm import Session

from ..coleta import geo
from ..coleta.sob_demanda import atualizar_medicamento, redes_desatualizadas
from ..config import obter_config
from ..db import sessao_api
from ..models import (ExecucaoTarefa, HistoricoPreco, MapeamentoSkuRede, Medicamento, ProdutoCmed, Rede)
from ..servicos.busca import indice_busca
from ..servicos.comparacao import comparar, medicamento_para_front, ofertas_do_medicamento, resumo_pbm
from ..workers import fila, tarefas

rotas = APIRouter(prefix='/api')


def _medicamento_ou_404(s: Session, med_id: str) -> Medicamento:
    med = s.get(Medicamento, med_id)
    if med is None:
        raise HTTPException(404, 'Medicamento não encontrado')
    return med


def _raio(raio: float | None) -> float:
    return math.inf if raio is None or raio <= 0 else raio


# ---------------------------------------------------------------- medicamentos
@rotas.get('/medicamentos/busca', summary='Busca por nome comercial, princípio ativo ou sinônimo (tolera erro de digitação)')
def buscar(q: str = Query(..., min_length=2), limite: int = Query(5, ge=1, le=20), s: Session = Depends(sessao_api)):
    return {'termo': q, 'resultados': indice_busca(s).buscar(q, limite)}


@rotas.get('/medicamentos/{med_id}', summary='Detalhes de um medicamento (princípio ativo)')
def detalhar(med_id: str, s: Session = Depends(sessao_api)):
    med = _medicamento_ou_404(s, med_id)
    return medicamento_para_front(med, resumo_pbm(ofertas_do_medicamento(s, med.id)))


@rotas.get('/medicamentos/{med_id}/historico', summary='Histórico de preço por rede numa apresentação')
def historico(med_id: str, apresentacao: str, s: Session = Depends(sessao_api)):
    _medicamento_ou_404(s, med_id)
    linhas = s.execute(
        select(MapeamentoSkuRede.rede_id, HistoricoPreco.coletado_em, func.min(HistoricoPreco.preco))
        .join(HistoricoPreco, HistoricoPreco.mapeamento_id == MapeamentoSkuRede.id)
        .where(MapeamentoSkuRede.medicamento_id == med_id, MapeamentoSkuRede.chave_apresentacao == apresentacao)
        .group_by(MapeamentoSkuRede.rede_id, HistoricoPreco.coletado_em)
        .order_by(HistoricoPreco.coletado_em)).all()
    series: dict[str, list] = {}
    for rede, quando, preco in linhas:
        series.setdefault(rede, []).append({'data': quando.isoformat() + 'Z', 'preco': preco})
    return {'medicamento': med_id, 'apresentacao': apresentacao, 'redes': series}


# ---------------------------------------------------------------- localização / farmácias
@rotas.get('/localizacao', summary='CEP ou texto livre -> coordenadas (ViaCEP + Nominatim, com cache)')
async def localizacao(q: str = ''):
    return await geo.geocodificar(q)


@rotas.get('/localizacao/reversa', summary='Coordenadas -> cidade conhecida mais próxima')
def localizacao_reversa(lat: float, lon: float):
    return geo.cidade_mais_proxima(lat, lon)


@rotas.get('/farmacias', summary='Farmácias reais próximas (OpenStreetMap), com raio escalonado')
async def farmacias(lat: float, lon: float, raio: float | None = Query(None, description='km; vazio = qualquer distância')):
    lista, reserva = await geo.farmacias_proximas(lat, lon, _raio(raio))
    return {'farmacias': lista, 'usouFarmaciasReserva': reserva}


# ---------------------------------------------------------------- comparação
@rotas.get('/comparar', summary='Preço do medicamento nas farmácias perto de um ponto, por apresentação')
async def comparar_precos(medicamento: str, lat: float, lon: float,
                          raio: float | None = Query(None, description='km; vazio = qualquer distância'),
                          apresentacao: str | None = Query(None, description='chave "dose|quantidade"; vazio = a mais vendida'),
                          marca: str | None = Query(None, description='marca buscada (campo "marca" da busca); vazio = a de referência'),
                          atualizar: bool = Query(True, description='atualiza na hora redes com preço vencido (Camada B)'),
                          s: Session = Depends(sessao_api)):
    med = _medicamento_ou_404(s, medicamento)
    cfg = obter_config()
    atualizacao = {'redesAtualizadas': [], 'redesPendentes': []}
    vencidas = [r.id for r in redes_desatualizadas(s, med.id)] if atualizar else []

    async def _atualizar_precos():
        if not vencidas:
            return
        try:
            await asyncio.wait_for(atualizar_medicamento(med.id, vencidas), timeout=cfg.timeout_sob_demanda_s)
            atualizacao['redesAtualizadas'] = vencidas
        except Exception:  # inclui TimeoutError
            # Não segura o usuário: responde com o que tem e termina em segundo plano
            fila.enfileirar('atualizar_medicamento', medicamento_id=med.id)
            atualizacao['redesPendentes'] = vencidas

    # Preço (Camada B) e farmácias (Overpass) são independentes: em paralelo
    _, (lista, reserva) = await asyncio.gather(_atualizar_precos(), geo.farmacias_proximas(lat, lon, _raio(raio)))
    s.expire_all()
    resultado = comparar(s, med, lista, lat, lon, _raio(raio), apresentacao, reserva, marca)
    return {**resultado, 'atualizacao': atualizacao}


# ---------------------------------------------------------------- operação
@rotas.get('/saude', summary='Liveness/readiness (banco e fila)')
def saude(s: Session = Depends(sessao_api)):
    s.execute(text('SELECT 1'))
    fila_ok = None
    if obter_config().redis_url:
        import redis
        try:
            fila_ok = redis.Redis.from_url(obter_config().redis_url, socket_timeout=2).ping()
        except Exception:
            fila_ok = False
    return {'ok': True, 'banco': True, 'fila': fila_ok}


@rotas.get('/status', summary='Números do catálogo, cobertura por rede e últimas tarefas')
def status(s: Session = Depends(sessao_api)):
    por_rede = s.execute(
        select(Rede.id, Rede.nome, Rede.coleta_ativa, func.count(MapeamentoSkuRede.id),
               func.count(MapeamentoSkuRede.medicamento_id), func.max(MapeamentoSkuRede.ultimo_preco_em))
        .outerjoin(MapeamentoSkuRede, MapeamentoSkuRede.rede_id == Rede.id).group_by(Rede.id)).all()
    execucoes = s.scalars(select(ExecucaoTarefa).order_by(ExecucaoTarefa.id.desc()).limit(10)).all()
    return {
        'catalogo': {
            'apresentacoesCmed': s.scalar(select(func.count()).select_from(ProdutoCmed).where(ProdutoCmed.ativo.is_(True))),
            'medicamentos': s.scalar(select(func.count()).select_from(Medicamento)),
            'listaCmedPublicadaEm': str(s.scalar(select(func.max(ProdutoCmed.lista_publicada_em)))),
            'medicamentosComPrecoReal': s.scalar(select(func.count(func.distinct(MapeamentoSkuRede.medicamento_id)))
                                                 .where(MapeamentoSkuRede.ultimo_preco.is_not(None))),
        },
        'redes': [{'id': r, 'nome': n, 'coletaAtiva': a, 'skus': total, 'skusCasados': casados,
                   'ultimoPrecoEm': u.isoformat() + 'Z' if u else None} for r, n, a, total, casados, u in por_rede],
        'ultimasTarefas': [{'id': e.id, 'tarefa': e.tarefa, 'status': e.status, 'iniciadaEm': e.iniciada_em.isoformat() + 'Z',
                            'terminadaEm': e.terminada_em.isoformat() + 'Z' if e.terminada_em else None,
                            'resumo': e.resumo} for e in execucoes],
        'agora': datetime.utcnow().isoformat() + 'Z',
    }


@rotas.post('/tarefas/{nome}', summary='Dispara uma tarefa de fundo (exige X-Admin-Token)', status_code=202)
def disparar_tarefa(nome: str, parametros: dict | None = None, x_admin_token: str = Header('')):
    token = obter_config().admin_token
    if not token or x_admin_token != token:
        raise HTTPException(403, 'Token de administração ausente ou inválido')
    if nome not in tarefas.TAREFAS:
        raise HTTPException(404, f'Tarefas disponíveis: {sorted(tarefas.TAREFAS)}')
    return {'tarefa': nome, 'id': fila.enfileirar(nome, **(parametros or {}))}
