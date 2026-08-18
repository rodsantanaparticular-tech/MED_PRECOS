/**
 * MED_PRECOS - Banco de dados REAL de medicamentos
 * Fonte: Lista de Preços CMED (ANVISA) - arquivo "site" (PF + PMC por alíquota de ICMS)
 * https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos
 * Publicada em: 11/08/2026 | Gerado em: 18/08/2026
 *
 * IMPORTANTE - aproximação de preço (ver STATUS.md para detalhes):
 * PMC (Preço Máximo ao Consumidor) varia por UF conforme alíquota de ICMS.
 * Este arquivo usa uma referência única nacional:
 *   - Produtos "Genérico" -> coluna PMC 12% (alíquota reduzida SP/MG p/ genéricos)
 *   - Demais produtos     -> coluna PMC 18% (alíquota padrão SP)
 * Preço real ao consumidor pode variar (para mais ou para menos) conforme o estado.
 * BANCO_FARMACIAS abaixo permanece mock (geo-referenciamento real ainda pendente).
 */

const BANCO_MEDICAMENTOS = [
    {
        "id": "med-00001",
        "nome": "Filinar g",
        "principioAtivo": "Acebrofilina",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "5 MG/ML GEL OR CT FR PLAS TRANS X 120ML + COL"
        ],
        "genericos": [
            {
                "nome": "Melysse",
                "precoBase": 21.35
            },
            {
                "nome": "Acebrofilina",
                "precoBase": 24.49
            },
            {
                "nome": "Brondilat",
                "precoBase": 26.4
            },
            {
                "nome": "Broncomucol",
                "precoBase": 29.15
            },
            {
                "nome": "Lisomuc",
                "precoBase": 32.16
            },
            {
                "nome": "Filinar",
                "precoBase": 33.5
            }
        ],
        "precoReferencia": 32.32,
        "sinonimias": []
    },
    {
        "id": "med-00002",
        "nome": "Proflam",
        "principioAtivo": "Aceclofenaco",
        "descricao": "Antirreumáticos e analgésicos tópicos",
        "apresentacoes": [
            "100 MG COM REV CT BL AL / AL X 6",
            "100 MG COM REV CT BL AL/AL X 12",
            "15 MG/G CREM CT TB AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Aceflor",
                "precoBase": 27.69
            },
            {
                "nome": "Aceclofenaco",
                "precoBase": 36.15
            },
            {
                "nome": "Aceclo-gran",
                "precoBase": 65.68
            }
        ],
        "precoReferencia": 40.99,
        "sinonimias": []
    },
    {
        "id": "med-00003",
        "nome": "Zytiga",
        "principioAtivo": "Acetato de Abiraterona",
        "descricao": "Hormônios antiandrogênicos citostáticos",
        "apresentacoes": [
            "250 MG COM CT FR PLAS PEAD OPC X 120"
        ],
        "genericos": [
            {
                "nome": "Balefio",
                "precoBase": 3360.23
            },
            {
                "nome": "Acetato de Abiraterona",
                "precoBase": 12524.54
            },
            {
                "nome": "Spylglen",
                "precoBase": 18266.44
            },
            {
                "nome": "Abmetha",
                "precoBase": 18565.51
            },
            {
                "nome": "Rarija",
                "precoBase": 19128.32
            },
            {
                "nome": "Zostide",
                "precoBase": 19962.12
            }
        ],
        "precoReferencia": 20982.09,
        "sinonimias": []
    },
    {
        "id": "med-00004",
        "nome": "Celestone Soluspan",
        "principioAtivo": "Acetato de Betametasona;fosfato Dissódico de Betametasona",
        "descricao": "Corticosteróides injetáveis puros",
        "apresentacoes": [
            "3,0 MG/ML + 3,945 MG/ML SUS INJ CT 1 AMP VD TRANS X 1 ML "
        ],
        "genericos": [
            {
                "nome": "Beta-long",
                "precoBase": 741.25
            }
        ],
        "precoReferencia": 35.47,
        "sinonimias": []
    },
    {
        "id": "med-00005",
        "nome": "Androcur",
        "principioAtivo": "Acetato de Ciproterona",
        "descricao": "Hormônios antiandrogênicos citostáticos",
        "apresentacoes": [
            "100 MG COM CT BL AL PLAS TRANS X 20",
            "50 MG COM CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Acetato de Ciproterona",
                "precoBase": 146.39
            }
        ],
        "precoReferencia": 253.06,
        "sinonimias": []
    },
    {
        "id": "med-00006",
        "nome": "Ddavp",
        "principioAtivo": "Acetato de Desmopressina",
        "descricao": "Hormônios antidiuréticos",
        "apresentacoes": [
            "0,1 MG COM CT FR PLAS PEAD OPC X 30",
            "0,1 MG/ML SOL SPR NAS CT FR SPR VD AMB 2,5ML",
            "0,2 MG COM CT FR PLAS PEAD OPC X 30",
            "4 MCG/ML SOL INJ CT 10 AMP VD TRANS X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Acetato de Desmopressina",
                "precoBase": 249.1
            },
            {
                "nome": "Dosyx",
                "precoBase": 267.33
            }
        ],
        "precoReferencia": 299.7,
        "sinonimias": []
    },
    {
        "id": "med-00007",
        "nome": "Cortitop",
        "principioAtivo": "Acetato de Dexametasona",
        "descricao": "Corticoesteróides tópicos puros",
        "apresentacoes": [
            "1 MG/G CREM DERM CT BG AL X 10 G  ",
            "1 MG/G CREM DERM CT BG AL X 20 G",
            "1 MG/G CREM DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Acetato de Dexametasona",
                "precoBase": 6.92
            },
            {
                "nome": "Dexametrat",
                "precoBase": 7.43
            },
            {
                "nome": "Dexamex",
                "precoBase": 13.03
            },
            {
                "nome": "Dexagreen",
                "precoBase": 14.6
            },
            {
                "nome": "Dexadermil",
                "precoBase": 19.13
            },
            {
                "nome": "Metadex",
                "precoBase": 21.93
            }
        ],
        "precoReferencia": 23.14,
        "sinonimias": []
    },
    {
        "id": "med-00008",
        "nome": "Florate",
        "principioAtivo": "Acetato de Fluormetolona",
        "descricao": "Corticosteróides oftalmológicos",
        "apresentacoes": [
            "1,0 MG/ML SUS OFT CT FR GOT PLAS OPC X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Flutinol",
                "precoBase": 46.15
            }
        ],
        "precoReferencia": 41.06,
        "sinonimias": []
    },
    {
        "id": "med-00009",
        "nome": "Copaxone",
        "principioAtivo": "Acetato de Glatirâmer",
        "descricao": "Produtos para esclerose múltipla",
        "apresentacoes": [
            "40 MG/ML SOL INJ SC CT 12 SER PREENC VD TRANS X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Glametix",
                "precoBase": 10041.83
            }
        ],
        "precoReferencia": 8607.01,
        "sinonimias": []
    },
    {
        "id": "med-00010",
        "nome": "Acetato de Hidrocortisona",
        "principioAtivo": "Acetato de Hidrocortisona",
        "descricao": "Corticoesteróides tópicos puros",
        "apresentacoes": [
            "10 MG/G CREM DERM CT BG AL X 15 G ",
            "10 MG/G CREM DERM CT BG AL X 20 G",
            "10 MG/G CREM DERM CT BG AL X 30 G "
        ],
        "genericos": [
            {
                "nome": "Cortigen",
                "precoBase": 11.83
            }
        ],
        "precoReferencia": 16.19,
        "sinonimias": []
    },
    {
        "id": "med-00011",
        "nome": "Firazyr",
        "principioAtivo": "Acetato de Icatibanto",
        "descricao": "Produtos para angiodema hereditário",
        "apresentacoes": [
            "10 MG/ML CT 1 SER X 3 ML + AGULHA"
        ],
        "genericos": [
            {
                "nome": "Acetato de Icatibanto",
                "precoBase": 7435.6
            },
            {
                "nome": "Gulandaripa",
                "precoBase": 7979.66
            }
        ],
        "precoReferencia": 12415.12,
        "sinonimias": []
    },
    {
        "id": "med-00012",
        "nome": "Lupron",
        "principioAtivo": "Acetato de Leuprorrelina",
        "descricao": "Análogos hormonais de liberação de gonadotrofinas citostáticos",
        "apresentacoes": [
            "11,25 MG PO LIOF SUS INJ CT FA VD TRANS +  SOL DIL AMP VD TRANS X 2 ML + SER + 2 AGU+ 2 SACHETS DE ÁLCOOL"
        ],
        "genericos": [
            {
                "nome": "Lectrum",
                "precoBase": 1076.6
            },
            {
                "nome": "Eligard",
                "precoBase": 3121.46
            }
        ],
        "precoReferencia": 3658.72,
        "sinonimias": []
    },
    {
        "id": "med-00013",
        "nome": "Depo-provera",
        "principioAtivo": "Acetato de Medroxiprogesterona",
        "descricao": "Outros hormônios contraceptivos sistêmicos",
        "apresentacoes": [
            "150 MG/ML SUS INJ CT BL PLAS PLAS TRANS X SER VD TRANS PREENC X 1 ML + AG DESC",
            "150 MG/ML SUS INJ CT FA VD TRANS X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Contracep",
                "precoBase": 34.71
            },
            {
                "nome": "Provera",
                "precoBase": 47.58
            },
            {
                "nome": "Demedrox",
                "precoBase": 53.91
            }
        ],
        "precoReferencia": 54.05,
        "sinonimias": []
    },
    {
        "id": "med-00014",
        "nome": "Cyclofemina",
        "principioAtivo": "Acetato de Medroxiprogesterona;cipionato de Estradiol",
        "descricao": "Outros hormônios contraceptivos sistêmicos",
        "apresentacoes": [
            "25 MG + 5 MG SUS INJ CX 50 AMP VD INC X 0,5 ML",
            "25 MG+ 5 MG SUS INJ CX 2 AMP VD INC X 0,5 ML",
            "25 MG+ 5 MG SUS INJ CX 3 AMP VD INC X 0,5 ML"
        ],
        "genericos": [
            {
                "nome": "Acetato de Medroxiprogesterona +cipionato de Estradiol",
                "precoBase": 28.12
            },
            {
                "nome": "Naomi",
                "precoBase": 38.28
            },
            {
                "nome": "Lyndaveluno",
                "precoBase": 46.4
            }
        ],
        "precoReferencia": 92.81,
        "sinonimias": []
    },
    {
        "id": "med-00015",
        "nome": "Depo-medrol",
        "principioAtivo": "Acetato de Metilprednisolona",
        "descricao": "Corticosteróides injetáveis puros",
        "apresentacoes": [
            "40 MG/ML SUS INJ CT FA VD TRANS X 2 ML "
        ],
        "genericos": [
            {
                "nome": "Predi-medrol",
                "precoBase": 30.3
            }
        ],
        "precoReferencia": 31.17,
        "sinonimias": []
    },
    {
        "id": "med-00016",
        "nome": "Estalis",
        "principioAtivo": "Acetato de Noretisterona;estradiol",
        "descricao": "Associações de estrógenos e progestógenos",
        "apresentacoes": [
            "50 MCG + 140 MCG STT CT 8 ENV X 1"
        ],
        "genericos": [
            {
                "nome": "Estradiol+acetato de Noretisterona",
                "precoBase": 48.82
            },
            {
                "nome": "Suprema",
                "precoBase": 51.4
            }
        ],
        "precoReferencia": 176.35,
        "sinonimias": []
    },
    {
        "id": "med-00017",
        "nome": "Natifa Pro Ubd",
        "principioAtivo": "Acetato de Noretisterona;estradiol Hemi-hidratado",
        "descricao": "Associações de estrógenos e progestógenos",
        "apresentacoes": [
            "(0,5 + 0,1) MG COM REV CT BL AL PLAS PCTFE TRANS X 28",
            "(0,5 + 0,1) MG COM REV CT BL AL PLAS PCTFE TRANS X 84"
        ],
        "genericos": [
            {
                "nome": "Estradiol + Acetato de Noretisterona",
                "precoBase": 59.99
            },
            {
                "nome": "Natifa Pro",
                "precoBase": 100.21
            },
            {
                "nome": "Systen Sequi",
                "precoBase": 159.88
            },
            {
                "nome": "Systen Conti",
                "precoBase": 174.55
            }
        ],
        "precoReferencia": 100.21,
        "sinonimias": []
    },
    {
        "id": "med-00018",
        "nome": "Pred",
        "principioAtivo": "Acetato de Prednisolona",
        "descricao": "Corticosteróides oftalmológicos",
        "apresentacoes": [
            "1,2 MG/ML SUS OC  FR PLAS OPC GOT X 10 ML",
            "1,2 MG/ML SUS OFT  FR PLAS OPC GOT X 5 ML",
            "10 MG/ML SUS OC FR PLAS OPC GOT X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Ster",
                "precoBase": 33.08
            },
            {
                "nome": "Acetato de Prednisolona",
                "precoBase": 35.0
            },
            {
                "nome": "Visiopred",
                "precoBase": 37.56
            },
            {
                "nome": "Predoptic",
                "precoBase": 48.79
            },
            {
                "nome": "Oftpred",
                "precoBase": 55.47
            }
        ],
        "precoReferencia": 29.94,
        "sinonimias": []
    },
    {
        "id": "med-00019",
        "nome": "Emama",
        "principioAtivo": "Acetato de Racealfatocoferol",
        "descricao": "Vitamina e pura",
        "apresentacoes": [
            "400 MG CAP MOLE CT BL AL PLAS TRANS X 30 "
        ],
        "genericos": [
            {
                "nome": "Vitamina e",
                "precoBase": 33.59
            },
            {
                "nome": "Teutovit e",
                "precoBase": 45.48
            },
            {
                "nome": "Vita e",
                "precoBase": 46.52
            },
            {
                "nome": "Ephynal",
                "precoBase": 69.78
            },
            {
                "nome": "Vitamin e",
                "precoBase": 72.84
            }
        ],
        "precoReferencia": 83.26,
        "sinonimias": []
    },
    {
        "id": "med-00020",
        "nome": "Ad-vitam",
        "principioAtivo": "Acetato de Retinol;colecalciferol",
        "descricao": "Associações vitaminas a com d",
        "apresentacoes": [
            "(50000 + 10000) UI/ML SOL OR CT FR GOT PLAS AMB X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Ad-til",
                "precoBase": 10.66
            }
        ],
        "precoReferencia": 22.12,
        "sinonimias": []
    },
    {
        "id": "med-00021",
        "nome": "Fluimucil",
        "principioAtivo": "Acetilcisteína",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "100 MG/ML SOL INJ CT 5 AMP VD AMB X 3 ML",
            "11,50 MG/ML SOL NAS CT FR VD AMB X 20 ML + MICRONEBULIZADOR",
            "120 MG/G GRAN SOL CT 16 ENV AL PLAS PE X 5 G",
            "20 MG/ML XPE CT FR VD AMB X 120 ML + COP SBR FRAMBOESA"
        ],
        "genericos": [
            {
                "nome": "Acetilcisteina",
                "precoBase": 23.25
            },
            {
                "nome": "Acetilcisteína",
                "precoBase": 32.53
            },
            {
                "nome": "Cisteil",
                "precoBase": 33.15
            },
            {
                "nome": "Bromuc",
                "precoBase": 36.35
            },
            {
                "nome": "Aires",
                "precoBase": 40.82
            },
            {
                "nome": "Flucistein",
                "precoBase": 41.04
            }
        ],
        "precoReferencia": 36.51,
        "sinonimias": []
    },
    {
        "id": "med-00022",
        "nome": "Nasacort",
        "principioAtivo": "Acetonida de Triancinolona",
        "descricao": "Corticosteróides nasais sem antiinfecciosos",
        "apresentacoes": [
            "550 MCG/ML SUS NAS CT FR PLAS OPC SPRAY X 16,5 ML"
        ],
        "genericos": [
            {
                "nome": "Allenasal",
                "precoBase": 78.4
            }
        ],
        "precoReferencia": 105.96,
        "sinonimias": []
    },
    {
        "id": "med-00023",
        "nome": "Zovirax",
        "principioAtivo": "Aciclovir",
        "descricao": "Antivirais para herpes",
        "apresentacoes": [
            "200 MG COM CT BL AL/PAP PLAS PVC /PVDC OPC X 25",
            "50 MG/G CREM DERM CT BG AL X 10 G"
        ],
        "genericos": [
            {
                "nome": "Acivirax",
                "precoBase": 19.45
            },
            {
                "nome": "Aciclovir",
                "precoBase": 27.63
            },
            {
                "nome": "Ezopen",
                "precoBase": 42.54
            },
            {
                "nome": "Hervirax",
                "precoBase": 42.65
            },
            {
                "nome": "Antivirax",
                "precoBase": 44.99
            },
            {
                "nome": "Aciclor",
                "precoBase": 45.73
            }
        ],
        "precoReferencia": 75.04,
        "sinonimias": []
    },
    {
        "id": "med-00024",
        "nome": "Dormec",
        "principioAtivo": "Acido Acetilsalicilico",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "100 MG COM CT 50 STR X 10"
        ],
        "genericos": [
            {
                "nome": "Aas",
                "precoBase": 27.18
            }
        ],
        "precoReferencia": 84.22,
        "sinonimias": []
    },
    {
        "id": "med-00025",
        "nome": "Neotigason",
        "principioAtivo": "Acitretina",
        "descricao": "Antipsoríase sistêmicos",
        "apresentacoes": [
            "10 MG CAP DURA CT BL AL PLAS AMB X 100",
            "10 MG CAP DURA CT BL AL PLAS AMB X 30",
            "25 MG CAP DURA CT BL AL PLAS AMB X 100",
            "25 MG CAP DURA CT BL AL PLAS AMB X 30"
        ],
        "genericos": [
            {
                "nome": "Acitretina",
                "precoBase": 554.68
            }
        ],
        "precoReferencia": 274.74,
        "sinonimias": []
    },
    {
        "id": "med-00026",
        "nome": "Tepemen",
        "principioAtivo": "Actaea Racemosa l.",
        "descricao": "Outros ginecológicos",
        "apresentacoes": [
            "80 MG CAP GEL DURA CT BL AL PLAS INC X 30"
        ],
        "genericos": [
            {
                "nome": "Aplause",
                "precoBase": 21.37
            },
            {
                "nome": "Clifemin",
                "precoBase": 98.75
            }
        ],
        "precoReferencia": 103.13,
        "sinonimias": []
    },
    {
        "id": "med-00027",
        "nome": "Hyrimoz",
        "principioAtivo": "Adalimumabe",
        "descricao": "Produtos anti-tnf( fator de necrose tumoral)",
        "apresentacoes": [
            "40 MG SOL INJ CT 2 CANETA PREENCH X 0,4 ML",
            "40 MG SOL INJ CT 2 CANETA PREENCH X 0,8ML",
            "40 MG SOL INJ CT BL PLAS X 2 SER VD PREENCH C/ AGU X 0,4",
            "40 MG SOL INJ CT BL PLAS X 2 SER VD PREENCH C/ AGU X 0,8 ML"
        ],
        "genericos": [
            {
                "nome": "Amgevita",
                "precoBase": 1220.27
            },
            {
                "nome": "Yuflyma",
                "precoBase": 1678.36
            },
            {
                "nome": "Atenfe",
                "precoBase": 1698.16
            },
            {
                "nome": "Hadlima",
                "precoBase": 2219.82
            },
            {
                "nome": "Hulio",
                "precoBase": 2279.01
            },
            {
                "nome": "Idacio",
                "precoBase": 5700.05
            }
        ],
        "precoReferencia": 16300.3,
        "sinonimias": []
    },
    {
        "id": "med-00028",
        "nome": "Differin",
        "principioAtivo": "Adapaleno",
        "descricao": "Antiacneicos tópicos",
        "apresentacoes": [
            "3 MG/G GEL DERM CT BG PLAS LAM X 30 G"
        ],
        "genericos": [
            {
                "nome": "Belpele",
                "precoBase": 14.43
            },
            {
                "nome": "Adacne",
                "precoBase": 55.03
            },
            {
                "nome": "Adapaleno",
                "precoBase": 58.84
            },
            {
                "nome": "Deriva Micro",
                "precoBase": 116.79
            }
        ],
        "precoReferencia": 130.22,
        "sinonimias": []
    },
    {
        "id": "med-00029",
        "nome": "Adacne Clin",
        "principioAtivo": "Adapaleno;fosfato de Clindamicina",
        "descricao": "Antiacneicos tópicos",
        "apresentacoes": [
            "1 MG/G + 10 MG/G GEL DERM CT BG AL REV PLAS X 45 G"
        ],
        "genericos": [
            {
                "nome": "Deriva c Micro",
                "precoBase": 51.26
            }
        ],
        "precoReferencia": 81.75,
        "sinonimias": []
    },
    {
        "id": "med-00030",
        "nome": "Adapaleno + Peróxido de Benzoíla",
        "principioAtivo": "Adapaleno;peroxido de Benzoila",
        "descricao": "Antiacneicos tópicos",
        "apresentacoes": [
            "(1 + 25) MG/G GEL DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Adacne Perox",
                "precoBase": 36.07
            }
        ],
        "precoReferencia": 87.38,
        "sinonimias": []
    },
    {
        "id": "med-00031",
        "nome": "Epiduo",
        "principioAtivo": "Adapaleno;peróxido de Benzoíla",
        "descricao": "Antiacneicos tópicos",
        "apresentacoes": [
            "(3 + 25) MG/G GEL DERM CT FR PLAS PP/PEAD/PEMBD OPC X 45 G",
            "1MG/G + 25MG/G GEL TOP CT BG AL/PLAS OPC X 30G"
        ],
        "genericos": [
            {
                "nome": "Adazo",
                "precoBase": 24.05
            }
        ],
        "precoReferencia": 144.27,
        "sinonimias": []
    },
    {
        "id": "med-00032",
        "nome": "Varivax",
        "principioAtivo": "Aesculus Hippocastanum l.",
        "descricao": "Vasoprotetores sistêmicos",
        "apresentacoes": [
            "100 MG COM REV CT BL AL PLAS TRANS X 30",
            "300 MG COM REV CX BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Varicaps ah",
                "precoBase": 31.28
            },
            {
                "nome": "Castanha da India Globo",
                "precoBase": 39.28
            },
            {
                "nome": "Proctocaps",
                "precoBase": 39.55
            },
            {
                "nome": "Castanha da Índia ec",
                "precoBase": 40.46
            },
            {
                "nome": "Castanha da Índia",
                "precoBase": 44.76
            },
            {
                "nome": "Variless Bionatus",
                "precoBase": 50.04
            }
        ],
        "precoReferencia": 116.24,
        "sinonimias": []
    },
    {
        "id": "med-00033",
        "nome": "Pavblu",
        "principioAtivo": "Aflibercepte",
        "descricao": "Produtos antineovascularização ocular",
        "apresentacoes": [
            "40 MG/ML SOL INJ IVIT CT FA VD TRANS X 0,278 ML"
        ],
        "genericos": [
            {
                "nome": "Eylia",
                "precoBase": 7643.08
            }
        ],
        "precoReferencia": 7643.08,
        "sinonimias": []
    },
    {
        "id": "med-00034",
        "nome": "Valdoxan",
        "principioAtivo": "Agomelatina",
        "descricao": "Antidepressivos todos os outros",
        "apresentacoes": [
            "25 MG COM REV CT BL AL PLAS PVC TRANS X 14",
            "25 MG COM REV CT BL AL PLAS PVC TRANS X 28",
            "25 MG COM REV CT BL AL PLAS PVC TRANS X 56"
        ],
        "genericos": [
            {
                "nome": "Agomelatina",
                "precoBase": 47.19
            },
            {
                "nome": "Elencos",
                "precoBase": 129.68
            },
            {
                "nome": "Agoxom",
                "precoBase": 146.3
            }
        ],
        "precoReferencia": 155.85,
        "sinonimias": []
    },
    {
        "id": "med-00035",
        "nome": "Monozol",
        "principioAtivo": "Albendazol",
        "descricao": "Anti-helmínticos exceto esquistossomicidas (p1c)",
        "apresentacoes": [
            "400 MG COM MAST CT BL AL PLAS OPC X 1"
        ],
        "genericos": [
            {
                "nome": "Elfi",
                "precoBase": 7.06
            },
            {
                "nome": "Benzol",
                "precoBase": 8.09
            },
            {
                "nome": "Albendazol",
                "precoBase": 8.84
            },
            {
                "nome": "Albendazol 40 Mg/ml Suspensão Oral",
                "precoBase": 9.1
            },
            {
                "nome": "Albel",
                "precoBase": 10.27
            },
            {
                "nome": "Albentel",
                "precoBase": 13.15
            }
        ],
        "precoReferencia": 18.53,
        "sinonimias": []
    },
    {
        "id": "med-00036",
        "nome": "Alendronato de Sodio",
        "principioAtivo": "Alendronato de Sódio",
        "descricao": "Bisfosfonatos para osteoporose e alterações relacionadas",
        "apresentacoes": [
            "70 MG COM CT BL AL/AL X 4"
        ],
        "genericos": [
            {
                "nome": "Alendronato de Sódio",
                "precoBase": 21.17
            },
            {
                "nome": "Endrostan",
                "precoBase": 70.52
            }
        ],
        "precoReferencia": 181.23,
        "sinonimias": []
    },
    {
        "id": "med-00037",
        "nome": "Ledar",
        "principioAtivo": "Alendronato de Sódio Tri-hidratado",
        "descricao": "Bisfosfonatos para osteoporose e alterações relacionadas",
        "apresentacoes": [
            "70 MG COM CT BL AL/AL X 4"
        ],
        "genericos": [
            {
                "nome": "Alendronato de Sódio",
                "precoBase": 48.93
            },
            {
                "nome": "Alendronato de Sodio",
                "precoBase": 72.16
            },
            {
                "nome": "Ostrazil",
                "precoBase": 77.44
            },
            {
                "nome": "Endrostan",
                "precoBase": 79.97
            },
            {
                "nome": "Osteofar",
                "precoBase": 81.92
            },
            {
                "nome": "Osteoform",
                "precoBase": 83.08
            }
        ],
        "precoReferencia": 194.52,
        "sinonimias": []
    },
    {
        "id": "med-00038",
        "nome": "Eprex",
        "principioAtivo": "Alfaepoetina",
        "descricao": "Eritropoietínas",
        "apresentacoes": [
            "10000 UI SOL INJ CT 6 SER PREENCHIDA X 1,0 ML + 1 DISPOSITIVO",
            "4000 UI SOL INJ CT 6 SER PREENCHIDA X 0,4 ML + 1 DISPOSITIVO",
            "40000 UI  SOL INJ CT SER PREENCHIDA X 1,0 ML + 1 DISPOSITIVO"
        ],
        "genericos": [
            {
                "nome": "Hemax Eritron",
                "precoBase": 76.18
            },
            {
                "nome": "Eritromax",
                "precoBase": 86.71
            },
            {
                "nome": "Alfaepoetina",
                "precoBase": 106.11
            }
        ],
        "precoReferencia": 1509.32,
        "sinonimias": []
    },
    {
        "id": "med-00039",
        "nome": "Avicis",
        "principioAtivo": "Alfaestradiol",
        "descricao": "Outras preparações dermatologicas",
        "apresentacoes": [
            "0,25 MG/ML SOL CAPI CT FR PLAS OPC X 100 ML + APLIC"
        ],
        "genericos": [
            {
                "nome": "Alfaestradiol",
                "precoBase": 150.79
            },
            {
                "nome": "Alozex",
                "precoBase": 225.94
            }
        ],
        "precoReferencia": 249.0,
        "sinonimias": []
    },
    {
        "id": "med-00040",
        "nome": "Zyloric",
        "principioAtivo": "Alopurinol",
        "descricao": "Antigotosos",
        "apresentacoes": [
            "100 MG COM CT BL AL PLAS PVC TRANS X 30 ",
            "300 MG COM CT BL AL PLAS PVC TRANS X 30 "
        ],
        "genericos": [
            {
                "nome": "Alopurinol",
                "precoBase": 11.9
            }
        ],
        "precoReferencia": 24.45,
        "sinonimias": []
    },
    {
        "id": "med-00041",
        "nome": "Frontal",
        "principioAtivo": "Alprazolam",
        "descricao": "Tranquilizantes",
        "apresentacoes": [
            "0,25 MG COM CT BL AL PLAS TRANS X 30",
            "0,5 MG COM  LIB PROL CT BL AL/AL X 30",
            "0,5 MG COM CT BL AL PLAS TRANS X 30",
            "1 MG COM  LIB PROL CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Alprazolam",
                "precoBase": 10.56
            },
            {
                "nome": "Apraz",
                "precoBase": 28.24
            },
            {
                "nome": "Tranquinal",
                "precoBase": 28.59
            },
            {
                "nome": "Tranquinal Slg",
                "precoBase": 36.91
            }
        ],
        "precoReferencia": 37.91,
        "sinonimias": []
    },
    {
        "id": "med-00042",
        "nome": "Nemoxil",
        "principioAtivo": "Amoxicilina",
        "descricao": "Penicilinas orais de amplo espectro",
        "apresentacoes": [
            "50 MG/ML PO SUS OR CT FR VD AMB X 150 ML",
            "500 MG CAP GEL DURA CT BL AL PLAS INC X 21"
        ],
        "genericos": [
            {
                "nome": "Apluc",
                "precoBase": 18.59
            },
            {
                "nome": "Amoxicilina",
                "precoBase": 25.98
            }
        ],
        "precoReferencia": 36.32,
        "sinonimias": []
    },
    {
        "id": "med-00043",
        "nome": "Clavulin",
        "principioAtivo": "Amoxicilina Tri-hidratada",
        "descricao": "Penicilinas orais de amplo espectro",
        "apresentacoes": [
            "(80 + 11,4) MG/ML PO SUS OR CT FR VD TRANS X 140 ML + SER DOS"
        ],
        "genericos": [
            {
                "nome": "Apluc",
                "precoBase": 17.67
            },
            {
                "nome": "Amoxicilina",
                "precoBase": 28.02
            },
            {
                "nome": "Ocylin",
                "precoBase": 30.08
            },
            {
                "nome": "Sinot",
                "precoBase": 37.77
            },
            {
                "nome": "Polimoxil",
                "precoBase": 45.49
            },
            {
                "nome": "Velamox bd",
                "precoBase": 51.94
            }
        ],
        "precoReferencia": 428.67,
        "sinonimias": []
    },
    {
        "id": "med-00044",
        "nome": "Amoxil",
        "principioAtivo": "Amoxicilina Trihidratada",
        "descricao": "Penicilinas orais de amplo espectro",
        "apresentacoes": [
            "100 MG/ML PO SUS OR CT FR VD TRANS X 150ML + COL",
            "50 MG/ML PO SUS OR CT FR VD TRANS X 150ML + COL",
            "500 MG CAP DURA CT BL AL PLAS TRANS X 15",
            "500 MG CAP DURA CT BL AL PLAS TRANS X 21"
        ],
        "genericos": [
            {
                "nome": "Amoxicilina",
                "precoBase": 21.89
            },
            {
                "nome": "Velamox",
                "precoBase": 26.73
            },
            {
                "nome": "Amoxicilina Tri-hidratada",
                "precoBase": 55.95
            },
            {
                "nome": "Novocilin",
                "precoBase": 98.61
            }
        ],
        "precoReferencia": 99.12,
        "sinonimias": []
    },
    {
        "id": "med-00045",
        "nome": "Clavulin",
        "principioAtivo": "Amoxicilina Trihidratada;clavulanato de Potássio",
        "descricao": "Penicilinas orais de amplo espectro",
        "apresentacoes": [
            "(500 + 125) MG COM REV CT ENVOL BL AL PLAS PVC/PVDC TRANS X 30",
            "(875+ 125) MG COM REV CT ENVOL BL AL PLAS PVC/PVDC TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Amoxicilina + Clavulanato de Potássio",
                "precoBase": 77.0
            },
            {
                "nome": "Amoxicilina + Clavulanato de Potassio",
                "precoBase": 110.4
            },
            {
                "nome": "Novamox",
                "precoBase": 281.22
            }
        ],
        "precoReferencia": 465.42,
        "sinonimias": []
    },
    {
        "id": "med-00046",
        "nome": "Policlavumoxil bd",
        "principioAtivo": "Amoxicilina;clavulanato de Potássio",
        "descricao": "Penicilinas orais de amplo espectro",
        "apresentacoes": [
            "(80 + 11,4) MG/ML PÓ SUS OR CT FR PLAS OPC X 70 ML + SER DOS + COP",
            "875 MG + 125 MG COM REV CT BL AL/ AL X 20"
        ],
        "genericos": [
            {
                "nome": "Amoxicilina + Clavulanato de Potássio",
                "precoBase": 79.37
            },
            {
                "nome": "Amoxicilina + Clavulanato de Potassio",
                "precoBase": 87.21
            },
            {
                "nome": "Policlavumoxil",
                "precoBase": 106.69
            },
            {
                "nome": "Lânico",
                "precoBase": 129.18
            },
            {
                "nome": "Amoxicilina Triidratada + Clavulanato de Potássio",
                "precoBase": 129.82
            }
        ],
        "precoReferencia": 137.15,
        "sinonimias": []
    },
    {
        "id": "med-00047",
        "nome": "Ampicilab",
        "principioAtivo": "Ampicilina",
        "descricao": "Penicilinas orais de amplo espectro",
        "apresentacoes": [
            "500 MG CAP DURA CT BL AL PLAS OPC X 10"
        ],
        "genericos": [
            {
                "nome": "Ampicilina",
                "precoBase": 20.58
            }
        ],
        "precoReferencia": 47.89,
        "sinonimias": []
    },
    {
        "id": "med-00048",
        "nome": "Amplacilina",
        "principioAtivo": "Ampicilina Anidra",
        "descricao": "Penicilinas orais de amplo espectro",
        "apresentacoes": [
            "500 MG CAP GEL DURA CT BL AL PLAS INC X 12"
        ],
        "genericos": [
            {
                "nome": "Ampicilina",
                "precoBase": 38.03
            }
        ],
        "precoReferencia": 40.81,
        "sinonimias": []
    },
    {
        "id": "med-00049",
        "nome": "Ampicilina Sódica",
        "principioAtivo": "Ampicilina Sódica",
        "descricao": "Penicilinas injetaveis de amplo espectro",
        "apresentacoes": [
            "1 G PO SOL INJ IV/IM CT 50 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Cilinon",
                "precoBase": 7.94
            }
        ],
        "precoReferencia": 767.46,
        "sinonimias": []
    },
    {
        "id": "med-00050",
        "nome": "Arimidex",
        "principioAtivo": "Anastrozol",
        "descricao": "Citostáticos inibidores da aromatase",
        "apresentacoes": [
            "1 MG COM REV CT BL AL PLAS PVC TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Anastrozol",
                "precoBase": 924.71
            },
            {
                "nome": "Arothazy",
                "precoBase": 1063.14
            },
            {
                "nome": "Arazabi",
                "precoBase": 1063.27
            },
            {
                "nome": "Anya",
                "precoBase": 1265.39
            },
            {
                "nome": "Cermaz",
                "precoBase": 1427.81
            },
            {
                "nome": "Anastrolibbs",
                "precoBase": 1463.46
            }
        ],
        "precoReferencia": 1526.63,
        "sinonimias": []
    },
    {
        "id": "med-00051",
        "nome": "Tericin at",
        "principioAtivo": "Anfotericina B;cloridrato de Tetraciclina",
        "descricao": "Antifúngicos ginecológicos",
        "apresentacoes": [
            "25 MG/G + 12,5 MG/G CREM VAG CT BG AL X 40 G + 10 APLIC",
            "25 MG/G + 12,5 MG/G CREM VAG CT BG AL X 45 G + 10 APLIC",
            "25 MG/G + 12,5 MG/G CREM VAG CT BG AL X 60 G + 14 APLIC"
        ],
        "genericos": [
            {
                "nome": "Novasutin",
                "precoBase": 7.36
            }
        ],
        "precoReferencia": 59.23,
        "sinonimias": []
    },
    {
        "id": "med-00052",
        "nome": "Ecalta",
        "principioAtivo": "Anidulafungina",
        "descricao": "Agentes sistêmicos para infecções fúngicas",
        "apresentacoes": [
            "100 MG PO LIOF SOL INJ CT 1 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Anidulafungina",
                "precoBase": 509.51
            }
        ],
        "precoReferencia": 909.26,
        "sinonimias": []
    },
    {
        "id": "med-00053",
        "nome": "Eliquis",
        "principioAtivo": "Apixabana",
        "descricao": "Inibidores diretos do fator xa",
        "apresentacoes": [
            "2,5 MG COM REV CT BL AL PLAS TRANS X 20",
            "2,5 MG COM REV CT BL AL PLAS TRANS X 60",
            "5,0 MG COM REV CT BL AL PLAS TRANS X 20 ",
            "5,0 MG COM REV CT BL AL PLAS TRANS X 60 "
        ],
        "genericos": [
            {
                "nome": "Apixabana",
                "precoBase": 44.11
            },
            {
                "nome": "Ixobam",
                "precoBase": 55.45
            },
            {
                "nome": "Hallis",
                "precoBase": 58.31
            },
            {
                "nome": "Ixabi",
                "precoBase": 64.27
            },
            {
                "nome": "Eknus",
                "precoBase": 69.32
            },
            {
                "nome": "Picbam",
                "precoBase": 69.61
            }
        ],
        "precoReferencia": 145.79,
        "sinonimias": []
    },
    {
        "id": "med-00054",
        "nome": "Kavium Odt",
        "principioAtivo": "Aripiprazol",
        "descricao": "Antipsicóticos atípicos",
        "apresentacoes": [
            "10 MG COM ORODISP CT BL AL AL X 30",
            "15 MG COM ORODISP CT BL AL AL X 30",
            "20 MG COM ORODISP CT BL AL AL X 30",
            "30 MG COM ORODISP CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Hedd",
                "precoBase": 93.03
            },
            {
                "nome": "Aripiprazol",
                "precoBase": 146.11
            },
            {
                "nome": "Harip",
                "precoBase": 261.61
            },
            {
                "nome": "Arpejo",
                "precoBase": 304.86
            },
            {
                "nome": "Sensaz",
                "precoBase": 322.13
            },
            {
                "nome": "Aquarela",
                "precoBase": 349.37
            }
        ],
        "precoReferencia": 825.71,
        "sinonimias": []
    },
    {
        "id": "med-00055",
        "nome": "Targifor",
        "principioAtivo": "Aspartato de Arginina",
        "descricao": "Outros produtos para o aparelho digestório e metabolismo",
        "apresentacoes": [
            "1500 MG COM EFEV CT STR AL/AL X 32"
        ],
        "genericos": [
            {
                "nome": "Reforgan",
                "precoBase": 77.82
            }
        ],
        "precoReferencia": 100.18,
        "sinonimias": []
    },
    {
        "id": "med-00056",
        "nome": "Targifor c",
        "principioAtivo": "Aspartato de Arginina;ácido Ascórbico",
        "descricao": "Todos os outros tônicos",
        "apresentacoes": [
            "1 G + 1 G COM EFEV CT TB PLAS PP OPC X 16 ",
            "500MG + 500MG COM REV CT FR PLAS PET TRANS X 30 ",
            "500MG + 500MG COM REV CT FR PLAS PET TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Aspargil c",
                "precoBase": 48.88
            }
        ],
        "precoReferencia": 49.02,
        "sinonimias": []
    },
    {
        "id": "med-00057",
        "nome": "Angipress",
        "principioAtivo": "Atenolol",
        "descricao": "Betabloqueadores puros",
        "apresentacoes": [
            "25 MG COM CT BL AL PLAS TRANS X 28 ",
            "25 MG COM CT BL AL PLAS TRANS X 30",
            "50 MG COM CT BL AL PLAS TRANS X 28 ",
            "50 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Atenolol",
                "precoBase": 7.21
            },
            {
                "nome": "Atenopress",
                "precoBase": 17.74
            },
            {
                "nome": "Atenolab",
                "precoBase": 20.84
            },
            {
                "nome": "Ablok",
                "precoBase": 26.09
            },
            {
                "nome": "Tenolon",
                "precoBase": 28.42
            },
            {
                "nome": "Telol",
                "precoBase": 31.69
            }
        ],
        "precoReferencia": 38.47,
        "sinonimias": []
    },
    {
        "id": "med-00058",
        "nome": "Citalor",
        "principioAtivo": "Atorvastatina Cálcica",
        "descricao": "Estatinas, inibidores da redutase hmg-coa",
        "apresentacoes": [
            "10 MG COM REV CT BL AL/AL X 30",
            "20 MG COM REV CT BL AL/AL X 30",
            "40 MG COM REV CT BL AL/AL X 30",
            "80 MG COM REV CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Ateroma",
                "precoBase": 34.79
            },
            {
                "nome": "Atorvastatina Cálcica",
                "precoBase": 43.68
            },
            {
                "nome": "Atorvastatina Calcica",
                "precoBase": 60.72
            },
            {
                "nome": "Vast",
                "precoBase": 102.25
            },
            {
                "nome": "Torvilip",
                "precoBase": 106.85
            },
            {
                "nome": "Lipistat",
                "precoBase": 111.51
            }
        ],
        "precoReferencia": 167.19,
        "sinonimias": []
    },
    {
        "id": "med-00059",
        "nome": "Elixir Cólico",
        "principioAtivo": "Atropa Belladonna",
        "descricao": "Antiespasmódicos e anticolinérgicos puros",
        "apresentacoes": [
            "0,2 ML/ML ELX CT FR PLAS OPC GOT X 30 ML"
        ],
        "genericos": [
            {
                "nome": "Colegórico",
                "precoBase": 12.58
            }
        ],
        "precoReferencia": 13.79,
        "sinonimias": []
    },
    {
        "id": "med-00060",
        "nome": "Aura",
        "principioAtivo": "Axetilcefuroxima",
        "descricao": "Cefalosporinas orais",
        "apresentacoes": [
            "500 MG COM CT BL AL/AL X 10 ",
            "500 MG COM CT BL AL/AL X 14",
            "500 MG COM CT BL AL/AL X 20"
        ],
        "genericos": [
            {
                "nome": "Axetilcefuroxima",
                "precoBase": 106.01
            },
            {
                "nome": "Mefex",
                "precoBase": 175.26
            },
            {
                "nome": "Totacef",
                "precoBase": 206.98
            }
        ],
        "precoReferencia": 231.27,
        "sinonimias": []
    },
    {
        "id": "med-00061",
        "nome": "Imuran",
        "principioAtivo": "Azatioprina",
        "descricao": "Outros imunossupressores",
        "apresentacoes": [
            "50 MG COM REV CT BL AL PLAS BR OPC X 100",
            "50 MG COM REV CT BL AL PLAS BR OPC X 50"
        ],
        "genericos": [
            {
                "nome": "Imussuprex",
                "precoBase": 197.87
            }
        ],
        "precoReferencia": 303.66,
        "sinonimias": []
    },
    {
        "id": "med-00062",
        "nome": "Azitromicina Monoidratada",
        "principioAtivo": "Azitromicina",
        "descricao": "Macrolideos e similares",
        "apresentacoes": [
            "500MG PO LIOF SOL INFUS CX 10 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Azitromicina Di-hidratada",
                "precoBase": 30.94
            },
            {
                "nome": "Elim",
                "precoBase": 44.21
            },
            {
                "nome": "Azitromicina",
                "precoBase": 44.73
            },
            {
                "nome": "Azi",
                "precoBase": 46.47
            },
            {
                "nome": "Azinostil",
                "precoBase": 82.86
            }
        ],
        "precoReferencia": 2184.52,
        "sinonimias": []
    },
    {
        "id": "med-00063",
        "nome": "Zitromax",
        "principioAtivo": "Azitromicina Di-hidratada",
        "descricao": "Macrolideos e similares",
        "apresentacoes": [
            "500 MG COM REV CT BL AL PLAS TRANS X 2",
            "500 MG COM REV CT BL AL PLAS TRANS X 3",
            "500 MG COM REV CT BL AL PLAS TRANS X 5"
        ],
        "genericos": [
            {
                "nome": "Azitromicina",
                "precoBase": 16.66
            },
            {
                "nome": "Astro",
                "precoBase": 18.21
            },
            {
                "nome": "Elim",
                "precoBase": 21.14
            },
            {
                "nome": "Azitromicina Diidratada",
                "precoBase": 21.59
            },
            {
                "nome": "Azitromicina Di-hidratada",
                "precoBase": 30.94
            },
            {
                "nome": "Azitromed",
                "precoBase": 32.39
            }
        ],
        "precoReferencia": 47.76,
        "sinonimias": []
    },
    {
        "id": "med-00064",
        "nome": "Lioresal",
        "principioAtivo": "Baclofeno",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "10 MG COM CT BL AL PLAS TRANS  X 20"
        ],
        "genericos": [
            {
                "nome": "Baclofeno",
                "precoBase": 27.57
            },
            {
                "nome": "Baclofen",
                "precoBase": 30.09
            },
            {
                "nome": "Baclon",
                "precoBase": 32.3
            }
        ],
        "precoReferencia": 61.96,
        "sinonimias": []
    },
    {
        "id": "med-00065",
        "nome": "Milgamma",
        "principioAtivo": "Benfotiamina",
        "descricao": "Vitamina b1 pura",
        "apresentacoes": [
            "150 MG  COM REV CT BL AL PLAS PVC/PVDC TRANS X 30 "
        ],
        "genericos": [
            {
                "nome": "Benfibe",
                "precoBase": 16.11
            },
            {
                "nome": "Ombet",
                "precoBase": 32.22
            },
            {
                "nome": "Novob",
                "precoBase": 32.22
            },
            {
                "nome": "Benfotiamina",
                "precoBase": 56.03
            }
        ],
        "precoReferencia": 96.68,
        "sinonimias": []
    },
    {
        "id": "med-00066",
        "nome": "Benzetacil",
        "principioAtivo": "Benzilpenicilina Benzatina",
        "descricao": "Penicilinas de pequeno e médio espectros puras",
        "apresentacoes": [
            "300.000 U/ML SUS INJ IM CT 1 FA VD TRANS X 4 ML",
            "300.000 U/ML SUS INJ IM CX 10 FA VD TRANS X 4 ML (EMB FRAC)",
            "300.000 U/ML SUS INJ IM CX 50 FA VD TRANS X 4 ML"
        ],
        "genericos": [
            {
                "nome": "Benzilpenicilina Benzatina",
                "precoBase": 12.78
            }
        ],
        "precoReferencia": 21.64,
        "sinonimias": []
    },
    {
        "id": "med-00067",
        "nome": "Megapen",
        "principioAtivo": "Benzilpenicilina Potássica",
        "descricao": "Penicilinas de pequeno e médio espectros puras",
        "apresentacoes": [
            "5.400.000 UI PO SOL INJ IV/IM CT 50 FA VD TRANS",
            "550.000 UI PO SOL INJ IV/IM CT 50 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Aricilina",
                "precoBase": 741.22
            }
        ],
        "precoReferencia": 800.52,
        "sinonimias": []
    },
    {
        "id": "med-00068",
        "nome": "Nesina",
        "principioAtivo": "Benzoato de Alogliptina",
        "descricao": "Antidiabéticos inibidores dpp-iv  puros",
        "apresentacoes": [
            "12,5 MG COM REV CT BL AL  AL X 30",
            "25MG COM REV CT BL AL  AL X 10 ",
            "25MG COM REV CT BL AL  AL X 30",
            "25MG COM REV CT BL AL  AL X 60"
        ],
        "genericos": [
            {
                "nome": "Benzoato de Alogliptina",
                "precoBase": 33.87
            },
            {
                "nome": "Libette",
                "precoBase": 55.8
            }
        ],
        "precoReferencia": 108.67,
        "sinonimias": []
    },
    {
        "id": "med-00069",
        "nome": "Benzoderm",
        "principioAtivo": "Benzoato de Benzila",
        "descricao": "Ectoparasiticidas incluindo escabicidas",
        "apresentacoes": [
            "0,25 G/ML EMU TOP CT FR PET AMB X 100 ML ",
            "100 MG/G SAB CT FIL PP X 60 G"
        ],
        "genericos": [
            {
                "nome": "Escab-ifal",
                "precoBase": 10.24
            }
        ],
        "precoReferencia": 20.26,
        "sinonimias": []
    },
    {
        "id": "med-00070",
        "nome": "Maxalt",
        "principioAtivo": "Benzoato de Rizatriptana",
        "descricao": "Antienxaquecosos triptânicos",
        "apresentacoes": [
            "10 MG COM CT BL AL AL X 2",
            "10 MG COM CT BL AL AL X 6"
        ],
        "genericos": [
            {
                "nome": "Benzoato de Rizatriptana",
                "precoBase": 23.57
            },
            {
                "nome": "Enriza",
                "precoBase": 38.72
            },
            {
                "nome": "Aurom",
                "precoBase": 38.93
            },
            {
                "nome": "Zyptan",
                "precoBase": 38.93
            }
        ],
        "precoReferencia": 38.93,
        "sinonimias": []
    },
    {
        "id": "med-00071",
        "nome": "Expec",
        "principioAtivo": "Benzoato de Sódio;cloridrato de Oxomemazina;iodeto de Potássio;guaifenesina",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "(0,4 + 20 + 4 + 6) MG/ML XPE CT FR VD AMB X 120 ML "
        ],
        "genericos": [
            {
                "nome": "Benexpec",
                "precoBase": 34.86
            },
            {
                "nome": "Multitosse",
                "precoBase": 38.11
            },
            {
                "nome": "Tossexpec",
                "precoBase": 48.51
            },
            {
                "nome": "Cloridrato de Oxomemazina + Iodeto de Potássio + Benzoato de Sódio + Guaifenesina",
                "precoBase": 49.45
            },
            {
                "nome": "Secrelise",
                "precoBase": 54.01
            }
        ],
        "precoReferencia": 53.82,
        "sinonimias": []
    },
    {
        "id": "med-00072",
        "nome": "Resfegarganta",
        "principioAtivo": "Benzocaína;cloreto de Cetilpiridínio",
        "descricao": "Preparações para garganta",
        "apresentacoes": [
            "(0,5 + 4,0) MG/ML SOL SPR OR CT FR SPR VD AMB X 50 ML"
        ],
        "genericos": [
            {
                "nome": "Neopiridin",
                "precoBase": 17.12
            },
            {
                "nome": "Sanilin",
                "precoBase": 36.82
            },
            {
                "nome": "Desaftaliv",
                "precoBase": 50.29
            }
        ],
        "precoReferencia": 50.29,
        "sinonimias": []
    },
    {
        "id": "med-00073",
        "nome": "Flagimax",
        "principioAtivo": "Benzoilmetronidazol",
        "descricao": "Amebicidas",
        "apresentacoes": [
            "40 MG/ML SUS OR CT 50 FR PLAS AMB X 100 ML + 50 COP MED ",
            "40 MG/ML SUS OR CT FR PLAS AMB X 100 ML + COP MED "
        ],
        "genericos": [
            {
                "nome": "Benzoilmetronidazol",
                "precoBase": 15.6
            }
        ],
        "precoReferencia": 21.99,
        "sinonimias": []
    },
    {
        "id": "med-00074",
        "nome": "Norvasc",
        "principioAtivo": "Besilato de Anlodipino",
        "descricao": "Antagonistas do cálcio puros",
        "apresentacoes": [
            "10 MG COM CT BL AL PLAS PVC OPC X 30",
            "10 MG COM CT BL AL PLAS PVC OPC X 60",
            "5 MG COM CT BL AL PLAS PVC OPC X 30",
            "5 MG COM CT BL AL PLAS PVC OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Besilato de Anlodipino",
                "precoBase": 14.67
            },
            {
                "nome": "Amlovasc",
                "precoBase": 22.33
            },
            {
                "nome": "Amlodil",
                "precoBase": 31.14
            },
            {
                "nome": "Roxflan",
                "precoBase": 32.46
            },
            {
                "nome": "Cordarex",
                "precoBase": 33.33
            },
            {
                "nome": "Pressat",
                "precoBase": 43.75
            }
        ],
        "precoReferencia": 71.52,
        "sinonimias": []
    },
    {
        "id": "med-00075",
        "nome": "Betalor",
        "principioAtivo": "Besilato de Anlodipino;atenolol",
        "descricao": "Antagonistas do cálcio associados a betabloqueadores",
        "apresentacoes": [
            "5 MG  + 25 MG CAP DURA CT BL AL PLAS TRANS X 7",
            "5 MG + 25 MG CAP DURA CT BL AL PLAS TRANS X 30",
            "5 MG + 50 MG CAP DURA CT BL AL PLAS TRANS X 30 ",
            "5 MG + 50 MG CAP DURA CT BL AL PLAS TRANS X 7"
        ],
        "genericos": [
            {
                "nome": "Besilato de Anlodipino+atenolol",
                "precoBase": 14.67
            }
        ],
        "precoReferencia": 24.25,
        "sinonimias": []
    },
    {
        "id": "med-00076",
        "nome": "Olmecor Triplo",
        "principioAtivo": "Besilato de Anlodipino;hidroclorotiazida;olmesartana Medoxomila",
        "descricao": "Antagonistas da angiotensina ii associados a antihipertensivos (c2) e/ou diuréticos",
        "apresentacoes": [
            "(20 + 5 + 12,5) MG COM REV CT BL AL/AL X 10",
            "(20 + 5 + 12,5) MG COM REV CT BL AL/AL X 30",
            "(20 + 5 + 12,5) MG COM REV CT BL AL/AL X 60",
            "(40 + 10 + 12,5) MG COM REV CT BL AL/AL X 10"
        ],
        "genericos": [
            {
                "nome": "Benicar Triplo",
                "precoBase": 36.69
            }
        ],
        "precoReferencia": 55.12,
        "sinonimias": []
    },
    {
        "id": "med-00077",
        "nome": "Branta",
        "principioAtivo": "Besilato de Anlodipino;losartana Potássica",
        "descricao": "Antagonistas da angiotensina ii associados a antagonistas do cálcio",
        "apresentacoes": [
            "(50,0 + 5,0) MG COM REV CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Lotar",
                "precoBase": 41.21
            },
            {
                "nome": "Besilato de Anlodipino + Losartana Potássica",
                "precoBase": 41.93
            }
        ],
        "precoReferencia": 183.81,
        "sinonimias": []
    },
    {
        "id": "med-00078",
        "nome": "Benicaranlo",
        "principioAtivo": "Besilato de Anlodipino;olmesartana Medoxomila",
        "descricao": "Antagonistas da angiotensina ii associados a antagonistas do cálcio",
        "apresentacoes": [
            "20 MG + 5 MG COM REV CT BL AL/AL X 30",
            "20 MG + 5 MG COM REV CT BL AL/AL X 7 ",
            "40 MG + 10 MG COM REV CT BL AL/AL X 30",
            "40 MG + 10 MG COM REV CT BL AL/AL X 7 "
        ],
        "genericos": [
            {
                "nome": "Olmesartana Medoxomila+besilato de Anlodipino",
                "precoBase": 18.94
            },
            {
                "nome": "Olmy Anlo",
                "precoBase": 31.23
            },
            {
                "nome": "Olzicar Anlo",
                "precoBase": 31.25
            },
            {
                "nome": "Olmetecanlo",
                "precoBase": 41.49
            },
            {
                "nome": "Olmesartana Medoxomila + Besilato de Anlodipino",
                "precoBase": 56.82
            }
        ],
        "precoReferencia": 21.88,
        "sinonimias": []
    },
    {
        "id": "med-00079",
        "nome": "Diovan Amlo Fix",
        "principioAtivo": "Besilato de Anlodipino;valsartana",
        "descricao": "Antagonistas da angiotensina ii associados a antagonistas do cálcio",
        "apresentacoes": [
            "(160,00+10,00) MG COM REV CT BL AL AL X 28",
            "(160,00+5,00) MG COM REV CT BL AL AL X 14 ",
            "(160,00+5,00) MG COM REV CT BL AL AL X 28",
            "(320,00+10,00) MG COM REV CT BL AL AL X 28"
        ],
        "genericos": [
            {
                "nome": "Bravan Duo",
                "precoBase": 62.41
            },
            {
                "nome": "Brasart Bcc",
                "precoBase": 64.3
            },
            {
                "nome": "Valsartana + Anlodipino",
                "precoBase": 79.88
            },
            {
                "nome": "Cosartan Alp",
                "precoBase": 217.01
            }
        ],
        "precoReferencia": 89.93,
        "sinonimias": []
    },
    {
        "id": "med-00080",
        "nome": "Novanlo",
        "principioAtivo": "Besilato de Levanlodipino",
        "descricao": "Antagonistas do cálcio puros",
        "apresentacoes": [
            "2,5 MG COM CT BL AL PLAS PVC/PVDC AMB X 20 ",
            "2,5 MG COM CT BL AL PLAS PVC/PVDC AMB X 30",
            "2,5 MG COM CT BL AL PLAS PVC/PVDC AMB X 60",
            "2,5 MG COM CT BL AL PLAS PVC/PVDC AMB X 90"
        ],
        "genericos": [
            {
                "nome": "Besilato de Levanlodipino",
                "precoBase": 48.92
            },
            {
                "nome": "Atelop",
                "precoBase": 53.81
            },
            {
                "nome": "Lefor",
                "precoBase": 53.82
            },
            {
                "nome": "Cor-select",
                "precoBase": 80.77
            }
        ],
        "precoReferencia": 53.83,
        "sinonimias": []
    },
    {
        "id": "med-00081",
        "nome": "Besilato de Levanlodipino",
        "principioAtivo": "Besilato de Levanlodipino Hemipentaidratado",
        "descricao": "Antagonistas do cálcio puros",
        "apresentacoes": [
            "2,5 MG COM CT BL AL PLAS PVC/PE/PVDC OPC X 30",
            "2,5 MG COM CT BL AL PLAS PVC/PE/PVDC OPC X 60",
            "5 MG COM CT BL AL PLAS PVC/PE/PVDC OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Besilato de Levanlodipino Hemipentaidratado",
                "precoBase": 16.3
            },
            {
                "nome": "Levamz",
                "precoBase": 26.37
            },
            {
                "nome": "Persur",
                "precoBase": 26.92
            }
        ],
        "precoReferencia": 48.92,
        "sinonimias": []
    },
    {
        "id": "med-00082",
        "nome": "Avonex",
        "principioAtivo": "Betainterferona 1a",
        "descricao": "Produtos para esclerose múltipla",
        "apresentacoes": [
            "60 MCG/ML SOL INJ CT 4 CT C/ SER PREENCH X 0,5 ML EM APLIC + AGU + CAPA PROTETORA P/ DESCARTE"
        ],
        "genericos": [
            {
                "nome": "Rebif",
                "precoBase": 18734.16
            }
        ],
        "precoReferencia": 11228.33,
        "sinonimias": []
    },
    {
        "id": "med-00083",
        "nome": "Celestone",
        "principioAtivo": "Betametasona",
        "descricao": "Corticosteróides orais puros",
        "apresentacoes": [
            "0,1 MG/ML ELX  CT FR VD AMB X 120 ML",
            "0,5 MG COM CT BL AL PLAS TRANS X 20",
            "2 MG COM CT BL AL PLAS TRANS X 10"
        ],
        "genericos": [
            {
                "nome": "Betametasona",
                "precoBase": 27.13
            },
            {
                "nome": "Koide",
                "precoBase": 27.47
            }
        ],
        "precoReferencia": 23.89,
        "sinonimias": []
    },
    {
        "id": "med-00084",
        "nome": "Celestamine",
        "principioAtivo": "Betametasona;maleato de Dexclorfeniramina",
        "descricao": "Associações de corticosteróides sistêmicos",
        "apresentacoes": [
            "(0,05 + 0,4) MG/ML XPE CT FR PLAS PET AMB X 120 ML + DOSAD",
            "(0,25 + 2) MG COM CT BL AL PLAS PVC TRANS X 10 ",
            "(0,25 + 2) MG COM CT BL AL PLAS PVC TRANS X 20",
            "(0,25 + 2) MG/ML SOL OR CT FR GOT PLAS PEAD/PEBD OPC X 20 ML "
        ],
        "genericos": [
            {
                "nome": "Maleato de Dexclorfeniramina + Betametasona",
                "precoBase": 15.36
            },
            {
                "nome": "Lofernim Beta",
                "precoBase": 27.14
            },
            {
                "nome": "Celergin",
                "precoBase": 28.61
            },
            {
                "nome": "Celerg",
                "precoBase": 28.61
            },
            {
                "nome": "Celestrat",
                "precoBase": 29.22
            },
            {
                "nome": "Dextamine",
                "precoBase": 30.12
            }
        ],
        "precoReferencia": 20.58,
        "sinonimias": []
    },
    {
        "id": "med-00085",
        "nome": "Cedur",
        "principioAtivo": "Bezafibrato",
        "descricao": "Fibratos",
        "apresentacoes": [
            "400 MG COM REV LIB PROL CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Bezafibrato",
                "precoBase": 36.94
            }
        ],
        "precoReferencia": 208.39,
        "sinonimias": []
    },
    {
        "id": "med-00086",
        "nome": "Casodex",
        "principioAtivo": "Bicalutamida",
        "descricao": "Hormônios antiandrogênicos citostáticos",
        "apresentacoes": [
            "50 MG COM REV CT BL AL PLAS TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Bicalutamida",
                "precoBase": 1068.46
            },
            {
                "nome": "Bycal",
                "precoBase": 1146.65
            },
            {
                "nome": "Bycal 150",
                "precoBase": 1605.32
            }
        ],
        "precoReferencia": 1646.49,
        "sinonimias": []
    },
    {
        "id": "med-00087",
        "nome": "Alektos Ped",
        "principioAtivo": "Bilastina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "2,5 MG/ML SOL OR CT FR VD AMB X 120 ML + COP",
            "2,5 MG/ML SOL OR CT FR VD AMB X 30 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Bixlyn 10",
                "precoBase": 12.54
            },
            {
                "nome": "Hisbila",
                "precoBase": 20.04
            },
            {
                "nome": "Tynna",
                "precoBase": 20.04
            },
            {
                "nome": "Alektos",
                "precoBase": 20.04
            },
            {
                "nome": "Bilastina",
                "precoBase": 30.41
            },
            {
                "nome": "Bixlyn",
                "precoBase": 42.73
            }
        ],
        "precoReferencia": 23.56,
        "sinonimias": []
    },
    {
        "id": "med-00088",
        "nome": "Latisse",
        "principioAtivo": "Bimatoprosta",
        "descricao": "Outros produtos oftalmológico tópicos",
        "apresentacoes": [
            "0,3 MG/ML SOL TOP 1 FR PLAS OPC GOT X 5 ML + 10 BAND 10 APLIC ESTÉRIL + CX "
        ],
        "genericos": [
            {
                "nome": "Ocubin",
                "precoBase": 43.83
            },
            {
                "nome": "Bimatoprosta",
                "precoBase": 103.64
            },
            {
                "nome": "Bimaprost",
                "precoBase": 111.8
            },
            {
                "nome": "Glaucur",
                "precoBase": 111.8
            },
            {
                "nome": "Glamigan",
                "precoBase": 111.82
            },
            {
                "nome": "Visan",
                "precoBase": 146.73
            }
        ],
        "precoReferencia": 291.48,
        "sinonimias": []
    },
    {
        "id": "med-00089",
        "nome": "Kerabio",
        "principioAtivo": "Biotina",
        "descricao": "Outras preparações dermatologicas",
        "apresentacoes": [
            "2,5 MG CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 30",
            "2,5 MG CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 90"
        ],
        "genericos": [
            {
                "nome": "Untral",
                "precoBase": 319.05
            }
        ],
        "precoReferencia": 319.07,
        "sinonimias": []
    },
    {
        "id": "med-00090",
        "nome": "Dulcolax",
        "principioAtivo": "Bisacodil",
        "descricao": "Laxantes estimulantes",
        "apresentacoes": [
            "5 MG COM REV LIB RETARD  CT BL AL PLAS TRANS  X 20 "
        ],
        "genericos": [
            {
                "nome": "Bisalax",
                "precoBase": 9.85
            },
            {
                "nome": "Plesonax",
                "precoBase": 11.0
            },
            {
                "nome": "Ducodil",
                "precoBase": 11.67
            },
            {
                "nome": "Lacto Purga",
                "precoBase": 11.99
            }
        ],
        "precoReferencia": 20.47,
        "sinonimias": []
    },
    {
        "id": "med-00091",
        "nome": "Plavix",
        "principioAtivo": "Bissulfato de Clopidogrel",
        "descricao": "Inibidores da agragação plaquetária, antagonistas dos receptores da adenosina difosfato",
        "apresentacoes": [
            "75 MG COM REV CT BL AL/AL X 28"
        ],
        "genericos": [
            {
                "nome": "Plaq",
                "precoBase": 41.45
            },
            {
                "nome": "Bissulfato de Clopidogrel",
                "precoBase": 66.65
            },
            {
                "nome": "Plagrel",
                "precoBase": 67.47
            },
            {
                "nome": "Plavineo",
                "precoBase": 166.94
            },
            {
                "nome": "Clopin",
                "precoBase": 242.76
            },
            {
                "nome": "Cuore",
                "precoBase": 301.15
            }
        ],
        "precoReferencia": 482.91,
        "sinonimias": []
    },
    {
        "id": "med-00092",
        "nome": "Gamaline v",
        "principioAtivo": "Borago Officinalis l.",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "900 MG CAP MOLE CT BL AL PLAS PVDC TRANS X 15",
            "900 MG CAP MOLE CT BL AL PLAS PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Gamax",
                "precoBase": 107.68
            }
        ],
        "precoReferencia": 122.19,
        "sinonimias": []
    },
    {
        "id": "med-00093",
        "nome": "Bospulmo",
        "principioAtivo": "Bosentana Monoidratada",
        "descricao": "Produtos hipertensão arterial pulmonar antagonistas receptores de endotelina",
        "apresentacoes": [
            "125 MG COM REV CT BL AL PLAS PVC/PE/PVDC OPC X 60",
            "62,5 MG COM REV CT BL AL PLAS PVC/PE/PVDC OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Bosentana",
                "precoBase": 2046.79
            }
        ],
        "precoReferencia": 3446.67,
        "sinonimias": []
    },
    {
        "id": "med-00094",
        "nome": "Lexotan",
        "principioAtivo": "Bromazepam",
        "descricao": "Tranquilizantes",
        "apresentacoes": [
            "3,0 MG COM CT BL AL PLAS TRANS X 30",
            "6,0 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Bromazepam",
                "precoBase": 16.86
            },
            {
                "nome": "Somalium",
                "precoBase": 24.22
            },
            {
                "nome": "Fluxtar",
                "precoBase": 50.82
            }
        ],
        "precoReferencia": 56.54,
        "sinonimias": []
    },
    {
        "id": "med-00095",
        "nome": "Atrovent",
        "principioAtivo": "Brometo de Ipratrópio",
        "descricao": "Antiasmáticos/dpoc anticolinérgicos de curta duração, puros, inalantes",
        "apresentacoes": [
            "0,25 MG/ML SOL INAL CT FR VD AMB X 20 ML",
            "20 MCG/DOSE AER DOSIF CT FR AÇO INOX X 10 ML + BOCAL"
        ],
        "genericos": [
            {
                "nome": "Brometo de Ipratrópio",
                "precoBase": 12.98
            },
            {
                "nome": "Brometo de Ipratropio",
                "precoBase": 16.09
            },
            {
                "nome": "Brometo de Ipratróprio",
                "precoBase": 19.44
            },
            {
                "nome": "Ipravent",
                "precoBase": 25.5
            }
        ],
        "precoReferencia": 32.34,
        "sinonimias": []
    },
    {
        "id": "med-00096",
        "nome": "Brometo de Pinavério",
        "principioAtivo": "Brometo de Pinavério",
        "descricao": "Antiespasmódicos e anticolinérgicos puros",
        "apresentacoes": [
            "100 MG COM REV CT BL AL PLAS OPC X 30",
            "100 MG COM REV CT BL AL PLAS OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Siilif",
                "precoBase": 34.3
            }
        ],
        "precoReferencia": 118.85,
        "sinonimias": []
    },
    {
        "id": "med-00097",
        "nome": "Cipramil",
        "principioAtivo": "Bromidrato de Citalopram",
        "descricao": "Antidepressivos ssri",
        "apresentacoes": [
            "20 MG COM REV CT  BL AL PLAS TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Città",
                "precoBase": 36.43
            },
            {
                "nome": "Denyl",
                "precoBase": 49.4
            },
            {
                "nome": "Procimax",
                "precoBase": 49.9
            },
            {
                "nome": "Bromidrato de Citalopram",
                "precoBase": 88.92
            },
            {
                "nome": "Citalopram",
                "precoBase": 98.31
            },
            {
                "nome": "Nypram",
                "precoBase": 146.08
            }
        ],
        "precoReferencia": 419.72,
        "sinonimias": []
    },
    {
        "id": "med-00098",
        "nome": "Enablex",
        "principioAtivo": "Bromidrato de Darifenacina",
        "descricao": "Produtos para incontinência urinária",
        "apresentacoes": [
            "15 MG COM REV LIB PROL CT BL AL/AL X 28",
            "7,5 MG COM REV LIB PROL CT BL AL/AL X 28"
        ],
        "genericos": [
            {
                "nome": "Bromidrato de Darifenacina",
                "precoBase": 55.78
            },
            {
                "nome": "Fenazic",
                "precoBase": 82.97
            }
        ],
        "precoReferencia": 368.43,
        "sinonimias": []
    },
    {
        "id": "med-00099",
        "nome": "Elatium",
        "principioAtivo": "Bromidrato de Galantamina",
        "descricao": "Produtos antialzheimer, inibidores da colinesterase",
        "apresentacoes": [
            "16 MG CAP DURA LIB PROL CT BL AL PLAS PVDC/PVC TRANS X 280",
            "16 MG CAP DURA LIB PROL CT BL AL PLAS PVDC/PVC TRANS X 30",
            "16 MG CAP DURA LIB PROL CT BL AL PLAS PVDC/PVC TRANS X 300",
            "16 MG CAP DURA LIB PROL CT BL AL PLAS PVDC/PVC TRANS X 500"
        ],
        "genericos": [
            {
                "nome": "Coglive",
                "precoBase": 59.13
            },
            {
                "nome": "Regressa",
                "precoBase": 72.08
            },
            {
                "nome": "Cogit",
                "precoBase": 90.52
            },
            {
                "nome": "Gaudy",
                "precoBase": 96.87
            },
            {
                "nome": "Bromidrato de Galantamina",
                "precoBase": 103.08
            },
            {
                "nome": "Alzynamin",
                "precoBase": 110.63
            }
        ],
        "precoReferencia": 122.84,
        "sinonimias": []
    },
    {
        "id": "med-00100",
        "nome": "Brintellix",
        "principioAtivo": "Bromidrato de Vortioxetina",
        "descricao": "Antidepressivos todos os outros",
        "apresentacoes": [
            "10MG COM REV CT BL AL PLAS TRANS X 30",
            "10MG COM REV CT BL AL PLAS TRANS X 60 ",
            "15MG COM REV CT BL AL PLAS TRANS X 60  ",
            "20MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Bromidrato de Vortioxetina",
                "precoBase": 43.33
            },
            {
                "nome": "Vod",
                "precoBase": 67.29
            },
            {
                "nome": "Vorsync",
                "precoBase": 67.29
            },
            {
                "nome": "Efusive",
                "precoBase": 90.5
            },
            {
                "nome": "Vorpro",
                "precoBase": 102.7
            },
            {
                "nome": "Evortia",
                "precoBase": 102.76
            }
        ],
        "precoReferencia": 103.51,
        "sinonimias": []
    },
    {
        "id": "med-00101",
        "nome": "Digesan",
        "principioAtivo": "Bromoprida",
        "descricao": "Gastroprocinéticos",
        "apresentacoes": [
            "10 MG CAP DURA CT BL AL PLAS TRANS X 20 ",
            "4 MG/ML SOL OR CT FR PLAS OPC GOT X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Balorti",
                "precoBase": 19.32
            },
            {
                "nome": "Bromoprida",
                "precoBase": 22.21
            },
            {
                "nome": "Movinau",
                "precoBase": 26.65
            },
            {
                "nome": "Digesigma Gotas",
                "precoBase": 27.81
            },
            {
                "nome": "Digevita",
                "precoBase": 30.33
            },
            {
                "nome": "Fágico",
                "precoBase": 31.39
            }
        ],
        "precoReferencia": 50.53,
        "sinonimias": []
    },
    {
        "id": "med-00102",
        "nome": "Corament",
        "principioAtivo": "Budesonida",
        "descricao": "Produtos corticoesteroides para alterações intestinais",
        "apresentacoes": [
            "9 MG COM REV LIB MOD CT BL AL AL X 10",
            "9 MG COM REV LIB MOD CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Busonid",
                "precoBase": 12.2
            },
            {
                "nome": "Budesonida",
                "precoBase": 29.36
            },
            {
                "nome": "Inalide",
                "precoBase": 31.5
            },
            {
                "nome": "Inalajet",
                "precoBase": 36.32
            },
            {
                "nome": "Noex",
                "precoBase": 48.06
            },
            {
                "nome": "Pulmicort",
                "precoBase": 59.91
            }
        ],
        "precoReferencia": 329.85,
        "sinonimias": []
    },
    {
        "id": "med-00103",
        "nome": "Vannair",
        "principioAtivo": "Budesonida;fumarato de Formoterol Di-hidratado",
        "descricao": "Antiasmáticos/dpoc agonistas b2 associados a corticosteróides, inalantes",
        "apresentacoes": [
            "(6 + 100) MCG SUS AER INAL OR CT ENVOL TB AL X 120 ACION + DISP INAL",
            "(6 + 200) MCG SUS AER INAL OR CT ENVOL TB AL X 120 ACION + DISP INAL"
        ],
        "genericos": [
            {
                "nome": "Bronx",
                "precoBase": 37.74
            },
            {
                "nome": "Alenia",
                "precoBase": 40.79
            },
            {
                "nome": "Fumarato de Formoterol Di-hidratado + Budesonida",
                "precoBase": 91.4
            },
            {
                "nome": "Symbicort",
                "precoBase": 211.87
            }
        ],
        "precoReferencia": 211.87,
        "sinonimias": []
    },
    {
        "id": "med-00104",
        "nome": "Foraseq",
        "principioAtivo": "Budesonida;fumarato de Formoterol Diidratado",
        "descricao": "Antiasmáticos/dpoc agonistas b2 associados a corticosteróides, inalantes",
        "apresentacoes": [
            "12 MCG PO ENCAP P/INAL CT BL AL/AL X 60 + 200 MCG PO ENCAP P/INAL CT BL AL PLAS X 60",
            "12 MCG PO ENCAP P/INAL CT BL AL/AL X 60 + 200 MCG PO ENCAP P/INAL CT BL AL PLAS X 60 + INALADOR",
            "12 MCG PO ENCAP P/INAL CT BL AL/AL X 60 + 400 MCG PO ENCAP P/INAL CT BL AL PLAS X 60",
            "12 MCG PO ENCAP P/INAL CT BL AL/AL X 60 + 400 MCG PO ENCAP P/INAL CT BL AL PLAS X 60 + INALADOR"
        ],
        "genericos": [
            {
                "nome": "Alenia",
                "precoBase": 30.34
            }
        ],
        "precoReferencia": 175.19,
        "sinonimias": []
    },
    {
        "id": "med-00105",
        "nome": "Transtec",
        "principioAtivo": "Buprenorfina",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "20 MG ADES TRANSD CT ENV AL/PLAS X 4",
            "30 MG ADES TRANSD CT ENV AL/PLAS X 4",
            "40 MG ADES TRANSD CT ENV AL/PLAS X 4"
        ],
        "genericos": [
            {
                "nome": "Buprenorfina",
                "precoBase": 94.68
            },
            {
                "nome": "Lusanda",
                "precoBase": 156.31
            },
            {
                "nome": "Restiva",
                "precoBase": 159.65
            }
        ],
        "precoReferencia": 611.05,
        "sinonimias": []
    },
    {
        "id": "med-00106",
        "nome": "Buscopan",
        "principioAtivo": "Butilbrometo de Escopolamina",
        "descricao": "Antiespasmódicos e anticolinérgicos puros",
        "apresentacoes": [
            "10 MG DRG CT BL AL PLAS PVC/PVDC OPC X 20",
            "10 MG/ML SOL GOT OR CT FR GOT VD AMB X 20 ML",
            "10 MG/ML SOL GOT OR CT FR GOT VD AMB X 20 ML + SER DOS",
            "20 MG SOL INJ CT 5 AMP VD TRANS X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Butilbrometo de Escopolamina",
                "precoBase": 11.43
            },
            {
                "nome": "Espaslit Duo",
                "precoBase": 31.2
            },
            {
                "nome": "Buscopan Pediátrico",
                "precoBase": 31.99
            }
        ],
        "precoReferencia": 29.49,
        "sinonimias": []
    },
    {
        "id": "med-00107",
        "nome": "Dostinex",
        "principioAtivo": "Cabergolina",
        "descricao": "Inibidores da prolactina",
        "apresentacoes": [
            "0,5 MG COM CT FR PLAS PEAD OPC X 2",
            "0,5 MG COM CT FR PLAS PEAD OPC X 8"
        ],
        "genericos": [
            {
                "nome": "Cabergolina",
                "precoBase": 92.04
            },
            {
                "nome": "Caberedux",
                "precoBase": 105.93
            },
            {
                "nome": "Cabertrix",
                "precoBase": 105.93
            },
            {
                "nome": "Bergox",
                "precoBase": 115.1
            }
        ],
        "precoReferencia": 163.01,
        "sinonimias": []
    },
    {
        "id": "med-00108",
        "nome": "Novalgina Flash",
        "principioAtivo": "Cafeína Anidra;dipirona Monoidratada",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "(1000 + 130) MG COM CT BL AL PLAS PVC/PVDC TRANS X 16",
            "(1000 + 130) MG COM CT BL AL PLAS PVC/PVDC TRANS X 8"
        ],
        "genericos": [
            {
                "nome": "Doril dc 500",
                "precoBase": 26.43
            },
            {
                "nome": "Dipirona + Cafeína",
                "precoBase": 27.46
            }
        ],
        "precoReferencia": 25.8,
        "sinonimias": []
    },
    {
        "id": "med-00109",
        "nome": "Doralgina",
        "principioAtivo": "Cafeína Anidra;dipirona Monoidratada;mucato de Isometepteno",
        "descricao": "Associações de antiespasmódicos com analgésicos",
        "apresentacoes": [
            "(300 + 30 + 30) MG COM REV CT BL AL PLAS PVC/PCTFE TRANS X 100",
            "(300 + 30 + 30) MG COM REV CT BL AL PLAS PVC/PCTFE TRANS X 20",
            "30 MG + 300 MG + 30 MG DRG CT BL AL PLAS TRANS X 20 ",
            "30 MG + 300 MG + 30 MG DRG DISP BL AL PLAS TRANS X 100 (EMB MULT)"
        ],
        "genericos": [
            {
                "nome": "Neralgyn",
                "precoBase": 18.26
            }
        ],
        "precoReferencia": 36.46,
        "sinonimias": []
    },
    {
        "id": "med-00110",
        "nome": "Melhoral",
        "principioAtivo": "Cafeína Anidra;ácido Acetilsalicílico",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "500 MG  + 30 MG COM REV BL AL PLAS TRANS X 200 (EMB MULT) "
        ],
        "genericos": [
            {
                "nome": "Calmador",
                "precoBase": 222.62
            }
        ],
        "precoReferencia": 374.74,
        "sinonimias": []
    },
    {
        "id": "med-00111",
        "nome": "Migrainex",
        "principioAtivo": "Cafeína Anidra;ácido Acetilsalicílico;paracetamol",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "250 MG + 250 MG + 65 MG COM REV CT BL AL AL X 20"
        ],
        "genericos": [
            {
                "nome": "Doril Enxaqueca",
                "precoBase": 41.99
            }
        ],
        "precoReferencia": 62.47,
        "sinonimias": []
    },
    {
        "id": "med-00112",
        "nome": "Sigmatriol",
        "principioAtivo": "Calcitriol",
        "descricao": "Vitamina d pura",
        "apresentacoes": [
            "0,25 MCG CAP MOLE CT FR VD AMB X 30 ",
            "0,25 MCG CAP MOLE CT FR VD AMB X 90"
        ],
        "genericos": [
            {
                "nome": "Ostriol",
                "precoBase": 145.49
            }
        ],
        "precoReferencia": 200.46,
        "sinonimias": []
    },
    {
        "id": "med-00113",
        "nome": "Atacand",
        "principioAtivo": "Candesartana Cilexetila",
        "descricao": "Antagonistas da angiotensina ii puros",
        "apresentacoes": [
            "16 MG COM CT BL AL PLAS TRANS X 10",
            "16 MG COM CT BL AL PLAS TRANS X 30",
            "8 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Venzer",
                "precoBase": 32.14
            },
            {
                "nome": "Candesartana Cilexetila",
                "precoBase": 62.26
            },
            {
                "nome": "Vecande",
                "precoBase": 68.53
            },
            {
                "nome": "Cadenza",
                "precoBase": 136.78
            }
        ],
        "precoReferencia": 86.22,
        "sinonimias": []
    },
    {
        "id": "med-00114",
        "nome": "Xeloda",
        "principioAtivo": "Capecitabina",
        "descricao": "Agentes antineoplásicos antimetabólitos",
        "apresentacoes": [
            "150 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 60",
            "500 MG COM REV CT BL AL  PLAS PVC/PVDC TRANS X 120"
        ],
        "genericos": [
            {
                "nome": "Capecitabina",
                "precoBase": 537.2
            },
            {
                "nome": "Capzat",
                "precoBase": 842.26
            },
            {
                "nome": "Coama",
                "precoBase": 886.93
            },
            {
                "nome": "Corretal",
                "precoBase": 886.94
            }
        ],
        "precoReferencia": 886.92,
        "sinonimias": []
    },
    {
        "id": "med-00115",
        "nome": "Qutenza",
        "principioAtivo": "Capsaicina",
        "descricao": "Anestésicos locais tópicos",
        "apresentacoes": [
            "179 MG ADES DERM CT ENV PAP/PLAS PET/AL/PLAS PAN OPC X 2 + GEL DERM TB PLAS PEAD OPC X 50 G",
            "179 MG ADES DERM CT ENV PAP/PLAS PET/AL/PLAS PAN OPC+ GEL DERM TB PLAS PEAD OPC X 50 G"
        ],
        "genericos": [
            {
                "nome": "Moment",
                "precoBase": 72.73
            }
        ],
        "precoReferencia": 2128.49,
        "sinonimias": []
    },
    {
        "id": "med-00116",
        "nome": "Captomido",
        "principioAtivo": "Captopril",
        "descricao": "Inibidores da eca puros",
        "apresentacoes": [
            "50 MG COM CT BL AL PLAS PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Captopril",
                "precoBase": 9.35
            },
            {
                "nome": "Captolab",
                "precoBase": 10.75
            },
            {
                "nome": "Captocord",
                "precoBase": 21.53
            },
            {
                "nome": "Teusil",
                "precoBase": 25.67
            },
            {
                "nome": "Capox",
                "precoBase": 27.66
            },
            {
                "nome": "Captosen",
                "precoBase": 30.96
            }
        ],
        "precoReferencia": 33.33,
        "sinonimias": []
    },
    {
        "id": "med-00117",
        "nome": "Tegretol",
        "principioAtivo": "Carbamazepina",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "20 MG/ML SUS OR CT FR VD AMB X 100 ML + SER DOS",
            "200 MG COM CT  BL AL PLAS PVC/PE/PVDC TRANS X 20",
            "200 MG COM CT BL AL PLAS PVC/PE/PVDC TRANS X 60",
            "200 MG COM LIB PROL CT BL AL PLAS PVC/PE/PVDC TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Carbamazepina",
                "precoBase": 14.6
            },
            {
                "nome": "Tegrezin",
                "precoBase": 23.76
            },
            {
                "nome": "Tegretard",
                "precoBase": 25.78
            },
            {
                "nome": "Uni-carbamaz",
                "precoBase": 31.73
            }
        ],
        "precoReferencia": 36.07,
        "sinonimias": []
    },
    {
        "id": "med-00118",
        "nome": "Mucbe",
        "principioAtivo": "Carbocisteína",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "20 MG/ML XPE CT FR PLAS OPC X 100 ML + CP MED",
            "50 MG/ML XPE CT FR PLAS OPC X 100 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Carbocisteina",
                "precoBase": 19.64
            },
            {
                "nome": "Mucofan",
                "precoBase": 20.87
            },
            {
                "nome": "Carbocisteína",
                "precoBase": 23.6
            }
        ],
        "precoReferencia": 32.7,
        "sinonimias": []
    },
    {
        "id": "med-00119",
        "nome": "Oscal 500",
        "principioAtivo": "Carbonato de Cálcio",
        "descricao": "Produtos a base de cálcio",
        "apresentacoes": [
            "500 MG COM REV CT FR PLAS OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Gastrol",
                "precoBase": 23.99
            },
            {
                "nome": "Nesh Cálcio",
                "precoBase": 69.66
            },
            {
                "nome": "Calciofar Plus",
                "precoBase": 74.45
            }
        ],
        "precoReferencia": 114.0,
        "sinonimias": []
    },
    {
        "id": "med-00120",
        "nome": "Helleva",
        "principioAtivo": "Carbonato de Lodenafila",
        "descricao": "Produtos para disfunção erétil, inibidores da pde5",
        "apresentacoes": [
            "80 MG COM CT BL AL PLAS INC X 20 (EMB FRAC)",
            "80 MG COM CT BL AL PLAS INC X 2 ",
            "80 MG COM CT BL AL PLAS INC X 4",
            "80 MG COM CT BL AL PLAS TRANS X 10"
        ],
        "genericos": [
            {
                "nome": "Pycos",
                "precoBase": 60.27
            }
        ],
        "precoReferencia": 66.94,
        "sinonimias": []
    },
    {
        "id": "med-00121",
        "nome": "Carbolitium",
        "principioAtivo": "Carbonato de Lítio",
        "descricao": "Estabilizadores do humor",
        "apresentacoes": [
            "300 MG COM REV CT BL AL PLAS PVC TRANS X 15",
            "300 MG COM REV CT BL AL PLAS PVC TRANS X 60 ",
            "300 MG COM REV CT BL AL PLAS PVC TRANS X 90",
            "450 MG COM LIB PROL CT BL AL PLAS PVC/PCTFE TRANS X 15"
        ],
        "genericos": [
            {
                "nome": "Carlit",
                "precoBase": 14.64
            },
            {
                "nome": "Literata",
                "precoBase": 22.98
            },
            {
                "nome": "Carbonato de Lítio",
                "precoBase": 32.7
            },
            {
                "nome": "Bipolit",
                "precoBase": 36.38
            },
            {
                "nome": "Bilyt",
                "precoBase": 48.68
            }
        ],
        "precoReferencia": 16.75,
        "sinonimias": []
    },
    {
        "id": "med-00122",
        "nome": "Liris",
        "principioAtivo": "Carboximetilcelulose Sódica",
        "descricao": "Lágrimas artificiais e lubrificantes oftamológicos",
        "apresentacoes": [
            "5 MG/ML SOL OFT CT FR GOT PLAS OPC X 10 ML"
        ],
        "genericos": [
            {
                "nome": "Lacrifilm",
                "precoBase": 39.87
            }
        ],
        "precoReferencia": 48.0,
        "sinonimias": []
    },
    {
        "id": "med-00123",
        "nome": "Mioflex a",
        "principioAtivo": "Carisoprodol;cafeína Anidra;paracetamol;diclofenaco Sódico",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "(125 + 50 + 300 + 30) MG COM CT BL AL PLAS PVC TRANS X 12",
            "(125 + 50 + 300 + 30) MG COM CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Beserol",
                "precoBase": 8.48
            },
            {
                "nome": "Trilax",
                "precoBase": 13.96
            },
            {
                "nome": "Torsilax",
                "precoBase": 19.95
            },
            {
                "nome": "Flexalgin",
                "precoBase": 23.25
            },
            {
                "nome": "Tandene",
                "precoBase": 26.68
            }
        ],
        "precoReferencia": 26.76,
        "sinonimias": []
    },
    {
        "id": "med-00124",
        "nome": "Tanderalgin",
        "principioAtivo": "Carisoprodol;diclofenaco de Sódio;paracetamol;cafeína",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "(125,0 + 50,0 + 300,0 + 30,0) MG COM CT BL AL PLAS TRANS X 15 ",
            "(125,0 + 50,0 + 300,0 + 30,0) MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Trimusk",
                "precoBase": 6.04
            },
            {
                "nome": "Carisoprodol + Diclofenaco de Sódio + Paracetamol+ Cafeína",
                "precoBase": 16.33
            }
        ],
        "precoReferencia": 24.66,
        "sinonimias": []
    },
    {
        "id": "med-00125",
        "nome": "Flexalgin",
        "principioAtivo": "Carisoprodol;paracetamol;cafeína;diclofenaco Sódico",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "(300,0 + 125,0 + 50,0 + 30,0) MG COM CT BL AL PLAS TRANS X 100 (EMB FRAC)",
            "(300,0 + 125,0 + 50,0 + 30,0) MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Torflay",
                "precoBase": 6.61
            },
            {
                "nome": "Carisoprodol + Diclofenaco Sódico + Paracetamol + Cafeína",
                "precoBase": 14.96
            },
            {
                "nome": "Paracetamol + Carisoprodol + Diclofenaco Sódico + Cafeína",
                "precoBase": 15.06
            },
            {
                "nome": "Tandriflan",
                "precoBase": 24.67
            },
            {
                "nome": "Infralax",
                "precoBase": 25.22
            },
            {
                "nome": "Beserol",
                "precoBase": 46.68
            }
        ],
        "precoReferencia": 48.28,
        "sinonimias": []
    },
    {
        "id": "med-00126",
        "nome": "Dews",
        "principioAtivo": "Carmelose Sódica",
        "descricao": "Lágrimas artificiais e lubrificantes oftamológicos",
        "apresentacoes": [
            "5 MG/ML SOL OFT CT FR GOT PLAS PEBD OPC X 10 ML",
            "5 MG/ML SOL OFT CT FR GOT PLAS PEBD OPC X 15 ML"
        ],
        "genericos": [
            {
                "nome": "Lacrifilm",
                "precoBase": 23.62
            },
            {
                "nome": "Tearfilm",
                "precoBase": 23.99
            },
            {
                "nome": "Ecofilm",
                "precoBase": 24.9
            },
            {
                "nome": "Acu Fresh",
                "precoBase": 29.12
            },
            {
                "nome": "Lacrilax",
                "precoBase": 34.68
            },
            {
                "nome": "Plenigell",
                "precoBase": 36.37
            }
        ],
        "precoReferencia": 59.25,
        "sinonimias": []
    },
    {
        "id": "med-00127",
        "nome": "Cardbet",
        "principioAtivo": "Carvedilol",
        "descricao": "Betabloqueadores puros",
        "apresentacoes": [
            "12,5 MG COM CT BL AL AL X 30",
            "25 MG COM CT BL AL AL X 30",
            "3,125 MG COM CT BL AL AL X 30",
            "6,25 MG COM CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Carvedilol",
                "precoBase": 15.42
            },
            {
                "nome": "Divelol",
                "precoBase": 46.45
            },
            {
                "nome": "Cronocor",
                "precoBase": 50.93
            },
            {
                "nome": "Cardilol",
                "precoBase": 52.41
            },
            {
                "nome": "Nienza",
                "precoBase": 52.41
            },
            {
                "nome": "Carvedilat",
                "precoBase": 55.12
            }
        ],
        "precoReferencia": 118.93,
        "sinonimias": []
    },
    {
        "id": "med-00128",
        "nome": "Ceclor",
        "principioAtivo": "Cefaclor",
        "descricao": "Cefalosporinas orais",
        "apresentacoes": [
            "50 MG/ML SUS OR CT FR VD AMB X 100 ML + SER DOS",
            "75 MG/ML SUS OR CT FR VD AMB X 100 ML + SER DOS"
        ],
        "genericos": [
            {
                "nome": "Cefaclor",
                "precoBase": 97.91
            }
        ],
        "precoReferencia": 129.39,
        "sinonimias": []
    },
    {
        "id": "med-00129",
        "nome": "Ceclor",
        "principioAtivo": "Cefaclor Monoidratado",
        "descricao": "Cefalosporinas orais",
        "apresentacoes": [
            "500 MG COM REV LIB PROL CT BL AL PVDC X 10",
            "750 MG COM REV LIB PROL CT  BL AL PVDC X 14"
        ],
        "genericos": [
            {
                "nome": "Cefaclor",
                "precoBase": 105.6
            }
        ],
        "precoReferencia": 113.15,
        "sinonimias": []
    },
    {
        "id": "med-00130",
        "nome": "Cedroxil",
        "principioAtivo": "Cefadroxila",
        "descricao": "Cefalosporinas orais",
        "apresentacoes": [
            "500 MG CAP DURA CT BL AL PLAS TRANS X 8"
        ],
        "genericos": [
            {
                "nome": "Cefadroxila",
                "precoBase": 51.26
            }
        ],
        "precoReferencia": 78.28,
        "sinonimias": []
    },
    {
        "id": "med-00131",
        "nome": "Cefalexina Monoidratada",
        "principioAtivo": "Cefalexina",
        "descricao": "Cefalosporinas orais",
        "apresentacoes": [
            "50 MG/ML SUS OR CT FR VD AMB X 100 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Cefalexina",
                "precoBase": 23.21
            },
            {
                "nome": "Lexin",
                "precoBase": 33.65
            }
        ],
        "precoReferencia": 39.93,
        "sinonimias": []
    },
    {
        "id": "med-00132",
        "nome": "Keforal",
        "principioAtivo": "Cefalexina Monoidratada",
        "descricao": "Cefalosporinas orais",
        "apresentacoes": [
            "500 MG CAP DURA CT BL AL PLAS TRANS X 200"
        ],
        "genericos": [
            {
                "nome": "Cefalexina",
                "precoBase": 23.17
            },
            {
                "nome": "Cef",
                "precoBase": 42.68
            },
            {
                "nome": "Cefagel",
                "precoBase": 44.95
            },
            {
                "nome": "Keflex",
                "precoBase": 50.38
            },
            {
                "nome": "Lexin",
                "precoBase": 67.56
            }
        ],
        "precoReferencia": 1340.94,
        "sinonimias": []
    },
    {
        "id": "med-00133",
        "nome": "Fazolon",
        "principioAtivo": "Cefazolina Sódica",
        "descricao": "Cefalosporinas injetáveis",
        "apresentacoes": [
            "1000 MG PO  INJ CX 100 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Cefazolina Sódica",
                "precoBase": 208.9
            }
        ],
        "precoReferencia": 2625.09,
        "sinonimias": []
    },
    {
        "id": "med-00134",
        "nome": "Terza",
        "principioAtivo": "Cefdinir",
        "descricao": "Cefalosporinas orais",
        "apresentacoes": [
            "25 MG/ML PO SUS OR CT FR VD AMB X 100 ML + SER DOS",
            "50 MG/ML PO SUS OR CT FR VD AMB X 100 ML + SER DOS"
        ],
        "genericos": [
            {
                "nome": "Tercen",
                "precoBase": 468.24
            }
        ],
        "precoReferencia": 234.11,
        "sinonimias": []
    },
    {
        "id": "med-00135",
        "nome": "Rocefin",
        "principioAtivo": "Ceftriaxona Dissódica Hemieptaidratada",
        "descricao": "Cefalosporinas injetáveis",
        "apresentacoes": [
            "1 G PO SOL INJ IM CX FA VD TRANS + DIL 10 MG/ML SOL INJ AMP VD TRANS X 3,5 ML",
            "500 MG PO SOL INJ IM CX FA VD TRANS + DIL 10 MG/ML SOL INJ AMP VD TRANS X 2 ML"
        ],
        "genericos": [
            {
                "nome": "Ceftriaxona Dissódica Hemieptaidratada",
                "precoBase": 31.28
            },
            {
                "nome": "Ceftriaxona Dissódica",
                "precoBase": 47.0
            },
            {
                "nome": "Teucef",
                "precoBase": 97.65
            },
            {
                "nome": "Triaxton",
                "precoBase": 118.57
            },
            {
                "nome": "Keftron",
                "precoBase": 4281.3
            }
        ],
        "precoReferencia": 158.69,
        "sinonimias": []
    },
    {
        "id": "med-00136",
        "nome": "Ceftriaxona Dissódica Hemieptaidratada",
        "principioAtivo": "Ceftriaxona Sódica",
        "descricao": "Cefalosporinas injetáveis",
        "apresentacoes": [
            "1G PO SOL INJ IM CT 5 FA VD TRANS + 5 DIL AMP VD TRANS X 3,5 ML"
        ],
        "genericos": [
            {
                "nome": "Triaxin",
                "precoBase": 29.94
            }
        ],
        "precoReferencia": 211.58,
        "sinonimias": []
    },
    {
        "id": "med-00137",
        "nome": "Celebra",
        "principioAtivo": "Celecoxibe",
        "descricao": "Coxibs",
        "apresentacoes": [
            "100 MG CAP DURA CT BL AL PLAS TRANS X 20",
            "200 MG CAP DURA CT BL AL PLAS TRANS X 10",
            "200 MG CAP DURA CT BL AL PLAS TRANS X 15",
            "200 MG CAP DURA CT BL AL PLAS TRANS X 2"
        ],
        "genericos": [
            {
                "nome": "Celecoxibe",
                "precoBase": 9.92
            },
            {
                "nome": "Coques",
                "precoBase": 11.41
            },
            {
                "nome": "Ducox",
                "precoBase": 11.41
            },
            {
                "nome": "Cibex",
                "precoBase": 12.78
            },
            {
                "nome": "Foxis",
                "precoBase": 13.19
            },
            {
                "nome": "Parzo",
                "precoBase": 13.19
            }
        ],
        "precoReferencia": 15.02,
        "sinonimias": []
    },
    {
        "id": "med-00138",
        "nome": "Vacina Influenza Trivalente (fragmentada, Inativada) Sênior",
        "principioAtivo": "Cepa Influenza Tipo B;cepa Influenza Tipo a (h3n2);cepa Influenza Tipo a (h1n1)",
        "descricao": "Vacina para gripe (influenza)",
        "apresentacoes": [
            "(120+120+120) MCG/ML SUS INJ IM CT 10 SER PREENCH VD TRANS X 0,5 ML"
        ],
        "genericos": [
            {
                "nome": "Fluarix Tetra",
                "precoBase": 84.18
            },
            {
                "nome": "Vaxigrip Tetra",
                "precoBase": 84.18
            },
            {
                "nome": "Flucelvax Tetra",
                "precoBase": 116.54
            },
            {
                "nome": "Vacina Influenza Tetravalente (fragmentada, Inativada) Sênior",
                "precoBase": 260.27
            },
            {
                "nome": "Efluelda",
                "precoBase": 260.27
            },
            {
                "nome": "Vaxigrip ®",
                "precoBase": 717.06
            }
        ],
        "precoReferencia": 3827.42,
        "sinonimias": []
    },
    {
        "id": "med-00139",
        "nome": "Nizoral",
        "principioAtivo": "Cetoconazol",
        "descricao": "Antifúngicos dermatológicos tópicos",
        "apresentacoes": [
            "20 MG/G CREM DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Conazol",
                "precoBase": 21.61
            },
            {
                "nome": "Cetoconazol",
                "precoBase": 22.82
            },
            {
                "nome": "Cetomicoss",
                "precoBase": 29.39
            },
            {
                "nome": "Cetop",
                "precoBase": 35.05
            },
            {
                "nome": "Cleartop",
                "precoBase": 36.89
            },
            {
                "nome": "Tricortid",
                "precoBase": 40.54
            }
        ],
        "precoReferencia": 62.69,
        "sinonimias": []
    },
    {
        "id": "med-00140",
        "nome": "Profenid",
        "principioAtivo": "Cetoprofeno",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "100 MG COM REV LIB RETARD CT BL AL PLAS TRANS X 20",
            "100 MG SUP RETAL CT STR AL/AL X 10",
            "150 MG COM LIB PROL CT BL AL PLAS TRANS X 10",
            "20 MG/ML SOL OR CT FR CGT VD AMB X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Cetoprofeno",
                "precoBase": 21.64
            },
            {
                "nome": "Bicerto",
                "precoBase": 23.23
            },
            {
                "nome": "Algie",
                "precoBase": 23.23
            },
            {
                "nome": "Ceftfenpro lp",
                "precoBase": 23.23
            },
            {
                "nome": "Prodygo",
                "precoBase": 23.61
            },
            {
                "nome": "Triploa",
                "precoBase": 27.94
            }
        ],
        "precoReferencia": 43.93,
        "sinonimias": []
    },
    {
        "id": "med-00141",
        "nome": "Acular",
        "principioAtivo": "Cetorolaco Trometamina",
        "descricao": "Antiinflamatórios oftalmológicos não esteroidais",
        "apresentacoes": [
            "4 MG/ML SOL OFT  CT FR GOT  PLAS PE OPC  X 5 ML",
            "4 MG/ML SOL OFT CT FR GOT PLAS PE OPC X 10 ML ",
            "4,5 MG/ML SOL OFT  CT 30 FLAC PLAS PEBD TRANS X 0,4 ML  "
        ],
        "genericos": [
            {
                "nome": "Deocil",
                "precoBase": 16.13
            },
            {
                "nome": "Trometamol Cetorolaco",
                "precoBase": 34.39
            },
            {
                "nome": "Legrace",
                "precoBase": 41.53
            },
            {
                "nome": "Toragesic",
                "precoBase": 56.72
            },
            {
                "nome": "Terolac",
                "precoBase": 61.13
            },
            {
                "nome": "Optilar",
                "precoBase": 61.56
            }
        ],
        "precoReferencia": 80.46,
        "sinonimias": []
    },
    {
        "id": "med-00142",
        "nome": "Tipici",
        "principioAtivo": "Cianocobalamina;cloridrato de Piridoxina;cloridrato de Tiamina",
        "descricao": "Associações vitamina b1+ b6 e/ou b12",
        "apresentacoes": [
            "(103 + 100 + 5) MG COM REV CT BL AL AL X 30",
            "(103 + 100 + 5) MG COM REV CT BL AL AL X 60",
            "(103 + 100 + 5) MG COM REV CT BL AL AL X 90"
        ],
        "genericos": [
            {
                "nome": "Citoneurin",
                "precoBase": 6.05
            },
            {
                "nome": "Nevrix im",
                "precoBase": 7.31
            },
            {
                "nome": "Cronobe Complex im",
                "precoBase": 27.17
            }
        ],
        "precoReferencia": 91.88,
        "sinonimias": []
    },
    {
        "id": "med-00143",
        "nome": "Dexa-citoneurin Nff",
        "principioAtivo": "Cianocobalamina;fosfato Dissódico de Dexametasona;cloridrato de Piridoxina;cloridrato de Tiamina",
        "descricao": "Associações de corticosteróides sistêmicos",
        "apresentacoes": [
            "(100,0 + 100,0) MG/ML SOL INJ IM CT 3 AMP VD AMB X 1 ML + (5,0 + 4,37) MG SOL INJ IM 3 AMP VD AMB X 2 ML"
        ],
        "genericos": [
            {
                "nome": "Citobê-dexa",
                "precoBase": 15.74
            },
            {
                "nome": "Dexalgen nf",
                "precoBase": 18.26
            },
            {
                "nome": "Renovi b Plus",
                "precoBase": 18.27
            },
            {
                "nome": "Cloridrato de Tiamina + Cloridrato de Piridoxina + Cianocobalamina + Fosfato Dissódico de Dexametasona",
                "precoBase": 32.4
            }
        ],
        "precoReferencia": 54.83,
        "sinonimias": []
    },
    {
        "id": "med-00144",
        "nome": "Micolamina",
        "principioAtivo": "Ciclopirox",
        "descricao": "Antifúngicos dermatológicos tópicos",
        "apresentacoes": [
            "80 MG/G ESM DERM CT FR VD AMB X 3 G",
            "80 MG/G ESM DERM CT FR VD AMB X 6 G"
        ],
        "genericos": [
            {
                "nome": "Ciclopirox Olamina",
                "precoBase": 41.28
            },
            {
                "nome": "Lakesiamedical",
                "precoBase": 127.0
            }
        ],
        "precoReferencia": 132.59,
        "sinonimias": []
    },
    {
        "id": "med-00145",
        "nome": "Micolamina",
        "principioAtivo": "Ciclopirox Olamina",
        "descricao": "Antifúngicos dermatológicos tópicos",
        "apresentacoes": [
            "10 MG/G CREM DERM CT BG AL X 20 G",
            "10 MG/ML SOL SPR DERM CT FR SPR PLAS PEAD OPC X 15 ML",
            "10 MG/ML SOL SPR DERM CT FR SPR PLAS PEAD OPC X 30 ML ",
            "10 MG/ML SOL SPR DERM CT FR SPR PLAS PEAD OPC X 50 ML "
        ],
        "genericos": [
            {
                "nome": "Ciclopirox Olamina",
                "precoBase": 26.06
            },
            {
                "nome": "Ciclopirox- Olamina",
                "precoBase": 29.03
            }
        ],
        "precoReferencia": 46.29,
        "sinonimias": []
    },
    {
        "id": "med-00146",
        "nome": "Restasis",
        "principioAtivo": "Ciclosporina",
        "descricao": "Outros produtos para olhos secos",
        "apresentacoes": [
            "0,5 MG/G EMUL OCU CT ENV 30 FLAC PLAS TRANS X 0,4 ML "
        ],
        "genericos": [
            {
                "nome": "Sigmasporin Microral",
                "precoBase": 98.1
            },
            {
                "nome": "Ciclosporina",
                "precoBase": 143.05
            },
            {
                "nome": "Sandimmun",
                "precoBase": 245.19
            }
        ],
        "precoReferencia": 311.46,
        "sinonimias": []
    },
    {
        "id": "med-00147",
        "nome": "Cebralat",
        "principioAtivo": "Cilostazol",
        "descricao": "Inibidores da agregação plaquetária, realçadores do amp cíclico",
        "apresentacoes": [
            "100 MG COM CT BL AL PLAS TRANS X 120",
            "100 MG COM CT BL AL PLAS TRANS X 60",
            "50 MG COM CT BL AL PLAS TRANS X 120",
            "50 MG COM CT BL AL PLAS TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Cilostazol",
                "precoBase": 5.25
            },
            {
                "nome": "Vasogard",
                "precoBase": 12.86
            }
        ],
        "precoReferencia": 48.8,
        "sinonimias": []
    },
    {
        "id": "med-00148",
        "nome": "Stugeron",
        "principioAtivo": "Cinarizina",
        "descricao": "Antagonistas do cálcio com ação cerebral",
        "apresentacoes": [
            "25 MG COM CT BL AL PLAS TRANS X 30",
            "75 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Fluxon",
                "precoBase": 14.47
            },
            {
                "nome": "Cinarizina",
                "precoBase": 16.82
            }
        ],
        "precoReferencia": 28.42,
        "sinonimias": []
    },
    {
        "id": "med-00149",
        "nome": "Deposteron",
        "principioAtivo": "Cipionato de Testosterona",
        "descricao": "Andrógenos excluindo g3e, g3f",
        "apresentacoes": [
            "100 MG/ML SOL INJ CX 3 AMP VD AMB X 2 ML"
        ],
        "genericos": [
            {
                "nome": "Cipionato de Testosterona",
                "precoBase": 57.19
            },
            {
                "nome": "Testocyp",
                "precoBase": 61.36
            }
        ],
        "precoReferencia": 283.28,
        "sinonimias": []
    },
    {
        "id": "med-00150",
        "nome": "Oroxadin",
        "principioAtivo": "Ciprofibrato",
        "descricao": "Fibratos",
        "apresentacoes": [
            "100 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Ciprofibrato",
                "precoBase": 36.89
            },
            {
                "nome": "Ravuma",
                "precoBase": 45.21
            },
            {
                "nome": "Cipide",
                "precoBase": 45.21
            },
            {
                "nome": "Lipfite",
                "precoBase": 85.45
            },
            {
                "nome": "Lipneo",
                "precoBase": 135.62
            },
            {
                "nome": "Lipless",
                "precoBase": 140.22
            }
        ],
        "precoReferencia": 198.71,
        "sinonimias": []
    },
    {
        "id": "med-00151",
        "nome": "Citalopram",
        "principioAtivo": "Citalopram",
        "descricao": "Antidepressivos ssri",
        "apresentacoes": [
            "20 MG COM REV CT BL AL PLAS TRANS X 28 ",
            "20 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Maxapran",
                "precoBase": 52.13
            },
            {
                "nome": "Citalopram (port. 344/98, L-c1)",
                "precoBase": 61.02
            }
        ],
        "precoReferencia": 171.51,
        "sinonimias": []
    },
    {
        "id": "med-00152",
        "nome": "Clomid",
        "principioAtivo": "Citrato de Clomifeno",
        "descricao": "Gonadotrofinas incluindo outros estimulantes para ovulação",
        "apresentacoes": [
            "50 MG COM CT BL AL PLAS INC X 10"
        ],
        "genericos": [
            {
                "nome": "Indux",
                "precoBase": 81.35
            }
        ],
        "precoReferencia": 84.21,
        "sinonimias": []
    },
    {
        "id": "med-00153",
        "nome": "Dorflex",
        "principioAtivo": "Citrato de Orfenadrina;cafeína Anidra;dipirona Monoidratada",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "(600 + 70 + 100) MG COM CT BL AL PLAS PVC AMB X 16",
            "(600 + 70 + 100) MG COM CT BL AL PLAS PVC AMB X 8",
            "(600 + 70 + 100) MG COM CT BL AL PLAS PVC AMB X 80",
            "300 MG + 35 MG + 50 MG COM CT BL AL PLAS  AMB X 300"
        ],
        "genericos": [
            {
                "nome": "Lisador Muscular",
                "precoBase": 8.12
            },
            {
                "nome": "Miorrelax",
                "precoBase": 12.44
            },
            {
                "nome": "Dipirona Sodica+cafeina Anidra+citrato de Orfenadrina",
                "precoBase": 13.15
            },
            {
                "nome": "Neosaldina Muscular",
                "precoBase": 14.96
            },
            {
                "nome": "Neosaldina Muscular Max",
                "precoBase": 15.9
            },
            {
                "nome": "Doricin",
                "precoBase": 19.0
            }
        ],
        "precoReferencia": 17.67,
        "sinonimias": []
    },
    {
        "id": "med-00154",
        "nome": "Litocit",
        "principioAtivo": "Citrato de Potássio Monoidratado",
        "descricao": "Todos outros produtos urologicos",
        "apresentacoes": [
            "1080 MG COM LIB PROL CT FR PLAS PVC OPC X 60",
            "1620 MG COM LIB PROL CT FR PLAS PVC OPC X 30",
            "1620 MG COM LIB PROL CT FR PLAS PVC OPC X 60",
            "540 MG COM  LIB PROL CT FR PLAS PVC OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Hidralyte",
                "precoBase": 31.98
            }
        ],
        "precoReferencia": 69.6,
        "sinonimias": []
    },
    {
        "id": "med-00155",
        "nome": "Revatio",
        "principioAtivo": "Citrato de Sildenafila",
        "descricao": "Produtos hipertensão arterial pulmonar inibidores da pde5",
        "apresentacoes": [
            "20 MG COM REV CT BL AL PLAS PVC TRANS X 90"
        ],
        "genericos": [
            {
                "nome": "Videnfil",
                "precoBase": 8.77
            },
            {
                "nome": "Citrato de Sildenafila",
                "precoBase": 9.54
            },
            {
                "nome": "Viagra",
                "precoBase": 29.65
            },
            {
                "nome": "Virineo",
                "precoBase": 36.17
            },
            {
                "nome": "Dejavú",
                "precoBase": 38.03
            },
            {
                "nome": "Sollevare",
                "precoBase": 39.64
            }
        ],
        "precoReferencia": 4971.16,
        "sinonimias": []
    },
    {
        "id": "med-00156",
        "nome": "Benalet",
        "principioAtivo": "Citrato de Sódio;cloreto de Amônio;cloridrato de Difenidramina",
        "descricao": "Preparações para garganta",
        "apresentacoes": [
            "5 MG + 50 MG + 10 MG PAS CART DISPLAY ENV AL X 52 (SABOR MEL LIMÃO)  ",
            "5 MG + 50 MG + 10 MG PAS CART DISPLAY ENV AL X 52(SABOR MENTA) ",
            "5 MG + 50 MG + 10 MG PAS CT ENV AL X 12 (SABOR FRAMBOESA) ",
            "5 MG + 50 MG + 10 MG PAS CT ENV AL X 12 (SABOR MEL LIMÃO) "
        ],
        "genericos": [
            {
                "nome": "Benatux",
                "precoBase": 22.3
            },
            {
                "nome": "Endcoff",
                "precoBase": 28.61
            }
        ],
        "precoReferencia": 30.01,
        "sinonimias": []
    },
    {
        "id": "med-00157",
        "nome": "Nolvadex",
        "principioAtivo": "Citrato de Tamoxifeno",
        "descricao": "Hormônios antiestrogêneos citostáticos",
        "apresentacoes": [
            "20 MG COM REV CT BL AL PLAS AMB X 30"
        ],
        "genericos": [
            {
                "nome": "Citrato de Tamoxifeno",
                "precoBase": 105.12
            },
            {
                "nome": "Taxofen",
                "precoBase": 207.93
            },
            {
                "nome": "Tacfen",
                "precoBase": 287.11
            },
            {
                "nome": "Tamoxin",
                "precoBase": 316.02
            }
        ],
        "precoReferencia": 441.78,
        "sinonimias": []
    },
    {
        "id": "med-00158",
        "nome": "Xeljanz",
        "principioAtivo": "Citrato de Tofacitinibe",
        "descricao": "Inibidores de jak",
        "apresentacoes": [
            "10 MG COM REV CT FR PLAS PEAD OPC X 60",
            "5 MG COM REV CT FR PLAS PEAD OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Xeljanz xr",
                "precoBase": 7557.58
            }
        ],
        "precoReferencia": 10416.52,
        "sinonimias": []
    },
    {
        "id": "med-00159",
        "nome": "Klaricid",
        "principioAtivo": "Claritromicina",
        "descricao": "Macrolideos e similares",
        "apresentacoes": [
            "25 MG/ML GRAN SUS PED CT FR PLAS OPC X 60 ML + SER DOS + ADAPT",
            "50 MG/ML GRAN SUS PED CT FR PLAS OPC X 60 ML + SER DOS + ADAPT",
            "500 MG COM LIB PROL CT BL AL PLAS TRANS X 10",
            "500 MG COM LIB PROL CT BL AL PLAS TRANS X 7"
        ],
        "genericos": [
            {
                "nome": "Claritromicina",
                "precoBase": 76.58
            },
            {
                "nome": "Clabat",
                "precoBase": 85.74
            }
        ],
        "precoReferencia": 122.5,
        "sinonimias": []
    },
    {
        "id": "med-00160",
        "nome": "Pyloripac",
        "principioAtivo": "Claritromicina;lansoprazol;amoxicilina Tri-hidratada",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "30 MG CAP DURA LIB RETARD + 500 MG COM REV + 500 MG CAP DURA CT BL AL PLAS TRANS X 14+14+28",
            "30 MG CAP DURA LIB RETARD + 500 MG COM REV + 500 MG CAP DURA CT BL AL PLAS TRANS X 28 + BL AL PLAS TRANS X 14+14+28",
            "30 MG CAP DURA LIB RETARD + 500 MG COM REV + 500 MG CAP DURA CT BL AL PLAS TRANS X 28 +28+56",
            "30 MG CAP DURA LIB RETARD + 500 MG COMREV + 500 MG CAP DURA CT BL AL PLAS TRANS X 28 + BL AL PLAS TRANS X 28+28+56"
        ],
        "genericos": [
            {
                "nome": "Lansoprazol +claritromicina +amoxicilina",
                "precoBase": 190.45
            },
            {
                "nome": "H.bacter",
                "precoBase": 314.49
            },
            {
                "nome": "Pyloritrat",
                "precoBase": 392.59
            }
        ],
        "precoReferencia": 278.49,
        "sinonimias": []
    },
    {
        "id": "med-00161",
        "nome": "Clavulin",
        "principioAtivo": "Clavulanato de Potássio;amoxicilina Tri-hidratada",
        "descricao": "Penicilinas orais de amplo espectro",
        "apresentacoes": [
            "(120 + 8,58) MG/ML PO SUS OR CT FR VD TRANS X 100 ML + SER DOS",
            "(40 + 5,7) MG/ML PO SUS OR CT FR VD TRANS X 70 ML + SER DOS",
            "(50,0 + 12,5) MG/ML PO SUS OR CT FR VD TRANS X 100 ML + SER DOS",
            "(500 + 125) MG COM REV CT ENVOL BL AL PLAS PVC/PVDC TRANS X 21"
        ],
        "genericos": [
            {
                "nome": "Claxam",
                "precoBase": 49.91
            },
            {
                "nome": "Amoxicilina Tri-hidratada + Clavulanato de Potássio",
                "precoBase": 57.69
            },
            {
                "nome": "Amoxicilina + Clavulanato de Potássio",
                "precoBase": 62.06
            },
            {
                "nome": "Sinot Clav",
                "precoBase": 91.26
            },
            {
                "nome": "Atak Clav",
                "precoBase": 91.26
            },
            {
                "nome": "Sigma-clav bd",
                "precoBase": 98.25
            }
        ],
        "precoReferencia": 121.71,
        "sinonimias": []
    },
    {
        "id": "med-00162",
        "nome": "Frisium",
        "principioAtivo": "Clobazam",
        "descricao": "Tranquilizantes",
        "apresentacoes": [
            "10 MG COM CT BL AL PLAS PVC TRANS X 20  ",
            "20 MG COM CT BL AL PLAS PVC TRANS X 20  "
        ],
        "genericos": [
            {
                "nome": "Urbanil",
                "precoBase": 20.46
            }
        ],
        "precoReferencia": 24.58,
        "sinonimias": []
    },
    {
        "id": "med-00163",
        "nome": "Rivotril",
        "principioAtivo": "Clonazepam",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "0,25 MG COM SUB CT BL AL PLAST TRANS X 30",
            "0,5 MG COM CT BL AL PLAS TRANS X 20",
            "0,5 MG COM CT BL AL PLAS TRANS X 30",
            "2 MG COM CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Clonazepam",
                "precoBase": 8.49
            },
            {
                "nome": "Clopam",
                "precoBase": 14.14
            },
            {
                "nome": "Azenpi",
                "precoBase": 15.55
            },
            {
                "nome": "Clonazepam (port. 344/98 – Lista B1)",
                "precoBase": 18.61
            },
            {
                "nome": "Zilepam",
                "precoBase": 315.68
            }
        ],
        "precoReferencia": 10.79,
        "sinonimias": []
    },
    {
        "id": "med-00164",
        "nome": "Bio - Vagin",
        "principioAtivo": "Cloreto de Benzalcônio",
        "descricao": "Tricomonicidas tópicos",
        "apresentacoes": [
            "62,5 MG/G + 25.000 UI/G + 1,25 MG/G CREM VAG CT BG AL X 40 G + 10 APLIC"
        ],
        "genericos": [
            {
                "nome": "Neonazol",
                "precoBase": 14.77
            },
            {
                "nome": "Kuramed",
                "precoBase": 26.32
            }
        ],
        "precoReferencia": 82.82,
        "sinonimias": []
    },
    {
        "id": "med-00165",
        "nome": "Dinill",
        "principioAtivo": "Cloreto de Benzalcônio;ácido Bórico",
        "descricao": "Antissépticos oftalmológicos",
        "apresentacoes": [
            "0,1 MG/ML + 17 MG/ML SOL OFT CT FR GOT PLAS TRANS X 10 ML"
        ],
        "genericos": [
            {
                "nome": "Higicler",
                "precoBase": 22.15
            }
        ],
        "precoReferencia": 18.04,
        "sinonimias": []
    },
    {
        "id": "med-00166",
        "nome": "Ionclor",
        "principioAtivo": "Cloreto de Potássio",
        "descricao": "Suplementos minerais á base de potássio",
        "apresentacoes": [
            "60 MG/ML SOL OR CX 50 FR PLAS PEAD OPC X 100 ML + 50 COP",
            "60 MG/ML SOL OR CX 50 FR PLAS PEAD OPC X 150 ML + 50 COP"
        ],
        "genericos": [
            {
                "nome": "Slow-k",
                "precoBase": 19.5
            }
        ],
        "precoReferencia": 183.08,
        "sinonimias": []
    },
    {
        "id": "med-00167",
        "nome": "Maresis ht",
        "principioAtivo": "Cloreto de Sódio",
        "descricao": "Outras preparações tópicas nasais",
        "apresentacoes": [
            "20 MG/ML SOL SPR NAS CT TB AL X 100 ML"
        ],
        "genericos": [
            {
                "nome": "Maxidrate",
                "precoBase": 8.92
            },
            {
                "nome": "Nasojet 3h",
                "precoBase": 25.03
            },
            {
                "nome": "Cloreto de Sódio Solução Fisiológica Para Irrigação - Baxter",
                "precoBase": 25.73
            },
            {
                "nome": "Conidrin 3%",
                "precoBase": 29.39
            },
            {
                "nome": "Neosoro h",
                "precoBase": 33.16
            },
            {
                "nome": "Rinosoro Sic",
                "precoBase": 36.19
            }
        ],
        "precoReferencia": 94.75,
        "sinonimias": []
    },
    {
        "id": "med-00168",
        "nome": "Mucosolvan",
        "principioAtivo": "Cloridrato de Ambroxol",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "3,0 MG/ML XPE PED CT FR VD AMB X 120 ML",
            "6 MG/ML XPE ADU CT FR VD AMB X 120 ML"
        ],
        "genericos": [
            {
                "nome": "Especbac",
                "precoBase": 14.06
            },
            {
                "nome": "Cloridrato de Ambroxol",
                "precoBase": 14.94
            },
            {
                "nome": "Fluisolvan",
                "precoBase": 22.42
            },
            {
                "nome": "Sedavan",
                "precoBase": 22.66
            },
            {
                "nome": "Ambrol",
                "precoBase": 23.17
            },
            {
                "nome": "Expectuss",
                "precoBase": 23.76
            }
        ],
        "precoReferencia": 40.86,
        "sinonimias": []
    },
    {
        "id": "med-00169",
        "nome": "Atlansil",
        "principioAtivo": "Cloridrato de Amiodarona",
        "descricao": "Antiarrítmicos cardíacos",
        "apresentacoes": [
            "100 MG COM CT BL AL PLAS TRANS X 20",
            "200 MG COM CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Amiodarona",
                "precoBase": 15.25
            },
            {
                "nome": "Ancoron",
                "precoBase": 33.91
            },
            {
                "nome": "Amiobal",
                "precoBase": 37.49
            },
            {
                "nome": "Amioron",
                "precoBase": 38.61
            },
            {
                "nome": "Miodaron",
                "precoBase": 48.81
            }
        ],
        "precoReferencia": 26.81,
        "sinonimias": []
    },
    {
        "id": "med-00170",
        "nome": "Mitrip",
        "principioAtivo": "Cloridrato de Amitriptilina",
        "descricao": "Antidepressivos todos os outros",
        "apresentacoes": [
            "10 MG COM REV CT BL AL PLAS PVC/PVDC  TRANS X 30",
            "25 MG COM REV CT BL AL PLAS PVC/PVDC  TRANS X 30",
            "25 MG COM REV CT BL AL PLAS PVC/PVDC  TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Amytril",
                "precoBase": 6.53
            },
            {
                "nome": "Cloridrato de Amitriptilina",
                "precoBase": 17.04
            }
        ],
        "precoReferencia": 17.13,
        "sinonimias": []
    },
    {
        "id": "med-00171",
        "nome": "Onicoryl",
        "principioAtivo": "Cloridrato de Amorolfina",
        "descricao": "Antifúngicos dermatológicos tópicos",
        "apresentacoes": [
            "50 MG/ML ESM CT FR VD AMB X 2,5 ML + (10 ESP + 30 COMPRESS + 30 LIXAS)"
        ],
        "genericos": [
            {
                "nome": "Unha Sana",
                "precoBase": 179.45
            }
        ],
        "precoReferencia": 186.14,
        "sinonimias": []
    },
    {
        "id": "med-00172",
        "nome": "Agrylin",
        "principioAtivo": "Cloridrato de Anagrelida",
        "descricao": "Inibidores da agregação plaquetária, realçadores do amp cíclico",
        "apresentacoes": [
            "0,5 MG CAP DURA CT FR PLAS OPC X 100"
        ],
        "genericos": [
            {
                "nome": "Monboc",
                "precoBase": 5188.52
            }
        ],
        "precoReferencia": 5188.5,
        "sinonimias": []
    },
    {
        "id": "med-00173",
        "nome": "Atentah",
        "principioAtivo": "Cloridrato de Atomoxetina",
        "descricao": "Todos os outros produtos para o sistema nervoso central",
        "apresentacoes": [
            "10 MG CAP DURA CT BL AL PLAS PVC TRANS X 30",
            "100 MG CAP DURA CT BL AL PLAS PVC TRANS X 30",
            "100 MG CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 30",
            "18 MG CAP DURA CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Flutuah",
                "precoBase": 9.46
            },
            {
                "nome": "Cloridrato de Atomoxetina",
                "precoBase": 20.83
            }
        ],
        "precoReferencia": 20.63,
        "sinonimias": []
    },
    {
        "id": "med-00174",
        "nome": "Flogo-rosa",
        "principioAtivo": "Cloridrato de Benzidamina",
        "descricao": "Outros ginecológicos",
        "apresentacoes": [
            "50 MG/ML SOL GIN CT FR PET AMB X 100 ML ",
            "50 MG/ML SOL GIN CT FR PET AMB X 100 ML + CP MED",
            "50 MG/ML SOL GIN CT FR VD AMB X 100 ML",
            "53,2 MG/G PO SOL VAG CT 04 ENV AL POLIET X 9,4 G"
        ],
        "genericos": [
            {
                "nome": "Flogoral",
                "precoBase": 3.19
            },
            {
                "nome": "Gargojuice",
                "precoBase": 14.68
            },
            {
                "nome": "Pastilhas Cepacol",
                "precoBase": 17.39
            },
            {
                "nome": "Angino Rub",
                "precoBase": 23.46
            },
            {
                "nome": "Ciflogex",
                "precoBase": 23.49
            },
            {
                "nome": "Tabs",
                "precoBase": 23.85
            }
        ],
        "precoReferencia": 22.15,
        "sinonimias": []
    },
    {
        "id": "med-00175",
        "nome": "Betaserc",
        "principioAtivo": "Cloridrato de Betaistina",
        "descricao": "Antivertiginosos",
        "apresentacoes": [
            "16 MG COM CT BL AL PLAS INC X 30",
            "24 MG COM CT BL AL PLAS INC X 30",
            "24 MG COM CT BL AL PLAS INC X 60 "
        ],
        "genericos": [
            {
                "nome": "Dicloridrato de Betaistina",
                "precoBase": 10.05
            },
            {
                "nome": "Betina",
                "precoBase": 30.28
            },
            {
                "nome": "Debet",
                "precoBase": 31.46
            },
            {
                "nome": "Labirin",
                "precoBase": 40.3
            },
            {
                "nome": "Betadine",
                "precoBase": 48.98
            }
        ],
        "precoReferencia": 50.01,
        "sinonimias": []
    },
    {
        "id": "med-00176",
        "nome": "Betoptic",
        "principioAtivo": "Cloridrato de Betaxolol",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "2,5 MG/ML SUS OFT CT FR GOT PLAS OPC X 5 ML",
            "5,0 MG/ML SOL OFT CT FR PLAS TRANS GOT X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Betaxolol",
                "precoBase": 24.59
            },
            {
                "nome": "Visoptic",
                "precoBase": 25.32
            },
            {
                "nome": "Presmin",
                "precoBase": 41.05
            }
        ],
        "precoReferencia": 44.67,
        "sinonimias": []
    },
    {
        "id": "med-00177",
        "nome": "Akineton",
        "principioAtivo": "Cloridrato de Biperideno",
        "descricao": "Antiparkinsonianos",
        "apresentacoes": [
            "2 MG COM CT BL AL PLAS PVC AMB X 80",
            "4 MG COM REV LIB RETARD CT BL AL PLAS PVC AMB X 30"
        ],
        "genericos": [
            {
                "nome": "Propark",
                "precoBase": 37.73
            },
            {
                "nome": "Cinetol",
                "precoBase": 40.28
            }
        ],
        "precoReferencia": 35.14,
        "sinonimias": []
    },
    {
        "id": "med-00178",
        "nome": "Bisolvon",
        "principioAtivo": "Cloridrato de Bromexina",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "0,8 MG/ML XPE CT FR VD AMB X 120 ML",
            "1,6 MG/ML XPE CT FR VD AMB X 120 ML",
            "2 MG/ML SOL CT FR VD AMB X 40 ML",
            "2 MG/ML SOL CT FR VD AMB X 50 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Bromexina",
                "precoBase": 17.29
            },
            {
                "nome": "Bisuran",
                "precoBase": 18.71
            },
            {
                "nome": "Agiixpec",
                "precoBase": 19.91
            },
            {
                "nome": "Broncatar",
                "precoBase": 29.49
            }
        ],
        "precoReferencia": 23.93,
        "sinonimias": []
    },
    {
        "id": "med-00179",
        "nome": "Wellbutrin",
        "principioAtivo": "Cloridrato de Bupropiona",
        "descricao": "Antidepressivos todos os outros",
        "apresentacoes": [
            "150 MG COM REV LIB PROL CT FR PLAS OPC X 30",
            "150 MG COM REV LIB PROL CT FR PLAS OPC X 7 ",
            "300 MG COM REV LIB PROL CT FR PLAS OPC X 30",
            "300 MG COM REV LIB PROL CT FR PLAS OPC X 7 "
        ],
        "genericos": [
            {
                "nome": "Bup xl",
                "precoBase": 38.06
            },
            {
                "nome": "Buprexis xl",
                "precoBase": 42.61
            },
            {
                "nome": "Cloridrato de Bupropiona",
                "precoBase": 43.32
            },
            {
                "nome": "Eutymia xl",
                "precoBase": 54.61
            },
            {
                "nome": "Bup",
                "precoBase": 61.74
            },
            {
                "nome": "Buene",
                "precoBase": 61.74
            }
        ],
        "precoReferencia": 66.11,
        "sinonimias": []
    },
    {
        "id": "med-00180",
        "nome": "Stima",
        "principioAtivo": "Cloridrato de Buspirona",
        "descricao": "Tranquilizantes",
        "apresentacoes": [
            "10 MG COM CT BL AL PLAS PVC/PVDC TRANS X 20",
            "10 MG COM CT BL AL PLAS PVC/PVDC TRANS X 60",
            "5 MG COM CT BL AL PLAS PVC/PVDC TRANS X 20",
            "5 MG COM CT BL AL PLAS PVC/PVDC TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Tague",
                "precoBase": 16.69
            },
            {
                "nome": "Ansitec",
                "precoBase": 16.71
            }
        ],
        "precoReferencia": 41.72,
        "sinonimias": []
    },
    {
        "id": "med-00181",
        "nome": "Mitrul",
        "principioAtivo": "Cloridrato de Ciclobenzaprina",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "15 MG CAP DURA LIB PROL CT BL AL PLAS TRANS X 10",
            "15 MG CAP DURA LIB PROL CT BL AL PLAS TRANS X 2",
            "15 MG CAP DURA LIB PROL CT BL AL PLAS TRANS X 5"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Ciclobenzaprina",
                "precoBase": 5.18
            },
            {
                "nome": "Muscusan",
                "precoBase": 5.57
            },
            {
                "nome": "Benziflex",
                "precoBase": 5.58
            },
            {
                "nome": "Miofibrax",
                "precoBase": 7.07
            },
            {
                "nome": "Mirtax",
                "precoBase": 7.38
            },
            {
                "nome": "Miosan",
                "precoBase": 8.49
            }
        ],
        "precoReferencia": 12.81,
        "sinonimias": []
    },
    {
        "id": "med-00182",
        "nome": "Dolamin Flex",
        "principioAtivo": "Cloridrato de Ciclobenzaprina;clonixinato de Lisina",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "125 MG + 5,0 MG COM REV CT BL AL PLAS TRANS X 15"
        ],
        "genericos": [
            {
                "nome": "Clonixinato de Lisina + Cloridrato de Ciclobenzaprin",
                "precoBase": 23.85
            },
            {
                "nome": "Miogesic Lis",
                "precoBase": 25.61
            },
            {
                "nome": "Benziflex Lis",
                "precoBase": 76.89
            }
        ],
        "precoReferencia": 69.66,
        "sinonimias": []
    },
    {
        "id": "med-00183",
        "nome": "Dolamin Flex",
        "principioAtivo": "Cloridrato de Ciclobenzaprina;lisinato de Clonixina",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "125 MG + 5,0 MG COM REV CT BL AL PLAS TRANS X 12"
        ],
        "genericos": [
            {
                "nome": "Clonixinato de Lisina + Cloridrato de Ciclobenzaprin",
                "precoBase": 35.79
            },
            {
                "nome": "Benziflex Lis",
                "precoBase": 38.41
            }
        ],
        "precoReferencia": 55.7,
        "sinonimias": []
    },
    {
        "id": "med-00184",
        "nome": "Cicloplégico",
        "principioAtivo": "Cloridrato de Ciclopentolato",
        "descricao": "Midriáticos e cicloplégicos",
        "apresentacoes": [
            "10 MG/ML SOL OFT CT FR PLAS TRANS GOT X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Ciclolato",
                "precoBase": 14.15
            }
        ],
        "precoReferencia": 14.03,
        "sinonimias": []
    },
    {
        "id": "med-00185",
        "nome": "Mimpara",
        "principioAtivo": "Cloridrato de Cinacalcete",
        "descricao": "Produtos antiparatireoideanos",
        "apresentacoes": [
            "30MG COM REV CT FR PLAS OPC X 30 "
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Cinacalcete",
                "precoBase": 752.98
            },
            {
                "nome": "Calt",
                "precoBase": 1317.22
            },
            {
                "nome": "Missort",
                "precoBase": 1331.98
            }
        ],
        "precoReferencia": 1331.98,
        "sinonimias": []
    },
    {
        "id": "med-00186",
        "nome": "Apetivan bc",
        "principioAtivo": "Cloridrato de Ciproeptadina",
        "descricao": "Orexígenos",
        "apresentacoes": [
            "XPE CT FR PLAS AMB X 240 ML"
        ],
        "genericos": [
            {
                "nome": "Cobapetit",
                "precoBase": 32.49
            }
        ],
        "precoReferencia": 49.69,
        "sinonimias": []
    },
    {
        "id": "med-00187",
        "nome": "Cipro",
        "principioAtivo": "Cloridrato de Ciprofloxacino",
        "descricao": "Fluorquinolonas orais",
        "apresentacoes": [
            "500 MG COM REV CT BL AL PLAS PVC/PVDC OPC X 14",
            "500 MG COM REV CT BL AL PLAS PVC/PVDC OPC X 6"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Ciprofloxacino",
                "precoBase": 21.23
            },
            {
                "nome": "Foritus",
                "precoBase": 25.71
            },
            {
                "nome": "Ciprobiot",
                "precoBase": 32.17
            },
            {
                "nome": "Maxiflox",
                "precoBase": 34.06
            },
            {
                "nome": "Urcip",
                "precoBase": 55.84
            },
            {
                "nome": "Ciproflonax",
                "precoBase": 78.11
            }
        ],
        "precoReferencia": 248.51,
        "sinonimias": []
    },
    {
        "id": "med-00188",
        "nome": "Ciloxan",
        "principioAtivo": "Cloridrato de Ciprofloxacino Monoidratado",
        "descricao": "Antiinfeccios oftalmológicos",
        "apresentacoes": [
            "3MG/ML SOL OFT CT FR GOT PLAS TRANS X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Ciprofloxacino",
                "precoBase": 14.24
            },
            {
                "nome": "Ciclatry",
                "precoBase": 15.29
            },
            {
                "nome": "Ciprocilin",
                "precoBase": 20.22
            },
            {
                "nome": "Cifloxatil",
                "precoBase": 56.89
            },
            {
                "nome": "Ciprofar",
                "precoBase": 57.44
            },
            {
                "nome": "Ciprofloxatrin",
                "precoBase": 58.14
            }
        ],
        "precoReferencia": 34.71,
        "sinonimias": []
    },
    {
        "id": "med-00189",
        "nome": "Dalacin c",
        "principioAtivo": "Cloridrato de Clindamicina Monoidratado",
        "descricao": "Macrolideos e similares",
        "apresentacoes": [
            "300 MG CAP DURA CT BL AL PLAS TRANS X 16"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Clindamicina",
                "precoBase": 102.37
            },
            {
                "nome": "Clindamin-c",
                "precoBase": 134.06
            }
        ],
        "precoReferencia": 208.7,
        "sinonimias": []
    },
    {
        "id": "med-00190",
        "nome": "Anafranil",
        "principioAtivo": "Cloridrato de Clomipramina",
        "descricao": "Antidepressivos todos os outros",
        "apresentacoes": [
            "25 MG COM REV CT BL AL PLAS PVC TRANS X 20",
            "25 MG COM REV CT BL AL PLAS PVC TRANS X 30",
            "25 MG COM REV CT BL AL PLAS PVC TRANS X 60",
            "75 MG COM REV LIB PROL CT BL AL PLAS PVC/PE/PVDC TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Clo",
                "precoBase": 21.88
            },
            {
                "nome": "Cloridrato de Clomipramina",
                "precoBase": 35.51
            }
        ],
        "precoReferencia": 65.86,
        "sinonimias": []
    },
    {
        "id": "med-00191",
        "nome": "Amplictil",
        "principioAtivo": "Cloridrato de Clorpromazina",
        "descricao": "Antipsicóticos atípicos",
        "apresentacoes": [
            "100 MG COM REV CT BL AL PLAS OPC X 20",
            "25 MG COM REV CT BL AL PLAS OPC X 20",
            "40,00 MG/ML SOL OR CT FR VD CGT X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Clorpromazina",
                "precoBase": 6.35
            },
            {
                "nome": "Longactil",
                "precoBase": 93.41
            }
        ],
        "precoReferencia": 10.64,
        "sinonimias": []
    },
    {
        "id": "med-00192",
        "nome": "Empozze",
        "principioAtivo": "Cloridrato de Dapoxetina",
        "descricao": "Todos os outros produtos urológicos",
        "apresentacoes": [
            "30 MG COM REV CT BL AL PLAS PVC/PVDC OPC X 1",
            "30 MG COM REV CT BL AL PLAS PVC/PVDC OPC X 3",
            "30 MG COM REV CT BL AL PLAS PVC/PVDC OPC X 6",
            "30 MG COM REV CT BL AL PLAS PVC/PVDC OPC X 9"
        ],
        "genericos": [
            {
                "nome": "Prosoy",
                "precoBase": 42.85
            }
        ],
        "precoReferencia": 42.85,
        "sinonimias": []
    },
    {
        "id": "med-00193",
        "nome": "Lenix",
        "principioAtivo": "Cloridrato de Difenidramina",
        "descricao": "Hipnóticos e sedativos não barbitúricos puros",
        "apresentacoes": [
            "50 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 14",
            "50 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 2",
            "50 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 4"
        ],
        "genericos": [
            {
                "nome": "Difenidrin",
                "precoBase": 835.83
            }
        ],
        "precoReferencia": 8.6,
        "sinonimias": []
    },
    {
        "id": "med-00194",
        "nome": "Cardizem",
        "principioAtivo": "Cloridrato de Diltiazem",
        "descricao": "Antagonistas do cálcio puros",
        "apresentacoes": [
            "120 MG CAP DURA LIB PROL CT BL AL/AL X 20",
            "30 MG COM CT BL AL/AL X 50",
            "60 MG COM CT BL AL/AL X 50",
            "90 MG CAP DURA LIB PROL CT BL AL/AL X 20"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Diltiazem",
                "precoBase": 24.62
            },
            {
                "nome": "Cordil",
                "precoBase": 62.19
            }
        ],
        "precoReferencia": 43.9,
        "sinonimias": []
    },
    {
        "id": "med-00195",
        "nome": "Dobutrex",
        "principioAtivo": "Cloridrato de Dobutamina",
        "descricao": "Agentes cardíacos dopaminérgicos",
        "apresentacoes": [
            "250 MG SOL INJ CT 20 AMP VD TRANS X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Dobutamina",
                "precoBase": 825.88
            }
        ],
        "precoReferencia": 1396.76,
        "sinonimias": []
    },
    {
        "id": "med-00196",
        "nome": "Eranz",
        "principioAtivo": "Cloridrato de Donepezila",
        "descricao": "Produtos antialzheimer, inibidores da colinesterase",
        "apresentacoes": [
            "10MG COM REV CT BL AL PLAS TRANS X 28",
            "5 MG COM REV CT BL AL PLAS TRANS X 28 "
        ],
        "genericos": [
            {
                "nome": "Don",
                "precoBase": 43.01
            },
            {
                "nome": "Cloridrato de Donepezila",
                "precoBase": 77.12
            },
            {
                "nome": "Senes",
                "precoBase": 141.51
            },
            {
                "nome": "Comfect",
                "precoBase": 153.94
            },
            {
                "nome": "Donila",
                "precoBase": 157.77
            },
            {
                "nome": "Depzel",
                "precoBase": 189.97
            }
        ],
        "precoReferencia": 876.81,
        "sinonimias": []
    },
    {
        "id": "med-00197",
        "nome": "Epéz Duo",
        "principioAtivo": "Cloridrato de Donepezila Monoidratado;cloridrato de Memantina",
        "descricao": "Todos os outros produtos antialzheimer",
        "apresentacoes": [
            "(10 + 10) MG COM REV CT BL AL PLAS PCTFE/PE.EVOH.PE/PVC TRANS X 7",
            "(10 + 20) MG COM REV CT BL AL PLAS PCTFE/PE.EVOH.PE/PVC TRANS X 30",
            "(10 + 5) MG COM REV CT BL AL PLAS PCTFE/PE.EVOH.PE/PVC TRANS X 7"
        ],
        "genericos": [
            {
                "nome": "Lábrea Duo",
                "precoBase": 101.88
            },
            {
                "nome": "Cloridrato de Donepezila + Cloridrato de Memantina",
                "precoBase": 136.56
            }
        ],
        "precoReferencia": 200.35,
        "sinonimias": []
    },
    {
        "id": "med-00198",
        "nome": "Alois Duo Pack",
        "principioAtivo": "Cloridrato de Donepezila;cloridrato de Memantina",
        "descricao": "Todos os outros produtos antialzheimer",
        "apresentacoes": [
            "(10 + 5) MG COM REV + (10 + 10) MG COM REV + (10 + 15) MG COM REV + (10 + 20) MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 7 + 7 + 7 + 7"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Donepezila + Cloridrato de Memantina",
                "precoBase": 121.34
            },
            {
                "nome": "Alois Duo",
                "precoBase": 200.35
            },
            {
                "nome": "Moriale Duo",
                "precoBase": 200.35
            },
            {
                "nome": "Comfect Duo",
                "precoBase": 200.35
            },
            {
                "nome": "Donila Duo",
                "precoBase": 200.35
            }
        ],
        "precoReferencia": 872.22,
        "sinonimias": []
    },
    {
        "id": "med-00199",
        "nome": "Ocupress",
        "principioAtivo": "Cloridrato de Dorzolamida",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "20 MG/ML SOL OFT CT FR GOT PLAS OPC X 5 ML "
        ],
        "genericos": [
            {
                "nome": "Andrum",
                "precoBase": 78.73
            },
            {
                "nome": "Cloridrato de Dorzolamida",
                "precoBase": 79.37
            },
            {
                "nome": "Dorzal",
                "precoBase": 87.35
            },
            {
                "nome": "Zonidra",
                "precoBase": 103.68
            }
        ],
        "precoReferencia": 116.03,
        "sinonimias": []
    },
    {
        "id": "med-00200",
        "nome": "oz",
        "principioAtivo": "Cloridrato de Dorzolamida;maleato de Timolol",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "(20+ 5) MG/ML SOL OFT CT FR GOT PLAS PEBD OPC X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Drusolol lc",
                "precoBase": 107.57
            },
            {
                "nome": "Cloridrato de Dorzolamida + Maleato de Timolol",
                "precoBase": 118.86
            }
        ],
        "precoReferencia": 165.09,
        "sinonimias": []
    },
    {
        "id": "med-00201",
        "nome": "Doxiclin",
        "principioAtivo": "Cloridrato de Doxiciclina",
        "descricao": "Tetraciclinas e associações",
        "apresentacoes": [
            "100 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 15",
            "100 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Hiclato de Doxiciclina",
                "precoBase": 28.16
            },
            {
                "nome": "Cloridrato de Doxiciclina",
                "precoBase": 43.54
            }
        ],
        "precoReferencia": 46.42,
        "sinonimias": []
    },
    {
        "id": "med-00202",
        "nome": "Cymbalta",
        "principioAtivo": "Cloridrato de Duloxetina",
        "descricao": "Antidepressivos snri",
        "apresentacoes": [
            "30 MG CAP  DURA C/ MGRAN RETARD CT  BL AL AL X 30 ",
            "60 MG CAP  DURA C/ MGRAN RETARD CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Velija",
                "precoBase": 36.71
            },
            {
                "nome": "Sympta",
                "precoBase": 39.85
            },
            {
                "nome": "Dep",
                "precoBase": 43.01
            },
            {
                "nome": "Cloridrato de Duloxetina",
                "precoBase": 52.5
            },
            {
                "nome": "Dual",
                "precoBase": 54.83
            },
            {
                "nome": "Mydulo",
                "precoBase": 56.34
            }
        ],
        "precoReferencia": 367.87,
        "sinonimias": []
    },
    {
        "id": "med-00203",
        "nome": "Relestat",
        "principioAtivo": "Cloridrato de Epinastina",
        "descricao": "Antialérgicos oftamológicos, anti-histamínicos",
        "apresentacoes": [
            "0,5 MG/ML SOL OFT CT FR GOT PLAS PEBD OPC X 5 ML "
        ],
        "genericos": [
            {
                "nome": "Talerc",
                "precoBase": 42.18
            }
        ],
        "precoReferencia": 83.79,
        "sinonimias": []
    },
    {
        "id": "med-00204",
        "nome": "Resfriliv",
        "principioAtivo": "Cloridrato de Fenilefrina",
        "descricao": "Antigripais sem antiinfecciosos",
        "apresentacoes": [
            "400MG + 4MG + 4MG PÓ CT 50 ENV AL/PLAS X 5G (EMB MULT) - HORTELÃ/GENGIBRE",
            "400MG + 4MG + 4MG PÓ CT 50 ENV AL/PLAS X 5G (EMB MULT) - LARANJA/ACEROLA",
            "400MG + 4MG + 4MG PÓ CT 50 ENV AL/PLAS X 5G (EMB MULT) - MEL/LIMÃO "
        ],
        "genericos": [
            {
                "nome": "Gripalcê",
                "precoBase": 25.62
            },
            {
                "nome": "Neolefrin",
                "precoBase": 27.33
            }
        ],
        "precoReferencia": 171.13,
        "sinonimias": []
    },
    {
        "id": "med-00205",
        "nome": "Naldecon Dia",
        "principioAtivo": "Cloridrato de Fenilefrina;paracetamol",
        "descricao": "Antigripais sem antiinfecciosos",
        "apresentacoes": [
            "(400,0 + 20,0) COM X 12 + 400 MG COM X 12 CT BL AL AL"
        ],
        "genericos": [
            {
                "nome": "Neolefrin Dia",
                "precoBase": 20.93
            },
            {
                "nome": "Cimegripe Dia",
                "precoBase": 22.4
            },
            {
                "nome": "Benegrip Multi Dia",
                "precoBase": 28.99
            },
            {
                "nome": "Fluviral Dia",
                "precoBase": 34.26
            },
            {
                "nome": "Naldecon Multi",
                "precoBase": 38.89
            }
        ],
        "precoReferencia": 46.23,
        "sinonimias": []
    },
    {
        "id": "med-00206",
        "nome": "Allegra",
        "principioAtivo": "Cloridrato de Fexofenadina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "120 MG COM REV CT BL AL PLAS TRANS X 10",
            "120 MG COM REV CT BL AL PLAS TRANS X 2",
            "120 MG COM REV CT BL AL PLAS TRANS X 20",
            "120 MG COM REV CT BL AL PLAS TRANS X 5"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Fexofenadina",
                "precoBase": 24.56
            },
            {
                "nome": "Fexx",
                "precoBase": 24.79
            },
            {
                "nome": "Allexofedrin Pediátrico",
                "precoBase": 30.06
            },
            {
                "nome": "Aler",
                "precoBase": 33.16
            },
            {
                "nome": "Altiva",
                "precoBase": 35.62
            },
            {
                "nome": "Praalergia",
                "precoBase": 36.82
            }
        ],
        "precoReferencia": 19.06,
        "sinonimias": []
    },
    {
        "id": "med-00207",
        "nome": "Allegra d",
        "principioAtivo": "Cloridrato de Fexofenadina;cloridrato de Pseudoefedrina",
        "descricao": "Preparações sistêmicas nasais",
        "apresentacoes": [
            "(60 + 120) MG COM REV LIB PROL CT  BL AL PLAS PVC/PE/PVDC TRANS X 10"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Fexofenadina + Cloridrato de Pseudoefedrina",
                "precoBase": 44.67
            },
            {
                "nome": "Allexofedrin d",
                "precoBase": 63.29
            }
        ],
        "precoReferencia": 73.77,
        "sinonimias": []
    },
    {
        "id": "med-00208",
        "nome": "Gilenya",
        "principioAtivo": "Cloridrato de Fingolimode",
        "descricao": "Produtos para esclerose múltipla",
        "apresentacoes": [
            "0,5 MG CAP GEL DURA CT BL AL PLAS TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Fingolimode",
                "precoBase": 4044.46
            }
        ],
        "precoReferencia": 13355.35,
        "sinonimias": []
    },
    {
        "id": "med-00209",
        "nome": "Prozac",
        "principioAtivo": "Cloridrato de Fluoxetina",
        "descricao": "Antidepressivos ssri",
        "apresentacoes": [
            "20 MG CAP DURA CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Fluxene",
                "precoBase": 28.02
            },
            {
                "nome": "Cloridrato de Fluoxetina",
                "precoBase": 33.67
            },
            {
                "nome": "Daforin",
                "precoBase": 49.59
            },
            {
                "nome": "Verotina",
                "precoBase": 151.5
            }
        ],
        "precoReferencia": 418.76,
        "sinonimias": []
    },
    {
        "id": "med-00210",
        "nome": "Droxy",
        "principioAtivo": "Cloridrato de Hidroxizina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "25 MG COM CT FR PLAS PEAD OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Hixizine",
                "precoBase": 21.84
            },
            {
                "nome": "Cloridrato de Hidroxizine",
                "precoBase": 30.85
            },
            {
                "nome": "Cloridrato de Hidroxizina",
                "precoBase": 36.92
            }
        ],
        "precoReferencia": 44.04,
        "sinonimias": []
    },
    {
        "id": "med-00211",
        "nome": "Cronobê",
        "principioAtivo": "Cloridrato de Hidroxocobalamina",
        "descricao": "Vitamina b12 pura",
        "apresentacoes": [
            "2000 MCG/ML SOL INJ CT 2 AMP VD AMB X 2,5 ML"
        ],
        "genericos": [
            {
                "nome": "Vitamina B12",
                "precoBase": 44.97
            }
        ],
        "precoReferencia": 44.97,
        "sinonimias": []
    },
    {
        "id": "med-00212",
        "nome": "Procoralan",
        "principioAtivo": "Cloridrato de Ivabradina",
        "descricao": "Terapia coronaria excluindo antagonistas do cálcio e nitritos",
        "apresentacoes": [
            "5 MG COM REV CT BL AL PLAS INC X 28",
            "5 MG COM REV CT BL AL PLAS INC X 56",
            "7,5 MG COM REV CT BL AL PLAS INC X 56"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Ivabradina",
                "precoBase": 16.89
            },
            {
                "nome": "Ivahart",
                "precoBase": 34.9
            }
        ],
        "precoReferencia": 97.79,
        "sinonimias": []
    },
    {
        "id": "med-00213",
        "nome": "Zanidip",
        "principioAtivo": "Cloridrato de Lercanidipino",
        "descricao": "Antagonistas do cálcio puros",
        "apresentacoes": [
            "10 MG COM REV CT  STR AL X 20",
            "10 MG COM REV CT  STR AL X 30",
            "10 MG COM REV CT BL AL AL X 10",
            "10 MG COM REV CT BL AL AL X 20"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Lercanidipino",
                "precoBase": 120.53
            }
        ],
        "precoReferencia": 33.16,
        "sinonimias": []
    },
    {
        "id": "med-00214",
        "nome": "Neozine",
        "principioAtivo": "Cloridrato de Levomepromazina",
        "descricao": "Antipsicóticos convencionais",
        "apresentacoes": [
            "40 MG/ML SOL OR CT FR GOT VD AMB X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Levozine",
                "precoBase": 18.43
            }
        ],
        "precoReferencia": 21.85,
        "sinonimias": []
    },
    {
        "id": "med-00215",
        "nome": "Xylestesin",
        "principioAtivo": "Cloridrato de Lidocaina",
        "descricao": "Anestésicos locais injetáveis odontológicos",
        "apresentacoes": [
            "20 MG/ML SOL INJ CX 50 CARP PLAS TRANS X 1,8 ML"
        ],
        "genericos": [
            {
                "nome": "Labcaína",
                "precoBase": 14.25
            },
            {
                "nome": "Cloridrato de Lidocaína",
                "precoBase": 25.35
            },
            {
                "nome": "Lidogel",
                "precoBase": 25.51
            },
            {
                "nome": "Lidial",
                "precoBase": 27.35
            },
            {
                "nome": "Lidocaína",
                "precoBase": 32.53
            }
        ],
        "precoReferencia": 298.95,
        "sinonimias": []
    },
    {
        "id": "med-00216",
        "nome": "Imosec",
        "principioAtivo": "Cloridrato de Loperamida",
        "descricao": "Inibidores da motilidade",
        "apresentacoes": [
            "2 MG COM CT  BL AL PLAS TRANS X 12"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Loperamida",
                "precoBase": 6.01
            },
            {
                "nome": "Diasec",
                "precoBase": 9.07
            },
            {
                "nome": "Magnostase",
                "precoBase": 10.73
            },
            {
                "nome": "Intestin",
                "precoBase": 11.5
            },
            {
                "nome": "Kaosec",
                "precoBase": 12.15
            }
        ],
        "precoReferencia": 12.37,
        "sinonimias": []
    },
    {
        "id": "med-00217",
        "nome": "Latuda®",
        "principioAtivo": "Cloridrato de Lurasidona",
        "descricao": "Antipsicóticos atípicos",
        "apresentacoes": [
            "20 MG COM REV CT BL AL AL X 14",
            "20 MG COM REV CT BL AL AL X 30",
            "20 MG COM REV CT BL AL AL X 60",
            "20 MG COM REV CT BL AL AL X 7"
        ],
        "genericos": [
            {
                "nome": "Lubip",
                "precoBase": 54.33
            },
            {
                "nome": "Lutab",
                "precoBase": 57.17
            },
            {
                "nome": "Luratt",
                "precoBase": 77.6
            },
            {
                "nome": "Cloridrato de Lurasidona",
                "precoBase": 140.1
            }
        ],
        "precoReferencia": 57.19,
        "sinonimias": []
    },
    {
        "id": "med-00218",
        "nome": "Duspatalin",
        "principioAtivo": "Cloridrato de Mebeverina",
        "descricao": "Antiespasmódicos e anticolinérgicos puros",
        "apresentacoes": [
            "200 MG CAP DURA LIB PROL CT BL AL/AL X 30",
            "200 MG CAP DURA LIB PROL CT BL AL/AL X 60"
        ],
        "genericos": [
            {
                "nome": "Rubenti",
                "precoBase": 101.31
            }
        ],
        "precoReferencia": 217.22,
        "sinonimias": []
    },
    {
        "id": "med-00219",
        "nome": "Ebix",
        "principioAtivo": "Cloridrato de Memantina",
        "descricao": "Todos os outros produtos antialzheimer",
        "apresentacoes": [
            "10 MG COM REV CT BL AL PLAS TRANS X 28 ",
            "10 MG COM REV CT BL AL PLAS TRANS X 56",
            "20 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Heimer",
                "precoBase": 26.78
            },
            {
                "nome": "Alois",
                "precoBase": 32.75
            },
            {
                "nome": "Alz",
                "precoBase": 36.32
            },
            {
                "nome": "Zider",
                "precoBase": 41.49
            },
            {
                "nome": "Cloridrato de Memantina",
                "precoBase": 47.0
            },
            {
                "nome": "Moriale Odt",
                "precoBase": 55.85
            }
        ],
        "precoReferencia": 447.01,
        "sinonimias": []
    },
    {
        "id": "med-00220",
        "nome": "Mepicain 3%",
        "principioAtivo": "Cloridrato de Mepivacaína",
        "descricao": "Anestésicos locais injetáveis odontológicos",
        "apresentacoes": [
            "30MG/ML SOL INJ CX 50 CARP PLAS TRANS X 1,8 ML"
        ],
        "genericos": [
            {
                "nome": "Mepisv",
                "precoBase": 268.8
            },
            {
                "nome": "Mepivalem 3 % sv",
                "precoBase": 277.98
            }
        ],
        "precoReferencia": 343.79,
        "sinonimias": []
    },
    {
        "id": "med-00221",
        "nome": "Meglize",
        "principioAtivo": "Cloridrato de Metformina",
        "descricao": "Antidiabéticos biguanidas puros",
        "apresentacoes": [
            "200 MG/ML SOL OR CT FR PLAS PET AMB X 150 ML + SER DOS"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Metformina",
                "precoBase": 2.56
            },
            {
                "nome": "Glifage xr",
                "precoBase": 4.07
            },
            {
                "nome": "Glifage",
                "precoBase": 10.32
            },
            {
                "nome": "Glicomet",
                "precoBase": 13.51
            },
            {
                "nome": "Diglixx",
                "precoBase": 18.21
            },
            {
                "nome": "Glicefor",
                "precoBase": 22.45
            }
        ],
        "precoReferencia": 56.72,
        "sinonimias": []
    },
    {
        "id": "med-00222",
        "nome": "Sitareddys-m",
        "principioAtivo": "Cloridrato de Metformina;cloridrato de Sitagliptina Monoidratado",
        "descricao": "Associações de inibidores dpp-iv com biguanidas",
        "apresentacoes": [
            "(50 + 1000) MG COM REV CT BL AL AL X 14",
            "(50 + 1000) MG COM REV CT BL AL AL X 28",
            "(50 + 1000) MG COM REV CT BL AL AL X 56",
            "(50 + 850) MG COM REV CT BL AL AL X 14"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Sitagliptina Monoidratado + Cloridrato de Metformina",
                "precoBase": 197.54
            }
        ],
        "precoReferencia": 80.55,
        "sinonimias": []
    },
    {
        "id": "med-00223",
        "nome": "Xigduo xr",
        "principioAtivo": "Cloridrato de Metformina;dapagliflozina",
        "descricao": "Associação de antidiabéticos inibidores de sglt2 com biguanidas",
        "apresentacoes": [
            "(10 + 1000) MG COM REV LIB MOD CT BL AL/AL X 14 ",
            "(10 + 1000) MG COM REV LIB MOD CT BL AL/AL X 30",
            "(10 + 500) MG COM REV LIB MOD CT BL AL/AL X 14",
            "(5 + 1000) MG COM REV LIB MOD CT BL AL/AL X 14"
        ],
        "genericos": [
            {
                "nome": "Dapagliflozina + Cloridrato de Metformina",
                "precoBase": 160.4
            }
        ],
        "precoReferencia": 61.92,
        "sinonimias": []
    },
    {
        "id": "med-00224",
        "nome": "Siteh Met lp",
        "principioAtivo": "Cloridrato de Metformina;fosfato de Sitagliptina",
        "descricao": "Associações de inibidores dpp-iv com biguanidas",
        "apresentacoes": [
            "(1000 + 100) MG COM REV LIB PROL CT FR PLAS PEAD OPC X 30",
            "(1000 + 50) MG COM REV LIB PROL CT FR PLAS PEAD OPC X 60",
            "(500 + 50) MG COM REV LIB PROL CT FR PLAS PEAD OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Fosfato de Sitagliptina + Cloridrato de Metformina",
                "precoBase": 26.23
            },
            {
                "nome": "Siteh Met",
                "precoBase": 41.03
            }
        ],
        "precoReferencia": 343.61,
        "sinonimias": []
    },
    {
        "id": "med-00225",
        "nome": "Janumet",
        "principioAtivo": "Cloridrato de Metformina;fosfato de Sitagliptina Monoidratado",
        "descricao": "Associações de inibidores dpp-iv com biguanidas",
        "apresentacoes": [
            "(1000 + 100) MG COM REV LIB PROL CT FR PLAS PEAD OPC X 30",
            "(1000 + 50) MG COM REV LIB PROL CT FR PLAS PEAD OPC X 60",
            "(50 + 1000) MG COM REV CT BL AL AL X 28",
            "(50 + 1000) MG COM REV CT BL AL AL X 56"
        ],
        "genericos": [
            {
                "nome": "Sitglu Met",
                "precoBase": 43.34
            },
            {
                "nome": "Nimegon Met",
                "precoBase": 173.36
            }
        ],
        "precoReferencia": 173.36,
        "sinonimias": []
    },
    {
        "id": "med-00226",
        "nome": "Meritor",
        "principioAtivo": "Cloridrato de Metformina;glimepirida",
        "descricao": "Associações de antidiabéticos sulfonilouréia com biguanidas",
        "apresentacoes": [
            "2 MG + 1000 MG COM REV CT BL AL PLAS PVC TRANS X 10 ",
            "2 MG + 1000 MG COM REV CT BL AL PLAS PVC TRANS X 30",
            "4 MG + 1000 MG COM REV CT BL AL PLAS PVC TRANS X 10 ",
            "4 MG + 1000 MG COM REV CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Glimepirida + Cloridrato de Metformina",
                "precoBase": 27.15
            }
        ],
        "precoReferencia": 44.81,
        "sinonimias": []
    },
    {
        "id": "med-00227",
        "nome": "Trayenta Duo",
        "principioAtivo": "Cloridrato de Metformina;linagliptina",
        "descricao": "Associações de inibidores dpp-iv com biguanidas",
        "apresentacoes": [
            "2,5 MG + 1000 MG COM REV CT FR PLAS PEAD OPC X 60",
            "2,5 MG + 500 MG COM REV CT FR PLAS PEAD OPC X 60",
            "2,5 MG + 850 MG COM REV CT FR PLAS PEAD OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Linagliptina + Cloridrato de Metformina",
                "precoBase": 65.17
            },
            {
                "nome": "Glink Met",
                "precoBase": 106.38
            },
            {
                "nome": "Linadib Duo",
                "precoBase": 107.6
            },
            {
                "nome": "Glunac Duo",
                "precoBase": 107.6
            }
        ],
        "precoReferencia": 322.78,
        "sinonimias": []
    },
    {
        "id": "med-00228",
        "nome": "Galvus Met",
        "principioAtivo": "Cloridrato de Metformina;vildagliptina",
        "descricao": "Associações de inibidores dpp-iv com biguanidas",
        "apresentacoes": [
            "50 MG + 1000 MG COM REV CT BL AL/AL X 14",
            "50 MG + 1000 MG COM REV CT BL AL/AL X 56",
            "50 MG + 500 MG COM REV CT BL AL/AL X 56",
            "50 MG + 850 MG COM REV CT BL AL/AL X 14"
        ],
        "genericos": [
            {
                "nome": "Vildagliptina + Cloridrato de Metformina",
                "precoBase": 20.18
            },
            {
                "nome": "Viz Met",
                "precoBase": 31.79
            }
        ],
        "precoReferencia": 66.67,
        "sinonimias": []
    },
    {
        "id": "med-00229",
        "nome": "Concerta",
        "principioAtivo": "Cloridrato de Metilfenidato",
        "descricao": "Psicoestimulantes",
        "apresentacoes": [
            "18 MG COM REV LIB PROL CT FR PLAS OPC X 30",
            "36 MG COM REV LIB PROL CT FR PLAS OPC X 30",
            "54 MG COM REV LIB PROL CT FR PLAS OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Metilfenidato",
                "precoBase": 11.03
            },
            {
                "nome": "Tedeaga",
                "precoBase": 17.96
            },
            {
                "nome": "Attenze",
                "precoBase": 54.36
            },
            {
                "nome": "Medato",
                "precoBase": 54.36
            },
            {
                "nome": "Ritalina",
                "precoBase": 54.61
            },
            {
                "nome": "Ragione",
                "precoBase": 301.08
            }
        ],
        "precoReferencia": 318.17,
        "sinonimias": []
    },
    {
        "id": "med-00230",
        "nome": "Plabel",
        "principioAtivo": "Cloridrato de Metoclopramida",
        "descricao": "Gastroprocinéticos",
        "apresentacoes": [
            "4,0 MG/ML SOL OR CT FR PLAS OPC GOT X 10 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Metoclopramida",
                "precoBase": 7.24
            },
            {
                "nome": "Vomistop",
                "precoBase": 9.27
            }
        ],
        "precoReferencia": 16.07,
        "sinonimias": []
    },
    {
        "id": "med-00231",
        "nome": "Plasil",
        "principioAtivo": "Cloridrato de Metoclopramida Monoidratado",
        "descricao": "Gastroprocinéticos",
        "apresentacoes": [
            "10 MG COM CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Metoclopramida",
                "precoBase": 4.25
            },
            {
                "nome": "Plabel",
                "precoBase": 19.81
            }
        ],
        "precoReferencia": 15.0,
        "sinonimias": []
    },
    {
        "id": "med-00232",
        "nome": "Avalox",
        "principioAtivo": "Cloridrato de Moxifloxacino",
        "descricao": "Fluorquinolonas orais",
        "apresentacoes": [
            "400 MG COM REV CT BL AL AL X 5",
            "400 MG COM REV CT BL AL AL X 7"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Moxifloxacino",
                "precoBase": 34.1
            },
            {
                "nome": "Oftalmox",
                "precoBase": 36.6
            },
            {
                "nome": "Vigamox",
                "precoBase": 56.31
            },
            {
                "nome": "Praiva",
                "precoBase": 179.47
            },
            {
                "nome": "Madun",
                "precoBase": 183.12
            },
            {
                "nome": "Neumosin",
                "precoBase": 227.6
            }
        ],
        "precoReferencia": 296.0,
        "sinonimias": []
    },
    {
        "id": "med-00233",
        "nome": "Claroft",
        "principioAtivo": "Cloridrato de Nafazolina",
        "descricao": "Descongestionantes oftalmológicos, simpaticomiméticos",
        "apresentacoes": [
            "0,12 MG/ML SOL OFT CT FR PLAS OPC GOT X 15 ML"
        ],
        "genericos": [
            {
                "nome": "Narix",
                "precoBase": 10.06
            },
            {
                "nome": "Cloridrato de Nafazolina",
                "precoBase": 10.29
            },
            {
                "nome": "ad Soro",
                "precoBase": 12.14
            },
            {
                "nome": "Sorinan",
                "precoBase": 12.27
            },
            {
                "nome": "Neosoro",
                "precoBase": 12.27
            },
            {
                "nome": "Multisoro Adulto",
                "precoBase": 13.7
            }
        ],
        "precoReferencia": 14.76,
        "sinonimias": []
    },
    {
        "id": "med-00234",
        "nome": "Claril",
        "principioAtivo": "Cloridrato de Nafazolina;maleato de Feniramina",
        "descricao": "Descongestionantes oftalmológicos, simpaticomiméticos",
        "apresentacoes": [
            "0,25 MG/ML + 3,0 MG/ML SOL OFT CT FR PLAS TRANS GOT X 15 ML"
        ],
        "genericos": [
            {
                "nome": "Cristalin",
                "precoBase": 14.89
            },
            {
                "nome": "Uniclarin",
                "precoBase": 15.36
            },
            {
                "nome": "Clanistil",
                "precoBase": 16.08
            }
        ],
        "precoReferencia": 32.05,
        "sinonimias": []
    },
    {
        "id": "med-00235",
        "nome": "Colírio Legrand",
        "principioAtivo": "Cloridrato de Nafazolina;sulfato de Zinco",
        "descricao": "Descongestionantes oftalmológicos, simpaticomiméticos",
        "apresentacoes": [
            "(0,30 + 0,15) MG/ML SOL OFT CT FR GOT PLAS OPCX 20 ML"
        ],
        "genericos": [
            {
                "nome": "Colírio Teuto",
                "precoBase": 16.53
            }
        ],
        "precoReferencia": 21.29,
        "sinonimias": []
    },
    {
        "id": "med-00236",
        "nome": "Colírio Moura Brasil",
        "principioAtivo": "Cloridrato de Nafazolina;sulfato de Zinco Heptaidratado",
        "descricao": "Descongestionantes oftalmológicos, simpaticomiméticos",
        "apresentacoes": [
            "0,15 MG/ML + 0,3 MG/ML SOL OFT CT FR CGT PLAS TRANS X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Lavolho d",
                "precoBase": 19.89
            }
        ],
        "precoReferencia": 29.07,
        "sinonimias": []
    },
    {
        "id": "med-00237",
        "nome": "Revia",
        "principioAtivo": "Cloridrato de Naltrexona",
        "descricao": "Produtos usados em dependência alcoólica",
        "apresentacoes": [
            "50 MG COM REV CT FR PLAS OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Uninaltrex",
                "precoBase": 125.27
            }
        ],
        "precoReferencia": 516.95,
        "sinonimias": []
    },
    {
        "id": "med-00238",
        "nome": "Reduxalt",
        "principioAtivo": "Cloridrato de Naltrexona Di-hidratado;cloridrato de Bupropiona",
        "descricao": "Preparações antiobesidade, exceto os dietéticos",
        "apresentacoes": [
            "(90 + 8) MG COM REV LIB PROL CT BL AL AL X 120",
            "(90 + 8) MG COM REV LIB PROL CT BL AL AL X 70"
        ],
        "genericos": [
            {
                "nome": "Sliv",
                "precoBase": 563.04
            },
            {
                "nome": "Bupnal",
                "precoBase": 563.04
            }
        ],
        "precoReferencia": 563.04,
        "sinonimias": []
    },
    {
        "id": "med-00239",
        "nome": "Naramig",
        "principioAtivo": "Cloridrato de Naratriptana",
        "descricao": "Antienxaquecosos triptânicos",
        "apresentacoes": [
            "2,5 MG COM REV CT BL AL / AL X 4"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Naratriptana",
                "precoBase": 8.3
            },
            {
                "nome": "Narcef",
                "precoBase": 10.52
            },
            {
                "nome": "Naratrin",
                "precoBase": 12.5
            },
            {
                "nome": "Naratano",
                "precoBase": 14.23
            },
            {
                "nome": "Naranety",
                "precoBase": 14.34
            }
        ],
        "precoReferencia": 28.67,
        "sinonimias": []
    },
    {
        "id": "med-00240",
        "nome": "Nebilet",
        "principioAtivo": "Cloridrato de Nebivolol",
        "descricao": "Betabloqueadores puros",
        "apresentacoes": [
            "5 MG COM CT BL AL PLAS INC X 28",
            "5 MG COM CT BL AL PLAS INC X 30",
            "5 MG COM CT BL AL PLAS INC X 56",
            "5 MG COM CT BL AL PLAS INC X 60"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Nebivolol",
                "precoBase": 24.47
            },
            {
                "nome": "Neblock",
                "precoBase": 25.47
            },
            {
                "nome": "Nebic",
                "precoBase": 34.07
            },
            {
                "nome": "Nyteb",
                "precoBase": 35.9
            },
            {
                "nome": "Nebipre",
                "precoBase": 36.68
            },
            {
                "nome": "Nebitah",
                "precoBase": 51.27
            }
        ],
        "precoReferencia": 161.77,
        "sinonimias": []
    },
    {
        "id": "med-00241",
        "nome": "Pamelor",
        "principioAtivo": "Cloridrato de Nortriptilina",
        "descricao": "Antidepressivos todos os outros",
        "apresentacoes": [
            "10 MG CAP DURA CT  BL AL PLAS PVC TRANS X 30",
            "25 MG CAP DURA CT  BL AL PLAS PVC TRANS X 30",
            "25 MG CAP DURA CT  BL AL PLAS PVC TRANS X 60",
            "50 MG CAP DURA CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Nortriptilina",
                "precoBase": 41.77
            },
            {
                "nome": "Nortry",
                "precoBase": 61.93
            }
        ],
        "precoReferencia": 44.78,
        "sinonimias": []
    },
    {
        "id": "med-00242",
        "nome": "Patanol",
        "principioAtivo": "Cloridrato de Olopatadina",
        "descricao": "Antialérgicos oftamológicos, múltipla ação",
        "apresentacoes": [
            "1 MG/ML SOL OFT CT FR GOT PLAS PE OPC  X 5 ML",
            "2 MG/ML SOL OFT CT FR GOT PLAS PE OPC X 2,5 ML "
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Olopatadina",
                "precoBase": 47.24
            },
            {
                "nome": "Olop",
                "precoBase": 79.12
            },
            {
                "nome": "Opti",
                "precoBase": 80.02
            },
            {
                "nome": "Prurok",
                "precoBase": 83.99
            }
        ],
        "precoReferencia": 84.32,
        "sinonimias": []
    },
    {
        "id": "med-00243",
        "nome": "Enavo Gotas",
        "principioAtivo": "Cloridrato de Ondansetrona Di-hidratado",
        "descricao": "Antieméticos e antinauseantes, antagonistas da serotonina",
        "apresentacoes": [
            "8 MG/ML SOL GOT OR CT FR GOT PLAS PET AMB X 10ML",
            "8 MG/ML SOL GOT OR CT FR GOT PLAS PET AMB X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Ondansetrona",
                "precoBase": 11.17
            },
            {
                "nome": "Enjovix Flash",
                "precoBase": 11.34
            },
            {
                "nome": "Cloridrato de Ondansetrona Dihidratado",
                "precoBase": 12.07
            },
            {
                "nome": "Vonau",
                "precoBase": 16.83
            },
            {
                "nome": "Naudan Odt",
                "precoBase": 19.37
            },
            {
                "nome": "Volig",
                "precoBase": 19.37
            }
        ],
        "precoReferencia": 49.21,
        "sinonimias": []
    },
    {
        "id": "med-00244",
        "nome": "Retemic",
        "principioAtivo": "Cloridrato de Oxibutinina",
        "descricao": "Produtos para incontinência urinária",
        "apresentacoes": [
            "1 MG/ML XPE CT FR VD AMB X 120 ML + COL",
            "10 MG COM REV LIB PROL CT BL AL PLAS TRANS X 15 ",
            "10 MG COM REV LIB PROL CT BL AL PLAS TRANS X 30 ",
            "5 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Oxibutinina",
                "precoBase": 25.39
            },
            {
                "nome": "Dry",
                "precoBase": 41.12
            },
            {
                "nome": "Nourin",
                "precoBase": 41.12
            }
        ],
        "precoReferencia": 45.78,
        "sinonimias": []
    },
    {
        "id": "med-00245",
        "nome": "Oxycontin",
        "principioAtivo": "Cloridrato de Oxicodona",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "10 MG COM REV LIB PROL CT BL AL PLAS PVC/PVDC TRANS X 14",
            "10 MG COM REV LIB PROL CT BL AL PLAS PVC/PVDC TRANS X 28",
            "20 MG COM REV LIB PROL CT BL AL PLAS PVC/PVDC TRANS X 28",
            "40 MG COM REV LIB PROL CT BL AL PLAS PVC/PVDC TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Oxicodona",
                "precoBase": 91.17
            },
            {
                "nome": "Oxypynal",
                "precoBase": 157.01
            }
        ],
        "precoReferencia": 219.83,
        "sinonimias": []
    },
    {
        "id": "med-00246",
        "nome": "Aturgyl",
        "principioAtivo": "Cloridrato de Oximetazolina",
        "descricao": "Descongestionantes nasais",
        "apresentacoes": [
            "0,5 MG/ML SOL NASAL CT FR PLAS OPC SPRAY X 15 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Oximetazolina",
                "precoBase": 12.11
            }
        ],
        "precoReferencia": 19.24,
        "sinonimias": []
    },
    {
        "id": "med-00247",
        "nome": "Aropax",
        "principioAtivo": "Cloridrato de Paroxetina",
        "descricao": "Antidepressivos ssri",
        "apresentacoes": [
            "20 MG COM REV CT BL AL PLAS PVC TRANS X 30 "
        ],
        "genericos": [
            {
                "nome": "Pondera",
                "precoBase": 39.04
            },
            {
                "nome": "Cloridrato de Paroxetina",
                "precoBase": 48.0
            },
            {
                "nome": "Paxil cr",
                "precoBase": 72.49
            },
            {
                "nome": "Roxetin",
                "precoBase": 102.53
            },
            {
                "nome": "Cebrilin",
                "precoBase": 118.9
            },
            {
                "nome": "Parox",
                "precoBase": 122.19
            }
        ],
        "precoReferencia": 428.6,
        "sinonimias": []
    },
    {
        "id": "med-00248",
        "nome": "Paxil cr",
        "principioAtivo": "Cloridrato de Paroxetina Hemi-hidratado",
        "descricao": "Antidepressivos ssri",
        "apresentacoes": [
            "25 MG COM REV LIB MOD CT BL AL PLAS PVC OPC X 10  "
        ],
        "genericos": [
            {
                "nome": "Roxetin xr",
                "precoBase": 32.02
            },
            {
                "nome": "Pondera xr",
                "precoBase": 34.85
            },
            {
                "nome": "Sincro xr",
                "precoBase": 34.85
            },
            {
                "nome": "Cloridrato de Paroxetina",
                "precoBase": 53.76
            },
            {
                "nome": "Paxtrat",
                "precoBase": 59.64
            },
            {
                "nome": "Moratus",
                "precoBase": 118.85
            }
        ],
        "precoReferencia": 141.95,
        "sinonimias": []
    },
    {
        "id": "med-00249",
        "nome": "Votrient",
        "principioAtivo": "Cloridrato de Pazopanibe",
        "descricao": "Outros antineoplásicos inibidores da proteína kinase",
        "apresentacoes": [
            "200 MG COM REV CT FR PLAS OPC X 30 ",
            "400 MG COM REV CT FR PLAS OPC X 30 ",
            "400 MG COM REV CT FR PLAS OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Renyb",
                "precoBase": 5172.57
            }
        ],
        "precoReferencia": 5172.57,
        "sinonimias": []
    },
    {
        "id": "med-00250",
        "nome": "Pilocarpina",
        "principioAtivo": "Cloridrato de Pilocarpina",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "10 MG/ML SOL OCU CT FR PLAS TRANS GOT X 10 ML",
            "20 MG/ML SOL OCU CT FR PLAS TRANS GOT X 10 ML",
            "40 MG/ML SOL OCU CT FR PLAS TRANS GOT X 10 ML"
        ],
        "genericos": [
            {
                "nome": "Pilocan",
                "precoBase": 46.62
            }
        ],
        "precoReferencia": 33.37,
        "sinonimias": []
    },
    {
        "id": "med-00251",
        "nome": "Diaglits",
        "principioAtivo": "Cloridrato de Pioglitazona",
        "descricao": "Antidiabéticos glitazonas puros",
        "apresentacoes": [
            "30 MG COM CT BL AL AL X 15",
            "30 MG COM CT BL AL AL X 30",
            "30 MG COM CT BL AL AL X 60"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Pioglitazona",
                "precoBase": 21.94
            },
            {
                "nome": "Piomi",
                "precoBase": 36.28
            },
            {
                "nome": "Piotaz",
                "precoBase": 36.29
            },
            {
                "nome": "Aglitil",
                "precoBase": 36.29
            },
            {
                "nome": "Stanglit",
                "precoBase": 54.43
            },
            {
                "nome": "Doble",
                "precoBase": 72.54
            }
        ],
        "precoReferencia": 72.6,
        "sinonimias": []
    },
    {
        "id": "med-00252",
        "nome": "Fenergan",
        "principioAtivo": "Cloridrato de Prometazina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "25 MG COM REV CT BL AL PLAS TRANS X 20",
            "25 MG/ML SOL INJ IM CX 25 AMP VD AMB  X 2 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Prometazina",
                "precoBase": 12.52
            },
            {
                "nome": "Profergan",
                "precoBase": 13.32
            },
            {
                "nome": "Promergan",
                "precoBase": 26.67
            },
            {
                "nome": "Xômergan! Pós Picada",
                "precoBase": 26.67
            },
            {
                "nome": "Pamergan",
                "precoBase": 129.6
            },
            {
                "nome": "Lisador",
                "precoBase": 328.48
            }
        ],
        "precoReferencia": 20.74,
        "sinonimias": []
    },
    {
        "id": "med-00253",
        "nome": "Ritmonorm",
        "principioAtivo": "Cloridrato de Propafenona",
        "descricao": "Antiarrítmicos cardíacos",
        "apresentacoes": [
            "300 MG COM REV CT BL AL PLAS OPC X 10 ",
            "300 MG COM REV CT BL AL PLAS OPC X 30 ",
            "300 MG COM REV CT BL AL PLAS OPC X 60 "
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Propafenona",
                "precoBase": 9.43
            },
            {
                "nome": "Vatis",
                "precoBase": 31.61
            },
            {
                "nome": "Cadyr",
                "precoBase": 102.46
            },
            {
                "nome": "Tuntá",
                "precoBase": 109.25
            }
        ],
        "precoReferencia": 52.48,
        "sinonimias": []
    },
    {
        "id": "med-00254",
        "nome": "Sanpronol",
        "principioAtivo": "Cloridrato de Propranolol",
        "descricao": "Betabloqueadores puros",
        "apresentacoes": [
            "40 MG COM CT BL AL PLAS PVC AMB X 500"
        ],
        "genericos": [
            {
                "nome": "Pranolal",
                "precoBase": 5.14
            },
            {
                "nome": "Cloridrato de Propranolol",
                "precoBase": 5.44
            },
            {
                "nome": "Propranolom",
                "precoBase": 8.97
            },
            {
                "nome": "Amprax",
                "precoBase": 8.99
            },
            {
                "nome": "Polol",
                "precoBase": 8.99
            },
            {
                "nome": "Propranolol",
                "precoBase": 11.33
            }
        ],
        "precoReferencia": 181.74,
        "sinonimias": []
    },
    {
        "id": "med-00255",
        "nome": "Tylenol Sinus",
        "principioAtivo": "Cloridrato de Pseudoefedrina;paracetamol",
        "descricao": "Antigripais sem antiinfecciosos",
        "apresentacoes": [
            "500 MG + 30 MG COM REV CT BL AL/PAP PLAS PVDC TRANS X 24",
            "500 MG + 30 MG COM REV CT BL AL/PAP PLAS PVDC TRANS X 36"
        ],
        "genericos": [
            {
                "nome": "Emsfeb Efe",
                "precoBase": 2.71
            },
            {
                "nome": "Paracetamol + Cloridrato de Pseudoefedrina",
                "precoBase": 14.97
            },
            {
                "nome": "Resfegripe Sinus",
                "precoBase": 22.89
            }
        ],
        "precoReferencia": 24.79,
        "sinonimias": []
    },
    {
        "id": "med-00256",
        "nome": "Evista",
        "principioAtivo": "Cloridrato de Raloxifeno",
        "descricao": "Moduladores seletivos do receptor de estrogênio",
        "apresentacoes": [
            "60 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Raloxifeno",
                "precoBase": 58.9
            },
            {
                "nome": "Ralxfem",
                "precoBase": 122.84
            }
        ],
        "precoReferencia": 415.86,
        "sinonimias": []
    },
    {
        "id": "med-00257",
        "nome": "Zoloft",
        "principioAtivo": "Cloridrato de Sertralina",
        "descricao": "Antidepressivos ssri",
        "apresentacoes": [
            "100 MG COM REV CT BL AL PLAS PVC TRANS X 30",
            "50 MG COM REV CT BL AL PLAS PVC TRANS X 10",
            "50 MG COM REV CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Assert",
                "precoBase": 25.73
            },
            {
                "nome": "Afetus",
                "precoBase": 25.73
            },
            {
                "nome": "Ralzin",
                "precoBase": 42.95
            },
            {
                "nome": "Serenata",
                "precoBase": 50.49
            },
            {
                "nome": "Cloridrato de Sertralina",
                "precoBase": 50.57
            },
            {
                "nome": "Tolrest",
                "precoBase": 50.99
            }
        ],
        "precoReferencia": 105.28,
        "sinonimias": []
    },
    {
        "id": "med-00258",
        "nome": "Renagel",
        "principioAtivo": "Cloridrato de Sevelâmer",
        "descricao": "Produtos para hiperfosfatemia",
        "apresentacoes": [
            "800 MG COM REV CT FR PLAS OPC X 180"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Sevelamer",
                "precoBase": 1134.3
            },
            {
                "nome": "Sevclot",
                "precoBase": 1898.26
            }
        ],
        "precoReferencia": 1898.29,
        "sinonimias": []
    },
    {
        "id": "med-00259",
        "nome": "Cloridrato de Sibutramina Monoidratada",
        "principioAtivo": "Cloridrato de Sibutramina Monoidratado",
        "descricao": "Preparações antiobesidade, exceto os dietéticos",
        "apresentacoes": [
            "15 MG CAP GEL DURA CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Sigran",
                "precoBase": 57.33
            },
            {
                "nome": "Vazy",
                "precoBase": 57.33
            },
            {
                "nome": "Sibus",
                "precoBase": 63.12
            },
            {
                "nome": "Cloridrato de Sibutramina Monoidratado",
                "precoBase": 73.93
            },
            {
                "nome": "Cloridrato de Sibutramina",
                "precoBase": 79.37
            }
        ],
        "precoReferencia": 98.13,
        "sinonimias": []
    },
    {
        "id": "med-00260",
        "nome": "Cloridrato de Sotalol",
        "principioAtivo": "Cloridrato de Sotalol",
        "descricao": "Betabloqueadores puros",
        "apresentacoes": [
            "120 MG COM CT BL AL PLAS TRANS X 30 ",
            "160 MG COM CT BL AL PLAS PVC/PVDC TRANS X 30",
            "160 MG COM CT BL AL PLAS TRANS X 20  ",
            "160 MG COM CT BL AL PLAS TRANS X 30  "
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Sotalol",
                "precoBase": 56.64
            }
        ],
        "precoReferencia": 86.11,
        "sinonimias": []
    },
    {
        "id": "med-00261",
        "nome": "Tasulil",
        "principioAtivo": "Cloridrato de Tansulosina",
        "descricao": "Bph antagonistas alfa-adrenérgicos puros",
        "apresentacoes": [
            "0,4 MG CAP GEL DURA LIB PROL CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Tanzurys",
                "precoBase": 51.23
            },
            {
                "nome": "Tansudart",
                "precoBase": 58.04
            },
            {
                "nome": "Hproz",
                "precoBase": 60.4
            },
            {
                "nome": "Usoleg",
                "precoBase": 73.69
            },
            {
                "nome": "Cloridrato de Tansulosina",
                "precoBase": 100.75
            },
            {
                "nome": "Stub",
                "precoBase": 133.15
            }
        ],
        "precoReferencia": 361.75,
        "sinonimias": []
    },
    {
        "id": "med-00262",
        "nome": "Palexis® lp",
        "principioAtivo": "Cloridrato de Tapentadol",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "100 MG COM REV LIB PROL CT BL AL PLAS PVC/PVDC OPC X 30",
            "100 MG COM REV LIB PROL CT BL AL PLAS PVC/PVDC OPC X 60",
            "150 MG COM REV LIB PROL CT BL AL PLAS PVC/PVDC OPC X 30",
            "200 MG COM REV LIB PROL CT BL AL PLAS PVC/PVDC OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Palexis",
                "precoBase": 48.75
            }
        ],
        "precoReferencia": 111.11,
        "sinonimias": []
    },
    {
        "id": "med-00263",
        "nome": "Zior",
        "principioAtivo": "Cloridrato de Terbinafina",
        "descricao": "Agentes sistêmicos para infecções fúngicas",
        "apresentacoes": [
            "250 MG COM CT BL AL PLAS  TRANS X 14",
            "250 MG COM CT BL AL PLAS  TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Terbinafina",
                "precoBase": 29.35
            },
            {
                "nome": "Lakesiapes",
                "precoBase": 39.98
            },
            {
                "nome": "Funtyl",
                "precoBase": 40.59
            }
        ],
        "precoReferencia": 167.41,
        "sinonimias": []
    },
    {
        "id": "med-00264",
        "nome": "Tetramed",
        "principioAtivo": "Cloridrato de Tetraciclina",
        "descricao": "Tetraciclinas e associações",
        "apresentacoes": [
            "500 MG CAP CX BL AL PLAS INC X 100 "
        ],
        "genericos": [
            {
                "nome": "Cinatrex",
                "precoBase": 18.29
            },
            {
                "nome": "Cloridrato de Tetraciclina",
                "precoBase": 21.56
            }
        ],
        "precoReferencia": 165.16,
        "sinonimias": []
    },
    {
        "id": "med-00265",
        "nome": "Hipovit b",
        "principioAtivo": "Cloridrato de Tiamina",
        "descricao": "Vitamina b1 pura",
        "apresentacoes": [
            "100 MG/ML SOL INJ IM/IV CX 100 AMP VD AMB X 1 ML",
            "100 MG/ML SOL INJ IM/IV CX 50 AMP VD AMB X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Naévia",
                "precoBase": 9.34
            },
            {
                "nome": "Neurivit",
                "precoBase": 30.93
            },
            {
                "nome": "Vitamina b1 Neo Química",
                "precoBase": 31.36
            },
            {
                "nome": "Vitaum",
                "precoBase": 35.16
            },
            {
                "nome": "Nervamin",
                "precoBase": 35.48
            },
            {
                "nome": "Beneum",
                "precoBase": 35.58
            }
        ],
        "precoReferencia": 965.01,
        "sinonimias": []
    },
    {
        "id": "med-00266",
        "nome": "Plaketar",
        "principioAtivo": "Cloridrato de Ticlopidina",
        "descricao": "Inibidores da agragação plaquetária, antagonistas dos receptores da adenosina difosfato",
        "apresentacoes": [
            "250 MG COM REV  CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Ticlopidina",
                "precoBase": 108.98
            }
        ],
        "precoReferencia": 111.98,
        "sinonimias": []
    },
    {
        "id": "med-00267",
        "nome": "Melleril",
        "principioAtivo": "Cloridrato de Tioridazina",
        "descricao": "Antipsicóticos convencionais",
        "apresentacoes": [
            "10 MG COM REV CT BL AL PLAS TRANS X 20",
            "100 MG COM REV CT BL AL PLAS TRANS X 20",
            "200 MG COM LIB PROL CT FR VD AMB X 20",
            "25 MG COM REV CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Unitidazin",
                "precoBase": 26.95
            }
        ],
        "precoReferencia": 15.84,
        "sinonimias": []
    },
    {
        "id": "med-00268",
        "nome": "Sirdalud",
        "principioAtivo": "Cloridrato de Tizanidina",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "2 MG COM CT BL AL PLAS TRANS X 30  "
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Tizanidina",
                "precoBase": 42.93
            }
        ],
        "precoReferencia": 71.03,
        "sinonimias": []
    },
    {
        "id": "med-00269",
        "nome": "Topotacx",
        "principioAtivo": "Cloridrato de Topotecana",
        "descricao": "Agentes antineoplásicos camptotecinas",
        "apresentacoes": [
            "4 MG PO LIOF SOL INJ CT FA VD TRANS X 4 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Topotecana",
                "precoBase": 1718.75
            }
        ],
        "precoReferencia": 1954.19,
        "sinonimias": []
    },
    {
        "id": "med-00270",
        "nome": "Tramal Retard",
        "principioAtivo": "Cloridrato de Tramadol",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "100 MG COM REV LIB PROL CT BL AL PLAS OPC X 10",
            "100 MG COM REV LIB PROL CT BL AL PLAS OPC X 20",
            "100 MG COM REV LIB PROL CT BL AL PLAS OPC X 30",
            "50 MG COM REV LIB PROL CT BL AL PLAS  PVC PVDC OPC X 20"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Tramadol",
                "precoBase": 42.45
            },
            {
                "nome": "Cloridrato de Tramadol (port. 344/98, L-a2)",
                "precoBase": 44.0
            },
            {
                "nome": "Tramadon",
                "precoBase": 57.38
            },
            {
                "nome": "Novotram",
                "precoBase": 68.89
            },
            {
                "nome": "Tramal",
                "precoBase": 76.87
            },
            {
                "nome": "Gésico",
                "precoBase": 80.46
            }
        ],
        "precoReferencia": 85.85,
        "sinonimias": []
    },
    {
        "id": "med-00271",
        "nome": "Adorlan",
        "principioAtivo": "Cloridrato de Tramadol;diclofenaco Sódico",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "(25 + 25) MG COM CT BL AL PLAS PVC/PEBD/PVDC TRANS X 10",
            "(25 + 25) MG COM CT BL AL PLAS PVC/PEBD/PVDC TRANS X 20",
            "(50 + 50) MG COM CT BL AL PLAS PVC/PEBD/PVDC TRANS X 20",
            "(50+ 50) MG COM CT BL AL PLAS PVC/PEBD/PVDC TRANS X 10"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Tramadol + Diclofenaco Sódico",
                "precoBase": 40.43
            },
            {
                "nome": "Nusira",
                "precoBase": 66.75
            }
        ],
        "precoReferencia": 66.75,
        "sinonimias": []
    },
    {
        "id": "med-00272",
        "nome": "Inseris xr",
        "principioAtivo": "Cloridrato de Trazodona",
        "descricao": "Antidepressivos todos os outros",
        "apresentacoes": [
            "150 MG COM REV LIB PROL 24 H CT BL AL PLAS PVC/PVDC OPC X 10",
            "300 MG COM REV LIB PROL 24 H CT BL AL PLAS PVC/PVDC OPC X 10",
            "300 MG COM REV LIB PROL 24 H CT BL AL PLAS PVC/PVDC OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Sonic",
                "precoBase": 6.75
            },
            {
                "nome": "Motraz",
                "precoBase": 6.75
            },
            {
                "nome": "Cloridrato de Trazodona",
                "precoBase": 6.81
            },
            {
                "nome": "Azod",
                "precoBase": 10.43
            },
            {
                "nome": "Donaren",
                "precoBase": 11.69
            },
            {
                "nome": "Lumbra",
                "precoBase": 14.68
            }
        ],
        "precoReferencia": 70.35,
        "sinonimias": []
    },
    {
        "id": "med-00273",
        "nome": "Valtrex",
        "principioAtivo": "Cloridrato de Valaciclovir",
        "descricao": "Antivirais para herpes",
        "apresentacoes": [
            "500 MG COM REV CT BL AL PLAS TRANS X 10",
            "500 MG COM REV CT BL AL PLAS TRANS X 42"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Valaciclovir",
                "precoBase": 141.95
            },
            {
                "nome": "Vilaxy",
                "precoBase": 229.64
            },
            {
                "nome": "Vanlure",
                "precoBase": 229.64
            },
            {
                "nome": "Valaski",
                "precoBase": 231.65
            },
            {
                "nome": "Denpryx",
                "precoBase": 242.2
            },
            {
                "nome": "Herpstal",
                "precoBase": 281.95
            }
        ],
        "precoReferencia": 271.54,
        "sinonimias": []
    },
    {
        "id": "med-00274",
        "nome": "Valcyte",
        "principioAtivo": "Cloridrato de Valganciclovir",
        "descricao": "Antivirais para herpes",
        "apresentacoes": [
            "450 MG COM REV CT FR PLAS OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Valganciclovir",
                "precoBase": 13575.63
            }
        ],
        "precoReferencia": 22413.81,
        "sinonimias": []
    },
    {
        "id": "med-00275",
        "nome": "Vancocina cp",
        "principioAtivo": "Cloridrato de Vancomicina",
        "descricao": "Antibióticos glucopeptídeos",
        "apresentacoes": [
            "1 G PO SOL INJ CX 25 FA VD TRANS",
            "500 MG PO SOL INJ CX 25 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Vancoson",
                "precoBase": 57.3
            },
            {
                "nome": "Cloridrato de Vancomicina",
                "precoBase": 4520.79
            }
        ],
        "precoReferencia": 1866.73,
        "sinonimias": []
    },
    {
        "id": "med-00276",
        "nome": "Efexor",
        "principioAtivo": "Cloridrato de Venlafaxina",
        "descricao": "Antidepressivos snri",
        "apresentacoes": [
            "150 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PCTFE TRANS X 30",
            "150 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PCTFE TRANS X 7",
            "150 MG CAP DURA LIB PROL CT BL AL PLAS TRANS X 30",
            "37,5 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PCTFE TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Vensate lp",
                "precoBase": 16.71
            },
            {
                "nome": "Venlaxin xr",
                "precoBase": 18.58
            },
            {
                "nome": "Venlift od",
                "precoBase": 31.85
            },
            {
                "nome": "Cloridrato de Venlafaxina",
                "precoBase": 33.7
            },
            {
                "nome": "Alenthus xr",
                "precoBase": 46.56
            },
            {
                "nome": "Venlafaxina",
                "precoBase": 111.2
            }
        ],
        "precoReferencia": 55.65,
        "sinonimias": []
    },
    {
        "id": "med-00277",
        "nome": "Dilacoron",
        "principioAtivo": "Cloridrato de Verapamil",
        "descricao": "Antagonistas do cálcio puros",
        "apresentacoes": [
            "120 MG COM REV RETARD CT BL AL PLAS PVC/PVDC TRANS X 20",
            "120MG COM REV RETARD CT BL AL PLAS PVC TRANS X 20",
            "80MG COM REV CT BL AL PLAS PVC AMB X 30"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Verapamil",
                "precoBase": 35.0
            }
        ],
        "precoReferencia": 69.9,
        "sinonimias": []
    },
    {
        "id": "med-00278",
        "nome": "Geodon",
        "principioAtivo": "Cloridrato de Ziprasidona Monoidratado",
        "descricao": "Antipsicóticos atípicos",
        "apresentacoes": [
            "40 MG CAP DURA CT BL AL AL X 14",
            "40 MG CAP DURA CT BL AL AL X 30",
            "80 MG CAP DURA CT BL AL AL X 14",
            "80 MG CAP DURA CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Ziprasidona",
                "precoBase": 437.09
            }
        ],
        "precoReferencia": 336.6,
        "sinonimias": []
    },
    {
        "id": "med-00279",
        "nome": "Clordilon",
        "principioAtivo": "Clortalidona",
        "descricao": "Diuréticos tiazidas e análogos puros",
        "apresentacoes": [
            "50 MG COM CT BL AL PLAS TRANS X 28",
            "50 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Clortalidona",
                "precoBase": 17.71
            },
            {
                "nome": "Clorotalidona",
                "precoBase": 21.57
            }
        ],
        "precoReferencia": 22.26,
        "sinonimias": []
    },
    {
        "id": "med-00280",
        "nome": "Revert",
        "principioAtivo": "Clortalidona;atenolol",
        "descricao": "Betabloqueadores associados com antihipertensivos e/ou diuréticos",
        "apresentacoes": [
            "100 MG + 25 MG COM CT BL AL PLAS PVC/PE/PVDC TRANS X 30",
            "50 MG + 12,5 MG COM CT BL AL PLAS PVC/PE/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Angipress cd",
                "precoBase": 26.31
            },
            {
                "nome": "Ablok Plus",
                "precoBase": 26.74
            },
            {
                "nome": "Atenoclor",
                "precoBase": 28.73
            },
            {
                "nome": "Atenolol + Clortalidona",
                "precoBase": 30.79
            },
            {
                "nome": "Diublok",
                "precoBase": 38.72
            },
            {
                "nome": "Atelidona",
                "precoBase": 43.47
            }
        ],
        "precoReferencia": 46.01,
        "sinonimias": []
    },
    {
        "id": "med-00281",
        "nome": "Gino-canesten",
        "principioAtivo": "Clotrimazol",
        "descricao": "Antifúngicos ginecológicos",
        "apresentacoes": [
            "500 MG CAP MOLE VAG CT BL AL PLAS PVC/PVDC/PVC + APLIC"
        ],
        "genericos": [
            {
                "nome": "Clotrimazol",
                "precoBase": 14.09
            },
            {
                "nome": "Fungisten",
                "precoBase": 20.58
            },
            {
                "nome": "Abc",
                "precoBase": 21.34
            },
            {
                "nome": "Dermotrizol",
                "precoBase": 26.31
            },
            {
                "nome": "Dermobene",
                "precoBase": 28.81
            },
            {
                "nome": "Clotrimix",
                "precoBase": 33.7
            }
        ],
        "precoReferencia": 119.99,
        "sinonimias": []
    },
    {
        "id": "med-00282",
        "nome": "Leponex",
        "principioAtivo": "Clozapina",
        "descricao": "Antipsicóticos atípicos",
        "apresentacoes": [
            "100 MG COM CT BL AL PLAS PVC TRANS X 30",
            "100 MG COM CT BL AL PLAS PVC/PE/PVDC TRANS X 30",
            "25 MG COM CT BL AL PLAS PVC TRANS X 20 ",
            "25 MG COM CT BL AL PLAS PVC/PE/PVDC TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Clozapina",
                "precoBase": 14.74
            },
            {
                "nome": "Pinazan",
                "precoBase": 15.23
            },
            {
                "nome": "Okótico",
                "precoBase": 65.32
            }
        ],
        "precoReferencia": 79.2,
        "sinonimias": []
    },
    {
        "id": "med-00283",
        "nome": "Dbriz Uno",
        "principioAtivo": "Colagenase",
        "descricao": "Todos outros produtos para tratamento de feridas",
        "apresentacoes": [
            "0,6 U/G POM DERM CT 01 BG AL X 10 G + ESP PLAS",
            "0,6 U/G POM DERM CT 01 BG AL X 30 G + ESP PLAS"
        ],
        "genericos": [
            {
                "nome": "Kollagenase",
                "precoBase": 25.06
            },
            {
                "nome": "Iruxol Mono",
                "precoBase": 78.72
            }
        ],
        "precoReferencia": 25.09,
        "sinonimias": []
    },
    {
        "id": "med-00284",
        "nome": "Kolpocervix",
        "principioAtivo": "Colagenase;cloranfenicol",
        "descricao": "Todos outros produtos para tratamento de feridas",
        "apresentacoes": [
            "0,6 U/G + 0,01 G/G POM GINEC CT BG AL X 30 G + 6 APLIC"
        ],
        "genericos": [
            {
                "nome": "Kollagenase Com Cloranfenicol",
                "precoBase": 38.85
            },
            {
                "nome": "Dbriz",
                "precoBase": 41.57
            },
            {
                "nome": "Iruxol",
                "precoBase": 57.75
            }
        ],
        "precoReferencia": 80.78,
        "sinonimias": []
    },
    {
        "id": "med-00285",
        "nome": "Colchis",
        "principioAtivo": "Colchicina",
        "descricao": "Antigotosos",
        "apresentacoes": [
            "0,5 MG COM CT BL AL PLAS PVC AMB X 20",
            "0,5 MG COM CT BL AL PLAS PVC AMB X 30",
            "1,0 MG COM CT BL AL PLAS AMB X 30"
        ],
        "genericos": [
            {
                "nome": "Coxym",
                "precoBase": 24.04
            },
            {
                "nome": "Cocichimil",
                "precoBase": 29.26
            },
            {
                "nome": "Colchicina",
                "precoBase": 33.19
            },
            {
                "nome": "Cixin",
                "precoBase": 39.16
            }
        ],
        "precoReferencia": 58.35,
        "sinonimias": []
    },
    {
        "id": "med-00286",
        "nome": "Dprev Gotas",
        "principioAtivo": "Colecalciferol",
        "descricao": "Vitamina d pura",
        "apresentacoes": [
            "150000 UI/ML SOL GOT CT FR VD AMB X 4 ML + CGT"
        ],
        "genericos": [
            {
                "nome": "Sof d",
                "precoBase": 8.64
            },
            {
                "nome": "Vitamina d",
                "precoBase": 12.3
            },
            {
                "nome": "Dprev",
                "precoBase": 12.3
            },
            {
                "nome": "Plex-d3 Vitamin",
                "precoBase": 12.42
            },
            {
                "nome": "Vitamina d Cimed",
                "precoBase": 15.16
            },
            {
                "nome": "Altad Caps Dura",
                "precoBase": 18.11
            }
        ],
        "precoReferencia": 633.12,
        "sinonimias": []
    },
    {
        "id": "med-00287",
        "nome": "Oscal d",
        "principioAtivo": "Colecalciferol;carbonato de Cálcio",
        "descricao": "Produtos a base de cálcio",
        "apresentacoes": [
            "500 MG + 400 UI COM REV CT FR PLAS OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Osteofix",
                "precoBase": 70.41
            }
        ],
        "precoReferencia": 121.48,
        "sinonimias": []
    },
    {
        "id": "med-00288",
        "nome": "Pasalix",
        "principioAtivo": "Crataegus Rhipidophylla Gand.;salix Alba L.;passiflora Incarnata",
        "descricao": "Hipnóticos e sedativos herbáceos",
        "apresentacoes": [
            "100 MG + 30 MG + 100 MG COM REV CT BL AL PLAS PVC/PE/PVDC TRANS X 20",
            "100 MG + 30 MG + 100 MG COM REV CT BL AL PLAS PVC/PE/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Serenus",
                "precoBase": 39.21
            }
        ],
        "precoReferencia": 72.95,
        "sinonimias": []
    },
    {
        "id": "med-00289",
        "nome": "Alcachofra Herbarium",
        "principioAtivo": "Cynara Scolymus l.",
        "descricao": "Coleréticos e colecinéticos",
        "apresentacoes": [
            "300 MG CAP DURA CT BL AL PLAS TRANS X 45"
        ],
        "genericos": [
            {
                "nome": "Alcachofrax",
                "precoBase": 28.3
            },
            {
                "nome": "Alcachofra Multilab",
                "precoBase": 35.95
            },
            {
                "nome": "Alcachofra Aspen Pharma",
                "precoBase": 38.77
            },
            {
                "nome": "Alcachofra Natulab",
                "precoBase": 52.61
            },
            {
                "nome": "Alcachofra Vidora",
                "precoBase": 56.22
            }
        ],
        "precoReferencia": 60.39,
        "sinonimias": []
    },
    {
        "id": "med-00290",
        "nome": "Forxiga",
        "principioAtivo": "Dapagliflozina",
        "descricao": "Antidiabéticos inibidores de sglt2, puros",
        "apresentacoes": [
            "10 MG COM REV CT BL AL AL X 14",
            "10 MG COM REV CT BL AL AL X 30",
            "5 MG COM REV CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Dapagliflozina",
                "precoBase": 34.18
            },
            {
                "nome": "Glif",
                "precoBase": 36.68
            },
            {
                "nome": "Dapliza",
                "precoBase": 36.68
            },
            {
                "nome": "Dapflow",
                "precoBase": 36.68
            },
            {
                "nome": "Dapana",
                "precoBase": 55.69
            },
            {
                "nome": "Edistride",
                "precoBase": 56.42
            }
        ],
        "precoReferencia": 112.82,
        "sinonimias": []
    },
    {
        "id": "med-00291",
        "nome": "Dapagliflozina Propanodiol",
        "principioAtivo": "Dapagliflozina Propanodiol Monoidratado",
        "descricao": "Antidiabéticos inibidores de sglt2, puros",
        "apresentacoes": [
            "10 MG COM REV CT BL AL AL X 30",
            "10 MG COM REV CT FR PLAS PEAD OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Juglint",
                "precoBase": 120.91
            },
            {
                "nome": "Dapagle",
                "precoBase": 120.91
            }
        ],
        "precoReferencia": 146.45,
        "sinonimias": []
    },
    {
        "id": "med-00292",
        "nome": "Sprycel",
        "principioAtivo": "Dasatinibe",
        "descricao": "Inibidores preoteína kinase antineoplásicos, bcr-abl",
        "apresentacoes": [
            "20 MG COM REV CT FR PLAS PEAD OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Dasatinibe",
                "precoBase": 3845.63
            },
            {
                "nome": "Ladizac",
                "precoBase": 12571.34
            }
        ],
        "precoReferencia": 12698.58,
        "sinonimias": []
    },
    {
        "id": "med-00293",
        "nome": "Sprycel",
        "principioAtivo": "Dasatinibe Monoidratado",
        "descricao": "Inibidores preoteína kinase antineoplásicos, bcr-abl",
        "apresentacoes": [
            "100 MG COM REV CT FR PLAS PEAD OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Dasatinibe Monoidratado",
                "precoBase": 7691.08
            },
            {
                "nome": "Dasnar",
                "precoBase": 10799.36
            },
            {
                "nome": "Zevuxa",
                "precoBase": 12698.58
            }
        ],
        "precoReferencia": 25217.82,
        "sinonimias": []
    },
    {
        "id": "med-00294",
        "nome": "Haldol Decanoato",
        "principioAtivo": "Decanoato de Haloperidol",
        "descricao": "Antipsicóticos convencionais",
        "apresentacoes": [
            "50 MG/ML SOL INJ CX 5 AMP VD AMB X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Decan Haloper",
                "precoBase": 100.1
            }
        ],
        "precoReferencia": 200.93,
        "sinonimias": []
    },
    {
        "id": "med-00295",
        "nome": "Exjade",
        "principioAtivo": "Deferasirox",
        "descricao": "Agentes ferro-quelantes",
        "apresentacoes": [
            "125 MG COM SUS CT BL AL AL X 28",
            "125 MG COM SUS CT BL AL PLAS PVC/PE/PVDC TRANS X 28",
            "250 MG COM SUS CT BL AL AL X 28",
            "250 MG COM SUS CT BL AL PLAS PVC/PE/PVDC TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Deferasirox",
                "precoBase": 989.96
            },
            {
                "nome": "Desairon",
                "precoBase": 1634.53
            }
        ],
        "precoReferencia": 1634.46,
        "sinonimias": []
    },
    {
        "id": "med-00296",
        "nome": "Ferriprox",
        "principioAtivo": "Deferiprona",
        "descricao": "Agentes ferro-quelantes",
        "apresentacoes": [
            "500 MG COM REV CT FR PLAS OPC X 100"
        ],
        "genericos": [
            {
                "nome": "Ferriprox bd",
                "precoBase": 2590.76
            }
        ],
        "precoReferencia": 2590.76,
        "sinonimias": []
    },
    {
        "id": "med-00297",
        "nome": "Calcort",
        "principioAtivo": "Deflazacorte",
        "descricao": "Corticosteróides orais puros",
        "apresentacoes": [
            "30 MG COM CT BL AL PLAS TRANS X 10",
            "6 MG COM CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Deflaimmun",
                "precoBase": 57.53
            },
            {
                "nome": "Deflazacorte",
                "precoBase": 62.25
            }
        ],
        "precoReferencia": 105.65,
        "sinonimias": []
    },
    {
        "id": "med-00298",
        "nome": "Pediderm",
        "principioAtivo": "Deltametrina",
        "descricao": "Ectoparasiticidas incluindo escabicidas",
        "apresentacoes": [
            "0,2 MG/ML LOC CT FR PLAS OPC X 100 ML",
            "0,2 MG/ML SHAMPOO CT FR PLAS X 100 ML"
        ],
        "genericos": [
            {
                "nome": "Delta - Ifal",
                "precoBase": 13.58
            },
            {
                "nome": "Deltalab",
                "precoBase": 23.95
            },
            {
                "nome": "Deltapil",
                "precoBase": 25.77
            }
        ],
        "precoReferencia": 28.29,
        "sinonimias": []
    },
    {
        "id": "med-00299",
        "nome": "Desalex",
        "principioAtivo": "Desloratadina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "0,5 MG/ML XPE CT FR VD AMB X 100 ML + SER DOS",
            "0,5 MG/ML XPE CT FR VD AMB X 60 ML + SER DOS",
            "5 MG COM REV CT BL AL PLAS TRANS X 10",
            "5 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Deconlerg",
                "precoBase": 23.07
            },
            {
                "nome": "Esalerg Gotas",
                "precoBase": 26.24
            },
            {
                "nome": "Superhist Odt",
                "precoBase": 26.95
            },
            {
                "nome": "Lur Gotas",
                "precoBase": 28.01
            },
            {
                "nome": "Desloratadina",
                "precoBase": 32.32
            },
            {
                "nome": "Ikaros",
                "precoBase": 41.32
            }
        ],
        "precoReferencia": 70.16,
        "sinonimias": []
    },
    {
        "id": "med-00300",
        "nome": "Desalex D12",
        "principioAtivo": "Desloratadina;sulfato de Pseudoefedrina",
        "descricao": "Preparações sistêmicas nasais",
        "apresentacoes": [
            "2,5 MG + 120 MG COM LIB MOD CT BL AL AL X 10"
        ],
        "genericos": [
            {
                "nome": "Lur D12",
                "precoBase": 66.46
            },
            {
                "nome": "Esalerg D12",
                "precoBase": 66.46
            }
        ],
        "precoReferencia": 66.46,
        "sinonimias": []
    },
    {
        "id": "med-00301",
        "nome": "Cerazette",
        "principioAtivo": "Desogestrel",
        "descricao": "Preparações orais com progestagênios somente",
        "apresentacoes": [
            "0,075 MG COM REV CT BL AL PLAS TRANS X 28",
            "0,075 MG COM REV CT BL AL PLAS TRANS X 84"
        ],
        "genericos": [
            {
                "nome": "Desogestrel",
                "precoBase": 24.01
            },
            {
                "nome": "Melik",
                "precoBase": 45.8
            },
            {
                "nome": "Mamades",
                "precoBase": 47.47
            },
            {
                "nome": "Careli",
                "precoBase": 49.57
            },
            {
                "nome": "Onua",
                "precoBase": 49.79
            },
            {
                "nome": "Rubia",
                "precoBase": 50.72
            }
        ],
        "precoReferencia": 63.92,
        "sinonimias": []
    },
    {
        "id": "med-00302",
        "nome": "Adinos",
        "principioAtivo": "Desonida",
        "descricao": "Corticoesteróides tópicos puros",
        "apresentacoes": [
            "0,5MG/G GEL CREM CT BG AL X 15 G",
            "0,5MG/G GEL CREM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Desonida",
                "precoBase": 19.83
            },
            {
                "nome": "Desoskin",
                "precoBase": 43.32
            }
        ],
        "precoReferencia": 23.05,
        "sinonimias": []
    },
    {
        "id": "med-00303",
        "nome": "Ozurdex",
        "principioAtivo": "Dexametasona",
        "descricao": "Produtos antineovascularização ocular",
        "apresentacoes": [
            "0,7 MG IMPL IVIT BL APLIC CT"
        ],
        "genericos": [
            {
                "nome": "Maxidex",
                "precoBase": 11.99
            },
            {
                "nome": "Decadron",
                "precoBase": 12.86
            },
            {
                "nome": "Dexametasona + Sulfato de Neomicina + Sulfato de Polimixina b",
                "precoBase": 15.37
            },
            {
                "nome": "Dexametasona",
                "precoBase": 16.29
            },
            {
                "nome": "Dexason",
                "precoBase": 18.47
            },
            {
                "nome": "Cortidex",
                "precoBase": 22.52
            }
        ],
        "precoReferencia": 5887.2,
        "sinonimias": []
    },
    {
        "id": "med-00304",
        "nome": "Maxiflox d",
        "principioAtivo": "Dexametasona;cloridrato de Ciprofloxacino",
        "descricao": "Associações oftalmológicas corticosteróides com antiinfecciosos",
        "apresentacoes": [
            "(3,5 + 1) MG/G POM OFT CT BG AL X 3,5 G",
            "(3,5 + 1,0) MG/ML SUS OFT CT FR GOT PLAS OPC X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Ciprofloxacino Monoidratado + Dexametasona",
                "precoBase": 33.65
            }
        ],
        "precoReferencia": 50.04,
        "sinonimias": []
    },
    {
        "id": "med-00305",
        "nome": "Cilodex",
        "principioAtivo": "Dexametasona;cloridrato de Ciprofloxacino Monoidratado",
        "descricao": "Associações oftalmológicas corticosteróides com antiinfecciosos",
        "apresentacoes": [
            "(3 + 1) MG/ML SUS OFT CT FR GOT PLAS OPC X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Ciprofloxacino + Dexametasona",
                "precoBase": 33.16
            },
            {
                "nome": "Biancort",
                "precoBase": 36.11
            },
            {
                "nome": "Bialudex",
                "precoBase": 36.11
            },
            {
                "nome": "Cylocort",
                "precoBase": 41.49
            },
            {
                "nome": "Ciprixin Dexa",
                "precoBase": 42.4
            },
            {
                "nome": "Duodex",
                "precoBase": 42.4
            }
        ],
        "precoReferencia": 52.43,
        "sinonimias": []
    },
    {
        "id": "med-00306",
        "nome": "Maxitrol",
        "principioAtivo": "Dexametasona;sulfato de Neomicina;sulfato de Polimixina b",
        "descricao": "Associações oftalmológicas corticosteróides com antiinfecciosos",
        "apresentacoes": [
            "(1 MG + 5 MG + 6.000 UI)/G POM OFT CT BG AL X 3,5 G",
            "(1 MG + 5 MG + 6.000 UI)/ML SUS OFT CT FR GOT PLAS PE TRANS X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Maxinom",
                "precoBase": 22.8
            },
            {
                "nome": "Maxiview",
                "precoBase": 24.25
            }
        ],
        "precoReferencia": 25.47,
        "sinonimias": []
    },
    {
        "id": "med-00307",
        "nome": "Tobradex",
        "principioAtivo": "Dexametasona;tobramicina",
        "descricao": "Associações oftalmológicas corticosteróides com antiinfecciosos",
        "apresentacoes": [
            "3,0 MG/G + 1,0 MG/G POM OFT CT BG AL X 3,5 G",
            "3,0 MG/ML + 1,0 MG/ML SUS OFT CT FR GOT PLAS TRANS X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Tobracort",
                "precoBase": 42.37
            }
        ],
        "precoReferencia": 50.88,
        "sinonimias": []
    },
    {
        "id": "med-00308",
        "nome": "Frosiv",
        "principioAtivo": "Dexlansoprazol Sesqui-hidratado",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "30 MG CAP DURA LIB RETARD CT BL AL AL DESSEC X 30",
            "60 MG CAP DURA LIB RETARD CT BL AL AL DESSEC X 30"
        ],
        "genericos": [
            {
                "nome": "Dexlansoprazol",
                "precoBase": 78.18
            }
        ],
        "precoReferencia": 129.76,
        "sinonimias": []
    },
    {
        "id": "med-00309",
        "nome": "Epitegel",
        "principioAtivo": "Dexpantenol",
        "descricao": "Tônicos e vitaminas oftalmológicas",
        "apresentacoes": [
            "50 MG/G GEL OFT CT  BG PLAS PE AL OPC 10 G "
        ],
        "genericos": [
            {
                "nome": "Depantex",
                "precoBase": 23.45
            },
            {
                "nome": "Neopantol",
                "precoBase": 24.41
            },
            {
                "nome": "Teupantol",
                "precoBase": 25.11
            },
            {
                "nome": "Vit Pantenol",
                "precoBase": 25.18
            },
            {
                "nome": "Dexprotenol",
                "precoBase": 26.33
            },
            {
                "nome": "Cicatenol",
                "precoBase": 26.39
            }
        ],
        "precoReferencia": 59.48,
        "sinonimias": []
    },
    {
        "id": "med-00310",
        "nome": "Lacrima Plus",
        "principioAtivo": "Dextrana;hipromelose",
        "descricao": "Lágrimas artificiais e lubrificantes oftamológicos",
        "apresentacoes": [
            "1,0 MG/ML + 3,0 MG/ML SOL OFT CT FR GOT PLAS TRANS X 15 ML"
        ],
        "genericos": [
            {
                "nome": "Lacribell",
                "precoBase": 26.52
            }
        ],
        "precoReferencia": 34.35,
        "sinonimias": []
    },
    {
        "id": "med-00311",
        "nome": "Valium",
        "principioAtivo": "Diazepam",
        "descricao": "Tranquilizantes",
        "apresentacoes": [
            "10 MG COM CT BL AL PLAS TRANS X 30",
            "5 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Diazepam nq",
                "precoBase": 9.63
            },
            {
                "nome": "Diazepam",
                "precoBase": 10.34
            },
            {
                "nome": "Relapax",
                "precoBase": 10.9
            },
            {
                "nome": "Santiazepam",
                "precoBase": 13.19
            }
        ],
        "precoReferencia": 27.24,
        "sinonimias": []
    },
    {
        "id": "med-00312",
        "nome": "Bexai",
        "principioAtivo": "Diclofenaco",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "35 MG CAP DURA CT BL AL AL  X 10",
            "35 MG CAP DURA CT BL AL AL  X 20",
            "35 MG CAP DURA CT BL AL AL X 30",
            "35 MG CAP DURA CT BL AL AL X 4"
        ],
        "genericos": [
            {
                "nome": "Diclofenaco Sódico",
                "precoBase": 12.27
            },
            {
                "nome": "Diclofenaco Resinato",
                "precoBase": 20.54
            },
            {
                "nome": "Fenaflan",
                "precoBase": 23.13
            },
            {
                "nome": "Dorflan",
                "precoBase": 44.93
            }
        ],
        "precoReferencia": 35.63,
        "sinonimias": []
    },
    {
        "id": "med-00313",
        "nome": "Flotac",
        "principioAtivo": "Diclofenaco Colestiramina",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "140 MG CAP  DURA CT BL AL PLAS TRANS X 10",
            "140 MG CAP DURA CT BL AL PLAS TRANS X 14",
            "140 MG CAP DURA CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Diclofenaco Colestiramina",
                "precoBase": 23.63
            },
            {
                "nome": "Dryltac",
                "precoBase": 27.36
            }
        ],
        "precoReferencia": 39.23,
        "sinonimias": []
    },
    {
        "id": "med-00314",
        "nome": "Cataflampro",
        "principioAtivo": "Diclofenaco Dietilamônio",
        "descricao": "Antirreumáticos e analgésicos tópicos",
        "apresentacoes": [
            "11,6 MG/G GEL CT TB AL LAMIN X 150 G   ",
            "11,6 MG/G GEL CT TB AL LAMIN X 30 G  ",
            "11,6 MG/G GEL CT TB AL LAMIN X 60 G  ",
            "11,6 MG/G SOL DERM AER TB AL X 85 ML "
        ],
        "genericos": [
            {
                "nome": "Diflecbe",
                "precoBase": 11.8
            },
            {
                "nome": "Diclofenaco Dietilamônio",
                "precoBase": 14.69
            },
            {
                "nome": "Fenaflan",
                "precoBase": 16.08
            },
            {
                "nome": "Neocoflan",
                "precoBase": 18.16
            },
            {
                "nome": "Cataflexym",
                "precoBase": 19.36
            },
            {
                "nome": "Diclofenaco de Dietilamômio",
                "precoBase": 19.42
            }
        ],
        "precoReferencia": 32.48,
        "sinonimias": []
    },
    {
        "id": "med-00315",
        "nome": "Cataflam",
        "principioAtivo": "Diclofenaco Potássico",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "50 MG COM REV CT BL AL PLAS TRANS X 10",
            "50 MG COM REV CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Probenxil",
                "precoBase": 11.95
            },
            {
                "nome": "Diclofenaco Potássico",
                "precoBase": 13.22
            },
            {
                "nome": "Clofen k",
                "precoBase": 13.3
            },
            {
                "nome": "Diclofenaco",
                "precoBase": 14.79
            },
            {
                "nome": "Poltax",
                "precoBase": 25.32
            }
        ],
        "precoReferencia": 29.35,
        "sinonimias": []
    },
    {
        "id": "med-00316",
        "nome": "Voltaren",
        "principioAtivo": "Diclofenaco Sódico",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "100 MG COM REV LIB PROL  CT BL AL PLAS PVC/PE/PVDC TRANS X 10",
            "25 MG/ML SOL INJ IM CT 5 AMP VD TRANS X 3 ML",
            "50 MG COM REV LIB RETARD CT BL AL AL X 20",
            "75 MG COM REV LIB PROL CT BL AL PLAS TRANS PVC/PE/PVDC X 20"
        ],
        "genericos": [
            {
                "nome": "Belfaren",
                "precoBase": 12.57
            },
            {
                "nome": "Sodix",
                "precoBase": 16.29
            },
            {
                "nome": "Diclofenaco Sódico",
                "precoBase": 18.06
            },
            {
                "nome": "Dnaren",
                "precoBase": 19.66
            },
            {
                "nome": "Neotaren",
                "precoBase": 21.5
            },
            {
                "nome": "Diclofenaco Sodico",
                "precoBase": 22.82
            }
        ],
        "precoReferencia": 29.55,
        "sinonimias": []
    },
    {
        "id": "med-00317",
        "nome": "Fenaflan d",
        "principioAtivo": "Diclofenaco de Potássio",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "50 MG COM SUS CT BL AL PLAS PVC/PVDC TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Benevran",
                "precoBase": 10.64
            },
            {
                "nome": "Diclofenaco Potássico",
                "precoBase": 15.96
            },
            {
                "nome": "Diclofenaco Resinato",
                "precoBase": 18.94
            },
            {
                "nome": "Biofenac",
                "precoBase": 22.51
            }
        ],
        "precoReferencia": 23.13,
        "sinonimias": []
    },
    {
        "id": "med-00318",
        "nome": "Betadine xr",
        "principioAtivo": "Dicloridrato de Betaistina",
        "descricao": "Antivertiginosos",
        "apresentacoes": [
            "32 MG COM LIB PROL CT BL AL AL X 30",
            "32 MG COM LIB PROL CT BL AL AL X 60",
            "48 MG COM LIB PROL CT BL AL AL X 30",
            "48 MG COM LIB PROL CT BL AL AL X 60"
        ],
        "genericos": [
            {
                "nome": "Dicloridrato de Betaistina",
                "precoBase": 10.06
            },
            {
                "nome": "Labirin xr",
                "precoBase": 28.33
            },
            {
                "nome": "Vitalia",
                "precoBase": 43.53
            },
            {
                "nome": "Vitalia xr",
                "precoBase": 84.98
            }
        ],
        "precoReferencia": 84.98,
        "sinonimias": []
    },
    {
        "id": "med-00319",
        "nome": "Zyrtec",
        "principioAtivo": "Dicloridrato de Cetirizina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "10 MG COM REV CT BL AL PLAS INC X 12"
        ],
        "genericos": [
            {
                "nome": "Reactine",
                "precoBase": 49.9
            }
        ],
        "precoReferencia": 93.46,
        "sinonimias": []
    },
    {
        "id": "med-00320",
        "nome": "Flunarin",
        "principioAtivo": "Dicloridrato de Flunarizina",
        "descricao": "Antagonistas do cálcio com ação cerebral",
        "apresentacoes": [
            "10MG CAP DURA LIB PROL  CT BL AL PLAS TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Vertix",
                "precoBase": 14.32
            },
            {
                "nome": "Dicloridrato de Flunarizina",
                "precoBase": 14.93
            },
            {
                "nome": "Vertizan",
                "precoBase": 16.29
            },
            {
                "nome": "Vertigium",
                "precoBase": 16.84
            }
        ],
        "precoReferencia": 37.44,
        "sinonimias": []
    },
    {
        "id": "med-00321",
        "nome": "Hixilerg",
        "principioAtivo": "Dicloridrato de Hidroxizina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "2 MG/ML SOL OR CT FR PLAS PET AMB X 120 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Dicloridrato de Hidroxizina",
                "precoBase": 16.43
            },
            {
                "nome": "Hoxidrin",
                "precoBase": 33.11
            },
            {
                "nome": "Cloridrato de Hidroxizina",
                "precoBase": 33.2
            },
            {
                "nome": "Hixizine",
                "precoBase": 65.56
            },
            {
                "nome": "Hidroalerg",
                "precoBase": 66.7
            },
            {
                "nome": "Pruri-gran",
                "precoBase": 66.7
            }
        ],
        "precoReferencia": 66.7,
        "sinonimias": []
    },
    {
        "id": "med-00322",
        "nome": "Zyxem",
        "principioAtivo": "Dicloridrato de Levocetirizina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "5 MG/ML SOL OR CT FR VD AMB + CTG X 20 ML",
            "5,0 MG COM REV CT BL AL AL X 10 "
        ],
        "genericos": [
            {
                "nome": "Dicloridrato de Levocetirizina",
                "precoBase": 43.75
            },
            {
                "nome": "Zalerv",
                "precoBase": 44.24
            },
            {
                "nome": "Vocety",
                "precoBase": 58.49
            },
            {
                "nome": "Rizi",
                "precoBase": 59.49
            },
            {
                "nome": "Zina Odt",
                "precoBase": 60.77
            },
            {
                "nome": "Zina",
                "precoBase": 94.92
            }
        ],
        "precoReferencia": 82.74,
        "sinonimias": []
    },
    {
        "id": "med-00323",
        "nome": "Manivasc",
        "principioAtivo": "Dicloridrato de Manidipino",
        "descricao": "Antagonistas do cálcio puros",
        "apresentacoes": [
            "10 MG COM CT BL AL PLAS PVC/PVDC OPC X 14",
            "10 MG COM CT BL AL PLAS PVC/PVDC OPC X 28",
            "20 MG COM BL AL PLAS PVC/PVDC OPC X 14",
            "20 MG COM CT BL AL PLAS PVC/PVDC OPC X 28"
        ],
        "genericos": [
            {
                "nome": "Dicloridrato de Manidipino",
                "precoBase": 132.68
            }
        ],
        "precoReferencia": 111.94,
        "sinonimias": []
    },
    {
        "id": "med-00324",
        "nome": "Meclin",
        "principioAtivo": "Dicloridrato de Meclozina Monoidratado",
        "descricao": "Outros antieméticos e antinauseantes",
        "apresentacoes": [
            "25 MG COM CT BL AL PLAS PVC/PVDC TRANS X 15",
            "50 MG COM CT BL AL PLAS PVC/PVDC TRANS X 15"
        ],
        "genericos": [
            {
                "nome": "Meclin Jet",
                "precoBase": 7.97
            },
            {
                "nome": "Naucloz",
                "precoBase": 20.5
            }
        ],
        "precoReferencia": 29.97,
        "sinonimias": []
    },
    {
        "id": "med-00325",
        "nome": "Rocky",
        "principioAtivo": "Dicloridrato de Pramipexol",
        "descricao": "Antiparkinsonianos",
        "apresentacoes": [
            "0,25 MG COM CT BL AL AL X 30",
            "1,0 MG COM CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Stabil",
                "precoBase": 16.03
            },
            {
                "nome": "Quera lp",
                "precoBase": 30.41
            },
            {
                "nome": "Dicloridrato de Pramipexol",
                "precoBase": 42.94
            },
            {
                "nome": "Minérgi",
                "precoBase": 60.93
            },
            {
                "nome": "Pisa",
                "precoBase": 62.28
            },
            {
                "nome": "Sifrol",
                "precoBase": 70.9
            }
        ],
        "precoReferencia": 99.37,
        "sinonimias": []
    },
    {
        "id": "med-00326",
        "nome": "Dicloridrato de Pramipexol",
        "principioAtivo": "Dicloridrato de Pramipexol Monoidratado",
        "descricao": "Antiparkinsonianos",
        "apresentacoes": [
            "0,125 MG COM CT BL AL AL X 30",
            "0,250 MG COM CT BL AL AL X 30",
            "0,375MG COM LIB PROL CT BL AL AL X 30",
            "1 MG COM CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Quera",
                "precoBase": 19.48
            },
            {
                "nome": "Minérgi",
                "precoBase": 30.48
            },
            {
                "nome": "Stabil xr",
                "precoBase": 38.99
            }
        ],
        "precoReferencia": 41.1,
        "sinonimias": []
    },
    {
        "id": "med-00327",
        "nome": "Vastarel Caps lp",
        "principioAtivo": "Dicloridrato de Trimetazidina",
        "descricao": "Terapia coronaria excluindo antagonistas do cálcio e nitritos",
        "apresentacoes": [
            "80 MG CAP DURA LIB PROL CT BL AL AL X 18",
            "80 MG CAP DURA LIB PROL CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Dicloridrato de Trimetazidina",
                "precoBase": 16.79
            },
            {
                "nome": "Vascor mr",
                "precoBase": 26.85
            },
            {
                "nome": "Neovangy mr",
                "precoBase": 27.11
            },
            {
                "nome": "Muskard",
                "precoBase": 27.6
            },
            {
                "nome": "Quicard",
                "precoBase": 27.75
            },
            {
                "nome": "Herzaten",
                "precoBase": 27.75
            }
        ],
        "precoReferencia": 133.69,
        "sinonimias": []
    },
    {
        "id": "med-00328",
        "nome": "Allurene",
        "principioAtivo": "Dienogeste",
        "descricao": "Progestógenos excluindo g3a, g3f",
        "apresentacoes": [
            "2 MG COM CT ENVOL BL AL PLAS PVC TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Alurax",
                "precoBase": 77.83
            },
            {
                "nome": "Dienogeste",
                "precoBase": 78.58
            },
            {
                "nome": "Meluren",
                "precoBase": 123.62
            },
            {
                "nome": "Diost",
                "precoBase": 128.75
            },
            {
                "nome": "Alandre",
                "precoBase": 215.98
            },
            {
                "nome": "Ludili ed",
                "precoBase": 223.96
            }
        ],
        "precoReferencia": 248.72,
        "sinonimias": []
    },
    {
        "id": "med-00329",
        "nome": "Dramin",
        "principioAtivo": "Dimenidrinato",
        "descricao": "Outros antieméticos e antinauseantes",
        "apresentacoes": [
            "25MG CAP MOLE CT BL AL PLAS PVC/PVDC TRANS X 10",
            "25MG CAP MOLE CT BL AL PLAS PVC/PVDC TRANS X 4 ",
            "50 MG CAP MOLE CT BL AL PLAS PVC/PVDC TRANS X 200 (EMB FRAC)",
            "50MG CAP MOLE CT BL AL PLAS PVC/PVDC TRANS X 10"
        ],
        "genericos": [
            {
                "nome": "Nausicalm Cápsula Mole",
                "precoBase": 37.16
            }
        ],
        "precoReferencia": 14.9,
        "sinonimias": []
    },
    {
        "id": "med-00330",
        "nome": "Dramin b6",
        "principioAtivo": "Dimenidrinato;cloridrato de Piridoxina",
        "descricao": "Outros antieméticos e antinauseantes",
        "apresentacoes": [
            "(25 + 5) MG/ML SOL GOT OR CT FR GOT PLAS PET AMB X 30 ML",
            "(50 + 10) MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Dimenidrinato + Cloridrato de Piridoxina",
                "precoBase": 9.93
            },
            {
                "nome": "Dimenidrin",
                "precoBase": 15.49
            },
            {
                "nome": "Nausilon b6",
                "precoBase": 15.63
            },
            {
                "nome": "Nausicalm b6",
                "precoBase": 16.41
            },
            {
                "nome": "Dramavit b6",
                "precoBase": 18.85
            }
        ],
        "precoReferencia": 24.62,
        "sinonimias": []
    },
    {
        "id": "med-00331",
        "nome": "Lyberdia Gotas",
        "principioAtivo": "Dimesilato de Lisdexanfetamina",
        "descricao": "Psicoestimulantes",
        "apresentacoes": [
            "40 MG/ML SOL GOT OR CT FR GOT PLAS PEAD/PEBD OPC X 50 ML"
        ],
        "genericos": [
            {
                "nome": "Lyx",
                "precoBase": 275.59
            },
            {
                "nome": "Dimesilato de Lisdexanfetamina",
                "precoBase": 296.44
            },
            {
                "nome": "Lisdev",
                "precoBase": 321.71
            },
            {
                "nome": "Lind",
                "precoBase": 321.71
            },
            {
                "nome": "Deksa",
                "precoBase": 332.31
            },
            {
                "nome": "Lidexor",
                "precoBase": 344.68
            }
        ],
        "precoReferencia": 586.06,
        "sinonimias": []
    },
    {
        "id": "med-00332",
        "nome": "Cafilisador",
        "principioAtivo": "Dipirona",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "500 MG + 65 MG COM CT BL AL PLAS AMB X 100",
            "500 MG + 65 MG COM CT BL AL PLAS AMB X 16"
        ],
        "genericos": [
            {
                "nome": "Dipirona Sódica",
                "precoBase": 3.77
            },
            {
                "nome": "Dipirona Sodica",
                "precoBase": 5.7
            },
            {
                "nome": "Duzor",
                "precoBase": 6.99
            },
            {
                "nome": "Aberalgina",
                "precoBase": 7.83
            },
            {
                "nome": "Dipirona Monoidratada",
                "precoBase": 8.69
            },
            {
                "nome": "Dipimed",
                "precoBase": 9.4
            }
        ],
        "precoReferencia": 52.01,
        "sinonimias": []
    },
    {
        "id": "med-00333",
        "nome": "Novalgina",
        "principioAtivo": "Dipirona Monoidratada",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "1 G COM  CT BL AL PLAS TRANS X 10",
            "1 G COM  CT BL AL PLAS TRANS X 100  ",
            "1 G COM CT BL AL PLAS TRANSL X 10",
            "1 G COM CT BL AL PLAS TRANSL X 100"
        ],
        "genericos": [
            {
                "nome": "Dipirona",
                "precoBase": 5.49
            },
            {
                "nome": "Dipirona Sódica",
                "precoBase": 8.38
            },
            {
                "nome": "Dipirona Monoidratada",
                "precoBase": 9.14
            },
            {
                "nome": "Lisador Dip",
                "precoBase": 9.19
            },
            {
                "nome": "Dipimed",
                "precoBase": 15.71
            },
            {
                "nome": "Aspdip",
                "precoBase": 16.9
            }
        ],
        "precoReferencia": 16.45,
        "sinonimias": []
    },
    {
        "id": "med-00334",
        "nome": "Buscopan Composto",
        "principioAtivo": "Dipirona Monoidratada;butilbrometo de Escopolamina",
        "descricao": "Associações de antiespasmódicos com analgésicos",
        "apresentacoes": [
            "(10,0 + 250,0) MG  COM REV CT BL AL PLAS PVC TRANS X 120",
            "(10,0 + 250,0) MG COM REV CT BL AL PLAS PVC TRANS X 20",
            "(4,0 + 500,0) MG/ML SOL INJ IV/IM CT 3 AMP VD AMB X 5 ML",
            "6,67 MG/ML + 333,4 MG/ML SOL OR  FR GOT  PLAS  AMB X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Lisador Cólica",
                "precoBase": 4.17
            },
            {
                "nome": "Buscoveran Composto",
                "precoBase": 15.9
            },
            {
                "nome": "Espasmopan Composto",
                "precoBase": 16.38
            },
            {
                "nome": "Neocopan Composto",
                "precoBase": 16.85
            },
            {
                "nome": "Mirador Cólica",
                "precoBase": 17.76
            },
            {
                "nome": "Dipbe Col",
                "precoBase": 17.87
            }
        ],
        "precoReferencia": 29.49,
        "sinonimias": []
    },
    {
        "id": "med-00335",
        "nome": "Doriless",
        "principioAtivo": "Dipirona Monoidratada;cloridrato de Prometazina;cloridrato de Adifenina",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "(333,33 + 6,67 + 3,33) MG/ML SOL OR CT FR GOT VD AMB X 15 ML"
        ],
        "genericos": [
            {
                "nome": "Dorilen",
                "precoBase": 34.38
            }
        ],
        "precoReferencia": 40.12,
        "sinonimias": []
    },
    {
        "id": "med-00336",
        "nome": "Neosaldina",
        "principioAtivo": "Dipirona Monoidratada;mucato de Isometepteno;cafeína",
        "descricao": "Associações de antiespasmódicos com analgésicos",
        "apresentacoes": [
            "(600 + 60 + 60) MG COM REV CT BL AL PLAS PVC/PCTFE TRANS X 100"
        ],
        "genericos": [
            {
                "nome": "Ressalivdor",
                "precoBase": 13.44
            },
            {
                "nome": "Sedamed",
                "precoBase": 29.49
            },
            {
                "nome": "Nevralgex dc",
                "precoBase": 29.49
            },
            {
                "nome": "Dipbe dc",
                "precoBase": 34.64
            }
        ],
        "precoReferencia": 401.92,
        "sinonimias": []
    },
    {
        "id": "med-00337",
        "nome": "Binospan Composto",
        "principioAtivo": "Dipirona;butilbrometo de Escopolamina",
        "descricao": "Associações de antiespasmódicos com analgésicos",
        "apresentacoes": [
            "250 MG + 10 MG COM REV CT FR VD AMB X 20"
        ],
        "genericos": [
            {
                "nome": "Belspan",
                "precoBase": 18.95
            },
            {
                "nome": "Dorspan",
                "precoBase": 30.85
            }
        ],
        "precoReferencia": 33.36,
        "sinonimias": []
    },
    {
        "id": "med-00338",
        "nome": "Dipirona + Cafeína",
        "principioAtivo": "Dipirona;cafeína Anidra",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "500 MG + 65 MG COM CT BL AL PLAS AMB X 100"
        ],
        "genericos": [
            {
                "nome": "Dorona Cafi",
                "precoBase": 19.33
            }
        ],
        "precoReferencia": 171.8,
        "sinonimias": []
    },
    {
        "id": "med-00339",
        "nome": "Nevralgex",
        "principioAtivo": "Dipirona;citrato de Orfenadrina;cafeína Anidra",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "300 MG + 50 MG + 35 MG COM CT BL AL PLAS PVC TRANS X 100",
            "300 MG + 50 MG + 35 MG COM CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Dortrirelax",
                "precoBase": 8.79
            },
            {
                "nome": "Ana - Flex",
                "precoBase": 19.4
            },
            {
                "nome": "Doricin",
                "precoBase": 21.38
            }
        ],
        "precoReferencia": 26.6,
        "sinonimias": []
    },
    {
        "id": "med-00340",
        "nome": "Lisador",
        "principioAtivo": "Dipirona;cloridrato de Prometazina;cloridrato de Adifenina",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "500 MG + 5 MG + 10 MG COM CT BL AL PLAS AMB X 16",
            "500 MG + 5 MG + 10 MG COM CT BL AL PLAS AMB X 200",
            "500 MG + 5 MG + 10 MG COM CT BL AL PLAS AMB X 24"
        ],
        "genericos": [
            {
                "nome": "Doriless",
                "precoBase": 20.23
            },
            {
                "nome": "Dorilen",
                "precoBase": 44.34
            }
        ],
        "precoReferencia": 49.98,
        "sinonimias": []
    },
    {
        "id": "med-00341",
        "nome": "Beclosol",
        "principioAtivo": "Dipropionato de Beclometasona",
        "descricao": "Corticosteróides nasais sem antiinfecciosos",
        "apresentacoes": [
            "50 MCG/DOSE SUS TOP CT FR PLAS X 200 DOSES"
        ],
        "genericos": [
            {
                "nome": "Dipropionato de Beclometasona",
                "precoBase": 35.0
            },
            {
                "nome": "Ailuk",
                "precoBase": 37.55
            },
            {
                "nome": "Clenil Hfa",
                "precoBase": 50.45
            },
            {
                "nome": "Clenil",
                "precoBase": 62.79
            },
            {
                "nome": "Alerfin",
                "precoBase": 112.35
            }
        ],
        "precoReferencia": 94.97,
        "sinonimias": []
    },
    {
        "id": "med-00342",
        "nome": "Daivobet",
        "principioAtivo": "Dipropionato de Betametasona",
        "descricao": "Antipsoríase tópicos",
        "apresentacoes": [
            "50 MCG/G + 0,5 MG/G GEL CT FR PLAS X 30 G ",
            "50 MCG/G + 0,5 MG/G POM DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Diprosone",
                "precoBase": 19.16
            },
            {
                "nome": "Dipropionato de Betametasona",
                "precoBase": 35.24
            },
            {
                "nome": "Cortifar",
                "precoBase": 52.56
            }
        ],
        "precoReferencia": 151.12,
        "sinonimias": []
    },
    {
        "id": "med-00343",
        "nome": "Fungicort",
        "principioAtivo": "Dipropionato de Betametasona;cetoconazol",
        "descricao": "Corticoesteróides associados a antimicoticos",
        "apresentacoes": [
            "20 MG/G + 0,5 MG/G POM DERM CT BG AL X 30 G",
            "20 MG/G+ 0,5 MG/G CREM DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Trok",
                "precoBase": 20.55
            },
            {
                "nome": "Candicort",
                "precoBase": 20.55
            },
            {
                "nome": "Cetoconazol+dipropionato de Betametasona",
                "precoBase": 21.45
            },
            {
                "nome": "Cetoconazol + Dipropionato de Betametasona",
                "precoBase": 27.46
            },
            {
                "nome": "Candigran",
                "precoBase": 27.78
            },
            {
                "nome": "Cetoconazol+ Dipropionato de Betametasona",
                "precoBase": 31.77
            }
        ],
        "precoReferencia": 54.56,
        "sinonimias": []
    },
    {
        "id": "med-00344",
        "nome": "Diprospan",
        "principioAtivo": "Dipropionato de Betametasona;fosfato Dissódico de Betametasona",
        "descricao": "Corticosteróides injetáveis puros",
        "apresentacoes": [
            "5,0 MG/ML + 2,0 MG/ML SUS INJ CT AMP VD TRANS X 1 ML + SER ",
            "5,0 MG/ML + 2,0 MG/ML SUS INJ CT CAMA 6 AMP VD TRANS X 1 ML",
            "5,0 MG/ML + 2,0 MG/ML SUS INJ CT SER X 1 ML + HASTE + AGULHA"
        ],
        "genericos": [
            {
                "nome": "Dipropionato de Betametasona + Fosfato Dissódico de Betametasona",
                "precoBase": 29.41
            },
            {
                "nome": "Fosfato Dissódico de Betametasona + Dipropionato de Betametasona",
                "precoBase": 32.06
            },
            {
                "nome": "Beclonato",
                "precoBase": 32.24
            },
            {
                "nome": "Betatrinta",
                "precoBase": 33.18
            },
            {
                "nome": "Permese",
                "precoBase": 33.18
            },
            {
                "nome": "Duoflam",
                "precoBase": 34.94
            }
        ],
        "precoReferencia": 53.0,
        "sinonimias": []
    },
    {
        "id": "med-00345",
        "nome": "Diprogenta",
        "principioAtivo": "Dipropionato de Betametasona;sulfato de Gentamicina",
        "descricao": "Corticoesteróides associados a antibacterianos",
        "apresentacoes": [
            "(0,5 + 1) MG/G CREM DERM CT  BG AL X 30 G ",
            "(0,5 + 1) MG/G POM DERM CT  BG AL X 30 G "
        ],
        "genericos": [
            {
                "nome": "Trok-g",
                "precoBase": 11.35
            },
            {
                "nome": "Dipropionato de Betametasona + Sulfato de Gentamicina",
                "precoBase": 30.38
            },
            {
                "nome": "Betogenta",
                "precoBase": 34.37
            }
        ],
        "precoReferencia": 52.32,
        "sinonimias": []
    },
    {
        "id": "med-00346",
        "nome": "Diprosalic",
        "principioAtivo": "Dipropionato de Betametasona;ácido Salicílico",
        "descricao": "Corticoesteróides associados a antibacterianos",
        "apresentacoes": [
            "0,64 MG/G + 30 MG/G POM CT BG AL X 30 G",
            "0,64 MG/ML + 20 MG/ML SOL TOP CT FR PLAS OPC X 30 ML"
        ],
        "genericos": [
            {
                "nome": "Dipropionato de Betametasona + Ácido Salicílico",
                "precoBase": 26.96
            },
            {
                "nome": "Dermosalic",
                "precoBase": 45.93
            }
        ],
        "precoReferencia": 46.11,
        "sinonimias": []
    },
    {
        "id": "med-00347",
        "nome": "Depakote",
        "principioAtivo": "Divalproato de Sódio",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "125 MG CAP DURA LIB RETARD CT FR VD AMB X 30",
            "125 MG CAP DURA LIB RETARD CT FR VD AMB X 60",
            "250 MG COM REV LIB PROL CT BL AL PLAS PVC/PE/PCTFE TRANS X 30",
            "250 MG COM REV LIB PROL CT BL AL PLAS PVC/PE/PCTFE TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Divalproato de Sódio",
                "precoBase": 9.66
            },
            {
                "nome": "Gaba er",
                "precoBase": 10.71
            },
            {
                "nome": "Duepoli er",
                "precoBase": 16.32
            },
            {
                "nome": "Divalcon",
                "precoBase": 16.44
            },
            {
                "nome": "Divalproato de Sodio",
                "precoBase": 49.53
            },
            {
                "nome": "Zeugma xr",
                "precoBase": 81.1
            }
        ],
        "precoReferencia": 16.44,
        "sinonimias": []
    },
    {
        "id": "med-00348",
        "nome": "Tivicay",
        "principioAtivo": "Dolutegravir Sódico",
        "descricao": "Antivirais hiv, inibidores da integrase",
        "apresentacoes": [
            "50 MG COM REV CT FR PLAS PEAD OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Tivicay pd",
                "precoBase": 1233.95
            },
            {
                "nome": "Dolutegravir Sódico",
                "precoBase": 1486.92
            }
        ],
        "precoReferencia": 3779.28,
        "sinonimias": []
    },
    {
        "id": "med-00349",
        "nome": "Domped",
        "principioAtivo": "Domperidona",
        "descricao": "Gastroprocinéticos",
        "apresentacoes": [
            "5 MG/ML SUS OR CT FR PLAS PE X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Domperidona",
                "precoBase": 20.73
            },
            {
                "nome": "Motiridona",
                "precoBase": 24.8
            },
            {
                "nome": "Molidon",
                "precoBase": 28.55
            },
            {
                "nome": "Peridal",
                "precoBase": 29.19
            },
            {
                "nome": "Domperix",
                "precoBase": 32.6
            },
            {
                "nome": "Dompgran",
                "precoBase": 33.07
            }
        ],
        "precoReferencia": 64.18,
        "sinonimias": []
    },
    {
        "id": "med-00350",
        "nome": "Vibramicina",
        "principioAtivo": "Doxiciclina Monoidratada",
        "descricao": "Tetraciclinas e associações",
        "apresentacoes": [
            "100 MG COM SOL CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Doxiciclina",
                "precoBase": 55.96
            }
        ],
        "precoReferencia": 148.84,
        "sinonimias": []
    },
    {
        "id": "med-00351",
        "nome": "Vibral",
        "principioAtivo": "Dropropizina",
        "descricao": "Antitussígenos puros",
        "apresentacoes": [
            "1,5 MG/ML XPE PED CT FR PLAS AMB X 120 ML + COP",
            "3 MG/ML XPE ADU CT FR PLAS AMB X 120 ML + COP",
            "30 MG/ML SOL OR CT FR PLAS OPC GOT X 10 ML"
        ],
        "genericos": [
            {
                "nome": "Ziptuss",
                "precoBase": 11.01
            },
            {
                "nome": "Notuss Tss",
                "precoBase": 11.71
            },
            {
                "nome": "Dropropizina",
                "precoBase": 14.61
            },
            {
                "nome": "Atossion",
                "precoBase": 18.14
            },
            {
                "nome": "Neotoss",
                "precoBase": 19.44
            },
            {
                "nome": "Gotas Binelli",
                "precoBase": 25.62
            }
        ],
        "precoReferencia": 26.67,
        "sinonimias": []
    },
    {
        "id": "med-00352",
        "nome": "Slinda",
        "principioAtivo": "Drospirenona",
        "descricao": "Preparações orais com progestagênios somente",
        "apresentacoes": [
            "4 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 24 + 4 PLACEBOS",
            "4 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 48 + 8 PLACEBOS",
            "4 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 72 + 12 PLACEBOS"
        ],
        "genericos": [
            {
                "nome": "Ammy",
                "precoBase": 134.05
            }
        ],
        "precoReferencia": 134.05,
        "sinonimias": []
    },
    {
        "id": "med-00353",
        "nome": "Angeliq",
        "principioAtivo": "Drospirenona;estradiol Hemi-hidratado",
        "descricao": "Associações de estrógenos e progestógenos",
        "apresentacoes": [
            "(1,0 + 2,0) MG COM REV CT BL AL PLAS PVC TRANS X 28",
            "(1,0 + 2,0) MG COM REV CT BL AL PLAS PVC TRANS X 84"
        ],
        "genericos": [
            {
                "nome": "Estradiol + Drospirenona",
                "precoBase": 84.39
            },
            {
                "nome": "Nuance",
                "precoBase": 95.29
            },
            {
                "nome": "Ceci",
                "precoBase": 146.65
            }
        ],
        "precoReferencia": 146.65,
        "sinonimias": []
    },
    {
        "id": "med-00354",
        "nome": "Avodart",
        "principioAtivo": "Dutasterida",
        "descricao": "Bph inibidores da 5-alfa testosterona redutase (5-ari) puros",
        "apresentacoes": [
            "0,5 MG CAP MOLE CT BL AL PLAS OPC X 10",
            "0,5 MG CAP MOLE CT BL AL PLAS OPC X 30",
            "0,5 MG CAP MOLE CT BL AL PLAS OPC X 90"
        ],
        "genericos": [
            {
                "nome": "Dastene",
                "precoBase": 80.26
            },
            {
                "nome": "Droalfa",
                "precoBase": 80.28
            },
            {
                "nome": "Dutasterida",
                "precoBase": 224.42
            }
        ],
        "precoReferencia": 123.5,
        "sinonimias": []
    },
    {
        "id": "med-00355",
        "nome": "Combodart",
        "principioAtivo": "Dutasterida;cloridrato de Tansulosina",
        "descricao": "Bph combinações de alfa-antagonistas e inibidores da 5-alfa testosterona redutase",
        "apresentacoes": [
            "(0,5 + 0,4) MG CAP DURA LIB PROL CT FR PLAS OPC X 07",
            "(0,5 + 0,4) MG CAP DURA LIB PROL CT FR PLAS OPC X 30",
            "(0,5 + 0,4) MG CAP DURA LIB PROL CT FR PLAS OPC X 90"
        ],
        "genericos": [
            {
                "nome": "Dutasterida + Cloridrato de Tansulosina",
                "precoBase": 26.25
            },
            {
                "nome": "Tanduo",
                "precoBase": 43.38
            },
            {
                "nome": "Dutam",
                "precoBase": 54.21
            },
            {
                "nome": "Dastene Duo",
                "precoBase": 162.64
            }
        ],
        "precoReferencia": 37.94,
        "sinonimias": []
    },
    {
        "id": "med-00356",
        "nome": "Echinacea Vitalab",
        "principioAtivo": "Echinacea Purpurea (l.) Moench",
        "descricao": "Preparação de origem herbácea promotora da defesa orgânica contra infecções",
        "apresentacoes": [
            "250 MG CAP DURA CT FRAS PLAS PE OPC X  45"
        ],
        "genericos": [
            {
                "nome": "Enax",
                "precoBase": 28.02
            }
        ],
        "precoReferencia": 73.78,
        "sinonimias": []
    },
    {
        "id": "med-00357",
        "nome": "Revolade",
        "principioAtivo": "Eltrombopague Olamina",
        "descricao": "Agonistas da trombopoetina",
        "apresentacoes": [
            "25 MG COM REV CT BL AL/AL X 14",
            "50 MG COM REV CT BL AL/AL X 14"
        ],
        "genericos": [
            {
                "nome": "Eltrombopague Olamina",
                "precoBase": 2143.63
            }
        ],
        "precoReferencia": 3541.76,
        "sinonimias": []
    },
    {
        "id": "med-00358",
        "nome": "Jardiance",
        "principioAtivo": "Empagliflozina",
        "descricao": "Antidiabéticos inibidores de sglt2, puros",
        "apresentacoes": [
            "10 MG COM REV CT BL AL PLAS PVC TRANS X 10",
            "10 MG COM REV CT BL AL PLAS PVC TRANS X 30",
            "25 MG COM REV CT BL AL PLAS PVC TRANS X 10 ",
            "25 MG COM REV CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Empaflo",
                "precoBase": 47.64
            },
            {
                "nome": "Empagliflozina",
                "precoBase": 65.61
            },
            {
                "nome": "Empaglifozina",
                "precoBase": 65.61
            },
            {
                "nome": "Glempa",
                "precoBase": 107.09
            },
            {
                "nome": "Emp",
                "precoBase": 108.3
            },
            {
                "nome": "Epag",
                "precoBase": 108.3
            }
        ],
        "precoReferencia": 108.34,
        "sinonimias": []
    },
    {
        "id": "med-00359",
        "nome": "Aldijet",
        "principioAtivo": "Enantato de Estradiol;algestona Acetofenida",
        "descricao": "Outros hormônios contraceptivos sistêmicos",
        "apresentacoes": [
            "150 MG/ML + 10 MG/ML SOL INJ IM CT AMP VD AMB X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Algestona Acetofenida + Enantato de Estradiol",
                "precoBase": 16.04
            },
            {
                "nome": "Perlumes",
                "precoBase": 17.46
            },
            {
                "nome": "Preg-less",
                "precoBase": 20.58
            },
            {
                "nome": "Ciclovular",
                "precoBase": 23.87
            },
            {
                "nome": "Pregnolan",
                "precoBase": 24.54
            }
        ],
        "precoReferencia": 24.65,
        "sinonimias": []
    },
    {
        "id": "med-00360",
        "nome": "Ghemaxan",
        "principioAtivo": "Enoxaparina Sódica",
        "descricao": "Heparinas fracionadas",
        "apresentacoes": [
            "100 MG SOL INJ CT 10 SER PREENC VD TRANS GRAD X 1,0 ML",
            "100 MG SOL INJ CT 10 SER PREENC VD TRANS GRAD X 1,0 ML + SIST SEGURANÇA",
            "20 MG SOL INJ CT 10 SER PREENC VD TRANS X 0,2 ML",
            "20 MG SOL INJ CT 10 SER PREENC VD TRANS X 0,2 ML + SIST SEGURANÇA"
        ],
        "genericos": [
            {
                "nome": "Enoxalow",
                "precoBase": 44.72
            },
            {
                "nome": "Enoksa",
                "precoBase": 45.17
            },
            {
                "nome": "Heptris",
                "precoBase": 71.99
            },
            {
                "nome": "Heparinox",
                "precoBase": 84.65
            },
            {
                "nome": "Volare",
                "precoBase": 88.75
            },
            {
                "nome": "Cutenox",
                "precoBase": 89.15
            }
        ],
        "precoReferencia": 432.66,
        "sinonimias": []
    },
    {
        "id": "med-00361",
        "nome": "Comtan",
        "principioAtivo": "Entacapona",
        "descricao": "Antiparkinsonianos",
        "apresentacoes": [
            "200 MG COM REV CT FR PLAS OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Entarkin",
                "precoBase": 306.94
            }
        ],
        "precoReferencia": 308.58,
        "sinonimias": []
    },
    {
        "id": "med-00362",
        "nome": "Truvada",
        "principioAtivo": "Entricitabina;fumarato de Tenofovir Desoproxila",
        "descricao": "Antivirais anti-hiv inibidores da transcriptase reversa nucleosídeos e nucleotídeos",
        "apresentacoes": [
            "(200+ 300) MG COM REV FR PLAS PEAD OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Entricitabina + Fumarato de Tenofovir Desoproxila",
                "precoBase": 1876.21
            },
            {
                "nome": "Binav",
                "precoBase": 2013.48
            }
        ],
        "precoReferencia": 3786.82,
        "sinonimias": []
    },
    {
        "id": "med-00363",
        "nome": "Mepivalem ad",
        "principioAtivo": "Epinefrina;cloridrato de Mepivacaína",
        "descricao": "Anestésicos locais injetáveis odontológicos",
        "apresentacoes": [
            "20 MG/ML + 10 MCG/ML  SOL INJ CT 50 CAR PLAS TRANS X 1,8 ML"
        ],
        "genericos": [
            {
                "nome": "Mepiadre",
                "precoBase": 272.67
            }
        ],
        "precoReferencia": 289.09,
        "sinonimias": []
    },
    {
        "id": "med-00364",
        "nome": "Ofev",
        "principioAtivo": "Esilato de Nintedanibe",
        "descricao": "Produtos de fibrose pulmonar idiopática",
        "apresentacoes": [
            "100 MG CAP MOLE CT BL AL AL X 60",
            "150 MG CAP MOLE CT BL AL AL X 60"
        ],
        "genericos": [
            {
                "nome": "Esilato de Nintedanibe",
                "precoBase": 1535.76
            },
            {
                "nome": "Nindaxef",
                "precoBase": 2493.69
            },
            {
                "nome": "Oksana",
                "precoBase": 15213.57
            },
            {
                "nome": "Nidhi",
                "precoBase": 15213.57
            }
        ],
        "precoReferencia": 15213.59,
        "sinonimias": []
    },
    {
        "id": "med-00365",
        "nome": "Nexium",
        "principioAtivo": "Esomeprazol Magnésico",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "20 MG COM REV CT BL AL/AL X 7",
            "40 MG COM REV CT BL AL/AL X 7"
        ],
        "genericos": [
            {
                "nome": "Ésio",
                "precoBase": 42.51
            },
            {
                "nome": "Gaeso",
                "precoBase": 49.15
            },
            {
                "nome": "Esomeprazol Magnésico",
                "precoBase": 69.62
            },
            {
                "nome": "Esomeprazol Magnésio Triidratado",
                "precoBase": 79.24
            },
            {
                "nome": "Esomeprazol Magnésico Tri-hidratado",
                "precoBase": 79.29
            },
            {
                "nome": "Esomex",
                "precoBase": 129.29
            }
        ],
        "precoReferencia": 71.59,
        "sinonimias": []
    },
    {
        "id": "med-00366",
        "nome": "Nexium",
        "principioAtivo": "Esomeprazol Magnésico Tri-hidratado",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "20 MG COM REV CT  BL AL/AL X 14",
            "20 MG COM REV CT  BL AL/AL X 28",
            "40 MG COM REV CT  BL AL/AL X 14",
            "40 MG COM REV CT  BL AL/AL X 28"
        ],
        "genericos": [
            {
                "nome": "Esomeprazol Magnésico",
                "precoBase": 57.33
            },
            {
                "nome": "Esomeprazol Magnésico Tri-hidratado",
                "precoBase": 79.29
            },
            {
                "nome": "Esogastro",
                "precoBase": 91.11
            },
            {
                "nome": "Esmog",
                "precoBase": 91.11
            },
            {
                "nome": "Esol xr",
                "precoBase": 94.64
            },
            {
                "nome": "Esop",
                "precoBase": 122.43
            }
        ],
        "precoReferencia": 130.86,
        "sinonimias": []
    },
    {
        "id": "med-00367",
        "nome": "Nexium iv",
        "principioAtivo": "Esomeprazol Sódico",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "40 MG PO LIOF SOL INJ IV CT 10 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Esomeprazol Sodico",
                "precoBase": 62.33
            },
            {
                "nome": "Ésio",
                "precoBase": 1042.44
            }
        ],
        "precoReferencia": 1042.44,
        "sinonimias": []
    },
    {
        "id": "med-00368",
        "nome": "Aldactone",
        "principioAtivo": "Espironolactona",
        "descricao": "Agentes diuréticos poupadores potássio puros",
        "apresentacoes": [
            "100 MG COM CT  BL AL PLAS TRANS X 16",
            "25 MG COM CT BL AL PLAS TRANS X 30",
            "50 MG COM CT  BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Espironolactona",
                "precoBase": 26.92
            },
            {
                "nome": "Diacqua",
                "precoBase": 30.99
            }
        ],
        "precoReferencia": 48.15,
        "sinonimias": []
    },
    {
        "id": "med-00369",
        "nome": "Vagifem",
        "principioAtivo": "Estradiol Hemi-hidratado",
        "descricao": "Estrógenos excluindo g3a, g3e, g3f",
        "apresentacoes": [
            "10 MCG COM REV VAG CT ENVOL APLIC PREENC PLAS PE/PP OPC X 18"
        ],
        "genericos": [
            {
                "nome": "Lenzetto",
                "precoBase": 76.97
            },
            {
                "nome": "Natifa",
                "precoBase": 78.73
            },
            {
                "nome": "Oestrogel",
                "precoBase": 86.32
            },
            {
                "nome": "Estreva",
                "precoBase": 98.79
            },
            {
                "nome": "Estradot",
                "precoBase": 135.15
            },
            {
                "nome": "Systen",
                "precoBase": 137.59
            }
        ],
        "precoReferencia": 161.44,
        "sinonimias": []
    },
    {
        "id": "med-00370",
        "nome": "Stezza",
        "principioAtivo": "Estradiol Hemi-hidratado;acetato de Nomegestrol",
        "descricao": "Hormônios contraceptivos monofásicos com estrogênios >=50mcg",
        "apresentacoes": [
            "(2,5 + 1,5) MG COM REV CT BL AL PLAS PVC TRANS X 24 + 4 PLACEBOS",
            "(2,5 + 1,5) MG COM REV CT BL AL PLAS PVC TRANS X 72 + 12 PLACEBOS "
        ],
        "genericos": [
            {
                "nome": "Iziz",
                "precoBase": 61.48
            }
        ],
        "precoReferencia": 61.48,
        "sinonimias": []
    },
    {
        "id": "med-00371",
        "nome": "Ovestrion",
        "principioAtivo": "Estriol",
        "descricao": "Estrógenos excluindo g3a, g3e, g3f",
        "apresentacoes": [
            "1 MG COM CT  BL AL PLAS TRANS X 30",
            "1 MG/G CREM VAG CT BG AL X 50G + APLIC"
        ],
        "genericos": [
            {
                "nome": "Estriol",
                "precoBase": 45.1
            },
            {
                "nome": "Estrionil",
                "precoBase": 67.54
            },
            {
                "nome": "Stele",
                "precoBase": 72.13
            }
        ],
        "precoReferencia": 36.22,
        "sinonimias": []
    },
    {
        "id": "med-00372",
        "nome": "Prysma",
        "principioAtivo": "Eszopiclona",
        "descricao": "Hipnóticos e sedativos não barbitúricos puros",
        "apresentacoes": [
            "1 MG COM REV CT BL AL AL X 30",
            "2 MG COM REV CT BL AL AL X 20",
            "2 MG COM REV CT BL AL AL X 30",
            "3 MG COM REV CT BL AL AL X 20"
        ],
        "genericos": [
            {
                "nome": "Eszopiclona",
                "precoBase": 27.19
            },
            {
                "nome": "Eczo",
                "precoBase": 88.62
            },
            {
                "nome": "Torrem",
                "precoBase": 89.78
            },
            {
                "nome": "Soul",
                "precoBase": 89.78
            },
            {
                "nome": "Ezonia",
                "precoBase": 92.87
            },
            {
                "nome": "Hezo",
                "precoBase": 92.87
            }
        ],
        "precoReferencia": 92.87,
        "sinonimias": []
    },
    {
        "id": "med-00373",
        "nome": "Erelzi",
        "principioAtivo": "Etanercepte",
        "descricao": "Produtos anti-tnf( fator de necrose tumoral)",
        "apresentacoes": [
            "50 MG SOL INJ CT 4 CAN PREENC X 1 ML + SIST APLIC PLAS",
            "50 MG SOL INJ CT BL PLAS X 4 SER VD PREENC C/ AGU X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Nepexto",
                "precoBase": 815.77
            },
            {
                "nome": "Brenzys",
                "precoBase": 4841.71
            },
            {
                "nome": "Enbrel Pfs",
                "precoBase": 7496.54
            },
            {
                "nome": "Enbrel",
                "precoBase": 7669.38
            }
        ],
        "precoReferencia": 14816.98,
        "sinonimias": []
    },
    {
        "id": "med-00374",
        "nome": "Dalyne",
        "principioAtivo": "Etinilestradiol",
        "descricao": "Hormônios contraceptivos monofásicos com estrogênios <50mcg",
        "apresentacoes": [
            "3 MG + 0,03 MG COM REV CT BL AL PLAS OPC X 63"
        ],
        "genericos": [
            {
                "nome": "Lydian",
                "precoBase": 38.22
            },
            {
                "nome": "Drospirenona + Etinilestradiol",
                "precoBase": 73.37
            }
        ],
        "precoReferencia": 277.99,
        "sinonimias": []
    },
    {
        "id": "med-00375",
        "nome": "Diane 35",
        "principioAtivo": "Etinilestradiol;acetato de Ciproterona",
        "descricao": "Hormônios contraceptivos monofásicos com estrogênios <50mcg",
        "apresentacoes": [
            "(2,000+ 0,035) MG COM REV CT BL CALEND AL PLAS TRANS X 21",
            "(2,000+ 0,035) MG COM REV CT BL CALEND AL PLAS TRANS X 63"
        ],
        "genericos": [
            {
                "nome": "Acetato de Ciproterona + Etinilestradiol",
                "precoBase": 22.63
            },
            {
                "nome": "Acetato de Ciproterona+etinilestradiol",
                "precoBase": 22.92
            },
            {
                "nome": "Artemidis 35",
                "precoBase": 24.54
            },
            {
                "nome": "Diclin",
                "precoBase": 26.26
            },
            {
                "nome": "Tess",
                "precoBase": 29.33
            },
            {
                "nome": "Jaque",
                "precoBase": 30.64
            }
        ],
        "precoReferencia": 44.25,
        "sinonimias": []
    },
    {
        "id": "med-00376",
        "nome": "Belara",
        "principioAtivo": "Etinilestradiol;acetato de Clormadinona",
        "descricao": "Hormônios contraceptivos monofásicos com estrogênios <50mcg",
        "apresentacoes": [
            "2 MG + 0,03 MG COM REV CT BL CALEND AL PLAS TRANS X 21",
            "2 MG + 0,03 MG COM REV CT BL CALEND AL PLAS TRANS X 21 + 7 PLACEBOS"
        ],
        "genericos": [
            {
                "nome": "Acetato de Clormadinona + Etinilestradiol",
                "precoBase": 40.5
            },
            {
                "nome": "Amora",
                "precoBase": 51.25
            },
            {
                "nome": "Cherry",
                "precoBase": 62.21
            },
            {
                "nome": "Amora 20",
                "precoBase": 64.32
            },
            {
                "nome": "Beladiol",
                "precoBase": 65.68
            },
            {
                "nome": "Lolita",
                "precoBase": 66.14
            }
        ],
        "precoReferencia": 70.33,
        "sinonimias": []
    },
    {
        "id": "med-00377",
        "nome": "Mercilon",
        "principioAtivo": "Etinilestradiol;desogestrel",
        "descricao": "Hormônios contraceptivos monofásicos com estrogênios <50mcg",
        "apresentacoes": [
            "0,15 MG + 0,02 MG COM CT BL AL PLAS TRANS X 21",
            "0,15 MG + 0,02 MG COM CT BL AL PLAS TRANS X 63"
        ],
        "genericos": [
            {
                "nome": "Etinilestradiol+desogestrel",
                "precoBase": 32.78
            },
            {
                "nome": "Desogestrel + Etinilestradiol",
                "precoBase": 32.87
            },
            {
                "nome": "Primera 20",
                "precoBase": 46.58
            },
            {
                "nome": "Primera 30",
                "precoBase": 46.58
            },
            {
                "nome": "Minian",
                "precoBase": 48.17
            },
            {
                "nome": "Malú",
                "precoBase": 52.2
            }
        ],
        "precoReferencia": 67.75,
        "sinonimias": []
    },
    {
        "id": "med-00378",
        "nome": "Yasmin",
        "principioAtivo": "Etinilestradiol;drospirenona",
        "descricao": "Hormônios contraceptivos monofásicos com estrogênios <50mcg",
        "apresentacoes": [
            "(3 + 0,03)MG COM REV CT BL AL PLAS PVC TRANS  X 63 + 21",
            "(3 + 0,03)MG COM REV CT BL AL PLAS PVC TRANS X 21 + 7"
        ],
        "genericos": [
            {
                "nome": "Drospirenona + Etinilestradiol",
                "precoBase": 55.6
            },
            {
                "nome": "Lyllas",
                "precoBase": 66.14
            },
            {
                "nome": "Drospirenona+etinilestradiol",
                "precoBase": 67.72
            },
            {
                "nome": "Diva 30",
                "precoBase": 67.93
            },
            {
                "nome": "Drosperinona + Etinilestradiol",
                "precoBase": 73.15
            },
            {
                "nome": "Elani Ciclo",
                "precoBase": 75.14
            }
        ],
        "precoReferencia": 120.79,
        "sinonimias": []
    },
    {
        "id": "med-00379",
        "nome": "Nuvaring",
        "principioAtivo": "Etinilestradiol;etonogestrel",
        "descricao": "Outros hormônios contraceptivos sistêmicos",
        "apresentacoes": [
            "11,7 MG/2,7 MG ANEL VAG CT ENV AL/PLAS X 1 + 1 APLIC PLAS OPC"
        ],
        "genericos": [
            {
                "nome": "Livanel",
                "precoBase": 123.68
            },
            {
                "nome": "Exelring",
                "precoBase": 123.7
            }
        ],
        "precoReferencia": 123.72,
        "sinonimias": []
    },
    {
        "id": "med-00380",
        "nome": "Gestinol",
        "principioAtivo": "Etinilestradiol;gestodeno",
        "descricao": "Hormônios contraceptivos monofásicos com estrogênios <50mcg",
        "apresentacoes": [
            "0,030 + 0,075 MG COM REV CT ENVOL BL AL PLAS TRANS X 28 + CALEND",
            "0,030 + 0,075 MG COM REV CT ENVOL BL AL PLAS TRANS X 84 + CALEND"
        ],
        "genericos": [
            {
                "nome": "Etinilestradiol + Gestodeno",
                "precoBase": 30.74
            },
            {
                "nome": "Tantin",
                "precoBase": 31.25
            },
            {
                "nome": "Micropil",
                "precoBase": 32.53
            },
            {
                "nome": "Tâmisa 15",
                "precoBase": 36.83
            },
            {
                "nome": "Gestodeno+etinilestradiol",
                "precoBase": 40.8
            },
            {
                "nome": "Tâmisa",
                "precoBase": 41.13
            }
        ],
        "precoReferencia": 71.69,
        "sinonimias": []
    },
    {
        "id": "med-00381",
        "nome": "Level",
        "principioAtivo": "Etinilestradiol;levonorgestrel",
        "descricao": "Hormônios contraceptivos monofásicos com estrogênios <50mcg",
        "apresentacoes": [
            "100 MCG + 20 MCG COM REV CT BL AL PLAS INC X 21",
            "100 MCG + 20 MCG COM REV CT BL AL PLAS INC X 63"
        ],
        "genericos": [
            {
                "nome": "Levonorgestrel + Etinilestradiol",
                "precoBase": 8.59
            },
            {
                "nome": "Neovlar",
                "precoBase": 9.97
            },
            {
                "nome": "Ciclo 21",
                "precoBase": 11.41
            },
            {
                "nome": "Microvlar",
                "precoBase": 11.44
            },
            {
                "nome": "Linofeme",
                "precoBase": 12.96
            },
            {
                "nome": "Triquilar",
                "precoBase": 13.7
            }
        ],
        "precoReferencia": 31.57,
        "sinonimias": []
    },
    {
        "id": "med-00382",
        "nome": "Miranova",
        "principioAtivo": "Etinilestradiol;levonorgestrel Micronizado",
        "descricao": "Hormônios contraceptivos monofásicos com estrogênios <50mcg",
        "apresentacoes": [
            "(0,10 + 0,02) MG COM REV CT BL CALEND AL PLAS PVC/PVDC TRANS X 21"
        ],
        "genericos": [
            {
                "nome": "Levonorgestrel + Etinilestradiol",
                "precoBase": 8.61
            },
            {
                "nome": "Gestrelan",
                "precoBase": 14.23
            },
            {
                "nome": "Nordette",
                "precoBase": 14.23
            }
        ],
        "precoReferencia": 31.55,
        "sinonimias": []
    },
    {
        "id": "med-00383",
        "nome": "Flancox",
        "principioAtivo": "Etodolaco",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "300 MG COM REV CT BL AL PLAS PVC TRANS X 14  ",
            "300 MG COM REV CT BL AL PLAS PVC TRANS X 30",
            "400 MG COM REV CT BL AL PLAS PVC TRANS X 10 ",
            "400 MG COM REV CT BL AL PLAS PVC TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Etodolaco",
                "precoBase": 9.87
            },
            {
                "nome": "Ipaglin",
                "precoBase": 10.61
            },
            {
                "nome": "Zutak",
                "precoBase": 13.58
            },
            {
                "nome": "Ketalgi",
                "precoBase": 15.44
            },
            {
                "nome": "Dore",
                "precoBase": 16.03
            },
            {
                "nome": "Larc",
                "precoBase": 16.03
            }
        ],
        "precoReferencia": 16.27,
        "sinonimias": []
    },
    {
        "id": "med-00384",
        "nome": "Implanon",
        "principioAtivo": "Etonogestrel",
        "descricao": "Outros hormônios contraceptivos sistêmicos",
        "apresentacoes": [
            "68 MG IMPLANTE CT BL X 1 APLIC"
        ],
        "genericos": [
            {
                "nome": "Inserzi",
                "precoBase": 1214.59
            }
        ],
        "precoReferencia": 1214.59,
        "sinonimias": []
    },
    {
        "id": "med-00385",
        "nome": "Arcoxia",
        "principioAtivo": "Etoricoxibe",
        "descricao": "Coxibs",
        "apresentacoes": [
            "60 MG COM REV CT BL AL AL X 14 ",
            "60 MG COM REV CT BL AL AL X 7",
            "90 MG COM REV CT  BL AL AL X 7",
            "90 MG COM REV CT BL AL AL X 14"
        ],
        "genericos": [
            {
                "nome": "Alivetore",
                "precoBase": 11.72
            },
            {
                "nome": "Etoricoxibe",
                "precoBase": 22.44
            },
            {
                "nome": "Xumer",
                "precoBase": 22.67
            },
            {
                "nome": "Torxis",
                "precoBase": 24.0
            },
            {
                "nome": "Etorben",
                "precoBase": 24.0
            },
            {
                "nome": "Hetori",
                "precoBase": 25.32
            }
        ],
        "precoReferencia": 63.34,
        "sinonimias": []
    },
    {
        "id": "med-00386",
        "nome": "Afinitor",
        "principioAtivo": "Everolimo",
        "descricao": "Outros antineoplásicos inibidores da proteína kinase",
        "apresentacoes": [
            "10 MG COM CT BL AL AL X 30",
            "2,5 MG COM CT BL AL AL X 30",
            "5 MG COM CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Everolimo",
                "precoBase": 682.31
            },
            {
                "nome": "Certican",
                "precoBase": 2607.99
            },
            {
                "nome": "Exher",
                "precoBase": 7654.98
            },
            {
                "nome": "Torhanz",
                "precoBase": 10682.8
            }
        ],
        "precoReferencia": 6582.1,
        "sinonimias": []
    },
    {
        "id": "med-00387",
        "nome": "Aromasin",
        "principioAtivo": "Exemestano",
        "descricao": "Citostáticos inibidores da aromatase",
        "apresentacoes": [
            "25 MG COM REV CT BL AL PLAS OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Exemestano",
                "precoBase": 974.18
            },
            {
                "nome": "Emah",
                "precoBase": 1002.07
            },
            {
                "nome": "Proexty",
                "precoBase": 1574.57
            }
        ],
        "precoReferencia": 1628.06,
        "sinonimias": []
    },
    {
        "id": "med-00388",
        "nome": "Fitovein Flux",
        "principioAtivo": "Extrato Seco de Aesculus Hippocastanum l.",
        "descricao": "Vasoprotetores sistêmicos",
        "apresentacoes": [
            "254,54 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Venocel",
                "precoBase": 28.26
            }
        ],
        "precoReferencia": 42.79,
        "sinonimias": []
    },
    {
        "id": "med-00389",
        "nome": "Hipericin",
        "principioAtivo": "Extrato Seco de Hypericum Perforatum l",
        "descricao": "Antidepressivos de origem herbácea",
        "apresentacoes": [
            "300 MG CAP MOLE CT BL AL PLAS PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Hipérico Herbarium",
                "precoBase": 72.88
            }
        ],
        "precoReferencia": 141.12,
        "sinonimias": []
    },
    {
        "id": "med-00390",
        "nome": "Valerance",
        "principioAtivo": "Extrato Seco de Valeriana Officinalis l.",
        "descricao": "Hipnóticos e sedativos herbáceos",
        "apresentacoes": [
            "160 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Valsed",
                "precoBase": 29.38
            },
            {
                "nome": "Sonotabs",
                "precoBase": 57.39
            },
            {
                "nome": "Valessone",
                "precoBase": 62.32
            }
        ],
        "precoReferencia": 115.54,
        "sinonimias": []
    },
    {
        "id": "med-00391",
        "nome": "Tebonin",
        "principioAtivo": "Extrato de Ginkgo Biloba",
        "descricao": "Vasoterapêuticos cerebrais e periféricos, excluindo antoagonistas de cálcio com ação cerebral",
        "apresentacoes": [
            "120 MG COM REV CT BL AL PLAS PVC TRANS X 30",
            "80 MG COM REV CT BL AL PLAS PVC TRANS X 10",
            "80 MG COM REV CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Fitobiloba",
                "precoBase": 67.01
            }
        ],
        "precoReferencia": 88.83,
        "sinonimias": []
    },
    {
        "id": "med-00392",
        "nome": "Ezetrol",
        "principioAtivo": "Ezetimiba",
        "descricao": "Produtos reguladores de lípidios, outros",
        "apresentacoes": [
            "10 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Posicor",
                "precoBase": 38.39
            },
            {
                "nome": "Ezetimiba",
                "precoBase": 48.73
            },
            {
                "nome": "Emibazet",
                "precoBase": 62.97
            },
            {
                "nome": "Coledue",
                "precoBase": 63.42
            },
            {
                "nome": "Ezet",
                "precoBase": 70.67
            },
            {
                "nome": "Zimiex",
                "precoBase": 71.22
            }
        ],
        "precoReferencia": 241.38,
        "sinonimias": []
    },
    {
        "id": "med-00393",
        "nome": "Vytorin",
        "principioAtivo": "Ezetimiba;sinvastatina",
        "descricao": "Reguladores de gordura em combinação com outros reguladores de gordura",
        "apresentacoes": [
            "(10 + 10) MG COM CT BL AL AL X 30",
            "(10+ 20) MG COM CT BL AL PLAS PVC/PCTFE OPC X 30",
            "(10+ 40) MG COM CT BL AL PLAS PVC/PCTFE OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Zetsim",
                "precoBase": 98.47
            },
            {
                "nome": "Sinvascor Eze",
                "precoBase": 122.93
            },
            {
                "nome": "Ezetimiba + Sinvastatina",
                "precoBase": 125.09
            },
            {
                "nome": "Ezetimiba+sinvastatina",
                "precoBase": 127.85
            },
            {
                "nome": "Posicor Sin",
                "precoBase": 192.77
            }
        ],
        "precoReferencia": 211.02,
        "sinonimias": []
    },
    {
        "id": "med-00394",
        "nome": "Fampyra",
        "principioAtivo": "Fampridina",
        "descricao": "Todos os outros produtos para o sistema nervoso central",
        "apresentacoes": [
            "10 MG COM REV LIB PROL CT BL AL AL X 28"
        ],
        "genericos": [
            {
                "nome": "Fampridina",
                "precoBase": 678.75
            }
        ],
        "precoReferencia": 1120.66,
        "sinonimias": []
    },
    {
        "id": "med-00395",
        "nome": "Fanclomax",
        "principioAtivo": "Fanciclovir",
        "descricao": "Antivirais para herpes",
        "apresentacoes": [
            "250 MG COM CT BL AL PLAS TRANS X 21"
        ],
        "genericos": [
            {
                "nome": "Penvir",
                "precoBase": 132.66
            }
        ],
        "precoReferencia": 657.77,
        "sinonimias": []
    },
    {
        "id": "med-00396",
        "nome": "Alphanate",
        "principioAtivo": "Fator de Von Willebrand",
        "descricao": "Fator viii",
        "apresentacoes": [
            "1000 UI PO LIOF INJ CX FA VD INC + SER DIL X 10 ML + EQUIPO INFUS ",
            "500 UI PO LIOF INJ CX FA VD INC + SER DIL X 5 ML + EQUIPO INFUS "
        ],
        "genericos": [
            {
                "nome": "Haemate p",
                "precoBase": 2845.59
            }
        ],
        "precoReferencia": 3541.98,
        "sinonimias": []
    },
    {
        "id": "med-00397",
        "nome": "Citocaina",
        "principioAtivo": "Felipressina;cloridrato de Prilocaína",
        "descricao": "Anestésicos locais injetáveis odontológicos",
        "apresentacoes": [
            "3 PCC + 0,03 UI / ML SOL INJ CT CX 50 CARP PLAS TRANS X 1,8 ML "
        ],
        "genericos": [
            {
                "nome": "Citanest 3% Com Octapressin",
                "precoBase": 163.19
            },
            {
                "nome": "Prilonest",
                "precoBase": 282.9
            }
        ],
        "precoReferencia": 298.95,
        "sinonimias": []
    },
    {
        "id": "med-00398",
        "nome": "Seki",
        "principioAtivo": "Fendizoato de Cloperastina",
        "descricao": "Antitussígenos puros",
        "apresentacoes": [
            "3,54 MG/ML XPE CT FR VD AMB X 120 ML + COP",
            "35,4 MG/ML SUS OR CT FR VD AMB X 15 ML + CGT"
        ],
        "genericos": [
            {
                "nome": "Fendizoato de Cloperastina",
                "precoBase": 24.23
            },
            {
                "nome": "Tilugen",
                "precoBase": 43.32
            },
            {
                "nome": "Clope",
                "precoBase": 45.9
            },
            {
                "nome": "Expecseccor",
                "precoBase": 45.9
            }
        ],
        "precoReferencia": 36.06,
        "sinonimias": []
    },
    {
        "id": "med-00399",
        "nome": "Hidantal",
        "principioAtivo": "Fenitoína",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "100 MG COM CT BL AL PLAS LAR X 25",
            "100 MG COM CT BL AL PLAS LAR X 25 "
        ],
        "genericos": [
            {
                "nome": "Fenitoína",
                "precoBase": 10.21
            },
            {
                "nome": "Dantalin",
                "precoBase": 16.22
            }
        ],
        "precoReferencia": 17.22,
        "sinonimias": []
    },
    {
        "id": "med-00400",
        "nome": "Gardenal",
        "principioAtivo": "Fenobarbital",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "100 MG COM CT BL AL PLAS TRANS X 20",
            "40 MG/ML SOL OR PED CT FR VD AMB GOT X 20 ML",
            "50 MG COM CT BL AL PLAS TRANS X 20  "
        ],
        "genericos": [
            {
                "nome": "Fenobarbital",
                "precoBase": 8.59
            },
            {
                "nome": "Carbital",
                "precoBase": 13.85
            }
        ],
        "precoReferencia": 11.84,
        "sinonimias": []
    },
    {
        "id": "med-00401",
        "nome": "Lipidil",
        "principioAtivo": "Fenofibrato",
        "descricao": "Fibratos",
        "apresentacoes": [
            "160 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 30",
            "160 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 60",
            "160 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 90",
            "200 MG CAP GEL DURA CT BL AL PLAS PVC/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Fenofibrato",
                "precoBase": 33.43
            },
            {
                "nome": "Riduzi",
                "precoBase": 55.19
            },
            {
                "nome": "Fenofibrato Micronizado",
                "precoBase": 125.34
            },
            {
                "nome": "Fenobraty",
                "precoBase": 128.52
            }
        ],
        "precoReferencia": 165.55,
        "sinonimias": []
    },
    {
        "id": "med-00402",
        "nome": "Pen-ve-oral",
        "principioAtivo": "Fenoximetilpenicilina Potássica",
        "descricao": "Penicilinas de pequeno e médio espectros puras",
        "apresentacoes": [
            "500.000 UI COM CT ENV AL PLAS X 12",
            "80.000 UI/ML PO SOL OR CT FR VD AMB X 60 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Meracilina",
                "precoBase": 14.02
            }
        ],
        "precoReferencia": 33.77,
        "sinonimias": []
    },
    {
        "id": "med-00403",
        "nome": "Nenfy",
        "principioAtivo": "Ferripolimaltose",
        "descricao": "Ferro puro",
        "apresentacoes": [
            "100 MG COM MAST CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Comb Iso",
                "precoBase": 19.8
            },
            {
                "nome": "Pamfer",
                "precoBase": 19.8
            },
            {
                "nome": "Dexfer",
                "precoBase": 19.84
            },
            {
                "nome": "Myrafer",
                "precoBase": 25.78
            },
            {
                "nome": "Noripurum",
                "precoBase": 25.84
            },
            {
                "nome": "Nori-1",
                "precoBase": 36.6
            }
        ],
        "precoReferencia": 75.58,
        "sinonimias": []
    },
    {
        "id": "med-00404",
        "nome": "Filgrastim",
        "principioAtivo": "Filgrastim",
        "descricao": "Fatores estimulantes de colônias",
        "apresentacoes": [
            "30 MU (300 MCG) SOL INJ CT 5 FA VD TRANS X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Filgrastine",
                "precoBase": 936.54
            }
        ],
        "precoReferencia": 4992.03,
        "sinonimias": []
    },
    {
        "id": "med-00405",
        "nome": "Finarid",
        "principioAtivo": "Finasterida",
        "descricao": "Bph inibidores da 5-alfa testosterona redutase (5-ari) puros",
        "apresentacoes": [
            "5MG COM REV CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Finasterida",
                "precoBase": 11.82
            },
            {
                "nome": "Finalop",
                "precoBase": 92.47
            },
            {
                "nome": "Finastil",
                "precoBase": 136.64
            }
        ],
        "precoReferencia": 188.48,
        "sinonimias": []
    },
    {
        "id": "med-00406",
        "nome": "Disp h",
        "principioAtivo": "Flavonóides Expressos em Hesperidina;diosmina",
        "descricao": "Vasoprotetores sistêmicos",
        "apresentacoes": [
            "(900 + 100) MG COM REV CT BL AL PLAS PCTFE TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Perivasc",
                "precoBase": 30.92
            },
            {
                "nome": "Hismerid",
                "precoBase": 36.39
            },
            {
                "nome": "Diovases",
                "precoBase": 39.81
            },
            {
                "nome": "Passare",
                "precoBase": 39.81
            },
            {
                "nome": "Flavenos",
                "precoBase": 56.19
            },
            {
                "nome": "Dhivas",
                "precoBase": 60.22
            }
        ],
        "precoReferencia": 259.72,
        "sinonimias": []
    },
    {
        "id": "med-00407",
        "nome": "Zoltec",
        "principioAtivo": "Fluconazol",
        "descricao": "Agentes sistêmicos para infecções fúngicas",
        "apresentacoes": [
            "100 MG CAP DURA CT  BL AL PLAS TRANS X 8",
            "150 MG CAP DURA CT BL AL PLAS TRANS X 1",
            "150 MG CAP DURA CT BL AL PLAS TRANS X 2"
        ],
        "genericos": [
            {
                "nome": "Fluconazol",
                "precoBase": 12.24
            },
            {
                "nome": "Flucol",
                "precoBase": 13.12
            },
            {
                "nome": "Fluconid",
                "precoBase": 14.91
            },
            {
                "nome": "Flucovil",
                "precoBase": 15.95
            },
            {
                "nome": "Fueblo",
                "precoBase": 18.7
            },
            {
                "nome": "Flucolcid",
                "precoBase": 23.6
            }
        ],
        "precoReferencia": 113.47,
        "sinonimias": []
    },
    {
        "id": "med-00408",
        "nome": "Rohypnol",
        "principioAtivo": "Flunitrazepam",
        "descricao": "Hipnóticos e sedativos não barbitúricos puros",
        "apresentacoes": [
            "1 MG COM REV CT BL AL PLAS PVC/PE/PVDC TRANS X 20",
            "1 MG COM REV CT BL AL PLAS PVC/PE/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Rohydorm",
                "precoBase": 20.22
            }
        ],
        "precoReferencia": 23.14,
        "sinonimias": []
    },
    {
        "id": "med-00409",
        "nome": "Elotin",
        "principioAtivo": "Fluocinolona Acetonida;sulfato de Neomicina;sulfato de Polimixina B;cloridrato de Lidocaina",
        "descricao": "Associações otológicas corticosteróides com antiinfecciosos",
        "apresentacoes": [
            "0,275 MG/ML + 3,85 MG/ML + 11.000 UI/ML + 20 MG/ML SOL GOT OTO CX 50 FR GOT PLAS TRANS X 5 ML (EMB HOSP)"
        ],
        "genericos": [
            {
                "nome": "Otomixyn",
                "precoBase": 12.09
            },
            {
                "nome": "Fluocinolona Acetonida + Sulfato de Polimixina b + Sulfato de Neomicina + Cloridrato de Lidocaina",
                "precoBase": 14.56
            },
            {
                "nome": "Fluocinolona Acetonida + Sulfato de Polimixina b + Sulfato de Neomicina + Cloridrato de Lidocaína",
                "precoBase": 15.16
            },
            {
                "nome": "Otosylase",
                "precoBase": 19.93
            }
        ],
        "precoReferencia": 333.99,
        "sinonimias": []
    },
    {
        "id": "med-00410",
        "nome": "Hidroquinona+ Tretinoina + Fluocinolona Acetonida",
        "principioAtivo": "Fluocinolona Acetonida;tretinoína;hidroquinona",
        "descricao": "Outras preparações dermatologicas",
        "apresentacoes": [
            "40 MG/G + 0,5 MG/G +0,1 MG/G  CREM DERM CT BG AL X 15 G ",
            "40 MG/G + 0,5 MG/G +0,1 MG/G CREM DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Hormoskin",
                "precoBase": 69.37
            },
            {
                "nome": "Trinulox",
                "precoBase": 115.0
            },
            {
                "nome": "Suavicid",
                "precoBase": 118.49
            }
        ],
        "precoReferencia": 153.45,
        "sinonimias": []
    },
    {
        "id": "med-00411",
        "nome": "Efurix",
        "principioAtivo": "Fluoruracila",
        "descricao": "Todos os outros antineoplásicos",
        "apresentacoes": [
            "50 MG/G CREM DERM CT BG AL X 15 G "
        ],
        "genericos": [
            {
                "nome": "Fluoruracila",
                "precoBase": 5.72
            }
        ],
        "precoReferencia": 26.71,
        "sinonimias": []
    },
    {
        "id": "med-00412",
        "nome": "Targus",
        "principioAtivo": "Flurbiprofeno",
        "descricao": "Antiinflamatórios oftalmológicos não esteroidais",
        "apresentacoes": [
            "40 MG (0,3 MG/CM2) ADES TRANS CT 1 SACH X 5 ADES + 1 BAND",
            "40 MG (0,3 MG/CM2) ADES TRANS CT 2 SACH X 5 ADES + 1 BAND"
        ],
        "genericos": [
            {
                "nome": "Flurbiprofeno",
                "precoBase": 13.63
            },
            {
                "nome": "Strepsils",
                "precoBase": 18.39
            },
            {
                "nome": "Sabivarnex",
                "precoBase": 56.65
            }
        ],
        "precoReferencia": 56.65,
        "sinonimias": []
    },
    {
        "id": "med-00413",
        "nome": "Flutamida",
        "principioAtivo": "Flutamida",
        "descricao": "Hormônios antiandrogênicos citostáticos",
        "apresentacoes": [
            "250 MG COM CT BL AL PLAS TRANS X 20 "
        ],
        "genericos": [
            {
                "nome": "Teflut",
                "precoBase": 187.7
            }
        ],
        "precoReferencia": 198.17,
        "sinonimias": []
    },
    {
        "id": "med-00414",
        "nome": "Corticoidex",
        "principioAtivo": "Fosfato Dissódico de Dexametasona",
        "descricao": "Corticosteróides injetáveis puros",
        "apresentacoes": [
            "4 MG/ML SOL INJ CX 50 AMP VD TRANS X 2,5 ML"
        ],
        "genericos": [
            {
                "nome": "Decadron Injetável",
                "precoBase": 19.01
            },
            {
                "nome": "Unidexa",
                "precoBase": 453.46
            },
            {
                "nome": "Fosfato Dissódico de Dexametasona",
                "precoBase": 575.18
            }
        ],
        "precoReferencia": 920.56,
        "sinonimias": []
    },
    {
        "id": "med-00415",
        "nome": "Vigadexa",
        "principioAtivo": "Fosfato Dissódico de Dexametasona;cloridrato de Moxifloxacino",
        "descricao": "Associações oftalmológicas corticosteróides com antiinfecciosos",
        "apresentacoes": [
            "(5 + 1) MG/ML SOL OFT CT FR GOT PLAS PEBD OPC X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Zanty Duo",
                "precoBase": 53.76
            },
            {
                "nome": "Facoba®",
                "precoBase": 55.12
            }
        ],
        "precoReferencia": 55.08,
        "sinonimias": []
    },
    {
        "id": "med-00416",
        "nome": "Predsim Odt",
        "principioAtivo": "Fosfato Sódico de Prednisolona",
        "descricao": "Corticosteróides orais puros",
        "apresentacoes": [
            "5 MG COM ORODISP CT BL AL AL X 10",
            "5 MG COM ORODISP CT BL AL AL X 20"
        ],
        "genericos": [
            {
                "nome": "Predsim",
                "precoBase": 14.29
            },
            {
                "nome": "Fosfato Sódico de Prednisolona",
                "precoBase": 16.54
            },
            {
                "nome": "Prosolin",
                "precoBase": 19.89
            },
            {
                "nome": "Prelone",
                "precoBase": 23.6
            },
            {
                "nome": "Zastat",
                "precoBase": 23.64
            },
            {
                "nome": "Fosfato Sodico de Prednisolona",
                "precoBase": 24.11
            }
        ],
        "precoReferencia": 14.34,
        "sinonimias": []
    },
    {
        "id": "med-00417",
        "nome": "Codein",
        "principioAtivo": "Fosfato de Codeína",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "3 MG/ML SOL OR CT FR VD AMB X 120 ML + SER DOS",
            "30 MG COM CT BL AL PLAS  PVC/PVDC TRANS X 30",
            "30 MG COM CT BL AL PLAS PVC/PVDC TRANS X 12",
            "60 MG COM CT BL AL PLAS PVC/PVDC TRANS X 12"
        ],
        "genericos": [
            {
                "nome": "Cod",
                "precoBase": 27.9
            }
        ],
        "precoReferencia": 26.67,
        "sinonimias": []
    },
    {
        "id": "med-00418",
        "nome": "Codein",
        "principioAtivo": "Fosfato de Codeína Hemi-hidratado",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "30 MG COM CT BL AL PLAS  PVC/PE/PVDC TRANS X 30",
            "30 MG COM CT BL AL PLAS PVC/PE/PVDC TRANS X 12",
            "60 MG COM CT BL AL PLAS PVC/PE/PVDC TRANS X 12",
            "60 MG COM CT BL AL PLAS PVC/PE/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Fosfato de Codeína",
                "precoBase": 16.9
            },
            {
                "nome": "Cod",
                "precoBase": 27.9
            }
        ],
        "precoReferencia": 26.67,
        "sinonimias": []
    },
    {
        "id": "med-00419",
        "nome": "Codex",
        "principioAtivo": "Fosfato de Codeína Hemi-hidratado;paracetamol",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "(500,0 + 30,0) MG COM CT BL  AL PLAS PVC TRANS X 12",
            "(500,0 + 30,0) MG COM CT BL  AL PLAS PVC TRANS X 36"
        ],
        "genericos": [
            {
                "nome": "Paracetamol + Fosfato de Codeína",
                "precoBase": 14.3
            },
            {
                "nome": "Paracetamol + Fosfato de Codeina",
                "precoBase": 28.59
            }
        ],
        "precoReferencia": 39.22,
        "sinonimias": []
    },
    {
        "id": "med-00420",
        "nome": "Tamiflu",
        "principioAtivo": "Fosfato de Oseltamivir",
        "descricao": "Antivirais para influenza",
        "apresentacoes": [
            "30 MG CAP DURA CT BL AL PLAS TRANS X 10 ",
            "45 MG CAP DURA CT BL AL PLAS TRANS X 10",
            "75 MG CAP DURA CT BL AL PLAS TRANS X 10 "
        ],
        "genericos": [
            {
                "nome": "Fosfato de Oseltamivir",
                "precoBase": 96.05
            },
            {
                "nome": "Oselflu",
                "precoBase": 103.08
            },
            {
                "nome": "Oselguard",
                "precoBase": 111.03
            },
            {
                "nome": "Uniflu",
                "precoBase": 112.09
            },
            {
                "nome": "Globoflu",
                "precoBase": 112.82
            },
            {
                "nome": "Gripxia",
                "precoBase": 115.1
            }
        ],
        "precoReferencia": 158.61,
        "sinonimias": []
    },
    {
        "id": "med-00421",
        "nome": "Fosfato de Sitagliptina",
        "principioAtivo": "Fosfato de Sitagliptina",
        "descricao": "Antidiabéticos inibidores dpp-iv  puros",
        "apresentacoes": [
            "100 MG COM REV  CT  BL  AL AL X 30",
            "100 MG COM REV CT BL AL AL X 30",
            "100 MG COM REV CT BL AL AL X 60",
            "25  MG  COM  REV CT BL  AL  AL  X 30"
        ],
        "genericos": [
            {
                "nome": "Sitar",
                "precoBase": 31.84
            }
        ],
        "precoReferencia": 57.82,
        "sinonimias": []
    },
    {
        "id": "med-00422",
        "nome": "Januvia",
        "principioAtivo": "Fosfato de Sitagliptina Monoidratado",
        "descricao": "Antidiabéticos inibidores dpp-iv  puros",
        "apresentacoes": [
            "100 MG COM REV CT BL AL AL X 14",
            "100 MG COM REV CT BL AL AL X 28 ",
            "100 MG COM REV CT BL AL PVC/PE/PVDC X 14",
            "100 MG COM REV CT BL AL PVC/PE/PVDC X 28"
        ],
        "genericos": [
            {
                "nome": "Fosfato de Sitagliptina Monoidratado",
                "precoBase": 19.52
            },
            {
                "nome": "Fosfato de Sitagliptina",
                "precoBase": 58.55
            },
            {
                "nome": "Sitglu",
                "precoBase": 64.41
            },
            {
                "nome": "Nimegon",
                "precoBase": 180.4
            }
        ],
        "precoReferencia": 90.23,
        "sinonimias": []
    },
    {
        "id": "med-00423",
        "nome": "Monuril",
        "principioAtivo": "Fosfomicina Trometamol",
        "descricao": "Todos os outros antibióticos",
        "apresentacoes": [
            "5,631 G GRAN CT 2  ENV AL PE X 8 G",
            "5,631 G GRAN CT ENV AL PE X 8 G"
        ],
        "genericos": [
            {
                "nome": "Fosfomicina Trometamol",
                "precoBase": 45.76
            },
            {
                "nome": "Myfos",
                "precoBase": 71.39
            },
            {
                "nome": "Cystoren",
                "precoBase": 75.26
            },
            {
                "nome": "Vizuria",
                "precoBase": 76.63
            },
            {
                "nome": "Fosmoryl",
                "precoBase": 76.64
            },
            {
                "nome": "Traturil",
                "precoBase": 77.18
            }
        ],
        "precoReferencia": 77.59,
        "sinonimias": []
    },
    {
        "id": "med-00424",
        "nome": "Fumarato de Cetotifeno",
        "principioAtivo": "Fumarato de Cetotifeno",
        "descricao": "Antiasmáticos/dpoc antiinflamatorios não esteroidais respiratórios sistêmicos",
        "apresentacoes": [
            "0,2 MG/ML XPE CT FR PLAS OPC X 120 ML + COP",
            "0,2 MG/ML XPE CX 50 FR PLAS AMB X 120 ML + 50 COP",
            "1 MG/ML SOL OR CT FR GOT VD AMB X 30 ML"
        ],
        "genericos": [
            {
                "nome": "Octifen",
                "precoBase": 39.31
            },
            {
                "nome": "Asmofen",
                "precoBase": 48.85
            }
        ],
        "precoReferencia": 62.03,
        "sinonimias": []
    },
    {
        "id": "med-00425",
        "nome": "Tecfidera",
        "principioAtivo": "Fumarato de Dimetila",
        "descricao": "Produtos para esclerose múltipla",
        "apresentacoes": [
            "120 MG CAP DURA LIB RETARD CT BL AL PLAS OPC X 14",
            "240 MG CAP DURA LIB RETARD CT BL AL PLAS OPC X 56"
        ],
        "genericos": [
            {
                "nome": "Fumarato de Dimetila",
                "precoBase": 779.07
            },
            {
                "nome": "Dyfucert",
                "precoBase": 814.91
            }
        ],
        "precoReferencia": 1286.3,
        "sinonimias": []
    },
    {
        "id": "med-00426",
        "nome": "Fluir",
        "principioAtivo": "Fumarato de Formoterol",
        "descricao": "Antiasmáticos/dpoc agonistas b2 longa ação inalante",
        "apresentacoes": [
            "12 MCG CAP DURA INAL OR CT BL AL AL X 20",
            "12 MCG CAP DURA INAL OR CT BL AL AL X 20 + INAL",
            "12 MCG CAP DURA INAL OR CT BL AL AL X 30",
            "12 MCG CAP DURA INAL OR CT BL AL AL X 30 + INAL"
        ],
        "genericos": [
            {
                "nome": "Formocaps",
                "precoBase": 40.14
            }
        ],
        "precoReferencia": 47.17,
        "sinonimias": []
    },
    {
        "id": "med-00427",
        "nome": "Dermotil Fusid",
        "principioAtivo": "Furoato de Mometasona",
        "descricao": "Corticoesteróides associados a antibacterianos",
        "apresentacoes": [
            "1 MG/G + 20 MG/G CREM DERM CT BG AL X 10 G"
        ],
        "genericos": [
            {
                "nome": "Furoato de Mometasona",
                "precoBase": 41.82
            },
            {
                "nome": "Topison",
                "precoBase": 45.02
            },
            {
                "nome": "Oximax",
                "precoBase": 59.12
            },
            {
                "nome": "M-lix",
                "precoBase": 76.67
            },
            {
                "nome": "Nites",
                "precoBase": 132.48
            }
        ],
        "precoReferencia": 82.93,
        "sinonimias": []
    },
    {
        "id": "med-00428",
        "nome": "Nasonex®",
        "principioAtivo": "Furoato de Mometasona Monoidratado",
        "descricao": "Corticosteróides nasais sem antiinfecciosos",
        "apresentacoes": [
            "0,5 MG/G SUS SPR NAS CT FR SPR PLAS PEAD OPC X 120 ACIONAMENTOS",
            "0,5 MG/G SUS SPR NAS CT FR SPR PLAS PEAD OPC X 60 ACIONAMENTOS"
        ],
        "genericos": [
            {
                "nome": "Furoato de Mometasona",
                "precoBase": 39.6
            },
            {
                "nome": "Momate",
                "precoBase": 49.08
            },
            {
                "nome": "Ventus",
                "precoBase": 69.1
            },
            {
                "nome": "Monax",
                "precoBase": 69.1
            },
            {
                "nome": "Amome",
                "precoBase": 69.77
            }
        ],
        "precoReferencia": 87.11,
        "sinonimias": []
    },
    {
        "id": "med-00429",
        "nome": "Lasix",
        "principioAtivo": "Furosemida",
        "descricao": "Diuréticos de alça puros",
        "apresentacoes": [
            "10 MG/ML SOL INJ CT 5 AMP VD AMB X 2 ML",
            "40 MG COM CT BL AL PLAS TRANS X 20 "
        ],
        "genericos": [
            {
                "nome": "Furosemida",
                "precoBase": 1.93
            },
            {
                "nome": "Furosetron",
                "precoBase": 2.12
            },
            {
                "nome": "Neosemid",
                "precoBase": 13.41
            },
            {
                "nome": "Diuremida",
                "precoBase": 16.79
            }
        ],
        "precoReferencia": 16.06,
        "sinonimias": []
    },
    {
        "id": "med-00430",
        "nome": "Gapem",
        "principioAtivo": "Gabapentina",
        "descricao": "Gabapentinoides",
        "apresentacoes": [
            "300 MG CAP DURA CT BL AL PLAS TRANS X 15",
            "300 MG CAP DURA CT BL AL PLAS TRANS X 30",
            "300 MG CAP DURA CT BL AL PLAS TRANS X 60",
            "400 MG CAP DURA CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Gabaneurin",
                "precoBase": 35.89
            },
            {
                "nome": "Gabapentina",
                "precoBase": 39.74
            },
            {
                "nome": "Empak",
                "precoBase": 47.79
            }
        ],
        "precoReferencia": 80.07,
        "sinonimias": []
    },
    {
        "id": "med-00431",
        "nome": "Zymar",
        "principioAtivo": "Gatifloxacino",
        "descricao": "Antiinfeccios oftalmológicos",
        "apresentacoes": [
            "3 MG/ML SOL OFT CT FR PLAS OPC GOT X 5 ML",
            "5 MG/ML SOL OFT CT FR PLAS OPC GOT X 3 ML",
            "5 MG/ML SOL OFT CT FR PLAS OPC GOT X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Orbiflox",
                "precoBase": 55.89
            }
        ],
        "precoReferencia": 56.46,
        "sinonimias": []
    },
    {
        "id": "med-00432",
        "nome": "Iressa",
        "principioAtivo": "Gefitinibe",
        "descricao": "Inibidores preoteína kinase antineoplásicos, egfr",
        "apresentacoes": [
            "250 MG COM REV CT ENV X BL AL/PLAS TRANSP X 30"
        ],
        "genericos": [
            {
                "nome": "Gefitinibe",
                "precoBase": 5180.25
            },
            {
                "nome": "Pulge",
                "precoBase": 5559.29
            },
            {
                "nome": "Timb",
                "precoBase": 8445.82
            },
            {
                "nome": "Tykiticip",
                "precoBase": 8457.15
            },
            {
                "nome": "Kigefo",
                "precoBase": 8552.73
            }
        ],
        "precoReferencia": 8552.73,
        "sinonimias": []
    },
    {
        "id": "med-00433",
        "nome": "Tanakan",
        "principioAtivo": "Ginkgo Biloba l.",
        "descricao": "Vasoterapêuticos cerebrais e periféricos, excluindo antoagonistas de cálcio com ação cerebral",
        "apresentacoes": [
            "120 MG COM REV CT BL AL PLAS PVC/PVDC INC X 20",
            "120 MG COM REV CT BL AL PLAS PVC/PVDC INC X 30",
            "80 MG COM REV CT BL AL PLAS PVC/PVDC INC X 20",
            "80 MG COM REV CT BL AL PLAS PVC/PVDC INC X 30"
        ],
        "genericos": [
            {
                "nome": "Ginkgo Catarinense",
                "precoBase": 25.61
            },
            {
                "nome": "Ginkomed",
                "precoBase": 39.55
            },
            {
                "nome": "Ginkocaps",
                "precoBase": 40.39
            },
            {
                "nome": "Equitam",
                "precoBase": 40.85
            },
            {
                "nome": "Ginkgo Vidora",
                "precoBase": 44.78
            },
            {
                "nome": "Ginkgo Biloba Laboratórios Osório de Moraes",
                "precoBase": 57.0
            }
        ],
        "precoReferencia": 160.53,
        "sinonimias": []
    },
    {
        "id": "med-00434",
        "nome": "Daonil",
        "principioAtivo": "Glibenclamida",
        "descricao": "Antidiabéticos sulfonilouréias puros",
        "apresentacoes": [
            "5 MG COM CT  BL AL PLAS TRANS X 30 "
        ],
        "genericos": [
            {
                "nome": "Gliconil",
                "precoBase": 13.8
            },
            {
                "nome": "Glicamin",
                "precoBase": 14.6
            },
            {
                "nome": "Glibenclamida",
                "precoBase": 14.93
            },
            {
                "nome": "Glionil",
                "precoBase": 15.7
            }
        ],
        "precoReferencia": 26.47,
        "sinonimias": []
    },
    {
        "id": "med-00435",
        "nome": "Diamicron",
        "principioAtivo": "Gliclazida",
        "descricao": "Antidiabéticos sulfonilouréias puros",
        "apresentacoes": [
            "30 MG COM LIB PROL CT BL AL PLAS PVC TRANS X 30 ",
            "30 MG COM LIB PROL CT BL AL PLAS PVC TRANS X 60",
            "60 MG COM LIB PROL CT BL AL PLAS PVC TRANS X 15 ",
            "60 MG COM LIB PROL CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Azukon mr",
                "precoBase": 20.91
            },
            {
                "nome": "Diatarcom mr",
                "precoBase": 27.29
            },
            {
                "nome": "Clazi xr",
                "precoBase": 27.33
            },
            {
                "nome": "Dagli",
                "precoBase": 27.33
            },
            {
                "nome": "Gliclazida",
                "precoBase": 30.28
            },
            {
                "nome": "Dicazid mr",
                "precoBase": 32.72
            }
        ],
        "precoReferencia": 54.74,
        "sinonimias": []
    },
    {
        "id": "med-00436",
        "nome": "Gliansor",
        "principioAtivo": "Glimepirida",
        "descricao": "Antidiabéticos sulfonilouréias puros",
        "apresentacoes": [
            "2MG COM CT BL AL PLAS OPC X 30",
            "4MG COM CT BL AL PLAS OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Glimepirida",
                "precoBase": 5.44
            },
            {
                "nome": "Betes",
                "precoBase": 28.27
            },
            {
                "nome": "Glimepil",
                "precoBase": 42.33
            }
        ],
        "precoReferencia": 57.15,
        "sinonimias": []
    },
    {
        "id": "med-00437",
        "nome": "Hizofito",
        "principioAtivo": "Glycine Max (l.) Merr.",
        "descricao": "Moduladores seletivos do receptor de estrogênio",
        "apresentacoes": [
            "150 MG CAP DURA CT BL AL PLAS PVC TRANS X 30 "
        ],
        "genericos": [
            {
                "nome": "Buona",
                "precoBase": 59.55
            },
            {
                "nome": "Soyfemme",
                "precoBase": 92.1
            },
            {
                "nome": "Soynati",
                "precoBase": 92.86
            },
            {
                "nome": "Isoflavine",
                "precoBase": 95.42
            }
        ],
        "precoReferencia": 116.51,
        "sinonimias": []
    },
    {
        "id": "med-00438",
        "nome": "Xarope Vick",
        "principioAtivo": "Guaifenesina",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "13,3 MG/ML XPE FR PLAS TRANS X 120 ML ",
            "16 MG/ML XPE FR PLAS TRANS X 100 ML ( MEL) "
        ],
        "genericos": [
            {
                "nome": "Frenotosse",
                "precoBase": 24.03
            },
            {
                "nome": "Expectovic",
                "precoBase": 24.99
            },
            {
                "nome": "Expectoflui",
                "precoBase": 27.55
            },
            {
                "nome": "Xarope Cimetosse",
                "precoBase": 29.91
            },
            {
                "nome": "Glyteol",
                "precoBase": 29.97
            },
            {
                "nome": "Guaifenesina",
                "precoBase": 36.11
            }
        ],
        "precoReferencia": 45.23,
        "sinonimias": []
    },
    {
        "id": "med-00439",
        "nome": "Haldol",
        "principioAtivo": "Haloperidol",
        "descricao": "Antipsicóticos convencionais",
        "apresentacoes": [
            "1 MG COM CT BL AL PLAS TRANS X 20",
            "2 MG/ML SOL GOT OR CT FR GOT PLAS OPC X 30 ML",
            "5 MG COM CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Haloperidol",
                "precoBase": 8.08
            },
            {
                "nome": "Halo",
                "precoBase": 9.62
            },
            {
                "nome": "Uni Haloper",
                "precoBase": 77.89
            }
        ],
        "precoReferencia": 9.41,
        "sinonimias": []
    },
    {
        "id": "med-00440",
        "nome": "Permear",
        "principioAtivo": "Harpagophytum Procumbens Dc. ex Meissn.",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "300 MG COM REV LIB RETARD CT BL AL PLAS TRANS X 20",
            "300 MG COM REV LIB RETARD CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Arpadol",
                "precoBase": 121.12
            },
            {
                "nome": "Arpynflan",
                "precoBase": 127.68
            }
        ],
        "precoReferencia": 172.85,
        "sinonimias": []
    },
    {
        "id": "med-00441",
        "nome": "Flyare",
        "principioAtivo": "Hedera Helix (hera)",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "7 MG/ML XPE CT FR VD AMB X 100ML + COP "
        ],
        "genericos": [
            {
                "nome": "Liberaflux",
                "precoBase": 13.94
            },
            {
                "nome": "Brondelix",
                "precoBase": 31.59
            },
            {
                "nome": "Hedra Expec",
                "precoBase": 32.34
            },
            {
                "nome": "Blumel Hedera",
                "precoBase": 39.9
            },
            {
                "nome": "Abrilar",
                "precoBase": 57.23
            }
        ],
        "precoReferencia": 59.7,
        "sinonimias": []
    },
    {
        "id": "med-00442",
        "nome": "Torante",
        "principioAtivo": "Hedera Helix l.",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "15 MG/ML XPE CT FR VD AMB X 100 ML + COP",
            "15 MG/ML XPE CT FR VD AMB X 200 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Hederax",
                "precoBase": 26.84
            },
            {
                "nome": "Resplix",
                "precoBase": 27.45
            },
            {
                "nome": "Expulsatox",
                "precoBase": 29.98
            },
            {
                "nome": "Hederaflux",
                "precoBase": 30.12
            },
            {
                "nome": "Hedera Catarinense",
                "precoBase": 30.73
            },
            {
                "nome": "Resfefito",
                "precoBase": 31.08
            }
        ],
        "precoReferencia": 69.26,
        "sinonimias": []
    },
    {
        "id": "med-00443",
        "nome": "Concor",
        "principioAtivo": "Hemifumarato de Bisoprolol",
        "descricao": "Betabloqueadores puros",
        "apresentacoes": [
            "1,25 MG COM REV CT BL AL AL X 14",
            "1,25 MG COM REV CT BL AL AL X 20",
            "1,25 MG COM REV CT BL AL AL X 28",
            "1,25 MG COM REV CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Laio",
                "precoBase": 19.55
            },
            {
                "nome": "Bizo",
                "precoBase": 20.21
            },
            {
                "nome": "Hemifumarato de Bisoprolol",
                "precoBase": 24.33
            },
            {
                "nome": "Iccor",
                "precoBase": 30.42
            },
            {
                "nome": "Concárdio",
                "precoBase": 30.45
            }
        ],
        "precoReferencia": 51.55,
        "sinonimias": []
    },
    {
        "id": "med-00444",
        "nome": "Quetipin so",
        "principioAtivo": "Hemifumarato de Quetiapina",
        "descricao": "Antipsicóticos atípicos",
        "apresentacoes": [
            "12,5 MG/ML PO SUS OR CT FR PLAS PEAD OPC + DIL FR VD AMB X 60 ML + SER DOS",
            "25 MG/ML PO SUS OR CT FR PLAS PEAD OPC + DIL FR VD AMB X 60 ML + SER DOS"
        ],
        "genericos": [
            {
                "nome": "Neotiapim",
                "precoBase": 32.44
            },
            {
                "nome": "Quet",
                "precoBase": 37.94
            },
            {
                "nome": "Quetipin",
                "precoBase": 49.11
            },
            {
                "nome": "Hemifumarato de Quetiapina",
                "precoBase": 51.62
            },
            {
                "nome": "Quet xr",
                "precoBase": 57.19
            },
            {
                "nome": "Quepsia lp",
                "precoBase": 57.19
            }
        ],
        "precoReferencia": 178.43,
        "sinonimias": []
    },
    {
        "id": "med-00445",
        "nome": "Xylestesin Com Norepinefrina",
        "principioAtivo": "Hemitartarato de Norepinefrina;cloridrato de Lidocaina",
        "descricao": "Anestésicos locais injetáveis odontológicos",
        "apresentacoes": [
            "20 MG/ML + 0,04 MG/ML SOL INJ CX 50 CARP PLAS OPC X 1,8 ML USO PROFISSIONAL"
        ],
        "genericos": [
            {
                "nome": "Lidostesim",
                "precoBase": 221.4
            }
        ],
        "precoReferencia": 298.95,
        "sinonimias": []
    },
    {
        "id": "med-00446",
        "nome": "Exelon",
        "principioAtivo": "Hemitartarato de Rivastigmina",
        "descricao": "Produtos antialzheimer, inibidores da colinesterase",
        "apresentacoes": [
            "1,5 MG CAP DURA CT BL AL PVC/PE/PVDC X 28",
            "3,0 MG CAP DURA CT BL AL PVC/PE/PVDC X 28",
            "4,5 MG CAP DURA CT BL AL PVC/PE/PVDC X 28",
            "6,0 MG CAP DURA CT BL AL PVC/PE/PVDC X 28"
        ],
        "genericos": [
            {
                "nome": "Hemitartarato de Rivastigmina",
                "precoBase": 186.13
            },
            {
                "nome": "Vastigma",
                "precoBase": 370.61
            }
        ],
        "precoReferencia": 327.6,
        "sinonimias": []
    },
    {
        "id": "med-00447",
        "nome": "Patz Gts",
        "principioAtivo": "Hemitartarato de Zolpidem",
        "descricao": "Hipnóticos e sedativos não barbitúricos puros",
        "apresentacoes": [
            "10 MG/ML SOL GOT OR CT FR GOT PLAS PET AMB X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Hemitartarato de Zolpidem",
                "precoBase": 17.3
            },
            {
                "nome": "Patz cr",
                "precoBase": 27.33
            },
            {
                "nome": "Noctiden",
                "precoBase": 39.34
            },
            {
                "nome": "Zoaf",
                "precoBase": 40.29
            },
            {
                "nome": "Nuit Long xr",
                "precoBase": 46.36
            },
            {
                "nome": "Insonox",
                "precoBase": 50.02
            }
        ],
        "precoReferencia": 202.38,
        "sinonimias": []
    },
    {
        "id": "med-00448",
        "nome": "Hepamax-s",
        "principioAtivo": "Heparina Sódica Suína",
        "descricao": "Heparinas não fracionada",
        "apresentacoes": [
            "5000 UI/ML SOL INJ CT C/ 1 FA VD TRANS X 10 ML",
            "5000 UI/ML SOL INJ CX C/ 100 FA VD TRANS X 10 ML",
            "5000 UI/ML SOL INJ CX C/ 25 FA VD TRANS X 10 ML",
            "5000 UI/ML SOL INJ CX C/ 25 FA VD TRANS X 5 ML "
        ],
        "genericos": [
            {
                "nome": "Trombofob Gel",
                "precoBase": 46.31
            }
        ],
        "precoReferencia": 142.75,
        "sinonimias": []
    },
    {
        "id": "med-00449",
        "nome": "Diosmin Sdu",
        "principioAtivo": "Hesperidina;diosmina",
        "descricao": "Vasoprotetores sistêmicos",
        "apresentacoes": [
            "900 MG + 100 MG GRAN CT 15 ENV PAP/AL/PLAS PE X 5 G (SABOR LARANJA/LIMÃO)",
            "900 MG + 100 MG GRAN CT 30 ENV PAP/AL/PLAS PE X 5 G (SABOR ABACAXI)",
            "900 MG + 100 MG GRAN CT 30 ENV PAP/AL/PLAS PE X 5 G (SABOR LARANJA/LIMÃO)",
            "900 MG + 100 MG GRAN CT 7 ENV PAP/AL/PLAS PE X 5 G (SABOR ABACAXI)"
        ],
        "genericos": [
            {
                "nome": "Diosmin",
                "precoBase": 43.25
            },
            {
                "nome": "Venoxide",
                "precoBase": 43.28
            },
            {
                "nome": "Biovarixon",
                "precoBase": 57.8
            },
            {
                "nome": "Dioplex dh",
                "precoBase": 58.88
            },
            {
                "nome": "Daflon",
                "precoBase": 65.41
            },
            {
                "nome": "Waryz",
                "precoBase": 67.23
            }
        ],
        "precoReferencia": 56.33,
        "sinonimias": []
    },
    {
        "id": "med-00450",
        "nome": "Euflexxa",
        "principioAtivo": "Hialuronato de Sódio",
        "descricao": "Todos os outros fármacos com ação músculo-esquelética",
        "apresentacoes": [
            "10 MG/ML SOL INJ CT 3 SER PRENC VD INC X 2 ML"
        ],
        "genericos": [
            {
                "nome": "Laxime",
                "precoBase": 37.2
            },
            {
                "nome": "Lunah",
                "precoBase": 53.74
            },
            {
                "nome": "Hiluropt",
                "precoBase": 56.19
            },
            {
                "nome": "Hylo-comod",
                "precoBase": 110.59
            },
            {
                "nome": "Hylo-gel",
                "precoBase": 125.05
            },
            {
                "nome": "Polireumin",
                "precoBase": 675.9
            }
        ],
        "precoReferencia": 1545.48,
        "sinonimias": []
    },
    {
        "id": "med-00451",
        "nome": "Clorana",
        "principioAtivo": "Hidroclorotiazida",
        "descricao": "Diuréticos tiazidas e análogos puros",
        "apresentacoes": [
            "25 MG COM CT BL AL PLAS TRANS X 30",
            "50 MG COM CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Hidroclorotiazida",
                "precoBase": 5.02
            },
            {
                "nome": "Hidroless",
                "precoBase": 6.18
            },
            {
                "nome": "Diurezin",
                "precoBase": 9.47
            },
            {
                "nome": "Diurix",
                "precoBase": 13.33
            }
        ],
        "precoReferencia": 16.36,
        "sinonimias": []
    },
    {
        "id": "med-00452",
        "nome": "Atacand Hct",
        "principioAtivo": "Hidroclorotiazida;candesartana Cilexetila",
        "descricao": "Antagonistas da angiotensina ii associados a antihipertensivos (c2) e/ou diuréticos",
        "apresentacoes": [
            "16 MG + 12,5 MG COM CT  BL AL PLAS TRANS X 10",
            "16 MG + 12,5 MG COM CT  BL AL PLAS TRANS X 30",
            "8 MG + 12,5 MG COM CT  BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Venzer Hct",
                "precoBase": 41.17
            },
            {
                "nome": "Candesartana Cilexetila+hidroclorotiazida",
                "precoBase": 42.91
            },
            {
                "nome": "Candesartana Cilexetila + Hidroclorotiazida",
                "precoBase": 131.15
            }
        ],
        "precoReferencia": 76.56,
        "sinonimias": []
    },
    {
        "id": "med-00453",
        "nome": "Concor Hct",
        "principioAtivo": "Hidroclorotiazida;hemifumarato de Bisoprolol",
        "descricao": "Betabloqueadores associados com antihipertensivos e/ou diuréticos",
        "apresentacoes": [
            "(10,0 + 25,0) MG COM REV CT BL AL AL X 30 ",
            "(5,0 + 12,5) MG COM REV CT BL AL AL X 30 "
        ],
        "genericos": [
            {
                "nome": "Biconcor",
                "precoBase": 116.45
            }
        ],
        "precoReferencia": 151.46,
        "sinonimias": []
    },
    {
        "id": "med-00454",
        "nome": "Benicar Hct",
        "principioAtivo": "Hidroclorotiazida;olmesartana Medoxomila",
        "descricao": "Antagonistas da angiotensina ii associados a antihipertensivos (c2) e/ou diuréticos",
        "apresentacoes": [
            "20 MG + 12,5 MG COM REV CT BL AL/AL X 30 ",
            "20 MG + 12,5 MG COM REV CT BL AL/AL X 7",
            "40 MG + 12,5 MG COM REV CT  BL AL/AL X 7",
            "40 MG + 12,5 MG COM REV CT BL AL/AL X 30   "
        ],
        "genericos": [
            {
                "nome": "Olmesartana Medoxomila+hidroclorotiazida",
                "precoBase": 20.9
            },
            {
                "nome": "Olsar h",
                "precoBase": 25.83
            },
            {
                "nome": "Holmes h",
                "precoBase": 27.49
            },
            {
                "nome": "Olmecor Hct",
                "precoBase": 30.2
            },
            {
                "nome": "Olzicar Hct",
                "precoBase": 30.93
            },
            {
                "nome": "Asea Hct",
                "precoBase": 31.77
            }
        ],
        "precoReferencia": 24.15,
        "sinonimias": []
    },
    {
        "id": "med-00455",
        "nome": "Micardis Hct",
        "principioAtivo": "Hidroclorotiazida;telmisartana",
        "descricao": "Antagonistas da angiotensina ii associados a antihipertensivos (c2) e/ou diuréticos",
        "apresentacoes": [
            "40 MG + 12,5 MG COM CT BL AL/AL X 14",
            "40 MG + 12,5 MG COM CT BL AL/AL X 30",
            "80 MG + 12,5 MG COM CT BL AL/AL X 14",
            "80 MG + 12,5 MG COM CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Telmisartana + Hidroclorotiazida",
                "precoBase": 55.04
            },
            {
                "nome": "Bramicar Hct",
                "precoBase": 81.45
            },
            {
                "nome": "Teld Hct",
                "precoBase": 111.32
            },
            {
                "nome": "Bratelm Hct",
                "precoBase": 113.62
            },
            {
                "nome": "Telmisartana+hidroclorotiazida",
                "precoBase": 147.97
            }
        ],
        "precoReferencia": 124.83,
        "sinonimias": []
    },
    {
        "id": "med-00456",
        "nome": "Diovan Hct",
        "principioAtivo": "Hidroclorotiazida;valsartana",
        "descricao": "Antagonistas da angiotensina ii associados a antihipertensivos (c2) e/ou diuréticos",
        "apresentacoes": [
            "(160,00+12,50) MG COM REV CT BL AL AL X 14",
            "(160,00+12,50) MG COM REV CT BL AL AL X 28",
            "(160,00+25,00) MG COM REV CT BL AL AL X 28",
            "(320,00+12,50) MG COM REV CT BL AL AL X 14  "
        ],
        "genericos": [
            {
                "nome": "Bravan Hct",
                "precoBase": 58.83
            },
            {
                "nome": "Brasart Hct",
                "precoBase": 88.2
            },
            {
                "nome": "Valsartana+hidroclorotiazida",
                "precoBase": 106.84
            },
            {
                "nome": "Valsartana + Hidroclorotiazida",
                "precoBase": 108.98
            }
        ],
        "precoReferencia": 82.32,
        "sinonimias": []
    },
    {
        "id": "med-00457",
        "nome": "Hidrocortisona",
        "principioAtivo": "Hidrocortisona",
        "descricao": "Corticoesteróides tópicos puros",
        "apresentacoes": [
            "10 MG/G POM CT BG AL X 30 G "
        ],
        "genericos": [
            {
                "nome": "Cortisonal",
                "precoBase": 31.51
            }
        ],
        "precoReferencia": 33.44,
        "sinonimias": []
    },
    {
        "id": "med-00458",
        "nome": "Exelon",
        "principioAtivo": "Hidrogenotartarato de Rivastigmina",
        "descricao": "Produtos antialzheimer, inibidores da colinesterase",
        "apresentacoes": [
            "2 MG/ML SOL OR CT FR VD AMB X 120 ML + SER DOS"
        ],
        "genericos": [
            {
                "nome": "Vivencia",
                "precoBase": 176.85
            },
            {
                "nome": "Hidrogenotartarato de Rivastigmina",
                "precoBase": 209.59
            },
            {
                "nome": "Hemitartarato de Rivastigmina",
                "precoBase": 605.79
            }
        ],
        "precoReferencia": 947.23,
        "sinonimias": []
    },
    {
        "id": "med-00459",
        "nome": "Solaquin",
        "principioAtivo": "Hidroquinona",
        "descricao": "Outras preparações dermatologicas",
        "apresentacoes": [
            "40 MG/G CREM DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Hidroquinona",
                "precoBase": 55.2
            },
            {
                "nome": "Cleankinol",
                "precoBase": 59.24
            },
            {
                "nome": "Lumiderm",
                "precoBase": 62.2
            },
            {
                "nome": "Hidropeek",
                "precoBase": 79.64
            },
            {
                "nome": "Claquinona",
                "precoBase": 91.17
            }
        ],
        "precoReferencia": 96.85,
        "sinonimias": []
    },
    {
        "id": "med-00460",
        "nome": "Siklos",
        "principioAtivo": "Hidroxiureia",
        "descricao": "Todos os outros antineoplásicos",
        "apresentacoes": [
            "100 MG COM REV CT FR PLAS PEAD OPC X 60",
            "1000 MG COM REV CT FR PLAS PEAD OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Hidroxiureia",
                "precoBase": 242.47
            },
            {
                "nome": "Hixu",
                "precoBase": 260.21
            },
            {
                "nome": "Leux",
                "precoBase": 400.33
            },
            {
                "nome": "Tepev",
                "precoBase": 400.4
            }
        ],
        "precoReferencia": 386.47,
        "sinonimias": []
    },
    {
        "id": "med-00461",
        "nome": "Drotizin",
        "principioAtivo": "Hidroxizina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "2 MG/ML SOL OR CT FR PLAS PET AMB X 120 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Pergo",
                "precoBase": 53.86
            }
        ],
        "precoReferencia": 57.08,
        "sinonimias": []
    },
    {
        "id": "med-00462",
        "nome": "Gastroliv",
        "principioAtivo": "Hidróxido de Alumínio;carbonato de Cálcio;hidróxido de Magnésio",
        "descricao": "Antiácidos puros",
        "apresentacoes": [
            "(35,6 + 37,0 + 46,0)MG/G PO EFEV DISP 100 SACH AL/POLIET X 5 G (SABOR ABACAXI)",
            "(35,6 + 37,0 + 46,0)MG/G PO EFEV DISP 100 SACH AL/POLIET X 5 G (SABOR LARANJA)",
            "(35,6 + 37,0 + 46,0)MG/G PO EFEV DISP 100 SACH AL/POLIET X 5 G (SABOR LIMÃO)",
            "(35,6 + 37,0 + 46,0)MG/G PO EFEV DISP 50 SACH AL/POLIET X 5 G (SABOR ABACAXI) "
        ],
        "genericos": [
            {
                "nome": "Gastrol",
                "precoBase": 18.98
            },
            {
                "nome": "Estomazil Pastilhas",
                "precoBase": 19.55
            },
            {
                "nome": "Gelmax",
                "precoBase": 20.82
            },
            {
                "nome": "Estomazil",
                "precoBase": 20.99
            },
            {
                "nome": "Gascol Pep",
                "precoBase": 141.35
            },
            {
                "nome": "Gastroftal",
                "precoBase": 164.46
            }
        ],
        "precoReferencia": 171.73,
        "sinonimias": []
    },
    {
        "id": "med-00463",
        "nome": "Simeco Plus",
        "principioAtivo": "Hidróxido de Alumínio;hidróxido de Magnésio;simeticona",
        "descricao": "Antiácidos com antiflatulentos ou carminativos",
        "apresentacoes": [
            "120 MG/ML + 60 MG/ML + 7 MG/ML SUS OR CT FR VD AMB X 240 ML "
        ],
        "genericos": [
            {
                "nome": "Gastrogel",
                "precoBase": 22.98
            },
            {
                "nome": "Gelmax Dim",
                "precoBase": 38.08
            },
            {
                "nome": "Gastrol tc",
                "precoBase": 51.97
            },
            {
                "nome": "Mylanta Plus",
                "precoBase": 52.45
            }
        ],
        "precoReferencia": 66.24,
        "sinonimias": []
    },
    {
        "id": "med-00464",
        "nome": "Afrat",
        "principioAtivo": "Ibandronato de Sódio",
        "descricao": "Bisfosfonatos para osteoporose e alterações relacionadas",
        "apresentacoes": [
            "150 MG COM CT BL AL AL X 1 "
        ],
        "genericos": [
            {
                "nome": "Iban",
                "precoBase": 94.43
            },
            {
                "nome": "Sintezys",
                "precoBase": 108.02
            },
            {
                "nome": "Ibandronato de Sódio",
                "precoBase": 203.2
            }
        ],
        "precoReferencia": 218.03,
        "sinonimias": []
    },
    {
        "id": "med-00465",
        "nome": "Bonviva",
        "principioAtivo": "Ibandronato de Sódio Monoidratado",
        "descricao": "Bisfosfonatos para osteoporose e alterações relacionadas",
        "apresentacoes": [
            "150 MG COM REV CT BL AL/AL X 1 "
        ],
        "genericos": [
            {
                "nome": "Ibandronato de Sódio",
                "precoBase": 93.69
            },
            {
                "nome": "Ibandronato de Sódio Monoidratado",
                "precoBase": 226.04
            },
            {
                "nome": "Ibandronato de Sodio",
                "precoBase": 226.08
            },
            {
                "nome": "Ibanuno",
                "precoBase": 256.92
            },
            {
                "nome": "Edifican",
                "precoBase": 297.49
            },
            {
                "nome": "Osteotec",
                "precoBase": 318.7
            }
        ],
        "precoReferencia": 373.21,
        "sinonimias": []
    },
    {
        "id": "med-00466",
        "nome": "Capsfen",
        "principioAtivo": "Ibuprofeno",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "600 MG CAP MOLE CT BL AL PLAS PVC/PVDC TRANS X 10"
        ],
        "genericos": [
            {
                "nome": "Ibuprofeno",
                "precoBase": 3.81
            },
            {
                "nome": "Ibuglobo",
                "precoBase": 8.67
            },
            {
                "nome": "Ibuvix",
                "precoBase": 17.12
            },
            {
                "nome": "Aludor",
                "precoBase": 18.16
            },
            {
                "nome": "Alivium",
                "precoBase": 20.43
            },
            {
                "nome": "Adlyv",
                "precoBase": 20.66
            }
        ],
        "precoReferencia": 51.01,
        "sinonimias": []
    },
    {
        "id": "med-00467",
        "nome": "Nuromol",
        "principioAtivo": "Ibuprofeno;paracetamol",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "(200,0 + 500,0) MG COM REV CT BL AL PLAS PVC/PVDC OPC X 12",
            "(200,0 + 500,0) MG COM REV CT BL AL PLAS PVC/PVDC OPC X 24",
            "(200,0 + 500,0) MG COM REV CT BL AL PLAS PVC/PVDC OPC X 6"
        ],
        "genericos": [
            {
                "nome": "Dualgi",
                "precoBase": 9.26
            },
            {
                "nome": "Luftafem",
                "precoBase": 17.9
            }
        ],
        "precoReferencia": 17.9,
        "sinonimias": []
    },
    {
        "id": "med-00468",
        "nome": "Ixium",
        "principioAtivo": "Imiquimode",
        "descricao": "Outros produtos tópicos para infecções virais",
        "apresentacoes": [
            "50 MG/ML CREM DERM CT 12 ENV AL/PLAS X 0,25 G"
        ],
        "genericos": [
            {
                "nome": "Modik",
                "precoBase": 155.92
            }
        ],
        "precoReferencia": 360.48,
        "sinonimias": []
    },
    {
        "id": "med-00469",
        "nome": "Natrilix",
        "principioAtivo": "Indapamida",
        "descricao": "Diuréticos tiazidas e análogos puros",
        "apresentacoes": [
            "1,5 MG COM REV LIB PROL CT BL AL AL X 15 ",
            "1,5 MG COM REV LIB PROL CT BL AL AL X 30 ",
            "1,5 MG COM REV LIB PROL CT BL AL AL X 60",
            "2,5 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Flux sr",
                "precoBase": 13.43
            },
            {
                "nome": "Indapamida",
                "precoBase": 34.96
            },
            {
                "nome": "Cirefa",
                "precoBase": 39.41
            },
            {
                "nome": "Indapen sr",
                "precoBase": 42.48
            },
            {
                "nome": "Indatrat sr",
                "precoBase": 56.16
            },
            {
                "nome": "Indafix",
                "precoBase": 100.72
            }
        ],
        "precoReferencia": 31.79,
        "sinonimias": []
    },
    {
        "id": "med-00470",
        "nome": "Avsola",
        "principioAtivo": "Infliximabe",
        "descricao": "Produtos anti-tnf( fator de necrose tumoral)",
        "apresentacoes": [
            "10 MG/ML PO LIOF SOL INJ CT FA VD TRANS X 10ML"
        ],
        "genericos": [
            {
                "nome": "Remsima",
                "precoBase": 4646.49
            }
        ],
        "precoReferencia": 5188.54,
        "sinonimias": []
    },
    {
        "id": "med-00471",
        "nome": "Novomix 30",
        "principioAtivo": "Insulina Asparte",
        "descricao": "Insulinas humanas e análogos, ação intermediária e longa, comb. com ação rápida",
        "apresentacoes": [
            "100 U/ML SUS INJ CT 5 CAR VD TRANS X 3 ML (PENFILL)",
            "100 U/ML SUS INJ CT 5 CAR VD TRANS X 3 ML X 5 SIST  APLIC PLAS (FLEXPEN)"
        ],
        "genericos": [
            {
                "nome": "Kirsty",
                "precoBase": 63.79
            },
            {
                "nome": "Novorapid",
                "precoBase": 67.87
            },
            {
                "nome": "Fiasp",
                "precoBase": 67.87
            }
        ],
        "precoReferencia": 414.77,
        "sinonimias": []
    },
    {
        "id": "med-00472",
        "nome": "Toujeo",
        "principioAtivo": "Insulina Glargina",
        "descricao": "Insulinas humanas e análogos, ação longa",
        "apresentacoes": [
            "300 U/ML SOL INJ CT 1 CAR VD TRANS X 1,5 ML + 1 CAN APLIC"
        ],
        "genericos": [
            {
                "nome": "Glatus",
                "precoBase": 53.47
            },
            {
                "nome": "Semglee",
                "precoBase": 58.21
            },
            {
                "nome": "Lantus",
                "precoBase": 115.54
            },
            {
                "nome": "Basaglar",
                "precoBase": 124.33
            },
            {
                "nome": "Glargilin",
                "precoBase": 137.15
            }
        ],
        "precoReferencia": 307.3,
        "sinonimias": []
    },
    {
        "id": "med-00473",
        "nome": "Afrezza",
        "principioAtivo": "Insulina Humana",
        "descricao": "Insulinas humanas e análogos, ação rápida",
        "apresentacoes": [
            "12 U (1 MG) PO INAL OR CT REFIL PLAS OPC X 90 + 2 INAL",
            "4 U (0,35 MG) + 8 U (0,70 MG) PO INAL OR CT REFIL PLAS OPC X 30 + 60 + 2 INAL",
            "4 U (0,35 MG) + 8 U (0,70 MG) PO INAL OR CT REFIL PLAS OPC X 60 + 30+ 2 INAL",
            "4 U (0,35 MG) + 8 U (0,70 MG) PO INAL OR CT REFIL PLAS OPC X 90 + 90 + 2 INAL"
        ],
        "genericos": [
            {
                "nome": "Funed Insulina r",
                "precoBase": 20.86
            },
            {
                "nome": "Wosulin r",
                "precoBase": 34.17
            },
            {
                "nome": "Novolin r",
                "precoBase": 35.54
            },
            {
                "nome": "Novolin n",
                "precoBase": 35.54
            },
            {
                "nome": "Insuliv r",
                "precoBase": 52.67
            },
            {
                "nome": "Bahiafarma Insulina Humana r",
                "precoBase": 69.99
            }
        ],
        "precoReferencia": 1952.94,
        "sinonimias": []
    },
    {
        "id": "med-00474",
        "nome": "Visulin n",
        "principioAtivo": "Insulina Isofana",
        "descricao": "Insulinas humanas e análogos, ação intermediária",
        "apresentacoes": [
            "100 UI/ML SUS INJ CT FA X 10 ML"
        ],
        "genericos": [
            {
                "nome": "Funed Insulina n",
                "precoBase": 19.59
            },
            {
                "nome": "Wosulin n",
                "precoBase": 34.67
            }
        ],
        "precoReferencia": 44.85,
        "sinonimias": []
    },
    {
        "id": "med-00475",
        "nome": "Humalog Mix",
        "principioAtivo": "Insulina Lispro",
        "descricao": "Insulinas humanas e análogos, ação intermediária e longa, comb. com ação rápida",
        "apresentacoes": [
            "100 UI/ML SUS INJ CT 1 CARP VD INC X 3 ML + 1 SIST APLIC PLAS",
            "100 UI/ML SUS INJ CT 1 CARP VD INC X 3 ML + 1 SIST APLIC PLAS  ",
            "100 UI/ML SUS INJ CT 5 CARP VD INC X 3 ML + 5 SIST APLIC PLAS",
            "100 UI/ML SUS INJ CT 5 CARP VD INC X 3 ML + 5 SIST APLIC PLAS "
        ],
        "genericos": [
            {
                "nome": "Humalog",
                "precoBase": 64.84
            }
        ],
        "precoReferencia": 82.92,
        "sinonimias": []
    },
    {
        "id": "med-00476",
        "nome": "Frutaxx",
        "principioAtivo": "Ion Citrato;bicarbonato de Sódio;carbonato de Sódio",
        "descricao": "Antiácidos puros",
        "apresentacoes": [
            "(462 + 438 + 90)MG/G PO EFEV CT 50 ENV AL PLAS X 5 G (ABACAXI)"
        ],
        "genericos": [
            {
                "nome": "Estomazil",
                "precoBase": 28.49
            },
            {
                "nome": "Frusalt",
                "precoBase": 32.34
            },
            {
                "nome": "Stomaliv",
                "precoBase": 77.21
            }
        ],
        "precoReferencia": 131.22,
        "sinonimias": []
    },
    {
        "id": "med-00477",
        "nome": "Aprozide",
        "principioAtivo": "Irbesartana;hidroclorotiazida",
        "descricao": "Antagonistas da angiotensina ii associados a antihipertensivos (c2) e/ou diuréticos",
        "apresentacoes": [
            "150 MG + 12,5 MG COM REV CT BL AL PLAS OPC X 30",
            "300 MG + 12,5 MG COM REV CT BL AL PLAS OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Bart h",
                "precoBase": 37.09
            },
            {
                "nome": "Irbesartana + Hidroclorotiazida",
                "precoBase": 146.36
            },
            {
                "nome": "Irbesartana+ Hidroclorotiazida",
                "precoBase": 148.19
            }
        ],
        "precoReferencia": 244.6,
        "sinonimias": []
    },
    {
        "id": "med-00478",
        "nome": "Roacutan",
        "principioAtivo": "Isotretinoína",
        "descricao": "Antiacneicos sistêmicos",
        "apresentacoes": [
            "20 MG CAP MOLE CT BL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Isotretinoína",
                "precoBase": 113.94
            },
            {
                "nome": "Ison",
                "precoBase": 122.26
            },
            {
                "nome": "Acnova",
                "precoBase": 185.85
            },
            {
                "nome": "Amalfi",
                "precoBase": 203.29
            },
            {
                "nome": "Isoac",
                "precoBase": 333.24
            }
        ],
        "precoReferencia": 481.13,
        "sinonimias": []
    },
    {
        "id": "med-00479",
        "nome": "Sporanox",
        "principioAtivo": "Itraconazol",
        "descricao": "Agentes sistêmicos para infecções fúngicas",
        "apresentacoes": [
            "100 MG CAP DURA CT BL AL PLAS PVC/PE/PVDC TRANS X 10",
            "100 MG CAP DURA CT BL AL PLAS PVC/PE/PVDC TRANS X 15",
            "100 MG CAP DURA CT BL AL PLAS PVC/PE/PVDC TRANS X 28",
            "100 MG CAP DURA CT BL AL PLAS PVC/PE/PVDC TRANS X 4"
        ],
        "genericos": [
            {
                "nome": "Itraconazol",
                "precoBase": 53.74
            },
            {
                "nome": "Itraspor",
                "precoBase": 59.89
            },
            {
                "nome": "Traxonol",
                "precoBase": 63.05
            },
            {
                "nome": "Funok",
                "precoBase": 72.82
            },
            {
                "nome": "Itralex",
                "precoBase": 79.66
            }
        ],
        "precoReferencia": 132.39,
        "sinonimias": []
    },
    {
        "id": "med-00480",
        "nome": "Soolantra",
        "principioAtivo": "Ivermectina",
        "descricao": "Antiacneicos tópicos",
        "apresentacoes": [
            "10 MG/G CREM DERM CT BG AL PLAS OPC X 30 G"
        ],
        "genericos": [
            {
                "nome": "Ivermectina",
                "precoBase": 20.69
            },
            {
                "nome": "Iverliv",
                "precoBase": 22.21
            },
            {
                "nome": "Leverctin",
                "precoBase": 29.86
            },
            {
                "nome": "Iverneo",
                "precoBase": 30.24
            },
            {
                "nome": "Revectina",
                "precoBase": 36.35
            },
            {
                "nome": "Ivecte",
                "precoBase": 36.65
            }
        ],
        "precoReferencia": 169.39,
        "sinonimias": []
    },
    {
        "id": "med-00481",
        "nome": "Vimpat",
        "principioAtivo": "Lacosamida",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "10 MG /ML SOL INFUS CT FA VD INC X 20ML",
            "10 MG/ML SOL OR CT FR VD AMB 200 ML",
            "100 MG COM REV CT BL AL PLAS TRANS X 28",
            "100 MG COM REV CT BL AL PLAS TRANS X 56"
        ],
        "genericos": [
            {
                "nome": "Lapsu",
                "precoBase": 17.0
            },
            {
                "nome": "Lacosamida",
                "precoBase": 41.52
            },
            {
                "nome": "Seizla",
                "precoBase": 68.7
            },
            {
                "nome": "Lacotem",
                "precoBase": 96.2
            },
            {
                "nome": "Lakos",
                "precoBase": 103.05
            },
            {
                "nome": "Osamy",
                "precoBase": 105.61
            }
        ],
        "precoReferencia": 96.18,
        "sinonimias": []
    },
    {
        "id": "med-00482",
        "nome": "Laquixan",
        "principioAtivo": "Lactulose",
        "descricao": "Laxantes osmóticos",
        "apresentacoes": [
            "667 MG/ML XPE CX 100 FR PLAS PET AMB 120 ML + 100 COP",
            "667 MG/ML XPE CX 50 FR PLAS PET AMB 120 ML + 50 COP"
        ],
        "genericos": [
            {
                "nome": "Duphalac",
                "precoBase": 36.23
            },
            {
                "nome": "Pentalac",
                "precoBase": 47.23
            },
            {
                "nome": "Lactosan",
                "precoBase": 58.34
            },
            {
                "nome": "Lactulona",
                "precoBase": 64.66
            }
        ],
        "precoReferencia": 3652.65,
        "sinonimias": []
    },
    {
        "id": "med-00483",
        "nome": "Lamictal",
        "principioAtivo": "Lamotrigina",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "100 MG COM CT BL AL PLAS OPC X 30",
            "100 MG COM CT BL AL PLAS TRANS X 30",
            "100 MG COM DISP BL AL PLAS OPC X 30",
            "100 MG COM DISP BL AL PLAS TRANS X 30 "
        ],
        "genericos": [
            {
                "nome": "Lamotrigina",
                "precoBase": 17.33
            },
            {
                "nome": "Lamitor cd",
                "precoBase": 37.05
            },
            {
                "nome": "Neural",
                "precoBase": 62.77
            },
            {
                "nome": "Forlut",
                "precoBase": 107.05
            }
        ],
        "precoReferencia": 38.2,
        "sinonimias": []
    },
    {
        "id": "med-00484",
        "nome": "Lanzopept",
        "principioAtivo": "Lansoprazol",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "30 MG CAP DURA C/ MICROG DESINT GRAD CT 02 BL AL PLAS TRANS X 07 ",
            "30 MG CAP DURA C/ MICROG DESINT GRAD CT 04 BL AL PLAS TRANS X 07 "
        ],
        "genericos": [
            {
                "nome": "Lansoprazol",
                "precoBase": 52.68
            },
            {
                "nome": "Prazol",
                "precoBase": 70.67
            },
            {
                "nome": "Lanz",
                "precoBase": 88.47
            }
        ],
        "precoReferencia": 99.71,
        "sinonimias": []
    },
    {
        "id": "med-00485",
        "nome": "Volata",
        "principioAtivo": "Latanoprosta",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "50 MCG/ML SOL GOT OFT CT FR GOT PLAS PEAD OPC X 2,5 ML"
        ],
        "genericos": [
            {
                "nome": "Monolatan",
                "precoBase": 157.55
            },
            {
                "nome": "Latanoprosta",
                "precoBase": 158.45
            },
            {
                "nome": "Xalatan",
                "precoBase": 200.96
            },
            {
                "nome": "Drenatan",
                "precoBase": 215.84
            },
            {
                "nome": "Arulatan",
                "precoBase": 247.56
            },
            {
                "nome": "Xaloftal",
                "precoBase": 252.12
            }
        ],
        "precoReferencia": 224.55,
        "sinonimias": []
    },
    {
        "id": "med-00486",
        "nome": "Arava",
        "principioAtivo": "Leflunomida",
        "descricao": "Outros imunossupressores",
        "apresentacoes": [
            "100 MG COM REV CT BL AL/AL X 3",
            "20 MG COM REV CT FR PLAS OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Leflunomida",
                "precoBase": 232.12
            },
            {
                "nome": "Leflun",
                "precoBase": 498.28
            },
            {
                "nome": "Reumian",
                "precoBase": 768.69
            }
        ],
        "precoReferencia": 383.29,
        "sinonimias": []
    },
    {
        "id": "med-00487",
        "nome": "Revlimid",
        "principioAtivo": "Lenalidomida",
        "descricao": "Antineoplásicos lidomida",
        "apresentacoes": [
            "10 MG CAP DURA CT BL AL PLAS TRANS X 21",
            "10 MG CAP DURA CT BL AL PLAS TRANS X 28",
            "15 MG CAP DURA CT BL AL PLAS TRANS X 21",
            "15 MG CAP DURA CT BL AL PLAS TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Lenalidomida",
                "precoBase": 15449.7
            },
            {
                "nome": "Lyone",
                "precoBase": 20124.76
            },
            {
                "nome": "Lassya",
                "precoBase": 24474.12
            },
            {
                "nome": "Nuvyor",
                "precoBase": 24770.35
            },
            {
                "nome": "Lenangio",
                "precoBase": 24863.64
            }
        ],
        "precoReferencia": 26329.36,
        "sinonimias": []
    },
    {
        "id": "med-00488",
        "nome": "Repoflor",
        "principioAtivo": "Levedura",
        "descricao": "Antidiarreicos micro-organismos",
        "apresentacoes": [
            "200 MG PO OR CT 4 ENV KRAFT PE X 800 MG"
        ],
        "genericos": [
            {
                "nome": "Florent",
                "precoBase": 35.99
            },
            {
                "nome": "Flomicin",
                "precoBase": 43.22
            }
        ],
        "precoReferencia": 44.09,
        "sinonimias": []
    },
    {
        "id": "med-00489",
        "nome": "Keppra xr",
        "principioAtivo": "Levetiracetam",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "500 MG COM REV LIB PROL CT BL AL PLAS PVC/PCTFE TRANS X 60",
            "750 MG COM REV LIB PROL CT BL AL PLAS PVC/PCTFE TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Levetiracetam",
                "precoBase": 18.85
            },
            {
                "nome": "Spark",
                "precoBase": 25.43
            },
            {
                "nome": "Veepi",
                "precoBase": 29.07
            },
            {
                "nome": "Antara",
                "precoBase": 29.78
            },
            {
                "nome": "Lecza xr",
                "precoBase": 38.73
            },
            {
                "nome": "Iludral",
                "precoBase": 38.73
            }
        ],
        "precoReferencia": 332.04,
        "sinonimias": []
    },
    {
        "id": "med-00490",
        "nome": "Carbidol",
        "principioAtivo": "Levodopa;carbidopa (port. 344/98 Lista c 1)",
        "descricao": "Antiparkinsonianos",
        "apresentacoes": [
            "(25 + 250) MG COM CT BL AL PLAS PVC/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Parkidopa",
                "precoBase": 61.27
            }
        ],
        "precoReferencia": 91.25,
        "sinonimias": []
    },
    {
        "id": "med-00491",
        "nome": "Prolopa",
        "principioAtivo": "Levodopa;cloridrato de Benserazida",
        "descricao": "Antiparkinsonianos",
        "apresentacoes": [
            "(100 + 25)  MG COM CT FR VD AMB X 60",
            "(100 + 25) MG CAP DURA LIB PROL CT FR VD AMB X 30",
            "(100 + 25) MG COM CT FR VD AMB X 30 ",
            "(100 + 25) MG COM SUS CT FR VD AMB X 30"
        ],
        "genericos": [
            {
                "nome": "Ekson",
                "precoBase": 19.09
            },
            {
                "nome": "Levodopa+cloridrato de Benserazida",
                "precoBase": 40.62
            },
            {
                "nome": "Levodopa + Cloridrato de Benserazida",
                "precoBase": 81.22
            },
            {
                "nome": "Lebens",
                "precoBase": 133.48
            }
        ],
        "precoReferencia": 67.07,
        "sinonimias": []
    },
    {
        "id": "med-00492",
        "nome": "Percof",
        "principioAtivo": "Levodropropizina",
        "descricao": "Antitussígenos puros",
        "apresentacoes": [
            "6 MG/ML XPE CT FR VD AMB X 120 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Antux",
                "precoBase": 31.7
            }
        ],
        "precoReferencia": 47.77,
        "sinonimias": []
    },
    {
        "id": "med-00493",
        "nome": "Levofloxacino",
        "principioAtivo": "Levofloxacino",
        "descricao": "Fluorquinolonas orais",
        "apresentacoes": [
            "500 MG COM REV CT BL AL PLAS TRANS X 10",
            "500 MG COM REV CT BL AL PLAS TRANS X 7",
            "750 MG COM REV CT BL AL PLAS TRANS X 5",
            "750 MG COM REV CT BL AL PLAS TRANS X 7"
        ],
        "genericos": [
            {
                "nome": "Livepax",
                "precoBase": 82.92
            }
        ],
        "precoReferencia": 83.75,
        "sinonimias": []
    },
    {
        "id": "med-00494",
        "nome": "Tavaflox",
        "principioAtivo": "Levofloxacino Hemi-hidratado",
        "descricao": "Fluorquinolonas orais",
        "apresentacoes": [
            "500 MG COM REV CT BL AL PLAS OPC X 10",
            "500 MG COM REV CT BL AL PLAS OPC X 7",
            "750 MG COM REV CT BL AL PLAS TRANS X 5",
            "750 MG COM REV CT BL AL PLAS TRANS X 7"
        ],
        "genericos": [
            {
                "nome": "Levoxin",
                "precoBase": 31.39
            },
            {
                "nome": "Levofloxacino",
                "precoBase": 43.3
            },
            {
                "nome": "Levofloxacino Hemi-hidratado",
                "precoBase": 48.13
            },
            {
                "nome": "Tavagran",
                "precoBase": 48.19
            },
            {
                "nome": "Tamiram",
                "precoBase": 57.42
            },
            {
                "nome": "Alevo",
                "precoBase": 58.38
            }
        ],
        "precoReferencia": 84.5,
        "sinonimias": []
    },
    {
        "id": "med-00495",
        "nome": "Tamiram",
        "principioAtivo": "Levofloxacino Hemiidratado",
        "descricao": "Fluorquinolonas orais",
        "apresentacoes": [
            "750 MG COM REV CT BL AL PLAS TRANS X 5 ",
            "750 MG COM REV CT BL AL PLAS TRANS X 7"
        ],
        "genericos": [
            {
                "nome": "Tavok",
                "precoBase": 106.43
            },
            {
                "nome": "Levofloxacino Hemi-hidratado",
                "precoBase": 325.51
            }
        ],
        "precoReferencia": 138.29,
        "sinonimias": []
    },
    {
        "id": "med-00496",
        "nome": "Omize",
        "principioAtivo": "Levomefolato de Cálcio",
        "descricao": "Todos os outros produtos para o sistema nervoso central",
        "apresentacoes": [
            "15 MG COM REV CT FR PLAS PEAD-EVOH OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Folavive",
                "precoBase": 103.96
            }
        ],
        "precoReferencia": 311.88,
        "sinonimias": []
    },
    {
        "id": "med-00497",
        "nome": "Salonpas Pain Relief Patch",
        "principioAtivo": "Levomentol;salicilato de Metila",
        "descricao": "Antirreumáticos e analgésicos tópicos",
        "apresentacoes": [
            "105 MG + 31,5 MG ADES TRANSD CT ENV AL X 5"
        ],
        "genericos": [
            {
                "nome": "Salonpas Gel",
                "precoBase": 22.83
            }
        ],
        "precoReferencia": 38.7,
        "sinonimias": []
    },
    {
        "id": "med-00498",
        "nome": "Mirena",
        "principioAtivo": "Levonorgestrel",
        "descricao": "Outros hormônios contraceptivos sistêmicos",
        "apresentacoes": [
            "52 MG DIU CT EST APLIC PLAS PETG TRANS"
        ],
        "genericos": [
            {
                "nome": "Levonorgestrel",
                "precoBase": 13.76
            },
            {
                "nome": "Poslov",
                "precoBase": 16.6
            },
            {
                "nome": "Diad",
                "precoBase": 23.29
            },
            {
                "nome": "Postinor Uno",
                "precoBase": 23.29
            },
            {
                "nome": "Saya Control",
                "precoBase": 23.31
            },
            {
                "nome": "Hora h",
                "precoBase": 24.04
            }
        ],
        "precoReferencia": 1704.74,
        "sinonimias": []
    },
    {
        "id": "med-00499",
        "nome": "Levoid",
        "principioAtivo": "Levotiroxina Sódica",
        "descricao": "Preparações para tireoide",
        "apresentacoes": [
            "100 MCG COM CT BL AL AL X 15",
            "100 MCG COM CT BL AL AL X 30",
            "112 MCG COM CT BL AL AL X 15",
            "112 MCG COM CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Puran t4",
                "precoBase": 3.97
            },
            {
                "nome": "Synthroid",
                "precoBase": 5.04
            },
            {
                "nome": "Levotiroxina Sódica",
                "precoBase": 10.71
            },
            {
                "nome": "Euthyrox",
                "precoBase": 18.76
            }
        ],
        "precoReferencia": 7.55,
        "sinonimias": []
    },
    {
        "id": "med-00500",
        "nome": "Toperma",
        "principioAtivo": "Lidocaína",
        "descricao": "Anestésicos locais tópicos",
        "apresentacoes": [
            "5% EMPL CT ENV PE/AL X 10 ",
            "5% EMPL CT ENV PE/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Lidocaína",
                "precoBase": 18.17
            },
            {
                "nome": "Lidopass",
                "precoBase": 24.96
            },
            {
                "nome": "Dermomax",
                "precoBase": 32.53
            },
            {
                "nome": "Lidocaina",
                "precoBase": 139.3
            }
        ],
        "precoReferencia": 207.15,
        "sinonimias": []
    },
    {
        "id": "med-00501",
        "nome": "Tetralysal",
        "principioAtivo": "Limeciclina",
        "descricao": "Tetraciclinas e associações",
        "apresentacoes": [
            "150 MG CAP GEL DURA CT STR X 16",
            "300 MG CAP GEL  DURA CT STR X 16",
            "300 MG CAP GEL DURA CT STR X 28"
        ],
        "genericos": [
            {
                "nome": "Limeciclina",
                "precoBase": 67.07
            },
            {
                "nome": "Meciclin",
                "precoBase": 104.94
            }
        ],
        "precoReferencia": 116.49,
        "sinonimias": []
    },
    {
        "id": "med-00502",
        "nome": "Trayenta",
        "principioAtivo": "Linagliptina",
        "descricao": "Antidiabéticos inibidores dpp-iv  puros",
        "apresentacoes": [
            "5 MG COM REV CT BL AL/AL X 10",
            "5 MG COM REV CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Linagliptina",
                "precoBase": 67.73
            },
            {
                "nome": "Linadib",
                "precoBase": 111.81
            },
            {
                "nome": "Glunac",
                "precoBase": 111.81
            },
            {
                "nome": "Glinape",
                "precoBase": 111.81
            },
            {
                "nome": "Glink",
                "precoBase": 335.42
            }
        ],
        "precoReferencia": 111.81,
        "sinonimias": []
    },
    {
        "id": "med-00503",
        "nome": "Adiloz",
        "principioAtivo": "Linezolida",
        "descricao": "Todos os outros antibióticos",
        "apresentacoes": [
            "600 MG COM REV CT BL AL PLAS OPC X 10"
        ],
        "genericos": [
            {
                "nome": "Lynoz",
                "precoBase": 472.69
            },
            {
                "nome": "Linezolida",
                "precoBase": 2642.25
            }
        ],
        "precoReferencia": 4362.42,
        "sinonimias": []
    },
    {
        "id": "med-00504",
        "nome": "Victoza",
        "principioAtivo": "Liraglutida",
        "descricao": "Antidiabéticos agonistas de glp-1",
        "apresentacoes": [
            "6 MG/ML SOL INJ CT 2 CARP VD TRANS X 3 ML + 2 SIST APLIC PLAS"
        ],
        "genericos": [
            {
                "nome": "Liraclick",
                "precoBase": 354.44
            },
            {
                "nome": "Saxenda",
                "precoBase": 356.66
            },
            {
                "nome": "Lirux",
                "precoBase": 356.7
            },
            {
                "nome": "Olire",
                "precoBase": 356.7
            }
        ],
        "precoReferencia": 713.36,
        "sinonimias": []
    },
    {
        "id": "med-00505",
        "nome": "Paxoral",
        "principioAtivo": "Lisado Bacteriano",
        "descricao": "Todos os outros produtos vacinais",
        "apresentacoes": [
            "3,5 MG CAPS GEL DURA CT BL AL PLAST INC X 10 ",
            "7 MG CAPS GEL DURA CT BL AL PLAST INC X 10 "
        ],
        "genericos": [
            {
                "nome": "Broncho-vaxom",
                "precoBase": 73.0
            },
            {
                "nome": "Extralerg",
                "precoBase": 123.79
            }
        ],
        "precoReferencia": 76.21,
        "sinonimias": []
    },
    {
        "id": "med-00506",
        "nome": "Artrosil",
        "principioAtivo": "Lisinato de Cetoprofeno",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "160 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PCTFE OPC X 10",
            "160 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PCTFE OPC X 20",
            "160 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PCTFE OPC X 4",
            "320 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PCTFE OPC X 10"
        ],
        "genericos": [
            {
                "nome": "Algilive",
                "precoBase": 11.19
            }
        ],
        "precoReferencia": 11.19,
        "sinonimias": []
    },
    {
        "id": "med-00507",
        "nome": "Dolamin",
        "principioAtivo": "Lisinato de Clonixina",
        "descricao": "Analgésicos não narcóticos e antipiréticos sob prescrição",
        "apresentacoes": [
            "125 MG COM REV CT BL AL PLAS PVC TRANS X 16"
        ],
        "genericos": [
            {
                "nome": "Clonixinato de Lisina",
                "precoBase": 22.76
            }
        ],
        "precoReferencia": 37.88,
        "sinonimias": []
    },
    {
        "id": "med-00508",
        "nome": "Claritin",
        "principioAtivo": "Loratadina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "10 MG COM CT BL AL PLAS TRANS X 12",
            "10 MG COM CT BL AL PLAS TRANS X 6"
        ],
        "genericos": [
            {
                "nome": "Loratadina",
                "precoBase": 15.43
            },
            {
                "nome": "Loritil",
                "precoBase": 16.75
            },
            {
                "nome": "Lorasliv",
                "precoBase": 17.2
            },
            {
                "nome": "Neo Loratadin",
                "precoBase": 18.79
            },
            {
                "nome": "Histadin",
                "precoBase": 21.58
            },
            {
                "nome": "Loratamed",
                "precoBase": 23.3
            }
        ],
        "precoReferencia": 12.99,
        "sinonimias": []
    },
    {
        "id": "med-00509",
        "nome": "Histadin d",
        "principioAtivo": "Loratadina;sulfato de Pseudoefedrina",
        "descricao": "Preparações sistêmicas nasais",
        "apresentacoes": [
            "(5 + 120) MG COM REV LIB MOD CT BL AL PLAS PVC/PVDC TRANS X 12"
        ],
        "genericos": [
            {
                "nome": "Loratamed d",
                "precoBase": 32.77
            },
            {
                "nome": "Loratadina + Sulfato de Pseudoefedrina",
                "precoBase": 33.58
            }
        ],
        "precoReferencia": 59.2,
        "sinonimias": []
    },
    {
        "id": "med-00510",
        "nome": "Lorax",
        "principioAtivo": "Lorazepam",
        "descricao": "Tranquilizantes",
        "apresentacoes": [
            "1 MG COM CT BL AL PLAS PVC/PCTFE OPC  X 30",
            "2 MG COM CT BL AL PLAS PVC/PCTFE OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Lorazepam",
                "precoBase": 18.33
            },
            {
                "nome": "Lorazepam (port.344/98, Lista B1)",
                "precoBase": 33.23
            }
        ],
        "precoReferencia": 39.35,
        "sinonimias": []
    },
    {
        "id": "med-00511",
        "nome": "Cozaar",
        "principioAtivo": "Losartana Potássica",
        "descricao": "Antagonistas da angiotensina ii puros",
        "apresentacoes": [
            "100 MG COM REV CT BL AL PVC/PE/PVDC BCO OPC X 30",
            "50 MG COM REV CT BL AL PVC/PE/PVDC BCO OPC X 15",
            "50 MG COM REV CT BL AL PVC/PE/PVDC BCO OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Losartana Potássica",
                "precoBase": 4.01
            },
            {
                "nome": "Losartana Potassica",
                "precoBase": 7.55
            },
            {
                "nome": "Lorsacor",
                "precoBase": 16.71
            },
            {
                "nome": "Corus",
                "precoBase": 38.98
            },
            {
                "nome": "Aradois",
                "precoBase": 60.81
            },
            {
                "nome": "Zart",
                "precoBase": 63.32
            }
        ],
        "precoReferencia": 52.21,
        "sinonimias": []
    },
    {
        "id": "med-00512",
        "nome": "Hyzaar",
        "principioAtivo": "Losartana Potássica;hidroclorotiazida",
        "descricao": "Antagonistas da angiotensina ii associados a antihipertensivos (c2) e/ou diuréticos",
        "apresentacoes": [
            "(100 + 25) MG COM REV CT BL AL PLAS OPC X 30",
            "(50+ 12,5) MG COM REV CT BL AL PLAS OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Zart h",
                "precoBase": 15.64
            },
            {
                "nome": "Losartana Potássica+hidroclorotiazida",
                "precoBase": 39.63
            },
            {
                "nome": "Losartana Potassica+hidroclorotiazida",
                "precoBase": 45.05
            },
            {
                "nome": "Losartana Potássica + Hidroclorotiazida",
                "precoBase": 47.73
            },
            {
                "nome": "Corus h",
                "precoBase": 50.7
            },
            {
                "nome": "Aradois h",
                "precoBase": 112.05
            }
        ],
        "precoReferencia": 84.23,
        "sinonimias": []
    },
    {
        "id": "med-00513",
        "nome": "Loxonin Flex",
        "principioAtivo": "Loxoprofeno Sódico",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "100 MG ADES DERM CT 20 ENV AL PLAS PE X 3",
            "100 MG ADES DERM CT 20 ENV AL PLAS PE X 7",
            "100 MG ADES DERM CT 50 ENV AL PLAS PE X 3",
            "100 MG ADES DERM CT 50 ENV AL PLAS PE X 7"
        ],
        "genericos": [
            {
                "nome": "Loxonin",
                "precoBase": 22.77
            }
        ],
        "precoReferencia": 90.87,
        "sinonimias": []
    },
    {
        "id": "med-00514",
        "nome": "Benedesc Plus",
        "principioAtivo": "Maleato de Bronfeniramina;cloridrato de Fenilefrina",
        "descricao": "Preparações sistêmicas nasais",
        "apresentacoes": [
            "(0,4 + 1) MG/ML XPE CT FR VD AMB X 120 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Descon",
                "precoBase": 8.63
            },
            {
                "nome": "Maleato de Bronfeniramina + Cloridrato de Fenilefrina",
                "precoBase": 9.58
            },
            {
                "nome": "Bialerge",
                "precoBase": 13.95
            },
            {
                "nome": "Hiscongex",
                "precoBase": 16.26
            },
            {
                "nome": "Decongex Plus",
                "precoBase": 19.17
            },
            {
                "nome": "Coristina d Congest",
                "precoBase": 23.99
            }
        ],
        "precoReferencia": 24.0,
        "sinonimias": []
    },
    {
        "id": "med-00515",
        "nome": "Naldecon Noite",
        "principioAtivo": "Maleato de Carbinoxamina;cloridrato de Fenilefrina;paracetamol",
        "descricao": "Antigripais sem antiinfecciosos",
        "apresentacoes": [
            "400 MG + 20 MG COM AMARELO/400 MG + 4 MG COM LARANJA CT BL AL/AL X 12 + 12",
            "400 MG + 20 MG COM AMARELO/400 MG + 4 MG COM LARANJA DISP BL AL/AL X 100 + 100"
        ],
        "genericos": [
            {
                "nome": "Nasaliv",
                "precoBase": 19.01
            },
            {
                "nome": "Neolefrin",
                "precoBase": 20.93
            },
            {
                "nome": "Benegrip Multi Noite",
                "precoBase": 28.99
            },
            {
                "nome": "Fluviral Noite",
                "precoBase": 35.11
            },
            {
                "nome": "Perfenol Multi",
                "precoBase": 38.51
            },
            {
                "nome": "Benegrip Multi",
                "precoBase": 44.99
            }
        ],
        "precoReferencia": 66.48,
        "sinonimias": []
    },
    {
        "id": "med-00516",
        "nome": "Resfenol",
        "principioAtivo": "Maleato de Clorfenamina;cloridrato de Fenilefrina;paracetamol",
        "descricao": "Antigripais sem antiinfecciosos",
        "apresentacoes": [
            "(400 + 4 + 4)MG CAP DURA CT BL AL PLAS/PVC TRANS  X 10",
            "(400 + 4 + 4)MG CAP DURA CT BL AL PLAS/PVC TRANS  X 200",
            "(400 + 4 + 4)MG CAP DURA CT BL AL PLAS/PVC TRANS X 20",
            "400 MG + 4 MG + 4 MG PO SOL OR CT 5 ENV AL PLAS PE X 5 G"
        ],
        "genericos": [
            {
                "nome": "Stilgrip",
                "precoBase": 23.42
            },
            {
                "nome": "Cimegripe",
                "precoBase": 26.7
            },
            {
                "nome": "Gripalcê",
                "precoBase": 256.09
            }
        ],
        "precoReferencia": 15.59,
        "sinonimias": []
    },
    {
        "id": "med-00517",
        "nome": "Resfenol",
        "principioAtivo": "Maleato de Clorfeniramina;cloridrato de Fenilefrina;paracetamol",
        "descricao": "Antigripais sem antiinfecciosos",
        "apresentacoes": [
            "(40 + 0,6 +0,6)MG/ML  SOL OR CT FR VD AMB X 100ML + COP",
            "(400 + 4 + 4)MG CAP DURA CT BL AL PLAS/PVC TRANS X 120",
            "(400 + 4 + 4)MG CAP DURA CT BL AL PLAS/PVC TRANS X 240",
            "400 MG + 4 MG + 4 MG PO SOL OR CT 50 ENV AL PLAS PE X 5 G"
        ],
        "genericos": [
            {
                "nome": "Vick Pyrena Grip – 7",
                "precoBase": 11.01
            },
            {
                "nome": "Next",
                "precoBase": 12.69
            },
            {
                "nome": "Gripalcê",
                "precoBase": 13.28
            },
            {
                "nome": "Biogripe",
                "precoBase": 15.02
            },
            {
                "nome": "Onegripe",
                "precoBase": 15.83
            },
            {
                "nome": "Cimegripe",
                "precoBase": 15.83
            }
        ],
        "precoReferencia": 32.87,
        "sinonimias": []
    },
    {
        "id": "med-00518",
        "nome": "Apracur Duo",
        "principioAtivo": "Maleato de Clorfeniramina;dipirona Monoidratada;cafeína",
        "descricao": "Antigripais sem antiinfecciosos",
        "apresentacoes": [
            "250 MG + 30 MG (VERDE) / 250 MG + 2 MG (AMARELO) COM REV CT BL AL PLAS TRANS X 75 VERD + 75 AMAR"
        ],
        "genericos": [
            {
                "nome": "Agiigrip Duo",
                "precoBase": 15.28
            }
        ],
        "precoReferencia": 274.73,
        "sinonimias": []
    },
    {
        "id": "med-00519",
        "nome": "Polaramine",
        "principioAtivo": "Maleato de Dexclorfeniramina",
        "descricao": "Anti-histamínicos sistêmicos",
        "apresentacoes": [
            "0,4 MG/ML SOL OR CT FR PLAS AMB X 120 ML + COP",
            "10 MG/G CREM DERM CT BG AL X 30 G",
            "2 MG COM REV CT BL AL PLAS TRANS X 20",
            "2,8 MG/ML SOL OR CT FR PLAS OPC X 20 ML "
        ],
        "genericos": [
            {
                "nome": "Hystin",
                "precoBase": 12.82
            },
            {
                "nome": "Maleato de Dexclorfeniramina",
                "precoBase": 15.52
            },
            {
                "nome": "Polarax",
                "precoBase": 17.12
            },
            {
                "nome": "Lofernim",
                "precoBase": 17.67
            },
            {
                "nome": "Polaryn",
                "precoBase": 17.8
            },
            {
                "nome": "Histamin",
                "precoBase": 19.61
            }
        ],
        "precoReferencia": 29.98,
        "sinonimias": []
    },
    {
        "id": "med-00520",
        "nome": "Expectamin",
        "principioAtivo": "Maleato de Dexclorfeniramina;guaifenesina;sulfato de Pseudoefedrina",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "0,4 MG/ML + 4 MG/ML + 20 MG/ML SOL OR CT FR VD AMB X 120 ML   "
        ],
        "genericos": [
            {
                "nome": "Spectolab Exp",
                "precoBase": 28.45
            },
            {
                "nome": "Maleato de Dexclorfeniramina + Sulfato de Pseudoefedrina + Guaifenesina",
                "precoBase": 30.42
            },
            {
                "nome": "Emsexpector",
                "precoBase": 32.56
            }
        ],
        "precoReferencia": 39.63,
        "sinonimias": []
    },
    {
        "id": "med-00521",
        "nome": "Renitec",
        "principioAtivo": "Maleato de Enalapril",
        "descricao": "Inibidores da eca puros",
        "apresentacoes": [
            "10 MG COM CT BL AL/AL X 30",
            "20 MG COM CT BL AL/AL X 30",
            "5 MG COM CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Maleato de Enalapril",
                "precoBase": 9.46
            },
            {
                "nome": "Renopril",
                "precoBase": 17.86
            },
            {
                "nome": "Pressel",
                "precoBase": 27.9
            },
            {
                "nome": "Renalapril",
                "precoBase": 32.7
            },
            {
                "nome": "Enaplex",
                "precoBase": 32.76
            },
            {
                "nome": "Pressomede",
                "precoBase": 33.45
            }
        ],
        "precoReferencia": 28.48,
        "sinonimias": []
    },
    {
        "id": "med-00522",
        "nome": "Vasopril Plus",
        "principioAtivo": "Maleato de Enalapril;hidroclorotiazida",
        "descricao": "Inibidores da eca associados a anti-hipertersivos (c2) e/ou diuréticos (c3)",
        "apresentacoes": [
            "10 MG + 25 MG COM CT BL AL AL X 30",
            "10 MG + 25 MG COM CT BL AL AL X 60",
            "20 MG + 12,5 MG COM CT BL AL AL X 30",
            "20 MG + 12,5 MG COM CT BL AL AL X 60"
        ],
        "genericos": [
            {
                "nome": "Malena Hct",
                "precoBase": 10.56
            },
            {
                "nome": "Maleato de Enalapril + Hidroclorotiazida",
                "precoBase": 19.08
            }
        ],
        "precoReferencia": 66.58,
        "sinonimias": []
    },
    {
        "id": "med-00523",
        "nome": "Luvox",
        "principioAtivo": "Maleato de Fluvoxamina",
        "descricao": "Antidepressivos ssri",
        "apresentacoes": [
            "100 MG COM REV CT BL AL PLAS TRANS X 30",
            "100 MG COM REV CT BL AL PLAS TRANS X 60",
            "50 MG COM REV CT BL AL PLAS TRANS X 15 ",
            "50 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Maleato de Fluvoxamina",
                "precoBase": 27.54
            },
            {
                "nome": "Semtri",
                "precoBase": 45.43
            },
            {
                "nome": "Fluvique",
                "precoBase": 50.1
            },
            {
                "nome": "Revoc",
                "precoBase": 51.92
            },
            {
                "nome": "Afluv",
                "precoBase": 187.9
            }
        ],
        "precoReferencia": 97.34,
        "sinonimias": []
    },
    {
        "id": "med-00524",
        "nome": "Neozine",
        "principioAtivo": "Maleato de Levomepromazina",
        "descricao": "Antipsicóticos convencionais",
        "apresentacoes": [
            "100 MG COM REV CT BL AL AL X 20",
            "25 MG COM REV CT BL AL PLAS PVDC/PE/PVC TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Levozine",
                "precoBase": 33.18
            },
            {
                "nome": "Maleato de Levomepromazina",
                "precoBase": 526.18
            }
        ],
        "precoReferencia": 16.36,
        "sinonimias": []
    },
    {
        "id": "med-00525",
        "nome": "Dormonid",
        "principioAtivo": "Maleato de Midazolam",
        "descricao": "Hipnóticos e sedativos não barbitúricos puros",
        "apresentacoes": [
            "15 MG COM REV CT BL AL PLAS TRANS X 20",
            "15 MG COM REV CT BL AL PLAS TRANS X 30",
            "7,5 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Maleato de Midazolam",
                "precoBase": 80.87
            },
            {
                "nome": "Dormire",
                "precoBase": 93.03
            }
        ],
        "precoReferencia": 78.87,
        "sinonimias": []
    },
    {
        "id": "med-00526",
        "nome": "Visan mt",
        "principioAtivo": "Maleato de Timolol;bimatoprosta",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "(0,3 + 5,0) MG/ML SOL GOT OFT CT FR GOT PLAS PEBD OPC X 3 ML",
            "(0,3 + 5,0) MG/ML SOL GOT OFT CT FR GOT PLAS PEBD OPC X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Glamigan mt",
                "precoBase": 174.57
            },
            {
                "nome": "Duoglau",
                "precoBase": 174.59
            }
        ],
        "precoReferencia": 174.59,
        "sinonimias": []
    },
    {
        "id": "med-00527",
        "nome": "Volata mt",
        "principioAtivo": "Maleato de Timolol;latanoprosta",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "(0,05 + 5) MG/ML SOL GOT OFT CT FR GOT PLAS PEAD OPC X 2,5 ML + ADAPT"
        ],
        "genericos": [
            {
                "nome": "Latanoprosta + Maleato de Timolol",
                "precoBase": 175.88
            },
            {
                "nome": "Xalacom",
                "precoBase": 225.78
            },
            {
                "nome": "Tivecom",
                "precoBase": 280.38
            }
        ],
        "precoReferencia": 237.76,
        "sinonimias": []
    },
    {
        "id": "med-00528",
        "nome": "Combigan",
        "principioAtivo": "Maleato de Timolol;tartarato de Brimonidina",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "(2,0 + 5,0) MG/ML SOL OFT CT FR GOT PLAS PE OPC X 10 ML",
            "(2,0 + 5,0) MG/ML SOL OFT CT FR GOT PLAS PE OPC X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Tartarato de Brimonidina + Maleato de Timolol",
                "precoBase": 40.73
            },
            {
                "nome": "Brixag",
                "precoBase": 57.02
            },
            {
                "nome": "Britens lc",
                "precoBase": 111.42
            },
            {
                "nome": "Combtol",
                "precoBase": 120.17
            }
        ],
        "precoReferencia": 163.78,
        "sinonimias": []
    },
    {
        "id": "med-00529",
        "nome": "Digedrat",
        "principioAtivo": "Maleato de Trimebutina",
        "descricao": "Gastroprocinéticos",
        "apresentacoes": [
            "200 MG CAP GEL MOLE CT BL AL PLAS TRANS X 20",
            "200 MG CAP GEL MOLE CT BL AL PLAS TRANS X 30",
            "200 MG CAP GEL MOLE CT BL AL PLAS TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Irritratil",
                "precoBase": 30.18
            },
            {
                "nome": "Trimeb",
                "precoBase": 60.37
            },
            {
                "nome": "Maleato de Trimebutina",
                "precoBase": 63.04
            },
            {
                "nome": "Trimexium",
                "precoBase": 75.59
            },
            {
                "nome": "Modulatri",
                "precoBase": 75.59
            }
        ],
        "precoReferencia": 104.1,
        "sinonimias": []
    },
    {
        "id": "med-00530",
        "nome": "Timoptol",
        "principioAtivo": "Maleato Ácido de Timolol",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "5 MG/ML GEL OFT CT FR GOT PLAS OPC OCUMETRO X 5 ML ",
            "5MG/ML SOL OFT CT FR GOT PLAS OPC OCUMETRO X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Maleato de Timolol",
                "precoBase": 13.65
            },
            {
                "nome": "Timosan",
                "precoBase": 17.13
            },
            {
                "nome": "Tenoftal",
                "precoBase": 17.37
            },
            {
                "nome": "Glaucotrat",
                "precoBase": 17.4
            },
            {
                "nome": "Latanoprosta + Maleato de Timolol",
                "precoBase": 177.99
            },
            {
                "nome": "Xalanoft",
                "precoBase": 288.86
            }
        ],
        "precoReferencia": 24.87,
        "sinonimias": []
    },
    {
        "id": "med-00531",
        "nome": "Cosopt",
        "principioAtivo": "Maleato Ácido de Timolol;cloridrato de Dorzolamida",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "20 MG/ML + 5 MG/ML SOL OFT CT FR GOT PLAS OPC( OCUMETRO)  X 5 ML",
            "20 MG/ML + 5 MG/ML SOL OFT CT FR GOT PLAS OPC( OCUMETRO) X 10 ML"
        ],
        "genericos": [
            {
                "nome": "Drusolol",
                "precoBase": 107.57
            },
            {
                "nome": "Cloridrato de Dorzolamida+maleato de Timolol",
                "precoBase": 115.19
            },
            {
                "nome": "Cloridrato de Dorzolamida + Maleato de Timolol",
                "precoBase": 120.31
            },
            {
                "nome": "Dorzal mt",
                "precoBase": 129.13
            },
            {
                "nome": "Glalfital",
                "precoBase": 158.89
            }
        ],
        "precoReferencia": 198.64,
        "sinonimias": []
    },
    {
        "id": "med-00532",
        "nome": "Latonan",
        "principioAtivo": "Maleato Ácido de Timolol;latanoprosta",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "(0,05 + 5) MG/ML SOL OFT CT FR GOT PLAS OPC X 2,5 ML"
        ],
        "genericos": [
            {
                "nome": "Latanoprosta + Maleato de Timolol",
                "precoBase": 178.02
            }
        ],
        "precoReferencia": 291.02,
        "sinonimias": []
    },
    {
        "id": "med-00533",
        "nome": "Tinodin",
        "principioAtivo": "Maleato Ácido de Timolol;tartarato de Brimonidina",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "(2,0 + 5,0) MG/ML SOL OFT CT FR PLAS OPC GOT X 5 ML "
        ],
        "genericos": [
            {
                "nome": "Tartarato de Brimonidina+maleato de Timolol",
                "precoBase": 99.18
            },
            {
                "nome": "Britens",
                "precoBase": 131.17
            }
        ],
        "precoReferencia": 148.78,
        "sinonimias": []
    },
    {
        "id": "med-00534",
        "nome": "Espinheira Santa Natulab",
        "principioAtivo": "Maytenus Ilicifolia Mart.ex.reiss",
        "descricao": "Todos os outros antiulcerosos",
        "apresentacoes": [
            "380 MG CAP GEL DURA CT BL AL PLAS TRANS X 45"
        ],
        "genericos": [
            {
                "nome": "Espinheira Santa",
                "precoBase": 33.36
            },
            {
                "nome": "Gastrinon",
                "precoBase": 59.53
            },
            {
                "nome": "Gastriless",
                "precoBase": 61.4
            }
        ],
        "precoReferencia": 74.95,
        "sinonimias": []
    },
    {
        "id": "med-00535",
        "nome": "Helmilab",
        "principioAtivo": "Mebendazol",
        "descricao": "Anti-helmínticos exceto esquistossomicidas (p1c)",
        "apresentacoes": [
            "20 MG/ML SUS OR CT FR PET AMB X 30 ML + COP"
        ],
        "genericos": [
            {
                "nome": "Mebendazol",
                "precoBase": 9.43
            },
            {
                "nome": "Belmirax",
                "precoBase": 10.54
            }
        ],
        "precoReferencia": 11.25,
        "sinonimias": []
    },
    {
        "id": "med-00536",
        "nome": "Defb",
        "principioAtivo": "Mecobalamina",
        "descricao": "Vitamina b12 pura",
        "apresentacoes": [
            "1000 MCG COM SUBL CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Mecobe",
                "precoBase": 11.78
            },
            {
                "nome": "Dozemast",
                "precoBase": 16.77
            },
            {
                "nome": "Mecobalamina",
                "precoBase": 23.19
            },
            {
                "nome": "Cobi-12",
                "precoBase": 23.4
            },
            {
                "nome": "Dodibe",
                "precoBase": 33.34
            },
            {
                "nome": "Dozi",
                "precoBase": 33.42
            }
        ],
        "precoReferencia": 97.48,
        "sinonimias": []
    },
    {
        "id": "med-00537",
        "nome": "Melocox Odt",
        "principioAtivo": "Meloxicam",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "15 MG COM ORODISP CT BL AL AL X 10"
        ],
        "genericos": [
            {
                "nome": "Meloxicam",
                "precoBase": 18.17
            },
            {
                "nome": "Bioflac",
                "precoBase": 21.24
            },
            {
                "nome": "Inicox dp",
                "precoBase": 26.88
            },
            {
                "nome": "Melocox",
                "precoBase": 30.01
            },
            {
                "nome": "Artritec",
                "precoBase": 39.95
            },
            {
                "nome": "Meloxigran",
                "precoBase": 42.29
            }
        ],
        "precoReferencia": 52.86,
        "sinonimias": []
    },
    {
        "id": "med-00538",
        "nome": "Menopur",
        "principioAtivo": "Menotropina",
        "descricao": "Gonadotrofinas incluindo outros estimulantes para ovulação",
        "apresentacoes": [
            "1200 UI PO LIOF INJ CT 1 FA VD INC + 2 SER PREENC DIL 1 ML + 18 SER",
            "600UI PO LIOF INJ CT 1 FA VD INC + 1 SER PREENC DIL 1 ML + 9 SER",
            "75 UI PO LIOF INJ CT 5 FA VD INC + 5 AMP DIL VD INC X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Merional hg",
                "precoBase": 193.1
            }
        ],
        "precoReferencia": 1165.38,
        "sinonimias": []
    },
    {
        "id": "med-00539",
        "nome": "Meropeném",
        "principioAtivo": "Meropeném Tri-hidratado",
        "descricao": "Carbapenemes e penemes",
        "apresentacoes": [
            "1 G PO SOL INJ IV CX 25 FA VD TRANS",
            "2 G PO SOL INJ IV CX 10 FA VD TRANS",
            "2 G PO SOL INJ IV CX 5 FA VD TRANS",
            "500 MG PO SOL INJ IV CX 25 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Meropenem",
                "precoBase": 2096.39
            }
        ],
        "precoReferencia": 2544.73,
        "sinonimias": []
    },
    {
        "id": "med-00540",
        "nome": "Pentasa",
        "principioAtivo": "Mesalazina",
        "descricao": "Produtos aminosalicilatos para alterações intestinais",
        "apresentacoes": [
            "1 G GRAN REV OR LIB PROL CT ENV AL PLAS PE X 50",
            "1000 MG SUP RET CT BL AL AL X 28",
            "2 G GRAN REV OR LIB PROL CT ENV AL PLAS PE X 15",
            "2 G GRAN REV OR LIB PROL CT ENV AL PLAS PE X 30"
        ],
        "genericos": [
            {
                "nome": "Mesacol",
                "precoBase": 52.3
            },
            {
                "nome": "Zydcol mr",
                "precoBase": 92.35
            },
            {
                "nome": "Chron-asa 5",
                "precoBase": 110.51
            },
            {
                "nome": "Mesalazina",
                "precoBase": 153.83
            }
        ],
        "precoReferencia": 561.46,
        "sinonimias": []
    },
    {
        "id": "med-00541",
        "nome": "Migraliv",
        "principioAtivo": "Mesilato de Di-hidroergotamina;dipirona Monoidratada;cafeína",
        "descricao": "Todos as outras preparações antienxaquecosas",
        "apresentacoes": [
            "(1,0 + 100,0 + 350,0) MG COM CT BL AL AL X 12",
            "(1,0 + 100,0 + 350,0) MG COM CT BL AL AL X 20",
            "(1,0 + 100,0 + 350,0) MG COM CT BL AL AL X 40",
            "(1,0 + 100,0 + 350,0) MG COM CT BL AL AL X 60"
        ],
        "genericos": [
            {
                "nome": "Izenxaq",
                "precoBase": 22.2
            },
            {
                "nome": "Xaqueliv",
                "precoBase": 22.51
            }
        ],
        "precoReferencia": 22.51,
        "sinonimias": []
    },
    {
        "id": "med-00542",
        "nome": "Cefaliv",
        "principioAtivo": "Mesilato de Di-hidroergotamina;dipirona;cafeína",
        "descricao": "Todos as outras preparações antienxaquecosas",
        "apresentacoes": [
            "(1 + 100 + 350) MG COM CT BL AL PLAS TRANS X 12"
        ],
        "genericos": [
            {
                "nome": "Enxak",
                "precoBase": 23.13
            }
        ],
        "precoReferencia": 23.33,
        "sinonimias": []
    },
    {
        "id": "med-00543",
        "nome": "Unoprost",
        "principioAtivo": "Mesilato de Doxazosina",
        "descricao": "Anti-hipertensivos puro-ação periférica",
        "apresentacoes": [
            "1 MG COM CT BL AL PLAS PVC TRANS X 20",
            "2 MG COM CT BL AL PLAS PVC TRANS X 30",
            "4 MG COM CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Doxprovir",
                "precoBase": 23.38
            },
            {
                "nome": "Doxativo",
                "precoBase": 23.38
            },
            {
                "nome": "Doxuran",
                "precoBase": 26.86
            },
            {
                "nome": "Mesilato de Doxazosina",
                "precoBase": 31.85
            },
            {
                "nome": "Mesidox",
                "precoBase": 44.8
            },
            {
                "nome": "Cadvas",
                "precoBase": 44.8
            }
        ],
        "precoReferencia": 72.72,
        "sinonimias": []
    },
    {
        "id": "med-00544",
        "nome": "Duomo hp",
        "principioAtivo": "Mesilato de Doxazosina;finasterida",
        "descricao": "Bph combinações de alfa-antagonistas e inibidores da 5-alfa testosterona redutase",
        "apresentacoes": [
            "(2,0 + 5,0) MG  COM REV CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 30",
            "(2,0 + 5,0) MG  COM REV CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 60",
            "(2,0 + 5,0) MG  COM REV CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 90",
            "(2,0 + 5,0) MG COM REV CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 10 "
        ],
        "genericos": [
            {
                "nome": "Hominus",
                "precoBase": 55.28
            },
            {
                "nome": "Prós-hp",
                "precoBase": 165.79
            }
        ],
        "precoReferencia": 55.28,
        "sinonimias": []
    },
    {
        "id": "med-00545",
        "nome": "Pradaxa",
        "principioAtivo": "Mesilato de Etexilato de Dabigatrana",
        "descricao": "Inibidores diretos da trombina",
        "apresentacoes": [
            "110 MG CAP DURA CT BL AL/AL X 10 ",
            "110 MG CAP DURA CT BL AL/AL X 30",
            "110 MG CAP DURA CT BL AL/AL X 60",
            "150MG CAP DURA CT BL AL/AL X 10 "
        ],
        "genericos": [
            {
                "nome": "Etexilato de Dabigatrana",
                "precoBase": 129.35
            }
        ],
        "precoReferencia": 71.22,
        "sinonimias": []
    },
    {
        "id": "med-00546",
        "nome": "Lenvima",
        "principioAtivo": "Mesilato de Lenvatinibe",
        "descricao": "Outros antineoplásicos inibidores da proteína kinase",
        "apresentacoes": [
            "10 MG CAP DURA CT BL AL AL X 30",
            "4 MG CAP DURA CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Mesilato de Lenvatinibe",
                "precoBase": 954.6
            },
            {
                "nome": "Lodatyr",
                "precoBase": 2132.55
            },
            {
                "nome": "Saumya",
                "precoBase": 6397.73
            }
        ],
        "precoReferencia": 6397.74,
        "sinonimias": []
    },
    {
        "id": "med-00547",
        "nome": "Azilect",
        "principioAtivo": "Mesilato de Rasagilina",
        "descricao": "Antiparkinsonianos",
        "apresentacoes": [
            "1 MG COM CT BL AL AL x 10",
            "1 MG COM CT BL AL AL x 30"
        ],
        "genericos": [
            {
                "nome": "Mesilato de Rasagilina",
                "precoBase": 54.21
            },
            {
                "nome": "Gilmov",
                "precoBase": 87.4
            }
        ],
        "precoReferencia": 89.48,
        "sinonimias": []
    },
    {
        "id": "med-00548",
        "nome": "Xadago",
        "principioAtivo": "Mesilato de Safinamida",
        "descricao": "Antiparkinsonianos",
        "apresentacoes": [
            "100 MG COM REV CT BL AL PLAS  PVC/PVDC  TRANS X 30",
            "50 MG COM REV CT BL AL PLAS  PVC/PVDC  TRANS X 30",
            "50 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 14"
        ],
        "genericos": [
            {
                "nome": "Tulips",
                "precoBase": 60.04
            }
        ],
        "precoReferencia": 120.11,
        "sinonimias": []
    },
    {
        "id": "med-00549",
        "nome": "Pentasa",
        "principioAtivo": "Messalazina",
        "descricao": "Produtos aminosalicilatos para alterações intestinais",
        "apresentacoes": [
            "10 MG/ML SUS RET CT ENVOL 7 FR APLIC PLAS PEBD OPC X 100 ML + VALV"
        ],
        "genericos": [
            {
                "nome": "Mesacol",
                "precoBase": 85.07
            },
            {
                "nome": "Chron-asa 5",
                "precoBase": 110.51
            },
            {
                "nome": "Mesalazina",
                "precoBase": 118.85
            }
        ],
        "precoReferencia": 349.73,
        "sinonimias": []
    },
    {
        "id": "med-00550",
        "nome": "Espasmo Dimetiliv",
        "principioAtivo": "Metilbrometo de Homatropina;simeticona",
        "descricao": "Antiespasmódicos associados com outros produtos",
        "apresentacoes": [
            "80 MG/ML + 2,5 MG/ML EMU OR CT FR GOT PLAS OPC X 20 ML "
        ],
        "genericos": [
            {
                "nome": "Simeticona + Metilbrometo de Homatropina",
                "precoBase": 17.6
            },
            {
                "nome": "Espasmo Flatol",
                "precoBase": 28.01
            }
        ],
        "precoReferencia": 29.62,
        "sinonimias": []
    },
    {
        "id": "med-00551",
        "nome": "Aldomet",
        "principioAtivo": "Metildopa",
        "descricao": "Anti-hipertensivos puro-ação central",
        "apresentacoes": [
            "250 MG COM REV CT BL AL PLAS TRANS X 30",
            "500 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Metildopa",
                "precoBase": 29.55
            }
        ],
        "precoReferencia": 47.15,
        "sinonimias": []
    },
    {
        "id": "med-00552",
        "nome": "Tensioval",
        "principioAtivo": "Metildopa Sesqui-hidratada",
        "descricao": "Anti-hipertensivos puro-ação central",
        "apresentacoes": [
            "250 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 20",
            "250 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 30",
            "250 MG COM REV CX BL AL PLAS PVC/PVDC TRANS X 490",
            "250 MG COM REV CX BL AL PLAS PVC/PVDC TRANS X 500"
        ],
        "genericos": [
            {
                "nome": "Metildopa",
                "precoBase": 19.05
            }
        ],
        "precoReferencia": 42.41,
        "sinonimias": []
    },
    {
        "id": "med-00553",
        "nome": "Hytas",
        "principioAtivo": "Metotrexato",
        "descricao": "Agentes antineoplásicos antimetabólitos",
        "apresentacoes": [
            "100 MG/ ML SOL INJ FA VD TRANS X 10 ML "
        ],
        "genericos": [
            {
                "nome": "Mexy",
                "precoBase": 51.9
            }
        ],
        "precoReferencia": 569.36,
        "sinonimias": []
    },
    {
        "id": "med-00554",
        "nome": "Metrexato",
        "principioAtivo": "Metotrexato de Sódio",
        "descricao": "Agentes antineoplásicos antimetabólitos",
        "apresentacoes": [
            "2,5 MG COM CT BL AL PLAS PVC AMB X 24"
        ],
        "genericos": [
            {
                "nome": "Metotrexato",
                "precoBase": 5.17
            }
        ],
        "precoReferencia": 44.44,
        "sinonimias": []
    },
    {
        "id": "med-00555",
        "nome": "Rozex",
        "principioAtivo": "Metronidazol",
        "descricao": "Antiacneicos tópicos",
        "apresentacoes": [
            "7,5 MG/G GEL CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Metronidazol",
                "precoBase": 15.18
            },
            {
                "nome": "Meflagin",
                "precoBase": 22.12
            },
            {
                "nome": "Helmizol",
                "precoBase": 24.96
            },
            {
                "nome": "Neometrodazol",
                "precoBase": 26.56
            },
            {
                "nome": "Canderm",
                "precoBase": 26.86
            },
            {
                "nome": "Flagyl",
                "precoBase": 29.51
            }
        ],
        "precoReferencia": 117.66,
        "sinonimias": []
    },
    {
        "id": "med-00556",
        "nome": "Cellcept",
        "principioAtivo": "Micofenolato de Mofetila",
        "descricao": "Outros imunossupressores",
        "apresentacoes": [
            "500 MG COM REV CT  BL AL PLAS OPC X 50"
        ],
        "genericos": [
            {
                "nome": "Micofenolato de Mofetila",
                "precoBase": 204.28
            },
            {
                "nome": "Gnimi",
                "precoBase": 237.5
            },
            {
                "nome": "Mofecell",
                "precoBase": 294.41
            }
        ],
        "precoReferencia": 1730.96,
        "sinonimias": []
    },
    {
        "id": "med-00557",
        "nome": "Biotoss",
        "principioAtivo": "Mikania Glomerata Spreng.",
        "descricao": "Expectorantes",
        "apresentacoes": [
            "0,05 ML/ML SOL OR CT FR PLAS OPC X 120 ML"
        ],
        "genericos": [
            {
                "nome": "Livtós",
                "precoBase": 17.14
            }
        ],
        "precoReferencia": 38.0,
        "sinonimias": []
    },
    {
        "id": "med-00558",
        "nome": "Eniagor",
        "principioAtivo": "Minoxidil",
        "descricao": "Outras preparações dermatologicas",
        "apresentacoes": [
            "50 MG/ML SOL CAPI CT 2 FR PLAS PEAD OPC X 50 ML + CTG",
            "50 MG/ML SOL CAPI CT 2 FR PLAS PEAD OPC X 50 ML + VALV",
            "50 MG/ML SOL CAPI CT 3 FR PLAS PEAD OPC X 50 ML + CTG",
            "50 MG/ML SOL CAPI CT 3 FR PLAS PEAD OPC X 50 ML + VALV"
        ],
        "genericos": [
            {
                "nome": "Capitrat Men",
                "precoBase": 55.31
            },
            {
                "nome": "Kedaxyl",
                "precoBase": 55.54
            },
            {
                "nome": "Minoxidil",
                "precoBase": 79.5
            },
            {
                "nome": "Dixil",
                "precoBase": 95.3
            },
            {
                "nome": "Pilox",
                "precoBase": 113.43
            },
            {
                "nome": "Pant Sec",
                "precoBase": 120.14
            }
        ],
        "precoReferencia": 205.69,
        "sinonimias": []
    },
    {
        "id": "med-00559",
        "nome": "Myrbetric",
        "principioAtivo": "Mirabegrona",
        "descricao": "Produtos para incontinência urinária",
        "apresentacoes": [
            "25 MG COM REV LIB PROL CT BL AL/AL X 30",
            "50 MG COM REV LIB PROL CT BL AL/AL X 10",
            "50 MG COM REV LIB PROL CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Mirabegrona",
                "precoBase": 67.18
            },
            {
                "nome": "Mirab",
                "precoBase": 110.95
            },
            {
                "nome": "Micpure",
                "precoBase": 110.97
            }
        ],
        "precoReferencia": 110.95,
        "sinonimias": []
    },
    {
        "id": "med-00560",
        "nome": "Remeron",
        "principioAtivo": "Mirtazapina",
        "descricao": "Antidepressivos todos os outros",
        "apresentacoes": [
            "15 MG COM ORODISP CT BL AL PLAS PVC TRANS X 30",
            "15 MG COM ORODISP CT BL AL PLAS PVC TRANS X 6",
            "30 MG COM ORODISP CT BL AL PLAS PVC TRANS X 30",
            "30 MG COM ORODISP CT BL AL PLAS PVC TRANS X 6"
        ],
        "genericos": [
            {
                "nome": "Catarse Odt",
                "precoBase": 12.79
            },
            {
                "nome": "Razapina",
                "precoBase": 23.07
            },
            {
                "nome": "Mirtazapina",
                "precoBase": 25.73
            },
            {
                "nome": "Menelat Odt",
                "precoBase": 36.97
            },
            {
                "nome": "Menelat",
                "precoBase": 125.38
            },
            {
                "nome": "Zapsy",
                "precoBase": 172.51
            }
        ],
        "precoReferencia": 42.48,
        "sinonimias": []
    },
    {
        "id": "med-00561",
        "nome": "Monocordil",
        "principioAtivo": "Mononitrato de Isossorbida",
        "descricao": "Nitritos e nitratos",
        "apresentacoes": [
            "20 MG COM CT 2 BL AL PLAS TRANS X 15",
            "20 MG COM CT BL AL PLAS TRANS X 20",
            "40 MG COM CT 2 BL AL PLAS TRANS X 15",
            "5 MG COM SUBL CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Mononitrato de Isossorbida",
                "precoBase": 11.76
            },
            {
                "nome": "Cincordil",
                "precoBase": 19.75
            },
            {
                "nome": "Coronar",
                "precoBase": 23.03
            }
        ],
        "precoReferencia": 18.64,
        "sinonimias": []
    },
    {
        "id": "med-00562",
        "nome": "Levolukast",
        "principioAtivo": "Montelucaste de Sódio",
        "descricao": "Antiasmáticos/dpoc antileucotrienos sistêmicos",
        "apresentacoes": [
            "10MG + 5MG COM REV CT FR PLAS OPC X 14",
            "10MG + 5MG COM REV CT FR PLAS OPC X 7  "
        ],
        "genericos": [
            {
                "nome": "Montelucaste de Sódio",
                "precoBase": 8.82
            },
            {
                "nome": "Ária",
                "precoBase": 26.01
            },
            {
                "nome": "Piemonte",
                "precoBase": 29.91
            },
            {
                "nome": "Montelair",
                "precoBase": 35.77
            },
            {
                "nome": "Montelucaste de Sodio",
                "precoBase": 39.3
            },
            {
                "nome": "Oxcene",
                "precoBase": 42.55
            }
        ],
        "precoReferencia": 73.85,
        "sinonimias": []
    },
    {
        "id": "med-00563",
        "nome": "Lemont",
        "principioAtivo": "Montelucaste de Sódio;dicloridrato de Levocetirizina",
        "descricao": "Antiasmáticos/dpoc antileucotrienos sistêmicos",
        "apresentacoes": [
            "(10 + 5) MG COM REV CT FR PLAS PEAD 25 OPC X 14",
            "(10 + 5) MG COM REV CT FR PLAS PEAD 25 OPC X 7"
        ],
        "genericos": [
            {
                "nome": "Montelucaste de Sódio + Dicloridrato de Levocetirizina",
                "precoBase": 44.74
            },
            {
                "nome": "Rizi-m",
                "precoBase": 73.85
            }
        ],
        "precoReferencia": 73.85,
        "sinonimias": []
    },
    {
        "id": "med-00564",
        "nome": "Bactroban",
        "principioAtivo": "Mupirocina",
        "descricao": "Antibióticos tópicos",
        "apresentacoes": [
            "20 MG/G POM DERM CT TB AL X 10 G"
        ],
        "genericos": [
            {
                "nome": "Mupirocina",
                "precoBase": 51.15
            },
            {
                "nome": "Dermoban",
                "precoBase": 83.67
            },
            {
                "nome": "Bacrocin",
                "precoBase": 84.16
            }
        ],
        "precoReferencia": 57.29,
        "sinonimias": []
    },
    {
        "id": "med-00565",
        "nome": "Naprox",
        "principioAtivo": "Naproxeno",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "500 MG COM CT BL AL PLAS LAR X 10   ",
            "500 MG COM CT BL AL PLAS LAR X 20"
        ],
        "genericos": [
            {
                "nome": "Naproxeno",
                "precoBase": 17.12
            },
            {
                "nome": "Naxotec",
                "precoBase": 20.85
            }
        ],
        "precoReferencia": 23.01,
        "sinonimias": []
    },
    {
        "id": "med-00566",
        "nome": "Flanax xr",
        "principioAtivo": "Naproxeno Sódico",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "660 MG COM REV LIB PROL CT STR AL PLAS PES/PET/PEBD OPC X 8"
        ],
        "genericos": [
            {
                "nome": "Flanax",
                "precoBase": 15.88
            },
            {
                "nome": "Naproxeno Sodico",
                "precoBase": 18.71
            },
            {
                "nome": "Doriipro",
                "precoBase": 27.19
            },
            {
                "nome": "Naproxeno Sódico",
                "precoBase": 28.39
            },
            {
                "nome": "Globonaxx",
                "precoBase": 29.35
            },
            {
                "nome": "Napronax",
                "precoBase": 33.82
            }
        ],
        "precoReferencia": 33.0,
        "sinonimias": []
    },
    {
        "id": "med-00567",
        "nome": "Niquitin",
        "principioAtivo": "Nicotina",
        "descricao": "Produtos antitabaco",
        "apresentacoes": [
            "14 MG ADES TRANSD TRANS CT ENV AL PE X 7",
            "2 MG PAS DURA CT BL AL/AL X 36",
            "21 MG ADES TRANSD TRANS CT ENV AL PE X 7",
            "4 MG PAS DURA CT BL AL/AL X 36"
        ],
        "genericos": [
            {
                "nome": "Nicorette",
                "precoBase": 60.19
            },
            {
                "nome": "Nicotinell",
                "precoBase": 65.79
            }
        ],
        "precoReferencia": 127.14,
        "sinonimias": []
    },
    {
        "id": "med-00568",
        "nome": "Nifedipress",
        "principioAtivo": "Nifedipino",
        "descricao": "Antagonistas do cálcio puros",
        "apresentacoes": [
            "20 MG COM RETARD CT BL AL PLAS AMB X 30 "
        ],
        "genericos": [
            {
                "nome": "Neo Fedipina",
                "precoBase": 24.12
            }
        ],
        "precoReferencia": 30.53,
        "sinonimias": []
    },
    {
        "id": "med-00569",
        "nome": "Arflex Retard",
        "principioAtivo": "Nimesulida",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "200 MG CAP AP CT BL AL PLAS TRANS X 12 ",
            "200 MG CAP AP CT BL AL PLAS TRANS X 6 "
        ],
        "genericos": [
            {
                "nome": "Nimesulida",
                "precoBase": 15.08
            },
            {
                "nome": "Nimelit",
                "precoBase": 18.21
            },
            {
                "nome": "Lide",
                "precoBase": 21.3
            },
            {
                "nome": "Nisulid",
                "precoBase": 24.89
            },
            {
                "nome": "Scaflogin",
                "precoBase": 25.67
            },
            {
                "nome": "Nimesilam",
                "precoBase": 28.56
            }
        ],
        "precoReferencia": 53.74,
        "sinonimias": []
    },
    {
        "id": "med-00570",
        "nome": "Maxsulid",
        "principioAtivo": "Nimesulida Betaciclodextrina",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "400 MG COM CT BL AL PLAS TRANS X 10",
            "400 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Nib",
                "precoBase": 16.91
            },
            {
                "nome": "Zulic",
                "precoBase": 19.68
            },
            {
                "nome": "Nimus Beta",
                "precoBase": 21.34
            },
            {
                "nome": "Nimesulida Betaciclodextrina",
                "precoBase": 32.36
            }
        ],
        "precoReferencia": 53.44,
        "sinonimias": []
    },
    {
        "id": "med-00571",
        "nome": "Nivux",
        "principioAtivo": "Nimesulida;pantoprazol Sódico Sesqui-hidratado",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "(100 + 20) MG COM LIB MOD CT BL AL AL X 10",
            "(100 + 20) MG COM LIB MOD CT BL AL AL X 12",
            "(100 + 20) MG COM LIB MOD CT BL AL AL X 6"
        ],
        "genericos": [
            {
                "nome": "Nidue",
                "precoBase": 49.08
            }
        ],
        "precoReferencia": 49.08,
        "sinonimias": []
    },
    {
        "id": "med-00572",
        "nome": "Neo Mistatin",
        "principioAtivo": "Nistatina",
        "descricao": "Antifúngicos ginecológicos",
        "apresentacoes": [
            "25.000 UI/G CREM VAG CT BG AL X 60 G + 14 APLIC"
        ],
        "genericos": [
            {
                "nome": "Nistatina",
                "precoBase": 16.62
            },
            {
                "nome": "Nistrazin",
                "precoBase": 27.66
            },
            {
                "nome": "Canditrat",
                "precoBase": 29.13
            },
            {
                "nome": "Micostalab",
                "precoBase": 29.26
            },
            {
                "nome": "Nistamax",
                "precoBase": 36.93
            },
            {
                "nome": "Albistin",
                "precoBase": 41.21
            }
        ],
        "precoReferencia": 43.86,
        "sinonimias": []
    },
    {
        "id": "med-00573",
        "nome": "Colpistatin",
        "principioAtivo": "Nistatina;cloreto de Benzalcônio;benzoilmetronidazol",
        "descricao": "Tricomonicidas tópicos",
        "apresentacoes": [
            "62,5 MG/G + 25.000 UI/G + 1,25 MG/G CREM VAG CT BG AL X 40 G + 10 APLIC"
        ],
        "genericos": [
            {
                "nome": "Benzoilmetronidazol + Nistatina + Cloreto de Benzalcônio",
                "precoBase": 50.81
            },
            {
                "nome": "Colpist mt",
                "precoBase": 52.25
            }
        ],
        "precoReferencia": 84.28,
        "sinonimias": []
    },
    {
        "id": "med-00574",
        "nome": "Tricomax",
        "principioAtivo": "Nistatina;metronidazol",
        "descricao": "Tricomonicidas tópicos",
        "apresentacoes": [
            "100 MG/G + 20.000 UI/G CREM VAG CT BG AL X 50 G + 10 APLIC DESCART"
        ],
        "genericos": [
            {
                "nome": "Metronidazol + Nistatina",
                "precoBase": 48.92
            },
            {
                "nome": "Trinodazol Nistatina",
                "precoBase": 65.21
            }
        ],
        "precoReferencia": 93.41,
        "sinonimias": []
    },
    {
        "id": "med-00575",
        "nome": "Pomaglós Tratamento",
        "principioAtivo": "Nistatina;oxido de Zinco",
        "descricao": "Antifúngicos dermatológicos tópicos",
        "apresentacoes": [
            "100.000 UI/G + 200 MG/G POM DERM CT BG AL X 60 G "
        ],
        "genericos": [
            {
                "nome": "Nistatina + Óxido de Zinco",
                "precoBase": 36.07
            }
        ],
        "precoReferencia": 37.02,
        "sinonimias": []
    },
    {
        "id": "med-00576",
        "nome": "Dermodex",
        "principioAtivo": "Nistatina;óxido de Zinco",
        "descricao": "Antifúngicos dermatológicos tópicos",
        "apresentacoes": [
            "100.000 UI/G + 200 MG/G POM DERM CT BG AL X 60 G"
        ],
        "genericos": [
            {
                "nome": "Nistatina + Óxido de Zinco",
                "precoBase": 28.98
            },
            {
                "nome": "Nistatina + Oxido de Zinco",
                "precoBase": 29.27
            },
            {
                "nome": "Pratiderm",
                "precoBase": 30.65
            },
            {
                "nome": "Nistatina+oxido de Zinco",
                "precoBase": 32.57
            },
            {
                "nome": "Babymed Tratamento",
                "precoBase": 33.7
            },
            {
                "nome": "Alivbaby",
                "precoBase": 36.1
            }
        ],
        "precoReferencia": 107.97,
        "sinonimias": []
    },
    {
        "id": "med-00577",
        "nome": "Annita",
        "principioAtivo": "Nitazoxanida",
        "descricao": "Outros antiparasitários",
        "apresentacoes": [
            "20 MG/ML PÓ SUS OR CT FR VD AMB X 100 ML + SER DOS",
            "20 MG/ML PÓ SUS OR CT FR VD AMB X 45 ML + SER DOS",
            "500 MG COM REV CT BL AL PLAS PVC TRANS X 6 "
        ],
        "genericos": [
            {
                "nome": "Nitazoxanida",
                "precoBase": 27.73
            },
            {
                "nome": "Irosê",
                "precoBase": 28.85
            },
            {
                "nome": "Epará",
                "precoBase": 30.77
            },
            {
                "nome": "Mínti",
                "precoBase": 30.83
            },
            {
                "nome": "Nydda",
                "precoBase": 39.65
            },
            {
                "nome": "Naxxagran",
                "precoBase": 39.88
            }
        ],
        "precoReferencia": 47.42,
        "sinonimias": []
    },
    {
        "id": "med-00578",
        "nome": "Orfadin",
        "principioAtivo": "Nitisinona",
        "descricao": "Outros produtos para o aparelho digestório e metabolismo",
        "apresentacoes": [
            "10 MG CAP DURA CT FR PLAS PEAD OPC X 60",
            "2 MG CAP DURA CT FR PLAS PEAD OPC X 60",
            "20 MG CAP DURA CT FR PLAS PEAD OPC X 60",
            "4 MG/ML SUS OR CT FR VD AMB X 90 ML + 3 SER DOS"
        ],
        "genericos": [
            {
                "nome": "Nitikabs",
                "precoBase": 4430.11
            }
        ],
        "precoReferencia": 4430.24,
        "sinonimias": []
    },
    {
        "id": "med-00579",
        "nome": "Gynazole-1",
        "principioAtivo": "Nitrato de Butoconazol",
        "descricao": "Antifúngicos ginecológicos",
        "apresentacoes": [
            "20 MG/G CREM VAG CT ENVOL APLIC PREENC PLAS TRANS X 5 G"
        ],
        "genericos": [
            {
                "nome": "Nitrato de Butoconazol",
                "precoBase": 73.38
            },
            {
                "nome": "Femmesil",
                "precoBase": 121.23
            },
            {
                "nome": "Umma",
                "precoBase": 121.23
            },
            {
                "nome": "Unyca",
                "precoBase": 121.23
            }
        ],
        "precoReferencia": 121.23,
        "sinonimias": []
    },
    {
        "id": "med-00580",
        "nome": "Fentizol",
        "principioAtivo": "Nitrato de Fenticonazol",
        "descricao": "Antifúngicos ginecológicos",
        "apresentacoes": [
            "20 MG/G CREM DERM CT BG AL X 20 G",
            "20 MG/G CREM DERM CT BG AL X 30 G",
            "20 MG/G CREM VAG CT BG AL X 40 G + 7 APLIC ",
            "20 MG/ML SOL SPR DERM CT FR SPR PLAS PEAD OPC X 30 ML"
        ],
        "genericos": [
            {
                "nome": "Vagicand",
                "precoBase": 48.12
            },
            {
                "nome": "Ginna",
                "precoBase": 51.35
            },
            {
                "nome": "Nitrato de Fenticonazol",
                "precoBase": 57.28
            }
        ],
        "precoReferencia": 46.33,
        "sinonimias": []
    },
    {
        "id": "med-00581",
        "nome": "Gyno-icaden",
        "principioAtivo": "Nitrato de Isoconazol",
        "descricao": "Antifúngicos ginecológicos",
        "apresentacoes": [
            "10 MG/G CREM VAG CT BG X 40 G + 7 APLIC",
            "600 MG OVL CT STR X 1 + DEDEIRA"
        ],
        "genericos": [
            {
                "nome": "Icaden",
                "precoBase": 54.34
            },
            {
                "nome": "Nitrato de Isoconazol",
                "precoBase": 61.3
            }
        ],
        "precoReferencia": 107.84,
        "sinonimias": []
    },
    {
        "id": "med-00582",
        "nome": "Gino Mizonol",
        "principioAtivo": "Nitrato de Miconazol",
        "descricao": "Antifúngicos ginecológicos",
        "apresentacoes": [
            "20 MG/G CREM VAG CT BG AL X 80 G + 14 APLIC "
        ],
        "genericos": [
            {
                "nome": "Nitrato de Miconazol",
                "precoBase": 20.93
            },
            {
                "nome": "Micozen",
                "precoBase": 34.53
            },
            {
                "nome": "Mizonol",
                "precoBase": 34.64
            },
            {
                "nome": "Vodol",
                "precoBase": 36.49
            }
        ],
        "precoReferencia": 52.84,
        "sinonimias": []
    },
    {
        "id": "med-00583",
        "nome": "Gino-colon",
        "principioAtivo": "Nitrato de Miconazol;tinidazol",
        "descricao": "Tricomonicidas tópicos",
        "apresentacoes": [
            "(30 + 20) MG/G CREM VAG CT BG AL X 45G + 7 APLIC"
        ],
        "genericos": [
            {
                "nome": "Tinidazol + Nitrato de Miconazol",
                "precoBase": 32.41
            },
            {
                "nome": "Amplium g",
                "precoBase": 43.8
            }
        ],
        "precoReferencia": 60.14,
        "sinonimias": []
    },
    {
        "id": "med-00584",
        "nome": "Oxipelle",
        "principioAtivo": "Nitrato de Oxiconazol",
        "descricao": "Antifúngicos dermatológicos tópicos",
        "apresentacoes": [
            "10 MG/G CREM DERM CT BG AL X 20 G",
            "10 MG/ML SOL TOP CT FR GOT PLAS OPC X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Nitrato de Oxiconazol",
                "precoBase": 28.92
            }
        ],
        "precoReferencia": 60.35,
        "sinonimias": []
    },
    {
        "id": "med-00585",
        "nome": "Citoneurin 5000 Tabs",
        "principioAtivo": "Nitrato de Tiamina;cianocobalamina;cloridrato de Piridoxina",
        "descricao": "Associações vitamina b1+ b6 e/ou b12",
        "apresentacoes": [
            "5000 MCG + 100 MG + 100 MG  COM REV CT BL AL PLAS OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Nevrix",
                "precoBase": 26.24
            },
            {
                "nome": "Renovi b",
                "precoBase": 26.51
            },
            {
                "nome": "Citobê",
                "precoBase": 27.03
            },
            {
                "nome": "Neo b",
                "precoBase": 27.11
            },
            {
                "nome": "Citoneurin",
                "precoBase": 51.03
            },
            {
                "nome": "Trirubin",
                "precoBase": 67.31
            }
        ],
        "precoReferencia": 188.1,
        "sinonimias": []
    },
    {
        "id": "med-00586",
        "nome": "Sonebon",
        "principioAtivo": "Nitrazepam",
        "descricao": "Hipnóticos e sedativos não barbitúricos puros",
        "apresentacoes": [
            "5 MG COM CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Nitrazepam (port 344/98 Lista B1)",
                "precoBase": 14.86
            }
        ],
        "precoReferencia": 17.02,
        "sinonimias": []
    },
    {
        "id": "med-00587",
        "nome": "Caltren",
        "principioAtivo": "Nitrendipino",
        "descricao": "Antagonistas do cálcio puros",
        "apresentacoes": [
            "10 MG COM CT 2 BL AL PLAS AMB X 15",
            "20 MG COM CT 2 BL AL PLAS AMB X 15"
        ],
        "genericos": [
            {
                "nome": "Nitrendipino",
                "precoBase": 40.4
            },
            {
                "nome": "Nitrencord",
                "precoBase": 43.35
            }
        ],
        "precoReferencia": 89.53,
        "sinonimias": []
    },
    {
        "id": "med-00588",
        "nome": "Macrodantina",
        "principioAtivo": "Nitrofurantoína",
        "descricao": "Outros anti-séptcos urinários",
        "apresentacoes": [
            "100 MG CAP GEL DURA CT BL AL PLAS TRANS X 144  ",
            "100 MG CAP GEL DURA CT BL AL PLAS TRANS X 28",
            "100 MG CAP GEL DURA CT BL AL PLAS TRANS X 40"
        ],
        "genericos": [
            {
                "nome": "Nitrofurantoina",
                "precoBase": 10.68
            },
            {
                "nome": "Nitrofen",
                "precoBase": 17.4
            }
        ],
        "precoReferencia": 17.6,
        "sinonimias": []
    },
    {
        "id": "med-00589",
        "nome": "Norestin",
        "principioAtivo": "Noretisterona",
        "descricao": "Preparações orais com progestagênios somente",
        "apresentacoes": [
            "0,35 MG COM CT BL AL PLAS TRANS X 35"
        ],
        "genericos": [
            {
                "nome": "Noretisterona",
                "precoBase": 11.22
            }
        ],
        "precoReferencia": 16.27,
        "sinonimias": []
    },
    {
        "id": "med-00590",
        "nome": "Floximed",
        "principioAtivo": "Norfloxacino",
        "descricao": "Fluorquinolonas orais",
        "apresentacoes": [
            "400 MG COM REV CT BL AL PLAS TRANS X 420"
        ],
        "genericos": [
            {
                "nome": "Urotrobel",
                "precoBase": 18.51
            },
            {
                "nome": "Norfloxacino",
                "precoBase": 27.61
            },
            {
                "nome": "Norxacin",
                "precoBase": 40.83
            },
            {
                "nome": "Norf",
                "precoBase": 42.01
            },
            {
                "nome": "Floxamox",
                "precoBase": 45.4
            }
        ],
        "precoReferencia": 945.03,
        "sinonimias": []
    },
    {
        "id": "med-00591",
        "nome": "Oflox",
        "principioAtivo": "Ofloxacino",
        "descricao": "Antiinfeccios oftalmológicos",
        "apresentacoes": [
            "3 MG/ML SOL OFT CT FR PLAS OPC GOT X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Ofloxacino",
                "precoBase": 31.62
            },
            {
                "nome": "Nostil",
                "precoBase": 55.98
            }
        ],
        "precoReferencia": 56.42,
        "sinonimias": []
    },
    {
        "id": "med-00592",
        "nome": "Zyprexa",
        "principioAtivo": "Olanzapina",
        "descricao": "Antipsicóticos atípicos",
        "apresentacoes": [
            "10 MG COM ORODISP CT BL AL AL X 28",
            "10 MG COM REV CT BL AL AL  X 30",
            "2,5 MG COM REV CT BL AL AL X 30",
            "5 MG COM ORODISP CT BL AL AL X 28"
        ],
        "genericos": [
            {
                "nome": "Olanzapina",
                "precoBase": 90.02
            },
            {
                "nome": "Olanexyn",
                "precoBase": 93.1
            },
            {
                "nome": "Zopix",
                "precoBase": 97.94
            },
            {
                "nome": "Zap",
                "precoBase": 114.57
            },
            {
                "nome": "Axonium",
                "precoBase": 137.59
            },
            {
                "nome": "Onaz",
                "precoBase": 206.47
            }
        ],
        "precoReferencia": 645.76,
        "sinonimias": []
    },
    {
        "id": "med-00593",
        "nome": "Olmetec",
        "principioAtivo": "Olmesartana Medoxomila",
        "descricao": "Antagonistas da angiotensina ii puros",
        "apresentacoes": [
            "20 MG COM REV CT BL AL/AL X 10 ",
            "20 MG COM REV CT BL AL/AL X 30 ",
            "40 MG COM REV CT BL AL/AL X 30 "
        ],
        "genericos": [
            {
                "nome": "Olmesartana Medoxomila",
                "precoBase": 17.82
            },
            {
                "nome": "Holmes",
                "precoBase": 17.89
            },
            {
                "nome": "Olsar",
                "precoBase": 17.89
            },
            {
                "nome": "Olmecor",
                "precoBase": 19.12
            },
            {
                "nome": "Olmedix",
                "precoBase": 29.04
            },
            {
                "nome": "Olmy",
                "precoBase": 29.04
            }
        ],
        "precoReferencia": 70.99,
        "sinonimias": []
    },
    {
        "id": "med-00594",
        "nome": "Neoprazol",
        "principioAtivo": "Omeprazol",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "20 MG CAP DURA CT FR PLAS OPC X 28",
            "40 MG CAP DURA CT FR PLAS OPC X 28"
        ],
        "genericos": [
            {
                "nome": "Omeprazol",
                "precoBase": 9.07
            },
            {
                "nome": "Lozeprel",
                "precoBase": 10.27
            },
            {
                "nome": "Pratiprazol",
                "precoBase": 11.39
            },
            {
                "nome": "Omoprel",
                "precoBase": 27.64
            },
            {
                "nome": "Novoprazol",
                "precoBase": 28.93
            },
            {
                "nome": "Eupept",
                "precoBase": 46.04
            }
        ],
        "precoReferencia": 117.76,
        "sinonimias": []
    },
    {
        "id": "med-00595",
        "nome": "Ono",
        "principioAtivo": "Ondansetrona",
        "descricao": "Antieméticos e antinauseantes, antagonistas da serotonina",
        "apresentacoes": [
            "4 MG COM ORODISP CT BL AL PLAS PVC/PVDC OPC X 10",
            "4 MG COM ORODISP CT BL AL PLAS PVC/PVDC OPC X 30",
            "8 MG COM ORODISP CT BL AL PLAS PVC/PVDC OPC X 10",
            "8 MG COM ORODISP CT BL AL PLAS PVC/PVDC OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Ondansetrona",
                "precoBase": 10.6
            },
            {
                "nome": "Kemyza",
                "precoBase": 17.75
            },
            {
                "nome": "Ondif",
                "precoBase": 27.2
            }
        ],
        "precoReferencia": 44.86,
        "sinonimias": []
    },
    {
        "id": "med-00596",
        "nome": "Orlax",
        "principioAtivo": "Orlipastat",
        "descricao": "Preparações antiobesidade, exceto os dietéticos",
        "apresentacoes": [
            "120 MG CAP DURA CT BL AL PLAS TRANS X 42",
            "120 MG CAP DURA CT BL AL PLAS TRANS X 84"
        ],
        "genericos": [
            {
                "nome": "Lipoxen",
                "precoBase": 128.57
            },
            {
                "nome": "Orlistate",
                "precoBase": 140.59
            },
            {
                "nome": "Lipiblock",
                "precoBase": 216.28
            },
            {
                "nome": "Orlipid",
                "precoBase": 273.44
            },
            {
                "nome": "Siluestat",
                "precoBase": 280.84
            }
        ],
        "precoReferencia": 333.41,
        "sinonimias": []
    },
    {
        "id": "med-00597",
        "nome": "Orlibe",
        "principioAtivo": "Orlistate",
        "descricao": "Preparações antiobesidade, exceto os dietéticos",
        "apresentacoes": [
            "120 MG CAP DURA CT BL AL PLAS TRANS X 21",
            "120 MG CAP DURA CT BL AL PLAS TRANS X 210 (EMB FRAC)",
            "120 MG CAP DURA CT BL AL PLAS TRANS X 360",
            "120 MG CAP DURA CT BL AL PLAS TRANS X 42"
        ],
        "genericos": [
            {
                "nome": "Orlistate",
                "precoBase": 114.24
            },
            {
                "nome": "Lipiblock",
                "precoBase": 127.96
            }
        ],
        "precoReferencia": 155.99,
        "sinonimias": []
    },
    {
        "id": "med-00598",
        "nome": "Lexapro",
        "principioAtivo": "Oxalato de Escitalopram",
        "descricao": "Antidepressivos ssri",
        "apresentacoes": [
            "10 MG  COM REV CT BL AL PLAS TRANS X 30",
            "10 MG  COM REV CT BL AL PLAS TRANS X 60",
            "15 MG  COM REV CT BL AL PLAS TRANS X 30",
            "15 MG  COM REV CT BL AL PLAS TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Esc Odt",
                "precoBase": 22.73
            },
            {
                "nome": "Eudok",
                "precoBase": 28.66
            },
            {
                "nome": "Esc",
                "precoBase": 29.48
            },
            {
                "nome": "Reconter Odt",
                "precoBase": 44.78
            },
            {
                "nome": "Oxalato de Escitalopram",
                "precoBase": 46.26
            },
            {
                "nome": "Escena",
                "precoBase": 58.25
            }
        ],
        "precoReferencia": 448.74,
        "sinonimias": []
    },
    {
        "id": "med-00599",
        "nome": "Trileptal",
        "principioAtivo": "Oxcarbazepina",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "300 MG COM REV CT BL AL PLAS PVC/PE/PVDC TRANS X 10",
            "300 MG COM REV CT BL AL PLAS PVC/PE/PVDC TRANS X 20",
            "300 MG COM REV CT BL AL PLAS PVC/PE/PVDC TRANS X 60",
            "60 MG/ML SUS OR CT FR VD AMB X 100 ML + 2 SER DOS "
        ],
        "genericos": [
            {
                "nome": "Oleptal",
                "precoBase": 21.57
            },
            {
                "nome": "Oxcarbazepina",
                "precoBase": 50.64
            },
            {
                "nome": "Oxcarb",
                "precoBase": 85.25
            }
        ],
        "precoReferencia": 44.83,
        "sinonimias": []
    },
    {
        "id": "med-00600",
        "nome": "Ibrance",
        "principioAtivo": "Palbociclibe",
        "descricao": "Inibidores preoteína kinase antineoplásicos, cdk 4/6",
        "apresentacoes": [
            "100 MG CAP DURA CT FR PLAS PEAD OPC X 21",
            "125 MG CAP DURA CT FR PLAS PEAD OPC X 21",
            "75 MG CAP DURA CT FR PLAS PEAD OPC X 21"
        ],
        "genericos": [
            {
                "nome": "Palbociclibe",
                "precoBase": 2535.38
            },
            {
                "nome": "Cydikriz",
                "precoBase": 4186.03
            },
            {
                "nome": "Sedecib",
                "precoBase": 7866.98
            },
            {
                "nome": "Agatha",
                "precoBase": 12558.07
            }
        ],
        "precoReferencia": 12558.07,
        "sinonimias": []
    },
    {
        "id": "med-00601",
        "nome": "Invega",
        "principioAtivo": "Palmitato de Paliperidona",
        "descricao": "Antipsicóticos atípicos",
        "apresentacoes": [
            "100 MG/ML SUS INJ LIB PROL IM CT 1 SER PREENC PLAS COC TRANS X 0,50 ML+ 2 AGU",
            "100 MG/ML SUS INJ LIB PROL IM CT 1 SER PREENC PLAS COC TRANS X 0,75 ML + 2 AGU",
            "100 MG/ML SUS INJ LIB PROL IM CT 1 SER PREENC PLAS COC TRANS X 1 ML + 2 AGU",
            "100 MG/ML SUS INJ LIB PROL IM CT 1 SER PREENC PLAS COC TRANS X 1,50 ML + 2 AGU"
        ],
        "genericos": [
            {
                "nome": "Palmitato de Paliperidona",
                "precoBase": 827.92
            },
            {
                "nome": "Vegapali",
                "precoBase": 1366.94
            }
        ],
        "precoReferencia": 1999.61,
        "sinonimias": []
    },
    {
        "id": "med-00602",
        "nome": "Pantasun",
        "principioAtivo": "Pantoprazol",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "40 MG PÓ LIOF SOL INJ IV CT FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Adipept",
                "precoBase": 42.26
            },
            {
                "nome": "Pantoprazol Sódico",
                "precoBase": 156.72
            }
        ],
        "precoReferencia": 186.7,
        "sinonimias": []
    },
    {
        "id": "med-00603",
        "nome": "Tecta",
        "principioAtivo": "Pantoprazol Magnésico Di-hidratado",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "40 MG COM REV CT BL AL/AL X 15",
            "40 MG COM REV LIB RETARD CT BL AL/AL X 30",
            "40 MG COM REV LIB RETARDCT BL AL/AL X 60"
        ],
        "genericos": [
            {
                "nome": "Pantoprazol Magnésico Di-hidratado",
                "precoBase": 80.19
            },
            {
                "nome": "Pantoprazol Magnésico",
                "precoBase": 80.19
            },
            {
                "nome": "Restitue",
                "precoBase": 111.49
            },
            {
                "nome": "Dispetic",
                "precoBase": 115.92
            },
            {
                "nome": "Pantoprazol Magnésico Diidratado",
                "precoBase": 369.49
            },
            {
                "nome": "Inilok",
                "precoBase": 609.91
            }
        ],
        "precoReferencia": 277.03,
        "sinonimias": []
    },
    {
        "id": "med-00604",
        "nome": "Pantoprazol Magnésico Di-hidratado",
        "principioAtivo": "Pantoprazol Magnésico Di-hidratado;pantoprazol Sódico Sesqui-hidratado",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "40 MG COM REV LIB RETARD CT BL AL AL X 60"
        ],
        "genericos": [
            {
                "nome": "Divena",
                "precoBase": 142.34
            }
        ],
        "precoReferencia": 738.91,
        "sinonimias": []
    },
    {
        "id": "med-00605",
        "nome": "Pantozol",
        "principioAtivo": "Pantoprazol Sódico Sesqui-hidratado",
        "descricao": "Inibidores da bomba de prótons",
        "apresentacoes": [
            "20 MG COM REV LIB RETARD CT BL AL AL X 14",
            "20 MG COM REV LIB RETARD CT BL AL AL X 28",
            "20 MG COM REV LIB RETARD CT BL AL AL X 42",
            "20 MG COM REV LIB RETARD CT BL AL AL X 56"
        ],
        "genericos": [
            {
                "nome": "Pantoprazol Sódico Sesqui-hidratado",
                "precoBase": 22.14
            },
            {
                "nome": "Gázia",
                "precoBase": 27.03
            },
            {
                "nome": "Pantoprazol",
                "precoBase": 29.02
            },
            {
                "nome": "Pantopaz",
                "precoBase": 30.19
            },
            {
                "nome": "Pantoprazol Sódico",
                "precoBase": 35.49
            },
            {
                "nome": "Prazy",
                "precoBase": 44.65
            }
        ],
        "precoReferencia": 133.87,
        "sinonimias": []
    },
    {
        "id": "med-00606",
        "nome": "Sonridor",
        "principioAtivo": "Paracetamol",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "500 MG COM EFEV CT STR AL/PLAS X 24 "
        ],
        "genericos": [
            {
                "nome": "Tylalgin",
                "precoBase": 8.64
            },
            {
                "nome": "Tylidol",
                "precoBase": 8.71
            },
            {
                "nome": "Paracetamol",
                "precoBase": 10.7
            },
            {
                "nome": "Dorsanol",
                "precoBase": 14.85
            },
            {
                "nome": "Tylemax",
                "precoBase": 17.51
            },
            {
                "nome": "Gripalcê Uno",
                "precoBase": 19.95
            }
        ],
        "precoReferencia": 99.91,
        "sinonimias": []
    },
    {
        "id": "med-00607",
        "nome": "Tylenol dc",
        "principioAtivo": "Paracetamol;cafeína",
        "descricao": "Analgésicos não narcóticos e antipiréticos",
        "apresentacoes": [
            "500 MG + 65 MG COM REV CT BL AL PLAS TRANS X 10",
            "500 MG + 65 MG COM REV CT BL AL PLAS TRANS X 100 (EMB MULT)",
            "500 MG + 65 MG COM REV CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Elcodrix dc",
                "precoBase": 27.49
            },
            {
                "nome": "Paracetamol + Cafeína",
                "precoBase": 28.39
            },
            {
                "nome": "Tylalgin Caf",
                "precoBase": 29.49
            }
        ],
        "precoReferencia": 24.03,
        "sinonimias": []
    },
    {
        "id": "med-00608",
        "nome": "Ultracet",
        "principioAtivo": "Paracetamol;cloridrato de Tramadol",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "37,5 MG + 325 MG COM REV CT BL AL PLAS TRANS X 10",
            "37,5 MG + 325 MG COM REV CT BL AL PLAS TRANS X 20",
            "37,5 MG + 325 MG COM REV CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Daisan",
                "precoBase": 24.17
            },
            {
                "nome": "Cloridrato de Tramadol + Paracetamol",
                "precoBase": 29.62
            },
            {
                "nome": "Tilestal",
                "precoBase": 30.17
            },
            {
                "nome": "Gésico Duo",
                "precoBase": 39.85
            },
            {
                "nome": "Atrace",
                "precoBase": 39.85
            },
            {
                "nome": "Onzuk",
                "precoBase": 47.15
            }
        ],
        "precoReferencia": 73.1,
        "sinonimias": []
    },
    {
        "id": "med-00609",
        "nome": "Tylex",
        "principioAtivo": "Paracetamol;fosfato de Codeína",
        "descricao": "Analgésicos narcóticos",
        "apresentacoes": [
            "500 MG + 30 MG COM CT  BL AL PLAS OPC X 12",
            "500 MG + 30 MG COM CT  BL AL PLAS OPC X 24",
            "500 MG + 30 MG COM CT  BL AL PLAS OPC X 36",
            "500 MG + 7,5 MG COM CT  BL AL PLAS TRANS X 12"
        ],
        "genericos": [
            {
                "nome": "Paracetamol + Fosfato de Codeína",
                "precoBase": 26.64
            },
            {
                "nome": "Paracetamol+fosfato de Codeina",
                "precoBase": 29.03
            },
            {
                "nome": "Paco",
                "precoBase": 35.17
            },
            {
                "nome": "Algicod",
                "precoBase": 35.17
            },
            {
                "nome": "Cod Par",
                "precoBase": 35.72
            },
            {
                "nome": "Agud",
                "precoBase": 36.96
            }
        ],
        "precoReferencia": 36.0,
        "sinonimias": []
    },
    {
        "id": "med-00610",
        "nome": "Pasalix pi",
        "principioAtivo": "Passiflora Incarnata",
        "descricao": "Outros produtos",
        "apresentacoes": [
            "500 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 20",
            "500 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 30",
            "500 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Passiflora Klein",
                "precoBase": 39.72
            }
        ],
        "precoReferencia": 76.25,
        "sinonimias": []
    },
    {
        "id": "med-00611",
        "nome": "Calmasyn",
        "principioAtivo": "Passiflora Incarnata l.",
        "descricao": "Hipnóticos e sedativos herbáceos",
        "apresentacoes": [
            "300 MG COM REV CT BL AL PLAS ACLAR TRANS X 20",
            "37,84 MG/ML SOL ORAL CT FR PLAS AMB X 100 ML + COP",
            "900 MG COM REV CT BL AL PLAS PVC ACLAR TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Pasalix pi",
                "precoBase": 11.11
            },
            {
                "nome": "Novanoite",
                "precoBase": 23.69
            },
            {
                "nome": "Calmalevhy",
                "precoBase": 27.1
            },
            {
                "nome": "Sonozzz",
                "precoBase": 32.2
            },
            {
                "nome": "Medansiedade",
                "precoBase": 34.23
            }
        ],
        "precoReferencia": 48.96,
        "sinonimias": []
    },
    {
        "id": "med-00612",
        "nome": "Imunoflan",
        "principioAtivo": "Pelargonium Sidoides Dc.",
        "descricao": "Outros produtos",
        "apresentacoes": [
            "307,39 MG/ML XPE CT FR PLAS PET AMB X 120 ML + COP + SER DOS",
            "307,39 MG/ML XPE CT FR PLAS PET AMB X 200 ML + COP + SER DOS"
        ],
        "genericos": [
            {
                "nome": "Kaloba",
                "precoBase": 36.3
            }
        ],
        "precoReferencia": 143.13,
        "sinonimias": []
    },
    {
        "id": "med-00613",
        "nome": "Coversyl",
        "principioAtivo": "Perindopril",
        "descricao": "Inibidores da eca puros",
        "apresentacoes": [
            "4 MG COM CT BL AL PLAS TRANS X 30 + SACHÊ C/ DESSECANTE",
            "8 MG COM CX C/ BL AL PLAS TRANS X 30 + SACHÊ C/ DESSECANTE"
        ],
        "genericos": [
            {
                "nome": "Acertil",
                "precoBase": 42.65
            }
        ],
        "precoReferencia": 140.6,
        "sinonimias": []
    },
    {
        "id": "med-00614",
        "nome": "Keltrina",
        "principioAtivo": "Permetrina",
        "descricao": "Ectoparasiticidas incluindo escabicidas",
        "apresentacoes": [
            "50 MG/ML LOC CX FR PLAS OPC X 60 ML "
        ],
        "genericos": [
            {
                "nome": "Piolixina",
                "precoBase": 16.19
            },
            {
                "nome": "Kaodine",
                "precoBase": 22.95
            },
            {
                "nome": "Permetrina",
                "precoBase": 23.01
            },
            {
                "nome": "Permenati",
                "precoBase": 23.46
            },
            {
                "nome": "Piosan",
                "precoBase": 27.42
            },
            {
                "nome": "Pediletan",
                "precoBase": 32.33
            }
        ],
        "precoReferencia": 52.08,
        "sinonimias": []
    },
    {
        "id": "med-00615",
        "nome": "Picoprep",
        "principioAtivo": "Picossulfato de Sódio",
        "descricao": "Agentes osmóticos de limpeza intestinal",
        "apresentacoes": [
            "10 MG + 3,5 G + 12 G PO SOL OR CT ENV AL/PLAS PE X 2"
        ],
        "genericos": [
            {
                "nome": "Cronoplex",
                "precoBase": 19.46
            },
            {
                "nome": "Rapilax",
                "precoBase": 29.65
            }
        ],
        "precoReferencia": 53.94,
        "sinonimias": []
    },
    {
        "id": "med-00616",
        "nome": "Guttalax",
        "principioAtivo": "Picossulfato de Sódio Monoidratado",
        "descricao": "Laxantes estimulantes",
        "apresentacoes": [
            "7,5 MG/ML SOL OR CT FR GOT PLAS PEAD OPC X 30 ML"
        ],
        "genericos": [
            {
                "nome": "Dulcolax Gotas",
                "precoBase": 39.51
            }
        ],
        "precoReferencia": 47.22,
        "sinonimias": []
    },
    {
        "id": "med-00617",
        "nome": "Esbriet",
        "principioAtivo": "Pirfenidona",
        "descricao": "Produtos de fibrose pulmonar idiopática",
        "apresentacoes": [
            "267 MG CAP DURA CT FR PLAS OPC X 270"
        ],
        "genericos": [
            {
                "nome": "Pirfenidona",
                "precoBase": 12099.08
            },
            {
                "nome": "Egurinel",
                "precoBase": 19975.4
            }
        ],
        "precoReferencia": 19975.99,
        "sinonimias": []
    },
    {
        "id": "med-00618",
        "nome": "Feldene",
        "principioAtivo": "Piroxicam",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "20 MG CAP DURA CT BL AL PLAS TRANS X 10",
            "20 MG CAP DURA CT BL AL PLAS TRANS X 15",
            "20 MG COM ORODISP CT BL AL PLAS OPC X 10"
        ],
        "genericos": [
            {
                "nome": "Farmoxicam",
                "precoBase": 11.54
            },
            {
                "nome": "Piroxicam",
                "precoBase": 11.95
            },
            {
                "nome": "Floxicam",
                "precoBase": 37.73
            }
        ],
        "precoReferencia": 50.78,
        "sinonimias": []
    },
    {
        "id": "med-00619",
        "nome": "Brexin",
        "principioAtivo": "Piroxicam Betaciclodextrina",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "191,2 MG COM CT BL PVC/PVDC OPC X 5"
        ],
        "genericos": [
            {
                "nome": "Cicladol",
                "precoBase": 53.45
            }
        ],
        "precoReferencia": 56.86,
        "sinonimias": []
    },
    {
        "id": "med-00620",
        "nome": "Livalo",
        "principioAtivo": "Pitavastatina Cálcica",
        "descricao": "Estatinas, inibidores da redutase hmg-coa",
        "apresentacoes": [
            "2 MG COM REV CT BL AL AL X 10",
            "2 MG COM REV CT BL AL AL X 30",
            "2 MG COM REV CT BL AL AL X 60",
            "2 MG COM REV CT BL AL AL X 90"
        ],
        "genericos": [
            {
                "nome": "Pitavastatina Cálcica",
                "precoBase": 35.51
            },
            {
                "nome": "Ebatz",
                "precoBase": 58.58
            },
            {
                "nome": "Lester",
                "precoBase": 58.58
            },
            {
                "nome": "Pivast",
                "precoBase": 58.6
            },
            {
                "nome": "Pitavastatina Calcica",
                "precoBase": 106.49
            }
        ],
        "precoReferencia": 58.6,
        "sinonimias": []
    },
    {
        "id": "med-00621",
        "nome": "Metamucil",
        "principioAtivo": "Plantago Ovata Forssk.",
        "descricao": "Laxantes incrementadores do bolo fecal",
        "apresentacoes": [
            "0,492 G/G PO SOL FR PLAS OPC X 210 G",
            "0,562 G/G PO SOL CT 10 ENV AL PLAS X 5,85 G (LARANJA SEM AÇUCAR)",
            "0,562 G/G PO SOL FR PLAS OPC X 174 G (LARANJA SEM AÇUCAR)"
        ],
        "genericos": [
            {
                "nome": "Plantaben",
                "precoBase": 75.59
            }
        ],
        "precoReferencia": 76.15,
        "sinonimias": []
    },
    {
        "id": "med-00622",
        "nome": "Plantare",
        "principioAtivo": "Plantago Ovata Phil.",
        "descricao": "Laxantes suavizadores e emolientes fecais",
        "apresentacoes": [
            "3,5 G PO EFEV CT 10 ENV X 5 G",
            "3,5 G PO EFEV CT 30 ENV X 5 G"
        ],
        "genericos": [
            {
                "nome": "Fibirax Plant",
                "precoBase": 53.16
            },
            {
                "nome": "Fibrems",
                "precoBase": 53.93
            }
        ],
        "precoReferencia": 54.06,
        "sinonimias": []
    },
    {
        "id": "med-00623",
        "nome": "Vacina Pneumocócica 10-valente (conjugada)",
        "principioAtivo": "Polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 7f;polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 1;polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 9v;polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 14;polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 19f;polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 18c;polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 23f;polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 4;polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 6b;polissacarídeo Conjugado de Streptococcus Pneumoniae Tipo 5",
        "descricao": "Vacinas para pneumonia",
        "apresentacoes": [
            "SUS INJ CT 12 FA VD TRANS X 0,5 ML"
        ],
        "genericos": [
            {
                "nome": "Synflorix",
                "precoBase": 364.59
            }
        ],
        "precoReferencia": 1380.68,
        "sinonimias": []
    },
    {
        "id": "med-00624",
        "nome": "Fledoid",
        "principioAtivo": "Polissulfato de Mucopolissacarídeo",
        "descricao": "Terapia antivaricosa tópica",
        "apresentacoes": [
            "3 MG/G GEL CT BG AL X 40 G ",
            "5 MG/G GEL CT BG AL X 40 G ",
            "5 MG/G POM CT BG AL X 40 G "
        ],
        "genericos": [
            {
                "nome": "Hirudoid",
                "precoBase": 29.49
            },
            {
                "nome": "Hirudoid Infantil",
                "precoBase": 31.52
            }
        ],
        "precoReferencia": 33.03,
        "sinonimias": []
    },
    {
        "id": "med-00625",
        "nome": "Predsim",
        "principioAtivo": "Prednisolona",
        "descricao": "Corticosteróides orais puros",
        "apresentacoes": [
            "10 MG COM REV CT BL AL AL X 10",
            "10 MG COM REV CT BL AL AL X 4",
            "20 MG COM CT BL AL PLAS TRANS X 20",
            "20 MG COM REV CT BL AL AL X 10"
        ],
        "genericos": [
            {
                "nome": "Prednisolona",
                "precoBase": 8.7
            },
            {
                "nome": "Percoide",
                "precoBase": 11.74
            },
            {
                "nome": "Preni",
                "precoBase": 11.77
            },
            {
                "nome": "Zastat",
                "precoBase": 13.15
            },
            {
                "nome": "Prelone",
                "precoBase": 14.42
            },
            {
                "nome": "Predsigma",
                "precoBase": 26.04
            }
        ],
        "precoReferencia": 10.12,
        "sinonimias": []
    },
    {
        "id": "med-00626",
        "nome": "Meticorten",
        "principioAtivo": "Prednisona",
        "descricao": "Corticosteróides orais puros",
        "apresentacoes": [
            "20 MG COM CT BL AL PLAS TRANS X 10",
            "5 MG COM CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Prednisona",
                "precoBase": 9.58
            },
            {
                "nome": "Nisbal",
                "precoBase": 10.34
            },
            {
                "nome": "Flamape",
                "precoBase": 16.21
            },
            {
                "nome": "Corticorten",
                "precoBase": 18.84
            },
            {
                "nome": "Ciclorten",
                "precoBase": 21.54
            },
            {
                "nome": "Predinis",
                "precoBase": 23.94
            }
        ],
        "precoReferencia": 27.09,
        "sinonimias": []
    },
    {
        "id": "med-00627",
        "nome": "Insit®",
        "principioAtivo": "Pregabalina",
        "descricao": "Gabapentinoides",
        "apresentacoes": [
            "300 MG CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 15",
            "300 MG CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Insit",
                "precoBase": 14.02
            },
            {
                "nome": "Pregabalina",
                "precoBase": 17.38
            },
            {
                "nome": "Konduz",
                "precoBase": 21.05
            },
            {
                "nome": "Lyrica",
                "precoBase": 28.13
            },
            {
                "nome": "Infoc",
                "precoBase": 28.7
            },
            {
                "nome": "Dorene Líquido",
                "precoBase": 28.73
            }
        ],
        "precoReferencia": 382.06,
        "sinonimias": []
    },
    {
        "id": "med-00628",
        "nome": "Emla",
        "principioAtivo": "Prilocaína;lidocaína",
        "descricao": "Anestésicos locais tópicos",
        "apresentacoes": [
            "(25 + 25) MG/G CREM DERM CT 5 BG AL X 5 G + 10 BAND OCL",
            "(25 + 25) MG/G CREM DERM CT BG AL X 5 G + 2 BAND OCL"
        ],
        "genericos": [
            {
                "nome": "Medicaína",
                "precoBase": 29.95
            }
        ],
        "precoReferencia": 32.52,
        "sinonimias": []
    },
    {
        "id": "med-00629",
        "nome": "Crinone",
        "principioAtivo": "Progesterona",
        "descricao": "Progestógenos excluindo g3a, g3f",
        "apresentacoes": [
            "80 MG/G GEL VAG CT 15 ENV AL POLIET X  1 APLIC X 1,125 G"
        ],
        "genericos": [
            {
                "nome": "Prolutex",
                "precoBase": 43.98
            },
            {
                "nome": "Junno",
                "precoBase": 83.24
            },
            {
                "nome": "Utrogestan",
                "precoBase": 83.24
            },
            {
                "nome": "Gynpro",
                "precoBase": 89.14
            }
        ],
        "precoReferencia": 882.79,
        "sinonimias": []
    },
    {
        "id": "med-00630",
        "nome": "Colpotrofine",
        "principioAtivo": "Promestrieno",
        "descricao": "Estrógenos excluindo g3a, g3e, g3f",
        "apresentacoes": [
            "10 MG OVL VAG CT BL AL PLAS  PVC TRANS X 20",
            "10 MG/G CREM VAG CT BG AL X 30G + 20 APLIC "
        ],
        "genericos": [
            {
                "nome": "Promestrieno",
                "precoBase": 76.47
            },
            {
                "nome": "Coltrieno",
                "precoBase": 105.85
            },
            {
                "nome": "Antrofi",
                "precoBase": 106.21
            },
            {
                "nome": "Promim",
                "precoBase": 126.29
            }
        ],
        "precoReferencia": 106.04,
        "sinonimias": []
    },
    {
        "id": "med-00631",
        "nome": "Cremefenergan",
        "principioAtivo": "Prometazina",
        "descricao": "Antipruriginosos  tópicos - incluindo antihistamínicos, anestésicos, etc",
        "apresentacoes": [
            "20 MG/G CREM DERM CT BG AL X 30G"
        ],
        "genericos": [
            {
                "nome": "Cloridrato de Prometazina",
                "precoBase": 22.01
            },
            {
                "nome": "Profergan",
                "precoBase": 26.56
            }
        ],
        "precoReferencia": 29.2,
        "sinonimias": []
    },
    {
        "id": "med-00632",
        "nome": "Psorex",
        "principioAtivo": "Propionato de Clobetasol",
        "descricao": "Corticoesteróides tópicos puros",
        "apresentacoes": [
            "0,5 MG/G CREM CT BG AL X 15G",
            "0,5 MG/G CREM CT BG AL X 30G",
            "0,5 MG/G POM CT BG AL X 30 G",
            "0,5 MG/G SOL TOP CT FR PLAS OPC X 50 G"
        ],
        "genericos": [
            {
                "nome": "Propionato de Clobetasol",
                "precoBase": 13.36
            },
            {
                "nome": "Topirex",
                "precoBase": 14.34
            },
            {
                "nome": "Propionato de Clobetasol 0,5mg/g",
                "precoBase": 28.35
            },
            {
                "nome": "Propiosol",
                "precoBase": 41.43
            },
            {
                "nome": "Therapsor",
                "precoBase": 47.03
            },
            {
                "nome": "Clob-x",
                "precoBase": 55.69
            }
        ],
        "precoReferencia": 27.49,
        "sinonimias": []
    },
    {
        "id": "med-00633",
        "nome": "Flixotide",
        "principioAtivo": "Propionato de Fluticasona",
        "descricao": "Antiasmáticos/dpoc corticosteróides inalantes",
        "apresentacoes": [
            "250 MCG AER CT LT X 60 DOSES C/APLIC",
            "50 MCG AER CT LT X 120 DOSES C/APLIC"
        ],
        "genericos": [
            {
                "nome": "Plurair",
                "precoBase": 55.66
            },
            {
                "nome": "Flutivate",
                "precoBase": 66.25
            }
        ],
        "precoReferencia": 163.74,
        "sinonimias": []
    },
    {
        "id": "med-00634",
        "nome": "Combiwave",
        "principioAtivo": "Propionato de Fluticasona;xinafoato de Salmeterol",
        "descricao": "Antiasmáticos/dpoc agonistas b2 associados a corticosteróides, inalantes",
        "apresentacoes": [
            "(25+125) MCG SUS AER INAL OR CT FR AL X 120 ACION",
            "(25+250) MCG SUS AER INAL OR CT FR AL X 120 ACION",
            "(25+50) MCG SUS AER INAL OR CT FR AL X 120 ACION"
        ],
        "genericos": [
            {
                "nome": "Xinafoato de Salmeterol + Propionato de Fluticasona",
                "precoBase": 100.69
            }
        ],
        "precoReferencia": 157.91,
        "sinonimias": []
    },
    {
        "id": "med-00635",
        "nome": "Monessa",
        "principioAtivo": "Queratina;ácido Aminobenzóico;nitrato de Tiamina;pantotenato de Cálcio;cistina;levedura",
        "descricao": "Outras preparações dermatologicas",
        "apresentacoes": [
            "60MG + 20MG + 60MG + 100MG + 20MG + 20MG CAP GEL DURA CT BL AL PLAS INC X 30 ",
            "60MG + 20MG + 60MG + 100MG + 20MG + 20MG CAP GEL DURA CT BL AL PLAS INC X 90 "
        ],
        "genericos": [
            {
                "nome": "Pantogar",
                "precoBase": 78.78
            }
        ],
        "precoReferencia": 118.17,
        "sinonimias": []
    },
    {
        "id": "med-00636",
        "nome": "Tiorfan",
        "principioAtivo": "Racecadotrila",
        "descricao": "Outros produtos para desordem intestinal",
        "apresentacoes": [
            "10 MG GRAN OR CT ENV PAP/AL/PLAS PEBD OPC X 18",
            "100 MG CAP  DURA CT BL AL PLAS PVC/PVDC TRANS X 9",
            "30 MG GRAN OR CT ENV PAP/AL/PLAS PEBD OPC X 18"
        ],
        "genericos": [
            {
                "nome": "Racecadotrila",
                "precoBase": 34.52
            },
            {
                "nome": "Avide",
                "precoBase": 36.6
            }
        ],
        "precoReferencia": 56.92,
        "sinonimias": []
    },
    {
        "id": "med-00637",
        "nome": "Abcler Abnat",
        "principioAtivo": "Racemetionina;citrato de Colina;betaína",
        "descricao": "Hepatoprotetores e lipotrópicos",
        "apresentacoes": [
            "(10 + 50 + 100) MG/ML SOL OR CT 50 FLAC PLAS TRANS X 10 ML"
        ],
        "genericos": [
            {
                "nome": "Epocler",
                "precoBase": 26.99
            }
        ],
        "precoReferencia": 141.46,
        "sinonimias": []
    },
    {
        "id": "med-00638",
        "nome": "Xantinon",
        "principioAtivo": "Racemetionina;cloreto de Colina",
        "descricao": "Hepatoprotetores e lipotrópicos",
        "apresentacoes": [
            "100 MG + 20 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 100",
            "100 MG + 20 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Epocler Comprimido",
                "precoBase": 15.49
            }
        ],
        "precoReferencia": 17.2,
        "sinonimias": []
    },
    {
        "id": "med-00639",
        "nome": "Silimalon 140",
        "principioAtivo": "Racemetionina;silybum Marianum (l.) Gaertn",
        "descricao": "Hepatoprotetores e lipotrópicos",
        "apresentacoes": [
            "140 MG + 100 MG COM REV CT BL AL PLAS INC X 30",
            "140 MG + 100 MG COM REV CT BL AL PLAS INC X 60"
        ],
        "genericos": [
            {
                "nome": "Silimalon",
                "precoBase": 27.58
            },
            {
                "nome": "Nufig Met",
                "precoBase": 80.22
            }
        ],
        "precoReferencia": 140.73,
        "sinonimias": []
    },
    {
        "id": "med-00640",
        "nome": "Rozerem",
        "principioAtivo": "Ramelteona",
        "descricao": "Outros hormônios e preparações com ações similares",
        "apresentacoes": [
            "8 MG COM REV CT BL AL AL X 20 ",
            "8 MG COM REV CT BL AL AL X 30 "
        ],
        "genericos": [
            {
                "nome": "Ramelteona",
                "precoBase": 13.28
            },
            {
                "nome": "Rahime",
                "precoBase": 21.92
            }
        ],
        "precoReferencia": 87.88,
        "sinonimias": []
    },
    {
        "id": "med-00641",
        "nome": "Naprix",
        "principioAtivo": "Ramipril",
        "descricao": "Inibidores da eca puros",
        "apresentacoes": [
            "10 MG COM CT BL AL AL X 30",
            "10 MG COM CT BL AL AL X 90",
            "2,5 MG COM CT BL AL AL X 30",
            "2,5 MG COM CT BL AL AL X 90"
        ],
        "genericos": [
            {
                "nome": "Ramipril",
                "precoBase": 80.72
            }
        ],
        "precoReferencia": 94.27,
        "sinonimias": []
    },
    {
        "id": "med-00642",
        "nome": "Lucentis",
        "principioAtivo": "Ranibizumabe",
        "descricao": "Produtos antineovascularização ocular",
        "apresentacoes": [
            "10 MG/ML SOL INJ CT 1 FA VD INC X 0,23 ML + AGU C/ FILTRO",
            "10 MG/ML SOL INJ CT 1 SER PREENC VD TRANS X 0,165 ML"
        ],
        "genericos": [
            {
                "nome": "Ranivisio",
                "precoBase": 4569.11
            },
            {
                "nome": "Optinóvis",
                "precoBase": 7800.87
            }
        ],
        "precoReferencia": 7800.87,
        "sinonimias": []
    },
    {
        "id": "med-00643",
        "nome": "Fenaflan",
        "principioAtivo": "Resinato de Diclofenaco",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "15 MG/ML SUS OR CT FR PLAS OPC GOT X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Diclofenaco Resinato",
                "precoBase": 19.89
            }
        ],
        "precoReferencia": 25.71,
        "sinonimias": []
    },
    {
        "id": "med-00644",
        "nome": "Rifasan",
        "principioAtivo": "Rifamicina",
        "descricao": "Antibióticos tópicos",
        "apresentacoes": [
            "10 MG/ML SOL TOP SPR CT FR VD AMB X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Rifamicina sv Sódica",
                "precoBase": 27.64
            }
        ],
        "precoReferencia": 30.61,
        "sinonimias": []
    },
    {
        "id": "med-00645",
        "nome": "Rifocina Spray",
        "principioAtivo": "Rifamicina sv Sódica",
        "descricao": "Antibióticos tópicos",
        "apresentacoes": [
            "10 MG/ML SOL TOP SPRAY CT FR VD AMB X 20 ML"
        ],
        "genericos": [
            {
                "nome": "Rifamicina sv Sódica",
                "precoBase": 23.01
            }
        ],
        "precoReferencia": 47.5,
        "sinonimias": []
    },
    {
        "id": "med-00646",
        "nome": "Rifaldin",
        "principioAtivo": "Rifampicina",
        "descricao": "Rifampicinas e rifamicinas",
        "apresentacoes": [
            "300 MG CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 6"
        ],
        "genericos": [
            {
                "nome": "Furp-rifampicina",
                "precoBase": 2081.93
            }
        ],
        "precoReferencia": 26.73,
        "sinonimias": []
    },
    {
        "id": "med-00647",
        "nome": "Tekzor",
        "principioAtivo": "Riluzol",
        "descricao": "Todos os outros produtos para o sistema nervoso central",
        "apresentacoes": [
            "50 MG COM REV CT BL AL PLAS OPC X 60"
        ],
        "genericos": [
            {
                "nome": "Riluzol",
                "precoBase": 1092.16
            }
        ],
        "precoReferencia": 4061.44,
        "sinonimias": []
    },
    {
        "id": "med-00648",
        "nome": "Actonel",
        "principioAtivo": "Risedronato Sódico",
        "descricao": "Bisfosfonatos para osteoporose e alterações relacionadas",
        "apresentacoes": [
            "150 MG COM REV CT BL AL PLAS PVC TRANS X 1",
            "35 MG COM REV LIB RETARD CT BL AL PLAS PVC TRANS X 4"
        ],
        "genericos": [
            {
                "nome": "Fixenato",
                "precoBase": 67.54
            },
            {
                "nome": "Risedross",
                "precoBase": 83.08
            },
            {
                "nome": "Risedronel",
                "precoBase": 122.43
            },
            {
                "nome": "Osteotrat",
                "precoBase": 125.45
            },
            {
                "nome": "Risedronato Sódico",
                "precoBase": 126.5
            },
            {
                "nome": "D’orto",
                "precoBase": 175.61
            }
        ],
        "precoReferencia": 266.86,
        "sinonimias": []
    },
    {
        "id": "med-00649",
        "nome": "Risperdal",
        "principioAtivo": "Risperidona",
        "descricao": "Antipsicóticos atípicos",
        "apresentacoes": [
            "1 MG COM REV CT BL AL PLAS TRANS X 20",
            "1 MG/ML SOL ORAL CT FR VD AMB X 30 ML",
            "2 MG COM REV CT BL AL PLAS TRANS X 20",
            "25 MG PO INJ IM CT FA VD TRANS + DIL SER VD TRANS X 2 ML + 2 AGU + 1 ADAPT"
        ],
        "genericos": [
            {
                "nome": "Riss",
                "precoBase": 20.14
            },
            {
                "nome": "Risperidona",
                "precoBase": 29.51
            },
            {
                "nome": "Zargus",
                "precoBase": 31.88
            },
            {
                "nome": "Perlid",
                "precoBase": 57.3
            },
            {
                "nome": "Viverdal",
                "precoBase": 62.66
            },
            {
                "nome": "Risperidon",
                "precoBase": 90.31
            }
        ],
        "precoReferencia": 44.88,
        "sinonimias": []
    },
    {
        "id": "med-00650",
        "nome": "Xarelto",
        "principioAtivo": "Rivaroxabana",
        "descricao": "Inibidores diretos do fator xa",
        "apresentacoes": [
            "10 MG COM REV CT BL AL PLAS PP TRANS X 10",
            "10 MG COM REV CT BL AL PLAS PP TRANS X 30 ",
            "15 MG COM REV CT BL AL PLAS PP TRANS X 14",
            "15 MG COM REV CT BL AL PLAS PP TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Rivaroxabana",
                "precoBase": 30.94
            },
            {
                "nome": "Vynaxa",
                "precoBase": 43.32
            },
            {
                "nome": "Dartrial",
                "precoBase": 46.64
            },
            {
                "nome": "Xafac",
                "precoBase": 51.07
            },
            {
                "nome": "Vabam",
                "precoBase": 60.24
            },
            {
                "nome": "Xanev",
                "precoBase": 61.12
            }
        ],
        "precoReferencia": 145.99,
        "sinonimias": []
    },
    {
        "id": "med-00651",
        "nome": "Exelon",
        "principioAtivo": "Rivastigmina",
        "descricao": "Produtos antialzheimer, inibidores da colinesterase",
        "apresentacoes": [
            "18MG ADES CT SACHE X 15 (9,5MG / 24H) ",
            "18MG ADES CT SACHE X 30 (9,5MG / 24H)",
            "18MG ADES CT SACHE X 60 (9,5MG / 24H)",
            "18MG ADES CT SACHE X 7 (9,5MG / 24H) "
        ],
        "genericos": [
            {
                "nome": "Rivastigmina",
                "precoBase": 92.59
            },
            {
                "nome": "Rivazich",
                "precoBase": 102.76
            },
            {
                "nome": "Vivencia Patch",
                "precoBase": 197.12
            }
        ],
        "precoReferencia": 186.65,
        "sinonimias": []
    },
    {
        "id": "med-00652",
        "nome": "Crestor",
        "principioAtivo": "Rosuvastatina Cálcica",
        "descricao": "Estatinas, inibidores da redutase hmg-coa",
        "apresentacoes": [
            "10 MG COM REV CT BL AL/AL X 10",
            "10 MG COM REV CT BL AL/AL X 30",
            "20 MG COM REV CT BL AL/AL X 30",
            "40 MG COM REV CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Ruva",
                "precoBase": 15.7
            },
            {
                "nome": "Plenance",
                "precoBase": 17.56
            },
            {
                "nome": "Rox",
                "precoBase": 20.14
            },
            {
                "nome": "Rosuneo",
                "precoBase": 30.7
            },
            {
                "nome": "Runner",
                "precoBase": 33.63
            },
            {
                "nome": "Rosucor",
                "precoBase": 35.89
            }
        ],
        "precoReferencia": 36.35,
        "sinonimias": []
    },
    {
        "id": "med-00653",
        "nome": "Zinpass® Eze",
        "principioAtivo": "Rosuvastatina Cálcica;ezetimiba",
        "descricao": "Reguladores de gordura em combinação com outros reguladores de gordura",
        "apresentacoes": [
            "(10,0 + 10,0) MG COM REV CT BL AL AL X 30",
            "(20,0 + 10,0) MG COM REV CT BL AL AL X 30",
            "(40,0 + 10,0) MG COM REV CT BL AL AL X 30"
        ],
        "genericos": [
            {
                "nome": "Plenance Eze",
                "precoBase": 58.22
            },
            {
                "nome": "Rosucor Eze",
                "precoBase": 58.23
            },
            {
                "nome": "Coledue r",
                "precoBase": 58.23
            },
            {
                "nome": "Runner Eze",
                "precoBase": 86.67
            },
            {
                "nome": "Trezete",
                "precoBase": 86.67
            },
            {
                "nome": "Rosuvastatina Cálcica + Ezetimiba",
                "precoBase": 157.49
            }
        ],
        "precoReferencia": 92.13,
        "sinonimias": []
    },
    {
        "id": "med-00654",
        "nome": "Noripurum ev",
        "principioAtivo": "Sacarato de Hidróxido Férrico",
        "descricao": "Ferro puro",
        "apresentacoes": [
            "20 MG/ML SOL INJ IV CX 5 AMP VD TRANS X 5 ML "
        ],
        "genericos": [
            {
                "nome": "Ferropurum",
                "precoBase": 18.7
            },
            {
                "nome": "Sadol",
                "precoBase": 20.1
            },
            {
                "nome": "Sacfer",
                "precoBase": 21.01
            }
        ],
        "precoReferencia": 101.55,
        "sinonimias": []
    },
    {
        "id": "med-00655",
        "nome": "Florent",
        "principioAtivo": "Saccharomyces Boulardii",
        "descricao": "Antidiarreicos micro-organismos",
        "apresentacoes": [
            "100 MG CAP GEL DUR CT FR PLAS OPC X 12"
        ],
        "genericos": [
            {
                "nome": "Floralon",
                "precoBase": 33.24
            },
            {
                "nome": "Repoflor",
                "precoBase": 35.78
            },
            {
                "nome": "Floratil",
                "precoBase": 39.75
            }
        ],
        "precoReferencia": 53.07,
        "sinonimias": []
    },
    {
        "id": "med-00656",
        "nome": "Floralon",
        "principioAtivo": "Saccharomyces Boulardii - 17",
        "descricao": "Antidiarreicos micro-organismos",
        "apresentacoes": [
            "200 MG CAP GEL DURA CT FR PLAS OPC X 6"
        ],
        "genericos": [
            {
                "nome": "Repoflor",
                "precoBase": 46.67
            },
            {
                "nome": "Flomicin",
                "precoBase": 51.24
            },
            {
                "nome": "Florent",
                "precoBase": 53.07
            }
        ],
        "precoReferencia": 66.52,
        "sinonimias": []
    },
    {
        "id": "med-00657",
        "nome": "Gelol",
        "principioAtivo": "Salicilato de Metila",
        "descricao": "Antirreumáticos e analgésicos tópicos",
        "apresentacoes": [
            "POM DERM CT BG AL X 20 G",
            "SOL AER DERM TB AL X 60 ML"
        ],
        "genericos": [
            {
                "nome": "Gelo-bio",
                "precoBase": 23.18
            }
        ],
        "precoReferencia": 29.78,
        "sinonimias": []
    },
    {
        "id": "med-00658",
        "nome": "Secnidal",
        "principioAtivo": "Secnidazol",
        "descricao": "Tricomonicidas sistêmicos",
        "apresentacoes": [
            "1000 MG COM REV CT BL AL PLAS TRANS X 2",
            "1000 MG COM REV CT BL AL PLAS TRANS X 4"
        ],
        "genericos": [
            {
                "nome": "Secnidazol",
                "precoBase": 18.47
            },
            {
                "nome": "Unigyn",
                "precoBase": 22.15
            },
            {
                "nome": "Secnimax",
                "precoBase": 26.24
            },
            {
                "nome": "Sectil",
                "precoBase": 30.28
            },
            {
                "nome": "Secfar",
                "precoBase": 32.56
            },
            {
                "nome": "Secdazol",
                "precoBase": 34.53
            }
        ],
        "precoReferencia": 53.26,
        "sinonimias": []
    },
    {
        "id": "med-00659",
        "nome": "Ozempic",
        "principioAtivo": "Semaglutida",
        "descricao": "Antidiabéticos agonistas de glp-1",
        "apresentacoes": [
            "1,34 MG/ML SOL INJ CT X 1 CAR VD TRANS X 1,5 ML + 1 SIST APLIC PLAS (DOSES 0,25MG E 0,5 MG)",
            "1,34 MG/ML SOL INJ CT X 1 CAR VD TRANS X 1,5 ML + 1 SIST APLIC PLAS (DOSES 0,25MG E 0,5 MG) + 6 AGULHAS NOVOFINE",
            "1,34 MG/ML SOL INJ CT X 1 CAR VD TRANS X 3 ML + 1 SIST APLIC PLAS (DOSES 1 MG)",
            "1,34 MG/ML SOL INJ CT X 1 CAR VD TRANS X 3 ML + 1 SIST APLIC PLAS (DOSES 1 MG) + 4 AGULHAS NOVOFINE"
        ],
        "genericos": [
            {
                "nome": "Rybelsus",
                "precoBase": 469.38
            },
            {
                "nome": "Ozivy",
                "precoBase": 664.02
            },
            {
                "nome": "Wegovy",
                "precoBase": 1314.37
            },
            {
                "nome": "Poviztra",
                "precoBase": 1314.37
            },
            {
                "nome": "Extensior",
                "precoBase": 1314.37
            },
            {
                "nome": "Orsema",
                "precoBase": 1314.37
            }
        ],
        "precoReferencia": 1314.37,
        "sinonimias": []
    },
    {
        "id": "med-00660",
        "nome": "Senan",
        "principioAtivo": "Senna Alexandrina Mill.",
        "descricao": "Outras drogas para constipação",
        "apresentacoes": [
            "50MG CAP DURA CT BL AL PVDC INC X 30"
        ],
        "genericos": [
            {
                "nome": "Active Plus",
                "precoBase": 43.06
            },
            {
                "nome": "Lacass",
                "precoBase": 46.95
            },
            {
                "nome": "Laxasene Bionatus",
                "precoBase": 47.17
            },
            {
                "nome": "Seneben",
                "precoBase": 56.95
            },
            {
                "nome": "Seneflora",
                "precoBase": 57.84
            },
            {
                "nome": "Senareti",
                "precoBase": 60.81
            }
        ],
        "precoReferencia": 97.78,
        "sinonimias": []
    },
    {
        "id": "med-00661",
        "nome": "Tamarine",
        "principioAtivo": "Senna Alexandrina Mill.;cassia Fistula",
        "descricao": "Laxantes estimulantes",
        "apresentacoes": [
            "(14,634+11,700) MG CAP DURA CT BL AL PLAS PVC TRANS X 20",
            "(29,268 + 23,400)MG CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 100",
            "(29,268 + 23,400)MG CAP DURA CT BL AL PLAS PVC/PVDC TRANS X 20",
            "(4,878 + 4,719) MG GEL OR CT FR PLAS PEAD OPC X 150 G + COL (SUCRALOSE)"
        ],
        "genericos": [
            {
                "nome": "Naturetti",
                "precoBase": 67.72
            }
        ],
        "precoReferencia": 99.99,
        "sinonimias": []
    },
    {
        "id": "med-00662",
        "nome": "Prostatal",
        "principioAtivo": "Serenoa Repens (w. Bartram) Small",
        "descricao": "Outros produtos para hpb",
        "apresentacoes": [
            "160 MG CAP GEL MOLE CT BL AL PLAS INC X 15 ",
            "160 MG CAP GEL MOLE CT BL AL PLAS INC X 30"
        ],
        "genericos": [
            {
                "nome": "Sanprost",
                "precoBase": 56.81
            }
        ],
        "precoReferencia": 108.08,
        "sinonimias": []
    },
    {
        "id": "med-00663",
        "nome": "Legalon",
        "principioAtivo": "Silybum Marianum (l.) Gaertn",
        "descricao": "Hepatoprotetores e lipotrópicos",
        "apresentacoes": [
            "180 MG CAP DURA CT BL AL PLAS TRANS X 20",
            "64 MG/5 ML SUS OR CT FR PLAS AMB X 100 ML",
            "90 MG COM REV CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Forfig",
                "precoBase": 69.61
            },
            {
                "nome": "Lison",
                "precoBase": 103.9
            }
        ],
        "precoReferencia": 110.83,
        "sinonimias": []
    },
    {
        "id": "med-00664",
        "nome": "Mylicon",
        "principioAtivo": "Simeticona",
        "descricao": "Antiflatulentos puros e carminativos",
        "apresentacoes": [
            "75 MG/ML SUS OR CT FR PLAS OPC GOT X 15 ML"
        ],
        "genericos": [
            {
                "nome": "Simeticona",
                "precoBase": 14.05
            },
            {
                "nome": "Luftal",
                "precoBase": 35.0
            }
        ],
        "precoReferencia": 37.87,
        "sinonimias": []
    },
    {
        "id": "med-00665",
        "nome": "Vaslip",
        "principioAtivo": "Sinvastatina",
        "descricao": "Estatinas, inibidores da redutase hmg-coa",
        "apresentacoes": [
            "10 MG COM REV CT BL AL PLAS PVDC TRANS X 30",
            "20 MG COM REV CT BL AL PLAS PVDC TRANS X 30",
            "20 MG COM REV CT BL AL PLAS PVDC TRANS X 60",
            "40 MG COM REV CT BL AL PLAS PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Sinvastatina",
                "precoBase": 6.35
            },
            {
                "nome": "Sinvasmax",
                "precoBase": 9.55
            },
            {
                "nome": "Simlip",
                "precoBase": 9.55
            },
            {
                "nome": "Menocol",
                "precoBase": 10.43
            },
            {
                "nome": "Sinvastacor",
                "precoBase": 28.66
            },
            {
                "nome": "Sinvalip",
                "precoBase": 29.47
            }
        ],
        "precoReferencia": 103.77,
        "sinonimias": []
    },
    {
        "id": "med-00666",
        "nome": "Sovaldi",
        "principioAtivo": "Sofosbuvir",
        "descricao": "Antivirais para hepatite c",
        "apresentacoes": [
            "400 MG COM REV CT FR PLAS OPC X 28"
        ],
        "genericos": [
            {
                "nome": "Sofosbuvir",
                "precoBase": 48849.8
            }
        ],
        "precoReferencia": 128171.44,
        "sinonimias": []
    },
    {
        "id": "med-00667",
        "nome": "Omnitrope",
        "principioAtivo": "Somatropina",
        "descricao": "Hormônios do crescimento",
        "apresentacoes": [
            "10 MG (30 UI) SOL INJ CT CARP VD TRANS X 1,5 ML",
            "15 MG (45UI) SOL INJ CT 1 CARP VD TRANS X 1,5 ML"
        ],
        "genericos": [
            {
                "nome": "Hormotrop",
                "precoBase": 100.25
            },
            {
                "nome": "Biomatrop",
                "precoBase": 369.64
            },
            {
                "nome": "Saizen",
                "precoBase": 781.04
            },
            {
                "nome": "Criscy",
                "precoBase": 884.57
            },
            {
                "nome": "Norditropin",
                "precoBase": 991.54
            },
            {
                "nome": "Genotropin",
                "precoBase": 1188.01
            }
        ],
        "precoReferencia": 1431.02,
        "sinonimias": []
    },
    {
        "id": "med-00668",
        "nome": "Ariscorten",
        "principioAtivo": "Succinato Sódico de Hidrocortisona",
        "descricao": "Corticosteróides injetáveis puros",
        "apresentacoes": [
            "100 MG PO INJ IV/IM CX 100 FA VD TRANS",
            "100 MG PO INJ IV/IM CX 50 FA VD TRANS",
            "100 MG PO INJ IV/IM CX 50 FA VD TRANS  + AMP DIL X 2 ML",
            "500 MG PO INJ IV/IM CT FA VD TRANS + AMP DIL X 4 ML"
        ],
        "genericos": [
            {
                "nome": "Succinato Sodico de Hidrocortisona",
                "precoBase": 336.36
            },
            {
                "nome": "Cortisonal",
                "precoBase": 555.29
            }
        ],
        "precoReferencia": 555.34,
        "sinonimias": []
    },
    {
        "id": "med-00669",
        "nome": "Succinato Sódico de Metilprednisolona",
        "principioAtivo": "Succinato Sódico de Metilprednisolona",
        "descricao": "Corticosteróides injetáveis puros",
        "apresentacoes": [
            "125 MG PO SOL INJ IM/IV CX 25 FA VD TRANS + 25 DIL AMP VD TRANS X 2 ML",
            "500 MG PO SOL INJ IM/IV CX 25 FA VD TRANS + 25 DIL AMP VD TRANS X 8 ML"
        ],
        "genericos": [
            {
                "nome": "Unimedrol",
                "precoBase": 69.39
            }
        ],
        "precoReferencia": 586.76,
        "sinonimias": []
    },
    {
        "id": "med-00670",
        "nome": "Pristiq",
        "principioAtivo": "Succinato de Desvenlafaxina Monoidratado",
        "descricao": "Antidepressivos snri",
        "apresentacoes": [
            "100 MG COM REV LIB CONT CT BL PVC/PVDC/AL X 28",
            "50 MG COM REV LIB CONT CT BL PVC/PVDC/AL X 28",
            "50 MG COM REV LIB CONT CT BL PVC/PVDC/AL X 7"
        ],
        "genericos": [
            {
                "nome": "Aviv",
                "precoBase": 32.39
            },
            {
                "nome": "Vyxara",
                "precoBase": 41.86
            },
            {
                "nome": "Andes",
                "precoBase": 56.35
            },
            {
                "nome": "Desve",
                "precoBase": 59.34
            },
            {
                "nome": "Vendexla",
                "precoBase": 59.34
            },
            {
                "nome": "Desenvo",
                "precoBase": 59.86
            }
        ],
        "precoReferencia": 66.29,
        "sinonimias": []
    },
    {
        "id": "med-00671",
        "nome": "Quenzor",
        "principioAtivo": "Succinato de Metoprolol",
        "descricao": "Betabloqueadores puros",
        "apresentacoes": [
            "100 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PE/PVDC TRANS X 20",
            "100 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PE/PVDC TRANS X 30",
            "100 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PE/PVDC TRANS X 60",
            "100 MG CAP DURA LIB PROL CT BL AL PLAS PVC/PE/PVDC TRANS X 90"
        ],
        "genericos": [
            {
                "nome": "Emprol xr",
                "precoBase": 13.49
            },
            {
                "nome": "Selozok",
                "precoBase": 14.79
            },
            {
                "nome": "Succinato de Metoprolol",
                "precoBase": 25.25
            },
            {
                "nome": "Dozoito",
                "precoBase": 40.36
            }
        ],
        "precoReferencia": 25.35,
        "sinonimias": []
    },
    {
        "id": "med-00672",
        "nome": "Vesicare",
        "principioAtivo": "Succinato de Solifenacina",
        "descricao": "Todos outros produtos urologicos",
        "apresentacoes": [
            "10MG COM REV CT BL AL PLAS X 10",
            "10MG COM REV CT BL AL PLAS X 30",
            "5MG COM REV CT BL AL PLAS X 10",
            "5MG COM REV CT BL AL PLAS X 30"
        ],
        "genericos": [
            {
                "nome": "Succinato de Solifenacina",
                "precoBase": 28.18
            },
            {
                "nome": "Solly",
                "precoBase": 46.59
            },
            {
                "nome": "Impere",
                "precoBase": 77.66
            },
            {
                "nome": "Involu",
                "precoBase": 212.56
            }
        ],
        "precoReferencia": 77.64,
        "sinonimias": []
    },
    {
        "id": "med-00673",
        "nome": "Sumax",
        "principioAtivo": "Succinato de Sumatriptana",
        "descricao": "Antienxaquecosos triptânicos",
        "apresentacoes": [
            "100 MG COM REV  CT BL AL  PLAS TRANS X 2",
            "100 MG COM REV  CT BL AL  PLAS TRANS X 6",
            "100 MG/ML SOL NAS CT FR SPR PLAS OPC X 0,2 ML",
            "12,0MG/ML SOL INJ SC CT SER X 0,5 ML"
        ],
        "genericos": [
            {
                "nome": "Succinato de Sumatriptana",
                "precoBase": 29.72
            },
            {
                "nome": "Sutriptan",
                "precoBase": 31.92
            }
        ],
        "precoReferencia": 43.28,
        "sinonimias": []
    },
    {
        "id": "med-00674",
        "nome": "Sulph",
        "principioAtivo": "Sulfadiazina de Prata",
        "descricao": "Antibióticos tópicos",
        "apresentacoes": [
            "10 MG/G CREM DERM CT BG AL X 120 G",
            "10 MG/G CREM DERM CT BG AL X 30 G",
            "10 MG/G CREM DERM CT BG AL X 50 G"
        ],
        "genericos": [
            {
                "nome": "Dermazine",
                "precoBase": 15.7
            },
            {
                "nome": "Sulfadiazina de Prata",
                "precoBase": 17.82
            }
        ],
        "precoReferencia": 20.26,
        "sinonimias": []
    },
    {
        "id": "med-00675",
        "nome": "Azulfin",
        "principioAtivo": "Sulfassalazina",
        "descricao": "Produtos aminosalicilatos para alterações intestinais",
        "apresentacoes": [
            "500 MG COM REV LIB RETARD CT BL AL PLAS PVC TRANS X 30",
            "500 MG COM REV LIB RETARD CT BL AL PLAS PVC TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Salazoprin",
                "precoBase": 70.27
            }
        ],
        "precoReferencia": 72.31,
        "sinonimias": []
    },
    {
        "id": "med-00676",
        "nome": "Masferol",
        "principioAtivo": "Sulfato Ferroso Heptaidratado",
        "descricao": "Ferro puro",
        "apresentacoes": [
            "25 MG/ML XPE CT FR PLAS PET AMB X 100ML "
        ],
        "genericos": [
            {
                "nome": "Anemifer",
                "precoBase": 16.04
            }
        ],
        "precoReferencia": 20.91,
        "sinonimias": []
    },
    {
        "id": "med-00677",
        "nome": "Atropina",
        "principioAtivo": "Sulfato de Atropina",
        "descricao": "Midriáticos e cicloplégicos",
        "apresentacoes": [
            "10 MG/ML SOL OFT CT FR GOT PLAS PEBD TRANS X 5 ML",
            "5 MG/ML SOL OFT CT FR GOT PLAS PEBD TRANS X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Sulfato de Atropina",
                "precoBase": 83.53
            },
            {
                "nome": "Atrofarma",
                "precoBase": 137.87
            }
        ],
        "precoReferencia": 12.54,
        "sinonimias": []
    },
    {
        "id": "med-00678",
        "nome": "Glicolive",
        "principioAtivo": "Sulfato de Glicosamina",
        "descricao": "Todos os outros fármacos com ação músculo-esquelética",
        "apresentacoes": [
            "1500 MG PÓ OR CT 30 ENV PAPEL PLAS AL PLAS X 3,95G"
        ],
        "genericos": [
            {
                "nome": "Glucoreumin",
                "precoBase": 110.35
            },
            {
                "nome": "Sulfato de Glicosamina",
                "precoBase": 194.51
            },
            {
                "nome": "Ortosamin",
                "precoBase": 268.11
            },
            {
                "nome": "Artoglico",
                "precoBase": 304.14
            }
        ],
        "precoReferencia": 306.82,
        "sinonimias": []
    },
    {
        "id": "med-00679",
        "nome": "Ardro",
        "principioAtivo": "Sulfato de Glicosamina Cloreto de Sódio;sulfato Dissódico de Condroitina",
        "descricao": "Todos os outros fármacos com ação músculo-esquelética",
        "apresentacoes": [
            "1,5 G + 1,2 G GRAN CT 30 SACH AL PAP PE X 5,2 G (LARANJA)"
        ],
        "genericos": [
            {
                "nome": "Ártico Caps",
                "precoBase": 45.21
            }
        ],
        "precoReferencia": 201.49,
        "sinonimias": []
    },
    {
        "id": "med-00680",
        "nome": "Condroflex",
        "principioAtivo": "Sulfato de Glicosamina;sulfato de Condroitina",
        "descricao": "Todos os outros fármacos com ação músculo-esquelética",
        "apresentacoes": [
            "(1,5 + 1,2) G PO SOL OR CT 30 ENV AL/PLAS X 4,135 G (LIMÃO)",
            "500 MG + 400 MG CAP GEL DURA CT BL AL PLAS TRANS X 60",
            "500 MG + 400 MG CAP GEL DURA CT BL AL PLAS TRANS X 90"
        ],
        "genericos": [
            {
                "nome": "Ártico Caps",
                "precoBase": 42.94
            },
            {
                "nome": "Artrolive",
                "precoBase": 43.43
            },
            {
                "nome": "Jogger",
                "precoBase": 43.57
            },
            {
                "nome": "Ártico",
                "precoBase": 90.6
            }
        ],
        "precoReferencia": 274.22,
        "sinonimias": []
    },
    {
        "id": "med-00681",
        "nome": "Plaquinol",
        "principioAtivo": "Sulfato de Hidroxicloroquina",
        "descricao": "Antimaláricos, 1 ingrediente",
        "apresentacoes": [
            "400 MG COM REV CT BL AL PLAS PVC/PVCD OPC X 30"
        ],
        "genericos": [
            {
                "nome": "Reuquinol",
                "precoBase": 24.34
            },
            {
                "nome": "Papilup",
                "precoBase": 41.38
            },
            {
                "nome": "Sulfato de Hidroxicloroquina",
                "precoBase": 88.64
            },
            {
                "nome": "Reuplaq",
                "precoBase": 117.83
            }
        ],
        "precoReferencia": 160.4,
        "sinonimias": []
    },
    {
        "id": "med-00682",
        "nome": "Pomicina",
        "principioAtivo": "Sulfato de Neomicina",
        "descricao": "Antibióticos tópicos",
        "apresentacoes": [
            "5,0 MG/G POM DERM CT TB AL X 20 G"
        ],
        "genericos": [
            {
                "nome": "Lomicina",
                "precoBase": 17.04
            },
            {
                "nome": "Sulfato de Neomicina",
                "precoBase": 18.35
            },
            {
                "nome": "Neomicon",
                "precoBase": 26.68
            },
            {
                "nome": "Nemicina",
                "precoBase": 29.81
            }
        ],
        "precoReferencia": 30.24,
        "sinonimias": []
    },
    {
        "id": "med-00683",
        "nome": "Nebacimed",
        "principioAtivo": "Sulfato de Neomicina;bacitracina",
        "descricao": "Antibióticos tópicos",
        "apresentacoes": [
            "(5 MG + 250 UI)/G POM DERM CT BG AL X 50 G "
        ],
        "genericos": [
            {
                "nome": "Sulfato de Neomicina + Bacitracina Zíncica",
                "precoBase": 11.3
            },
            {
                "nome": "Sulfato de Neomicina + Bacitracina",
                "precoBase": 14.82
            },
            {
                "nome": "Katrizan",
                "precoBase": 20.95
            },
            {
                "nome": "Bactoderm",
                "precoBase": 21.03
            }
        ],
        "precoReferencia": 38.41,
        "sinonimias": []
    },
    {
        "id": "med-00684",
        "nome": "Nebacetin",
        "principioAtivo": "Sulfato de Neomicina;bacitracina Zíncica",
        "descricao": "Antibióticos tópicos",
        "apresentacoes": [
            "5 MG/G +250 UI/G POM CT BG PLAS AL PLAS X 15 G",
            "5 MG/G +250 UI/G POM CT BG PLAS AL PLAS X 50 G"
        ],
        "genericos": [
            {
                "nome": "Sulfato de Neomicina + Bacitracina Zíncica",
                "precoBase": 10.44
            },
            {
                "nome": "Ferid",
                "precoBase": 17.06
            },
            {
                "nome": "Sulfato de Neomicina + Bacitracina Zíncica",
                "precoBase": 17.48
            },
            {
                "nome": "Nebaciderme",
                "precoBase": 17.57
            },
            {
                "nome": "Bacina",
                "precoBase": 19.05
            },
            {
                "nome": "Bacinantrat",
                "precoBase": 20.43
            }
        ],
        "precoReferencia": 31.99,
        "sinonimias": []
    },
    {
        "id": "med-00685",
        "nome": "Novacort",
        "principioAtivo": "Sulfato de Neomicina;dipropionato de Betametasona;cetoconazol",
        "descricao": "Corticoesteróides associados a antimicóticos e antibacterianos",
        "apresentacoes": [
            "(20 + 0,64 + 2,5) MG/G CREM DERM CT BG AL X 10 G",
            "(20 + 0,64 + 2,5) MG/G CREM DERM CT BG AL X 30 G",
            "(20 + 0,64 + 2,5) MG/G POM DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Trok-n",
                "precoBase": 21.64
            },
            {
                "nome": "Cimecort",
                "precoBase": 22.08
            },
            {
                "nome": "Cetoconazol+dipropionato de Betametasona+sulfato de Neomicina",
                "precoBase": 27.77
            },
            {
                "nome": "Cetoconazol + Dipropionato de Betametasona + Sulfato de Neomicina",
                "precoBase": 28.47
            },
            {
                "nome": "Cebetym",
                "precoBase": 31.39
            },
            {
                "nome": "Cetoconazol + Diproprionato de Betametasona + Sulfato de Neomicina",
                "precoBase": 33.35
            }
        ],
        "precoReferencia": 22.93,
        "sinonimias": []
    },
    {
        "id": "med-00686",
        "nome": "Decadron Colírio",
        "principioAtivo": "Sulfato de Neomicina;fosfato Dissódico de Dexametasona",
        "descricao": "Associações oftalmológicas corticosteróides com antiinfecciosos",
        "apresentacoes": [
            "1,093 MG/ML + 5,8 MG/ML SOL OFT CT FR GOT PLAS OPC X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Dexavison",
                "precoBase": 11.5
            }
        ],
        "precoReferencia": 18.48,
        "sinonimias": []
    },
    {
        "id": "med-00687",
        "nome": "Triancinolona Acetonida + Sulfato de Neomicina + Gramicidina + Nistatina",
        "principioAtivo": "Sulfato de Neomicina;nistatina;gramicidina;triancinolona Acetonida",
        "descricao": "Corticoesteróides associados a antimicóticos e antibacterianos",
        "apresentacoes": [
            "1 MG + 2,5 MG + 0,25 MG + 100.000 UI/G CREM DERM CT BG AL X 30 G",
            "1,0 MG/G + 2,5 MG/G + 0,25 MG/G + 100000 UI/G POM DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Mud",
                "precoBase": 22.08
            },
            {
                "nome": "Oncileg",
                "precoBase": 41.29
            },
            {
                "nome": "Acetonido de Triancinolona+sulfato de Neomicina+gramicidina+nistatina",
                "precoBase": 41.56
            }
        ],
        "precoReferencia": 42.81,
        "sinonimias": []
    },
    {
        "id": "med-00688",
        "nome": "Aerolin",
        "principioAtivo": "Sulfato de Salbutamol",
        "descricao": "Antiasmáticos/dpoc agonistas b2 curta ação inalante",
        "apresentacoes": [
            "100 MCG/DOSE SUS AER INAL OR CT TB AL X 200 ACIONAMENTOS + DISP INAL",
            "5 MG/ML SOL P/NEBUL CT FR VD AMB X 10 ML "
        ],
        "genericos": [
            {
                "nome": "Sulfato de Salbutamol",
                "precoBase": 8.27
            },
            {
                "nome": "Butalab",
                "precoBase": 9.24
            },
            {
                "nome": "Neutoss",
                "precoBase": 19.24
            },
            {
                "nome": "Aerogold",
                "precoBase": 50.26
            },
            {
                "nome": "Aerofrin",
                "precoBase": 51.72
            },
            {
                "nome": "Aerodini",
                "precoBase": 54.76
            }
        ],
        "precoReferencia": 24.89,
        "sinonimias": []
    },
    {
        "id": "med-00689",
        "nome": "Aerogold",
        "principioAtivo": "Sulfato de Salbutamol Micronizado",
        "descricao": "Antiasmáticos/dpoc antiinflamatorios não esteroidais respiratórios inalante",
        "apresentacoes": [
            "100 MCG/DOSE SUS AER INAL OR CT TB AL 19 ML X 200 ACION + DISP INAL"
        ],
        "genericos": [
            {
                "nome": "Sulfato de Salbutamol",
                "precoBase": 34.98
            }
        ],
        "precoReferencia": 56.53,
        "sinonimias": []
    },
    {
        "id": "med-00690",
        "nome": "Clenil Compositum Hfa",
        "principioAtivo": "Sulfato de Salbutamol;dipropionato de Beclometasona",
        "descricao": "Antiasmáticos/dpoc agonistas b2 associados a corticosteróides, inalantes",
        "apresentacoes": [
            "(50 + 100) MCG SUS AER INAL OR CT FR AL X 200 ACIONAMENTOS + BOMB"
        ],
        "genericos": [
            {
                "nome": "Clenil Compositum a",
                "precoBase": 94.35
            }
        ],
        "precoReferencia": 67.33,
        "sinonimias": []
    },
    {
        "id": "med-00691",
        "nome": "Terbutil",
        "principioAtivo": "Sulfato de Terbutalina",
        "descricao": "Antiasmáticos/dpoc agonistas b2 sistêmicos",
        "apresentacoes": [
            "0,5 MG/ML SOL INJ CT 50 AMP VD TRANS X 1 ML"
        ],
        "genericos": [
            {
                "nome": "Sulfato de Terbutalina",
                "precoBase": 231.47
            }
        ],
        "precoReferencia": 468.17,
        "sinonimias": []
    },
    {
        "id": "med-00692",
        "nome": "Nesh Zinco",
        "principioAtivo": "Sulfato de Zinco",
        "descricao": "Outros suplementos minerais",
        "apresentacoes": [
            "20 MG COM SUS CT BL AL PLAS PVDC TRANS X 30 "
        ],
        "genericos": [
            {
                "nome": "Colírio Neo Brasil",
                "precoBase": 19.46
            }
        ],
        "precoReferencia": 58.23,
        "sinonimias": []
    },
    {
        "id": "med-00693",
        "nome": "Sulfato de Zinco",
        "principioAtivo": "Sulfato de Zinco Heptaidratado",
        "descricao": "Outros suplementos minerais",
        "apresentacoes": [
            "200 MCG/ML SOL INJ IV CX 50 AMP VD TRANS X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Colírio Geolab",
                "precoBase": 16.82
            },
            {
                "nome": "Unizinco",
                "precoBase": 35.15
            }
        ],
        "precoReferencia": 766.37,
        "sinonimias": []
    },
    {
        "id": "med-00694",
        "nome": "Protopic",
        "principioAtivo": "Tacrolimo",
        "descricao": "Outros produtos anti-inflamatórios não esteroidais dermatológicos",
        "apresentacoes": [
            "0,3 MG/G POM DER CT BG PLAS LAM X 10 G",
            "1,0 MG/G POM DER CT BG PLAS LAM X 10 G",
            "1,0 MG/G POM DER CT BG PLAS LAM X 30 G"
        ],
        "genericos": [
            {
                "nome": "Tacrolimo",
                "precoBase": 60.28
            },
            {
                "nome": "Tacroz",
                "precoBase": 104.58
            },
            {
                "nome": "Tarfic",
                "precoBase": 2047.81
            }
        ],
        "precoReferencia": 126.29,
        "sinonimias": []
    },
    {
        "id": "med-00695",
        "nome": "Prograf",
        "principioAtivo": "Tacrolimo Monoidratado",
        "descricao": "Outros imunossupressores",
        "apresentacoes": [
            "1MG CAP DURA CT ENV AL BL AL PLAS TRANS X100 ",
            "1MG CAP DURA LIB PROL CT ENV AL BL AL PLAS TRANS X 50",
            "5 MG/ML SOL INJ CT 10 AMP VD TRANS X 1 ML",
            "5MG CAP DURA CT ENV AL BL AL PLAS TRANS X 50"
        ],
        "genericos": [
            {
                "nome": "Tacrolimo",
                "precoBase": 76.5
            },
            {
                "nome": "Atobach",
                "precoBase": 99.19
            },
            {
                "nome": "Cropoc",
                "precoBase": 99.19
            },
            {
                "nome": "Tarfic",
                "precoBase": 107.65
            },
            {
                "nome": "Tacrofort",
                "precoBase": 318.41
            },
            {
                "nome": "Tacrolimo Monoidratado",
                "precoBase": 592.59
            }
        ],
        "precoReferencia": 1004.3,
        "sinonimias": []
    },
    {
        "id": "med-00696",
        "nome": "Cialis",
        "principioAtivo": "Tadalafila",
        "descricao": "Produtos para disfunção erétil, inibidores da pde5",
        "apresentacoes": [
            "20 MG COM REV CT  BL AL PLAS TRANS X 4",
            "20 MG COM REV CT BL AL PLAS TRANS X 1",
            "20 MG COM REV CT BL AL PLAS TRANS X 2 ",
            "20 MG COM REV CT BL AL PLAS TRANS X 8"
        ],
        "genericos": [
            {
                "nome": "Tadalafila",
                "precoBase": 24.96
            },
            {
                "nome": "td Fila",
                "precoBase": 25.53
            },
            {
                "nome": "Zyad",
                "precoBase": 87.0
            },
            {
                "nome": "Asap",
                "precoBase": 90.82
            },
            {
                "nome": "Tada",
                "precoBase": 114.43
            },
            {
                "nome": "Nesta",
                "precoBase": 170.98
            }
        ],
        "precoReferencia": 88.04,
        "sinonimias": []
    },
    {
        "id": "med-00697",
        "nome": "Alphagan",
        "principioAtivo": "Tartarato de Brimonidina",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "0,1% SOL OFT CT FR GOT PLAS OPC X 5 ML",
            "0,15% SOL OFT CT FR GOT PLAS OPC X 5 ML",
            "0,2% SOL OFT CT FR GOT PLAS OPC X 5 ML",
            "0,2% SOL OFT CT FRGOT PLAS OPC X 10 ML"
        ],
        "genericos": [
            {
                "nome": "Glaub",
                "precoBase": 39.96
            },
            {
                "nome": "Alphabrin",
                "precoBase": 53.63
            },
            {
                "nome": "Tartarato de Brimonidina",
                "precoBase": 71.64
            }
        ],
        "precoReferencia": 74.64,
        "sinonimias": []
    },
    {
        "id": "med-00698",
        "nome": "Seloken",
        "principioAtivo": "Tartarato de Metoprolol",
        "descricao": "Betabloqueadores puros",
        "apresentacoes": [
            "100 MG COM CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Tartarato de Metoprolol",
                "precoBase": 37.34
            },
            {
                "nome": "Miclox",
                "precoBase": 40.07
            },
            {
                "nome": "Lopressor",
                "precoBase": 41.66
            }
        ],
        "precoReferencia": 64.62,
        "sinonimias": []
    },
    {
        "id": "med-00699",
        "nome": "Tazocin",
        "principioAtivo": "Tazobactam Sódico;piperacilina Sódica",
        "descricao": "Penicilinas injetaveis de amplo espectro",
        "apresentacoes": [
            "2 G + 250 MG PO LIOF INJ CT FA VD TRANS",
            "4 G + 500 MG PO LIOF INJ CT FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Piperacilina Sódica + Tazobactam Sódico",
                "precoBase": 1200.69
            },
            {
                "nome": "Piperaciclina Sódica + Tazobactam Sódico",
                "precoBase": 1212.08
            },
            {
                "nome": "Pype",
                "precoBase": 2251.79
            }
        ],
        "precoReferencia": 206.59,
        "sinonimias": []
    },
    {
        "id": "med-00700",
        "nome": "Targocid",
        "principioAtivo": "Teicoplanina",
        "descricao": "Antibióticos glucopeptídeos",
        "apresentacoes": [
            "200 MG PO LIOF SOL INJ/INFUS IM/IV CX FA VD TRANS + DIL AMP VD TRANS X 3 ML",
            "400 MG PO LIOF SOL INJ/INFUS IM/IV CX FA VD TRANS + DIL AMP VD TRANS X 3 ML"
        ],
        "genericos": [
            {
                "nome": "Teicoston",
                "precoBase": 572.32
            },
            {
                "nome": "Teicoplanina",
                "precoBase": 1870.0
            }
        ],
        "precoReferencia": 617.49,
        "sinonimias": []
    },
    {
        "id": "med-00701",
        "nome": "Micardis",
        "principioAtivo": "Telmisartana",
        "descricao": "Antagonistas da angiotensina ii puros",
        "apresentacoes": [
            "40 MG COM CT BL AL/AL X 10",
            "40 MG COM CT BL AL/AL X 30",
            "80 MG COM CT BL AL/AL X 10",
            "80 MG COM CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Telmisartana",
                "precoBase": 51.21
            },
            {
                "nome": "Bramicar",
                "precoBase": 78.44
            }
        ],
        "precoReferencia": 88.84,
        "sinonimias": []
    },
    {
        "id": "med-00702",
        "nome": "Temodal",
        "principioAtivo": "Temozolomida",
        "descricao": "Agentes antineoplásicos alquilantes",
        "apresentacoes": [
            "100 MG CAP DURA CT 5 ENV PLAS OPC",
            "140 MG CAP DURA CT 5 ENV PLAS OPC",
            "180 MG CAP DURA CT 5 ENV PLAS OPC",
            "20 MG CAP DURA CT 5 ENV PLAS OPC"
        ],
        "genericos": [
            {
                "nome": "Temozolomida",
                "precoBase": 191.21
            },
            {
                "nome": "Tedhol Cápsulas",
                "precoBase": 202.53
            },
            {
                "nome": "Temozod",
                "precoBase": 205.2
            },
            {
                "nome": "Moz",
                "precoBase": 230.12
            },
            {
                "nome": "Temolida Cápsulas",
                "precoBase": 290.03
            },
            {
                "nome": "Tedhol",
                "precoBase": 810.12
            }
        ],
        "precoReferencia": 319.65,
        "sinonimias": []
    },
    {
        "id": "med-00703",
        "nome": "Tilatil",
        "principioAtivo": "Tenoxicam",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "20 MG COM REV CT BL AL PLAS TRANS X 10"
        ],
        "genericos": [
            {
                "nome": "Tenoxil",
                "precoBase": 35.05
            },
            {
                "nome": "Reumotec",
                "precoBase": 37.42
            },
            {
                "nome": "Tenoxicam",
                "precoBase": 41.71
            },
            {
                "nome": "Titenil",
                "precoBase": 57.15
            },
            {
                "nome": "Tilonax",
                "precoBase": 57.73
            },
            {
                "nome": "Teflan",
                "precoBase": 60.21
            }
        ],
        "precoReferencia": 108.33,
        "sinonimias": []
    },
    {
        "id": "med-00704",
        "nome": "Aubagio",
        "principioAtivo": "Teriflunomida",
        "descricao": "Produtos para esclerose múltipla",
        "apresentacoes": [
            "14 MG COM REV CT BL AL AL X 30 "
        ],
        "genericos": [
            {
                "nome": "Teriflunomida",
                "precoBase": 6639.12
            },
            {
                "nome": "Emnyra",
                "precoBase": 7333.42
            }
        ],
        "precoReferencia": 10961.47,
        "sinonimias": []
    },
    {
        "id": "med-00705",
        "nome": "Forteo",
        "principioAtivo": "Teriparatida",
        "descricao": "Homônios paratireoideanos e análogos",
        "apresentacoes": [
            "250 MCG /ML SOL INJ CT CARP VD INC X 2,4 ML X SIST APLIC PLAS"
        ],
        "genericos": [
            {
                "nome": "Terrosa",
                "precoBase": 859.98
            },
            {
                "nome": "Sondelbay",
                "precoBase": 1912.28
            }
        ],
        "precoReferencia": 5121.07,
        "sinonimias": []
    },
    {
        "id": "med-00706",
        "nome": "Androgel",
        "principioAtivo": "Testosterona",
        "descricao": "Andrógenos excluindo g3e, g3f",
        "apresentacoes": [
            "10 MG/G GEL DERM CT 30 ENV AL/PLAS X 5G",
            "16,2 MG/G GEL DERM CT TB PLAS PP OPC X 60 ACIONAMENTOS"
        ],
        "genericos": [
            {
                "nome": "Testogel",
                "precoBase": 326.87
            }
        ],
        "precoReferencia": 330.58,
        "sinonimias": []
    },
    {
        "id": "med-00707",
        "nome": "Foldan",
        "principioAtivo": "Tiabendazol",
        "descricao": "Anti-helmínticos exceto esquistossomicidas (p1c)",
        "apresentacoes": [
            "50 MG/G POM DERM CT BG AL X 45 G"
        ],
        "genericos": [
            {
                "nome": "Tiaplex",
                "precoBase": 28.52
            },
            {
                "nome": "Tiadol",
                "precoBase": 29.63
            }
        ],
        "precoReferencia": 48.08,
        "sinonimias": []
    },
    {
        "id": "med-00708",
        "nome": "Livial",
        "principioAtivo": "Tibolona",
        "descricao": "Outros hormônios sexuais e produtos similares",
        "apresentacoes": [
            "2,5 MG COM CT BL AL PLAS PVDC TRANS X 28",
            "2,5 MG COM CT BL AL PLAS PVDC TRANS X 84"
        ],
        "genericos": [
            {
                "nome": "Reduclim",
                "precoBase": 35.67
            },
            {
                "nome": "Libiam",
                "precoBase": 71.35
            },
            {
                "nome": "Tibolona",
                "precoBase": 77.78
            },
            {
                "nome": "Tibial",
                "precoBase": 121.48
            },
            {
                "nome": "Tiboclin",
                "precoBase": 125.71
            },
            {
                "nome": "Clindella",
                "precoBase": 125.71
            }
        ],
        "precoReferencia": 128.33,
        "sinonimias": []
    },
    {
        "id": "med-00709",
        "nome": "Brilinta",
        "principioAtivo": "Ticagrelor",
        "descricao": "Inibidores da agragação plaquetária, antagonistas dos receptores da adenosina difosfato",
        "apresentacoes": [
            "90 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 10",
            "90 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 60"
        ],
        "genericos": [
            {
                "nome": "Ticagrelor",
                "precoBase": 52.46
            },
            {
                "nome": "Tiag",
                "precoBase": 86.62
            },
            {
                "nome": "Coaly",
                "precoBase": 91.03
            },
            {
                "nome": "Artag",
                "precoBase": 182.1
            }
        ],
        "precoReferencia": 91.03,
        "sinonimias": []
    },
    {
        "id": "med-00710",
        "nome": "Coltrax",
        "principioAtivo": "Tiocolchicosídeo",
        "descricao": "Relaxante muscular de ação central",
        "apresentacoes": [
            "4 MG COM CT BL AL PLAS LAR X 20"
        ],
        "genericos": [
            {
                "nome": "Tiocolchicosídeo",
                "precoBase": 4.02
            },
            {
                "nome": "Coltrax Inj",
                "precoBase": 20.0
            }
        ],
        "precoReferencia": 72.26,
        "sinonimias": []
    },
    {
        "id": "med-00711",
        "nome": "Gynomax",
        "principioAtivo": "Tioconazol;tinidazol",
        "descricao": "Tricomonicidas tópicos",
        "apresentacoes": [
            "(20,0 + 30,0) MG/G CREM VAG CT BG AL X 35 G + 7 APLIC"
        ],
        "genericos": [
            {
                "nome": "Tioconazol + Tinidazol",
                "precoBase": 67.06
            },
            {
                "nome": "Tiotrax",
                "precoBase": 81.33
            },
            {
                "nome": "Tinin",
                "precoBase": 107.99
            },
            {
                "nome": "Takil",
                "precoBase": 108.97
            }
        ],
        "precoReferencia": 111.52,
        "sinonimias": []
    },
    {
        "id": "med-00712",
        "nome": "Mounjaro Multidose",
        "principioAtivo": "Tirzepatida",
        "descricao": "Antidiabéticos agonistas de glp-1",
        "apresentacoes": [
            "12,5 MG/ML SOL INJ SC CT CAR VD TRANS X 2,4 ML + CAN APLIC",
            "16,7 MG/ML SOL INJ SC CT CAR VD TRANS X 2,4 ML + CAN APLIC",
            "20,8 MG/ML SOL INJ SC CT CAR VD TRANS X 2,4 ML + CAN APLIC",
            "25 MG/ML SOL INJ SC CT CAR VD TRANS X 2,4 ML + CAN APLIC"
        ],
        "genericos": [
            {
                "nome": "Mounjaro",
                "precoBase": 654.12
            }
        ],
        "precoReferencia": 1681.77,
        "sinonimias": []
    },
    {
        "id": "med-00713",
        "nome": "Bramitob",
        "principioAtivo": "Tobramicina",
        "descricao": "Aminoglicosídeos",
        "apresentacoes": [
            "75 MG/ML SOL INAL OR CT 56 FLAC PLAS TRANS X 4 ML"
        ],
        "genericos": [
            {
                "nome": "Tobramicina",
                "precoBase": 24.77
            },
            {
                "nome": "Tobracular",
                "precoBase": 26.49
            },
            {
                "nome": "Tobracin",
                "precoBase": 27.29
            },
            {
                "nome": "Zobilar",
                "precoBase": 31.62
            },
            {
                "nome": "Tobrex",
                "precoBase": 40.88
            },
            {
                "nome": "Zoteon pó",
                "precoBase": 14153.85
            }
        ],
        "precoReferencia": 14783.76,
        "sinonimias": []
    },
    {
        "id": "med-00714",
        "nome": "Actemra",
        "principioAtivo": "Tocilizumabe",
        "descricao": "Agentes anti-reumáticos específicos",
        "apresentacoes": [
            "162 MG SOL INJ SC CT 4 SER PREENC VD TRANS X 0,9 ML"
        ],
        "genericos": [
            {
                "nome": "Avtozma",
                "precoBase": 1723.86
            },
            {
                "nome": "Tyenne",
                "precoBase": 2154.83
            }
        ],
        "precoReferencia": 8619.37,
        "sinonimias": []
    },
    {
        "id": "med-00715",
        "nome": "Toduze",
        "principioAtivo": "Topiramato",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "100 MG/ML SOL GOT OR CT FR GOT PLAS PEBD/PEAD OPC X 30 ML"
        ],
        "genericos": [
            {
                "nome": "Têmpora",
                "precoBase": 11.65
            },
            {
                "nome": "Égide",
                "precoBase": 16.06
            },
            {
                "nome": "Topiramato",
                "precoBase": 23.63
            },
            {
                "nome": "Amato",
                "precoBase": 26.55
            },
            {
                "nome": "Vidmax",
                "precoBase": 29.22
            },
            {
                "nome": "Arasid",
                "precoBase": 35.62
            }
        ],
        "precoReferencia": 506.33,
        "sinonimias": []
    },
    {
        "id": "med-00716",
        "nome": "Roteas",
        "principioAtivo": "Tosilato de Edoxabana Monoidratado",
        "descricao": "Inibidores diretos do fator xa",
        "apresentacoes": [
            "15 MG COM REV CT BL AL AL X 14 ",
            "30 MG COM REV CT BL AL AL X 14 ",
            "30 MG COM REV CT BL AL AL X 30 ",
            "60 MG COM REV CT BL AL AL X 14 "
        ],
        "genericos": [
            {
                "nome": "Tosilato de Edoxabana",
                "precoBase": 23.78
            }
        ],
        "precoReferencia": 54.97,
        "sinonimias": []
    },
    {
        "id": "med-00717",
        "nome": "Nexavar",
        "principioAtivo": "Tosilato de Sorafenibe",
        "descricao": "Outros antineoplásicos inibidores da proteína kinase",
        "apresentacoes": [
            "200 MG COM REV CT BL AL / AL X 60"
        ],
        "genericos": [
            {
                "nome": "Sofanyr",
                "precoBase": 2289.67
            }
        ],
        "precoReferencia": 14088.89,
        "sinonimias": []
    },
    {
        "id": "med-00718",
        "nome": "Xeomin",
        "principioAtivo": "Toxina Botulínica a",
        "descricao": "Relaxante muscular de ação periférica",
        "apresentacoes": [
            "100 U PO LIOF SOL INJ CT 1 FA VD TRANS",
            "200 U PO LIOF SOL INJ CT 1 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Prosigne",
                "precoBase": 1402.81
            },
            {
                "nome": "Botulim",
                "precoBase": 1402.81
            },
            {
                "nome": "Botulift",
                "precoBase": 1616.76
            },
            {
                "nome": "Botox",
                "precoBase": 1750.09
            },
            {
                "nome": "Dysport",
                "precoBase": 2193.54
            },
            {
                "nome": "Nabota",
                "precoBase": 2657.91
            }
        ],
        "precoReferencia": 3110.83,
        "sinonimias": []
    },
    {
        "id": "med-00719",
        "nome": "Travatan",
        "principioAtivo": "Travoprosta",
        "descricao": "Preparações antiglaucomas e mióticas tópicas",
        "apresentacoes": [
            "0,04 MG/ML SOL OFT CT FR GOT PLAS PP TRANS  X 2,5 ML",
            "0,04 MG/ML SOL OFT CT FR GOT PLAS PP TRANS X 5,0 ML"
        ],
        "genericos": [
            {
                "nome": "Travoprosta",
                "precoBase": 95.89
            },
            {
                "nome": "Travoptic",
                "precoBase": 179.16
            },
            {
                "nome": "Travamed Bak Free",
                "precoBase": 196.96
            },
            {
                "nome": "Travamed",
                "precoBase": 196.97
            }
        ],
        "precoReferencia": 196.97,
        "sinonimias": []
    },
    {
        "id": "med-00720",
        "nome": "Vesanoid",
        "principioAtivo": "Tretinoína",
        "descricao": "Todos os outros antineoplásicos",
        "apresentacoes": [
            "10 MG CAP MOLE CT FR VD AMB X 100"
        ],
        "genericos": [
            {
                "nome": "Vitacid",
                "precoBase": 46.47
            },
            {
                "nome": "Suavicid One",
                "precoBase": 56.82
            },
            {
                "nome": "Lumivit",
                "precoBase": 59.57
            },
            {
                "nome": "Vitanol-a",
                "precoBase": 60.79
            }
        ],
        "precoReferencia": 2420.68,
        "sinonimias": []
    },
    {
        "id": "med-00721",
        "nome": "Opthaac 40",
        "principioAtivo": "Triancinolona Acetonida",
        "descricao": "Corticosteróides injetáveis puros",
        "apresentacoes": [
            "40 MG/ML SUSP INJ CT  FA VD AMB X 1 ML "
        ],
        "genericos": [
            {
                "nome": "Triancinolona Acetonida",
                "precoBase": 16.35
            },
            {
                "nome": "Triancinolona de Acetonida",
                "precoBase": 16.5
            },
            {
                "nome": "Acetonida de Triancinolona",
                "precoBase": 16.66
            },
            {
                "nome": "Oncileg-a",
                "precoBase": 17.44
            },
            {
                "nome": "Acsisa",
                "precoBase": 17.55
            },
            {
                "nome": "Coliaft",
                "precoBase": 17.89
            }
        ],
        "precoReferencia": 128.91,
        "sinonimias": []
    },
    {
        "id": "med-00722",
        "nome": "Promensil",
        "principioAtivo": "Trifolium Pratense l.",
        "descricao": "Moduladores seletivos do receptor de estrogênio",
        "apresentacoes": [
            "100MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Minel",
                "precoBase": 52.1
            },
            {
                "nome": "Climatrix",
                "precoBase": 151.2
            }
        ],
        "precoReferencia": 167.98,
        "sinonimias": []
    },
    {
        "id": "med-00723",
        "nome": "Bactrim",
        "principioAtivo": "Trimetoprima;sulfametoxazol",
        "descricao": "Associações de trimetoprima e similares",
        "apresentacoes": [
            "40 MG/ML + 8 MG/ML SUS OR CT FR PLAS AMB X 100 ML",
            "400 MG + 80 MG COM CT BL AL PLAS TRANS X 20",
            "80 MG/ML + 16 MG/ML SUS OR CT FR PLAS AMB X 100 ML",
            "800 MG + 160 MG COM CT BL AL PLAS TRANS X 10"
        ],
        "genericos": [
            {
                "nome": "Bacfar",
                "precoBase": 16.13
            },
            {
                "nome": "Sulfametoxazol + Trimetoprima",
                "precoBase": 18.82
            },
            {
                "nome": "Sulfametoxazol+trimetoprima",
                "precoBase": 19.21
            },
            {
                "nome": "Sipul",
                "precoBase": 19.6
            },
            {
                "nome": "Belfactrim",
                "precoBase": 25.96
            },
            {
                "nome": "Bacteracin",
                "precoBase": 26.89
            }
        ],
        "precoReferencia": 31.79,
        "sinonimias": []
    },
    {
        "id": "med-00724",
        "nome": "Tormiv Odg",
        "principioAtivo": "Trometamol Cetorolaco",
        "descricao": "Analgésicos não narcóticos e antipiréticos sob prescrição",
        "apresentacoes": [
            "10 MG GRAN ORODISP CT 10 ENV AL PLAS PE/PET OPC",
            "10 MG GRAN ORODISP CT 20 ENV AL PLAS PE/PET OPC",
            "10 MG GRAN ORODISP CT 30 ENV AL PLAS PE/PET OPC",
            "10 MG GRAN ORODISP CT 4 ENV AL PLAS PE/PET OPC"
        ],
        "genericos": [
            {
                "nome": "Trometamol Cetorolaco",
                "precoBase": 13.77
            },
            {
                "nome": "Kethol",
                "precoBase": 14.78
            },
            {
                "nome": "Ultrox",
                "precoBase": 17.93
            },
            {
                "nome": "Totti sl",
                "precoBase": 18.36
            },
            {
                "nome": "Symdulor sl",
                "precoBase": 20.14
            },
            {
                "nome": "Mytro",
                "precoBase": 20.19
            }
        ],
        "precoReferencia": 21.92,
        "sinonimias": []
    },
    {
        "id": "med-00725",
        "nome": "Mydriacyl",
        "principioAtivo": "Tropicamida",
        "descricao": "Midriáticos e cicloplégicos",
        "apresentacoes": [
            "10 MG/ML SOL OFT CT FR GOT PLAS TRANS X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Ciclomidrin",
                "precoBase": 22.74
            }
        ],
        "precoReferencia": 22.71,
        "sinonimias": []
    },
    {
        "id": "med-00726",
        "nome": "Varicoss",
        "principioAtivo": "Troxerrutina;cumarina",
        "descricao": "Terapia antivaricosa tópica",
        "apresentacoes": [
            "(15 + 90) MG COM REV LIB PROL CT BL AL PLAS PVDC TRANS X 60",
            "(15 + 90) MG COM REV LIB PROL CT BL AL PLAS PVDC TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Venalot",
                "precoBase": 26.39
            }
        ],
        "precoReferencia": 46.59,
        "sinonimias": []
    },
    {
        "id": "med-00727",
        "nome": "Nebido",
        "principioAtivo": "Undecilato de Testosterona",
        "descricao": "Andrógenos excluindo g3e, g3f",
        "apresentacoes": [
            "250 MG/ML SOL INJ IM CT AMP VD AMB X 4 ML"
        ],
        "genericos": [
            {
                "nome": "Undecilato de Testosterona",
                "precoBase": 534.36
            },
            {
                "nome": "Hormus",
                "precoBase": 573.47
            },
            {
                "nome": "Daem",
                "precoBase": 573.47
            },
            {
                "nome": "Tezdro",
                "precoBase": 641.52
            },
            {
                "nome": "Atesto",
                "precoBase": 676.39
            }
        ],
        "precoReferencia": 882.26,
        "sinonimias": []
    },
    {
        "id": "med-00728",
        "nome": "Ureadin",
        "principioAtivo": "Uréia",
        "descricao": "Emolientes protetores dermatológicos",
        "apresentacoes": [
            "200 MG/G CREM DERM  CT BG PLAS OPC X 50 G"
        ],
        "genericos": [
            {
                "nome": "Nutraplus",
                "precoBase": 73.51
            },
            {
                "nome": "Nutraplus 20",
                "precoBase": 100.26
            }
        ],
        "precoReferencia": 90.2,
        "sinonimias": []
    },
    {
        "id": "med-00729",
        "nome": "Stelara",
        "principioAtivo": "Ustequinumabe",
        "descricao": "Inibidores da interleucina",
        "apresentacoes": [
            "45 MG SOL INJ CT 1 FA VD INC X 0,5 ML",
            "45 MG SOL INJ CT 1 SER PREENC VD TRANS DISP SEGURANÇA  X 0,5 ML ",
            "45 MG SOL INJ CT 1 SER PREENC VD TRANS X 0,5 ML ACOP EM CAN APLI",
            "90 MG SOL INJ CT 1 SER PREENC VD TRANS DISP SEGURANÇA X 1 ML "
        ],
        "genericos": [
            {
                "nome": "Epyztek",
                "precoBase": 12200.24
            },
            {
                "nome": "Wezenla",
                "precoBase": 18835.85
            },
            {
                "nome": "Yesintek",
                "precoBase": 19654.27
            },
            {
                "nome": "Qoyvolma",
                "precoBase": 19654.27
            }
        ],
        "precoReferencia": 24567.85,
        "sinonimias": []
    },
    {
        "id": "med-00730",
        "nome": "Ixchiq",
        "principioAtivo": "Vacina Chikungunya (recombinante e Atenuada)",
        "descricao": "Todas outras vacinas virais",
        "apresentacoes": [
            "PÓ LIOF SOL INJ IM CT FA VD TRANS +SER PREENCH DIL X 0,5ML"
        ],
        "genericos": [
            {
                "nome": "Butantan - Chik",
                "precoBase": 1022.45
            }
        ],
        "precoReferencia": 1260.47,
        "sinonimias": []
    },
    {
        "id": "med-00731",
        "nome": "Comirnaty",
        "principioAtivo": "Vacina Covid-19",
        "descricao": "Vacinas para o coronavírus",
        "apresentacoes": [
            "10 MCG/DOSE SUS INJ CT 10 FA VD INC X 0,48 ML",
            "10 MCG/DOSE SUS INJ CT 10 FA VD INC X 2,25 ML",
            "3 MCG/DOSE SUS DIL INJ CT 10 FA VD INC X 0,4 ML",
            "3 MCG/DOSE SUS DIL INJ CT 10 FA VD INC X 0,48 ML"
        ],
        "genericos": [
            {
                "nome": "Spikevax",
                "precoBase": 264.67
            }
        ],
        "precoReferencia": 2646.88,
        "sinonimias": []
    },
    {
        "id": "med-00732",
        "nome": "Influvac Tetra",
        "principioAtivo": "Vacina Influenza Trivalente (inativada, Subunitária)",
        "descricao": "Vacina para gripe (influenza)",
        "apresentacoes": [
            "SUS INJ CT 10 SER LONG PREENC VD TRANS S/ AGU X 0,5 ML"
        ],
        "genericos": [
            {
                "nome": "Influvac",
                "precoBase": 85.46
            }
        ],
        "precoReferencia": 807.12,
        "sinonimias": []
    },
    {
        "id": "med-00733",
        "nome": "Abrysvo",
        "principioAtivo": "Vacina Vírus Sincicial Respiratório a e b (recombinante)",
        "descricao": "Vacinas contra o vírus sincicial respiratório (rsv)",
        "apresentacoes": [
            "60 MCG + 60 MCG PO LIOF INJ CT 10 FA VD TRANS + 10 SOL DIL FA VD TRANS X 0,5 ML",
            "60 MCG + 60 MCG PO LIOF INJ CT 10 FA VD TRANS + 10 SOL DIL SER PREENC VD TRANS X 0,5 ML + 10 ADAP + 10 AGU",
            "60 MCG + 60 MCG PO LIOF INJ CT 5 FA VD TRANS + 5 SOL DIL SER PREENC VD TRANS X 0,5 ML + 5 ADAP + 5 AGU",
            "60 MCG + 60 MCG PO LIOF INJ CT FA VD TRANS + SOL DIL SER PREENC VD TRANS X 0,5 ML + ADAP + AGU"
        ],
        "genericos": [
            {
                "nome": "Vacina do Vírus Sincicial Respiratório Bivalente (recombinante)",
                "precoBase": 1627.17
            }
        ],
        "precoReferencia": 1627.17,
        "sinonimias": []
    },
    {
        "id": "med-00734",
        "nome": "Betnovate",
        "principioAtivo": "Valerato de Betametasona",
        "descricao": "Corticoesteróides tópicos puros",
        "apresentacoes": [
            "1 MG/G CREM DERM CT BG AL X 30 G  ",
            "1 MG/G POM DERM CT BG AL X 30 G ",
            "1 MG/ML SOL TOP CAPI CT FR PLAS OPC X 50 ML "
        ],
        "genericos": [
            {
                "nome": "Valerato de Betametasona",
                "precoBase": 27.84
            },
            {
                "nome": "Valerato Betametasona",
                "precoBase": 29.75
            },
            {
                "nome": "Betnovate n",
                "precoBase": 49.77
            },
            {
                "nome": "Dermovat",
                "precoBase": 53.39
            }
        ],
        "precoReferencia": 59.63,
        "sinonimias": []
    },
    {
        "id": "med-00735",
        "nome": "Postec",
        "principioAtivo": "Valerato de Betametasona;hialuronidase",
        "descricao": "Outras associações de corticosteróides",
        "apresentacoes": [
            "2,5 MG + 150 UTR POM DERM CT BG AL X 10 G",
            "2,5 MG + 150 UTR POM DERM CT BG AL X 20 G"
        ],
        "genericos": [
            {
                "nome": "Hyax",
                "precoBase": 76.22
            }
        ],
        "precoReferencia": 79.08,
        "sinonimias": []
    },
    {
        "id": "med-00736",
        "nome": "Quadriderm",
        "principioAtivo": "Valerato de Betametasona;tolnaftato;sulfato de Gentamicina;clioquinol",
        "descricao": "Corticoesteróides associados a antimicóticos e antibacterianos",
        "apresentacoes": [
            "0,50 MG/G + 1 MG/G + 10 MG/G + 10 MG/G CREM DERM CT BG AL X 20 G",
            "0,50 MG/G + 1 MG/G + 10 MG/G + 10 MG/G POM DERM CT BG AL X 20 G"
        ],
        "genericos": [
            {
                "nome": "Valerato de Betametasona + Sulfato de Gentamicina + Tolnaftato + Clioquinol",
                "precoBase": 32.79
            },
            {
                "nome": "Valerato de Betametasona + Sulfato de Gentamicina + Clioquinol + Tolnaftato",
                "precoBase": 34.01
            },
            {
                "nome": "Clioqderm",
                "precoBase": 34.61
            },
            {
                "nome": "Valerato de Betametasona + Sulfato de Gentamicina + Clioquinol + Tolnaftato Pomada",
                "precoBase": 37.82
            },
            {
                "nome": "Valerato de Betametasona + Sulfato de Getamicina + Tolnaftato + Clioquinol",
                "precoBase": 39.41
            },
            {
                "nome": "Quadrilon",
                "precoBase": 39.79
            }
        ],
        "precoReferencia": 62.43,
        "sinonimias": []
    },
    {
        "id": "med-00737",
        "nome": "Verutex b",
        "principioAtivo": "Valerato de Betametasona;ácido Fusídico",
        "descricao": "Corticoesteróides associados a antibacterianos",
        "apresentacoes": [
            "20 MG/G + 1 MG/G CREM DERM CT BG AL X 15 G",
            "20 MG/G + 1 MG/G CREM DERM CT BG AL X 5 G"
        ],
        "genericos": [
            {
                "nome": "Ácido Fusídico + Valerato de Betametasona",
                "precoBase": 65.88
            }
        ],
        "precoReferencia": 36.23,
        "sinonimias": []
    },
    {
        "id": "med-00738",
        "nome": "Primogyna®",
        "principioAtivo": "Valerato de Estradiol Micronizado",
        "descricao": "Estrógenos excluindo g3a, g3e, g3f",
        "apresentacoes": [
            "1 MG COM REV CT BL AL PLAS TRANS X 28",
            "1 MG COM REV CT BL AL PLAS TRANS X 84",
            "2 MG COM REV CT BL AL PLAS TRANS X 28"
        ],
        "genericos": [
            {
                "nome": "Valerato de Estradiol",
                "precoBase": 71.88
            },
            {
                "nome": "Yvi",
                "precoBase": 118.68
            }
        ],
        "precoReferencia": 59.35,
        "sinonimias": []
    },
    {
        "id": "med-00739",
        "nome": "Qlaira",
        "principioAtivo": "Valerato de Estradiol;dienogeste",
        "descricao": "Preparações contraceptivas trifásicas",
        "apresentacoes": [
            "3 MG + (2 + 2) MG + (2 + 3) MG + 1 MG COM REV EST BL AL PLAS PVC TRANS X 26 + 2 PLACEBOS"
        ],
        "genericos": [
            {
                "nome": "Valerato de Estradiol + Dienogeste",
                "precoBase": 45.5
            }
        ],
        "precoReferencia": 75.12,
        "sinonimias": []
    },
    {
        "id": "med-00740",
        "nome": "Mesigyna",
        "principioAtivo": "Valerato de Estradiol;enantato de Noretisterona",
        "descricao": "Outros hormônios contraceptivos sistêmicos",
        "apresentacoes": [
            "50 MG/ML + 5 MG/ML SOL INJ CT AMP VD AMB X 1 ML",
            "50 MG/ML + 5 MG/ML SOL INJ CT SER PREENC VD TRANS X 1 ML + AGU"
        ],
        "genericos": [
            {
                "nome": "Enantato de Noretisterona + Valerato de Estradiol",
                "precoBase": 28.16
            },
            {
                "nome": "Noregyna",
                "precoBase": 43.7
            }
        ],
        "precoReferencia": 49.02,
        "sinonimias": []
    },
    {
        "id": "med-00741",
        "nome": "Valeriane",
        "principioAtivo": "Valeriana Officinalis l.",
        "descricao": "Fitoterápicos",
        "apresentacoes": [
            "50 MG COM REV CT BL AL PLAS TRANS X 20"
        ],
        "genericos": [
            {
                "nome": "Valyanne",
                "precoBase": 22.51
            },
            {
                "nome": "Valerinati",
                "precoBase": 28.08
            },
            {
                "nome": "Valerimed",
                "precoBase": 28.39
            },
            {
                "nome": "Valessone",
                "precoBase": 32.93
            },
            {
                "nome": "Sonotabs",
                "precoBase": 57.39
            },
            {
                "nome": "Calmitane",
                "precoBase": 62.23
            }
        ],
        "precoReferencia": 101.21,
        "sinonimias": []
    },
    {
        "id": "med-00742",
        "nome": "Torval cr",
        "principioAtivo": "Valproato de Sódio",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "300 MG COM REV LIB PROL CT BL AL/AL X 30",
            "500 MG COM REV LIB PROL CT BL AL/AL X 30"
        ],
        "genericos": [
            {
                "nome": "Valproato de Sodio",
                "precoBase": 16.54
            },
            {
                "nome": "Lavie",
                "precoBase": 16.9
            },
            {
                "nome": "Valproato de Sódio",
                "precoBase": 17.01
            },
            {
                "nome": "Depakene",
                "precoBase": 29.55
            },
            {
                "nome": "Ácido Valpróico",
                "precoBase": 68.82
            },
            {
                "nome": "Epilenil",
                "precoBase": 113.77
            }
        ],
        "precoReferencia": 56.51,
        "sinonimias": []
    },
    {
        "id": "med-00743",
        "nome": "Diovan",
        "principioAtivo": "Valsartana",
        "descricao": "Antagonistas da angiotensina ii puros",
        "apresentacoes": [
            "160 MG COM REV CT BL AL AL X 14",
            "160 MG COM REV CT BL AL AL X 28",
            "320 MG COM REV CT BL AL AL X 14",
            "320 MG COM REV CT BL AL AL X 28"
        ],
        "genericos": [
            {
                "nome": "Vartaz",
                "precoBase": 32.01
            },
            {
                "nome": "Valsartana",
                "precoBase": 64.92
            },
            {
                "nome": "Bravan",
                "precoBase": 75.89
            },
            {
                "nome": "Aval",
                "precoBase": 185.39
            },
            {
                "nome": "Brasart",
                "precoBase": 242.06
            },
            {
                "nome": "Brasart Bcc",
                "precoBase": 256.11
            }
        ],
        "precoReferencia": 79.16,
        "sinonimias": []
    },
    {
        "id": "med-00744",
        "nome": "Marevan",
        "principioAtivo": "Varfarina Sódica",
        "descricao": "Antagonistas da vitamina k",
        "apresentacoes": [
            "2,5 MG COM CT BL AL PLAS TRANS X 60",
            "5 MG COM CT BL AL PLAS PVC  TRANS X 150",
            "5 MG COM CT BL AL PLAS TRANS X 10",
            "5 MG COM CT BL AL PLAS TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Varfarina Sódica",
                "precoBase": 18.76
            }
        ],
        "precoReferencia": 11.94,
        "sinonimias": []
    },
    {
        "id": "med-00745",
        "nome": "Galvus",
        "principioAtivo": "Vildagliptina",
        "descricao": "Antidiabéticos inibidores dpp-iv  puros",
        "apresentacoes": [
            "50 MG COM CT BL AL/AL X 14",
            "50 MG COM CT BL AL/AL X 28",
            "50 MG COM CT BL AL/AL X 56"
        ],
        "genericos": [
            {
                "nome": "Vildagliptina",
                "precoBase": 20.95
            },
            {
                "nome": "Mahan",
                "precoBase": 37.63
            },
            {
                "nome": "Glytco",
                "precoBase": 45.0
            },
            {
                "nome": "Luniera",
                "precoBase": 52.54
            },
            {
                "nome": "Vilgli",
                "precoBase": 64.81
            },
            {
                "nome": "Diavitality",
                "precoBase": 126.25
            }
        ],
        "precoReferencia": 69.28,
        "sinonimias": []
    },
    {
        "id": "med-00746",
        "nome": "Vfend",
        "principioAtivo": "Voriconazol",
        "descricao": "Agentes sistêmicos para infecções fúngicas",
        "apresentacoes": [
            "200 MG COM REV CT BL AL PLAS TRANS X 14",
            "200 MG PO LIOF SOL INJ CT 1 FA VD TRANS"
        ],
        "genericos": [
            {
                "nome": "Voriconazol",
                "precoBase": 1724.21
            },
            {
                "nome": "Velenaxol",
                "precoBase": 2709.94
            },
            {
                "nome": "Vori",
                "precoBase": 7401.35
            },
            {
                "nome": "Veac",
                "precoBase": 11386.69
            }
        ],
        "precoReferencia": 2765.3,
        "sinonimias": []
    },
    {
        "id": "med-00747",
        "nome": "Priorix",
        "principioAtivo": "Vírus da Caxumba;vírus da Rubeola;vírus do Sarampo",
        "descricao": "Associaçôes com vacina anti-sarampo e parotidite",
        "apresentacoes": [
            "PO LIOF INJ CT FA VD TRANS MONODOSE + SER PREEN VD TRANS DIL X 0,5 ML"
        ],
        "genericos": [
            {
                "nome": "M-m-r ii",
                "precoBase": 48.34
            }
        ],
        "precoReferencia": 66.45,
        "sinonimias": []
    },
    {
        "id": "med-00748",
        "nome": "Avaxim",
        "principioAtivo": "Vírus da Hepatite a Purificado Inativado",
        "descricao": "Vacina para hepatite",
        "apresentacoes": [
            "160 U/ML SUS INJ CT SER PRE-ENCH C/ AGU ACOPLADA X 0,5 ML"
        ],
        "genericos": [
            {
                "nome": "Vaqta",
                "precoBase": 126.98
            }
        ],
        "precoReferencia": 155.92,
        "sinonimias": []
    },
    {
        "id": "med-00749",
        "nome": "Zostavax",
        "principioAtivo": "Vírus da Varicela -zoster",
        "descricao": "Vacina contra varicella",
        "apresentacoes": [
            "PO LIOF INJ CT FA VD INC + FA VD INC DIL X 3 ML"
        ],
        "genericos": [
            {
                "nome": "Varilrix",
                "precoBase": 295.05
            }
        ],
        "precoReferencia": 806.38,
        "sinonimias": []
    },
    {
        "id": "med-00750",
        "nome": "Aspirina Prevent",
        "principioAtivo": "Ácido Acetilsalicílico",
        "descricao": "Inibidores da agregação plaquetária, ciclo-oxigenase inibidores",
        "apresentacoes": [
            "100 MG COM REV CT BL AL / AL X 100",
            "100 MG COM REV CT BL AL / AL X 30",
            "300 MG COM REV CT BL AL / AL X 30"
        ],
        "genericos": [
            {
                "nome": "Acido Acetilsalicilico",
                "precoBase": 13.62
            },
            {
                "nome": "Ácido Acetilsalicílico",
                "precoBase": 14.5
            },
            {
                "nome": "Ecasil-81",
                "precoBase": 17.35
            },
            {
                "nome": "Aspirina",
                "precoBase": 18.49
            },
            {
                "nome": "Aas Protect",
                "precoBase": 23.54
            },
            {
                "nome": "Saliprevi",
                "precoBase": 23.93
            }
        ],
        "precoReferencia": 24.75,
        "sinonimias": []
    },
    {
        "id": "med-00751",
        "nome": "Cafiaspirina",
        "principioAtivo": "Ácido Acetilsalicílico;cafeína",
        "descricao": "Analgésicos não narcóticos e antipiréticos isentos de prescrição",
        "apresentacoes": [
            "650 MG + 65 MG COM CT BL AL/AL X 100"
        ],
        "genericos": [
            {
                "nome": "Doril",
                "precoBase": 19.48
            }
        ],
        "precoReferencia": 197.99,
        "sinonimias": []
    },
    {
        "id": "med-00752",
        "nome": "Ácido Ascórbico Hypofarma",
        "principioAtivo": "Ácido Ascórbico",
        "descricao": "Vitamina c pura",
        "apresentacoes": [
            "100 MG/ML SOL INJ IV/IM CX 100 AMP VD AMB X 5 ML"
        ],
        "genericos": [
            {
                "nome": "Vitergyl c",
                "precoBase": 15.4
            },
            {
                "nome": "Cebion",
                "precoBase": 17.51
            },
            {
                "nome": "Redoxon",
                "precoBase": 19.0
            },
            {
                "nome": "Bio-c",
                "precoBase": 19.72
            },
            {
                "nome": "Cewin",
                "precoBase": 22.0
            },
            {
                "nome": "Viter c",
                "precoBase": 27.71
            }
        ],
        "precoReferencia": 129.78,
        "sinonimias": []
    },
    {
        "id": "med-00753",
        "nome": "Azelan",
        "principioAtivo": "Ácido Azelaico",
        "descricao": "Antiacneicos tópicos",
        "apresentacoes": [
            "150 MG/G GEL DERM CT BG AL X 15 G",
            "150 MG/G GEL DERM CT BG AL X 30 G",
            "200 MG/G CREM DERM CT BG AL X 30 G"
        ],
        "genericos": [
            {
                "nome": "Zella",
                "precoBase": 87.8
            }
        ],
        "precoReferencia": 47.35,
        "sinonimias": []
    },
    {
        "id": "med-00754",
        "nome": "Stomaliv",
        "principioAtivo": "Ácido Cítrico;bicarbonato de Sódio;carbonato de Sódio",
        "descricao": "Antiácidos puros",
        "apresentacoes": [
            "(430 + 430 + 100) MG/G PO EFEV CT 35 ENV PAP/AL/PLAS PE X 5 G (SABOR ABACAXI)"
        ],
        "genericos": [
            {
                "nome": "Sal de Fruta Eno",
                "precoBase": 5.16
            },
            {
                "nome": "Estomazil",
                "precoBase": 15.49
            }
        ],
        "precoReferencia": 54.03,
        "sinonimias": []
    },
    {
        "id": "med-00755",
        "nome": "Afolic Infantil",
        "principioAtivo": "Ácido Fólico",
        "descricao": "Outros produtos antianêmicos, incluindo ácido fólico, ácido folínico",
        "apresentacoes": [
            "0,2 MG/ML SOL OR CX 100 FR PLAS AMB X 30 ML + 100 CGT (EMB HOSP)"
        ],
        "genericos": [
            {
                "nome": "Folacin",
                "precoBase": 9.89
            },
            {
                "nome": "Afolic",
                "precoBase": 12.61
            },
            {
                "nome": "Afopic",
                "precoBase": 13.62
            },
            {
                "nome": "Folonin",
                "precoBase": 13.86
            },
            {
                "nome": "Neo Fólico",
                "precoBase": 13.86
            },
            {
                "nome": "Acfol",
                "precoBase": 15.71
            }
        ],
        "precoReferencia": 1600.51,
        "sinonimias": []
    },
    {
        "id": "med-00756",
        "nome": "Ponstan",
        "principioAtivo": "Ácido Mefenâmico",
        "descricao": "Antirreumáticos não esteroidais puros",
        "apresentacoes": [
            "500 MG COM CT BL AL PLAS AMB X 24"
        ],
        "genericos": [
            {
                "nome": "Acido Mefenamico",
                "precoBase": 12.67
            },
            {
                "nome": "Ácido Mefenâmico",
                "precoBase": 29.99
            },
            {
                "nome": "Ácido Mefenâmico",
                "precoBase": 30.08
            },
            {
                "nome": "Ponsdril",
                "precoBase": 32.19
            }
        ],
        "precoReferencia": 49.62,
        "sinonimias": []
    },
    {
        "id": "med-00757",
        "nome": "Transamin",
        "principioAtivo": "Ácido Tranexâmico",
        "descricao": "Antifibrinolíticos sintéticos",
        "apresentacoes": [
            "250 MG COM CT BL AL PLAS TRANS X 12",
            "250 MG COM CT BL AL PLAS TRANS X 24",
            "50 MG/ML SOL INJ CT 5 AMP VD TRANS X 5 ML",
            "500 MG COM REV CT BL AL PLAS PVC/PVDC TRANS X 12"
        ],
        "genericos": [
            {
                "nome": "Ácido Tranexâmico",
                "precoBase": 21.88
            },
            {
                "nome": "Ryvka",
                "precoBase": 34.82
            },
            {
                "nome": "Trexacont",
                "precoBase": 56.81
            },
            {
                "nome": "Traneger",
                "precoBase": 70.95
            }
        ],
        "precoReferencia": 72.26,
        "sinonimias": []
    },
    {
        "id": "med-00758",
        "nome": "Ursacol",
        "principioAtivo": "Ácido Ursodesoxicólico",
        "descricao": "Terapia dos cálculos biliares",
        "apresentacoes": [
            "150 MG COM CT BL AL PLAS PVC TRANS  X 30",
            "300 MG COM CT BL AL PLAS TRANS X 30",
            "50 MG COM CT BL AL PLAS PVC TRANS X 30"
        ],
        "genericos": [
            {
                "nome": "Ácido Ursodesoxicólico",
                "precoBase": 27.65
            },
            {
                "nome": "Duxio",
                "precoBase": 45.64
            },
            {
                "nome": "Prour",
                "precoBase": 71.65
            },
            {
                "nome": "Gulshen",
                "precoBase": 167.6
            }
        ],
        "precoReferencia": 68.52,
        "sinonimias": []
    },
    {
        "id": "med-00759",
        "nome": "Depakene",
        "principioAtivo": "Ácido Valpróico",
        "descricao": "Antiepilépticos",
        "apresentacoes": [
            "250 MG CAP MOLE CT FR VD AMB X 25  ",
            "250 MG CAP MOLE CT FR VD AMB X 50"
        ],
        "genericos": [
            {
                "nome": "Ácido Valpróico",
                "precoBase": 22.72
            },
            {
                "nome": "Epilenil",
                "precoBase": 33.52
            }
        ],
        "precoReferencia": 37.52,
        "sinonimias": []
    },
    {
        "id": "med-00760",
        "nome": "Hipoglós",
        "principioAtivo": "Óxido de Zinco;colecalciferol;palmitato de Retinol",
        "descricao": "Emolientes protetores dermatológicos",
        "apresentacoes": [
            "5000 UI/G + 900 UI/G + 150 MG/G POM DERM CT TB PLAS OPC X 135 G",
            "5000 UI/G + 900 UI/G + 150 MG/G POM DERM CT TB PLAS OPC X 45 G"
        ],
        "genericos": [
            {
                "nome": "Babymed",
                "precoBase": 18.12
            },
            {
                "nome": "Bebex Ade",
                "precoBase": 28.47
            }
        ],
        "precoReferencia": 29.42,
        "sinonimias": []
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