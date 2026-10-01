# Ponto de Situação — MED_PRECOS

> Este arquivo é atualizado no fim de cada sessão de trabalho para registrar o que foi feito e o que falta.

## Última atualização
2026-09-30 (noite) — **Grupos da CMED unificados por hidratação.**
- Id do grupo (`medicamentos.id`) passa a sair de `substancia_canonica()` (`matching/normalizacao.py`):
  remove mono/di/tri/hemi/sesqui/…-hidratado e anidro, componente a componente; "dipirona sódica" = "dipirona".
  **Sal diferente continua separado de propósito** (diclofenaco sódico x potássico, dipirona magnésica).
  Substância sem hidratação no nome mantém o mesmo id (nada muda pra elas).
- Reimportação migra sozinha: apresentações (inclusive inativas) e SKUs das redes passam pro grupo novo;
  grupo antigo sem apresentação é apagado (`grupos_fundidos` no resumo). Nome exibido = grafia mais curta
  da CMED ("Dipirona"). Sinônimos curados ignoram hidratação ("dipirona monoidratada" vale pra "Dipirona").
- **Não validado com dados reais** (sessão na nuvem sem acesso ao gov.br): só testes (63 ok, novo
  `tests/test_importar_cmed.py`). Efeito colateral conhecido: link antigo `/medicamento/dipirona-monoidratada`
  dá 404.
- (01/10) Índices em memória (busca na API, casamento no worker) agora conferem a cada 60s se o catálogo
  mudou (`catalogo/versao.py`: contagem de grupos + última atualização) e se recriam. Antes a API, que é
  outro processo, ficava até 6h com o índice velho depois da importação.
- Não feito (avaliar com a planilha): ordem dos componentes em combinações ("A;B" x "B;A").

2026-09-30 (tarde) — **3 redes novas via Lomadee + laboratório + endereço das farmácias.**
- **Drogaria Rosário, Drogasmil e PromoFarma integradas** pela API oficial da Lomadee:
  - catálogo inteiro no lote diário (~2 min, ~4,2 mil produtos, casamento quase todo por EAN);
  - busca por termo no sob demanda;
  - PromoFarma (só online) entra na tabela como "loja online, com entrega".
- **Laboratório** exibido no card (marca de referência), em cada alternativa genérica (laboratório da
  opção mais barata) e no produto de cada farmácia (pela CMED). Pedido do usuário.
- **Endereço das farmácias**: rua/bairro/CEP que o OpenStreetMap não informa são completados pelo
  Nominatim reverso (cache 90 dias, 1 req/s, até ~5s por busca, resto em segundo plano), marcados como
  "endereço aproximado". O título dos resultados mostra a rua e o bairro do CEP pesquisado. Pedido do usuário.
- **CMED mudou o nome do arquivo** ("lista_PMC_..." desde 23/09) e publicou link QUEBRADO (404). A
  importação agora aceita os dois nomes, pula link quebrado, deduz a planilha pelo PDF e, em último
  caso, usa a última baixada. Segue valendo a lista de 09/09 até o governo consertar o link.

2026-09-30 — **Lomadee validada.** Conta de afiliado (em nome de Izabela Nascimento; usuário decidiu
manter nessa conta, uso só para comparar, sem venda). Resultado na seção "Lomadee" abaixo: **Droga
Raia/Drogasil estão INATIVAS na Lomadee** (não resolve); a API dá acesso autorizado a 3 redes que o
MedPreços ainda não cobre (Drogaria Rosário, Drogasmil, PromoFarma). Chave de API só-leitura criada.

