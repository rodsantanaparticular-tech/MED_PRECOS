"""
Aplicação FastAPI do MedPreços: API em /api e o site (frontend/) em /.

    uvicorn app.main:app --reload          (dev local, SQLite, sem Redis)
    docker compose up                      (Postgres + Redis + worker + agenda)
"""
import logging

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from .api.rotas import rotas
from .config import obter_config

logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(name)s: %(message)s')
logging.getLogger('httpx').setLevel(logging.WARNING)

app = FastAPI(title='MedPreços API', version='0.1.0',
              description='Comparador de preços de medicamentos - catálogo CMED/ANVISA + preços de redes de farmácia.')
app.include_router(rotas)

_frontend = obter_config().frontend_dir
if _frontend.exists():
    # Montado por último: /api/* e /docs têm prioridade
    app.mount('/', StaticFiles(directory=_frontend, html=True), name='frontend')
