"""
Ponto único pra disparar uma tarefa de fundo, sem o chamador saber onde ela roda:
  - com REDIS_URL -> Celery (worker separado; é o modo docker-compose/nuvem);
  - sem REDIS_URL -> thread daemon no próprio processo (dev local simples).
"""
import logging
import threading

from ..config import obter_config
from . import tarefas

log = logging.getLogger(__name__)
_em_andamento: set[tuple] = set()
_trava = threading.Lock()


def enfileirar(nome: str, **parametros) -> str:
    if nome not in tarefas.TAREFAS:
        raise ValueError(f'Tarefa desconhecida: {nome}')
    if obter_config().redis_url:
        from .celery_app import executar
        return executar.delay(nome, parametros).id

    chave = (nome, tuple(sorted(parametros.items())))
    with _trava:
        if chave in _em_andamento:
            return 'ja-em-andamento'
        _em_andamento.add(chave)

    def _rodar():
        try:
            tarefas.executar(nome, **parametros)
        except Exception:
            log.exception('Tarefa local %s falhou', nome)
        finally:
            with _trava:
                _em_andamento.discard(chave)

    threading.Thread(target=_rodar, name=f'tarefa-{nome}', daemon=True).start()
    return 'thread-local'
