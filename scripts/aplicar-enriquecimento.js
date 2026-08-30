/**
 * Aplica a camada de enriquecimento (scripts/enriquecimento-medicamentos.js)
 * sobre js/data.js, reescrevendo o array BANCO_MEDICAMENTOS no lugar.
 *
 * Idempotente: usa `classeTerapeutica` (a classe CMED original preservada) como
 * fonte da descrição, então rodar de novo não "enriquece o já enriquecido".
 *
 * Uso:
 *   node scripts/aplicar-enriquecimento.js            # aplica
 *   node scripts/aplicar-enriquecimento.js --dry-run  # só relatório, não grava
 *
 * É chamado automaticamente no fim de scripts/build_data_cmed.py.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { enriquecer, descricaoAmigavel } = require('./enriquecimento-medicamentos');

const DATA_JS = path.join(__dirname, '..', 'js', 'data.js');
const dryRun = process.argv.includes('--dry-run');

const src = fs.readFileSync(DATA_JS, 'utf8');

// Carrega BANCO_MEDICAMENTOS num sandbox (mesma técnica de build_precos_redes.js)
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(
    src
        .replace('const BANCO_MEDICAMENTOS', 'var BANCO_MEDICAMENTOS')
        .replace('const BANCO_FARMACIAS', 'var BANCO_FARMACIAS')
        .replace('const BANCO_LOCALIDADES', 'var BANCO_LOCALIDADES'),
    sandbox
);
const meds = sandbox.BANCO_MEDICAMENTOS;
if (!Array.isArray(meds) || !meds.length) {
    console.error('Não consegui carregar BANCO_MEDICAMENTOS de', DATA_JS);
    process.exit(1);
}

let comSinonimia = 0;
let comDescricaoAmigavel = 0;
let semRegra = 0;
const semRegraClasses = new Map();

const enriquecidos = meds.map((m) => {
    const e = enriquecer(m);
    if (e.sinonimias.length) comSinonimia++;
    const fallback = /^Medicamento da classe "/.test(e.descricao);
    if (!fallback && e.descricao) comDescricaoAmigavel++;
    if (fallback) {
        semRegra++;
        semRegraClasses.set(e.classeTerapeutica, (semRegraClasses.get(e.classeTerapeutica) || 0) + 1);
    }
    return e;
});

console.log(`${meds.length} medicamentos`);
console.log(`  descrição amigável por regra : ${comDescricaoAmigavel}`);
console.log(`  descrição genérica (fallback): ${semRegra}`);
console.log(`  com ao menos 1 sinônimo      : ${comSinonimia}`);

const topSemRegra = [...semRegraClasses.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);
if (topSemRegra.length) {
    console.log('\nClasses sem regra de descrição (top 15 — candidatas a nova regra):');
    for (const [classe, n] of topSemRegra) console.log(`  ${String(n).padStart(3)}  ${classe}`);
}

if (dryRun) {
    console.log('\n--dry-run: nada gravado.');
    const exemplo = enriquecidos.find((m) => m.sinonimias.length >= 2);
    if (exemplo) {
        console.log('\nExemplo:', exemplo.nome, '/', exemplo.principioAtivo);
        console.log('  descricao :', exemplo.descricao);
        console.log('  classe    :', exemplo.classeTerapeutica);
        console.log('  sinonimias:', exemplo.sinonimias.join(', '));
    }
    process.exit(0);
}

// Reescreve só o trecho `const BANCO_MEDICAMENTOS = [ ... ];`
const inicioMarcador = 'const BANCO_MEDICAMENTOS = [';
const inicio = src.indexOf(inicioMarcador);
if (inicio === -1) {
    console.error('Não achei o início de BANCO_MEDICAMENTOS em data.js');
    process.exit(1);
}
// Fim = primeiro "\n];" após o início (o array é impresso com indentação de 4)
const fimArray = src.indexOf('\n];', inicio);
if (fimArray === -1) {
    console.error('Não achei o fim do array BANCO_MEDICAMENTOS em data.js');
    process.exit(1);
}

const novoArray =
    'const BANCO_MEDICAMENTOS = ' +
    JSON.stringify(enriquecidos, null, 4) +
    ';';

const novoConteudo = src.slice(0, inicio) + novoArray + src.slice(fimArray + '\n];'.length);

fs.writeFileSync(DATA_JS, novoConteudo, 'utf8');
console.log('\njs/data.js atualizado.');
