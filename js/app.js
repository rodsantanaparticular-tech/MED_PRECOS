/**
 * MED_PRECOS - Lógica Principal da Aplicação
 * Controla busca de medicamentos, comparação de preços,
 * genéricos, localização e roteiro de compras
 */

// ==========================================================================
// Estado Global da Aplicação
// ==========================================================================
const estado = {
    medicamentoSelecionado: null,
    localizacaoUsuario: null,
    coordenadasUsuario: null,
    localizacaoViaGPS: false,
    resultadosFarmas: [],
    rotaCalculada: null,
    buscaAtiva: false
};

// Raio, em km, considerado "próximo" para exibir uma farmácia como resultado
const RAIO_MAXIMO_KM = 60;

// Número máximo de farmácias exibidas na tabela de resultados. A busca ao
// vivo (Overpass) pode retornar centenas de farmácias reais num raio
// grande em capitais grandes - sem esse limite a tabela fica inviável
const MAX_FARMACIAS_EXIBIDAS = 15;

// Escalonamento de raio da busca ao vivo (buscarFarmaciasReaisProximas):
// começa em 10km (rápido, leve pra API pública) e só amplia se o resultado
// não tiver farmácias/redes suficientes pra uma comparação de preço útil
const ESCALONAMENTO_RAIO_KM = [10, 20, 35, 60];
const META_LOJAS = 15;
const META_REDES_DISTINTAS = 5;

// Pontuação mínima (em 100) para buscarMedicamento() aceitar uma correspondência.
// pontuarCorrespondencia() usa essa mesma constante para calibrar seu limiar de
// tolerância a erros de digitação, garantindo que as duas fiquem sempre em sincronia
const PONTUACAO_MINIMA_BUSCA = 55;

// Chave usada para cachear no navegador as coordenadas já resolvidas por CEP
const CEP_CACHE_KEY = 'medprecos_cep_cache';

// Chave usada para cachear no navegador as farmácias reais já buscadas via
// Overpass (OpenStreetMap) por região, evitando repetir a mesma consulta
const FARMACIAS_CACHE_KEY = 'medprecos_farmacias_cache';
const FARMACIAS_CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24h

// Espelhos públicos do Overpass API, tentados em ordem - a instância
// principal já foi vista fora do ar por sobrecarga, então sempre há um
// segundo endpoint para tentar antes de desistir e cair no pré-carregado
const OVERPASS_ENDPOINTS = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter'
];

// Redes de farmácia conhecidas por terem delivery próprio - usado só para
// estimar possuiDelivery/entregaEm de farmácias reais (OSM não tem esse
// dado); não é uma informação confirmada por farmácia individual
const REDES_COM_DELIVERY = [
    'droga raia', 'drogasil', 'raia drogasil', 'pague menos', 'panvel',
    'extrafarma', 'ultrafarma', 'drogaria são paulo', 'drogaria sao paulo',
    'nissei', 'farmácias pacheco', 'farmacias pacheco', 'drogaria araujo',
    'big ben', 'drogaria venancio'
];

// Redes com preço real raspado (ver PRECOS_REDES em js/precos-redes.js e
// scripts/scrape_precos_*.py/js). Cada entrada casa um trecho do nome/marca
// da farmácia (normalizado) com a chave usada em PRECOS_REDES. Droga Raia/
// Drogasil/Ultrafarma/Araújo não têm raspagem (ver STATUS.md) - de propósito
// fora desta lista, mesmo aparecendo em REDES_COM_DELIVERY acima.
const REDES_COM_PRECO_REAL = [
    { trecho: 'pague menos', rede: 'paguemenos' },
    { trecho: 'extrafarma', rede: 'extrafarma' },
    { trecho: 'drogaria são paulo', rede: 'drogariasaopaulo' },
    { trecho: 'drogaria sao paulo', rede: 'drogariasaopaulo' },
    { trecho: 'pacheco', rede: 'pacheco' },
    { trecho: 'venancio', rede: 'venancio' },
    { trecho: 'venâncio', rede: 'venancio' },
    { trecho: 'panvel', rede: 'panvel' }
];

/**
 * Identifica a que rede (com preço real raspado) uma farmácia pertence,
 * pelo nome/marca normalizados. Retorna null se não for uma rede raspada
 * (nesse caso o preço segue sendo estimado via calcularPrecoFarmacia).
 */
function identificarRedeComPrecoReal(farmacia) {
    const nomeNormalizado = normalizarTexto(farmacia.nome || '');
    const encontrada = REDES_COM_PRECO_REAL.find(r => nomeNormalizado.includes(r.trecho));
    return encontrada ? encontrada.rede : null;
}

// Aproximação por região do CEP (1º dígito), usada apenas quando a
// geocodificação real falha (sem internet, CEP inexistente, etc.)
const REGIAO_CEP_FALLBACK = {
    '0': { latitude: -23.5505, longitude: -46.6333, nome: 'São Paulo - SP' },
    '1': { latitude: -23.5505, longitude: -46.6333, nome: 'São Paulo - SP' },
    '2': { latitude: -22.9068, longitude: -43.1729, nome: 'Rio de Janeiro - RJ' },
    '3': { latitude: -19.9167, longitude: -43.9345, nome: 'Belo Horizonte - MG' },
    '4': { latitude: -12.9777, longitude: -38.5016, nome: 'Salvador - BA' },
    '5': { latitude: -8.0476, longitude: -34.8770, nome: 'Recife - PE' },
    '6': { latitude: -3.7319, longitude: -38.5267, nome: 'Fortaleza - CE' },
    '7': { latitude: -15.8267, longitude: -47.9218, nome: 'Brasília - DF' },
    '8': { latitude: -25.4284, longitude: -49.2733, nome: 'Curitiba - PR' },
    '9': { latitude: -30.0346, longitude: -51.2177, nome: 'Porto Alegre - RS' }
};

