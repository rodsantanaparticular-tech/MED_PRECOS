/**
 * MED_PRECOS - Banco de dados mock
 * Dados de medicamentos, princípios ativos, genéricos e farmácias
 * Estrutura preparada para integração futura com API real
 */

// ==========================================================================
// Banco de Medicamentos
// Inclui nome comercial, princípio ativo, genéricos e descrição
// ==========================================================================
const BANCO_MEDICAMENTOS = [
    {
        id: 'med-001',
        nome: 'Dipirona',
        principioAtivo: 'Dipirona Sódica',
        descricao: 'Analgésico e antipirético (reduz febre e dor)',
        classes: ['Analgésico', 'Antipirético'],
        apresentacoes: ['500mg - 10 comprimidos', '500mg - 20 comprimidos', 'Solução oral'],
        genericos: [
            { nome: 'Dipirona Genérico', precoBase: 3.50 },
            { nome: 'Novalgina', precoBase: 12.90 },
            { nome: 'Dipiona', precoBase: 4.20 }
        ],
        precoReferencia: 15.90,
        sinonimias: ['dipirona', 'novalgina', 'dipiona', 'analgésico', 'febre', 'dor']
    },
    {
        id: 'med-002',
        nome: 'Paracetamol',
        principioAtivo: 'Paracetamol',
        descricao: 'Analgésico e antipirético (reduz febre e dor leve a moderada)',
        classes: ['Analgésico', 'Antipirético'],
        apresentacoes: ['500mg - 20 comprimidos', '500mg - 100 comprimidos', '750mg - 20 comprimidos'],
        genericos: [
            { nome: 'Paracetamol Genérico', precoBase: 4.80 },
            { nome: 'Tylenol', precoBase: 18.90 },
            { nome: 'Tylemax', precoBase: 16.50 },
            { nome: 'Acetofen', precoBase: 5.10 }
        ],
        precoReferencia: 18.90,
        sinonimias: ['paracetamol', 'tylenol', 'tylemax', 'acetofen', 'pacnol', 'febre', 'dor']
    },
    {
        id: 'med-003',
        nome: 'Ibuprofeno',
        principioAtivo: 'Ibuprofeno',
        descricao: 'Anti-inflamatório não esteroidal (AINE), analgésico e antipirético',
        classes: ['Anti-inflamatório', 'Analgésico', 'Antipirético'],
        apresentacoes: ['400mg - 20 comprimidos', '600mg - 20 comprimidos', 'Suspensão oral'],
        genericos: [
            { nome: 'Ibuprofeno Genérico', precoBase: 6.20 },
            { nome: 'Advil', precoBase: 19.90 },
            { nome: 'Alivium', precoBase: 17.80 },
            { nome: 'Ibufen', precoBase: 7.30 }
        ],
        precoReferencia: 19.90,
        sinonimias: ['ibuprofeno', 'advil', 'alivium', 'ibufen', 'inflamação', 'dor']
    },
    {
        id: 'med-004',
        nome: 'Amoxicilina',
        principioAtivo: 'Amoxicilina',
        descricao: 'Antibiótico de amplo espectro para infecções bacterianas',
        classes: ['Antibiótico'],
        apresentacoes: ['500mg - 21 cápsulas', '500mg/5ml - 150ml suspensão'],
        genericos: [
            { nome: 'Amoxicilina Genérica', precoBase: 11.50 },
            { nome: 'Amoxil', precoBase: 25.90 },
            { nome: 'Velamox', precoBase: 22.50 }
        ],
        precoReferencia: 25.90,
        sinonimias: ['amoxicilina', 'amoxil', 'velamox', 'antibiótico', 'infecção']
    },
    {
        id: 'med-005',
        nome: 'Losartana',
        principioAtivo: 'Losartana Potássica',
        descricao: 'Anti-hipertensivo (tratamento da pressão alta)',
        classes: ['Anti-hipertensivo'],
        apresentacoes: ['50mg - 30 comprimidos', '100mg - 30 comprimidos'],
        genericos: [
            { nome: 'Losartana Genérica', precoBase: 8.90 },
            { nome: 'Cozaar', precoBase: 42.50 },
            { nome: 'Losacor', precoBase: 10.20 }
        ],
        precoReferencia: 42.50,
        sinonimias: ['losartana', 'cozaar', 'losacor', 'pressão alta', 'hipertensão']
    },
    {
        id: 'med-006',
        nome: 'Omeprazol',
        principioAtivo: 'Omeprazol',
        descricao: 'Inibidor de bomba de prótons (tratamento de úlceras e refluxo)',
        classes: ['Antiulceroso', 'Inibidor de bomba de prótons'],
        apresentacoes: ['20mg - 28 cápsulas', '40mg - 28 cápsulas'],
        genericos: [
            { nome: 'Omeprazol Genérico', precoBase: 9.50 },
            { nome: 'Losec', precoBase: 38.90 },
            { nome: 'Omezol', precoBase: 10.80 },
            { nome: 'Prazol', precoBase: 9.90 }
        ],
        precoReferencia: 38.90,
        sinonimias: ['omeprazol', 'losec', 'omezol', 'prazol', 'refluxo', 'azia', 'úlcera']
    },
    {
        id: 'med-007',
        nome: 'Metformina',
        principioAtivo: 'Cloridrato de Metformina',
        descricao: 'Antidiabético oral (tratamento do diabetes tipo 2)',
        classes: ['Antidiabético'],
        apresentacoes: ['500mg - 30 comprimidos', '850mg - 30 comprimidos', '1g - 30 comprimidos'],
        genericos: [
            { nome: 'Metformina Genérica', precoBase: 7.80 },
            { nome: 'Glifage', precoBase: 21.50 },
            { nome: 'Glucoformin', precoBase: 8.90 }
        ],
        precoReferencia: 21.50,
        sinonimias: ['metformina', 'glifage', 'glucoformin', 'diabetes', 'açúcar no sangue']
    },
    {
        id: 'med-008',
        nome: 'Dorflex',
        principioAtivo: 'Dipirona + Orfenadrina + Cafeína',
        descricao: 'Relaxante muscular e analgésico (dores musculares e cólicas)',
        classes: ['Relaxante muscular', 'Analgésico'],
        apresentacoes: ['10 comprimidos', '30 comprimidos'],
        genericos: [
            { nome: 'Dorflex Genérico', precoBase: 8.50 },
            { nome: 'Miosan', precoBase: 9.90 }
        ],
        precoReferencia: 13.90,
        sinonimias: ['dorflex', 'miosan', 'relaxante muscular', 'cólica', 'dor muscular']
    },
    {
        id: 'med-009',
        nome: 'Cimetidina',
        principioAtivo: 'Cimetidina',
        descricao: 'Antiulceroso (reduz a produção de ácido no estômago)',
        classes: ['Antiulceroso', 'Antihistamínico H2'],
        apresentacoes: ['200mg - 12 comprimidos', '400mg - 12 comprimidos'],
        genericos: [
            { nome: 'Cimetidina Genérica', precoBase: 5.90 },
            { nome: 'Tagamet', precoBase: 16.80 }
        ],
        precoReferencia: 16.80,
        sinonimias: ['cimetidina', 'tagamet', 'úlcera', 'azia', 'estômago']
    },
    {
        id: 'med-010',
        nome: 'Captopril',
        principioAtivo: 'Captopril',
        descricao: 'Anti-hipertensivo (inibidor da ECA)',
        classes: ['Anti-hipertensivo'],
        apresentacoes: ['25mg - 30 comprimidos', '50mg - 30 comprimidos'],
        genericos: [
            { nome: 'Captopril Genérico', precoBase: 7.50 },
            { nome: 'Capoten', precoBase: 32.90 },
            { nome: 'Capoten-X', precoBase: 8.20 }
        ],
        precoReferencia: 32.90,
        sinonimias: ['captopril', 'capoten', 'pressão alta', 'hipertensão']
    },
    {
        id: 'med-011',
        nome: 'Aspirina',
        principioAtivo: 'Ácido Acetilsalicílico',
        descricao: 'Analgésico, antipirético e anti-inflamatório',
        classes: ['Analgésico', 'Antipirético', 'Anti-inflamatório'],
        apresentacoes: ['100mg - 30 comprimidos', '500mg - 20 comprimidos'],
        genericos: [
            { nome: 'AAS Genérico', precoBase: 4.90 },
            { nome: 'Buferin', precoBase: 15.50 },
            { nome: 'Melhoral', precoBase: 6.80 }
        ],
        precoReferencia: 15.50,
        sinonimias: ['aspirina', 'aas', 'buferin', 'melhoral', 'ácido acetilsalicílico', 'dor', 'febre']
    },
    {
        id: 'med-012',
        nome: 'Simvastatina',
        principioAtivo: 'Simvastatina',
        descricao: 'Redutor de colesterol (estatina)',
        classes: ['Estatina', 'Redutor de colesterol'],
        apresentacoes: ['10mg - 30 comprimidos', '20mg - 30 comprimidos', '40mg - 30 comprimidos'],
        genericos: [
            { nome: 'Simvastatina Genérica', precoBase: 9.80 },
            { nome: 'Zocor', precoBase: 48.90 },
            { nome: 'Sinvastatina', precoBase: 10.50 }
        ],
        precoReferencia: 48.90,
        sinonimias: ['simvastatina', 'zocor', 'colesterol', 'sinvastatina']
    },
    {
        id: 'med-013',
        nome: 'Sertralina',
        principioAtivo: 'Cloridrato de Sertralina',
        descricao: 'Antidepressivo (inibidor seletivo da recaptação de serotonina)',
        classes: ['Antidepressivo', 'ISRS'],
        apresentacoes: ['50mg - 30 comprimidos', '100mg - 30 comprimidos'],
        genericos: [
            { nome: 'Sertralina Genérica', precoBase: 12.50 },
            { nome: 'Zoloft', precoBase: 68.90 },
            { nome: 'Assert', precoBase: 15.80 }
        ],
        precoReferencia: 68.90,
        sinonimias: ['sertralina', 'zoloft', 'assert', 'antidepressivo', 'depressão']
    },
    {
        id: 'med-014',
        nome: 'Prednisona',
        principioAtivo: 'Prednisona',
        descricao: 'Corticosteroide (anti-inflamatório potente)',
        classes: ['Corticosteroide', 'Anti-inflamatório'],
        apresentacoes: ['5mg - 20 comprimidos', '20mg - 10 comprimidos'],
        genericos: [
            { nome: 'Prednisona Genérica', precoBase: 5.40 },
            { nome: 'Meticorten', precoBase: 19.90 }
        ],
        precoReferencia: 19.90,
        sinonimias: ['prednisona', 'meticorten', 'corticóide', 'anti-inflamatório']
    },
    {
        id: 'med-015',
        nome: 'Loratadina',
        principioAtivo: 'Loratadina',
        descricao: 'Anti-histamínico (tratamento de alergias)',
        classes: ['Anti-histamínico', 'Antialérgico'],
        apresentacoes: ['10mg - 12 comprimidos', '10mg - 30 comprimidos'],
        genericos: [
            { nome: 'Loratadina Genérica', precoBase: 4.50 },
            { nome: 'Claritin', precoBase: 21.90 },
            { nome: 'Loratamed', precoBase: 5.90 }
        ],
        precoReferencia: 21.90,
        sinonimias: ['loratadina', 'claritin', 'loratamed', 'alergia', 'antialérgico']
    },
    {
        id: 'med-016',
        nome: 'Ciprofloxacino',
        principioAtivo: 'Ciprofloxacino',
        descricao: 'Antibiótico (fluoroquinolona) para infecções bacterianas',
        classes: ['Antibiótico', 'Fluoroquinolona'],
        apresentacoes: ['500mg - 14 comprimidos', '250mg - 14 comprimidos'],
        genericos: [
            { nome: 'Ciprofloxacino Genérico', precoBase: 13.90 },
            { nome: 'Cipro', precoBase: 35.90 },
            { nome: 'Ciflox', precoBase: 16.50 }
        ],
        precoReferencia: 35.90,
        sinonimias: ['ciprofloxacino', 'cipro', 'ciflox', 'antibiótico', 'infecção']
    },
    {
        id: 'med-017',
        nome: 'Ginkgo Biloba',
        principioAtivo: 'Extrato de Ginkgo Biloba',
        descricao: 'Fitoterápico (melhora da memória e circulação)',
        classes: ['Fitoterápico'],
        apresentacoes: ['80mg - 30 cápsulas', '120mg - 30 cápsulas'],
        genericos: [
            { nome: 'Ginkgo Biloba Genérico', precoBase: 9.90 },
            { nome: 'Tebonin', precoBase: 42.50 },
            { nome: 'Ginkomed', precoBase: 11.80 }
        ],
        precoReferencia: 42.50,
        sinonimias: ['ginkgo biloba', 'tebonin', 'ginkomed', 'memória', 'circulação']
    },
    {
        id: 'med-018',
        nome: 'Vitamina D',
        principioAtivo: 'Colecalciferol (Vitamina D3)',
        descricao: 'Vitamina essencial para a saúde óssea e imunidade',
        classes: ['Vitamina', 'Suplemento'],
        apresentacoes: ['1000 UI - 30 cápsulas', '5000 UI - 30 cápsulas', '2000 UI - 60 cápsulas'],
        genericos: [
            { nome: 'Vitamina D3 Genérica', precoBase: 14.90 },
            { nome: 'DePura', precoBase: 39.90 },
            { nome: 'Sundown', precoBase: 25.90 },
            { nome: 'Addera D3', precoBase: 45.90 }
        ],
        precoReferencia: 45.90,
        sinonimias: ['vitamina d', 'colecalciferol', 'vitamina d3', 'depura', 'sundown', 'addera', 'cálcio']
    },
    {
        id: 'med-019',
        nome: 'Cálcio',
        principioAtivo: 'Carbonato de Cálcio',
        descricao: 'Suplemento mineral para saúde óssea',
        classes: ['Suplemento', 'Mineral'],
        apresentacoes: ['500mg - 30 comprimidos', '600mg - 60 comprimidos'],
        genericos: [
            { nome: 'Cálcio Genérico', precoBase: 8.90 },
            { nome: 'OstroCálcio', precoBase: 42.90 },
            { nome: 'Cálcio D', precoBase: 12.50 }
        ],
        precoReferencia: 42.90,
        sinonimias: ['cálcio', 'carbonato de cálcio', 'ostrocalcio', 'ossos', 'osteoporose']
    },
    {
        id: 'med-020',
        nome: 'Glucosamina',
        principioAtivo: 'Sulfato de Glucosamina',
        descricao: 'Suplemento para saúde das articulações',
        classes: ['Suplemento'],
        apresentacoes: ['500mg - 30 cápsulas', '500mg - 60 cápsulas', '1500mg - 30 sachês'],
        genericos: [
            { nome: 'Glucosamina Genérica', precoBase: 24.90 },
            { nome: 'Artril', precoBase: 68.90 },
            { nome: 'Cartilart', precoBase: 32.50 }
        ],
        precoReferencia: 68.90,
        sinonimias: ['glucosamina', 'artril', 'cartilart', 'articulação', 'joelho', 'artrose']
    },

    // ----------------------------------------------------------------------
    // Ampliação da base: analgésicos/anti-inflamatórios adicionais
    // ----------------------------------------------------------------------
    {
        id: 'med-021', nome: 'Nimesulida', principioAtivo: 'Nimesulida',
        descricao: 'Anti-inflamatório não esteroidal (AINE), analgésico e antipirético',
        classes: ['Anti-inflamatório', 'Analgésico'],
        apresentacoes: ['100mg - 12 comprimidos'],
        genericos: [{ nome: 'Nimesulida Genérica', precoBase: 5.90 }, { nome: 'Nisulid', precoBase: 16.50 }, { nome: 'Scaflam', precoBase: 15.20 }],
        precoReferencia: 16.50,
        sinonimias: ['nimesulida', 'nisulid', 'scaflam', 'inflamação', 'dor']
    },
    {
        id: 'med-022', nome: 'Diclofenaco', principioAtivo: 'Diclofenaco de Potássio',
        descricao: 'Anti-inflamatório não esteroidal (AINE) para dores e inflamações',
        classes: ['Anti-inflamatório', 'Analgésico'],
        apresentacoes: ['50mg - 20 comprimidos', 'Gel 1% - 60g'],
        genericos: [{ nome: 'Diclofenaco Genérico', precoBase: 6.50 }, { nome: 'Cataflam', precoBase: 22.90 }, { nome: 'Voltaren', precoBase: 24.90 }],
        precoReferencia: 24.90,
        sinonimias: ['diclofenaco', 'cataflam', 'voltaren', 'inflamação', 'dor nas costas']
    },
    {
        id: 'med-023', nome: 'Cetoprofeno', principioAtivo: 'Cetoprofeno',
        descricao: 'Anti-inflamatório não esteroidal (AINE), analgésico',
        classes: ['Anti-inflamatório', 'Analgésico'],
        apresentacoes: ['100mg - 20 comprimidos'],
        genericos: [{ nome: 'Cetoprofeno Genérico', precoBase: 8.90 }, { nome: 'Profenid', precoBase: 23.50 }],
        precoReferencia: 23.50,
        sinonimias: ['cetoprofeno', 'profenid', 'inflamação', 'dor']
    },
    {
        id: 'med-024', nome: 'Tramadol', principioAtivo: 'Cloridrato de Tramadol',
        descricao: 'Analgésico opioide para dores moderadas a intensas',
        classes: ['Analgésico opioide'],
        apresentacoes: ['50mg - 20 cápsulas'],
        genericos: [{ nome: 'Tramadol Genérico', precoBase: 14.90 }, { nome: 'Tramal', precoBase: 32.90 }],
        precoReferencia: 32.90,
        sinonimias: ['tramadol', 'tramal', 'dor forte', 'analgésico opioide']
    },

    // ----------------------------------------------------------------------
    // Antibióticos adicionais
    // ----------------------------------------------------------------------
    {
        id: 'med-025', nome: 'Azitromicina', principioAtivo: 'Azitromicina Di-Hidratada',
        descricao: 'Antibiótico (macrolídeo) para infecções respiratórias e de pele',
        classes: ['Antibiótico'],
        apresentacoes: ['500mg - 3 comprimidos'],
        genericos: [{ nome: 'Azitromicina Genérica', precoBase: 13.90 }, { nome: 'Zitromax', precoBase: 38.90 }],
        precoReferencia: 38.90,
        sinonimias: ['azitromicina', 'zitromax', 'antibiótico', 'infecção']
    },
    {
        id: 'med-026', nome: 'Cefalexina', principioAtivo: 'Cefalexina',
        descricao: 'Antibiótico (cefalosporina) de amplo espectro',
        classes: ['Antibiótico'],
        apresentacoes: ['500mg - 8 cápsulas'],
        genericos: [{ nome: 'Cefalexina Genérica', precoBase: 10.90 }, { nome: 'Keflex', precoBase: 29.90 }],
        precoReferencia: 29.90,
        sinonimias: ['cefalexina', 'keflex', 'antibiótico', 'infecção']
    },
    {
        id: 'med-027', nome: 'Amoxicilina + Clavulanato', principioAtivo: 'Amoxicilina Tri-Hidratada + Clavulanato de Potássio',
        descricao: 'Antibiótico de amplo espectro associado a inibidor de betalactamase',
        classes: ['Antibiótico'],
        apresentacoes: ['875mg + 125mg - 14 comprimidos'],
        genericos: [{ nome: 'Amoxicilina + Clavulanato Genérico', precoBase: 24.90 }, { nome: 'Clavulin', precoBase: 52.90 }],
        precoReferencia: 52.90,
        sinonimias: ['clavulin', 'amoxicilina clavulanato', 'antibiótico', 'infecção']
    },
    {
        id: 'med-028', nome: 'Claritromicina', principioAtivo: 'Claritromicina',
        descricao: 'Antibiótico (macrolídeo) para infecções respiratórias',
        classes: ['Antibiótico'],
        apresentacoes: ['500mg - 10 comprimidos'],
        genericos: [{ nome: 'Claritromicina Genérica', precoBase: 22.90 }, { nome: 'Klaricid', precoBase: 58.90 }],
        precoReferencia: 58.90,
        sinonimias: ['claritromicina', 'klaricid', 'antibiótico', 'infecção']
    },
    {
        id: 'med-029', nome: 'Sulfametoxazol + Trimetoprima', principioAtivo: 'Sulfametoxazol + Trimetoprima',
        descricao: 'Antibiótico associado para infecções urinárias e respiratórias',
        classes: ['Antibiótico'],
        apresentacoes: ['400mg + 80mg - 20 comprimidos'],
        genericos: [{ nome: 'Sulfametoxazol + Trimetoprima Genérico', precoBase: 9.90 }, { nome: 'Bactrim', precoBase: 24.50 }],
        precoReferencia: 24.50,
        sinonimias: ['bactrim', 'sulfametoxazol', 'trimetoprima', 'infecção urinária', 'antibiótico']
    },

    // ----------------------------------------------------------------------
    // Cardiovascular / pressão / diabetes / colesterol adicionais
    // ----------------------------------------------------------------------
    {
        id: 'med-030', nome: 'Enalapril', principioAtivo: 'Maleato de Enalapril',
        descricao: 'Anti-hipertensivo (inibidor da ECA)',
        classes: ['Anti-hipertensivo'],
        apresentacoes: ['10mg - 30 comprimidos', '20mg - 30 comprimidos'],
        genericos: [{ nome: 'Enalapril Genérico', precoBase: 6.90 }, { nome: 'Renitec', precoBase: 28.90 }],
        precoReferencia: 28.90,
        sinonimias: ['enalapril', 'renitec', 'pressão alta', 'hipertensão']
    },
    {
        id: 'med-031', nome: 'Atenolol', principioAtivo: 'Atenolol',
        descricao: 'Anti-hipertensivo (betabloqueador)',
        classes: ['Anti-hipertensivo', 'Betabloqueador'],
        apresentacoes: ['25mg - 30 comprimidos', '50mg - 30 comprimidos'],
        genericos: [{ nome: 'Atenolol Genérico', precoBase: 6.20 }, { nome: 'Atenol', precoBase: 19.90 }],
        precoReferencia: 19.90,
        sinonimias: ['atenolol', 'atenol', 'pressão alta', 'hipertensão', 'coração']
    },
    {
        id: 'med-032', nome: 'Anlodipino', principioAtivo: 'Besilato de Anlodipino',
        descricao: 'Anti-hipertensivo (bloqueador de canal de cálcio)',
        classes: ['Anti-hipertensivo'],
        apresentacoes: ['5mg - 30 comprimidos', '10mg - 30 comprimidos'],
        genericos: [{ nome: 'Anlodipino Genérico', precoBase: 7.50 }, { nome: 'Norvasc', precoBase: 34.90 }],
        precoReferencia: 34.90,
        sinonimias: ['anlodipino', 'amlodipino', 'norvasc', 'pressão alta', 'hipertensão']
    },
    {
        id: 'med-033', nome: 'Hidroclorotiazida', principioAtivo: 'Hidroclorotiazida',
        descricao: 'Diurético usado no tratamento da pressão alta',
        classes: ['Diurético', 'Anti-hipertensivo'],
        apresentacoes: ['25mg - 30 comprimidos'],
        genericos: [{ nome: 'Hidroclorotiazida Genérica', precoBase: 5.50 }, { nome: 'Clorana', precoBase: 14.90 }],
        precoReferencia: 14.90,
        sinonimias: ['hidroclorotiazida', 'clorana', 'diurético', 'pressão alta', 'inchaço']
    },
    {
        id: 'med-034', nome: 'Propranolol', principioAtivo: 'Cloridrato de Propranolol',
        descricao: 'Betabloqueador para pressão alta, enxaqueca e ansiedade',
        classes: ['Anti-hipertensivo', 'Betabloqueador'],
        apresentacoes: ['40mg - 30 comprimidos'],
        genericos: [{ nome: 'Propranolol Genérico', precoBase: 6.90 }, { nome: 'Inderal', precoBase: 21.90 }],
        precoReferencia: 21.90,
        sinonimias: ['propranolol', 'inderal', 'pressão alta', 'ansiedade', 'enxaqueca']
    },
    {
        id: 'med-035', nome: 'Valsartana', principioAtivo: 'Valsartana',
        descricao: 'Anti-hipertensivo (bloqueador do receptor de angiotensina II)',
        classes: ['Anti-hipertensivo'],
        apresentacoes: ['80mg - 30 comprimidos', '160mg - 30 comprimidos'],
        genericos: [{ nome: 'Valsartana Genérica', precoBase: 12.90 }, { nome: 'Diovan', precoBase: 54.90 }],
        precoReferencia: 54.90,
        sinonimias: ['valsartana', 'diovan', 'pressão alta', 'hipertensão']
    },
    {
        id: 'med-036', nome: 'Insulina NPH', principioAtivo: 'Insulina Humana NPH',
        descricao: 'Insulina de ação intermediária para controle do diabetes',
        classes: ['Antidiabético'],
        apresentacoes: ['100 UI/ml - Frasco 10ml', 'Caneta 3ml'],
        genericos: [{ nome: 'Insulina NPH Genérica', precoBase: 32.90 }, { nome: 'Humulin N', precoBase: 68.90 }],
        precoReferencia: 68.90,
        sinonimias: ['insulina', 'humulin', 'diabetes', 'açúcar no sangue']
    },
    {
        id: 'med-037', nome: 'Glibenclamida', principioAtivo: 'Glibenclamida',
        descricao: 'Antidiabético oral (estimula a produção de insulina)',
        classes: ['Antidiabético'],
        apresentacoes: ['5mg - 30 comprimidos'],
        genericos: [{ nome: 'Glibenclamida Genérica', precoBase: 4.90 }, { nome: 'Daonil', precoBase: 15.90 }],
        precoReferencia: 15.90,
        sinonimias: ['glibenclamida', 'daonil', 'diabetes']
    },
    {
        id: 'med-038', nome: 'Gliclazida', principioAtivo: 'Gliclazida',
        descricao: 'Antidiabético oral de liberação prolongada',
        classes: ['Antidiabético'],
        apresentacoes: ['30mg - 30 comprimidos', '60mg - 30 comprimidos'],
        genericos: [{ nome: 'Gliclazida Genérica', precoBase: 14.90 }, { nome: 'Diamicron', precoBase: 42.90 }],
        precoReferencia: 42.90,
        sinonimias: ['gliclazida', 'diamicron', 'diabetes']
    },
    {
        id: 'med-039', nome: 'Atorvastatina', principioAtivo: 'Atorvastatina Cálcica',
        descricao: 'Redutor de colesterol (estatina)',
        classes: ['Estatina', 'Redutor de colesterol'],
        apresentacoes: ['10mg - 30 comprimidos', '20mg - 30 comprimidos', '40mg - 30 comprimidos'],
        genericos: [{ nome: 'Atorvastatina Genérica', precoBase: 13.90 }, { nome: 'Lipitor', precoBase: 62.90 }],
        precoReferencia: 62.90,
        sinonimias: ['atorvastatina', 'lipitor', 'colesterol']
    },
    {
        id: 'med-040', nome: 'Rosuvastatina', principioAtivo: 'Rosuvastatina Cálcica',
        descricao: 'Redutor de colesterol (estatina de alta potência)',
        classes: ['Estatina', 'Redutor de colesterol'],
        apresentacoes: ['10mg - 30 comprimidos', '20mg - 30 comprimidos'],
        genericos: [{ nome: 'Rosuvastatina Genérica', precoBase: 18.90 }, { nome: 'Crestor', precoBase: 78.90 }],
        precoReferencia: 78.90,
        sinonimias: ['rosuvastatina', 'crestor', 'colesterol']
    },

    // ----------------------------------------------------------------------
    // Gastro / náusea adicionais
    // ----------------------------------------------------------------------
    {
        id: 'med-041', nome: 'Pantoprazol', principioAtivo: 'Pantoprazol Sódico',
        descricao: 'Inibidor de bomba de prótons para refluxo e úlceras',
        classes: ['Antiulceroso', 'Inibidor de bomba de prótons'],
        apresentacoes: ['20mg - 28 comprimidos', '40mg - 28 comprimidos'],
        genericos: [{ nome: 'Pantoprazol Genérico', precoBase: 10.50 }, { nome: 'Pantozol', precoBase: 36.90 }],
        precoReferencia: 36.90,
        sinonimias: ['pantoprazol', 'pantozol', 'refluxo', 'azia']
    },
    {
        id: 'med-042', nome: 'Ranitidina', principioAtivo: 'Cloridrato de Ranitidina',
        descricao: 'Antiulceroso (reduz a produção de ácido no estômago)',
        classes: ['Antiulceroso'],
        apresentacoes: ['150mg - 20 comprimidos'],
        genericos: [{ nome: 'Ranitidina Genérica', precoBase: 6.50 }, { nome: 'Antak', precoBase: 18.90 }],
        precoReferencia: 18.90,
        sinonimias: ['ranitidina', 'antak', 'azia', 'úlcera']
    },
    {
        id: 'med-043', nome: 'Domperidona', principioAtivo: 'Domperidona',
        descricao: 'Antiemético para náusea, enjoo e má digestão',
        classes: ['Antiemético'],
        apresentacoes: ['10mg - 30 comprimidos'],
        genericos: [{ nome: 'Domperidona Genérica', precoBase: 9.90 }, { nome: 'Motilium', precoBase: 27.90 }],
        precoReferencia: 27.90,
        sinonimias: ['domperidona', 'motilium', 'enjoo', 'náusea', 'má digestão']
    },
    {
        id: 'med-044', nome: 'Bromoprida', principioAtivo: 'Bromoprida',
        descricao: 'Antiemético para náusea, enjoo e vômito',
        classes: ['Antiemético'],
        apresentacoes: ['10mg - 20 comprimidos', 'Solução oral'],
        genericos: [{ nome: 'Bromoprida Genérica', precoBase: 7.90 }, { nome: 'Digesan', precoBase: 15.90 }],
        precoReferencia: 15.90,
        sinonimias: ['bromoprida', 'digesan', 'enjoo', 'náusea', 'vômito']
    },
    {
        id: 'med-045', nome: 'Hioscina', principioAtivo: 'Butilbrometo de Escopolamina',
        descricao: 'Antiespasmódico para cólicas abdominais e intestinais',
        classes: ['Antiespasmódico'],
        apresentacoes: ['10mg - 20 comprimidos', 'Gotas'],
        genericos: [{ nome: 'Hioscina Genérica', precoBase: 8.90 }, { nome: 'Buscopan', precoBase: 24.90 }, { nome: 'Buscopan Composto', precoBase: 29.90 }],
        precoReferencia: 29.90,
        sinonimias: ['hioscina', 'buscopan', 'escopolamina', 'cólica', 'dor de barriga']
    },
    {
        id: 'med-046', nome: 'Hidróxido de Alumínio + Magnésio', principioAtivo: 'Hidróxido de Alumínio + Hidróxido de Magnésio',
        descricao: 'Antiácido para azia e queimação estomacal',
        classes: ['Antiácido'],
        apresentacoes: ['Suspensão oral 240ml', 'Comprimidos mastigáveis'],
        genericos: [{ nome: 'Antiácido Genérico', precoBase: 9.90 }, { nome: 'Mylanta', precoBase: 22.90 }, { nome: 'Pepsamar', precoBase: 19.90 }],
        precoReferencia: 22.90,
        sinonimias: ['mylanta', 'pepsamar', 'antiácido', 'azia', 'queimação']
    },

    // ----------------------------------------------------------------------
    // Saúde mental / neurológico adicionais
    // ----------------------------------------------------------------------
    {
        id: 'med-047', nome: 'Fluoxetina', principioAtivo: 'Cloridrato de Fluoxetina',
        descricao: 'Antidepressivo (inibidor seletivo da recaptação de serotonina)',
        classes: ['Antidepressivo', 'ISRS'],
        apresentacoes: ['20mg - 30 cápsulas'],
        genericos: [{ nome: 'Fluoxetina Genérica', precoBase: 9.90 }, { nome: 'Prozac', precoBase: 48.90 }, { nome: 'Daforin', precoBase: 32.90 }],
        precoReferencia: 48.90,
        sinonimias: ['fluoxetina', 'prozac', 'daforin', 'antidepressivo', 'depressão']
    },
    {
        id: 'med-048', nome: 'Escitalopram', principioAtivo: 'Oxalato de Escitalopram',
        descricao: 'Antidepressivo (inibidor seletivo da recaptação de serotonina)',
        classes: ['Antidepressivo', 'ISRS'],
        apresentacoes: ['10mg - 30 comprimidos', '15mg - 30 comprimidos'],
        genericos: [{ nome: 'Escitalopram Genérico', precoBase: 16.90 }, { nome: 'Lexapro', precoBase: 72.90 }],
        precoReferencia: 72.90,
        sinonimias: ['escitalopram', 'lexapro', 'antidepressivo', 'ansiedade', 'depressão']
    },
    {
        id: 'med-049', nome: 'Bupropiona', principioAtivo: 'Cloridrato de Bupropiona',
        descricao: 'Antidepressivo também usado no tratamento para parar de fumar',
        classes: ['Antidepressivo'],
        apresentacoes: ['150mg - 30 comprimidos', '300mg - 30 comprimidos'],
        genericos: [{ nome: 'Bupropiona Genérica', precoBase: 24.90 }, { nome: 'Wellbutrin XL', precoBase: 89.90 }, { nome: 'Zyban', precoBase: 84.90 }],
        precoReferencia: 89.90,
        sinonimias: ['bupropiona', 'wellbutrin', 'wilbutrin', 'zyban', 'antidepressivo', 'parar de fumar']
    },
    {
        id: 'med-050', nome: 'Diazepam', principioAtivo: 'Diazepam',
        descricao: 'Ansiolítico (benzodiazepínico) para ansiedade e insônia',
        classes: ['Ansiolítico', 'Benzodiazepínico'],
        apresentacoes: ['5mg - 20 comprimidos', '10mg - 20 comprimidos'],
        genericos: [{ nome: 'Diazepam Genérico', precoBase: 6.90 }, { nome: 'Valium', precoBase: 19.90 }],
        precoReferencia: 19.90,
        sinonimias: ['diazepam', 'valium', 'ansiedade', 'insônia']
    },
    {
        id: 'med-051', nome: 'Clonazepam', principioAtivo: 'Clonazepam',
        descricao: 'Ansiolítico e anticonvulsivante (benzodiazepínico)',
        classes: ['Ansiolítico', 'Anticonvulsivante', 'Benzodiazepínico'],
        apresentacoes: ['0,5mg - 30 comprimidos', '2mg - 30 comprimidos', 'Gotas'],
        genericos: [{ nome: 'Clonazepam Genérico', precoBase: 8.90 }, { nome: 'Rivotril', precoBase: 24.90 }],
        precoReferencia: 24.90,
        sinonimias: ['clonazepam', 'rivotril', 'ansiedade', 'convulsão', 'pânico']
    },
    {
        id: 'med-052', nome: 'Alprazolam', principioAtivo: 'Alprazolam',
        descricao: 'Ansiolítico (benzodiazepínico) para transtornos de ansiedade',
        classes: ['Ansiolítico', 'Benzodiazepínico'],
        apresentacoes: ['0,5mg - 30 comprimidos', '1mg - 30 comprimidos'],
        genericos: [{ nome: 'Alprazolam Genérico', precoBase: 9.90 }, { nome: 'Frontal', precoBase: 26.90 }],
        precoReferencia: 26.90,
        sinonimias: ['alprazolam', 'frontal', 'ansiedade', 'pânico']
    },
    {
        id: 'med-053', nome: 'Amitriptilina', principioAtivo: 'Cloridrato de Amitriptilina',
        descricao: 'Antidepressivo tricíclico, também usado para dor crônica e enxaqueca',
        classes: ['Antidepressivo', 'Tricíclico'],
        apresentacoes: ['25mg - 20 comprimidos'],
        genericos: [{ nome: 'Amitriptilina Genérica', precoBase: 5.90 }, { nome: 'Tryptanol', precoBase: 17.90 }],
        precoReferencia: 17.90,
        sinonimias: ['amitriptilina', 'tryptanol', 'antidepressivo', 'dor crônica', 'enxaqueca']
    },
    {
        id: 'med-054', nome: 'Primidona', principioAtivo: 'Primidona',
        descricao: 'Anticonvulsivante usado no tratamento de epilepsia e tremor essencial',
        classes: ['Anticonvulsivante'],
        apresentacoes: ['100mg - 20 comprimidos', '250mg - 20 comprimidos'],
        genericos: [{ nome: 'Primidona Genérica', precoBase: 22.90 }],
        precoReferencia: 22.90,
        sinonimias: ['primidona', 'primid', 'epilepsia', 'convulsão', 'tremor']
    },
    {
        id: 'med-055', nome: 'Carbamazepina', principioAtivo: 'Carbamazepina',
        descricao: 'Anticonvulsivante usado no tratamento de epilepsia e neuralgia',
        classes: ['Anticonvulsivante'],
        apresentacoes: ['200mg - 20 comprimidos', '400mg - 20 comprimidos'],
        genericos: [{ nome: 'Carbamazepina Genérica', precoBase: 11.90 }, { nome: 'Tegretol', precoBase: 34.90 }],
        precoReferencia: 34.90,
        sinonimias: ['carbamazepina', 'tegretol', 'epilepsia', 'convulsão', 'neuralgia']
    },
    {
        id: 'med-056', nome: 'Levetiracetam', principioAtivo: 'Levetiracetam',
        descricao: 'Anticonvulsivante usado no tratamento de epilepsia',
        classes: ['Anticonvulsivante'],
        apresentacoes: ['500mg - 30 comprimidos', '750mg - 30 comprimidos'],
        genericos: [{ nome: 'Levetiracetam Genérico', precoBase: 28.90 }, { nome: 'Keppra', precoBase: 82.90 }],
        precoReferencia: 82.90,
        sinonimias: ['levetiracetam', 'keppra', 'epilepsia', 'convulsão']
    },
    {
        id: 'med-057', nome: 'Ciclobenzaprina', principioAtivo: 'Cloridrato de Ciclobenzaprina',
        descricao: 'Relaxante muscular para dores e espasmos musculares',
        classes: ['Relaxante muscular'],
        apresentacoes: ['5mg - 20 comprimidos', '10mg - 20 comprimidos'],
        genericos: [{ nome: 'Ciclobenzaprina Genérica', precoBase: 9.50 }, { nome: 'Cicloflex', precoBase: 21.90 }],
        precoReferencia: 21.90,
        sinonimias: ['ciclobenzaprina', 'cicloflex', 'relaxante muscular', 'dor muscular', 'espasmo']
    },

    // ----------------------------------------------------------------------
    // Alergia / respiratório / tireoide adicionais
    // ----------------------------------------------------------------------
    {
        id: 'med-058', nome: 'Cetirizina', principioAtivo: 'Dicloridrato de Cetirizina',
        descricao: 'Anti-histamínico para rinite alérgica e urticária',
        classes: ['Anti-histamínico', 'Antialérgico'],
        apresentacoes: ['10mg - 10 comprimidos'],
        genericos: [{ nome: 'Cetirizina Genérica', precoBase: 6.90 }, { nome: 'Zyrtec', precoBase: 23.90 }],
        precoReferencia: 23.90,
        sinonimias: ['cetirizina', 'zyrtec', 'alergia', 'rinite', 'urticária']
    },
    {
        id: 'med-059', nome: 'Desloratadina', principioAtivo: 'Desloratadina',
        descricao: 'Anti-histamínico não sedativo para alergias',
        classes: ['Anti-histamínico', 'Antialérgico'],
        apresentacoes: ['5mg - 10 comprimidos', 'Xarope'],
        genericos: [{ nome: 'Desloratadina Genérica', precoBase: 9.90 }, { nome: 'Desalex', precoBase: 32.90 }],
        precoReferencia: 32.90,
        sinonimias: ['desloratadina', 'desalex', 'alergia', 'rinite']
    },
    {
        id: 'med-060', nome: 'Prednisolona', principioAtivo: 'Prednisolona',
        descricao: 'Corticosteroide anti-inflamatório, comum em xarope infantil',
        classes: ['Corticosteroide', 'Anti-inflamatório'],
        apresentacoes: ['3mg/ml - Solução oral 60ml', '20mg - 10 comprimidos'],
        genericos: [{ nome: 'Prednisolona Genérica', precoBase: 12.90 }, { nome: 'Predsim', precoBase: 24.90 }],
        precoReferencia: 24.90,
        sinonimias: ['prednisolona', 'predsim', 'corticóide', 'anti-inflamatório']
    },
    {
        id: 'med-061', nome: 'Salbutamol', principioAtivo: 'Sulfato de Salbutamol',
        descricao: 'Broncodilatador de ação rápida (bombinha) para asma e falta de ar',
        classes: ['Broncodilatador'],
        apresentacoes: ['Aerossol 100mcg/dose - 200 doses'],
        genericos: [{ nome: 'Salbutamol Genérico', precoBase: 18.90 }, { nome: 'Aerolin', precoBase: 34.90 }],
        precoReferencia: 34.90,
        sinonimias: ['salbutamol', 'aerolin', 'bombinha', 'asma', 'falta de ar']
    },
    {
        id: 'med-062', nome: 'Budesonida', principioAtivo: 'Budesonida',
        descricao: 'Corticosteroide inalatório para asma e bronquite',
        classes: ['Broncodilatador', 'Corticosteroide'],
        apresentacoes: ['Aerossol 200mcg/dose - 200 doses'],
        genericos: [{ nome: 'Budesonida Genérica', precoBase: 26.90 }, { nome: 'Busonid', precoBase: 45.90 }],
        precoReferencia: 45.90,
        sinonimias: ['budesonida', 'busonid', 'asma', 'bronquite']
    },
    {
        id: 'med-063', nome: 'Levotiroxina', principioAtivo: 'Levotiroxina Sódica',
        descricao: 'Hormônio usado no tratamento do hipotireoidismo',
        classes: ['Hormônio tireoidiano'],
        apresentacoes: ['25mcg - 30 comprimidos', '50mcg - 30 comprimidos', '100mcg - 30 comprimidos'],
        genericos: [{ nome: 'Levotiroxina Genérica', precoBase: 9.90 }, { nome: 'Puran T4', precoBase: 26.90 }, { nome: 'Synthroid', precoBase: 28.90 }],
        precoReferencia: 28.90,
        sinonimias: ['levotiroxina', 'puran t4', 'synthroid', 'tireoide', 'hipotireoidismo']
    },

    // ----------------------------------------------------------------------
    // Enxaqueca / suplementos adicionais
    // ----------------------------------------------------------------------
    {
        id: 'med-064', nome: 'Sumatriptana', principioAtivo: 'Succinato de Sumatriptana',
        descricao: 'Medicamento específico para crises de enxaqueca',
        classes: ['Antimigranoso'],
        apresentacoes: ['50mg - 2 comprimidos', '100mg - 2 comprimidos'],
        genericos: [{ nome: 'Sumatriptana Genérica', precoBase: 24.90 }, { nome: 'Sumax', precoBase: 48.90 }],
        precoReferencia: 48.90,
        sinonimias: ['sumatriptana', 'sumax', 'enxaqueca', 'dor de cabeça forte']
    },
    {
        id: 'med-065', nome: 'Neosaldina', principioAtivo: 'Dipirona + Cloridrato de Isometepteno + Cafeína',
        descricao: 'Analgésico para dores de cabeça e enxaqueca',
        classes: ['Analgésico', 'Antimigranoso'],
        apresentacoes: ['20 comprimidos', 'Gotas'],
        genericos: [{ nome: 'Enxak', precoBase: 12.90 }, { nome: 'Neosaldina', precoBase: 18.90 }],
        precoReferencia: 18.90,
        sinonimias: ['neosaldina', 'enxak', 'enxaqueca', 'dor de cabeça']
    },
    {
        id: 'med-066', nome: 'Sulfato Ferroso', principioAtivo: 'Sulfato Ferroso',
        descricao: 'Suplemento de ferro para tratamento e prevenção da anemia',
        classes: ['Suplemento', 'Mineral'],
        apresentacoes: ['40mg - 30 comprimidos', 'Gotas'],
        genericos: [{ nome: 'Sulfato Ferroso Genérico', precoBase: 6.90 }, { nome: 'Combiron', precoBase: 22.90 }, { nome: 'Noripurum', precoBase: 32.90 }],
        precoReferencia: 32.90,
        sinonimias: ['sulfato ferroso', 'ferro', 'combiron', 'noripurum', 'anemia']
    },
    {
        id: 'med-067', nome: 'Ácido Fólico', principioAtivo: 'Ácido Fólico (Vitamina B9)',
        descricao: 'Suplemento vitamínico, comum na gestação e em anemias',
        classes: ['Vitamina', 'Suplemento'],
        apresentacoes: ['5mg - 30 comprimidos'],
        genericos: [{ nome: 'Ácido Fólico Genérico', precoBase: 5.90 }],
        precoReferencia: 5.90,
        sinonimias: ['acido folico', 'vitamina b9', 'folato', 'gestante', 'gravidez']
    },
    {
        id: 'med-068', nome: 'Complexo B', principioAtivo: 'Vitaminas do Complexo B',
        descricao: 'Suplemento vitamínico para energia e saúde do sistema nervoso',
        classes: ['Vitamina', 'Suplemento'],
        apresentacoes: ['30 comprimidos', '60 comprimidos'],
        genericos: [{ nome: 'Complexo B Genérico', precoBase: 12.90 }, { nome: 'Neurotropan', precoBase: 29.90 }],
        precoReferencia: 29.90,
        sinonimias: ['complexo b', 'neurotropan', 'vitamina b', 'energia', 'cansaço']
    },
    {
        id: 'med-069', nome: 'Ômega 3', principioAtivo: 'Óleo de Peixe (EPA + DHA)',
        descricao: 'Suplemento para saúde cardiovascular e cerebral',
        classes: ['Suplemento'],
        apresentacoes: ['1000mg - 60 cápsulas', '1000mg - 120 cápsulas'],
        genericos: [{ nome: 'Ômega 3 Genérico', precoBase: 24.90 }, { nome: 'Epaplus', precoBase: 54.90 }],
        precoReferencia: 54.90,
        sinonimias: ['omega 3', 'oleo de peixe', 'epaplus', 'colesterol', 'coração']
    },
    {
        id: 'med-070', nome: 'Magnésio Dimalato', principioAtivo: 'Dimalato de Magnésio',
        descricao: 'Suplemento mineral para cãibras, cansaço e saúde muscular',
        classes: ['Suplemento', 'Mineral'],
        apresentacoes: ['30 cápsulas', '60 cápsulas'],
        genericos: [{ nome: 'Magnésio Dimalato Genérico', precoBase: 22.90 }, { nome: 'Magnelive', precoBase: 39.90 }],
        precoReferencia: 39.90,
        sinonimias: ['magnesio dimalato', 'magnelive', 'magnesio', 'caibra', 'cansaço']
    }
];

