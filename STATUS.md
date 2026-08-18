# Ponto de Situação — MED_PRECOS

> Este arquivo é atualizado no fim de cada sessão de trabalho para registrar o que foi feito e o que falta.

## Última atualização
2026-08-18 — `data.js` passou a usar preços REAIS da CMED/ANVISA (fim do mock de medicamentos)

## Estado atual
- Projeto **agora sob git** (local, sem remoto). Commit inicial `19d515c`: "Estado inicial: MED_PRECOS com dados mock (pré integração API real)".
- Estrutura: `index.html`, `css/style.css`, `js/app.js`, `js/data.js`, `js/speech.js`, `scripts/build_data_cmed.py`.
- App é um comparador de preços de medicamentos (front-end puro): busca por nome/voz, localização por GPS/CEP, alternativas genéricas, comparação entre farmácias, roteiro de compras (Premium).
- **`BANCO_MEDICAMENTOS` em `data.js` agora é gerado a partir de dados REAIS** da lista oficial de preços CMED (ANVISA) — 760 medicamentos (princípio ativo com ≥2 produtos/preços), cada um com produto de referência + até 6 alternativas mais baratas, preço real (PMC) e classe terapêutica real. Testado ao vivo no navegador (Playwright) — busca "paracetamol" retornou dados corretos, sem erros de console.
- **`BANCO_FARMACIAS` continua mock** — geo-referenciamento real de farmácias ainda não resolvido (ver nota Overpass abaixo).
- `speech.js` usa Web Speech API nativa do navegador (já real, não mock).

## Como os dados reais foram obtidos (para reproduzir/atualizar no futuro)
1. Fonte: `gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos` — arquivo **"site"** (traz PF + **PMC**, o preço que interessa ao consumidor; existe também um arquivo "gov" com PMVG, para compras públicas — não é esse).
2. O link do arquivo do mês não aparece direto no HTML (site renderizado em JS). Para achar a URL atual:
   `curl -s -H "Accept: application/json" "https://www.gov.br/anvisa/++api++/pt-br/assuntos/medicamentos/cmed/precos"` e procurar por `xls_conformidade_site_*.xlsx/@@download/file`.
3. Rodar `python scripts/build_data_cmed.py caminho/para/arquivo.xlsx` — regenera `js/data.js` inteiro a partir do zero.
4. **Aproximação de preço assumida (documentada no topo do `data.js` também):** o PMC varia por UF (alíquota de ICMS). Para não explodir o tamanho do arquivo nem exigir seleção de estado no app ainda, foi fixada uma referência única nacional: produtos "Genérico" usam a coluna **PMC 12%** (alíquota reduzida SP/MG para genéricos), demais produtos usam **PMC 18%** (alíquota padrão SP). Preço real ao consumidor pode variar por estado — ver tabela de alíquotas por UF levantada nesta sessão (não persistida em arquivo ainda, refazer busca "alíquota ICMS medicamentos por estado" se for implementar seleção por UF).
5. **Nuance conhecida:** a CMED registra `SUBSTÂNCIA` de forma literal — ex. "Dipirona" e "Dipirona Monoidratada" viram grupos separados mesmo sendo o mesmo princípio ativo em formas de sal diferentes. Não foi feita normalização/merge disso; é uma melhoria futura possível.
6. **Descoberto e descartado no caminho:** medicamentos.api.br (wrapper pago pra consulta por princípio ativo, R$149/mês) — não foi usado. O CSV aberto da ANVISA (`dados.anvisa.gov.br/dados/DADOS_ABERTOS_MEDICAMENTOS.csv`) também foi avaliado mas acabou não sendo necessário, pois o próprio arquivo CMED já traz SUBSTÂNCIA + PRODUTO + TIPO em um só lugar.

## Próximos passos sugeridos
- [ ] **Geo-referenciamento de farmácias continua pendente.** Overpass API (OpenStreetMap) pública testada ao vivo nesta sessão (instância principal + 2 mirrors) e estava fora do ar por sobrecarga — não dá pra depender dela em tempo real. Próxima tentativa: rodar consulta em lote/offline por cidade-alvo e cachear localmente, ou reavaliar alternativa paga (Google Places) se virar bloqueio real de produto.
- [ ] Campos que a base real não tem (que o mock tinha, curados à mão): `descricao` amigável ao consumidor (hoje vem da classe terapêutica ANVISA, mais técnica) e `sinonimias` para busca por voz/fuzzy-match (hoje vazio — busca cai só em nome + princípio ativo). Melhoria futura possível se a qualidade de busca não for suficiente.
- [ ] **AGUARDANDO O USUÁRIO: revisar os rascunhos de e-mail** em `outreach/contatos-parcerias.md` antes de enviar (Brasíndice, Funcional Health Tech, Orizon) — ainda pode valer a pena para preços por farmácia específica (o que a CMED não cobre, ela só dá o teto legal). Nada foi enviado ainda.
- [ ] Depois de enviados, registrar respostas recebidas em `outreach/contatos-parcerias.md`.

## Notas / decisões pendentes
- **Conector Gmail ainda não migrou para `med.precosbr@gmail.com` nesta sessão.** Múltiplas tentativas de reconexão do lado do claude.ai não refletiram aqui (mesma conta pessoal aparecendo sempre). Suspeita: sessão de conversa fica presa na autorização feita no início dela — pode exigir conversa nova para pegar a troca. Os 3 rascunhos foram entregues como texto puro na conversa para o usuário colar manualmente, sem depender do conector.
- **Fonte de preço por farmácia específica (não coberta pela CMED, que só dá o teto legal nacional):** segue em aberto — depende de resposta das parcerias comerciais (Brasíndice/Funcional/Orizon) em `outreach/contatos-parcerias.md`.
