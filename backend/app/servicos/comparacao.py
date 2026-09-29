"""
Monta a comparação de preço de um medicamento nas farmácias perto do usuário
(o que antes era executarBusca() + calcularPrecoFarmacia() no navegador).

Diferença importante em relação ao front antigo: a comparação é POR
APRESENTAÇÃO (dose + quantidade). Antes, o "preço do Xarelto" numa rede era o
produto mais barato de rivaroxabana de qualquer tamanho - 10 comprimidos numa
farmácia contra 28 na outra. Agora o usuário escolhe a apresentação (padrão:
a que mais redes vendem) e todas as farmácias são comparadas nela.

Preço por farmácia:
  1. REAL: a farmácia é de uma rede coletada e a rede vende essa apresentação
     -> menor preço disponível na rede (qualquer marca/genérico), com o produto;
  2. ESTIMADO: senão, teto CMED (PMC) da apresentação mais barata com essa
     chave x 0,85 x fator fixo da farmácia (mesma regra do front antigo).
"""
from collections import defaultdict
from datetime import datetime, timedelta

from sqlalchemy import select
from sqlalchemy.orm import Session

from ..config import obter_config
from ..coleta.geo import distancia_km
from ..matching.normalizacao import normalizar, rotulo_chave
from ..models import MapeamentoSkuRede, Medicamento, ProdutoCmed, Rede

MAX_FARMACIAS_EXIBIDAS = 15
FATOR_ESTIMATIVA = 0.85


def identificar_rede(farmacia: dict, redes: list[Rede]) -> Rede | None:
    nome = normalizar(f"{farmacia.get('marca') or ''} {farmacia.get('nome') or ''}")
    for r in redes:
        if any(normalizar(t) in nome for t in r.trechos_nome):
            return r
    return None


def resumo_pbm(ofertas: list[MapeamentoSkuRede]) -> dict | None:
    """Programa de desconto de laboratório: agregado do que as redes informam."""
    com_pbm = [o for o in ofertas if o.pbm]
    if not com_pbm:
        return None
    r = {'descontoMax': None, 'programas': [], 'redes': {}, 'produtos': []}
    for o in com_pbm:
        d = o.pbm.get('desconto')
        if d and (r['descontoMax'] is None or d > r['descontoMax']):
            r['descontoMax'] = d
        atual = r['redes'].get(o.rede_id)
        r['redes'][o.rede_id] = max(filter(None, [atual, d]), default=None)
        prog = o.pbm.get('programa')
        if prog and normalizar(prog) not in {normalizar(p) for p in r['programas']}:
            r['programas'].append(prog)
        if len(r['produtos']) < 5 and o.titulo not in r['produtos']:
            r['produtos'].append(o.titulo)
    return r


def medicamento_para_front(med: Medicamento, pbm: dict | None) -> dict:
    return {
        'id': med.id, 'nome': med.nome, 'principioAtivo': med.principio_ativo, 'descricao': med.descricao,
        'classeTerapeutica': med.classe_terapeutica, 'sinonimias': med.sinonimias,
        'genericos': med.alternativas, 'precoReferencia': med.preco_referencia, 'pbm': pbm,
    }


def ofertas_do_medicamento(s: Session, med_id: str) -> list[MapeamentoSkuRede]:
    return list(s.scalars(select(MapeamentoSkuRede).where(MapeamentoSkuRede.medicamento_id == med_id,
                                                          MapeamentoSkuRede.ultimo_preco.is_not(None))))


def apresentacoes(s: Session, med: Medicamento, ofertas: list[MapeamentoSkuRede]) -> list[dict]:
    por_chave: dict[str, dict] = {}
    for o in ofertas:
        if not o.chave_apresentacao or not o.disponivel:
            continue
        a = por_chave.setdefault(o.chave_apresentacao, {'chave': o.chave_apresentacao, 'redes': set(), 'ofertas': 0,
                                                        'menorPreco': o.ultimo_preco})
        a['redes'].add(o.rede_id)
        a['ofertas'] += 1
        a['menorPreco'] = min(a['menorPreco'], o.ultimo_preco)
    if not por_chave:
        # Sem nenhum preço real: oferece as apresentações da CMED (só estimativa)
        for chave, pmc in s.execute(select(ProdutoCmed.chave_apresentacao, ProdutoCmed.pmc_referencia).where(
                ProdutoCmed.medicamento_id == med.id, ProdutoCmed.ativo.is_(True),
                ProdutoCmed.restricao_hospitalar.is_(False), ProdutoCmed.chave_apresentacao.is_not(None),
                ProdutoCmed.pmc_referencia.is_not(None))):
            a = por_chave.setdefault(chave, {'chave': chave, 'redes': set(), 'ofertas': 0, 'menorPreco': None})
            a['ofertas'] += 1
    lista = [{**a, 'rotulo': rotulo_chave(a['chave']), 'redes': len(a['redes'])} for a in por_chave.values()]
    lista.sort(key=lambda a: (-a['redes'], -a['ofertas'], a['chave']))
    return lista