// ==========================================================================
// Banco de Farmácias
// Inclui localização, horários, coordenadas e preços
// ==========================================================================
const BANCO_FARMACIAS = [
    {
        id: 'far-001',
        nome: 'Farmácia São Paulo',
        endereco: 'Rua das Flores, 123 - Centro',
        cidade: 'São Paulo',
        cep: '01310-100',
        bairro: 'Centro',
        telefone: '(11) 3333-0001',
        latitude: -23.5505,
        longitude: -46.6333,
        horario: {
            abertura: 7,
            fechamento: 22,
            domingoAberto: true,
            domingoAbertura: 8,
            domingoFechamento: 14
        },
        fatorPreco: 1.0,
        possuiDelivery: true,
        entregaEm: '30 min'
    },
    {
        id: 'far-002',
        nome: 'Droga Raia',
        endereco: 'Av. Paulista, 1578 - Bela Vista',
        cidade: 'São Paulo',
        cep: '01310-200',
        bairro: 'Bela Vista',
        telefone: '(11) 3333-0002',
        latitude: -23.5620,
        longitude: -46.6540,
        horario: {
            abertura: 8,
            fechamento: 23,
            domingoAberto: true,
            domingoAbertura: 8,
            domingoFechamento: 20
        },
        fatorPreco: 1.15,
        possuiDelivery: true,
        entregaEm: '45 min'
    },
    {
        id: 'far-003',
        nome: 'Pague Menos',
        endereco: 'Rua Augusta, 2000 - Cerqueira César',
        cidade: 'São Paulo',
        cep: '01413-000',
        bairro: 'Cerqueira César',
        telefone: '(11) 3333-0003',
        latitude: -23.5580,
        longitude: -46.6620,
        horario: {
            abertura: 7,
            fechamento: 23,
            domingoAberto: true,
            domingoAbertura: 8,
            domingoFechamento: 20
        },
        fatorPreco: 0.95,
        possuiDelivery: true,
        entregaEm: '35 min'
    },
    {
        id: 'far-004',
        nome: 'Drogaria São Paulo',
        endereco: 'Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi',
        cidade: 'São Paulo',
        cep: '04538-133',
        bairro: 'Itaim Bibi',
        telefone: '(11) 3333-0004',
        latitude: -23.5800,
        longitude: -46.6820,
        horario: {
            abertura: 8,
            fechamento: 22,
            domingoAberto: true,
            domingoAbertura: 9,
            domingoFechamento: 18
        },
        fatorPreco: 1.08,
        possuiDelivery: true,
        entregaEm: '50 min'
    },
    {
        id: 'far-005',
        nome: 'Drogaria Venancio',
        endereco: 'Rua Vergueiro, 1500 - Vila Mariana',
        cidade: 'São Paulo',
        cep: '04101-000',
        bairro: 'Vila Mariana',
        telefone: '(11) 3333-0005',
        latitude: -23.5900,
        longitude: -46.6330,
        horario: {
            abertura: 8,
            fechamento: 22,
            domingoAberto: true,
            domingoAbertura: 8,
            domingoFechamento: 18
        },
        fatorPreco: 1.12,
        possuiDelivery: true,
        entregaEm: '40 min'
    },
    {
        id: 'far-006',
        nome: 'Farmácia Popular',
        endereco: 'Rua 25 de Março, 500 - Centro',
        cidade: 'São Paulo',
        cep: '01021-000',
        bairro: 'Centro',
        telefone: '(11) 3333-0006',
        latitude: -23.5450,
        longitude: -46.6310,
        horario: {
            abertura: 8,
            fechamento: 18,
            domingoAberto: false
        },
        fatorPreco: 0.90,
        possuiDelivery: false,
        entregaEm: null
    },
    {
        id: 'far-007',
        nome: 'Drogal',
        endereco: 'Av. Rebouças, 2500 - Pinheiros',
        cidade: 'São Paulo',
        cep: '05402-000',
        bairro: 'Pinheiros',
        telefone: '(11) 3333-0007',
        latitude: -23.5660,
        longitude: -46.6840,
        horario: {
            abertura: 7,
            fechamento: 23,
            domingoAberto: true,
            domingoAbertura: 8,
            domingoFechamento: 22
        },
        fatorPreco: 1.05,
        possuiDelivery: true,
        entregaEm: '25 min'
    },
    {
        id: 'far-008',
        nome: 'Rede Economia',
        endereco: 'Rua do Gasômetro, 120 - Brás',
        cidade: 'São Paulo',
        cep: '03014-000',
        bairro: 'Brás',
        telefone: '(11) 3333-0008',
        latitude: -23.5410,
        longitude: -46.6200,
        horario: {
            abertura: 8,
            fechamento: 20,
            domingoAberto: true,
            domingoAbertura: 8,
            domingoFechamento: 14
        },
        fatorPreco: 0.88,
        possuiDelivery: true,
        entregaEm: '45 min'
    }
];

