/**
 * MED_PRECOS - Camada de enriquecimento do BANCO_MEDICAMENTOS.
 *
 * A base real vem da CMED/ANVISA (scripts/build_data_cmed.py) e traz só a
 * CLASSE TERAPÊUTICA crua ("Inibidores da bomba de prótons", "Antirreumáticos
 * não esteroidais puros", ...) e nenhum sinônimo. Este módulo deriva:
 *
 *   - descricao        : uma frase em português simples do que a classe trata
 *                        (regras por palavra-chave abaixo; cai num texto
 *                        genérico quando nenhuma bate).
 *   - classeTerapeutica: a classe CMED original, preservada.
 *   - sinonimias       : nomes alternativos pra busca por nome/voz -
 *                        curados (marcas/nomes populares conhecidos) +
 *                        derivados automaticamente (partes do princípio ativo
 *                        e nomes das alternativas genéricas do próprio item).
 *
 * É usado por scripts/aplicar-enriquecimento.js (aplica sobre js/data.js) e
 * chamado no fim de scripts/build_data_cmed.py, pra sobreviver a cada regen.
 *
 * Nada aqui é conselho médico: as frases descrevem, em linhas gerais, para que
 * serve a CLASSE do medicamento - a bula e um profissional de saúde mandam.
 */

'use strict';

function norm(s) {
    return (s || '')
        .toString()
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();
}