// ==========================================================================
// Referências aos Elementos DOM (cache para performance)
// ==========================================================================
const elementos = {
    // Formulário e campos de busca
    formBusca: document.getElementById('form-busca'),
    buscaMedicamento: document.getElementById('busca-medicamento'),
    buscaLocalizacao: document.getElementById('busca-localizacao'),
    btnVoz: document.getElementById('btn-voz'),
    btnLocalizar: document.getElementById('btn-localizar'),
    
    // Status de voz
    statusVoz: document.getElementById('status-voz'),
    statusVozTexto: document.getElementById('status-voz-texto'),
    
    // Loading
    carregando: document.getElementById('carregando'),
    
    // Resultados
    resultados: document.getElementById('resultados'),
    cardMedicamento: document.getElementById('card-medicamento'),
    medicamentoNome: document.getElementById('medicamento-nome'),
    medicamentoPrincipio: document.getElementById('medicamento-principio'),
    medicamentoDescricao: document.getElementById('medicamento-descricao'),
    
    // Genéricos
    secaoGenericos: document.getElementById('secao-genericos'),
    listaGenericos: document.getElementById('lista-genericos'),
    
    // Farmácias
    secaoFarmacias: document.getElementById('secao-farmacias'),
    localizacaoBusca: document.getElementById('localizacao-busca'),
    corpoTabelaPrecos: document.getElementById('corpo-tabela-precos'),
    
    // Rota Premium
    secaoRota: document.getElementById('secao-rota'),
    listaRota: document.getElementById('lista-rota'),
    rotaEconomia: document.getElementById('rota-economia'),
    rotaTempo: document.getElementById('rota-tempo'),
    btnRoteiroVoz: document.getElementById('btn-roteiro-voz'),
    
    // Raio de busca
    raioBusca: document.getElementById('raio-busca'),
    raioPersonalizado: document.getElementById('raio-personalizado'),

    // Mensagens
    semResultados: document.getElementById('sem-resultados'),
    avisoFarmaciasDistantes: document.getElementById('aviso-farmacias-distantes')
};

// ==========================================================================
// Ícones SVG reutilizados nos estados dos botões (evita duplicar o markup)
// ==========================================================================
const ICONE_SVG_LOCALIZACAO = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
const ICONE_SVG_MICROFONE = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>';

// ==========================================================================
// Utilidades
// ==========================================================================

/**
 * Remove acentos e normaliza texto para busca
 */
function normalizarTexto(texto) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

/**
 * Formata valor em reais
 */
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
}

/**
 * Calcula distância entre coordenadas (fórmula de Haversine)
 */
function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

/**
 * Formata distância para exibição
 */
function formatarDistancia(km) {
    if (km < 1) {
        return Math.round(km * 1000) + 'm';
    }
    return km.toFixed(1) + 'km';
}

/**
 * Verifica se uma farmácia está aberta agora
 */
function farmaciaEstaAberta(horario) {
    const agora = new Date();
    const dia = agora.getDay();
    const horaAtual = agora.getHours();
    const minutosAtual = agora.getMinutes();
    const horaComMinutos = horaAtual + minutosAtual / 60;

    if (dia === 0) {
        if (!horario.domingoAberto) return false;
        return horaComMinutos >= horario.domingoAbertura && horaComMinutos < horario.domingoFechamento;
    }

    return horaComMinutos >= horario.abertura && horaComMinutos < horario.fechamento;
}

/**
 * Formata o horário de funcionamento para exibição
 */
function formatarHorario(horario) {
    const formato = (hora) => hora.toString().padStart(2, '0') + 'h';
    
    if (horario.domingoAberto) {
        return formato(horario.abertura) + ' às ' + formato(horario.fechamento) + ' • Dom: ' +
               formato(horario.domingoAbertura) + ' às ' + formato(horario.domingoFechamento);
    }
    
    return formato(horario.abertura) + ' às ' + formato(horario.fechamento) + ' • Fechado aos domingos';
}

// ==========================================================================
// Busca de Medicamentos
// ==========================================================================

/**
 * Distância de edição (Levenshtein) entre duas strings - usada para tolerar
 * erros de digitação na busca de medicamentos
 */