// ==========================================================================
// Farmácias em outras capitais
// Expande a cobertura para além de São Paulo, para que buscas por CEP de
// outras cidades retornem farmácias realmente próximas ao usuário
// ==========================================================================
BANCO_FARMACIAS.push(
    { id: 'far-009', nome: 'Farmácia Copacabana', endereco: 'Av. Nossa Senhora de Copacabana, 500 - Copacabana', cidade: 'Rio de Janeiro', cep: '22020-000', bairro: 'Copacabana', telefone: '(21) 3333-0009', latitude: -22.9711, longitude: -43.1822, horario: { abertura: 7, fechamento: 23, domingoAberto: true, domingoAbertura: 8, domingoFechamento: 20 }, fatorPreco: 1.05, possuiDelivery: true, entregaEm: '35 min' },
    { id: 'far-010', nome: 'Drogaria Tijuca', endereco: 'Rua Conde de Bonfim, 300 - Tijuca', cidade: 'Rio de Janeiro', cep: '20520-000', bairro: 'Tijuca', telefone: '(21) 3333-0010', latitude: -22.9249, longitude: -43.2277, horario: { abertura: 8, fechamento: 22, domingoAberto: true, domingoAbertura: 8, domingoFechamento: 14 }, fatorPreco: 0.97, possuiDelivery: true, entregaEm: '40 min' },
    { id: 'far-011', nome: 'Farmácia Savassi', endereco: 'Rua Pernambuco, 1000 - Savassi', cidade: 'Belo Horizonte', cep: '30130-151', bairro: 'Savassi', telefone: '(31) 3333-0011', latitude: -19.9370, longitude: -43.9375, horario: { abertura: 7, fechamento: 22, domingoAberto: true, domingoAbertura: 8, domingoFechamento: 18 }, fatorPreco: 1.02, possuiDelivery: true, entregaEm: '30 min' },
    { id: 'far-012', nome: 'Drogaria Contorno', endereco: 'Av. do Contorno, 5000 - Funcionários', cidade: 'Belo Horizonte', cep: '30110-017', bairro: 'Funcionários', telefone: '(31) 3333-0012', latitude: -19.9245, longitude: -43.9352, horario: { abertura: 8, fechamento: 20, domingoAberto: false }, fatorPreco: 0.92, possuiDelivery: false, entregaEm: null },
    { id: 'far-013', nome: 'Farmácia Batel', endereco: 'Av. do Batel, 1400 - Batel', cidade: 'Curitiba', cep: '80420-090', bairro: 'Batel', telefone: '(41) 3333-0013', latitude: -25.4383, longitude: -49.2932, horario: { abertura: 7, fechamento: 22, domingoAberto: true, domingoAbertura: 8, domingoFechamento: 18 }, fatorPreco: 1.03, possuiDelivery: true, entregaEm: '35 min' },
    { id: 'far-014', nome: 'Drogaria Centro Cívico', endereco: 'Rua Bento Viana, 300 - Centro Cívico', cidade: 'Curitiba', cep: '80530-000', bairro: 'Centro Cívico', telefone: '(41) 3333-0014', latitude: -25.4185, longitude: -49.2696, horario: { abertura: 8, fechamento: 20, domingoAberto: false }, fatorPreco: 0.94, possuiDelivery: false, entregaEm: null },
    { id: 'far-015', nome: 'Farmácia Moinhos', endereco: 'Rua Padre Chagas, 200 - Moinhos de Vento', cidade: 'Porto Alegre', cep: '90570-080', bairro: 'Moinhos de Vento', telefone: '(51) 3333-0015', latitude: -30.0240, longitude: -51.2050, horario: { abertura: 7, fechamento: 23, domingoAberto: true, domingoAbertura: 8, domingoFechamento: 20 }, fatorPreco: 1.06, possuiDelivery: true, entregaEm: '30 min' },
    { id: 'far-016', nome: 'Drogaria Cidade Baixa', endereco: 'Av. João Pessoa, 1000 - Cidade Baixa', cidade: 'Porto Alegre', cep: '90040-000', bairro: 'Cidade Baixa', telefone: '(51) 3333-0016', latitude: -30.0424, longitude: -51.2189, horario: { abertura: 8, fechamento: 21, domingoAberto: true, domingoAbertura: 9, domingoFechamento: 14 }, fatorPreco: 0.91, possuiDelivery: true, entregaEm: '45 min' },
    { id: 'far-017', nome: 'Farmácia Barra', endereco: 'Av. Oceânica, 500 - Barra', cidade: 'Salvador', cep: '40140-130', bairro: 'Barra', telefone: '(71) 3333-0017', latitude: -13.0100, longitude: -38.5300, horario: { abertura: 7, fechamento: 22, domingoAberto: true, domingoAbertura: 8, domingoFechamento: 18 }, fatorPreco: 0.98, possuiDelivery: true, entregaEm: '35 min' },
    { id: 'far-018', nome: 'Drogaria Pituba', endereco: 'Av. Paulo VI, 300 - Pituba', cidade: 'Salvador', cep: '41810-000', bairro: 'Pituba', telefone: '(71) 3333-0018', latitude: -12.9950, longitude: -38.4550, horario: { abertura: 8, fechamento: 20, domingoAberto: false }, fatorPreco: 0.89, possuiDelivery: false, entregaEm: null },
    { id: 'far-019', nome: 'Farmácia Aldeota', endereco: 'Av. Santos Dumont, 1500 - Aldeota', cidade: 'Fortaleza', cep: '60150-160', bairro: 'Aldeota', telefone: '(85) 3333-0019', latitude: -3.7400, longitude: -38.4980, horario: { abertura: 7, fechamento: 22, domingoAberto: true, domingoAbertura: 8, domingoFechamento: 18 }, fatorPreco: 0.96, possuiDelivery: true, entregaEm: '30 min' },
    { id: 'far-020', nome: 'Drogaria Meireles', endereco: 'Av. Beira Mar, 3000 - Meireles', cidade: 'Fortaleza', cep: '60165-121', bairro: 'Meireles', telefone: '(85) 3333-0020', latitude: -3.7250, longitude: -38.4900, horario: { abertura: 8, fechamento: 22, domingoAberto: true, domingoAbertura: 9, domingoFechamento: 15 }, fatorPreco: 1.01, possuiDelivery: true, entregaEm: '40 min' },
    { id: 'far-021', nome: 'Farmácia Boa Viagem', endereco: 'Av. Boa Viagem, 2000 - Boa Viagem', cidade: 'Recife', cep: '51020-000', bairro: 'Boa Viagem', telefone: '(81) 3333-0021', latitude: -8.1180, longitude: -34.9010, horario: { abertura: 7, fechamento: 23, domingoAberto: true, domingoAbertura: 8, domingoFechamento: 20 }, fatorPreco: 0.99, possuiDelivery: true, entregaEm: '30 min' },
    { id: 'far-022', nome: 'Drogaria Casa Forte', endereco: 'Rua Real da Torre, 300 - Casa Forte', cidade: 'Recife', cep: '52061-030', bairro: 'Casa Forte', telefone: '(81) 3333-0022', latitude: -8.0330, longitude: -34.9130, horario: { abertura: 8, fechamento: 20, domingoAberto: false }, fatorPreco: 0.90, possuiDelivery: false, entregaEm: null },
    { id: 'far-023', nome: 'Farmácia Asa Sul', endereco: 'SQS 300 Bloco A - Asa Sul', cidade: 'Brasília', cep: '70330-500', bairro: 'Asa Sul', telefone: '(61) 3333-0023', latitude: -15.8100, longitude: -47.8950, horario: { abertura: 7, fechamento: 22, domingoAberto: true, domingoAbertura: 8, domingoFechamento: 18 }, fatorPreco: 1.07, possuiDelivery: true, entregaEm: '35 min' },
    { id: 'far-024', nome: 'Drogaria Asa Norte', endereco: 'SQN 200 Bloco B - Asa Norte', cidade: 'Brasília', cep: '70850-200', bairro: 'Asa Norte', telefone: '(61) 3333-0024', latitude: -15.7700, longitude: -47.8850, horario: { abertura: 8, fechamento: 21, domingoAberto: true, domingoAbertura: 9, domingoFechamento: 14 }, fatorPreco: 0.93, possuiDelivery: true, entregaEm: '40 min' }
);

