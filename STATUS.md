# Ponto de Situação — MED_PRECOS

> Este arquivo é atualizado no fim de cada sessão de trabalho para registrar o que foi feito e o que falta.

## Última atualização
2026-09-29 (noite) — **Pesquisa de acesso às redes que bloqueiam + lote diário.** O usuário perguntou
como viabilizar o produto se as grandes redes bloqueiam coleta (e se dava pra "pausar/disfarçar" pra não
ser bloqueado). Decisão mantida: **não contornar bloqueio nem Termos de Uso** (mesmo sendo de utilidade
pública e sem venda — os termos da RD proíbem raspagem pra qualquer fim, e o produto depende da boa
vontade dessas redes). Três pesquisas em paralelo mapearam vias legítimas — ver seção "Acesso às redes
que bloqueiam". Feito no código: lote de preços das 5 redes permitidas passou de **semanal pra diário
(02:30)** e o coletor agora respeita pedido de pausa da loja (429/503 + Retry-After; desiste da rede na
rodada após 5 recusas). Usuário informou: **o produto é de utilidade pública e não é vendido.**

2026-09-29 (tarde) — **Backend + banco + fila + Docker.** O MedPreços deixou de ser front-end puro:
a pedido do usuário (especificação "Triangulação Inteligente por Demanda com Catálogo Canônico", 4
frentes), foi criado `backend/` (FastAPI, SQLAlchemy/Alembic, Celery/Redis) e o site passou a consultar
a API (decisão do usuário: subir tudo junto, sem manter os arquivos estáticos como reserva, já que o site
não está publicado). Tudo validado: 26 testes pytest, Docker completo de pé (Postgres/Redis/API/worker/
agenda) e teste de ponta a ponta no navegador. Detalhes na seção "Arquitetura" abaixo.
- **Panvel saiu da coleta**: passou a responder 403 (Akamai) a qualquer acesso não-navegador, inclusive
  ao robots.txt — mesmo critério de Ultrafarma/Araújo, bloqueio ativo não é contornado. Os preços de
  30/08 ficam no histórico e aparecem como "⚠️ preço de 30/08 (pode ter mudado)".
- **Tarefa do Windows removida** (criada mais cedo no mesmo dia): substituída pela agenda do Celery
  dentro do Docker. ⚠️ Consequência: a atualização automática só roda com o `docker compose` de pé.

2026-09-29 (manhã) — Atualização mensal via tarefa do Windows (depois substituída, ver acima) +
**descontos de laboratório (PBM)** no app (ver seção PBM).

2026-08-30 — Enriquecimento do banco de medicamentos + orquestração da raspagem + avaliação Nissei/Big Ben.

2026-08-18 — Preço real por farmácia implementado (raspagem em 6 redes).

## Estado atual
- Rodar: `docker compose up -d --build` → site + API em **http://localhost:8731** (docs em `/docs`).
  Sem Docker: ver `README.md`. As portas 8000/8080/8010 do host já estavam ocupadas por outros processos
  locais; por isso 8731, e Postgres/Redis não são expostos no host.
- **Catálogo (Frente 1):** lista CMED de **09/09/2026**, 26.242 apresentações (todas com EAN), 2.251
  princípios ativos (antes: 760, só os que tinham genérico mais barato). Tabela âncora `produtos_cmed`
  por código GGREM; importação mensal automática (dia 12) que atualiza preço, cria novas e **inativa**
  (nunca apaga) as que saem da lista.
- **Preço real (Frente 2):** 970 princípios ativos com preço real (antes 704). 5 redes VTEX ativas.
- **Casamento (Frente 3):** ~81% dos SKUs das redes casados com o catálogo (antes ~75%); 17,4 mil com a
  apresentação CMED exata.
- **API/infra (Frente 4):** endpoints em `backend/app/api/rotas.py`; fila Celery testada de verdade.

## Arquitetura (backend, desde 29/09/2026)
Esquema: `medicamentos` (grupo por princípio ativo, id = slug estável) → `produtos_cmed` (âncora,
apresentação) → `mapeamento_sku_redes` (produto da rede casado com o catálogo, com último preço e PBM)
→ `historico_precos` (todo preço coletado, com `praca` e `fonte`). Mais `redes`, `cache_consultas`,
`execucoes_tarefas`.

