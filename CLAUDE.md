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
**MED_PRECOS** — comparador de preços de medicamentos (front-end puro, sem backend ainda): busca por
nome/voz, localização por GPS/CEP, sugestão de alternativas genéricas, comparação entre farmácias,
roteiro de compras (funcionalidade Premium).

## Estrutura
- `index.html`, `css/style.css`
- `js/app.js` — UI, busca/pontuação/fuzzy-match, geocodificação (ViaCEP+Nominatim) e busca de
  farmácias reais próximas ao vivo (Overpass/OpenStreetMap, com fallback pré-carregado)
- `js/data.js` — `BANCO_MEDICAMENTOS` **real** (760 medicamentos, preços CMED/ANVISA oficiais,
  gerado por `scripts/build_data_cmed.py`). `BANCO_FARMACIAS` **real** (54 farmácias pré-carregadas
  via OpenStreetMap, gerado por `scripts/build_farmacias_overpass.py` — usado só como fallback
  quando a busca ao vivo falha). Ver `STATUS.md` para como reproduzir/atualizar cada um.
- `js/speech.js` — Web Speech API nativa do navegador (já real, não mock)

## Estado
- Projeto sob Git local (sem remoto). Commit inicial `19d515c`: "Estado inicial: MED_PRECOS com
  dados mock (pré integração API real)".
- **Preços de medicamentos:** resolvido em 18/08/2026 — `data.js` usa a lista oficial de preços
  CMED (ANVISA), gratuita e sem limite de requisição. Detalhes/limitações (aproximação de PMC por
  UF, campos que a base real não tem) em `STATUS.md`.
- **Geo-referenciamento de farmácias:** resolvido em 18/08/2026 — busca ao vivo via Overpass
  (OpenStreetMap) a cada busca do usuário, com fallback pré-carregado real (54 farmácias, 9
  capitais) para quando a API pública estiver fora do ar (já visto acontecer). Testado ao vivo no
  navegador. Detalhes em `STATUS.md`.
- **Preço por farmácia específica** (a CMED só dá o teto legal nacional, não o preço praticado por
  farmácia): ainda estimado, não real — depende de parcerias comerciais em negociação, ver
  `outreach/contatos-parcerias.md`.

## Convenção de acompanhamento
Manter o `STATUS.md` na raiz atualizado ao final de cada sessão de trabalho ou marco relevante, com:
última atualização, estado atual, últimos passos, próximos passos sugeridos, notas/decisões pendentes.
Objetivo: evitar retrabalho, reduzir consumo de tokens reconstruindo contexto, e permitir acompanhamento
consistente da evolução entre sessões — mesmo trocando de projeto/pasta.
