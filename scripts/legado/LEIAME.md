# Scripts legados (antes do backend)

Estes scripts geravam os arquivos estáticos que o site carregava direto no
navegador (`js/data.js`, `js/precos-redes.js`). Desde 29/09/2026 o MedPreços
tem backend (pasta `backend/`), e cada um foi portado para lá:

| Script antigo | Substituído por |
|---|---|
| `build_data_cmed.py` | `backend/app/catalogo/importar_cmed.py` (baixa sozinho a lista do mês) |
| `enriquecimento-medicamentos.js` + `aplicar-enriquecimento.js` | `backend/app/catalogo/enriquecimento.py` (regras em `catalogo/dados/enriquecimento.json`, exportadas deste JS) |
| `scrape_precos_vtex.py` | `backend/app/coleta/vtex.py` + `lote.py` + `sob_demanda.py` |
| `build_precos_redes.js` | `backend/app/matching/casamento.py` + `coleta/persistencia.py` |
| `scrape_precos_panvel.js` | nenhum: a Panvel passou a bloquear acesso automatizado (403) em 29/09/2026 |
| `atualizar-precos.ps1` + tarefa do Windows | agenda do Celery (`backend/app/workers/celery_app.py`) |
| `fetch_/build_farmacias_overpass.py` | `backend/app/coleta/geo.py` (reserva em `catalogo/dados/farmacias_fallback.json`) |

Ficam aqui só como referência histórica: eles apontam pra `js/data.js`, que
não existe mais, e não devem ser rodados.
