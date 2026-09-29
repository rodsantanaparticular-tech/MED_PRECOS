"""
Carga inicial: traz pro banco os preços já raspados pelos scripts antigos
(dados/legado/precos_vtex.json e precos_panvel.json - ver scripts/legado/),
com a data real da coleta (data de modificação do arquivo), marcados fonte=legado.
"""
import json
import logging
from datetime import datetime
from pathlib import Path

from sqlalchemy.orm import Session

from ..config import obter_config
from ..matching.casamento import IndiceCatalogo
from .persistencia import registrar_ofertas
from .vtex import Oferta, slug_da_url

log = logging.getLogger(__name__)


def _oferta(rede: str, p: dict) -> Oferta | None:
    sku = slug_da_url(p.get('url')) or p.get('nome')
    if not sku or not p.get('preco'):
        return None
    pbm = p.get('pbm')
    # O raspador antigo contava como PBM, na Drogaria São Paulo, produtos cujo campo
    # 'PBM' só listava nomes de especificação (tudo nulo) - falso positivo, descartado
    if pbm and not any(pbm.values()) and rede == 'drogariasaopaulo':
        pbm = None
    return Oferta(sku_rede=sku, titulo=p.get('nome') or sku, url=p.get('url'), preco=float(p['preco']),
                  preco_lista=None, disponivel=p.get('disponivel') is not False,
                  registros=p.get('registros') or [], pbm=pbm)


def importar(s: Session, pasta: Path | None = None) -> dict:
    pasta = pasta or obter_config().dados_dir / 'legado'
    indice = IndiceCatalogo(s)
    resumo = {}
    arquivos = [('precos_vtex.json', None), ('precos_panvel.json', 'panvel')]
    for nome, rede_unica in arquivos:
        caminho = pasta / nome
        if not caminho.exists():
            log.info('Legado ausente, pulando: %s', caminho)
            continue
        coletado_em = datetime.utcfromtimestamp(caminho.stat().st_mtime)
        dados = json.loads(caminho.read_text(encoding='utf-8'))
        por_rede = {rede_unica: dados} if rede_unica else dados
        for rede, produtos in por_rede.items():
            ofertas = [o for o in (_oferta(rede, p) for p in produtos.values()) if o]
            resumo[rede] = registrar_ofertas(s, rede, ofertas, indice, fonte='legado', coletado_em=coletado_em,
                                             origem='legado')
            log.info('Legado %s: %s', rede, resumo[rede])
    return resumo
