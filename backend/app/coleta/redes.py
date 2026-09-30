"""
Cadastro das redes e da política de coleta de cada uma.

A decisão de coletar ou não é tomada rede por rede, contra robots.txt e Termos
de Uso, ANTES de qualquer código (histórico completo em STATUS.md). Uma rede
com coleta_ativa=False nunca é consultada por nenhuma camada (A, B ou lote),
mesmo que tenha plataforma conhecida.
"""
from sqlalchemy.orm import Session

from ..models import Rede

REDES = [
    dict(id='paguemenos', nome='Pague Menos', plataforma='vtex', base_url='https://www.paguemenos.com.br',
         coleta_ativa=True, motivo='robots.txt permite produto e libera crawlers (checado 18/08/2026)',
         trechos_nome=['pague menos']),
    dict(id='extrafarma', nome='Extrafarma', plataforma='vtex', base_url='https://www.extrafarma.com.br',
         coleta_ativa=True, motivo='robots.txt permite produto (mesmo grupo da Pague Menos)',
         trechos_nome=['extrafarma']),
    dict(id='drogariasaopaulo', nome='Drogaria São Paulo', plataforma='vtex',
         base_url='https://www.drogariasaopaulo.com.br', coleta_ativa=True,
         motivo='robots.txt permite produto e libera crawlers',
         trechos_nome=['drogaria sao paulo', 'drogaria sp']),  # "Drogaria SP" é como várias lojas aparecem no OSM
    dict(id='pacheco', nome='Drogarias Pacheco', plataforma='vtex', base_url='https://www.drogariaspacheco.com.br',
         coleta_ativa=True, motivo='robots.txt permite produto e libera crawlers', trechos_nome=['pacheco']),
    dict(id='venancio', nome='Drogaria Venancio', plataforma='vtex', base_url='https://www.drogariavenancio.com.br',
         coleta_ativa=True, motivo='robots.txt permite produto', trechos_nome=['venancio']),
    # Via programa de afiliados Lomadee (API oficial, catálogo publicado pela própria rede). Só são
    # coletadas com LOMADEE_API_KEY configurada. Uso: comparação de preço, sem venda (decisão do usuário).
    dict(id='rosario', nome='Drogaria Rosário', plataforma='lomadee', base_url='https://www.drogariarosario.com.br',
         coleta_ativa=True, motivo='Programa de afiliados Lomadee (API oficial). Catálogo no feed pequeno (~200 '
                                    'produtos em 30/09/2026). Canais permitidos pelo programa: redes sociais e '
                                    'site de cupons (comparador não listado - risco aceito pelo usuário).',
         trechos_nome=['drogaria rosario', 'drogarias rosario']),
    dict(id='drogasmil', nome='Drogasmil', plataforma='lomadee', base_url='https://www.drogasmil.com.br',
         coleta_ativa=True, motivo='Programa de afiliados Lomadee (API oficial), ~2 mil produtos com EAN.',
         trechos_nome=['drogasmil']),
    dict(id='promofarma', nome='PromoFarma', plataforma='lomadee', base_url='https://www.promofarma.com.br',
         coleta_ativa=True, somente_online=True,
         motivo='Farmácia só online. Programa de afiliados Lomadee (API oficial), ~2 mil produtos com EAN.',
         trechos_nome=['promofarma']),
    dict(id='panvel', nome='Panvel', plataforma='propria', base_url='https://www.panvel.com', coleta_ativa=False,
         motivo='Coletada até 30/08/2026 via navegador automatizado. Em 29/09/2026 passou a responder 403 '
                '(Akamai "Access Denied") a qualquer acesso não-navegador, inclusive ao robots.txt - mesmo '
                'critério de Ultrafarma/Araújo: bloqueio ativo não é contornado. Preços antigos ficam no histórico.',
         trechos_nome=['panvel']),
    dict(id='drogaraia', nome='Droga Raia', plataforma='nenhuma', base_url=None, coleta_ativa=False,
         motivo='Termos de Uso proíbem web scraping; via oficial (outreach)', trechos_nome=['droga raia', 'drogaraia']),
    dict(id='drogasil', nome='Drogasil', plataforma='nenhuma', base_url=None, coleta_ativa=False,
         motivo='Termos de Uso (RD) proíbem web scraping; via oficial (outreach)', trechos_nome=['drogasil']),
    dict(id='ultrafarma', nome='Ultrafarma', plataforma='nenhuma', base_url=None, coleta_ativa=False,
         motivo='Bloqueio ativo (403 até no robots.txt), não contornado', trechos_nome=['ultrafarma']),
    dict(id='araujo', nome='Drogaria Araújo', plataforma='nenhuma', base_url=None, coleta_ativa=False,
         motivo='Bloqueio ativo (403); via oficial (outreach)', trechos_nome=['drogaria araujo', 'araujo']),
    dict(id='nissei', nome='Farmácias Nissei', plataforma='nenhuma', base_url=None, coleta_ativa=False,
         motivo='robots.txt desautoriza catálogo/preço para todos exceto Google (checado 30/08/2026)',
         trechos_nome=['nissei']),
]


def semear_redes(s: Session) -> None:
    """Cria/atualiza as redes a partir de REDES (fonte da verdade é este arquivo)."""
    for dados in REDES:
        rede = s.get(Rede, dados['id'])
        if rede is None:
            s.add(Rede(**dados))
        else:
            for k, v in dados.items():
                setattr(rede, k, v)
