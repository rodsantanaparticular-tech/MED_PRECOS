"""Alembic: usa a mesma DATABASE_URL e os mesmos modelos da aplicação."""
from logging.config import fileConfig

from alembic import context

from app import models  # noqa: F401  (registra as tabelas em Base.metadata)
from app.db import Base, engine

config = context.config
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

target_metadata = Base.metadata


def run_migrations_offline() -> None:
    context.configure(url=str(engine.url), target_metadata=target_metadata, literal_binds=True,
                      dialect_opts={'paramstyle': 'named'}, render_as_batch=True)
    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    with engine.connect() as conexao:
        # render_as_batch: ALTER TABLE no SQLite (que não suporta a maioria) vira "recria a tabela"
        context.configure(connection=conexao, target_metadata=target_metadata, render_as_batch=True)
        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