function distanciaLevenshtein(a, b) {
    const linhas = a.length + 1;
    const colunas = b.length + 1;
    const dp = Array.from({ length: linhas }, () => new Array(colunas).fill(0));

    for (let i = 0; i < linhas; i++) dp[i][0] = i;
    for (let j = 0; j < colunas; j++) dp[0][j] = j;

    for (let i = 1; i < linhas; i++) {
        for (let j = 1; j < colunas; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    return dp[linhas - 1][colunas - 1];
}

/**
 * Pontua o quanto um termo buscado corresponde a um candidato (nome,
 * princípio ativo ou sinônimo já normalizados). Cobre correspondência
 * exata, prefixo, substring e erros de digitação (via Levenshtein).
 */
function pontuarCorrespondencia(termo, candidato) {
    if (!termo || !candidato) return 0;
    if (termo === candidato) return 100;
    if (candidato.startsWith(termo)) return 90;
    if (candidato.includes(termo)) return 80;

    // Tolerância a erros de digitação, comparando com o candidato inteiro
    // e também com um prefixo do mesmo tamanho do termo (bom para nomes longos)
    const similaridadeTotal = 1 - distanciaLevenshtein(termo, candidato) / Math.max(termo.length, candidato.length);

    let similaridadePrefixo = 0;
    if (candidato.length > termo.length) {
        const prefixo = candidato.slice(0, termo.length);
        similaridadePrefixo = 1 - distanciaLevenshtein(termo, prefixo) / termo.length;
    }

    const melhorSimilaridade = Math.max(similaridadeTotal, similaridadePrefixo);

    // Exige mais confiança em termos curtos, onde um erro pesa proporcionalmente mais.
    // Para termos longos, o limiar é calibrado a partir de PONTUACAO_MINIMA_BUSCA para
    // que uma correspondência aceita aqui nunca seja depois rejeitada por pontuação baixa
    const limiar = termo.length <= 4 ? 0.8 : PONTUACAO_MINIMA_BUSCA / 70;

    return melhorSimilaridade >= limiar ? Math.round(melhorSimilaridade * 70) : 0;
}

/**
 * Busca medicamento no banco de dados por nome comercial, princípio ativo
 * ou sinônimos, tolerando erros de digitação e escolhendo a melhor
 * correspondência entre todos os candidatos (não apenas o primeiro que bate)
 */
function buscarMedicamento(termo) {
    const termoNormalizado = normalizarTexto(termo);

    if (!termoNormalizado) return null;

    let melhorMedicamento = null;
    let melhorPontuacao = 0;

    BANCO_MEDICAMENTOS.forEach(med => {
        const candidatos = [med.nome, med.principioAtivo, ...med.sinonimias].map(normalizarTexto);
        const pontuacao = Math.max(...candidatos.map(candidato => pontuarCorrespondencia(termoNormalizado, candidato)));

        if (pontuacao > melhorPontuacao) {
            melhorPontuacao = pontuacao;
            melhorMedicamento = med;
        }
    });

    return melhorPontuacao >= PONTUACAO_MINIMA_BUSCA ? melhorMedicamento : null;
}

/**
 * Verifica se o termo digitado tem "cara" de CEP (8 dígitos)
 */
function ehCep(termo) {
    return termo.replace(/[^0-9]/g, '').length === 8;
}

/**
 * Lê/grava o cache local de localizações já geocodificadas (por CEP ou por
 * texto livre), para não repetir chamadas de rede a cada busca repetida
 */
function lerCacheLocalizacao(chave) {
    try {
        const cache = JSON.parse(localStorage.getItem(CEP_CACHE_KEY) || '{}');
        return cache[chave] || null;
    } catch (erro) {
        return null;
    }
}

function salvarCacheLocalizacao(chave, localizacao) {
    try {
        const cache = JSON.parse(localStorage.getItem(CEP_CACHE_KEY) || '{}');
        cache[chave] = localizacao;
        localStorage.setItem(CEP_CACHE_KEY, JSON.stringify(cache));
    } catch (erro) {
        // localStorage indisponível (modo privado, cota cheia, etc.) - segue sem cache
    }
}

/**
 * Consulta o Nominatim (OpenStreetMap) e devolve a primeira coordenada
 * encontrada para o texto de endereço informado, ou null se não achar
 */
async function buscarCoordenadasNominatim(consulta, signal) {
    const url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&q=' +
                encodeURIComponent(consulta);
    const resposta = await fetch(url, { signal });
    const resultados = resposta.ok ? await resposta.json() : [];
    return resultados.length
        ? { latitude: parseFloat(resultados[0].lat), longitude: parseFloat(resultados[0].lon) }
        : null;
}

/**
 * Executa `fn` com um AbortSignal próprio, abortado após `timeoutMs`. Cada
 * chamada recebe seu próprio orçamento de tempo (em vez de compartilhar um
 * único timeout entre várias requisições em sequência, o que faria uma
 * primeira chamada lenta consumir o tempo que sobraria para a próxima)
 */
async function comTimeout(fn, timeoutMs) {
    const controle = new AbortController();
    const timeoutId = setTimeout(() => controle.abort(), timeoutMs);
    try {
        return await fn(controle.signal);
    } finally {
        clearTimeout(timeoutId);
    }
}

/**
 * Converte um CEP em coordenadas reais: consulta o endereço no ViaCEP e
 * geocodifica esse endereço no Nominatim (OpenStreetMap). Retorna null se
 * o CEP for inválido ou se não houver conexão - quem chama deve tratar
 * esse caso com uma aproximação offline.
 */
async function geocodificarCep(cepDigitado) {
    const cep = cepDigitado.replace(/[^0-9]/g, '');
    if (cep.length !== 8) return null;

    const emCache = lerCacheLocalizacao('cep:' + cep);
    if (emCache) return emCache;

    try {
        const endereco = await comTimeout(async (signal) => {
            const respostaCep = await fetch('https://viacep.com.br/ws/' + cep + '/json/', { signal });
            if (!respostaCep.ok) return null;
            const dados = await respostaCep.json();
            return dados.erro ? null : dados;
        }, 6000);

        if (!endereco) return null;

        // Tenta geocodificar pelo endereço completo; se não achar, tenta só bairro + cidade.
        // Cada tentativa tem seu próprio orçamento de 6s (via comTimeout), para que uma
        // primeira busca lenta não deixe a segunda (fallback) sem chance de completar
        let coordenadas = await comTimeout(
            signal => buscarCoordenadasNominatim(
                [endereco.logradouro, endereco.bairro, endereco.localidade, endereco.uf, 'Brasil'].filter(Boolean).join(', '),
                signal
            ),
            6000
        );

        if (!coordenadas && endereco.bairro) {
            coordenadas = await comTimeout(
                signal => buscarCoordenadasNominatim(
                    [endereco.bairro, endereco.localidade, endereco.uf, 'Brasil'].filter(Boolean).join(', '),
                    signal
                ),
                6000
            );
        }

        if (!coordenadas) return null;

        const localizacao = {
            latitude: coordenadas.latitude,
            longitude: coordenadas.longitude,
            nome: endereco.localidade + ' - ' + endereco.uf,
            bairro: endereco.bairro || null
        };

        salvarCacheLocalizacao('cep:' + cep, localizacao);
        return localizacao;
    } catch (erro) {
        console.warn('Não foi possível geocodificar o CEP, usando localização aproximada:', erro);
        return null;
    }
}

/**
 * Geocodifica texto livre de endereço (bairro, cidade, "bairro, cidade", etc.)
 * diretamente no Nominatim, sem precisar de CEP. Retorna null se não achar
 * nada ou se não houver conexão.
 */
async function geocodificarEndereco(texto) {
    const chaveCache = 'txt:' + normalizarTexto(texto);
    const emCache = lerCacheLocalizacao(chaveCache);
    if (emCache) return emCache;

    try {
        const coordenadas = await comTimeout(signal => buscarCoordenadasNominatim(texto + ', Brasil', signal), 6000);
        if (!coordenadas) return null;

        const localizacao = { latitude: coordenadas.latitude, longitude: coordenadas.longitude, nome: texto.trim() };
        salvarCacheLocalizacao(chaveCache, localizacao);
        return localizacao;
    } catch (erro) {
        console.warn('Não foi possível geocodificar o endereço, usando localização aproximada:', erro);
        return null;
    }
}

/**
 * Resolve a localização do usuário a partir do texto digitado - aceita CEP,
 * cidade, ou "bairro, cidade". Para CEP, geocodifica via ViaCEP + Nominatim;
 * para texto livre, geocodifica direto no Nominatim. Se a rede falhar, cai
 * para uma aproximação offline (cidade conhecida ou região do CEP).
 */
async function resolverLocalizacao(termoLocalizacao) {
    if (!termoLocalizacao || !termoLocalizacao.trim()) {
        return { latitude: -23.5505, longitude: -46.6333, nome: 'São Paulo - SP' };
    }

    const termoOriginal = termoLocalizacao.trim();
    const termo = normalizarTexto(termoOriginal);

    if (ehCep(termo)) {
        const localizacaoReal = await geocodificarCep(termo);
        if (localizacaoReal) return localizacaoReal;

        const primeiroDigito = termo.replace(/[^0-9]/g, '').charAt(0);
        return REGIAO_CEP_FALLBACK[primeiroDigito] || { latitude: -23.5505, longitude: -46.6333, nome: 'São Paulo - SP' };
    }

    // Texto livre (cidade, bairro, "bairro, cidade"): tenta geocodificar de
    // verdade primeiro, para ter precisão de bairro e não só o centro da cidade
    const localizacaoReal = await geocodificarEndereco(termoOriginal);
    if (localizacaoReal) return localizacaoReal;

    // Sem internet ou endereço não encontrado: tenta casar com uma cidade conhecida
    const porCidade = BANCO_LOCALIDADES.find(loc => {
        const cidadeNormalizada = normalizarTexto(loc.cidade);
        return cidadeNormalizada.includes(termo) || termo.includes(cidadeNormalizada);
    });

    if (porCidade) {
        return { latitude: porCidade.latitude, longitude: porCidade.longitude, nome: porCidade.cidade + ' - ' + porCidade.uf };
    }

    // Fallback para São Paulo
    return { latitude: -23.5505, longitude: -46.6333, nome: 'São Paulo - SP' };
}

/**
 * Decide o ponto de referência da busca atual: prioriza o que foi digitado
 * no campo de localização; se estiver vazio, usa o GPS já obtido (se houver).
 * Mantém localizacaoUsuario e coordenadasUsuario sempre sincronizados, para
 * que a tabela de farmácias e o roteiro usem exatamente o mesmo ponto.
 */
async function resolverPontoReferencia(termoLocalizacao) {
    // Se o campo ainda contém o texto preenchido automaticamente pelo GPS
    // (o usuário não digitou nada por cima), usa as coordenadas exatas do
    // dispositivo em vez de re-resolver pelo nome da cidade
    if (estado.localizacaoViaGPS && estado.coordenadasUsuario) {
        return {
            latitude: estado.coordenadasUsuario.latitude,
            longitude: estado.coordenadasUsuario.longitude,
            nome: (termoLocalizacao && termoLocalizacao.trim()) || 'sua localização atual'
        };
    }

    if (termoLocalizacao && termoLocalizacao.trim()) {
        return resolverLocalizacao(termoLocalizacao);
    }

    return resolverLocalizacao('');
}

// ==========================================================================
// Farmácias reais próximas (Overpass API / OpenStreetMap)
// ==========================================================================

/**
 * Deriva um "fator de preço" estável (aprox. 0.88-1.12) a partir do id da
 * farmácia, só para dar variação realista entre farmácias reais que não
 * têm preço próprio cadastrado - sempre o mesmo valor pro mesmo id, então
 * o preço de uma farmácia não muda a cada busca.
 */
function fatorPrecoDeterministico(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
    }
    return 0.88 + (hash % 1000) / 1000 * 0.24;
}

/**
 * Converte um elemento "node" do Overpass (farmácia do OpenStreetMap) para
 * o mesmo formato usado em BANCO_FARMACIAS. Vários campos (horário exato,
 * delivery) não existem no OSM para a maioria dos pontos - são estimados e
 * marcados como tal via `dadosEstimados`, para a UI avisar o usuário.
 */
function converterFarmaciaOsm(node) {
    const tags = node.tags || {};
    const nome = tags.name;
    if (!nome) return null; // sem nome não dá pra mostrar pro usuário com confiança

    const id = 'osm-' + node.id;
    const partesEndereco = [tags['addr:street'], tags['addr:housenumber']].filter(Boolean).join(', ');
    const nomeRedeNormalizado = normalizarTexto(tags.brand || nome);
    const temDelivery = REDES_COM_DELIVERY.some(rede => nomeRedeNormalizado.includes(normalizarTexto(rede)));

    // opening_hours do OSM segue uma sintaxe própria (ex: "Mo-Sa 08:00-20:00").
    // Só tratamos o caso comum "24/7"; fora isso, assumimos um horário comercial
    // típico e marcamos como estimado, em vez de tentar parsear a sintaxe toda.
    const aberto24h = (tags.opening_hours || '').includes('24/7');
    const horario = aberto24h
        ? { abertura: 0, fechamento: 24, domingoAberto: true, domingoAbertura: 0, domingoFechamento: 24 }
        : { abertura: 8, fechamento: 20, domingoAberto: false };

    return {
        id,
        nome,
        endereco: partesEndereco || 'Endereço não informado pelo OpenStreetMap',
        cidade: tags['addr:city'] || '',
        cep: tags['addr:postcode'] || '',
        bairro: tags['addr:suburb'] || '',
        telefone: tags.phone || tags['contact:phone'] || null,
        latitude: node.lat,
        longitude: node.lon,
        horario,
        fatorPreco: fatorPrecoDeterministico(id),
        possuiDelivery: temDelivery,
        entregaEm: temDelivery ? '40 min' : null,
        dadosEstimados: true // horário e preço são estimados; endereço/nome/telefone vêm do OSM
    };
}

/**
 * Busca farmácias num único raio via Overpass API (dados do OpenStreetMap),
 * tentando os endpoints em ordem. Retorna:
 * - um array (possivelmente vazio) se algum endpoint respondeu com sucesso;
 * - null se todos os endpoints falharam/deram timeout.
 * Resultados são cacheados no navegador por 24h por região+raio arredondados,
 * para não martelar a API pública a cada busca no mesmo lugar.
 */
async function buscarFarmaciasNoRaio(latitude, longitude, raioKm) {
    const raioMetros = Math.round(raioKm * 1000);
    const chaveCache = 'geo:' + latitude.toFixed(2) + ',' + longitude.toFixed(2) + ',' + raioMetros;

    try {
        const cache = JSON.parse(localStorage.getItem(FARMACIAS_CACHE_KEY) || '{}');
        const emCache = cache[chaveCache];
        if (emCache && (Date.now() - emCache.buscadoEm) < FARMACIAS_CACHE_TTL_MS) {
            return emCache.farmacias;
        }
    } catch (erro) {
        // localStorage indisponível - segue sem cache
    }

    const query = '[out:json][timeout:20];node["amenity"="pharmacy"](around:' +
        raioMetros + ',' + latitude + ',' + longitude + ');out body;';

    for (const endpoint of OVERPASS_ENDPOINTS) {
        try {
            const dados = await comTimeout(async (signal) => {
                const resposta = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: 'data=' + encodeURIComponent(query),
                    signal
                });
                if (!resposta.ok) throw new Error('Overpass respondeu ' + resposta.status);
                return resposta.json();
            }, 8000);

            const farmacias = (dados.elements || [])
                .map(converterFarmaciaOsm)
                .filter(Boolean);

            try {
                const cache = JSON.parse(localStorage.getItem(FARMACIAS_CACHE_KEY) || '{}');
                cache[chaveCache] = { farmacias, buscadoEm: Date.now() };
                localStorage.setItem(FARMACIAS_CACHE_KEY, JSON.stringify(cache));
            } catch (erro) {
                // segue sem cache
            }

            return farmacias;
        } catch (erro) {
            console.warn('Overpass (' + endpoint + ') falhou, tentando próximo:', erro);
        }
    }

    return null; // todos os endpoints falharam
}

