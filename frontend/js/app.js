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
    comparacao: null,        // última resposta de /api/comparar
    marcaBuscada: null,      // marca que a busca reconheceu (ex.: "Wellbutrin"); null = buscou o princípio ativo
    raioComparacao: null,
    buscaAtiva: false
};

// Raio, em km, usado quando o usuário escolhe "personalizado" sem digitar um valor
const RAIO_MAXIMO_KM = 60;

// A API é servida pela mesma origem deste site (o backend serve o front em "/")
const API_BASE = '/api';

// Nome de exibição das redes (chaves usadas pela API em pbm.redes)
const NOMES_REDES = {
    paguemenos: 'Pague Menos',
    extrafarma: 'Extrafarma',
    drogariasaopaulo: 'Drogaria São Paulo',
    pacheco: 'Drogarias Pacheco',
    venancio: 'Drogaria Venancio',
    panvel: 'Panvel'
};

// ==========================================================================
// Cliente da API (busca, localização e comparação de preços rodam no backend)
// ==========================================================================

/**
 * GET em /api com timeout. Parâmetros vazios/infinitos são omitidos
 * (ex.: raio "qualquer distância" = sem parâmetro de raio).
 */
async function chamarApi(caminho, parametros = {}, timeoutMs = 45000) {
    const url = new URL(API_BASE + caminho, window.location.origin);
    Object.entries(parametros).forEach(([chave, valor]) => {
        if (valor === null || valor === undefined || valor === '') return;
        if (typeof valor === 'number' && !Number.isFinite(valor)) return;
        url.searchParams.set(chave, valor);
    });
    const controle = new AbortController();
    const timeoutId = setTimeout(() => controle.abort(), timeoutMs);
    try {
        const resposta = await fetch(url, { signal: controle.signal, headers: { Accept: 'application/json' } });
        if (!resposta.ok) throw new Error('API respondeu ' + resposta.status + ' em ' + caminho);
        return await resposta.json();
    } finally {
        clearTimeout(timeoutId);
    }
}

/**
 * Melhor correspondência para o termo (nome comercial, princípio ativo ou
 * sinônimo, tolerando erro de digitação), ou null se nada bater
 */
async function buscarMedicamento(termo) {
    const resposta = await chamarApi('/medicamentos/busca', { q: termo, limite: 1 });
    return resposta.resultados.length ? resposta.resultados[0] : null;
}

/**
 * CEP ou texto livre -> coordenadas. A API nunca falha aqui: sem internet
 * do lado dela, devolve uma aproximação (região do CEP / cidade conhecida)
 */
async function resolverLocalizacao(termoLocalizacao) {
    return chamarApi('/localizacao', { q: (termoLocalizacao || '').trim() });
}

/**
 * Decide o ponto de referência da busca atual: prioriza o que foi digitado
 * no campo de localização; se estiver vazio, usa o GPS já obtido (se houver).
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
    return resolverLocalizacao(termoLocalizacao);
}

/**
 * Comparação de preço do medicamento nas farmácias perto do ponto, numa
 * apresentação (dose + quantidade). Sem `apresentacao`, a API escolhe a
 * mais vendida. `atualizar` deixa a API buscar na hora preços vencidos.
 */
async function compararPrecos(medicamentoId, localizacao, raioKm, apresentacao, atualizar = true, marca = null) {
    return chamarApi('/comparar', {
        medicamento: medicamentoId,
        lat: localizacao.latitude,
        lon: localizacao.longitude,
        raio: raioKm,
        apresentacao: apresentacao || null,
        marca: marca,   // marca que o usuário buscou (ex.: "Wellbutrin"): as ofertas dela vêm à parte
        atualizar: atualizar ? 'true' : 'false'
    });
}

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
    medicamentoClasse: document.getElementById('medicamento-classe'),
    medicamentoPbm: document.getElementById('medicamento-pbm'),
    medicamentoOfertas: document.getElementById('medicamento-ofertas'),

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
    avisoFarmaciasDistantes: document.getElementById('aviso-farmacias-distantes'),
    avisoAtualizacao: document.getElementById('aviso-atualizacao'),

    // Apresentação comparada (dose + quantidade)
    seletorApresentacao: document.getElementById('seletor-apresentacao'),
    seletorApresentacaoGrupo: document.getElementById('seletor-apresentacao-grupo')
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
    elementos.medicamentoPrincipio.textContent = 'Princípio ativo: ' + medicamento.principioAtivo +
        (medicamento.laboratorio ? ' · Laboratório: ' + medicamento.laboratorio : '');
    elementos.medicamentoDescricao.textContent = medicamento.descricao;

    // Classe terapêutica oficial (CMED) - informação secundária, escondida quando ausente
    const classe = medicamento.classeTerapeutica;
    elementos.medicamentoClasse.hidden = !classe;
    if (classe) {
        elementos.medicamentoClasse.textContent = 'Classe terapêutica: ' + classe;
    }

    renderizarPbm(medicamento);
}