**Coleta em 3 camadas:**
- **A — sitemaps** (`coleta/sitemaps.py`): lê o sitemap de produtos que a própria loja publica pra robôs
  e casa o slug da URL com o catálogo, sem abrir página nenhuma. Testado na Venancio: 41.253 URLs →
  **4.663 SKUs novos casados** em 3m44s (mais que dobrou a cobertura da rede). Só grava o que casa. Semanal.
- **B — sob demanda** (`coleta/sob_demanda.py`): ao consultar um medicamento, redes com preço > 24h são
  atualizadas na hora (princípio ativo + nome da marca de referência, 50 itens por busca, + SKUs vindos do
  sitemap ainda sem preço), em paralelo, com orçamento de 6s; se estourar, termina na fila e a tela avisa.
- **C — cache** (`coleta/cache.py`, no banco): farmácias por região 24h, geocodificação 30 dias; se o
  Overpass cair, usa o resultado vencido da região antes de cair nas 54 farmácias de reserva.
- **Lote** semanal (`coleta/lote.py`) mantém o histórico de todo o catálogo vendido em farmácia.

**Achados que mudaram o desenho:**
- **Preço é nacional nas 5 redes** (testado com 5 CEPs de regiões diferentes): o CEP só muda
  disponibilidade de entrega. Por isso nada de simular carrinho/checkout; `praca='online-nacional'`
  fica como coluna pronta pra preço regional futuro.
- **Comparação por apresentação** (dose + quantidade): o front antigo comparava "o rivaroxabana mais
  barato de qualquer tamanho" em cada rede (10 comprimidos numa, 28 noutra — era daí o Xarelto a
  R$ 45,49). Agora a chave `dose|quantidade` sai tanto da CMED ("(20 + 12,5) MG COM REV ... X 30")
  quanto do título da rede ("20mg + 12,5mg 30 Comprimidos") e o usuário escolhe a apresentação num
  seletor (padrão: a vendida por mais redes).
- **Casamento por EAN** (código de barras, que a CMED e a VTEX têm): apresentação exata. Ordem:
  EAN > registro ANVISA > nome por prefixo (com dose/quantidade/laboratório) > nome aproximado
  (Levenshtein >= 0,92 nas primeiras palavras). Título de combinação não casa com substância única.
- **Referência do grupo**: o produto Novo/Biológico com mais apresentações em farmácia (Tylenol pro
  paracetamol; antes era o "Novo mais caro" = Sonridor). Sem Novo, a marca não genérica mais presente.
- **Falso positivo de PBM corrigido**: na Drogaria São Paulo o campo `PBM` às vezes só lista nomes de
  especificação; o raspador antigo contava isso como "tem programa".
- **Postgres pegou dois bugs que o SQLite escondia**: substâncias com >1.000 caracteres e ids cortados
  em 150 caracteres que juntavam 10 grupos diferentes (agora slug + hash quando longo).
- **UX**: preços reais aparecem antes das estimativas e o selo MENOR PREÇO só vai pra preço real — a
  estimativa (teto CMED x 0,85 x fator da farmácia) às vezes ficava "mais barata" que o preço de verdade.
- **Overpass (OpenStreetMap) público instável** (504/timeout frequentes): orçamento total de 18s por
  busca de farmácias, não escala o raio após falha, 2ª tentativa no servidor principal, cache vencido.

# Histórico (antes do backend — referência; os scripts citados agora estão em `scripts/legado/`)

## Farmácias (Overpass/OpenStreetMap)
1. **Busca ao vivo** (`buscarFarmaciasReaisProximas()` em `app.js`): consulta a Overpass API a cada busca, com escalonamento de raio — começa em 10km (rápido, leve pra API pública) e só amplia (20→35→60km) se não achar pelo menos `META_LOJAS=15` farmácias ou `META_REDES_DISTINTAS=5` redes diferentes, nunca ultrapassando o raio escolhido pelo usuário. Cache de 24h no navegador por região+raio.
2. **Fallback pré-carregado**: se a primeira tentativa falhar em todos os endpoints, cai pra `BANCO_FARMACIAS` — 54 farmácias reais (9 capitais), geradas por `scripts/build_farmacias_overpass.py` (rodar `fetch_farmacias_overpass.py` antes, pra gerar o JSON intermediário).
3. Exibição limitada a `MAX_FARMACIAS_EXIBIDAS = 15` (as mais próximas) — Overpass pode retornar centenas numa capital densa.

