"""
Esquema relacional do MedPreços.

Âncora imutável: `produtos_cmed`, uma linha por APRESENTAÇÃO da lista oficial
CMED/ANVISA, identificada pelo código GGREM (não muda entre publicações). Tudo
o que vem de fora (SKUs das redes, preços) aponta pra ela - nunca o contrário.

Matriz de preços:  Princípio ativo (medicamentos)
                     -> Marca/Genérico/Apresentação (produtos_cmed)
                       -> Rede (mapeamento_sku_redes)
                         -> Preço/Praça ao longo do tempo (historico_precos)
"""
from datetime import date, datetime

from sqlalchemy import (JSON, Boolean, Date, DateTime, Float, ForeignKey, Index, Integer, String, Text,
                        UniqueConstraint)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .db import Base


class Medicamento(Base):
    """Grupo por princípio ativo (a unidade que o usuário busca e compara).
    `id` é o slug da substância - estável entre publicações da CMED."""
    __tablename__ = 'medicamentos'

    id: Mapped[str] = mapped_column(String(160), primary_key=True)
    principio_ativo: Mapped[str] = mapped_column(Text)  # combinações chegam a >1.000 caracteres
    nome: Mapped[str] = mapped_column(String(200))                 # produto de referência, p/ exibição
    descricao: Mapped[str] = mapped_column(Text, default='')
    classe_terapeutica: Mapped[str] = mapped_column(String(300), default='')
    sinonimias: Mapped[list] = mapped_column(JSON, default=list)
    alternativas: Mapped[list] = mapped_column(JSON, default=list)  # [{nome, precoBase}] - mais baratas que a referência
    preco_referencia: Mapped[float | None] = mapped_column(Float)
    so_hospitalar: Mapped[bool] = mapped_column(Boolean, default=False)
    atualizado_em: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    produtos: Mapped[list['ProdutoCmed']] = relationship(back_populates='medicamento')


class ProdutoCmed(Base):
    __tablename__ = 'produtos_cmed'

    ggrem: Mapped[str] = mapped_column(String(20), primary_key=True)
    medicamento_id: Mapped[str] = mapped_column(ForeignKey('medicamentos.id'), index=True)
    registro: Mapped[str] = mapped_column(String(20), index=True)
    ean1: Mapped[str | None] = mapped_column(String(14), index=True)
    ean2: Mapped[str | None] = mapped_column(String(14), index=True)
    ean3: Mapped[str | None] = mapped_column(String(14), index=True)
    substancia: Mapped[str] = mapped_column(Text)
    produto: Mapped[str] = mapped_column(String(200), index=True)
    laboratorio: Mapped[str] = mapped_column(String(200), default='')
    cnpj: Mapped[str] = mapped_column(String(20), default='')
    apresentacao: Mapped[str] = mapped_column(Text, default='')
    classe_terapeutica: Mapped[str] = mapped_column(String(300), default='')
    tipo_produto: Mapped[str] = mapped_column(String(60), default='')  # Novo, Genérico, Similar, Biológico...
    regime_preco: Mapped[str] = mapped_column(String(30), default='')
    tarja: Mapped[str] = mapped_column(String(60), default='')
    restricao_hospitalar: Mapped[bool] = mapped_column(Boolean, default=False)
    pf_por_aliquota: Mapped[dict] = mapped_column(JSON, default=dict)
    pmc_por_aliquota: Mapped[dict] = mapped_column(JSON, default=dict)
    # Referência nacional única (ver STATUS.md): Genérico -> PMC 12%, demais -> PMC 18%
    pmc_referencia: Mapped[float | None] = mapped_column(Float)
    # Chave de apresentação comparável ("50mg|30un"), derivada da APRESENTAÇÃO - ver matching.normalizacao
    chave_apresentacao: Mapped[str | None] = mapped_column(String(120), index=True)
    lista_publicada_em: Mapped[date | None] = mapped_column(Date)
    ativo: Mapped[bool] = mapped_column(Boolean, default=True)    # presente na última lista importada
    criado_em: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    atualizado_em: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    medicamento: Mapped[Medicamento] = relationship(back_populates='produtos')