/**
 * Aviso de programa de desconto do laboratório (PBM). Só informativo: o
 * desconto depende de cadastro do CPF no programa do fabricante, então os
 * preços da tabela continuam sendo os de prateleira (sem o desconto).
 */
function renderizarPbm(medicamento) {
    const el = elementos.medicamentoPbm;
    const pbm = medicamento.pbm;
    el.innerHTML = '';
    el.hidden = !pbm;
    if (!pbm) return;

    const titulo = document.createElement('p');
    titulo.className = 'medicamento-pbm-titulo';
    titulo.textContent = '💊 Tem desconto do laboratório' +
        (pbm.descontoMax ? ' (até ' + pbm.descontoMax + '%)' : '') + ' com cadastro do CPF';
    el.appendChild(titulo);

    const detalhes = [];
    if (pbm.programas.length) detalhes.push('Programa: ' + pbm.programas.join(', ') + '.');
    const redes = Object.keys(pbm.redes).map(r => NOMES_REDES[r] || r);
    if (redes.length) detalhes.push('Visto em: ' + redes.join(', ') + '.');
    if (pbm.produtos.length) detalhes.push('Ex.: ' + pbm.produtos.slice(0, 2).join('; ') + '.');
    detalhes.push('Os preços abaixo são sem esse desconto. Informe o CPF no caixa ou cadastre-se no site do laboratório.');

    const texto = document.createElement('p');
    texto.className = 'medicamento-pbm-texto';
    texto.textContent = detalhes.join(' ');
    el.appendChild(texto);
}

/**
 * Exibe as alternativas genéricas
 */
function renderizarGenericos(medicamento) {
    elementos.listaGenericos.innerHTML = '';
    // Sem alternativa mais barata no catálogo CMED (ex.: só existe a marca) - esconde a seção
    elementos.secaoGenericos.hidden = !medicamento.genericos.length;

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
        if (generico.laboratorio) {
            const laboratorioEl = document.createElement('p');
            laboratorioEl.className = 'card-generico-laboratorio';
            laboratorioEl.textContent = 'Laboratório: ' + generico.laboratorio;
            card.appendChild(laboratorioEl);
        }
        card.appendChild(precoEl);
        card.appendChild(economiaEl);

        elementos.listaGenericos.appendChild(card);
    });
}

/**
 * "✅ preço real do site da rede · 29/09", "⚠️ preço de 30/08 (pode ter mudado)"
 * ou "≈ preço estimado"
 */
function textoOrigemPreco(farmacia) {
    if (!farmacia.precoReal) return '≈ preço estimado';
    const data = farmacia.coletadoEm
        ? new Date(farmacia.coletadoEm).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
        : null;
    if (farmacia.precoDesatualizado) {
        return '⚠️ preço do site da rede' + (data ? ' em ' + data : '') + ' (pode ter mudado)';
    }
    return '✅ preço real do site da rede' + (data ? ' · ' + data : '');
}

/**
 * "Praça da Sé, Sé — São Paulo - SP (CEP 01001-000)": o endereço do CEP pesquisado quando
 * a API o conhece; senão só o nome do lugar
 */
function descreverLocal(localizacao) {
    const rua = [localizacao.endereco, localizacao.bairro].filter(Boolean).join(', ');
    return (rua ? rua + ' — ' : '') + localizacao.nome + (localizacao.cep ? ' (CEP ' + localizacao.cep + ')' : '');
}

/**
 * Exibe a tabela de farmácias com preços
 */
