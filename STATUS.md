# Ponto de Situação — MED_PRECOS

> Este arquivo é atualizado no fim de cada sessão de trabalho para registrar o que foi feito e o que falta.

## Última atualização
2026-08-18 — **Preço real por farmácia implementado** (raspagem em 6 redes) e funcionando de ponta a
ponta. Os três blocos de dados do app (medicamentos, farmácias, preço por farmácia) agora são reais
ou têm caminho oficial de dado real — só falta preencher as redes fora do escopo de raspagem via
parceria (RD/Araújo, aguardando resposta).

## Estado atual
- Projeto **agora sob git** (local, sem remoto). Commit inicial `19d515c`.
- Estrutura: `index.html`, `css/style.css`, `js/app.js`, `js/data.js`, `js/precos-redes.js`, `js/speech.js`, `scripts/*`.
- App é um comparador de preços de medicamentos (front-end puro): busca por nome/voz, localização por GPS/CEP, alternativas genéricas, comparação entre farmácias, roteiro de compras (Premium).
- **`BANCO_MEDICAMENTOS`** — real, 760 medicamentos da lista oficial CMED/ANVISA (preço PMC, classe terapêutica, registro ANVISA por produto). Gerado por `scripts/build_data_cmed.py`.
- **`BANCO_FARMACIAS`** — real, duas camadas (busca ao vivo via Overpass com escalonamento de raio 10→60km, fallback pré-carregado de 54 farmácias em 9 capitais). Ver detalhes na seção de farmácias abaixo.
- **Preço por farmácia** — real quando disponível, estimado como fallback. Ver seção de raspagem abaixo.
- `speech.js` usa Web Speech API nativa do navegador (já real, não mock).

## Farmácias (Overpass/OpenStreetMap)
1. **Busca ao vivo** (`buscarFarmaciasReaisProximas()` em `app.js`): consulta a Overpass API a cada busca, com escalonamento de raio — começa em 10km (rápido, leve pra API pública) e só amplia (20→35→60km) se não achar pelo menos `META_LOJAS=15` farmácias ou `META_REDES_DISTINTAS=5` redes diferentes, nunca ultrapassando o raio escolhido pelo usuário. Cache de 24h no navegador por região+raio.
2. **Fallback pré-carregado**: se a primeira tentativa falhar em todos os endpoints, cai pra `BANCO_FARMACIAS` — 54 farmácias reais (9 capitais), geradas por `scripts/build_farmacias_overpass.py` (rodar `fetch_farmacias_overpass.py` antes, pra gerar o JSON intermediário).
3. Exibição limitada a `MAX_FARMACIAS_EXIBIDAS = 15` (as mais próximas) — Overpass pode retornar centenas numa capital densa.

## Medicamentos (CMED/ANVISA)
1. Fonte: `gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos` — arquivo **"site"** (PF + **PMC**; existe um "gov" com PMVG, para compras públicas — não é esse).
2. URL do mês: `curl -s -H "Accept: application/json" "https://www.gov.br/anvisa/++api++/pt-br/assuntos/medicamentos/cmed/precos"` e procurar `xls_conformidade_site_*.xlsx/@@download/file`.
3. `python scripts/build_data_cmed.py caminho/para/arquivo.xlsx` regenera `js/data.js` (inclui `registrosAnvisa` por produto, usado pro casamento de preço real — ver abaixo).
4. **Aproximação assumida:** PMC varia por UF (ICMS). Fixada uma referência nacional única: "Genérico" → coluna PMC 12% (SP/MG), demais → PMC 18% (padrão SP).
5. **Nuance:** CMED registra `SUBSTÂNCIA` de forma literal — "Dipirona" e "Dipirona Monoidratada" viram grupos separados. Não normalizado ainda.

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

## Próximos passos sugeridos
- [ ] **AGUARDANDO O USUÁRIO: revisar e enviar os 2 novos rascunhos** (RD e Araújo) em `outreach/contatos-parcerias.md`, mesmo esquema dos 3 já enviados (copiar/colar manualmente).
- [ ] Registrar respostas de todos os 5 contatos (Brasíndice, Funcional, Orizon, RD, Araújo) em `outreach/contatos-parcerias.md` assim que chegarem.
- [ ] Reavaliar Nissei/Big Ben pra raspagem (domínio não confirmado ainda) se fizer sentido ampliar cobertura.
- [ ] Repetir a raspagem periodicamente (preços mudam) — não há agendamento automático ainda, é manual rodando os 3 comandos acima.
- [ ] Campos que a base real de medicamentos não tem: `descricao` mais amigável e `sinonimias` pra busca por voz — melhoria futura, não bloqueante.
- [ ] Cobertura do pré-carregado de farmácias é só 9 capitais — fora delas, sem internet/Overpass fora do ar, busca fica sem resultado (limitação conhecida, comportamento correto).

## Notas / decisões pendentes
- **Conector Gmail nunca migrou para `med.precosbr@gmail.com` nesta sessão** (ficou preso na conta pessoal em várias tentativas). Contornado enviando os e-mails manualmente pelo usuário, copiando o texto dos rascunhos.
- **E-mails enviados em 18/08/2026:** Brasíndice, Funcional Health Tech, Orizon (aguardando resposta dos 3).