/**
 * Busca farmácias reais próximas de uma coordenada, começando num raio
 * pequeno (rápido, leve pra API pública) e só ampliando se o resultado for
 * pobre demais pra comparar preço: menos de META_LOJAS farmácias ou menos
 * de META_REDES_DISTINTAS redes diferentes. Nunca ultrapassa o raio máximo
 * escolhido pelo usuário na busca (raioMaximoKm).
 *
 * Retorna null somente se a PRIMEIRA tentativa falhar completamente (todos
 * os endpoints do Overpass fora do ar) - nesse caso quem chama deve cair
 * para o pré-carregado (BANCO_FARMACIAS). Se uma tentativa posterior falhar
 * mas uma anterior já tinha resultado, devolve o melhor resultado obtido.
 */
async function buscarFarmaciasReaisProximas(latitude, longitude, raioMaximoKm) {
    let melhorResultado = null;

    for (const raioTentativa of ESCALONAMENTO_RAIO_KM) {
        if (raioTentativa > raioMaximoKm) break;

        const farmacias = await buscarFarmaciasNoRaio(latitude, longitude, raioTentativa);

        if (farmacias === null) {
            // Essa tentativa falhou (Overpass fora do ar); se já tínhamos
            // achado algo num raio menor, fica com isso em vez de desistir
            if (melhorResultado !== null) return melhorResultado;
            continue;
        }

        melhorResultado = farmacias;
        const redesDistintas = new Set(farmacias.map(f => normalizarTexto(f.nome))).size;
        if (farmacias.length >= META_LOJAS || redesDistintas >= META_REDES_DISTINTAS) {
            return farmacias; // já achou o suficiente pra comparar preço, não precisa ampliar mais
        }
    }

    return melhorResultado; // null só se TODAS as tentativas (até o raio máximo) falharem
}

