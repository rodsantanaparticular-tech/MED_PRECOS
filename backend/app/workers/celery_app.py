"""
Celery (usado quando REDIS_URL está definido - docker-compose e nuvem).

    worker: celery -A app.workers.celery_app worker -l info
    agenda: celery -A app.workers.celery_app beat -l info

A agenda substitui a tarefa do Windows (scripts/legado/atualizar-precos.ps1):
roda dentro do próprio ambiente, então vai junto pra nuvem.
"""
from celery import Celery
from celery.schedules import crontab

from ..config import obter_config
from . import tarefas

_redis = obter_config().redis_url or 'redis://localhost:6379/0'
app = Celery('medprecos', broker=_redis, backend=_redis)
app.conf.update(
    timezone='America/Sao_Paulo',
    task_acks_late=True,              # tarefa só sai da fila quando termina (worker que cai não perde tarefa)
    worker_prefetch_multiplier=1,     # tarefas longas: um por vez por processo
    task_time_limit=6 * 3600,
    result_expires=7 * 24 * 3600,
)


@app.task(name='medprecos.executar')
def executar(nome: str, parametros: dict | None = None) -> dict:
    return tarefas.executar(nome, **(parametros or {}))


def _agendada(nome: str, **parametros):
    return {'task': 'medprecos.executar', 'args': (nome, parametros)}


app.conf.beat_schedule = {
    # A CMED publica a lista nova por volta do dia 9-10 de cada mês
    'cmed-mensal': {**_agendada('importar_cmed'), 'schedule': crontab(day_of_month='12', hour=2, minute=0)},
    'sitemaps-semanal': {**_agendada('descobrir_sitemaps'), 'schedule': crontab(day_of_week='sun', hour=3, minute=0)},
    'precos-lote-semanal': {**_agendada('atualizar_precos_lote'), 'schedule': crontab(day_of_week='mon', hour=3, minute=0)},
    'limpar-cache-diario': {**_agendada('limpar_cache'), 'schedule': crontab(hour=4, minute=30)},
}