// -----------------------------------------------------------------------------
// Regras de descrição amigável por palavra-chave na classe terapêutica.
// Ordem importa: a primeira regra cujo `re` casa com a classe normalizada vence.
// Regras mais específicas vêm antes das mais genéricas.
// -----------------------------------------------------------------------------
const REGRAS_DESCRICAO = [
    // --- Combinações e vias específicas (checadas antes das regras genéricas) ---
    [/associacoes ofta?l?mologicas corticoster|(ofta?l?molog|oftalmic).*(antiinfeccios|antibacterian|antibiotic)|(antiinfeccios|antibacterian|antibiotic).*(ofta?l?molog|oftalmic)/, 'Colírio ou pomada oftálmica que combina anti-inflamatório (corticoide) com antibiótico.'],
    [/(otolog|otic).*(corticoster|antiinfeccios|antibacterian)/, 'Medicamento para o ouvido que combina anti-inflamatório com antibiótico.'],
    [/corticoster.*ofta?l?molog|ofta?l?molog.*corticoster|corticosteroides ofta?l?molog/, 'Colírio com corticoide, para inflamação e alergia mais intensas nos olhos.'],
    [/(dermatolog|topic).*corticoster.*(antibacterian|antimicotic|antiinfeccios)|corticoesteroides.*(antibacterian|antimicotic|antiinfeccios)|corticoster.*associad.*(antibacterian|antimicotic)/, 'Pomada que combina corticoide (anti-inflamatório) com antibiótico e/ou antifúngico, para lesões de pele infectadas.'],
    [/corticoster.*nasa|nasa.*corticoster/, 'Corticoide de uso nasal. Usado para rinite alérgica e congestão persistente.'],
    [/descongestionantes ofta?l?molog/, 'Colírio que alivia a vermelhidão e a irritação dos olhos.'],
    [/antineovascularizacao ocular|antiangiogenico ocular|degeneracao macular|antineovascular/, 'Injeção no olho para doenças da retina, como a degeneração macular.'],
    [/lagrimas artificiais|lubrificantes oftamolog|lubrificantes ofta?l?molog/, 'Lágrima artificial. Lubrifica e alivia o ressecamento dos olhos.'],
    [/midriatic|cicloplegic/, 'Colírio que dilata a pupila para exames ou procedimentos oftalmológicos.'],
    [/preparacoes antiglaucoma|miotic/, 'Colírio que reduz a pressão dentro do olho (glaucoma).'],
    [/antialergic.*ofta?l?molog|antiinflamatorios ofta?l?molog/, 'Colírio para aliviar alergia e inflamação nos olhos.'],
    [/ofta?l?molog|oftalmic|conjuntivit/, 'Medicamento de uso nos olhos (colírio ou pomada oftálmica).'],

    // --- Aparelho digestivo ---
    [/inibidores da bomba de prot|antiulceros|protetor.*(gastric|estomag)/, 'Reduz a produção de ácido no estômago. Usado para gastrite, refluxo e úlcera.'],
    [/antagonistas h2|bloqueadores h2/, 'Reduz a acidez do estômago. Usado para gastrite e refluxo.'],
    [/antiacid/, 'Neutraliza a acidez do estômago, aliviando azia e má digestão.'],
    [/antiflatulent|carminativ|antiespumante/, 'Reduz os gases e a sensação de estufamento.'],
    [/gastroprocinetic|antiemetic|antinauseant/, 'Combate náuseas e vômitos e ajuda o estômago a esvaziar.'],
    [/antidiarreic|inibidores da motilidade/, 'Reduz a diarreia.'],
    [/aminosalicilat|doenca inflamatoria intestinal|retocolite|crohn/, 'Anti-inflamatório intestinal. Usado para retocolite ulcerativa e doença de Crohn.'],
    [/\blaxativ|\blaxante|\bcatartic|limpeza intestinal|agentes osmoticos|drogas para constipac|para constipac/, 'Laxante. Usado para constipação (prisão de ventre).'],
    [/antiespasmodic|associacoes de antiespasmodicos|anticolinergic.*(gastro|intestin|digest)/, 'Alivia cólicas e espasmos do aparelho digestivo.'],
    [/hepatoprotetor|lipotropic|colagog|coleretic|colecinetic/, 'Auxiliar da função do fígado e da vesícula.'],

    // --- Dor, inflamação, músculo ---
    [/antirreumaticos e analgesicos topicos|antirreumaticos.*topic|antiinflamator.*topic/, 'Anti-inflamatório de uso na pele, para dores musculares e nas articulações.'],
    [/antirreumaticos nao esteroidais|anti-?inflamatori.*nao esteroid|\baine\b|coxib|inibidores.*cox-?2/, 'Anti-inflamatório não esteroidal (AINE). Usado para dor, inflamação e febre.'],
    [/analgesicos narcoticos|opioid/, 'Analgésico opioide para dores intensas. Uso controlado e sob prescrição.'],
    [/analgesic.*antipiretic|antipiretic.*analgesic|associacoes de analgesicos/, 'Analgésico e antitérmico. Usado para dor leve a moderada e febre.'],
    [/relaxante muscular|miorrelaxante/, 'Relaxante muscular. Usado para contraturas e dores musculares.'],
    [/antigotos|antigotoso|\bgota\b|uricosuric|hiperuricemia|xantina oxidase/, 'Usado para tratar ou prevenir crises de gota (ácido úrico alto).'],

    // --- Alergia e respiratório ---
    [/anti-?histaminic|antialergic.*sistemic|antipruriginos/, 'Antialérgico (anti-histamínico). Usado para rinite, urticária, coceira e alergias.'],
    [/antiasmatic|\bdpoc\b|agonistas b2|broncodilatador|antileucotrien/, 'Abre as vias respiratórias, facilitando a respiração na asma e na DPOC.'],
    [/expectorante|mucolitic/, 'Ajuda a fluidificar e eliminar o catarro das vias respiratórias.'],
    [/antitussig/, 'Reduz a tosse seca.'],
    [/antigripai|descongestionante.*sistemic|preparacoes sistemicas nasais/, 'Alivia sintomas de gripes e resfriados, como congestão nasal e dores.'],
    [/corticoster.*inalant|inalant.*corticoster/, 'Corticoide inalatório. Usado para controlar a inflamação das vias aéreas na asma e na DPOC.'],

    // --- Câncer (antes das regras hormonais, que também pegam "citostático") ---
    [/antineoplasic|citostatic|citotoxic|proteina kinase|quimioterap|alquilante|antimetabolit|camptotecin|inibidores da aromatase|lidomida|anti-?tnf|fator de necrose tumoral|interleucin/, 'Usado no tratamento de câncer ou de doenças imunológicas graves (quimioterapia, terapia-alvo ou biológico).'],

    // --- Coração, circulação, metabolismo ---
    [/estatina|redutase hmg-?coa/, 'Reduz o colesterol no sangue, diminuindo o risco de infarto e AVC.'],
    [/fibrato|acido fibrico|reguladores de gordura/, 'Reduz os triglicérides (e um pouco o colesterol) no sangue.'],
    [/ezetimiba|sequestrante.*acidos biliares|hipolipemiante|reguladores de lipidi/, 'Reduz o colesterol no sangue.'],
    [/terapia coronaria|trimetazidina|antianginos/, 'Melhora o aproveitamento de oxigênio pelo coração, aliviando a angina (dor no peito).'],
    [/betabloqueador/, 'Reduz o esforço do coração. Usado para pressão alta, arritmia e angina.'],
    [/antagonistas do calcio/, 'Relaxa os vasos sanguíneos. Usado para pressão alta e angina.'],
    [/inibidores da eca/, 'Relaxa os vasos e reduz a pressão arterial; também protege coração e rins.'],
    [/antagonistas da angiotensina ii/, 'Reduz a pressão arterial relaxando os vasos sanguíneos (linha das "sartanas").'],
    [/hormonios antidiuretic|desmopressin|vasopressin|diabetes insipido/, 'Reduz a produção de urina. Usado para diabetes insípido e enurese (xixi na cama).'],
    [/\bdiuretic/, 'Aumenta a eliminação de líquido e sal pela urina. Usado para pressão alta e inchaço.'],
    [/agentes cardiacos|inotropic|glicosideos cardiac|digitalic|insuficiencia cardiaca/, 'Fortalece os batimentos do coração. Usado na insuficiência cardíaca.'],
    [/antiarritmic/, 'Controla batimentos cardíacos irregulares (arritmia).'],
    [/antianginos|terapia coronaria|vasodilatadores.*coronari|\bnitrit|\bnitrat/, 'Melhora o fluxo de sangue para o coração, aliviando a angina (dor no peito).'],
    [/hipertensao (arterial )?pulmonar|antagonistas receptores de endotelina/, 'Usado para hipertensão nos vasos dos pulmões (hipertensão arterial pulmonar).'],
    [/anti-?hipertensivos|simpaticolitic/, 'Reduz a pressão arterial.'],
    [/vasoterapeutic|vasodilatadores perifericos|vasculoterap.*cerebrai|acao cerebral/, 'Melhora a circulação do sangue no cérebro e nas extremidades.'],
    [/antagonistas da vitamina k|anticoagulante/, 'Deixa o sangue mais "fino", prevenindo a formação de coágulos.'],
    [/antiagregante|antiplaquetari|agr[ae]gacao plaquetari|adenosina difosfato|fator xa|inibidores diretos da trombina/, 'Reduz a formação de coágulos no sangue. Usado para prevenir infarto, AVC e trombose.'],
    [/antitrombotic|heparin|fibrinolitic|trombolitic|antifibrinolitic/, 'Age sobre a coagulação do sangue (previne ou dissolve coágulos, ou controla sangramentos).'],
    [/vasoprotetor|venotonico|hemorroid|vasculoprotetor|antivaricos/, 'Melhora a circulação venosa. Usado para varizes, hemorroidas e pernas pesadas.'],
    [/antidiabetic|biguanida|dpp-?iv|glp-?1|sglt2|sulfoniloure|glitazona|insulin/, 'Ajuda a controlar a glicose (açúcar) no sangue no diabetes.'],
    [/paratireoid|paratireoideano|paratormonio|teriparatid/, 'Regula o cálcio do organismo. Usado em osteoporose grave ou em distúrbios da paratireoide.'],
    [/hormonios tireoid|levotiroxin|\btireoid|tireostatic|preparacoes para tireoide/, 'Regula o hormônio da tireoide.'],
    [/bisfosfonato|osteoporose/, 'Fortalece os ossos e reduz o risco de fraturas na osteoporose.'],
    [/eritropoietin|eritropoetin|epoetin|darbepoetin/, 'Estimula a produção de glóbulos vermelhos. Usado para anemia (por exemplo, na doença renal).'],
    [/fatores estimulantes de colonias|filgrastim|estimulantes.*colonia/, 'Estimula a produção de glóbulos brancos, geralmente após quimioterapia.'],
    [/hormonio.*crescimento|somatropin/, 'Hormônio do crescimento.'],
    [/hiperfosfatemia|quelante.*fosfato/, 'Reduz o fósforo no sangue (usado na doença renal crônica).'],

    // --- Hormônios sexuais, urologia ---
    [/contracep/, 'Contraceptivo hormonal (anticoncepcional).'],
    [/gonadotrofina|estimulantes para ovulacao|inducao da ovulacao/, 'Estimula os ovários. Usado em tratamentos de fertilidade.'],
    [/inibidores da prolactina|hiperprolactinemia|cabergolina|bromocriptina|inibicao.*lactacao/, 'Reduz a prolactina. Usado em distúrbios hormonais e para inibir a produção de leite.'],
    [/moduladores seletivos do receptor de estrogenio|\bserm\b|raloxifeno/, 'Atua nos receptores de estrogênio. Usado em osteoporose e em câncer de mama.'],
    [/estrogen|reposicao hormonal|climaterio|menopaus/, 'Reposição de estrogênio. Usada em sintomas da menopausa e outras indicações.'],
    [/progestagen|progesteron|progestogen/, 'Hormônio progestagênio, usado em saúde da mulher e contracepção.'],
    [/\bbph\b|hiperplasia prostatica|prostat|5-?alfa|antagonistas alfa-adrenergic/, 'Usado para sintomas do aumento benigno da próstata.'],
    [/androgen|testosteron/, 'Reposição de testosterona (hormônio masculino).'],
    [/disfuncao eretil|fosfodiesterase 5/, 'Usado para disfunção erétil.'],
    [/incontinencia urinaria|bexiga hiperativ/, 'Usado para controlar a bexiga hiperativa e a incontinência urinária.'],

    // --- Anti-infecciosos ---
    [/penicilina|cefalosporina|macrolide|fluorquinolona|quinolona|tetraciclina|aminoglicosid|sulfonamida|trimetoprima|carbapenem|peneme|glicopeptid|glucopeptid|nitrofuran|rifampicin|rifamicin|tuberculostatic|antituberculos|antibiotic|antibacterian/, 'Antibiótico. Usado para tratar infecções causadas por bactérias.'],
    [/antifungic|antimicotic|infeccoes fungicas|\bmicose/, 'Antifúngico. Usado para tratar micoses e infecções por fungos.'],
    [/antivira|antiretrovira|herpes|hepatite [bc]|\bhiv\b|influenza.*antivira|transcriptase reversa|integrase/, 'Antiviral. Usado para tratar ou controlar infecções causadas por vírus.'],
    [/anti-?helmintic|vermifug|antiprotozo|antiparasitari|esquistossomicida/, 'Usado para eliminar vermes ou parasitas intestinais.'],
    [/amebicida|giardia|tricomonicida|metronidazol/, 'Usado para tratar infecções por amebas, giárdia ou tricomonas.'],
    [/malari|antimalaric|leishman/, 'Usado para prevenir ou tratar malária e doenças parasitárias semelhantes.'],
    [/escabicida|pediculicida|antipediculos/, 'Usado no tratamento de sarna (escabiose) e piolho.'],
    [/vacina/, 'Vacina. Estimula o organismo a se defender contra uma doença específica.'],

    // --- Sistema nervoso central ---
    [/antidepressiv/, 'Antidepressivo. Usado para depressão e transtornos de ansiedade.'],
    [/estabilizador.*humor|carbonato de litio|\blitio\b/, 'Estabilizador de humor. Usado no transtorno bipolar.'],
    [/antipsicotic|neurolept/, 'Antipsicótico. Usado para esquizofrenia, transtorno bipolar e quadros relacionados.'],
    [/tranquilizante|ansiolitic|benzodiazepin/, 'Reduz a ansiedade e a tensão. Uso de curto prazo e sob prescrição.'],
    [/hipnotic|sedativ|indutor do sono/, 'Indutor do sono. Usado para insônia por período limitado.'],
    [/antiepileptic|anticonvulsivante|gabapentinoide/, 'Previne crises convulsivas; também usado para dor neuropática e estabilização do humor.'],
    [/antiparkinsonian|levodopa|agonistas dopaminergic|dopaminergic.*(central|cerebral)|antidiscinetic/, 'Controla os sintomas da doença de Parkinson (tremor, rigidez, lentidão).'],
    [/antialzheimer|inibidores da colinesterase|anticolinesterasic|antidemenc/, 'Usado para retardar a progressão dos sintomas da doença de Alzheimer.'],
    [/esclerose multipla/, 'Usado para reduzir surtos e a progressão da esclerose múltipla.'],
    [/enxaqueca|triptan|antienxaque/, 'Usado para tratar ou prevenir crises de enxaqueca.'],
    [/vertigem|antivertiginos|labirintit|antivertigo/, 'Usado para tontura e vertigem (labirintite).'],
    [/psicoestimulante|deficit de atencao|\btdah\b|nootropic|psicoanaleptic/, 'Estimulante do sistema nervoso central. Usado no TDAH e condições relacionadas.'],
    [/anestesicos locais|anestesico local/, 'Anestésico local. Dessensibiliza temporariamente uma região do corpo.'],
    [/antitabaco|dependencia.*(tabaco|nicotin)|cessacao.*tabagismo|reposicao de nicotina/, 'Auxilia a parar de fumar.'],
    [/dependencia alcoolica|dissulfiram|alcoolismo|dependencia de alcool/, 'Auxiliar no tratamento da dependência de álcool.'],
    [/orexigen|estimulante.*apetite/, 'Estimula o apetite.'],

    // --- Imunológico ---
    [/imunossupressor|imunomodulador|imunossupress|inibidores de jak|\bjak\b/, 'Reduz a atividade do sistema imunológico. Usado em doenças autoimunes e transplantes.'],
    [/terapia dos calculos biliares|calculos biliares|acido ursodesoxicolic|ursodiol/, 'Ajuda a dissolver cálculos (pedras) na vesícula.'],
    [/fitoterapic|origem herbacea|planta medicinal/, 'Medicamento fitoterápico (à base de plantas).'],
    [/anti-?reumaticos especific|antirreumaticos modificadores|agentes anti-?reumaticos/, 'Modifica o curso de doenças reumáticas autoimunes, como a artrite reumatoide.'],
    [/fator viii|fator ix|hemofilia|fatores de coagulacao/, 'Repõe um fator de coagulação do sangue. Usado na hemofilia.'],
    [/angiodema hereditario|angioedema hereditario/, 'Usado para prevenir ou tratar crises de angioedema hereditário (inchaços graves).'],
    [/corticoster|corticoesteroid|glicocorticoid/, 'Corticoide. Reduz inflamação e reações alérgicas.'],

    // --- Pele e mucosas ---
    [/antiacneic/, 'Usado no tratamento da acne.'],
    [/psorias|antipsoriatic/, 'Usado no tratamento da psoríase.'],
    [/antibioticos topicos|antibacterianos topicos/, 'Antibiótico de uso na pele, para infecções cutâneas.'],
    [/antisseptic|desinfetante/, 'Antisséptico. Usado para limpar e prevenir infecção em ferimentos.'],
    [/cicatrizante|reparador (tecidual|da pele)|emoliente|hidratante|protetores dermatolog|tratamento de ferida|\bcurativ|escara/, 'Protege e ajuda na recuperação da pele (assaduras, ressecamento, feridas).'],
    [/fibrose pulmonar/, 'Usado para retardar a progressão da fibrose pulmonar idiopática.'],
    [/dermatolog|topic.*pele|preparacoes dermatolog/, 'Medicamento de uso na pele.'],

    // --- Suplementos e reidratação ---
    [/ferro-?quelante|quelante de ferro/, 'Remove o excesso de ferro do organismo.'],
    [/probiotic|flora intestinal|lactobacil|micro-?organismos/, 'Repõe a flora intestinal (bactérias "do bem").'],
    [/rehidratante|reidratante|eletrolit|solucao oral de reidrat|sais para reidrat/, 'Repõe água e sais minerais perdidos (por exemplo, em diarreia).'],
    [/produtos a base de calcio|sais de calcio|calcio \+ vitamina d/, 'Suplemento de cálcio (e às vezes vitamina D) para a saúde dos ossos.'],
    [/vitamin|suplemento|complexo b|acido fol|antianemic|ferroso|sais de ferro|ferro puro|calcio \+ |polivitaminic|\bminerai?s\b|multimineral|\btonico/, 'Suplemento de vitaminas e/ou minerais.'],

    // --- Outras vias locais ---
    [/descongestionante.*nasa|nasa.*descongestionante/, 'Descongestionante nasal. Desentope o nariz.'],
    [/nasal|rinite/, 'Medicamento de uso nasal, para congestão e rinite.'],
    [/preparacoes para garganta|pastilha|\bgarganta/, 'Alívio local para dor de garganta e irritação na boca.'],
    [/\botolog|\botic\b|ouvido|otite/, 'Medicamento de uso no ouvido.'],
    [/antiobesidade|antiobesitas/, 'Auxiliar no tratamento da obesidade.'],
    [/agonistas da trombopoetina|estimulante.*plaquet|trombopoetina/, 'Estimula a produção de plaquetas no sangue.'],
    [/anti-?sept.*urinari|urinari.*anti-?sept/, 'Antisséptico das vias urinárias. Usado em infecções urinárias.'],
];