## Medicamentos (CMED/ANVISA)
1. Fonte: `gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos` — arquivo **"site"** (PF + **PMC**; existe um "gov" com PMVG, para compras públicas — não é esse).
2. URL do mês: `curl -s -H "Accept: application/json" "https://www.gov.br/anvisa/++api++/pt-br/assuntos/medicamentos/cmed/precos"` e procurar `xls_conformidade_site_*.xlsx/@@download/file`.
3. `python scripts/build_data_cmed.py caminho/para/arquivo.xlsx` regenera `js/data.js` (inclui `registrosAnvisa` por produto, usado pro casamento de preço real — ver abaixo). **No fim, chama automaticamente `node scripts/aplicar-enriquecimento.js`** (passo 6). Se `node` não estiver no PATH, avisa e pula — rodar manualmente depois.
4. **Aproximação assumida:** PMC varia por UF (ICMS). Fixada uma referência nacional única: "Genérico" → coluna PMC 12% (SP/MG), demais → PMC 18% (padrão SP).
5. **Nuance:** CMED registra `SUBSTÂNCIA` de forma literal — "Dipirona" e "Dipirona Monoidratada" viram grupos separados. Não normalizado ainda.
6. **Enriquecimento (added 2026-08-30):** o `.xlsx` da CMED só traz a CLASSE TERAPÊUTICA crua ("Inibidores da bomba de prótons") e zero sinônimos. `scripts/enriquecimento-medicamentos.js` deriva, por cima do `data.js` gerado:
   - `descricao` → frase em português simples ("Reduz a produção de ácido no estômago...") via ~110 regras por palavra-chave na classe. **736/760 (97%)** com frase específica; os 24 restantes (classes "Todos os outros...") caem num texto genérico com aviso de "consulte a bula".
   - `classeTerapeutica` → a classe CMED original, **preservada** (mostrada como linha secundária no card, `#medicamento-classe`). O enriquecimento é idempotente porque relê a classe daqui.
   - `sinonimias` → marcas/nomes populares (dicionário curado de ~150 princípios ativos: dipirona→novalgina/anador, paracetamol→tylenol, losartana→aradois...) + derivados automáticos (componentes de combinações + nomes das alternativas genéricas do próprio item). **742/760** com ≥1 sinônimo.
   - `js/app.js` `buscarMedicamento()` agora pontua sinônimo a **0,9×** do nome/princípio ativo, pra uma busca por "losartana" preferir o medicamento puro a uma combinação que só tem losartana como um dos componentes.
   - Rodar sozinho: `node scripts/aplicar-enriquecimento.js` (ou `--dry-run` pro relatório sem gravar).

## Preço real por farmácia — raspagem (implementada em 18/08/2026)

Sem retorno ainda das parcerias comerciais, decisão tomada: **raspar o preço direto do site das
redes** como fonte interina — reverte uma decisão anterior (16/08) que tinha descartado raspagem por
risco de ToS/legal/fragilidade. Antes de implementar, verifiquei robots.txt e Termos de Uso rede por
rede:

| Rede | Resultado da checagem | Raspada? |
|---|---|---|
| Droga Raia / Drogasil (RD) | Termos de Uso **proíbem explicitamente "web scraping"**; robots.txt desautoriza a página de produto | **Não** — via oficial (outreach item 4) |
| Ultrafarma | Bloqueia acesso automatizado ativamente (403 até no robots.txt) | **Não** — bloqueio ativo, não contornado |
| Drogaria Araújo | Mesmo bloqueio ativo (403) | **Não** — via oficial (outreach item 5) |
| Pague Menos, Extrafarma, Drogaria São Paulo, Pacheco, Venancio | robots.txt permite produto; libera crawlers de IA | **Sim** |
| Panvel | robots.txt aberto | **Sim** |

### Como funciona
- **5 das 6 redes usam VTEX** (mesma plataforma de e-commerce), com API pública de busca
  (`/api/catalog_system/pub/products/search/{termo}` — a mesma que a busca do site usa).
  `scripts/scrape_precos_vtex.py` busca cada princípio ativo do catálogo CMED nas 5 lojas.
