# Imagem única do backend MedPreços: a mesma roda a API, o worker Celery e a
# agenda (beat) - muda só o comando (ver docker-compose.yml). O front-end
# (../frontend) é copiado pra dentro e servido pela API em "/".
#
# Build a partir da RAIZ do projeto:  docker build -f backend/Dockerfile .
FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    DADOS_DIR=/dados \
    FRONTEND_DIR=/app/frontend

WORKDIR /app/backend

COPY backend/requirements.txt .
RUN pip install -r requirements.txt

COPY backend/ .
COPY frontend/ /app/frontend/

# Usuário sem privilégio; /dados é o volume persistente (planilhas CMED, legado)
RUN useradd --create-home --uid 1000 medprecos && mkdir -p /dados && chown -R medprecos /dados /app
USER medprecos

EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD python -c "import urllib.request,sys; sys.exit(0 if urllib.request.urlopen('http://localhost:8000/api/saude', timeout=4).status == 200 else 1)"

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--proxy-headers"]
