"""
Tarefas de fundo (importação, coleta, manutenção). São funções Python comuns,
registradas por nome: o Celery (nuvem/docker) e a thread local (dev sem Redis)
executam exatamente o mesmo código via `executar(nome, **parametros)`.
Cada execução fica registrada em `execucoes_tarefas` (ver /api/status).
"""
import asyncio
import logging
import traceback
from datetime import datetime

from sqlalchemy import func, select

from ..db import sessao
from ..models import ExecucaoTarefa, ProdutoCmed

log = logging.getLogger(__name__)


def importar_cmed(url: str | None = None) -> dict:
    from ..catalogo.importar_cmed import baixar_planilha, importar
    from ..coleta.persistencia import recasar_todos
    from ..coleta.redes import semear_redes
    from ..coleta.sob_demanda import invalidar_indice
    caminho = baixar_planilha(url)
    with sessao() as s:
        semear_redes(s)
        resumo = importar(s, caminho)
    with sessao() as s:
        resumo['recasamento'] = recasar_todos(s)
    invalidar_indice()
    return resumo


def recasar() -> dict:
    from ..coleta.persistencia import recasar_todos
    from ..coleta.sob_demanda import invalidar_indice
    with sessao() as s:
        resumo = recasar_todos(s)
    invalidar_indice()
    return resumo


def descobrir_sitemaps(redes: list[str] | None = None) -> dict:
    from ..coleta.sitemaps import descobrir
    return asyncio.run(descobrir(redes))


def atualizar_precos_lote(limite_termos: int | None = None, redes: list[str] | None = None) -> dict:
    from ..coleta.lote import atualizar_precos
    return asyncio.run(atualizar_precos(limite_termos, redes))


def atualizar_medicamento(medicamento_id: str) -> dict:
    from ..coleta.sob_demanda import atualizar_medicamento as atualizar
    return asyncio.run(atualizar(medicamento_id))


def limpar_cache() -> dict:
    from ..coleta.cache import limpar_expirados
    with sessao() as s:
        return {'removidos': limpar_expirados(s)}


def carga_inicial(se_vazio: bool = True) -> dict:
    """Banco novo: redes + CMED do mês + preços legados (se houver em dados/legado)."""
    from ..coleta import importar_legado
    from ..coleta.redes import semear_redes
    with sessao() as s:
        semear_redes(s)
        vazio = not s.scalar(select(func.count()).select_from(ProdutoCmed))
    if se_vazio and not vazio:
        return {'pulado': 'banco já tem catálogo'}
    resumo = {'cmed': importar_cmed()}
    with sessao() as s:
        resumo['legado'] = importar_legado.importar(s)
    return resumo


TAREFAS = {f.__name__: f for f in (importar_cmed, recasar, descobrir_sitemaps, atualizar_precos_lote,
                                   atualizar_medicamento, limpar_cache, carga_inicial)}


def executar(nome: str, **parametros) -> dict:
    if nome not in TAREFAS:
        raise ValueError(f'Tarefa desconhecida: {nome}')
    with sessao() as s:
        execucao = ExecucaoTarefa(tarefa=nome, parametros=parametros)
        s.add(execucao)
        s.flush()
        execucao_id = execucao.id
    log.info('Tarefa %s(%s) iniciada', nome, parametros)
    try:
        resumo = TAREFAS[nome](**parametros) or {}
        status, erro = 'ok', None
    except Exception:
        resumo, status, erro = {}, 'erro', traceback.format_exc()
        log.exception('Tarefa %s falhou', nome)
    with sessao() as s:
        e = s.get(ExecucaoTarefa, execucao_id)
        e.status, e.resumo, e.erro, e.terminada_em = status, resumo, erro, datetime.utcnow()
    if status == 'erro':
        raise RuntimeError(f'Tarefa {nome} falhou (ver execucoes_tarefas id={execucao_id})')
    return resumo
