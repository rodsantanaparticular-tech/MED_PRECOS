# Ponto de Situação — MED_PRECOS

> Este arquivo é atualizado no fim de cada sessão de trabalho para registrar o que foi feito e o que falta.

## Última atualização
2026-08-18 — Raio de busca ao vivo ajustado (escalonamento 10→60km) + escopo de raspagem de preço
fechado com checagem de ToS/robots.txt real por rede + 2 novos rascunhos de e-mail (RD/Araújo).

## Estado atual
- Projeto **agora sob git** (local, sem remoto). Commit inicial `19d515c`.
- Estrutura: `index.html`, `css/style.css`, `js/app.js`, `js/data.js`, `js/speech.js`, `scripts/*.py`.
- App é um comparador de preços de medicamentos (front-end puro): busca por nome/voz, localização por GPS/CEP, alternativas genéricas, comparação entre farmácias, roteiro de compras (Premium).
- **`BANCO_MEDICAMENTOS`** — real, 760 medicamentos da lista oficial CMED/ANVISA (preço PMC, classe terapêutica). Gerado por `scripts/build_data_cmed.py`.
- **`BANCO_FARMACIAS`** — real, duas camadas:
  1. **Busca ao vivo** (`buscarFarmaciasReaisProximas()` em `app.js`): consulta a Overpass API (OpenStreetMap) a cada busca, com **escalonamento de raio**: começa em 10km (rápido, leve pra API pública) e só amplia (20→35→60km) se não achar pelo menos `META_LOJAS=15` farmácias ou `META_REDES_DISTINTAS=5` redes diferentes — nunca ultrapassa o raio escolhido pelo usuário na UI. Testado ao vivo: em SP parou em 10km (achou 267+); numa tentativa real o Overpass falhou em 10km e o app ampliou sozinho pra 20km e completou. Cache de 24h no navegador por região+raio.
  2. **Fallback pré-carregado**: se a *primeira* tentativa (menor raio) falhar completamente em todos os endpoints, cai pra `BANCO_FARMACIAS` — 54 farmácias reais (9 capitais), geradas por `scripts/build_farmacias_overpass.py`.
  - Exibição limitada a `MAX_FARMACIAS_EXIBIDAS = 15` (as mais próximas) — Overpass pode retornar centenas numa capital densa.
  - Preço por farmácia é **estimado** (`calcularPrecoFarmacia()`, a partir do PMC da CMED) — UI avisa isso explicitamente. Ver seção de raspagem abaixo pra plano de preço real.
- `speech.js` usa Web Speech API nativa do navegador (já real, não mock).

## Como os dados reais foram obtidos (para reproduzir/atualizar no futuro)

**Medicamentos (CMED):**
1. Fonte: `gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos` — arquivo **"site"** (PF + **PMC**; existe um "gov" com PMVG, para compras públicas — não é esse).
2. URL do mês: `curl -s -H "Accept: application/json" "https://www.gov.br/anvisa/++api++/pt-br/assuntos/medicamentos/cmed/precos"` e procurar `xls_conformidade_site_*.xlsx/@@download/file`.
3. `python scripts/build_data_cmed.py caminho/para/arquivo.xlsx` regenera `js/data.js`.
4. **Aproximação assumida:** PMC varia por UF (ICMS). Fixado uma referência nacional única: "Genérico" → coluna PMC 12% (SP/MG), demais → PMC 18% (padrão SP).
5. **Nuance:** CMED registra `SUBSTÂNCIA` de forma literal — "Dipirona" e "Dipirona Monoidratada" viram grupos separados. Não normalizado ainda.
6. **Descartado no caminho:** medicamentos.api.br (R$149/mês) e CSV aberto da ANVISA — não precisaram, o próprio arquivo CMED já basta.

**Farmácias (Overpass/OSM):**
1. `python scripts/fetch_farmacias_overpass.py` — consulta Overpass pras 9 capitais, salva `scripts/farmacias_osm.json` (não versionado, intermediário). 3 endpoints x 3 tentativas por cidade.
2. `python scripts/build_farmacias_overpass.py` — regenera `BANCO_FARMACIAS` em `js/data.js`.
3. A busca ao vivo em produção não depende desses scripts — só o fallback pré-carregado.