const DESCRICAO_FALLBACK = (classe) =>
    `Medicamento da classe "${classe}". Consulte a bula e um profissional de saúde para o uso correto.`;

function descricaoAmigavel(classeOriginal) {
    const c = norm(classeOriginal);
    if (!c) return '';
    for (const [re, texto] of REGRAS_DESCRICAO) {
        if (re.test(c)) return texto;
    }
    return DESCRICAO_FALLBACK(classeOriginal);
}

// -----------------------------------------------------------------------------
// Sinônimos curados: princípio ativo (normalizado, casa por igualdade ou prefixo)
// -> nomes populares / marcas amplamente conhecidas no Brasil. Só entradas
// inequívocas (a marca é, de fato, aquele princípio ativo).
// -----------------------------------------------------------------------------
const SINONIMOS_CURADOS = {
    'paracetamol': ['acetaminofeno', 'tylenol'],
    'dipirona': ['metamizol', 'novalgina', 'anador'],
    'dipirona monoidratada': ['dipirona', 'metamizol', 'novalgina'],
    'dipirona sodica': ['dipirona', 'metamizol', 'novalgina'],
    'ibuprofeno': ['advil', 'alivium', 'ibupril'],
    'acido acetilsalicilico': ['aspirina', 'aas', 'melhoral'],
    'diclofenaco': ['voltaren', 'cataflam', 'biofenac'],
    'diclofenaco sodico': ['voltaren', 'cataflam'],
    'diclofenaco potassico': ['cataflam'],
    'naproxeno': ['flanax', 'naprosyn'],
    'nimesulida': ['nisulid', 'scaflam', 'arflex'],
    'cetoprofeno': ['profenid', 'bi-profenid'],
    'omeprazol': ['losec', 'peprazol'],
    'pantoprazol': ['pantozol'],
    'esomeprazol': ['nexium'],
    'ranitidina': ['antak', 'label'],
    'loratadina': ['claritin', 'histadin'],
    'desloratadina': ['desalex'],
    'cetirizina': ['zyrtec', 'reactine'],
    'fexofenadina': ['allegra', 'allexofedrin'],
    'dexclorfeniramina': ['polaramine'],
    'prometazina': ['fenergan'],
    'amoxicilina': ['amoxil', 'novocilin'],
    'amoxicilina + clavulanato de potassio': ['clavulin', 'amoxil bd'],
    'azitromicina': ['zitromax', 'azi'],
    'cefalexina': ['keflex', 'cefalexina generico'],
    'ciprofloxacino': ['cipro'],
    'sulfametoxazol + trimetoprima': ['bactrim', 'bactrim f', 'infectrin'],
    'metronidazol': ['flagyl'],
    'nistatina': ['micostatin'],
    'fluconazol': ['zoltec', 'flucazol'],
    'cetoconazol': ['nizoral'],
    'aciclovir': ['zovirax'],
    'losartana potassica': ['cozaar', 'aradois', 'losartana'],
    'valsartana': ['diovan'],
    'enalapril': ['renitec', 'maleato de enalapril'],
    'captopril': ['capoten'],
    'atenolol': ['atenol', 'ablok'],
    'propranolol': ['inderal'],
    'metoprolol': ['selozok', 'seloken', 'lopressor'],
    'anlodipino': ['norvasc', 'amlodipino', 'besilato de anlodipino'],
    'nifedipino': ['adalat'],
    'hidroclorotiazida': ['clorana'],
    'furosemida': ['lasix'],
    'espironolactona': ['aldactone'],
    'sinvastatina': ['zocor', 'sinvascor'],
    'atorvastatina': ['lipitor', 'citalor'],
    'rosuvastatina': ['crestor'],
    'metformina': ['glifage', 'glifage xr', 'cloridrato de metformina'],
    'glibenclamida': ['daonil'],
    'gliclazida': ['diamicron'],
    'levotiroxina sodica': ['puran t4', 'synthroid', 'euthyrox'],
    'sertralina': ['zoloft', 'assert'],
    'fluoxetina': ['prozac', 'daforin'],
    'escitalopram': ['lexapro'],
    'citalopram': ['cipramil'],
    'paroxetina': ['aropax', 'pondera'],
    'venlafaxina': ['efexor', 'venlift'],
    'amitriptilina': ['amytril', 'tryptanol'],
    'clonazepam': ['rivotril'],
    'alprazolam': ['frontal', 'xanax'],
    'diazepam': ['valium'],
    'bromazepam': ['lexotan'],
    'zolpidem': ['stilnox', 'lioram'],
    'quetiapina': ['seroquel'],
    'risperidona': ['risperdal'],
    'olanzapina': ['zyprexa'],
    'carbamazepina': ['tegretol'],
    'acido valproico': ['depakene', 'valproato de sodio'],
    'divalproato de sodio': ['depakote'],
    'fenitoina': ['hidantal'],
    'gabapentina': ['neurontin'],
    'pregabalina': ['lyrica'],
    'carbonato de litio': ['carbolitium'],
    'cloridrato de metilfenidato': ['ritalina', 'concerta', 'metilfenidato'],
    'metilfenidato': ['ritalina', 'concerta'],
    'prednisona': ['meticorten'],
    'prednisolona': ['prelone', 'predsim'],
    'dexametasona': ['decadron'],
    'betametasona': ['diprospan', 'celestone'],
    'budesonida': ['busonid', 'noex'],
    'salbutamol': ['aerolin', 'albuterol'],
    'formoterol + budesonida': ['alenia', 'symbicort', 'foraseq'],
    'salmeterol + fluticasona': ['seretide'],
    'ambroxol': ['mucosolvan'],
    'acetilcisteina': ['fluimucil'],
    'bromoprida': ['digesan', 'plamet'],
    'metoclopramida': ['plasil'],
    'domperidona': ['motilium'],
    'ondansetrona': ['zofran', 'vonau', 'nausedron'],
    'escopolamina + dipirona': ['buscopan composto', 'buscoduo'],
    'butilbrometo de escopolamina': ['buscopan'],
    'hioscina': ['buscopan'],
    'simeticona': ['luftal', 'flatex'],
    'hidroxido de aluminio + hidroxido de magnesio': ['maalox', 'mylanta', 'pepsamar'],
    'loperamida': ['imosec', 'diasec'],
    'racecadotrila': ['tiorfan', 'avide'],
    'sais para reidratacao oral': ['soro caseiro', 'soro de reidratacao', 'floralyte'],
    'dimeticona': ['luftal'],
    'polietilenoglicol': ['muvinlax', 'peg'],
    'lactulose': ['lactulona'],
    'bisacodil': ['dulcolax', 'lacto-purga'],
    'sildenafila': ['viagra', 'citrato de sildenafila'],
    'tadalafila': ['cialis'],
    'tansulosina': ['secotex'],
    'finasterida': ['proscar', 'propecia'],
    'alopurinol': ['zyloric'],
    'colchicina': ['colchis'],
    'varfarina': ['marevan', 'coumadin', 'varfarina sodica'],
    'rivaroxabana': ['xarelto'],
    'clopidogrel': ['plavix', 'iscover'],
    'ciclobenzaprina': ['miosan', 'benziflex'],
    'carisoprodol + associacoes': ['mioflex', 'tandrilax', 'torsilax'],
    'orfenadrina + dipirona + cafeina': ['dorflex'],
    'cafeina + carisoprodol + diclofenaco + paracetamol': ['tandrilax', 'torsilax'],
    'alendronato de sodio': ['fosamax'],
    'cloridrato de sibutramina': ['reductil', 'sibutramina'],
    'orlistate': ['xenical', 'lipiblock'],
    'levonorgestrel': ['pilula do dia seguinte', 'postinor', 'pozato'],
    'etinilestradiol + levonorgestrel': ['microvlar', 'level', 'ciclo 21'],
    'etinilestradiol + gestodeno': ['tamisa', 'gestinol', 'minulet'],
    'drospirenona + etinilestradiol': ['yasmin', 'yaz', 'elani'],
    'sulfato ferroso': ['neutrofer', 'combiron'],
    'cianocobalamina': ['vitamina b12'],
    'colecalciferol': ['vitamina d', 'vitamina d3', 'depura', 'addera d3'],
    'complexo b': ['vitamina b'],
    'acido ascorbico': ['vitamina c', 'cebion', 'cewin', 'redoxon'],
    'cloridrato de tramadol': ['tramal', 'tramadol'],
    'codeina + paracetamol': ['tylex', 'codex'],
    'morfina': ['dimorf'],
    'oxido de zinco;colecalciferol;palmitato de retinol': ['hipoglos', 'pomada para assadura'],
    'oxido de zinco': ['pomada para assadura', 'hipoglos', 'desitin'],
};