2026-09-29 (noite, 2) — **Ofertas proativas.** A pedido do usuário (prompt enxuto revisado junto com ele),
o MedPreços mostra sem o usuário digitar quantidade as promoções das redes ("Leve 3 pague 2: R$ 18,46/un.
levando 3 (avulso R$ 27,69)"), o preço "de/por" e o programa do laboratório. Detalhes na seção
"Ofertas proativas". Pedido LAI à SEFAZ-RS enviado (protocolo `200773045/0168`).

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

## Ofertas proativas (desde 29/09/2026)
- **Fonte:** `commertialOffer.PromotionTeasers` da mesma API de vitrine VTEX (sem checkout). Amostra de
  20 princípios ativos: 35 a 45% dos produtos têm promoção, sempre com quantidade mínima. Só 3 formatos:
  "LEVE X PAGUE Y" (Venancio acrescenta "- <contrato>"), "N% OFF NA Kª UNIDADE" e (Pague Menos/Extrafarma)
  "COMPRE4 GANHE DESCONTO [Compre 4 com 30% OFF]". Nenhuma traz validade.
- **Nomes de coleção (`productClusters`) NÃO são usados:** cheios de campanhas vencidas.
- **Tabela `ofertas_sku`** (migração `dc0fb9ff2382`): tipo `promocao_rede` | `de_por` | `programa_laboratorio`,
  quantidade mínima, % efetivo, preço efetivo por unidade, exige CPF/cupom. **Substituída a cada coleta**
  (oferta que a loja tirou some); promoção e de/por só aparecem com coleta de até 48h.
- **Interpretação** em `backend/app/coleta/ofertas.py`; nome desconhecido fica só com o texto original
  (não inventa número).
- **Regras de exibição** (`servicos/comparacao.py`):
  - só mostra a promoção que **compensa**: preço por unidade menor que o avulso mais barato da rede, ou
    promoção do próprio produto da linha;
  - o programa de laboratório só aparece na linha do próprio produto; o aviso geral fica no card;
  - a ordenação e o selo MENOR PREÇO continuam pelo preço avulso, e o preço avulso é sempre exibido
    junto (Anvisa).
- **API:** `farmacias[].ofertas`, `farmacias[].precoLista` ("de"), `ofertasApresentacao` (resumo por rede)
  e `apresentacoes[].redesComPromocao`. Front: bloco "🏷️ Ofertas levando mais de uma unidade" no card,
  etiqueta por farmácia e aviso no seletor de apresentação.
- **Validado:** 44 testes; Docker/Postgres com dado real ("bupropiona" em SP: Venancio "leve 3 pague 2" a
  R$ 18,46/un. contra R$ 27,69 avulso; Drogaria São Paulo R$ 74,39/un.; a apresentação 300mg não mostra
  oferta nenhuma).
- **Marca x genéricos (decisão do usuário, 29/09):** o bloco de ofertas do card tem duas partes:
  - **a marca buscada** (a busca agora devolve `marca`: "Wellbutrin", "Deradop XL"...; buscando o
    princípio ativo, vale a marca de referência): as ofertas dela em cada rede, mesmo quando o genérico
    sai mais barato;
  - **genéricos e similares**: promoções que compensam, uma por rede.
  - Parâmetro `marca` em `/api/comparar`; resposta `ofertasMarca` {marca, redes[], programas[]}.
- **Wellbutrin — achado:** a oferta do Wellbutrin de marca é o **programa GSK "Viver Mais"** (desconto do
  laboratório com CPF, 20 a 70%, vale em farmácias credenciadas; localizador oficial em
  https://www.vivermaisgsk.com.br/Localizador). Aparece nas 5 redes coletadas. 150mg x 30:
  - Pague Menos e Extrafarma: R$ 198,99 -> **R$ 134,93** com o programa (a loja informa o preço mínimo,
    agora usado para calcular o %);
  - Pacheco: 25% -> R$ 140,25;
  - Drogaria São Paulo e Venancio: informam que tem o programa, sem valor.
  - O usuário diz que Araújo e Droga Raia têm oferta de Wellbutrin: muito provavelmente é esse mesmo
    programa, que é do laboratório e não da rede. Não dá pra confirmar: essas redes não são coletadas.
- `PROGRAMAS_CONHECIDOS` em `coleta/ofertas.py`: programas de laboratório com página oficial CONFERIDA
  (hoje só o Viver Mais/GSK), com nome oficial e link. Acrescentar outros só depois de conferir a fonte.
- Busca: termo mais longo que o nome cadastrado passou a funcionar ("wellbutrin xl", "xarelto 20mg";
  antes não achava nada).
- O aviso antigo de PBM do card some quando o bloco da marca já mostra o programa (evita "até 25%"
  contra "32%"); quando aparece, o % também considera o preço mínimo informado.

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

## Lomadee — Affiliate API (validada 30/09/2026)
- **Droga Raia e Drogasil: programa "Inativo"** nas páginas públicas da Lomadee e ausentes do catálogo da
  conta. A Lomadee NÃO resolve essas duas. Araújo não está na Lomadee (está na Awin, que exige CNPJ).
- **Farmácias disponíveis na conta:** Drogaria Rosário (DF/MT, 90+ lojas), Drogasmil (RJ, 50+ lojas),
  PromoFarma (online) e BioVittare (manipulação). As três primeiras têm medicamentos com preço e **EAN**
  (bate com a CMED; ex. Losartana EMS 7896004706795).
- **API:** `GET https://api.lomadee.com.br/affiliate/products` (header `x-api-key`), com `search`,
  `organizationIds` (id da marca), `isAvailable`, `limit` até 100, `page`. Limite: **60 req/min**.
  - ⚠️ Os preços (`pricing[].price` / `listPrice`) vêm **em REAIS** (ex.: 5.75), não em centavos como
    diz a documentação.
  - A resposta de produtos traz só `data` (o `count` documentado não veio).
  - Docs: https://docs.lomadee.com.br (llms.txt lista tudo).
- **Chave:** criada 30/09/2026 no painel (`app.lomadee.com.br/api-keys`), nome "MedPrecos leitura
  catalogo", **só 3 escopos de leitura** (brands, campaigns, products). Sem pedidos/comissões, canais
  ou encurtador. Guardada em `backend/.env` como `LOMADEE_API_KEY` (git-ignorado).
  - Ids das marcas: Rosário `1fcee90e-562e-455c-97a5-6bdd6d60b589`; Drogasmil
    `d855f505-7e26-4961-a182-c2139aeadd2c`; PromoFarma `6d69265c-6b83-4ff4-916f-95a75057947d`.
- **Regra a observar:** na Rosário, os canais de divulgação permitidos são "Redes Sociais" e "Site de
  Cupons"; comparador não está listado. O usuário optou por NÃO consultar o suporte da Lomadee.
- **Integrado em 30/09/2026** (`backend/app/coleta/lomadee.py`; redes `rosario`, `drogasmil`, `promofarma` em `redes.py`; campo `redes.somente_online`). Casados na 1ª carga: Drogasmil 613 de 1.971, PromoFarma 1.021 de 2.016, Rosário 64 de 206; o que não casa é quase tudo não-medicamento. O feed da Rosário é pequeno (~200 produtos).

## Próximos passos sugeridos
- [x] **Unificar "Dipirona" e "Dipirona Monoidratada"** (30/09, noite) — grupo = substância SEM grau de
  hidratação (`substancia_canonica`). [ ] **Validar com a planilha real** (`python -m app.cli tarefa importar_cmed`):
  conferir `grupos_fundidos` no resumo e se a referência da dipirona virou Novalgina.
- [ ] A 1ª busca numa região nova leva ~20-30s (atualização de preços + Overpass + endereços). As
  seguintes usam cache. Avaliar pré-aquecer as capitais.
- [ ] **ENVIAR (rascunho pronto em `outreach/contatos-parcerias.md`, item 6): e-mail à SEFAZ-AL (api@sefaz.al.gov.br) pedindo token da API Economiza Alagoas + autorização escrita de uso** — falta só preencher o CPF. Com o token: integrar em `backend/app/coleta/` casando por EAN (Frente 3 já pronta).
- [ ] Decidir sobre a seção "Alternativas Genéricas" x RDC 96/2008 (similares/biológicos) — ver seção "Acesso às redes que bloqueiam". Ideal: consulta a advogado antes de publicar.
- [x] **Pedido LAI à SEFAZ-RS ENVIADO em 29/09/2026 — PROTOCOLO (governo do RS): `200773045/0168`.** Prazo de resposta: **19/10/2026**, prorrogável até **29/10/2026**. [ ] Registrar a resposta em `outreach/contatos-parcerias.md` (item 7). Depois: mesmo pedido a SEFA-PR e SEFAZ-BA. Ofício/LAI de cooperação à SEFAZ-RS/Procergs + Encat (Menor Preço Brasil), SEFA-PR e SEFAZ-BA pedindo acesso a preços de farmácia por EAN pra uso sem fins lucrativos (citar a API de AL como precedente). Mais forte com âncora institucional (universidade/Idec).
- [x] ~~Cadastro na Lomadee (Droga Raia/Drogasil)~~ — validado 30/09: Raia/Drogasil INATIVAS lá. Rosário/Drogasmil/PromoFarma integradas pela API (30/09).
- [ ] Avaliar o botão "Enviar meu cupom" (QR da NFC-e) — cobre qualquer rede com dado trazido pelo próprio consumidor; descartar CPF.
- [ ] **AGUARDANDO O USUÁRIO: revisar e enviar os 2 rascunhos** (RD e Araújo) em `outreach/contatos-parcerias.md`. Sem retorno por e-mail dos 3 primeiros — usuário vai tentar **telefone em dia útil**.
- [ ] Registrar respostas dos 5 contatos (Brasíndice, Funcional, Orizon, RD, Araújo) em `outreach/contatos-parcerias.md`. **Funcional/Orizon = caminho oficial do PBM** (preço exato com desconto).
- [ ] Rodar a Camada A (sitemaps) nas outras 4 redes (`python -m app.cli tarefa descobrir_sitemaps`, ~4 min por rede; Pacheco tem ~94 mil URLs) — só a Venancio foi testada. A agenda roda todo domingo com o Docker de pé.
- [ ] Rodar um lote de preços completo pelo worker (`atualizar_precos_lote`, ~30 min com as redes em paralelo) pra renovar os preços legados e trazer EAN de todos os SKUs.
- [ ] Hospedagem 24x7: a agenda só roda com o Docker de pé. Pra nuvem, o mesmo `docker-compose.yml` serve de base (trocar senha em `.env`, colocar HTTPS/proxy na frente da `api`, Postgres gerenciado opcional). Decidir provedor.
- [ ] Estimativa de preço pras redes sem coleta é fraca (teto CMED x 0,85 x fator fixo). Avaliar trocar pela mediana dos preços reais da mesma apresentação.
- [ ] Refinos de casamento: ~19% dos SKUs das redes seguem sem casar (muitos são não-medicamentos: suplementos, correlatos); (dipirona x monoidratada resolvido em 30/09 — falta validar com a planilha).
- [ ] Cobertura da reserva de farmácias é só 9 capitais (usada só com Overpass fora do ar e sem cache da região).
- [ ] **Conector Gmail** — ainda preso na conta pessoal (passo a passo de reconexão já passado ao usuário).

## Notas / decisões pendentes
- **Conector Gmail nunca migrou para `med.precosbr@gmail.com` nesta sessão** (ficou preso na conta pessoal em várias tentativas). Contornado enviando os e-mails manualmente pelo usuário, copiando o texto dos rascunhos.
- **E-mails enviados em 18/08/2026:** Brasíndice, Funcional Health Tech, Orizon (aguardando resposta dos 3).