// ==========================================================================
// Banco de Localidades
// Usado como aproximação de coordenadas quando a geocodificação real do
// CEP falha (sem internet, CEP inexistente, etc.) — ver REGIAO_CEP_FALLBACK
// em app.js para o mapeamento por região de CEP
// ==========================================================================
const BANCO_LOCALIDADES = [
    { cidade: 'São Paulo', uf: 'SP', latitude: -23.5505, longitude: -46.6333 },
    { cidade: 'Rio de Janeiro', uf: 'RJ', latitude: -22.9068, longitude: -43.1729 },
    { cidade: 'Belo Horizonte', uf: 'MG', latitude: -19.9167, longitude: -43.9345 },
    { cidade: 'Curitiba', uf: 'PR', latitude: -25.4284, longitude: -49.2733 },
    { cidade: 'Porto Alegre', uf: 'RS', latitude: -30.0346, longitude: -51.2177 },
    { cidade: 'Salvador', uf: 'BA', latitude: -12.9777, longitude: -38.5016 },
    { cidade: 'Fortaleza', uf: 'CE', latitude: -3.7319, longitude: -38.5267 },
    { cidade: 'Recife', uf: 'PE', latitude: -8.0476, longitude: -34.8770 },
    { cidade: 'Brasília', uf: 'DF', latitude: -15.8267, longitude: -47.9218 }
];

