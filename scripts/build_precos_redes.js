/**
 * Casa os preços raspados (precos_vtex.json + precos_panvel.json) com os
 * medicamentos de BANCO_MEDICAMENTOS (js/data.js), gerando js/precos-redes.js.
 *
 * Estratégia de casamento, em ordem de confiança:
 *   1) Registro ANVISA (normalizado, só dígitos) - só disponível pra Pague
 *      Menos e Extrafarma, que preenchem o campo NumeroRegistroMS na VTEX.
 *   2) Nome do produto normalizado (fallback) - usado pras demais redes.
 *
 * Uso: node build_precos_redes.js
 */
const fs = require('fs');
const path = require('path');

const DATA_JS = path.join(__dirname, '..', 'js', 'data.js');
const OUT = path.join(__dirname, '..', 'js', 'precos-redes.js');
const FONTES = [
    { arquivo: path.join(__dirname, 'precos_vtex.json'), tipo: 'multi' }, // {rede: {chave: produto}}
    { arquivo: path.join(__dirname, 'precos_panvel.json'), tipo: 'single', rede: 'panvel' }, // {chave: produto}
];

function normalizarTexto(s) {
    return (s || '')
        .toString()
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

function normalizarRegistro(r) {
    return (r || '').toString().replace(/\D/g, '');
}

// Carrega BANCO_MEDICAMENTOS de data.js
const dataJsSrc = fs.readFileSync(DATA_JS, 'utf8');
const sandbox = {};
(function () {
    const vm = require('vm');
    vm.createContext(sandbox);
    // const/let não vazam pro objeto de contexto do vm; usamos var explicitamente
    const wrapped = dataJsSrc.replace('const BANCO_MEDICAMENTOS', 'var BANCO_MEDICAMENTOS')
        .replace('const BANCO_FARMACIAS', 'var BANCO_FARMACIAS')
        .replace('const BANCO_LOCALIDADES', 'var BANCO_LOCALIDADES');
    vm.runInContext(wrapped, sandbox);
})();
const BANCO_MEDICAMENTOS = sandbox.BANCO_MEDICAMENTOS;
console.log(BANCO_MEDICAMENTOS.length, 'medicamentos carregados de data.js');

// Índices de busca: registro -> medicamentoId, nomeNormalizado -> medicamentoId
const porRegistro = {};
const porNome = {};
for (const med of BANCO_MEDICAMENTOS) {
    for (const reg of med.registrosAnvisa || []) {
        porRegistro[normalizarRegistro(reg)] = med.id;
    }
    porNome[normalizarTexto(med.nome)] = med.id;
    for (const g of med.genericos || []) {
        for (const reg of g.registrosAnvisa || []) {
            porRegistro[normalizarRegistro(reg)] = med.id;
        }
        if (!porNome[normalizarTexto(g.nome)]) porNome[normalizarTexto(g.nome)] = med.id;
    }
}

// Pré-computado uma única vez (não a cada produto - eram ~23 mil produtos x
// milhares de nomes de catálogo, recriar o array toda vez ficava bem lento).
// Ordenado do nome mais longo pro mais curto: um nome de catálogo mais
// específico e longo deve "ganhar" de um mais genérico/curto no match por prefixo.
const entriesPorNome = Object.entries(porNome).sort((a, b) => b[0].length - a[0].length);

// Resultado: medicamentoId -> rede -> {preco, nome, url, disponivel}
const resultado = {};
let porRegistroHits = 0;
let porNomeHits = 0;
let semMatch = 0;

function processarProduto(rede, produto) {
    let medicamentoId = null;

    for (const reg of produto.registros || []) {
        const regNorm = normalizarRegistro(reg);
        if (porRegistro[regNorm]) {
            medicamentoId = porRegistro[regNorm];
            porRegistroHits++;
            break;
        }
    }

    if (!medicamentoId && produto.nome) {
        const nomeNorm = normalizarTexto(produto.nome);
        // match por PREFIXO, não por conteúdo em qualquer posição - nomes de
        // e-commerce têm dosagem/embalagem grudados no final (ex: "Aceclofenaco
        // Genérico EMS 100mg 12 Comprimidos" começa com o nome do catálogo).
        // "includes" já foi tentado e deu falso positivo real: "paracetamol"
        // (só o princípio ativo) batendo no meio de "Antigripal Decongex Gripe
        // Paracetamol + Clorfeniramina + Fenilefrina" (remédio bem diferente).
        for (const [nomeCatalogo, id] of entriesPorNome) {
            if (nomeCatalogo.length >= 5 && nomeNorm.startsWith(nomeCatalogo)) {
                medicamentoId = id;
                porNomeHits++;
                break;
            }
        }
    }

    if (!medicamentoId) {
        semMatch++;
        return;
    }

    resultado[medicamentoId] = resultado[medicamentoId] || {};
    const atual = resultado[medicamentoId][rede];
    if (!atual || produto.preco < atual.preco) {
        resultado[medicamentoId][rede] = {
            preco: produto.preco,
            nome: produto.nome,
            url: produto.url || null,
            disponivel: produto.disponivel !== false,
        };
    }
}

for (const fonte of FONTES) {
    if (!fs.existsSync(fonte.arquivo)) {
        console.log('(pulando, não existe ainda):', fonte.arquivo);
        continue;
    }
    const dados = JSON.parse(fs.readFileSync(fonte.arquivo, 'utf8'));
    if (fonte.tipo === 'multi') {
        for (const [rede, produtos] of Object.entries(dados)) {
            for (const produto of Object.values(produtos)) {
                processarProduto(rede, produto);
            }
        }
    } else {
        for (const produto of Object.values(dados)) {
            processarProduto(fonte.rede, produto);
        }
    }
}

console.log('Matches por registro:', porRegistroHits, '| por nome:', porNomeHits, '| sem match:', semMatch);
console.log('Medicamentos com pelo menos 1 preço real:', Object.keys(resultado).length);

const header = `/**
 * MED_PRECOS - Preços REAIS por rede de farmácia (raspagem periódica)
 * Gerado por scripts/build_precos_redes.js a partir de scripts/precos_vtex.json
 * e scripts/precos_panvel.json (ver scripts/scrape_precos_*.py/js).
 *
 * Cobre: Pague Menos, Extrafarma, Drogaria São Paulo, Pacheco, Venancio (VTEX,
 * casamento por registro ANVISA quando a loja preenche o campo, senão por nome)
 * e Panvel (API própria, casamento só por nome - não expõe registro ANVISA).
 *
 * Droga Raia/Drogasil (proibição contratual de scraping) e Ultrafarma/Araújo
 * (bloqueio ativo de acesso automatizado) NÃO estão aqui - ver STATUS.md.
 *
 * Usado por calcularPrecoFarmacia() em app.js: se a farmácia pertence a uma
 * dessas redes E o medicamento tem preço aqui, usa esse preço real em vez da
 * estimativa a partir do teto CMED.
 *
 * Gerado em: ${new Date().toISOString().slice(0, 10)}
 */

const PRECOS_REDES = `;

fs.writeFileSync(OUT, header + JSON.stringify(resultado, null, 2) + ';\n', 'utf8');
console.log('Escrito em', OUT);
