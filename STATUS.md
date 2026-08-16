# Ponto de Situação — MED_PRECOS

> Este arquivo é atualizado no fim de cada sessão de trabalho para registrar o que foi feito e o que falta.

## Última atualização
2026-08-16

## Estado atual
- Projeto **agora sob git** (local, sem remoto). Commit inicial `19d515c`: "Estado inicial: MED_PRECOS com dados mock (pré integração API real)".
- Estrutura: `index.html`, `css/style.css`, `js/app.js`, `js/data.js`, `js/speech.js`.
- App é um comparador de preços de medicamentos (front-end puro): busca por nome/voz, localização por GPS/CEP, alternativas genéricas, comparação entre farmácias, roteiro de compras (Premium).
- `data.js` é **100% mock** (`BANCO_MEDICAMENTOS` fictício) — comentário no código já indica que foi pensado para futura integração com API real.
- `speech.js` usa Web Speech API nativa do navegador (já real, não mock).

## Últimos passos conhecidos
- Estrutura da UI e lógica de busca/pontuação/fuzzy-match em `app.js` já implementadas sobre dados mock.
- Git iniciado nesta sessão para termos histórico real a partir daqui.

## Próximos passos sugeridos
- [ ] **AGUARDANDO O USUÁRIO: revisar os rascunhos de e-mail** em `outreach/contatos-parcerias.md` antes de enviar (Brasíndice, Funcional Health Tech, Orizon). Nada foi enviado ainda.
- [ ] Depois de enviados, registrar respostas recebidas em `outreach/contatos-parcerias.md` e decidir a fonte de dados reais com base no retorno.
- [ ] Alternativa gratuita já mapeada, caso as parcerias pagas não avancem: CMED/ANVISA (preço de referência) + OpenStreetMap/Overpass (farmácias reais próximas), preço por farmácia como estimativa com aviso na UI.
- [ ] Scraping foi descartado como primeira opção (risco legal/ToS + LGPD + fragilidade técnica) — ver detalhes na conversa registrada.

## Notas / decisões pendentes
- **Fonte de dados reais (em aberto):** aguardando resposta dos contatos comerciais (Brasíndice = preços de mercado reais; Funcional/Orizon = descontos PBM em farmácias credenciadas). Contatos e rascunhos prontos em `outreach/contatos-parcerias.md`.
- **Retomar esta conversa** assim que o usuário tiver revisado/enviado os e-mails ou decidido não seguir por aí.