// ==========================================================================
// Mapa de Preços por Farmácia
// Preços simulados por medicamento e farmácia
// ==========================================================================
const MAPA_PRECOS = {
    'med-001': { 'far-001': 13.99, 'far-002': 15.90, 'far-003': 12.90, 'far-004': 14.50, 'far-005': 15.20, 'far-006': 11.99, 'far-007': 13.50, 'far-008': 11.79 },
    'med-002': { 'far-001': 16.90, 'far-002': 18.90, 'far-003': 15.80, 'far-004': 17.50, 'far-005': 18.20, 'far-006': 14.99, 'far-007': 16.50, 'far-008': 14.79 },
    'med-003': { 'far-001': 17.90, 'far-002': 19.90, 'far-003': 16.80, 'far-004': 18.50, 'far-005': 19.20, 'far-006': 15.99, 'far-007': 17.50, 'far-008': 15.79 },
    'med-004': { 'far-001': 23.90, 'far-002': 25.90, 'far-003': 22.50, 'far-004': 24.50, 'far-005': 25.20, 'far-006': 21.99, 'far-007': 23.50, 'far-008': 21.79 },
    'med-005': { 'far-001': 38.90, 'far-002': 42.50, 'far-003': 36.80, 'far-004': 40.50, 'far-005': 41.20, 'far-006': 35.99, 'far-007': 38.50, 'far-008': 35.79 },
    'med-006': { 'far-001': 35.90, 'far-002': 38.90, 'far-003': 33.80, 'far-004': 37.50, 'far-005': 38.20, 'far-006': 32.99, 'far-007': 35.50, 'far-008': 32.79 },
    'med-007': { 'far-001': 19.50, 'far-002': 21.50, 'far-003': 18.80, 'far-004': 20.50, 'far-005': 21.20, 'far-006': 17.99, 'far-007': 19.50, 'far-008': 17.79 },
    'med-008': { 'far-001': 12.50, 'far-002': 13.90, 'far-003': 11.80, 'far-004': 13.50, 'far-005': 14.20, 'far-006': 10.99, 'far-007': 12.50, 'far-008': 10.79 },
    'med-009': { 'far-001': 15.50, 'far-002': 16.80, 'far-003': 14.50, 'far-004': 15.80, 'far-005': 16.20, 'far-006': 13.99, 'far-007': 15.00, 'far-008': 13.79 },
    'med-010': { 'far-001': 29.90, 'far-002': 32.90, 'far-003': 28.50, 'far-004': 31.50, 'far-005': 32.20, 'far-006': 27.99, 'far-007': 29.50, 'far-008': 27.79 },
    'med-011': { 'far-001': 14.50, 'far-002': 15.50, 'far-003': 13.80, 'far-004': 15.00, 'far-005': 15.50, 'far-006': 12.99, 'far-007': 14.00, 'far-008': 12.79 },
    'med-012': { 'far-001': 44.90, 'far-002': 48.90, 'far-003': 42.50, 'far-004': 46.50, 'far-005': 47.20, 'far-006': 41.99, 'far-007': 44.50, 'far-008': 41.79 },
    'med-013': { 'far-001': 62.90, 'far-002': 68.90, 'far-003': 60.50, 'far-004': 65.50, 'far-005': 66.20, 'far-006': 59.99, 'far-007': 62.50, 'far-008': 59.79 },
    'med-014': { 'far-001': 18.50, 'far-002': 19.90, 'far-003': 17.50, 'far-004': 19.00, 'far-005': 19.50, 'far-006': 16.99, 'far-007': 18.00, 'far-008': 16.79 },
    'med-015': { 'far-001': 19.90, 'far-002': 21.90, 'far-003': 18.50, 'far-004': 20.50, 'far-005': 21.20, 'far-006': 17.99, 'far-007': 19.50, 'far-008': 17.79 },
    'med-016': { 'far-001': 32.90, 'far-002': 35.90, 'far-003': 31.50, 'far-004': 34.50, 'far-005': 35.20, 'far-006': 30.99, 'far-007': 32.50, 'far-008': 30.79 },
    'med-017': { 'far-001': 38.50, 'far-002': 42.50, 'far-003': 36.50, 'far-004': 40.50, 'far-005': 41.20, 'far-006': 35.99, 'far-007': 38.50, 'far-008': 35.79 },
    'med-018': { 'far-001': 41.90, 'far-002': 45.90, 'far-003': 39.50, 'far-004': 43.50, 'far-005': 44.20, 'far-006': 38.99, 'far-007': 41.50, 'far-008': 38.79 },
    'med-019': { 'far-001': 38.90, 'far-002': 42.90, 'far-003': 36.50, 'far-004': 40.50, 'far-005': 41.20, 'far-006': 35.99, 'far-007': 38.50, 'far-008': 35.79 },
    'med-020': { 'far-001': 62.90, 'far-002': 68.90, 'far-003': 59.50, 'far-004': 65.50, 'far-005': 66.20, 'far-006': 58.99, 'far-007': 62.50, 'far-008': 58.79 }
};

// Gera preços simulados para qualquer combinação medicamento × farmácia que
// ainda não tenha um preço cadastrado manualmente (novas farmácias, novos
// medicamentos), usando o preço de referência do medicamento e o
// multiplicador de preço (fatorPreco) de cada farmácia
BANCO_MEDICAMENTOS.forEach(medicamento => {
    if (!MAPA_PRECOS[medicamento.id]) MAPA_PRECOS[medicamento.id] = {};

    BANCO_FARMACIAS.forEach(farmacia => {
        if (MAPA_PRECOS[medicamento.id][farmacia.id] !== undefined) return; // já cadastrado

        // O preço de referência representa a marca; farmácias com
        // fatorPreco < 1 tendem a vender um pouco abaixo dele
        const precoBase = medicamento.precoReferencia * 0.85;
        MAPA_PRECOS[medicamento.id][farmacia.id] = Math.round(precoBase * farmacia.fatorPreco * 100) / 100;
    });
});