- **Panvel não é VTEX** — API própria (`POST /api/v3/search`) que exige sessão de navegador válida
  (headers gerados pelo frontend). `scripts/scrape_precos_panvel.js` usa Playwright: abre uma sessão
  real e reaproveita pra todas as buscas, esperando a resposta de cada requisição
  (`page.waitForResponse`) em vez de um timeout fixo — a primeira versão com timeout fixo funcionou
  num teste pequeno mas silenciosamente não capturou nada numa rodada completa (a API foi ficando
  mais lenta ao longo da sessão); trocar para aguardar a resposta de verdade resolveu.
- `scripts/build_precos_redes.js` casa os preços raspados com `BANCO_MEDICAMENTOS` em duas etapas:
  1. **Registro ANVISA** (mais confiável) — só Pague Menos/Extrafarma preenchem esse campo na VTEX.
  2. **Nome do produto por PREFIXO** (fallback pras demais + Panvel, que não expõem registro).
     Achado real ao testar: usar "contém" (`includes`) em vez de "começa com" (`startsWith`) deu
     falso positivo — "Paracetamol" (princípio ativo) bateu no meio de "Antigripal Decongex Gripe
     Paracetamol + Clorfeniramina + Fenilefrina", um remédio bem diferente. Trocado pra prefixo,
     ordenando os nomes do catálogo do mais longo pro mais curto (nome mais específico "ganha").
     Mesmo assim ainda pode casar um combinado que *começa* com o nome do princípio ativo isolado
     (ex: "Paracetamol + Pseudoefedrina" bate com o catálogo "Paracetamol") — limitação conhecida
     de casar só por nome, sem identificador único.
  - Resultado: **4.966 matches por registro + 12.682 por nome = 704 dos 760 medicamentos (93%) com
    pelo menos 1 preço real** de alguma rede.
  - Gera `js/precos-redes.js` (`PRECOS_REDES`), carregado no `index.html` antes de `app.js`.
- `app.js`: `calcularPrecoFarmacia()` prioriza preço real de `PRECOS_REDES` (via
  `identificarRedeComPrecoReal()`, que casa nome/marca da farmácia com a rede) e cai pro estimado
  CMED quando não há preço real. UI mostra "✅ preço real do site da rede" ou "≈ preço estimado" por
  farmácia, junto com o badge de menor preço.
- **Testado ao vivo no navegador** (Playwright): busca "paracetamol" em "São Paulo" mostrou preço
  real em Pague Menos (R$6,49) e Drogaria São Paulo (R$10,59, duas lojas), com o roteiro de compras
  já escolhendo a opção real mais barata; farmácias fora da raspagem (Droga Raia, Drogasil,
  Ultrafarma Popular) corretamente mostraram "≈ preço estimado". Zero erros de console.
- **Intermediários não versionados** (`.gitignore`): `scripts/precos_vtex.json` (6,8 MB),
  `scripts/precos_panvel.json` (1,6 MB), `scripts/farmacias_osm.json` — grandes e 100% regeneráveis
  rodando os scripts de novo.

### Como reproduzir/atualizar a raspagem
**Jeito novo (2026-08-30) — um comando:**
```
powershell -File scripts/atualizar-precos.ps1            # completo (~1-2h)
powershell -File scripts/atualizar-precos.ps1 -Rapido    # teste rápido (40 termos)
```
Roda os 3 passos em sequência, loga com timestamp em `scripts/logs/atualizacao-<data>.log` (git-ignorado),
falha da raspagem VTEX/Panvel não aborta (a outra fonte + o build seguem), só o build é fatal.
Flags: `-PularVtex`, `-PularPanvel`, `-Limite N`. Agendamento mensal no Windows: comando `schtasks`
no cabeçalho do `.ps1` (rodar uma vez).

**Jeito manual (os 3 passos por baixo):**
```
python scripts/scrape_precos_vtex.py          # gera scripts/precos_vtex.json (5 redes VTEX)
node scripts/scrape_precos_panvel.js           # gera scripts/precos_panvel.json (Panvel)
node scripts/build_precos_redes.js             # casa tudo e regenera js/precos-redes.js
```
Cada um demora ~20-40min pro catálogo completo (760 termos); tem flag `--limite N` (Python) ou
argumento posicional (`node scrape_precos_panvel.js 40`) pra testar rápido com menos termos.