class Rede(Base):
    """Rede de farmácia e a política de coleta dela (checada rede por rede
    contra robots.txt/Termos de Uso - ver STATUS.md)."""
    __tablename__ = 'redes'

    id: Mapped[str] = mapped_column(String(40), primary_key=True)
    nome: Mapped[str] = mapped_column(String(100))
    plataforma: Mapped[str] = mapped_column(String(20))            # vtex | propria | nenhuma
    base_url: Mapped[str | None] = mapped_column(String(200))
    coleta_ativa: Mapped[bool] = mapped_column(Boolean, default=False)
    motivo: Mapped[str] = mapped_column(Text, default='')
    trechos_nome: Mapped[list] = mapped_column(JSON, default=list)  # p/ reconhecer a rede pelo nome da farmácia no OSM


class MapeamentoSkuRede(Base):
    """Produto de uma rede (SKU) casado com o catálogo canônico."""
    __tablename__ = 'mapeamento_sku_redes'
    __table_args__ = (UniqueConstraint('rede_id', 'sku_rede', name='uq_sku_por_rede'),
                      Index('ix_map_medicamento_rede', 'medicamento_id', 'rede_id'))

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    rede_id: Mapped[str] = mapped_column(ForeignKey('redes.id'))
    sku_rede: Mapped[str] = mapped_column(String(300))            # slug da URL do produto na rede
    titulo: Mapped[str] = mapped_column(Text)
    url: Mapped[str | None] = mapped_column(String(500))
    ean: Mapped[str | None] = mapped_column(String(14), index=True)
    registro: Mapped[str | None] = mapped_column(String(20))
    produto_cmed_ggrem: Mapped[str | None] = mapped_column(ForeignKey('produtos_cmed.ggrem'), index=True)
    medicamento_id: Mapped[str | None] = mapped_column(ForeignKey('medicamentos.id'))
    chave_apresentacao: Mapped[str | None] = mapped_column(String(120))
    metodo_match: Mapped[str] = mapped_column(String(20), default='sem_match')  # ean|registro|nome|sem_match
    score_match: Mapped[float] = mapped_column(Float, default=0.0)
    origem: Mapped[str] = mapped_column(String(20), default='busca')            # sitemap|busca|legado
    pbm: Mapped[dict | None] = mapped_column(JSON)                               # desconto de laboratório (informativo)
    # Último preço conhecido (desnormalizado do histórico p/ consulta rápida)
    ultimo_preco: Mapped[float | None] = mapped_column(Float)
    ultimo_preco_em: Mapped[datetime | None] = mapped_column(DateTime)
    disponivel: Mapped[bool] = mapped_column(Boolean, default=True)
    criado_em: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    atualizado_em: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    rede: Mapped[Rede] = relationship()


class HistoricoPreco(Base):
    __tablename__ = 'historico_precos'

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    mapeamento_id: Mapped[int] = mapped_column(ForeignKey('mapeamento_sku_redes.id', ondelete='CASCADE'), index=True)
    preco: Mapped[float] = mapped_column(Float)
    preco_lista: Mapped[float | None] = mapped_column(Float)     # "de" (antes do desconto da loja)
    disponivel: Mapped[bool] = mapped_column(Boolean, default=True)
    # Praça do preço. Hoje sempre "online-nacional": testado em 29/09/2026, as
    # redes VTEX cobradas devolvem o mesmo preço pra qualquer CEP (o CEP só
    # muda disponibilidade de entrega). A coluna existe pra preço regional futuro.
    praca: Mapped[str] = mapped_column(String(40), default='online-nacional')
    fonte: Mapped[str] = mapped_column(String(20))                # batch|sob_demanda|legado
    coletado_em: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, index=True)

    mapeamento: Mapped[MapeamentoSkuRede] = relationship()


class CacheConsulta(Base):
    """Camada C: cache com TTL de consultas externas (Overpass, geocodificação).
    Fica no banco (e não só no Redis) pra funcionar igual sem Redis no local."""
    __tablename__ = 'cache_consultas'

    chave: Mapped[str] = mapped_column(String(300), primary_key=True)
    valor: Mapped[dict | list] = mapped_column(JSON)
    expira_em: Mapped[datetime] = mapped_column(DateTime, index=True)


class ExecucaoTarefa(Base):
    """Registro de execuções das tarefas de coleta/importação (auditoria e /api/status)."""
    __tablename__ = 'execucoes_tarefas'

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    tarefa: Mapped[str] = mapped_column(String(60), index=True)
    parametros: Mapped[dict] = mapped_column(JSON, default=dict)
    status: Mapped[str] = mapped_column(String(20), default='rodando')  # rodando|ok|erro
    resumo: Mapped[dict] = mapped_column(JSON, default=dict)
    erro: Mapped[str | None] = mapped_column(Text)
    iniciada_em: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    terminada_em: Mapped[datetime | None] = mapped_column(DateTime)