function renderizarFarmacias(medicamento, localizacao, precosFarmas, mostrandoFallback, raioSelecionadoKm) {
    elementos.secaoFarmacias.hidden = false;
    elementos.localizacaoBusca.textContent = '📍 Resultados para ' + medicamento.nome + ' perto de ' + descreverLocal(localizacao);
    elementos.corpoTabelaPrecos.innerHTML = '';

    elementos.avisoFarmaciasDistantes.hidden = !mostrandoFallback;
    if (mostrandoFallback) {
        const raioTexto = Number.isFinite(raioSelecionadoKm) ? 'num raio de ' + raioSelecionadoKm + 'km' : 'próxima';
        elementos.avisoFarmaciasDistantes.textContent =
            '⚠️ Não encontramos farmácias cadastradas ' + raioTexto + ' da localização informada. ' +
            'Mostrando as mais próximas disponíveis, que podem estar longe.';
    }

    // Preços reais primeiro (do menor pro maior), estimativas depois. O selo de
    // MENOR PREÇO também vai pro menor preço REAL quando existe algum: uma
    // estimativa não deve "ganhar" de um preço de verdade só porque a conta
    // sobre o teto CMED ficou mais baixa
    const ordenados = [...precosFarmas].sort((a, b) => (b.precoReal - a.precoReal) || (a.preco - b.preco));
    const reais = ordenados.filter(f => f.precoReal);
    const somenteReaisDisputam = reais.length > 0;
    const disputam = somenteReaisDisputam ? reais : ordenados;
    const menorPreco = disputam.length ? disputam[0].preco : 0;

    ordenados.forEach(farmacia => {
        const dados = farmacia.dados;
        const aberta = farmaciaEstaAberta(dados.horario);
        const distancia = calcularDistanciaKm(
            localizacao.latitude,
            localizacao.longitude,
            dados.latitude,
            dados.longitude
        );

        const eMenorPreco = farmacia.preco === menorPreco && (farmacia.precoReal || !somenteReaisDisputam);
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
        celulaEndereco.appendChild(endereco1);
        const complemento = [dados.bairro, dados.cep].filter(Boolean).join(' • ');
        if (complemento) {
            const endereco2 = document.createElement('p');
            endereco2.className = 'farmacia-endereco';
            endereco2.textContent = complemento;
            celulaEndereco.appendChild(endereco2);
        }
        if (dados.enderecoAproximado) {
            // Rua obtida pela posição no mapa (o OpenStreetMap não informava): pode ter pequena diferença
            const aproximado = document.createElement('p');
            aproximado.className = 'farmacia-endereco-aproximado';
            aproximado.textContent = 'endereço aproximado, pela posição no mapa';
            celulaEndereco.appendChild(aproximado);
        }

        const celulaDistancia = document.createElement('td');
        celulaDistancia.textContent = dados.online ? '🌐 online' : formatarDistancia(distancia);

        const celulaPreco = document.createElement('td');
        const precoSpan = document.createElement('span');
        precoSpan.className = 'preco-destaque';
        precoSpan.textContent = formatarMoeda(farmacia.preco);
        celulaPreco.appendChild(precoSpan);

        const precoOrigemEl = document.createElement('span');
        precoOrigemEl.className = 'preco-real';
        precoOrigemEl.textContent = textoOrigemPreco(farmacia);
        celulaPreco.appendChild(precoOrigemEl);

        // Qual produto é esse preço (a mais barata entre marca e genéricos na rede)
        if (farmacia.produto) {
            const produtoEl = farmacia.produto.url ? document.createElement('a') : document.createElement('span');
            produtoEl.className = 'preco-produto';
            produtoEl.textContent = farmacia.produto.titulo;
            if (farmacia.produto.url) {
                produtoEl.href = farmacia.produto.url;
                produtoEl.target = '_blank';
                produtoEl.rel = 'noopener noreferrer';
            }
            celulaPreco.appendChild(produtoEl);
            if (farmacia.produto.laboratorio) {
                const laboratorioEl = document.createElement('span');
                laboratorioEl.className = 'preco-laboratorio';
                laboratorioEl.textContent = 'Laboratório: ' + farmacia.produto.laboratorio;
                celulaPreco.appendChild(laboratorioEl);
            }
        }

        // Preço "de" da própria loja (o desconto já está no preço acima)
        if (farmacia.precoLista) {
            const deEl = document.createElement('span');
            deEl.className = 'preco-de';
            deEl.textContent = 'de ' + formatarMoeda(farmacia.precoLista);
            celulaPreco.appendChild(deEl);
        }

        // Ofertas proativas: promoção da rede que compensa + programa do laboratório
        (farmacia.ofertas || []).forEach(oferta => {
            const ofertaEl = document.createElement('span');
            ofertaEl.className = oferta.tipo === 'programa_laboratorio' ? 'preco-pbm' : 'preco-oferta';
            ofertaEl.textContent = textoOferta(oferta);
            celulaPreco.appendChild(ofertaEl);
        });

        if (eMenorPreco) {
            const badge = document.createElement('span');
            badge.className = 'preco-menor';
            badge.textContent = 'MENOR PREÇO';
            celulaPreco.appendChild(badge);
        }

        const celulaHorario = document.createElement('td');
        const statusEl = document.createElement('p');
        statusEl.className = 'farmacia-horario ' + (aberta ? 'aberta' : 'fechada');
        statusEl.textContent = dados.online ? '🌐 Site 24 horas' : (aberta ? '🟢 Aberta agora' : '🔴 Fechada agora');
        const horarioEl = document.createElement('p');
        horarioEl.className = 'farmacia-horario';
        horarioEl.textContent = dados.online ? 'Entrega em casa' : formatarHorario(dados.horario);
        celulaHorario.appendChild(statusEl);
        celulaHorario.appendChild(horarioEl);

        const celulaAcao = document.createElement('td');
        const linkMapaEl = document.createElement('a');
        linkMapaEl.href = dados.online ? ((farmacia.produto && farmacia.produto.url) || dados.site) : linkMapa;
        linkMapaEl.target = '_blank';
        linkMapaEl.rel = 'noopener noreferrer';
        linkMapaEl.className = 'btn-ver-mapa';
        linkMapaEl.textContent = dados.online ? 'Ir ao site' : 'Ver no Mapa';
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
function calcularRota(todasFarmas, medicamento) {
    const precosFarmas = todasFarmas.filter(f => !f.dados.online);
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
 * Mostra o estado "nada encontrado" (medicamento inexistente no catálogo)
 */
function mostrarSemResultados() {
    elementos.carregando.hidden = true;
    elementos.resultados.hidden = false;
    elementos.semResultados.hidden = false;
    elementos.cardMedicamento.hidden = true;
    elementos.secaoGenericos.hidden = true;
    elementos.secaoFarmacias.hidden = true;
    elementos.secaoRota.hidden = true;
}

/**
 * Preenche o seletor de apresentação (dose + quantidade) com as opções que a
 * API devolveu, marcando a que está sendo comparada
 */
function renderizarSeletorApresentacao(comparacao) {
    const seletor = elementos.seletorApresentacao;
    seletor.innerHTML = '';
    comparacao.apresentacoes.forEach(apresentacao => {
        const opcao = document.createElement('option');
        opcao.value = apresentacao.chave;
        const detalhe = apresentacao.redes
            ? ' — ' + apresentacao.redes + (apresentacao.redes === 1 ? ' rede' : ' redes') +
              (apresentacao.menorPreco ? ', a partir de ' + formatarMoeda(apresentacao.menorPreco) : '')
            : ' — só preço estimado';
        const promocao = apresentacao.redesComPromocao
            ? ' · 🏷️ oferta em ' + apresentacao.redesComPromocao + (apresentacao.redesComPromocao === 1 ? ' rede' : ' redes')
            : '';
        opcao.textContent = apresentacao.rotulo + detalhe + promocao;
        opcao.selected = apresentacao.chave === comparacao.apresentacaoSelecionada;
        seletor.appendChild(opcao);
    });
    elementos.seletorApresentacaoGrupo.hidden = comparacao.apresentacoes.length < 2;
}

/**
 * "LEVE 3 PAGUE 2" -> "Leve 3 pague 2" (as lojas mandam tudo em maiúsculas)
 */
function descricaoAmigavel(texto) {
    const minusculo = (texto || '').toLowerCase();
    return minusculo.charAt(0).toUpperCase() + minusculo.slice(1);
}

/**
 * Texto de uma oferta, sempre com o preço normal por unidade ao lado
 * (a Anvisa exige mostrar o preço sem desconto junto do preço com desconto)
 */
function textoOferta(oferta) {
    if (oferta.tipo === 'programa_laboratorio') {
        return '💊 ' + oferta.descricao + (oferta.percentual ? ' — até ' + Math.round(oferta.percentual) + '%' : '');
    }
    let texto = '🏷️ ' + descricaoAmigavel(oferta.descricao);
    if (oferta.precoEfetivoUnitario && oferta.quantidadeMinima) {
        texto += ': ' + formatarMoeda(oferta.precoEfetivoUnitario) + '/un. levando ' + oferta.quantidadeMinima +
                 ' (avulso ' + formatarMoeda(oferta.precoUnitario) + ')';
    }
    if (oferta.produto) texto += ' — ' + oferta.produto;
    if (oferta.exigeCupom) texto += ' · precisa de cupom';
    return texto;
}

function adicionarParagrafo(pai, classe, texto) {
    const p = document.createElement('p');
    p.className = classe;
    p.textContent = texto;
    pai.appendChild(p);
    return p;
}

/**
 * Linha de uma rede no bloco da marca: "Pague Menos: R$ 198,99 → R$ 134,93 com o
 * desconto do laboratório (32%, cadastro do CPF)"
 */
function textoOfertaMarca(itemRede) {
    const partes = itemRede.ofertas.map(oferta => {
        if (oferta.tipo === 'programa_laboratorio') {
            return oferta.precoEfetivoUnitario
                ? formatarMoeda(oferta.precoEfetivoUnitario) + ' com o desconto do laboratório (' +
                  Math.round(oferta.percentual) + '%, cadastro do CPF)'
                : 'tem desconto do laboratório com cadastro do CPF (a loja não informa o valor)';
        }
        return textoOferta(oferta).replace(/^🏷️ /, '');
    });
    return (itemRede.redeNome || NOMES_REDES[itemRede.rede] || itemRede.rede) + ': avulso ' +
           formatarMoeda(itemRede.preco) + ' → ' + partes.join(' · ');
}

/**
 * Bloco de ofertas no card, em duas partes: a MARCA buscada (ex.: Wellbutrin, com
 * o programa do laboratório, mesmo que o genérico seja mais barato) e os genéricos/
 * similares (promoções que compensam, uma por rede). Tudo na apresentação escolhida.
 */
function renderizarOfertasApresentacao(comparacao) {
    const el = elementos.medicamentoOfertas;
    const marca = comparacao.ofertasMarca || { redes: [], programas: [] };
    const outras = comparacao.ofertasApresentacao || [];
    el.innerHTML = '';
    el.hidden = !marca.redes.length && !outras.length;
    if (el.hidden) return;

    // O bloco da marca já mostra o programa do laboratório com preço por rede: o aviso
    // genérico de PBM do card ficaria repetido (e menos preciso)
    const marcaTemPrograma = marca.redes.some(r => r.ofertas.some(o => o.tipo === 'programa_laboratorio'));
    if (marcaTemPrograma) elementos.medicamentoPbm.hidden = true;

    const apresentacao = comparacao.apresentacoes.find(a => a.chave === comparacao.apresentacaoSelecionada);
    adicionarParagrafo(el, 'medicamento-ofertas-titulo',
        '🏷️ Ofertas' + (apresentacao ? ' para ' + apresentacao.rotulo : ''));

    if (marca.redes.length) {
        adicionarParagrafo(el, 'medicamento-ofertas-subtitulo', marca.marca + ' (marca)');
        const lista = document.createElement('ul');
        lista.className = 'medicamento-ofertas-lista';
        marca.redes.forEach(itemRede => {
            const item = document.createElement('li');
            item.textContent = textoOfertaMarca(itemRede);
            lista.appendChild(item);
        });
        el.appendChild(lista);

        // Programa oficial do laboratório: vale em farmácias credenciadas, inclusive
        // redes que o MedPreços não consegue consultar
        marca.programas.filter(programa => programa.url).forEach(programa => {
            const p = adicionarParagrafo(el, 'medicamento-ofertas-programa',
                '💊 Programa ' + programa.nome + (programa.laboratorio ? ' (' + programa.laboratorio + ')' : '') +
                ': cadastro e farmácias credenciadas, inclusive outras redes, em ');
            const link = document.createElement('a');
            link.href = programa.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = 'site oficial do programa';
            p.appendChild(link);
        });
    }

    if (outras.length) {
        adicionarParagrafo(el, 'medicamento-ofertas-subtitulo', 'Genéricos e similares, levando mais de uma unidade');
        const lista = document.createElement('ul');
        lista.className = 'medicamento-ofertas-lista';
        outras.forEach(oferta => {
            const item = document.createElement('li');
            item.textContent = (oferta.redeNome || NOMES_REDES[oferta.rede] || oferta.rede) + ': ' +
                               textoOferta(oferta).replace(/^🏷️ /, '');
            lista.appendChild(item);
        });
        el.appendChild(lista);
    }

    adicionarParagrafo(el, 'medicamento-ofertas-nota',
        'Ofertas informadas pelo site de cada rede (válidas na compra online; confirme na loja). ' +
        'Os preços da tabela abaixo são sempre da unidade avulsa, sem desconto.');
}

/**
 * Avisa quando a API não conseguiu atualizar algum preço a tempo (ficou
 * atualizando em segundo plano)
 */
function renderizarAvisoAtualizacao(comparacao) {
    const pendentes = (comparacao.atualizacao && comparacao.atualizacao.redesPendentes) || [];
    elementos.avisoAtualizacao.hidden = pendentes.length === 0;
    if (pendentes.length) {
        elementos.avisoAtualizacao.textContent = '🔄 Atualizando preços de ' +
            pendentes.map(r => NOMES_REDES[r] || r).join(', ') + ' — busque de novo em alguns segundos para ver os valores novos.';
    }
}

/**
 * Renderiza a resposta de /api/comparar
 */
function mostrarComparacao(comparacao, raioSelecionadoKm, rolar) {
    const medicamento = comparacao.medicamento;
    const precosFarmas = comparacao.farmacias;

    estado.medicamentoSelecionado = medicamento;
    estado.resultadosFarmas = precosFarmas;
    estado.comparacao = comparacao;

    elementos.carregando.hidden = true;
    elementos.resultados.hidden = false;
    elementos.semResultados.hidden = true;

    renderizarMedicamento(medicamento);
    renderizarGenericos(medicamento);
    renderizarSeletorApresentacao(comparacao);
    renderizarOfertasApresentacao(comparacao);
    renderizarAvisoAtualizacao(comparacao);
    renderizarFarmacias(medicamento, estado.localizacaoUsuario, precosFarmas, comparacao.mostrandoFallback, raioSelecionadoKm);

    // Calcula e renderiza rota premium
    const rota = calcularRota(precosFarmas, medicamento);
    estado.rotaCalculada = rota;
    renderizarRota(rota);

    if (rolar) elementos.resultados.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Executa a busca completa: acha o medicamento, resolve a localização e pede
 * à API a comparação de preços nas farmácias próximas
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

    elementos.carregando.hidden = false;
    elementos.resultados.hidden = true;
    elementos.semResultados.hidden = true;

    try {
        const encontrado = await buscarMedicamento(termoMedicamento);
        if (!encontrado) {
            mostrarSemResultados();
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
        estado.marcaBuscada = encontrado.marca || null;
        const comparacao = await compararPrecos(encontrado.id, estado.localizacaoUsuario, raioSelecionadoKm,
                                                null, true, estado.marcaBuscada);
        estado.raioComparacao = raioSelecionadoKm;
        mostrarComparacao(comparacao, raioSelecionadoKm, true);
    } catch (erro) {
        console.error('Falha na busca:', erro);
        elementos.carregando.hidden = true;
        mostrarNotificacao('Não foi possível consultar os preços agora. Tente de novo em instantes.');
    } finally {
        estado.buscaAtiva = false;
    }
}

/**
 * Troca a apresentação comparada (ex.: 10 -> 28 comprimidos) sem refazer a busca
 */
async function trocarApresentacao() {
    if (!estado.comparacao || estado.buscaAtiva) return;
    estado.buscaAtiva = true;
    elementos.seletorApresentacao.disabled = true;
    try {
        const comparacao = await compararPrecos(
            estado.comparacao.medicamento.id, estado.localizacaoUsuario, estado.raioComparacao,
            elementos.seletorApresentacao.value, false, estado.marcaBuscada
        );
        mostrarComparacao(comparacao, estado.raioComparacao, false);
    } catch (erro) {
        console.error('Falha ao trocar apresentação:', erro);
        mostrarNotificacao('Não foi possível carregar essa apresentação agora.');
    } finally {
        elementos.seletorApresentacao.disabled = false;
        estado.buscaAtiva = false;
    }
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
            async (posicao) => {
                const latitude = posicao.coords.latitude;
                const longitude = posicao.coords.longitude;

                estado.coordenadasUsuario = { latitude, longitude };
                estado.localizacaoViaGPS = true;

                // Só pra mostrar no campo: a busca usa as coordenadas exatas do GPS.
                // Longe de toda cidade conhecida (>50km), mostra as coordenadas
                let rotulo = latitude.toFixed(4) + ', ' + longitude.toFixed(4);
                try {
                    const cidade = await chamarApi('/localizacao/reversa', { lat: latitude, lon: longitude }, 8000);
                    if (cidade.distanciaKm <= 50) rotulo = cidade.cidade + ' - ' + cidade.uf;
                } catch (erro) {
                    console.warn('Não foi possível identificar a cidade:', erro);
                }
                elementos.buscaLocalizacao.value = rotulo;

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

    // Troca de apresentação comparada
    elementos.seletorApresentacao.addEventListener('change', trocarApresentacao);

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