### RD (Raia Drogasil/Drogasil) e Drogaria Araújo — via oficial, não raspagem
Por serem redes muito relevantes (Araújo é líder em MG), a pedido do usuário busquei caminho oficial
em vez de raspar. Nenhuma das duas tem canal dedicado a parceria de dados/API. Rascunhos de e-mail
adicionados em `outreach/contatos-parcerias.md` (itens 4 e 5) — RD via assessoria de imprensa
(rd@ovocom.com.br, não há canal melhor confirmado), Araújo via formulário do site (não consegui
confirmar e-mail direto, site bloqueia até fetch de página institucional).

## Programas de desconto de laboratório (PBM) — interino, 2026-09-29
Os laboratórios dão desconto com cadastro do CPF (PBM), e isso **não aparece no preço de prateleira**
que raspamos. Descoberta: as próprias redes VTEX já raspadas publicam campos de PBM em cada produto,
na mesma API pública que já usamos (sem fonte nova, sem mudança de ToS/robots):
- Pague Menos / Extrafarma: `PBM` (Sim/Não), `DescontoPBM` (%), `MenorPrecoPBM`, `ProgramaPBM` (genérico)
- Drogaria São Paulo: `Programa PBM` (**nome real**, ex. "Bayer pra você", "Merck cuida", "Faz bem"), `Desconto PBM`
- Pacheco: `PBM Programa`/`PBM Autorizadora` (só a administradora, ex. LOGIXPHARMA/Seven, descartado)
- Venancio: `PBM` (Sim)
- As coleções da loja chamadas "PBM" (`productClusters`) **não** são usadas: podem estar desatualizadas (Venancio: "PBM Jan/22").

Implementação: `extrair_pbm()` em `scrape_precos_vtex.py` → `registrarPbm()` em `build_precos_redes.js`
gera `PBM_MEDICAMENTOS` (em `js/precos-redes.js`: desconto máx., nomes de programa, redes, produtos de
exemplo) → `renderizarPbm()` em `app.js` mostra o aviso no card do medicamento, e a tabela mostra
"💊 desconto do laboratório com CPF (até X%)" nas farmácias das redes que marcam o programa.
**Só informativo: preço e ordenação continuam sendo os de prateleira**, porque o desconto depende de
cadastro.

**Resultado da 1ª raspagem com PBM (29/09/2026, 82 min só VTEX):** 708 medicamentos com preço real (antes 704) e
**196 com programa de laboratório**; 85 com % de desconto, 95 com nome do programa (ex. "Viver mais",
"Vale mais saúde", "Mais Pfizer", "Bayer pra você"). Por rede: Drogaria São Paulo 158, Pacheco 114,
Venancio 99, Pague Menos 57, Extrafarma 57. Testado no navegador com dado real (Xarelto: aviso + etiqueta
nas 2 lojas Drogaria São Paulo, zero erros). Limitações: a informação vem das redes, não do laboratório (as redes discordam entre si, ex.:
Xarelto "Não" na Pague Menos e 17% na Drogaria São Paulo); Panvel e as redes fora da raspagem não
entram; o "até X%" é o que a loja declara. **Cobertura parcial:** a busca é por princípio ativo e só
lê a 1ª página de resultados (~10 produtos), então marcas de referência podem ficar de fora (ex.: Crestor
tem PBM de 20% na Pague Menos buscando "crestor", mas não aparece buscando "rosuvastatina cálcica").
Melhoria possível: buscar também pelo nome comercial e paginar (`_from`/`_to`). O mesmo limite afeta o
preço real. O aviso do card vale para o grupo do medicamento (marca + similares/genéricos do mesmo
princípio ativo), por isso cita exemplos de produtos.

## Nissei / Big Ben — avaliados em 2026-08-30, NÃO entram na raspagem
Mesmo critério das outras redes (robots.txt + ToS antes de qualquer coisa):
- **Farmácias Nissei** (`farmaciasnissei.com.br`, plataforma "RetailON"): tem loja online real, mas o
  `robots.txt` **desautoriza para todos os bots exceto o Google** justamente os caminhos que um
  raspador de preço precisa — `/catalog`, `/*:price`, `/searchanise`, `/catalogsearch`, `/pesquisa`.
  Tratamento igual ao da Droga Raia: **fora da raspagem, só via canal oficial.** (Sem canal de
  parceria de dados achado — se for atrás, mesmo esquema de outreach da RD.)
