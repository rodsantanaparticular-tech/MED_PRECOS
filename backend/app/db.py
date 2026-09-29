"""
Camada de acesso ao banco (SQLAlchemy 2.0). O código da aplicação só fala com
`Sessao`/`Base`; trocar SQLite (local) por PostgreSQL (nuvem) é só mudar a
DATABASE_URL - nenhum SQL específico de um banco é usado fora das migrações.
"""
from collections.abc import Iterator
from contextlib import contextmanager

from sqlalchemy import create_engine, event
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

from .config import obter_config


class Base(DeclarativeBase):
    pass


def _criar_engine(url: str):
    if url.startswith('sqlite'):
        engine = create_engine(url, connect_args={'check_same_thread': False})

        @event.listens_for(engine, 'connect')
        def _pragmas_sqlite(conexao, _):
            cursor = conexao.cursor()
            cursor.execute('PRAGMA foreign_keys=ON')
            cursor.execute('PRAGMA journal_mode=WAL')  # leitura da API em paralelo com escrita do worker
            cursor.close()

        return engine
    return create_engine(url, pool_pre_ping=True)


def _garantir_pasta_sqlite(url: str) -> None:
    if url.startswith('sqlite:///'):
        from pathlib import Path
        Path(url.removeprefix('sqlite:///')).parent.mkdir(parents=True, exist_ok=True)


_url = obter_config().database_url
_garantir_pasta_sqlite(_url)
engine = _criar_engine(_url)
FabricaSessao = sessionmaker(bind=engine, expire_on_commit=False)


@contextmanager
def sessao() -> Iterator[Session]:
    """Sessão para scripts/tarefas: commit no fim, rollback se der erro."""
    s = FabricaSessao()
    try:
        yield s
        s.commit()
    except Exception:
        s.rollback()
        raise
    finally:
        s.close()


def sessao_api() -> Iterator[Session]:
    """Dependência do FastAPI (uma sessão por requisição)."""
    s = FabricaSessao()
    try:
        yield s
    finally:
        s.close()
