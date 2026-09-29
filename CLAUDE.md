# Projeto: MED_PRECOS

> Identidade deste projeto — leia antes de assumir qualquer contexto de outra pasta/conversa.
> Este projeto **não tem relação** com GESTAO_O5P, GESTAO_FGR ou qualquer outro projeto do usuário.

## ⚠️ Protocolo obrigatório — alerta de cruzamento de projetos
Antes de executar qualquer ação (código, arquivo, pesquisa, comando), verifique se o pedido do
usuário é compatível com a identidade deste projeto (seção "O que é", abaixo).

Se o pedido mencionar — direta ou indiretamente, mesmo sem citar nome nenhum — algo que pareça
pertencer a **outro** projeto (ex.: GESTAO_O5P, GESTAO_FGR) ou que não bata com o escopo deste
projeto, **pare antes de agir**:
1. Emita um alerta claro, ex.: "⚠️ Este pedido parece se referir a outro projeto (X), mas estamos
   na conversa do MED_PRECOS."
2. Pergunte explicitamente se o usuário quer continuar mesmo assim aqui, mudar de pasta/sessão, ou
   corrigir o pedido.
3. Só prossiga após confirmação explícita do usuário.

Nunca assuma automaticamente — nem que é sobre outro projeto, nem que é sobre este — quando houver
ambiguidade. Erro automático (agir sem alertar) é o que este protocolo existe para evitar.

**Vale mesmo sem ambiguidade sobre o que fazer:** se outro projeto for factualmente a causa de um
problema aqui (ex.: conflito de porta com um processo local de outro projeto), resolva dentro do
escopo do MED_PRECOS mas descreva a causa de forma genérica — sem nome nem detalhes do outro
projeto. Diga só o necessário para justificar a ação.

## O que é
**MED_PRECOS** ("MedPreços: cuide da sua saúde e do seu bolso") — comparador de preços de
medicamentos: busca por nome/voz, localização por GPS/CEP, sugestão de alternativas genéricas,
comparação entre farmácias por apresentação, roteiro de compras (funcionalidade Premium).
Desde 29/09/2026: **backend FastAPI + banco relacional + fila**, conteinerizado (ver `README.md`).

## Estrutura (detalhes em `README.md`)
- `frontend/` — site estático (`index.html`, `css/`, `js/app.js` = UI + cliente da API,
  `js/speech.js` = Web Speech API). Não tem mais dados embutidos: tudo vem de `/api`.
- `backend/app/` — dividido pelas 4 frentes:
  - `catalogo/` (Frente 1): importação da lista CMED/ANVISA (âncora `produtos_cmed`, 1 linha por
    apresentação/GGREM, com EAN e registro) + enriquecimento (descrição/sinônimos, regras em
    `catalogo/dados/enriquecimento.json`)
  - `coleta/` (Frente 2): `redes.py` (política de coleta por rede — fonte da verdade), `vtex.py`,
    `sitemaps.py` (Camada A), `sob_demanda.py` (Camada B), `cache.py` (Camada C), `lote.py`,
    `geo.py` (ViaCEP/Nominatim/Overpass), `importar_legado.py`
  - `matching/` (Frente 3): normalização, chave de apresentação `dose|quantidade`, casamento
    EAN > registro > nome (prefixo) > nome aproximado
  - `api/`, `servicos/`, `workers/` (Frente 4): endpoints, busca/comparação, Celery/thread + agenda
- `backend/migracoes/` (Alembic), `backend/tests/` (pytest, sem rede)
- `docker-compose.yml` — db (Postgres), redis, preparar, api (porta **8731** no host), worker, agenda
- `scripts/legado/` — scripts anteriores ao backend, só referência (ver `LEIAME.md` lá)

## Estado
- Projeto sob Git local (sem remoto).
- **Catálogo:** lista CMED completa (26 mil apresentações, ~2,25 mil princípios ativos), importada
  automaticamente todo dia 12.
- **Farmácias:** OpenStreetMap ao vivo pela API (cache 24h compartilhado; reserva de 54 farmácias).
- **Preço real:** 5 redes VTEX coletadas (Pague Menos, Extrafarma, Drogaria São Paulo, Pacheco,
  Venancio) — sob demanda quando o preço passa de 24h + lote semanal. **Panvel saiu da coleta em
  29/09/2026** (passou a bloquear acesso automatizado; preços antigos ficam como histórico).
  Droga Raia/Drogasil/Ultrafarma/Araújo/Nissei ficam de fora (ToS/bloqueio; via oficial em
  `outreach/contatos-parcerias.md`). Demais farmácias: preço estimado a partir do teto CMED.
- Detalhes, números e decisões em `STATUS.md`.

## Convenção de acompanhamento
Manter o `STATUS.md` na raiz atualizado ao final de cada sessão de trabalho ou marco relevante, com:
última atualização, estado atual, últimos passos, próximos passos sugeridos, notas/decisões pendentes.
Objetivo: evitar retrabalho, reduzir consumo de tokens reconstruindo contexto, e permitir acompanhamento
consistente da evolução entre sessões — mesmo trocando de projeto/pasta.