/**
 * Calcula o preço de um medicamento em uma farmácia. Prioridade:
 * 1) Preço REAL raspado do site da rede (PRECOS_REDES, ver js/precos-redes.js
 *    e STATUS.md) - quando a farmácia é de uma rede raspada e o medicamento
 *    foi encontrado lá;
 * 2) Estimativa a partir do preço de referência CMED e do fator de preço da
 *    farmácia - fallback pra quando não há preço real (a maioria dos casos:
 *    Droga Raia/Drogasil/Ultrafarma/Araújo não são raspadas, farmácias fora
 *    das 6 redes cobertas, ou medicamento não encontrado na raspagem).
 * Retorna { preco, real }: `real` diz se veio de raspagem (pra UI não colocar
 * o aviso de "estimado" em cima de um preço de verdade).
 */
function calcularPrecoFarmacia(medicamento, farmacia) {
    if (typeof PRECOS_REDES !== 'undefined') {
        const rede = identificarRedeComPrecoReal(farmacia);
        if (rede) {
            const precosDoMedicamento = PRECOS_REDES[medicamento.id];
            const precoNaRede = precosDoMedicamento && precosDoMedicamento[rede];
            if (precoNaRede && precoNaRede.disponivel !== false) {
                return { preco: precoNaRede.preco, real: true };
            }
        }
    }

    if (!medicamento.precoReferencia || medicamento.precoReferencia <= 0) return { preco: null, real: false };
    const precoBase = medicamento.precoReferencia * 0.85;
    return { preco: Math.round(precoBase * farmacia.fatorPreco * 100) / 100, real: false };
}

/**
 * Calcula economia com genérico em porcentagem
 */
function calcularEconomia(medicamento, generico) {
    const precoReferencia = medicamento.precoReferencia;
    if (!precoReferencia || precoReferencia <= 0) return 0;
    const economia = ((precoReferencia - generico.precoBase) / precoReferencia) * 100;
    return Math.round(Math.max(0, economia));
}

// ==========================================================================
// Renderização de Resultados
// ==========================================================================

/**
 * Exibe o card do medicamento encontrado
 */
function renderizarMedicamento(medicamento) {
    elementos.cardMedicamento.hidden = false;
    elementos.medicamentoNome.textContent = medicamento.nome;
    elementos.medicamentoPrincipio.textContent = 'Princípio ativo: ' + medicamento.principioAtivo;
    elementos.medicamentoDescricao.textContent = medicamento.descricao;
}

/**
 * Exibe as alternativas genéricas
 */
function renderizarGenericos(medicamento) {
    elementos.secaoGenericos.hidden = false;
    elementos.listaGenericos.innerHTML = '';
    
    const genericosOrdenados = [...medicamento.genericos].sort((a, b) => a.precoBase - b.precoBase);
    
    genericosOrdenados.forEach(generico => {
        const economia = calcularEconomia(medicamento, generico);
        
        const card = document.createElement('article');
        card.className = 'card-generico';
        card.setAttribute('role', 'article');
        
        const nomeEl = document.createElement('p');
        nomeEl.className = 'card-generico-nome';
        nomeEl.textContent = generico.nome;
        
        const precoEl = document.createElement('p');
        precoEl.className = 'card-generico-preco';
        precoEl.textContent = formatarMoeda(generico.precoBase);
        
        const economiaEl = document.createElement('p');
        economiaEl.className = 'card-generico-economia';
        economiaEl.textContent = 'Economia de até ' + economia + '%';
        
        card.appendChild(nomeEl);
        card.appendChild(precoEl);
        card.appendChild(economiaEl);
        
        elementos.listaGenericos.appendChild(card);
    });
}

/**
 * Exibe a tabela de farmácias com preços
 */