def comparar(s: Session, med: Medicamento, farmacias: list[dict], lat: float, lon: float, raio_km: float,
             chave: str | None, usou_reserva: bool) -> dict:
    ofertas = ofertas_do_medicamento(s, med.id)
    lista_apresentacoes = apresentacoes(s, med, ofertas)
    chaves = {a['chave'] for a in lista_apresentacoes}
    chave = chave if chave in chaves else (lista_apresentacoes[0]['chave'] if lista_apresentacoes else None)

    redes = list(s.scalars(select(Rede)))
    ttl = timedelta(hours=obter_config().ttl_preco_horas)
    agora = datetime.utcnow()

    melhor_por_rede: dict[str, MapeamentoSkuRede] = {}
    for o in ofertas:
        if o.chave_apresentacao == chave and o.disponivel:
            atual = melhor_por_rede.get(o.rede_id)
            if atual is None or o.ultimo_preco < atual.ultimo_preco:
                melhor_por_rede[o.rede_id] = o
    pbm_por_rede = defaultdict(list)
    for o in ofertas:
        if o.pbm:
            pbm_por_rede[o.rede_id].append(o)

    teto_cmed = s.scalar(select(ProdutoCmed.pmc_referencia).where(
        ProdutoCmed.medicamento_id == med.id, ProdutoCmed.chave_apresentacao == chave,
        ProdutoCmed.ativo.is_(True), ProdutoCmed.pmc_referencia.is_not(None))
        .order_by(ProdutoCmed.pmc_referencia).limit(1)) if chave else None

    itens = []
    for f in farmacias:
        rede = identificar_rede(f, redes)
        oferta = melhor_por_rede.get(rede.id) if rede else None
        if oferta:
            preco, real = oferta.ultimo_preco, True
        elif teto_cmed:
            preco, real = round(teto_cmed * FATOR_ESTIMATIVA * f['fatorPreco'], 2), False
        else:
            continue
        pbm_rede = resumo_pbm(pbm_por_rede.get(rede.id, [])) if rede else None
        itens.append({
            'dados': f, 'preco': preco, 'precoReal': real,
            'rede': {'id': rede.id, 'nome': rede.nome, 'coletaAtiva': rede.coleta_ativa} if rede else None,
            'produto': {'titulo': oferta.titulo, 'url': oferta.url} if oferta else None,
            'coletadoEm': oferta.ultimo_preco_em.isoformat() + 'Z' if oferta else None,
            'precoDesatualizado': bool(oferta and agora - oferta.ultimo_preco_em > ttl),
            'pbm': {'desconto': pbm_rede['descontoMax']} if pbm_rede else None,
            'distanciaKm': round(distancia_km(lat, lon, f['latitude'], f['longitude']), 3),
        })

    no_raio = [i for i in itens if i['distanciaKm'] <= raio_km]
    mostrando_fallback = not no_raio
    if mostrando_fallback:
        selecionadas = sorted(itens, key=lambda i: i['distanciaKm'])[:5]
    else:
        selecionadas = sorted(no_raio, key=lambda i: i['distanciaKm'])[:MAX_FARMACIAS_EXIBIDAS]

    return {
        'medicamento': medicamento_para_front(med, resumo_pbm(ofertas)),
        'apresentacoes': lista_apresentacoes,
        'apresentacaoSelecionada': chave,
        'tetoCmedApresentacao': teto_cmed,
        # Reais primeiro (menor -> maior), estimativas depois: a estimativa sobre o
        # teto CMED não deve aparecer como "mais barata" que um preço de verdade
        'farmacias': sorted(selecionadas, key=lambda i: (not i['precoReal'], i['preco'])),
        'mostrandoFallback': mostrando_fallback,
        'usouFarmaciasReserva': usou_reserva,
    }
