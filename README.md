# MedPreços

*Cuide da sua saúde e do seu bolso.* Comparador de preços de medicamentos: catálogo oficial CMED/ANVISA,
preços reais de redes de farmácia e farmácias perto de você (OpenStreetMap).

## Rodar

### Com Docker (igual à produção)
```bash
cp .env.example .env              # opcional: troque POSTGRES_PASSWORD
docker compose up -d --build
```
Site e API sobem em **http://localhost:8731**. A documentação interativa da API fica em `/docs`.
Na primeira subida, o serviço `preparar` cria as tabelas, baixa a lista CMED do mês e importa os preços
que já tinham sido raspados (`backend/dados/legado/`, se existir). Leva de 2 a 3 minutos.

| Serviço | Papel |
|---|---|
| `db` | PostgreSQL 16 (só na rede interna) |
| `redis` | fila do Celery (só na rede interna) |
| `preparar` | migração + carga inicial (roda e termina) |
| `api` | FastAPI: `/api/*` e o site em `/` |
| `worker` | Celery: importações e coletas em segundo plano |
| `agenda` | Celery beat: CMED todo dia 12, sitemaps domingo, preços em lote segunda, limpeza de cache diária |

### Sem Docker (desenvolvimento rápido)
```bash
cd backend
python -m venv .venv && .venv/Scripts/pip install -r requirements-dev.txt   # Linux/Mac: .venv/bin/pip
.venv/Scripts/python -m app.cli migrar
.venv/Scripts/python -m app.cli carga-inicial
.venv/Scripts/python -m uvicorn app.main:app --port 8731 --reload
```
Sem `DATABASE_URL`, o banco é SQLite (`backend/dados/medprecos.db`). Sem `REDIS_URL`, as tarefas rodam
numa thread da própria API.

### Tarefas à mão
```bash
python -m app.cli tarefa importar_cmed                   # lista CMED mais recente + recasamento
python -m app.cli tarefa descobrir_sitemaps --redes '["venancio"]'
python -m app.cli tarefa atualizar_precos_lote --limite_termos 40
python -m app.cli tarefa atualizar_medicamento --medicamento_id rivaroxabana
```
No Docker, o mesmo comando vai com `docker compose exec worker ...`. Com `ADMIN_TOKEN` definido, também dá
para disparar por `POST /api/tarefas/{nome}` com o cabeçalho `X-Admin-Token`.

### Testes
```bash
cd backend && .venv/Scripts/python -m pytest
```

## Como está organizado

```
frontend/              site estático (HTML/CSS/JS), servido pela API em "/"
backend/app/
  catalogo/            Frente 1 - catálogo canônico: importação CMED, enriquecimento (descrição/sinônimos)
  coleta/              Frente 2 - redes e política de coleta, VTEX, sitemaps (Camada A), sob demanda (Camada B),
                                  cache com TTL (Camada C), lote, geolocalização/farmácias, carga legada
  matching/            Frente 3 - normalização, chave de apresentação (dose|quantidade), casamento EAN > registro > nome
  api/ servicos/       Frente 4 - endpoints FastAPI, busca e comparação
  workers/             Frente 4 - tarefas, fila (Celery ou thread), agenda
  models.py db.py      esquema relacional (SQLAlchemy, SQLite local / PostgreSQL)
backend/migracoes/     Alembic
backend/tests/         pytest (sem rede)
scripts/legado/        scripts anteriores ao backend (referência histórica)
```

Estado, decisões e histórico: ver `STATUS.md`.