function renderizarFarmacias(medicamento, localizacao, precosFarmas, mostrandoFallback, raioSelecionadoKm) {
    elementos.secaoFarmacias.hidden = false;
    elementos.localizacaoBusca.textContent = '📍 Resultados para ' + medicamento.nome + ' em ' + localizacao.nome;
    elementos.corpoTabelaPrecos.innerHTML = '';

    elementos.avisoFarmaciasDistantes.hidden = !mostrandoFallback;
    if (mostrandoFallback) {
        const raioTexto = Number.isFinite(raioSelecionadoKm) ? 'num raio de ' + raioSelecionadoKm + 'km' : 'próxima';
        elementos.avisoFarmaciasDistantes.textContent =
            '⚠️ Não encontramos farmácias cadastradas ' + raioTexto + ' da localização informada. ' +
            'Mostrando as mais próximas disponíveis, que podem estar longe.';
    }
    
    // Ordena por preço (menor primeiro)
    const ordenados = [...precosFarmas].sort((a, b) => a.preco - b.preco);
    const menorPreco = ordenados.length > 0 ? ordenados[0].preco : 0;
    
    ordenados.forEach(farmacia => {
        const dados = farmacia.dados;
        const aberta = farmaciaEstaAberta(dados.horario);
        const distancia = calcularDistanciaKm(
            localizacao.latitude,
            localizacao.longitude,
            dados.latitude,
            dados.longitude
        );
        
        const eMenorPreco = farmacia.preco === menorPreco;
        const linkMapa = 'https://www.google.com/maps/search/?api=1&query=' + 
                         dados.latitude + ',' + dados.longitude;
        
        const linha = document.createElement('tr');
        
        const celulaFarmacia = document.createElement('td');
        const nomeFarmacia = document.createElement('p');
        nomeFarmacia.className = 'farmacia-nome';
        nomeFarmacia.textContent = dados.nome;
        celulaFarmacia.appendChild(nomeFarmacia);
        
        if (dados.possuiDelivery) {
            const entrega = document.createElement('p');
            entrega.className = 'farmacia-endereco';
            entrega.textContent = '🚚 Entrega em ' + dados.entregaEm;
            celulaFarmacia.appendChild(entrega);
        }
        
        const celulaEndereco = document.createElement('td');
        const endereco1 = document.createElement('p');
        endereco1.className = 'farmacia-endereco';
        endereco1.textContent = dados.endereco;
        const endereco2 = document.createElement('p');
        endereco2.className = 'farmacia-endereco';
        endereco2.textContent = dados.bairro + ' • ' + dados.cep;
        celulaEndereco.appendChild(endereco1);
        celulaEndereco.appendChild(endereco2);
        
        const celulaDistancia = document.createElement('td');
        celulaDistancia.textContent = formatarDistancia(distancia);
        
        const celulaPreco = document.createElement('td');
        const precoSpan = document.createElement('span');
        precoSpan.className = 'preco-destaque';
        precoSpan.textContent = formatarMoeda(farmacia.preco);
        celulaPreco.appendChild(precoSpan);

        const precoOrigemEl = document.createElement('span');
        precoOrigemEl.className = 'preco-real';
        precoOrigemEl.textContent = farmacia.precoReal ? '✅ preço real do site da rede' : '≈ preço estimado';
        celulaPreco.appendChild(precoOrigemEl);

        if (eMenorPreco) {
            const badge = document.createElement('span');
            badge.className = 'preco-menor';
            badge.textContent = 'MENOR PREÇO';
            celulaPreco.appendChild(badge);
        }
        
        const celulaHorario = document.createElement('td');
        const statusEl = document.createElement('p');
        statusEl.className = 'farmacia-horario ' + (aberta ? 'aberta' : 'fechada');
        statusEl.textContent = aberta ? '🟢 Aberta agora' : '🔴 Fechada agora';
        const horarioEl = document.createElement('p');
        horarioEl.className = 'farmacia-horario';
        horarioEl.textContent = formatarHorario(dados.horario);
        celulaHorario.appendChild(statusEl);
        celulaHorario.appendChild(horarioEl);
        
        const celulaAcao = document.createElement('td');
        const linkMapaEl = document.createElement('a');
        linkMapaEl.href = linkMapa;
        linkMapaEl.target = '_blank';
        linkMapaEl.rel = 'noopener noreferrer';
        linkMapaEl.className = 'btn-ver-mapa';
        linkMapaEl.textContent = 'Ver no Mapa';
        celulaAcao.appendChild(linkMapaEl);
        
        linha.appendChild(celulaFarmacia);
        linha.appendChild(celulaEndereco);
        linha.appendChild(celulaDistancia);
        linha.appendChild(celulaPreco);
        linha.appendChild(celulaHorario);
        linha.appendChild(celulaAcao);
        
        elementos.corpoTabelaPrecos.appendChild(linha);
    });
}

/**
 * Calcula o roteiro de compras otimizado
 */
function calcularRota(precosFarmas, medicamento) {
    if (precosFarmas.length === 0) {
        return null;
    }
    
    // Encontra a farmácia com o menor preço
    const melhorOpcao = precosFarmas.reduce((melhor, atual) => 
        atual.preco < melhor.preco ? atual : melhor
    );
    
    const precoReferencia = medicamento.precoReferencia || melhorOpcao.preco;
    const economia = Math.max(0, precoReferencia - melhorOpcao.preco);
    
    // Calcula tempo estimado (30km/h médio + 10min por parada)
    const distancia = calcularDistanciaKm(
        estado.coordenadasUsuario.latitude,
        estado.coordenadasUsuario.longitude,
        melhorOpcao.dados.latitude,
        melhorOpcao.dados.longitude
    );
    const tempoMinutos = Math.round((distancia / 30) * 60 + 10);
    
    return {
        passos: [
            {
                farmacia: melhorOpcao.dados,
                medicamento: medicamento.nome,
                preco: melhorOpcao.preco,
                numero: 1
            }
        ],
        total: melhorOpcao.preco,
        economia: economia,
        tempoEstimado: tempoMinutos,
        distanciaTotal: distancia
    };
}

/**
 * Exibe o roteiro de compras premium
 */
function renderizarRota(rota) {
    if (!rota) return;
    
    elementos.secaoRota.hidden = false;
    elementos.listaRota.innerHTML = '';
    
    rota.passos.forEach(passo => {
        const item = document.createElement('div');
        item.className = 'item-rota';
        
        const numeroEl = document.createElement('div');
        numeroEl.className = 'item-rota-numero';
        numeroEl.setAttribute('aria-hidden', 'true');
        numeroEl.textContent = passo.numero;
        
        const infoEl = document.createElement('div');
        infoEl.className = 'item-rota-info';
        
        const farmaciaEl = document.createElement('p');
        farmaciaEl.className = 'item-rota-farmacia';
        farmaciaEl.textContent = passo.farmacia.nome;
        
        const medicamentoEl = document.createElement('p');
        medicamentoEl.className = 'item-rota-medicamento';
        medicamentoEl.textContent = passo.medicamento + ' • ' + passo.farmacia.endereco;
        
        infoEl.appendChild(farmaciaEl);
        infoEl.appendChild(medicamentoEl);
        
        const precoEl = document.createElement('div');
        precoEl.className = 'item-rota-preco';
        precoEl.textContent = formatarMoeda(passo.preco);
        
        item.appendChild(numeroEl);
        item.appendChild(infoEl);
        item.appendChild(precoEl);
        
        elementos.listaRota.appendChild(item);
    });
    
    elementos.rotaEconomia.textContent = '💰 Economia total: ' + formatarMoeda(rota.economia);
    elementos.rotaTempo.textContent = '⏱️ Tempo estimado: ' + rota.tempoEstimado + ' min • Distância: ' + 
                                      formatarDistancia(rota.distanciaTotal);
}

/**
 * Lê o raio de busca escolhido pelo usuário (preset ou personalizado).
 * Retorna Infinity quando "qualquer distância" está selecionado.
 */
function obterRaioSelecionado() {
    const valorSelecionado = elementos.raioBusca.value;

    if (valorSelecionado === 'qualquer') return Infinity;

    if (valorSelecionado === 'personalizado') {
        const raioDigitado = parseFloat(elementos.raioPersonalizado.value);
        return raioDigitado > 0 ? raioDigitado : RAIO_MAXIMO_KM;
    }

    return parseFloat(valorSelecionado) || RAIO_MAXIMO_KM;
}

/**
 * Mostra/esconde o campo de raio personalizado conforme a opção escolhida
 */
function configurarRaioBusca() {
    elementos.raioBusca.addEventListener('change', () => {
        const personalizado = elementos.raioBusca.value === 'personalizado';
        elementos.raioPersonalizado.hidden = !personalizado;
        if (personalizado) elementos.raioPersonalizado.focus();
    });
}