- **Drogarias Big Ben** (líder no Norte): **não tem loja web pública com preço** — vende por app
  próprio / WhatsApp. `bigben.com.br` é uma joalheria, sem relação. Nada a raspar; app-only ficaria
  para engenharia reversa de API mobile (mais invasivo/cinza, fora de escopo agora).

## Acesso às redes que bloqueiam — vias legítimas (pesquisa 29/09/2026)
Redes sem coleta: Droga Raia/Drogasil (Termos de Uso proíbem), Ultrafarma/Araújo/Panvel (bloqueio ativo),
Nissei (robots.txt). Achados (C = confirmado em fonte oficial; I = inferência):
- **Economiza Alagoas (SEFAZ-AL) — API pública e gratuita (C, confirmado por 2 pesquisas independentes).**
  Preço REAL de venda por loja a partir da NFC-e, inclusive farmácias, busca por EAN, atualiza a cada 3h,
  guarda 10 dias. Token por e-mail a api@sefaz.al.gov.br (nome, CPF, nome do app, URL). Base:
  `api.sefaz.al.gov.br/sfz-economiza-alagoas-api/api/public/`, token no cabeçalho `AppToken`. Termo de
  uso não publicado: pedir autorização escrita junto. Só cobre AL. Docs:
  https://economizaalagoas.sefaz.al.gov.br/desenvolvedor.htm
- **Outros apps de SEFAZ com preço de NFC-e** (sem API pública): Menor Preço Brasil (Procergs/SEFAZ-RS +
  Encat, ~15 UFs incl. RJ, DF, CE, PE, PI, PA, ES), Menor Preço PR (Nota Paraná), Preço da Hora BA
  (termos PROÍBEM uso não pessoal/cópia — só com convênio), Busca Preço AM. Caminho: ofício/convênio
  (acordo de cooperação técnica) ou pedido via LAI, citando a API de AL como precedente. Precedentes de
  cooperação: SEFAZ-PI com universidade, SEFAZ-PB com TCE-PB (C).
- **Programas de afiliados** (feed com EAN/preço só aparece depois de aprovado):
  - Lomadee: Droga Raia, Drogasil (C), Drogaria São Paulo, Pacheco. Aceita pessoa física.
  - Awin: Araújo (C; inclui medicamentos), Pague Menos, Venancio. Araújo e Pague Menos recusam PF (exigem CNPJ).
  - Panvel, Ultrafarma, Nissei: nenhum programa encontrado.
  - Cuidado: "comparador" não aparece como mídia permitida nos perfis da Awin, então o uso teria de ser
    aprovado pela rede. Os links geram comissão automaticamente (pode ser doada, mas há efeito fiscal).
- **Crowdsourcing do cupom fiscal:** o usuário escaneia o QR da NFC-e dele e o app lê a página pública
  da SEFAZ (itens, preço, CNPJ, data) (C).
  - O EAN não aparece de forma confirmada, só o código interno da loja.
  - Descartar o CPF do comprador (LGPD).
  - Já existem apps que fazem isso (Anotadíssimo, Economiza Club).
  - Cobre QUALQUER rede, inclusive as que bloqueiam, porque é o próprio consumidor que traz o dado.
- **Fornecedores pagos/institucionais:**
  - InfoPrice tem preço praticado por loja, com plano Free só de faixas (API só nos planos pagos).
  - IQVIA, Close-Up, Brasíndice, Guia da Farmácia, Abcfarma, Kairos: preço de lista ou só para a indústria. Pouco útil.
  - PBMs (Funcional, ePharma, Orizon, Vidalink, Interplayers): nenhuma API para apps de terceiros (C).
  - Comparadores existentes (Consulta Remédios, CliqueFarma, Zoom): recebem o catálogo das farmácias,
    que pagam por clique ou integram o ERP (Trier, Linx, Plugg.To).
- **Parceiros de interesse público:**
  - Idec: campanha "Remédio a Preço Justo", pesquisa anual nas 5 maiores redes.
  - Procon-SP: pesquisa anual de preço por drogaria.
  - Inova SUS Digital (MS): edital fechado; acompanhar a próxima chamada.
  - Parceria com universidade pública dá legitimidade aos pedidos às SEFAZ.

**⚠️ Ponto regulatório levantado (verificar com advogado antes de publicar):**
- RDC 96/2008 (Anvisa), art. 11: comparação de preço dirigida ao consumidor só entre medicamentos
  **intercambiáveis**, e proibida para **biológicos**. Se houver desconto, é obrigatório mostrar o preço cheio.
