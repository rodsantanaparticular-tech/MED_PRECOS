"""
Configuração central do backend MedPreços, lida de variáveis de ambiente
(ou de um arquivo .env na raiz do backend). Os mesmos nomes valem no local
e na nuvem: o que muda é só o valor (ver .env.example na raiz do projeto).
"""
from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

BACKEND_DIR = Path(__file__).resolve().parent.parent


class Configuracao(BaseSettings):
    model_config = SettingsConfigDict(env_file=BACKEND_DIR / '.env', env_file_encoding='utf-8', extra='ignore')

    # Banco: SQLite local por padrão; no docker-compose/nuvem vira PostgreSQL
    # (ex.: postgresql+psycopg://medprecos:senha@db:5432/medprecos)
    database_url: str = f"sqlite:///{(BACKEND_DIR / 'dados' / 'medprecos.db').as_posix()}"

    # Fila: com REDIS_URL, as tarefas vão pro Celery (worker separado);
    # sem ele, rodam numa thread do próprio processo da API (dev local simples)
    redis_url: str | None = None

    # Pasta de dados persistentes (planilhas CMED baixadas, JSONs legados)
    dados_dir: Path = BACKEND_DIR / 'dados'

    # Pasta do front-end servido pela própria API em "/"
    frontend_dir: Path = BACKEND_DIR.parent / 'frontend'

    # Camada C - políticas de cache (TTL)
    ttl_preco_horas: int = 24            # preço de rede mais velho que isso dispara atualização sob demanda
    ttl_farmacias_horas: int = 24        # resultado do Overpass por região+raio
    ttl_geocodificacao_dias: int = 30    # CEP/endereço -> coordenadas
    timeout_sob_demanda_s: float = 6.0   # orçamento total da atualização síncrona dentro de uma requisição

    # Coleta
    user_agent: str = 'MED_PRECOS-dev/1.0 (comparador de precos, uso nao comercial em MVP)'
    delay_entre_requisicoes_s: float = 0.4
    itens_por_busca_vtex: int = 50       # VTEX aceita até 50 por página (_from/_to)

    # Lomadee Affiliate API (programa de afiliados; chave só leitura - ver STATUS.md).
    # Vazia = as redes da Lomadee (Rosário, Drogasmil, PromoFarma) não são coletadas.
    lomadee_api_key: str = ''
    lomadee_base_url: str = 'https://api.lomadee.com.br'

    # Protege os endpoints que disparam tarefas pesadas (vazio = desabilitados)
    admin_token: str = ''


@lru_cache
def obter_config() -> Configuracao:
    return Configuracao()
