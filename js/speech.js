/**
 * MED_PRECOS - Módulo de Reconhecimento de Voz
 * Utiliza a Web Speech API para busca por voz
 * Com fallback para navegadores sem suporte
 */

class ReconhecimentoVoz {
    constructor() {
        this.recognition = null;
        this.ativo = false;
        this.suportado = this.verificarSuporte();
        this.callbacks = {
            onResult: null,
            onError: null,
            onEnd: null
        };
        
        if (this.suportado) {
            this.inicializar();
        }
    }

    /**
     * Verifica se o navegador suporta reconhecimento de voz
     */
    verificarSuporte() {
        return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
    }

    /**
     * Inicializa o objeto de reconhecimento
     */
    inicializar() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        
        // Configurações para melhor precisão em português
        this.recognition.lang = 'pt-BR';
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 3;

        // Eventos
        this.recognition.onresult = (evento) => {
            const alternativas = Array.from(evento.results[0])
                .map(resultado => resultado.transcript)
                .filter(texto => texto && texto.trim());
            
            if (alternativas.length > 0 && this.callbacks.onResult) {
                this.callbacks.onResult(alternativas);
            }
        };

        this.recognition.onerror = (evento) => {
            this.ativo = false;
            
            let mensagemErro = 'Erro ao reconhecer voz. Tente novamente.';
            
            switch (evento.error) {
                case 'not-allowed':
                case 'service-not-allowed':
                    mensagemErro = 'Permissão para usar o microfone negada. Verifique as configurações do navegador.';
                    break;
                case 'no-speech':
                    mensagemErro = 'Nenhuma fala detectada. Tente novamente.';
                    break;
                case 'audio-capture':
                    mensagemErro = 'Nenhum microfone encontrado no dispositivo.';
                    break;
                case 'network':
                    mensagemErro = 'Erro de rede. Tente novamente.';
                    break;
                case 'aborted':
                    // Usuário cancelou, não mostrar erro
                    return;
            }
            
            if (this.callbacks.onError) {
                this.callbacks.onError(mensagemErro);
            }
        };

        this.recognition.onend = () => {
            this.ativo = false;
            if (this.callbacks.onEnd) {
                this.callbacks.onEnd();
            }
        };
    }

    /**
     * Inicia o reconhecimento de voz
     */
    iniciar() {
        if (!this.suportado) {
            if (this.callbacks.onError) {
                this.callbacks.onError('Seu navegador não suporta reconhecimento de voz. Use o Chrome ou Edge para esta funcionalidade.');
            }
            return false;
        }

        if (this.ativo) {
            this.parar();
            return false;
        }

        try {
            this.recognition.start();
            this.ativo = true;
            return true;
        } catch (erro) {
            console.error('Erro ao iniciar reconhecimento:', erro);
            this.ativo = false;
            if (this.callbacks.onError) {
                this.callbacks.onError('Não foi possível iniciar a captura de voz.');
            }
            return false;
        }
    }

    /**
     * Para o reconhecimento de voz
     */
    parar() {
        if (this.ativo && this.recognition) {
            this.recognition.stop();
            this.ativo = false;
        }
    }

    /**
     * Normaliza e seleciona a melhor transcrição
     * Remove acentos e caracteres especiais para melhor matching
     */
    normalizarTranscricao(alternativas) {
        // Ordena por confiança (alternativas já vem em ordem de confiança)
        const melhor = alternativas[0] || '';
        
        // Remove pontuação e normaliza
        return melhor
            .trim()
            .replace(/[.,!?;:]/g, '')
            .replace(/\s+/g, ' ')
            .toLowerCase();
    }
}

// Instância global do reconhecimento de voz
const reconhecimentoVoz = new ReconhecimentoVoz();

/**
 * Sintetiza texto em voz (para o roteiro de compras)
 */
class SintetizadorVoz {
    constructor() {
        this.suportado = 'speechSynthesis' in window;
        this.voices = [];
        
        if (this.suportado) {
            this.carregarVozes();
            
            // Alguns navegadores carregam vozes de forma assíncrona
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = () => this.carregarVozes();
            }
        }
    }

    carregarVozes() {
        this.voices = window.speechSynthesis.getVoices();
    }

    /**
     * Encontra a melhor voz em português do Brasil
     */
    getVozPortugues() {
        if (!this.suportado) return null;
        
        // Prioridade: vozes Google pt-BR, depois qualquer pt-BR, depois qualquer voz.
        // Normaliza o underscore de tags como 'pt_BR' para hífen, já que alguns
        // navegadores/plataformas reportam o idioma nesse formato
        const vozesPt = this.voices.filter(voz => voz.lang.toLowerCase().replace('_', '-').includes('pt-br'));
        const vozGoogle = vozesPt.find(voz => voz.name.toLowerCase().includes('google'));
        const vozMicrosoft = vozesPt.find(voz => voz.name.toLowerCase().includes('microsoft'));
        
        return vozGoogle || vozMicrosoft || vozesPt[0] || null;
    }

    /**
     * Fala o texto fornecido
     */
    falar(texto, opcoes = {}) {
        if (!this.suportado) {
            if (opcoes.onError) opcoes.onError('Seu navegador não suporta síntese de voz.');
            return false;
        }

        // Cancela qualquer fala em andamento
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(texto);
        
        // Configurações para melhor clareza para o público mais velho
        utterance.lang = 'pt-BR';
        utterance.rate = parseFloat(opcoes.velocidade) || 0.9; // Levemente mais lento
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        const voz = this.getVozPortugues();
        if (voz) {
            utterance.voice = voz;
        }

        if (opcoes.onStart) utterance.onstart = opcoes.onStart;
        if (opcoes.onEnd) utterance.onend = opcoes.onEnd;
        if (opcoes.onError) utterance.onerror = opcoes.onError;

        window.speechSynthesis.speak(utterance);
        return true;
    }

    /**
     * Para a fala atual
     */
    parar() {
        if (this.suportado) {
            window.speechSynthesis.cancel();
        }
    }

    /**
     * Verifica se está falando
     */
    estaFalando() {
        return this.suportado && window.speechSynthesis.speaking;
    }
}

// Instância global do sintetizador de voz
const sintetizadorVoz = new SintetizadorVoz();