- Art. 18: preço ao público em lista, com nome, DCB, apresentação, registro e detentor.
- RDC 44/2009: proíbe propaganda de medicamento de tarja em sites.
- Não está claro se um comparador sem fins lucrativos é "propaganda" pela RDC.
- No catálogo atual, a seção "Alternativas Genéricas" sugere **similares em 406 grupos** e envolve
  **biológicos em 24 grupos**, e o texto da seção diz "o genérico..." mesmo quando lista similar.
  Correção proposta (NÃO feita ainda, aguarda decisão):
  - mostrar só Genérico (e similar intercambiável, se houver lista oficial);
  - tirar os biológicos da comparação.

## Próximos passos sugeridos
- [ ] **E-mail à SEFAZ-AL (api@sefaz.al.gov.br) pedindo token da API Economiza Alagoas + autorização escrita de uso** (utilidade pública, sem fins lucrativos). Com o token: integrar em `backend/app/coleta/` casando por EAN (Frente 3 já pronta).
- [ ] Decidir sobre a seção "Alternativas Genéricas" x RDC 96/2008 (similares/biológicos) — ver seção "Acesso às redes que bloqueiam". Ideal: consulta a advogado antes de publicar.
- [ ] Ofício/LAI de cooperação à SEFAZ-RS/Procergs + Encat (Menor Preço Brasil), SEFA-PR e SEFAZ-BA pedindo acesso a preços de farmácia por EAN pra uso sem fins lucrativos (citar a API de AL como precedente). Mais forte com âncora institucional (universidade/Idec).
- [ ] Cadastro na Lomadee (Droga Raia/Drogasil) e chamado perguntando se há feed com preço/EAN e se o uso em comparador sem fins lucrativos é aceito.
- [ ] Avaliar o botão "Enviar meu cupom" (QR da NFC-e) — cobre qualquer rede com dado trazido pelo próprio consumidor; descartar CPF.
- [ ] **AGUARDANDO O USUÁRIO: revisar e enviar os 2 rascunhos** (RD e Araújo) em `outreach/contatos-parcerias.md`. Sem retorno por e-mail dos 3 primeiros — usuário vai tentar **telefone em dia útil**.
- [ ] Registrar respostas dos 5 contatos (Brasíndice, Funcional, Orizon, RD, Araújo) em `outreach/contatos-parcerias.md`. **Funcional/Orizon = caminho oficial do PBM** (preço exato com desconto).
- [ ] Rodar a Camada A (sitemaps) nas outras 4 redes (`python -m app.cli tarefa descobrir_sitemaps`, ~4 min por rede; Pacheco tem ~94 mil URLs) — só a Venancio foi testada. A agenda roda todo domingo com o Docker de pé.
- [ ] Rodar um lote de preços completo pelo worker (`atualizar_precos_lote`, ~30 min com as redes em paralelo) pra renovar os preços legados e trazer EAN de todos os SKUs.
- [ ] Hospedagem 24x7: a agenda só roda com o Docker de pé. Pra nuvem, o mesmo `docker-compose.yml` serve de base (trocar senha em `.env`, colocar HTTPS/proxy na frente da `api`, Postgres gerenciado opcional). Decidir provedor.
- [ ] Estimativa de preço pras redes sem coleta é fraca (teto CMED x 0,85 x fator fixo). Avaliar trocar pela mediana dos preços reais da mesma apresentação.
- [ ] Refinos de casamento: ~19% dos SKUs das redes seguem sem casar (muitos são não-medicamentos: suplementos, correlatos); "Dipirona" x "Dipirona Monoidratada" continuam grupos separados (nuance CMED).
- [ ] Cobertura da reserva de farmácias é só 9 capitais (usada só com Overpass fora do ar e sem cache da região).
- [ ] **Conector Gmail** — ainda preso na conta pessoal (passo a passo de reconexão já passado ao usuário).

## Notas / decisões pendentes
- **Conector Gmail nunca migrou para `med.precosbr@gmail.com` nesta sessão** (ficou preso na conta pessoal em várias tentativas). Contornado enviando os e-mails manualmente pelo usuário, copiando o texto dos rascunhos.
- **E-mails enviados em 18/08/2026:** Brasíndice, Funcional Health Tech, Orizon (aguardando resposta dos 3).