const STOPWORDS_SINONIMO = new Set([
    'de', 'do', 'da', 'com', 'sem', 'associacoes', 'associacao', 'outros', 'outras',
    'sodico', 'sodica', 'potassico', 'potassica', 'calcico', 'calcica', 'monoidratada',
    'monoidratado', 'cloridrato', 'sulfato', 'maleato', 'besilato', 'succinato',
    'fumarato', 'mesilato', 'dinitrato', 'nitrato', 'fosfato', 'acetato', 'bromidrato',
    'citrato', 'hemifumarato', 'trihidratado', 'dicloridrato', 'pamoato', 'valerato',
    'trihidratada', 'triidratada', 'tri-hidratada', 'anidra', 'anidro',
    // adjuvantes comuns em combinações — não são bons termos de busca isolados
    'cafeina', 'cafeina anidra',
]);

function derivarSinonimias(med) {
    const set = new Map(); // normalizado -> forma exibida
    const nomeNorm = norm(med.nome);
    const paNorm = norm(med.principioAtivo);

    const add = (valor) => {
        // tira anotação regulatória entre parênteses ("... (port. 344/98 – Lista B1)")
        const v = (valor || '').toString().replace(/\s*\([^)]*\)\s*/g, ' ').trim();
        const vn = norm(v);
        if (!vn || vn.length < 3) return;
        if (vn === nomeNorm || vn === paNorm) return;
        if (STOPWORDS_SINONIMO.has(vn)) return;
        if (!set.has(vn)) set.set(vn, v);
    };

    // 1) curados (igualdade ou prefixo do princípio ativo)
    for (const [chave, lista] of Object.entries(SINONIMOS_CURADOS)) {
        if (paNorm === chave || paNorm.startsWith(chave + ' ') || paNorm.startsWith(chave + ';')) {
            lista.forEach(add);
        }
    }

    // 2) princípio(s) ativo(s): para cada componente de um composto ("A;B",
    //    "A + B"), guarda o componente inteiro e o "nome nu" (última palavra
    //    relevante, que costuma ser a substância: "fosfato dissódico de
    //    Betametasona" -> "Betametasona"; "Besilato de Anlodipino" -> "Anlodipino")
    const nomeNu = (p) => {
        const palavras = p.trim().split(/\s+/).filter((w) => w && !STOPWORDS_SINONIMO.has(norm(w)));
        return palavras.length ? palavras[palavras.length - 1] : '';
    };
    const partes = med.principioAtivo.split(/;|\+|,| e /i).map((p) => p.trim()).filter(Boolean);
    if (partes.length > 1) {
        // combinação: guarda cada componente inteiro (não o "nome nu" isolado, pra
        // uma combinação não competir de igual pra igual com o medicamento puro
        // daquele componente numa busca por ele)
        partes.forEach((p) => add(p));
    } else {
        // substância única: guarda a versão sem o sal ("Anlodipino" de "Besilato de Anlodipino")
        add(nomeNu(med.principioAtivo));
    }

    // 3) nomes das alternativas genéricas do próprio item (são, por construção,
    //    o mesmo princípio ativo — servem de sinônimo de marca)
    for (const g of med.genericos || []) {
        add(g.nome);
    }

    return [...set.values()].slice(0, 12);
}

/**
 * Retorna uma cópia do medicamento com descricao/classeTerapeutica/sinonimias
 * enriquecidas. `classeTerapeutica` guarda a classe CMED original; se o item já
 * tiver sido enriquecido antes, usa a classe preservada como fonte da verdade.
 */
function enriquecer(med) {
    const classeOriginal = med.classeTerapeutica || med.descricao || '';
    return {
        ...med,
        descricao: descricaoAmigavel(classeOriginal) || med.descricao || '',
        classeTerapeutica: classeOriginal,
        sinonimias: derivarSinonimias(med),
    };
}

module.exports = {
    enriquecer,
    descricaoAmigavel,
    derivarSinonimias,
    REGRAS_DESCRICAO,
    SINONIMOS_CURADOS,
};
