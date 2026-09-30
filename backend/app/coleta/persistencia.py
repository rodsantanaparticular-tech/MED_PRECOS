"""
Grava ofertas coletadas (de qualquer camada) no banco: cria/atualiza o
mapeamento SKU->catálogo, acrescenta ao histórico de preços e substitui as
ofertas vigentes do SKU (promoção da rede, de/por, programa de laboratório).
"""
from datetime import datetime, timedelta

from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from ..matching.casamento import IndiceCatalogo
from ..models import HistoricoPreco, MapeamentoSkuRede, OfertaSku
from .ofertas import oferta_de_por, oferta_programa_laboratorio
from .vtex import Oferta

# Não repete no histórico o mesmo preço coletado de novo em menos que isso
INTERVALO_MIN_HISTORICO = timedelta(hours=20)


def registrar_ofertas(s: Session, rede_id: str, ofertas: list[Oferta], indice: IndiceCatalogo, fonte: str,
                      coletado_em: datetime | None = None, origem: str = 'busca') -> dict:
    coletado_em = coletado_em or datetime.utcnow()
    skus = [o.sku_rede for o in ofertas]
    existentes = {}
    for i in range(0, len(skus), 500):  # IN (...) em blocos: limite de parâmetros do SQLite
        for m in s.scalars(select(MapeamentoSkuRede).options(selectinload(MapeamentoSkuRede.ofertas))
                           .where(MapeamentoSkuRede.rede_id == rede_id,
                                  MapeamentoSkuRede.sku_rede.in_(skus[i:i + 500]))):
            existentes[m.sku_rede] = m
    contagem = {'ofertas': len(ofertas), 'novos_skus': 0, 'casados': 0, 'precos_gravados': 0, 'com_promocao': 0}

    for o in ofertas:
        m = existentes.get(o.sku_rede)
        if m is None:
            m = MapeamentoSkuRede(rede_id=rede_id, sku_rede=o.sku_rede, titulo=o.titulo, origem=origem)
            s.add(m)
            existentes[o.sku_rede] = m
            contagem['novos_skus'] += 1
        precisa_casar = m.metodo_match in (None, 'sem_match') or m.titulo != o.titulo or (o.ean and m.ean != o.ean)
        m.titulo, m.url = o.titulo, o.url or m.url
        m.ean = o.ean or m.ean
        m.registro = (o.registros[0] if o.registros else None) or m.registro
        m.pbm = o.pbm
        if precisa_casar:
            r = indice.casar(o.titulo, o.ean, o.registros)
            m.medicamento_id, m.produto_cmed_ggrem = r.medicamento_id, r.ggrem
            m.chave_apresentacao, m.metodo_match, m.score_match = r.chave_apresentacao, r.metodo, r.score
        contagem['casados'] += m.metodo_match != 'sem_match'

        repetido = (m.ultimo_preco == o.preco and m.ultimo_preco_em
                    and coletado_em - m.ultimo_preco_em < INTERVALO_MIN_HISTORICO)
        if m.ultimo_preco_em is None or coletado_em >= m.ultimo_preco_em:
            m.ultimo_preco, m.ultimo_preco_em, m.disponivel = o.preco, coletado_em, o.disponivel
            # Ofertas valem pro preço desta coleta: substitui todas (a que a loja tirou some daqui)
            m.ofertas = [OfertaSku(coletado_em=coletado_em, **dados) for dados in _ofertas_da_coleta(o)]
            contagem['com_promocao'] += bool(o.promocoes)
        if not repetido:
            s.add(HistoricoPreco(mapeamento=m, preco=o.preco, preco_lista=o.preco_lista, disponivel=o.disponivel,
                                 fonte=fonte, coletado_em=coletado_em))
            contagem['precos_gravados'] += 1
    s.flush()
    return contagem


def _ofertas_da_coleta(o: Oferta) -> list[dict]:
    extras = [oferta_de_por(o.preco, o.preco_lista), oferta_programa_laboratorio(o.pbm, o.preco)]
    return list(o.promocoes) + [e for e in extras if e]


def recasar_todos(s: Session) -> dict:
    """Refaz o casamento de todos os SKUs com o catálogo atual. Roda depois de
    cada importação da CMED (apresentações/EANs novos podem casar SKUs que antes
    não casavam) e depois de mudanças nas regras de casamento."""
    indice = IndiceCatalogo(s)
    contagem: dict[str, int] = {}
    for m in s.scalars(select(MapeamentoSkuRede)):
        r = indice.casar(m.titulo, m.ean, [m.registro] if m.registro else [])
        m.medicamento_id, m.produto_cmed_ggrem = r.medicamento_id, r.ggrem
        m.chave_apresentacao, m.metodo_match, m.score_match = r.chave_apresentacao, r.metodo, r.score
        contagem[r.metodo] = contagem.get(r.metodo, 0) + 1
    s.flush()
    return contagem
