/**
 * Raspa preços reais de medicamentos na Panvel (não é VTEX - API própria com
 * sessão de navegador; ver STATUS.md). Roda com Playwright: abre a home uma
 * vez pra obter uma sessão válida, depois reusa a mesma aba pra buscar cada
 * termo via POST /api/v3/search (a mesma chamada que o site faz de verdade).
 *
 * Uso: node scrape_precos_panvel.js [limite]
 * Gera: precos_panvel.json (mesma pasta)
 *
 * Requer Playwright instalado globalmente ou local (NODE_PATH=$(npm root -g)).
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const DATA_JS = path.join(__dirname, '..', 'js', 'data.js');
const OUT = path.join(__dirname, 'precos_panvel.json');
const DELAY_MS = 500;

function carregarTermos(limite) {
    const texto = fs.readFileSync(DATA_JS, 'utf8');
    const termos = new Set();
    const regex = /"principioAtivo":\s*"([^"]+)"/g;
    let m;
    while ((m = regex.exec(texto))) termos.add(m[1]);
    const lista = [...termos].sort();
    return limite ? lista.slice(0, limite) : lista;
}

async function main() {
    const limite = process.argv[2] ? parseInt(process.argv[2], 10) : null;
    const termos = carregarTermos(limite);
    console.log(termos.length, 'termos de busca');

    const resultado = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};

    const browser = await chromium.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();

    let vistosNesteCiclo = 0;
    let statusUltimaResposta = null;
    page.on('response', async (resp) => {
        if (resp.url().includes('/api/v3/search')) {
            statusUltimaResposta = resp.status();
            vistosNesteCiclo++;
        }
    });

    await page.goto('https://www.panvel.com/', { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(1500);

    let salvosTotal = 0;
    let statusNaoOk = 0;

    for (let i = 0; i < termos.length; i++) {
        const termo = termos[i];

        // Espera explicitamente a resposta da busca em vez de confiar num
        // timeout fixo - mais robusto se a API ficar mais lenta ao longo da
        // sessão (rate limiting, etc.)
        let respostaJson = null;
        try {
            const [resp] = await Promise.all([
                page.waitForResponse(r => r.url().includes('/api/v3/search'), { timeout: 10000 }),
                (async () => {
                    await page.fill('#term', termo);
                    await page.click('button[aria-label="Buscar"]');
                })(),
            ]);
            statusUltimaResposta = resp.status();
            if (resp.ok()) respostaJson = await resp.json().catch(() => null);
        } catch (e) {
            console.log(`[${i + 1}/${termos.length}] ${termo} -> timeout/erro esperando resposta: ${e.message}`);
            continue;
        }

        if (statusUltimaResposta !== 200) statusNaoOk++;

        let salvosDoTermo = 0;
        if (respostaJson && Array.isArray(respostaJson.items)) {
            for (const p of respostaJson.items) {
                const preco = p.price && (p.price.dealPrice || p.price.originalPrice);
                if (!preco) continue;
                const chave = p.link || p.name || p.panvelCode;
                if (chave) {
                    resultado[chave] = { nome: p.name, preco, disponivel: true, url: p.link || null };
                    salvosDoTermo++;
                }
            }
        }
        salvosTotal += salvosDoTermo;

        if (i % 20 === 0 || salvosDoTermo === 0) {
            console.log(`[${i + 1}/${termos.length}] ${termo} -> status=${statusUltimaResposta} salvos=${salvosDoTermo} (total ${salvosTotal})`);
        }

        await page.waitForTimeout(DELAY_MS);
    }

    console.log('Respostas com status != 200:', statusNaoOk);
    await browser.close();
    fs.writeFileSync(OUT, JSON.stringify(resultado, null, 2), 'utf8');
    console.log('OK, salvo em', OUT, '-', Object.keys(resultado).length, 'produtos');
}

main();