// ==========================================================================
// Função Principal de Busca
// ==========================================================================

/**
 * Executa a busca completa de medicamentos
 */
async function executarBusca() {
    const termoMedicamento = elementos.buscaMedicamento.value.trim();
    const termoLocalizacao = elementos.buscaLocalizacao.value.trim();
    
    if (!termoMedicamento) {
        elementos.buscaMedicamento.focus();
        mostrarNotificacao('Por favor, digite o nome de um medicamento.');
        return;
    }
    
    // Evita buscas simultâneas
    if (estado.buscaAtiva) return;
    estado.buscaAtiva = true;
    
    // Mostra loading
    elementos.carregando.hidden = false;
    elementos.resultados.hidden = true;
    elementos.semResultados.hidden = true;
    
    // Simula latência de rede para feedback visual
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Busca o medicamento
    const medicamento = buscarMedicamento(termoMedicamento);
    
    if (!medicamento) {
        elementos.carregando.hidden = true;
        elementos.resultados.hidden = false;
        elementos.semResultados.hidden = false;
        elementos.cardMedicamento.hidden = true;
        elementos.secaoGenericos.hidden = true;
        elementos.secaoFarmacias.hidden = true;
        elementos.secaoRota.hidden = true;
        estado.buscaAtiva = false;
        return;
    }
    
    // Resolve o ponto de referência da busca (CEP/cidade digitado ou GPS já obtido),
    // mantendo localizacaoUsuario e coordenadasUsuario sempre sincronizados
    estado.localizacaoUsuario = await resolverPontoReferencia(termoLocalizacao);
    estado.coordenadasUsuario = {
        latitude: estado.localizacaoUsuario.latitude,
        longitude: estado.localizacaoUsuario.longitude
    };

    const raioSelecionadoKm = obterRaioSelecionado();

    // Tenta buscar farmácias reais próximas (Overpass/OpenStreetMap) para o
    // raio escolhido; se todos os endpoints falharem (API pública fora do
    // ar, sem internet, etc.), cai para a lista pré-carregada das capitais
    const farmaciasReais = await buscarFarmaciasReaisProximas(
        estado.localizacaoUsuario.latitude, estado.localizacaoUsuario.longitude, raioSelecionadoKm
    );
    const usandoFarmaciasReais = farmaciasReais !== null && farmaciasReais.length > 0;
    const bancoFarmacias = usandoFarmaciasReais ? farmaciasReais : BANCO_FARMACIAS;

    // Obtém preços e distância em todas as farmácias que têm o medicamento
    const farmaciasComPreco = bancoFarmacias
        .map(farmacia => {
            const { preco, real } = calcularPrecoFarmacia(medicamento, farmacia);
            return {
                dados: farmacia,
                preco,
                precoReal: real,
                distanciaKm: calcularDistanciaKm(
                    estado.localizacaoUsuario.latitude, estado.localizacaoUsuario.longitude,
                    farmacia.latitude, farmacia.longitude
                )
            };
        })
        .filter(item => item.preco !== null);

    // Mantém só as farmácias dentro do raio escolhido pelo usuário; se nenhuma
    // estiver dentro dele (região sem farmácia cadastrada), mostra as mais
    // próximas disponíveis e avisa o usuário
    let precosFarmas = farmaciasComPreco.filter(item => item.distanciaKm <= raioSelecionadoKm);
    const mostrandoFallback = precosFarmas.length === 0;

    if (mostrandoFallback) {
        precosFarmas = [...farmaciasComPreco]
            .sort((a, b) => a.distanciaKm - b.distanciaKm)
            .slice(0, 5);
    } else if (precosFarmas.length > MAX_FARMACIAS_EXIBIDAS) {
        // Overpass pode retornar centenas de farmácias reais num raio grande
        // (ex: 60km em São Paulo) - mostra só as mais próximas pra manter a
        // tabela usável; o usuário pode reduzir o raio pra ver as demais
        precosFarmas = [...precosFarmas]
            .sort((a, b) => a.distanciaKm - b.distanciaKm)
            .slice(0, MAX_FARMACIAS_EXIBIDAS);
    }

    estado.medicamentoSelecionado = medicamento;
    estado.resultadosFarmas = precosFarmas;

    // Renderiza resultados
    elementos.carregando.hidden = true;
    elementos.resultados.hidden = false;
    elementos.semResultados.hidden = true;

    renderizarMedicamento(medicamento);
    renderizarGenericos(medicamento);
    renderizarFarmacias(medicamento, estado.localizacaoUsuario, precosFarmas, mostrandoFallback, raioSelecionadoKm);
    
    // Calcula e renderiza rota premium
    const rota = calcularRota(precosFarmas, medicamento);
    estado.rotaCalculada = rota;
    renderizarRota(rota);
    
    // Rola até os resultados
    elementos.resultados.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    estado.buscaAtiva = false;
}

// ==========================================================================
// Notificações
// ==========================================================================

/**
 * Mostra uma notificação temporária
 */
function mostrarNotificacao(mensagem) {
    let notificacao = document.getElementById('notificacao');
    
    if (!notificacao) {
        notificacao = document.createElement('div');
        notificacao.id = 'notificacao';
        notificacao.setAttribute('role', 'alert');
        notificacao.className = 'notificacao';
        document.body.appendChild(notificacao);
    }
    
    notificacao.textContent = mensagem;
    notificacao.classList.add('visivel');
    
    clearTimeout(mostrarNotificacao.timeoutId);
    mostrarNotificacao.timeoutId = setTimeout(() => {
        notificacao.classList.remove('visivel');
    }, 4000);
}

// ==========================================================================
// Integração com Reconhecimento de Voz
// ==========================================================================

/**
 * Configura o botão de busca por voz
 */
function configurarBuscaVoz() {
    elementos.btnVoz.addEventListener('click', () => {
        if (reconhecimentoVoz.ativo) {
            reconhecimentoVoz.parar();
            return;
        }
        
        // Mostra status de escuta
        elementos.statusVoz.hidden = false;
        elementos.statusVozTexto.textContent = 'Ouvindo... Fale o nome do medicamento';
        elementos.btnVoz.classList.add('ativo');
        
        // Configura callbacks
        reconhecimentoVoz.callbacks.onResult = (alternativas) => {
            const texto = reconhecimentoVoz.normalizarTranscricao(alternativas);
            elementos.buscaMedicamento.value = texto;
            elementos.statusVozTexto.textContent = 'Você disse: "' + texto + '"';
            
            // Executa a busca após pequena pausa
            setTimeout(() => {
                executarBusca();
            }, 500);
        };
        
        reconhecimentoVoz.callbacks.onError = (mensagem) => {
            elementos.statusVoz.hidden = true;
            elementos.btnVoz.classList.remove('ativo');
            mostrarNotificacao(mensagem);
        };
        
        reconhecimentoVoz.callbacks.onEnd = () => {
            elementos.statusVoz.hidden = true;
            elementos.btnVoz.classList.remove('ativo');
        };
        
        // Inicia o reconhecimento
        const iniciado = reconhecimentoVoz.iniciar();
        if (!iniciado && !reconhecimentoVoz.suportado) {
            elementos.statusVoz.hidden = true;
            mostrarNotificacao('Seu navegador não suporta busca por voz. Use Chrome ou Edge.');
        }
    });
}

