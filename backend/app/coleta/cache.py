"""
Camada C - cache com TTL de consultas externas, compartilhado por todos os
usuários (antes ficava no localStorage de cada navegador). Guardado no banco
pra funcionar igual com ou sem Redis.

Políticas (config.py): farmácias por região 24h, geocodificação 30 dias,
preço de rede 24h (esse fica em mapeamento_sku_redes.ultimo_preco_em).
"""
from datetime import datetime, timedelta

from sqlalchemy import delete
from sqlalchemy.orm import Session

from ..db import sessao
from ..models import CacheConsulta


def ler(chave: str, s: Session | None = None, aceitar_vencido: bool = False):
    """aceitar_vencido: devolve mesmo passado o TTL - usado quando a fonte
    externa está fora do ar (dado de ontem é melhor que dado nenhum)."""
    def _ler(sess):
        item = sess.get(CacheConsulta, chave)
        if item and (aceitar_vencido or item.expira_em > datetime.utcnow()):
            return item.valor
        return None
    if s is not None:
        return _ler(s)
    with sessao() as sess:
        return _ler(sess)


def gravar(chave: str, valor, ttl: timedelta, s: Session | None = None) -> None:
    def _gravar(sess):
        item = sess.get(CacheConsulta, chave)
        expira = datetime.utcnow() + ttl
        if item:
            item.valor, item.expira_em = valor, expira
        else:
            sess.add(CacheConsulta(chave=chave, valor=valor, expira_em=expira))
    if s is not None:
        _gravar(s)
        return
    with sessao() as sess:
        _gravar(sess)


def limpar_expirados(s: Session) -> int:
    return s.execute(delete(CacheConsulta).where(CacheConsulta.expira_em <= datetime.utcnow())).rowcount or 0
