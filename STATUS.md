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
- [ ] **PRIORIDADE ATUAL: sair do mock e ligar a dados reais** (decisão do usuário nesta sessão).
- [ ] Decidir a fonte de dados reais — ver opções levantadas abaixo em "Decisões pendentes". Usuário pediu mais tempo para pensar/decidir direção.
- [ ] Depois de decidida a fonte, planear integração incremental (ex: preço de referência primeiro, ou localização real primeiro — dependente da decisão).

## Notas / decisões pendentes
- **Fonte de dados reais (em aberto):** opções levantadas foram (1) CMED/ANVISA — preço de referência oficial, público, mas não é preço por farmácia; (2) OpenStreetMap/Overpass ou Google Places — localização real de farmácias (grátis/tier grátis), sem preço; (3) preço real por farmácia específica — não existe API pública gratuita no Brasil (Drogasil/Raia/Pacheco/Ultrafarma etc.), exigiria parceria paga ou scraping (não recomendado). Caminho sugerido foi CMED + Overpass com preço por farmácia como estimativa (com aviso na UI), mas usuário quer pensar melhor antes de decidir — **retomar esta conversa na próxima sessão**.