## Preço real por farmácia — decisão de raspagem (18/08/2026)

Sem retorno ainda das parcerias comerciais (ver abaixo), decisão tomada: **raspar o preço direto do
site das redes**, como fonte interina — isso **reverte** uma decisão anterior (16/08) que tinha
descartado raspagem por risco de ToS/legal/fragilidade. Antes de implementar, verifiquei robots.txt
e Termos de Uso de cada rede candidata:

| Rede | Resultado da checagem | Incluída na raspagem? |
|---|---|---|
| Droga Raia / Drogasil (RD) | Termos de Uso **proíbem explicitamente "web scraping"**; robots.txt desautoriza `/catalog/product/view/` (a própria página de preço) | **Não** — via oficial (outreach item 4) |
| Ultrafarma | Bloqueia acesso automatizado ativamente (403 até no robots.txt) | **Não** — bloqueio ativo, não tentar contornar |
| Drogaria Araújo | Mesmo bloqueio ativo (403), inclusive em páginas institucionais | **Não** — via oficial (outreach item 5) |
| Pague Menos / Extrafarma | robots.txt só desautoriza busca interna; produto liberado; **libera explicitamente ClaudeBot/GPTBot** pra busca | **Sim** |
| Panvel | robots.txt aberto, só bloqueia endpoint de busca; tem sitemap público | **Sim** |
| Drogaria São Paulo / Pacheco / Venancio | robots.txt só bloqueia busca/login/checkout; produto liberado; seção explícita de crawlers de IA | **Sim** |
| Nissei / Big Ben | Não verificado ainda (domínio não resolvido) | A confirmar |

**Escopo fechado:** raspar **Pague Menos, Extrafarma, Panvel, Drogaria São Paulo, Pacheco, Venancio**
como script periódico (nunca ao vivo no navegador do usuário — precisa ser batch, tanto por CORS
quanto pra não martelar o site a cada busca). **Ainda não implementado** — próximo passo.

**RD (Raia Drogasil/Drogasil) e Araújo:** por serem redes muito relevantes (Araújo é líder em MG),
usuário pediu para achar caminho oficial em vez de raspar. Pesquisei: nenhuma das duas tem canal
dedicado a parceria de dados/API. Rascunhos de e-mail adicionados em
`outreach/contatos-parcerias.md` (itens 4 e 5) — RD via assessoria de imprensa (rd@ovocom.com.br,
não há canal melhor confirmado), Araújo via formulário do site (não consegui confirmar e-mail
direto, site bloqueia até fetch de página institucional).

## Próximos passos sugeridos
- [ ] **Implementar o scraper periódico** pras 6 redes aprovadas (Pague Menos, Extrafarma, Panvel, Drogaria São Paulo, Pacheco, Venancio) — ainda não começado, é o próximo passo natural desta sessão.
- [ ] Confirmar domínio correto de Nissei/Big Ben e checar robots.txt/ToS antes de incluir.
- [ ] **AGUARDANDO O USUÁRIO: revisar e enviar os 2 novos rascunhos** (RD e Araújo) em `outreach/contatos-parcerias.md`, mesmo esquema dos 3 já enviados (copiar/colar manualmente).
- [ ] Registrar respostas de todos os 5 contatos (Brasíndice, Funcional, Orizon, RD, Araújo) em `outreach/contatos-parcerias.md` assim que chegarem.
- [ ] Campos que a base real de medicamentos não tem: `descricao` mais amigável e `sinonimias` pra busca por voz — melhoria futura, não bloqueante.
- [ ] Cobertura do pré-carregado de farmácias é só 9 capitais — fora delas, sem internet/Overpass fora do ar, busca fica sem resultado (limitação conhecida, comportamento correto).

## Notas / decisões pendentes
- **Conector Gmail nunca migrou para `med.precosbr@gmail.com` nesta sessão** (ficou preso na conta pessoal em várias tentativas). Contornado enviando os e-mails manualmente pelo usuário, copiando o texto dos rascunhos — funcionou para os 3 primeiros, mesmo caminho pros 2 novos.
- **E-mails enviados em 18/08/2026:** Brasíndice, Funcional Health Tech, Orizon (aguardando resposta dos 3).