// ==========================================================================
// Integração com Geolocalização
// ==========================================================================

/**
 * Botão de localização atual
 */
function configurarLocalizacao() {
    // Se o usuário editar o campo manualmente (ex: digitar um CEP por cima),
    // a busca volta a usar o texto digitado em vez do GPS já obtido
    elementos.buscaLocalizacao.addEventListener('input', () => {
        estado.localizacaoViaGPS = false;
    });

    elementos.btnLocalizar.addEventListener('click', () => {
        if (!navigator.geolocation) {
            mostrarNotificacao('Seu navegador não suporta geolocalização.');
            return;
        }
        
        elementos.btnLocalizar.disabled = true;
        elementos.btnLocalizar.textContent = '⏳';
        
        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                const latitude = posicao.coords.latitude;
                const longitude = posicao.coords.longitude;
                
                // Encontra a cidade mais próxima
                let cidadeEncontrada = null;
                let menorDistancia = Infinity;
                
                BANCO_LOCALIDADES.forEach(localidade => {
                    const distancia = calcularDistanciaKm(
                        latitude, longitude,
                        localidade.latitude, localidade.longitude
                    );
                    if (distancia < menorDistancia) {
                        menorDistancia = distancia;
                        cidadeEncontrada = localidade;
                    }
                });
                
                estado.coordenadasUsuario = { latitude, longitude };
                estado.localizacaoViaGPS = true;

                if (cidadeEncontrada) {
                    elementos.buscaLocalizacao.value = cidadeEncontrada.cidade + ' - ' + cidadeEncontrada.uf;
                } else {
                    elementos.buscaLocalizacao.value = latitude.toFixed(4) + ', ' + longitude.toFixed(4);
                }
                
                mostrarNotificacao('📍 Localização identificada com sucesso!');
                
                elementos.btnLocalizar.disabled = false;
                elementos.btnLocalizar.textContent = '';
                elementos.btnLocalizar.innerHTML = ICONE_SVG_LOCALIZACAO;
            },
            (erro) => {
                elementos.btnLocalizar.disabled = false;
                elementos.btnLocalizar.textContent = '';
                elementos.btnLocalizar.innerHTML = ICONE_SVG_LOCALIZACAO;
                
                let mensagem = 'Não foi possível obter sua localização.';
                
                switch (erro.code) {
                    case erro.PERMISSION_DENIED:
                        mensagem = 'Permissão de localização negada. Digite sua cidade ou CEP.';
                        break;
                    case erro.POSITION_UNAVAILABLE:
                        mensagem = 'Localização indisponível. Digite sua cidade ou CEP.';
                        break;
                    case erro.TIMEOUT:
                        mensagem = 'Tempo esgotado. Digite sua cidade ou CEP.';
                        break;
                }
                
                mostrarNotificacao(mensagem);
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
        );
    });
}

// ==========================================================================
// Roteiro de Compras por Voz
// ==========================================================================

/**
 * Botão de ouvir o roteiro de compras
 */
function configurarRoteiroVoz() {
    elementos.btnRoteiroVoz.addEventListener('click', () => {
        if (!estado.rotaCalculada || !estado.medicamentoSelecionado) {
            mostrarNotificacao('Realize uma busca primeiro para ouvir o roteiro.');
            return;
        }
        
        // Se já está falando, para
        if (sintetizadorVoz.estaFalando()) {
            sintetizadorVoz.parar();
            elementos.btnRoteiroVoz.innerHTML = ICONE_SVG_MICROFONE + ' Ouvir Roteiro';
            return;
        }
        
        // Monta o texto do roteiro
        const medicamento = estado.medicamentoSelecionado;
        const rota = estado.rotaCalculada;
        
        let texto = 'Roteiro de compras para ' + medicamento.nome + '. ';
        
        rota.passos.forEach(passo => {
            texto += 'Passo ' + passo.numero + ': vá até ' + passo.farmacia.nome + 
                     ', em ' + passo.farmacia.endereco + '. ';
            texto += 'Compre ' + passo.medicamento + ' por ' + formatarMoeda(passo.preco) + '. ';
        });
        
        texto += 'Economia total de ' + formatarMoeda(rota.economia) + '. ';
        texto += 'Tempo estimado de ' + rota.tempoEstimado + ' minutos. ';
        texto += 'Boa compra e boa economia!';
        
        // Altera o botão para indicar que está falando
        elementos.btnRoteiroVoz.textContent = '⏹️ Parar';
        
        // Fala o roteiro
        sintetizadorVoz.falar(texto, {
            velocidade: 0.85,
            onEnd: () => {
                elementos.btnRoteiroVoz.innerHTML = ICONE_SVG_MICROFONE + ' Ouvir Roteiro';
            },
            onError: (erro) => {
                console.error('Erro na síntese de voz:', erro);
                elementos.btnRoteiroVoz.innerHTML = ICONE_SVG_MICROFONE + ' Ouvir Roteiro';
            }
        });
    });
}

// ==========================================================================
// Inicialização e Eventos
// ==========================================================================

/**
 * Inicializa todos os eventos da aplicação
 */
function inicializar() {
    // Busca ao submeter o formulário
    elementos.formBusca.addEventListener('submit', (evento) => {
        evento.preventDefault();
        executarBusca();
    });
    
    // Busca por voz
    configurarBuscaVoz();
    
    // Geolocalização
    configurarLocalizacao();

    // Raio de busca (presets ou personalizado)
    configurarRaioBusca();

    // Roteiro por voz
    configurarRoteiroVoz();
    
    // Enter no campo de localização também busca
    elementos.buscaLocalizacao.addEventListener('keydown', (evento) => {
        if (evento.key === 'Enter') {
            evento.preventDefault();
            executarBusca();
        }
    });
    
    // Lê parâmetros da URL para SEO (?busca=medicamento)
    const params = new URLSearchParams(window.location.search);
    const termoUrl = params.get('busca');
    if (termoUrl) {
        elementos.buscaMedicamento.value = termoUrl;
        setTimeout(() => executarBusca(), 100);
    }
    
    console.log('💊 MED_PRECOS inicializado com sucesso!');
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}