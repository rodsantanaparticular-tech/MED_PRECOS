/**
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
 * Gerado em: 2026-09-29
 */

const PRECOS_REDES = {
  "med-00001": {
    "paguemenos": {
      "preco": 15.49,
      "nome": "Acebrofilina Adulto 120ml Genérico Medley",
      "url": "https://www.paguemenos.com.br/acebrofilina-adulto-120ml-generico-medley/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 15.49,
      "nome": "Acebrofilina Adulto 120ml Genérico Medley",
      "url": "https://www.extrafarma.com.br/acebrofilina-adulto-120ml-generico-medley/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 24.19,
      "nome": "Acebrofilina 25mg/5ml Genérico Cimed 120ml Xarope",
      "url": "https://www.drogariasaopaulo.com.br/acebrofilina-25mg5m-generico-cimed-120ml-xarope/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 19.79,
      "nome": "Acebrofilina 25mg/5ml Genérico Cimed 120ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/acebrofilina-25mg5m-generico-cimed-120ml-xarope/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.99,
      "nome": "Acebrofilina 25mg/5ml Cimed Xarope 120ml + 1 Copo Dosador",
      "url": "https://www.drogariavenancio.com.br/acebrofilina-25mg-5ml-cimed-xarope-120ml---1-copo-dosador/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 18.99,
      "nome": "Acebrofilina 25mg/5ml Xarope 120ml Cimed Genérico",
      "url": "https://www.panvel.com/panvel/acebrofilina-25mg-5ml-xarope-120ml-cimed-generico/p-858880",
      "disponivel": true
    }
  },
  "med-00002": {
    "paguemenos": {
      "preco": 7.69,
      "nome": "Aceclofenaco 100mg Com 12 Comprimidos Genérico Vitamedic",
      "url": "https://www.paguemenos.com.br/aceclofenaco-100mg-com-12-comprimidos-generico-vitamedic/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.69,
      "nome": "Aceclofenaco 100mg Com 12 Comprimidos Genérico Vitamedic",
      "url": "https://www.extrafarma.com.br/aceclofenaco-100mg-com-12-comprimidos-generico-vitamedic/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 7.69,
      "nome": "Aceclofenaco 100mg Genérico EMS 12 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/aceclofenaco-100mg-12-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 7.69,
      "nome": "Aceclofenaco 100mg Genérico EMS 12 comprimidos",
      "url": "https://www.drogariaspacheco.com.br/aceclofenaco-100mg-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.49,
      "nome": "Aceclofenaco 100mg Vitamedic 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/aceclofenaco-100mg-vitamedic-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 23.3,
      "nome": "Aceclofenaco 100mg 12 Comprimidos Revestidos Ranbaxy Genérico C",
      "url": "https://www.panvel.com/panvel/aceclofenaco-100mg-12-comprimidos-revestidos-ranbaxy-generico-c/p-490510",
      "disponivel": true
    }
  },
  "med-00003": {
    "paguemenos": {
      "preco": 1415.99,
      "nome": "Acetato de Abiraterona 250mg 120 Comprimidos Revestidos Genérico Dr. Reddy's",
      "url": "https://www.paguemenos.com.br/acetato-de-abiraterona-250mg-com-120-comprimidos-generico-doctor-reddy-s/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1415.99,
      "nome": "Acetato de Abiraterona 250mg 120 Comprimidos Revestidos Genérico Dr. Reddy's",
      "url": "https://www.extrafarma.com.br/acetato-de-abiraterona-250mg-com-120-comprimidos-generico-doctor-reddy-s/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 1524.99,
      "nome": "Acetato de Abiraterona 250mg Genérico Teva 120 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/acetato-de-abiraterona-250mg-generico-teva-120-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1432.59,
      "nome": "Acetato de Abiraterona 250mg Genérico Teva 120 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/acetato-de-abiraterona-250mg-generico-teva-120-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10313.39,
      "nome": "Acetato de Abiraterona Sun Pharma 250mg 120 comprimidos",
      "url": "https://www.drogariavenancio.com.br/acetato-de-abiraterona-sun-pharma-250mg-120-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 1029.9,
      "nome": "Acetato De Abiraterona 250mg 120 Comprimidos Sunpharma Genérico",
      "url": "https://www.panvel.com/panvel/acetato-de-abiraterona-250mg-120-comprimidos-sunpharma-generico/p-89391",
      "disponivel": true
    }
  },
  "med-00344": {
    "paguemenos": {
      "preco": 17.59,
      "nome": "Dipropionato De Betametasona + Fosfato Dissódico De Betametasona 5mg + 2mg Com 1 Ampola",
      "url": "https://www.paguemenos.com.br/dipropionato-de-betametasona-mais-fosfato-dissodico-de-betametasona-5mg-mais-2mg-com-1-ampola/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.59,
      "nome": "Dipropionato De Betametasona + Fosfato Dissódico De Betametasona 5mg + 2mg Com 1 Ampola",
      "url": "https://www.extrafarma.com.br/dipropionato-de-betametasona-mais-fosfato-dissodico-de-betametasona-5mg-mais-2mg-com-1-ampola/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.42,
      "nome": "Permese Dipropionato de Betametasona 5mg/ml + Fosfato Dissódico de Betametasona 2mg/ml 1ml Ampola Solução Injetável + Seringa",
      "url": "https://www.drogariasaopaulo.com.br/permese-solucao-injetavel-5-mg-ml-2-mg-ml-ampola-seringa-momenta-1ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 27.82,
      "nome": "Permese Dipropionato de Betametasona 5mg/ml + Fosfato Dissódico de Betametasona 2mg/ml 1ml Ampola Solução Injetável + Seringa",
      "url": "https://www.drogariaspacheco.com.br/permese-solucao-injetavel-5-mg-ml-2-mg-ml-ampola-seringa-momenta-1ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.99,
      "nome": "Dipropionato de Betametasona + Fosfato Dissódico de Betametasona 5mg/ml + 2mg/ml Eurofarma Suspensão Injetável 1 Ampola 1ml",
      "url": "https://www.drogariavenancio.com.br/dipropionato-de-betametasona-5mg-ml---fosfato-dissodico-de-betametasona-2mg-ml-eurofarma-1-ampola/p",
      "disponivel": true
    }
  },
  "med-00342": {
    "paguemenos": {
      "preco": 18.69,
      "nome": "Dipropionato de Betametasona 5mg + Fosfato Dissódico de Betametasona 2mg Suspensão Injetável 1 Ampola 1ml Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/dipropionato-de-betammaisfosf-betam-5mais2mg-injetavel-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.69,
      "nome": "Dipropionato de Betametasona 5mg + Fosfato Dissódico de Betametasona 2mg Suspensão Injetável 1 Ampola 1ml Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/dipropionato-de-betammaisfosf-betam-5mais2mg-injetavel-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 16.59,
      "nome": "Diprosone Dipropionato De Betametasona 0,5mg/g 10g 1 Bisnaga",
      "url": "https://www.drogariasaopaulo.com.br/diprosone-0-5mg-g-cosmed-1-bisnaga-com-10g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.59,
      "nome": "Dipropionato de Betametasona 5mg/ml + Fosfato Dissódico de Betametasona 2mg/ml Genérico Neo Química 1 Ampola Suspensão Injetável",
      "url": "https://www.drogariaspacheco.com.br/dipropionato-de-betametasona-fosfato-dissodico-de-betametasona-5mg-ml-2mg-ml-neo-quimica-suspensao-injetavel/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 137.95,
      "nome": "Daivobet Gel Calcipotriol Monoidratado 50mcg/g + Betametasona 0,5mg/g Bisnaga 30g",
      "url": "https://www.panvel.com/panvel/daivobet-gel-calcipotriol-monoidratado-50mcg-g-betametasona-05mg-g-bisnaga-30g/p-639300",
      "disponivel": true
    }
  },
  "med-00004": {
    "paguemenos": {
      "preco": 32.59,
      "nome": "Celestone Soluspan 3mg/ml + 3,945mg/ml Suspensão Injetável 1 Ampola",
      "url": "https://www.paguemenos.com.br/celestone-soluspan-ampola-com-1ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 32.59,
      "nome": "Celestone Soluspan 3mg/ml + 3,945mg/ml Suspensão Injetável 1 Ampola",
      "url": "https://www.extrafarma.com.br/celestone-soluspan-ampola-com-1ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 34.74,
      "nome": "Celestone Soluspan Fosfato Dissódico de Betametasona 3mg/ml + Dipropionato de Betametasona 3mg/ml 1x1ml",
      "url": "https://www.drogariasaopaulo.com.br/celestone-soluspan-injetavel-1ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.78,
      "nome": "Celestone Soluspan Fosfato Dissódico de Betametasona 3mg/ml + Dipropionato de Betametasona 3mg/ml 1x1ml",
      "url": "https://www.drogariaspacheco.com.br/celestone-soluspan-injetavel-1ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 30.39,
      "nome": "Celestone Soluspan 3,0mg/ml + 3,945mg/ml Hypera Suspensão Injetável 1 Ampola 1ml",
      "url": "https://www.drogariavenancio.com.br/celestone-soluspan-hypera-injetavel-1ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 35.03,
      "nome": "Celestone Soluspan 1x1ml",
      "url": "https://www.panvel.com/panvel/celestone-soluspan-1x1ml/p-329",
      "disponivel": true
    }
  },
  "med-00083": {
    "paguemenos": {
      "preco": 10.39,
      "nome": "Celestone 4mg/ml Solução Injetável 1 Ampola 1ml",
      "url": "https://www.paguemenos.com.br/celestone-4mg-1ml-inj/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.39,
      "nome": "Celestone 4mg/ml Solução Injetável 1 Ampola 1ml",
      "url": "https://www.extrafarma.com.br/celestone-4mg-1ml-inj/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 23.09,
      "nome": "Celestone Betametasona 0,5mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/celestone-05mg-mantecorp-farmasa-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 20.18,
      "nome": "Celestone Betametasona 0,5mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/celestone-05mg-mantecorp-farmasa-20-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.49,
      "nome": "Betametasona 0,5mg + Sulfato Gentamicina 1mg + Tolnaftato 10mg + Clioquinol 10mg Creme 20g Ems Gen",
      "url": "https://www.panvel.com/panvel/betametasona-05mg-sulfato-gentamicina-1mg-tolnaftato-10mg-clioquinol-10mg-creme-20g-ems-gen/p-497030",
      "disponivel": true
    }
  },
  "med-00005": {
    "paguemenos": {
      "preco": 16.39,
      "nome": "Acetato de Ciproterona 2mg + Etinilestradiol 0,035mg 21 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.paguemenos.com.br/acetato-de-ciproterona-maisetinilestradiol-com-21-comprimidos-generico-melcon/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.39,
      "nome": "Acetato de Ciproterona 2mg + Etinilestradiol 0,035mg 21 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.extrafarma.com.br/acetato-de-ciproterona-maisetinilestradiol-com-21-comprimidos-generico-melcon/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.15,
      "nome": "Acetato de Ciproterona 2mg + Etinilestradiol 0,035mg Genérico Biosintética 21 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/acetato-de-ciproterona-2mg-etinilestradiol-0-035mg-21-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 15.59,
      "nome": "Acetato de Ciproterona 2mg + Etinilestradiol 0,035mg Genérico Biosintética 21 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/acetato-de-ciproterona-2mg-etinilestradiol-0-035mg-21-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 17.49,
      "nome": "Acetato de Ciproterona 2mg Etinilestradiol 0,035mg 21 Comprimidos Merck",
      "url": "https://www.drogariavenancio.com.br/acet-ciproterona-etinilestradiol-2mg-0035mg-merck-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 207.5,
      "nome": "Androcur Acetato De Ciproterona 50mg 20 Comprimidos",
      "url": "https://www.panvel.com/panvel/androcur-acetato-de-ciproterona-50mg-20-comprimidos/p-31381",
      "disponivel": true
    }
  },
  "med-00375": {
    "paguemenos": {
      "preco": 15.59,
      "nome": "Acetato de Ciproterona 2mg + Etinilestradiol 0,035mg 21 Comprimidos Revestidos Genérico Cifarma",
      "url": "https://www.paguemenos.com.br/acetato-de-ciproterona-mais-etinilestradiol-2mgmais0-035mg-com-21-comprimidos-generico-cifarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.59,
      "nome": "Acetato de Ciproterona 2mg + Etinilestradiol 0,035mg 21 Comprimidos Revestidos Genérico Cifarma",
      "url": "https://www.extrafarma.com.br/acetato-de-ciproterona-mais-etinilestradiol-2mgmais0-035mg-com-21-comprimidos-generico-cifarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 24,
      "nome": "Artemidis 35 Etinilestradiol 0,035mg + Acetato de Ciproterona 2mg 21 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/artemidis-35-ems-21-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.75,
      "nome": "Artemidis 35 Etinilestradiol 0,035mg + Acetato de Ciproterona 2mg 21 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/artemidis-35-ems-21-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.09,
      "nome": "Diclin Merck 21 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/diclin-merck-21-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 21.99,
      "nome": "Artemidis 35 Etinilestradiol 0,035mg + Acetato De Ciproterona 2mg 21 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/artemidis-35-etinilestradiol-0035mg-acetato-de-ciproterona-2mg-21-comprimidos-revestidos/p-840720",
      "disponivel": true
    }
  },
  "med-00006": {
    "paguemenos": {
      "preco": 160.99,
      "nome": "Acetato De Desmopressina 10 mcg/dose Spray Nasal 2,5ml Bergamo Genérico",
      "url": "https://www.paguemenos.com.br/acetato-de-desmopressina-10-mcg-dose-spray-nasal-2-5ml-generico-bergamo/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 160.99,
      "nome": "Acetato De Desmopressina 10 mcg/dose Spray Nasal 2,5ml Bergamo Genérico",
      "url": "https://www.extrafarma.com.br/acetato-de-desmopressina-10-mcg-dose-spray-nasal-2-5ml-generico-bergamo/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 199.99,
      "nome": "Acetato de Desmopressina 0,1mg/ml Genérico Blau 2,5ml Spray Nasal",
      "url": "https://www.drogariasaopaulo.com.br/acetato-desmopressina-0-1mg-ml-generico-blau-2-5ml-spray-nasal/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 161.48,
      "nome": "Ddavp 0,1mg/ml Ferring 2,5ml Solução Nasal + 2 Aplicadores",
      "url": "https://www.drogariaspacheco.com.br/ddavp-solucao-nasal-0-1mg-ml-ferring-2-5ml--2-aplicadores/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 169.89,
      "nome": "Acetato De Desmopressina 0,1mg/ml Bergamo Solução Spray 2,5ml",
      "url": "https://www.drogariavenancio.com.br/acetato-desmopressina-01mg-ml-spray-25ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 296.09,
      "nome": "Ddavp Acetato De Desmopressina 0,2mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/ddavp-acetato-de-desmopressina-02mg-30-capsulas/p-366153",
      "disponivel": true
    }
  },
  "med-00007": {
    "paguemenos": {
      "preco": 6.49,
      "nome": "Acetato De Dexametasona 1,0mg/G Creme 10gm Genérico Vitamedic",
      "url": "https://www.paguemenos.com.br/acetato-de-dexametasona-1-0mg-g-creme-10gm-generico-vitamedic/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.49,
      "nome": "Acetato De Dexametasona 1,0mg/G Creme 10gm Genérico Vitamedic",
      "url": "https://www.extrafarma.com.br/acetato-de-dexametasona-1-0mg-g-creme-10gm-generico-vitamedic/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 6.55,
      "nome": "Acetato de Dexametasona 1mg/g Genérico Prati-Donaduzzi 10g Creme",
      "url": "https://www.drogariasaopaulo.com.br/acetato-dexametasona-creme-1mg-g-generico-prati-10g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 5.99,
      "nome": "Acetato de Dexametasona 1mg/g Genérico Prati-Donaduzzi 10g Creme",
      "url": "https://www.drogariaspacheco.com.br/acetato-dexametasona-creme-1mg-g-generico-prati-10g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 5.99,
      "nome": "Acetato De Dexametasona 1mg/g Teuto Creme Dermatológico 10g",
      "url": "https://www.drogariavenancio.com.br/dexametasona-cr-1mg-g-10g-g-teuto/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.49,
      "nome": "Acetato De Dexametasona Creme Dermatologico 10g Uniao Quimica Generico",
      "url": "https://www.panvel.com/panvel/acetato-de-dexametasona-creme-dermatologico-10g-uniao-quimica-generico/p-102222",
      "disponivel": true
    }
  },
  "med-00008": {
    "paguemenos": {
      "preco": 35.99,
      "nome": "Florate 1mg/ml Suspensão Oftálmica 5ml",
      "url": "https://www.paguemenos.com.br/florate-solucao-oftalmica-5ml/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 35.99,
      "nome": "Florate 1mg/ml Suspensão Oftálmica 5ml",
      "url": "https://www.extrafarma.com.br/florate-solucao-oftalmica-5ml/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 38.99,
      "nome": "Florate 1mg/ml Novartis 5ml Suspensão Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/florate-suspensao-oftalmica-novartis-biociencias-5ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 40.99,
      "nome": "Florate 1mg/ml Novartis 5ml Suspensão",
      "url": "https://www.drogariaspacheco.com.br/florate-suspensao-oftalmica-novartis-biociencias-5ml/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 35.79,
      "nome": "Flutinol Latinofarma 5ml Suspensão Oftálmica Estéril",
      "url": "https://www.drogariavenancio.com.br/flutinol-latinofarma-5ml-suspensao-oftalmica-esteril/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 45.09,
      "nome": "Flutinol 0,1% Fluormetolona 1mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/flutinol-01-fluormetolona-1mg-ml-colirio-5ml/p-890820",
      "disponivel": true
    }
  },
  "med-00010": {
    "paguemenos": {
      "preco": 9.29,
      "nome": "Acetato de Hidrocortisona 10mg/g Creme Dermatológico 20g Genérico União Química",
      "url": "https://www.paguemenos.com.br/acetato-de-hidrocortisona-10mg-creme-dermatologico-com-20g-generico-uniao-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.29,
      "nome": "Acetato de Hidrocortisona 10mg/g Creme Dermatológico 20g Genérico União Química",
      "url": "https://www.extrafarma.com.br/acetato-de-hidrocortisona-10mg-creme-dermatologico-com-20g-generico-uniao-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 14.73,
      "nome": "Acetato de Hidrocortisona 10mg/g Genérico União Química 20g Creme",
      "url": "https://www.drogariasaopaulo.com.br/acetato-de-hidrocortisona-creme-generico-uniao-20g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 14.95,
      "nome": "Acetato de Hidrocortisona 10mg/g Genérico União Química 20g Creme",
      "url": "https://www.drogariaspacheco.com.br/acetato-de-hidrocortisona-creme-generico-uniao-20g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 15.49,
      "nome": "Acetato De Hidrocortisona 10mg/g Creme Dermatologico 20g Andromed Generico",
      "url": "https://www.panvel.com/panvel/acetato-de-hidrocortisona-10mg-g-creme-dermatologico-20g-andromed-generico/p-104825",
      "disponivel": true
    }
  },
  "med-00012": {
    "paguemenos": {
      "preco": 274.99,
      "nome": "Lectrum 3,75mg Injetável Com 1 Ampola",
      "url": "https://www.paguemenos.com.br/lectrum-3-75mg-injetavel-com-1-ampola/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 274.99,
      "nome": "Lectrum 3,75mg Injetável Com 1 Ampola",
      "url": "https://www.extrafarma.com.br/lectrum-3-75mg-injetavel-com-1-ampola/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 275.59,
      "nome": "Lectrum 3,75mg Sandoz Suspensão Injetável Frasco Ampola 1,5ml + Seringa + 2 Agulhas",
      "url": "https://www.drogariavenancio.com.br/lectrum-3-75-mg-inj--1-5-ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 309.9,
      "nome": "Lectrum Injetável Acetato De Leuprorrelina 3,75mg 1 Ampola",
      "url": "https://www.panvel.com/panvel/lectrum-injetavel-acetato-de-leuprorrelina-375mg-1-ampola/p-644890",
      "disponivel": true
    }
  },
  "med-00013": {
    "paguemenos": {
      "preco": 14.19,
      "nome": "Depo-provera 50mg Ampola 1ml",
      "url": "https://www.paguemenos.com.br/depo-provera-50mg-ampola-1ml/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 14.19,
      "nome": "Depo-provera 50mg Ampola 1ml",
      "url": "https://www.extrafarma.com.br/depo-provera-50mg-ampola-1ml/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 33.99,
      "nome": "Contracep Acetato De Medroxiprogesterona 150mg/ml 1ml Ampola",
      "url": "https://www.drogariasaopaulo.com.br/contracep-1ml-ampola/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 26.94,
      "nome": "Contracep Acetato De Medroxiprogesterona 150mg/ml 1ml Ampola",
      "url": "https://www.drogariaspacheco.com.br/contracep-1ml-ampola/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 27.49,
      "nome": "Contracep 150mg Ems 1 Ampola",
      "url": "https://www.drogariavenancio.com.br/contracep-150mg-ems-1-ampola/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 29.99,
      "nome": "Contracep Injetável Acetato De Medroxiprogesterona 150mg Ampola 1ml",
      "url": "https://www.panvel.com/panvel/contracep-injetavel-acetato-de-medroxiprogesterona-150mg-ampola-1ml/p-438030",
      "disponivel": true
    }
  },
  "med-00014": {
    "paguemenos": {
      "preco": 42.99,
      "nome": "Cyclofemina 25mg + 5mg Suspensão Injetável 1 Ampola 0,5ml",
      "url": "https://www.paguemenos.com.br/cyclofemina-injetavel-1-ampola-0-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 42.99,
      "nome": "Cyclofemina 25mg + 5mg Suspensão Injetável 1 Ampola 0,5ml",
      "url": "https://www.extrafarma.com.br/cyclofemina-injetavel-1-ampola-0-5ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 42.99,
      "nome": "Cyclofemina Acetato de Medroxiprogesterona 25mg + Cipionato de Estradiol 5mg 1 Ampola 0,5ml Injetável",
      "url": "https://www.drogariasaopaulo.com.br/cyclofemina-0-5mg-millet-roux-1-ampola-injetavel/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 37.89,
      "nome": "Cyclofemina Acetato de Medroxiprogesterona 25mg + Cipionato de Estradiol 5mg 1 Ampola 0,5ml Injetável",
      "url": "https://www.drogariaspacheco.com.br/cyclofemina-0-5mg-millet-roux-1-ampola-injetavel/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 37.13,
      "nome": "Lyndaveluno 25mg/0,5ml + 5mg/0,5ml Hemafarma Suspensão Injetável 1 Ampola",
      "url": "https://www.drogariavenancio.com.br/lyndaveluno-25mg-05ml-amp-05ml/p",
      "disponivel": false
    }
  },
  "med-00017": {
    "paguemenos": {
      "preco": 76.49,
      "nome": "Natifa Pro UBD 0,5mg + 0,1mg 28 Comprimidos Revestido",
      "url": "https://www.paguemenos.com.br/natifa-pro-ubd-05mg---01mg-com-28-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 76.49,
      "nome": "Natifa Pro UBD 0,5mg + 0,1mg 28 Comprimidos Revestido",
      "url": "https://www.extrafarma.com.br/natifa-pro-ubd-05mg---01mg-com-28-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 77.34,
      "nome": "Natifa Pro Estradiol 1mg + Noretisterona 0,5mg  28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/natifa-pro-10-5mg-28-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 74.99,
      "nome": "Natifa Pro Estradiol 1mg + Noretisterona 0,5mg  28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/natifa-pro-10-5mg-28-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 77.19,
      "nome": "Natifa Pro 1mg + 0,5mg Libbs 28 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/natifa-pro-libbs-28-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 86.77,
      "nome": "Natifa Pro Ubd Estradiol 0,5mg + Noretisterona 0,1mg 28 Comprimidos",
      "url": "https://www.panvel.com/panvel/natifa-pro-ubd-estradiol-05mg-noretisterona-01mg-28-comprimidos/p-110027",
      "disponivel": true
    }
  },
  "med-00376": {
    "paguemenos": {
      "preco": 30.29,
      "nome": "Acetato de Clormadinona 2mg + Etinilestradiol 0,03mg 21 Comprimidos Revestidos Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/acetato-de-clormadidona-2mg-mais-etinilestradiol-0-03mg-com-21-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 30.29,
      "nome": "Acetato de Clormadinona 2mg + Etinilestradiol 0,03mg 21 Comprimidos Revestidos Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/acetato-de-clormadidona-2mg-mais-etinilestradiol-0-03mg-com-21-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 46.12,
      "nome": "Amora 20 Acetato de Clormadinona 2mg + Etinilestradiol 0,02mg 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/amora-20-acetato-de-clormadinona-2mg-etinilestradiol-0-02mg-28-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 34.96,
      "nome": "Amora Etinilestradiol 0,030mg + Acetato de Clormadinona 2mg 21 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/amora-2mg--0-03mg-eurofarma-21-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.61,
      "nome": "Amora Acetato de Clormadinona 2mg + Etinilestradiol 0,03mg 21 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/amora-2mg-003mg-21cpr/p",
      "disponivel": true
    }
  },
  "med-00370": {
    "paguemenos": {
      "preco": 45.99,
      "nome": "Stezza 28 Cápsulas",
      "url": "https://www.paguemenos.com.br/stezza-28-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 45.99,
      "nome": "Stezza 28 Cápsulas",
      "url": "https://www.extrafarma.com.br/stezza-28-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 46.05,
      "nome": "Stezza Acetato de Nomegestrol 2,5mg + Estradiol 1,5mg 28 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/stezza-merck-sharp-28-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 48.35,
      "nome": "Stezza Acetato de Nomegestrol 2,5mg + Estradiol 1,5mg 28 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/stezza-merck-sharp-28-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 49.05,
      "nome": "Stezza Acetato De Nomegestrol 2,5mg + Estradiol 1,5mg 28 Comprimidos",
      "url": "https://www.panvel.com/panvel/stezza-acetato-de-nomegestrol-25mg-estradiol-15mg-28-comprimidos/p-695770",
      "disponivel": true
    }
  },
  "med-00015": {
    "paguemenos": {
      "preco": 28.59,
      "nome": "Depo-Medrol 40mg/ml Suspensão Injetável 1 Frasco-Ampola 2ml",
      "url": "https://www.paguemenos.com.br/depo-medrol-40mg-ampola-2ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 28.59,
      "nome": "Depo-Medrol 40mg/ml Suspensão Injetável 1 Frasco-Ampola 2ml",
      "url": "https://www.extrafarma.com.br/depo-medrol-40mg-ampola-2ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 30.01,
      "nome": "Depo Medrol Injetável Acetato De Metilprednisolona 40mg/ml 1 Frasco 2ml",
      "url": "https://www.panvel.com/panvel/depo-medrol-injetavel-acetato-de-metilprednisolona-40mg-ml-1-frasco-2ml/p-507",
      "disponivel": true
    }
  },
  "med-00016": {
    "paguemenos": {
      "preco": 44.79,
      "nome": "Suprema 2mg + 1mg 28 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/suprema-2mg-com-28-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 44.79,
      "nome": "Suprema 2mg + 1mg 28 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/suprema-2mg-com-28-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 50.34,
      "nome": "Suprema Valerato de Estradiol 2mg + Acetato de Noretisterona 1mg 28 Comprimidos revestidos",
      "url": "https://www.drogariasaopaulo.com.br/suprema-2mg-1mg-biolab-revestidos-38-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.78,
      "nome": "Suprema Valerato de Estradiol 2mg + Acetato de Noretisterona 1mg 28 Comprimidos revestidos",
      "url": "https://www.drogariaspacheco.com.br/suprema-2mg-1mg-biolab-revestidos-38-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 40.59,
      "nome": "Suprema Biolab 28 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/suprema-biolab-28-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 45.99,
      "nome": "Suprema Estradiol 2mg + Acetato De Noretisterona 1mg 28 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/suprema-estradiol-2mg-acetato-de-noretisterona-1mg-28-comprimidos-revestidos/p-449360",
      "disponivel": true
    }
  },
  "med-00018": {
    "paguemenos": {
      "preco": 23.79,
      "nome": "Acetato De Prednisolona 10mg Solução Oftalmica 5ml Genérico Geolab",
      "url": "https://www.paguemenos.com.br/acetato-de-prednisolona-10mg-solucao-oftalmica-5ml-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.79,
      "nome": "Acetato De Prednisolona 10mg Solução Oftalmica 5ml Genérico Geolab",
      "url": "https://www.extrafarma.com.br/acetato-de-prednisolona-10mg-solucao-oftalmica-5ml-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 19.48,
      "nome": "Acetato de Prednisolona 20mg Genérico Legrand 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/prednisolona-20mg-10-comprimidos-revestidos-g-legrand-pharma/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 18.9,
      "nome": "Acetato de Prednisolona 20mg Genérico Legrand 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/prednisolona-20mg-10-comprimidos-revestidos-g-legrand-pharma/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 18.99,
      "nome": "Acetato De Prednisolona 20mg Genérico 10 Comprimidos Germed Pharma",
      "url": "https://www.drogariavenancio.com.br/acetato-de-prednisolona-20mg-generico-germed-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.35,
      "nome": "Visiopred 10mg/ml Suspensão Oftalmológica 5ml",
      "url": "https://www.panvel.com/panvel/visiopred-10mg-ml-suspensao-oftalmologica-5ml/p-91520",
      "disponivel": true
    }
  },
  "med-00019": {
    "paguemenos": {
      "preco": 29.99,
      "nome": "Vitamina E 400mg 30 Cápsulas Gelatinosas",
      "url": "https://www.paguemenos.com.br/vitamina-e-400mg-com-30-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 29.99,
      "nome": "Vitamina E 400mg 30 Cápsulas Gelatinosas",
      "url": "https://www.extrafarma.com.br/vitamina-e-400mg-com-30-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 64.32,
      "nome": "Emama 400mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/emama-400mg-30-capsulas/p-894110",
      "disponivel": true
    }
  },
  "med-00020": {
    "paguemenos": {
      "preco": 21.29,
      "nome": "Ad-Til 50000UI/ml + 10000UI/ml Solução Oral Gotas 20ml",
      "url": "https://www.paguemenos.com.br/ad-til-gotas-20ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 21.29,
      "nome": "Ad-Til 50000UI/ml + 10000UI/ml Solução Oral Gotas 20ml",
      "url": "https://www.extrafarma.com.br/ad-til-gotas-20ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 21.99,
      "nome": "Ad-til Acetato de Retinol 50.000UI/ml + Colecalciferol 10.000UI/ml 20ml Solução",
      "url": "https://www.drogariasaopaulo.com.br/ad-til-20ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 19.88,
      "nome": "Ad-til Acetato de Retinol 50.000UI/ml + Colecalciferol 10.000UI/ml 20ml Solução",
      "url": "https://www.drogariaspacheco.com.br/ad-til-20ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.29,
      "nome": "Ad-Til 5 (50000 + 10000)UI/Ml Hypera Solução Oral 20ml",
      "url": "https://www.drogariavenancio.com.br/ad-til-50-000-u-i-10-000-u-i-sol-or-20ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 21.74,
      "nome": "Ad-til Gotas Vitamina A 5.000ui/ml + Vitamina D 1000ui/ml Solução 20ml",
      "url": "https://www.panvel.com/panvel/ad-til-gotas-vitamina-a-5000ui-ml-vitamina-d-1000ui-ml-solucao-20ml/p-623530",
      "disponivel": true
    }
  },
  "med-00021": {
    "paguemenos": {
      "preco": 16.69,
      "nome": "Acetilcisteína 40mg/ml Xarope Adulto 120ml Genérico Legrand",
      "url": "https://www.paguemenos.com.br/acetilcisteina-xarope-adulto-40mg-com-120ml-generico-legrand/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.69,
      "nome": "Acetilcisteína 40mg/ml Xarope Adulto 120ml Genérico Legrand",
      "url": "https://www.extrafarma.com.br/acetilcisteina-xarope-adulto-40mg-com-120ml-generico-legrand/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 23.25,
      "nome": "Acetilcisteína 100mg/ml Genérico União Química 3ml Com 5 Ampolas Intramuscular",
      "url": "https://www.drogariasaopaulo.com.br/acetilcisteina-intramuscular-100mg-generico-uniao-quimica-5x3ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.99,
      "nome": "Acetilcisteína 600mg Genérico Geolab 16 Envelopes com 5g Cada",
      "url": "https://www.drogariaspacheco.com.br/acetilcisteina-600mg-generico-geolab-16-envelopes-com-5g-cada/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 17.59,
      "nome": "Acetilcisteína 40mg/ml Xarope Adulto 120ml Ems Genérico",
      "url": "https://www.drogariavenancio.com.br/acetilcisteina-40mg-ml-xarope-adulto-120ml-ems-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 14.99,
      "nome": "Acetilcisteina Xarope Adulto 40mg/ml120ml Germed Genérico",
      "url": "https://www.panvel.com/panvel/acetilcisteina-xarope-adulto-40mg-ml120ml-germed-generico/p-107216",
      "disponivel": true
    }
  },
  "med-00721": {
    "paguemenos": {
      "preco": 10.99,
      "nome": "Triancinolona Acetonida 1mg/g Pasta 10g Genérico EMS",
      "url": "https://www.paguemenos.com.br/triancinolona-acetonido-pomada-10g-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.99,
      "nome": "Triancinolona Acetonida 1mg/g Pasta 10g Genérico EMS",
      "url": "https://www.extrafarma.com.br/triancinolona-acetonido-pomada-10g-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 10.67,
      "nome": "Triancinolona Acetonida 1mg/g Genérico Geolab 10g Pomada Orabase",
      "url": "https://www.drogariasaopaulo.com.br/triancinolona-acetonida-1mg-g-generico-geolab-10g-pomada-orabase/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 7.25,
      "nome": "Triancinolona Acetonida 1mg/g Genérico EMS 10g Pomada",
      "url": "https://www.drogariaspacheco.com.br/triancinolona-pomada-1mg-g-generico-ems-10g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.49,
      "nome": "Triancinolona Acetonida Pomada Bucal 1mg/g 10g Prati Donaduzzi",
      "url": "https://www.drogariavenancio.com.br/triancinolona-acetonida-pomada-bucal-1mg-g-10g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 15.49,
      "nome": "Triancinolona Acetonida 1mg/g Pomada 10g Germed Generico",
      "url": "https://www.panvel.com/panvel/triancinolona-acetonida-1mg-g-pomada-10g-germed-generico/p-107504",
      "disponivel": true
    }
  },
  "med-00687": {
    "paguemenos": {
      "preco": 16.89,
      "nome": "Triancinolona Acetonida 1mg + Sulfato de Neomicina 2,5mg + Gramicidina 0,25mg + Nistatina 100000UI Creme Dermatológico 30g Genérico EMS",
      "url": "https://www.paguemenos.com.br/acetonido-de-triancinolona-mais-sulfato-de-neomicina-mais-gramicidina-mais-nistatina-creme-30g-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.89,
      "nome": "Triancinolona Acetonida 1mg + Sulfato de Neomicina 2,5mg + Gramicidina 0,25mg + Nistatina 100000UI Creme Dermatológico 30g Genérico EMS",
      "url": "https://www.extrafarma.com.br/acetonido-de-triancinolona-mais-sulfato-de-neomicina-mais-gramicidina-mais-nistatina-creme-30g-generico-ems/p",
      "disponivel": true
    }
  },
  "med-00022": {
    "paguemenos": {
      "preco": 76.99,
      "nome": "Allenasal 55mcg Suspensão Nasal Spray 120 Doses",
      "url": "https://www.paguemenos.com.br/allenasal-550mcg-com-120-doses/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 76.99,
      "nome": "Allenasal 55mcg Suspensão Nasal Spray 120 Doses",
      "url": "https://www.extrafarma.com.br/allenasal-550mcg-com-120-doses/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 68.89,
      "nome": "Allenasal 55mcg 120 doses 16,5ml",
      "url": "https://www.drogariavenancio.com.br/allenasal-55mcg/p",
      "disponivel": false
    }
  },
  "med-00023": {
    "paguemenos": {
      "preco": 8.49,
      "nome": "Aciclovir 50mg/g Creme 10g Genérico Medley",
      "url": "https://www.paguemenos.com.br/aciclovir-creme-10g-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.49,
      "nome": "Aciclovir 50mg/g Creme 10g Genérico Medley",
      "url": "https://www.extrafarma.com.br/aciclovir-creme-10g-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.59,
      "nome": "Aciclovir 50mg/g Genérico Cimed 10g Creme",
      "url": "https://www.drogariasaopaulo.com.br/aciclovir-creme-50mg-g-generico-cimed-10g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.99,
      "nome": "Aciclovir 50mg/g Genérico Medley 10g Creme",
      "url": "https://www.drogariaspacheco.com.br/aciclovir-creme-50mg-generico-medley-10g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.99,
      "nome": "Aciclovir 50mg 10g Teuto",
      "url": "https://www.drogariavenancio.com.br/aciclovir-50mg-10g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 18.49,
      "nome": "Aciclovir 50mg/g Creme 10g Neoquímica Genérico",
      "url": "https://www.panvel.com/panvel/aciclovir-50mg-g-creme-10g-neoquimica-generico/p-993230",
      "disponivel": true
    }
  },
  "med-00750": {
    "paguemenos": {
      "preco": 2.49,
      "nome": "Acido Acetilsalicilico 100mg pediatrico Com 10 comprimidos generico Cimed",
      "url": "https://www.paguemenos.com.br/acido-acetilsalicilico-100mg-pediatrico-com-10-comprimidos-generico-cimed/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 2.49,
      "nome": "Acido Acetilsalicilico 100mg pediatrico Com 10 comprimidos generico Cimed",
      "url": "https://www.extrafarma.com.br/acido-acetilsalicilico-100mg-pediatrico-com-10-comprimidos-generico-cimed/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 12.99,
      "nome": "Ácido Acetilsalicílico 100mg Genérico Eurofarma 30 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/acido-acetilsalicilico-100mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 12.99,
      "nome": "Ácido Acetilsalicílico 100mg Genérico Eurofarma 30 comprimidos",
      "url": "https://www.drogariaspacheco.com.br/acido-acetilsalicilico-100mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 2.95,
      "nome": "Ácido Acetilsalicílico 100mg Ems Genérico 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/acido-acetilsalicilico-100mg-10-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 2.97,
      "nome": "Ácido Acetilsalicilico 100mg 10 Comprimidos Ems Genérico",
      "url": "https://www.panvel.com/panvel/acido-acetilsalicilico-100mg-10-comprimidos-ems-generico/p-875820",
      "disponivel": true
    }
  },
  "med-00025": {
    "paguemenos": {
      "preco": 236.99,
      "nome": "Neotigason 10mg 30 Cápsulas Duras",
      "url": "https://www.paguemenos.com.br/neotigason-10mg-capsulas30-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 236.99,
      "nome": "Neotigason 10mg 30 Cápsulas Duras",
      "url": "https://www.extrafarma.com.br/neotigason-10mg-capsulas30-p/p",
      "disponivel": true
    }
  },
  "med-00027": {
    "paguemenos": {
      "preco": 4498.69,
      "nome": "Amgevita Solução Injetavél 50mg 2 Seringas 0,8 Ml",
      "url": "https://www.paguemenos.com.br/amgevita-solucao-injetavel-50mg-2-seringas-0-8-ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 4498.69,
      "nome": "Amgevita Solução Injetavél 50mg 2 Seringas 0,8 Ml",
      "url": "https://www.extrafarma.com.br/amgevita-solucao-injetavel-50mg-2-seringas-0-8-ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 1282.85,
      "nome": "Amgevita Adalimumabe 100mg/ml Solução Injetável 1 Seringa Preenchida De 0,2ml",
      "url": "https://www.drogariavenancio.com.br/amgevita-adalimumabe-100mg-ml-solucao-injetavel-1-seringa-preenchida-de-0-2ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 4720.04,
      "nome": "Amgevita Adalimumabe 50mg/ml 2 Seringas Preenchidas - Geladeira",
      "url": "https://www.panvel.com/panvel/amgevita-adalimumabe-50mg-ml-2-seringas-preenchidas-geladeira/p-105883",
      "disponivel": true
    }
  },
  "med-00028": {
    "paguemenos": {
      "preco": 45.29,
      "nome": "Adapaleno Gel 1mg/g Com 30g Medley Genérico",
      "url": "https://www.paguemenos.com.br/adapaleno-gel-30g-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 45.29,
      "nome": "Adapaleno Gel 1mg/g Com 30g Medley Genérico",
      "url": "https://www.extrafarma.com.br/adapaleno-gel-30g-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 41.32,
      "nome": "Belpele Adapaleno 1mg/g 30g Gel Dermatológico",
      "url": "https://www.drogariasaopaulo.com.br/belpele-1mg-g-melora-50g-gel-dermatologico/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 38.5,
      "nome": "Belpele Adapaleno 1mg/g 30g Gel Dermatológico",
      "url": "https://www.drogariaspacheco.com.br/belpele-1mg-g-melora-50g-gel-dermatologico/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 37.09,
      "nome": "Adapaleno 1mg/g Medley Gel Dermatológico 30g",
      "url": "https://www.drogariavenancio.com.br/adapaleno-1mg-g-medley-30g-gel-dermatologico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 42.77,
      "nome": "Belpele 0,1% Adapaleno 1mg/g Gel 30g",
      "url": "https://www.panvel.com/panvel/belpele-01-adapaleno-1mg-g-gel-30g/p-96425",
      "disponivel": true
    }
  },
  "med-00029": {
    "paguemenos": {
      "preco": 46.79,
      "nome": "Deriva C Micro 1mg/g + 10mg/g Gel Dermatológico de Liberação Prolongada 30g",
      "url": "https://www.paguemenos.com.br/deriva-c-micro-gel-30g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 46.79,
      "nome": "Deriva C Micro 1mg/g + 10mg/g Gel Dermatológico de Liberação Prolongada 30g",
      "url": "https://www.extrafarma.com.br/deriva-c-micro-gel-30g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 43.48,
      "nome": "Adacne Clin 1mg/g + 10mg/g Glenmark 30g Gel",
      "url": "https://www.drogariasaopaulo.com.br/adacne-clin-gel-glenmark-30g/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 42.13,
      "nome": "Deriva C Micro Adapaleno 1mg/g + Fosfato de Clindamicina 10mg/g 30g Gel",
      "url": "https://www.drogariaspacheco.com.br/deriva-micro-glenmark-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 42.99,
      "nome": "Deriva C Micro 1mg/g + 10mg/g Glenmark Gel Dermatológico 30g",
      "url": "https://www.drogariavenancio.com.br/deriva-c-micro-30g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 45.99,
      "nome": "Deriva C Micro Adapaleno 1mg/g + Fosfato De Clindamicina 10mg/g Gel 30g",
      "url": "https://www.panvel.com/panvel/deriva-c-micro-adapaleno-1mg-g-fosfato-de-clindamicina-10mg-g-gel-30g/p-669330",
      "disponivel": true
    }
  },
  "med-00720": {
    "paguemenos": {
      "preco": 32.59,
      "nome": "Vitacid 0,25mg/g Gel 25g",
      "url": "https://www.paguemenos.com.br/vitacid-gel-0-025porcento-25g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 32.59,
      "nome": "Vitacid 0,25mg/g Gel 25g",
      "url": "https://www.extrafarma.com.br/vitacid-gel-0-025porcento-25g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.72,
      "nome": "Vitacid Tretinoína 0,25mg/g 25g Gel",
      "url": "https://www.drogariasaopaulo.com.br/vitacid-gel-theraskin-25g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.72,
      "nome": "Vitacid Tretinoína 0,25mg/g 25g Gel",
      "url": "https://www.drogariaspacheco.com.br/vitacid-gel-theraskin-25g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 36.19,
      "nome": "Vitacid 0,25mg/g Theraskin Gel 25g",
      "url": "https://www.drogariavenancio.com.br/vitacid-025mg-g-theraskin-25g-gel/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 39.65,
      "nome": "Vitacid 0,025% Tretinoina 0,25mg/g Gel 25g",
      "url": "https://www.panvel.com/panvel/vitacid-0025-tretinoina-025mg-g-gel-25g/p-892670",
      "disponivel": true
    }
  },
  "med-00031": {
    "paguemenos": {
      "preco": 106.99,
      "nome": "Adazo 1mg/G + 25mg/G Em Gel 30g",
      "url": "https://www.paguemenos.com.br/adazo-1mg-g-mais-25mg-g-em-gel-30g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 106.99,
      "nome": "Adazo 1mg/G + 25mg/G Em Gel 30g",
      "url": "https://www.extrafarma.com.br/adazo-1mg-g-mais-25mg-g-em-gel-30g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 107.99,
      "nome": "Adazo Adapaleno 1mg/g + Peróxido de Benzoíla 25mg/g 30g",
      "url": "https://www.drogariasaopaulo.com.br/adazo-adapaleno-1mg-g-peroxido-de-benzoila-25mg-g-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 108.77,
      "nome": "Epiduo Adapaleno 1mg/g + Peróxido de Benzoíla 25mg/g 30g Gel",
      "url": "https://www.drogariaspacheco.com.br/epiduo-gel-26mg-galderma-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 116.59,
      "nome": "Epiduo Adapaleno 1mg/g + Peroxido de Benzoila 25mg/g Galderma Gel Dermatológico 30g",
      "url": "https://www.drogariavenancio.com.br/epiduo-gel-galderma-30g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 121.15,
      "nome": "Epiduo Adapaleno 1mg/g + Peróxido Benzoila 25mg/g Gel 30g",
      "url": "https://www.panvel.com/panvel/epiduo-adapaleno-1mg-g-peroxido-benzoila-25mg-g-gel-30g/p-533150",
      "disponivel": true
    }
  },
  "med-00033": {
    "paguemenos": {
      "preco": 6337.99,
      "nome": "Eylia 40mg/ml Com 1 Seringa Preenchida Com 0,278ml De Solução + 1 Agulha",
      "url": "https://www.paguemenos.com.br/eylia-40mg-ml-com-1-seringa-preenchida-com-0-278ml-de-solucao-de-uso-intravitreo-mais-1-agulha/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6337.99,
      "nome": "Eylia 40mg/ml Com 1 Seringa Preenchida Com 0,278ml De Solução + 1 Agulha",
      "url": "https://www.extrafarma.com.br/eylia-40mg-ml-com-1-seringa-preenchida-com-0-278ml-de-solucao-de-uso-intravitreo-mais-1-agulha/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 6209.89,
      "nome": "Eylia 40mg/ml C/ 1 Ser C/ 0,278 Ml + 1 Agu",
      "url": "https://www.drogariavenancio.com.br/eylia-40mg-ml-c--1-ser-c--0278-ml---1-agu/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 7551,
      "nome": "Eylia Injetável Aflibercepte 100mg 1 Ampola",
      "url": "https://www.panvel.com/panvel/eylia-injetavel-aflibercepte-100mg-1-ampola/p-378170",
      "disponivel": true
    }
  },
  "med-00034": {
    "paguemenos": {
      "preco": 120.99,
      "nome": "Agomelatina 25mg 28 Comprimidos Revestidos Genérico Teva",
      "url": "https://www.paguemenos.com.br/agomelatina-25mg-com-28-comprimidos-generico-teva-psicotropico-p-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 120.99,
      "nome": "Agomelatina 25mg 28 Comprimidos Revestidos Genérico Teva",
      "url": "https://www.extrafarma.com.br/agomelatina-25mg-com-28-comprimidos-generico-teva-psicotropico-p-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 97.26,
      "nome": "Elencos Agomelatina 25mg 14 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/elencos-25mg-teva-14-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 90.62,
      "nome": "Valdoxan 25mg Servier 14 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/valdoxan-25mg-servier-14-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 136.33,
      "nome": "Elencos 25mg Teva 14 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/elencos-25mg-14com--c1-/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 181.99,
      "nome": "Agoxom Agomelatina 25mg 28 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/agoxom-agomelatina-25mg-28-comprimidos-revestidos/p-94354",
      "disponivel": true
    }
  },
  "med-00035": {
    "paguemenos": {
      "preco": 2.19,
      "nome": "Albendazol 400mg 1 Comprimido Mastigável Genérico Cimed",
      "url": "https://www.paguemenos.com.br/albendazol-400mg-com-1-comprimido-generico-cimed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 2.19,
      "nome": "Albendazol 400mg 1 Comprimido Mastigável Genérico Cimed",
      "url": "https://www.extrafarma.com.br/albendazol-400mg-com-1-comprimido-generico-cimed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 3.29,
      "nome": "Albendazol 400mg Genérico Cimed 1 Comprimido Mastigável",
      "url": "https://www.drogariasaopaulo.com.br/albendazol-400mg-generico-cimed-1-comprimido-mastigavel/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 3.95,
      "nome": "Albendazol 400mg Genérico Cimed 1 Comprimido Mastigável",
      "url": "https://www.drogariaspacheco.com.br/albendazol-400mg-generico-cimed-1-comprimido-mastigavel/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 2.99,
      "nome": "Albendazol 400mg Prati Donaduzzi 1 Comprimido Mastigável",
      "url": "https://www.drogariavenancio.com.br/albendazol-400mg-prati-donaduzzi-1-comprimido-mastigavel/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 4.99,
      "nome": "Albendazol 400mg 1 Comprimido Prati Donaduzzi Genérico",
      "url": "https://www.panvel.com/panvel/albendazol-400mg-1-comprimido-prati-donaduzzi-generico/p-518300",
      "disponivel": true
    }
  },
  "med-00037": {
    "paguemenos": {
      "preco": 8.79,
      "nome": "Alendronato de Sódio 70mg 4 Comprimidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/alendronato-sodio-70mg-com-4-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.79,
      "nome": "Alendronato de Sódio 70mg 4 Comprimidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/alendronato-sodio-70mg-com-4-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 81.4,
      "nome": "Osteoform Alendronato De Sódio Tri-hidratado 70mg 4 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/osteoform-70mg-4-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 64.18,
      "nome": "Osteoform Alendronato De Sódio Tri-hidratado 70mg 4 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/osteoform-70mg-4-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 138.69,
      "nome": "Osteoform 70mg Ems 8 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/osteoform-70mg-ems-8-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 144.99,
      "nome": "Osteoform Alendronato Sódico 70mg 8 Comprimidos",
      "url": "https://www.panvel.com/panvel/osteoform-alendronato-sodico-70mg-8-comprimidos/p-913880",
      "disponivel": true
    }
  },
  "med-00036": {
    "paguemenos": {
      "preco": 14.69,
      "nome": "Alendronato De Sódio 70mg Com 4 Comprimidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/alendronato-de-sodio-70mg-com-4-comprimidos-generico-sandoz/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 14.69,
      "nome": "Alendronato De Sódio 70mg Com 4 Comprimidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/alendronato-de-sodio-70mg-com-4-comprimidos-generico-sandoz/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 9.45,
      "nome": "Alendronato De Sódio 70mg Genérico Eurofarma 4 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/alendronato-de-sodio-70mg-generico-eurofarma-4-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 9.45,
      "nome": "Alendronato De Sódio 70mg Genérico Eurofarma 4 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/alendronato-de-sodio-70mg-generico-eurofarma-4-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 5.89,
      "nome": "Alendronato De Sódio 70mg 4 Comprimidos Cellera Farma",
      "url": "https://www.drogariavenancio.com.br/alendronato-de-sodio-70mg-cellera-4-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 4.99,
      "nome": "Alendronato De Sodio 70mg 4 Comprimidos Nova Quimica Genericos",
      "url": "https://www.panvel.com/panvel/alendronato-de-sodio-70mg-4-comprimidos-nova-quimica-genericos/p-107268",
      "disponivel": true
    }
  },
  "med-00038": {
    "paguemenos": {
      "preco": 62.99,
      "nome": "Hemax Eritron 4000UI Injetável 1 Frasco-Ampola + Diluente",
      "url": "https://www.paguemenos.com.br/hemax-eritron-4000ui-com-1-frasco-ampola-com-po-para-solucao-de-uso-intravenoso-ou-subcultaneo-mais-1-ampola-com-2ml-de-diluente/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 62.99,
      "nome": "Hemax Eritron 4000UI Injetável 1 Frasco-Ampola + Diluente",
      "url": "https://www.extrafarma.com.br/hemax-eritron-4000ui-com-1-frasco-ampola-com-po-para-solucao-de-uso-intravenoso-ou-subcultaneo-mais-1-ampola-com-2ml-de-diluente/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 42.99,
      "nome": "Eritromax 4.000UI/ml Blau 1ml Solução Injetável",
      "url": "https://www.drogariasaopaulo.com.br/eritromax-solucao-injetavel-4000ui-1ml-s3-med/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 35.99,
      "nome": "Eritromax 4.000UI/ml Blau 1ml Solução Injetável",
      "url": "https://www.drogariaspacheco.com.br/eritromax-solucao-injetavel-4000ui-1ml-s3-med/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 35.99,
      "nome": "Eritromax 4000Ui Blau Pó Liofilo Injetável 1 Frasco de Ampola 1ml",
      "url": "https://www.drogariavenancio.com.br/eritromax-4000ui-po-liof-inj-f-a-dil-1ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 276.64,
      "nome": "Alfaepoetina 4.000 Ui/ml Solução Injetável 1ml",
      "url": "https://www.panvel.com/panvel/alfaepoetina-4000-ui-ml-solucao-injetavel-1ml/p-853960",
      "disponivel": true
    }
  },
  "med-00039": {
    "paguemenos": {
      "preco": 122.99,
      "nome": "Alfaestradiol 0,25mg/ml Solução Capilar 100ml + Aplicador Genérico Biolab",
      "url": "https://www.paguemenos.com.br/alfaestradiol-0-25mg-solucao-capilar-100ml-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 122.99,
      "nome": "Alfaestradiol 0,25mg/ml Solução Capilar 100ml + Aplicador Genérico Biolab",
      "url": "https://www.extrafarma.com.br/alfaestradiol-0-25mg-solucao-capilar-100ml-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 135.84,
      "nome": "Alfaestradiol 25mg Genérico Biolab 1 Frasco com 100mL de Solução + Aplicador",
      "url": "https://www.drogariasaopaulo.com.br/alfaestradiol-25mg-generico-biolab-1-frasco-com-100ml-de-solucao---aplicador/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 134.85,
      "nome": "Alfaestradiol 25mg Genérico Biolab 1 Frasco com 100mL de Solução + Aplicador",
      "url": "https://www.drogariaspacheco.com.br/alfaestradiol-25mg-generico-biolab-1-frasco-com-100ml-de-solucao---aplicador/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 215.99,
      "nome": "Avicis Galderma Solução Capilar 100ml  + Aplicador",
      "url": "https://www.drogariavenancio.com.br/avicis-galderma-100ml-solucao-capilar/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 142.99,
      "nome": "Alfaestradiol 0,25mg/ml X 100ml Genérico Biolab",
      "url": "https://www.panvel.com/panvel/alfaestradiol-025mg-ml-x-100ml-generico-biolab/p-103475",
      "disponivel": true
    }
  },
  "med-00040": {
    "paguemenos": {
      "preco": 6.29,
      "nome": "Alopurinol 100mg 30 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/alopurinol-100mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.29,
      "nome": "Alopurinol 100mg 30 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/alopurinol-100mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 9.45,
      "nome": "Alopurinol 100mg Genérico Medley 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/alopurinol-100mg-generico-medley-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 9.45,
      "nome": "Alopurinol 100mg Genérico Medley 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/alopurinol-100mg-generico-medley-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.99,
      "nome": "Alopurinol 100mg 30 Comprimidos Prati Donaduzzi",
      "url": "https://www.drogariavenancio.com.br/alopurinol-100mg-farmaco-prati-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 10.99,
      "nome": "Alopurinol 100mg 30 Comprimidos Medley Genérico",
      "url": "https://www.panvel.com/panvel/alopurinol-100mg-30-comprimidos-medley-generico/p-540120",
      "disponivel": true
    }
  },
  "med-00041": {
    "paguemenos": {
      "preco": 2.99,
      "nome": "Alprazolam 0,5mg 30 Comprimidos Genérico Aché",
      "url": "https://www.paguemenos.com.br/alprazolam-0-5mg-com-30-comprimidos-generico-biosintetica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 2.99,
      "nome": "Alprazolam 0,5mg 30 Comprimidos Genérico Aché",
      "url": "https://www.extrafarma.com.br/alprazolam-0-5mg-com-30-comprimidos-generico-biosintetica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 3.79,
      "nome": "Alprazolam 0,5mg Genérico Legrand 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/alprazolam-05mg-generico-legrand-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 8.99,
      "nome": "Alprazolam 1mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/alprazolam-100mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.09,
      "nome": "Alprazolam 0,5mg Ems 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/alprazolam-05mg-com-30-comprimidos-ems/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 8.49,
      "nome": "Alprazolam 0,5mg 30 Comprimidos Nova Quimica Generico B1",
      "url": "https://www.panvel.com/panvel/alprazolam-05mg-30-comprimidos-nova-quimica-generico-b1/p-107222",
      "disponivel": true
    }
  },
  "med-00044": {
    "paguemenos": {
      "preco": 11.69,
      "nome": "Amoxicilina 500mg 15 Cápsulas Duras Genérico EMS",
      "url": "https://www.paguemenos.com.br/amoxicilina-500mg-com-15-capsulas-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.69,
      "nome": "Amoxicilina 500mg 15 Cápsulas Duras Genérico EMS",
      "url": "https://www.extrafarma.com.br/amoxicilina-500mg-com-15-capsulas-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 19.52,
      "nome": "Amoxicilina Tri Hidratada 500mg Genérico Multilab 21 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/amoxicilina-tri-hidratada-500mg-generico-multilab-21-capsulas/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 19.94,
      "nome": "Amoxicilina Tri Hidratada 500mg Genérico Multilab 21 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/amoxicilina-tri-hidratada-500mg-generico-multilab-21-capsulas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 55.53,
      "nome": "Amoxicilina Tri-hidratada 875mg Eurofarma Genérico 14 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/amoxicilina-tri-hidratada-875mg-14-comprimidos-revestidos-eurofarma-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 62.19,
      "nome": "Amoxil Amoxicilina 250mg/5ml Pó Para Suspensão Oral 150ml",
      "url": "https://www.panvel.com/panvel/amoxil-amoxicilina-250mg-5ml-po-para-suspensao-oral-150ml/p-161284",
      "disponivel": true
    }
  },
  "med-00042": {
    "paguemenos": {
      "preco": 23.29,
      "nome": "Amoxicilina 400mg/5ml + Clavulanato de Potássio 57mg/5ml Pó para Suspensão 70ml Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/amoxicilinamaisclavulanato-de-potassio-400mais57mg-suspensao-70ml-generico-pratimais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.29,
      "nome": "Amoxicilina 400mg/5ml + Clavulanato de Potássio 57mg/5ml Pó para Suspensão 70ml Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/amoxicilinamaisclavulanato-de-potassio-400mais57mg-suspensao-70ml-generico-pratimais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 1.87,
      "nome": "Amoxicilina 250mg Genérico Eurofarma 150ml",
      "url": "https://www.drogariasaopaulo.com.br/amoxicilina-250mg-generico-eurofarma-150ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1.87,
      "nome": "Amoxicilina 250mg Genérico Eurofarma 150ml",
      "url": "https://www.drogariaspacheco.com.br/amoxicilina-250mg-generico-eurofarma-150ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 14.99,
      "nome": "Amoxicilina 500mg Teuto 21 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/amoxicilina-500mg-teuto-21-capsulas-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 15.99,
      "nome": "Amoxicilina 500mg 21 Cápsulas Prati Donaduzzi Genérico",
      "url": "https://www.panvel.com/panvel/amoxicilina-500mg-21-capsulas-prati-donaduzzi-generico/p-518340",
      "disponivel": true
    }
  },
  "med-00043": {
    "paguemenos": {
      "preco": 14.49,
      "nome": "Amoxicilina 500mg Com 15 Cápsulas Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/amoxicilina-500mg-com-15-capsulas-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.49,
      "nome": "Amoxicilina 500mg Com 15 Cápsulas Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/amoxicilina-500mg-com-15-capsulas-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 34.24,
      "nome": "Ocylin Amoxicilina 500mg 21 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/ocylin-500mg-multilab-21-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 36,
      "nome": "Ocylin Amoxicilina 500mg 21 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/ocylin-500mg-multilab-21-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 44.89,
      "nome": "Sinot Amoxicilina 400mg/5ml Suspensão Oral 100ml",
      "url": "https://www.panvel.com/panvel/sinot-amoxicilina-400mg-5ml-suspensao-oral-100ml/p-537480",
      "disponivel": true
    }
  },
  "med-00045": {
    "paguemenos": {
      "preco": 26.29,
      "nome": "Amoxicilina + Clavulanato De Potássio 400+57mg Suspensão 70ml Genérico Biosintética",
      "url": "https://www.paguemenos.com.br/amoxicilina-mais-clavulanato-de-potassio-400mais57mg-suspensao-70ml-generico-biosintetica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.29,
      "nome": "Amoxicilina + Clavulanato De Potássio 400+57mg Suspensão 70ml Genérico Biosintética",
      "url": "https://www.extrafarma.com.br/amoxicilina-mais-clavulanato-de-potassio-400mais57mg-suspensao-70ml-generico-biosintetica/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 39.99,
      "nome": "Amoxicilina Clavulanato De Potassio 250/62,5mg Susp Oral Com 75ml Sandoz",
      "url": "https://www.drogariavenancio.com.br/amoxicilina-clavulanato-de-potassio-250-625mg-susp-oral-com-75ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 86.34,
      "nome": "Amoxicilina+clavulanato De Potássio  400mg+57mg/5ml Po Suspensao Oral 70ml Novartis Generico",
      "url": "https://www.panvel.com/panvel/amoxicilina-clavulanato-de-potassio-400mg-57mg-5ml-po-suspensao-oral-70ml-novartis-generico/p-104252",
      "disponivel": true
    }
  },
  "med-00160": {
    "paguemenos": {
      "preco": 195.1,
      "nome": "Amoxicilina Tri-Hidratada + Claritromicina + Lansoprazol 42 Cápsulas Duras Genérico Cifarma",
      "url": "https://www.paguemenos.com.br/amoxicilina-tri-hidratada-mais-claritromicina-mais-lansoprazol-42-capsulas-duras-generico-cifarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 195.1,
      "nome": "Amoxicilina Tri-Hidratada + Claritromicina + Lansoprazol 42 Cápsulas Duras Genérico Cifarma",
      "url": "https://www.extrafarma.com.br/amoxicilina-tri-hidratada-mais-claritromicina-mais-lansoprazol-42-capsulas-duras-generico-cifarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 245.99,
      "nome": "H.Bacter IBP Lansoprazol 30mg 84 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/h-bacter-ibp-30mg-cifarma-84-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 229.59,
      "nome": "Pyloritrat IBP Lansoprazol 30mg + Amoxicilina 500mg + Claritromicina 500mg 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/pyloritrat-ibp-7-x-8-pfizer-28-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 124.57,
      "nome": "Lansoprazol + Claritromicina + Amoxicilina Tri-Hidratada 30mg + 500mg + 500mg Teuto 7 Blísteres + 28 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/lansop-clar-amox-ibp-14-14-28cps-g-teuto/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 249.38,
      "nome": "Pyloritrat 7blister + 28 Capsula",
      "url": "https://www.panvel.com/panvel/pyloritrat-7blister-28-capsula/p-517030",
      "disponivel": true
    }
  },
  "med-00046": {
    "paguemenos": {
      "preco": 26.99,
      "nome": "Amoxicilina 250mg/5ml + Clavulanato de Potássio 62,5mg/5ml Pó para Suspensão Oral 75ml Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/amoxicilina-mais-clavulonato-de-potassio-250mg-suspensao-75ml-generico-sandoz-mais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.99,
      "nome": "Amoxicilina 250mg/5ml + Clavulanato de Potássio 62,5mg/5ml Pó para Suspensão Oral 75ml Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/amoxicilina-mais-clavulonato-de-potassio-250mg-suspensao-75ml-generico-sandoz-mais/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 91,
      "nome": "Lânico 875mg + 125mg Supera Rx 14 comprimidos",
      "url": "https://www.drogariavenancio.com.br/lanico-875mg-125mg-14cpr-revest-c1--14-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00161": {
    "paguemenos": {
      "preco": 68.49,
      "nome": "Amoxicilina 500mg Com Clavulanato De Potássio 125mg Com 21 Comprimidos Sandoz Genérico",
      "url": "https://www.paguemenos.com.br/amoxicilina-mais-clavulanato-de-potassio-500mais125mg-com-21-comprimidos-generico-sandozmais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 68.49,
      "nome": "Amoxicilina 500mg Com Clavulanato De Potássio 125mg Com 21 Comprimidos Sandoz Genérico",
      "url": "https://www.extrafarma.com.br/amoxicilina-mais-clavulanato-de-potassio-500mais125mg-com-21-comprimidos-generico-sandozmais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 46.49,
      "nome": "Atak Clav Amoxicilina 80mg/ml + Ácido Clavulânico 11,4mg/ml 70ml Suspensão Oral",
      "url": "https://www.drogariasaopaulo.com.br/atak-clav-suspensao-oral-400mg-momenta-70ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.29,
      "nome": "Atak Clav Amoxicilina 80mg/ml + Ácido Clavulânico 11,4mg/ml 70ml Suspensão Oral",
      "url": "https://www.drogariaspacheco.com.br/atak-clav-suspensao-oral-400mg-momenta-70ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 131.51,
      "nome": "Clavulin BD amoxicilina + clavulanato de potássio 875mg GSK",
      "url": "https://www.drogariavenancio.com.br/clavulin-bd-875mg-gsk-14-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 35.99,
      "nome": "Sigma-clav Bd Amoxicilina 400mg/5ml + Clavulanato De Potássio 57mg/5ml 70ml",
      "url": "https://www.panvel.com/panvel/sigma-clav-bd-amoxicilina-400mg-5ml-clavulanato-de-potassio-57mg-5ml-70ml/p-474730",
      "disponivel": true
    }
  },
  "med-00047": {
    "paguemenos": {
      "preco": 18.59,
      "nome": "Ampicilina 500mg 12 Cápsulas Duras Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/ampicilina-500mg-com-12-capsulas-generico-prati-donaduzzimais/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 18.59,
      "nome": "Ampicilina 500mg 12 Cápsulas Duras Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/ampicilina-500mg-com-12-capsulas-generico-prati-donaduzzimais/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 13.09,
      "nome": "Ampicilina 250mg Genérico Neo Química 60ml",
      "url": "https://www.drogariasaopaulo.com.br/ampicilina-250mg-generico-neo-quimica-60ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 9.99,
      "nome": "Ampicilina 500mg Genérico Prati 12 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/ampicilina-500mg-generico-prati-12-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 445.04,
      "nome": "Ampicilina Teuto 1g 50 Frasco-ampola",
      "url": "https://www.drogariavenancio.com.br/ampicilina-teuto-1g-50-frasco-ampola/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 19.49,
      "nome": "Ampicilina 500mg 10 Cápsulas Nova Quimica Generico",
      "url": "https://www.panvel.com/panvel/ampicilina-500mg-10-capsulas-nova-quimica-generico/p-107620",
      "disponivel": true
    }
  },
  "med-00050": {
    "paguemenos": {
      "preco": 47.59,
      "nome": "Anastrozol 1mg 30 Comprimidos Revestidos Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/anastrozol-1mg-com-30-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 47.59,
      "nome": "Anastrozol 1mg 30 Comprimidos Revestidos Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/anastrozol-1mg-com-30-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 30.99,
      "nome": "Anastrozol 1mg Genérico Blau Farmacêutica 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/anastrozol-1mg-generico-blau-farmaceutica-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 25.99,
      "nome": "Anastrozol 1mg Genérico Blau Farmacêutica 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/anastrozol-1mg-generico-blau-farmaceutica-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 78.72,
      "nome": "Anastrozol 1mg 30 Comprimidos Sandoz",
      "url": "https://www.drogariavenancio.com.br/anastrozol-1mg-30-comprimidos-/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 39.9,
      "nome": "Anastrozol 1mg 30 Comprimidos Revestidos Ems Genérico",
      "url": "https://www.panvel.com/panvel/anastrozol-1mg-30-comprimidos-revestidos-ems-generico/p-93242",
      "disponivel": true
    }
  },
  "med-00264": {
    "paguemenos": {
      "preco": 11.39,
      "nome": "Cloridrato de Tetraciclina 500mg 8 Cápsulas Duras Genérico Medquimica",
      "url": "https://www.paguemenos.com.br/cloridrato-de-tetraciclina-500mg-com-8-capsulas-generico-medquimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.39,
      "nome": "Cloridrato de Tetraciclina 500mg 8 Cápsulas Duras Genérico Medquimica",
      "url": "https://www.extrafarma.com.br/cloridrato-de-tetraciclina-500mg-com-8-capsulas-generico-medquimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 15.59,
      "nome": "Cinatrex Cloridrato De Tetraciclina 5mg/g 3,5g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/cinatrex-5mg-cifarma-3--5g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.59,
      "nome": "Cinatrex Cloridrato De Tetraciclina 5mg/g 3,5g Pomada",
      "url": "https://www.drogariaspacheco.com.br/cinatrex-5mg-cifarma-3--5g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 13.89,
      "nome": "Cloridrato de Tetraciclina 500mg Medquímica 8 cápsulas",
      "url": "https://www.drogariavenancio.com.br/clor-de-tetraciclina-500mg-8cap--ab---g--medquimica/p",
      "disponivel": true
    }
  },
  "med-00053": {
    "paguemenos": {
      "preco": 41.29,
      "nome": "Apixabana 2,5mg 20 Comprimidos Revestidos Genérico Zydus Nikkho",
      "url": "https://www.paguemenos.com.br/apixabana-2-5-mg-com-20-comprimidos-generico-zydus/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 41.29,
      "nome": "Apixabana 2,5mg 20 Comprimidos Revestidos Genérico Zydus Nikkho",
      "url": "https://www.extrafarma.com.br/apixabana-2-5-mg-com-20-comprimidos-generico-zydus/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 48.39,
      "nome": "Apixabana 2,5mg Genérico Natcofarma 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/apixabana-2-5mg-generico-natcofarma-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 51.25,
      "nome": "Apixabana 5mg Genérico Natcofarma 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/apixabana-5mg-generico-natcofarma-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 40.99,
      "nome": "Apixabana 5mg 20 Comprimidos Revestidos Natcofarma",
      "url": "https://www.drogariavenancio.com.br/apixabana-5mg-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.89,
      "nome": "Apixabana 2,5mg 20 Comprimido Revestido Liberação Prologanda Ems Genérico",
      "url": "https://www.panvel.com/panvel/apixabana-25mg-20-comprimido-revestido-liberacao-prologanda-ems-generico/p-93615",
      "disponivel": true
    }
  },
  "med-00054": {
    "paguemenos": {
      "preco": 52.99,
      "nome": "Aripiprazol 10mg 30 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/aripiprazol-10mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 52.99,
      "nome": "Aripiprazol 10mg 30 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/aripiprazol-10mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 79.99,
      "nome": "Aripiprazol 10mg Genérico Prati-Donaduzzi 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/aripiprazol-10mg-generico-prati-donaduzzi-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 284.19,
      "nome": "Arpejo Aripiprazol 20mg 15ml",
      "url": "https://www.drogariaspacheco.com.br/arpejo-20mg-ems-15ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 89.49,
      "nome": "Aripiprazol 10mg 30 Comprimidos Prati Donaduzzi",
      "url": "https://www.drogariavenancio.com.br/aripiprazol-10mg-30cpr/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 140.49,
      "nome": "Aripiprazol 10 Mg 30 Comprimidos Ems Generico C1\t\t\t\t\t\t\t\t\t",
      "url": "https://www.panvel.com/panvel/aripiprazol-10-mg-30-comprimidos-ems-generico-c1/p-97490",
      "disponivel": true
    }
  },
  "med-00056": {
    "paguemenos": {
      "preco": 40.99,
      "nome": "Targifor C 1g + 1g 16 Comprimidos Efervescentes",
      "url": "https://www.paguemenos.com.br/targifor-c-aspartato-de-arginina-1g-mais-vitamina-c-1g-16-comprimidos--efervescentes/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 40.99,
      "nome": "Targifor C 1g + 1g 16 Comprimidos Efervescentes",
      "url": "https://www.extrafarma.com.br/targifor-c-aspartato-de-arginina-1g-mais-vitamina-c-1g-16-comprimidos--efervescentes/p",
      "disponivel": true
    }
  },
  "med-00055": {
    "paguemenos": {
      "preco": 68.59,
      "nome": "Reforgan Imuno 500mg + 10mg + 2000UI 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/reforgan-imuno-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 68.59,
      "nome": "Reforgan Imuno 500mg + 10mg + 2000UI 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/reforgan-imuno-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 69.4,
      "nome": "Reforgan 250mg Zydus 20 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/reforgan-250mg-zydus-20-comprimidos-revestidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 65.66,
      "nome": "Reforgan 250mg Zydus 20 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/reforgan-250mg-zydus-20-comprimidos-revestidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 88.49,
      "nome": "Reforgan 500mg 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/reforgan-500mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 56.99,
      "nome": "Targifor Vitamina C E Arginina Com 32 Comprimidos Efervescentes",
      "url": "https://www.panvel.com/panvel/targifor-vitamina-c-e-arginina-com-32-comprimidos-efervescentes/p-84894",
      "disponivel": true
    }
  },
  "med-00057": {
    "paguemenos": {
      "preco": 2.49,
      "nome": "Atenolol 25mg 30 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/atenolol-25mg-30-comprimidos-revestidos-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 2.49,
      "nome": "Atenolol 25mg 30 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/atenolol-25mg-30-comprimidos-revestidos-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 2.59,
      "nome": "Atenolol 25mg Genérico Sandoz 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/atenolol-25mg-generico-sandoz-do-brasil-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.15,
      "nome": "Atenolol 25mg Genérico Medley 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/atenolol-25mg-generico-medley-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.49,
      "nome": "Atenolol 25mg Neo Química 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/atenolol-25mg-30com--g--neo-quimica/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 2.49,
      "nome": "Atenolol 25mg 30 Comprimidos Biosintética Genérico C",
      "url": "https://www.panvel.com/panvel/atenolol-25mg-30-comprimidos-biosintetica-generico-c/p-415540",
      "disponivel": true
    }
  },
  "med-00058": {
    "paguemenos": {
      "preco": 15.99,
      "nome": "Atorvastatina Cálcica 20mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/atorvastatina-20mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.99,
      "nome": "Atorvastatina Cálcica 20mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/atorvastatina-20mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 26.92,
      "nome": "Atorvastatina Cálcica 20mg Genérico Legrand 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/atorvastatina-calcica-20mg-generico-legrand-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 34.5,
      "nome": "Atorvastatina Cálcica 40mg Genérico Cimed 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/atorvastatina-calcica-10mg-generico-cimed-30-comprimidoss/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 15.99,
      "nome": "Atorvastatina Cálcica 20mg Ems 30 Comprimidos Revestido",
      "url": "https://www.drogariavenancio.com.br/atorvastatina-20mg-30cpr-g-ems---inativo/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 98.64,
      "nome": "Ateroma Atorvastatina Cálcica 20mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/ateroma-atorvastatina-calcica-20mg-30-comprimidos/p-699100",
      "disponivel": true
    }
  },
  "med-00060": {
    "paguemenos": {
      "preco": 76.29,
      "nome": "Axetil Cefuroxima 500mg 10 Comprimidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/gen-axetilcefuroxima-500mg-10cp-neo-quim/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 76.29,
      "nome": "Axetil Cefuroxima 500mg 10 Comprimidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/gen-axetilcefuroxima-500mg-10cp-neo-quim/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 78.59,
      "nome": "Axetilcefuroxima 250mg Genérico Ranbaxy 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/axetil-cefuroxima-250mg-generico-ranbaxy-farm-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 93.41,
      "nome": "Mefex Axetilcefuroxima 250mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/mefex-250mg-ache-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 75.99,
      "nome": "Axetilcefuroxima 250mg Eurofarma 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/axetilcefuroxima-250mg-eurofarma-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 84.99,
      "nome": "Axetilcefuroxima 250mg/5ml 50ml Ranbaxy Genérico",
      "url": "https://www.panvel.com/panvel/axetilcefuroxima-250mg-5ml-50ml-ranbaxy-generico/p-457970",
      "disponivel": true
    }
  },
  "med-00061": {
    "paguemenos": {
      "preco": 145.99,
      "nome": "Imussuprex 50mg 50 Comprimidos",
      "url": "https://www.paguemenos.com.br/imussuprex-50mg-com-50-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 145.99,
      "nome": "Imussuprex 50mg 50 Comprimidos",
      "url": "https://www.extrafarma.com.br/imussuprex-50mg-com-50-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 146.99,
      "nome": "Imussuprex Azatioprina 50mg 50 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/imussuprex-50mg-50cp-revestidos-natures-plus/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 135.03,
      "nome": "Imussuprex Azatioprina 50mg 50 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/imussuprex-50mg-50cp-revestidos-natures-plus/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 137.79,
      "nome": "Imussuprex 50mg 50 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/imussuprex-50mg-50-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 162.23,
      "nome": "Imussuprex Azatioprina 50mg 50 Comprimidos",
      "url": "https://www.panvel.com/panvel/imussuprex-azatioprina-50mg-50-comprimidos/p-626540",
      "disponivel": true
    }
  },
  "med-00063": {
    "paguemenos": {
      "preco": 11.59,
      "nome": "Azitromicina 1g 1 Comprimido Revestido Genérico Germed",
      "url": "https://www.paguemenos.com.br/azitromicina-1g-com-1-comprimido-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.59,
      "nome": "Azitromicina 1g 1 Comprimido Revestido Genérico Germed",
      "url": "https://www.extrafarma.com.br/azitromicina-1g-com-1-comprimido-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.68,
      "nome": "Astro Azitromicina 500mg  2 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/astro-500mg-eurofarma-2-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 16.06,
      "nome": "Astro Azitromicina 500mg  2 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/astro-500mg-eurofarma-2-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.96,
      "nome": "Astro Azitromicina 500mg 3 Comprimidos",
      "url": "https://www.panvel.com/panvel/astro-azitromicina-500mg-3-comprimidos/p-808700",
      "disponivel": true
    }
  },
  "med-00062": {
    "paguemenos": {
      "preco": 13.69,
      "nome": "Azitromicina Di-hidratada 500mg 5 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/azitromicina-500mg-com-5-comprimidos-generico-prati-donaduzzimais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.69,
      "nome": "Azitromicina Di-hidratada 500mg 5 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/azitromicina-500mg-com-5-comprimidos-generico-prati-donaduzzimais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.69,
      "nome": "Azitromicina Di-Hidratada 500mg Genérico EMS 5 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/azitromicina-di-hidratada-500mg-generico-ems-5-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.99,
      "nome": "Azitromicina Di-Hidratada 500mg Genérico Cimed 3 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/azitromicina-di-hidratada-500mg-generico-cimed-caixa-3-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.99,
      "nome": "Azitromicina 500mg Prati Donaduzzi 3 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/azitromicina-500mg-prati-donaduzzi-3-comprimidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 7.99,
      "nome": "Azitromicina 500mg 3 Comprimidos Teuto Genérico",
      "url": "https://www.panvel.com/panvel/azitromicina-500mg-3-comprimidos-teuto-generico/p-520520",
      "disponivel": true
    }
  },
  "med-00064": {
    "paguemenos": {
      "preco": 19.29,
      "nome": "Baclofeno 10mg Com 20 Comprimidos Genérico União Química",
      "url": "https://www.paguemenos.com.br/baclofeno-10mg-com-20-comprimidos-generico-uniao-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.29,
      "nome": "Baclofeno 10mg Com 20 Comprimidos Genérico União Química",
      "url": "https://www.extrafarma.com.br/baclofeno-10mg-com-20-comprimidos-generico-uniao-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 21.99,
      "nome": "Baclofeno 10mg Genérico Teuto 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/baclofeno-10mg-generico-teuto-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 20.28,
      "nome": "Baclofen Baclofeno 10mg 20 comprimidos",
      "url": "https://www.drogariaspacheco.com.br/baclofen-10mg-teuto-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.09,
      "nome": "Baclofeno 10mg 20 Comprimidos Genérico Teuto",
      "url": "https://www.drogariavenancio.com.br/baclofeno-10mg-20-comprimidos-generico/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 11.99,
      "nome": "Baclofeno 10mg 20 Comprimidos Teuto Genérico",
      "url": "https://www.panvel.com/panvel/baclofeno-10mg-20-comprimidos-teuto-generico/p-439960",
      "disponivel": true
    }
  },
  "med-00065": {
    "paguemenos": {
      "preco": 49.99,
      "nome": "Benfotiamina 150mg 30 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/benfotiamina-150mg-30-comprimidos-biolab-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 49.99,
      "nome": "Benfotiamina 150mg 30 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/benfotiamina-150mg-30-comprimidos-biolab-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 50.39,
      "nome": "Benfotiamina 150mg Biolab 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/benfotiamina-150mg-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 57.59,
      "nome": "Benfotiamina 150mg Genérico Biosintética 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/benfotiamina-150mg-generico-biosintetica-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 51.29,
      "nome": "Benfotiamina 150mg 30 comprimidos Biosintetica",
      "url": "https://www.drogariavenancio.com.br/benfotiamina-150mg-30-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 52.99,
      "nome": "Benfotiamina 150mg 30 Comprimidos Revestidos Biolab Genérico",
      "url": "https://www.panvel.com/panvel/benfotiamina-150mg-30-comprimidos-revestidos-biolab-generico/p-92900",
      "disponivel": true
    }
  },
  "med-00066": {
    "paguemenos": {
      "preco": 12.49,
      "nome": "Benzilpenicilina Benzatina 1200000u 1 Frasco Ampola 4ml Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/benzilpenicilina-benzatina-1200000u-1-frasco-ampola-4ml-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.49,
      "nome": "Benzilpenicilina Benzatina 1200000u 1 Frasco Ampola 4ml Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/benzilpenicilina-benzatina-1200000u-1-frasco-ampola-4ml-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 21.48,
      "nome": "Benzetacil Benzilpenicilina Benzatina 1200UI 4ml 1 Frasco",
      "url": "https://www.drogariasaopaulo.com.br/benzetacil-1200ui-schering-plough-4ml-1-frasco/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 19.59,
      "nome": "Benzetacil Benzilpenicilina Benzatina 1200UI 4ml 1 Frasco",
      "url": "https://www.drogariaspacheco.com.br/benzetacil-1200ui-schering-plough-4ml-1-frasco/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 19.99,
      "nome": "Benzetacil 1.200.000UI 1 Frasco Ampola 4ml",
      "url": "https://www.drogariavenancio.com.br/benzetacil-supera-farma-1200ui-1-frasco-ampola-4ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 15.99,
      "nome": "Benzetacil Benzilpenicilina Benzatina 1.200.000ui 4ml 1 Frasco Injetável",
      "url": "https://www.panvel.com/panvel/benzetacil-benzilpenicilina-benzatina-1200000ui-4ml-1-frasco-injetavel/p-464850",
      "disponivel": true
    }
  },
  "med-00068": {
    "paguemenos": {
      "preco": 133.99,
      "nome": "Nesina 12,5mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/nesina-12-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 133.99,
      "nome": "Nesina 12,5mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/nesina-12-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 67.78,
      "nome": "Nesina 6,25mg Takeda 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nesina-6-25mg-takeda-30-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 69.67,
      "nome": "Nesina 6,25mg Takeda 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/nesina-6-25mg-takeda-30-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 109.99,
      "nome": "Libette 25mg 30 Comprimidos Revestidos Eurofarma",
      "url": "https://www.drogariavenancio.com.br/libette-25mg-30-comprimidos-revestidos-eurofarma/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 165.68,
      "nome": "Nesina Benzoato De Alogliptina 12,5mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/nesina-benzoato-de-alogliptina-125mg-30-comprimidos-revestidos/p-123450",
      "disponivel": true
    }
  },
  "med-00069": {
    "paguemenos": {
      "preco": 18.8,
      "nome": "Benzoderm Sabonete de Benzoato de Benzila - 60g",
      "url": "https://www.paguemenos.com.br/benzoderm-sabonete-de-benzoato-de-benzila-60g-j1734138x47896j7/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.8,
      "nome": "Benzoderm Sabonete de Benzoato de Benzila - 60g",
      "url": "https://www.extrafarma.com.br/benzoderm-sabonete-de-benzoato-de-benzila-60g-j1734138x47896j7/p",
      "disponivel": true
    }
  },
  "med-00070": {
    "paguemenos": {
      "preco": 20.99,
      "nome": "Benzoato de Rizatriptana 10mg 2 Comprimidos Genérico Zydus",
      "url": "https://www.paguemenos.com.br/benzoato-de-rizatriptana-10mg-com-2-comprimidos-generico-zydus/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.99,
      "nome": "Benzoato de Rizatriptana 10mg 2 Comprimidos Genérico Zydus",
      "url": "https://www.extrafarma.com.br/benzoato-de-rizatriptana-10mg-com-2-comprimidos-generico-zydus/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 21.22,
      "nome": "Benzoato de Rizatriptana 10mg Genérico Zydus 2 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/benzoato-de-rizatriptana-10mg-generico-zydus-2-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 23.75,
      "nome": "Benzoato de Rizatriptana 10mg Genérico Zydus 2 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/benzoato-de-rizatriptana-10mg-generico-zydus-2-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 25.29,
      "nome": "Zyptan 10mg Zydus 2 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/zyptan-10mg-2com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 25.52,
      "nome": "Aurom Benzoato De Rizatriptano 10mg 2 Comprimidos",
      "url": "https://www.panvel.com/panvel/aurom-benzoato-de-rizatriptano-10mg-2-comprimidos/p-91356",
      "disponivel": true
    }
  },
  "med-00071": {
    "paguemenos": {
      "preco": 19.89,
      "nome": "Cloridrato De Oxomemazina 2mg/5ml + Iodeto De Potássio 100mg/5ml + Benzoato De Sódio 20mg/5ml + Guaifenesina 30mg/5ml Genérico Ems",
      "url": "https://www.paguemenos.com.br/cloridrato-de-oxomemazina-2mg-5ml-mais-iodeto-de-potassio-100mg-5ml-mais-benzoato-de-sodio-20mg-5ml-mais-guaifenesina-30mg-5ml-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.89,
      "nome": "Cloridrato De Oxomemazina 2mg/5ml + Iodeto De Potássio 100mg/5ml + Benzoato De Sódio 20mg/5ml + Guaifenesina 30mg/5ml Genérico Ems",
      "url": "https://www.extrafarma.com.br/cloridrato-de-oxomemazina-2mg-5ml-mais-iodeto-de-potassio-100mg-5ml-mais-benzoato-de-sodio-20mg-5ml-mais-guaifenesina-30mg-5ml-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 6.59,
      "nome": "Expectorante Cloridrato de Ambroxol 6mg/ml Genérico Cimed 120ml",
      "url": "https://www.drogariasaopaulo.com.br/ambroxol-6mgml-adulto-120ml-xarope-g-cimed/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.59,
      "nome": "Expectorante Cloridrato de Ambroxol 6mg/ml Genérico Cimed 120ml",
      "url": "https://www.drogariaspacheco.com.br/ambroxol-6mgml-adulto-120ml-xarope-g-cimed/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 21.99,
      "nome": "Secrelise 0,4mg/ml + 4mg/ml + 6mg/ml Ems Xarope 120ml",
      "url": "https://www.drogariavenancio.com.br/secrelise-04mgml-4mgml-6mgml-ems-xarope-120ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.12,
      "nome": "Tossexpec 3 Em 1 Oxomemazina + Iodeto De Potássio + Benzoato De Sódio + Guaifenesina Xarope 120ml",
      "url": "https://www.panvel.com/panvel/tossexpec-3-em-1-oxomemazina-iodeto-de-potassio-benzoato-de-sodio-guaifenesina-xarope-120ml/p-86504",
      "disponivel": true
    }
  },
  "med-00072": {
    "paguemenos": {
      "preco": 14.99,
      "nome": "Neopiridin 10mg + 1,466mg Sabor Menta 12 Pastilhas Duras",
      "url": "https://www.paguemenos.com.br/neopiridin-com-12-pastilhas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.99,
      "nome": "Neopiridin 10mg + 1,466mg Sabor Menta 12 Pastilhas Duras",
      "url": "https://www.extrafarma.com.br/neopiridin-com-12-pastilhas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.49,
      "nome": "Neopiridin Neo Química Pastilha para Garganta 12 Pastilhas",
      "url": "https://www.drogariavenancio.com.br/neopiridin-neo-quimica-12-unidades/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.99,
      "nome": "Neopiridin Pastilha Para Garganta 12 Pastilhas",
      "url": "https://www.panvel.com/panvel/neopiridin-pastilha-para-garganta-12-pastilhas/p-823050",
      "disponivel": true
    }
  },
  "med-00073": {
    "paguemenos": {
      "preco": 15.69,
      "nome": "Benzoilmetronidazol 40mg/ml Suspensão Oral 120ml Genérico EMS",
      "url": "https://www.paguemenos.com.br/benzoilmetronidazol-4porcento-120ml-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.69,
      "nome": "Benzoilmetronidazol 40mg/ml Suspensão Oral 120ml Genérico EMS",
      "url": "https://www.extrafarma.com.br/benzoilmetronidazol-4porcento-120ml-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 6.55,
      "nome": "Benzoilmetronidazol 40mg/ml Genérico Neo Química 80ml Suspensão",
      "url": "https://www.drogariasaopaulo.com.br/benzoilmetronidazol-40mgml-generico-suspensao-80ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 7.56,
      "nome": "Benzoilmetronidazol 40mg/ml Genérico Neo Química 80ml Suspensão",
      "url": "https://www.drogariaspacheco.com.br/benzoilmetronidazol-40mgml-generico-suspensao-80ml/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 16.66,
      "nome": "Benzoilmetronidazol 40mg/ml Ems Genérico Suspensão Oral 120ml",
      "url": "https://www.drogariavenancio.com.br/benzoilmetronidazol-40mg-ml-suspensao-oral-120ml-ems-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 16.49,
      "nome": "Benzoilmetronidazol 4% Pediátrico 120ml Ems Genérico L",
      "url": "https://www.panvel.com/panvel/benzoilmetronidazol-4-pediatrico-120ml-ems-generico-l/p-436860",
      "disponivel": true
    }
  },
  "med-00074": {
    "paguemenos": {
      "preco": 2.79,
      "nome": "Besilato de Anlodipino 5mg 30 Comprimidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/besilato-de-anlodipino-5mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 2.79,
      "nome": "Besilato de Anlodipino 5mg 30 Comprimidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/besilato-de-anlodipino-5mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 3.95,
      "nome": "Besilato de Anlodipino 5mg Genérico Cimed 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/besilato-de-anlodipino-5mg-generico-cimed-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 9.79,
      "nome": "Pressat Besilato De Anlodipino 5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/pressat-5mg-biolab--30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.99,
      "nome": "Besilato De Anlodipino 5mg Geolab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/besilato-de-anlodipino-5mg-geolab-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 2.99,
      "nome": "Besilato De Anlodipino 5mg 30 Comprimidos Genérico Vitamedic",
      "url": "https://www.panvel.com/panvel/besilato-de-anlodipino-5mg-30-comprimidos-generico-vitamedic/p-102221",
      "disponivel": true
    }
  },
  "med-00078": {
    "paguemenos": {
      "preco": 49.59,
      "nome": "Olmesartana Medoxomila 20mg + Besilato De Anlodipino 5mg 30 Comprimidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/olmesartana-medoxomila-20mg-mais-besilato-de-anlodipino-5mg-30-comprimidos-generico-hypera/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 49.59,
      "nome": "Olmesartana Medoxomila 20mg + Besilato De Anlodipino 5mg 30 Comprimidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/olmesartana-medoxomila-20mg-mais-besilato-de-anlodipino-5mg-30-comprimidos-generico-hypera/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 54.67,
      "nome": "Olmy Anlo Olmesartana Medoxomila 5mg + Besilato de Anlodipino 40mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/olmy-anlo-40mg-5mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 43.6,
      "nome": "Olmy Anlo Olmesartana Medoxomila 40mg + Besilato de Anlodipino 5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/olmy-anlo-40mg-5mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 41.4,
      "nome": "Olmesartana Medoxomila + Besilato de Anlodipino 20mg + 5mg Neo Química 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/olmesartana-medoxomila-bes-anlodipino--20-5-mg-30com--g--brainfarma/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 43.99,
      "nome": "Olmesartana Medoxomila + Besilato De Anlodipino 20mg + 5mg 30 Comprimidos Neo Química Genérico",
      "url": "https://www.panvel.com/panvel/olmesartana-medoxomila-besilato-de-anlodipino-20mg-5mg-30-comprimidos-neo-quimica-generico/p-92311",
      "disponivel": true
    }
  },
  "med-00454": {
    "paguemenos": {
      "preco": 33.59,
      "nome": "Olmesartana Medoxomila 20mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/olmesartana-mais-hidroclorotiazida-20mg-mais-12-5mg-com-30-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 33.59,
      "nome": "Olmesartana Medoxomila 20mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/olmesartana-mais-hidroclorotiazida-20mg-mais-12-5mg-com-30-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 81.2,
      "nome": "Holmes H Olmesartana Medoxomila 20mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/holmes-h-20mg-12-5mg-eurofarma-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 75.16,
      "nome": "Asea HCT Olmesartana Medoxomila 20mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/asea-hct-20mg-12-5mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.89,
      "nome": "Olmesartana Medoxomila + Hidroclorotiazida 40mg + 25mg 30 Comprimidos Germed Pharma",
      "url": "https://www.drogariavenancio.com.br/olmesartana-medoxo-hidroclor-40mg-25mg-30com--g--germed/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 53.99,
      "nome": "Olmesartana Medoxomila/hidroclorotiazida 40mg/25mg 30 Comprimidos Eurofarma Genérico",
      "url": "https://www.panvel.com/panvel/olmesartana-medoxomila-hidroclorotiazida-40mg-25mg-30-comprimidos-eurofarma-generico/p-704600",
      "disponivel": true
    }
  },
  "med-00511": {
    "paguemenos": {
      "preco": 3.89,
      "nome": "Losartana Potássica 50mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/losartana-potassica-50mg-com-30-comprimidos-genericos-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 3.89,
      "nome": "Losartana Potássica 50mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/losartana-potassica-50mg-com-30-comprimidos-genericos-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 6.59,
      "nome": "Losartana Potássica 50mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/losartana-potassica-50mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.99,
      "nome": "Aradois Losartana Potássica 50mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/aradois-50mg-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.29,
      "nome": "Losartana Potássica 50mg Prati Donaduzzi 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/losartana-potas-50mg-30cpr-g-prati-donaduzzi/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 4.99,
      "nome": "Losartana Potássica  50mg 30 Comprimidos Revestidos Eurofarma Genérico C",
      "url": "https://www.panvel.com/panvel/losartana-potassica-50mg-30-comprimidos-revestidos-eurofarma-generico-c/p-885990",
      "disponivel": true
    }
  },
  "med-00593": {
    "paguemenos": {
      "preco": 16.69,
      "nome": "Olmesartana Medoxomila 20mg 30 Comprimidos Revestidos Genérico Germed",
      "url": "https://www.paguemenos.com.br/olmesartana-medoxomila-20mg-com-30-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.69,
      "nome": "Olmesartana Medoxomila 20mg 30 Comprimidos Revestidos Genérico Germed",
      "url": "https://www.extrafarma.com.br/olmesartana-medoxomila-20mg-com-30-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.8,
      "nome": "Olmesartana Medoxomila 20mg + Hidroclorotiazida 12,5mg Genérico Eurofarma 30 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/olmesartana-medoxomila-20mg-hidroclorotiazida-12-5mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 36.17,
      "nome": "Olmecor Olmesartana Medoxomila 20mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/olmecor-20mg-torrent-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 28.99,
      "nome": "Olmesartana Medoxomila 20mg Torrent 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/olmesartana-medoxomila-20mg-30com--g--torrent/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 38.49,
      "nome": "Olmesartana Medoxomila 20mg 30 Comprimidos Revestidos Ems Genérico",
      "url": "https://www.panvel.com/panvel/olmesartana-medoxomila-20mg-30-comprimidos-revestidos-ems-generico/p-92200",
      "disponivel": true
    }
  },
  "med-00079": {
    "paguemenos": {
      "preco": 47.79,
      "nome": "Valsartana 160mg + Besilato de Anlodipino 5mg 28 Comprimidos Revestidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/valsartana-mais-besilato-de-anlodipino-160mgmais5mg-com-28-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 47.79,
      "nome": "Valsartana 160mg + Besilato de Anlodipino 5mg 28 Comprimidos Revestidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/valsartana-mais-besilato-de-anlodipino-160mgmais5mg-com-28-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 70.96,
      "nome": "Bravan Duo Valsartana 160mg + Besilato de Anlodipino 5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/bravan-duo-160mg---5mg-ache-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 55.56,
      "nome": "Bravan Duo Valsartana 160mg + Besilato de Anlodipino 5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/bravan-duo-160mg---5mg-ache-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 112.89,
      "nome": "Brasart Bcc Valsartana 320mg + Besilato de Anlodipino 5mg 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/brasart-bcc-320mg---5mg-ems-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 71.54,
      "nome": "Bravan Duo Valsartana 160mg + Besilato De Anlodipino 5mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/bravan-duo-valsartana-160mg-besilato-de-anlodipino-5mg-30-comprimidos-revestidos/p-105346",
      "disponivel": true
    }
  },
  "med-00080": {
    "paguemenos": {
      "preco": 43.29,
      "nome": "Besilato de Levanlodipino 2,5mg 30 Comprimidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/besilato-de-levanlodipino-2-5mg-30-comprimidos-biolab-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 43.29,
      "nome": "Besilato de Levanlodipino 2,5mg 30 Comprimidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/besilato-de-levanlodipino-2-5mg-30-comprimidos-biolab-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 79.75,
      "nome": "Novanlo Besilato De Levanlodipino 2,5mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/novanlo-2-5mg-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 37.1,
      "nome": "Atelop Besilato De Levanlodipino 2,5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/atelop-2-5mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 139.99,
      "nome": "Novanlo 2,5mg Biolab 60 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/novanlo-25mg-biolab-60-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 39.9,
      "nome": "Atelop Besilato De Levanlodipino 2,5mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/atelop-besilato-de-levanlodipino-25mg-30-comprimidos/p-108197",
      "disponivel": true
    }
  },
  "med-00081": {
    "paguemenos": {
      "preco": 34.29,
      "nome": "Levamz 2.5mg 30 Comprimidos",
      "url": "https://www.paguemenos.com.br/levamz-2-5mg-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 34.29,
      "nome": "Levamz 2.5mg 30 Comprimidos",
      "url": "https://www.extrafarma.com.br/levamz-2-5mg-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 43.55,
      "nome": "Besilato De Levanlodipino 2,5mg Genérico Neo Quimica 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/besilato-de-levanlodipino-2-5mg-generico-neo-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 33.6,
      "nome": "Levamz Besilato De Levanlodipino 2,5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/levamz-2-5mg-torrent-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.29,
      "nome": "Levamz 2,5mg Torrent 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/levamz-25mg-30com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 37.92,
      "nome": "Levamz Besilato De Levanlodipino 2,5mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/levamz-besilato-de-levanlodipino-25mg-30-comprimidos/p-88633",
      "disponivel": true
    }
  },
  "med-00346": {
    "paguemenos": {
      "preco": 15.19,
      "nome": "Dipropionato de Betametasona 0,5mg/ml + Ácido Salicílico 20mg/ml Solução Tópica 30ml Genérico Germed",
      "url": "https://www.paguemenos.com.br/dipropianato-betametasona-0-5mg-mlmaisacido-salicilico-20mg-ml-30ml-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.19,
      "nome": "Dipropionato de Betametasona 0,5mg/ml + Ácido Salicílico 20mg/ml Solução Tópica 30ml Genérico Germed",
      "url": "https://www.extrafarma.com.br/dipropianato-betametasona-0-5mg-mlmaisacido-salicilico-20mg-ml-30ml-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 45.02,
      "nome": "Dermosalic Dipropionato de Betametasona 0,64mg/g + Ácido Salicílico 30mg/g 30g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/pomada-dermosalic-icn-farm-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 27.82,
      "nome": "Dermosalic Dipropionato de Betametasona 0,64mg/g + Ácido Salicílico 30mg/g 30g Pomada",
      "url": "https://www.drogariaspacheco.com.br/pomada-dermosalic-icn-farm-30g/p",
      "disponivel": true
    }
  },
  "med-00734": {
    "paguemenos": {
      "preco": 20.29,
      "nome": "Valerato de Betametasona 1mg/g Pomada Dermatológica 30g Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/valerato-de-betametasona-1mg-pomada-com-30g-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.29,
      "nome": "Valerato de Betametasona 1mg/g Pomada Dermatológica 30g Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/valerato-de-betametasona-1mg-pomada-com-30g-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 12.94,
      "nome": "Valerato Betametasona + Sulfato Gentamicina + Tolnaftato + Clioquinol 0,5mg/g + 1mg/g + 10mg/g + 10mg/g Genérico Cellera com 20g",
      "url": "https://www.drogariasaopaulo.com.br/valerato-betametasona--sulfato-gentamicina--tolnaftato--clioquinol-05mgg--1mgg--10mgg--10mgg-generico-cellera-com-20g-pomada/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1.99,
      "nome": "Valerato Betametasona + Sulfato Gentamicina + Tolnaftato + Clioquinol 0,5mg/g + 1mg/g + 10mg/g + 10mg/g Genérico Cellera com 20g",
      "url": "https://www.drogariaspacheco.com.br/valerato-betametasona--sulfato-gentamicina--tolnaftato--clioquinol-05mgg--1mgg--10mgg--10mgg-generico-cellera-com-20g-creme/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 18.89,
      "nome": "Valerato De Betametasona 1mg/g Medley 30g Pomada Dermatológica",
      "url": "https://www.drogariavenancio.com.br/valerato-de-betametasona-1mg-g-medley-30g-pomada-dermatologica/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 22.49,
      "nome": "Valerato Betametasona 1mg/g Pomada 30g Medley Genérico",
      "url": "https://www.panvel.com/panvel/valerato-betametasona-1mg-g-pomada-30g-medley-generico/p-657950",
      "disponivel": true
    }
  },
  "med-00084": {
    "paguemenos": {
      "preco": 11.59,
      "nome": "Maleato de Dexclorfeniramina 0,4mg/ml + Betametasona 0,05mg/ml Xarope 120ml Genérico Globo",
      "url": "https://www.paguemenos.com.br/maleato-dexclorfeniramina-mais-betametasona-120ml-generico-globo/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.59,
      "nome": "Maleato de Dexclorfeniramina 0,4mg/ml + Betametasona 0,05mg/ml Xarope 120ml Genérico Globo",
      "url": "https://www.extrafarma.com.br/maleato-dexclorfeniramina-mais-betametasona-120ml-generico-globo/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 12.44,
      "nome": "Celerg Betametasona 0,25mg + Maleato de Dexclorfeniramina 2mg 20 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/celerg-legrand-pharma-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 12.44,
      "nome": "Celerg Betametasona 0,25mg + Maleato de Dexclorfeniramina 2mg 20 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/celerg-legrand-pharma-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.99,
      "nome": "Maleato de Dexclorfeniramina + Betametasona 0,4mg/ml + 0,05mg/ml Xarope com 120ml Globo Pharma",
      "url": "https://www.drogariavenancio.com.br/maleato-de-dexclorfeniramina-betametasona-0-4mg-ml-0-05mg-ml-xarope-com-120ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 13.99,
      "nome": "Celerg Maleato De Dexclorfeniramina 2mg + Betametasona 0,25mg 20 Cápsulas",
      "url": "https://www.panvel.com/panvel/celerg-maleato-de-dexclorfeniramina-2mg-betametasona-025mg-20-capsulas/p-823640",
      "disponivel": true
    }
  },
  "med-00519": {
    "paguemenos": {
      "preco": 7.29,
      "nome": "Maleato de Dexclorfeniramina 2mg/5ml Solução Oral 120ml Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/maleato-de-dexclorfeniramina-2mg-5ml-solucao-oral-120ml-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.29,
      "nome": "Maleato de Dexclorfeniramina 2mg/5ml Solução Oral 120ml Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/maleato-de-dexclorfeniramina-2mg-5ml-solucao-oral-120ml-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 11.57,
      "nome": "Maleato De Dexclorfeniramina 0,4mg/ml Genérico Prati-Donaduzzi 100ml Solução Oral",
      "url": "https://www.drogariasaopaulo.com.br/maleato-de-dexclorfeniramina-0-4mg-ml-generico-prati-donaduzzi-100ml-solucao-oral-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.69,
      "nome": "Maleato De Dexclorfeniramina 0,4mg/ml Genérico Prati-Donaduzzi 100ml Solução Oral",
      "url": "https://www.drogariaspacheco.com.br/maleato-de-dexclorfeniramina-0-4mg-ml-generico-prati-donaduzzi-100ml-solucao-oral-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.95,
      "nome": "Maleato De Dexclorfeniramina 2mg Neo Química 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/maleato-de-dexclorfeniramina-2mg-neo-quimica-20-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00085": {
    "paguemenos": {
      "preco": 34.55,
      "nome": "Gn Bezafibrato 200mg 20cp Legran",
      "url": "https://www.paguemenos.com.br/gn-bezafibrato-200mg-20cp-legran/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 34.55,
      "nome": "Gn Bezafibrato 200mg 20cp Legran",
      "url": "https://www.extrafarma.com.br/gn-bezafibrato-200mg-20cp-legran/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 22.09,
      "nome": "Cedur 200mg Glenmark 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cedur-200mg-20-drageas/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 22.08,
      "nome": "Cedur 200mg Glenmark 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cedur-200mg-20-drageas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 41.99,
      "nome": "Bezafibrato 200mg Ems 20 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/bezafibrato-200mg-ems-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 36.99,
      "nome": "Bezafibrato 200mg 20 Drágeas Germed Genérico C",
      "url": "https://www.panvel.com/panvel/bezafibrato-200mg-20-drageas-germed-generico-c/p-881560",
      "disponivel": true
    }
  },
  "med-00086": {
    "paguemenos": {
      "preco": 700.99,
      "nome": "Bicalutamida 50mg 30 Comprimidos Revestidos Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/bicalutamida-50mg-com-30-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 700.99,
      "nome": "Bicalutamida 50mg 30 Comprimidos Revestidos Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/bicalutamida-50mg-com-30-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 57.59,
      "nome": "Bicalutamida 50mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/bicalutamida-50mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 57.59,
      "nome": "Bicalutamida 50mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/bicalutamida-50mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 700,
      "nome": "Bicalutamida 50mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/bicalutamida-50mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 940.27,
      "nome": "Bicalutamida 50mg 30 Comprimidos Eurofarma Genérico C",
      "url": "https://www.panvel.com/panvel/bicalutamida-50mg-30-comprimidos-eurofarma-generico-c/p-639270",
      "disponivel": true
    }
  },
  "med-00087": {
    "paguemenos": {
      "preco": 26.99,
      "nome": "Bilastina 20mg 15 Comprimidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/bilastina-20mg-com-15-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.99,
      "nome": "Bilastina 20mg 15 Comprimidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/bilastina-20mg-com-15-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.21,
      "nome": "Bixlyn Bilastina 20mg 15 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/bixlyn-bilastina-20mg-15-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 31.35,
      "nome": "Hisbila Bilastina 20mg 15 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/hisbila-20mg-eurofarma-15-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 38.99,
      "nome": "Bilastina 20mg Ems GenéricoS 15 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/bilastina-20mg-15com--g--ems/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 35.08,
      "nome": "Bixlyn Bilastina 20mg 15 Comprimidos",
      "url": "https://www.panvel.com/panvel/bixlyn-bilastina-20mg-15-comprimidos/p-90180",
      "disponivel": true
    }
  },
  "med-00088": {
    "paguemenos": {
      "preco": 33.29,
      "nome": "Bimatoprosta 0,3mg/ml Solução Oftálmica 3ml Genérico Medley",
      "url": "https://www.paguemenos.com.br/bimatoprosta-0-3mg-solucao-oftalmica-3ml-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 33.29,
      "nome": "Bimatoprosta 0,3mg/ml Solução Oftálmica 3ml Genérico Medley",
      "url": "https://www.extrafarma.com.br/bimatoprosta-0-3mg-solucao-oftalmica-3ml-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 72.15,
      "nome": "Bimatoprosta 0,3mg/Ml Genérico Germed 3ml",
      "url": "https://www.drogariasaopaulo.com.br/bimatoprosta-0-3-mg-ml-generico-germed-3-ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 60.05,
      "nome": "Bimatoprosta 0,3mg/Ml Genérico Germed 3ml",
      "url": "https://www.drogariaspacheco.com.br/bimatoprosta-0-3-mg-ml-generico-germed-3-ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 54.59,
      "nome": "Bimatoprosta 0,3mg/ml Medley 3ml Solução Oftálmica Estéril",
      "url": "https://www.drogariavenancio.com.br/bimatoprosta-03mg-ml-medley-3ml-solucao-oftalmica-esteril/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 57.49,
      "nome": "Bimatoprosta 0,3mg/ml Solucao Oftalmica 3ml Geolab Generico",
      "url": "https://www.panvel.com/panvel/bimatoprosta-03mg-ml-solucao-oftalmica-3ml-geolab-generico/p-107833",
      "disponivel": true
    }
  },
  "med-00558": {
    "paguemenos": {
      "preco": 19.49,
      "nome": "Fosfato Sódico de Prednisolona 3mg/ml Sabor Cereja Solução Oral 60ml Genérico Aché",
      "url": "https://www.paguemenos.com.br/gn-prednisolona-3mg-60ml-ache/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.49,
      "nome": "Fosfato Sódico de Prednisolona 3mg/ml Sabor Cereja Solução Oral 60ml Genérico Aché",
      "url": "https://www.extrafarma.com.br/gn-prednisolona-3mg-60ml-ache/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 27.39,
      "nome": "Minoxidil para Sobrancelhas 10ml",
      "url": "https://www.drogariasaopaulo.com.br/minoxidil-para-sobrancelhas-10ml-z17b6703s2716437/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 35.7,
      "nome": "Minoxidil Turbo 60ml",
      "url": "https://www.drogariaspacheco.com.br/minoxidil-turbo-60ml-176l60877j85o319/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 50.99,
      "nome": "Minoxidil 50mg/ml União Química Solução Spray Refil 50ml",
      "url": "https://www.drogariavenancio.com.br/minoxidil-50mgml-uniao-quimica-solucao-spray-refil-50-ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 44.9,
      "nome": "Eniagor Minoxidil 50mg/ml Solucao Capilar 50ml - Refil",
      "url": "https://www.panvel.com/panvel/eniagor-minoxidil-50mg-ml-solucao-capilar-50ml-refil/p-107045",
      "disponivel": true
    }
  },
  "med-00090": {
    "paguemenos": {
      "preco": 5.99,
      "nome": "Laxante Lacto Purga 6 Comprimidos",
      "url": "https://www.paguemenos.com.br/lacto-purga-env-6/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.99,
      "nome": "Laxante Lacto Purga 6 Comprimidos",
      "url": "https://www.extrafarma.com.br/lacto-purga-env-6/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.49,
      "nome": "Bisalax 5mg União Química 20 Drágeas",
      "url": "https://www.drogariavenancio.com.br/bisalax-5-mg-uniao-quimica-20-drageas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 17.99,
      "nome": "Dulcolax Laxante 5mg Com 20 Drágeas",
      "url": "https://www.panvel.com/panvel/dulcolax-laxante-5mg-com-20-drageas/p-3948",
      "disponivel": true
    }
  },
  "med-00091": {
    "paguemenos": {
      "preco": 33.99,
      "nome": "Bissulfato de Clopidogrel 75mg 28 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/bissulfato-de-clopidogrel-75mg-com-28-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 33.99,
      "nome": "Bissulfato de Clopidogrel 75mg 28 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/bissulfato-de-clopidogrel-75mg-com-28-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 50.38,
      "nome": "Bissulfato de Clopidogrel 75mg Genérico Neo Química 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/bissulfato-de-clopidogrel-75mg-generico-neo-quimica-14-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.55,
      "nome": "Bissulfato de Clopidogrel 75mg Genérico Biolab 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/bissulfato-de-clopidogrel-75mg-generico-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 27.99,
      "nome": "Bissulfato De Clopidogrel 75mg Sandoz 28 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/bissulfato-de-clopidogrel-75mg-sandoz-28-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 66.21,
      "nome": "Plagrel Bissulfato De Clopidogrel 75mg 28 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/plagrel-bissulfato-de-clopidogrel-75mg-28-comprimidos-revestidos/p-953290",
      "disponivel": true
    }
  },
  "med-00094": {
    "paguemenos": {
      "preco": 4.99,
      "nome": "Bromazepam 3mg 30 Comprimidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/bromazepam-3mg-comprimidos30generico-medleydley-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 4.99,
      "nome": "Bromazepam 3mg 30 Comprimidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/bromazepam-3mg-comprimidos30generico-medleydley-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 1.36,
      "nome": "Bromazepam 3mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/bromazepam-3mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1.36,
      "nome": "Bromazepam 3mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/bromazepam-3mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.49,
      "nome": "Bromazepam 3mg Teuto 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/bromazepam-3mg-teuto-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 8.49,
      "nome": "Bromazepam 3mg 20 Comprimidos Biosintética Genérico B1",
      "url": "https://www.panvel.com/panvel/bromazepam-3mg-20-comprimidos-biosintetica-generico-b1/p-880660",
      "disponivel": true
    }
  },
  "med-00095": {
    "paguemenos": {
      "preco": 4.99,
      "nome": "Brometo Ipratropio Solução 0,25mg Com 20ml Genérico União Química",
      "url": "https://www.paguemenos.com.br/brometo-ipratropio-solucao-0-25mg-com-20ml-generico-uniao-quimica/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 4.99,
      "nome": "Brometo Ipratropio Solução 0,25mg Com 20ml Genérico União Química",
      "url": "https://www.extrafarma.com.br/brometo-ipratropio-solucao-0-25mg-com-20ml-generico-uniao-quimica/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 13.99,
      "nome": "Brometo de Ipratrópio 0,25mg/mL Genérico União Química 1 Frasco 20mL Solução Para Inalação",
      "url": "https://www.drogariasaopaulo.com.br/brometo-de-ipratropio-0-25mg-ml-generico-uniao-quimica-1-frasco-20ml-solucao-para-inalacao/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.15,
      "nome": "Brometo De Ipratrópio 0,250mg/ml Genérico Germed 20ml Solução Inalatória",
      "url": "https://www.drogariaspacheco.com.br/brometo-de-ipratropio-0-250mg-ml-generico-germed-20ml-solucao-inalatoria/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 5.99,
      "nome": "Brometo De Ipratrópio 0,25mg/ml Teuto Solução para Inalação 20ml",
      "url": "https://www.drogariavenancio.com.br/ipratropio-025-mg-sol-c-20-ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 7.99,
      "nome": "Brometo De Ipratropio 20ml Teuto Genérico",
      "url": "https://www.panvel.com/panvel/brometo-de-ipratropio-20ml-teuto-generico/p-520900",
      "disponivel": true
    }
  },
  "med-00096": {
    "paguemenos": {
      "preco": 35.55,
      "nome": "Brometo De Pinavério 100mg Com 30 Comprimidos Revestidos Genérico Ems",
      "url": "https://www.paguemenos.com.br/brometo-de-pinaverio-100mg-com-30-comprimidos-revestidos-generico-ems/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 35.55,
      "nome": "Brometo De Pinavério 100mg Com 30 Comprimidos Revestidos Genérico Ems",
      "url": "https://www.extrafarma.com.br/brometo-de-pinaverio-100mg-com-30-comprimidos-revestidos-generico-ems/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 44.61,
      "nome": "Brometo de Pinavério 100mg Genérico EMS 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/brometo-de-pinaverio-ems-100mg-30-comprimidos-revestidos-generico/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 34.88,
      "nome": "Brometo de Pinavério 100mg Genérico EMS 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/brometo-de-pinaverio-ems-100mg-30-comprimidos-revestidos-generico/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 45.99,
      "nome": "Brometo De Pinavério 100mg 30 Comprimidos Ems",
      "url": "https://www.drogariavenancio.com.br/brometo-de-pinaverio-100mg-30-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 94.98,
      "nome": "Siilif Brometo De Pinaverio 50mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/siilif-brometo-de-pinaverio-50mg-30-comprimidos/p-540650",
      "disponivel": true
    }
  },
  "med-00097": {
    "paguemenos": {
      "preco": 7.59,
      "nome": "Bromoprida 4mg/ml Solução Oral 20ml Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/bromoprida-4mg-gotas-20ml-generico-prati-donaduzzi/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 7.59,
      "nome": "Bromoprida 4mg/ml Solução Oral 20ml Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/bromoprida-4mg-gotas-20ml-generico-prati-donaduzzi/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 18.39,
      "nome": "Bromidrato de Citalopram 20mg Genérico EMS 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/bromidrato-citalopram-20mg-generico-sem-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 4.99,
      "nome": "Bromidrato de Citalopram 20mg Genérico Prati-Donaduzzi 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/bromidrato-de-citalopram-20mg-generico-prati--donaduzzi-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 19.99,
      "nome": "Bromidrato de citalopram Zydus 20mg 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/bromidrato-de-citalopram-zydus-20mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 56.74,
      "nome": "Nypram Citalopram 20mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/nypram-citalopram-20mg-30-comprimidos-revestidos/p-109887",
      "disponivel": true
    }
  },
  "med-00151": {
    "paguemenos": {
      "preco": 13.79,
      "nome": "Citalopram 20mg 30 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.paguemenos.com.br/citalopram-20mg-30-comprimidos-revestidos-ache-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.79,
      "nome": "Citalopram 20mg 30 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.extrafarma.com.br/citalopram-20mg-30-comprimidos-revestidos-ache-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 14.7,
      "nome": "Citalopram 20mg Genérico Medley 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/citalopram-20mg-generico-medley-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.59,
      "nome": "Citalopram 20mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/citalopram-20mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.85,
      "nome": "Citalopram 20mg 30 Comprimidos Teuto",
      "url": "https://www.drogariavenancio.com.br/citalopram-20mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 82.94,
      "nome": "Maxapran Citalopram 20mg 28 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/maxapran-citalopram-20mg-28-comprimidos-revestidos/p-937460",
      "disponivel": true
    }
  },
  "med-00098": {
    "paguemenos": {
      "preco": 160.99,
      "nome": "Fenazic 7,5mg 30 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.paguemenos.com.br/fenazic-7-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 160.99,
      "nome": "Fenazic 7,5mg 30 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.extrafarma.com.br/fenazic-7-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 118.09,
      "nome": "Enablex 15mg Aspen Pharma 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/enablex-15mg-aspen-pharma-14-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 107.19,
      "nome": "Enablex 7,5mg Aspen Pharma 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/enablex-7-5mg-aspen-pharma-28-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 153.19,
      "nome": "Fenazic 7,5mg Zodiac 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/fenazic-75mg-zodiac-30-comprimidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 173.45,
      "nome": "Fenazic Bromidato De Darifenacina 7,5mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/fenazic-bromidato-de-darifenacina-75mg-30-comprimidos/p-103929",
      "disponivel": true
    }
  },
  "med-00100": {
    "paguemenos": {
      "preco": 49.99,
      "nome": "Bromidrato de Vortioxetina 5mg 30 Comprimidos Revestidos Genérico Althaia",
      "url": "https://www.paguemenos.com.br/vortioxetina-brom-5mg-x30-comprimido-revestido-c1-althaia/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 49.99,
      "nome": "Bromidrato de Vortioxetina 5mg 30 Comprimidos Revestidos Genérico Althaia",
      "url": "https://www.extrafarma.com.br/vortioxetina-brom-5mg-x30-comprimido-revestido-c1-althaia/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 405.41,
      "nome": "Brintellix Bromidrato De Vortioxetina 10mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/brintellix-10mg-lundbeck-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 353.48,
      "nome": "Brintellix Bromidrato De Vortioxetina 10mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/brintellix-10mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 67.99,
      "nome": "Bromidrato de Vortioxetina 5mg 30 Comprimidos Genérico Neo Química",
      "url": "https://www.drogariavenancio.com.br/bromidrato-de-vortioxetina-5mg-neo-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 51.49,
      "nome": "Bromidrato De Vortioxetina 5mg 30 Comprimidos Revestidos Ems Genérico C1",
      "url": "https://www.panvel.com/panvel/bromidrato-de-vortioxetina-5mg-30-comprimidos-revestidos-ems-generico-c1/p-87754",
      "disponivel": true
    }
  },
  "med-00099": {
    "paguemenos": {
      "preco": 120.99,
      "nome": "Brometo De  Galantamina 16mg Capsulas Com 30 Genericon Biolab",
      "url": "https://www.paguemenos.com.br/brometo-de-galantamina-16mg-capsulas-com-30-genericon-biolab/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 120.99,
      "nome": "Brometo De  Galantamina 16mg Capsulas Com 30 Genericon Biolab",
      "url": "https://www.extrafarma.com.br/brometo-de-galantamina-16mg-capsulas-com-30-genericon-biolab/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 129.98,
      "nome": "Bromidrato De Galantamina 16mg Genérico Prati Donaduzzi 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/bromidrato-de-galantamina-16mg-generico-prati-donaduzzi-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 13.52,
      "nome": "Bromidrato de Galantamina 8mg Genérico Biolab 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/bromidrato-de-galantamina-8mg-generico-biolab-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 108.89,
      "nome": "Bromidrato de Galantamina 16mg Nova Química 28 Cápsulas Duras",
      "url": "https://www.drogariavenancio.com.br/bromidrato-de-galantamina-16mg-nova-quimica-28-capsulas-duras/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 117.35,
      "nome": "Elatium Bromidrato Galantamina 8mg 30 Cápsulas De Liberação Prolongada",
      "url": "https://www.panvel.com/panvel/elatium-bromidrato-galantamina-8mg-30-capsulas-de-liberacao-prolongada/p-112233",
      "disponivel": true
    }
  },
  "med-00101": {
    "paguemenos": {
      "preco": 7.99,
      "nome": "Bromoprida 4mg/ml Solução Oral em Gotas 20ml Genérico Cimed",
      "url": "https://www.paguemenos.com.br/bromoprida-4mg-ml-solucao-oral-em-gotas-20ml-generico-cimed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.99,
      "nome": "Bromoprida 4mg/ml Solução Oral em Gotas 20ml Genérico Cimed",
      "url": "https://www.extrafarma.com.br/bromoprida-4mg-ml-solucao-oral-em-gotas-20ml-generico-cimed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 18.25,
      "nome": "Bromoprida 4mg/ml Genérico Germed 20ml Gotas",
      "url": "https://www.drogariasaopaulo.com.br/bromoprida-4mg-ml-generico-germed-solucao-oral-gotas-20ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 12.59,
      "nome": "Bromoprida 10mg Genérico EMS 20 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/bromoprida-10mg-ems-20-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 6.79,
      "nome": "Bromoprida 4mg/ml Teuto Solução Oral 20ml",
      "url": "https://www.drogariavenancio.com.br/bromoprida-4-mg-ml-sol-or-ct-fr-vd-amb-got-x-20ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.99,
      "nome": "Bromoprida 4 Mg/ml Solucao Oral 20ml Teuto Generico",
      "url": "https://www.panvel.com/panvel/bromoprida-4-mg-ml-solucao-oral-20ml-teuto-generico/p-100669",
      "disponivel": true
    }
  },
  "med-00102": {
    "paguemenos": {
      "preco": 20.99,
      "nome": "Budesonida 32mcg Suspensão Spray 120 Doses Genérico EMS",
      "url": "https://www.paguemenos.com.br/budesonida-32mg-spray-com-120-doses-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.99,
      "nome": "Budesonida 32mcg Suspensão Spray 120 Doses Genérico EMS",
      "url": "https://www.extrafarma.com.br/budesonida-32mg-spray-com-120-doses-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 25.99,
      "nome": "Budesonida 32mcg Genérico Ems 120 Doses Spray Nasal",
      "url": "https://www.drogariasaopaulo.com.br/budesonida-32mcg-120-doses-spray-nasal-g-ems/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 24.19,
      "nome": "Budesonida 32mcg Genérico Ems 120 Doses Spray Nasal",
      "url": "https://www.drogariaspacheco.com.br/budesonida-32mcg-120-doses-spray-nasal-g-ems/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 26.59,
      "nome": "Busonid Budesonida 32mcg Spray Nasal 120 doses 6ml",
      "url": "https://www.drogariavenancio.com.br/busonid-32mcg-ache-120-doses/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.99,
      "nome": "Budesonida 32mcg Spray Nasal120 Doses Ems Generico",
      "url": "https://www.panvel.com/panvel/budesonida-32mcg-spray-nasal120-doses-ems-generico/p-872320",
      "disponivel": true
    }
  },
  "med-00104": {
    "paguemenos": {
      "preco": 96.99,
      "nome": "Alenia Fumarato de Formoterol 6mcg + Budesonida 200mcg 60 cápsulas para inalação Refil",
      "url": "https://www.paguemenos.com.br/alenia-6-200mcg-60-capsulas-refil/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 96.99,
      "nome": "Alenia Fumarato de Formoterol 6mcg + Budesonida 200mcg 60 cápsulas para inalação Refil",
      "url": "https://www.extrafarma.com.br/alenia-6-200mcg-60-capsulas-refil/p",
      "disponivel": true
    }
  },
  "med-00103": {
    "paguemenos": {
      "preco": 111.99,
      "nome": "Alenia 6/100mcg 60 Cápsulas Inalatórias + Inalador",
      "url": "https://www.paguemenos.com.br/alenia-6-100mcg-60-capsulas-mais-inalador/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 111.99,
      "nome": "Alenia 6/100mcg 60 Cápsulas Inalatórias + Inalador",
      "url": "https://www.extrafarma.com.br/alenia-6-100mcg-60-capsulas-mais-inalador/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 112.69,
      "nome": "Alenia Fumarato de Formoterol Di-Hidratado 6mcg + Budesonida 100mcg 60 Cápsulas + Inalador",
      "url": "https://www.drogariasaopaulo.com.br/alenia-6100mcg-60-capsulas-inalador/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 112.44,
      "nome": "Alenia Fumarato de Formoterol 6mcg + Budesonida 200mcg 60 Cápsulas Refil",
      "url": "https://www.drogariaspacheco.com.br/alenia-refil-6-200mcg-biosinteti-60-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 112.44,
      "nome": "Alenia 6/200mcg Aché Refil 60 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/alenia-6mcg---200mcg-ache-60-capsulas-para-inalacao/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 115.98,
      "nome": "Alenia Fumarato De Formoterol 6mcg + Budesonida 100mcg 60 Cápsulas Para Inalação + Inalador",
      "url": "https://www.panvel.com/panvel/alenia-fumarato-de-formoterol-6mcg-budesonida-100mcg-60-capsulas-para-inalacao-inalador/p-808130",
      "disponivel": true
    }
  },
  "med-00426": {
    "paguemenos": {
      "preco": 86.99,
      "nome": "Formocaps 12mcg 30 Cápsulas Inalatórias + Inalador",
      "url": "https://www.paguemenos.com.br/formocaps-12mcg-com-30-capsulasmaisinalador/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 86.99,
      "nome": "Formocaps 12mcg 30 Cápsulas Inalatórias + Inalador",
      "url": "https://www.extrafarma.com.br/formocaps-12mcg-com-30-capsulasmaisinalador/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 70.62,
      "nome": "Formocaps Fumarato De Formoterol 12mcg 30 Cápsulas Refil",
      "url": "https://www.drogariasaopaulo.com.br/formocaps-12mcg-biosinteti-30-capsulas-refil/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 63.24,
      "nome": "Formocaps Fumarato De Formoterol 12mcg 30 Cápsulas Refil",
      "url": "https://www.drogariaspacheco.com.br/formocaps-12mcg-biosinteti-30-capsulas-refil/p",
      "disponivel": true
    }
  },
  "med-00105": {
    "paguemenos": {
      "preco": 102.99,
      "nome": "Lusanda 5 Mcg/H 2 Adesivos",
      "url": "https://www.paguemenos.com.br/lusanda-5-mcg-h-2-saches/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 102.99,
      "nome": "Lusanda 5 Mcg/H 2 Adesivos",
      "url": "https://www.extrafarma.com.br/lusanda-5-mcg-h-2-saches/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 107.3,
      "nome": "Lusanda Buprenorfina 5mcg/H 2 Adesivos Transdérmicos",
      "url": "https://www.drogariasaopaulo.com.br/lusanda-buprenorfina-5mcg-h-2-adesivos-transdarmicos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 107.3,
      "nome": "Lusanda Buprenorfina 5mcg/H 2 Adesivos Transdérmicos",
      "url": "https://www.drogariaspacheco.com.br/lusanda-buprenorfina-5mcg-h-2-adesivos-transdarmicos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 111.07,
      "nome": "Lusanda 5MCG/H Adium 2 Adesivo Transdérmicos",
      "url": "https://www.drogariavenancio.com.br/lusanda-5mcg-h-2env/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 112.22,
      "nome": "Lusanda (5mcg/h) Buprenorfina 5mg 2 Adesivos Transdérmicos",
      "url": "https://www.panvel.com/panvel/lusanda-5mcg-h-buprenorfina-5mg-2-adesivos-transdermicos/p-88427",
      "disponivel": true
    }
  },
  "med-00334": {
    "paguemenos": {
      "preco": 7.49,
      "nome": "Buscopan Composto 10mg + 500mg 4 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/buscopan-composto-envelope-com-4-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.49,
      "nome": "Buscopan Composto 10mg + 500mg 4 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/buscopan-composto-envelope-com-4-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.89,
      "nome": "Mirador Cólica 10mg + 250mg Neo Química 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/mirador-colica-10mg---250mg-20com/p",
      "disponivel": true
    }
  },
  "med-00106": {
    "paguemenos": {
      "preco": 24.99,
      "nome": "Buscopan Pediátrico 10mg/ml Solução Gotas 20ml",
      "url": "https://www.paguemenos.com.br/buscopan-pediatrico-10mg-ml-gotas-20ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 24.99,
      "nome": "Buscopan Pediátrico 10mg/ml Solução Gotas 20ml",
      "url": "https://www.extrafarma.com.br/buscopan-pediatrico-10mg-ml-gotas-20ml/p",
      "disponivel": true
    }
  },
  "med-00107": {
    "paguemenos": {
      "preco": 48.99,
      "nome": "Cabergolina 0,5mg 2 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/cabergolina-0-5mg-com-2-comprimidos-generico-prati/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 48.99,
      "nome": "Cabergolina 0,5mg 2 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/cabergolina-0-5mg-com-2-comprimidos-generico-prati/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 82.05,
      "nome": "Cabergolina 0,5mg Genérico Prati-Donaduzzi 2 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cabergolina-0-5mg-generico-prati-donaduzzi-2-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 61.15,
      "nome": "Cabergolina 0,5mg Genérico Prati-Donaduzzi 2 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cabergolina-0-5mg-generico-prati-donaduzzi-2-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 39.99,
      "nome": "Cabergolina 0,5mg 2 comprimidos Prati Donaduzzi",
      "url": "https://www.drogariavenancio.com.br/cabergolina-05mg-prati-2-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 46.99,
      "nome": "Cabergolina 0,5mg 2 Cp Prati Genérico",
      "url": "https://www.panvel.com/panvel/cabergolina-05mg-2-cp-prati-generico/p-119849",
      "disponivel": true
    }
  },
  "med-00333": {
    "paguemenos": {
      "preco": 3.69,
      "nome": "Dipirona Monoidratada 500mg 10 Comprimidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/dipirona-500mg-generico-medley-om-10-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 3.69,
      "nome": "Dipirona Monoidratada 500mg 10 Comprimidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/dipirona-500mg-generico-medley-om-10-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 19.79,
      "nome": "Dipirona 500mg Genérico Prati Donaduzzi 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/dipirona-prati--donaduzzi-500mg-generico-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 10.29,
      "nome": "Dipirona 500mg Genérico Prati Donaduzzi 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/dipirona-prati--donaduzzi-500mg-generico-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 2.99,
      "nome": "Dipirona 500mg Ems Genérico 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dipirona-500mg-10-comprimidos-ems-generico/p",
      "disponivel": true
    }
  },
  "med-00332": {
    "paguemenos": {
      "preco": 3.49,
      "nome": "Dipirona Monoidratada 500mg 10 Comprimidos Genérico Prati",
      "url": "https://www.paguemenos.com.br/dipirona-sodica-500mg-com-10-comprimidos-generico-prati/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 3.49,
      "nome": "Dipirona Monoidratada 500mg 10 Comprimidos Genérico Prati",
      "url": "https://www.extrafarma.com.br/dipirona-sodica-500mg-com-10-comprimidos-generico-prati/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 7.99,
      "nome": "Dipirona Monoidratada 1g Genérico Cimed 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/dipirona-monoidratada-1g-generico-cimed-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 7.99,
      "nome": "Dipirona Monoidratada 1g Genérico Cimed 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/dipirona-monoidratada-1g-generico-cimed-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 5.29,
      "nome": "Dipirona Monoidratada 500mg Medley 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dipirona-monoidratada-500mg-medley-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 4.59,
      "nome": "Dipirona Sódica 500mg 10 Comprimidos Ems Genérico",
      "url": "https://www.panvel.com/panvel/dipirona-sodica-500mg-10-comprimidos-ems-generico/p-462000",
      "disponivel": true
    }
  },
  "med-00153": {
    "paguemenos": {
      "preco": 6.99,
      "nome": "Doricin 300mg + 35mg + 50mg 10 Comprimidos",
      "url": "https://www.paguemenos.com.br/doricin-envelope-com-10-comprimidos-novo/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.99,
      "nome": "Doricin 300mg + 35mg + 50mg 10 Comprimidos",
      "url": "https://www.extrafarma.com.br/doricin-envelope-com-10-comprimidos-novo/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.39,
      "nome": "Neosaldina Muscular Max Analgésico e Relaxante Muscular Dipirona Blister 4 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/neosaldina-muscular-max-4com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 6.91,
      "nome": "Neosaldina Muscular Max Dipirona 600mg + Citrato De Orfenadrina 70mg + Cafeína 100mg 4 Comprimidos",
      "url": "https://www.panvel.com/panvel/neosaldina-muscular-max-dipirona-600mg-citrato-de-orfenadrina-70mg-cafeina-100mg-4-comprimidos/p-90443",
      "disponivel": true
    }
  },
  "med-00108": {
    "paguemenos": {
      "preco": 11.29,
      "nome": "Dipirona 500mg + Cafeína 65mg 16 Comprimidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/dipirona-sodica-mais-cafeina-com-16-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.29,
      "nome": "Dipirona 500mg + Cafeína 65mg 16 Comprimidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/dipirona-sodica-mais-cafeina-com-16-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.99,
      "nome": "Novalgina Flash 1g Dipirona + 130mg Cafeína 8 Comprimidos Analgésico",
      "url": "https://www.drogariavenancio.com.br/novalgina-flash-8com/p",
      "disponivel": true
    }
  },
  "med-00338": {
    "paguemenos": {
      "preco": 1.59,
      "nome": "Dipirona Sódica 500mg + Cafeína 65mg 4 Comprimidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/dipirona-sodica-mais-cafeina-envelope-com-4-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1.59,
      "nome": "Dipirona Sódica 500mg + Cafeína 65mg 4 Comprimidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/dipirona-sodica-mais-cafeina-envelope-com-4-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    }
  },
  "med-00336": {
    "paguemenos": {
      "preco": 26.89,
      "nome": "Nevralgex 300mg + 30mg + 30mg 20 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/nevralgex-dc-20-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.89,
      "nome": "Nevralgex 300mg + 30mg + 30mg 20 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/nevralgex-dc-20-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00109": {
    "paguemenos": {
      "preco": 5.99,
      "nome": "Analgésico Doralgina Blister 4 Comprimidos",
      "url": "https://www.paguemenos.com.br/doralgina-envelope-com-4-comprimidos-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.99,
      "nome": "Analgésico Doralgina Blister 4 Comprimidos",
      "url": "https://www.extrafarma.com.br/doralgina-envelope-com-4-comprimidos-neo-quimica/p",
      "disponivel": true
    }
  },
  "med-00607": {
    "paguemenos": {
      "preco": 7.49,
      "nome": "Tylenol DC Multíplas Dores Paracetamol 500mg + Cafeina 65mg 4 Comprimidos",
      "url": "https://www.paguemenos.com.br/tylenol-dc-1g-multiplas-dores-com-4-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.49,
      "nome": "Tylenol DC Multíplas Dores Paracetamol 500mg + Cafeina 65mg 4 Comprimidos",
      "url": "https://www.extrafarma.com.br/tylenol-dc-1g-multiplas-dores-com-4-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.65,
      "nome": "Tylenol Dc Dor De Cabeça Paracetamol 500mg + Cafeína 65mg 4 Comprimidos",
      "url": "https://www.panvel.com/panvel/tylenol-dc-dor-de-cabeca-paracetamol-500mg-cafeina-65mg-4-comprimidos/p-99207",
      "disponivel": true
    }
  },
  "med-00112": {
    "paguemenos": {
      "preco": 141.64,
      "nome": "Ostriol 0,25mcg 30 Cápsulas Moles",
      "url": "https://www.paguemenos.com.br/ostriol-0-25mcg-30-capsulas-moles/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 141.64,
      "nome": "Ostriol 0,25mcg 30 Cápsulas Moles",
      "url": "https://www.extrafarma.com.br/ostriol-0-25mcg-30-capsulas-moles/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 134.9,
      "nome": "Ostriol Calcitriol 0,25mcg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/ostriol-calcitriol-0-25mcg-30-capsulas/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 134.9,
      "nome": "Ostriol Calcitriol 0,25mcg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/ostriol-calcitriol-0-25mcg-30-capsulas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 159.79,
      "nome": "Sigmatriol 0,25mcg Germd com 30 Cápsulas Moles",
      "url": "https://www.drogariavenancio.com.br/sigmatriol-025mcg-germd-com-30-capsulas-moles/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 172.99,
      "nome": "Sigmatriol Calcitriol 0,25mcg 30 Cápsulas Gelatinosas Moles",
      "url": "https://www.panvel.com/panvel/sigmatriol-calcitriol-025mcg-30-capsulas-gelatinosas-moles/p-945200",
      "disponivel": true
    }
  },
  "med-00113": {
    "paguemenos": {
      "preco": 58.49,
      "nome": "Candesartana Cilexetila 16mg 30 Comprimidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/candesartana-cilexetila-16mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 58.49,
      "nome": "Candesartana Cilexetila 16mg 30 Comprimidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/candesartana-cilexetila-16mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 72.15,
      "nome": "Candesartana Cilexetila 16mg Genérico Sandoz 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/candesartana-cilexetila-16mg-generico-sandoz-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 67.74,
      "nome": "Venzer Candesartana Cilexetila 16mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/venzer-16mg-libbs-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 65.99,
      "nome": "Candesartana Cilexetila 16mg Biosintética 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/candesartana-cilex-16mg-30com--g--ache/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 63.99,
      "nome": "Candesartana Cilexetila 16mg 30 Comprimidos Sandoz Genérico",
      "url": "https://www.panvel.com/panvel/candesartana-cilexetila-16mg-30-comprimidos-sandoz-generico/p-559140",
      "disponivel": true
    }
  },
  "med-00452": {
    "paguemenos": {
      "preco": 58.49,
      "nome": "Candesartana Cilexetila 16mg + Hidroclorotiazida 12,5mg 30 Comprimidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/candesartana-cilexetila-mais-hidroclotiazida-16mais12-5mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 58.49,
      "nome": "Candesartana Cilexetila 16mg + Hidroclorotiazida 12,5mg 30 Comprimidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/candesartana-cilexetila-mais-hidroclotiazida-16mais12-5mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 82.99,
      "nome": "Venzer HCT Candesartana Cilexetila 16mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/venzer-hct-16mg-12-5mg-libbs-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 70.53,
      "nome": "Venzer HCT Candesartana Cilexetila 8mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/venzer-hct-8mg-12-5mg-libbs-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 71.97,
      "nome": "Venzer Hct 8mg + 12,5mg Libbs 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/venzer-hct-8mg---125mg-libbs-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 86.93,
      "nome": "Venzer Hct Candesartana Cilexetila 8mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/venzer-hct-candesartana-cilexetila-8mg-hidroclorotiazida-125mg-30-comprimidos/p-433420",
      "disponivel": true
    }
  },
  "med-00114": {
    "paguemenos": {
      "preco": 174.99,
      "nome": "Capecitabina 150mg Com 30 Comprimidos Generico Sun Pharma",
      "url": "https://www.paguemenos.com.br/capecitabina-150mg-com-30-comprimidos-generico-sun-pharma/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 174.99,
      "nome": "Capecitabina 150mg Com 30 Comprimidos Generico Sun Pharma",
      "url": "https://www.extrafarma.com.br/capecitabina-150mg-com-30-comprimidos-generico-sun-pharma/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 317.99,
      "nome": "Capecitabina 150mg Genérico Sun Pharma 120 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/capecitabina-150mg-generico-sun-pharma-120-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 352.99,
      "nome": "Capecitabina 150mg Genérico Sun Pharma 120 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/capecitabina-150mg-generico-sun-pharma-120-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 588.29,
      "nome": "Xeloda 150mg 60 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/xeloda-150mg-60-comprimidos-revestidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 727.3,
      "nome": "Corretal Capecitabina 150mg 60 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/corretal-capecitabina-150mg-60-comprimidos-revestidos/p-872840",
      "disponivel": true
    }
  },
  "med-00115": {
    "paguemenos": {
      "preco": 69.99,
      "nome": "Moment Creme 0,025% 50g",
      "url": "https://www.paguemenos.com.br/moment-creme-0-025porcento-50g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 69.99,
      "nome": "Moment Creme 0,025% 50g",
      "url": "https://www.extrafarma.com.br/moment-creme-0-025porcento-50g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 97.28,
      "nome": "Moment Creme 0,025% 50g",
      "url": "https://www.panvel.com/panvel/moment-creme-0025-50g/p-368857",
      "disponivel": true
    }
  },
  "med-00116": {
    "paguemenos": {
      "preco": 2.69,
      "nome": "Captopril 25mg 30 Comprimidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/captopril-25mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 2.69,
      "nome": "Captopril 25mg 30 Comprimidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/captopril-25mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 3.29,
      "nome": "Captopril 25,0mg Genérico EMS  30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/captopril-250mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 3.95,
      "nome": "Captopril 25mg Genérico Cimed 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/captopril-25mg-generico-cimed-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 3.83,
      "nome": "Captopril 25mg Teuto 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/captopril-25mg-30cpr-g-teuto/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 4.49,
      "nome": "Captopril 25mg 30 Comprimidos Prati Donaduzzi Genérico",
      "url": "https://www.panvel.com/panvel/captopril-25mg-30-comprimidos-prati-donaduzzi-generico/p-518570",
      "disponivel": true
    }
  },
  "med-00117": {
    "paguemenos": {
      "preco": 8.89,
      "nome": "Carbamazepina 200mg 30 Comprimidos Genérico Teuto",
      "url": "https://www.paguemenos.com.br/carbamazepina-200mg-com-30-comprimidos-generico-teuto/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.89,
      "nome": "Carbamazepina 200mg 30 Comprimidos Genérico Teuto",
      "url": "https://www.extrafarma.com.br/carbamazepina-200mg-com-30-comprimidos-generico-teuto/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 9.05,
      "nome": "Carbamazepina 200mg Genérico União Química 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/carbamazepina-200mg-generico-uniao-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.39,
      "nome": "Carbamazepina 200mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/carbamazepina-200mg-generico-roche-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.99,
      "nome": "Carbamazepina 200mg 30 Comprimidos Teuto",
      "url": "https://www.drogariavenancio.com.br/carbamazepina-200mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 13.99,
      "nome": "Carbamazepina 200mg 20 Comprimidos Ems Generico C1",
      "url": "https://www.panvel.com/panvel/carbamazepina-200mg-20-comprimidos-ems-generico-c1/p-868810",
      "disponivel": true
    }
  },
  "med-00118": {
    "paguemenos": {
      "preco": 9.49,
      "nome": "Carbocisteína 20mg/ml Xarope Pediátrico 100ml Genérico EMS",
      "url": "https://www.paguemenos.com.br/carbocisteina-100mg-100ml-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.49,
      "nome": "Carbocisteína 20mg/ml Xarope Pediátrico 100ml Genérico EMS",
      "url": "https://www.extrafarma.com.br/carbocisteina-100mg-100ml-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.16,
      "nome": "Carbocisteína 20mg/ml Genérico Prati-Donaduzzi 100ml Xarope + Copo Medidor",
      "url": "https://www.drogariasaopaulo.com.br/carbocisteina-20mg-ml-generico-prati-donaduzzi-100ml-xarope-copo-medidor/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 18.99,
      "nome": "Carbocisteína 20mg/ml Genérico Prati-Donaduzzi 100ml Xarope + Copo Medidor",
      "url": "https://www.drogariaspacheco.com.br/carbocisteina-20mg-ml-generico-prati-donaduzzi-100ml-xarope-copo-medidor/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 15.99,
      "nome": "Carbocisteína 100mg/5ml Biosintetica Xarope Pediátrico 100ml",
      "url": "https://www.drogariavenancio.com.br/carbocisteina-100mg-5ml-xpe-fr-amb-x-100ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 11.99,
      "nome": "Carbocisteina Pediátrico 20mg 100ml Ems Genérico",
      "url": "https://www.panvel.com/panvel/carbocisteina-pediatrico-20mg-100ml-ems-generico/p-902510",
      "disponivel": true
    }
  },
  "med-00286": {
    "paguemenos": {
      "preco": 32.07,
      "nome": "Vitamina D 400UI carbonato cálcio 600mg",
      "url": "https://www.paguemenos.com.br/vitamina-d-400ui-carbonato-calcio-600mg-17y18118a15l6314/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 32.07,
      "nome": "Vitamina D 400UI carbonato cálcio 600mg",
      "url": "https://www.extrafarma.com.br/vitamina-d-400ui-carbonato-calcio-600mg-17y18118a15l6314/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.59,
      "nome": "Vitamina D3 Colecalciferol 15.000Ui 4 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/vitamina-d3-colecalciferol-15-000ui-4-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.99,
      "nome": "Vitamina D3 Colecalciferol 7.000Ui 12 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/vitamina-d3-colecalciferol-7-000ui-12-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 36.79,
      "nome": "Vitamina D3 2000 U.I + Vitamina C 1g Health Labs 90 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/vitamina-d3-vitamina-c-health-labs-90cps/p",
      "disponivel": true
    }
  },
  "med-00120": {
    "paguemenos": {
      "preco": 56.99,
      "nome": "Helleva 80mg 2 Comprimidos",
      "url": "https://www.paguemenos.com.br/helleva-80mg-com-2-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 56.99,
      "nome": "Helleva 80mg 2 Comprimidos",
      "url": "https://www.extrafarma.com.br/helleva-80mg-com-2-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 65.6,
      "nome": "Helleva Carbonato De Lodenafila 80mg 2 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/helleva-80mg-schering-plough-2-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 58.59,
      "nome": "Helleva Carbonato De Lodenafila 80mg 2 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/helleva-80mg-schering-plough-2-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 59.79,
      "nome": "Helleva Supera 2 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/helleva-supera-2-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 127.29,
      "nome": "Helleva Carbonato Iodenafil 80mg 4 Comprimidos",
      "url": "https://www.panvel.com/panvel/helleva-carbonato-iodenafil-80mg-4-comprimidos/p-955590",
      "disponivel": true
    }
  },
  "med-00121": {
    "paguemenos": {
      "preco": 26.29,
      "nome": "Carbonato de Lítio 300mg 60 Comprimidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/carbon-litio-300mg-com-60-comprimidos-generico-geolab-psicotropico-p-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.29,
      "nome": "Carbonato de Lítio 300mg 60 Comprimidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/carbon-litio-300mg-com-60-comprimidos-generico-geolab-psicotropico-p-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 26.29,
      "nome": "Carbonato de Lítio 300mg Genérico Biolab 60 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/carbonato-de-litio-300mg-generico-biolab-60-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.9,
      "nome": "Carbonato de Lítio 300mg Genérico Biolab 90 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/carbonato-de-litio-300mg-generico-biolab-90-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.37,
      "nome": "Carbonato De Lítio 300mg Eurofarma 60 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/carbonato-de-litio-300mg-eurofarma-60-comprimidos-revestidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 35.99,
      "nome": "Carbonato De Litio 300mg 60 Comprimidos Biolab Generico C1",
      "url": "https://www.panvel.com/panvel/carbonato-de-litio-300mg-60-comprimidos-biolab-generico-c1/p-101850",
      "disponivel": true
    }
  },
  "med-00126": {
    "paguemenos": {
      "preco": 17.99,
      "nome": "Ecofilm 5mg/ml Colírio 5ml",
      "url": "https://www.paguemenos.com.br/ecofilm-colirio-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.99,
      "nome": "Ecofilm 5mg/ml Colírio 5ml",
      "url": "https://www.extrafarma.com.br/ecofilm-colirio-5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 15.49,
      "nome": "Acu Fresh 5mg/ml Geolab Solução Oftálmica 10ml",
      "url": "https://www.drogariavenancio.com.br/acu-fresh-5mg-ml-geolab-solucao-oftalmica-10ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 20.38,
      "nome": "Ecofilm 0,5% Colírio 5ml",
      "url": "https://www.panvel.com/panvel/ecofilm-05-colirio-5ml/p-897630",
      "disponivel": true
    }
  },
  "med-00122": {
    "paguemenos": {
      "preco": 30.99,
      "nome": "Lacrifilm 5mg/ml Colírio 10ml",
      "url": "https://www.paguemenos.com.br/lacrifilm-colirio-10ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 30.99,
      "nome": "Lacrifilm 5mg/ml Colírio 10ml",
      "url": "https://www.extrafarma.com.br/lacrifilm-colirio-10ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 36.19,
      "nome": "Lacrifilm União Química Solução Oftálmica 10ml",
      "url": "https://www.drogariavenancio.com.br/lacrifilm-colirio-10ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 37.1,
      "nome": "Lacrifilm 5mg/ml Colírio 10ml",
      "url": "https://www.panvel.com/panvel/lacrifilm-5mg-ml-colirio-10ml/p-637080",
      "disponivel": true
    }
  },
  "med-00124": {
    "paguemenos": {
      "preco": 9.39,
      "nome": "Carisoprodol 125mg + Diclofenaco de Sódio 50mg + Paracetamol 300mg + Cafeína 30mg 15 Comprimidos Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/carisoprodol-mais-diclofenaco-de-sodio-mais-paracetamol-mais-cafeina-com-15-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.39,
      "nome": "Carisoprodol 125mg + Diclofenaco de Sódio 50mg + Paracetamol 300mg + Cafeína 30mg 15 Comprimidos Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/carisoprodol-mais-diclofenaco-de-sodio-mais-paracetamol-mais-cafeina-com-15-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 24.74,
      "nome": "Trimusk Carisoprodol 125mg + Diclofenaco Sódico 50mg + Paracetamol 300mg + Cafeína 30mg 15 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/trimusk-125mg--50mg--300mg--30mg-eurofarma-15-comprimidos-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.16,
      "nome": "Trimusk Carisoprodol 125mg + Diclofenaco Sódico 50mg + Paracetamol 300mg + Cafeína 30mg 15 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/trimusk-125mg--50mg--300mg--30mg-eurofarma-15-comprimidos-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.59,
      "nome": "Tanderalgin Delta 15 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/tanderalgin-cellera-15-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00125": {
    "paguemenos": {
      "preco": 14.19,
      "nome": "Carisoprodol 125mg + Diclofenaco Sódico 50mg + Paracetamol 300mg + Cafeína 30mg 15 Comprimidos Genérico Cellera",
      "url": "https://www.paguemenos.com.br/carisoprodol-125mg-mais-diclofenaco-sodico-50mg-mais-paracetamol-300mg-mais-cafeina-30mg-com-15-comprimidos-generico-cellera/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.19,
      "nome": "Carisoprodol 125mg + Diclofenaco Sódico 50mg + Paracetamol 300mg + Cafeína 30mg 15 Comprimidos Genérico Cellera",
      "url": "https://www.extrafarma.com.br/carisoprodol-125mg-mais-diclofenaco-sodico-50mg-mais-paracetamol-300mg-mais-cafeina-30mg-com-15-comprimidos-generico-cellera/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 11.53,
      "nome": "Infralax Paracetamol 300mg + Cafeína 30mg + Carisoprodol 125mg + Diclofenaco Sódico 50mg 15 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/infralax-ems-15-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.53,
      "nome": "Infralax Paracetamol 300mg + Cafeína 30mg + Carisoprodol 125mg + Diclofenaco Sódico 50mg 15 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/infralax-ems-15-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.39,
      "nome": "Infralax Ems 15 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/infralax-ems-15-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 15.35,
      "nome": "Flexalgin 300mg + 125mg + 50mg + 30mg - 15 Comprimidos Similar Geolab",
      "url": "https://www.panvel.com/panvel/flexalgin-300mg-125mg-50mg-30mg-15-comprimidos-similar-geolab/p-103248",
      "disponivel": true
    }
  },
  "med-00316": {
    "paguemenos": {
      "preco": 3.99,
      "nome": "Diclofenaco Sódico 50mg Com 20 Comprimidos Genérico Neo Quimica",
      "url": "https://www.paguemenos.com.br/diclofenaco-sodico-50mg-com-20-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 3.99,
      "nome": "Diclofenaco Sódico 50mg Com 20 Comprimidos Genérico Neo Quimica",
      "url": "https://www.extrafarma.com.br/diclofenaco-sodico-50mg-com-20-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.59,
      "nome": "Sodix Diclofenaco Sódico 50mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/sodix-50mg-geolab-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 13.59,
      "nome": "Sodix Diclofenaco Sódico 50mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/sodix-50mg-geolab-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 60.19,
      "nome": "Voltaren Sr Novartis 20 Comprimidos De Desintegração Técnica",
      "url": "https://www.drogariavenancio.com.br/voltaren-sr-novartis-20-comprimidos-de-desintegracao-tecnica/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 10.99,
      "nome": "Neotaren Diclofenaco Sódico 50mg 20 Comprimidos",
      "url": "https://www.panvel.com/panvel/neotaren-diclofenaco-sodico-50mg-20-comprimidos/p-822900",
      "disponivel": true
    }
  },
  "med-00127": {
    "paguemenos": {
      "preco": 10.49,
      "nome": "Carvedilol 3,125mg 30 Comprimidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/carvedilol-3-125mg-com-30-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.49,
      "nome": "Carvedilol 3,125mg 30 Comprimidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/carvedilol-3-125mg-com-30-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 18.69,
      "nome": "Carvedilol 3,125mg Genérico Biosintética 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/carvedilol-3-125mg-generico-biosintetica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 22.65,
      "nome": "Carvedilol 25mg Genérico Biolab 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/carvedilol-25mg-biolab-caixa-30-comprimidos-biolab-sanus/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 5.79,
      "nome": "Carvedilol 3,125mg Aché 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/carvedilol-3125mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 8.49,
      "nome": "Carvedilol 12,5mg 30 Comprimidos Cimed Generico",
      "url": "https://www.panvel.com/panvel/carvedilol-125mg-30-comprimidos-cimed-generico/p-106540",
      "disponivel": true
    }
  },
  "med-00128": {
    "paguemenos": {
      "preco": 113.99,
      "nome": "Ceclor 250mg/5ml Suspensão Oral 100ml + Seringa Dosadora",
      "url": "https://www.paguemenos.com.br/ceclor-250mg-100ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 113.99,
      "nome": "Ceclor 250mg/5ml Suspensão Oral 100ml + Seringa Dosadora",
      "url": "https://www.extrafarma.com.br/ceclor-250mg-100ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 42.86,
      "nome": "Cefaclor 250mg/5ml Genérico Medley Suspensão  80ml",
      "url": "https://www.drogariasaopaulo.com.br/cefaclor-250mg5ml-generico-medley-suspensao-80ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 44.17,
      "nome": "Cefaclor 250mg/5ml Genérico EMS 80ml Suspensão",
      "url": "https://www.drogariaspacheco.com.br/suspensao-cefaclor-250mg5ml-generico-ems-80ml/p",
      "disponivel": false
    }
  },
  "med-00129": {
    "paguemenos": {
      "preco": 109.99,
      "nome": "Ceclor BD 500mg 10 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.paguemenos.com.br/ceclor-bd-500mg-com-10-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 109.99,
      "nome": "Ceclor BD 500mg 10 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.extrafarma.com.br/ceclor-bd-500mg-com-10-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 110.86,
      "nome": "Ceclor BD Cefaclor 500mg 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/ceclor-bd-500-ems-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 98.97,
      "nome": "Ceclor BD Cefaclor 500mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/ceclor-bd-500-ems-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 100.99,
      "nome": "Ceclor Bd 500mg Ems 10 comprimidos",
      "url": "https://www.drogariavenancio.com.br/ceclor-ems-bd-500mg-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 99.99,
      "nome": "Ceclor Bd Cefaclor 500mg 10 Comprimidos Revestidos De Liberação Prolongada",
      "url": "https://www.panvel.com/panvel/ceclor-bd-cefaclor-500mg-10-comprimidos-revestidos-de-liberacao-prolongada/p-520010",
      "disponivel": true
    }
  },
  "med-00130": {
    "paguemenos": {
      "preco": 19.69,
      "nome": "Cefadroxil 500mg Cápsulas Com8-gn Euro",
      "url": "https://www.paguemenos.com.br/cefadroxil-500mg-capsulas-com8-gn-euro/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 19.69,
      "nome": "Cefadroxil 500mg Cápsulas Com8-gn Euro",
      "url": "https://www.extrafarma.com.br/cefadroxil-500mg-capsulas-com8-gn-euro/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 21.59,
      "nome": "Cefadroxila 500mg Genérico Eurofarma 8 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/cefadroxila-500mg-generico-eurofarma-8-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.59,
      "nome": "Cefadroxila 500mg Genérico Eurofarma 8 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/cefadroxila-500mg-generico-eurofarma-8-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 23.49,
      "nome": "Cefadroxila 8 cápsulas 500mg Ems",
      "url": "https://www.drogariavenancio.com.br/cefadroxila-500mg-8cpr-g--ab-ems/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 48.49,
      "nome": "Cefadroxila 500mg 8 Cápsulas Sandoz Genérico",
      "url": "https://www.panvel.com/panvel/cefadroxila-500mg-8-capsulas-sandoz-generico/p-458760",
      "disponivel": true
    }
  },
  "med-00131": {
    "paguemenos": {
      "preco": 39.49,
      "nome": "Cefalexina 1g 8 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/cefalexina-1g-com-08-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 39.49,
      "nome": "Cefalexina 1g 8 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/cefalexina-1g-com-08-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 9.99,
      "nome": "Cefalexina 500mg Genérico EMS 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cefalexina-500mg-generico-ems-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 5.99,
      "nome": "Cefalexina 500mg Genérico Teuto 8 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cefalexina-500mg-generico-teuto-8-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.49,
      "nome": "Cefalexina 500mg 8 Comprimidos Teuto",
      "url": "https://www.drogariavenancio.com.br/cefalexina-500mg-8-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 16.99,
      "nome": "Cefalexina 500mg 8 Capsulas União Química Genérico",
      "url": "https://www.panvel.com/panvel/cefalexina-500mg-8-capsulas-uniao-quimica-generico/p-102274",
      "disponivel": true
    }
  },
  "med-00132": {
    "paguemenos": {
      "preco": 9.49,
      "nome": "Cefalexina 500mg 10 Cápsulas Duras Genérico União Química",
      "url": "https://www.paguemenos.com.br/cefalexina-500mg-com-10-capsulas-generico-uniao-quimicamais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.49,
      "nome": "Cefalexina 500mg 10 Cápsulas Duras Genérico União Química",
      "url": "https://www.extrafarma.com.br/cefalexina-500mg-com-10-capsulas-generico-uniao-quimicamais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 46.99,
      "nome": "Keflex Cefalexina 100mg/ml 15ml Gotas",
      "url": "https://www.drogariasaopaulo.com.br/keflex-100mg-gotas-bago-15ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 49.37,
      "nome": "Keflex Cefalexina 100mg/ml 15ml Gotas",
      "url": "https://www.drogariaspacheco.com.br/keflex-100mg-gotas-bago-15ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 49.78,
      "nome": "Keflex Gotas Cefalexina 100mg Solução 15ml",
      "url": "https://www.panvel.com/panvel/keflex-gotas-cefalexina-100mg-solucao-15ml/p-82571",
      "disponivel": true
    }
  },
  "med-00134": {
    "paguemenos": {
      "preco": 142.99,
      "nome": "Terza 250mg/5ml Sabor Morango Pó para Suspensão Oral 100ml + Seringa Dosadora",
      "url": "https://www.paguemenos.com.br/terza-250mg-5ml-suspensao-oral-100ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 142.99,
      "nome": "Terza 250mg/5ml Sabor Morango Pó para Suspensão Oral 100ml + Seringa Dosadora",
      "url": "https://www.extrafarma.com.br/terza-250mg-5ml-suspensao-oral-100ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 150.9,
      "nome": "Terza Cefdinir 250mg/5ml Morango 1 Frasco 100ml + Pó Suspensão Oral + Seringa",
      "url": "https://www.drogariasaopaulo.com.br/terza-250mg-5ml-eurofarma-morango-frasco-100ml-po-suspensao-oral-seringa/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 150.9,
      "nome": "Terza Cefdinir 250mg/5ml Morango 1 Frasco 100ml + Pó Suspensão Oral + Seringa",
      "url": "https://www.drogariaspacheco.com.br/terza-250mg-5ml-eurofarma-morango-frasco-100ml-po-suspensao-oral-seringa/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 161.2,
      "nome": "Tercen 250mg/5ml Momenta Sabor Morango 100ml + 1 Adaptador + 1 Seringa Dosadora",
      "url": "https://www.drogariavenancio.com.br/tercen-250mg-5ml-sus-or-100ml--ab-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 173.38,
      "nome": "Terza Cefdinir 250mg/5ml Suspensão Oral 100ml",
      "url": "https://www.panvel.com/panvel/terza-cefdinir-250mg-5ml-suspensao-oral-100ml/p-93100",
      "disponivel": true
    }
  },
  "med-00135": {
    "paguemenos": {
      "preco": 18.29,
      "nome": "Ceftriaxona Sódica 500mg Pó para Solução Injetável Intramuscular 1 Frasco-Ampola + 1 Ampola Diluente 2ml Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/ceftriaxona-im-500mg-ampolamaisdiluente-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.29,
      "nome": "Ceftriaxona Sódica 500mg Pó para Solução Injetável Intramuscular 1 Frasco-Ampola + 1 Ampola Diluente 2ml Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/ceftriaxona-im-500mg-ampolamaisdiluente-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 99.54,
      "nome": "Rocefin IV 1g Roche 1 Ampola 10ml",
      "url": "https://www.drogariasaopaulo.com.br/rocefin-intra-venosa-roche-1-ampola-1g-diluente/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 101.99,
      "nome": "Rocefin IV 1g Roche 1 Ampola 10ml",
      "url": "https://www.drogariaspacheco.com.br/rocefin-intra-venosa-roche-1-ampola-1g-diluente/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 22.49,
      "nome": "Ceftriaxona Dissódica 1g Teuto Pó Injetável + 1 Frasco De Ampola + 3,5ml Solução Diluente",
      "url": "https://www.drogariavenancio.com.br/ceftriaxona-dissodica-1g-teuto-po-injetavel---1-frasco-de-ampola---35ml-solucao-diluente/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 43.49,
      "nome": "Ceftriaxona Dissódica 1g Pó Solução Injetável + Diluente 3,5ml Teuto Generico",
      "url": "https://www.panvel.com/panvel/ceftriaxona-dissodica-1g-po-solucao-injetavel-diluente-35ml-teuto-generico/p-105608",
      "disponivel": true
    }
  },
  "med-00136": {
    "paguemenos": {
      "preco": 43.99,
      "nome": "Triaxin 1g Pó para Solução Injetável Intramuscular 1 Frasco-Ampola + 1 Ampola Diluente 3,5ml",
      "url": "https://www.paguemenos.com.br/triaxin-de-1g-injetavel-1-ampola-antibiotico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 43.99,
      "nome": "Triaxin 1g Pó para Solução Injetável Intramuscular 1 Frasco-Ampola + 1 Ampola Diluente 3,5ml",
      "url": "https://www.extrafarma.com.br/triaxin-de-1g-injetavel-1-ampola-antibiotico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 29.34,
      "nome": "Triaxin Ceftriaxona 500mg 1 Frasco-Ampola Pó + 2ml Diluente para Solução Injetável",
      "url": "https://www.drogariasaopaulo.com.br/triaxin-ampola-500mg-eurofarma-2ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.34,
      "nome": "Triaxin Ceftriaxona 500mg 1 Frasco-Ampola Pó + 2ml Diluente para Solução Injetável",
      "url": "https://www.drogariaspacheco.com.br/triaxin-ampola-500mg-eurofarma-2ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 23.99,
      "nome": "Ceftriaxona Dissódica Hemieptaidratada 100mg Pó Para Solução Injetável Frasco de Ampola + Ampola com 3,5mL De Diluente Blausiegel",
      "url": "https://www.drogariavenancio.com.br/ceftriaxona-dissodica-hemieptaidratada-100mg-po-para-solucao-injetavel-frasco-de-ampola---ampola-com-35ml-de-diluente/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 29.58,
      "nome": "Triaxin Im Ceftriaxona Sódica 500mg 1 Ampola + Diluente",
      "url": "https://www.panvel.com/panvel/triaxin-im-ceftriaxona-sodica-500mg-1-ampola-diluente/p-305171",
      "disponivel": true
    }
  },
  "med-00137": {
    "paguemenos": {
      "preco": 21.99,
      "nome": "Celecoxibe 200mg 10 Cápsulas Duras Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/celecoxibe-200mg-com-10-capsulas-generico-ranbaxy-p-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 21.99,
      "nome": "Celecoxibe 200mg 10 Cápsulas Duras Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/celecoxibe-200mg-com-10-capsulas-generico-ranbaxy-p-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 37.79,
      "nome": "Celecoxibe 200mg Genérico Germed10 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/celecoxibe-200mg-generico-ems-10-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.29,
      "nome": "Coques Celecoxibe 200mg 10 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/coques-20mg-eurofarma-10-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10.99,
      "nome": "Celecoxibe 200mg 10 Cápsulas Teuto Genérico",
      "url": "https://www.drogariavenancio.com.br/celecoxibe-200mg-10-capsulas-teuto-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.99,
      "nome": "Celecoxibe 200mg 10 Capsulas Ranbaxy Generico C1",
      "url": "https://www.panvel.com/panvel/celecoxibe-200mg-10-capsulas-ranbaxy-generico-c1/p-107686",
      "disponivel": true
    }
  },
  "med-00139": {
    "paguemenos": {
      "preco": 11.49,
      "nome": "Cetoconazol  Anticaspa Shampoo 100ml",
      "url": "https://www.paguemenos.com.br/cetoconazol-shampoo-100ml-globo-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.49,
      "nome": "Cetoconazol  Anticaspa Shampoo 100ml",
      "url": "https://www.extrafarma.com.br/cetoconazol-shampoo-100ml-globo-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.85,
      "nome": "Cetoconazol 20mg/g + Dipropionato Betametasona 0,5mg/g Genérico EMS 30g Creme",
      "url": "https://www.drogariasaopaulo.com.br/cetoconazol-dipropionato-betametasona-20mgg-generico-ems-creme-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 13.85,
      "nome": "Cetoconazol 20mg/g + Dipropionato Betametasona 0,5mg/g Genérico EMS 30g Creme",
      "url": "https://www.drogariaspacheco.com.br/cetoconazol-dipropionato-betametasona-20mgg-generico-ems-creme-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.49,
      "nome": "Cetoconazol 200mg 10 Comprimidos Teuto",
      "url": "https://www.drogariavenancio.com.br/cetoconazol-200mg-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 10.99,
      "nome": "Cetoconazol Creme 30g Teuto Genérico",
      "url": "https://www.panvel.com/panvel/cetoconazol-creme-30g-teuto-generico/p-401341",
      "disponivel": true
    }
  },
  "med-00140": {
    "paguemenos": {
      "preco": 9.19,
      "nome": "Cetoprofeno 150mg 10 Comprimidos de Liberação Prolongada Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/cetoprofeno-150mg-com-10-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.19,
      "nome": "Cetoprofeno 150mg 10 Comprimidos de Liberação Prolongada Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/cetoprofeno-150mg-com-10-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.59,
      "nome": "Cetoprofeno 150mg Genérico Eurofarma 10 Comprimidos De Liberação Prolongada",
      "url": "https://www.drogariasaopaulo.com.br/cetoprofeno-150mg-10-comprimidos-de-liberacao-prolongada-g-eurofarma-labs/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 20.59,
      "nome": "Cetoprofeno 150mg Genérico EMS 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cetoprofeno-150mg-generico-ems-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.99,
      "nome": "Cetoprofeno 20mg/mL Solução Oral Gotas Teuto",
      "url": "https://www.drogariavenancio.com.br/cetoprofeno-20mg-ml-solucao-oral-gotas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.49,
      "nome": "Cetoprofeno 20mg/ml 20ml Medley Genérico G",
      "url": "https://www.panvel.com/panvel/cetoprofeno-20mg-ml-20ml-medley-generico-g/p-484280",
      "disponivel": true
    }
  },
  "med-00724": {
    "paguemenos": {
      "preco": 20.79,
      "nome": "Trometamol Cetorolaco 10mg Sabor Limão 10 Comprimidos Sublinguais Genérico Biosintética",
      "url": "https://www.paguemenos.com.br/trometamol-cetorolaco-10mg-limao-com-10-comprimidos-sublinguais-biosintetica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.79,
      "nome": "Trometamol Cetorolaco 10mg Sabor Limão 10 Comprimidos Sublinguais Genérico Biosintética",
      "url": "https://www.extrafarma.com.br/trometamol-cetorolaco-10mg-limao-com-10-comprimidos-sublinguais-biosintetica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 22.85,
      "nome": "Mytro Trometamol Cetorolaco 10mg 10 Comprimidos Sublinguais",
      "url": "https://www.drogariasaopaulo.com.br/mytro-10mg-myralis-10-comprimidos-sublinguais/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 19.88,
      "nome": "Mytro Trometamol Cetorolaco 10mg 10 Comprimidos Sublinguais",
      "url": "https://www.drogariaspacheco.com.br/mytro-10mg-myralis-10-comprimidos-sublinguais/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 21.12,
      "nome": "Mytro Trometamol Cetorolaco 10mg 10 Comprimidos Sublinguais",
      "url": "https://www.panvel.com/panvel/mytro-trometamol-cetorolaco-10mg-10-comprimidos-sublinguais/p-95509",
      "disponivel": true
    }
  },
  "med-00141": {
    "paguemenos": {
      "preco": 20.79,
      "nome": "Trometamol Cetorolaco 10mg 10 Comprimidos Genérico Ems",
      "url": "https://www.paguemenos.com.br/trometamol-cetorolaco-10mg-10-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.79,
      "nome": "Trometamol Cetorolaco 10mg 10 Comprimidos Genérico Ems",
      "url": "https://www.extrafarma.com.br/trometamol-cetorolaco-10mg-10-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 29.25,
      "nome": "Trometamol Cetorolaco 10mg Genérico EMS 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/trometamol-cetorolaco-10mg-generico-ems-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.25,
      "nome": "Trometamol Cetorolaco 10mg Genérico EMS 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/trometamol-cetorolaco-10mg-generico-ems-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 17.99,
      "nome": "Trometamol Cetorolaco 10mg Ems 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/trometamol-cetorolaco-10mg-10com--g--ems/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 21.49,
      "nome": "Trometamol Cetorolaco 10mg 10 Comprimidos Sublinguais Eurofarma Generico",
      "url": "https://www.panvel.com/panvel/trometamol-cetorolaco-10mg-10-comprimidos-sublinguais-eurofarma-generico/p-95334",
      "disponivel": true
    }
  },
  "med-00536": {
    "paguemenos": {
      "preco": 23.65,
      "nome": "Mecobalamina 1000mcg 30 Capsulas Genérico Biolab",
      "url": "https://www.paguemenos.com.br/mecobalamina-1000mcg-30-capsulas-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.65,
      "nome": "Mecobalamina 1000mcg 30 Capsulas Genérico Biolab",
      "url": "https://www.extrafarma.com.br/mecobalamina-1000mcg-30-capsulas-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 24.99,
      "nome": "Mecobe Mecobalamina 500mcg 30 Comprimidos Sublinguais",
      "url": "https://www.drogariasaopaulo.com.br/mecobe-mecobalamina-500mcg-30-comprimidos-sublinguais/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.9,
      "nome": "Mecobe Mecobalamina 1000mcg 30 Comprimidos sublinguais",
      "url": "https://www.drogariaspacheco.com.br/mecobe-1000mcg-myralis-30-comprimidos-sublinguais/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 17.99,
      "nome": "Mecobalamina 1mg 20 Comprimidos Sublinguais",
      "url": "https://www.drogariavenancio.com.br/mecobalamina-1mg-20-comprimidos-sublinguais/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 25.99,
      "nome": "Cobi-12 Mecobalamina 1000mcg 30 Comprimidos Sublinguais",
      "url": "https://www.panvel.com/panvel/cobi-12-mecobalamina-1000mcg-30-comprimidos-sublinguais/p-88059",
      "disponivel": true
    }
  },
  "med-00330": {
    "paguemenos": {
      "preco": 10.34,
      "nome": "Dimenidrinato 25mg/Ml + Cloridrato De Piridoxina B6 5mg/Ml 20ml Solução Gotas Genérico Vitamedic",
      "url": "https://www.paguemenos.com.br/dimenidrinato-25mg-ml-mais-cloridrato-de-piridoxina-b6-5mg-ml-20ml-solucao-gotas-generico-vitamedic/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.34,
      "nome": "Dimenidrinato 25mg/Ml + Cloridrato De Piridoxina B6 5mg/Ml 20ml Solução Gotas Genérico Vitamedic",
      "url": "https://www.extrafarma.com.br/dimenidrinato-25mg-ml-mais-cloridrato-de-piridoxina-b6-5mg-ml-20ml-solucao-gotas-generico-vitamedic/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 9.93,
      "nome": "Dimenidrinato 25mlg/ml + Cloridrato de Piridoxina 5mg/ml Genérico Vitamedic 20ml Solução Oral",
      "url": "https://www.drogariasaopaulo.com.br/dimenidrinato-25mlgml-cloridrato-de-piridoxina-5mgml-generico-vitamedic-20ml-solucao-oral/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 9.45,
      "nome": "Dimenidrinato 25mlg/ml + Cloridrato de Piridoxina 5mg/ml Genérico Vitamedic 20ml Solução Oral",
      "url": "https://www.drogariaspacheco.com.br/dimenidrinato-25mlgml-cloridrato-de-piridoxina-5mgml-generico-vitamedic-20ml-solucao-oral/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10.99,
      "nome": "Dimenidrinato + Cloridrato de Piridoxina 25mg/ml + 5mg/ml Vitamedic Gotas 20ml",
      "url": "https://www.drogariavenancio.com.br/dimenidrinato-clor-piridoxina-25mlg-ml-5mg-ml-20ml--g--vitamedic/p",
      "disponivel": true
    }
  },
  "med-00197": {
    "paguemenos": {
      "preco": 118.99,
      "nome": "Cloridrato De Donepezila 10mg + Cloridrato De Memantina 20mg 30 Comprimidos Revestido Genérico Neo Quimica",
      "url": "https://www.paguemenos.com.br/cloridrato-de-donepezila-10mg-mais-cloridrato-de-memantina-20mg-30-comprimidos-revestido-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 118.99,
      "nome": "Cloridrato De Donepezila 10mg + Cloridrato De Memantina 20mg 30 Comprimidos Revestido Genérico Neo Quimica",
      "url": "https://www.extrafarma.com.br/cloridrato-de-donepezila-10mg-mais-cloridrato-de-memantina-20mg-30-comprimidos-revestido-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 45.69,
      "nome": "Lábrea Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 10mg 7 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/labrea-duo-10mg-10mg-cristalia-7-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 35.39,
      "nome": "Lábrea Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 10mg 7 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/labrea-duo-10mg-10mg-cristalia-7-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 45.6,
      "nome": "Labrea Duo Cloridrato De Donepezila 10mg + Cloridrato De Memantina 10mg 7 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/labrea-duo-cloridrato-de-donepezila-10mg-cloridrato-de-memantina-10mg-7-comprimidos-revestidos/p-95362",
      "disponivel": true
    }
  },
  "med-00198": {
    "paguemenos": {
      "preco": 18.39,
      "nome": "Cloridrato de Donepezila 10mg + Cloridrato de Memantina 10mg 7 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/cloridrato-de-donepezila-10mg-mais-cloridrato-de-memantina-10mg-com-7-comprimidos-generico-ems-psicotropico-p-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.39,
      "nome": "Cloridrato de Donepezila 10mg + Cloridrato de Memantina 10mg 7 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/cloridrato-de-donepezila-10mg-mais-cloridrato-de-memantina-10mg-com-7-comprimidos-generico-ems-psicotropico-p-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.32,
      "nome": "Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 5mg 7 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/donila-duo-10mg-5mg-ache-7-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.72,
      "nome": "Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 5mg 7 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/donila-duo-10mg-5mg-ache-7-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 37.59,
      "nome": "Alois Duo 10mg + 5mg 7 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/alois-duo-10mg---5mg-7-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 39.24,
      "nome": "Donila Duo Cloridrato De Donepezila 10mg + Cloridrato De Memantina 5mg 7 Comprimidos",
      "url": "https://www.panvel.com/panvel/donila-duo-cloridrato-de-donepezila-10mg-cloridrato-de-memantina-5mg-7-comprimidos/p-152880",
      "disponivel": true
    }
  },
  "med-00219": {
    "paguemenos": {
      "preco": 22.59,
      "nome": "Cloridrato de Memantina 10mg 30 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/cloridrato-de-memantina-10mg-com-30-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 22.59,
      "nome": "Cloridrato de Memantina 10mg 30 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/cloridrato-de-memantina-10mg-com-30-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 117.9,
      "nome": "Alois Cloridrato De Memantina 20mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/alois-20mg-apsen-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 112.99,
      "nome": "Alois Cloridrato De Memantina 20mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/alois-20mg-apsen-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 27.49,
      "nome": "Cloridrato De Memantina 10mg Teuto 60 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-memantina-10mg-teuto-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 30.99,
      "nome": "Cloridrato De Memantina 10mg 30 Comprimido Revestido Nova Quimica Generico C1",
      "url": "https://www.panvel.com/panvel/cloridrato-de-memantina-10mg-30-comprimido-revestido-nova-quimica-generico-c1/p-98835",
      "disponivel": true
    }
  },
  "med-00143": {
    "paguemenos": {
      "preco": 26.29,
      "nome": "Fosfato Dissódico de Dexametasona 4mg + 100mg + 100mg + 5000mcg Solução Injetável 3 Ampolas de 1ml + 3 Ampolas de 2ml Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/fosfato-dissodico-de-dexametasona-4-37mg-cloridrato-de-tiamina-100mg-cloridrato-de-piridroxina-100mg-cianocobalamina-5mcg-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.29,
      "nome": "Fosfato Dissódico de Dexametasona 4mg + 100mg + 100mg + 5000mcg Solução Injetável 3 Ampolas de 1ml + 3 Ampolas de 2ml Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/fosfato-dissodico-de-dexametasona-4-37mg-cloridrato-de-tiamina-100mg-cloridrato-de-piridroxina-100mg-cianocobalamina-5mcg-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 43.99,
      "nome": "Dexa-Citoneurin NFF 100mg + 100mg + 5mg + 4,37mg P&G 3 Ampolas 1ml + 3 Ampolas 2ml",
      "url": "https://www.drogariasaopaulo.com.br/dexa-citoneurin-ampola-3x3ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 44.78,
      "nome": "Dexa-Citoneurin NFF 100mg + 100mg + 5mg + 4,37mg P&G 3 Ampolas 1ml + 3 Ampolas 2ml",
      "url": "https://www.drogariaspacheco.com.br/dexa-citoneurin-ampola-3x3ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 47.49,
      "nome": "Renovi B Plus Supera (100 + 100)mg/ml (5 + 4,37)mg Solução Injetável 3 Ampolas de 1ml e 3 Ampolas 2ml cada",
      "url": "https://www.drogariavenancio.com.br/renovi-b-plus-3amp-1ml---3amp-2ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 46.62,
      "nome": "Citobê Dexa Injetável 3 Ampolas I + 3 Ampolas Ii",
      "url": "https://www.panvel.com/panvel/citobe-dexa-injetavel-3-ampolas-i-3-ampolas-ii/p-94573",
      "disponivel": true
    }
  },
  "med-00224": {
    "paguemenos": {
      "preco": 200.99,
      "nome": "Fosfato de Sitagliptina 50mg + Cloridrato de Metformina 850mg 56 Comprimidos Revestidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/fosfato-de-sitagliptina-50mg-mais-cloridrato-de-metformina-850mg-56-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 200.99,
      "nome": "Fosfato de Sitagliptina 50mg + Cloridrato de Metformina 850mg 56 Comprimidos Revestidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/fosfato-de-sitagliptina-50mg-mais-cloridrato-de-metformina-850mg-56-comprimidos-generico-sandoz/p",
      "disponivel": true
    }
  },
  "med-00225": {
    "paguemenos": {
      "preco": 96.99,
      "nome": "Sitglu Met Cloridrato de Metformina 50mg + 1000mg 56 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/sitglu-met-50-1000mg-56-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 96.99,
      "nome": "Sitglu Met Cloridrato de Metformina 50mg + 1000mg 56 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/sitglu-met-50-1000mg-56-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 97.02,
      "nome": "Sitglu Met Sitagliptina 50mg + Cloridrato de Metformina 1000mg 56 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/sitglu-met-50mg-1000mg-ems-56-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 87.84,
      "nome": "Sitglu Met Sitagliptina 50mg + Cloridrato de Metformina 1000mg 56 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/sitglu-met-50mg-1000mg-ems-56-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 89.63,
      "nome": "Sitglu Met Cloridrato de Metformina 50 + 1000 Mg 56 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/sitglu-met-50-1000mg-56com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 112.62,
      "nome": "Sitglu Met Fosfato De Sitagliptina 50mg + Cloridrato De Metformina 1000mg 56 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/sitglu-met-fosfato-de-sitagliptina-50mg-cloridrato-de-metformina-1000mg-56-comprimidos-revestidos/p-92862",
      "disponivel": true
    }
  },
  "med-00145": {
    "paguemenos": {
      "preco": 20.99,
      "nome": "Ciclopirox Olamina 10mg/ml Solução Gotas 15ml Genérico Medley",
      "url": "https://www.paguemenos.com.br/ciclopirox-olamina-gotas-15ml-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.99,
      "nome": "Ciclopirox Olamina 10mg/ml Solução Gotas 15ml Genérico Medley",
      "url": "https://www.extrafarma.com.br/ciclopirox-olamina-gotas-15ml-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 115.82,
      "nome": "Micolamina Ciclopirox 80mg 3g Esmalte",
      "url": "https://www.drogariasaopaulo.com.br/micolamina-ciclopirox-80mg-3g-esmalte/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 53.19,
      "nome": "Micolamina 10mg/g Theraskin 20g Creme",
      "url": "https://www.drogariaspacheco.com.br/micolamina-creme-theraskin-20g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 53.19,
      "nome": "Micolamina 10mg/g Theraskin Creme Dermatológico 20g",
      "url": "https://www.drogariavenancio.com.br/micolamina-10mg-g-theraskin-20g-creme-dermatologico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 56.27,
      "nome": "Micolamina Ciclopirox De Olamina 10mg/g Creme 20g",
      "url": "https://www.panvel.com/panvel/micolamina-ciclopirox-de-olamina-10mg-g-creme-20g/p-501320",
      "disponivel": true
    }
  },
  "med-00144": {
    "paguemenos": {
      "preco": 24.29,
      "nome": "Ciclopirox Olamina 10mg/g Creme Dermatológico 20g Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/ciclopirox-olamina-creme-20g-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 24.29,
      "nome": "Ciclopirox Olamina 10mg/g Creme Dermatológico 20g Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/ciclopirox-olamina-creme-20g-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 23.09,
      "nome": "Ciclopirox Olamina 10mg/ml Genérico Germed 15ml",
      "url": "https://www.drogariasaopaulo.com.br/ciclopirox-olamina-10mg-ml-generico-germed-15ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 13.85,
      "nome": "Ciclopirox Olamina 10mg/ml Genérico Germed 15ml",
      "url": "https://www.drogariaspacheco.com.br/ciclopirox-olamina-10mg-ml-generico-germed-15ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.49,
      "nome": "Ciclopirox Olamina 10mg Medley Solução Tópica 15ml",
      "url": "https://www.drogariavenancio.com.br/ciclopirox-olamina-10mg-medley-15ml-solucao-topica/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 19.97,
      "nome": "Ciclopirox Olamina 10mg/ml Solução Tópica 15ml Germed Generico",
      "url": "https://www.panvel.com/panvel/ciclopirox-olamina-10mg-ml-solucao-topica-15ml-germed-generico/p-108491",
      "disponivel": true
    }
  },
  "med-00556": {
    "paguemenos": {
      "preco": 899.99,
      "nome": "Micofnolato De mofetila 500mg 50/cpd",
      "url": "https://www.paguemenos.com.br/micofnolato-de-mofetila-500mg-50-cpd/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 899.99,
      "nome": "Micofnolato De mofetila 500mg 50/cpd",
      "url": "https://www.extrafarma.com.br/micofnolato-de-mofetila-500mg-50-cpd/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 366.59,
      "nome": "Micofenolato de Mofetila 500mg Genérico EMS 50 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/micofenolato-de-mofetila-500mg-generico-ems-50-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 366.59,
      "nome": "Micofenolato de Mofetila 500mg Genérico EMS 50 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/micofenolato-de-mofetila-500mg-generico-ems-50-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 1133.89,
      "nome": "Cellcept 500mg 50 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/cellcept-500mg-50-comprimidos-revestidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 1027.29,
      "nome": "Micofenolato De Mofetila 500mg 50 Comprimido Revestido Farma Vision Genérico",
      "url": "https://www.panvel.com/panvel/micofenolato-de-mofetila-500mg-50-comprimido-revestido-farma-vision-generico/p-92097",
      "disponivel": true
    }
  },
  "med-00146": {
    "paguemenos": {
      "preco": 237.99,
      "nome": "Restasis 0,05% Emulsão Oftálmica 30 Flaconetes",
      "url": "https://www.paguemenos.com.br/restasis-0-05porcento-com-30-flaconetes/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 237.99,
      "nome": "Restasis 0,05% Emulsão Oftálmica 30 Flaconetes",
      "url": "https://www.extrafarma.com.br/restasis-0-05porcento-com-30-flaconetes/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 162.59,
      "nome": "Sandimmun Neoral 25mg Novartis 50 Cápsulas Gelatinosas",
      "url": "https://www.drogariasaopaulo.com.br/sandimmun-neoral-25mg-novartis-50-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 162.59,
      "nome": "Sandimmun Neoral 25mg Novartis 50 Cápsulas Gelatinosas",
      "url": "https://www.drogariaspacheco.com.br/sandimmun-neoral-25mg-novartis-50-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 206.71,
      "nome": "Sandimmun Neoral 25mg 50 cápsulas",
      "url": "https://www.drogariavenancio.com.br/sandimmun-neoral-25mg-50cps/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 242.24,
      "nome": "Sandimmun Neoral Ciclosporina 25mg 50 Cápsulas Em Gel",
      "url": "https://www.panvel.com/panvel/sandimmun-neoral-ciclosporina-25mg-50-capsulas-em-gel/p-854400",
      "disponivel": true
    }
  },
  "med-00147": {
    "paguemenos": {
      "preco": 17.89,
      "nome": "Cilostazol 50mg 30 Comprimidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/cilostazol-50mg-30-comprimidos-ems-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.89,
      "nome": "Cilostazol 50mg 30 Comprimidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/cilostazol-50mg-30-comprimidos-ems-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 31.73,
      "nome": "Vasogard Cilostazol 50mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/vasogard-50mg-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 25.96,
      "nome": "Vasogard Cilostazol 50mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/vasogard-50mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 19.49,
      "nome": "Cilostazol 50mg Ems 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/cilostazol-50mg-ems-30-comprimidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 18.49,
      "nome": "Cilostazol 50mg 30 Comprimidos Eurofarma Genérico",
      "url": "https://www.panvel.com/panvel/cilostazol-50mg-30-comprimidos-eurofarma-generico/p-990590",
      "disponivel": true
    }
  },
  "med-00148": {
    "paguemenos": {
      "preco": 14.49,
      "nome": "Cinarizina 25mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/cinarizina-25mg-com-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.49,
      "nome": "Cinarizina 25mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/cinarizina-25mg-com-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 0.01,
      "nome": "Cinarizina 25mg Genérico Ranbaxy 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cinarizina-25mg-generico-ranbaxy-30-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 0.01,
      "nome": "Cinarizina 25mg Genérico Ranbaxy 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cinarizina-25mg-generico-ranbaxy-30-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 20.65,
      "nome": "Fluxon 75mg Neo Química 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/fluxon-75mg-neo-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 16.74,
      "nome": "Cinarizina 25mg 30 Comprimidos Ranbaxy Genérico C",
      "url": "https://www.panvel.com/panvel/cinarizina-25mg-30-comprimidos-ranbaxy-generico-c/p-839800",
      "disponivel": true
    }
  },
  "med-00149": {
    "paguemenos": {
      "preco": 113.99,
      "nome": "Deposteron 200mg/2ml Injetável Com 3 Ampolas",
      "url": "https://www.paguemenos.com.br/deposteron-injetavel-200mg-2ml-com-3-ampolas-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 113.99,
      "nome": "Deposteron 200mg/2ml Injetável Com 3 Ampolas",
      "url": "https://www.extrafarma.com.br/deposteron-injetavel-200mg-2ml-com-3-ampolas-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 120.99,
      "nome": "Deposteron Cipionato De Testosterona 200mg/2ml 3 Ampolas 2ml Injetável",
      "url": "https://www.drogariasaopaulo.com.br/deposteron-injetavel-natures-plus-3-x-2ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 111.2,
      "nome": "Deposteron Cipionato De Testosterona 200mg/2ml 3 Ampolas 2ml Injetável",
      "url": "https://www.drogariaspacheco.com.br/deposteron-injetavel-natures-plus-3-x-2ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 103.99,
      "nome": "Deposteron Ems Solução Injetável 3 Ampolas 2ml",
      "url": "https://www.drogariavenancio.com.br/deposteron-c--3-ampolas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 147.08,
      "nome": "Deposteron 200mg/2ml 3 Ampolas 2ml C5",
      "url": "https://www.panvel.com/panvel/deposteron-200mg-2ml-3-ampolas-2ml-c5/p-352411",
      "disponivel": true
    }
  },
  "med-00150": {
    "paguemenos": {
      "preco": 28.59,
      "nome": "Ciprofibrato 100mg 30 Comprimidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/ciprofibrato-100mg-com-30-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 28.59,
      "nome": "Ciprofibrato 100mg 30 Comprimidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/ciprofibrato-100mg-com-30-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 28.59,
      "nome": "Ciprofibrato 100mg Genérico Cimed 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/ciprofibrato-100mg-generico-cimed-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 25.99,
      "nome": "Ciprofibrato 100mg Genérico Biosintética 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/ciprofibrato-100mg-generico-biosintetica-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 25.99,
      "nome": "Ciprofibrato 100mg Cimed 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/ciprofibrato-100mg-cimed-30-comprimidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 35.49,
      "nome": "Ciprofibrato 100mg 30 Comprimidos Eurofarma Generico",
      "url": "https://www.panvel.com/panvel/ciprofibrato-100mg-30-comprimidos-eurofarma-generico/p-100458",
      "disponivel": true
    }
  },
  "med-00152": {
    "paguemenos": {
      "preco": 57.49,
      "nome": "Indux 50mg 10 Comprimidos",
      "url": "https://www.paguemenos.com.br/indux-50mg-com-10-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 57.49,
      "nome": "Indux 50mg 10 Comprimidos",
      "url": "https://www.extrafarma.com.br/indux-50mg-com-10-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 58.79,
      "nome": "Indux Citrato De Clomifeno 50mg 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/indux-50mg-ems-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 58.79,
      "nome": "Indux Citrato De Clomifeno 50mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/indux-50mg-ems-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 66.79,
      "nome": "Indux 50mg 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/indux-50mg-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 62.3,
      "nome": "Indux Clomifeno 50mg 10 Comprimidos",
      "url": "https://www.panvel.com/panvel/indux-clomifeno-50mg-10-comprimidos/p-854910",
      "disponivel": true
    }
  },
  "med-00339": {
    "paguemenos": {
      "preco": 15.71,
      "nome": "Analgésico Nevralgex 30 Comprimidos",
      "url": "https://www.paguemenos.com.br/nevralgex-cpd-30/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.71,
      "nome": "Analgésico Nevralgex 30 Comprimidos",
      "url": "https://www.extrafarma.com.br/nevralgex-cpd-30/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 10.4,
      "nome": "Nevralgex Dip Dipirona Monoidratada 1g Enxaqueca Com 10 Comprimidos",
      "url": "https://www.panvel.com/panvel/nevralgex-dip-dipirona-monoidratada-1g-enxaqueca-com-10-comprimidos/p-96284",
      "disponivel": true
    }
  },
  "med-00154": {
    "paguemenos": {
      "preco": 11.19,
      "nome": "Hidralyte 45 2,05mg/ml + 0,98mg/ml + 22,5mg/ml + 2,16mg/ml Sabor Uva Solução Oral 500ml",
      "url": "https://www.paguemenos.com.br/hidralyte-45-uva-500-ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.19,
      "nome": "Hidralyte 45 2,05mg/ml + 0,98mg/ml + 22,5mg/ml + 2,16mg/ml Sabor Uva Solução Oral 500ml",
      "url": "https://www.extrafarma.com.br/hidralyte-45-uva-500-ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 68.21,
      "nome": "Litocit Citrato De Potássio 540mg 60 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/litocit-540mg-apsen-60-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 68.21,
      "nome": "Litocit Citrato De Potássio 540mg 60 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/litocit-540mg-apsen-60-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 17.7,
      "nome": "Hidralyte 45 Natulab Uva 500ml",
      "url": "https://www.drogariavenancio.com.br/hidralyte-45-uva-500ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 15.99,
      "nome": "Hidralyte 45 Natulab Sabor Laranja 500ml",
      "url": "https://www.panvel.com/panvel/hidralyte-45-natulab-sabor-laranja-500ml/p-92872",
      "disponivel": true
    }
  },
  "med-00155": {
    "paguemenos": {
      "preco": 5.59,
      "nome": "Citrato de Sildenafila 50mg 1 Comprimido Revestido Genérico Medley",
      "url": "https://www.paguemenos.com.br/citrato-de-sildenafila-50mg-com-1-comprimido-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.59,
      "nome": "Citrato de Sildenafila 50mg 1 Comprimido Revestido Genérico Medley",
      "url": "https://www.extrafarma.com.br/citrato-de-sildenafila-50mg-com-1-comprimido-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 4.99,
      "nome": "Videnfil Citrato De Sildenafila 50mg 4 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/videnfil-50mg-sandoz-do-brasil-4-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 4.99,
      "nome": "Videnfil Citrato De Sildenafila 50mg 4 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/videnfil-50mg-sandoz-do-brasil-4-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 5.49,
      "nome": "Citrato De Sildenafila 50mg Neo Química 2 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/citrato-de-sildenafila-50mg-neo-quimica-2-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.61,
      "nome": "Videnfil Citrato De Sildenafila 50mg 4 Comprimidos",
      "url": "https://www.panvel.com/panvel/videnfil-citrato-de-sildenafila-50mg-4-comprimidos/p-92866",
      "disponivel": true
    }
  },
  "med-00156": {
    "paguemenos": {
      "preco": 11.99,
      "nome": "Benalet 5mg + 50mg + 10mg Sabor Mel e Limão 4 Pastilhas",
      "url": "https://www.paguemenos.com.br/pastilha-mel-limao-benalet-4-pastilhas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.99,
      "nome": "Benalet 5mg + 50mg + 10mg Sabor Mel e Limão 4 Pastilhas",
      "url": "https://www.extrafarma.com.br/pastilha-mel-limao-benalet-4-pastilhas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.49,
      "nome": "Benatux Cifarma Framboesa 12 Pastilhas",
      "url": "https://www.drogariavenancio.com.br/benatux-cifarma-framboesa-12-pastilhas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 14.99,
      "nome": "Benatux Mel E Limão 12 Pastilhas",
      "url": "https://www.panvel.com/panvel/benatux-mel-e-limao-12-pastilhas/p-104485",
      "disponivel": true
    }
  },
  "med-00157": {
    "paguemenos": {
      "preco": 30.79,
      "nome": "Citrato De Tamoxifeno 10mg 30 Comprimidos Sandoz Genérico",
      "url": "https://www.paguemenos.com.br/citrato-de-tamoxifeno-10mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 30.99,
      "nome": "Citrato De Tamoxifeno 10mg 30 Comprimidos Sandoz Genérico",
      "url": "https://www.extrafarma.com.br/citrato-de-tamoxifeno-10mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 26.59,
      "nome": "Citrato de Tamoxifeno 20mg Genérico EMS 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/citrato-tamoxifeno-20mg-generico-ems-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.59,
      "nome": "Citrato de Tamoxifeno 10mg Genérico Blau 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/citrato-de-tamoxifeno-10mg-generico-blau-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 33.89,
      "nome": "Citrato de Tamoxifeno 20mg 30 Comprimidos Revestidos Blausiegel",
      "url": "https://www.drogariavenancio.com.br/citrato-de-tamoxifeno-20mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 362.26,
      "nome": "Nolvadex D Tamoxifeno 20mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/nolvadex-d-tamoxifeno-20mg-30-comprimidos/p-25551",
      "disponivel": true
    }
  },
  "med-00159": {
    "paguemenos": {
      "preco": 62.99,
      "nome": "Claritromicina 500mg 10 Comprimidos Revestidos Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/claritromicina-500mg-com-10-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 62.99,
      "nome": "Claritromicina 500mg 10 Comprimidos Revestidos Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/claritromicina-500mg-com-10-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 49.99,
      "nome": "Claritromicina 500mg Genérico Pharlab 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/claritromicina-500mg-generico-pharlab-14-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 49.9,
      "nome": "Claritromicina 500mg Genérico Pharlab 14 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/claritromicina-500mg-generico-pharlab-14-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 49.9,
      "nome": "Claritromicina 500mg Pharlab 7 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/claritromicina-500mg-7com--ab--g--pharlab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 54.49,
      "nome": "Claritromicina 500mg 7 Comprimidos Revestidos Pharlab Genérico",
      "url": "https://www.panvel.com/panvel/claritromicina-500mg-7-comprimidos-revestidos-pharlab-generico/p-94792",
      "disponivel": true
    }
  },
  "med-00162": {
    "paguemenos": {
      "preco": 19.99,
      "nome": "Urbanil 10mg 20 Comprimidos",
      "url": "https://www.paguemenos.com.br/urbanil-10mg-comprimidos20-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.99,
      "nome": "Urbanil 10mg 20 Comprimidos",
      "url": "https://www.extrafarma.com.br/urbanil-10mg-comprimidos20-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 20.05,
      "nome": "Urbanil Clobazam 10mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/urbanil-10mg-sanofi-aventis-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 16.45,
      "nome": "Urbanil Clobazam 10mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/urbanil-10mg-sanofi-aventis-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.79,
      "nome": "Urbanil 10mg 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/urbanil-10mg-20-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 17.87,
      "nome": "Urbanil Clobazam 10mg 20 Comprimidos",
      "url": "https://www.panvel.com/panvel/urbanil-clobazam-10mg-20-comprimidos/p-99333",
      "disponivel": true
    }
  },
  "med-00163": {
    "paguemenos": {
      "preco": 4.89,
      "nome": "Clonazepam 2mg 30 Comprimidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/clonazepam-2ml-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 4.89,
      "nome": "Clonazepam 2mg 30 Comprimidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/clonazepam-2ml-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 6.99,
      "nome": "Clonazepam 2mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/clonazepam-2mg-generico-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1.2,
      "nome": "Clonazepam 2mg Genérico Legrand 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/clonazepam-2mg-generico-legrand-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 6.99,
      "nome": "Clonazepam 0,5mg Medley 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/clonazepam-05mg-medley-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 8.49,
      "nome": "Clonazepam 0,5mg 30 Comprimidos Medley Genérico B1",
      "url": "https://www.panvel.com/panvel/clonazepam-05mg-30-comprimidos-medley-generico-b1/p-959910",
      "disponivel": true
    }
  },
  "med-00573": {
    "paguemenos": {
      "preco": 24.59,
      "nome": "Benzoilmetronidazol 62,5mg/g + Nistatina 25.000UI/g + Cloreto de Benzalcônio 1,25mg/g Creme Vaginal 40g 10 Aplicadores Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/benzoilmetronidazolmaisnistatinamaiscloreto-de-benzalconio-62-5mgmais25-000ui-g-creme-vaginal-com-10-aplicadores-generico-prati-donaduzzimais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 24.59,
      "nome": "Benzoilmetronidazol 62,5mg/g + Nistatina 25.000UI/g + Cloreto de Benzalcônio 1,25mg/g Creme Vaginal 40g 10 Aplicadores Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/benzoilmetronidazolmaisnistatinamaiscloreto-de-benzalconio-62-5mgmais25-000ui-g-creme-vaginal-com-10-aplicadores-generico-prati-donaduzzimais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 45.59,
      "nome": "Colpist MT Benzoilmetronidazol 62,5mg/g + Nistatina 25.000UI/g + Cloreto de Benzalcônio 1,25mg/g 40g Creme Vaginal + 10 Aplicadores",
      "url": "https://www.drogariasaopaulo.com.br/colpist-mt-creme-vaginal-apsen-40g-10-aplicadores/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 41.05,
      "nome": "Colpist MT Benzoilmetronidazol 62,5mg/g + Nistatina 25.000UI/g + Cloreto de Benzalcônio 1,25mg/g 40g Creme Vaginal + 10 Aplicadores",
      "url": "https://www.drogariaspacheco.com.br/colpist-mt-creme-vaginal-apsen-40g-10-aplicadores/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 41.89,
      "nome": "Colpist Mt Arese Creme 40g 10 Aplicadores",
      "url": "https://www.drogariavenancio.com.br/colpist-mt-creme-40g-10-aplicadores/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 51.62,
      "nome": "Colpist Mt Benzoilmetronidazol 62,5 Mg + Nistatina 25.000ui + Benzalcônio 1,25mg Creme Vaginal 40g",
      "url": "https://www.panvel.com/panvel/colpist-mt-benzoilmetronidazol-625-mg-nistatina-25000ui-benzalconio-125mg-creme-vaginal-40g/p-87911",
      "disponivel": true
    }
  },
  "med-00164": {
    "paguemenos": {
      "preco": 22.99,
      "nome": "Anti-Séptico Kuramed Spray 50ml",
      "url": "https://www.paguemenos.com.br/kuramed-spray-50ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 22.99,
      "nome": "Anti-Séptico Kuramed Spray 50ml",
      "url": "https://www.extrafarma.com.br/kuramed-spray-50ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 81.15,
      "nome": "Bio-Vagin Benzoilmetronidazol 62,5mg/g + Nistatina 25000UI/g + Cloreto de Benzalcônio 1,25mg/g 40g Creme Vaginal + 10 Aplicadores",
      "url": "https://www.drogariasaopaulo.com.br/bio-vagin-40g-creme-10-aplicadores/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 66.14,
      "nome": "Bio-Vagin Benzoilmetronidazol 62,5mg/g + Nistatina 25000UI/g + Cloreto de Benzalcônio 1,25mg/g 40g Creme Vaginal + 10 Aplicadores",
      "url": "https://www.drogariaspacheco.com.br/bio-vagin-40g-creme-10-aplicadores/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 67.49,
      "nome": "Bio-vagin Creme Vaginal 40g 10 Aplicadores",
      "url": "https://www.drogariavenancio.com.br/bio-vagin-creme-vaginal-40g-10-aplicadores/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 81.82,
      "nome": "Bio Vagin Benzoilmetronidazol 250mg + Nistatina 100.000ui + Benzalcônio 5mg Creme Vaginal 40g",
      "url": "https://www.panvel.com/panvel/bio-vagin-benzoilmetronidazol-250mg-nistatina-100000ui-benzalconio-5mg-creme-vaginal-40g/p-611150",
      "disponivel": true
    }
  },
  "med-00233": {
    "paguemenos": {
      "preco": 7.01,
      "nome": "Cloridrato De Nafazolina Solução Nasal 30ml Genérico Ems",
      "url": "https://www.paguemenos.com.br/cloridrato-de-nafazolina-solucao-nasal-30ml-generico-ems/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 7.01,
      "nome": "Cloridrato De Nafazolina Solução Nasal 30ml Genérico Ems",
      "url": "https://www.extrafarma.com.br/cloridrato-de-nafazolina-solucao-nasal-30ml-generico-ems/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 7.99,
      "nome": "Narix Cloreto De Benzalcônio 0,5mg/ml 30ml Solução Nasal",
      "url": "https://www.drogariasaopaulo.com.br/narix-30ml-adulto/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 4.2,
      "nome": "Narix Cloreto De Benzalcônio 0,5mg/ml 30ml Solução Nasal",
      "url": "https://www.drogariaspacheco.com.br/narix-30ml-adulto/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.29,
      "nome": "Narix Cimed Solução Nasal 30ml",
      "url": "https://www.drogariavenancio.com.br/narix-cimed-30ml-solucao-nasal/p",
      "disponivel": true
    }
  },
  "med-00165": {
    "paguemenos": {
      "preco": 17.49,
      "nome": "Dinill 0,1mg/ml + 17mg/ml Solução Oftálmica 10ml",
      "url": "https://www.paguemenos.com.br/dinill-solucao-ocular-10ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.49,
      "nome": "Dinill 0,1mg/ml + 17mg/ml Solução Oftálmica 10ml",
      "url": "https://www.extrafarma.com.br/dinill-solucao-ocular-10ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 19.99,
      "nome": "Higicler Latinofarma Colírio 10ml",
      "url": "https://www.drogariavenancio.com.br/higicler-latinofarma-colirio---10ml/p",
      "disponivel": true
    }
  },
  "med-00166": {
    "paguemenos": {
      "preco": 17.59,
      "nome": "Slow-K 600mg 20 Drágeas",
      "url": "https://www.paguemenos.com.br/slow-k-600mg-com-20-drageas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.59,
      "nome": "Slow-K 600mg 20 Drágeas",
      "url": "https://www.extrafarma.com.br/slow-k-600mg-com-20-drageas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 18.5,
      "nome": "Slow-K Cloreto De Potássio 600mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/slow-k-600mg-20-drageas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.71,
      "nome": "Slow-K Cloreto De Potássio 600mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/slow-k-600mg-20-drageas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 27.99,
      "nome": "Slow-K 600mg 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/slow-k-600mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 18,
      "nome": "Slow-k Cloreto De Potássio 600mg 20 Drágeas",
      "url": "https://www.panvel.com/panvel/slow-k-cloreto-de-potassio-600mg-20-drageas/p-6831",
      "disponivel": true
    }
  },
  "med-00514": {
    "paguemenos": {
      "preco": 8.99,
      "nome": "Coristina D Congest Descongestionante com Bronfeniramina e Fenilefrina Blister 4 Comprimidos",
      "url": "https://www.paguemenos.com.br/coristina-d-congest-maleato-de-clorfeniramina-12mg-mais-cloridrato-fenillefrina-15mg-4-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.99,
      "nome": "Coristina D Congest Descongestionante com Bronfeniramina e Fenilefrina Blister 4 Comprimidos",
      "url": "https://www.extrafarma.com.br/coristina-d-congest-maleato-de-clorfeniramina-12mg-mais-cloridrato-fenillefrina-15mg-4-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 7.49,
      "nome": "Descongestionante Neosoro Adulto Cloridrato De Nafazolina 30ml Solução Nasal",
      "url": "https://www.drogariasaopaulo.com.br/neosoro-adulto-solucao-nasal-30ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 7.49,
      "nome": "Descongestionante Neosoro Adulto Cloridrato De Nafazolina 30ml Solução Nasal",
      "url": "https://www.drogariaspacheco.com.br/neosoro-adulto-solucao-nasal-30ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.78,
      "nome": "Descongestionante Nasal Neosoro Adulto Frasco 30 ml",
      "url": "https://www.drogariavenancio.com.br/neosoro-hypera-30ml-solucao-gotas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 5.29,
      "nome": "Descongestionante Nasal Narix Cloridrato Nafazolina 0,5mg/ml Solução Nasal 30ml",
      "url": "https://www.panvel.com/panvel/descongestionante-nasal-narix-cloridrato-nafazolina-05mg-ml-solucao-nasal-30ml/p-119396",
      "disponivel": true
    }
  },
  "med-00168": {
    "paguemenos": {
      "preco": 8.89,
      "nome": "Cloridrato de Ambroxol 6mg/ml Xarope Adulto 120ml + Copo Dosador Genérico Geolab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-ambroxol-xarope-adulto-6mg-ml-frasco-120ml-mais-copo-dosador-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.89,
      "nome": "Cloridrato de Ambroxol 6mg/ml Xarope Adulto 120ml + Copo Dosador Genérico Geolab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-ambroxol-xarope-adulto-6mg-ml-frasco-120ml-mais-copo-dosador-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.99,
      "nome": "Cloridrato De Ambroxol 15mg/5ml Genérico Prati Donaduzz Tutti Frutti 120ml Xarope + Copo Dosador",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-ambroxol-15mg-5ml-generico-prati-donaduzz-tutti-frutti-120ml-xarope-copo-dosasor/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.71,
      "nome": "Cloridrato De Ambroxol 15mg/5ml Genérico Prati Donaduzz Tutti Frutti 120ml Xarope + Copo Dosador",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-ambroxol-15mg-5ml-generico-prati-donaduzz-tutti-frutti-120ml-xarope-copo-dosasor/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10.99,
      "nome": "Cloridrato de Ambroxol 6mg/ml Cimed Xarope 120ml",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-ambroxol-cimed-6mg-xarope-120ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.87,
      "nome": "Sedavan Adulto Xarope 100ml",
      "url": "https://www.panvel.com/panvel/sedavan-adulto-xarope-100ml/p-554330",
      "disponivel": true
    }
  },
  "med-00169": {
    "paguemenos": {
      "preco": 14.89,
      "nome": "Cloridrato De Amiodarona 100mg Com 30 Comprimidos Genérico Geolab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-amiodarona-100mg-com-30-comprimidos-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.89,
      "nome": "Cloridrato De Amiodarona 100mg Com 30 Comprimidos Genérico Geolab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-amiodarona-100mg-com-30-comprimidos-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 14.95,
      "nome": "Cloridrato de Amiodarona 100mg Genérico Medley 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-amiodarona-100mg-generico-medley-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.62,
      "nome": "Cloridrato de Amiodarona 100mg Genérico Ranbaxy 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-amiodarona-100mg-generico-ranbaxy-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 19.97,
      "nome": "Cloridrato de Amiodarona Geolab 100mg 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/clor-amiodarona-100mg-30com--g--geolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 19.49,
      "nome": "Cloridrato De Amiodarona 100mg 30 Comprimidos Geolab Generico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-amiodarona-100mg-30-comprimidos-geolab-generico/p-115958",
      "disponivel": true
    }
  },
  "med-00170": {
    "paguemenos": {
      "preco": 7.49,
      "nome": "Cloridrato de Amitriptilina 25mg 20 Comprimidos Revestidos Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/cloridrato-de-amitriptilina-25mg-com-20-comprimidos-generico-eurofarma-p-c1/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 7.49,
      "nome": "Cloridrato de Amitriptilina 25mg 20 Comprimidos Revestidos Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/cloridrato-de-amitriptilina-25mg-com-20-comprimidos-generico-eurofarma-p-c1/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 14.66,
      "nome": "Cloridrato De Amitriptilina 25mg Genérico Neo Química 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-amitriptilina-25mg-generico-neo-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 3.49,
      "nome": "Cloridrato De Amitriptilina 25mg Genérico Neo Química 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-amitriptilina-25mg-generico-neo-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.44,
      "nome": "Cloridrato De Amitriptilina 25mg 30 Comprimidos Revestidos Medley",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-amitriptilina-25mg-c-30-comp-rev/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 19.37,
      "nome": "Amytril Cloridrato De Amitriptilina 10mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/amytril-cloridrato-de-amitriptilina-10mg-30-comprimidos-revestidos/p-566570",
      "disponivel": true
    }
  },
  "med-00171": {
    "paguemenos": {
      "preco": 89.09,
      "nome": "Unha Sana 50mg/ml Esmalte 2,5ml + 10 Espátulas",
      "url": "https://www.paguemenos.com.br/unha-sana-50mg-2-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 89.09,
      "nome": "Unha Sana 50mg/ml Esmalte 2,5ml + 10 Espátulas",
      "url": "https://www.extrafarma.com.br/unha-sana-50mg-2-5ml/p",
      "disponivel": true
    }
  },
  "med-00173": {
    "paguemenos": {
      "preco": 30.99,
      "nome": "Atentah 10mg 30 Cápsulas Duras",
      "url": "https://www.paguemenos.com.br/atentah-10mg-com-10-capsulas-psicotropico-p-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 30.99,
      "nome": "Atentah 10mg 30 Cápsulas Duras",
      "url": "https://www.extrafarma.com.br/atentah-10mg-com-10-capsulas-psicotropico-p-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 31.43,
      "nome": "Atentah Cloridrato de Atomoxetina 10mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/atentah-10mg-apsen-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 28.41,
      "nome": "Atentah Cloridrato de Atomoxetina 10mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/atentah-10mg-apsen-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 28.99,
      "nome": "Atentah 10mg Apsen 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/atentah-10mg-30cap/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 30.64,
      "nome": "Atentah Cloridrato De Atomoxetina 10mg 30 Cápsulas Duras",
      "url": "https://www.panvel.com/panvel/atentah-cloridrato-de-atomoxetina-10mg-30-capsulas-duras/p-94921",
      "disponivel": true
    }
  },
  "med-00174": {
    "paguemenos": {
      "preco": 6.39,
      "nome": "Flogoral 3mg Sabor Laranja 4 Pastilhas",
      "url": "https://www.paguemenos.com.br/flogoral-laranja-3-0mg-com-4-pastilhas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.39,
      "nome": "Flogoral 3mg Sabor Laranja 4 Pastilhas",
      "url": "https://www.extrafarma.com.br/flogoral-laranja-3-0mg-com-4-pastilhas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 41.19,
      "nome": "Flogo-Rosa Cloridrato De Benzidamina 50mg/ml 100ml Solução Ginecológica",
      "url": "https://www.drogariasaopaulo.com.br/flogo-rosa-liquido-50mgml-100ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 35.47,
      "nome": "Flogo-Rosa Cloridrato De Benzidamina 50mg/ml 100ml Solução Ginecológica",
      "url": "https://www.drogariaspacheco.com.br/flogo-rosa-liquido-50mgml-100ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.19,
      "nome": "Angino-Rub Cloridrato de Benzidamina 3mg sabor Menta 12 Pastilhas",
      "url": "https://www.drogariavenancio.com.br/angino-rub-cloridrato-de-benzidamina-3mg-sabor-menta-12-pastilhas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 6.9,
      "nome": "Flogoral Menta 3mg 4 Pastilhas",
      "url": "https://www.panvel.com/panvel/flogoral-menta-3mg-4-pastilhas/p-550100",
      "disponivel": true
    }
  },
  "med-00175": {
    "paguemenos": {
      "preco": 10.49,
      "nome": "Dicloridrato de Betaistina 16mg 30 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/dicloridrato-de-betaistina-16mg-com-30-comprimidos-generico-prati/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.49,
      "nome": "Dicloridrato de Betaistina 16mg 30 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/dicloridrato-de-betaistina-16mg-com-30-comprimidos-generico-prati/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 22.9,
      "nome": "Labirin Dicloridrato De Betaistina 16mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/labirin-apsen-16mg-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 22.9,
      "nome": "Labirin Dicloridrato De Betaistina 16mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/labirin-apsen-16mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 14.99,
      "nome": "Dicloridrato De Betaistina 16mg Aché 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dicloridrato-de-betaistina-16mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 16.99,
      "nome": "Dicloridrato De Betaistina 16mg 30 Comprimidos Prati Donaduzzi Generico",
      "url": "https://www.panvel.com/panvel/dicloridrato-de-betaistina-16mg-30-comprimidos-prati-donaduzzi-generico/p-108023",
      "disponivel": true
    }
  },
  "med-00318": {
    "paguemenos": {
      "preco": 10.49,
      "nome": "Dicloridrato de Betaistina 16mg 30 Comprimidos Genérico Biosintética",
      "url": "https://www.paguemenos.com.br/dicloridrato-de-betaistina-16mg-com-30-comprimidos-generico-biosintetica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.49,
      "nome": "Dicloridrato de Betaistina 16mg 30 Comprimidos Genérico Biosintética",
      "url": "https://www.extrafarma.com.br/dicloridrato-de-betaistina-16mg-com-30-comprimidos-generico-biosintetica/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 56.59,
      "nome": "Betadine Xr 32mg 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/betadine-xr-32mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 79.1,
      "nome": "Betadine Xr Dicloridrato De Betaistina 48mg 30 Comprimidos De Liberação Prolongada",
      "url": "https://www.panvel.com/panvel/betadine-xr-dicloridrato-de-betaistina-48mg-30-comprimidos-de-liberacao-prolongada/p-110717",
      "disponivel": true
    }
  },
  "med-00176": {
    "paguemenos": {
      "preco": 15.59,
      "nome": "Cloridrato de Betaxolol 5mg/ml Solução Oftálmica 5ml Genérico Geolab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-betaxolol-5mg-ml-solucao-5ml-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.59,
      "nome": "Cloridrato de Betaxolol 5mg/ml Solução Oftálmica 5ml Genérico Geolab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-betaxolol-5mg-ml-solucao-5ml-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 15.59,
      "nome": "Cloridrato De Betaxolol 5mg/ml Genérico Geolab 5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-betaxolol-solucao-oftalmica-5mg-ml-generico-geolab-5ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 18.47,
      "nome": "Cloridrato De Betaxolol 5mg/ml Genérico Geolab 5ml Solução Oftálmica",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-betaxolol-solucao-oftalmica-5mg-ml-generico-geolab-5ml/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 24.39,
      "nome": "Visoptic 5mg/ml Gbio Solução Oftalmica 5ml",
      "url": "https://www.drogariavenancio.com.br/visoptic-5mg-ml-gbio-solucao-oftalmica-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 25,
      "nome": "Visoptic Cloridrato De Betaxolol 5mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/visoptic-cloridrato-de-betaxolol-5mg-ml-colirio-5ml/p-100174",
      "disponivel": true
    }
  },
  "med-00177": {
    "paguemenos": {
      "preco": 38.99,
      "nome": "Cinetol 2mg 80 Comprimidos",
      "url": "https://www.paguemenos.com.br/cinetol-2mg-com-80-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 38.99,
      "nome": "Cinetol 2mg 80 Comprimidos",
      "url": "https://www.extrafarma.com.br/cinetol-2mg-com-80-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 30.77,
      "nome": "Akineton Cloridrato De Biperideno 4mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/akineton-retard-4mg-30-drageas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 27.82,
      "nome": "Akineton Cloridrato De Biperideno 4mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/akineton-retard-4mg-30-drageas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 28.39,
      "nome": "Akineton Retard 4mg Bago 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/akineton-retard-4mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 30.63,
      "nome": "Akineton 4mg 30 Comprimidos Revestidos Liberacao Retardada C1",
      "url": "https://www.panvel.com/panvel/akineton-4mg-30-comprimidos-revestidos-liberacao-retardada-c1/p-156434",
      "disponivel": true
    }
  },
  "med-00178": {
    "paguemenos": {
      "preco": 14.99,
      "nome": "Cloridrato de Bromexina 4mg/5ml Xarope Pediátrico 120ml Genérico Medley",
      "url": "https://www.paguemenos.com.br/cloridrato-de-bromexina-xarope-pediatrico-120ml-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.99,
      "nome": "Cloridrato de Bromexina 4mg/5ml Xarope Pediátrico 120ml Genérico Medley",
      "url": "https://www.extrafarma.com.br/cloridrato-de-bromexina-xarope-pediatrico-120ml-generico-medley/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.26,
      "nome": "Cloridrato De Bromexina 4mg/5ml Ems Infantil Xarope Sabor Morango 120ml",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-bromexina-4mg-5ml-ems-infantil-xarope-sabor-morando-120ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.99,
      "nome": "Cloridrato De Bromexina Xarope Pediátrico 4mg/5ml 120ml Medley Genérico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-bromexina-xarope-pediatrico-4mg-5ml-120ml-medley-generico/p-90815",
      "disponivel": true
    }
  },
  "med-00179": {
    "paguemenos": {
      "preco": 27.99,
      "nome": "Cloridrato de Bupropiona 150mg 60 Comprimidos Revestidos de Liberação Lenta Genérico Geolab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-bupropiona-150mg-com-60-comprimidos-psicotropicos-p-c1-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 27.99,
      "nome": "Cloridrato de Bupropiona 150mg 60 Comprimidos Revestidos de Liberação Lenta Genérico Geolab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-bupropiona-150mg-com-60-comprimidos-psicotropicos-p-c1-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 27.48,
      "nome": "Cloridrato de Bupropiona 150mg Genérico Nova Química 60 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/bupropiona-150mg-60-comprimidos-revestidos-de-liberacao-pro-mepha/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.9,
      "nome": "Cloridrato de Bupropiona 150mg Genérico Geolab 60 comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-bupropiona-150mg-generico-geolab-60-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 44.99,
      "nome": "Cloridrato de Bupropiona 150mg Geolab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-bupropiona-150mg-geolab-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 89.56,
      "nome": "Bup Xl Cloridrato De Bupropiona 150mg 30 Comprimidos Revestidos De Liberação Prolongada 24h",
      "url": "https://www.panvel.com/panvel/bup-xl-cloridrato-de-bupropiona-150mg-30-comprimidos-revestidos-de-liberacao-prolongada-24h/p-106280",
      "disponivel": true
    }
  },
  "med-00180": {
    "paguemenos": {
      "preco": 33.44,
      "nome": "Stima 5mg 20 Comprimidos",
      "url": "https://www.paguemenos.com.br/stima-5mg-20-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 33.44,
      "nome": "Stima 5mg 20 Comprimidos",
      "url": "https://www.extrafarma.com.br/stima-5mg-20-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 30.99,
      "nome": "Stima Cloridrato de Buspirona 5mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/stima-cloridrato-buspirona-5mg-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.59,
      "nome": "Stima Cloridrato de Buspirona 5mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/stima-cloridrato-buspirona-5mg-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 32.41,
      "nome": "Stima 5mg 20 comprimidos",
      "url": "https://www.drogariavenancio.com.br/stima-5mg-20com--c1-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 32.75,
      "nome": "Stima Cloridrato De Buspirona 5mg 20 Comprimidos",
      "url": "https://www.panvel.com/panvel/stima-cloridrato-de-buspirona-5mg-20-comprimidos/p-87288",
      "disponivel": true
    }
  },
  "med-00181": {
    "paguemenos": {
      "preco": 7.19,
      "nome": "Cloridrato de Ciclobenzaprina 5mg 15 Comprimidos Revestidos Genérico Germed",
      "url": "https://www.paguemenos.com.br/ciclobenzaprina-5mg-com-15-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.19,
      "nome": "Cloridrato de Ciclobenzaprina 5mg 15 Comprimidos Revestidos Genérico Germed",
      "url": "https://www.extrafarma.com.br/ciclobenzaprina-5mg-com-15-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 11.59,
      "nome": "Cloridrato de Ciclobenzaprina 10mg Genérico Cimed 15 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-ciclobenzaprina-10mg-generico-cimed-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.99,
      "nome": "Cloridrato de Ciclobenzaprina 5mg Genérico Cimed 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-ciclobenzaprina-5mg-generico-cimed-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.79,
      "nome": "Cloridrato De Ciclobenzaprina 5mg Cimed 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-ciclobenzaprina-5mg-cimed-30-comprimidos-revestidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.49,
      "nome": "Cloridrato De Ciclobenzaprina 5mg 15 Comprimidos Revestidos Germed Generico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-ciclobenzaprina-5mg-15-comprimidos-revestidos-germed-generico/p-108446",
      "disponivel": true
    }
  },
  "med-00183": {
    "paguemenos": {
      "preco": 23.59,
      "nome": "Clonixinato de Lisina 125mg + Cloridrato de Ciclobenzaprina 5mg 15 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/clonixinato-de-lisina-mais-cloridrato-de-ciclobenzaprina-125mg-mais-5mg-com-15-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.59,
      "nome": "Clonixinato de Lisina 125mg + Cloridrato de Ciclobenzaprina 5mg 15 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/clonixinato-de-lisina-mais-cloridrato-de-ciclobenzaprina-125mg-mais-5mg-com-15-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 55.09,
      "nome": "Dolamin Flex Clonixinato de Lisina 125mg + Cloridrato de Ciclobenzaprina 5mg 12 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/dolamin-flex-125mg50mg-farmoquimica-12-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 55.65,
      "nome": "Dolamin Flex Clonixinato de Lisina 125mg + Cloridrato de Ciclobenzaprina 5mg 12 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/dolamin-flex-125mg50mg-farmoquimica-12-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 54.98,
      "nome": "Dolamin Flex Clonixinato Lisina 125mg + Cloridrato De Ciclobenzaprina 5mg 12 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/dolamin-flex-clonixinato-lisina-125mg-cloridrato-de-ciclobenzaprina-5mg-12-comprimidos-revestidos/p-856350",
      "disponivel": true
    }
  },
  "med-00186": {
    "paguemenos": {
      "preco": 15.49,
      "nome": "Cobapetit 0,8mg/ml + 0,2mg/ml Sabor Cereja Xarope 100ml",
      "url": "https://www.paguemenos.com.br/cobapetit-0-8mg-ml-mais-4mg-g-xarope-100ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.49,
      "nome": "Cobapetit 0,8mg/ml + 0,2mg/ml Sabor Cereja Xarope 100ml",
      "url": "https://www.extrafarma.com.br/cobapetit-0-8mg-ml-mais-4mg-g-xarope-100ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.09,
      "nome": "Cobapetit 0,8mg/ml + 4mg/g Xarope + Sachês Com 5g + Copo Medidor Cifarma 100ml",
      "url": "https://www.drogariavenancio.com.br/cobapetit-08mg-ml---4mg-g-xarope---saches-com-5g---copo-medidor-cifarma-100ml/p",
      "disponivel": true
    }
  },
  "med-00187": {
    "paguemenos": {
      "preco": 15.19,
      "nome": "Cloridrato de Ciprofloxacino 500mg 14 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/gen-cl-ciprofloxacino-500mg-14cp-rev-prati/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.19,
      "nome": "Cloridrato de Ciprofloxacino 500mg 14 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/gen-cl-ciprofloxacino-500mg-14cp-rev-prati/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 6.99,
      "nome": "Ciprofloxacino 500mg Genérico Cimed 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/ciprofloxacino-500mg-generico-cimed-14-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 2.97,
      "nome": "Cloridrato de Ciprofloxacino 500mg Genérico Sandoz 14 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-ciprofloxacino-400mg-generico-sandoz-do-brasil-15-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 17.49,
      "nome": "Cloridrato De Ciprofloxacino 500mg Pharlab 14 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-ciprofloxacino-500mg-pharlab-14-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 33.66,
      "nome": "Maxiflox 0,35% Cloridrato De Ciprofloxacino 3,5mg/g Colírio 5ml",
      "url": "https://www.panvel.com/panvel/maxiflox-035-cloridrato-de-ciprofloxacino-35mg-g-colirio-5ml/p-489520",
      "disponivel": true
    }
  },
  "med-00188": {
    "paguemenos": {
      "preco": 15.19,
      "nome": "Cloridrato de Ciprofloxacino 500mg 14 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/cloridrato-de-ciprofloxacino-500mg-com-14-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.19,
      "nome": "Cloridrato de Ciprofloxacino 500mg 14 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/cloridrato-de-ciprofloxacino-500mg-com-14-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 34.29,
      "nome": "Ciloxan 0,3% Cloridrato De Ciprofloxacino 3,5mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/ciloxan-03-cloridrato-de-ciprofloxacino-35mg-ml-colirio-5ml/p-190659",
      "disponivel": true
    }
  },
  "med-00259": {
    "paguemenos": {
      "preco": 31.79,
      "nome": "Cloridrato De Sibutramina 15mg Eurofarma 30 Cápsulas Genérico",
      "url": "https://www.paguemenos.com.br/cloridrato-de-sibutramina-15mg-com-30-capsulas-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 31.79,
      "nome": "Cloridrato De Sibutramina 15mg Eurofarma 30 Cápsulas Genérico",
      "url": "https://www.extrafarma.com.br/cloridrato-de-sibutramina-15mg-com-30-capsulas-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.68,
      "nome": "Cloridrato De Sibutramina Monoidratado 15mg Genérico Legrand 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-sibutramina-monoidratado-15mg-generico-legrand-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 9.43,
      "nome": "Cloridrato De Sibutramina Monoidratado 15mg Genérico Legrand 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-sibutramina-monoidratado-15mg-generico-legrand-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 27.99,
      "nome": "Cloridrato De Sibutramina Monoidratado 15mg Eurofarma 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-sibutramina-monoidratado-15mg-eurofarma-30-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 102.51,
      "nome": "Sibus Sibutramina 15mg 60 Cápsulas",
      "url": "https://www.panvel.com/panvel/sibus-sibutramina-15mg-60-capsulas/p-438140",
      "disponivel": true
    }
  },
  "med-00189": {
    "paguemenos": {
      "preco": 28.59,
      "nome": "Cloridrato de Clindamicina 300mg 16 Cápsulas Duras Genérico União Química",
      "url": "https://www.paguemenos.com.br/cloridrato-de-clindamicina-300mg-com-16-capsulas-generico-uniao-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 28.59,
      "nome": "Cloridrato de Clindamicina 300mg 16 Cápsulas Duras Genérico União Química",
      "url": "https://www.extrafarma.com.br/cloridrato-de-clindamicina-300mg-com-16-capsulas-generico-uniao-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 30.99,
      "nome": "Cloridrato de Clindamicina 300mg Genérico União 16 Cápsulas Gelatinosas",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-clindamicina-300mg-generico-uniao-16-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 30.99,
      "nome": "Cloridrato de Clindamicina 300mg Genérico União 16 Cápsulas Gelatinosas",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-clindamicina-300mg-generico-uniao-16-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 38.99,
      "nome": "Cloridrato de Clindamicina 300mg Teuto 16 Cápsulas Duras",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-clindamicina-300-mg-teuto-16-capsulas-dura/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 47.49,
      "nome": "Cloridrato De Clindamicina 300mg 16 Capsulas Uniao Quimica Generico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-clindamicina-300mg-16-capsulas-uniao-quimica-generico/p-105881",
      "disponivel": true
    }
  },
  "med-00326": {
    "paguemenos": {
      "preco": 15.99,
      "nome": "Dicloridrato de Pramipexol 0,125mg 30 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/dicloridrato-de-pramipexol-0-125mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.99,
      "nome": "Dicloridrato de Pramipexol 0,125mg 30 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/dicloridrato-de-pramipexol-0-125mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 14.27,
      "nome": "Dicloridrato de Pramipexol 0,125mg Genérico Biosintética 30 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/dicloridrato-de-pramipexol-0-125mg-generico-biosintetica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.4,
      "nome": "Quera Dicloridrato de Pramipexol 0,125mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/quera-1mg-cristalia-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 19.99,
      "nome": "Dicloridrato de Pramipexol 0,125mg 30 Comprimidos Prati Donaduzzi",
      "url": "https://www.drogariavenancio.com.br/dicloridrato-de-pramipexol-pati-donaduzzi-0125mg-30-comprimidos-/p",
      "disponivel": true
    }
  },
  "med-00325": {
    "paguemenos": {
      "preco": 25.99,
      "nome": "Dicloridrato de Pramipexol 0,25mg 30 Comprimidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/dicloridrato-de-pramipexol-0-250mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 25.99,
      "nome": "Dicloridrato de Pramipexol 0,25mg 30 Comprimidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/dicloridrato-de-pramipexol-0-250mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.39,
      "nome": "Stabil Dicloridrato De Pramipexol 0,125mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/stabil-0-125mg-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 30.99,
      "nome": "Stabil Dicloridrato De Pramipexol 0,125mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/stabil-0-125mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 76.34,
      "nome": "Quera LP 0,375mg Cristalia 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/quera-lp-0375mg-30-capsulas/p",
      "disponivel": true
    }
  },
  "med-00190": {
    "paguemenos": {
      "preco": 23.49,
      "nome": "Cloridrato De Clomipramina 25mg Com 20 Comprimidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/cloridrato-de-clomipramina-25mg-com-20-comprimidos-generico-sandoz/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 23.49,
      "nome": "Cloridrato De Clomipramina 25mg Com 20 Comprimidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/cloridrato-de-clomipramina-25mg-com-20-comprimidos-generico-sandoz/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 25.59,
      "nome": "Cloridrato de Clomipramina 25mg Genérico Sandoz 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-clomipramina-25mg-generico-sandoz-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 2.06,
      "nome": "Cloridrato de Clomipramina 25mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-clomipramina-25mg-20-comprimidos-generico/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.54,
      "nome": "Cloridrato De Clomipramina 25mg 20 Comprimidos Sandoz",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-clomipramina-25mg-20-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 65.07,
      "nome": "Anafranil Cloridrato De Clomipramina 25mg 20 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/anafranil-cloridrato-de-clomipramina-25mg-20-comprimidos-revestidos/p-93061",
      "disponivel": true
    }
  },
  "med-00191": {
    "paguemenos": {
      "preco": 9.39,
      "nome": "Amplictil 25mg 20 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/amplictil-25mg-comprimidos20-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.39,
      "nome": "Amplictil 25mg 20 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/amplictil-25mg-comprimidos20-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 9.4,
      "nome": "Amplictil Cloridrato De Clorpromazina 25mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/amplictil-25mg-sanofi-aventis-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 8.82,
      "nome": "Amplictil Cloridrato De Clorpromazina 25mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/amplictil-25mg-sanofi-aventis-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9,
      "nome": "Amplictil 25mg Sanofi 20 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/amplictil-25mg-sanofi-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 10.5,
      "nome": "Amplictil 25mg 20 Comprimidos Revestidos C1",
      "url": "https://www.panvel.com/panvel/amplictil-25mg-20-comprimidos-revestidos-c1/p-200123",
      "disponivel": true
    }
  },
  "med-00192": {
    "paguemenos": {
      "preco": 58.99,
      "nome": "Empozze 30mg 6 Comprimidos",
      "url": "https://www.paguemenos.com.br/empozze-30mg-6-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 58.99,
      "nome": "Empozze 30mg 6 Comprimidos",
      "url": "https://www.extrafarma.com.br/empozze-30mg-6-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 58.2,
      "nome": "Empozze Cloridrato de Dapoxetina 30mg 6 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/empozze-30mg-ems-6-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 53.2,
      "nome": "Prosoy Cloridrato de Dapoxetina 30mg 6 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/prosoy-cloridrato-de-dapoxetina-fqm-6-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 54.29,
      "nome": "Prosoy 30mg Fqm 6 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/prosoy-30mg-fqm-6-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 61.44,
      "nome": "Empozze Cloridrato De Dapoxetina 30mg 6 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/empozze-cloridrato-de-dapoxetina-30mg-6-comprimidos-revestidos/p-89853",
      "disponivel": true
    }
  },
  "med-00193": {
    "paguemenos": {
      "preco": 50.49,
      "nome": "Lenix 50mg 14 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/lenix-50mg-com-14-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 50.49,
      "nome": "Lenix 50mg 14 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/lenix-50mg-com-14-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 50.59,
      "nome": "Lenix Cloridrato De Difenidramina 50mg 14 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/lenix-50mg-apsen-14-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 48.99,
      "nome": "Lenix Cloridrato De Difenidramina 50mg 14 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/lenix-50mg-apsen-14-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 49.99,
      "nome": "Lenix 50mg Apsen 14 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/lenix-50mg-14com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 57.06,
      "nome": "Lenix Cloridrato De Difenidramina 50mg 14 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/lenix-cloridrato-de-difenidramina-50mg-14-comprimidos-revestidos/p-94478",
      "disponivel": true
    }
  },
  "med-00194": {
    "paguemenos": {
      "preco": 18.99,
      "nome": "Cloridrato de Diltiazem 30mg 50 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/cloridrato-de-diltiazem-30mg-com-50-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.99,
      "nome": "Cloridrato de Diltiazem 30mg 50 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/cloridrato-de-diltiazem-30mg-com-50-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 24.6,
      "nome": "Cloridrato de Diltiazem 60mg Genérico EMS 25 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-diltiazem-60mg-generico-ems-25-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 20.89,
      "nome": "Cloridrato de Diltiazem 60mg Genérico EMS 25 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-diltiazem-60mg-generico-ems-25-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 25.6,
      "nome": "Cloridrato De Diltiazem 30mg Ems 50 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-diltiazem-30mg-ems-50-comprimidos-revestidos/p",
      "disponivel": true
    }
  },
  "med-00196": {
    "paguemenos": {
      "preco": 24.99,
      "nome": "Donepezil 10mg Com 30 Comprimidos Generico Sandoz",
      "url": "https://www.paguemenos.com.br/donepezil-10mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 24.99,
      "nome": "Donepezil 10mg Com 30 Comprimidos Generico Sandoz",
      "url": "https://www.extrafarma.com.br/donepezil-10mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 47.48,
      "nome": "Cloridrato de Donepezila 10mg Genérico Ranbaxy 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-donepezila-10mg-generico-ranbaxy-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 9.8,
      "nome": "Cloridrato de Donepezila 10mg Genérico Ranbaxy 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-donepezila-10mg-generico-ranbaxy-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 39.9,
      "nome": "Cloridrato De Donepezila 5mg Biosintética 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-donepezila-5mg-biosintetica-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 57.22,
      "nome": "Donila Cloridrato De Donepezila 10mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/donila-cloridrato-de-donepezila-10mg-30-comprimidos/p-645600",
      "disponivel": true
    }
  },
  "med-00199": {
    "paguemenos": {
      "preco": 41.99,
      "nome": "Cloridrato de Dorzolamida 20mg/ml Solução Oftálmica 5ml Genérico EMS",
      "url": "https://www.paguemenos.com.br/cloridrato-de-dorzolamida-solucao-oftalmica-5ml-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 41.99,
      "nome": "Cloridrato de Dorzolamida 20mg/ml Solução Oftálmica 5ml Genérico EMS",
      "url": "https://www.extrafarma.com.br/cloridrato-de-dorzolamida-solucao-oftalmica-5ml-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 51.25,
      "nome": "Cloridrato de Dorzolamida 2% Genérico EMS 5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-dorzolamida-2-generico-ems-5ml-solucao-oftalmica/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 44.98,
      "nome": "Cloridrato de Dorzolamida 20mg/ml + Maleato de Timolol 5mg/ml Genérico Legrand 5ml 1 Frasco Gotejador",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-dorzolamida---maleato-de-timolol-20mg-ml---5mg-ml-generico-legrand-1-frasco/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 53.89,
      "nome": "Andrum 20mg/ml Solução Oftálmica 5ml",
      "url": "https://www.drogariavenancio.com.br/andrum-20mg-ml-solucao-oftalmica-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 62.15,
      "nome": "Andrum Cloridrato De Dorzolamida 20mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/andrum-cloridrato-de-dorzolamida-20mg-ml-colirio-5ml/p-103138",
      "disponivel": true
    }
  },
  "med-00531": {
    "paguemenos": {
      "preco": 41.99,
      "nome": "Cloridrato de Dorzolamida 20mg/ml + Maleato de Timolol 5mg/ml Solução Oftálmica 5ml Genérico EMS",
      "url": "https://www.paguemenos.com.br/cloridrato-de-dorzolamida-mais-maleato-de-timolol-5ml-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 41.99,
      "nome": "Cloridrato de Dorzolamida 20mg/ml + Maleato de Timolol 5mg/ml Solução Oftálmica 5ml Genérico EMS",
      "url": "https://www.extrafarma.com.br/cloridrato-de-dorzolamida-mais-maleato-de-timolol-5ml-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 123.12,
      "nome": "Dorzal MT Cloridrato de Dorzolamida 20mg/ml + Maleato de Timolol 5mg/ml 5ml",
      "url": "https://www.drogariasaopaulo.com.br/dorzal-mt-solucao-oftalmica-5ml-legrand-pharma/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 116.89,
      "nome": "Dorzal MT Cloridrato de Dorzolamida 20mg/ml + Maleato de Timolol 5mg/ml 5ml",
      "url": "https://www.drogariaspacheco.com.br/dorzal-mt-solucao-oftalmica-5ml-legrand-pharma/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 81.79,
      "nome": "Drusolol 20mg + 5ml Genom",
      "url": "https://www.drogariavenancio.com.br/drusolol-genom-5ml-solucao-oftalmica-esteril/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 98.3,
      "nome": "Drusolol Cloridrato De Dorzolamida 20mg/ml + Maleato De Timolol 5mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/drusolol-cloridrato-de-dorzolamida-20mg-ml-maleato-de-timolol-5mg-ml-colirio-5ml/p-578660",
      "disponivel": true
    }
  },
  "med-00200": {
    "paguemenos": {
      "preco": 41.99,
      "nome": "Cloridrato Dorzolamida 20mg +maleato De Timolol 5mg 5ml Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/cloridrato-dorzolamida-20mg-maismaleato-de-timolol-5mg-5ml-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 41.99,
      "nome": "Cloridrato Dorzolamida 20mg +maleato De Timolol 5mg 5ml Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/cloridrato-dorzolamida-20mg-maismaleato-de-timolol-5mg-5ml-generico-ranbaxy/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 57.99,
      "nome": "Cloridrato de Dorzolamida + Maleato de Timolol 20mg/mL + 5mg/mL 1 frasco gotejador 5mL Ems",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-dorzolamida-maleato-de-timolol-20mg-ml-5mg-ml-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 55.49,
      "nome": "Cloridrato De Dorzolamida + Maleato De Timolol 20mg + 5mg Colírio 5ml Ems Genérico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-dorzolamida-maleato-de-timolol-20mg-5mg-colirio-5ml-ems-generico/p-571990",
      "disponivel": true
    }
  },
  "med-00201": {
    "paguemenos": {
      "preco": 21.99,
      "nome": "Hiclato de Doxiciclina 100mg 15 Comprimidos Revestidos Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-doxiciclina-100mg-com-15-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 21.99,
      "nome": "Hiclato de Doxiciclina 100mg 15 Comprimidos Revestidos Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-doxiciclina-100mg-com-15-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 22.04,
      "nome": "Cloridrato de Doxiciclina 100mg Genérico Sandoz 15 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-doxiciclina-100mg-generico-sandoz-15-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 22.53,
      "nome": "Doxiclin Cloridrato De Doxiciclina 100mg 15 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/doxiclin-100mg-pharlab-15-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 22.99,
      "nome": "Cloridrato De Doxiciclina 100mg Pharlab 15 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-doxiciclina-100mg-pharlab-15-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 24.39,
      "nome": "Doxiclin Cloridrato De Doxiciclina 100mg 15 Comprimidos Pharlab",
      "url": "https://www.panvel.com/panvel/doxiclin-cloridrato-de-doxiciclina-100mg-15-comprimidos-pharlab/p-104223",
      "disponivel": true
    }
  },
  "med-00202": {
    "paguemenos": {
      "preco": 52.49,
      "nome": "Cloridrato de Duloxetina 30mg 15 Cápsulas Duras de Liberação Retardada Genérico Multilab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-duloxetina-30mg-com-15-capsulas-generico-multilab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 52.49,
      "nome": "Cloridrato de Duloxetina 30mg 15 Cápsulas Duras de Liberação Retardada Genérico Multilab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-duloxetina-30mg-com-15-capsulas-generico-multilab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 77.62,
      "nome": "Sympta Cloridrato de Duloxetina 30mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/sympta-30mg-eurofarma-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 81.6,
      "nome": "Sympta Cloridrato de Duloxetina 30mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/sympta-30mg-eurofarma-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 47.7,
      "nome": "Cloridrato de Duloxetina 30mg União Química 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/duloxetina-30mg-30cap--c1--g--uniao-quimica/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 49.99,
      "nome": "Cloridrato De Duloxetina 30mg 30 Cápsulas De Liberação Retardada Eurofarma Generico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-duloxetina-30mg-30-capsulas-de-liberacao-retardada-eurofarma-generico/p-99294",
      "disponivel": true
    }
  },
  "med-00203": {
    "paguemenos": {
      "preco": 36.99,
      "nome": "Talerc 10mg Com 10 Comprimidos",
      "url": "https://www.paguemenos.com.br/talerc-10mg-com-10-comprimidos/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 36.99,
      "nome": "Talerc 10mg Com 10 Comprimidos",
      "url": "https://www.extrafarma.com.br/talerc-10mg-com-10-comprimidos/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 39,
      "nome": "Talerc 10mg Aché 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/talerc-10mg-ache-10-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 36.16,
      "nome": "Talerc 10mg Aché 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/talerc-10mg-ache-10-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 72.49,
      "nome": "Relestat 0,5mg Allergan 5ml Solução Oftálmica",
      "url": "https://www.drogariavenancio.com.br/relestat-05mg-allergan-5ml-solucao-oftalmica/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 82.78,
      "nome": "Relestat 0,05% Cloridrato De Epinastina 0,5mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/relestat-005-cloridrato-de-epinastina-05mg-ml-colirio-5ml/p-926850",
      "disponivel": true
    }
  },
  "med-00205": {
    "paguemenos": {
      "preco": 10.29,
      "nome": "Naldecon Noite Paracetamol 800mg + Cloridrato de Fenilefrina 20mg + Maleato de Carbinoxamina 4mg 4 Comprimidos Blíster",
      "url": "https://www.paguemenos.com.br/naldecon-multi-–-blister-4-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.29,
      "nome": "Naldecon Noite Paracetamol 800mg + Cloridrato de Fenilefrina 20mg + Maleato de Carbinoxamina 4mg 4 Comprimidos Blíster",
      "url": "https://www.extrafarma.com.br/naldecon-multi-–-blister-4-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.55,
      "nome": "Naldecon Multi Paracetamol 800mg + Cloridrato Fenilefrina 20mg 4 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/naldecon-multi-4-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.39,
      "nome": "Naldecon Multi Paracetamol 800mg + Cloridrato Fenilefrina 20mg 4 Comprimidos",
      "url": "https://www.panvel.com/panvel/naldecon-multi-paracetamol-800mg-cloridrato-fenilefrina-20mg-4-comprimidos/p-104960",
      "disponivel": true
    }
  },
  "med-00606": {
    "paguemenos": {
      "preco": 9.99,
      "nome": "Paracetamol 15ml Genérico Medsaúde",
      "url": "https://www.paguemenos.com.br/paracetamol-15-ml-generico-med-saude/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.99,
      "nome": "Paracetamol 15ml Genérico Medsaúde",
      "url": "https://www.extrafarma.com.br/paracetamol-15-ml-generico-med-saude/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 1.45,
      "nome": "Paracetamol 500mg + Fosfato de Codeína 30mg Genérico Eurofarma 12 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/paracetamol-fosfato-de-codeina-500mg-30mg-generico-eurofarma-60ml-suspensao/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1.44,
      "nome": "Paracetamol 500mg + Codeína 30mg Genérico Biolab 12 comprimidos",
      "url": "https://www.drogariaspacheco.com.br/paracetamol-500mg-codeina-30mg-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 3.49,
      "nome": "Paracetamol 750mg Ems Genérico 4 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/paracetamol-750mg-4-comprimidos-ems-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 2.49,
      "nome": "Paracetamol 750mg 4 Comprimidos Neoquímica Genérico",
      "url": "https://www.panvel.com/panvel/paracetamol-750mg-4-comprimidos-neoquimica-generico/p-836220",
      "disponivel": true
    }
  },
  "med-00255": {
    "paguemenos": {
      "preco": 13.89,
      "nome": "Paracetamol 500mg + Cloridrato de Pseudoefedrina 30mg 24 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/paracetamolmaiscloridrato-de-pseudoeferina-500mgmais30mg-com-24-comprimidos-revestidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.89,
      "nome": "Paracetamol 500mg + Cloridrato de Pseudoefedrina 30mg 24 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/paracetamolmaiscloridrato-de-pseudoeferina-500mgmais30mg-com-24-comprimidos-revestidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.99,
      "nome": "Resfegripe Sinus Paracetamol 500mg + Cloridrato de Pseudoefedrina 30 mg 24 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/resfegripe-sinus-paracetamol-500mg-cloridrato-de-pseudoefedrina-30-mg-24-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.99,
      "nome": "Resfegripe Sinus Paracetamol 500mg + Cloridrato de Pseudoefedrina 30 mg 24 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/resfegripe-sinus-paracetamol-500mg-cloridrato-de-pseudoefedrina-30-mg-24-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.07,
      "nome": "Paracetamol + Cloridrato de Pseudoefedrina 500 + 30mg Ems 24 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/paracetamol-clor-pseudoefedrina-500mg-30mg-24cpr/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 22.21,
      "nome": "Tylenol Sinus Paracetamol 500mg + Cloridrato Pseudoefedrina 30mg 24 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/tylenol-sinus-paracetamol-500mg-cloridrato-pseudoefedrina-30mg-24-comprimidos-revestidos/p-888240",
      "disponivel": true
    }
  },
  "med-00608": {
    "paguemenos": {
      "preco": 18.89,
      "nome": "Cloridrato De Tramadol 37,5mg + Paracetamol 325mg 10 Comprimidos Genérico Aché",
      "url": "https://www.paguemenos.com.br/cloridrato-de-tramadol-37-5mg-mais-paracetamol-325mg-10-comprimidos-generico-ache/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.89,
      "nome": "Cloridrato De Tramadol 37,5mg + Paracetamol 325mg 10 Comprimidos Genérico Aché",
      "url": "https://www.extrafarma.com.br/cloridrato-de-tramadol-37-5mg-mais-paracetamol-325mg-10-comprimidos-generico-ache/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.05,
      "nome": "Atrace Cloridrato de Tramadol 37,5mg + Paracetamol 325mg 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/atrace-37-5mg--325mg-momenta-farma-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.05,
      "nome": "Atrace Cloridrato de Tramadol 37,5mg + Paracetamol 325mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/atrace-37-5mg--325mg-momenta-farma-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 32.99,
      "nome": "Gésico Duo 37,5mg + 325mg 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/gesico-duo-375mg---325mg-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 39.37,
      "nome": "Gésico Duo Cloridrato De Tramadol 37,5mg + Paracetamol 325mg 10 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/gesico-duo-cloridrato-de-tramadol-375mg-paracetamol-325mg-10-comprimidos-revestidos/p-110635",
      "disponivel": true
    }
  },
  "med-00206": {
    "paguemenos": {
      "preco": 9.69,
      "nome": "Cloridrato de Fexofenadina 180mg 10 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/cloridrato-de-fexofenadina-180mg-medley-caixa-com-10-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.69,
      "nome": "Cloridrato de Fexofenadina 180mg 10 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/cloridrato-de-fexofenadina-180mg-medley-caixa-com-10-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.29,
      "nome": "Cloridrato de Fexofenadina 180mg Genérico Ranbaxy 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-fexofenadina-180mg-generico-ranbaxy-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 12.79,
      "nome": "Cloridrato de Fexofenadina 180mg Genérico Ranbaxy 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-fexofenadina-180mg-generico-ranbaxy-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.99,
      "nome": "Cloridrato de Fexofenadina Cimed 120mg 10 comprimidos revestidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-fexofenadina-cimed-120mg-10-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 18.01,
      "nome": "Cloridrato De Fexofenadina 6 Mg/ml 60ml Nova Quimica Genérico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-fexofenadina-6-mg-ml-60ml-nova-quimica-generico/p-90995",
      "disponivel": true
    }
  },
  "med-00208": {
    "paguemenos": {
      "preco": 6796.99,
      "nome": "Cloridrato De Fingolimode 0,5mg Com 14 Capsúlas",
      "url": "https://www.paguemenos.com.br/cloridrato-de-fingolimode-0-5mg-com-14-capsulas/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 6796.99,
      "nome": "Cloridrato De Fingolimode 0,5mg Com 14 Capsúlas",
      "url": "https://www.extrafarma.com.br/cloridrato-de-fingolimode-0-5mg-com-14-capsulas/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 6067.59,
      "nome": "Cloridrato de Fingolimode 0,5mg Genérico EMS 28 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-fingolimode-0-5mg-generico-ems-28-capsulas/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 6067.59,
      "nome": "Cloridrato de Fingolimode 0,5mg Genérico EMS 28 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-fingolimode-0-5mg-generico-ems-28-capsulas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 7953.71,
      "nome": "Cloridrato De Fingolimode 0,5mg com 28 Cápsulas Ems",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-fingolimode-05mg-com-28-capsulas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 8506.03,
      "nome": "Cloridrato De Fingolimode 0,5mg 28 Capsulas Duras Ems Generico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-fingolimode-05mg-28-capsulas-duras-ems-generico/p-120356",
      "disponivel": true
    }
  },
  "med-00209": {
    "paguemenos": {
      "preco": 3.99,
      "nome": "Cloridrato De Fluoxetina 20mg 30 Comprimidos Genérico Prati Donaduzzi",
      "url": "https://www.paguemenos.com.br/cloridrato-de-fluoxetina-20mg-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 3.99,
      "nome": "Cloridrato De Fluoxetina 20mg 30 Comprimidos Genérico Prati Donaduzzi",
      "url": "https://www.extrafarma.com.br/cloridrato-de-fluoxetina-20mg-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 5.99,
      "nome": "Cloridrato de Fluoxetina 20mg Genérico Legrand 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-fluoxetina-20mg-legrand-teuto-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 2.99,
      "nome": "Cloridrato De Fluoxetina 20mg Genérico Medquímica 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-fluoxetina-20mg-generico-medquimica-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 6.99,
      "nome": "Cloridrato De Fluoxetina 20mg Com 30 Cápsulas Teuto",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-fluoxetina-20mg-com-30-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 17.99,
      "nome": "Cloridrato De Fluoxetina 20mg 30 Cápsulas Eurofarma Genérico C1",
      "url": "https://www.panvel.com/panvel/cloridrato-de-fluoxetina-20mg-30-capsulas-eurofarma-generico-c1/p-94566",
      "disponivel": true
    }
  },
  "med-00210": {
    "paguemenos": {
      "preco": 17.19,
      "nome": "Cloridrato de Hidroxizina 2mg/ml Solução Oral 100ml Genérico Globo",
      "url": "https://www.paguemenos.com.br/cloridrato-de-hidroxizina-2mg-100ml-globo-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.19,
      "nome": "Cloridrato de Hidroxizina 2mg/ml Solução Oral 100ml Genérico Globo",
      "url": "https://www.extrafarma.com.br/cloridrato-de-hidroxizina-2mg-100ml-globo-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 24.59,
      "nome": "Cloridrato De Hidroxizina 10mg/5ml Genérico Globo Pharma 100ml",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-hidroxizina-10mg-5ml-generico-globo-pharma-100ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 24.19,
      "nome": "Cloridrato de Hidroxizina 2mg/ml Genérico Legrand 120ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-hidroxizina-xarope-generico-legrand-120ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 18.99,
      "nome": "Cloridrato de Hidroxizina Solução 2mg/ml 120ml Germed Pharma",
      "url": "https://www.drogariavenancio.com.br/clor-hidroxizina-2mg-ml-sol-or-120ml-g-germed/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 19.49,
      "nome": "Cloridrato De Hidroxizina 10mg/5ml Solução Oral 100ml Globo Genérico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-hidroxizina-10mg-5ml-solucao-oral-100ml-globo-generico/p-93774",
      "disponivel": true
    }
  },
  "med-00321": {
    "paguemenos": {
      "preco": 17.19,
      "nome": "Dicloridrato de Hidroxizina 2mg/ml Solução Oral 120ml + Copo Dosador Genérico Geolab",
      "url": "https://www.paguemenos.com.br/dicloridrato-de-hidroxizina-solucao-oral-2mg-ml-frasco-120ml-mais-copo-dosador-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.19,
      "nome": "Dicloridrato de Hidroxizina 2mg/ml Solução Oral 120ml + Copo Dosador Genérico Geolab",
      "url": "https://www.extrafarma.com.br/dicloridrato-de-hidroxizina-solucao-oral-2mg-ml-frasco-120ml-mais-copo-dosador-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 22.89,
      "nome": "Dicloridrato De Hidroxizina 2mg/ml Genérico Medquimica 100ml Com Copo dosador",
      "url": "https://www.drogariasaopaulo.com.br/dicloridrato-de-hidroxizina-2mg-ml-generico-medquimica-100ml-com-copo-dosador/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 28.43,
      "nome": "Dicloridrato De Hidroxizina 2mg/ml Genérico Medquimica 100ml Com Copo dosador",
      "url": "https://www.drogariaspacheco.com.br/dicloridrato-de-hidroxizina-2mg-ml-generico-medquimica-100ml-com-copo-dosador/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 38.99,
      "nome": "Dicloridrato De Hidroxizina 25mg 30 Comprimidos Nova Quimica Generico",
      "url": "https://www.panvel.com/panvel/dicloridrato-de-hidroxizina-25mg-30-comprimidos-nova-quimica-generico/p-106690",
      "disponivel": true
    }
  },
  "med-00461": {
    "paguemenos": {
      "preco": 48.59,
      "nome": "Pergo 2mg/ml Solução Oral 120ml + Copo Dosador",
      "url": "https://www.paguemenos.com.br/pergo-2mg-ml-solucao-oral-120ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 48.59,
      "nome": "Pergo 2mg/ml Solução Oral 120ml + Copo Dosador",
      "url": "https://www.extrafarma.com.br/pergo-2mg-ml-solucao-oral-120ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 52.78,
      "nome": "Pergo Cloridrato De Hidroxizina 2mg/ml 120ml Solução Oral",
      "url": "https://www.drogariasaopaulo.com.br/pergo-solucao-oral-2mg-ml-eurofarma-120ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 45.17,
      "nome": "Pergo Cloridrato De Hidroxizina 2mg/ml 120ml Solução Oral",
      "url": "https://www.drogariaspacheco.com.br/pergo-solucao-oral-2mg-ml-eurofarma-120ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 46.09,
      "nome": "Pergo Eurofarma 120ml Solução Oral",
      "url": "https://www.drogariavenancio.com.br/pergo-eurofarma-120ml-solucao-oral/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 49.15,
      "nome": "Pergo Cloridrato Hidroxizina 2mg/ml Solução Oral 120ml",
      "url": "https://www.panvel.com/panvel/pergo-cloridrato-hidroxizina-2mg-ml-solucao-oral-120ml/p-813170",
      "disponivel": true
    }
  },
  "med-00211": {
    "paguemenos": {
      "preco": 39.79,
      "nome": "Cronobê 5000mcg Solução Injetável 2 Ampolas 2,5ml",
      "url": "https://www.paguemenos.com.br/cronobe-5000mg-com-2-ampolas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 39.79,
      "nome": "Cronobê 5000mcg Solução Injetável 2 Ampolas 2,5ml",
      "url": "https://www.extrafarma.com.br/cronobe-5000mg-com-2-ampolas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 44.06,
      "nome": "Cronobê Cloridrato de Hidroxocobalamina 5000mcg 2 Ampolas Injetáveis",
      "url": "https://www.drogariasaopaulo.com.br/cronobe-injetavel-5000mcg-2-ampolas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 34.98,
      "nome": "Cronobê Cloridrato de Hidroxocobalamina 5000mcg 2 Ampolas Injetáveis",
      "url": "https://www.drogariaspacheco.com.br/cronobe-injetavel-5000mcg-2-ampolas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 40.34,
      "nome": "Vitamina B12 2.000mcg/ml Biolab Solução Injetável 2 ampolas de 2,5ml cada",
      "url": "https://www.drogariavenancio.com.br/vitamina-b12-2000mcg-ml-sol-inj-2amp-2-5ml-biolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.41,
      "nome": "Cronobê Complex Intramuscular Vitamina B1 + Vitamina B6 + Vitamina B12 3 Ampolas 2ml Cada",
      "url": "https://www.panvel.com/panvel/cronobe-complex-intramuscular-vitamina-b1-vitamina-b6-vitamina-b12-3-ampolas-2ml-cada/p-100376",
      "disponivel": true
    }
  },
  "med-00212": {
    "paguemenos": {
      "preco": 157.99,
      "nome": "Ivahart 5mg 60 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/ivahart-5mg-com-60-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 157.99,
      "nome": "Ivahart 5mg 60 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/ivahart-5mg-com-60-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 164.62,
      "nome": "Ivahart Cloridrato De Ivabradina 5mg 60 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/ivahart-5mg-torrent-50-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 152.77,
      "nome": "Ivahart Cloridrato De Ivabradina 5mg 60 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/ivahart-5mg-torrent-50-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 155.89,
      "nome": "Ivahart 5mg Torrent 60 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/ivahart-5mg-torrent-60-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 172.22,
      "nome": "Ivahart Cloridrato De Ivabradina 5mg 60 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/ivahart-cloridrato-de-ivabradina-5mg-60-comprimidos-revestidos/p-92243",
      "disponivel": true
    }
  },
  "med-00213": {
    "paguemenos": {
      "preco": 81.99,
      "nome": "Cloridrato de Lercanidipino 10mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/cloridrato-de-lercanidipino-10mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 81.99,
      "nome": "Cloridrato de Lercanidipino 10mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/cloridrato-de-lercanidipino-10mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 68.85,
      "nome": "Zanidip 20mg Medley 15 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/zanidip-20mg-medley-15-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 68.27,
      "nome": "Zanidip 20mg Medley 15 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/zanidip-20mg-medley-15-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 97.07,
      "nome": "Zanidip 10mg Apsen 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/zanidip-10mg-20com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 114.49,
      "nome": "Cloridrato De Lercanidipino 10mg 30 Comprimidos Revestidos Ems Genérico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-lercanidipino-10mg-30-comprimidos-revestidos-ems-generico/p-813610",
      "disponivel": true
    }
  },
  "med-00524": {
    "paguemenos": {
      "preco": 13.79,
      "nome": "Neozine 25mg 20 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/neozine-25mg-comprimidos-com20-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.79,
      "nome": "Neozine 25mg 20 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/neozine-25mg-comprimidos-com20-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.85,
      "nome": "Neozine Maleato De Levomepromazina 25mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/neozine-25mg-sanofi-aventis-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 13.42,
      "nome": "Neozine Maleato De Levomepromazina 25mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/neozine-25mg-sanofi-aventis-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 13.69,
      "nome": "Neozine 25mg Com 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/neozine-25mg-com-20-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 14.78,
      "nome": "Neozine Cloridrato De Levomepromazina 25mg 20 Comprimidos Revistidos",
      "url": "https://www.panvel.com/panvel/neozine-cloridrato-de-levomepromazina-25mg-20-comprimidos-revistidos/p-200484",
      "disponivel": true
    }
  },
  "med-00215": {
    "paguemenos": {
      "preco": 15.99,
      "nome": "Cloridrato de Lidocaína 20mg/g Geleia 30g Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-lidocaina-20mg-g-geleia-30g-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.99,
      "nome": "Cloridrato de Lidocaína 20mg/g Geleia 30g Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-lidocaina-20mg-g-geleia-30g-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 12.14,
      "nome": "Labcaína Geleia 2% Cloridrato de Lidocaína 20mg/g 1 Bisnaga com 30g",
      "url": "https://www.drogariasaopaulo.com.br/labcaina-geleia-2--20mg-g-pharlab-1-bisnaga-com-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 12.24,
      "nome": "Lidial Cloridrato De Lidocaína 50mg/g 25g Pomada",
      "url": "https://www.drogariaspacheco.com.br/lidial-50mg-g-delta-1-bisnaga-25g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.49,
      "nome": "Lidial 50mg/g Cellera Farma Pomada Dermatológica 25g",
      "url": "https://www.drogariavenancio.com.br/lidial-50mg-g-cellera-farma-pomada-dermatologica-25g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 14.99,
      "nome": "Lidogel 2% Lidocaína 20mg/g Pomada 30g",
      "url": "https://www.panvel.com/panvel/lidogel-2-lidocaina-20mg-g-pomada-30g/p-997530",
      "disponivel": true
    }
  },
  "med-00216": {
    "paguemenos": {
      "preco": 1.99,
      "nome": "Intestin 2mg 4 Comprimidos",
      "url": "https://www.paguemenos.com.br/intestin-2mg-envelope-com-4-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1.99,
      "nome": "Intestin 2mg 4 Comprimidos",
      "url": "https://www.extrafarma.com.br/intestin-2mg-envelope-com-4-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 1.99,
      "nome": "Diasec Cloridrato De Loperamida 2mg 12 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/diasec-2mg-sandoz-do-brasil-12-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1.99,
      "nome": "Diasec Cloridrato De Loperamida 2mg 12 comprimidos",
      "url": "https://www.drogariaspacheco.com.br/diasec-2mg-sandoz-do-brasil-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 2.19,
      "nome": "Kaosec 2mg Pharmascience 4 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/kaosec-2mg-pharmascience-4-comprimidos-/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 12.22,
      "nome": "Imosec Cloridrato De Loperamida 2mg 12 Comprimidos",
      "url": "https://www.panvel.com/panvel/imosec-cloridrato-de-loperamida-2mg-12-comprimidos/p-4766",
      "disponivel": true
    }
  },
  "med-00217": {
    "paguemenos": {
      "preco": 110.05,
      "nome": "Luratt 20mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/luratt-20mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 110.05,
      "nome": "Luratt 20mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/luratt-20mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 93.99,
      "nome": "Luratt Cloridrato de Lurasidona 20mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/luratt-cloridrato-de-lurasidona-20mg-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 93.99,
      "nome": "Luratt Cloridrato de Lurasidona 20mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/luratt-cloridrato-de-lurasidona-20mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 103.99,
      "nome": "Lubip 20mg Torrent 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/lubip-20mg-30com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 92.81,
      "nome": "Lubip Cloridrato Lurasidona 20mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/lubip-cloridrato-lurasidona-20mg-30-comprimidos-revestidos/p-87801",
      "disponivel": true
    }
  },
  "med-00218": {
    "paguemenos": {
      "preco": 182.99,
      "nome": "Rubenti 200mg 30 Cápsulas Duras de Liberação Prolongada",
      "url": "https://www.paguemenos.com.br/rubenti-200mg-com-30-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 182.99,
      "nome": "Rubenti 200mg 30 Cápsulas Duras de Liberação Prolongada",
      "url": "https://www.extrafarma.com.br/rubenti-200mg-com-30-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 188.59,
      "nome": "Rubenti Cloridrato De Mebeverina 200mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/rubenti-200mg-abbott-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 171.49,
      "nome": "Rubenti Cloridrato De Mebeverina 200mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/rubenti-200mg-abbott-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 56.37,
      "nome": "Rubenti 200mg Abbott 14 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/rubenti-200mg-abbott-14-capsulas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 205.16,
      "nome": "Rubenti Cloridrato De Mebeverina 200mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/rubenti-cloridrato-de-mebeverina-200mg-30-capsulas/p-829170",
      "disponivel": true
    }
  },
  "med-00221": {
    "paguemenos": {
      "preco": 4.99,
      "nome": "Cloridrato de Metformina 850mg 30 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/cloridrato-de-metformina-850mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 4.99,
      "nome": "Cloridrato de Metformina 850mg 30 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/cloridrato-de-metformina-850mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 8.99,
      "nome": "Cloridrato de Metformina 500mg Genérico Teuto 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-metformina-500mg-generico-teuto-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 9.34,
      "nome": "Cloridrato de Metformina 500mg Genérico Teuto 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-metformina-500mg-generico-teuto-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.99,
      "nome": "Cloridrato De Metformina 500mg Teuto 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/clor-metformina-500mg-30cpr-g-teuto/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 6.1,
      "nome": "Cloridrato De Metformina 850mg 30 Comprimidos Vitamedic Genérico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-metformina-850mg-30-comprimidos-vitamedic-generico/p-89585",
      "disponivel": true
    }
  },
  "med-00228": {
    "paguemenos": {
      "preco": 94.49,
      "nome": "Vildagliptina 50mg + Cloridrato de Metformina 1000mg 60 Comprimidos Revestidos Genérico Althaia",
      "url": "https://www.paguemenos.com.br/vildagliptina-metformina-50g-1000mg-x60-comprimidos-revestidos-althaia/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 94.49,
      "nome": "Vildagliptina 50mg + Cloridrato de Metformina 1000mg 60 Comprimidos Revestidos Genérico Althaia",
      "url": "https://www.extrafarma.com.br/vildagliptina-metformina-50g-1000mg-x60-comprimidos-revestidos-althaia/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 264.08,
      "nome": "Galvus Met Vildagliptina 50mg + Cloridrato de Metformina 500mg 56 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/galvus-met-50-500mg-novartis-biociencias-56-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 261.05,
      "nome": "Galvus Met Vildagliptina 50mg + Cloridrato de Metformina 500mg 56 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/galvus-met-50-500mg-novartis-biociencias-56-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 110.99,
      "nome": "Vildagliptina + Cloridrato de Metformina 50mg + 1000mg Althaia 60 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/vildagliptina-clor-metformina--50mg-1000mg--60com--c1--g--althaia/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 263.55,
      "nome": "Galvus Met Vildagliptina 50mg + Cloridrato De Metformina 1000mg 56 Comprimidos",
      "url": "https://www.panvel.com/panvel/galvus-met-vildagliptina-50mg-cloridrato-de-metformina-1000mg-56-comprimidos/p-506510",
      "disponivel": true
    }
  },
  "med-00421": {
    "paguemenos": {
      "preco": 39.29,
      "nome": "Fosfato de Sitagliptina 25mg 30 Comprimidos Revestidos Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/fosfato-de-sitagliptina-25mg-com-30-comprimidos-genericos-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 39.29,
      "nome": "Fosfato de Sitagliptina 25mg 30 Comprimidos Revestidos Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/fosfato-de-sitagliptina-25mg-com-30-comprimidos-genericos-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.99,
      "nome": "Fosfato de Sitagliptina 25mg Genérico Sandoz 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/fosfato-sitagliptina-25mg-generico-sandoz-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 45.99,
      "nome": "Fosfato de Sitagliptina 25mg Genérico Sandoz 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/fosfato-sitagliptina-25mg-generico-sandoz-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 46.99,
      "nome": "Fosfato de Sitagliptina 25mg Ranbaxy 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/fosf-sitagliptina-25mg-30com--g--ranbaxy/p",
      "disponivel": true
    }
  },
  "med-00422": {
    "paguemenos": {
      "preco": 77.99,
      "nome": "Sitglu 50mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/sitglu-50mg-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 77.99,
      "nome": "Sitglu 50mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/sitglu-50mg-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 71.04,
      "nome": "Sitglu Fosfato De Sitagliptina 50mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/sitglu-50mg-brace-pharma-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 57.15,
      "nome": "Sitglu Fosfato De Sitagliptina 50mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/sitglu-50mg-brace-pharma-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 58.32,
      "nome": "Sitglu 50mg Brace Pharma 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/sitglu-50mg-30com/p",
      "disponivel": true
    }
  },
  "med-00229": {
    "paguemenos": {
      "preco": 13.99,
      "nome": "Cloridrato de Metilfenidato 10mg 30 Comprimidos Genérico Althaia",
      "url": "https://www.paguemenos.com.br/cloridrato-de-metilfenidato-10mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.99,
      "nome": "Cloridrato de Metilfenidato 10mg 30 Comprimidos Genérico Althaia",
      "url": "https://www.extrafarma.com.br/cloridrato-de-metilfenidato-10mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 21.99,
      "nome": "Cloridrato de Metilfenidato 10mg Genérico Ems 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-metilfenidrato-10mg-ems-c30cpr--a3-ems/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 43.31,
      "nome": "Attenze Cloridrato De Metilfenidato 10mg 30 comprimidos",
      "url": "https://www.drogariaspacheco.com.br/attenze-10mg-europharma-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 25.99,
      "nome": "Cloridrato de Metilfenidato 10mg 30 Comprimidos Althaia",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-metilfenidato-10mg-30-comprimidos-althaia/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 28.99,
      "nome": "Cloridrato De Metilfenidato 10mg 30 Comprimidos Eurofarma Generico A3",
      "url": "https://www.panvel.com/panvel/cloridrato-de-metilfenidato-10mg-30-comprimidos-eurofarma-generico-a3/p-107110",
      "disponivel": true
    }
  },
  "med-00230": {
    "paguemenos": {
      "preco": 6.89,
      "nome": "Cloridrato de Metoclopramida 4mg/ml Solução Gotas 10ml Genérico Teuto",
      "url": "https://www.paguemenos.com.br/metoclopramida-gotas-generico-teuto/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.89,
      "nome": "Cloridrato de Metoclopramida 4mg/ml Solução Gotas 10ml Genérico Teuto",
      "url": "https://www.extrafarma.com.br/metoclopramida-gotas-generico-teuto/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 4.3,
      "nome": "Cloridrato De Metoclopramida SF 10mg Genérico Medley 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/metoclopramida-sf-generico-medley-20-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 2.8,
      "nome": "Cloridrato De Metoclopramida SF 10mg Genérico Medley 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/metoclopramida-sf-generico-medley-20-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 6.99,
      "nome": "Cloridrato De Metoclopramida 4mg/ml Solução Oral 10ml Teuto Genérico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-metoclopramida-4mg-ml-solucao-oral-10ml-teuto-generico/p-402527",
      "disponivel": true
    }
  },
  "med-00231": {
    "paguemenos": {
      "preco": 13.79,
      "nome": "Plasil 10mg 20 Comprimidos",
      "url": "https://www.paguemenos.com.br/plasil-10mg-com-20-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.79,
      "nome": "Plasil 10mg 20 Comprimidos",
      "url": "https://www.extrafarma.com.br/plasil-10mg-com-20-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 10.9,
      "nome": "Plasil 4mg Sanofi Aventis Gotas 10ml",
      "url": "https://www.drogariasaopaulo.com.br/plasil-4mg-sanofi-aventis-gotas-10ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 11.77,
      "nome": "Plasil 4mg Sanofi Aventis Gotas 10ml",
      "url": "https://www.drogariaspacheco.com.br/plasil-4mg-sanofi-aventis-gotas-10ml/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 12.99,
      "nome": "Plasil 10mg Sanofi 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/plasil-10mg-sanofi-aventis-20-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 13.99,
      "nome": "Plasil Metoclopramida 10mg 20 Comprimidos",
      "url": "https://www.panvel.com/panvel/plasil-metoclopramida-10mg-20-comprimidos/p-6211",
      "disponivel": true
    }
  },
  "med-00232": {
    "paguemenos": {
      "preco": 21.79,
      "nome": "Cloridrato de Moxifloxacino 5mg/ml Solução Oftálmica 5ml Genérico Geolab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-moxifloxacino-solucao-oftalmica-5mg-ml-frasco-c-5ml-generico-geolabmais/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 21.79,
      "nome": "Cloridrato de Moxifloxacino 5mg/ml Solução Oftálmica 5ml Genérico Geolab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-moxifloxacino-solucao-oftalmica-5mg-ml-frasco-c-5ml-generico-geolabmais/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 35.87,
      "nome": "Oftalmox Cloridrato De Moxifloxacino 5mg/ml 5ml Solução Oftálmica Estéril",
      "url": "https://www.drogariasaopaulo.com.br/oftalmox-5mg-ml-geolab-5ml-solucao-oftalmica-esteril-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.23,
      "nome": "Oftalmox Cloridrato De Moxifloxacino 5mg/ml 5ml Solução Oftálmica Estéril",
      "url": "https://www.drogariaspacheco.com.br/oftalmox-5mg-ml-geolab-5ml-solucao-oftalmica-esteril-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 32.89,
      "nome": "Oftalmox 5mg/ml Gbio Solução Oftálmica 5ml",
      "url": "https://www.drogariavenancio.com.br/oftalmox-50mg-ml-sol-oft-5ml--ab-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 36.16,
      "nome": "Oftalmox Cloridrato Moxifloxacino 5mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/oftalmox-cloridrato-moxifloxacino-5mg-ml-colirio-5ml/p-95347",
      "disponivel": true
    }
  },
  "med-00236": {
    "paguemenos": {
      "preco": 19.9,
      "nome": "Colírio Lavolho D 0,15mg/Ml Solução Gotas 20ml",
      "url": "https://www.paguemenos.com.br/colirio-lavolho-d-0-15mg-ml-solucao-gotas-20ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.9,
      "nome": "Colírio Lavolho D 0,15mg/Ml Solução Gotas 20ml",
      "url": "https://www.extrafarma.com.br/colirio-lavolho-d-0-15mg-ml-solucao-gotas-20ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 27.39,
      "nome": "Colírio Moura Brasil 20ml Solução",
      "url": "https://www.drogariavenancio.com.br/colirio-moura-brasil-20ml-solucao/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 25.04,
      "nome": "Colírio Moura Brasil 20ml",
      "url": "https://www.panvel.com/panvel/colirio-moura-brasil-20ml/p-15334",
      "disponivel": true
    }
  },
  "med-00235": {
    "paguemenos": {
      "preco": 11.49,
      "nome": "Colírio Legrand 0,3mg/ml + 0,15mg/ml Solução Oftálmica 20ml",
      "url": "https://www.paguemenos.com.br/colirio-legrand-20ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.49,
      "nome": "Colírio Legrand 0,3mg/ml + 0,15mg/ml Solução Oftálmica 20ml",
      "url": "https://www.extrafarma.com.br/colirio-legrand-20ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.49,
      "nome": "Colírio Legrand Gotas 20ml",
      "url": "https://www.drogariavenancio.com.br/colirio-legrand-20ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.99,
      "nome": "Colírio Teuto 20ml G",
      "url": "https://www.panvel.com/panvel/colirio-teuto-20ml-g/p-495080",
      "disponivel": true
    }
  },
  "med-00693": {
    "paguemenos": {
      "preco": 11.49,
      "nome": "Colírio Geolab 0,15mg/ml + 0,3mg/ml Solução Oftálmica 20ml",
      "url": "https://www.paguemenos.com.br/colirio-geolab-0-15mg-mlmais0-3mg-ml-solucao-20ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.49,
      "nome": "Colírio Geolab 0,15mg/ml + 0,3mg/ml Solução Oftálmica 20ml",
      "url": "https://www.extrafarma.com.br/colirio-geolab-0-15mg-mlmais0-3mg-ml-solucao-20ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 33.93,
      "nome": "Unizinco Zinco 17,60mg/ml 100ml Solução Oral + Copo Medidor",
      "url": "https://www.drogariasaopaulo.com.br/unizinco-17-60mg-ml-myralis-100ml--copo-medidor/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.29,
      "nome": "Unizinco Zinco 17,60mg/ml 100ml Solução Oral + Copo Medidor",
      "url": "https://www.drogariaspacheco.com.br/unizinco-17-60mg-ml-myralis-100ml--copo-medidor/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.7,
      "nome": "Colírio Geolab 0,15mg + 0,03mg Solução Oftálmica 20ml",
      "url": "https://www.drogariavenancio.com.br/colirio-geolab-015mg---003mg-solucao-oftalmica-20ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.99,
      "nome": "Colírio Geolab 0,15mg + 0,03mg Solução Oftálmica 20ml",
      "url": "https://www.panvel.com/panvel/colirio-geolab-015mg-003mg-solucao-oftalmica-20ml/p-94662",
      "disponivel": true
    }
  },
  "med-00692": {
    "paguemenos": {
      "preco": 11.49,
      "nome": "Colírio Neo Brasil 0,15mg/ml + 0,30mg/ml Solução Oftálmica 20ml",
      "url": "https://www.paguemenos.com.br/colirio-neo-brasil-20ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.49,
      "nome": "Colírio Neo Brasil 0,15mg/ml + 0,30mg/ml Solução Oftálmica 20ml",
      "url": "https://www.extrafarma.com.br/colirio-neo-brasil-20ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.99,
      "nome": "Colírio Neo Brasil 20ml",
      "url": "https://www.panvel.com/panvel/colirio-neo-brasil-20ml/p-99190",
      "disponivel": true
    }
  },
  "med-00409": {
    "paguemenos": {
      "preco": 12.99,
      "nome": "Elotin 0,275mg/ml + 3,85mg/ml + 11.000UI/ml + 20mg/ml Solução Otológica 5ml",
      "url": "https://www.paguemenos.com.br/elotin-gotas-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.99,
      "nome": "Elotin 0,275mg/ml + 3,85mg/ml + 11.000UI/ml + 20mg/ml Solução Otológica 5ml",
      "url": "https://www.extrafarma.com.br/elotin-gotas-5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.19,
      "nome": "Otosylase 0,250mg/ml + 10.000UI/ml + 3,5mg/ml + 20mg/ml Geolab Solução Otológica 10ml",
      "url": "https://www.drogariavenancio.com.br/otosylase-0250mg-ml---10-000ui-ml---35mg-ml---20mg-ml-geolab-solucao-otologica-10ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 19.7,
      "nome": "Otosylase Acetonida 0,250mg + Polimixina B 10.000ui + Neomicina 3,50mg + Lidocaína 20mg Solução 10ml",
      "url": "https://www.panvel.com/panvel/otosylase-acetonida-0250mg-polimixina-b-10000ui-neomicina-350mg-lidocaina-20mg-solucao-10ml/p-102081",
      "disponivel": true
    }
  },
  "med-00237": {
    "paguemenos": {
      "preco": 133.99,
      "nome": "Uninaltrex 50mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/uninaltrex-50mg-com-30-comprimidos-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 133.99,
      "nome": "Uninaltrex 50mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/uninaltrex-50mg-com-30-comprimidos-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 143.08,
      "nome": "Uninaltrex Cloridrato De Naltrexona 50mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/uninaltrex-50mg-uniao-quimica-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 143.08,
      "nome": "Uninaltrex Cloridrato De Naltrexona 50mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/uninaltrex-50mg-uniao-quimica-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 147.59,
      "nome": "Uninaltrex 50mg Com 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/uninaltrex-50mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 152.75,
      "nome": "Uninaltrex Cloridrato De Naltrexona 50mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/uninaltrex-cloridrato-de-naltrexona-50mg-30-comprimidos-revestidos/p-558010",
      "disponivel": true
    }
  },
  "med-00239": {
    "paguemenos": {
      "preco": 11.89,
      "nome": "Cloridrato de Naratriptana 2,5mg com 4 comprimidos revestidos Genérico ems",
      "url": "https://www.paguemenos.com.br/cloridrato-de-naratriptana-2-5mg-com-4-comprimidos-revestidos-generico-ems/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 11.89,
      "nome": "Cloridrato de Naratriptana 2,5mg com 4 comprimidos revestidos Genérico ems",
      "url": "https://www.extrafarma.com.br/cloridrato-de-naratriptana-2-5mg-com-4-comprimidos-revestidos-generico-ems/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 14.9,
      "nome": "Naratano Cloridrato de Naratriptana 2,5mg 4 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/naratano-cloridrato-de-naratriptana-2-5mg-4-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 14.9,
      "nome": "Naratano Cloridrato de Naratriptana 2,5mg 4 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/naratano-cloridrato-de-naratriptana-2-5mg-4-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.82,
      "nome": "Cloridrato de Naratriptana 2,5mg Medley 4 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/clor-naratriptana-25mg-4com--g--medley/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.92,
      "nome": "Naramig Cloridrato De Naratriptano 2,5mg 4 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/naramig-cloridrato-de-naratriptano-25mg-4-comprimidos-revestidos/p-382329",
      "disponivel": true
    }
  },
  "med-00240": {
    "paguemenos": {
      "preco": 42.29,
      "nome": "Cloridrato de Nebivolol 5mg 30 Comprimidos Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-nebivolol-5mg-com-30-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 42.29,
      "nome": "Cloridrato de Nebivolol 5mg 30 Comprimidos Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-nebivolol-5mg-com-30-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 56.39,
      "nome": "Nebitah Cloridrato De Nebivolol 5mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nebitah-5mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 47.32,
      "nome": "Nebitah Cloridrato De Nebivolol 5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/nebitah-5mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 29.99,
      "nome": "Neblock 2,5mg Torrent 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/neblock-25mg-30com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 30.96,
      "nome": "Neblock Cloridrato De Nebivolol 2,5mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/neblock-cloridrato-de-nebivolol-25mg-30-comprimidos/p-89226",
      "disponivel": true
    }
  },
  "med-00241": {
    "paguemenos": {
      "preco": 20.59,
      "nome": "Cloridrato de Nortriptilina 25mg 30 Cápsulas Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/cloridrato-de-nortriptilina-25mg-com-30-capsulas-generico-ranbaxy-p-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.59,
      "nome": "Cloridrato de Nortriptilina 25mg 30 Cápsulas Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/cloridrato-de-nortriptilina-25mg-com-30-capsulas-generico-ranbaxy-p-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 29.21,
      "nome": "Cloridrato de Nortriptilina 25mg Genérico Delta 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-nortriptilina-25mg-generico-delta-30-capsulas-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.99,
      "nome": "Cloridrato de Nortriptilina 25mg Genérico Delta 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-nortriptilina-25mg-generico-delta-30-capsulas-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 31.65,
      "nome": "Cloridrato De Nortriptilina 25mg Eurofarma 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/clor-nortriptilina-25mg-30cpr-c1--g-euro/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 39.11,
      "nome": "Pamelor Cloridrato De Nortriptilina 10mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/pamelor-cloridrato-de-nortriptilina-10mg-30-capsulas/p-842820",
      "disponivel": true
    }
  },
  "med-00242": {
    "paguemenos": {
      "preco": 37.59,
      "nome": "Cloridrato de Olopatadina 2mg/ml Solução Oftálmica 2,5ml Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/cloridrato-de-olopatadina-2mg-ml-solucao-oftalmica-com-2-5-ml-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 37.59,
      "nome": "Cloridrato de Olopatadina 2mg/ml Solução Oftálmica 2,5ml Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/cloridrato-de-olopatadina-2mg-ml-solucao-oftalmica-com-2-5-ml-generico-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 43.33,
      "nome": "Cloridrato de Olopatadina 2,22mg/ml Genérico Ranbaxy 2,5ml 1 Frasco",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-olopatadina-2mg-ml-generico-ranbaxy-1-frasco-com-2-5ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 43.55,
      "nome": "Cloridrato de Olopatadina 2,22mg/ml Genérico Ranbaxy 2,5ml 1 Frasco",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-olopatadina-2mg-ml-generico-ranbaxy-1-frasco-com-2-5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 42.45,
      "nome": "Cloridrato De Olopatadina 2mg/ml Ranbaxy Solução Oftálmica 2,5ml",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-olopatadina-2mg-ml-ranbaxy-solucao-oftalmica-25ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 52.99,
      "nome": "Prurok 0,2% Cloridrato De Olopatadina 2mg/ml Colírio 2,5ml",
      "url": "https://www.panvel.com/panvel/prurok-02-cloridrato-de-olopatadina-2mg-ml-colirio-25ml/p-88609",
      "disponivel": true
    }
  },
  "med-00243": {
    "paguemenos": {
      "preco": 17.19,
      "nome": "Cloridrato de Ondansetrona 4mg 10 Comprimidos Orodispersíveis Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-ondansetrona-4mg-10-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.19,
      "nome": "Cloridrato de Ondansetrona 4mg 10 Comprimidos Orodispersíveis Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-ondansetrona-4mg-10-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 22.84,
      "nome": "Cloridrato de Ondansetrona 4mg Genérico Althaia 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-ondansetrona-4mg-generico-althaia-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 15.87,
      "nome": "Volig Cloridrato De Ondansetrona 4mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/volig-4mg-legrand-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.49,
      "nome": "Cloridrato De Ondansetrona Di-Hidratado 4mg Pharlab 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/clor-ondansetrona-4mg-10com--g--pharlab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 39.99,
      "nome": "Vonau Flash Cloridrato De Ondansetrona 4mg 10 Comprimidos",
      "url": "https://www.panvel.com/panvel/vonau-flash-cloridrato-de-ondansetrona-4mg-10-comprimidos/p-901940",
      "disponivel": true
    }
  },
  "med-00244": {
    "paguemenos": {
      "preco": 35.99,
      "nome": "Dry 5mg 30 Comprimidos Simples",
      "url": "https://www.paguemenos.com.br/dry-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 35.99,
      "nome": "Dry 5mg 30 Comprimidos Simples",
      "url": "https://www.extrafarma.com.br/dry-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 40.71,
      "nome": "Nourin Cloridrato De Oxibutinina 5mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nourin-5mg-supera-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 37.52,
      "nome": "Retemic Cloridrato De Oxibutinina 5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/retemic-5mg-apsen-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 38.29,
      "nome": "Retemic 5mg Apsen 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/retemic-5mg-apsen-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 40.62,
      "nome": "Nourin Oxibutinina 5mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/nourin-oxibutinina-5mg-30-comprimidos/p-112254",
      "disponivel": true
    }
  },
  "med-00245": {
    "paguemenos": {
      "preco": 99.99,
      "nome": "Oxypynal 10mg 10 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.paguemenos.com.br/oxypynal-10mg-com-10-comprimidos-psicotropicos-p-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 99.99,
      "nome": "Oxypynal 10mg 10 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.extrafarma.com.br/oxypynal-10mg-com-10-comprimidos-psicotropicos-p-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 99.99,
      "nome": "Oxypynal Cloridrato De Oxicodona 10mg 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/oxypynal-10mg-zodiac-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 99.99,
      "nome": "Oxypynal Cloridrato De Oxicodona 10mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/oxypynal-10mg-zodiac-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 123.96,
      "nome": "Oxypynal Cloridrato De Oxicodona 10mg 10 Comprimidos Revestidos De Liberação Prolongada",
      "url": "https://www.panvel.com/panvel/oxypynal-cloridrato-de-oxicodona-10mg-10-comprimidos-revestidos-de-liberacao-prolongada/p-103916",
      "disponivel": true
    }
  },
  "med-00246": {
    "paguemenos": {
      "preco": 9.39,
      "nome": "Cloridrato de Oximetazolina 0,25mg/mL Solução Nasal Spray Adulto 20ml Genérico EMS",
      "url": "https://www.paguemenos.com.br/clor-oximetazol-solnasal-20ml-generico-emsm/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.39,
      "nome": "Cloridrato de Oximetazolina 0,25mg/mL Solução Nasal Spray Adulto 20ml Genérico EMS",
      "url": "https://www.extrafarma.com.br/clor-oximetazol-solnasal-20ml-generico-emsm/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 10.09,
      "nome": "Cloridrato de Oximetazolina 0,5mg/mL Genérico Neo Química 30ml",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-oximetazolina-0-5mg-ml-generico-neo-quimica-30ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 9.86,
      "nome": "Cloridrato de Oximetazolina 0,5mg/mL Genérico Neo Química 30ml",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-oximetazolina-0-5mg-ml-generico-hypermarcas-30ml/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 11.62,
      "nome": "Cloridrato De Oximetazolina 0,5 mg/ml Ems Solução Nasal 30ml",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-oximetazolina-05-mg-ml-ems-solucao-nasal-30ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 18.33,
      "nome": "Aturgyl 0,5mg/ml Solução Nasal 15ml",
      "url": "https://www.panvel.com/panvel/aturgyl-05mg-ml-solucao-nasal-15ml/p-810430",
      "disponivel": true
    }
  },
  "med-00248": {
    "paguemenos": {
      "preco": 12.19,
      "nome": "Gn Paroxetina 20mg 30cp Legran C1",
      "url": "https://www.paguemenos.com.br/gn-paroxetina-20mg-30cp-legran-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.19,
      "nome": "Gn Paroxetina 20mg 30cp Legran C1",
      "url": "https://www.extrafarma.com.br/gn-paroxetina-20mg-30cp-legran-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 106.32,
      "nome": "Paxtrat Cloridrato De Paroxetina 20mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/paxtrat-20mg-uniao-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 91.42,
      "nome": "Paxtrat Cloridrato De Paroxetina 20mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/paxtrat-20mg-uniao-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 64.84,
      "nome": "Pondera XR 12,5mg 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/pondera-xr-125mg-30cpr/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 94.34,
      "nome": "Roxetin Xr Cloridrato De Paroxetina 12,5mg 30 Comprimidos Revestidos De Liberação Prolongada",
      "url": "https://www.panvel.com/panvel/roxetin-xr-cloridrato-de-paroxetina-125mg-30-comprimidos-revestidos-de-liberacao-prolongada/p-110838",
      "disponivel": true
    }
  },
  "med-00247": {
    "paguemenos": {
      "preco": 19.19,
      "nome": "Cloridrato De Paroxetina 20mg Comprimidos30gen-bio P",
      "url": "https://www.paguemenos.com.br/cloridrato-de-paroxetina-20mg-comprimidos30gen-bio-p/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 19.19,
      "nome": "Cloridrato De Paroxetina 20mg Comprimidos30gen-bio P",
      "url": "https://www.extrafarma.com.br/cloridrato-de-paroxetina-20mg-comprimidos30gen-bio-p/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 14.59,
      "nome": "Cloridrato de Paroxetina 20mg Genérico União Química 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-paroxetina-20mg-generico-uniao-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 28.99,
      "nome": "Cloridrato de Paroxetina 20mg Genérico Medley 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-paroxetina-20mg-generico-medley-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.99,
      "nome": "Cloridrato de Paroxetina 20mg 30 Comprimidos Prati Donaduzzi",
      "url": "https://www.drogariavenancio.com.br/clor-paroxetina-20mg-30com--c1--g--prati-d/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 37.99,
      "nome": "Cloridrato De Paroxetina 20mg 30 Comprimidos Revestidos Germed Generico C1",
      "url": "https://www.panvel.com/panvel/cloridrato-de-paroxetina-20mg-30-comprimidos-revestidos-germed-generico-c1/p-107805",
      "disponivel": true
    }
  },
  "med-00250": {
    "paguemenos": {
      "preco": 41.99,
      "nome": "Pilocarpina  2% Colírio 10ml",
      "url": "https://www.paguemenos.com.br/pilocarpina-2porcento-ocular-10ml/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 41.99,
      "nome": "Pilocarpina  2% Colírio 10ml",
      "url": "https://www.extrafarma.com.br/pilocarpina-2porcento-ocular-10ml/p",
      "disponivel": false
    }
  },
  "med-00251": {
    "paguemenos": {
      "preco": 42.79,
      "nome": "Cloridrato de Pioglitazona 30mg 15 Comprimidos Genérico Globo",
      "url": "https://www.paguemenos.com.br/cloridrato-de-pioglitazona-30mg-15-comprimidos-generico-globo/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 42.79,
      "nome": "Cloridrato de Pioglitazona 30mg 15 Comprimidos Genérico Globo",
      "url": "https://www.extrafarma.com.br/cloridrato-de-pioglitazona-30mg-15-comprimidos-generico-globo/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.9,
      "nome": "Piomi Cloridrato De Pioglitazona 30mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/piomi-30mg-myralis-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 38.9,
      "nome": "Piomi Cloridrato De Pioglitazona 30mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/piomi-30mg-myralis-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 29.39,
      "nome": "Cloridrato de Pioglitazona 30mg 30 Comprimidos Genérico Globo Pharma",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-pioglitazona-30mg-globo-generico-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 39.99,
      "nome": "Piomi Cloridrato De Pioglitazona 30mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/piomi-cloridrato-de-pioglitazona-30mg-30-comprimidos/p-88774",
      "disponivel": true
    }
  },
  "med-00252": {
    "paguemenos": {
      "preco": 9.59,
      "nome": "Cloridrato De Prometazina Biochimico 25mg 20 Comprimidos Genérico",
      "url": "https://www.paguemenos.com.br/cloridrato-de-prometazina-biochimico-25mg-20-comprimidos-generico/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 9.59,
      "nome": "Cloridrato De Prometazina Biochimico 25mg 20 Comprimidos Genérico",
      "url": "https://www.extrafarma.com.br/cloridrato-de-prometazina-biochimico-25mg-20-comprimidos-generico/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 8.67,
      "nome": "Profergan Cloridrato De Prometazina 25mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/profergan-25mg-teuto-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 8.42,
      "nome": "Profergan Cloridrato De Prometazina 25mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/profergan-25mg-teuto-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 2.89,
      "nome": "Fenergan 50mg Ampola De 2ml",
      "url": "https://www.drogariavenancio.com.br/fenergan-50mg-ampola-de-2ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 11.99,
      "nome": "Cloridrato De Prometazina 25mg 20 Comprimidos Revestidos Teuto Generico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-prometazina-25mg-20-comprimidos-revestidos-teuto-generico/p-103911",
      "disponivel": true
    }
  },
  "med-00631": {
    "paguemenos": {
      "preco": 10.29,
      "nome": "Prometazina 20mg/g Creme Dermatológico 30g Genérico Teuto",
      "url": "https://www.paguemenos.com.br/prometazina-creme-20mg-30g-generico-teuto/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.29,
      "nome": "Prometazina 20mg/g Creme Dermatológico 30g Genérico Teuto",
      "url": "https://www.extrafarma.com.br/prometazina-creme-20mg-30g-generico-teuto/p",
      "disponivel": true
    }
  },
  "med-00335": {
    "paguemenos": {
      "preco": 13.99,
      "nome": "Dorilen 500mg + 10mg + 5mg 12 Comprimidos",
      "url": "https://www.paguemenos.com.br/dorilen-com-12-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.99,
      "nome": "Dorilen 500mg + 10mg + 5mg 12 Comprimidos",
      "url": "https://www.extrafarma.com.br/dorilen-com-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 29.92,
      "nome": "Dorilen 15 Ml",
      "url": "https://www.panvel.com/panvel/dorilen-15-ml/p-117540",
      "disponivel": true
    }
  },
  "med-00340": {
    "paguemenos": {
      "preco": 17.99,
      "nome": "Dorilen 500mg + 10mg + 5mg Solução Oral Gotas 15ml",
      "url": "https://www.paguemenos.com.br/dorilen-gotas-15ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.99,
      "nome": "Dorilen 500mg + 10mg + 5mg Solução Oral Gotas 15ml",
      "url": "https://www.extrafarma.com.br/dorilen-gotas-15ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 44.99,
      "nome": "Lisador 500mg 16 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/lisador-farmasa-16/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.43,
      "nome": "Lisador 4 Comprimidos",
      "url": "https://www.panvel.com/panvel/lisador-4-comprimidos/p-922150",
      "disponivel": true
    }
  },
  "med-00253": {
    "paguemenos": {
      "preco": 40.79,
      "nome": "Cloridrato de Propafenona 150mg 60 Comprimidos Revestidos Genérico Althaia",
      "url": "https://www.paguemenos.com.br/cloridrato-de-propafenona-150mg-com-60-comprimidos-generico-althaia/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 40.79,
      "nome": "Cloridrato de Propafenona 150mg 60 Comprimidos Revestidos Genérico Althaia",
      "url": "https://www.extrafarma.com.br/cloridrato-de-propafenona-150mg-com-60-comprimidos-generico-althaia/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 44.87,
      "nome": "Cloridrato De Propafenona 150mg Genérico Althaia 60 Comprimido",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-propafenona-150mg-generico-althaia-60-comprimido/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 44.65,
      "nome": "Cloridrato De Propafenona 150mg Genérico Althaia 60 Comprimido",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-propafenona-150mg-generico-althaia-60-comprimido/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 50.37,
      "nome": "Cloridrato De Propafenona 300mg Prati Donaduzzi 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-propafenona-300mg-prati-donaduzzi-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 93.7,
      "nome": "Vatis Cloridrato Propafenona 150mg 60 Comprimidos",
      "url": "https://www.panvel.com/panvel/vatis-cloridrato-propafenona-150mg-60-comprimidos/p-433290",
      "disponivel": true
    }
  },
  "med-00254": {
    "paguemenos": {
      "preco": 2.89,
      "nome": "Cloridrato de Propranolol 10mg 30 Comprimidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/cloridrato-de-propranolol-10mg-com-30-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 2.89,
      "nome": "Cloridrato de Propranolol 10mg 30 Comprimidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/cloridrato-de-propranolol-10mg-com-30-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 8.35,
      "nome": "Cloridrato de Propranolol 40mg Genérico Medley 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-propranolol-40mg-generico-medley-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.99,
      "nome": "Cloridrato de Propranolol 40mg Genérico Medley 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-propranolol-40mg-generico-medley-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 3.99,
      "nome": "Cloridrato De Propranolol 40mg Teuto 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-propranolol-40mg-com-30-comprimidos-teuto/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.49,
      "nome": "Cloridrato De Propranolol 40mg 30 Comprimidos Pharlab Generico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-propranolol-40mg-30-comprimidos-pharlab-generico/p-105391",
      "disponivel": true
    }
  },
  "med-00257": {
    "paguemenos": {
      "preco": 21.99,
      "nome": "Cloridrato De Sertralina 50mg Com 30 Comprimidos Genérico Ems",
      "url": "https://www.paguemenos.com.br/cloridrato-de-sertralina-50mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 21.99,
      "nome": "Cloridrato De Sertralina 50mg Com 30 Comprimidos Genérico Ems",
      "url": "https://www.extrafarma.com.br/cloridrato-de-sertralina-50mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 33.98,
      "nome": "Ralzin Cloridrato de Sertralina 50mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/ralzin-50mg-prati-donaduzzi-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 33.98,
      "nome": "Ralzin Cloridrato de Sertralina 50mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/ralzin-50mg-prati-donaduzzi-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.41,
      "nome": "Cloridrato De Sertralina 50mg Geolab 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/clor-sertralina-50mg-30com--c1--g--geolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.99,
      "nome": "Cloridrato De Sertralina 50mg 30 Comprimidos Eurofarma Genérico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-sertralina-50mg-30-comprimidos-eurofarma-generico/p-598750",
      "disponivel": true
    }
  },
  "med-00260": {
    "paguemenos": {
      "preco": 52.99,
      "nome": "Cloridrato de Sotalol 160mg 30 Comprimidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/cloridrato-de-sotalol-160mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 52.99,
      "nome": "Cloridrato de Sotalol 160mg 30 Comprimidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/cloridrato-de-sotalol-160mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 30.99,
      "nome": "Cloridrato de Sotalol 160mg Genérico Biosintética 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-sotalol-160mg-generico-biosinteti-20-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 28.46,
      "nome": "Cloridrato de Sotalol 160mg Genérico Biosintética 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-sotalol-160mg-generico-biosinteti-20-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 49.99,
      "nome": "Cloridrato De Sotalol 160mg Sandoz 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-sotalol-160mg-sandoz-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00261": {
    "paguemenos": {
      "preco": 48.99,
      "nome": "Cloridrato de Tansulosina 0,4mg 20 Cápsulas Duras de Liberação Modificada Genérico Geolab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-tansulosina-0-4mg-com-20-capsulas-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 48.99,
      "nome": "Cloridrato de Tansulosina 0,4mg 20 Cápsulas Duras de Liberação Modificada Genérico Geolab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-tansulosina-0-4mg-com-20-capsulas-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 57.19,
      "nome": "Cloridrato de Tansulosina 0,4mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-tansulosina-0-4mg-generico-sem-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 57.19,
      "nome": "Cloridrato de Tansulosina 0,4mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-tansulosina-0-4mg-generico-sem-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 52.99,
      "nome": "Cloridrato De Tansulosina 0,4mg Geolab 20 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-tansulosina-04mg-geolab-20-capsulas-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 135.99,
      "nome": "Cloridrato De Tansulosina 0,4mg 60 Cápsulas Liberação Prolongada Geolab Genérico",
      "url": "https://www.panvel.com/panvel/cloridrato-de-tansulosina-04mg-60-capsulas-liberacao-prolongada-geolab-generico/p-107329",
      "disponivel": true
    }
  },
  "med-00262": {
    "paguemenos": {
      "preco": 99.49,
      "nome": "Palexis LP 50mg 30 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.paguemenos.com.br/palexis-lp-50mg-com-30-comprimidos-revestidos-liberacao-prolongada/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 99.49,
      "nome": "Palexis LP 50mg 30 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.extrafarma.com.br/palexis-lp-50mg-com-30-comprimidos-revestidos-liberacao-prolongada/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 101.91,
      "nome": "Palexis LP Cloridrato De Tapentadol 50mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/palexis-lp-50mg-grunenthal-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 91.62,
      "nome": "Palexis LP Cloridrato De Tapentadol 50mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/palexis-lp-50mg-grunenthal-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 93.49,
      "nome": "Palexis Lp 50mg 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/palexis-lp-50mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 99.99,
      "nome": "Palexis Lp Cloridrato De Tapentadol 50mg 30 Comprimidos Revestidos De Liberação Prolongada",
      "url": "https://www.panvel.com/panvel/palexis-lp-cloridrato-de-tapentadol-50mg-30-comprimidos-revestidos-de-liberacao-prolongada/p-107516",
      "disponivel": true
    }
  },
  "med-00263": {
    "paguemenos": {
      "preco": 45.29,
      "nome": "Cloridrato de Terbinafina 250mg 14 Comprimidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/cloridrato-de-terbinafina-250mg-com-14-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 45.29,
      "nome": "Cloridrato de Terbinafina 250mg 14 Comprimidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/cloridrato-de-terbinafina-250mg-com-14-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.06,
      "nome": "Cloridrato de Terbinafina 250mg Genérico Medley 7 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-terbinafina-250mg-generico-medley-7-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 27.14,
      "nome": "Cloridrato de Terbinafina 250mg Genérico Medley 7 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-terbinafina-250mg-generico-medley-7-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 44.99,
      "nome": "Cloridrato de Terbinafina 250mg Biosintética 14 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-terbinafina-250mg-biosintetica-14-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 40.12,
      "nome": "Funtyl 1% Cloridrato De Terbinafina 10mg Creme 20g",
      "url": "https://www.panvel.com/panvel/funtyl-1-cloridrato-de-terbinafina-10mg-creme-20g/p-808190",
      "disponivel": true
    }
  },
  "med-00265": {
    "paguemenos": {
      "preco": 30.59,
      "nome": "Beneum 300mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/beneum-300mg-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 30.59,
      "nome": "Beneum 300mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/beneum-300mg-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 26.99,
      "nome": "Nervamin Cloridrato de Tiamina 300mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/nervamin-cloridrato-de-tiamina-300mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 26.99,
      "nome": "Nervamin Cloridrato de Tiamina 300mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/nervamin-cloridrato-de-tiamina-300mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 18.49,
      "nome": "Beneum 300mg 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/beneum-300mg-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00585": {
    "paguemenos": {
      "preco": 81.99,
      "nome": "Citoneurin 5000mcg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/citoneurin-5-000-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 81.99,
      "nome": "Citoneurin 5000mcg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/citoneurin-5-000-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 73.64,
      "nome": "Nevrix Nitrato de Tiamina 100mg + Cloridrato de Piridoxina 100mg + Cianocobalamina 5000mcg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nevrix-arese-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 57.91,
      "nome": "Nevrix Nitrato de Tiamina 100mg + Cloridrato de Piridoxina 100mg + Cianocobalamina 5000mcg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/nevrix-arese-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 75.99,
      "nome": "Renovi B 5000mcg + 100mg +100mg Supera 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/renovi-b-30-com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 74.14,
      "nome": "Nevrix Vitamina B1 + Vitamina B6 + Vitamina B12 20 Comprimidos Revestivos",
      "url": "https://www.panvel.com/panvel/nevrix-vitamina-b1-vitamina-b6-vitamina-b12-20-comprimidos-revestivos/p-103250",
      "disponivel": true
    }
  },
  "med-00266": {
    "paguemenos": {
      "preco": 42.99,
      "nome": "Cloridrato de Ticlopidina 250mg 30 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-ticlopidina-250mg-com-30-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 42.99,
      "nome": "Cloridrato de Ticlopidina 250mg 30 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-ticlopidina-250mg-com-30-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 31.45,
      "nome": "Cloridrato de Ticlopidina 250mg Genérico Biolab 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-ticlopidina-250mg-generico-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 27.54,
      "nome": "Cloridrato de Ticlopidina 250mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-ticlopidina-250mg-generico-ems-20-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 30.39,
      "nome": "Cloridrato de Ticlopidina 250mg Biolab 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/clor-ticlopidina-250mg-30com--g--biolab/p",
      "disponivel": true
    }
  },
  "med-00267": {
    "paguemenos": {
      "preco": 20.79,
      "nome": "Unitidazin 50mg 20 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/unitidazin-500mg-com-20-comprimidos-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.79,
      "nome": "Unitidazin 50mg 20 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/unitidazin-500mg-com-20-comprimidos-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 15.33,
      "nome": "Melleril Cloridrato De Tioridazina 10mg 20 Drágeas",
      "url": "https://www.drogariasaopaulo.com.br/melleril-10mg-icn-20-drageas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 16.11,
      "nome": "Melleril Cloridrato De Tioridazina 10mg 20 Drágeas",
      "url": "https://www.drogariaspacheco.com.br/melleril-10mg-icn-20-drageas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 24.28,
      "nome": "Unitidazin 50mg União Química  20 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/unitidazin-50mg-uniao-quimica--20-comprimidos-revestidos-/p",
      "disponivel": true
    }
  },
  "med-00268": {
    "paguemenos": {
      "preco": 35.99,
      "nome": "Cloridrato de Tizanidina 2mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/cloridrato-de-tizanidina-2mg-com-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 35.99,
      "nome": "Cloridrato de Tizanidina 2mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/cloridrato-de-tizanidina-2mg-com-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 69.61,
      "nome": "Sirdalud Cloridrato De Tizanidina 2mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/sirdalud-2mg-novartis-biociencias-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 59.87,
      "nome": "Sirdalud Cloridrato De Tizanidina 2mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/sirdalud-2mg-novartis-biociencias-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 41.45,
      "nome": "Cloridrato De Tizanidina 2mg Ranbaxy 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-tizanidina-2mg-ranbaxy-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00270": {
    "paguemenos": {
      "preco": 5.69,
      "nome": "Cloridrato de Tramadol 50mg 10 Cápsulas Duras Genérico Teuto",
      "url": "https://www.paguemenos.com.br/cloridrato-de-tramadol-50mg-com-10-capsulasulas-gn-te/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.69,
      "nome": "Cloridrato de Tramadol 50mg 10 Cápsulas Duras Genérico Teuto",
      "url": "https://www.extrafarma.com.br/cloridrato-de-tramadol-50mg-com-10-capsulasulas-gn-te/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 5.99,
      "nome": "Cloridrato de Tramadol 50mg Genérico EMS 10 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-tramadol-50mg-ems-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 5.99,
      "nome": "Cloridrato de Tramadol 50mg Genérico EMS 10 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-tramadol-50mg-ems-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.89,
      "nome": "Cloridrato de Tramadol 50mg 10 Cápsulas Germed Pharma",
      "url": "https://www.drogariavenancio.com.br/clor-tramadol-50mg-10cps-g--a2-germed/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.99,
      "nome": "Cloridrato De Tramadol 37,5mg + Paracetamol 325mg 10 Comprimidos Revestidos Eurofarma Generico A2",
      "url": "https://www.panvel.com/panvel/cloridrato-de-tramadol-375mg-paracetamol-325mg-10-comprimidos-revestidos-eurofarma-generico-a2/p-94491",
      "disponivel": true
    }
  },
  "med-00271": {
    "paguemenos": {
      "preco": 78.19,
      "nome": "Nusira 25mg + 25mg 20 Comprimidos",
      "url": "https://www.paguemenos.com.br/nusira-25-mg-c-20-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 78.19,
      "nome": "Nusira 25mg + 25mg 20 Comprimidos",
      "url": "https://www.extrafarma.com.br/nusira-25-mg-c-20-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 87.21,
      "nome": "Nusira Cloridrato de Tramadol 25mg + Diclofenaco Sódico 25mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nusira-25mg-zodiac-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 85.38,
      "nome": "Nusira Cloridrato de Tramadol 25mg + Diclofenaco Sódico 25mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/nusira-25mg-zodiac-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 87.12,
      "nome": "Nusira 25mg + 25mg Adium 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/nusira-25mg---25mg-20com--a2-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 92.99,
      "nome": "Adorlan Diclofenaco Sódico 25mg 20 Comprimidos",
      "url": "https://www.panvel.com/panvel/adorlan-diclofenaco-sodico-25mg-20-comprimidos/p-108167",
      "disponivel": true
    }
  },
  "med-00272": {
    "paguemenos": {
      "preco": 57.49,
      "nome": "Cloridrato de Trazodona 100mg 30 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/cloridrato-de-trazodona-100mg-30-comprimidos-revestidos-sanofi-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 57.49,
      "nome": "Cloridrato de Trazodona 100mg 30 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/cloridrato-de-trazodona-100mg-30-comprimidos-revestidos-sanofi-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 55.35,
      "nome": "Donaren Cloridrato De Trazodona 50mg 60 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/donaren-50mg-apsen-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 50.46,
      "nome": "Motraz Cloridrato De Trazodona 50mg 60 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/motraz-50mg-momenta-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 44.99,
      "nome": "Cloridrato De Trazodona 100mg Torrent 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/clor-trazodona-100mg-30com--c1--g--torrent/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 52.05,
      "nome": "Donaren Cloridrato De Trazodona 50mg 60 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/donaren-cloridrato-de-trazodona-50mg-60-comprimidos-revestidos/p-358363",
      "disponivel": true
    }
  },
  "med-00273": {
    "paguemenos": {
      "preco": 94.49,
      "nome": "Cloridrato De Valaciclovir 500mg Ranbaxy 10 Comprimidos Genérico",
      "url": "https://www.paguemenos.com.br/cloridrato-de-valaciclovir-500mg-com-10-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 94.49,
      "nome": "Cloridrato De Valaciclovir 500mg Ranbaxy 10 Comprimidos Genérico",
      "url": "https://www.extrafarma.com.br/cloridrato-de-valaciclovir-500mg-com-10-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 101.91,
      "nome": "Valaski Cloridrato de Valaciclovir 500mg 10 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/valaski-500mg-supera-farma-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 99.36,
      "nome": "Vanlure Cloridrato de Valaciclovir 500mg 10 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/vanlur-500mg-momenta-10-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 101.39,
      "nome": "Vanlure 500mg Momenta 10 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/vanlure-500mg-10com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 89.9,
      "nome": "Valaski Valaciclovir 500mg 10 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/valaski-valaciclovir-500mg-10-comprimidos-revestidos/p-90485",
      "disponivel": true
    }
  },
  "med-00276": {
    "paguemenos": {
      "preco": 44.79,
      "nome": "Cloridrato De Venlafaxina 75mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/cloridrato-de-venlafaxina-75mg-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 44.79,
      "nome": "Cloridrato De Venlafaxina 75mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/cloridrato-de-venlafaxina-75mg-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 44.59,
      "nome": "Cloridrato de Venlafaxina 75mg Genérico Biosintética 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-venlafaxina-75mg-biosintetica-28-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.9,
      "nome": "Cloridrato De Venlafaxina 75mg Genérico Geolab 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-venlafaxina-75mg-generico-geolab-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 24.99,
      "nome": "Cloridrato De Venlafaxina 37,5mg Torrent 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-venlafaxina-375mg-torrent-30-capsulas/p",
      "disponivel": true
    }
  },
  "med-00277": {
    "paguemenos": {
      "preco": 12.69,
      "nome": "Cloridrato de Verapamil 80mg 30 Comprimidos Revestidos Genérico Biosintética",
      "url": "https://www.paguemenos.com.br/cloridrato-de-verapamil-80mg-com-30-comprimidos-generico-biosintetica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.69,
      "nome": "Cloridrato de Verapamil 80mg 30 Comprimidos Revestidos Genérico Biosintética",
      "url": "https://www.extrafarma.com.br/cloridrato-de-verapamil-80mg-com-30-comprimidos-generico-biosintetica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 20.45,
      "nome": "Cloridrato de Verapamil 80mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cloridrato-de-verapamil-80mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.59,
      "nome": "Cloridrato de Verapamil 80mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cloridrato-de-verapamil-80mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.33,
      "nome": "Cloridrato De Verapamil 80mg Aché 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-verapamil-80mg-ache-30-comprimidos-revestidos/p",
      "disponivel": true
    }
  },
  "med-00278": {
    "paguemenos": {
      "preco": 239.99,
      "nome": "Geodon 20mg/Ml Injetável Im Amp/1 P",
      "url": "https://www.paguemenos.com.br/geodon-20mg-ml-injetavel-im-amp-1-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 239.99,
      "nome": "Geodon 20mg/Ml Injetável Im Amp/1 P",
      "url": "https://www.extrafarma.com.br/geodon-20mg-ml-injetavel-im-amp-1-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 594.99,
      "nome": "Geodon Cloridrato De Ziprasidona 40mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/geodon-40mg-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 594.39,
      "nome": "Geodon Cloridrato De Ziprasidona 40mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/geodon-40mg-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 1016.42,
      "nome": "Geodon 80mg Viatris 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/geodon-80mg-30-capsulas/p",
      "disponivel": true
    }
  },
  "med-00279": {
    "paguemenos": {
      "preco": 14.69,
      "nome": "Clortalidona 50mg Xom 28 Comprimidos Genérico Vitamedic",
      "url": "https://www.paguemenos.com.br/clortalidona-50mg-xom-28-comprimidos-generico-vitamedic/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 14.69,
      "nome": "Clortalidona 50mg Xom 28 Comprimidos Genérico Vitamedic",
      "url": "https://www.extrafarma.com.br/clortalidona-50mg-xom-28-comprimidos-generico-vitamedic/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 17.59,
      "nome": "Clortalidona 12,5mg Genérico EMS 60 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/clortalidona-125mg-generico-ems-60-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 19.79,
      "nome": "Clortalidona 12,5mg Genérico EMS 60 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/clortalidona-125mg-generico-ems-60-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.99,
      "nome": "Clortalidona 50mg Vitamedic 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/clortalidona-50mg-vitamedic-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00280": {
    "paguemenos": {
      "preco": 9.49,
      "nome": "Atenolol 50mg + Clortalidona 12,5mg 30 Comprimidos Genérico Vitamedic",
      "url": "https://www.paguemenos.com.br/atenolol-50mg-mais-clortalidona-12-5mg-30-comprimidos-generico-vitamedic/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.49,
      "nome": "Atenolol 50mg + Clortalidona 12,5mg 30 Comprimidos Genérico Vitamedic",
      "url": "https://www.extrafarma.com.br/atenolol-50mg-mais-clortalidona-12-5mg-30-comprimidos-generico-vitamedic/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 26.21,
      "nome": "Revert Atenolol 50mg + Clortalidona 12,5mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/revert-50mg--125mg-melora-33-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.35,
      "nome": "Revert Atenolol 50mg + Clortalidona 12,5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/revert-50mg--125mg-melora-33-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.99,
      "nome": "Atenolol + Clortalidona 50mg +12,5mg Sandoz 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/atenolol---clortalidona-50mg--125mg-sandoz-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 18.49,
      "nome": "Atenolol + Clortalidona 50/12,5mg 30 Comprimidos Eurofarma Genérico C",
      "url": "https://www.panvel.com/panvel/atenolol-clortalidona-50-125mg-30-comprimidos-eurofarma-generico-c/p-988590",
      "disponivel": true
    }
  },
  "med-00281": {
    "paguemenos": {
      "preco": 11.79,
      "nome": "Clotrimazol Creme 20 G Genérico Germed",
      "url": "https://www.paguemenos.com.br/clotrimazol-creme-20-g-generico-germed/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 11.79,
      "nome": "Clotrimazol Creme 20 G Genérico Germed",
      "url": "https://www.extrafarma.com.br/clotrimazol-creme-20-g-generico-germed/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 19.89,
      "nome": "Clotrimazol 10mg/g + Acetato de Dexametasona 0,4mg/g Genérico Medley 40g Creme",
      "url": "https://www.drogariasaopaulo.com.br/clotrimazol-acetato-dexametasona-10mg-generico-medley-creme-topico-40g/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 23.75,
      "nome": "Clotrimazol 20mg/g Genérico Germed 20g Creme Vaginal + 3 Aplicadores",
      "url": "https://www.drogariaspacheco.com.br/clotrimazol-creme-vaginal-20mg-g-generico-germed-20g-3-aplicadores/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.99,
      "nome": "Clotrimazol Ems Genérico Creme 20g",
      "url": "https://www.drogariavenancio.com.br/clotrimazol-creme-20g-ems-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 13.49,
      "nome": "Clotrimazol 10mg Creme 20g Medley Genérico P",
      "url": "https://www.panvel.com/panvel/clotrimazol-10mg-creme-20g-medley-generico-p/p-428940",
      "disponivel": true
    }
  },
  "med-00282": {
    "paguemenos": {
      "preco": 52.99,
      "nome": "Okótico 25mg 30 Comprimidos",
      "url": "https://www.paguemenos.com.br/okotico-25mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 52.99,
      "nome": "Okótico 25mg 30 Comprimidos",
      "url": "https://www.extrafarma.com.br/okotico-25mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 64.01,
      "nome": "Pinazan Clozapina 25mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/pinazan-25mg-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 48.89,
      "nome": "Pinazan Clozapina 25mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/pinazan-25mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 49.89,
      "nome": "Pinazan 25mg Com 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/pinazan-25mg-com-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00283": {
    "paguemenos": {
      "preco": 22.29,
      "nome": "Dbriz Uno Colagenase 0,6U/g Pomada Dermatológica 10g + 1 Espátula",
      "url": "https://www.paguemenos.com.br/dbriz-uno-colagenase-0-6u-g-pomada-dermatologica-10g-mais-1-espatula/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 22.29,
      "nome": "Dbriz Uno Colagenase 0,6U/g Pomada Dermatológica 10g + 1 Espátula",
      "url": "https://www.extrafarma.com.br/dbriz-uno-colagenase-0-6u-g-pomada-dermatologica-10g-mais-1-espatula/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 33.45,
      "nome": "Kollagenase 10mg/0,6uig Pomada Com 15g",
      "url": "https://www.drogariavenancio.com.br/kollagenase-10mg-06uig-pomada-com-15g/p",
      "disponivel": true
    }
  },
  "med-00284": {
    "paguemenos": {
      "preco": 35.59,
      "nome": "Kollagenase com Cloranfenicol 0,6U/g + 0,01g/g Pomada 15g + Espátula",
      "url": "https://www.paguemenos.com.br/kollagenase-com-cloranfenicol-pomada-15g-mais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 35.59,
      "nome": "Kollagenase com Cloranfenicol 0,6U/g + 0,01g/g Pomada 15g + Espátula",
      "url": "https://www.extrafarma.com.br/kollagenase-com-cloranfenicol-pomada-15g-mais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 35.27,
      "nome": "Dbriz Colagenase 0,6U/g + Sulfato de Neomicina 0,01g/g 15g Pomada Dermatológica",
      "url": "https://www.drogariasaopaulo.com.br/dbriz-supera-farma-15-gramas-pomada-dermatologica/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.78,
      "nome": "Kollagenase com Cloranfenicol Colagenase 0,6U/g + Cloranfenicol 0,01g/g 15g Pomada",
      "url": "https://www.drogariaspacheco.com.br/kollagenase-c-cloranfenicol-pomada-cimed-15g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.7,
      "nome": "Dbriz 0,6u/g + 0,01g/g Supera Pomada Dermatológica 15g + 1 Espátula",
      "url": "https://www.drogariavenancio.com.br/dbriz-pom-derm-15g---esp-plas/p",
      "disponivel": true
    }
  },
  "med-00285": {
    "paguemenos": {
      "preco": 21.29,
      "nome": "Colchicina 0,5mg Com 20 Comprimidos",
      "url": "https://www.paguemenos.com.br/colchicina-0-5mg-com-20-comprimidos/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 21.29,
      "nome": "Colchicina 0,5mg Com 20 Comprimidos",
      "url": "https://www.extrafarma.com.br/colchicina-0-5mg-com-20-comprimidos/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 9.02,
      "nome": "Colchicina 0,5mg Genérico Multilab 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/colchicina-0-5mg-generico-multilab-20-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 15.59,
      "nome": "Colchicina 0,5mg Genérico Multilab 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/colchicina-0-5mg-generico-multilab-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.48,
      "nome": "Colchicina 0,5mg Geolab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/colchicina-05mg-geolab-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00288": {
    "paguemenos": {
      "preco": 54.99,
      "nome": "Serenus 20 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/serenus-com-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 54.99,
      "nome": "Serenus 20 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/serenus-com-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 44.99,
      "nome": "Serenus Biolab 20 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/serenus-biolab-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 74.42,
      "nome": "Pasalix 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/pasalix-30-comprimidos-revestidos/p-114145",
      "disponivel": true
    }
  },
  "med-00290": {
    "paguemenos": {
      "preco": 89.99,
      "nome": "Glif Dapagliflozina 10mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/glif-dapagliflozina-10mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 89.99,
      "nome": "Glif Dapagliflozina 10mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/glif-dapagliflozina-10mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 73.98,
      "nome": "Dapflow Dapagliflozina 10mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/dapflow-dapagliflozina-10mg-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 73.98,
      "nome": "Dapflow Dapagliflozina 10mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/dapflow-dapagliflozina-10mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 74.99,
      "nome": "Dapagliflozina 10mg Eurofarma 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dapagliflozina-10mg-30cpr--g-/p",
      "disponivel": true
    }
  },
  "med-00294": {
    "paguemenos": {
      "preco": 156.99,
      "nome": "Haldol Decanoato 50mg/ml Solução Injetável 5 Ampolas 1ml",
      "url": "https://www.paguemenos.com.br/haldol-decanoato-50mg-ml-1-ml-psicotropico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 156.99,
      "nome": "Haldol Decanoato 50mg/ml Solução Injetável 5 Ampolas 1ml",
      "url": "https://www.extrafarma.com.br/haldol-decanoato-50mg-ml-1-ml-psicotropico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 167.29,
      "nome": "Haldol Decanoato de Haloperidol 50mg/ml 1ml 5 Ampolas Injetável",
      "url": "https://www.drogariasaopaulo.com.br/haldol-decanoato-50mg-johnson-5x1ml-injetavel/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 160.22,
      "nome": "Haldol Decanoato de Haloperidol 50mg/ml 1ml 5 Ampolas Injetável",
      "url": "https://www.drogariaspacheco.com.br/haldol-decanoato-50mg-johnson-5x1ml-injetavel/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 163.49,
      "nome": "Haldol Decanoato 50mg Injetavel Com 5 Ampolas De 1ml",
      "url": "https://www.drogariavenancio.com.br/haldol-decanoato-50mg-injetavel-com-5-ampolas-de-1ml/p",
      "disponivel": true
    }
  },
  "med-00439": {
    "paguemenos": {
      "preco": 7.99,
      "nome": "Haldol 1mg 20 Comprimidos",
      "url": "https://www.paguemenos.com.br/haldol-1mg-comprimidos20-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.99,
      "nome": "Haldol 1mg 20 Comprimidos",
      "url": "https://www.extrafarma.com.br/haldol-1mg-comprimidos20-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 5.5,
      "nome": "Haloperidol 2mg/ml Genérico União Química 20ml Gotas",
      "url": "https://www.drogariasaopaulo.com.br/haloperidol-2mgml-gotas-generico-20ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 3.78,
      "nome": "Haloperidol 2mg/ml Genérico União Química 20ml Gotas",
      "url": "https://www.drogariaspacheco.com.br/haloperidol-2mgml-gotas-generico-20ml/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 7.89,
      "nome": "Haldol 1mg Com 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/haldol-1mg-com-20-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00295": {
    "paguemenos": {
      "preco": 2124.65,
      "nome": "Exjade 250mg Com 28 Comprimidos",
      "url": "https://www.paguemenos.com.br/exjade-250mg-com-28-comprimidos/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 2124.65,
      "nome": "Exjade 250mg Com 28 Comprimidos",
      "url": "https://www.extrafarma.com.br/exjade-250mg-com-28-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 1104.19,
      "nome": "Exjade 125mg 28 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/exjade-125mg-28-comprimidos/p",
      "disponivel": false
    }
  },
  "med-00297": {
    "paguemenos": {
      "preco": 48.79,
      "nome": "Deflazacorte 6mg 20 Comprimidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/deflazacorte-6mg-com-20-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 48.79,
      "nome": "Deflazacorte 6mg 20 Comprimidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/deflazacorte-6mg-com-20-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 53.67,
      "nome": "Deflazacorte 6mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/deflazacorte-6mg-generico-ems-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 64.59,
      "nome": "Deflazacorte 6mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/deflazacorte-6mg-generico-ems-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 58.09,
      "nome": "Deflaimmun 7,5mg Ems 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/deflaimmun-75mg-ems-20-comprimidos/p",
      "disponivel": false
    }
  },
  "med-00298": {
    "paguemenos": {
      "preco": 20.99,
      "nome": "Deltalab 0,2mg/ml Sabor Maçã Verde Loção 100ml",
      "url": "https://www.paguemenos.com.br/deltalab-locao-100ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.99,
      "nome": "Deltalab 0,2mg/ml Sabor Maçã Verde Loção 100ml",
      "url": "https://www.extrafarma.com.br/deltalab-locao-100ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.99,
      "nome": "Deltalab Loção 100ml",
      "url": "https://www.drogariasaopaulo.com.br/deltalab-locao-100ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 14.5,
      "nome": "Deltalab Loção Para Sarna 100mL Deltametrina Uso Adulto e Infantil",
      "url": "https://www.drogariaspacheco.com.br/deltalab-locao-para-sarna-100ml-deltametrina-uso-adulto-e-infantil-1752933l8y8842j4/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 27.89,
      "nome": "Pediderm 0,2mg/ml Cifarma Shampoo 100ml",
      "url": "https://www.drogariavenancio.com.br/pediderm-02mg-ml-cifarma-shampoo-100ml/p",
      "disponivel": false
    }
  },
  "med-00299": {
    "paguemenos": {
      "preco": 9.19,
      "nome": "Desloratadina 10 Comprimidos Revestidos 5mg Genérico Globo",
      "url": "https://www.paguemenos.com.br/desloratadina-10-comprimidos-revestidos-5mg-generico-globo/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.19,
      "nome": "Desloratadina 10 Comprimidos Revestidos 5mg Genérico Globo",
      "url": "https://www.extrafarma.com.br/desloratadina-10-comprimidos-revestidos-5mg-generico-globo/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 19.81,
      "nome": "Superhist ODT Desloratadina 2,5mg 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/superhist-odt-2-5mg-eurofarma-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.37,
      "nome": "Superhist ODT Desloratadina 2,5mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/superhist-odt-2-5mg-eurofarma-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 15.99,
      "nome": "Desloratadina 5mg Eurofarma 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/desloratadina-5mg-10com--g--eurofarma/p",
      "disponivel": true
    }
  },
  "med-00300": {
    "paguemenos": {
      "preco": 49.49,
      "nome": "Desalex D12 2,5mg + 120mg 10 Comprimidos de Liberação Modificada",
      "url": "https://www.paguemenos.com.br/desalex-d12-2-5mg-com-10-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 49.49,
      "nome": "Desalex D12 2,5mg + 120mg 10 Comprimidos de Liberação Modificada",
      "url": "https://www.extrafarma.com.br/desalex-d12-2-5mg-com-10-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 46.52,
      "nome": "Desalex D12 Desloratadina 2,5mg + Sulfato de Pseudoefedrina 120mg 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/desalex-d12-schering-plough-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 46.52,
      "nome": "Desalex D12 Desloratadina 2,5mg + Sulfato de Pseudoefedrina 120mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/desalex-d12-schering-plough-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 57.49,
      "nome": "Esalerg D12 2,5/120mg 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/esalerg-d12-25-120mg-10-comprimidos/p",
      "disponivel": false
    }
  },
  "med-00509": {
    "paguemenos": {
      "preco": 19.39,
      "nome": "Loratadina + Sulfato de Pseudoefedrina Xarope 60ml EMS",
      "url": "https://www.paguemenos.com.br/loratadinamaissulfato-de-pseudoefedrina-xarope-60ml-generico-ems/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 19.39,
      "nome": "Loratadina + Sulfato de Pseudoefedrina Xarope 60ml EMS",
      "url": "https://www.extrafarma.com.br/loratadinamaissulfato-de-pseudoefedrina-xarope-60ml-generico-ems/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 45.27,
      "nome": "Histadin D Loratadina 1mg/ml + Sulfato de Pseudoefedrina 12mg/ml 60ml Xarope",
      "url": "https://www.drogariasaopaulo.com.br/histadin-d-xarope-uniao-quimica-60ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 45.27,
      "nome": "Histadin D Loratadina 1mg/ml + Sulfato de Pseudoefedrina 12mg/ml 60ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/histadin-d-xarope-uniao-quimica-60ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 47.49,
      "nome": "Histadin D5 120mg União Química 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/histadin-d5-120mg-uniao-quimica-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 23.9,
      "nome": "Loratamed D Xarope Loratadina 1mg/ml 60ml",
      "url": "https://www.panvel.com/panvel/loratamed-d-xarope-loratadina-1mg-ml-60ml/p-103860",
      "disponivel": true
    }
  },
  "med-00520": {
    "paguemenos": {
      "preco": 29.59,
      "nome": "Emsexpector 0,4mg/ml + 4mg/ml + 20mg/ml Sabor Caramelo Xarope 120ml",
      "url": "https://www.paguemenos.com.br/emsexpector-xarope-120ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 29.59,
      "nome": "Emsexpector 0,4mg/ml + 4mg/ml + 20mg/ml Sabor Caramelo Xarope 120ml",
      "url": "https://www.extrafarma.com.br/emsexpector-xarope-120ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 29.78,
      "nome": "Emsexpector Maleato de Dexclorfeniramina 0,4mg/ml + Sulfato de Pseudoefedrina 4mg/ml + Guaifenesina 20mg/ml 120ml Xarope",
      "url": "https://www.drogariasaopaulo.com.br/emsexpector-244mg-ems-xarope-120ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.75,
      "nome": "Emsexpector Maleato de Dexclorfeniramina 0,4mg/ml + Sulfato de Pseudoefedrina 4mg/ml + Guaifenesina 20mg/ml 120ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/emsexpector-244mg-ems-xarope-120ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 22.19,
      "nome": "Emsexpector Ems Solução Oral 120ml",
      "url": "https://www.drogariavenancio.com.br/emsexpector-ems-solucao-oral-120ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 25.99,
      "nome": "Expectamin Dexclofeniramina 0,4mg + Pseudoefedrina 4mg + Guaifenesina 20mg Xarope 120ml",
      "url": "https://www.panvel.com/panvel/expectamin-dexclofeniramina-04mg-pseudoefedrina-4mg-guaifenesina-20mg-xarope-120ml/p-103927",
      "disponivel": true
    }
  },
  "med-00301": {
    "paguemenos": {
      "preco": 13.39,
      "nome": "Desogestrel 75mcg 28 Comprimidos Revestidos Genérico Legrand",
      "url": "https://www.paguemenos.com.br/desogestrel-75mcg-com-28-comprimidos-generico-legrand/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.39,
      "nome": "Desogestrel 75mcg 28 Comprimidos Revestidos Genérico Legrand",
      "url": "https://www.extrafarma.com.br/desogestrel-75mcg-com-28-comprimidos-generico-legrand/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 18.99,
      "nome": "Desogestrel 150mcg + Etinilestradiol 30mcg Genérico Eurofarma 21 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/desogestrel-150mcg-etinilestradiol-30mcg-generico-eurofarma-21-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.69,
      "nome": "Desogestrel 150mcg + Etinilestradiol 20mcg Genérico Eurofarma 21 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/desogestrel-150mcg-etinilestradiol-20mcg-generico-eurofarma-21-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 13.99,
      "nome": "Desogestrel 0,075mg Eurofarma 28 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/desogestrel-0075mg-eurofarma-28-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00302": {
    "paguemenos": {
      "preco": 17.99,
      "nome": "Desonida 0,5mg/g Creme Dermatológico 30g Genérico Germed",
      "url": "https://www.paguemenos.com.br/desonida-0-5mg-30g-creme-generico-germed/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 17.99,
      "nome": "Desonida 0,5mg/g Creme Dermatológico 30g Genérico Germed",
      "url": "https://www.extrafarma.com.br/desonida-0-5mg-30g-creme-generico-germed/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 15.39,
      "nome": "Desonida 0,5mg/g Genérico Germed 30g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/desonida-05mgg-generico-natures-plus-pomada-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 15.39,
      "nome": "Desonida 0,5mg/g Genérico Germed 30g Pomada",
      "url": "https://www.drogariaspacheco.com.br/desonida-05mgg-generico-natures-plus-pomada-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.91,
      "nome": "Desonida 0,5mg Ems 30g Creme Dermatológico",
      "url": "https://www.drogariavenancio.com.br/desonida-05mg-ems-30g-creme-dermatologico/p",
      "disponivel": true
    }
  },
  "med-00303": {
    "paguemenos": {
      "preco": 8.19,
      "nome": "Dexametasona 0,1mg/ml Sabor Cereja Elixir 100ml Genérico Teuto",
      "url": "https://www.paguemenos.com.br/dexametasona-elixir-0-1mg-ml-100ml-generico-teuto/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.19,
      "nome": "Dexametasona 0,1mg/ml Sabor Cereja Elixir 100ml Genérico Teuto",
      "url": "https://www.extrafarma.com.br/dexametasona-elixir-0-1mg-ml-100ml-generico-teuto/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 10.99,
      "nome": "Dexametasona 1mg/ml + Sulfato de Neomicina 3,5mg/ml + Sulfato de Polimixina B 6.000UI/ml Genérico Geolab 5ml Gotas",
      "url": "https://www.drogariasaopaulo.com.br/dexametasona-sulfato-de-neomicina-sulfato-de-polimixina-b-generico-geolab/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 5.48,
      "nome": "Dexason Dexametasona 1mg/g 10g Creme",
      "url": "https://www.drogariaspacheco.com.br/dexason-creme-1mg-teuto-10g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 5.59,
      "nome": "Dexason Teuto Creme 10g",
      "url": "https://www.drogariavenancio.com.br/dexason-cr-10g-teuto/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.83,
      "nome": "Maxidex Acetato De Dexametasona Colírio 5ml",
      "url": "https://www.panvel.com/panvel/maxidex-acetato-de-dexametasona-colirio-5ml/p-15270",
      "disponivel": true
    }
  },
  "med-00305": {
    "paguemenos": {
      "preco": 23.79,
      "nome": "Cloridrato de Ciprofloxacino 3,5mg/ml + Dexametasona 1mg/ml Solução Oftálmica 5ml Genérico Geolab",
      "url": "https://www.paguemenos.com.br/cloridrato-de-ciprofloxacino-mais-dexametasona-solucao-oftalmica-5ml-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.79,
      "nome": "Cloridrato de Ciprofloxacino 3,5mg/ml + Dexametasona 1mg/ml Solução Oftálmica 5ml Genérico Geolab",
      "url": "https://www.extrafarma.com.br/cloridrato-de-ciprofloxacino-mais-dexametasona-solucao-oftalmica-5ml-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 34.88,
      "nome": "Duodex Cloridrato de Ciprofloxacino 3,5mg/ml + Dexametasona 1mg/ml 5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/duodex-3-5mg-ml---1mg-ml-geolab-5ml-solucao-oftalmica/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 31.84,
      "nome": "Duodex Cloridrato de Ciprofloxacino 3,5mg/ml + Dexametasona 1mg/ml 5ml Solução Oftálmica",
      "url": "https://www.drogariaspacheco.com.br/duodex-3-5mg-ml---1mg-ml-geolab-5ml-solucao-oftalmica/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 21.51,
      "nome": "Cloridrato de Ciprofloxacino + Dexametasona 3,5mg/ml + 1mg/ml Geolab Solução Oftálmica 5ml",
      "url": "https://www.drogariavenancio.com.br/clor-ciprofloxacino-dexametasona-35mg-ml-1mg-ml-sol-oft-5ml--g--geolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 40.98,
      "nome": "Cylocort Ciprofloxacino 3,5mg/g + Dexametasona 1mg/g Pomada Oftálmica 3,5g",
      "url": "https://www.panvel.com/panvel/cylocort-ciprofloxacino-35mg-g-dexametasona-1mg-g-pomada-oftalmica-35g/p-555160",
      "disponivel": true
    }
  },
  "med-00304": {
    "paguemenos": {
      "preco": 30.49,
      "nome": "Cloridrato de Ciprofloxacino 3,5mg/ml + Dexametasona 1mg/ml Solução Oftálmica 5ml Genérico EMS",
      "url": "https://www.paguemenos.com.br/cloridrato-de-ciprofloxacino-mais-dexametasona-solucao-oftalmica-5ml-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 30.49,
      "nome": "Cloridrato de Ciprofloxacino 3,5mg/ml + Dexametasona 1mg/ml Solução Oftálmica 5ml Genérico EMS",
      "url": "https://www.extrafarma.com.br/cloridrato-de-ciprofloxacino-mais-dexametasona-solucao-oftalmica-5ml-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 50.08,
      "nome": "Maxiflox-D Cloridrato de Ciprofloxacino 3,5mg/g + Dexametasona 1mg/g 3,5g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/maxiflox-d-latinofarma-pomada-35g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 40.08,
      "nome": "Maxiflox-D Cloridrato de Ciprofloxacino 3,5mg/g + Dexametasona 1mg/g 3,5g Pomada",
      "url": "https://www.drogariaspacheco.com.br/maxiflox-d-latinofarma-pomada-35g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 45.92,
      "nome": "Maxiflox-d Ciprofloxacino 3,5mg/ml + Dexametasona 1mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/maxiflox-d-ciprofloxacino-35mg-ml-dexametasona-1mg-ml-colirio-5ml/p-489540",
      "disponivel": true
    }
  },
  "med-00306": {
    "paguemenos": {
      "preco": 20.99,
      "nome": "Maxinom 1mg/ml + 5mg/ml + 6000UI/ml Suspensão Oftálmica 5ml",
      "url": "https://www.paguemenos.com.br/maxinom-colirio-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.99,
      "nome": "Maxinom 1mg/ml + 5mg/ml + 6000UI/ml Suspensão Oftálmica 5ml",
      "url": "https://www.extrafarma.com.br/maxinom-colirio-5ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 36.6,
      "nome": "Maxinom Dexametasona 1mg/g + Sulfato de Neomicina 5mg/g + Sulfato de Polimixina B 6.000UI/g 3,5g Pomada Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/maxinom-pomada-oftalmologica-uniao-quimica-3-5g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 31.15,
      "nome": "Maxinom Dexametasona 1mg/g + Sulfato de Neomicina 5mg/g + Sulfato de Polimixina B 6.000UI/g 3,5g Pomada Oftálmica",
      "url": "https://www.drogariaspacheco.com.br/maxinom-pomada-oftalmologica-uniao-quimica-3-5g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.49,
      "nome": "Maxitrol Susp C/5 Ml",
      "url": "https://www.drogariavenancio.com.br/maxitrol-susp-c-5-ml/p",
      "disponivel": true
    }
  },
  "med-00713": {
    "paguemenos": {
      "preco": 12.19,
      "nome": "Tobramicina+dexametasona 5ml Genérico Biossintética",
      "url": "https://www.paguemenos.com.br/tobramicinamaisdexametasona-5ml-generico-biossintetica/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 12.19,
      "nome": "Tobramicina+dexametasona 5ml Genérico Biossintética",
      "url": "https://www.extrafarma.com.br/tobramicinamaisdexametasona-5ml-generico-biossintetica/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 19.59,
      "nome": "Tobramicina 3mg/ml Genérico Germed 5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/tobramicina-3mgml-generico-natures-plus-5ml-solucao-oftalmica/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 19.59,
      "nome": "Tobramicina 3mg/ml Genérico Germed 5ml Solução Oftálmica",
      "url": "https://www.drogariaspacheco.com.br/tobramicina-3mgml-generico-natures-plus-5ml-solucao-oftalmica/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 17.18,
      "nome": "Tobramicina 3mg/ml Geolab Solução Oftálmica 5ml",
      "url": "https://www.drogariavenancio.com.br/tobramicina-3mg-ml-geolab-solucao-oftalmica-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 19.49,
      "nome": "Tobramicina 3mg Solução Oftalmica 5ml Geol Gen",
      "url": "https://www.panvel.com/panvel/tobramicina-3mg-solucao-oftalmica-5ml-geol-gen/p-98445",
      "disponivel": true
    }
  },
  "med-00309": {
    "paguemenos": {
      "preco": 44.79,
      "nome": "Epitegel 50mg/g Gel Oftálmico 10g",
      "url": "https://www.paguemenos.com.br/epitegel-gel-oftalmica-10g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 44.79,
      "nome": "Epitegel 50mg/g Gel Oftálmico 10g",
      "url": "https://www.extrafarma.com.br/epitegel-gel-oftalmica-10g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 58.29,
      "nome": "Epitegel Dexpantenol 50mg/g 10g Gel Oftálmico",
      "url": "https://www.drogariasaopaulo.com.br/gel-oftalmico-epitegel-50mg-bl-industria-otica-10g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 46.64,
      "nome": "Epitegel Dexpantenol 50mg/g 10g Gel Oftálmico",
      "url": "https://www.drogariaspacheco.com.br/gel-oftalmico-epitegel-50mg-bl-industria-otica-10g/p",
      "disponivel": true
    }
  },
  "med-00310": {
    "paguemenos": {
      "preco": 20.99,
      "nome": "Lacribell 1mg/ml + 3mg/ml Solução Oftálmica 15ml",
      "url": "https://www.paguemenos.com.br/lacribell-colirio-15ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.99,
      "nome": "Lacribell 1mg/ml + 3mg/ml Solução Oftálmica 15ml",
      "url": "https://www.extrafarma.com.br/lacribell-colirio-15ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 22.79,
      "nome": "Lacribell 1 mg/ml + 3mg/ml solução oftálmica estéril 15 ml",
      "url": "https://www.drogariavenancio.com.br/lacribell-latinofarma-15ml-solucao/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 36.89,
      "nome": "Lacrima Plus Colírio 15ml",
      "url": "https://www.panvel.com/panvel/lacrima-plus-colirio-15ml/p-156515",
      "disponivel": true
    }
  },
  "med-00311": {
    "paguemenos": {
      "preco": 8.19,
      "nome": "Diazepam 10mg Com 30 Comprimidos Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/diazepam-10mg-com-30-comprimidos-generico-pharlab/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 8.19,
      "nome": "Diazepam 10mg Com 30 Comprimidos Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/diazepam-10mg-com-30-comprimidos-generico-pharlab/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 7.34,
      "nome": "Diazepam 10mg Genérico Neo Química 20 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/diazepam-10mg-neo-quimica-generico-20-comprimidos-/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 4.99,
      "nome": "Diazepam 10mg Genérico Pharlab 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/diazepam-10mg-generico-pharlab-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.24,
      "nome": "Diazepam 5mg Com 30 Comprimidos Neo Quimica",
      "url": "https://www.drogariavenancio.com.br/diazepam-5mg-com-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00313": {
    "paguemenos": {
      "preco": 21.99,
      "nome": "Diclofenaco Colestiramina 70mg 14 Cápsulas Duras Genérico EMS",
      "url": "https://www.paguemenos.com.br/diclofenaco-colestiramina-70mg-com-14-capsulas-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 21.99,
      "nome": "Diclofenaco Colestiramina 70mg 14 Cápsulas Duras Genérico EMS",
      "url": "https://www.extrafarma.com.br/diclofenaco-colestiramina-70mg-com-14-capsulas-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 14.19,
      "nome": "Diclofenaco Colestiramina 70mg Genérico EMS 10 cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/diclofenaco-colestiramina-70mg-generico-ems-10-capsulas/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 12.62,
      "nome": "Diclofenaco Colestiramina 70mg Genérico EMS 10 cápsulas",
      "url": "https://www.drogariaspacheco.com.br/diclofenaco-colestiramina-70mg-generico-ems-10-capsulas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 32.89,
      "nome": "Flotac Novartis 10 Cápsulas Gelatinosas Duras",
      "url": "https://www.drogariavenancio.com.br/flotac-novartis-10-capsulas-gelatinosas-duras/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 33.56,
      "nome": "Flotac Diclofenaco Colestiramina 70mg 10 Cápsulas",
      "url": "https://www.panvel.com/panvel/flotac-diclofenaco-colestiramina-70mg-10-capsulas/p-391531",
      "disponivel": true
    }
  },
  "med-00314": {
    "paguemenos": {
      "preco": 8.49,
      "nome": "Diclofenaco Dietilamônio 11,6mg/g Gel Dermatológico 60g Genérico EMS",
      "url": "https://www.paguemenos.com.br/diclofenaco-dietilamonio-gel-60g-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.49,
      "nome": "Diclofenaco Dietilamônio 11,6mg/g Gel Dermatológico 60g Genérico EMS",
      "url": "https://www.extrafarma.com.br/diclofenaco-dietilamonio-gel-60g-generico-ems/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 14.99,
      "nome": "Diclofenaco Dietilamônio Neo Química Genérico Gel 60g",
      "url": "https://www.drogariavenancio.com.br/diclofenaco-dietilamonio-gel-60g-neo-quimica-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.79,
      "nome": "Diclofenaco Dietilamônio 11,6mg/g Gel 60g Cimed Generico",
      "url": "https://www.panvel.com/panvel/diclofenaco-dietilamonio-116mg-g-gel-60g-cimed-generico/p-106390",
      "disponivel": true
    }
  },
  "med-00317": {
    "paguemenos": {
      "preco": 6.49,
      "nome": "Diclofenaco Potássico 50mg 20 Comprimidos Revestidos Genérico Cimed",
      "url": "https://www.paguemenos.com.br/diclofenaco-potassico-50mg-com-20-comprimidos-generico-cimed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.49,
      "nome": "Diclofenaco Potássico 50mg 20 Comprimidos Revestidos Genérico Cimed",
      "url": "https://www.extrafarma.com.br/diclofenaco-potassico-50mg-com-20-comprimidos-generico-cimed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.59,
      "nome": "Fenaflan D 50mg Teuto 20 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/fenaflan-d-50mg-teuto-20-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 12.03,
      "nome": "Benevran 50mg Legrand 20 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/benevran-legrand-20-drageas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 21.66,
      "nome": "Biofenac Anti-inflamatório e Dor Muscular 11,6mg Gel com 30g",
      "url": "https://www.drogariavenancio.com.br/biofenac-ache-30g-gel/p",
      "disponivel": true
    }
  },
  "med-00315": {
    "paguemenos": {
      "preco": 6.89,
      "nome": "Diclofenaco Potássico 50mg 20 Comprimidos Revestidos Genérico Geolab",
      "url": "https://www.paguemenos.com.br/gen-diclofenaco-potassico-50mg-20cr/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.89,
      "nome": "Diclofenaco Potássico 50mg 20 Comprimidos Revestidos Genérico Geolab",
      "url": "https://www.extrafarma.com.br/gen-diclofenaco-potassico-50mg-20cr/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 7.69,
      "nome": "Diclofenaco Potássico 50mg Genérico Cimed 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/diclofenaco-potassico-50mg-generico-cimed-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 5.49,
      "nome": "Diclofenaco Potássico 50mg Genérico Cimed 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/diclofenaco-potassico-50mg-generico-cimed-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 6.99,
      "nome": "Diclofenaco de Dietilamonio 11,6mg Cimed Gel bisnaga 60g",
      "url": "https://www.drogariavenancio.com.br/diclofenaco-de-dietilamonio-116mg-cimed-gel-bisnaga-60g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.49,
      "nome": "Diclofenaco Potassico 50mg 20 Comprimido Revestido Medley Generico C",
      "url": "https://www.panvel.com/panvel/diclofenaco-potassico-50mg-20-comprimido-revestido-medley-generico-c/p-415140",
      "disponivel": true
    }
  },
  "med-00643": {
    "paguemenos": {
      "preco": 12.49,
      "nome": "Diclofenaco Resinato 15mg/ml Suspensão Oral 20ml Genérico Cimed",
      "url": "https://www.paguemenos.com.br/diclofenaco-resinato-gotas-20ml-generico-cimed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.49,
      "nome": "Diclofenaco Resinato 15mg/ml Suspensão Oral 20ml Genérico Cimed",
      "url": "https://www.extrafarma.com.br/diclofenaco-resinato-gotas-20ml-generico-cimed/p",
      "disponivel": true
    }
  },
  "med-00312": {
    "paguemenos": {
      "preco": 11.89,
      "nome": "Diclofenaco Resinato Gotas 20ml Genérico Medley",
      "url": "https://www.paguemenos.com.br/diclofenaco-resinato-gotas-20ml-generico-medley/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 11.89,
      "nome": "Diclofenaco Resinato Gotas 20ml Genérico Medley",
      "url": "https://www.extrafarma.com.br/diclofenaco-resinato-gotas-20ml-generico-medley/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 9.13,
      "nome": "Diclofenaco Resinato 15mg/ml Genérico Medley 20ml Gotas",
      "url": "https://www.drogariasaopaulo.com.br/diclofenaco-resinato-gotas-15mg-ml-generico-medley-20ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 7.25,
      "nome": "Diclofenaco Resinato 15mg/ml Genérico Cimed 20ml Gotas",
      "url": "https://www.drogariaspacheco.com.br/diclofenaco-resinato-15mgml-generico-cimed-20ml-gotas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 7.99,
      "nome": "Diclofenaco Sódico 50mg Medley 20 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/diclofenaco-sodico-50mg-medley-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.49,
      "nome": "Diclofenaco Sódico 50mg 20 Comprimidos Medley Genérico C",
      "url": "https://www.panvel.com/panvel/diclofenaco-sodico-50mg-20-comprimidos-medley-generico-c/p-421240",
      "disponivel": true
    }
  },
  "med-00322": {
    "paguemenos": {
      "preco": 29.29,
      "nome": "Dicloridrato De Levocetirizina 5mg Com 10 Comprimidos Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/dicloridrato-de-levocetirizina-5mg-com-10-comprimidos-generico-ranbaxy/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 29.29,
      "nome": "Dicloridrato De Levocetirizina 5mg Com 10 Comprimidos Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/dicloridrato-de-levocetirizina-5mg-com-10-comprimidos-generico-ranbaxy/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 42.45,
      "nome": "Dicloridrato de Levocetirizina 5,0mg Genérico Neo Química 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/dicloridrato-de-levocetirizina-5-0mg-generico-neo-quimica-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 38.49,
      "nome": "Dicloridrato de Levocetirizina 5,0mg Genérico Neo Química 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/dicloridrato-de-levocetirizina-5-0mg-generico-neo-quimica-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 29.49,
      "nome": "Dicloridrato de Levocetirizina 5mg 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dicloridrato-de-levocetirizina-5mg-pharlab-10-comprimido-revestido/p",
      "disponivel": true
    }
  },
  "med-00563": {
    "paguemenos": {
      "preco": 48.67,
      "nome": "Montelucaste De Sódio 10mg + Dicloridrato Levocetirizina 5mg 7 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/montelucaste-de-sodio-10mg-mais-dicloridrato-levocetirizina-5mg-7-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 48.67,
      "nome": "Montelucaste De Sódio 10mg + Dicloridrato Levocetirizina 5mg 7 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/montelucaste-de-sodio-10mg-mais-dicloridrato-levocetirizina-5mg-7-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 65.92,
      "nome": "Lemont Montelucaste de Sódio 10mg + Dicloridrato de Levocetirizina 5mg 7 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/lemont-10mg---5mg-eurofarma-7-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 55.75,
      "nome": "Lemont Montelucaste de Sódio 10mg + Dicloridrato de Levocetirizina 5mg 7 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/lemont-10mg---5mg-eurofarma-7-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 132.29,
      "nome": "Rizi-M 5mg - Dicloridrato de levocetirizina e 10mg Montelucaste de sódio 14 comprimidos",
      "url": "https://www.drogariavenancio.com.br/rizi-m-14cpr-rev/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 145.98,
      "nome": "Rizi-m Levocetirizina 5mg + Montelucaste Sódico 10mg 14 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/rizi-m-levocetirizina-5mg-montelucaste-sodico-10mg-14-comprimidos-revestidos/p-113626",
      "disponivel": true
    }
  },
  "med-00319": {
    "paguemenos": {
      "preco": 82.49,
      "nome": "Zyrtec 10mg 12 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/zyrtec-10mg-com-12-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 82.49,
      "nome": "Zyrtec 10mg 12 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/zyrtec-10mg-com-12-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 83.65,
      "nome": "Zyrtec Dicloridrato De Cetirizina 10mg 12 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/zyrtec-10mg-gsk-12-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 84.49,
      "nome": "Zyrtec Dicloridrato De Cetirizina 10mg 12 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/zyrtec-10mg-gsk-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 49.9,
      "nome": "Reactine Antialérgico 10 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/reactine-10mg-10cap/p",
      "disponivel": true
    }
  },
  "med-00327": {
    "paguemenos": {
      "preco": 44.49,
      "nome": "Dicloridrato de Trimetazidina 35mg 30 Comprimidos Revestidos de Liberação Prolongada Genérico Germed",
      "url": "https://www.paguemenos.com.br/dicloridrato-de-trimetazidina-35mg-30-comprimidos-revestidos-ems-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 44.49,
      "nome": "Dicloridrato de Trimetazidina 35mg 30 Comprimidos Revestidos de Liberação Prolongada Genérico Germed",
      "url": "https://www.extrafarma.com.br/dicloridrato-de-trimetazidina-35mg-30-comprimidos-revestidos-ems-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 47.95,
      "nome": "Dicloridrato de Trimetazidina 35mg Genérico Eurofarma 30 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/dicloridrato-de-trimetazidina-35mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 57.19,
      "nome": "Dicloridrato De Trimetazidina 35mg Genérico Medley 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/dicloridrato-de-trimetazidina-35mg-generico-medley-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 40.99,
      "nome": "Dicloridrato de Trimetazidina 35mg Medley 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dicloridrato-de-trimetazidina-35mg-medley-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00328": {
    "paguemenos": {
      "preco": 23.39,
      "nome": "Dienogeste 2mg Com 28 Comprimidos Genérico Ache",
      "url": "https://www.paguemenos.com.br/dienogeste-2mg-com-28-comprimidos-generico-ache/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.39,
      "nome": "Dienogeste 2mg Com 28 Comprimidos Genérico Ache",
      "url": "https://www.extrafarma.com.br/dienogeste-2mg-com-28-comprimidos-generico-ache/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 43.99,
      "nome": "Dienogeste 2mg Genérico Biosintética 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/dienogeste-2mg-28-comprimidos-g-biosinteti/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.04,
      "nome": "Dienogeste 2mg Genérico Biosintética 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/dienogeste-2mg-28-comprimidos-g-biosinteti/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 36.88,
      "nome": "Dienogeste 2mg Ems 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dienogeste-2mg-ems-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00329": {
    "paguemenos": {
      "preco": 18.99,
      "nome": "Dramin Capsgel 50mg 10 Cápsulas Moles",
      "url": "https://www.paguemenos.com.br/dramin-50mg-com-10-capsulas-gel/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.99,
      "nome": "Dramin Capsgel 50mg 10 Cápsulas Moles",
      "url": "https://www.extrafarma.com.br/dramin-50mg-com-10-capsulas-gel/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 19.18,
      "nome": "Dramin Dimenidrinato 50mg 10 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/dramin-50mg-com-10-caps-gel/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 19.79,
      "nome": "Dramin Dimenidrinato 50mg 10 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/dramin-50mg-com-10-caps-gel/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.69,
      "nome": "Dramin Capsgel 50mg Takeda 10 Cápsulas Gelatinosas Moles",
      "url": "https://www.drogariavenancio.com.br/dramin-capsgel-50mg-takeda-10-capsulas-gelatinosas-moles/p",
      "disponivel": true
    }
  },
  "med-00331": {
    "paguemenos": {
      "preco": 185.99,
      "nome": "Dimesilato De Lisdexanfetamina 30mg 28 Capsulas Duras Genérico Teva",
      "url": "https://www.paguemenos.com.br/dimesilato-de-lisdexanfetamina-30mg-28-capsulas-duras-generico-teva/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 185.99,
      "nome": "Dimesilato De Lisdexanfetamina 30mg 28 Capsulas Duras Genérico Teva",
      "url": "https://www.extrafarma.com.br/dimesilato-de-lisdexanfetamina-30mg-28-capsulas-duras-generico-teva/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 294.88,
      "nome": "Lidexor Dimesilato De Lisdexanfetamina 30mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/lidexor-30mg-germed-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 154.9,
      "nome": "Dimesilato De Lisdexanfetamina 50mg Genérico Pharlab 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/dimesilato-de-lisdexanfetamina-50mg-generico-pharlab-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 189.9,
      "nome": "Dimesilato de Lisdexanfetamina 30mg Pharlab 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/lisvenx-30mg-30cap--g--a3--pharlab/p",
      "disponivel": true
    }
  },
  "med-00341": {
    "paguemenos": {
      "preco": 26.99,
      "nome": "Dipropionato de Beclometasona 50mcg Solução Aerossol Inalatório 200 Doses Genérico Glenmark",
      "url": "https://www.paguemenos.com.br/dipropionato-de-beclometasona-50mcg-glenmark-caixa-200-doses-solucao-aerossol-inalatorio-por-via-oral-generico-glenmark/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.99,
      "nome": "Dipropionato de Beclometasona 50mcg Solução Aerossol Inalatório 200 Doses Genérico Glenmark",
      "url": "https://www.extrafarma.com.br/dipropionato-de-beclometasona-50mcg-glenmark-caixa-200-doses-solucao-aerossol-inalatorio-por-via-oral-generico-glenmark/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 31.89,
      "nome": "Dipropionato de Beclometasona 50mcg/dose Genérico Glenmark 200 Doses Aerossol Via Oral",
      "url": "https://www.drogariasaopaulo.com.br/dipropionato-de-beclometasona-50mcg-dose-generico-glenmark-1-frasco-com-200-doses----bombinha/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 31.89,
      "nome": "Dipropionato de Beclometasona 50mcg/dose Genérico Glenmark 200 Doses Aerossol Via Oral",
      "url": "https://www.drogariaspacheco.com.br/dipropionato-de-beclometasona-50mcg-dose-generico-glenmark-1-frasco-com-200-doses----bombinha/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 33.58,
      "nome": "Ailuk 50mcg Glenmark Solução Aerossol 200 Doses",
      "url": "https://www.drogariavenancio.com.br/ailuk-50mcg-dose-sol-aer-200acionamentos/p",
      "disponivel": true
    }
  },
  "med-00345": {
    "paguemenos": {
      "preco": 20.49,
      "nome": "Dipropionato de Betametasona 0,5mg/g + Sulfato de Gentamicina 1mg/g Creme Dermatológico 30g Genérico EMS",
      "url": "https://www.paguemenos.com.br/diproprionato-de-betametasonamaissulfato-de-gentamicina-creme-30g-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.49,
      "nome": "Dipropionato de Betametasona 0,5mg/g + Sulfato de Gentamicina 1mg/g Creme Dermatológico 30g Genérico EMS",
      "url": "https://www.extrafarma.com.br/diproprionato-de-betametasonamaissulfato-de-gentamicina-creme-30g-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 31.59,
      "nome": "Trok-G Cetoconazol 0,64mg/g + Dipropionato de Betametasona 1mg/g 30g Creme",
      "url": "https://www.drogariasaopaulo.com.br/trok-g-creme-eurofarma-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 28.21,
      "nome": "Trok-G Cetoconazol 0,64mg/g + Dipropionato de Betametasona 1mg/g 30g Creme",
      "url": "https://www.drogariaspacheco.com.br/trok-g-creme-eurofarma-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 43.39,
      "nome": "Diprogenta Hypera Creme 30g",
      "url": "https://www.drogariavenancio.com.br/diprogenta-creme-com-30g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 33.56,
      "nome": "Trok-g Creme Dipropionato De Betametasona 0,5mg/g + Sulfato De Gentamicina 1mg/g 30g",
      "url": "https://www.panvel.com/panvel/trok-g-creme-dipropionato-de-betametasona-05mg-g-sulfato-de-gentamicina-1mg-g-30g/p-965550",
      "disponivel": true
    }
  },
  "med-00343": {
    "paguemenos": {
      "preco": 16.19,
      "nome": "Cetoconazol 20mg/g + Dipropionato de Betametasona 0,5mg/g Pomada 30g Genérico Medley",
      "url": "https://www.paguemenos.com.br/cetoconazolmaisdipropionato-de-betametasona-pomada-30g-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.19,
      "nome": "Cetoconazol 20mg/g + Dipropionato de Betametasona 0,5mg/g Pomada 30g Genérico Medley",
      "url": "https://www.extrafarma.com.br/cetoconazolmaisdipropionato-de-betametasona-pomada-30g-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 36.99,
      "nome": "Candicort Cetoconazol 20mg/g + Dipropionato de Betametasona 0,64mg/g 30g Creme Dermatológico",
      "url": "https://www.drogariasaopaulo.com.br/candicort-dermatologico-ache-creme-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 36,
      "nome": "Candicort Cetoconazol 20mg/g + Dipropionato de Betametasona 0,64mg/g 30g Creme Dermatológico",
      "url": "https://www.drogariaspacheco.com.br/candicort-dermatologico-ache-creme-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 21.99,
      "nome": "Cetoconazol + Dipropionato De Betametasona 20mg/g + 0,64mg Eurofarma Pomada 30g",
      "url": "https://www.drogariavenancio.com.br/cetoconazol-betam-pom-30g-g-eurofarma/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 47.11,
      "nome": "Candicort Creme Cetoconazol 20mg/g + Betametasona 0,64mg/g 30g",
      "url": "https://www.panvel.com/panvel/candicort-creme-cetoconazol-20mg-g-betametasona-064mg-g-30g/p-20559",
      "disponivel": true
    }
  },
  "med-00685": {
    "paguemenos": {
      "preco": 13.19,
      "nome": "Cetoconazol 20mg + Dipropionato de Betametasona 0,5mg + Sulfato de Neomicina 2,5mg Pomada Dermatológica 30g Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/cetoconazol-20mg-mais-dipropionato-de-betametasona-0-64mg-mais-sulfato-de-neomicina-2-5mg-pomada-dermatologica-30g-eurofarma-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.19,
      "nome": "Cetoconazol 20mg + Dipropionato de Betametasona 0,5mg + Sulfato de Neomicina 2,5mg Pomada Dermatológica 30g Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/cetoconazol-20mg-mais-dipropionato-de-betametasona-0-64mg-mais-sulfato-de-neomicina-2-5mg-pomada-dermatologica-30g-eurofarma-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 21.02,
      "nome": "Trok-N Cetoconazol 20mg/g + Dipropionato de Betametasona 0,5mg/g + Sulfato de Neomicina 2,5mg/g 10g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/trok-n-pomada-20mgg-eurofarma-10g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 15.87,
      "nome": "Cimecort Cetoconazol 20mg/g + Dipropionato de Betametasona 0,64mg/g + Sulfato de Neomicina 2,5mg/g 30g Creme",
      "url": "https://www.drogariaspacheco.com.br/cimecort-cimed-creme-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.49,
      "nome": "Cetoconazol + Dipropionato de Betametasona + Sulfato de neomicina Cimed Creme 30g",
      "url": "https://www.drogariavenancio.com.br/cetoconazol-dip-betameta-sulf-neomicina-30g-g-cimed/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 17.99,
      "nome": "Cimecort Creme Cetoconazol 20mg/g + Betametasona 0,64mg/g + Neomicina 2,5g 30g",
      "url": "https://www.panvel.com/panvel/cimecort-creme-cetoconazol-20mg-g-betametasona-064mg-g-neomicina-25g-30g/p-109405",
      "disponivel": true
    }
  },
  "med-00347": {
    "paguemenos": {
      "preco": 23.59,
      "nome": "Divalproato de Sódio 250mg 20 Comprimidos Revestidos Genérico Zydus Nikkho",
      "url": "https://www.paguemenos.com.br/divalproato-de-sodio-250mg-com-20-comprimidos-generico-zydus/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.59,
      "nome": "Divalproato de Sódio 250mg 20 Comprimidos Revestidos Genérico Zydus Nikkho",
      "url": "https://www.extrafarma.com.br/divalproato-de-sodio-250mg-com-20-comprimidos-generico-zydus/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 25.59,
      "nome": "Divalproato de Sódio 250mg Genérico Zydus 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/divalproato-de-sodio-250mg-generico-zydus-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 26.99,
      "nome": "Divalproato de Sódio 250mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/divalproato-de-sodio-250mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 26.12,
      "nome": "Divalproato de Sódio Zydus 250mg com 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/divalproato-de-sodio-zydus-250mg-com-20-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 166.44,
      "nome": "Divalcon Er Divalproato De Sódio 500mg 60 Comprimidos Revestidos De Liberação Prolongada",
      "url": "https://www.panvel.com/panvel/divalcon-er-divalproato-de-sodio-500mg-60-comprimidos-revestidos-de-liberacao-prolongada/p-829640",
      "disponivel": true
    }
  },
  "med-00349": {
    "paguemenos": {
      "preco": 6.39,
      "nome": "Domperidona 10mg Com 30 Comprimidos Genérico Nova Quimica",
      "url": "https://www.paguemenos.com.br/domperidona-10mg-com-30-comprimidos-generico-nova-quimica/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 6.39,
      "nome": "Domperidona 10mg Com 30 Comprimidos Genérico Nova Quimica",
      "url": "https://www.extrafarma.com.br/domperidona-10mg-com-30-comprimidos-generico-nova-quimica/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 10.55,
      "nome": "Domperidona 10mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/domperidona-10mg-generico-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 10.55,
      "nome": "Domperidona 10mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/domperidona-10mg-generico-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.49,
      "nome": "Domperidona 10mg Neo Química 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/domperidona-10mg-30com--g--brainfarma/p",
      "disponivel": true
    }
  },
  "med-00350": {
    "paguemenos": {
      "preco": 23.29,
      "nome": "Doxiciclina Monoidratada 100mg 15 Comprimidos Solúveis Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/doxiciclina-100mg-com-15-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.29,
      "nome": "Doxiciclina Monoidratada 100mg 15 Comprimidos Solúveis Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/doxiciclina-100mg-com-15-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 40.45,
      "nome": "Doxiciclina 100mg Genérico EMS 15 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/doxiciclina-100mg-ems-15-capsulas/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 63.68,
      "nome": "Doxiciclina 100mg Genérico EMS 15 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/doxiciclina-100mg-ems-15-capsulas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 147.05,
      "nome": "Vibramicina 100mg 20 Comprimidos Solúveis",
      "url": "https://www.panvel.com/panvel/vibramicina-100mg-20-comprimidos-soluveis/p-326003",
      "disponivel": true
    }
  },
  "med-00351": {
    "paguemenos": {
      "preco": 10.99,
      "nome": "Dropropizina 3mg/ml Xarope Adulto 120ml Genérico Medley",
      "url": "https://www.paguemenos.com.br/dropropizina-xarope-adulto-120ml-generico-medley/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 10.99,
      "nome": "Dropropizina 3mg/ml Xarope Adulto 120ml Genérico Medley",
      "url": "https://www.extrafarma.com.br/dropropizina-xarope-adulto-120ml-generico-medley/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 14.46,
      "nome": "Dropropizina 1,5mg/ml Biosintética Morango 120ml Xarope + Seringa Dosadora",
      "url": "https://www.drogariasaopaulo.com.br/dropropizina-1-5mg-ml-biosintetica-morango-120ml-xarope-seringa-dosadora/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 12.45,
      "nome": "Dropropizina 1,5mg/ml Biosintética Morango 120ml Xarope + Seringa Dosadora",
      "url": "https://www.drogariaspacheco.com.br/dropropizina-1-5mg-ml-biosintetica-morango-120ml-xarope-seringa-dosadora/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.93,
      "nome": "Dropropizina 3mg Biosintética Xarope 120ml",
      "url": "https://www.drogariavenancio.com.br/dropropizina-3mg-xarope-120ml/p",
      "disponivel": true
    }
  },
  "med-00378": {
    "paguemenos": {
      "preco": 19.39,
      "nome": "Drospirenona 3mg + Etinilestradiol 0,03mg 21 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/drospirenona-mais-etinilestradiol-com-21-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.39,
      "nome": "Drospirenona 3mg + Etinilestradiol 0,03mg 21 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/drospirenona-mais-etinilestradiol-com-21-comprimidos-generico-ems/p",
      "disponivel": true
    }
  },
  "med-00353": {
    "paguemenos": {
      "preco": 82.49,
      "nome": "Nuance 1mg + 2mg 28 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/nuance-28-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 82.49,
      "nome": "Nuance 1mg + 2mg 28 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/nuance-28-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 87.3,
      "nome": "Nuance 1mg + 2mg Eurofarma 28 Comprimido",
      "url": "https://www.drogariavenancio.com.br/nuance-10-20mg-28com/p",
      "disponivel": true
    }
  },
  "med-00369": {
    "paguemenos": {
      "preco": 82.99,
      "nome": "Estreva 0,5mg/dose Gel 50g",
      "url": "https://www.paguemenos.com.br/estreva-gel-50g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 82.99,
      "nome": "Estreva 0,5mg/dose Gel 50g",
      "url": "https://www.extrafarma.com.br/estreva-gel-50g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 76.97,
      "nome": "Lenzetto Estradiol Hemi-Hidratado 1,53mg/Spray 56 Acionamentos Spray Transdérmico",
      "url": "https://www.drogariasaopaulo.com.br/lenzetto-1-53mg-spray-gedeon-56-acionamentos-spray-transdermico-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 76.63,
      "nome": "Estreva Estradiol Hemi-Hidratado 1mg/g 50g Gel",
      "url": "https://www.drogariaspacheco.com.br/estreva-01-gel-vision-import-50g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 74.99,
      "nome": "Oestrogel Besins Healthcare 80g Gel",
      "url": "https://www.drogariavenancio.com.br/oestrogel-besins-healthcare-80g-gel/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 63.24,
      "nome": "Natifa Estradiol 1mg 28 Comprimidos",
      "url": "https://www.panvel.com/panvel/natifa-estradiol-1mg-28-comprimidos/p-500070",
      "disponivel": true
    }
  },
  "med-00355": {
    "paguemenos": {
      "preco": 82.99,
      "nome": "Dutasterida 0,5mg + Tansulosina 0,4mg 30 Cápsulas Genérico Zydus",
      "url": "https://www.paguemenos.com.br/dutasterida-0-5mg-mais-tansulosina-0-4mg-30-capsulas-generico-zydus/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 82.99,
      "nome": "Dutasterida 0,5mg + Tansulosina 0,4mg 30 Cápsulas Genérico Zydus",
      "url": "https://www.extrafarma.com.br/dutasterida-0-5mg-mais-tansulosina-0-4mg-30-capsulas-generico-zydus/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 79.99,
      "nome": "Dastene Duo Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 30 Cápsulas Duras de Liberação Prolongada",
      "url": "https://www.drogariasaopaulo.com.br/dastene-duo-dutasterida-cloridrato-tansulosina-30-capsulas-duras-liberacao-prolongada/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 79.99,
      "nome": "Dastene Duo Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 30 Cápsulas Duras de Liberação Prolongada",
      "url": "https://www.drogariaspacheco.com.br/dastene-duo-dutasterida-cloridrato-tansulosina-30-capsulas-duras-liberacao-prolongada/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 83.17,
      "nome": "Dutam 0,5mg + 0,4mg Adium 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/dutam-30cps/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 327.55,
      "nome": "Dutam Dutasterida 0,5mg + Tansulosina 0,4mg 90 Cápsulas Gelatinosas Duras Com Ação Prolongada",
      "url": "https://www.panvel.com/panvel/dutam-dutasterida-05mg-tansulosina-04mg-90-capsulas-gelatinosas-duras-com-acao-prolongada/p-871370",
      "disponivel": true
    }
  },
  "med-00354": {
    "paguemenos": {
      "preco": 109.99,
      "nome": "Dutasterida 0,5mg Com 30 Capsulas Generico Biosintetica",
      "url": "https://www.paguemenos.com.br/dutasterida-0-5mg-com-30-capsulas-generico-biosintetica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 109.99,
      "nome": "Dutasterida 0,5mg Com 30 Capsulas Generico Biosintetica",
      "url": "https://www.extrafarma.com.br/dutasterida-0-5mg-com-30-capsulas-generico-biosintetica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 84.99,
      "nome": "Dutasterida 0,5mg + Cloridrato de Tansulosina 4mg Genérico Zydus 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/dutasterida-0-5mg-cloridrato-tansulosina-4mg-generico-zydus-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 84.99,
      "nome": "Dutasterida 0,5mg + Cloridrato de Tansulosina 4mg Genérico Zydus 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/dutasterida-0-5mg-cloridrato-tansulosina-4mg-generico-zydus-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 98.09,
      "nome": "Dastene 0,5mg Aché 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/dastene-05mg-ache-30-capsulas/p",
      "disponivel": true
    }
  },
  "med-00357": {
    "paguemenos": {
      "preco": 2359.7,
      "nome": "Eltrombopague Olamina 25mg 14 Comprimidos Genérico Oncorp",
      "url": "https://www.paguemenos.com.br/eltrombopague-olamina-25mg-14-comprimidos-generico-oncorp/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 2359.7,
      "nome": "Eltrombopague Olamina 25mg 14 Comprimidos Genérico Oncorp",
      "url": "https://www.extrafarma.com.br/eltrombopague-olamina-25mg-14-comprimidos-generico-oncorp/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 2420.2,
      "nome": "Eltrombopague Olamina 25mg 14 Comprimidos Revestidos Teva",
      "url": "https://www.drogariavenancio.com.br/eltrombopague-olamina-25mg-14-comprimidos-revestidos/p",
      "disponivel": false
    }
  },
  "med-00359": {
    "paguemenos": {
      "preco": 11.29,
      "nome": "Acetofenida De Algestona + Enantato De Estradiol Injetável 1ml Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/acetofenida-de-algestona-mais-enantato-de-estradiol-injetavel-1ml-generico-eurofarma/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 11.29,
      "nome": "Acetofenida De Algestona + Enantato De Estradiol Injetável 1ml Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/acetofenida-de-algestona-mais-enantato-de-estradiol-injetavel-1ml-generico-eurofarma/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 17.11,
      "nome": "Perlumes Algestona Acetofenida 150mg/ml + Enantato de Estradiol 10mg/ml 1 Ampola 1ml Solução Injetável",
      "url": "https://www.drogariasaopaulo.com.br/perlumes-150mg-ml---10mg-ml-legrand-1-ampola-com-1ml-de-solucao/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.11,
      "nome": "Perlumes Algestona Acetofenida 150mg/ml + Enantato de Estradiol 10mg/ml 1 Ampola 1ml Solução Injetável",
      "url": "https://www.drogariaspacheco.com.br/perlumes-150mg-ml---10mg-ml-legrand-1-ampola-com-1ml-de-solucao/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.16,
      "nome": "Algestona Acetofenida + Enantato de Estradiol 1 ampola 1ml Ems",
      "url": "https://www.drogariavenancio.com.br/aceto-algestona-enant-estradiol-150mg-ml-10mg-ml-sol-inj-1amp-g-ems/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 23.58,
      "nome": "Ciclovular 150/10mg/ml Solucao Injetavel Ampola 1 Ml+seringa+agulha",
      "url": "https://www.panvel.com/panvel/ciclovular-150-10mg-ml-solucao-injetavel-ampola-1-ml-seringa-agulha/p-100999",
      "disponivel": true
    }
  },
  "med-00740": {
    "paguemenos": {
      "preco": 19.39,
      "nome": "Enantato de Noretisterona 50mg/ml + Valerato de Estradiol 5mg/ml Solução Injetável 1 Ampola 1ml Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/enantato-de-noretisterona-50mg-ml-mais-valerato-de-estradiol-5mg-ml-com-1-ampola-1ml-solucao-injetavel-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.39,
      "nome": "Enantato de Noretisterona 50mg/ml + Valerato de Estradiol 5mg/ml Solução Injetável 1 Ampola 1ml Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/enantato-de-noretisterona-50mg-ml-mais-valerato-de-estradiol-5mg-ml-com-1-ampola-1ml-solucao-injetavel-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.39,
      "nome": "Noregyna Valerato de Estradiol 5mg/ml + Enantato de Noretisterona 50mg/ml 1ml Ampola",
      "url": "https://www.drogariasaopaulo.com.br/noregyna-ampola-grb-1ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 35.82,
      "nome": "Mesigyna Valerato de Estradiol 5mg/ml + Enantato de Noretisterona 50mg/ml 1ml Seringa Preenchida + Agulha",
      "url": "https://www.drogariaspacheco.com.br/mesigyna-50mg-ml-5mg-ml-bayer-1ml-seringa-preenchida-agulha/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 19.21,
      "nome": "Enantato de Noretisterona + Valerato de Estradiol 50mg/ml + 5mg/ml Eurofarma Solução Injetável 1ml",
      "url": "https://www.drogariavenancio.com.br/noretisterona-estradiol-50mg-ml-5mg-ml-sol-inj-amp-1ml--g--eurofarma/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 44.99,
      "nome": "Mesigyna Solução Injetável 1ml",
      "url": "https://www.panvel.com/panvel/mesigyna-solucao-injetavel-1ml/p-92795",
      "disponivel": true
    }
  },
  "med-00360": {
    "paguemenos": {
      "preco": 130.99,
      "nome": "Volare 40mg/0,4ml Solução Injetável 2 Seringas Preenchidas",
      "url": "https://www.paguemenos.com.br/volare-40mg-solucao-injetavel-com-2-seringas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 130.99,
      "nome": "Volare 40mg/0,4ml Solução Injetável 2 Seringas Preenchidas",
      "url": "https://www.extrafarma.com.br/volare-40mg-solucao-injetavel-com-2-seringas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 178.94,
      "nome": "Volare Enoxaparina Sódica 40mg 2 Seringas com 0,4ml + Sistema de Segurança",
      "url": "https://www.drogariasaopaulo.com.br/volare-40mg-ache-2-seringas-com-0-4ml---sistema-de-seguranca/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 88.9,
      "nome": "Volare Enoxaparina Sódica 20mg 2 Seringas com 0,2ml + Sistema de Segurança",
      "url": "https://www.drogariaspacheco.com.br/volare-20mg-ache-2-seringas-com-0-2ml---sistema-de-seguranca-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 88.9,
      "nome": "Volare 20mg Aché Solução Injetável 2 Seringas Preenchidas de 0,2ml Com Sistema De Segurança",
      "url": "https://www.drogariavenancio.com.br/volare-20mg-ache-solucao-injetavel-2-seringas-preenchidas-de-02ml-com-sistema-de-seguranca/p",
      "disponivel": true
    }
  },
  "med-00361": {
    "paguemenos": {
      "preco": 249.99,
      "nome": "Comtan 200mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/comtan-200mg-com-30-comprimidos-psicotropico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 249.99,
      "nome": "Comtan 200mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/comtan-200mg-com-30-comprimidos-psicotropico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 135.4,
      "nome": "Entarkin 200mg EMS 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/entarkin-ems-30-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 100.93,
      "nome": "Entarkin 200mg EMS 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/entarkin-ems-30-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 273.69,
      "nome": "Comtan 200mg Sandoz 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/comtan-200mg-30com--c1--sandoz/p",
      "disponivel": true
    }
  },
  "med-00362": {
    "paguemenos": {
      "preco": 230.99,
      "nome": "Binav 200mg+300mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/binav-200mgmais300mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 230.99,
      "nome": "Binav 200mg+300mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/binav-200mgmais300mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 231.82,
      "nome": "Binav Entricitabina 200mg + Fumarato de Tenofovir Desoproxila 300mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/binav-200mg--300mg-generico-blanver-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 231.82,
      "nome": "Binav Entricitabina 200mg + Fumarato de Tenofovir Desoproxila 300mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/binav-200mg--300mg-generico-blanver-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 234.99,
      "nome": "Binav 200mg + 300mg Blanver 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/binav-200mg-300mg-blanver-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00364": {
    "paguemenos": {
      "preco": 19996.62,
      "nome": "Esilato De Nintedanibe 150mg 60 Cápsulas Mole Genérico Sun Pharma",
      "url": "https://www.paguemenos.com.br/esilato-de-nintedanibe-150mg-60-capsulas-mole-generico-sun-pharma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19996.62,
      "nome": "Esilato De Nintedanibe 150mg 60 Cápsulas Mole Genérico Sun Pharma",
      "url": "https://www.extrafarma.com.br/esilato-de-nintedanibe-150mg-60-capsulas-mole-generico-sun-pharma/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10279.73,
      "nome": "Esilato de Nintedanibe 100mg 60 Cápsulas Sun Pharma",
      "url": "https://www.drogariavenancio.com.br/esilat-nintedanibe-150mg-60cap--g--sun-pharma/p",
      "disponivel": false
    }
  },
  "med-00365": {
    "paguemenos": {
      "preco": 17.79,
      "nome": "Esomeprazol Magnésico Tri-hidratado 20mg 28 Comprimidos Revestidos de Liberação Retardada Genérico EMS",
      "url": "https://www.paguemenos.com.br/esomeprazol-20mg-com-28-comprimidos-genericos-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.79,
      "nome": "Esomeprazol Magnésico Tri-hidratado 20mg 28 Comprimidos Revestidos de Liberação Retardada Genérico EMS",
      "url": "https://www.extrafarma.com.br/esomeprazol-20mg-com-28-comprimidos-genericos-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 37.39,
      "nome": "Esomeprazol Magnésico 20mg Genérico Medley 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/esomeprazol-magnesico-20mg-generico-medley-28-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 37.39,
      "nome": "Esomeprazol Magnésico 20mg Genérico Medley 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/esomeprazol-magnesico-20mg-generico-medley-28-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 53.89,
      "nome": "Esomeprazol Magnésico 20mg 28 Comprimidos Revestidos De Liberação Retardada Germed Pharma",
      "url": "https://www.drogariavenancio.com.br/esomeprazol-magnesico-20mg-28-comprimidos-revestidos-de-liberacao-retardada/p",
      "disponivel": true
    }
  },
  "med-00366": {
    "paguemenos": {
      "preco": 48.99,
      "nome": "Esomeprazol Magnésico Tri-Hidratado 40mg 28 Comprimidos Revestidos Genérico Nova Química",
      "url": "https://www.paguemenos.com.br/esomeprazol-magnesico-tri-hidratado-40mg-28-comprimidos-revestidos-generico-nova-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 48.99,
      "nome": "Esomeprazol Magnésico Tri-Hidratado 40mg 28 Comprimidos Revestidos Genérico Nova Química",
      "url": "https://www.extrafarma.com.br/esomeprazol-magnesico-tri-hidratado-40mg-28-comprimidos-revestidos-generico-nova-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 96.03,
      "nome": "Nexium Esomeprazol Magnésico Tri-Hidratado 20mg 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nexium-20mg-astrazeneca-14-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 96.03,
      "nome": "Nexium Esomeprazol Magnésico Tri-Hidratado 20mg 14 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/nexium-20mg-astrazeneca-14-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 73.99,
      "nome": "Esol XR 20mg Hypera 28 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/esol-xr-20mg-28com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 365.32,
      "nome": "Esogastro Ibp Amoxicilina 500mg + Claritromicina 500mg + Esomeprazol Magnésico 20mg 28 Cápsulas",
      "url": "https://www.panvel.com/panvel/esogastro-ibp-amoxicilina-500mg-claritromicina-500mg-esomeprazol-magnesico-20mg-28-capsulas/p-695740",
      "disponivel": true
    }
  },
  "med-00605": {
    "paguemenos": {
      "preco": 11.39,
      "nome": "Pantoprazol Sódico Sesqui-hidratado 40mg 28 Comprimidos Revestidos de Liberação Retardada Genérico Aché",
      "url": "https://www.paguemenos.com.br/gn-pantoprazol-40mg-28cp-ache/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.39,
      "nome": "Pantoprazol Sódico Sesqui-hidratado 40mg 28 Comprimidos Revestidos de Liberação Retardada Genérico Aché",
      "url": "https://www.extrafarma.com.br/gn-pantoprazol-40mg-28cp-ache/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 11.99,
      "nome": "Pantoprazol 20mg Genérico Biosintética 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/pantoprazol-20mg-generico-biosintetica-14-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.99,
      "nome": "Pantoprazol Sódico Sesqui-Hidratado 40mg Genérico Eurofarma 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/pantoprazol-sodico-sesqui-hidratado-40mg-generico-eurofarma-28-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.49,
      "nome": "Pantoprazol 40mg Aché 14 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/pantoprazol-40mg-14com--g--biosintetica/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 14.49,
      "nome": "Pantoprazol 20mg 14 Comprimidos Revestidos Liberação Retardada Medley Generico",
      "url": "https://www.panvel.com/panvel/pantoprazol-20mg-14-comprimidos-revestidos-liberacao-retardada-medley-generico/p-92188",
      "disponivel": true
    }
  },
  "med-00368": {
    "paguemenos": {
      "preco": 14.19,
      "nome": "Espironolactona 25mg 30 Comprimidos Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/espironolactona-25mg-com-30-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.19,
      "nome": "Espironolactona 25mg 30 Comprimidos Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/espironolactona-25mg-com-30-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 15.72,
      "nome": "Espironolactona 25mg Genérico Germed 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/espironolactona-25mg-generico-germed-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 15.72,
      "nome": "Espironolactona 25mg Genérico Germed 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/espironolactona-25mg-generico-germed-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 14.99,
      "nome": "Espironolactona 25mg Ems 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/espironolactona-25mg-ems-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00371": {
    "paguemenos": {
      "preco": 39.29,
      "nome": "Estriol 1mg/g Creme Vaginal 50g + 5 Aplicadores Genérico Biolab",
      "url": "https://www.paguemenos.com.br/estriol-1mg-g-creme-vaginal-50g-mais-aplicador-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 39.29,
      "nome": "Estriol 1mg/g Creme Vaginal 50g + 5 Aplicadores Genérico Biolab",
      "url": "https://www.extrafarma.com.br/estriol-1mg-g-creme-vaginal-50g-mais-aplicador-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 27.05,
      "nome": "Estriol 1mg/g Genérico Neo Química 50g Creme Vaginal + Aplicador",
      "url": "https://www.drogariasaopaulo.com.br/estriol-50gr-neo-quimica-creme-vaginal-aplicador/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 34.05,
      "nome": "Ovestrion 1mg Schering 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/ovestrion-1mg-schering-30-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 43.49,
      "nome": "Estriol 1mg/g Biolab Creme Vaginal 50g + 1 Aplicador",
      "url": "https://www.drogariavenancio.com.br/estriol-1mg-g-biolab-creme-vaginal-50g---1-aplicador-/p",
      "disponivel": true
    }
  },
  "med-00372": {
    "paguemenos": {
      "preco": 68.67,
      "nome": "Eczo 3mg 20 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/eczo-3mg-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 68.67,
      "nome": "Eczo 3mg 20 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/eczo-3mg-20-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 74.29,
      "nome": "Torrem Eszopiclona 3mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/torrem-eszopiclona-3mg-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 77.39,
      "nome": "Ezonia Eszopiclona 2mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/ezonia-2mg-momenta-farma-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 78.29,
      "nome": "Prysma Eurofarma 2mg 20 comprimidos",
      "url": "https://www.drogariavenancio.com.br/prysma-eurofarma-2mg-20-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00380": {
    "paguemenos": {
      "preco": 24.79,
      "nome": "Etinilestradiol 15mcg + Gestodeno 60mcg 28 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.paguemenos.com.br/etinilestradiol-15mcg-mais-gestodeno-60mcg-com-28-comprimidos-generico-ache/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 24.79,
      "nome": "Etinilestradiol 15mcg + Gestodeno 60mcg 28 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.extrafarma.com.br/etinilestradiol-15mcg-mais-gestodeno-60mcg-com-28-comprimidos-generico-ache/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 30.61,
      "nome": "Tantin Etinilestradiol 0,015mg + Gestodeno 0,060mg 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/tantin-50mg-biolab--28-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 24.98,
      "nome": "Tantin Etinilestradiol 0,015mg + Gestodeno 0,060mg 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/tantin-50mg-biolab-28-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 32.89,
      "nome": "Tamisa Gestodeno + Etinilestradiol 75mg + 30mg Eurofarma 21 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/tamisa-gestodeno---etinilestradiol-75mg---30mg-eurofarma-21-comprimidos-revestidos-/p",
      "disponivel": true
    }
  },
  "med-00377": {
    "paguemenos": {
      "preco": 14.99,
      "nome": "Desogestrel 150mcg + Etinilestradiol 30mcg 21 Comprimidos Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/desogestrelmaisetinil-30mcg-com-21-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.99,
      "nome": "Desogestrel 150mcg + Etinilestradiol 30mcg 21 Comprimidos Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/desogestrelmaisetinil-30mcg-com-21-comprimidos-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.09,
      "nome": "Mercilon Conti Desogestrel 150mcg + Etinilestradiol 20mcg 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/mercilon-conti-schering-plough-28-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 36.74,
      "nome": "Minian Desogestrel 150mcg + Etinilestradiol 20mcg 21 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/minian-150-20mcg-libbs-21-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.99,
      "nome": "Desogestrel + Etinilestradiol 150mcg + 20mcg 21 Comprimidos Biosintetica",
      "url": "https://www.drogariavenancio.com.br/desogestrel---etinilestradiol-150mcg---20mcg-21-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00382": {
    "paguemenos": {
      "preco": 4.19,
      "nome": "Levonorgestrel 0,15mg + Etinilestradiol 0,03mg 21 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/levonorgestrelmaisetinilestradiol-0-15mg-com-21-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 4.19,
      "nome": "Levonorgestrel 0,15mg + Etinilestradiol 0,03mg 21 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/levonorgestrelmaisetinilestradiol-0-15mg-com-21-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 38.89,
      "nome": "Nordette Levonorgestrel 0,15mg + Etinilestradiol 0,03mg 63 Drágeas",
      "url": "https://www.drogariasaopaulo.com.br/nordette-wyeth-whitehall-3-x-21-drageas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.75,
      "nome": "Nordette Levonorgestrel 0,15mg + Etinilestradiol 0,03mg 21 Drágeas",
      "url": "https://www.drogariaspacheco.com.br/nordette-wyeth-whitehall-21-drageas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.99,
      "nome": "Nordette 21 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/nordette-21-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.7,
      "nome": "Nordette Levonorgestrel 150mcg + Etinilestradiol 30mcg 21 Drágeas",
      "url": "https://www.panvel.com/panvel/nordette-levonorgestrel-150mcg-etinilestradiol-30mcg-21-drageas/p-164879",
      "disponivel": true
    }
  },
  "med-00381": {
    "paguemenos": {
      "preco": 4.89,
      "nome": "Levonorgestrel 0,15mg + Etinilestradiol 0,03mg 21 Comprimidos Revestidos Genérico Cifarma",
      "url": "https://www.paguemenos.com.br/levonorgestrel-0-15mg-mais-etinilestradiol-0-03mg-com-21-comprimidos-generico-cifarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 4.89,
      "nome": "Levonorgestrel 0,15mg + Etinilestradiol 0,03mg 21 Comprimidos Revestidos Genérico Cifarma",
      "url": "https://www.extrafarma.com.br/levonorgestrel-0-15mg-mais-etinilestradiol-0-03mg-com-21-comprimidos-generico-cifarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 8.77,
      "nome": "Ciclo 21 Levonorgestrel 0,15mg + Etinilestradiol 0,03mg 21 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/ciclo-21-015-003mg-uniao-quimica-21-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 7.16,
      "nome": "Ciclo 21 Levonorgestrel 0,15mg + Etinilestradiol 0,03mg 21 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/ciclo-21-015-003mg-uniao-quimica-21-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.9,
      "nome": "Ciclo 21 União Química 21 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/ciclo-21-uniao-quimica-21-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 7.49,
      "nome": "Levonorgestrel + Etinilestradiol 0,15/0,03 21 Comprimidos Generico Biolab",
      "url": "https://www.panvel.com/panvel/levonorgestrel-etinilestradiol-015-003-21-comprimidos-generico-biolab/p-103477",
      "disponivel": true
    }
  },
  "med-00498": {
    "paguemenos": {
      "preco": 9.19,
      "nome": "Levonorgestrel 1,5mg 1 Comprimido Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/levonorgestrel-1-5mg-com-1-comprimido-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.19,
      "nome": "Levonorgestrel 1,5mg 1 Comprimido Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/levonorgestrel-1-5mg-com-1-comprimido-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 7.59,
      "nome": "Levonorgestrel 0,15mg + Etinilestradiol 0,03mg Genérico Biolab 21 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/levonorgestrel---etinilestradiol-0-15mg---0-03mg-generico-biolab-21-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.59,
      "nome": "Levonorgestrel 0,15mg + Etinilestradiol 0,03mg Genérico Biolab 21 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/levonorgestrel---etinilestradiol-0-15mg---0-03mg-generico-biolab-21-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.99,
      "nome": "Levonorgestrel + Etinilestradio 0,15mg + 0,03mg Biolab 21 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/levonorgestrel-etinilestradiol-015-003mg-21com--g--biolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 16.49,
      "nome": "Levonorgestrel 1,5 Mg 1 Comprimido Cimed Generico",
      "url": "https://www.panvel.com/panvel/levonorgestrel-15-mg-1-comprimido-cimed-generico/p-106408",
      "disponivel": true
    }
  },
  "med-00383": {
    "paguemenos": {
      "preco": 16.39,
      "nome": "Etodolaco 400mg 10 Comprimidos Revestidos Genérico Germed",
      "url": "https://www.paguemenos.com.br/etodolaco-400mg-com-10-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.39,
      "nome": "Etodolaco 400mg 10 Comprimidos Revestidos Genérico Germed",
      "url": "https://www.extrafarma.com.br/etodolaco-400mg-com-10-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 19.68,
      "nome": "Etodolaco 400mg Genérico Germed 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/etodolaco-400mg-generico-sem-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 20.59,
      "nome": "Etodolaco 400mg Genérico Germed 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/etodolaco-400mg-generico-sem-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 35.05,
      "nome": "Etodolaco 500mg Althaia 14 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/etodolaco-500mg-14com--g--althaia/p",
      "disponivel": true
    }
  },
  "med-00379": {
    "paguemenos": {
      "preco": 77.49,
      "nome": "Livanel 0,120mg + 0,015mg 1 Anel Vaginal",
      "url": "https://www.paguemenos.com.br/livanel-etonogestrel-0-120mg-mais-etinilestradiol-0-015mg-sache-com-1-anel-vaginal/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 77.49,
      "nome": "Livanel 0,120mg + 0,015mg 1 Anel Vaginal",
      "url": "https://www.extrafarma.com.br/livanel-etonogestrel-0-120mg-mais-etinilestradiol-0-015mg-sache-com-1-anel-vaginal/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 77.99,
      "nome": "Exelring Etonogestrel 0,120mg + Etinilestradiol 0,015mg 1 Anel Vaginal",
      "url": "https://www.drogariasaopaulo.com.br/exelring-0-120mg-0-015mg-exeltis-3-aneis-vaginais/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 67.9,
      "nome": "Exelring Etonogestrel 0,120mg + Etinilestradiol 0,015mg 1 Anel Vaginal",
      "url": "https://www.drogariaspacheco.com.br/exelring-0-120mg-0-015mg-exeltis-3-aneis-vaginais/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 67.22,
      "nome": "Exelring Exeltis 1 Anel Vaginal",
      "url": "https://www.drogariavenancio.com.br/exelring-exeltis-1-anel-vaginal/p",
      "disponivel": true
    }
  },
  "med-00385": {
    "paguemenos": {
      "preco": 18.69,
      "nome": "Etoricoxibe 60mg Com 7 Comprimidos Genérico Zydus Psicotrópico P/C1",
      "url": "https://www.paguemenos.com.br/etoricoxibe-60mg-com-7-comprimidos-generico-zydus-psicotropico-p-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.69,
      "nome": "Etoricoxibe 60mg Com 7 Comprimidos Genérico Zydus Psicotrópico P/C1",
      "url": "https://www.extrafarma.com.br/etoricoxibe-60mg-com-7-comprimidos-generico-zydus-psicotropico-p-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 52.78,
      "nome": "Arcoxia Etoricoxibe 60mg 7 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/arcoxia-60mg-7-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 58.97,
      "nome": "Arcoxia Etoricoxibe 60mg 7 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/arcoxia-60mg-7-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 28.59,
      "nome": "Etoricoxibe 90mg Biosintética 7 comprimidos",
      "url": "https://www.drogariavenancio.com.br/etoricoxibe-90mg-7com--c1--g--ache/p",
      "disponivel": true
    }
  },
  "med-00386": {
    "paguemenos": {
      "preco": 5435.99,
      "nome": "Everolimo 5mg Com 28 Comprimidos Generico Natcofarma",
      "url": "https://www.paguemenos.com.br/everolimo-5mg-com-28-comprimidos-generico-natcofarma/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 5435.99,
      "nome": "Everolimo 5mg Com 28 Comprimidos Generico Natcofarma",
      "url": "https://www.extrafarma.com.br/everolimo-5mg-com-28-comprimidos-generico-natcofarma/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 5014.59,
      "nome": "Everolimo 5mg Genérico Natcofarma 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/everolimo-5mg-generico-natcofarma-do-brasil-28-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 4672.59,
      "nome": "Everolimo 5mg Genérico Natcofarma do Brasil 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/everolimo-5mg-generico-natcofarma-do-brasil-28-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 3402.17,
      "nome": "Everolimo 1mg 60 Comprimidos Accord Farmaceutica",
      "url": "https://www.drogariavenancio.com.br/everolimo-1mg-60-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 3207.9,
      "nome": "Certican Everolimo 0,75mg 60 Comprimidos",
      "url": "https://www.panvel.com/panvel/certican-everolimo-075mg-60-comprimidos/p-501310",
      "disponivel": true
    }
  },
  "med-00387": {
    "paguemenos": {
      "preco": 937.99,
      "nome": "Exemestano 25mg Com 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/exemestano-25mg-com-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 937.99,
      "nome": "Exemestano 25mg Com 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/exemestano-25mg-com-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 179.9,
      "nome": "Exemestano 25mg Genérico Accord Pharma 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/exemestano-25mg-generico-accord-pharma-30-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 150.59,
      "nome": "Exemestano 25mg Genérico Accord Pharma 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/exemestano-25mg-generico-accord-pharma-30-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 500,
      "nome": "Exemestano 25mg 30 Comprimidos Sun Pharma",
      "url": "https://www.drogariavenancio.com.br/exemestano-25mg-30cpr-rev/p",
      "disponivel": false
    }
  },
  "med-00433": {
    "paguemenos": {
      "preco": 20.59,
      "nome": "Ginkgo Catarinense 80mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/ginkgo-biloba-catarinense-comprimidos30/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.59,
      "nome": "Ginkgo Catarinense 80mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/ginkgo-biloba-catarinense-comprimidos30/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 90.63,
      "nome": "Equitam Ginkgo biloba 80mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/equitam-80mg-momenta-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.59,
      "nome": "Ginkgo Catarinense 80mg 30 comprimidos revestidos",
      "url": "https://www.drogariavenancio.com.br/ginkgo-biloba-30cpr-catarinense/p",
      "disponivel": true
    }
  },
  "med-00392": {
    "paguemenos": {
      "preco": 23.29,
      "nome": "Ezetimiba 10mg Com 30 Comprimidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/ezetimiba-10mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 23.29,
      "nome": "Ezetimiba 10mg Com 30 Comprimidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/ezetimiba-10mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 52.73,
      "nome": "Posicor Ezetimiba 10mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/posicor-10mg-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 47.42,
      "nome": "Posicor Ezetimiba 10mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/posicor-10mg-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 39.99,
      "nome": "Ezetimiba 10mg Althaia 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/ezetimiba-10mg-althaia-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00393": {
    "paguemenos": {
      "preco": 56.49,
      "nome": "Ezetimiba+sinvastatina 10mg + 40mg Cpd/30 Generico Germed",
      "url": "https://www.paguemenos.com.br/ezetimibamaissinvastatina-10mg-mais-40mg-cpd-30-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 56.49,
      "nome": "Ezetimiba+sinvastatina 10mg + 40mg Cpd/30 Generico Germed",
      "url": "https://www.extrafarma.com.br/ezetimibamaissinvastatina-10mg-mais-40mg-cpd-30-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 76.81,
      "nome": "Zetsim Ezetimiba 10mg + Sinvastatina 20mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/zetsim-10-20mg-supera-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 76.81,
      "nome": "Zetsim Ezetimiba 10mg + Sinvastatina 20mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/zetsim-10-20mg-supera-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 60.99,
      "nome": "Ezetimiba + Sinvastatina 10 + 20mg Biolab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/ezetimiba-sinvastatina-10-20mg-30com--g--biolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 52.86,
      "nome": "Posicor Sin Ezetimiba 10mg + Sinvastatina 20mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/posicor-sin-ezetimiba-10mg-sinvastatina-20mg-30-comprimidos/p-95398",
      "disponivel": true
    }
  },
  "med-00665": {
    "paguemenos": {
      "preco": 5.29,
      "nome": "Sinvastatina 10mg 30 Comprimidos Revestidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/sinvastatina-10mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.29,
      "nome": "Sinvastatina 10mg 30 Comprimidos Revestidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/sinvastatina-10mg-com-30-comprimidos-generico-sandoz/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 7.99,
      "nome": "Sinvastacor Sinvastatina 20mg  30 Compirmidos",
      "url": "https://www.drogariasaopaulo.com.br/sinvastacor-20mg-sandoz-do-brasil-30-compirmidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 3.99,
      "nome": "Sinvastacor Sinvastatina 10mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/sinvastacor-10mg-sandoz-do-brasil-30-compirmidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 6.99,
      "nome": "Sinvastatina 20mg Pharlab 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/sinvastatina-20mg-pharlab-30-comprimidos-revestidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 4.49,
      "nome": "Sinvastatina 10mg 30 Comprimidos Revestidos Biolab Generico",
      "url": "https://www.panvel.com/panvel/sinvastatina-10mg-30-comprimidos-revestidos-biolab-generico/p-107732",
      "disponivel": true
    }
  },
  "med-00395": {
    "paguemenos": {
      "preco": 95.99,
      "nome": "Penvir 125mg 10 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/penvir-125mg-10-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 95.99,
      "nome": "Penvir 125mg 10 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/penvir-125mg-10-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 121.02,
      "nome": "Penvir Fanciclovir 125mg 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/penvir-125mg-ems-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 102.79,
      "nome": "Penvir Fanciclovir 125mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/penvir-125mg-ems-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 104.89,
      "nome": "Penvir 125mg Ems 10 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/penvir-125mg-ems-10-comprimidos-revestidos/p",
      "disponivel": true
    }
  },
  "med-00398": {
    "paguemenos": {
      "preco": 20.29,
      "nome": "Fendizoato de Cloperastina 3,54mg/ml Xarope 120ml Genérico EMS",
      "url": "https://www.paguemenos.com.br/fendizoato-de-cloperastina-xarope-3-54-mg-ml-com-120-ml-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.29,
      "nome": "Fendizoato de Cloperastina 3,54mg/ml Xarope 120ml Genérico EMS",
      "url": "https://www.extrafarma.com.br/fendizoato-de-cloperastina-xarope-3-54-mg-ml-com-120-ml-generico-ems/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 30.41,
      "nome": "Clopê 3,54mg/ml Ems Xarope 120ml + Copo Dosador",
      "url": "https://www.drogariavenancio.com.br/clope-354mg-ml-xpe-120ml-copo/p",
      "disponivel": true
    }
  },
  "med-00399": {
    "paguemenos": {
      "preco": 6.99,
      "nome": "Fenitoína 100mg 30 Comprimidos Genérico Teuto",
      "url": "https://www.paguemenos.com.br/fenitoina-100mg-comprimidos30-gn-teuto-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.99,
      "nome": "Fenitoína 100mg 30 Comprimidos Genérico Teuto",
      "url": "https://www.extrafarma.com.br/fenitoina-100mg-comprimidos30-gn-teuto-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 6.99,
      "nome": "Fenitoina 100mg Genérico Teuto 30 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/fenitoina-100mg-teuto-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 5.74,
      "nome": "Fenitoina 100mg Genérico Teuto 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/fenitoina-100mg-teuto-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.46,
      "nome": "Fenitoína 100mg Teuto 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/fenitoina-100mg-teuto-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00400": {
    "paguemenos": {
      "preco": 5.19,
      "nome": "Fenobarbital 100mg 20 Comprimidos Genérico Teuto",
      "url": "https://www.paguemenos.com.br/fenobarbital-100mg-com-20-compridos-generico-teuto/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.19,
      "nome": "Fenobarbital 100mg 20 Comprimidos Genérico Teuto",
      "url": "https://www.extrafarma.com.br/fenobarbital-100mg-com-20-compridos-generico-teuto/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 5.35,
      "nome": "Fenobarbital 100mg Genérico Neo Química 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/fenobarbital-100mg-generico-neo-quimica-20-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 3.54,
      "nome": "Fenobarbital 100mg Genérico Neo Química 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/fenobarbital-100mg-generico-hypermarcas-20-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 8.81,
      "nome": "Fenobarbital 100mg Teuto 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/fenobarbital-100mg-teuto-30-comprimidos-/p",
      "disponivel": true
    }
  },
  "med-00401": {
    "paguemenos": {
      "preco": 79.49,
      "nome": "Fenofibrato 200mg 30 Cápsulas Genérico EMS",
      "url": "https://www.paguemenos.com.br/fenofibrato-200mg-com-30-capsulas-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 79.49,
      "nome": "Fenofibrato 200mg 30 Cápsulas Genérico EMS",
      "url": "https://www.extrafarma.com.br/fenofibrato-200mg-com-30-capsulas-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 91.95,
      "nome": "Fenofibrato 160mg Genérico Ranbaxy 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/fenofibrato-160mg-generico-ranbaxy-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 91.95,
      "nome": "Fenofibrato 160mg Genérico Ranbaxy 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/fenofibrato-160mg-generico-ranbaxy-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 91.49,
      "nome": "Fenofibrato 200mg Genérico Ems 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/fenofibrato-200mg-generico-ems-30-capsulas/p",
      "disponivel": true
    }
  },
  "med-00402": {
    "paguemenos": {
      "preco": 12.49,
      "nome": "Meracilina 500.000UI 12 Comprimidos",
      "url": "https://www.paguemenos.com.br/meracilina-500ui-com-12-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.49,
      "nome": "Meracilina 500.000UI 12 Comprimidos",
      "url": "https://www.extrafarma.com.br/meracilina-500ui-com-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.66,
      "nome": "Meracilina Fenoximetilpenicilina Potássica 500.000ui 12 Comprimidos",
      "url": "https://www.panvel.com/panvel/meracilina-fenoximetilpenicilina-potassica-500000ui-12-comprimidos/p-305804",
      "disponivel": true
    }
  },
  "med-00403": {
    "paguemenos": {
      "preco": 57.62,
      "nome": "Pamfer 100mg/Ml Solução Em Gotas 30ml",
      "url": "https://www.paguemenos.com.br/pamfer-100mg-ml-solucao-em-gotas-30ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 57.62,
      "nome": "Pamfer 100mg/Ml Solução Em Gotas 30ml",
      "url": "https://www.extrafarma.com.br/pamfer-100mg-ml-solucao-em-gotas-30ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 44.99,
      "nome": "Myrafer Ferripolimaltose 400mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/myrafer-30-cp-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.97,
      "nome": "Noripurum Ferripolimaltose 50mg/ml 30ml Gotas",
      "url": "https://www.drogariaspacheco.com.br/noripurum-gotas-takeda-30ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 32.49,
      "nome": "Noripurum 10mg/ml Blanver Xarope 120ml",
      "url": "https://www.drogariavenancio.com.br/noripurum-10mg-ml-blanver-xarope-120ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 77.97,
      "nome": "Noripurum Fólico Ferripolimaltose 100mg + Ácido Fólico 0,35mg 30 Comprimidos Mastigáveis",
      "url": "https://www.panvel.com/panvel/noripurum-folico-ferripolimaltose-100mg-acido-folico-035mg-30-comprimidos-mastigaveis/p-979160",
      "disponivel": true
    }
  },
  "med-00404": {
    "paguemenos": {
      "preco": 1183.99,
      "nome": "Filgrastim 300mcg/ml Solução Injetável 5 Frascos-Ampola",
      "url": "https://www.paguemenos.com.br/filgrastim-300mcg-com-5-frascos-ampola-com-1ml-de-solucao-de-uso-intravenoso-ou-subcultaneo/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1183.99,
      "nome": "Filgrastim 300mcg/ml Solução Injetável 5 Frascos-Ampola",
      "url": "https://www.extrafarma.com.br/filgrastim-300mcg-com-5-frascos-ampola-com-1ml-de-solucao-de-uso-intravenoso-ou-subcultaneo/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 887.59,
      "nome": "Filgrastim 300mcg Aché 5 Frascos com 1ml",
      "url": "https://www.drogariasaopaulo.com.br/filgrastim-300mcg-ache-5-frascos-com-1ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 887.59,
      "nome": "Filgrastim 300mcg Aché 5 Frascos com 1ml",
      "url": "https://www.drogariaspacheco.com.br/filgrastim-300mcg-ache-5-frascos-com-1ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 797.99,
      "nome": "Filgrastim 300Mcg Aché Solução Injetável 5 Frascos de Ampolas 1ml",
      "url": "https://www.drogariavenancio.com.br/filgrastim---biosintetica-300mcg-caixa-com-5-frascos-ampola-com-1ml-de-solucao-de-uso-intravenoso-ou-subcutaneo/p",
      "disponivel": false
    }
  },
  "med-00405": {
    "paguemenos": {
      "preco": 22.59,
      "nome": "Finasterida 1mg 30 Comprimidos Revestidos Genérico Cimed",
      "url": "https://www.paguemenos.com.br/finasterida-1mg-com-30-comprimidos-generico-cimed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 22.59,
      "nome": "Finasterida 1mg 30 Comprimidos Revestidos Genérico Cimed",
      "url": "https://www.extrafarma.com.br/finasterida-1mg-com-30-comprimidos-generico-cimed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.15,
      "nome": "Finasterida 1mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/finasterida-1mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.55,
      "nome": "Finasterida 1mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/finasterida-1mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 23.99,
      "nome": "Finasterida 1mg 30 Comprimidos Uniao Quimica",
      "url": "https://www.drogariavenancio.com.br/finasterida-1mg-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00449": {
    "paguemenos": {
      "preco": 52.49,
      "nome": "Venoxide 450mg + 50mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/venoxide-450mgmais50mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 52.49,
      "nome": "Venoxide 450mg + 50mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/venoxide-450mgmais50mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 58.99,
      "nome": "Waryz Diosmina 450mg + Hesperidina 50mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/waryz-450mg--50mg-cimed-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 58.99,
      "nome": "Waryz Diosmina 450mg + Hesperidina 50mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/waryz-450mg--50mg-cimed-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 68.57,
      "nome": "Diosmin 450mg + 50mg Aché 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/diosmin-450mg---50mg-ache-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 49.99,
      "nome": "Waryz Diosmina 450mg + Hesperidina 50mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/waryz-diosmina-450mg-hesperidina-50mg-30-comprimidos-revestidos/p-105660",
      "disponivel": true
    }
  },
  "med-00406": {
    "paguemenos": {
      "preco": 72.99,
      "nome": "Perivasc 450mg + 50mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/perivasc-450mais50mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 72.99,
      "nome": "Perivasc 450mg + 50mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/perivasc-450mais50mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 84.59,
      "nome": "Flavenos Diosmina 450mg + Hesperidina 50mg 30 Comprimidos revestidos",
      "url": "https://www.drogariasaopaulo.com.br/flavenos-500mg-zurita-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 81.72,
      "nome": "Flavenos Diosmina 450mg + Hesperidina 50mg 30 Comprimidos revestidos",
      "url": "https://www.drogariaspacheco.com.br/flavenos-500mg-zurita-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 135.99,
      "nome": "Dhivas 900mg + 100mg Supera 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dhivas-900mg---100mg-supera-30-comprimidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 79.66,
      "nome": "Perivasc Diosmina 450mg + Hesperidina 50mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/perivasc-diosmina-450mg-hesperidina-50mg-30-comprimidos-revestidos/p-697300",
      "disponivel": true
    }
  },
  "med-00407": {
    "paguemenos": {
      "preco": 4.89,
      "nome": "Fluconazol 150mg com 1 comprimido Generico pharlab",
      "url": "https://www.paguemenos.com.br/fluconazol-150mg-com-1-comprimido-generico-pharlab/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 4.89,
      "nome": "Fluconazol 150mg com 1 comprimido Generico pharlab",
      "url": "https://www.extrafarma.com.br/fluconazol-150mg-com-1-comprimido-generico-pharlab/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 5.05,
      "nome": "Fluconazol 150mg Genérico Cimed 1 Comprimido",
      "url": "https://www.drogariasaopaulo.com.br/fluconazol-150mg-generico-cimed-1-comprimido/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.15,
      "nome": "Fluconazol 150mg Genérico Vitamedic 1 Cápsula",
      "url": "https://www.drogariaspacheco.com.br/fluconazol-150mg-generico-vitamedic-1-capsula/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.49,
      "nome": "Fluconazol 150mg Cimed 1 Cápsula",
      "url": "https://www.drogariavenancio.com.br/fluconazol-150mg-1cps/p",
      "disponivel": true
    }
  },
  "med-00408": {
    "paguemenos": {
      "preco": 30.29,
      "nome": "Rohypnol 1mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/rohypnol-1mg-comprimidos30-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 30.29,
      "nome": "Rohypnol 1mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/rohypnol-1mg-comprimidos30-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 15.19,
      "nome": "Rohydorm 1mg Germed 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/rohydorm-1mg-natures-plus-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.92,
      "nome": "Rohypnol 1mg FQM Melora 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/rohypnol-1mg-roche-20-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 28,
      "nome": "Rohypnol 1mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/rohypnol-1mg-30-comprimidos-revestidos/p",
      "disponivel": true
    }
  },
  "med-00410": {
    "paguemenos": {
      "preco": 79.49,
      "nome": "Suavicid 40mg/g + 0,5mg/g + 0,1mg/g Creme Dermatológico 10g",
      "url": "https://www.paguemenos.com.br/creme-dermatologico-suavicid-10g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 79.49,
      "nome": "Suavicid 40mg/g + 0,5mg/g + 0,1mg/g Creme Dermatológico 10g",
      "url": "https://www.extrafarma.com.br/creme-dermatologico-suavicid-10g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 67.02,
      "nome": "Suavicid Hidroquinona 40mg + Tretinoína 0,5mg + Fluocinolona Acetonida 0,1mg 10g Creme Dermatológico",
      "url": "https://www.drogariasaopaulo.com.br/suavicid-creme-legrand-10g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 67.02,
      "nome": "Suavicid Hidroquinona 40mg + Tretinoína 0,5mg + Fluocinolona Acetonida 0,1mg 10g Creme Dermatológico",
      "url": "https://www.drogariaspacheco.com.br/suavicid-creme-legrand-10g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 80.89,
      "nome": "Hormoskin Germed 15g Creme Dermatológico",
      "url": "https://www.drogariavenancio.com.br/hormoskin-germed-15g-creme-dermatologico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 89.99,
      "nome": "Suavicid Hidroquinona 40mg/g + Tretinoína 0,5mg/g + Fluocinolona 0,1mg/g Creme 10g",
      "url": "https://www.panvel.com/panvel/suavicid-hidroquinona-40mg-g-tretinoina-05mg-g-fluocinolona-01mg-g-creme-10g/p-93752",
      "disponivel": true
    }
  },
  "med-00459": {
    "paguemenos": {
      "preco": 28.59,
      "nome": "Hidroquinona 40mg/g Gel 30g Genérico Germed",
      "url": "https://www.paguemenos.com.br/hidroquinona-40mg-gel-30g-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 28.59,
      "nome": "Hidroquinona 40mg/g Gel 30g Genérico Germed",
      "url": "https://www.extrafarma.com.br/hidroquinona-40mg-gel-30g-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.88,
      "nome": "Hidroquinona 40mg/g Genérico Legrand 30g 1 Bisnaga",
      "url": "https://www.drogariasaopaulo.com.br/hidroquinona-40mg-g-generico-legrand-1-bisnaga-com-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 50.58,
      "nome": "Hidroquinona 40mg/g Genérico Legrand 30g 1 Bisnaga",
      "url": "https://www.drogariaspacheco.com.br/hidroquinona-40mg-g-generico-legrand-1-bisnaga-com-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 56.32,
      "nome": "Hidroquinona 40mg Gel 30g Legrand",
      "url": "https://www.drogariavenancio.com.br/hidroquinona-40mg-g-cr-30g-g-legrand/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 48.49,
      "nome": "Hidroquinona 40mg/g Gel 30g Germed Generico",
      "url": "https://www.panvel.com/panvel/hidroquinona-40mg-g-gel-30g-germed-generico/p-108453",
      "disponivel": true
    }
  },
  "med-00412": {
    "paguemenos": {
      "preco": 13.99,
      "nome": "Pastilhas para Garganta Strepsils Sabor Mel e Limão 8 Pastilhas",
      "url": "https://www.paguemenos.com.br/pastilhas-para-garganta-strepsils-sabor-mel-e-limao-caixa-8-pastilhas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.99,
      "nome": "Pastilhas para Garganta Strepsils Sabor Mel e Limão 8 Pastilhas",
      "url": "https://www.extrafarma.com.br/pastilhas-para-garganta-strepsils-sabor-mel-e-limao-caixa-8-pastilhas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 96.59,
      "nome": "Targus Lat 40mg Bagó 10 Adesivos",
      "url": "https://www.drogariavenancio.com.br/targus-lat-40mg-bago-10-adesivos/p",
      "disponivel": false
    }
  },
  "med-00413": {
    "paguemenos": {
      "preco": 124.99,
      "nome": "Flutamida 250mg Com 20 Comprimidos",
      "url": "https://www.paguemenos.com.br/flutamida-250mg-com-20-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 124.99,
      "nome": "Flutamida 250mg Com 20 Comprimidos",
      "url": "https://www.extrafarma.com.br/flutamida-250mg-com-20-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 135,
      "nome": "Flutamida 250mg Genérico Blau 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/flutamida-250mg-generico-blau-20-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 113.59,
      "nome": "Flutamida 250mg Genérico Blau 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/flutamida-250mg-generico-blau-20-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 158.89,
      "nome": "Flutamida 250mg Com 20 Comprimidos Blausiegel",
      "url": "https://www.drogariavenancio.com.br/flutamida-250mg-com-20-comprimidos/p",
      "disponivel": false
    }
  },
  "med-00686": {
    "paguemenos": {
      "preco": 16.99,
      "nome": "Decadron 1mg/ml + 3,5mg/ml Colírio 5ml",
      "url": "https://www.paguemenos.com.br/decadron-colirio-com-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.99,
      "nome": "Decadron 1mg/ml + 3,5mg/ml Colírio 5ml",
      "url": "https://www.extrafarma.com.br/decadron-colirio-com-5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.7,
      "nome": "Dexavison 1mg/ml + 3,5mg/ml Teuto Solução Oftálmica 5ml",
      "url": "https://www.drogariavenancio.com.br/dexavison-1mg-ml---35mg-ml-teuto-solucao-oftalmica-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 18.28,
      "nome": "Decadron Colírio 5ml",
      "url": "https://www.panvel.com/panvel/decadron-colirio-5ml/p-14621",
      "disponivel": true
    }
  },
  "med-00414": {
    "paguemenos": {
      "preco": 17.69,
      "nome": "Decadron 2mg/ml Solução Injetável 2 Ampolas 1ml",
      "url": "https://www.paguemenos.com.br/decadron-2mg-injetavel-com-2-ampolas-de-1ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.69,
      "nome": "Decadron 2mg/ml Solução Injetável 2 Ampolas 1ml",
      "url": "https://www.extrafarma.com.br/decadron-2mg-injetavel-com-2-ampolas-de-1ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 715.94,
      "nome": "Fosfato Dissódico de Dexametasona 4mg/ml Eurofarma Sol Inj/dil Infus Iv/im/ia Ct 50 Amp Vd Amb x 2,5ml",
      "url": "https://www.drogariavenancio.com.br/fosf-dis-dexametasona-4mg-ml-sol-inj-dil-inf-iv-im-ia-50amp-25ml--g--eurofarma/p",
      "disponivel": false
    }
  },
  "med-00415": {
    "paguemenos": {
      "preco": 40.99,
      "nome": "Vigadexa 5mg/ml + 1mg/ml Solução Oftálmica Estéril 5ml",
      "url": "https://www.paguemenos.com.br/vigadexa-colirio-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 40.99,
      "nome": "Vigadexa 5mg/ml + 1mg/ml Solução Oftálmica Estéril 5ml",
      "url": "https://www.extrafarma.com.br/vigadexa-colirio-5ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 47.74,
      "nome": "Facoba Moxifloxacino 5mg/ml + Fosfato de Dexametasona 1mg/ml 5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/facoba-solucao-oftalmica-legrand-pharma-5ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.68,
      "nome": "Facoba Moxifloxacino 5mg/ml + Fosfato de Dexametasona 1mg/ml 5ml Solução Oftálmica",
      "url": "https://www.drogariaspacheco.com.br/facoba-solucao-oftalmica-legrand-pharma-5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.79,
      "nome": "Zanty Duo 5+1mg/ml Frasco 5ml (AB)",
      "url": "https://www.drogariavenancio.com.br/zanty-duo-5-1mg-ml-frasco-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 38.09,
      "nome": "Zanty Duo (5mg+1mg/ml) Solucao Oftalmica 5ml",
      "url": "https://www.panvel.com/panvel/zanty-duo-5mg-1mg-ml-solucao-oftalmica-5ml/p-84529",
      "disponivel": true
    }
  },
  "med-00416": {
    "paguemenos": {
      "preco": 13.89,
      "nome": "Fosfato Sódico de Prednisolona 3mg/ml Solução Oral 60ml Genérico Cimed",
      "url": "https://www.paguemenos.com.br/prednisolona-3mg-solucao-oral-60ml-generico-cimed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 13.89,
      "nome": "Fosfato Sódico de Prednisolona 3mg/ml Solução Oral 60ml Genérico Cimed",
      "url": "https://www.extrafarma.com.br/prednisolona-3mg-solucao-oral-60ml-generico-cimed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 20.99,
      "nome": "Fosfato Sódico de Prednisolona 3mg/ml Genérico Vitamedic 60ml",
      "url": "https://www.drogariasaopaulo.com.br/fosfato-sodico-de-prednisolona-3mg-ml-generico-vitamedic-60ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 18.48,
      "nome": "Fosfato Sódico de Prednisolona 3mg/ml Genérico Vitamedic 60ml",
      "url": "https://www.drogariaspacheco.com.br/fosfato-sodico-de-prednisolona-3mg-ml-generico-vitamedic-60ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 15.72,
      "nome": "Fosfato Sódico De Prednisolona 3mg/ml Prati Donaduzzi Solução Oral 60mg + Seringa",
      "url": "https://www.drogariavenancio.com.br/fosfato-sodico-de-prednisolona-3mg-ml-prati-donaduzzi-solucao-oral-60mg---seringa-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.49,
      "nome": "Fosfato Sódico De Prednisolona 3mg/ml 60ml Solução Oral Vitamedic Genérico",
      "url": "https://www.panvel.com/panvel/fosfato-sodico-de-prednisolona-3mg-ml-60ml-solucao-oral-vitamedic-generico/p-101552",
      "disponivel": true
    }
  },
  "med-00418": {
    "paguemenos": {
      "preco": 35.29,
      "nome": "Fosfato de Codeína 30mg 30 Comprimidos Genérico Nova Química",
      "url": "https://www.paguemenos.com.br/fosfato-de-codeina-30mg-30-comprimidos-nova-quimica-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 35.29,
      "nome": "Fosfato de Codeína 30mg 30 Comprimidos Genérico Nova Química",
      "url": "https://www.extrafarma.com.br/fosfato-de-codeina-30mg-30-comprimidos-nova-quimica-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 25.65,
      "nome": "Codein Fosfato De Codeína 30mg 12 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/codein-30mg-cristalia-12-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 25.65,
      "nome": "Codein Fosfato De Codeína 30mg 12 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/codein-30mg-cristalia-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 44.89,
      "nome": "Fosfato de Codeína 30mg Nova Química 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/fosfat-codeina-30mg-30com--c1--g--multilab/p",
      "disponivel": true
    }
  },
  "med-00419": {
    "paguemenos": {
      "preco": 14.79,
      "nome": "Paracetamol 500mg + Fosfato De Codeína 30mg 12 Comprimidos",
      "url": "https://www.paguemenos.com.br/paracetamol-500mg-mais-fosfato-de-codeina-30mg-12-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.79,
      "nome": "Paracetamol 500mg + Fosfato De Codeína 30mg 12 Comprimidos",
      "url": "https://www.extrafarma.com.br/paracetamol-500mg-mais-fosfato-de-codeina-30mg-12-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 25.27,
      "nome": "Codex Paracetamol 500mg + Fosfato de Codeína 30mg 12 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/codex-30mg-uniao-quimica-12-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 25.79,
      "nome": "Codex 500mg + 30mg União Química 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/codex-500mg---30mg-uniao-quimica-12-comprimidos--/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 32.76,
      "nome": "Codex Paracetamol 500mg + Fosfato De Codeína 30mg 12 Comprimidos ",
      "url": "https://www.panvel.com/panvel/codex-paracetamol-500mg-fosfato-de-codeina-30mg-12-comprimidos/p-897950",
      "disponivel": true
    }
  },
  "med-00609": {
    "paguemenos": {
      "preco": 19.79,
      "nome": "Paracetamol 500mg + Fosfato de Codeína 30mg 24 Comprimidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/paracetamol-500mg-mais-fosfato-de-codeina-30mg-com-24-comprimidos-generico-actavis/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.79,
      "nome": "Paracetamol 500mg + Fosfato de Codeína 30mg 24 Comprimidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/paracetamol-500mg-mais-fosfato-de-codeina-30mg-com-24-comprimidos-generico-actavis/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 62.61,
      "nome": "Cod Par Paracetamol 500mg + Fosfato de Codeína 30mg 24 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cod-par-500mg--30mg-supera-24-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 48.59,
      "nome": "Tylex Paracetamol 500mg + Fosfato de Codeína 30mg 12 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/tylex-johnson-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 30.99,
      "nome": "Tylex 7,5mg Cellera 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/tylex-75mg-cellera-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 34.74,
      "nome": "Cod Par Paracetamol 500mg + Fosfato De Codeína 30mg 12 Comprimidos",
      "url": "https://www.panvel.com/panvel/cod-par-paracetamol-500mg-fosfato-de-codeina-30mg-12-comprimidos/p-114965",
      "disponivel": true
    }
  },
  "med-00417": {
    "paguemenos": {
      "preco": 45.59,
      "nome": "Codein 60mg 12 Comprimidos",
      "url": "https://www.paguemenos.com.br/codein-60mg-com-12-comprimidos-psicotropicos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 45.59,
      "nome": "Codein 60mg 12 Comprimidos",
      "url": "https://www.extrafarma.com.br/codein-60mg-com-12-comprimidos-psicotropicos/p",
      "disponivel": true
    }
  },
  "med-00420": {
    "paguemenos": {
      "preco": 71.49,
      "nome": "Fosfato de Oseltamivir 30mg 10 Cápsulas Duras Genérico Natcofarma",
      "url": "https://www.paguemenos.com.br/oseltamivir-30mg-com-10-capsulas-duras-generico-uniao-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 71.49,
      "nome": "Fosfato de Oseltamivir 30mg 10 Cápsulas Duras Genérico Natcofarma",
      "url": "https://www.extrafarma.com.br/oseltamivir-30mg-com-10-capsulas-duras-generico-uniao-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 82.05,
      "nome": "Fosfato de Oseltamivir 30mg Genérico Natcofarma 10 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/fosfato-de-oseltamivir-30mg-generico-uniao-quimica-10-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 82.05,
      "nome": "Fosfato de Oseltamivir 30mg Genérico Natcofarma 10 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/fosfato-de-oseltamivir-30mg-generico-uniao-quimica-10-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 81.91,
      "nome": "Fosfato De Oseltamivir 30mg Natcofarma 10 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/fosfato-de-oseltamivir-30mg-10-capsulas-/p",
      "disponivel": true
    }
  },
  "med-00423": {
    "paguemenos": {
      "preco": 40.79,
      "nome": "Fosfomicina Trometamol 3g Granulado para Solução Oral 1 Envelope Genérico Pharmascience",
      "url": "https://www.paguemenos.com.br/fosfomicina-trometamol-com-1-envelope-generico-pharmascience/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 40.79,
      "nome": "Fosfomicina Trometamol 3g Granulado para Solução Oral 1 Envelope Genérico Pharmascience",
      "url": "https://www.extrafarma.com.br/fosfomicina-trometamol-com-1-envelope-generico-pharmascience/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 26.99,
      "nome": "Fosfomicina Trometamol 5631g/8g Genérico Pharmascience 2 Envelopes de 8g Granulado",
      "url": "https://www.drogariasaopaulo.com.br/fosfomicina-trometamol-5631g-8g-generico-pharmascience-2-envelopes-8g-granulado/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 30.99,
      "nome": "Fosfomicina Trometamol 5631g/8g Genérico Pharmascience 2 Envelopes de 8g Granulado",
      "url": "https://www.drogariaspacheco.com.br/fosfomicina-trometamol-5631g-8g-generico-pharmascience-2-envelopes-8g-granulado/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 48,
      "nome": "Traturil 5,631g/8g Apsen 1 Envelope",
      "url": "https://www.drogariavenancio.com.br/traturil-5631g-8g-apsen-1-envelope/p",
      "disponivel": true
    }
  },
  "med-00424": {
    "paguemenos": {
      "preco": 19.59,
      "nome": "Fumarato de Cetotifeno 0,2mg/ml Xarope 120ml Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/fumarato-cetotifeno-xarope-120ml-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.59,
      "nome": "Fumarato de Cetotifeno 0,2mg/ml Xarope 120ml Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/fumarato-cetotifeno-xarope-120ml-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 23.09,
      "nome": "Fumarato de Cetotifeno 0,2mg/ml Genérico Prati 120ml Xarope",
      "url": "https://www.drogariasaopaulo.com.br/fumarato-de-cetotifeno-xarope-0-2mg-ml-generico-prati-120ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 23.09,
      "nome": "Fumarato de Cetotifeno 0,2mg/ml Genérico Prati 120ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/fumarato-de-cetotifeno-xarope-0-2mg-ml-generico-prati-120ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 33.99,
      "nome": "Octifen 0,25mg/ml Genom 5ml Solução Oftálmica",
      "url": "https://www.drogariavenancio.com.br/octifen-025mg-ml-genom-5ml-solucao-oftalmica/p",
      "disponivel": true
    }
  },
  "med-00425": {
    "paguemenos": {
      "preco": 722.99,
      "nome": "Fumarato de Dimetila 120mg com 56 Comprimidos",
      "url": "https://www.paguemenos.com.br/fumarato-de-dimetila-120mg-com-56-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 722.99,
      "nome": "Fumarato de Dimetila 120mg com 56 Comprimidos",
      "url": "https://www.extrafarma.com.br/fumarato-de-dimetila-120mg-com-56-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00427": {
    "paguemenos": {
      "preco": 17.99,
      "nome": "Furoato de Mometasona 1mg/g Creme 20g Genérico EMS",
      "url": "https://www.paguemenos.com.br/furoato-mometasona-creme-20g-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.99,
      "nome": "Furoato de Mometasona 1mg/g Creme 20g Genérico EMS",
      "url": "https://www.extrafarma.com.br/furoato-mometasona-creme-20g-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 26.39,
      "nome": "Furoato de Mometasona 1mg/g Genérico Germed 20g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/furoato-de-mometasona-pomada-1mg-g-generico-germed-20g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 22.65,
      "nome": "Furoato de Mometasona 1mg/g Genérico EMS 20g Creme",
      "url": "https://www.drogariaspacheco.com.br/furoato-de-mometasona-creme-1-generico-ems-20g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.89,
      "nome": "Furoato De Mometasona 1mg/g Creme 20g Germed Pharma",
      "url": "https://www.drogariavenancio.com.br/furoato-de-mometasona-1mg-generico-germed-creme-20g/p",
      "disponivel": true
    }
  },
  "med-00428": {
    "paguemenos": {
      "preco": 31.59,
      "nome": "Furoato de Mometasona Monoidratado 50mcg Suspensão Spray Nasal 120 Doses Genérico Glenmark",
      "url": "https://www.paguemenos.com.br/furoato-de-mometasona-spray-nasal-120-doses-generico-glenmark/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 31.59,
      "nome": "Furoato de Mometasona Monoidratado 50mcg Suspensão Spray Nasal 120 Doses Genérico Glenmark",
      "url": "https://www.extrafarma.com.br/furoato-de-mometasona-spray-nasal-120-doses-generico-glenmark/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 47.62,
      "nome": "Momate Furoato De Mometasona 50mcg 60 Acionamentos Spray",
      "url": "https://www.drogariasaopaulo.com.br/momate-50mcg-glenmark-spray-com-60-acionamentos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 40.09,
      "nome": "Momate Furoato De Mometasona 50mcg 60 Acionamentos Spray",
      "url": "https://www.drogariaspacheco.com.br/momate-50mcg-glenmark-spray-com-60-acionamentos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 43.09,
      "nome": "Monax 50mcg Momenta Suspensão Spray 60 Acionamentos",
      "url": "https://www.drogariavenancio.com.br/monax-50mcg-sus-spr-nas-9ml-60acionamentos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 49.06,
      "nome": "Monax Furoato De Mometasona 0,5mg/g Spray Nasal 60 Doses",
      "url": "https://www.panvel.com/panvel/monax-furoato-de-mometasona-05mg-g-spray-nasal-60-doses/p-92575",
      "disponivel": true
    }
  },
  "med-00429": {
    "paguemenos": {
      "preco": 7.19,
      "nome": "Furosemida 40mg Com 20 Comprimidos Genérico Teuto",
      "url": "https://www.paguemenos.com.br/furosemida-40mg-com-20-comprimidos-generico-teuto/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 7.19,
      "nome": "Furosemida 40mg Com 20 Comprimidos Genérico Teuto",
      "url": "https://www.extrafarma.com.br/furosemida-40mg-com-20-comprimidos-generico-teuto/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 8.73,
      "nome": "Furosemida 40mg Genérico Prati-Donaduzzi 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/furosemida-40mg-generico-prati-donaduzzi-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 5.49,
      "nome": "Furosemida 40mg Genérico Prati-Donaduzzi 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/furosemida-40mg-generico-prati-donaduzzi-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.49,
      "nome": "Furosemida 40mg 20 comprimidos Prati Donaduzzi",
      "url": "https://www.drogariavenancio.com.br/furosemida-40mg-20cpr-g-prati/p",
      "disponivel": true
    }
  },
  "med-00430": {
    "paguemenos": {
      "preco": 19.69,
      "nome": "Gabapentina 300mg Cápsulas30 Genérico Emsms P",
      "url": "https://www.paguemenos.com.br/gabapentina-300mg-capsulas30-generico-emsms-p/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 19.69,
      "nome": "Gabapentina 300mg Cápsulas30 Genérico Emsms P",
      "url": "https://www.extrafarma.com.br/gabapentina-300mg-capsulas30-generico-emsms-p/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 29.99,
      "nome": "Gabapentina 300mg Genérico Biolab 30 Capsulas",
      "url": "https://www.drogariasaopaulo.com.br/gabapentina-300mg-arrow-generico-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.99,
      "nome": "Gabapentina 300mg Genérico Biolab 30 Capsulas",
      "url": "https://www.drogariaspacheco.com.br/gabapentina-300mg-arrow-generico-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 30.99,
      "nome": "Gabapentina Prati Donaduzzi 300mg 30 cápsulas duras",
      "url": "https://www.drogariavenancio.com.br/gabapentina-prati-donaduzzi-300mg-30-capsulas-duras/p",
      "disponivel": true
    }
  },
  "med-00431": {
    "paguemenos": {
      "preco": 40.59,
      "nome": "Zymar XD 5mg/ml Solução Oftálmica 3ml",
      "url": "https://www.paguemenos.com.br/zymar-xd-0-5porcento-solucao-oftalmica-3ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 40.59,
      "nome": "Zymar XD 5mg/ml Solução Oftálmica 3ml",
      "url": "https://www.extrafarma.com.br/zymar-xd-0-5porcento-solucao-oftalmica-3ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 55.9,
      "nome": "Zymar Gatifloxacino 3mg/ml 5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/zymar-solucao-oftalmica-allergan-5ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 45.46,
      "nome": "Zymar Gatifloxacino 3mg/ml 5ml Solução Oftálmica",
      "url": "https://www.drogariaspacheco.com.br/zymar-solucao-oftalmica-allergan-5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 44.29,
      "nome": "Zymar Xd 0,5% Frasco Com 3ml",
      "url": "https://www.drogariavenancio.com.br/zymar-xd-05--frasco-com-3ml/p",
      "disponivel": true
    }
  },
  "med-00434": {
    "paguemenos": {
      "preco": 3.29,
      "nome": "Glibenclamida 5mg Com 30 Comprimidos Genérico Prati Donaduzzi",
      "url": "https://www.paguemenos.com.br/glibenclamida-5mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 3.29,
      "nome": "Glibenclamida 5mg Com 30 Comprimidos Genérico Prati Donaduzzi",
      "url": "https://www.extrafarma.com.br/glibenclamida-5mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 2.99,
      "nome": "Glibenclamida 5mg Genérico Prati Donaduzzi 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/glibenclamida-5mg-generico-30-comprimidos-/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 4.39,
      "nome": "Glibenclamida 5mg Genérico EMS 30 comprimidos",
      "url": "https://www.drogariaspacheco.com.br/glibenclamida-5mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 3.99,
      "nome": "Glibenclamida 5mg Neo Química 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/glibenclamida-5mg-neo-quimica-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00435": {
    "paguemenos": {
      "preco": 19.99,
      "nome": "Gliclazida 30mg 30 Comprimidos de Liberação Prolongada Genérico Torrent",
      "url": "https://www.paguemenos.com.br/gliclazida-30mg-com-30-comprimidos-generico-torrent/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.99,
      "nome": "Gliclazida 30mg 30 Comprimidos de Liberação Prolongada Genérico Torrent",
      "url": "https://www.extrafarma.com.br/gliclazida-30mg-com-30-comprimidos-generico-torrent/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 21.08,
      "nome": "Dicazid MR Gliclazida 30mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/dicazid-mr-30mg-pharlab-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 20.47,
      "nome": "Azukon MR Gliclazida 30mg  30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/azukon-mr-30mg-torrent-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.79,
      "nome": "Gliclazida 30mg Torrent 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/gliclazida-30mg-torrent-30-comprimidos-/p",
      "disponivel": true
    }
  },
  "med-00436": {
    "paguemenos": {
      "preco": 5.29,
      "nome": "Glimepirida 4mg 30 Comprimidos Genérico Geolab",
      "url": "https://www.paguemenos.com.br/glimepirida-4mg-30-comprimidos-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.29,
      "nome": "Glimepirida 4mg 30 Comprimidos Genérico Geolab",
      "url": "https://www.extrafarma.com.br/glimepirida-4mg-30-comprimidos-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 10.55,
      "nome": "Glimepirida 4mg Genérico Cimed 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/glimepirida-4mg-generico-cimed-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 8.24,
      "nome": "Glimepirida 4mg Genérico Cimed 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/glimepirida-4mg-generico-cimed-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.99,
      "nome": "Glimepirida Cimed 4mg 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/glimepirida-4mg-30cpr-g-cimed/p",
      "disponivel": true
    }
  },
  "med-00438": {
    "paguemenos": {
      "preco": 19.39,
      "nome": "Guaifenesina 13,3mg/ml Sabor Cereja Xarope 120ml Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/guaifenesina-13-3mg-ml-xarope-sabor-cereja-120ml-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.39,
      "nome": "Guaifenesina 13,3mg/ml Sabor Cereja Xarope 120ml Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/guaifenesina-13-3mg-ml-xarope-sabor-cereja-120ml-generico-neo-quimica/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 21.99,
      "nome": "Expectovic Xarope Expectorante 120ml",
      "url": "https://www.drogariavenancio.com.br/xarope-expectorante-expectovic-morango-120ml/p",
      "disponivel": true
    }
  },
  "med-00443": {
    "paguemenos": {
      "preco": 20.99,
      "nome": "Hemifumarato De Bisoprolol 5mg 30 Comprimidos Torrent",
      "url": "https://www.paguemenos.com.br/hemifumarato-de-bisoprolol-5mg-30-comprimidos-torrent/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.99,
      "nome": "Hemifumarato De Bisoprolol 5mg 30 Comprimidos Torrent",
      "url": "https://www.extrafarma.com.br/hemifumarato-de-bisoprolol-5mg-30-comprimidos-torrent/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 38.59,
      "nome": "Hemifumarato De Bisoprolol 1,25mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/hemifumarato-de-bisoprolol-1-25-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 43.99,
      "nome": "Hemifumarato De Bisoprolol 5mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/hemifumarato-de-bisoprolol-5-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 29.98,
      "nome": "Hemifumarato De Bisoprolol 2,5mg 30 comprimidos Medley",
      "url": "https://www.drogariavenancio.com.br/hemifumar-bisoprolol-2-5mg-30cpr-ver-g-medley/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 59.76,
      "nome": "Concor Hemifumarato Bisoprolol 2,5mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/concor-hemifumarato-bisoprolol-25mg-30-comprimidos/p-480800",
      "disponivel": true
    }
  },
  "med-00444": {
    "paguemenos": {
      "preco": 8.99,
      "nome": "Hemifumarato de Quetiapina 25mg 30 Comprimidos Revestidos Genérico Geolab",
      "url": "https://www.paguemenos.com.br/hemifumarato-de-quetiapina-25mg-com-30-comprimidos-psicotropicos-p-c1-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.99,
      "nome": "Hemifumarato de Quetiapina 25mg 30 Comprimidos Revestidos Genérico Geolab",
      "url": "https://www.extrafarma.com.br/hemifumarato-de-quetiapina-25mg-com-30-comprimidos-psicotropicos-p-c1-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 64.59,
      "nome": "Neotiapim Hemifumarato De Quetiapina 25mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/neotiapim-25mg-novartis-biociencias-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 68.19,
      "nome": "Neotiapim Hemifumarato De Quetiapina 25mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/neotiapim-25mg-novartis-biociencias-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.99,
      "nome": "Hemifumarato De Quetiapina 25mg 30 Comprimidos Revestidos Geolab",
      "url": "https://www.drogariavenancio.com.br/hemifumarato-de-quetiapina-25mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.49,
      "nome": "Hemifumarato De Quetiapina 25mg 30 Comprimidos Revestidos Teuto Genérico C1",
      "url": "https://www.panvel.com/panvel/hemifumarato-de-quetiapina-25mg-30-comprimidos-revestidos-teuto-generico-c1/p-95402",
      "disponivel": true
    }
  },
  "med-00500": {
    "paguemenos": {
      "preco": 12.89,
      "nome": "Lidocaína 50mg/g Sabor Laranja Pomada Dermatológica 25g Genérico EMS",
      "url": "https://www.paguemenos.com.br/lidocaina-laranja-pomada-25g-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.89,
      "nome": "Lidocaína 50mg/g Sabor Laranja Pomada Dermatológica 25g Genérico EMS",
      "url": "https://www.extrafarma.com.br/lidocaina-laranja-pomada-25g-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.2,
      "nome": "Dermomax Cloridrato de Lidocaína 40mg/g 5g Creme Dermatológico",
      "url": "https://www.drogariasaopaulo.com.br/dermomax-40mgg-biosintetica-creme-5g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.12,
      "nome": "Dermomax Cloridrato de Lidocaína 40mg/g 5g Creme Dermatológico",
      "url": "https://www.drogariaspacheco.com.br/dermomax-40mgg-biosintetica-creme-5g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.59,
      "nome": "Lidopass 50mg/g Cimed Pomada Sabor Laranja 25g",
      "url": "https://www.drogariavenancio.com.br/lidopass-50mg-g-cimed-pomada-sabor-laranja-25g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 32.13,
      "nome": "Dermomax Cloridrato De Lidocaína 40mg/g Creme Dermatológico 5g",
      "url": "https://www.panvel.com/panvel/dermomax-cloridrato-de-lidocaina-40mg-g-creme-dermatologico-5g/p-843800",
      "disponivel": true
    }
  },
  "med-00446": {
    "paguemenos": {
      "preco": 109.99,
      "nome": "Hemitartarato de Rivastigmina 1,5mg 30 Cápsulas Duras Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/hidrogenotartarato-de-rivastigmina-1-5mg-com-30-capsulas-generico-ranbaxy-p-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 109.99,
      "nome": "Hemitartarato de Rivastigmina 1,5mg 30 Cápsulas Duras Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/hidrogenotartarato-de-rivastigmina-1-5mg-com-30-capsulas-generico-ranbaxy-p-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 100.93,
      "nome": "Hemitartarato de Rivastigmina 1,5mg Genérico EMS 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/rivastigmina-1-5mg-30-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 96.36,
      "nome": "Hemitartarato de Rivastigmina 1,5mg Genérico EMS 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/rivastigmina-1-5mg-30-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 160,
      "nome": "Hemitartarato de Rivastigmina 1,5 mg Biosintetica 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/hemitartarato-de-rivastigmina-15-mg-biosintetica-30-comprimidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 204.99,
      "nome": "Hemitartarato De Rivastigmina Aché Biosintética 1,5mg 30 Cápsulas Genérico C1",
      "url": "https://www.panvel.com/panvel/hemitartarato-de-rivastigmina-ache-biosintetica-15mg-30-capsulas-generico-c1/p-626010",
      "disponivel": true
    }
  },
  "med-00651": {
    "paguemenos": {
      "preco": 263.99,
      "nome": "Exelon 1,5mg 28 Cápsulas Duras",
      "url": "https://www.paguemenos.com.br/exelon-1-5mg-capsulas28-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 263.99,
      "nome": "Exelon 1,5mg 28 Cápsulas Duras",
      "url": "https://www.extrafarma.com.br/exelon-1-5mg-capsulas28-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 153.75,
      "nome": "Rivastigmina 3mg Genérico Biosintética 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/rivastigmina-3mg-generico-biosintetica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 145.99,
      "nome": "Rivastigmina 4,5mg Genérico Biosintética 30 Cápsulas Duras",
      "url": "https://www.drogariaspacheco.com.br/rivastigmina-4-5mg-generico-biosintetica-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 359.99,
      "nome": "Vivencia Patch 9mg Aché 5cm 30 Adesivos Transdérmicos",
      "url": "https://www.drogariavenancio.com.br/vivencia-patch-9mg-ache-5-cm-30-adesivos-transdermicos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 378.73,
      "nome": "Exelon Rivastigmina 6,0mg 28 Cápsulas",
      "url": "https://www.panvel.com/panvel/exelon-rivastigmina-60mg-28-capsulas/p-369675",
      "disponivel": true
    }
  },
  "med-00447": {
    "paguemenos": {
      "preco": 11.79,
      "nome": "Hemitartarato De Zolpidem 10mg 30 Comprimidos Revestidos Genérico Sandoz",
      "url": "https://www.paguemenos.com.br/hemitartarato-de-zolpidem-10mg-30-comprimidos-revestidos-generico-sandoz/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.79,
      "nome": "Hemitartarato De Zolpidem 10mg 30 Comprimidos Revestidos Genérico Sandoz",
      "url": "https://www.extrafarma.com.br/hemitartarato-de-zolpidem-10mg-30-comprimidos-revestidos-generico-sandoz/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 16.49,
      "nome": "Hemitartarato de Zolpidem 10mg Genérico Teuto 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/hemitartarato-de-zolpidem-10mg-generico-teuto-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 2.17,
      "nome": "Hemitartarato De Zolpidem 10mg Genérico Novartis 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/hemitartarato-de-zolpidem-10mg-generico-novartis-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 18.99,
      "nome": "Hemitartarato De Zolpidem 10mg Sandoz 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/hemitartarato-de-zolpidem-10mg-sandoz-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 160.59,
      "nome": "Patz Gts Hemitartarato De Zolpidem 10mg/ml 20ml Solução Oral",
      "url": "https://www.panvel.com/panvel/patz-gts-hemitartarato-de-zolpidem-10mg-ml-20ml-solucao-oral/p-95511",
      "disponivel": true
    }
  },
  "med-00448": {
    "paguemenos": {
      "preco": 41.99,
      "nome": "Trombofob 200UI/g Gel 40g",
      "url": "https://www.paguemenos.com.br/trombofob-200ui-gel-bisnaga-40g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 41.99,
      "nome": "Trombofob 200UI/g Gel 40g",
      "url": "https://www.extrafarma.com.br/trombofob-200ui-gel-bisnaga-40g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 838.89,
      "nome": "Hepamax-S 5.000 Ui/ml 5ml",
      "url": "https://www.drogariavenancio.com.br/hepamax-s-5-000-ui-ml-5ml/p",
      "disponivel": false
    }
  },
  "med-00450": {
    "paguemenos": {
      "preco": 59.99,
      "nome": "Hiluropt Max 0,2% Solução Oftálmica 10ml",
      "url": "https://www.paguemenos.com.br/hiluropt-max-0-2porcento-solucao-oftalmica-10ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 59.99,
      "nome": "Hiluropt Max 0,2% Solução Oftálmica 10ml",
      "url": "https://www.extrafarma.com.br/hiluropt-max-0-2porcento-solucao-oftalmica-10ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 49.99,
      "nome": "Lunah 1mg/ml Solução De Uso Oftálmico 10ml",
      "url": "https://www.drogariavenancio.com.br/lunah-1mg-ml-solucao-de-uso-oftalmico-10ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 46.72,
      "nome": "Hiluropt - Hialuronato De Sódio 0,15% Sem Conservantes 10 Ml",
      "url": "https://www.panvel.com/panvel/hiluropt-hialuronato-de-sodio-015-sem-conservantes-10-ml/p-99559",
      "disponivel": true
    }
  },
  "med-00451": {
    "paguemenos": {
      "preco": 1.89,
      "nome": "Hidroclorotiazida 25mg 30 Comprimidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/hidroclorotiazida-25mg-com-30-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1.89,
      "nome": "Hidroclorotiazida 25mg 30 Comprimidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/hidroclorotiazida-25mg-com-30-comprimidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 2.85,
      "nome": "Hidroclorotiazida 25mg Genérico Medquimica 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/hidroclorotiazida-25mg-generico-medquimica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 2.85,
      "nome": "Hidroclorotiazida 25mg Genérico Medquimica 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/hidroclorotiazida-25mg-generico-medquimica-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 2.69,
      "nome": "Hidroclorotiazida 25mg Medquímica 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/hidroclorotiazida-25mg-medquimica-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 2.49,
      "nome": "Hidroclorotiazida 25mg 30 Comprimidos Neoquímica Genérico",
      "url": "https://www.panvel.com/panvel/hidroclorotiazida-25mg-30-comprimidos-neoquimica-generico/p-608390",
      "disponivel": true
    }
  },
  "med-00455": {
    "paguemenos": {
      "preco": 85.49,
      "nome": "Telmisartana 40mg + Hidroclorotiazida 12mg 30 Comprimidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/telmisartana-40mg-mais-hidroclorotiazida-12-5mg-30-comprimidos-generico-hypera/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 85.49,
      "nome": "Telmisartana 40mg + Hidroclorotiazida 12mg 30 Comprimidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/telmisartana-40mg-mais-hidroclorotiazida-12-5mg-30-comprimidos-generico-hypera/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 111.84,
      "nome": "Bramicar HCT Telmisartana 80mg + Hidroclorotiazida 25mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/bramicar-hct-80mg25mg-30-comprimidos-ems/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 100.44,
      "nome": "Bramicar HCT Telmisartana 80mg + Hidroclorotiazida 25mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/bramicar-hct-80mg25mg-30-comprimidos-ems/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 258.77,
      "nome": "Micardis Hct 80mg/12,5mg Boehringer 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/micardis-hct-80mg-125mg-boehringer-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 56.79,
      "nome": "Telmisartana / Hidroclorotiazida 40/12,5mg 30 Comprimidos Torrent Genérico",
      "url": "https://www.panvel.com/panvel/telmisartana-hidroclorotiazida-40-125mg-30-comprimidos-torrent-generico/p-88362",
      "disponivel": true
    }
  },
  "med-00701": {
    "paguemenos": {
      "preco": 88.99,
      "nome": "Telmisartana 40mg 30 Comprimidos Genérico Althaia",
      "url": "https://www.paguemenos.com.br/telmisartana-40mg-com-30-comprimidos-generico-althaia/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 88.99,
      "nome": "Telmisartana 40mg 30 Comprimidos Genérico Althaia",
      "url": "https://www.extrafarma.com.br/telmisartana-40mg-com-30-comprimidos-generico-althaia/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 90.59,
      "nome": "Telmisartana 40mg Genérico Althaia 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/telmisartana-40mg-althaia-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 72.45,
      "nome": "Bramicar Telmisartana 80mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/bramicar-80mg-sem-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 69.99,
      "nome": "Telmisartana 80mg 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/telmisartana-80mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 77.99,
      "nome": "Telmisartana 40mg 30 Comprimidos Althaia Generico",
      "url": "https://www.panvel.com/panvel/telmisartana-40mg-30-comprimidos-althaia-generico/p-104826",
      "disponivel": true
    }
  },
  "med-00456": {
    "paguemenos": {
      "preco": 45.59,
      "nome": "Valsartana 160mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.paguemenos.com.br/valsartana-160mg-mais-hidroclorotiazida-12-5mg-30-comprimidos-revestidos-generico-ache/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 45.59,
      "nome": "Valsartana 160mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.extrafarma.com.br/valsartana-160mg-mais-hidroclorotiazida-12-5mg-30-comprimidos-revestidos-generico-ache/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 104.18,
      "nome": "Brasart HCT Valsartana 80mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/brasart-hct-80125-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 68.69,
      "nome": "Bravan HCT Valsartana 160mg + Hidroclorotiazida 25mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/bravan-hct-160mg--25mg-30-comprimidos-revestidos-ache/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 50.42,
      "nome": "Valsartana + Hidroclorotiazida 160mg + 25mg Biosintética 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/valsartana-hidroclorotiazida--160---25-mg-30com--g--ache/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 56.99,
      "nome": "Valsartana/hidroclorotiazida 160/25mg 30 Comprimidos Revestidos Aché Génerico",
      "url": "https://www.panvel.com/panvel/valsartana-hidroclorotiazida-160-25mg-30-comprimidos-revestidos-ache-generico/p-93949",
      "disponivel": true
    }
  },
  "med-00743": {
    "paguemenos": {
      "preco": 31.99,
      "nome": "Valsartana 160mg 30 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/valsartana-160mg-com-30-comprimidos-genericos-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 31.99,
      "nome": "Valsartana 160mg 30 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/valsartana-160mg-com-30-comprimidos-genericos-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 50.15,
      "nome": "Valsartana 160mg + Hidroclorotiazida 12,5mg Genérico Biosintética 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/valsartana-hidroclorotiazida-generico-biosintetica-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.15,
      "nome": "Valsartana 80mg Genérico Cimed 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/valsartana-80mg-generico-cimed-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 22.99,
      "nome": "Valsartana 80mg Teuto 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/valsartana-80mg-30com--g--teuto/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 28.49,
      "nome": "Valsartana 80mg 30 Comprimidos Revestidos Germed Generico",
      "url": "https://www.panvel.com/panvel/valsartana-80mg-30-comprimidos-revestidos-germed-generico/p-610210",
      "disponivel": true
    }
  },
  "med-00457": {
    "paguemenos": {
      "preco": 21.99,
      "nome": "Hidrocortisona 10mg/g Pomada Dermatológica 30g Genérico EMS",
      "url": "https://www.paguemenos.com.br/hidrocortisona-10mg-pomada-30g-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 21.99,
      "nome": "Hidrocortisona 10mg/g Pomada Dermatológica 30g Genérico EMS",
      "url": "https://www.extrafarma.com.br/hidrocortisona-10mg-pomada-30g-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 12.49,
      "nome": "Hidrocortisona 10mg/g Genérico Teuto 20g Creme",
      "url": "https://www.drogariasaopaulo.com.br/hidrocortisona-10mgg-creme-dermatologico-20g-g-teuto/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 10.06,
      "nome": "Hidrocortisona 10mg/g Genérico Teuto 20g Creme",
      "url": "https://www.drogariaspacheco.com.br/hidrocortisona-10mgg-creme-dermatologico-20g-g-teuto/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 30.09,
      "nome": "Hidrocortisona EMS Pomada 10mg/g 30g",
      "url": "https://www.drogariavenancio.com.br/hidrocortisona10mg-g-pom-30g-g-ems/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.49,
      "nome": "Hidrocortisona 10mg/g Creme 15g Teuto Genérico",
      "url": "https://www.panvel.com/panvel/hidrocortisona-10mg-g-creme-15g-teuto-generico/p-560770",
      "disponivel": true
    }
  },
  "med-00460": {
    "paguemenos": {
      "preco": 235.99,
      "nome": "Hidroxiuréia 500mg 100 Capsulas Generico Blau",
      "url": "https://www.paguemenos.com.br/hidroxiureia-500mg-100-capsulas-generico-blau/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 235.99,
      "nome": "Hidroxiuréia 500mg 100 Capsulas Generico Blau",
      "url": "https://www.extrafarma.com.br/hidroxiureia-500mg-100-capsulas-generico-blau/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 218.99,
      "nome": "Hidroxiureia 500mg Blau Farmacêutica 100 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/hidroxiureia-500mg-blau-farmaceutica-100-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 204.59,
      "nome": "Hidroxiureia 500mg Blau Farmacêutica 100 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/hidroxiureia-500mg-blau-farmaceutica-100-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 281.59,
      "nome": "Tepev 500mg, Caixa Com 100 Cápsulas Duras",
      "url": "https://www.drogariavenancio.com.br/tepev-500mg-caixa-com-100-capsulas-duras/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 213.38,
      "nome": "Hidroxiureia 500mg 100 Cápsulas Duras Blau Genérico",
      "url": "https://www.panvel.com/panvel/hidroxiureia-500mg-100-capsulas-duras-blau-generico/p-91183",
      "disponivel": true
    }
  },
  "med-00119": {
    "paguemenos": {
      "preco": 1.49,
      "nome": "Gastrol 185mg + 235mg + 178mg Sabor Abacaxi Pó Efervescente 1 Envelope 5g",
      "url": "https://www.paguemenos.com.br/gastrol-abacaxi-po-efervescente-envelope-5-gramas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1.49,
      "nome": "Gastrol 185mg + 235mg + 178mg Sabor Abacaxi Pó Efervescente 1 Envelope 5g",
      "url": "https://www.extrafarma.com.br/gastrol-abacaxi-po-efervescente-envelope-5-gramas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 4.07,
      "nome": "Gastrol Antiácido Pó Efervescente Sabor Abacaxi Sachê 5g",
      "url": "https://www.panvel.com/panvel/gastrol-antiacido-po-efervescente-sabor-abacaxi-sache-5g/p-800510",
      "disponivel": true
    }
  },
  "med-00462": {
    "paguemenos": {
      "preco": 16.99,
      "nome": "Gastrol 185mg + 235mg + 178mg Sabor Abacaxi Pó Efervescente 6 Envelopes de 5g",
      "url": "https://www.paguemenos.com.br/gastrol-abacaxi-po-efervescente-6-envelopes-de-5g-cada/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.99,
      "nome": "Gastrol 185mg + 235mg + 178mg Sabor Abacaxi Pó Efervescente 6 Envelopes de 5g",
      "url": "https://www.extrafarma.com.br/gastrol-abacaxi-po-efervescente-6-envelopes-de-5g-cada/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10.39,
      "nome": "Estomazil Pastilhas Sabor Abacaxi 10 unidades",
      "url": "https://www.drogariavenancio.com.br/estomazil-abacaxi-10past/p",
      "disponivel": true
    }
  },
  "med-00463": {
    "paguemenos": {
      "preco": 25.79,
      "nome": "Antiácido Gelmax Dim Suspensão Oral Sem Sabor 240ml",
      "url": "https://www.paguemenos.com.br/gelmax-dimeticona-suspensao-oral-240ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 25.79,
      "nome": "Antiácido Gelmax Dim Suspensão Oral Sem Sabor 240ml",
      "url": "https://www.extrafarma.com.br/gelmax-dimeticona-suspensao-oral-240ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.7,
      "nome": "Gastrogel Fresh Medquímica Suspensão Oral 150ml",
      "url": "https://www.drogariavenancio.com.br/gastrogel-fresh-medquimica-150ml-suspensao/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 20.83,
      "nome": "Gastrogel 20 Comprimidos Mastigáveis",
      "url": "https://www.panvel.com/panvel/gastrogel-20-comprimidos-mastigaveis/p-867740",
      "disponivel": true
    }
  },
  "med-00464": {
    "paguemenos": {
      "preco": 25.79,
      "nome": "Afrat 150mg 1 Comprimido",
      "url": "https://www.paguemenos.com.br/afrat-150mg-com-1-comprimido/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 25.79,
      "nome": "Afrat 150mg 1 Comprimido",
      "url": "https://www.extrafarma.com.br/afrat-150mg-com-1-comprimido/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 29.39,
      "nome": "Afrat Ibandronato De Sódio 150mg 1 Comprimido",
      "url": "https://www.drogariasaopaulo.com.br/afrat-150mg-cristalia-1-comprimido/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29.39,
      "nome": "Afrat Ibandronato De Sódio 150mg 1 Comprimido",
      "url": "https://www.drogariaspacheco.com.br/afrat-150mg-cristalia-1-comprimido/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.99,
      "nome": "Ibandronato de Sódio 150mg Eurofarma 1 comprimido",
      "url": "https://www.drogariavenancio.com.br/ibandronato-sodio-150mg-1com--g--eurofarma/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 31.99,
      "nome": "Ibandronato De Sódio 150mg 1 Comprimido Revestido Eurofarma Generico",
      "url": "https://www.panvel.com/panvel/ibandronato-de-sodio-150mg-1-comprimido-revestido-eurofarma-generico/p-112031",
      "disponivel": true
    }
  },
  "med-00465": {
    "paguemenos": {
      "preco": 35.99,
      "nome": "Ibandronato de Sódio Monoidratado 150mg 1 Comprimido Revestido Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/gen-ibandronato-sod-150mg-1cpr/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 35.99,
      "nome": "Ibandronato de Sódio Monoidratado 150mg 1 Comprimido Revestido Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/gen-ibandronato-sod-150mg-1cpr/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 51.81,
      "nome": "Ibanuno Ibandronato De Sódio 150mg 1 Comprimido",
      "url": "https://www.drogariasaopaulo.com.br/ibanuno-150mg-supera-1-comprimido/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 48.99,
      "nome": "Ibanuno Ibandronato De Sódio 150mg 1 Comprimido",
      "url": "https://www.drogariaspacheco.com.br/ibanuno-150mg-supera-1-comprimido/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 49.99,
      "nome": "IbanUno 150mg Supera 1 Comprimido Revestidos",
      "url": "https://www.drogariavenancio.com.br/ibanuno-150mg-1-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 44.49,
      "nome": "Ibandronato De Sódio Monoidratado 150mg 1 Comprimido Revestido Ems Generico",
      "url": "https://www.panvel.com/panvel/ibandronato-de-sodio-monoidratado-150mg-1-comprimido-revestido-ems-generico/p-102466",
      "disponivel": true
    }
  },
  "med-00466": {
    "paguemenos": {
      "preco": 5.19,
      "nome": "Ibuprofeno 100mg/ml Sabor Morango Suspensão Oral Gotas 20ml Genérico Medquímica",
      "url": "https://www.paguemenos.com.br/ibuprofeno-100mg-ml-morango-20ml-medquimica-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.19,
      "nome": "Ibuprofeno 100mg/ml Sabor Morango Suspensão Oral Gotas 20ml Genérico Medquímica",
      "url": "https://www.extrafarma.com.br/ibuprofeno-100mg-ml-morango-20ml-medquimica-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 19.99,
      "nome": "Ibuprofeno 400mg Genérico Cimed 10 Cápsulas Líquidas",
      "url": "https://www.drogariasaopaulo.com.br/ibuprofeno-400mg-generico-cimed-10-capsulas-liquidas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 20.45,
      "nome": "Ibuprofeno 600mg Genérico Pharlab 10 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/ibuprofeno-600mg-generico-pharlab-10-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.56,
      "nome": "Ibuprofeno 400mg Neo Química 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/ibuprofeno-400mg-neo-quimica-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 7.99,
      "nome": "Ibuprofeno 50mg/ml 30ml Neo Química Genérico",
      "url": "https://www.panvel.com/panvel/ibuprofeno-50mg-ml-30ml-neo-quimica-generico/p-953860",
      "disponivel": true
    }
  },
  "med-00468": {
    "paguemenos": {
      "preco": 127.99,
      "nome": "Modik 50mg/g Creme Dermatológico 6 Sachês",
      "url": "https://www.paguemenos.com.br/modik-creme-dermatologico-com-6-saches-250mg/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 127.99,
      "nome": "Modik 50mg/g Creme Dermatológico 6 Sachês",
      "url": "https://www.extrafarma.com.br/modik-creme-dermatologico-com-6-saches-250mg/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 145.52,
      "nome": "Modik Imiquimode 50mg/g 6 Saches Creme",
      "url": "https://www.drogariasaopaulo.com.br/modik-50mgg-natures-plus-6-saches-creme/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 145.52,
      "nome": "Modik Imiquimode 50mg/g 6 Saches Creme",
      "url": "https://www.drogariaspacheco.com.br/modik-50mgg-natures-plus-6-saches-creme/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 255.89,
      "nome": "Modik Germed 12 Sachês Creme Dermatológico",
      "url": "https://www.drogariavenancio.com.br/modik-germed-12-saches-creme-dermatologico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 283.62,
      "nome": "Modik Imiquimod 250mg Creme 12 Sachês",
      "url": "https://www.panvel.com/panvel/modik-imiquimod-250mg-creme-12-saches/p-581320",
      "disponivel": true
    }
  },
  "med-00469": {
    "paguemenos": {
      "preco": 10.29,
      "nome": "Indapamida 1,5mg 30 Comprimidos Revestidos de Liberação Prolongada Genérico Torrent",
      "url": "https://www.paguemenos.com.br/indapamida-1-5mg-com-30-comprimidos-generico-torrent/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.29,
      "nome": "Indapamida 1,5mg 30 Comprimidos Revestidos de Liberação Prolongada Genérico Torrent",
      "url": "https://www.extrafarma.com.br/indapamida-1-5mg-com-30-comprimidos-generico-torrent/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.59,
      "nome": "Indapamida 1,5mg Generico EMS 30 Comprimidos  Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/indapamida-15mg-generico-ems-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 23.09,
      "nome": "Indapamida 1,5mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/indapamida-1-5mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.44,
      "nome": "Indapamida 1,5mg Geolab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/indapamida-15mg-30com--g--geolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 17.99,
      "nome": "Indapamida 1,5mg 30 Comprimidos Revestivos De Liberação Prolongada Eurofarma Genérico",
      "url": "https://www.panvel.com/panvel/indapamida-15mg-30-comprimidos-revestivos-de-liberacao-prolongada-eurofarma-generico/p-455130",
      "disponivel": true
    }
  },
  "med-00471": {
    "paguemenos": {
      "preco": 49.29,
      "nome": "Fiasp Flextouch 100UI/ml Solução Injetável 3ml 1 Sistema de Aplicação",
      "url": "https://www.paguemenos.com.br/insulina-fiasp-flextouch-100ui-3ml-com-1-sistema/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 49.29,
      "nome": "Fiasp Flextouch 100UI/ml Solução Injetável 3ml 1 Sistema de Aplicação",
      "url": "https://www.extrafarma.com.br/insulina-fiasp-flextouch-100ui-3ml-com-1-sistema/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 269.99,
      "nome": "Kirsty Insulina Asparte 100u/ml 5 Canetas Injetável",
      "url": "https://www.drogariasaopaulo.com.br/kirsty-insulina-asparte-100u-ml-5-canetas-injetavel/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 269.99,
      "nome": "Kirsty Insulina Asparte 100u/ml 5 Canetas Injetável",
      "url": "https://www.drogariaspacheco.com.br/kirsty-insulina-asparte-100u-ml-5-canetas-injetavel/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 66.44,
      "nome": "Fiasp FlexTouch Solução Injetável 100U/ml 3ml",
      "url": "https://www.drogariavenancio.com.br/fiasp-flextouch-solucao-injetavel-100u-ml-3ml/p",
      "disponivel": true
    }
  },
  "med-00472": {
    "paguemenos": {
      "preco": 85.99,
      "nome": "Insulina Lantus Solostar 1 Caneta Refil 3ml",
      "url": "https://www.paguemenos.com.br/insulina-lantus-solostar-1-caneta-refil-com-3ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 85.99,
      "nome": "Insulina Lantus Solostar 1 Caneta Refil 3ml",
      "url": "https://www.extrafarma.com.br/insulina-lantus-solostar-1-caneta-refil-com-3ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 57.55,
      "nome": "Semglee Insulina Glargina 100u/ml 1 Caneta Injetável 3ml",
      "url": "https://www.drogariasaopaulo.com.br/semglee-insulina-glargina-100u-ml-1-caneta-injetavel-3ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 60.5,
      "nome": "Semglee Insulina Glargina 100u/ml 1 Caneta Injetável 3ml",
      "url": "https://www.drogariaspacheco.com.br/semglee-insulina-glargina-100u-ml-1-caneta-injetavel-3ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 55.35,
      "nome": "Semglee 100u/ml 1 Caneta Aplicadora Solucao Injetavel 3 Ml",
      "url": "https://www.panvel.com/panvel/semglee-100u-ml-1-caneta-aplicadora-solucao-injetavel-3-ml/p-86703",
      "disponivel": true
    }
  },
  "med-00473": {
    "paguemenos": {
      "preco": 29.79,
      "nome": "Novolin N 100UI/ml Suspensão Injetável 1 Frasco-Ampola 10ml",
      "url": "https://www.paguemenos.com.br/insulina-novolin-n-10ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 29.79,
      "nome": "Novolin N 100UI/ml Suspensão Injetável 1 Frasco-Ampola 10ml",
      "url": "https://www.extrafarma.com.br/insulina-novolin-n-10ml/p",
      "disponivel": true
    }
  },
  "med-00475": {
    "paguemenos": {
      "preco": 63.49,
      "nome": "Humalog KwikPen 100UI/ml Solução Injetável 1 Caneta Descartável 3ml",
      "url": "https://www.paguemenos.com.br/insulina-humalog-kwikpen-3ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 63.49,
      "nome": "Humalog KwikPen 100UI/ml Solução Injetável 1 Caneta Descartável 3ml",
      "url": "https://www.extrafarma.com.br/insulina-humalog-kwikpen-3ml/p",
      "disponivel": true
    }
  },
  "med-00476": {
    "paguemenos": {
      "preco": 1.59,
      "nome": "Stomaliv 0,5g + 2,15g + 2,15g Sem Sabor Pó Efervescente 1 Envelope 5g",
      "url": "https://www.paguemenos.com.br/stomaliv-sem-sabor-5g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1.59,
      "nome": "Stomaliv 0,5g + 2,15g + 2,15g Sem Sabor Pó Efervescente 1 Envelope 5g",
      "url": "https://www.extrafarma.com.br/stomaliv-sem-sabor-5g/p",
      "disponivel": true
    }
  },
  "med-00754": {
    "paguemenos": {
      "preco": 1.59,
      "nome": "Stomaliv 2,15g + 0,50g + 2,15g Sabor Abacaxi Pó Efervescente 1 Envelope 5g",
      "url": "https://www.paguemenos.com.br/stomaliv-sabor-abacaxi-1-sache-com-5g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1.59,
      "nome": "Stomaliv 2,15g + 0,50g + 2,15g Sabor Abacaxi Pó Efervescente 1 Envelope 5g",
      "url": "https://www.extrafarma.com.br/stomaliv-sabor-abacaxi-1-sache-com-5g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.49,
      "nome": "Sal de Fruta Eno Tônica 2 Sachê",
      "url": "https://www.drogariavenancio.com.br/sal-de-fruta-eno-tonica-2-sache-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 4.98,
      "nome": "Sal De Fruta Eno Tradicional, Alívio Rápido Da Azia 2 Envelopes Com 5g Cada",
      "url": "https://www.panvel.com/panvel/sal-de-fruta-eno-tradicional-alivio-rapido-da-azia-2-envelopes-com-5g-cada/p-483870",
      "disponivel": true
    }
  },
  "med-00477": {
    "paguemenos": {
      "preco": 113.99,
      "nome": "Irbesartana 12,5mg + Hidroclorotiazida 150mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/irbesartana-12-5mg-mais-hidroclorotiazida-150mg-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 113.99,
      "nome": "Irbesartana 12,5mg + Hidroclorotiazida 150mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/irbesartana-12-5mg-mais-hidroclorotiazida-150mg-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 145.03,
      "nome": "Bart H Irbesartana 150mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/bart-h-150mg125mg-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 122.1,
      "nome": "Bart H Irbesartana 300mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/bart-h-300mg125mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 132.87,
      "nome": "Irbesartana + Hidroclorotiazida 150mg + 12,5mg Eurofarma 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/irbesartana---hidroclorotiazida-150mg---125mg-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 140.49,
      "nome": "Irbesartana + Hidroclorotiazida 300/12,5mg 30 Comprimidos Eurofarma Genérico",
      "url": "https://www.panvel.com/panvel/irbesartana-hidroclorotiazida-300-125mg-30-comprimidos-eurofarma-generico/p-644180",
      "disponivel": true
    }
  },
  "med-00478": {
    "paguemenos": {
      "preco": 33.29,
      "nome": "Isotretinoina 10mg Com 30 Cápsulas Bausch",
      "url": "https://www.paguemenos.com.br/isotretinoina-10mg-com-30-capsulas-bausch/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 33.29,
      "nome": "Isotretinoina 10mg Com 30 Cápsulas Bausch",
      "url": "https://www.extrafarma.com.br/isotretinoina-10mg-com-30-capsulas-bausch/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 41.29,
      "nome": "Isotretinoina 20mg Genérico Nova Química 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/isotretinoina-20mg-nova-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 56.99,
      "nome": "Isotretinoina 20mg Genérico Nova Química 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/isotretinoina-20mg-nova-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 68.61,
      "nome": "Isotretinoina 10mg Nova Química 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/isotretinoina-10mg-nova-quimica-30-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 80.99,
      "nome": "Isotretinoina 20mg 30 Capsulas Ranbaxy Genérico C2",
      "url": "https://www.panvel.com/panvel/isotretinoina-20mg-30-capsulas-ranbaxy-generico-c2/p-119657",
      "disponivel": true
    }
  },
  "med-00479": {
    "paguemenos": {
      "preco": 22.99,
      "nome": "Itraconazol 100mg 4 Cápsulas Duras Genérico Geolab",
      "url": "https://www.paguemenos.com.br/itraconazol-100mg-com-4-capsulas-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 22.99,
      "nome": "Itraconazol 100mg 4 Cápsulas Duras Genérico Geolab",
      "url": "https://www.extrafarma.com.br/itraconazol-100mg-com-4-capsulas-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 28.99,
      "nome": "Traxonol Itraconazol 100mg 4 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/traxonol-100mg-4-capsulas-duras-geolab/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 19.35,
      "nome": "Itraconazol 100mg Genérico EMS 4 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/itraconazol-100mg-4-capsulas-g-ems/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 15.36,
      "nome": "Itraconazol 100mg Geolab 4 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/itraconazol-100mg-4cap--g--geolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 37.07,
      "nome": "Itraspor Itraconazol 100mg 4 Cápsulas",
      "url": "https://www.panvel.com/panvel/itraspor-itraconazol-100mg-4-capsulas/p-480780",
      "disponivel": true
    }
  },
  "med-00480": {
    "paguemenos": {
      "preco": 10.99,
      "nome": "Ivermectina 6mg 2 Comprimidos Genérico Germed",
      "url": "https://www.paguemenos.com.br/ivermectina-6mg-com-2-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.99,
      "nome": "Ivermectina 6mg 2 Comprimidos Genérico Germed",
      "url": "https://www.extrafarma.com.br/ivermectina-6mg-com-2-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 12.09,
      "nome": "Ivermectina 6mg Genérico Germed Pharma 2 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/ivermectina-6mg-generico-germed-pharma-2-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 12.09,
      "nome": "Ivermectina 6mg Genérico Germed Pharma 2 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/ivermectina-6mg-generico-germed-pharma-2-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 6.99,
      "nome": "Ivermectina 6mg 2 Comprimidos Simples Neo Quimica",
      "url": "https://www.drogariavenancio.com.br/ivermectina-6mg-2com--g--neoquimica/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 8.49,
      "nome": "Ivermectina 6mg 2 Comprimidos Prati Genérico",
      "url": "https://www.panvel.com/panvel/ivermectina-6mg-2-comprimidos-prati-generico/p-92830",
      "disponivel": true
    }
  },
  "med-00481": {
    "paguemenos": {
      "preco": 39.49,
      "nome": "Lacosamida 50mg 14 Comprimidos Revestidos Genérico Torrent",
      "url": "https://www.paguemenos.com.br/lacosamida-50mg-com-14-comprimidos-psicotropicos-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 39.49,
      "nome": "Lacosamida 50mg 14 Comprimidos Revestidos Genérico Torrent",
      "url": "https://www.extrafarma.com.br/lacosamida-50mg-com-14-comprimidos-psicotropicos-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.46,
      "nome": "Lacosamida 50mg Genérico Torrent 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/lacosamida-50mg-generico-torrent-14-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 59.51,
      "nome": "Lacosamida 50mg Genérico Torrent 14 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/lacosamida-50mg-generico-torrent-14-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 87.29,
      "nome": "Vimpat 50mg Com 14 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/vimpat-50mg-com-14-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 44.49,
      "nome": "Lacosamida 50mg 14 Comprimidos Revestidos Torrent Genericos C1",
      "url": "https://www.panvel.com/panvel/lacosamida-50mg-14-comprimidos-revestidos-torrent-genericos-c1/p-99013",
      "disponivel": true
    }
  },
  "med-00482": {
    "paguemenos": {
      "preco": 55.99,
      "nome": "Lactulona 667mg/ml Sabor Salada de Frutas Xarope 120ml",
      "url": "https://www.paguemenos.com.br/lactulona-sal-fruta-xarope-120ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 55.99,
      "nome": "Lactulona 667mg/ml Sabor Salada de Frutas Xarope 120ml",
      "url": "https://www.extrafarma.com.br/lactulona-sal-fruta-xarope-120ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 57.39,
      "nome": "Lactulona Sabor Ameixa Xarope 120ml",
      "url": "https://www.drogariavenancio.com.br/lactulona-sabor-ameixa-daiichi-sankyo-120ml-xarope/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 56.48,
      "nome": "Lactulona Xarope Ameixa 120ml",
      "url": "https://www.panvel.com/panvel/lactulona-xarope-ameixa-120ml/p-810310",
      "disponivel": true
    }
  },
  "med-00483": {
    "paguemenos": {
      "preco": 7.99,
      "nome": "Lamotrigina 25mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/gn-lamotrigina-25mg-30cp-ranba-c1/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.99,
      "nome": "Lamotrigina 25mg 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/gn-lamotrigina-25mg-30cp-ranba-c1/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 4.79,
      "nome": "Lamotrigina 100mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/lamotrigina-100mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.59,
      "nome": "Lamotrigina 50mg Genérico Althaia 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/lamotrigina-50mg-30-comprimidos---c1-g-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.99,
      "nome": "Lamotrigina 25mg Biolab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/lamotrigina-25mg-30com--c1--g--biolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.49,
      "nome": "Lamotrigina 25mg 30 Comprimidos Biolab Generico C1",
      "url": "https://www.panvel.com/panvel/lamotrigina-25mg-30-comprimidos-biolab-generico-c1/p-106005",
      "disponivel": true
    }
  },
  "med-00484": {
    "paguemenos": {
      "preco": 31.99,
      "nome": "Lansoprazol 30mg 28 Cápsulas de Liberação Retardada Genérico EMS",
      "url": "https://www.paguemenos.com.br/lansoprazol-30mg-28-capsulas-gel-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 31.99,
      "nome": "Lansoprazol 30mg 28 Cápsulas de Liberação Retardada Genérico EMS",
      "url": "https://www.extrafarma.com.br/lansoprazol-30mg-28-capsulas-gel-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.13,
      "nome": "Lansoprazol 30mg Genérico Medley 28 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/lansoprazol-30mg-generico-medley-28-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 41.35,
      "nome": "Lansoprazol 30mg Genérico EMS  28 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/lansoprazol-30mg-generico-ems-28-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 37.99,
      "nome": "Lansoprazol Germed 30mg 28 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/lansoprazol-germed-30mg-28-capsulas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 57.99,
      "nome": "Lansoprazol 30mg 28 Cápsulas Ems Genérico C",
      "url": "https://www.panvel.com/panvel/lansoprazol-30mg-28-capsulas-ems-generico-c/p-882200",
      "disponivel": true
    }
  },
  "med-00485": {
    "paguemenos": {
      "preco": 91.49,
      "nome": "Latanoprosta 50mcg/Ml Solução Oftalmológica 2,5ml Genérico Geolab",
      "url": "https://www.paguemenos.com.br/latanoprosta-50mcg-ml-solucao-oftalmologica-2-5ml-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 91.49,
      "nome": "Latanoprosta 50mcg/Ml Solução Oftalmológica 2,5ml Genérico Geolab",
      "url": "https://www.extrafarma.com.br/latanoprosta-50mcg-ml-solucao-oftalmologica-2-5ml-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 86.96,
      "nome": "Volata Latanoprosta 50mcg/ml 2,5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/volata-latanoprosta-50mcg-ml-2-5ml-solucao-oftalmica/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 80.95,
      "nome": "Latanoprosta 50mcg/ml + Timolol 5mg/ml Genérico Geolab 2,5ml Solução Oftálmica",
      "url": "https://www.drogariaspacheco.com.br/latanoprosta--timolol-solucao-oftalmica-25ml-g-geolab/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 75.81,
      "nome": "Latanoprosta GEOLAB Genérico Solução Oftalmica 50mcg/ml  2,5",
      "url": "https://www.drogariavenancio.com.br/latanoprosta-geolab-generico-solucao-oftalmica-50mcg-ml--25/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 81,
      "nome": "Volata 50mcg/ml Solução Oftálmica 2,5ml",
      "url": "https://www.panvel.com/panvel/volata-50mcg-ml-solucao-oftalmica-25ml/p-86598",
      "disponivel": true
    }
  },
  "med-00530": {
    "paguemenos": {
      "preco": 8.39,
      "nome": "Maleato de Timolol 5mg/ml Solução Oftálmica 5ml Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/maleato-de-timolol-0-5porcento-solucao-oftalmico-5ml-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.39,
      "nome": "Maleato de Timolol 5mg/ml Solução Oftálmica 5ml Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/maleato-de-timolol-0-5porcento-solucao-oftalmico-5ml-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.63,
      "nome": "Maleato De Timolol 0,5% Genérico Germed 5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/maleato-de-timolol-0-5-generico-germed-5ml-solucao-oftalmica/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 13.99,
      "nome": "Maleato de Timolol 0,5% Genérico Neo Química 5ml",
      "url": "https://www.drogariaspacheco.com.br/maleato-de-timolol-0-5-generico-hypermarcas-5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 105.9,
      "nome": "Xalanoft 50mcg/ml + 5mg/ml Gbio Solução Oftalmica 2,5ml",
      "url": "https://www.drogariavenancio.com.br/xalanoft-50mcg-ml---5mg-ml-gbio-solucao-oftalmica-25ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 17.2,
      "nome": "Glaucotrat 0,5% Maleato De Timolol 0,5mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/glaucotrat-05-maleato-de-timolol-05mg-ml-colirio-5ml/p-836510",
      "disponivel": true
    }
  },
  "med-00527": {
    "paguemenos": {
      "preco": 83.99,
      "nome": "Latanoprosta 0,05mg/ml + Maleato de Timolol 5mg/ml Solução Oftálmica 2,5ml Genérico Germed",
      "url": "https://www.paguemenos.com.br/gen-latanop-0-05mg-timol-5mg-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 83.99,
      "nome": "Latanoprosta 0,05mg/ml + Maleato de Timolol 5mg/ml Solução Oftálmica 2,5ml Genérico Germed",
      "url": "https://www.extrafarma.com.br/gen-latanop-0-05mg-timol-5mg-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 279.5,
      "nome": "Xalacom Latanoprosta 50mcg/ml + Maleato de Timolol 5mg/ml 2,5ml Gotas",
      "url": "https://www.drogariasaopaulo.com.br/xalacom-pfizer-25ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 276,
      "nome": "Xalacom Latanoprosta 50mcg/ml + Maleato de Timolol 5mg/ml 2,5ml Gotas",
      "url": "https://www.drogariaspacheco.com.br/xalacom-pfizer-25ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 73.76,
      "nome": "Latanoprosta + Maleato de Timolol Solução Oftálmica 50mcg/ml + 5mg/ml 2,5ml Geolab",
      "url": "https://www.drogariavenancio.com.br/latanoprosta---maleato-de-timolol-solucao-oftalmica-50mcg-ml---5mg-ml-25ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 290.41,
      "nome": "Xalacom Latanoprost 50mcg + Maleato De Timolol 5mg/ml Solução Oftálmica 2,5ml",
      "url": "https://www.panvel.com/panvel/xalacom-latanoprost-50mcg-maleato-de-timolol-5mg-ml-solucao-oftalmica-25ml/p-477550",
      "disponivel": true
    }
  },
  "med-00486": {
    "paguemenos": {
      "preco": 267.99,
      "nome": "Leflun 20mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/leflun-20mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 267.99,
      "nome": "Leflun 20mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/leflun-20mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 279.7,
      "nome": "Leflun Leflunomida 20mg Cristalia 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/leflun-leflunomida-20mg-cristalia-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 294.05,
      "nome": "Leflun Leflunomida 20mg Cristalia 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/leflun-leflunomida-20mg-cristalia-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 647.69,
      "nome": "Arava 20mg Sanofi 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/arava-20mg-sanofi-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 276.33,
      "nome": "Leflun 20mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/leflun-20mg-30-comprimidos-revestidos/p-85414",
      "disponivel": true
    }
  },
  "med-00489": {
    "paguemenos": {
      "preco": 24.49,
      "nome": "Levetiracetam 250mg 30 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/levetiracetam-250mg-com-30-comprimidos-psicotropico-p-c1-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 24.49,
      "nome": "Levetiracetam 250mg 30 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/levetiracetam-250mg-com-30-comprimidos-psicotropico-p-c1-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 36.59,
      "nome": "Levetiracetam 250mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/levetiracetam-250mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 38.19,
      "nome": "Iludral Levetiracetam 250mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/iludral-250mg-zodiac-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 40.13,
      "nome": "Levetiracetam 250mg Ems 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/levetiracetam-250-mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 34.99,
      "nome": "Levetiracetam 250mg 30 Comprimido Revestido Ems Genéricos C1",
      "url": "https://www.panvel.com/panvel/levetiracetam-250mg-30-comprimido-revestido-ems-genericos-c1/p-93642",
      "disponivel": true
    }
  },
  "med-00491": {
    "paguemenos": {
      "preco": 46.99,
      "nome": "Prolopa BD 125mg 30 Comprimidos",
      "url": "https://www.paguemenos.com.br/prolopa-bd-125mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 46.99,
      "nome": "Prolopa BD 125mg 30 Comprimidos",
      "url": "https://www.extrafarma.com.br/prolopa-bd-125mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 56.05,
      "nome": "Ekson Levodopa 100mg + Cloridrato de Benserazida 25mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/ekson-100mg--25mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 44.87,
      "nome": "Prolopa BD Levodopa 100mg + Cloridrato de Benserazida 25mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/prolopa-bd-125mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 45.79,
      "nome": "Prolopa Bd 100mg + 25mg Roche 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/prolopa-bd-100mg---25mg-roche-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 54.9,
      "nome": "Ekson Levodopa 100mg + Cloridrato De Benserazida 25mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/ekson-levodopa-100mg-cloridrato-de-benserazida-25mg-30-comprimidos/p-115467",
      "disponivel": true
    }
  },
  "med-00492": {
    "paguemenos": {
      "preco": 42.29,
      "nome": "Antux 30mg/5ml Xarope 120ml",
      "url": "https://www.paguemenos.com.br/antux-xarope-120ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 42.29,
      "nome": "Antux 30mg/5ml Xarope 120ml",
      "url": "https://www.extrafarma.com.br/antux-xarope-120ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 46.81,
      "nome": "Percof Levodropropizina 6mg/ml 120ml Xarope",
      "url": "https://www.drogariasaopaulo.com.br/percof-xarope-eurofarma-120ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.88,
      "nome": "Percof Levodropropizina 6mg/ml 120ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/percof-xarope-eurofarma-120ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 40.69,
      "nome": "Percof Eurofarma 120ml Xarope",
      "url": "https://www.drogariavenancio.com.br/percof-eurofarma-120ml-xarope/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 45.51,
      "nome": "Antux Xarope Levodropropizina 6mg/ml Solução 120ml",
      "url": "https://www.panvel.com/panvel/antux-xarope-levodropropizina-6mg-ml-solucao-120ml/p-402185",
      "disponivel": true
    }
  },
  "med-00493": {
    "paguemenos": {
      "preco": 22.99,
      "nome": "Levofloxacino 500mg 7 Comprimidos Revestidos Genérico Geolab",
      "url": "https://www.paguemenos.com.br/levofloxacino-500mg-com-7-comprimidos-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 22.99,
      "nome": "Levofloxacino 500mg 7 Comprimidos Revestidos Genérico Geolab",
      "url": "https://www.extrafarma.com.br/levofloxacino-500mg-com-7-comprimidos-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 45.38,
      "nome": "Levofloxacino 500mg Genérico EMS 7 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/levofloxacino-500mg-ems-7-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.53,
      "nome": "Levofloxacino 500mg Genérico EMS 7 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/levofloxacino-500mg-ems-7-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 24.89,
      "nome": "Levofloxacino 500mg Cimed 7 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/levofloxacino-500mg-cimed-7-comprimidos-revestidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 28.99,
      "nome": "Levofloxacino 500mg 7 Comprimidos Revestidos Cimed Generico",
      "url": "https://www.panvel.com/panvel/levofloxacino-500mg-7-comprimidos-revestidos-cimed-generico/p-118347",
      "disponivel": true
    }
  },
  "med-00494": {
    "paguemenos": {
      "preco": 24.29,
      "nome": "Levofloxacino 500mg Com 7 Comprimidos Genérico Prati Donaduzzi +",
      "url": "https://www.paguemenos.com.br/levofloxacino-500mg-com-7-comprimidos-generico-prati-donaduzzi-mais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 24.29,
      "nome": "Levofloxacino 500mg Com 7 Comprimidos Genérico Prati Donaduzzi +",
      "url": "https://www.extrafarma.com.br/levofloxacino-500mg-com-7-comprimidos-generico-prati-donaduzzi-mais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 24.99,
      "nome": "Levoxin Levofloxacino 250mg 3 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/levoxin-250mg-apsen-3-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.81,
      "nome": "Levofloxacino Hemi-Hidratado 500mg Cellera 7 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/levofloxacino-hemi-hidratado-500mg-cellera-7-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 39.99,
      "nome": "Levofloxacino Hemi-hidratado 750mg 5 Comprimidos Revestidos Eurofarma Genérico",
      "url": "https://www.drogariavenancio.com.br/levofloxacino-hemi-hidratado-750mg-5-comprimidos-revestidos-eurofarma-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 44.9,
      "nome": "Levoxin Levofloxacino 500mg 7 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/levoxin-levofloxacino-500mg-7-comprimidos-revestidos/p-475890",
      "disponivel": true
    }
  },
  "med-00495": {
    "paguemenos": {
      "preco": 73.49,
      "nome": "Tavok 750mg 5 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/tavok-750mg-com-5-comprimidos-psicotropicos-p-c1mais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 73.49,
      "nome": "Tavok 750mg 5 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/tavok-750mg-com-5-comprimidos-psicotropicos-p-c1mais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 45.38,
      "nome": "Tamiram Levofloxacino Hemi-Hidratado 500mg 7 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/tamiram-500mg-eurofarma-7-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 44.38,
      "nome": "Tamiram Levofloxacino Hemi-Hidratado 500mg 7 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/tamiram-500mg-eurofarma-7-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 57.49,
      "nome": "Tamiram 500mg Com 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/tamiram-500mg-com-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 45.76,
      "nome": "Tamiram Levofloxacino 500mg 7 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/tamiram-levofloxacino-500mg-7-comprimidos-revestidos/p-479880",
      "disponivel": true
    }
  },
  "med-00496": {
    "paguemenos": {
      "preco": 144.99,
      "nome": "Omize 15mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/omize-15mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 144.99,
      "nome": "Omize 15mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/omize-15mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 144.99,
      "nome": "Folavive Levomefolato de Cálcio 15mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/folavive-levomefolato-de-calcio-15mg-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 152.59,
      "nome": "Folavive Levomefolato de Cálcio 15mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/folavive-levomefolato-de-calcio-15mg-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 164.89,
      "nome": "Folavive 15mg 30 comprimidos revestidos",
      "url": "https://www.drogariavenancio.com.br/folavive-15mg-30comp/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 159.07,
      "nome": "Folavive Levomefolato De Cálcio 15mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/folavive-levomefolato-de-calcio-15mg-30-comprimidos-revestidos/p-85864",
      "disponivel": true
    }
  },
  "med-00499": {
    "paguemenos": {
      "preco": 7.49,
      "nome": "Levotiroxina Sódica 100mcg 30 Comprimidos Genérico Merck",
      "url": "https://www.paguemenos.com.br/levotiroxina-sodica-100mg-com-30-comprimidos-generico-merck/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.49,
      "nome": "Levotiroxina Sódica 100mcg 30 Comprimidos Genérico Merck",
      "url": "https://www.extrafarma.com.br/levotiroxina-sodica-100mg-com-30-comprimidos-generico-merck/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 12.24,
      "nome": "Levoid Levotiroxina Sódica 38mcg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/levoid-38mcg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.29,
      "nome": "Levoid Levotiroxina Sódica 38mcg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/levoid-38mcg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.75,
      "nome": "Levotiroxina Sódica 100mcg Merck 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/levotiroxina-sodica-100-mcg-merck-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 3.91,
      "nome": "Puran T4 Levotiroxina Sódica 12,5mcg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/puran-t4-levotiroxina-sodica-125mcg-30-comprimidos/p-101160",
      "disponivel": true
    }
  },
  "med-00501": {
    "paguemenos": {
      "preco": 82.99,
      "nome": "Meciclin 150mg 16 Cápsulas Duras",
      "url": "https://www.paguemenos.com.br/meciclin-150mg-com-16-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 82.99,
      "nome": "Meciclin 150mg 16 Cápsulas Duras",
      "url": "https://www.extrafarma.com.br/meciclin-150mg-com-16-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 84.99,
      "nome": "Meciclin Limeciclina 150mg 16 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/meciclin-150mg-16-capsulas-duras-natures-plus/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 79.17,
      "nome": "Meciclin Limeciclina 150mg 16 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/meciclin-150mg-16-capsulas-duras-natures-plus/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 80.79,
      "nome": "Meciclin 150mg 16 Capsulas",
      "url": "https://www.drogariavenancio.com.br/meciclin-150mg-16-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 84.99,
      "nome": "Meciclin Limeciclina 150mg 16 Cápsulas",
      "url": "https://www.panvel.com/panvel/meciclin-limeciclina-150mg-16-capsulas/p-882580",
      "disponivel": true
    }
  },
  "med-00502": {
    "paguemenos": {
      "preco": 101.99,
      "nome": "Linagliptina 5mg 30 Comprimidos Revestidos Genérico Neo Quimica",
      "url": "https://www.paguemenos.com.br/linagliptina-5mg-30-comprimidos-revestidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 101.99,
      "nome": "Linagliptina 5mg 30 Comprimidos Revestidos Genérico Neo Quimica",
      "url": "https://www.extrafarma.com.br/linagliptina-5mg-30-comprimidos-revestidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 104.36,
      "nome": "Linadib Linagliptina 5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/linadib-5mg-ems-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 100.17,
      "nome": "Glunac Linagliptina 5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/glunac-5mg-germed-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 102.21,
      "nome": "Glunac 5mg Germed 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/glunac-5mg-30com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 97.99,
      "nome": "Linagliptina 5mg 30 Comprimidos Revestidos Brainfarma Genérico",
      "url": "https://www.panvel.com/panvel/linagliptina-5mg-30-comprimidos-revestidos-brainfarma-generico/p-87655",
      "disponivel": true
    }
  },
  "med-00227": {
    "paguemenos": {
      "preco": 134.99,
      "nome": "Glink MET 2,5mg + 1000mg 60 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/glink-met-com-60-comprimidos-2-5mgmais1000mg/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 134.99,
      "nome": "Glink MET 2,5mg + 1000mg 60 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/glink-met-com-60-comprimidos-2-5mgmais1000mg/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 134.16,
      "nome": "Glunac Duo Linagliptina 2,5mg + Cloridrato de Metformina 1000mg 60 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/glunac-duo-2-5mg-1000mg-brace-pharma-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 112.98,
      "nome": "Glunac Duo Linagliptina 2,5mg + Cloridrato de Metformina 1000mg 60 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/glunac-duo-2-5mg-1000mg-brace-pharma-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 115.29,
      "nome": "Glunac Duo Linagliptina 2,5 +1000 Mg 60 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/glunac-duo-1000-25-mg-60com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 115.29,
      "nome": "Glunac Duo Linagliptina 850mg + Cloridrato De Metformina 2,5mg 60 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/glunac-duo-linagliptina-850mg-cloridrato-de-metformina-25mg-60-comprimidos-revestidos/p-92829",
      "disponivel": true
    }
  },
  "med-00504": {
    "paguemenos": {
      "preco": 345.39,
      "nome": "Lirux 6 Mg/Ml Solução Injetável 3 Ml + 1 Caneta",
      "url": "https://www.paguemenos.com.br/lirux-6-mg-ml-solucao-injetavel-3-ml-mais-1-caneta/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 345.39,
      "nome": "Lirux 6 Mg/Ml Solução Injetável 3 Ml + 1 Caneta",
      "url": "https://www.extrafarma.com.br/lirux-6-mg-ml-solucao-injetavel-3-ml-mais-1-caneta/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 354.2,
      "nome": "Olire Liraglutida 6mg 1 Caneta com 3ml Solução Injetável",
      "url": "https://www.drogariasaopaulo.com.br/olire-6mg-ems-1-caneta-3ml-solucao-injetavel/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 354.2,
      "nome": "Lirux Liraglutida 6mg 1 Caneta com 3ml Solução Injetável",
      "url": "https://www.drogariaspacheco.com.br/lirux-6mg-ems-1-caneta-3ml-solucao-injetavel/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 920.89,
      "nome": "Olire Liraglutida 6Mg/Ml 9Ml Solução Injetável Com 3 Canetas Aplicadoras",
      "url": "https://www.drogariavenancio.com.br/olire-6mgml-ems-solucao-injetavel-3-canetas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 349.93,
      "nome": "Olire 6mg/ml Liraglutida Solução Injetável Subcutánea 3ml 1 Caneta",
      "url": "https://www.panvel.com/panvel/olire-6mg-ml-liraglutida-solucao-injetavel-subcutanea-3ml-1-caneta/p-89106",
      "disponivel": true
    }
  },
  "med-00505": {
    "paguemenos": {
      "preco": 74.49,
      "nome": "Broncho-Vaxom 3,5mg Pediátrico 10 Cápsulas Duras",
      "url": "https://www.paguemenos.com.br/broncho-vaxom-3-5mg-com-10-capsulas-nv/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 74.49,
      "nome": "Broncho-Vaxom 3,5mg Pediátrico 10 Cápsulas Duras",
      "url": "https://www.extrafarma.com.br/broncho-vaxom-3-5mg-com-10-capsulas-nv/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 62.99,
      "nome": "Paxoral Lisado Bacteriano 3,5mg 10 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/paxoral-3--5mg-farmasa-10-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 55.79,
      "nome": "Paxoral 3,5mg Mantecorp Farmasa 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/paxoral-3-5mg-10-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 69.19,
      "nome": "Broncho Vaxom 3,5mg Chiese 10 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/broncho-vaxom-35mg-chiese-10-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 111.51,
      "nome": "Paxoral Lisado Bacteriano 7mg 10 Cápsulas",
      "url": "https://www.panvel.com/panvel/paxoral-lisado-bacteriano-7mg-10-capsulas/p-926820",
      "disponivel": true
    }
  },
  "med-00506": {
    "paguemenos": {
      "preco": 33.59,
      "nome": "Algilive 160mg 10 Cápsulas Duras de Liberação Prolongada",
      "url": "https://www.paguemenos.com.br/algilive-160mg-10-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 33.59,
      "nome": "Algilive 160mg 10 Cápsulas Duras de Liberação Prolongada",
      "url": "https://www.extrafarma.com.br/algilive-160mg-10-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 40.23,
      "nome": "Artrosil Lisinato De Cetoprofeno 160mg 10 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/artrosil-160mg-ache-10-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 31.35,
      "nome": "Artrosil Lisinato De Cetoprofeno 160mg 10 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/artrosil-160mg-ache-10-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 31.19,
      "nome": "Algilive 160mg Biosintética 10 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/algilive-160mg-biosintetica-10-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 33.73,
      "nome": "Algilive Cetoprofeno 160mg 10 Cápsulas",
      "url": "https://www.panvel.com/panvel/algilive-cetoprofeno-160mg-10-capsulas/p-90178",
      "disponivel": true
    }
  },
  "med-00508": {
    "paguemenos": {
      "preco": 6.69,
      "nome": "Loratadina 10mg 12 Comprimidos Genérico Vitamedic",
      "url": "https://www.paguemenos.com.br/loratadina-10mg-com-c-1x12/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.69,
      "nome": "Loratadina 10mg 12 Comprimidos Genérico Vitamedic",
      "url": "https://www.extrafarma.com.br/loratadina-10mg-com-c-1x12/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 19.79,
      "nome": "Loratadina 1mg + Sulfato de Pseudoefedrina 12mg Genérico Neo Química 60ml",
      "url": "https://www.drogariasaopaulo.com.br/loratadina-1mg-sulfato-de-pseudoefedrina-12mg-generico-neo-quimica-60ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 24.99,
      "nome": "Loratadina 1mg/ml + Sulfato Pseudoefedrina 12mg/ml Genérico EMS 60ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/loratadina-sulfato-pseudoefedrina-xarope-1mg-ml-generico-ems-60ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 3.99,
      "nome": "Loratadina 10mg Cimed 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/loratadina-10mg-12cpr-g-cimed/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 6.99,
      "nome": "Neo Loratadin 10mg 12 Comprimidos",
      "url": "https://www.panvel.com/panvel/neo-loratadin-10mg-12-comprimidos/p-848340",
      "disponivel": true
    }
  },
  "med-00510": {
    "paguemenos": {
      "preco": 5.69,
      "nome": "Lorazepam 2mg Ccom 20 Comprimidos Generico Germed P/B1",
      "url": "https://www.paguemenos.com.br/lorazepam-2mg-ccom-20-comprimidos-generico-germed-p-b1/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 5.69,
      "nome": "Lorazepam 2mg Ccom 20 Comprimidos Generico Germed P/B1",
      "url": "https://www.extrafarma.com.br/lorazepam-2mg-ccom-20-comprimidos-generico-germed-p-b1/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 5.45,
      "nome": "Lorazepam 2mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/lorazepam-2mg-generico-ems-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 4.99,
      "nome": "Lorazepam 2mg Genérico Teuto 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/lorazepam-2mg-generico-teuto-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.7,
      "nome": "Lorazepam 2mg Ems 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/lorazepam-2mg-ems-20-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 14.49,
      "nome": "Lorazepam 2mg 20 Comprimidos Ems Genérico B1",
      "url": "https://www.panvel.com/panvel/lorazepam-2mg-20-comprimidos-ems-generico-b1/p-868850",
      "disponivel": true
    }
  },
  "med-00512": {
    "paguemenos": {
      "preco": 23.29,
      "nome": "Losartana Potássica 50mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/losartana-potassica-maishidroclorotiazida-50mais12-5mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.29,
      "nome": "Losartana Potássica 50mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/losartana-potassica-maishidroclorotiazida-50mais12-5mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 54.75,
      "nome": "Hyzaar Losartana Potássica 50mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/hyzaar-50-122mg-merck-sharp-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 44.97,
      "nome": "Zart H Losartana Potássica 50mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/zart-h-50mg-12-5mg-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.41,
      "nome": "Losartana Potássica + Hidroclorotiazida 50mg + 12,5mg Teuto 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/losartana-hidroclorotiazida-50-125mg-30com--g--teuto/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.99,
      "nome": "Losartana Potássica + Hidroclorotiazida 50mg +12,5mg 30 Comprimidos Revestidos Sandoz Generico",
      "url": "https://www.panvel.com/panvel/losartana-potassica-hidroclorotiazida-50mg-125mg-30-comprimidos-revestidos-sandoz-generico/p-119987",
      "disponivel": true
    }
  },
  "med-00513": {
    "paguemenos": {
      "preco": 40.79,
      "nome": "Loxonin 60mg 15 Comprimidos",
      "url": "https://www.paguemenos.com.br/loxonin-60mg-com-15-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 40.79,
      "nome": "Loxonin 60mg 15 Comprimidos",
      "url": "https://www.extrafarma.com.br/loxonin-60mg-com-15-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 43.29,
      "nome": "Loxonin Loxoprofeno Sódico Di-Hidratado 60mg 15 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/loxonin-60mg-sankyo-15-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 43.29,
      "nome": "Loxonin Loxoprofeno Sódico Di-Hidratado 60mg 15 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/loxonin-60mg-sankyo-15-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 40.79,
      "nome": "Loxonin 60mg Daiichi-Sankyo 15 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/loxonin-60mg-sankyo-15-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 40.18,
      "nome": "Loxonin Loxoprofeno 60mg 15 Comprimidos",
      "url": "https://www.panvel.com/panvel/loxonin-loxoprofeno-60mg-15-comprimidos/p-475240",
      "disponivel": true
    }
  },
  "med-00521": {
    "paguemenos": {
      "preco": 4.39,
      "nome": "Maleato de Enalapril 10mg 30 Comprimidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/maleato-de-enalapril-10mg-com-30-comprimidos-generco-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 4.39,
      "nome": "Maleato de Enalapril 10mg 30 Comprimidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/maleato-de-enalapril-10mg-com-30-comprimidos-generco-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 4.7,
      "nome": "Maleato De Enalapril 10mg Genérico Biolab 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/maleato-de-enalapril-10mg-generico-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 7.25,
      "nome": "Maleato De Enalapril 20mg Genérico Germed 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/maleato-de-enalapril-20mg-generico-germed-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 5.29,
      "nome": "Maleato De Enalapril 10mg Ems 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/maleato-de-enalapril-10mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 5.49,
      "nome": "Maleato De Enalapril 10mg 30 Comprimidos Biolab Genérico",
      "url": "https://www.panvel.com/panvel/maleato-de-enalapril-10mg-30-comprimidos-biolab-generico/p-107731",
      "disponivel": true
    }
  },
  "med-00522": {
    "paguemenos": {
      "preco": 34.79,
      "nome": "Maleato de Enalapril 10mg + Hidroclorotiazida 25mg 30 Comprimidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/maleato-de-enalapril-mais-hidroclotiazida-10mg-mais-25mg-com-30-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 34.79,
      "nome": "Maleato de Enalapril 10mg + Hidroclorotiazida 25mg 30 Comprimidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/maleato-de-enalapril-mais-hidroclotiazida-10mg-mais-25mg-com-30-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 62.99,
      "nome": "Vasopril Plus Maleato de Enalapril 10mg + Hidroclorotiazida 25mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/vasopril-plus-10-25-0mg-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 35.69,
      "nome": "Malena HCT Maleato de Enalapril 20mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/malena-hct-20mg125mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 90.69,
      "nome": "Vasopril Plus 20mg + 12,5mg Biolab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/vasopril-plus-20mg---125mg-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 60.12,
      "nome": "Vasopril Plus Maleato De Enalapril 10mg + Hidroclorotiazida 25mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/vasopril-plus-maleato-de-enalapril-10mg-hidroclorotiazida-25mg-30-comprimidos/p-398527",
      "disponivel": true
    }
  },
  "med-00523": {
    "paguemenos": {
      "preco": 80.22,
      "nome": "Fluvique 50mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/fluvique-50mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 80.22,
      "nome": "Fluvique 50mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/fluvique-50mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 84.99,
      "nome": "Maleato de Fluvoxamina 50mg Genérico Althaia   30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/maleato-de-fluvoxamina-50mg-generico-althaia-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 71.82,
      "nome": "Semtri Maleato de Fluvoxamina 50mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/semtri-50mg-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 73.29,
      "nome": "Semtri 50mg Biolab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/semtri-50mg-biolab-30com--c1-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 71.99,
      "nome": "Semtri Maleato De Fluvoxamina 50mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/semtri-maleato-de-fluvoxamina-50mg-30-comprimidos-revestidos/p-92925",
      "disponivel": true
    }
  },
  "med-00525": {
    "paguemenos": {
      "preco": 47.79,
      "nome": "Maleato de Midazolam 15mg 30 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/maleato-de-midazolam-15mg-30-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 47.79,
      "nome": "Maleato de Midazolam 15mg 30 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/maleato-de-midazolam-15mg-30-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.1,
      "nome": "Maleato de Midazolam 7,5mg Genérico Medley 20 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/maleato-de-midazolam-7-5mg-generico-medley-20-comprimidos-revestidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 3.84,
      "nome": "Maleato de Midazolam 7,5mg Genérico Medley 20 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/maleato-de-midazolam-7-5mg-generico-medley-20-comprimidos-revestidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 49.23,
      "nome": "Maleato De Midazolam 15mg Medley Genérico 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/maleato-de-midazolam-15mg-30-comprimidos-revestidos-medley-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 77.41,
      "nome": "Dormonid Maleato De Midazolam 7,5mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/dormonid-maleato-de-midazolam-75mg-30-comprimidos/p-471750",
      "disponivel": true
    }
  },
  "med-00528": {
    "paguemenos": {
      "preco": 94.99,
      "nome": "Brixag 2mg/ml + 5mg/ml Solução Oftálmica Estéril 5ml",
      "url": "https://www.paguemenos.com.br/brixag-2mgmais5mg-solucao-oftalmica-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 94.99,
      "nome": "Brixag 2mg/ml + 5mg/ml Solução Oftálmica Estéril 5ml",
      "url": "https://www.extrafarma.com.br/brixag-2mgmais5mg-solucao-oftalmica-5ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 94.07,
      "nome": "Combtol Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml 5ml Solução Oftálmica Estéril",
      "url": "https://www.drogariasaopaulo.com.br/combtol-2mg-ml-5mg-ml-ache-5ml-gotas-solucao-oftalmica-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 92.31,
      "nome": "Combtol Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml 5ml Solução Oftálmica Estéril",
      "url": "https://www.drogariaspacheco.com.br/combtol-2mg-ml-5mg-ml-ache-5ml-gotas-solucao-oftalmica-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 94.19,
      "nome": "Combtol 2mg/ml + 5mg/ml Aché Uso Oftálmico 5ml",
      "url": "https://www.drogariavenancio.com.br/combtol-sol-oft-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 101.31,
      "nome": "Combtol Tartarato De Brimonidina 2mg/ml + Maleato De Timolol 5mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/combtol-tartarato-de-brimonidina-2mg-ml-maleato-de-timolol-5mg-ml-colirio-5ml/p-89708",
      "disponivel": true
    }
  },
  "med-00526": {
    "paguemenos": {
      "preco": 140.32,
      "nome": "Visan 0,3mg/Ml + 5mg/Ml Solução Oftálmica 5ml",
      "url": "https://www.paguemenos.com.br/visan-0-3mg-ml-mais-5mg-ml-solucao-oftalmica-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 140.32,
      "nome": "Visan 0,3mg/Ml + 5mg/Ml Solução Oftálmica 5ml",
      "url": "https://www.extrafarma.com.br/visan-0-3mg-ml-mais-5mg-ml-solucao-oftalmica-5ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 157.76,
      "nome": "Duoglau Bimatoprosta 0,3mg/ml + Maleato de Timolol 5mg/ml 3ml Colírio",
      "url": "https://www.drogariasaopaulo.com.br/duoglau-bimatoprosta-0-3mg-ml--maleato-de-timolol-5mg-ml-3ml-colirio-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 157.76,
      "nome": "Duoglau Bimatoprosta 0,3mg/ml + Maleato de Timolol 5mg/ml 3ml Colírio",
      "url": "https://www.drogariaspacheco.com.br/duoglau-bimatoprosta-0-3mg-ml--maleato-de-timolol-5mg-ml-3ml-colirio-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 117.99,
      "nome": "Glamigan Mt 0,3+5mg/ml Solução Oftálmica 3ml",
      "url": "https://www.drogariavenancio.com.br/glamigan-mt-03-5mg-ml-solucao-oftalmica-3ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 122.28,
      "nome": "Glamigan Mt Bimatoprosta 0,3mg/ml + Maleato De Timolol 5mg/ml Colírio 3ml",
      "url": "https://www.panvel.com/panvel/glamigan-mt-bimatoprosta-03mg-ml-maleato-de-timolol-5mg-ml-colirio-3ml/p-102532",
      "disponivel": true
    }
  },
  "med-00533": {
    "paguemenos": {
      "preco": 76.99,
      "nome": "Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml Solução Oftálmica 5ml Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/tartarato-de-brimonidina-mais-maleato-de-timolol-2mg-ml-nqmais-5mg-ml-solucao-oftalmica-com-5ml-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 76.99,
      "nome": "Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml Solução Oftálmica 5ml Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/tartarato-de-brimonidina-mais-maleato-de-timolol-2mg-ml-nqmais-5mg-ml-solucao-oftalmica-com-5ml-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 123.96,
      "nome": "Britens Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml 5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/britens-solucao-oftalmica-uniao-quimica-5ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 102.79,
      "nome": "Britens Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml 5ml Solução Oftálmica",
      "url": "https://www.drogariaspacheco.com.br/britens-solucao-oftalmica-uniao-quimica-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 128.73,
      "nome": "Britens Tartarato De Brimonidina 2mg/ml + Maleato De Timolol 5mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/britens-tartarato-de-brimonidina-2mg-ml-maleato-de-timolol-5mg-ml-colirio-5ml/p-820040",
      "disponivel": true
    }
  },
  "med-00697": {
    "paguemenos": {
      "preco": 35.59,
      "nome": "Tartarato de Brimonidina 1,5mg/ml Solução Oftálmica 5ml Genérico Geolab",
      "url": "https://www.paguemenos.com.br/tartarato-brimonidina-1-5mg-5ml-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 35.59,
      "nome": "Tartarato de Brimonidina 1,5mg/ml Solução Oftálmica 5ml Genérico Geolab",
      "url": "https://www.extrafarma.com.br/tartarato-brimonidina-1-5mg-5ml-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 25.81,
      "nome": "Alphabrin Tartarato de Brimonidina 1,0ml/mg 5ml",
      "url": "https://www.drogariasaopaulo.com.br/alphabrin-1-0ml-mg-geolab-5ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 24.88,
      "nome": "Alphabrin Tartarato de Brimonidina 1,0ml/mg 5ml",
      "url": "https://www.drogariaspacheco.com.br/alphabrin-1-0ml-mg-geolab-5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 36.87,
      "nome": "Tartarato De Brimonidina 2mg/ml Geolab Solução Oftálmica 5ml",
      "url": "https://www.drogariavenancio.com.br/tartarato-de-brimonidina-2mg-ml-geolab-solucao-oftalmica-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.02,
      "nome": "Alphabrin 1,0mg/ml 5ml Solucao Oftalmica",
      "url": "https://www.panvel.com/panvel/alphabrin-10mg-ml-5ml-solucao-oftalmica/p-100153",
      "disponivel": true
    }
  },
  "med-00529": {
    "paguemenos": {
      "preco": 37.99,
      "nome": "Maleato de Trimebutina 200mg 30 Cápsulas Moles Genérico Althaia",
      "url": "https://www.paguemenos.com.br/maleato-de-trimebutina-200mg-com-30-capsulas-generico-althaia/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 37.99,
      "nome": "Maleato de Trimebutina 200mg 30 Cápsulas Moles Genérico Althaia",
      "url": "https://www.extrafarma.com.br/maleato-de-trimebutina-200mg-com-30-capsulas-generico-althaia/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 89.99,
      "nome": "Maleato de Trimebutina 200mg Genérico Legrand 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/maleato-de-trimebutina-200mg-generico-legrand-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 75.16,
      "nome": "Irritratil Maleato De Trimebutina 200mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/irritratil-200mg-ache-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 67.47,
      "nome": "Maleato De Trimebutina 200mg Eurofarma 30 Cápsulas Gelatinosas",
      "url": "https://www.drogariavenancio.com.br/maleato-de-trimebutina-200mg-eurofarma-30-capsulas-gelatinosas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 91.31,
      "nome": "Trimeb Maleato De Trimebutina 200mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/trimeb-maleato-de-trimebutina-200mg-30-capsulas/p-671100",
      "disponivel": true
    }
  },
  "med-00534": {
    "paguemenos": {
      "preco": 59,
      "nome": "Espinheira Santa 500mg 60 CápsulasCombate às Dores de Estômago",
      "url": "https://www.paguemenos.com.br/espinheira-santa-500mg-60-capsulascombate-as-dores-de-estomago-16983q42c1512k34/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 59,
      "nome": "Espinheira Santa 500mg 60 CápsulasCombate às Dores de Estômago",
      "url": "https://www.extrafarma.com.br/espinheira-santa-500mg-60-capsulascombate-as-dores-de-estomago-16983q42c1512k34/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 59,
      "nome": "Espinheira Santa 500mg 60 CápsulasCombate às Dores de Estômago",
      "url": "https://www.drogariasaopaulo.com.br/espinheira-santa-500mg-60-capsulascombate-as-dores-de-estomago-17670r3270mv4375/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 59,
      "nome": "Espinheira Santa 500mg 60 CápsulasCombate às Dores de Estômago",
      "url": "https://www.drogariaspacheco.com.br/espinheira-santa-500mg-60-capsulascombate-as-dores-de-estomago-e176703274197yi6/p",
      "disponivel": true
    }
  },
  "med-00535": {
    "paguemenos": {
      "preco": 5.39,
      "nome": "Helmilab 20mg/ml Sabor Framboesa Sem Açúcar Suspensão Oral 30ml + Copo Medidor",
      "url": "https://www.paguemenos.com.br/helmilab-sem-acucar-20mg-frasco-com-30ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.39,
      "nome": "Helmilab 20mg/ml Sabor Framboesa Sem Açúcar Suspensão Oral 30ml + Copo Medidor",
      "url": "https://www.extrafarma.com.br/helmilab-sem-acucar-20mg-frasco-com-30ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 4.96,
      "nome": "Mebendazol 100mg Genérico Cimed 6 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/mebendazol-100mg-generico-cimed-6-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 5.51,
      "nome": "Mebendazol 100mg Genérico Cimed 6 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/mebendazol-100mg-generico-cimed-6-comprimidos/p",
      "disponivel": false
    }
  },
  "med-00537": {
    "paguemenos": {
      "preco": 12.69,
      "nome": "Meloxicam 7,5mg 10 Comprimidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/meloxicam-7-5mg-com-10-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.69,
      "nome": "Meloxicam 7,5mg 10 Comprimidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/meloxicam-7-5mg-com-10-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 14.29,
      "nome": "Meloxicam 7,5mg Genérico Medley  10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/meloxicam-75mg-generico-medley-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 18.69,
      "nome": "Meloxicam 15mg Genérico Eurofarma 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/meloxicam-15mg-eurofarma-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.49,
      "nome": "Meloxicam 7,5mg Pharlab 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/meloxicam-75mg-10com--g--pharlab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 8.49,
      "nome": "Meloxicam 7,5mg 10 Comprimidos Medley Genérico",
      "url": "https://www.panvel.com/panvel/meloxicam-75mg-10-comprimidos-medley-generico/p-839410",
      "disponivel": true
    }
  },
  "med-00538": {
    "paguemenos": {
      "preco": 1093.99,
      "nome": "Menopur Pó 75 UI 5 Frascos Ampola",
      "url": "https://www.paguemenos.com.br/menopur-po-75ui-amp-5maisdil/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1093.99,
      "nome": "Menopur Pó 75 UI 5 Frascos Ampola",
      "url": "https://www.extrafarma.com.br/menopur-po-75ui-amp-5maisdil/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 186.67,
      "nome": "Merional HG 75UI Besins Pó Liofilo Injetável + Solução Diluente 1ml",
      "url": "https://www.drogariavenancio.com.br/merional-hg-75ui-1fa-dil-amp-1ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 1151.34,
      "nome": "Menopur Fsh + Lh 75ui 5 Ampolas 1ml",
      "url": "https://www.panvel.com/panvel/menopur-fsh-lh-75ui-5-ampolas-1ml/p-949390",
      "disponivel": true
    }
  },
  "med-00540": {
    "paguemenos": {
      "preco": 88.99,
      "nome": "Mesalazina 800mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/mesalazina-800mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 88.99,
      "nome": "Mesalazina 800mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/mesalazina-800mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 79.37,
      "nome": "Mesacol Mesalazina 250mg 15 Supositórios",
      "url": "https://www.drogariasaopaulo.com.br/mesacol-250mg-takeda-15-supositorios/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 70.75,
      "nome": "Mesacol Mesalazina 250mg 15 Supositórios",
      "url": "https://www.drogariaspacheco.com.br/mesacol-250mg-takeda-15-supositorios/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 76.89,
      "nome": "Mesalazina 800mg 30 Comprimidos Germed Pharma",
      "url": "https://www.drogariavenancio.com.br/mesalazina-800mg-germed-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 81.34,
      "nome": "Mesacol Mesalazina 250mg 15 Supositórios",
      "url": "https://www.panvel.com/panvel/mesacol-mesalazina-250mg-15-supositorios/p-116445",
      "disponivel": true
    }
  },
  "med-00549": {
    "paguemenos": {
      "preco": 78.99,
      "nome": "Mesalazina 400mg 30 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/mesalazina-400mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 78.99,
      "nome": "Mesalazina 400mg 30 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/mesalazina-400mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 542.94,
      "nome": "Pentasa Mesalazina 500mg 50 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/pentasa-500mg-50-comprimidos-com-liberacao-prolongada-ferring/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 494.76,
      "nome": "Pentasa Mesalazina 500mg 50 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/pentasa-500mg-50-comprimidos-com-liberacao-prolongada-ferring/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 319.99,
      "nome": "Pentasa Enema 100ml 7 Unidades",
      "url": "https://www.drogariavenancio.com.br/pentasa-enema-100ml-7-unidades/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 345.51,
      "nome": "Pentasa Mesalazina 1g 7 Enemas",
      "url": "https://www.panvel.com/panvel/pentasa-mesalazina-1g-7-enemas/p-860510",
      "disponivel": true
    }
  },
  "med-00542": {
    "paguemenos": {
      "preco": 17.69,
      "nome": "Cefaliv 1mg + 100mg + 350mg 12 Comprimidos",
      "url": "https://www.paguemenos.com.br/cefaliv-com-12-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.69,
      "nome": "Cefaliv 1mg + 100mg + 350mg 12 Comprimidos",
      "url": "https://www.extrafarma.com.br/cefaliv-com-12-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 18.32,
      "nome": "Cefaliv Cafeína 100mg + Dipirona 350mg + Mesilato de Di-hidroergotamina 1mg 12 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/cefaliv-ache-12-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 18.32,
      "nome": "Cefaliv Cafeína 100mg + Dipirona 350mg + Mesilato de Di-hidroergotamina 1mg 12 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/cefaliv-ache-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 18.69,
      "nome": "Cefaliv Aché 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/cefaliv-ache-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 18.81,
      "nome": "Cefaliv Mesilato Di-hidroergotamina 1mg + Dipirona Monoidratada 350mg + Cafeína 100mg 12 Comprimidos",
      "url": "https://www.panvel.com/panvel/cefaliv-mesilato-di-hidroergotamina-1mg-dipirona-monoidratada-350mg-cafeina-100mg-12-comprimidos/p-318507",
      "disponivel": true
    }
  },
  "med-00541": {
    "paguemenos": {
      "preco": 20.29,
      "nome": "Migraliv 1mg + 100mg + 350mg 12 Comprimidos",
      "url": "https://www.paguemenos.com.br/migraliv-com-12-comprimidos-novo/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.29,
      "nome": "Migraliv 1mg + 100mg + 350mg 12 Comprimidos",
      "url": "https://www.extrafarma.com.br/migraliv-com-12-comprimidos-novo/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 15.49,
      "nome": "Xaqueliv Cafeína 100mg + Dipirona Monoidrata 350mg + Mesilato de Di-Hidroergotamina 1mg 12 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/xaqueliv-cafeina-100mg-dipirona-monoidrata-350mg-mesilato-de-di-hidroergotamina-1mg-12-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 15.49,
      "nome": "Xaqueliv Cafeína 100mg + Dipirona Monoidrata 350mg + Mesilato de Di-Hidroergotamina 1mg 12 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/xaqueliv-cafeina-100mg-dipirona-monoidrata-350mg-mesilato-de-di-hidroergotamina-1mg-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.49,
      "nome": "Migraliv 1mg + 100mg + 350mg Ems 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/migraliv-12cpr/p",
      "disponivel": true
    }
  },
  "med-00543": {
    "paguemenos": {
      "preco": 6.59,
      "nome": "Mesilato de Doxazosina 2mg 30 Comprimidos Genérico Geolab",
      "url": "https://www.paguemenos.com.br/mesilato-de-doxazosina-2mg-com-30-comprimidos-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.59,
      "nome": "Mesilato de Doxazosina 2mg 30 Comprimidos Genérico Geolab",
      "url": "https://www.extrafarma.com.br/mesilato-de-doxazosina-2mg-com-30-comprimidos-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 7.99,
      "nome": "Doxuran Mesilato De Doxazosina 2mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/doxuran-2mg-sandoz-do-brasil-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 7.99,
      "nome": "Doxuran Mesilato De Doxazosina 2mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/doxuran-2mg-sandoz-do-brasil-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 13.99,
      "nome": "Mesilato de Doxazosina 2mg União Química 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/mesilato-de-doxazosina-2mg-uniao-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 21.09,
      "nome": "Doxuran Mesilato Doxazosina 2mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/doxuran-mesilato-doxazosina-2mg-30-comprimidos/p-119988",
      "disponivel": true
    }
  },
  "med-00544": {
    "paguemenos": {
      "preco": 131.99,
      "nome": "Hominus 2mg+5mg 30 Cápsulas Duras",
      "url": "https://www.paguemenos.com.br/hominus-2mgmais5mg-com-30-capsulas-novo/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 131.99,
      "nome": "Hominus 2mg+5mg 30 Cápsulas Duras",
      "url": "https://www.extrafarma.com.br/hominus-2mgmais5mg-com-30-capsulas-novo/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 149.92,
      "nome": "Prós HP Mesilato de Doxazosina 2mg + Finasterida 5mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/pros-hp-supera-rx-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 134.25,
      "nome": "Duomo HP Finasterida 5mg + Mesilato de Doxazosina 2mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/duomo-hp-2mg-5mg-eurofarma-30-capsulas-gelatinosas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 136.99,
      "nome": "Duomo Hp 2mg + 5mg Eurofarma 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/duomo-hp-2mg---5mg-eurofarma-30-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 157.05,
      "nome": "Duomo Hp Mesilato De Doxazosina 2mg + Finasterida 5mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/duomo-hp-mesilato-de-doxazosina-2mg-finasterida-5mg-30-capsulas/p-669360",
      "disponivel": true
    }
  },
  "med-00545": {
    "paguemenos": {
      "preco": 190.99,
      "nome": "Pradaxa 110mg 30 Cápsulas",
      "url": "https://www.paguemenos.com.br/pradaxa-110mg-com-30-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 190.99,
      "nome": "Pradaxa 110mg 30 Cápsulas",
      "url": "https://www.extrafarma.com.br/pradaxa-110mg-com-30-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 46.47,
      "nome": "Pradaxa 75mg Boehringer 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/pradaxa-75mg-boehringer-10-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 44.74,
      "nome": "Pradaxa 75mg Boehringer 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/pradaxa-75mg-boehringer-10-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 182.99,
      "nome": "Pradaxa 75mg Boehringer 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/pradaxa-75mg-boehringer-30-capsulas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 211,
      "nome": "Pradaxa Etexilato De Dabigratana 150mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/pradaxa-etexilato-de-dabigratana-150mg-30-capsulas/p-585450",
      "disponivel": true
    }
  },
  "med-00547": {
    "paguemenos": {
      "preco": 104.99,
      "nome": "Mesilato de Rasagilina 1mg 30 Comprimidos Genérico Zydus Nikkho",
      "url": "https://www.paguemenos.com.br/mesilato-de-rasagilina-1mg-30-comprimidos-zydus-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 104.99,
      "nome": "Mesilato de Rasagilina 1mg 30 Comprimidos Genérico Zydus Nikkho",
      "url": "https://www.extrafarma.com.br/mesilato-de-rasagilina-1mg-30-comprimidos-zydus-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 105.99,
      "nome": "Mesilato de Rasagilina 1mg Genérico Teva  30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/mesilato-de-rasagilina-1mg-generico-teva--30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 106.99,
      "nome": "Mesilato De Rasagilina 1mg Genérico Zydus 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/mesilato-de-rasagilina-1mg-generico-zydus-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 74.99,
      "nome": "Gilmov 1mg Aché 10 comprimidos",
      "url": "https://www.drogariavenancio.com.br/gilmov-1mg-10com--c1-/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 113.99,
      "nome": "Mesilato De Rasagilina 1mg 30 Comprimidos Teva Genérico C1",
      "url": "https://www.panvel.com/panvel/mesilato-de-rasagilina-1mg-30-comprimidos-teva-generico-c1/p-107032",
      "disponivel": true
    }
  },
  "med-00548": {
    "paguemenos": {
      "preco": 106.99,
      "nome": "Xadago 50mg 14 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/xadago-50mg-com-14-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 106.99,
      "nome": "Xadago 50mg 14 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/xadago-50mg-com-14-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 103.96,
      "nome": "Xadago Mesilato de Safinamida 50mg 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/xadago-50mg-zambon-14-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 105.92,
      "nome": "Xadago Mesilato de Safinamida 50mg 14 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/xadago-50mg-zambon-14-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 215.79,
      "nome": "Xadago 50mg Cartucho Com 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/xadago-50mg-cartucho-com-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 241.88,
      "nome": "Xadago Mesilato De Safinamida 50mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/xadago-mesilato-de-safinamida-50mg-30-comprimidos-revestidos/p-107288",
      "disponivel": true
    }
  },
  "med-00550": {
    "paguemenos": {
      "preco": 24.59,
      "nome": "Espasmo Flatol 80mg/ml + 2,5mg/ml Sabor Morango Emulsão Gotas 20ml",
      "url": "https://www.paguemenos.com.br/espasmo-flatol-gotas-20ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 24.59,
      "nome": "Espasmo Flatol 80mg/ml + 2,5mg/ml Sabor Morango Emulsão Gotas 20ml",
      "url": "https://www.extrafarma.com.br/espasmo-flatol-gotas-20ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 27.08,
      "nome": "Espasmo Dimetiliv 80mg/ml + 2,5mg/ml EMS 20ml Gotas",
      "url": "https://www.drogariasaopaulo.com.br/espasmo-dimetiliv-gotas-ems-20ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 29.38,
      "nome": "Espasmo Dimetiliv 80mg/ml + 2,5mg/ml EMS 20ml Gotas",
      "url": "https://www.drogariaspacheco.com.br/espasmo-dimetiliv-gotas-ems-20ml/p",
      "disponivel": false
    }
  },
  "med-00664": {
    "paguemenos": {
      "preco": 4.85,
      "nome": "Simeticona 125mg envelope Com 3 Comprimidos Genérico medley",
      "url": "https://www.paguemenos.com.br/simeticona-125mg-envelope-com-3-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 4.85,
      "nome": "Simeticona 125mg envelope Com 3 Comprimidos Genérico medley",
      "url": "https://www.extrafarma.com.br/simeticona-125mg-envelope-com-3-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 9.65,
      "nome": "Simeticona 80mg/ml + Metilbrometo Homotropina 2,5mg/ml Genérico Medley 20ml Gotas",
      "url": "https://www.drogariasaopaulo.com.br/simeticona-metilbrometo-homotropina-gotas-80-25mg-ml-generico-medley-20ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 9.84,
      "nome": "Simeticona 125mg Genérico Medley 20 Cápsulas Gelatinosas",
      "url": "https://www.drogariaspacheco.com.br/simeticona-125mg-generico-medley-20-capsulas-gelatinosas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 4.99,
      "nome": "Simeticona 125mg Cimed 10 Cápsulas Moles",
      "url": "https://www.drogariavenancio.com.br/simeticona-125mg-10-capsulas-mole/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 5.99,
      "nome": "Simeticona 125mg 15 Cápsulas Gelatinosas Lifar",
      "url": "https://www.panvel.com/panvel/simeticona-125mg-15-capsulas-gelatinosas-lifar/p-97724",
      "disponivel": true
    }
  },
  "med-00552": {
    "paguemenos": {
      "preco": 18.99,
      "nome": "Metildopa 250mg 30 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/metildopa-250mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.99,
      "nome": "Metildopa 250mg 30 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/metildopa-250mg-com-30-comprimidos-generico-prati-donaduzzi/p",
      "disponivel": true
    }
  },
  "med-00551": {
    "paguemenos": {
      "preco": 15.99,
      "nome": "Metildopa 250mg Comprimidos30 Genérico Bios",
      "url": "https://www.paguemenos.com.br/metildopa-250mg-comprimidos30-generico-bios/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 15.99,
      "nome": "Metildopa 250mg Comprimidos30 Genérico Bios",
      "url": "https://www.extrafarma.com.br/metildopa-250mg-comprimidos30-generico-bios/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 14.99,
      "nome": "Metildopa 250mg Genérico Biosintética  30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/metildopa-250mg-generico-biosinteti-30-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 16.01,
      "nome": "Metildopa 250mg Genérico Biosintética  30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/metildopa-250mg-generico-biosinteti-30-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 28.99,
      "nome": "Metildopa 250mg 30 Comprimidos Revestidos Prati Donaduzzi",
      "url": "https://www.drogariavenancio.com.br/metildopa-250mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 23.99,
      "nome": "Metildopa 250mg 30 Comprimidos Revestidos Prati Donaduzzi Generico",
      "url": "https://www.panvel.com/panvel/metildopa-250mg-30-comprimidos-revestidos-prati-donaduzzi-generico/p-106009",
      "disponivel": true
    }
  },
  "med-00554": {
    "paguemenos": {
      "preco": 31.29,
      "nome": "Metrexato 2,5mg 24 Comprimidos",
      "url": "https://www.paguemenos.com.br/metrexato-2-5mg-com-24-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 31.29,
      "nome": "Metrexato 2,5mg 24 Comprimidos",
      "url": "https://www.extrafarma.com.br/metrexato-2-5mg-com-24-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 26.99,
      "nome": "Metotrexato de Sódio 2,5mg Blau 24 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/metrexato-25mg-blau-24-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 28.9,
      "nome": "Metrexato Metotrexato 2,5mg 24 Comprimidos",
      "url": "https://www.panvel.com/panvel/metrexato-metotrexato-25mg-24-comprimidos/p-910630",
      "disponivel": true
    }
  },
  "med-00755": {
    "paguemenos": {
      "preco": 33.99,
      "nome": "Folacin 5mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/folacin-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 33.99,
      "nome": "Folacin 5mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/folacin-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 9.26,
      "nome": "Neo Fólico Ácido Fólico 5mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/neo-folico-5mg-elite-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 8.61,
      "nome": "Neo Fólico Ácido Fólico 5mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/neo-folico-5mg-elite-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.79,
      "nome": "Neo Fólico 5mg Neo Química 20 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/neo-folico-5mg-neo-quimica-20-comprimidos-revestidos/p",
      "disponivel": true
    }
  },
  "med-00555": {
    "paguemenos": {
      "preco": 9.99,
      "nome": "Metronidazol 250mg 20 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/metronidazol-250mg-com-20-comprimidos-generico-prati-donaduzzi-mais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.99,
      "nome": "Metronidazol 250mg 20 Comprimidos Revestidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/metronidazol-250mg-com-20-comprimidos-generico-prati-donaduzzi-mais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 9.99,
      "nome": "Metronidazol 250mg Genérico Neo Química 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/metronidazol-250mg-generico-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 3.99,
      "nome": "Metronidazol 250mg Genérico Neo Química 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/metronidazol-250mg-generico-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.95,
      "nome": "Metronidazol 250mg Prati Donaduzzi 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/metronidrazol-250mg-prati-donaduzzi-20-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.14,
      "nome": "Metronidazol 250mg 20 Comprimidos Prati Generico",
      "url": "https://www.panvel.com/panvel/metronidazol-250mg-20-comprimidos-prati-generico/p-670430",
      "disponivel": true
    }
  },
  "med-00574": {
    "paguemenos": {
      "preco": 26.99,
      "nome": "Metronidazol+nistatina Creme Vaginal 50g Genérico Prati-donaduzzi",
      "url": "https://www.paguemenos.com.br/metronidazolmaisnistatina-creme-vaginal-50g-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.99,
      "nome": "Metronidazol+nistatina Creme Vaginal 50g Genérico Prati-donaduzzi",
      "url": "https://www.extrafarma.com.br/metronidazolmaisnistatina-creme-vaginal-50g-generico-prati-donaduzzi/p",
      "disponivel": true
    }
  },
  "med-00559": {
    "paguemenos": {
      "preco": 128.99,
      "nome": "Mirabegrona 50mg 30 Comprimidos Revestidos de Liberação Prolongada Genérico Althaia",
      "url": "https://www.paguemenos.com.br/mirabegrona-50mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 128.99,
      "nome": "Mirabegrona 50mg 30 Comprimidos Revestidos de Liberação Prolongada Genérico Althaia",
      "url": "https://www.extrafarma.com.br/mirabegrona-50mg-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 10.49,
      "nome": "Mirabel 0,5mg/ml + 1mg/ml Allergan 10ml Solução Oftalmológica",
      "url": "https://www.drogariasaopaulo.com.br/mirabel-solucao-oftalmologica-allergan-10ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 10.19,
      "nome": "Mirabel 0,5mg/ml + 1mg/ml Allergan 10ml Solução Oftalmológica",
      "url": "https://www.drogariaspacheco.com.br/mirabel-solucao-oftalmologica-allergan-10ml/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 115.78,
      "nome": "Mirabegrona 50mg 30 Comprimidos Revestidos Althaia",
      "url": "https://www.drogariavenancio.com.br/mirabegrona-50mg-30com--g--althaia/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 116.49,
      "nome": "Mirabegrona 50mg 30 Comprimidos Revestidos Liberacao Polongada Althaia Generico",
      "url": "https://www.panvel.com/panvel/mirabegrona-50mg-30-comprimidos-revestidos-liberacao-polongada-althaia-generico/p-90834",
      "disponivel": true
    }
  },
  "med-00560": {
    "paguemenos": {
      "preco": 52.49,
      "nome": "Mirtazapina 15mg 30 Comprimidos Genérico Globo",
      "url": "https://www.paguemenos.com.br/mirtazapina-15mg-30-comprimidos-generico-globo/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 52.49,
      "nome": "Mirtazapina 15mg 30 Comprimidos Genérico Globo",
      "url": "https://www.extrafarma.com.br/mirtazapina-15mg-30-comprimidos-generico-globo/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 83.24,
      "nome": "Mirtazapina 30mg Genérico Torrent Pharma 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/mirtazapina-30mg-generico-torrent-pharma-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 49.99,
      "nome": "Mirtazapina 15mg Genérico EMS 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/mirtazapina-15mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 47.89,
      "nome": "Mirtazapina Odt 15mg 30 Comprimidos Medley Genérico",
      "url": "https://www.drogariavenancio.com.br/mirtazapina-odt-15mg-30-comprimidos-medley-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 46.99,
      "nome": "Mirtazapina 15mg 30 Comprmidos Orodispersíveis Neoquimica Genérico C1",
      "url": "https://www.panvel.com/panvel/mirtazapina-15mg-30-comprmidos-orodispersiveis-neoquimica-generico-c1/p-111114",
      "disponivel": true
    }
  },
  "med-00561": {
    "paguemenos": {
      "preco": 6.79,
      "nome": "Mononitrato de Isossorbida 40mg 20 Comprimidos Genérico Zydus",
      "url": "https://www.paguemenos.com.br/mononitrato-de-isossorbida-40mg-com-20-comprimidos-generico-zydus/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.79,
      "nome": "Mononitrato de Isossorbida 40mg 20 Comprimidos Genérico Zydus",
      "url": "https://www.extrafarma.com.br/mononitrato-de-isossorbida-40mg-com-20-comprimidos-generico-zydus/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 9.91,
      "nome": "Mononitrato De Isossorbida 20mg Genérico Biosintética 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/mononitrato-de-isossorbida-20mg-generico-biosintetica-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 9.89,
      "nome": "Mononitrato De Isossorbida 20mg Genérico Biosintética 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/mononitrato-de-isossorbida-20mg-generico-biosintetica-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.75,
      "nome": "Mononitrato De Isossorbida 20mg Aché 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/mononitrato-de-isossorbida-20mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 19.35,
      "nome": "Monocordil Mononitrato Isossorbida 20mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/monocordil-mononitrato-isossorbida-20mg-30-comprimidos/p-426580",
      "disponivel": true
    }
  },
  "med-00562": {
    "paguemenos": {
      "preco": 29.29,
      "nome": "Montelucaste de Sódio 10mg 10 Comprimidos Revestidos Genérico Achê",
      "url": "https://www.paguemenos.com.br/montelucaste-de-sodio-10mg-com-10-comprimidos-generico-biossintetica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 29.29,
      "nome": "Montelucaste de Sódio 10mg 10 Comprimidos Revestidos Genérico Achê",
      "url": "https://www.extrafarma.com.br/montelucaste-de-sodio-10mg-com-10-comprimidos-generico-biossintetica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 56.09,
      "nome": "Montelucaste De Sódio 10mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/montelucaste-de-sodio-10mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 41.35,
      "nome": "Montelucaste De Sódio 10mg Genérico Eurofarma 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/montelucaste-de-sodio-10mg-generico-eurofarma-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 15.25,
      "nome": "Montelucaste De Sódio 10mg Aché 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/montelucaste-de-sodio-10mg-ache-10-comprimidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 41.49,
      "nome": "Montelucaste De Sodio 10mg 30 Comprimidos Revestidos Geolab Generico",
      "url": "https://www.panvel.com/panvel/montelucaste-de-sodio-10mg-30-comprimidos-revestidos-geolab-generico/p-107335",
      "disponivel": true
    }
  },
  "med-00564": {
    "paguemenos": {
      "preco": 34.99,
      "nome": "Mupirocina 20mg/g Pomada 15g Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/mupirocina-20mg-pomada-generico-prati-donaduzzimais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 34.99,
      "nome": "Mupirocina 20mg/g Pomada 15g Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/mupirocina-20mg-pomada-generico-prati-donaduzzimais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 39.5,
      "nome": "Mupirocina 20mg/g Genérico Eurofarma 15g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/mupirocina-creme-20mg-g-generico-eurofarma-15g/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 32.94,
      "nome": "Mupirocina 20mg/g Genérico Eurofarma 15g Pomada",
      "url": "https://www.drogariaspacheco.com.br/mupirocina-creme-20mg-g-generico-eurofarma-15g/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 43.49,
      "nome": "Bactroban Gsk Pomada 10g",
      "url": "https://www.drogariavenancio.com.br/bactroban-gsk-pomada-10g-ab-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 43.49,
      "nome": "Mupirocina 20mg/g Pomada 15g Prati Donaduzzi Generico",
      "url": "https://www.panvel.com/panvel/mupirocina-20mg-g-pomada-15g-prati-donaduzzi-generico/p-113542",
      "disponivel": true
    }
  },
  "med-00566": {
    "paguemenos": {
      "preco": 5.19,
      "nome": "Naproxeno Sódico 550mg 10 Comprimidos Revestidos Genérico Germed",
      "url": "https://www.paguemenos.com.br/naproxeno-sodico-550mg-com-10-comprimidos-revestidos-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.19,
      "nome": "Naproxeno Sódico 550mg 10 Comprimidos Revestidos Genérico Germed",
      "url": "https://www.extrafarma.com.br/naproxeno-sodico-550mg-com-10-comprimidos-revestidos-generico-germed/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 22.89,
      "nome": "Naproxeno Sódico 550mg 10 Comprimidos Germed Pharma",
      "url": "https://www.drogariavenancio.com.br/naproxeno-sod-550mg-10com--g--germed/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 19.85,
      "nome": "Naproxeno Sódico Eurofarma 550mg 10 Comprimidos ",
      "url": "https://www.panvel.com/panvel/naproxeno-sodico-eurofarma-550mg-10-comprimidos/p-85196",
      "disponivel": true
    }
  },
  "med-00565": {
    "paguemenos": {
      "preco": 16.49,
      "nome": "Naproxeno 500mg 10 Comprimidos Genérico Teuto",
      "url": "https://www.paguemenos.com.br/naproxeno-500mg-com-10-comprimidos-generico-teuto/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.49,
      "nome": "Naproxeno 500mg 10 Comprimidos Genérico Teuto",
      "url": "https://www.extrafarma.com.br/naproxeno-500mg-com-10-comprimidos-generico-teuto/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.93,
      "nome": "Naproxeno 500mg Teuto 10 comprimidos",
      "url": "https://www.drogariavenancio.com.br/naproxeno-500mg-teuto-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 16.99,
      "nome": "Naproxeno 500mg 10 Comprimidos Teuto Genérico",
      "url": "https://www.panvel.com/panvel/naproxeno-500mg-10-comprimidos-teuto-generico/p-87510",
      "disponivel": true
    }
  },
  "med-00567": {
    "paguemenos": {
      "preco": 100.99,
      "nome": "Nicorette 2mg Sabor Icemint 30 Gomas Mastigáveis",
      "url": "https://www.paguemenos.com.br/nicorette-icemint-2mg-30-unidades/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 100.99,
      "nome": "Nicorette 2mg Sabor Icemint 30 Gomas Mastigáveis",
      "url": "https://www.extrafarma.com.br/nicorette-icemint-2mg-30-unidades/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 84.99,
      "nome": "NiQuitin Adesivo 7mg 7 Adesivos De Nicotina",
      "url": "https://www.drogariavenancio.com.br/niquitin-adesivo-7mg-7-adesivos-de-nicotina/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 127.03,
      "nome": "Niquitin Adesivos 7mg Para Parar De Fumar 7 Unidades",
      "url": "https://www.panvel.com/panvel/niquitin-adesivos-7mg-para-parar-de-fumar-7-unidades/p-152800",
      "disponivel": true
    }
  },
  "med-00568": {
    "paguemenos": {
      "preco": 19.49,
      "nome": "Nifedipress 20mg 30 Comprimidos Revestidos de Liberação Retardada",
      "url": "https://www.paguemenos.com.br/nifedipress-retard-20mg-comprimidos30/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.49,
      "nome": "Nifedipress 20mg 30 Comprimidos Revestidos de Liberação Retardada",
      "url": "https://www.extrafarma.com.br/nifedipress-retard-20mg-comprimidos30/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 23.12,
      "nome": "Nifedipress Nifedipino 20mg  30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nifedipress-20mg-30-comprimidos-medquimica/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 14,
      "nome": "Nifedipress Nifedipino 20mg  30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/nifedipress-20mg-30-comprimidos-medquimica/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.49,
      "nome": "Neo Fedipina 20mg Neo Química 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/neo-fedipina-20mg-neo-quimica-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 25.14,
      "nome": "Nifedipress Retard Nifedipina 20mg 30 Comprimidos De Absorção Retardada",
      "url": "https://www.panvel.com/panvel/nifedipress-retard-nifedipina-20mg-30-comprimidos-de-absorcao-retardada/p-102243",
      "disponivel": true
    }
  },
  "med-00569": {
    "paguemenos": {
      "preco": 5.99,
      "nome": "Nimesulida 100mg 12 Comprimidos Genérico Globo",
      "url": "https://www.paguemenos.com.br/nimesulida-100mg-12-comprimidos-globo-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.99,
      "nome": "Nimesulida 100mg 12 Comprimidos Genérico Globo",
      "url": "https://www.extrafarma.com.br/nimesulida-100mg-12-comprimidos-globo-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 3.99,
      "nome": "Scaflogin Nimesulida 100mg 12 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/scaflogin-100mg-bonifik-12-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 3.99,
      "nome": "Scaflogin Nimesulida 100mg 12 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/scaflogin-100mg-bonifik-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 2.49,
      "nome": "Nimesulida 100mg 12 Comprimidos Globo Pharma",
      "url": "https://www.drogariavenancio.com.br/nimesulida-100mg-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.99,
      "nome": "Nimesulida 100mg 12 Comprimidos Neo Química Genérico",
      "url": "https://www.panvel.com/panvel/nimesulida-100mg-12-comprimidos-neo-quimica-generico/p-915220",
      "disponivel": true
    }
  },
  "med-00570": {
    "paguemenos": {
      "preco": 30.79,
      "nome": "Nimesulida + Betaciclodextrina 400mg 10 Comprimidos Genérico Emmarka",
      "url": "https://www.paguemenos.com.br/nimesulida-mais-betaciclodextrina-400mg-10-comprimidos-generico-emmarka/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 30.79,
      "nome": "Nimesulida + Betaciclodextrina 400mg 10 Comprimidos Genérico Emmarka",
      "url": "https://www.extrafarma.com.br/nimesulida-mais-betaciclodextrina-400mg-10-comprimidos-generico-emmarka/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 27.99,
      "nome": "Nimesulida Betaciclodextrina 400mg Genérico Biolab 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nimesulida-betaciclodextrina-400mg-generico-biolab-10-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 27.99,
      "nome": "Nimesulida Betaciclodextrina 400mg Genérico Biolab 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/nimesulida-betaciclodextrina-400mg-generico-biolab-10-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 32.99,
      "nome": "Nimesulida Betaciclodextrina 400mg Biolab 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/nimesulida-beta-400mg-10com--g--biolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.49,
      "nome": "Nimesulida Betaciclodextrina 400mg 10 Comprimidos Biolab Genérico",
      "url": "https://www.panvel.com/panvel/nimesulida-betaciclodextrina-400mg-10-comprimidos-biolab-generico/p-87943",
      "disponivel": true
    }
  },
  "med-00572": {
    "paguemenos": {
      "preco": 15.89,
      "nome": "Nistatina Creme Vaginal 60g Genérico Greenpharma",
      "url": "https://www.paguemenos.com.br/nistatina-creme-vaginal-60g-generico-greenpharma/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 15.89,
      "nome": "Nistatina Creme Vaginal 60g Genérico Greenpharma",
      "url": "https://www.extrafarma.com.br/nistatina-creme-vaginal-60g-generico-greenpharma/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 17.53,
      "nome": "Nistatina 25.000UI/g Genérico Medley 60g 1 Bisnaga Creme Vaginal + 14 Aplicadores",
      "url": "https://www.drogariasaopaulo.com.br/nistatina-creme-vaginal-60g-com-14-aplicacoes-medley/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.59,
      "nome": "Nistatina 100.000UI/g Genérico Neo Química 60g Creme Vaginal + 14 Aplicadores",
      "url": "https://www.drogariaspacheco.com.br/nistatina-creme-vaginal-25000ui-g-generico-hypermarcas-60g-14-aplicadores/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10.26,
      "nome": "Nistatina Suspensão Oral Teuto 100.000UI/ml 1 Frasco 50mL de Suspensão de Uso Oral",
      "url": "https://www.drogariavenancio.com.br/nistatina-suspensao-oral-teuto-100-000ui-ml-1-frasco-50ml-de-suspensao-de-uso-oral/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 16.49,
      "nome": "Nistatina 25000ui/g Creme Vaginal 60g - 14 Aplicadores Medley Genérico",
      "url": "https://www.panvel.com/panvel/nistatina-25000ui-g-creme-vaginal-60g-14-aplicadores-medley-generico/p-116173",
      "disponivel": true
    }
  },
  "med-00575": {
    "paguemenos": {
      "preco": 19.99,
      "nome": "Nistatina + Óxido de Zinco Pomada para Assadura 60g Genérico Cimed",
      "url": "https://www.paguemenos.com.br/nistatina-mais-oxido-de-zinco-pomada-60g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.99,
      "nome": "Nistatina + Óxido de Zinco Pomada para Assadura 60g Genérico Cimed",
      "url": "https://www.extrafarma.com.br/nistatina-mais-oxido-de-zinco-pomada-60g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.57,
      "nome": "Nistatina + Oxido De Zinco Cimed Pomada 60g",
      "url": "https://www.drogariasaopaulo.com.br/nistatina-oxido-de-zinco-cimed-pomada--60gr-cimed/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 18.49,
      "nome": "Nistatina + óxido de zinco Medley pomada 60g",
      "url": "https://www.drogariavenancio.com.br/nistatina---oxido-de-zinco-medley-pomada-60g/p",
      "disponivel": true
    }
  },
  "med-00576": {
    "paguemenos": {
      "preco": 98.99,
      "nome": "Dermodex Tratamento 100.000 U.I./g + 200 mg/g Pomada para Assadura 60g",
      "url": "https://www.paguemenos.com.br/dermodex-creme-60g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 98.99,
      "nome": "Dermodex Tratamento 100.000 U.I./g + 200 mg/g Pomada para Assadura 60g",
      "url": "https://www.extrafarma.com.br/dermodex-creme-60g/p",
      "disponivel": true
    }
  },
  "med-00577": {
    "paguemenos": {
      "preco": 12.39,
      "nome": "Nitazoxanida 20mg/ml Pó para Suspensão Oral 45ml + Seringa Dosadora Genérico Germed",
      "url": "https://www.paguemenos.com.br/nitazoxanida-20mg-ml-po-para-suspensao-oral-frasco-com-45ml-mais-seringa-dosadora/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.39,
      "nome": "Nitazoxanida 20mg/ml Pó para Suspensão Oral 45ml + Seringa Dosadora Genérico Germed",
      "url": "https://www.extrafarma.com.br/nitazoxanida-20mg-ml-po-para-suspensao-oral-frasco-com-45ml-mais-seringa-dosadora/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 18.25,
      "nome": "Nitazoxanida 20mg/Ml Genérico Althaia 45ml Pó Suspensão Oral",
      "url": "https://www.drogariasaopaulo.com.br/nitazoxanida-20mg-ml-generico-althaia-45ml-po-suspensao-oral/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 22.65,
      "nome": "Nitazoxanida 20mg/ml Genérico EMS 45ml",
      "url": "https://www.drogariaspacheco.com.br/nitazoxanida-20mgml-generico-ems-45ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 16.99,
      "nome": "Nitazoxanida 20mg/ml Althaia Suspensão Oral 45ml",
      "url": "https://www.drogariavenancio.com.br/nitazoxanida-20mg-ml-althaia-suspensao-oral-45ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 14.99,
      "nome": "Nitazoxanida 20mg/ml Pó Suspensão 45ml Eurofarma Generico",
      "url": "https://www.panvel.com/panvel/nitazoxanida-20mg-ml-po-suspensao-45ml-eurofarma-generico/p-119446",
      "disponivel": true
    }
  },
  "med-00579": {
    "paguemenos": {
      "preco": 62.49,
      "nome": "Nitrato de Butoconazol 20mg/g Creme Vaginal 6,5g + Aplicador Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/nitrato-de-butoconazol-20mg-g-creme-vaginal-6-5g-com-aplicador-neo-quimica-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 62.49,
      "nome": "Nitrato de Butoconazol 20mg/g Creme Vaginal 6,5g + Aplicador Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/nitrato-de-butoconazol-20mg-g-creme-vaginal-6-5g-com-aplicador-neo-quimica-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 64.59,
      "nome": "Nitrato De Butoconazol 20mg/g Genérico Neo Química 6,5g Creme Vaginal + Aplicador",
      "url": "https://www.drogariasaopaulo.com.br/nitrato-de-butoconazol-20mg-g-generico-neo-quimica-6-5g-creme-vaginal-aplicador/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 63.59,
      "nome": "Nitrato De Butoconazol 20mg/g Genérico Neo Química 6,5g Creme Vaginal + Aplicador",
      "url": "https://www.drogariaspacheco.com.br/nitrato-de-butoconazol-20mg-g-generico-neo-quimica-6-5g-creme-vaginal-aplicador/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 63.9,
      "nome": "Nitrato de Butoconazol 20mg/g Neo Química Creme Vaginal 6,5g + 1 Aplicador 5g",
      "url": "https://www.drogariavenancio.com.br/nit-butoconazol-20mg-g-cr-bg-65g-apl-5g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 110.64,
      "nome": "Unyca Nitrato De Butoconazol 20mg Creme Vaginal 6,5g + Aplicador",
      "url": "https://www.panvel.com/panvel/unyca-nitrato-de-butoconazol-20mg-creme-vaginal-65g-aplicador/p-89303",
      "disponivel": true
    }
  },
  "med-00580": {
    "paguemenos": {
      "preco": 33.79,
      "nome": "Nitrato de Fenticonazol 0,02g/g Creme Vaginal 40g 7 Aplicadores Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/nitrato-de-fenticonazol-creme-vaginal-com-7-aplicadores-40g-genericos-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 33.79,
      "nome": "Nitrato de Fenticonazol 0,02g/g Creme Vaginal 40g 7 Aplicadores Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/nitrato-de-fenticonazol-creme-vaginal-com-7-aplicadores-40g-genericos-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 40.69,
      "nome": "Nitrato de Fenticonazol 0,02g/g Genérico Eurofarma 40g Creme Vaginal + 7 Aplicadores",
      "url": "https://www.drogariasaopaulo.com.br/nitrato-de-fenticonazol-generico-eurofarma-40mg-7-aplicadores/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 38.21,
      "nome": "Fentizol Nitrato De Fenticonazol 2g 20g Creme Dermatológico",
      "url": "https://www.drogariaspacheco.com.br/fentizol-20gr-ache-creme-dermatologico/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 25.09,
      "nome": "Nitrato de Fenticonazol 0,02g/g Creme Vaginal Eurofarma 40g + 7 aplicadores",
      "url": "https://www.drogariavenancio.com.br/nitrato-de-fenticonazol-002g-g-eurofarma-creme-vagina-40g/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 44.49,
      "nome": "Nitrato De Fenticonazol Creme Vaginal 40g Eurofarma Genérico",
      "url": "https://www.panvel.com/panvel/nitrato-de-fenticonazol-creme-vaginal-40g-eurofarma-generico/p-656180",
      "disponivel": true
    }
  },
  "med-00581": {
    "paguemenos": {
      "preco": 43.59,
      "nome": "Icaden 10mg/g Creme 20g",
      "url": "https://www.paguemenos.com.br/icaden-creme-20g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 43.59,
      "nome": "Icaden 10mg/g Creme 20g",
      "url": "https://www.extrafarma.com.br/icaden-creme-20g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 16.1,
      "nome": "Nitrato de Isoconazol 10mg/g Genérico Medley 20g Creme Dermatológico",
      "url": "https://www.drogariasaopaulo.com.br/creme-dermatologico-nitrato-de-isoconazol-10mgg-generico-medley-20g/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 17.66,
      "nome": "Nitrato de Isoconazol 10mg/g Genérico Medley 20g Creme Dermatológico",
      "url": "https://www.drogariaspacheco.com.br/creme-dermatologico-nitrato-de-isoconazol-10mgg-generico-medley-20g/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 44.99,
      "nome": "Icaden 10 Mg/g Leo Pharma Creme Dermatologico 20g",
      "url": "https://www.drogariavenancio.com.br/icaden-10-mg-g-creme-dermatologico-20g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 52.21,
      "nome": "Icaden Creme Nitrato De Isoconazol 10mg/g 20g",
      "url": "https://www.panvel.com/panvel/icaden-creme-nitrato-de-isoconazol-10mg-g-20g/p-194671",
      "disponivel": true
    }
  },
  "med-00582": {
    "paguemenos": {
      "preco": 15.29,
      "nome": "Nitrato de Miconazol Creme 28g Cimed Genérico",
      "url": "https://www.paguemenos.com.br/nitrato-de-miconazol-creme-28g-generico-cimed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.29,
      "nome": "Nitrato de Miconazol Creme 28g Cimed Genérico",
      "url": "https://www.extrafarma.com.br/nitrato-de-miconazol-creme-28g-generico-cimed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 10.19,
      "nome": "Nitrato De Miconazol 20mg/g Genérico Cimed 28g Creme Dermatológico",
      "url": "https://www.drogariasaopaulo.com.br/nitrato-de-miconazol-20mg-g-generico-cimed-28g-creme-dermatologico/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 10.19,
      "nome": "Nitrato De Miconazol 20mg/g Genérico Cimed 28g Creme Dermatológico",
      "url": "https://www.drogariaspacheco.com.br/nitrato-de-miconazol-20mg-g-generico-cimed-28g-creme-dermatologico/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8,
      "nome": "Nitrato de Miconazol 20mg/g Cimed Creme 28g",
      "url": "https://www.drogariavenancio.com.br/zma-integralmedica-60cap/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 16.49,
      "nome": "Nitrato De Miconazol 20mg/g Creme Dermatológico 28g Prati Donaduzzi Generico",
      "url": "https://www.panvel.com/panvel/nitrato-de-miconazol-20mg-g-creme-dermatologico-28g-prati-donaduzzi-generico/p-106915",
      "disponivel": true
    }
  },
  "med-00583": {
    "paguemenos": {
      "preco": 25.29,
      "nome": "Tinidazol 30mg/g + Nitrato de Miconazol 20mg/g Creme Vaginal 40g 7 Aplicadores Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/tinidazolmaisnitrato-de-miconazol-creme-vaginal-40g-com-7-aplicadores-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 25.29,
      "nome": "Tinidazol 30mg/g + Nitrato de Miconazol 20mg/g Creme Vaginal 40g 7 Aplicadores Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/tinidazolmaisnitrato-de-miconazol-creme-vaginal-40g-com-7-aplicadores-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 42.06,
      "nome": "Amplium G Tinidazol 30mg/g + Nitrato de Miconazol 20mg/g 40g Creme Vaginal + 7 Aplicadores",
      "url": "https://www.drogariasaopaulo.com.br/amplium-g-creme-vaginal-40g-com-7-aplicadores-hypermarcas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 35.86,
      "nome": "Amplium G Tinidazol 30mg/g + Nitrato de Miconazol 20mg/g 40g Creme Vaginal + 7 Aplicadores",
      "url": "https://www.drogariaspacheco.com.br/amplium-g-creme-vaginal-40g-com-7-aplicadores-hypermarcas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 25.99,
      "nome": "Tinidazol + Nitrato de Miconazol 30mg/g + 20mg/g Neo Quimica Creme Vaginal 20g + 7 Aplicadores",
      "url": "https://www.drogariavenancio.com.br/tinidazol---nitrato-de-miconazol-30mg-g---20mg-g-neo-quimica-creme-vaginal-20g---7-aplicadores/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 43.26,
      "nome": "Amplium G Creme Vaginal Tinidazol 30mg/g + Nitrato De Miconazol 20mg/g 40g + 7 Aplicadores",
      "url": "https://www.panvel.com/panvel/amplium-g-creme-vaginal-tinidazol-30mg-g-nitrato-de-miconazol-20mg-g-40g-7-aplicadores/p-872940",
      "disponivel": true
    }
  },
  "med-00584": {
    "paguemenos": {
      "preco": 17.79,
      "nome": "Nitrato de Oxiconazol 10mg/ml Solução Dermatológica 20ml Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/nitrato-oxiconazol-solucao-20ml-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.79,
      "nome": "Nitrato de Oxiconazol 10mg/ml Solução Dermatológica 20ml Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/nitrato-oxiconazol-solucao-20ml-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 56.57,
      "nome": "Oxipelle 1% Oxiconazol 10mg/g Creme 20g",
      "url": "https://www.panvel.com/panvel/oxipelle-1-oxiconazol-10mg-g-creme-20g/p-838800",
      "disponivel": true
    }
  },
  "med-00586": {
    "paguemenos": {
      "preco": 11.99,
      "nome": "Nitrazepam 5mg 20 Comprimidos Genérico Germed",
      "url": "https://www.paguemenos.com.br/nitrazepam-5mg-com-20-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.99,
      "nome": "Nitrazepam 5mg 20 Comprimidos Genérico Germed",
      "url": "https://www.extrafarma.com.br/nitrazepam-5mg-com-20-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 16.65,
      "nome": "Sonebon Nitrazepam 5mg 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/sonebon-natures-plus-20-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 16.65,
      "nome": "Sonebon Nitrazepam 5mg 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/sonebon-natures-plus-20-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00587": {
    "paguemenos": {
      "preco": 28.29,
      "nome": "Nitrendipino 10mg 30 Comprimidos Revestidos Genérico Biosintética",
      "url": "https://www.paguemenos.com.br/nitrendipino-10mg-com-30-comprimidos-generico-biosintetica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 28.29,
      "nome": "Nitrendipino 10mg 30 Comprimidos Revestidos Genérico Biosintética",
      "url": "https://www.extrafarma.com.br/nitrendipino-10mg-com-30-comprimidos-generico-biosintetica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.55,
      "nome": "Nitrendipino 10mg Genérico Biosintética 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nitrendipino-10mg-generico-biosinteti-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.55,
      "nome": "Nitrendipino 10mg Genérico Biosintética 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/nitrendipino-10mg-generico-biosinteti-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 24.99,
      "nome": "Nitrendipino 10mg Aché 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/nitrendipino-10mg-30cpr-g-biosintetica/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 33.99,
      "nome": "Nitrendipino 10mg 30 Comprimidos Biosintética Genérico C",
      "url": "https://www.panvel.com/panvel/nitrendipino-10mg-30-comprimidos-biosintetica-generico-c/p-827910",
      "disponivel": true
    }
  },
  "med-00588": {
    "paguemenos": {
      "preco": 8.59,
      "nome": "Nitrofurantoína 100mg 28 Cápsulas Duras Genérico Teuto",
      "url": "https://www.paguemenos.com.br/nitrofurantoina-100mg-com-28-capsulas-generico-teuto/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.59,
      "nome": "Nitrofurantoína 100mg 28 Cápsulas Duras Genérico Teuto",
      "url": "https://www.extrafarma.com.br/nitrofurantoina-100mg-com-28-capsulas-generico-teuto/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 8.65,
      "nome": "Nitrofurantoína 100mg Genérico Teuto 28 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/nitrofurantoina-100mg-teuto-28-capsulas-generico/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 8.99,
      "nome": "Nitrofurantoína 100mg Genérico Teuto 28 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/nitrofurantoina-100mg-teuto-28-capsulas-generico/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 14.99,
      "nome": "Macrodantina 100mg Com 28 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/macrodantina-100mg-com-28-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.99,
      "nome": "Nitrofurantoina 100mg 28 Cápsulas Teuto Genérico",
      "url": "https://www.panvel.com/panvel/nitrofurantoina-100mg-28-capsulas-teuto-generico/p-655180",
      "disponivel": true
    }
  },
  "med-00589": {
    "paguemenos": {
      "preco": 9.19,
      "nome": "Noretisterona 0,35mg 35 Comprimidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/noretisterona-0-35mg-com-35-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.19,
      "nome": "Noretisterona 0,35mg 35 Comprimidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/noretisterona-0-35mg-com-35-comprimidos-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 10.11,
      "nome": "Noretisterona 0,35mg Genérico Biolab 35 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/noretisterona-0-35mg-generico-biolab-35-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 10.55,
      "nome": "Noretisterona 0,35mg Genérico Biolab 35 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/noretisterona-0-35mg-generico-biolab-35-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10.49,
      "nome": "Noretisterona 0,35mg Biolab 35 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/noretisterona-035mg-35com--g--biolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.49,
      "nome": "Noretisterona 0,35mg 35 Comprimidos Biolab Generico",
      "url": "https://www.panvel.com/panvel/noretisterona-035mg-35-comprimidos-biolab-generico/p-110226",
      "disponivel": true
    }
  },
  "med-00590": {
    "paguemenos": {
      "preco": 12.79,
      "nome": "Norfloxacino 400mg 6 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/norfloxacino-400mg-comprimidos6-generico-medleydley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.79,
      "nome": "Norfloxacino 400mg 6 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/norfloxacino-400mg-comprimidos6-generico-medleydley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 15.26,
      "nome": "Norfloxacino 400mg Genérico União Química 6 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/norfloxacino-400mg-generico-uniao-quimica-6-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 1.99,
      "nome": "Norfloxacino 400mg Genérico Cimed 14 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/norfloxacino-400mg-generico-cimed-14-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 20.99,
      "nome": "Norfloxacino 400mg6 Comprimidos Revestidos Medley Genérico",
      "url": "https://www.drogariavenancio.com.br/norfloxacino-400mg6-comprimidos-revestidos-medley-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 21.49,
      "nome": "Norfloxacino 400mg 6 Comprimidos Medley Genérico C",
      "url": "https://www.panvel.com/panvel/norfloxacino-400mg-6-comprimidos-medley-generico-c/p-848820",
      "disponivel": true
    }
  },
  "med-00591": {
    "paguemenos": {
      "preco": 16.59,
      "nome": "Ofloxacino 3mg Solução Oftálmica 5ml Genérico Ems",
      "url": "https://www.paguemenos.com.br/ofloxacino-3mg-solucao-oftalmica-5ml-generico-ems/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 16.59,
      "nome": "Ofloxacino 3mg Solução Oftálmica 5ml Genérico Ems",
      "url": "https://www.extrafarma.com.br/ofloxacino-3mg-solucao-oftalmica-5ml-generico-ems/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 53,
      "nome": "Nostil 0,3% Ofloxacino 3mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/nostil-03-ofloxacino-3mg-ml-colirio-5ml/p-489580",
      "disponivel": true
    }
  },
  "med-00592": {
    "paguemenos": {
      "preco": 18.49,
      "nome": "Olanzapina 5mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/olanzapina-5mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.49,
      "nome": "Olanzapina 5mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/olanzapina-5mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 28.59,
      "nome": "Olanzapina 5mg Genérico Prati-Donaduzzi 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/olanzapina-5mg-generico-prati-donaduzzi-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 14.99,
      "nome": "Olanzapina 5mg Genérico Biolab 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/olanzapina-5mg-generico-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 25.99,
      "nome": "Olanzapina 2,5mg Aché 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/olanzapina-25mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 38.49,
      "nome": "Olanzapina 2,5mg 30 Comprimidos Revestidos Ems Generico C1",
      "url": "https://www.panvel.com/panvel/olanzapina-25mg-30-comprimidos-revestidos-ems-generico-c1/p-876820",
      "disponivel": true
    }
  },
  "med-00594": {
    "paguemenos": {
      "preco": 8.89,
      "nome": "Omeprazol 20mg 56 Cápsulas Genérico Geolab",
      "url": "https://www.paguemenos.com.br/omeprazol-20mg-56-capsulas-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.89,
      "nome": "Omeprazol 20mg 56 Cápsulas Genérico Geolab",
      "url": "https://www.extrafarma.com.br/omeprazol-20mg-56-capsulas-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 8.27,
      "nome": "Eupept Omeprazol 20mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/eupept-20mg-cifarma-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 8.35,
      "nome": "Eupept Omeprazol 20mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/eupept-20mg-cifarma-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.99,
      "nome": "Omeprazol 20mg Geolab 28 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/omeprazol-20mg-geolab-28-capsulas-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.4,
      "nome": "Pratiprazol Omeprazol 20mg 28 Cápsulas Duras De Liberação Prolongada",
      "url": "https://www.panvel.com/panvel/pratiprazol-omeprazol-20mg-28-capsulas-duras-de-liberacao-prolongada/p-88752",
      "disponivel": true
    }
  },
  "med-00595": {
    "paguemenos": {
      "preco": 87.99,
      "nome": "Ondansetrona 8mg 30 Comprimidos Orodispersíveis Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/ondansetrona-8mg-30-comprimidos-orodispersiveis-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 87.99,
      "nome": "Ondansetrona 8mg 30 Comprimidos Orodispersíveis Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/ondansetrona-8mg-30-comprimidos-orodispersiveis-generico-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 24.08,
      "nome": "Ondansetrona 4mg Genérico Biolab 10 Comprimidos de Desintegração Oral",
      "url": "https://www.drogariasaopaulo.com.br/ondansetrona-4mg-generico-biolab-10-comprimidos-de-desintegracao-oral/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 19.35,
      "nome": "Ondansetrona 4mg Genérico Biolab 10 Comprimidos de Desintegração Oral",
      "url": "https://www.drogariaspacheco.com.br/ondansetrona-4mg-generico-biolab-10-comprimidos-de-desintegracao-oral/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 15.49,
      "nome": "Ondansetrona 4mg 10 Comprimidos Orodispersíveis União Química Genérico",
      "url": "https://www.panvel.com/panvel/ondansetrona-4mg-10-comprimidos-orodispersiveis-uniao-quimica-generico/p-93663",
      "disponivel": true
    }
  },
  "med-00597": {
    "paguemenos": {
      "preco": 72.49,
      "nome": "Orlistate 120mg 21 Cápsulas Duras Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/orlistate-120mg-com-21-capsulas-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 72.49,
      "nome": "Orlistate 120mg 21 Cápsulas Duras Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/orlistate-120mg-com-21-capsulas-generico-prati-donaduzzi/p",
      "disponivel": true
    }
  },
  "med-00596": {
    "paguemenos": {
      "preco": 74.49,
      "nome": "Orlistate 120mg Com 30 Cápsulas Genérico Neoquimica",
      "url": "https://www.paguemenos.com.br/orlistate-120mg-com-30-capsulas-generico-neoquimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 74.49,
      "nome": "Orlistate 120mg Com 30 Cápsulas Genérico Neoquimica",
      "url": "https://www.extrafarma.com.br/orlistate-120mg-com-30-capsulas-generico-neoquimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 51.91,
      "nome": "Orlistate 120mg - 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/orlistate-120mg-1x766q0917161j7417g6609171s62k06/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 54.99,
      "nome": "Orlistate 120mg Genérico Prati-Donaduzzi 21 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/orlistate-120mg-generico-prati-donaduzzi-21-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 75.99,
      "nome": "Orlistate 120mg Neo Química 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/orlistate-120mg-neo-quimica-30-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 86.49,
      "nome": "Orlistate 120mg 21 Capsulas Prati Donaduzzi Generico",
      "url": "https://www.panvel.com/panvel/orlistate-120mg-21-capsulas-prati-donaduzzi-generico/p-107766",
      "disponivel": true
    }
  },
  "med-00598": {
    "paguemenos": {
      "preco": 16.29,
      "nome": "Oxalato de Escitalopram 20mg 30 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.paguemenos.com.br/oxalato-de-escitalopram-20mg-com-30-comprimidos-generico-ache-psicotropico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 16.29,
      "nome": "Oxalato de Escitalopram 20mg 30 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.extrafarma.com.br/oxalato-de-escitalopram-20mg-com-30-comprimidos-generico-ache-psicotropico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 77.59,
      "nome": "Escena Oxalato De Escitalopram 10mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/escena-10mg-cristalia-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 101.91,
      "nome": "Escena Oxalato De Escitalopram 20mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/escena-20mg-cristalia-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 18.99,
      "nome": "Oxalato De Escitalopram 10mg Eurofarma 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/oxal-escitalopram-10mg-30cpr-g--c1-eurofarma/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 35.99,
      "nome": "Oxalato De Escitalopram 10mg 30 Comprimidos Eurofarma Genérico",
      "url": "https://www.panvel.com/panvel/oxalato-de-escitalopram-10mg-30-comprimidos-eurofarma-generico/p-664210",
      "disponivel": true
    }
  },
  "med-00599": {
    "paguemenos": {
      "preco": 23.59,
      "nome": "Oxcarbazepina 300mg Com 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/oxcarbazepina-300mg-com-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 23.59,
      "nome": "Oxcarbazepina 300mg Com 30 Comprimidos Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/oxcarbazepina-300mg-com-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 27.59,
      "nome": "Oxcarbazepina 300mg Genérico Ranbaxy 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/oxcarbazepina-300mg-generico-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 34.9,
      "nome": "Oxcarbazepina 300mg Genérico Sanofi 60 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/oxcarbazepina-300mg-generico-sanofi-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 36.99,
      "nome": "Oxcarbazepina 300mg 30 Comprimidos Revestidos Medley Genérico",
      "url": "https://www.drogariavenancio.com.br/oxcarbazepina-300mg-30-comprimidos-revestidos-medley-generico/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 47.99,
      "nome": "Oxcarbazepina 300mg 30 Comprimidos Medley Generico C1",
      "url": "https://www.panvel.com/panvel/oxcarbazepina-300mg-30-comprimidos-medley-generico-c1/p-919560",
      "disponivel": true
    }
  },
  "med-00601": {
    "paguemenos": {
      "preco": 1282.19,
      "nome": "Vegapali 50mg Injetavel 1 Seringa 0,5ml + 2 Agulhas",
      "url": "https://www.paguemenos.com.br/vegapali-50mg-injetavel-1-seringa-0-5ml-mais-2-agulhas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1282.19,
      "nome": "Vegapali 50mg Injetavel 1 Seringa 0,5ml + 2 Agulhas",
      "url": "https://www.extrafarma.com.br/vegapali-50mg-injetavel-1-seringa-0-5ml-mais-2-agulhas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 1549.99,
      "nome": "Invega Sustenna 50mg/ml Janssen 0,5ml Suspensão + 1 Seringa",
      "url": "https://www.drogariasaopaulo.com.br/invega-sustenna-50mg-johnson-saude-com-1-seringa/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1549.99,
      "nome": "Invega Sustenna 50mg/ml Janssen 0,5ml Suspensão + 1 Seringa",
      "url": "https://www.drogariaspacheco.com.br/invega-sustenna-50mg-johnson-saude-com-1-seringa/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 1437.03,
      "nome": "Vegapali 100mg/ml Suspensão Injetável de Liberação Prolongada Seringa Preenchida 0,50ml + 2 Agulhas",
      "url": "https://www.drogariavenancio.com.br/vegapali-100mg-ml-1sering-075ml--2agulhas--c1-/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 1350.48,
      "nome": "Vegapali 50mg/0,5ml Suspensão Injetável Liberação Prolongada Seringa Preenchida 0,5ml C1",
      "url": "https://www.panvel.com/panvel/vegapali-50mg-05ml-suspensao-injetavel-liberacao-prolongada-seringa-preenchida-05ml-c1/p-89223",
      "disponivel": true
    }
  },
  "med-00604": {
    "paguemenos": {
      "preco": 113.99,
      "nome": "Divena 40mg 60 Comprimidos Revestidos de Liberação Retardada",
      "url": "https://www.paguemenos.com.br/divena-40mg-com-60-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 113.99,
      "nome": "Divena 40mg 60 Comprimidos Revestidos de Liberação Retardada",
      "url": "https://www.extrafarma.com.br/divena-40mg-com-60-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 65.59,
      "nome": "Divena Pantoprazol Magnésico 40mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/divena-40mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 62.91,
      "nome": "Divena Pantoprazol Magnésico 40mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/divena-40mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 64.19,
      "nome": "Divena 40mg 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/divena-40mg-30cpr/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 66.43,
      "nome": "Divena Pantoprazol Magnesico Di-hidratado 40mg 30 Comprimidos Revestidos De Liberação Retardada",
      "url": "https://www.panvel.com/panvel/divena-pantoprazol-magnesico-di-hidratado-40mg-30-comprimidos-revestidos-de-liberacao-retardada/p-114159",
      "disponivel": true
    }
  },
  "med-00603": {
    "paguemenos": {
      "preco": 57.99,
      "nome": "Restitue 40mg 30 Comprimidos Revestidos de Liberação Retardada",
      "url": "https://www.paguemenos.com.br/restitue-40mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 57.99,
      "nome": "Restitue 40mg 30 Comprimidos Revestidos de Liberação Retardada",
      "url": "https://www.extrafarma.com.br/restitue-40mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 58.29,
      "nome": "Restitue Pantoprazol 40mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/restitue-40mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 58.29,
      "nome": "Restitue Pantoprazol 40mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/restitue-40mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 57.49,
      "nome": "Restitue 40mg 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/restitue-40mg-30cpr-rev/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 74.39,
      "nome": "Restitue Pantoprazol Magnesico Di-hidratado 40mg 30 Comprimidos Revestidos De Liberação Retardada",
      "url": "https://www.panvel.com/panvel/restitue-pantoprazol-magnesico-di-hidratado-40mg-30-comprimidos-revestidos-de-liberacao-retardada/p-114211",
      "disponivel": true
    }
  },
  "med-00611": {
    "paguemenos": {
      "preco": 19.99,
      "nome": "Calmasyn 300mg 20 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/calmasyn-300mg-com-20-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.99,
      "nome": "Calmasyn 300mg 20 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/calmasyn-300mg-com-20-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 28.09,
      "nome": "Sonozzz Passiflora 857mg 8 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/sonozzz-passiflora-857mg--8-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 30.32,
      "nome": "Sonozzz Passiflora Ajuda A Relaxar E Descansar 8 Comprimidos",
      "url": "https://www.panvel.com/panvel/sonozzz-passiflora-ajuda-a-relaxar-e-descansar-8-comprimidos/p-100701",
      "disponivel": true
    }
  },
  "med-00610": {
    "paguemenos": {
      "preco": 154.99,
      "nome": "Pasalix PI 500mg 60 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/pasalix-pi-com-60-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 154.99,
      "nome": "Pasalix PI 500mg 60 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/pasalix-pi-com-60-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 69.49,
      "nome": "Pasalix PI 500mg Marjan 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/pasalix-pi-500mg-20com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 72.99,
      "nome": "Pasalix Pi 500mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/pasalix-pi-500mg-30-comprimidos-revestidos/p-114158",
      "disponivel": true
    }
  },
  "med-00613": {
    "paguemenos": {
      "preco": 70.49,
      "nome": "Acertil 5mg 30 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/acertil-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 70.49,
      "nome": "Acertil 5mg 30 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/acertil-5mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 71.53,
      "nome": "Acertil Perindopril Arginina 5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/acertil-5mg-servier-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 71.53,
      "nome": "Acertil Perindopril Arginina 5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/acertil-5mg-servier-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 76.49,
      "nome": "Acertil 5mg Servier 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/acertil-5mg-servier-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 81.95,
      "nome": "Acertil Perindopril Arginina 5mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/acertil-perindopril-arginina-5mg-30-comprimidos-revestidos/p-801690",
      "disponivel": true
    }
  },
  "med-00614": {
    "paguemenos": {
      "preco": 18.59,
      "nome": "Permetrina 10mg/g Loção 60ml Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/permetrina-10mg-g-locao-com-60ml-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.59,
      "nome": "Permetrina 10mg/g Loção 60ml Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/permetrina-10mg-g-locao-com-60ml-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 18.59,
      "nome": "Permetrina 10mg/G Genérico Prati, Donaduzzi & Cia 60ml Loção",
      "url": "https://www.drogariasaopaulo.com.br/permetrina-10mg-g-generico-prati-donaduzzi-cia-60ml-locao-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.82,
      "nome": "Permetrina 10mg/G Genérico Prati, Donaduzzi & Cia 60ml Loção",
      "url": "https://www.drogariaspacheco.com.br/permetrina-10mg-g-generico-prati-donaduzzi-cia-60ml-locao-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.59,
      "nome": "Kaodine10mg/ml Geolab Loção 60ml",
      "url": "https://www.drogariavenancio.com.br/kaodine-10mg-ml-loc-60ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 22.99,
      "nome": "Pediletan 10mg/ml Locao 60ml",
      "url": "https://www.panvel.com/panvel/pediletan-10mg-ml-locao-60ml/p-112331",
      "disponivel": true
    }
  },
  "med-00616": {
    "paguemenos": {
      "preco": 39.99,
      "nome": "Guttalax 7,5mg/ml Solução Oral Gotas 30ml",
      "url": "https://www.paguemenos.com.br/guttalax-gotas-7-5mg-ml-30-ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 39.99,
      "nome": "Guttalax 7,5mg/ml Solução Oral Gotas 30ml",
      "url": "https://www.extrafarma.com.br/guttalax-gotas-7-5mg-ml-30-ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 42.39,
      "nome": "Guttalax 7,5mg Gotas 30ml",
      "url": "https://www.drogariavenancio.com.br/guttalax-75mg-gotas-30ml/p",
      "disponivel": true
    }
  },
  "med-00615": {
    "paguemenos": {
      "preco": 15.99,
      "nome": "Rapilax 7,5mg/ml Solução Oral Gotas 30ml",
      "url": "https://www.paguemenos.com.br/rapilax-gotas-30ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.99,
      "nome": "Rapilax 7,5mg/ml Solução Oral Gotas 30ml",
      "url": "https://www.extrafarma.com.br/rapilax-gotas-30ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 49.83,
      "nome": "Picoprep Picossulfato de Sódio 10mg + Óxido de Magnésio 3,5g + Ácido Cítrico 12g 2 Sachês",
      "url": "https://www.drogariasaopaulo.com.br/picoprep-ferring-2-saches/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 44.48,
      "nome": "Picoprep Picossulfato de Sódio 10mg + Óxido de Magnésio 3,5g + Ácido Cítrico 12g 2 Sachês",
      "url": "https://www.drogariaspacheco.com.br/picoprep-ferring-2-saches/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 14.99,
      "nome": "Rapilax Lactulose 600mg/mL Fonte de Fibras 120ml",
      "url": "https://www.drogariavenancio.com.br/rapilax-lactulose-600mg-ml-fonte-de-fibras-120ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 51.54,
      "nome": "Picoprep Picossulfato De Sódico 10mg + Óxido De Magnésio 3,5g + Ácido Citrico Anidro 12g 2 Sachês",
      "url": "https://www.panvel.com/panvel/picoprep-picossulfato-de-sodico-10mg-oxido-de-magnesio-35g-acido-citrico-anidro-12g-2-saches/p-691860",
      "disponivel": true
    }
  },
  "med-00618": {
    "paguemenos": {
      "preco": 10.89,
      "nome": "Piroxicam 20mg 10 Cápsulas Duras Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/piroxicam-20mg-com-10-capsulas-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.89,
      "nome": "Piroxicam 20mg 10 Cápsulas Duras Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/piroxicam-20mg-com-10-capsulas-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 15.39,
      "nome": "Piroxicam 20mg Genérico Germed 15 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/piroxicam-20mg-15-capsulas-g-natures-plus/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 15.39,
      "nome": "Piroxicam 20mg Genérico Germed 10 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/piroxicam-20mg-10-capsulas-g-natures-plus/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 13.89,
      "nome": "Piroxicam EMS 20mg 10 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/piroxicam-ems-20mg-10-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 9.99,
      "nome": "Piroxicam 20mg 10 Capsulas Pharlab Genérico",
      "url": "https://www.panvel.com/panvel/piroxicam-20mg-10-capsulas-pharlab-generico/p-105373",
      "disponivel": true
    }
  },
  "med-00619": {
    "paguemenos": {
      "preco": 89.99,
      "nome": "Cicladol 20mg 10 Comprimidos",
      "url": "https://www.paguemenos.com.br/cicladol-com-10-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 89.99,
      "nome": "Cicladol 20mg 10 Comprimidos",
      "url": "https://www.extrafarma.com.br/cicladol-com-10-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00620": {
    "paguemenos": {
      "preco": 71.49,
      "nome": "Pitavastatina Calcica 2mg 30 Comprimidos Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/pitavastatina-calcica-2mg-30-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 71.49,
      "nome": "Pitavastatina Calcica 2mg 30 Comprimidos Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/pitavastatina-calcica-2mg-30-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 81.39,
      "nome": "Pitavastatina Cálcica 2mg Genérico Biolab 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/pitavastatina-calcica-2mg-generico-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 83.99,
      "nome": "Pitavastatina Cálcica 2mg Genérico Biolab 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/pitavastatina-calcica-2mg-generico-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 91.99,
      "nome": "Pivastatina Calcica 2mg 30 Comprimidos Revestidos Pharlab",
      "url": "https://www.drogariavenancio.com.br/pitavastatina-calcica-2mg-30com--g--pharlab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 81.49,
      "nome": "Pitavastatina Calcica 2mg 30 Comprimidos Revestidos Biolab Generico",
      "url": "https://www.panvel.com/panvel/pitavastatina-calcica-2mg-30-comprimidos-revestidos-biolab-generico/p-101568",
      "disponivel": true
    }
  },
  "med-00624": {
    "paguemenos": {
      "preco": 34.99,
      "nome": "Fledoid 500 5mg/g Gel 40g",
      "url": "https://www.paguemenos.com.br/fledoid-500-gel-40g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 34.99,
      "nome": "Fledoid 500 5mg/g Gel 40g",
      "url": "https://www.extrafarma.com.br/fledoid-500-gel-40g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 49.69,
      "nome": "Hirudoid Infantil 5mg/g Pomada 40g",
      "url": "https://www.drogariavenancio.com.br/hirudoid-infantil-5mg-g-pom-40g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 37.22,
      "nome": "Fledoid 500 Gel Para Hematomas, Dor, Inchaço E Varizes 40g",
      "url": "https://www.panvel.com/panvel/fledoid-500-gel-para-hematomas-dor-inchaco-e-varizes-40g/p-822070",
      "disponivel": true
    }
  },
  "med-00625": {
    "paguemenos": {
      "preco": 5.79,
      "nome": "Prednisolona 5mg 10 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/prednisolona-5mg-10-comprimidos-revestidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.79,
      "nome": "Prednisolona 5mg 10 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/prednisolona-5mg-10-comprimidos-revestidos-generico-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 6.99,
      "nome": "Prednisolona 5mg Genérico Eurofarma 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/prednisolona-5mg-generico-eurofarma-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 6.99,
      "nome": "Prednisolona 5mg Genérico Eurofarma 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/prednisolona-5mg-generico-eurofarma-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 5.99,
      "nome": "Prednisolona 5mg Eurofarma 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/prednisolona-5mg-eurofarma-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 6.99,
      "nome": "Prednisolona 5mg 10 Comprimidos Althaia Generico",
      "url": "https://www.panvel.com/panvel/prednisolona-5mg-10-comprimidos-althaia-generico/p-110064",
      "disponivel": true
    }
  },
  "med-00626": {
    "paguemenos": {
      "preco": 8.19,
      "nome": "Prednisona 5mg Com 20 Comprimidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/prednisona-5mg-com-20-comprimidos-generico-medley/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 8.19,
      "nome": "Prednisona 5mg Com 20 Comprimidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/prednisona-5mg-com-20-comprimidos-generico-medley/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 9.76,
      "nome": "Prednisona 20mg Genérico Legrand 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/prednisona-20mg-10-comprimidos-revestidos-g-legrand-pharma/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 10.64,
      "nome": "Prednisona 20mg Genérico Legrand 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/prednisona-20mg-10-comprimidos-revestidos-g-legrand-pharma/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.99,
      "nome": "Prednisona 5mg Neo Química 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/prednisona-5mg-neo-quimica-20-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 8.49,
      "nome": "Prednisona 5mg 20 Comprimidos Medley Genérico",
      "url": "https://www.panvel.com/panvel/prednisona-5mg-20-comprimidos-medley-generico/p-94793",
      "disponivel": true
    }
  },
  "med-00627": {
    "paguemenos": {
      "preco": 20.59,
      "nome": "Pregabalina 75mg 30 Cápsulas Genérico EMS",
      "url": "https://www.paguemenos.com.br/pregabalina-75mg-com-30-capsulas-psicotropico-p-c1-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.59,
      "nome": "Pregabalina 75mg 30 Cápsulas Genérico EMS",
      "url": "https://www.extrafarma.com.br/pregabalina-75mg-com-30-capsulas-psicotropico-p-c1-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 24.99,
      "nome": "Pregabalina 150mg Genérico Eurofarma 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/pregabalina-150-mg-generico-eurofarma-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.19,
      "nome": "Insit Pregabalina 25mg 15 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/insit-25mg-apsen-15-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 15.99,
      "nome": "Pregabalina 75mg Teuto 30 Cápsulas Duras",
      "url": "https://www.drogariavenancio.com.br/pregabalina-75mg-teuto-30-capsulas-duras/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 25.99,
      "nome": "Pregabalina 75mg 30 Capsulas Ems Generico C1",
      "url": "https://www.panvel.com/panvel/pregabalina-75mg-30-capsulas-ems-generico-c1/p-104705",
      "disponivel": true
    }
  },
  "med-00629": {
    "paguemenos": {
      "preco": 61.99,
      "nome": "Utrogestan 200mg 14 Cápsulas Gelatinosas Moles",
      "url": "https://www.paguemenos.com.br/utrogestan-200mg-com-14-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 61.99,
      "nome": "Utrogestan 200mg 14 Cápsulas Gelatinosas Moles",
      "url": "https://www.extrafarma.com.br/utrogestan-200mg-com-14-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 66.99,
      "nome": "Utrogestan Progesterona 200mg 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/utrogestan-200mg-besins-healthcare-14-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 60.55,
      "nome": "GynPro Progesterona 100mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/gynpro-100mg-exeltis-30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 61.79,
      "nome": "Gynpro 100mg 30 Cápsulas Moles",
      "url": "https://www.drogariavenancio.com.br/gynpro-100mg-30-capsulas-moles/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 71.95,
      "nome": "Gynpro Progesterona 100mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/gynpro-progesterona-100mg-30-capsulas/p-110503",
      "disponivel": true
    }
  },
  "med-00630": {
    "paguemenos": {
      "preco": 54.49,
      "nome": "Promestrieno 10mg/g Creme Vaginal 30g Com 20 Aplicadores Eurofarma Genérico",
      "url": "https://www.paguemenos.com.br/promestrieno-creme-vaginal-30gmais-20-aplicadores-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 54.49,
      "nome": "Promestrieno 10mg/g Creme Vaginal 30g Com 20 Aplicadores Eurofarma Genérico",
      "url": "https://www.extrafarma.com.br/promestrieno-creme-vaginal-30gmais-20-aplicadores-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 70.39,
      "nome": "Promestrieno 10mg/g Genérico Eurofarma 30g + 20 aplicadores",
      "url": "https://www.drogariasaopaulo.com.br/promestrieno-10mg-g-generico-eurofarma-30g-20-aplicadores/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 70.39,
      "nome": "Promestrieno 10mg/g Genérico Eurofarma 30g + 20 aplicadores",
      "url": "https://www.drogariaspacheco.com.br/promestrieno-10mg-g-generico-eurofarma-30g-20-aplicadores/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 69.99,
      "nome": "Promestrieno 10mg/g Eurofarma 30g Creme Vaginal",
      "url": "https://www.drogariavenancio.com.br/promestrieno-10mg-g-eurofarma-30g-creme-vaginal/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 72.49,
      "nome": "Promestrieno Creme 30g Com 20aplicadores Eurofarma Genérico",
      "url": "https://www.panvel.com/panvel/promestrieno-creme-30g-com-20aplicadores-eurofarma-generico/p-704570",
      "disponivel": true
    }
  },
  "med-00632": {
    "paguemenos": {
      "preco": 14.18,
      "nome": "Propionato De Clobetasol Pomada 30g Genérico Ems",
      "url": "https://www.paguemenos.com.br/propionato-de-clobetasol-pomada-30g-generico-ems/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 14.18,
      "nome": "Propionato De Clobetasol Pomada 30g Genérico Ems",
      "url": "https://www.extrafarma.com.br/propionato-de-clobetasol-pomada-30g-generico-ems/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 18.25,
      "nome": "Propionato de Clobetasol 0,5mg/g Genérico Germed 30g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/propionato-de-clobetasol-0-5mg-g-generico-germed-pomada-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.65,
      "nome": "Propionato de Clobetasol 0,5mg/g Genérico Germed 30g Pomada",
      "url": "https://www.drogariaspacheco.com.br/propionato-de-clobetasol-0-5mg-g-generico-germed-pomada-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10.69,
      "nome": "Propionato De Clobetasol 0,5mg Medley 30g Creme",
      "url": "https://www.drogariavenancio.com.br/propionato-de-clobetasol-05mg-medley-30g-creme/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 22.49,
      "nome": "Propionato De Clobetasol 0,5mg/g Pomada Dermatologica 30g Germed Generico",
      "url": "https://www.panvel.com/panvel/propionato-de-clobetasol-05mg-g-pomada-dermatologica-30g-germed-generico/p-106317",
      "disponivel": true
    }
  },
  "med-00634": {
    "paguemenos": {
      "preco": 98.99,
      "nome": "Xinafoato de Salmeterol 25mcg + Propionato de Fluticasona 50mcg Suspensão Aerossol para Inalação 120 Doses Genérico Glenmark",
      "url": "https://www.paguemenos.com.br/salmeterol-25mcg-mais-fluticasona-50mcg-120-doses-generico-glenmark/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 98.99,
      "nome": "Xinafoato de Salmeterol 25mcg + Propionato de Fluticasona 50mcg Suspensão Aerossol para Inalação 120 Doses Genérico Glenmark",
      "url": "https://www.extrafarma.com.br/salmeterol-25mcg-mais-fluticasona-50mcg-120-doses-generico-glenmark/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 106.22,
      "nome": "Combiwave Xinafoato de Salmeterol 25mcg + Propionato de Fluticasona 50mcg 120 Doses Suspensão Aerossol",
      "url": "https://www.drogariasaopaulo.com.br/combiwave-25mcg-50mcg-glenmark-120-doses-suspensao-aerossol-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 88.48,
      "nome": "Combiwave Xinafoato de Salmeterol 25mcg + Propionato de Fluticasona 50mcg 120 Doses Suspensão Aerossol",
      "url": "https://www.drogariaspacheco.com.br/combiwave-25mcg-50mcg-glenmark-120-doses-suspensao-aerossol-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 90.29,
      "nome": "Combiwave 25/50mcg Glenmark Suspensão Aerossol 120 Doses",
      "url": "https://www.drogariavenancio.com.br/combiwave-25mcg---50mcg-sus-aer-120acion/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 96.9,
      "nome": "Combiwave Propionato De Fluticasona 25mcg + Xinafoato Salmeterol 125mcg Suspensão Aerossol 120 Doses",
      "url": "https://www.panvel.com/panvel/combiwave-propionato-de-fluticasona-25mcg-xinafoato-salmeterol-125mcg-suspensao-aerossol-120-doses/p-94479",
      "disponivel": true
    }
  },
  "med-00633": {
    "paguemenos": {
      "preco": 101.99,
      "nome": "Flutivate 0,5mg/g Creme 30g",
      "url": "https://www.paguemenos.com.br/flutivate-creme-30g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 101.99,
      "nome": "Flutivate 0,5mg/g Creme 30g",
      "url": "https://www.extrafarma.com.br/flutivate-creme-30g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 64.92,
      "nome": "Flutivate Propionato De Fluticasona 0,5mg/g 15g Creme",
      "url": "https://www.drogariasaopaulo.com.br/flutivate-gsk-creme-15g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 53.69,
      "nome": "Flutivate Propionato De Fluticasona 0,5mg/g 15g Creme",
      "url": "https://www.drogariaspacheco.com.br/flutivate-gsk-creme-15g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 126.26,
      "nome": "Flutivate Creme 0,5mg 30g",
      "url": "https://www.drogariavenancio.com.br/flutivate-creme-05mg-30g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 65.02,
      "nome": "Flutivate Propionato De Fluticasona 0,5mg/g Creme 15g",
      "url": "https://www.panvel.com/panvel/flutivate-propionato-de-fluticasona-05mg-g-creme-15g/p-400981",
      "disponivel": true
    }
  },
  "med-00635": {
    "paguemenos": {
      "preco": 96.99,
      "nome": "Pantogar 20mg + 20mg + 20mg + 100mg + 60mg + 60mg 30 Cápsulas Duras",
      "url": "https://www.paguemenos.com.br/pantogar-com-30-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 96.99,
      "nome": "Pantogar 20mg + 20mg + 20mg + 100mg + 60mg + 60mg 30 Cápsulas Duras",
      "url": "https://www.extrafarma.com.br/pantogar-com-30-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 107.79,
      "nome": "Pantogar 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/pantogar-biolab--30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 93.09,
      "nome": "Pantogar 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/pantogar-biolab--30-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 94.99,
      "nome": "Pantogar Biolab 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/pantogar-biolab-30-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 173.31,
      "nome": "Pantogar Ômega 90 Cápsulas",
      "url": "https://www.panvel.com/panvel/pantogar-omega-90-capsulas/p-85200",
      "disponivel": true
    }
  },
  "med-00636": {
    "paguemenos": {
      "preco": 44.59,
      "nome": "Tiorfan 100mg 9 Cápsulas",
      "url": "https://www.paguemenos.com.br/tiorfan-100mg-com-9-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 44.59,
      "nome": "Tiorfan 100mg 9 Cápsulas",
      "url": "https://www.extrafarma.com.br/tiorfan-100mg-com-9-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 25.29,
      "nome": "Racecadotrila 100mg Genérico Biosintética 9 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/racecadotrila-100mg-bionsinteti-9-capsulas/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 27.86,
      "nome": "Racecadotrila 100mg Genérico Biosintética 9 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/racecadotrila-100mg-bionsinteti-9-capsulas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 46.29,
      "nome": "Tiorfan 100mg Bagó 9 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/tiorfan-100mg-bago-9-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 54.69,
      "nome": "Avide Racecadotril 100mg 9 Comprimidos",
      "url": "https://www.panvel.com/panvel/avide-racecadotril-100mg-9-comprimidos/p-444110",
      "disponivel": true
    }
  },
  "med-00637": {
    "paguemenos": {
      "preco": 3.99,
      "nome": "Epocler Sabor Morango 10ml",
      "url": "https://www.paguemenos.com.br/epocler-sabor-morango-30-flaconete-10ml-cada/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 3.99,
      "nome": "Epocler Sabor Morango 10ml",
      "url": "https://www.extrafarma.com.br/epocler-sabor-morango-30-flaconete-10ml-cada/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.49,
      "nome": "Epocler sabor Abacaxi 10ml",
      "url": "https://www.drogariavenancio.com.br/epocler-flaconete-com-10ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 4.19,
      "nome": "Epocler Abacaxi Flaconete 10ml",
      "url": "https://www.panvel.com/panvel/epocler-abacaxi-flaconete-10ml/p-76937",
      "disponivel": true
    }
  },
  "med-00638": {
    "paguemenos": {
      "preco": 2.89,
      "nome": "Xantinon Complex 40mg/ml + 53mg/ml + 50mg/ml Solução Oral 1 Flaconete 10ml",
      "url": "https://www.paguemenos.com.br/xantinon-complex-flaconete-com-10ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 2.89,
      "nome": "Xantinon Complex 40mg/ml + 53mg/ml + 50mg/ml Solução Oral 1 Flaconete 10ml",
      "url": "https://www.extrafarma.com.br/xantinon-complex-flaconete-com-10ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 4.25,
      "nome": "Xantinon Complex União Química 1 Flaconete 10ml",
      "url": "https://www.drogariavenancio.com.br/xantinon-complex-flaconete-10ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 5.85,
      "nome": "Xantinon 10 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/xantinon-10-comprimidos-revestidos/p-91715",
      "disponivel": true
    }
  },
  "med-00640": {
    "paguemenos": {
      "preco": 32.79,
      "nome": "Rahime 8mg 10 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/rahime-8mg-com-10-comprimidos-psicotropicos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 32.79,
      "nome": "Rahime 8mg 10 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/rahime-8mg-com-10-comprimidos-psicotropicos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 31.64,
      "nome": "Rahime Ramelteona 8mg 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/rahime-8mg-apsen-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.13,
      "nome": "Rahime Ramelteona 8mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/rahime-8mg-apsen-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 32.59,
      "nome": "Rahime 8mg 10 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/rahime-8mg-10-comprimidos-revestidos-/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 96.68,
      "nome": "Rahime Ramelteona 8mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/rahime-ramelteona-8mg-30-comprimidos-revestidos/p-103907",
      "disponivel": true
    }
  },
  "med-00641": {
    "paguemenos": {
      "preco": 62.99,
      "nome": "Ramipril 5mg 30 Comprimidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/ramipril-5mg-com-30-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 62.99,
      "nome": "Ramipril 5mg 30 Comprimidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/ramipril-5mg-com-30-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 69.59,
      "nome": "Naprix-D Ramipril 5mg + Hidroclorotiazida 25mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/naprix-d-5-25-0mg-libbs-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 62.61,
      "nome": "Naprix A Ramipril 10mg + Besilato de Anlodipino 5mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/naprix-a-1005mg-libbs-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 62.69,
      "nome": "Naprix A 5mg + 5mg Libbs 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/naprix-a-5mg---5mg-libbs-30-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 56.51,
      "nome": "Naprix D Ramipril 5mg + Hidroclorotiazida 12,5mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/naprix-d-ramipril-5mg-hidroclorotiazida-125mg-30-capsulas/p-106907",
      "disponivel": true
    }
  },
  "med-00644": {
    "paguemenos": {
      "preco": 18.99,
      "nome": "Rifamicina SV Sódica 10mg/ml Solução Tópica Spray 20ml Genérico EMS",
      "url": "https://www.paguemenos.com.br/rifamicina-10mg-spray-20ml-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.99,
      "nome": "Rifamicina SV Sódica 10mg/ml Solução Tópica Spray 20ml Genérico EMS",
      "url": "https://www.extrafarma.com.br/rifamicina-10mg-spray-20ml-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 20.99,
      "nome": "Rifamicina SV Sódica 10mg/ml Genérico Germed 20ml Solução Spray",
      "url": "https://www.drogariasaopaulo.com.br/rifamicina-sv-sodica-10mg-ml-generico-germed-solucao-spray-20ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 20.99,
      "nome": "Rifamicina SV Sódica 10mg/ml Genérico Germed 20ml Solução Spray",
      "url": "https://www.drogariaspacheco.com.br/rifamicina-sv-sodica-10mg-ml-generico-germed-solucao-spray-20ml/p",
      "disponivel": true
    }
  },
  "med-00645": {
    "paguemenos": {
      "preco": 18.99,
      "nome": "Rifamicina SV Sódica 10mg/ml Solução Tópica Spray 20ml Genérico Medley",
      "url": "https://www.paguemenos.com.br/rifamicina-sv-sodica-10mg-ml-spray-20ml-generico-medleymais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.99,
      "nome": "Rifamicina SV Sódica 10mg/ml Solução Tópica Spray 20ml Genérico Medley",
      "url": "https://www.extrafarma.com.br/rifamicina-sv-sodica-10mg-ml-spray-20ml-generico-medleymais/p",
      "disponivel": true
    }
  },
  "med-00646": {
    "paguemenos": {
      "preco": 24.29,
      "nome": "Rifaldin 300mg 6 Cápsulas Duras",
      "url": "https://www.paguemenos.com.br/rifaldin-300mg-com-6-capsulas-mais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 24.29,
      "nome": "Rifaldin 300mg 6 Cápsulas Duras",
      "url": "https://www.extrafarma.com.br/rifaldin-300mg-com-6-capsulas-mais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 26.2,
      "nome": "Rifaldin Rifampicina 300mg 6 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/rifaldin-300mg-6-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 21.45,
      "nome": "Rifaldin Rifampicina 300mg 6 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/rifaldin-300mg-6-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 21.89,
      "nome": "Rifaldin 300mg C/ 6 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/rifaldin-300mg-c--6-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.41,
      "nome": "Rifaldin Rifampicina 300mg 6 Cápsulas",
      "url": "https://www.panvel.com/panvel/rifaldin-rifampicina-300mg-6-capsulas/p-159522",
      "disponivel": true
    }
  },
  "med-00648": {
    "paguemenos": {
      "preco": 36.29,
      "nome": "Risedronato Sódico 150mg 1 Comprimido Revestido Genérico Germed",
      "url": "https://www.paguemenos.com.br/risedronato-sodico-150mg-com-1-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 36.29,
      "nome": "Risedronato Sódico 150mg 1 Comprimido Revestido Genérico Germed",
      "url": "https://www.extrafarma.com.br/risedronato-sodico-150mg-com-1-comprimidos-generico-germed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 38.05,
      "nome": "Risedronato Sódico 150mg Genérico EMS 1 Comprimido",
      "url": "https://www.drogariasaopaulo.com.br/risedronato-sodico-150mg-generico-ems-1-comprimido/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 38.05,
      "nome": "Risedronato Sódico 150mg Genérico EMS 1 Comprimido",
      "url": "https://www.drogariaspacheco.com.br/risedronato-sodico-150mg-generico-ems-1-comprimido/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 41.99,
      "nome": "Risedronato Sodico 150mg Eurofarma 1 Comprimido Revestido",
      "url": "https://www.drogariavenancio.com.br/risedronato-sodico-150mg-eurofarma-1-comprimido-revestido/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 43.49,
      "nome": "Risedronato Sodico 150mg 1 Comprimido Revestido Germed Generico",
      "url": "https://www.panvel.com/panvel/risedronato-sodico-150mg-1-comprimido-revestido-germed-generico/p-102868",
      "disponivel": true
    }
  },
  "med-00649": {
    "paguemenos": {
      "preco": 9.79,
      "nome": "Risperidona 2mg 30 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/risperidona-2mg-com-30-comprimidos-generico-actavis/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.79,
      "nome": "Risperidona 2mg 30 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/risperidona-2mg-com-30-comprimidos-generico-actavis/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 56.3,
      "nome": "Zargus Risperidona 2mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/zargus-2mg-biosinteti-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.72,
      "nome": "Perlid Risperidona 2mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/perlid-2mg-prati-donaduzzi-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 6.99,
      "nome": "Risperidona 1mg Geolab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/risperidona-1mg-30com--c1--g--geolab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 24.99,
      "nome": "Risperidona 1mg 30 Comprimidos Medley Generico C1",
      "url": "https://www.panvel.com/panvel/risperidona-1mg-30-comprimidos-medley-generico-c1/p-883330",
      "disponivel": true
    }
  },
  "med-00650": {
    "paguemenos": {
      "preco": 45.49,
      "nome": "Rivaroxabana 20mg 30 Comprimidos Revestidos Genérico Torrent",
      "url": "https://www.paguemenos.com.br/rivaroxabana-20mg-com-30-comprimidos-generico-torrent/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 45.49,
      "nome": "Rivaroxabana 20mg 30 Comprimidos Revestidos Genérico Torrent",
      "url": "https://www.extrafarma.com.br/rivaroxabana-20mg-com-30-comprimidos-generico-torrent/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 55.36,
      "nome": "Vynaxa Rivaroxabana 10mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/vynaxa-10mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 16.26,
      "nome": "Vynaxa Rivaroxabana 10mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/vynaxa-10mg-ems-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 24.69,
      "nome": "Rivaroxabana 20mg Pharlab 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/rivaroxabana-20mg-pharlab-30-comprimidos-revestidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 35.99,
      "nome": "Rivaroxabana 20mg 30 Comprimidos Revestidos Ems Generico",
      "url": "https://www.panvel.com/panvel/rivaroxabana-20mg-30-comprimidos-revestidos-ems-generico/p-105124",
      "disponivel": true
    }
  },
  "med-00652": {
    "paguemenos": {
      "preco": 49.84,
      "nome": "Runner Rosuvastatina Cálcica 5mg 60 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/runner-rosuvastatina-calcica-5mg-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 49.84,
      "nome": "Runner Rosuvastatina Cálcica 5mg 60 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/runner-rosuvastatina-calcica-5mg-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 33,
      "nome": "Runner Rosuvastatina Cálcica 10mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/runner-10mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 30.17,
      "nome": "Rosucor Rosuvastatina Cálcica 5mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/rosucor-5mg-torrent-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00653": {
    "paguemenos": {
      "preco": 103.99,
      "nome": "Trezete Rosuvastatina 20mg + Ezetimiba 10mg 30 comprimidos",
      "url": "https://www.paguemenos.com.br/trezete-20mais10mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 103.99,
      "nome": "Trezete Rosuvastatina 20mg + Ezetimiba 10mg 30 comprimidos",
      "url": "https://www.extrafarma.com.br/trezete-20mais10mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 70.55,
      "nome": "Rosucor EZE Rosuvastatina Cálcica 5mg + Ezetimiba 10mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/rosucor-eze-5mg-10mg-torrent-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 47.39,
      "nome": "Runner Eze Rosuvastatina Cálcica 5mg + Ezetimiba 10mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/runner-eze-rosuvastatina-calcica-5mg-ezetimiba-10mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 68.34,
      "nome": "Rosucor Eze Ezetimiba 10mg + Rosuvastatina Cálcica 5mg 30 Cápsulas Duras",
      "url": "https://www.panvel.com/panvel/rosucor-eze-ezetimiba-10mg-rosuvastatina-calcica-5mg-30-capsulas-duras/p-93531",
      "disponivel": true
    }
  },
  "med-00654": {
    "paguemenos": {
      "preco": 70.49,
      "nome": "Ferropurum 20mg/ml Solução Injetável 5 Ampolas 5ml",
      "url": "https://www.paguemenos.com.br/ferropurum-20mg-ml-solucao-injetavel-com-5-ampolas-de-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 70.49,
      "nome": "Ferropurum 20mg/ml Solução Injetável 5 Ampolas 5ml",
      "url": "https://www.extrafarma.com.br/ferropurum-20mg-ml-solucao-injetavel-com-5-ampolas-de-5ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.49,
      "nome": "Sadol Líquido Adulto de Martin 400ml",
      "url": "https://www.drogariasaopaulo.com.br/sadol-liquido-adulto-de-martin-400ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 70.65,
      "nome": "Ferropurum Sacarato De Óxido Férrico 20mg/ml 5 Ampolas De 5ml Solução Injetável",
      "url": "https://www.drogariaspacheco.com.br/ferropurum-20mg-ml-blau-farmaceutica-5-ampolas-de-5ml-solucao-injetavel/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 72.09,
      "nome": "Ferropurum 20mg/ml Blau Solução Injetável 5 Ampolas De 5ml",
      "url": "https://www.drogariavenancio.com.br/ferropurum-20mg-ml-blau-solucao-injetavel-5-ampolas-de-5ml-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 82.65,
      "nome": "Ferropurum Injetável Sacarato De Óxido Férrico 20mg/ml 5 Ampolas 5ml",
      "url": "https://www.panvel.com/panvel/ferropurum-injetavel-sacarato-de-oxido-ferrico-20mg-ml-5-ampolas-5ml/p-102502",
      "disponivel": true
    }
  },
  "med-00655": {
    "paguemenos": {
      "preco": 22.99,
      "nome": "Florent 100mg 12 Cápsulas Duras",
      "url": "https://www.paguemenos.com.br/florent-100mg-capsulas12/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 22.99,
      "nome": "Florent 100mg 12 Cápsulas Duras",
      "url": "https://www.extrafarma.com.br/florent-100mg-capsulas12/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 26.49,
      "nome": "Florent 200mg Cifarma 6 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/florent-200mg-6cap/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 39.27,
      "nome": "Floratil Pediátrico 200mg Com 4 Sachês 1g",
      "url": "https://www.panvel.com/panvel/floratil-pediatrico-200mg-com-4-saches-1g/p-23434",
      "disponivel": true
    }
  },
  "med-00488": {
    "paguemenos": {
      "preco": 15.49,
      "nome": "Florent 200mg Sabor Morango Pó para Solução Oral 4 Envelopes 1g",
      "url": "https://www.paguemenos.com.br/florent-200mg-com-4-envelopes/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.49,
      "nome": "Florent 200mg Sabor Morango Pó para Solução Oral 4 Envelopes 1g",
      "url": "https://www.extrafarma.com.br/florent-200mg-com-4-envelopes/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 22.79,
      "nome": "Repoflor 200mg Legrand Pediátrico 4 Envelopes Com 1g",
      "url": "https://www.drogariavenancio.com.br/repoflor-200-mg-pediatrico-legrand-4-envelopes/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 21.99,
      "nome": "Flomicin 200 Mg 4 Saches 1g",
      "url": "https://www.panvel.com/panvel/flomicin-200-mg-4-saches-1g/p-119323",
      "disponivel": true
    }
  },
  "med-00657": {
    "paguemenos": {
      "preco": 28.99,
      "nome": "Gelo-Bio 0,0333ml/ml + 0,0333g/ml + 0,0083g/ml Aerossol 60ml",
      "url": "https://www.paguemenos.com.br/gelo-bio-aerosol-60ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 28.99,
      "nome": "Gelo-Bio 0,0333ml/ml + 0,0333g/ml + 0,0083g/ml Aerossol 60ml",
      "url": "https://www.extrafarma.com.br/gelo-bio-aerosol-60ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 27.79,
      "nome": "Gelol Pomada 20g",
      "url": "https://www.drogariavenancio.com.br/gelol-hypera-20g-pomada/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.1,
      "nome": "Gelol Pomada 20g",
      "url": "https://www.panvel.com/panvel/gelol-pomada-20g/p-16900",
      "disponivel": true
    }
  },
  "med-00658": {
    "paguemenos": {
      "preco": 14.39,
      "nome": "Secnidazol 1000mg 2 Comprimidos Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/secnidazol-1000mg-com-2-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 14.39,
      "nome": "Secnidazol 1000mg 2 Comprimidos Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/secnidazol-1000mg-com-2-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 19.99,
      "nome": "Secnidazol 1000mg Genérico Pharlab 2 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/secnidazol-1000mg-generico-pharlab-2-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 9.45,
      "nome": "Secnidazol 1000mg Genérico Sandoz 2 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/secnidazol-100mg-generico-sandoz-2-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.99,
      "nome": "Secnidazol 1000mg Pharlab 2 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/secnidazol-1000mg-2com--g--pharlab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.49,
      "nome": "Secnidazol 1000mg 2 Comprimidos Sandoz Generico",
      "url": "https://www.panvel.com/panvel/secnidazol-1000mg-2-comprimidos-sandoz-generico/p-834490",
      "disponivel": true
    }
  },
  "med-00659": {
    "paguemenos": {
      "preco": 760.99,
      "nome": "Poviztra 0,25mg Semaglutida 4 Doses Injetáveis",
      "url": "https://www.paguemenos.com.br/poviztra-semaglutida-0-25mg-0-68mg-ml-solucao-injetavel-1-5-ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 760.99,
      "nome": "Poviztra 0,25mg Semaglutida 4 Doses Injetáveis",
      "url": "https://www.extrafarma.com.br/poviztra-semaglutida-0-25mg-0-68mg-ml-solucao-injetavel-1-5-ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 841.9,
      "nome": "Poviztra Semaglutida 0,25mg 1 Sistema de Aplicação + 4 Agulhas",
      "url": "https://www.drogariasaopaulo.com.br/poviztra-semaglutida-0-25mg-1-sistema-aplicacao-4-agulhas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 841.9,
      "nome": "Poviztra Semaglutida 0,25mg 1 Sistema de Aplicação + 4 Agulhas",
      "url": "https://www.drogariaspacheco.com.br/poviztra-semaglutida-0-25mg-1-sistema-aplicacao-4-agulhas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 1223.85,
      "nome": "Rybelsus Semaglutida 14mg 30 Comprimidos Novo Nordisk",
      "url": "https://www.drogariavenancio.com.br/semaglutida-14mg-rybelsus-via-oral-com-30-comprimidos-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 393.61,
      "nome": "Ozivy 0,25mg/0,5mg Semaglutida 1,5ml 1 Caneta Injetável + 6 Agulhas Geladeira",
      "url": "https://www.panvel.com/panvel/ozivy-025mg-05mg-semaglutida-15ml-1-caneta-injetavel-6-agulhas-geladeira/p-84708",
      "disponivel": true
    }
  },
  "med-00661": {
    "paguemenos": {
      "preco": 19.99,
      "nome": "Laxante Fitoterápico Tamarine 12mg 4 cápsulas",
      "url": "https://www.paguemenos.com.br/tamarine-12mg-com-04-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.99,
      "nome": "Laxante Fitoterápico Tamarine 12mg 4 cápsulas",
      "url": "https://www.extrafarma.com.br/tamarine-12mg-com-04-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 77.19,
      "nome": "Tamarine Fibras Kids Morango 240ml",
      "url": "https://www.drogariasaopaulo.com.br/fibra-infantil-tamarine-kids-120ml-hypermarcas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 77.19,
      "nome": "Tamarine Fibras Kids Morango 240ml",
      "url": "https://www.drogariaspacheco.com.br/fibra-infantil-tamarine-kids-120ml-hypermarcas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 65.49,
      "nome": "Naturetti Laxante Fitoterápico 16 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/regulad-menstrual-saude-mulher-150ml/p",
      "disponivel": true
    }
  },
  "med-00667": {
    "paguemenos": {
      "preco": 67.49,
      "nome": "Criscy 4UI Pó Liofilizado para Solução Injetável 1 Frasco-Ampola + 1 Ampola Diluente",
      "url": "https://www.paguemenos.com.br/criscy-4ui-po-liofilo-mais-1-frasco-de-ampola-diluente-psicotropico-p-c5/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 67.49,
      "nome": "Criscy 4UI Pó Liofilizado para Solução Injetável 1 Frasco-Ampola + 1 Ampola Diluente",
      "url": "https://www.extrafarma.com.br/criscy-4ui-po-liofilo-mais-1-frasco-de-ampola-diluente-psicotropico-p-c5/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1474.8,
      "nome": "Norditropin Nordiflex 10mg Novo Nordisk 1,5ml de Solução de Uso Subcutâneo + 1 Sistema de Aplicação",
      "url": "https://www.drogariaspacheco.com.br/norditropin-nordiflex-10mg-novo-nordisk-15ml-de-solucao-de-uso-subcutaneo--1-sistema-de-aplicacao/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 691.5,
      "nome": "Omnitrope 15mg Somatropina Solução Injetável Com 1,5ml",
      "url": "https://www.drogariavenancio.com.br/omnitrope-15mg-solucao-injetavel-com-15ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 76.86,
      "nome": "Criscy 4ui Po Liofilizado 1 Frasco + Diluente 1 Ml Gelad C5",
      "url": "https://www.panvel.com/panvel/criscy-4ui-po-liofilizado-1-frasco-diluente-1-ml-gelad-c5/p-106392",
      "disponivel": true
    }
  },
  "med-00673": {
    "paguemenos": {
      "preco": 18.39,
      "nome": "Succinato de Sumatriptana 50mg 2 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.paguemenos.com.br/succinato-de-sumatriptana-50mg-com-2-comprimidos-generico-actavis/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.39,
      "nome": "Succinato de Sumatriptana 50mg 2 Comprimidos Revestidos Genérico Biolab",
      "url": "https://www.extrafarma.com.br/succinato-de-sumatriptana-50mg-com-2-comprimidos-generico-actavis/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 25.99,
      "nome": "Succinato de Sumatriptana 50mg Genérico Biolab 2 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/succinato-de-sumatriptana-50mg-c-02-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 23.09,
      "nome": "Succinato de Sumatriptana 50mg Genérico Biolab 2 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/succinato-de-sumatriptana-50mg-c-02-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 24.99,
      "nome": "Succinato de sumatriptana 50mg 2 comprimidos Biolab",
      "url": "https://www.drogariavenancio.com.br/succinato-de-sumatriptana-50mg-actavis-2-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 35.07,
      "nome": "Sumax Succinato De Sumatriptana 50mg 2 Comprimidos",
      "url": "https://www.panvel.com/panvel/sumax-succinato-de-sumatriptana-50mg-2-comprimidos/p-321826",
      "disponivel": true
    }
  },
  "med-00671": {
    "paguemenos": {
      "preco": 15.49,
      "nome": "Succinato De Metoprolol 25mg 30 Comprimidos Revestidos Genérico Cimed",
      "url": "https://www.paguemenos.com.br/succinato-de-metoprolol-25mg-30-comprimidos-revestidos-generico-cimed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.49,
      "nome": "Succinato De Metoprolol 25mg 30 Comprimidos Revestidos Genérico Cimed",
      "url": "https://www.extrafarma.com.br/succinato-de-metoprolol-25mg-30-comprimidos-revestidos-generico-cimed/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 23.49,
      "nome": "Succinato De Metoprolol 25mg Genérico Pharlab 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/succinato-de-metoprolol-25mg-generico-pharlab-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 29,
      "nome": "Dozoito Succinato De Metoprolol 25mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/dozoito-25mg-biolab-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 19.39,
      "nome": "Quenzor 25mg Libbs 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/quenzor-25mg-libbs-30-capsulas-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 17.49,
      "nome": "Succinato De Metoprolol 25mg 30 Comprimidos Revestidos Liberação Prolongada Pharlab Genérico",
      "url": "https://www.panvel.com/panvel/succinato-de-metoprolol-25mg-30-comprimidos-revestidos-liberacao-prolongada-pharlab-generico/p-108864",
      "disponivel": true
    }
  },
  "med-00672": {
    "paguemenos": {
      "preco": 78.99,
      "nome": "Succinato de Solifenacina 5mg 30 Comprimidos Revestidos Genérico Ranbaxy",
      "url": "https://www.paguemenos.com.br/succinato-de-solifenacina-5mg-com-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 78.99,
      "nome": "Succinato de Solifenacina 5mg 30 Comprimidos Revestidos Genérico Ranbaxy",
      "url": "https://www.extrafarma.com.br/succinato-de-solifenacina-5mg-com-30-comprimidos-generico-ranbaxy/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 91.59,
      "nome": "Succinato De Solifenacina 5mg Genérico Medley 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/succinato-de-solifenacina-5mg-generico-medley-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 113.97,
      "nome": "Involu Succinato de Solifenacina 10mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/involu-10mg-eurofarma-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 86.95,
      "nome": "Succinato de Solifenacina 5mg Nova Química 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/succin-solifenacina-5mg-30com--g--multilab/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 107.17,
      "nome": "Involu Succinato De Solifenacina 5mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/involu-succinato-de-solifenacina-5mg-30-comprimidos-revestidos/p-91518",
      "disponivel": true
    }
  },
  "med-00674": {
    "paguemenos": {
      "preco": 11.59,
      "nome": "Dermazine 1% Creme Dermatológico 15g",
      "url": "https://www.paguemenos.com.br/creme-dermatologico-dermazine-1porcento-15g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 11.59,
      "nome": "Dermazine 1% Creme Dermatológico 15g",
      "url": "https://www.extrafarma.com.br/creme-dermatologico-dermazine-1porcento-15g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 12.63,
      "nome": "Dermazine 1% Sulfadiazina de Prata 10mg/g 15g Creme Dermatológico",
      "url": "https://www.drogariasaopaulo.com.br/dermazine-1-cristalia-15g-creme-dermatologico/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.65,
      "nome": "Dermazine 1% Sulfadiazina de Prata 10mg/g 15g Creme Dermatológico",
      "url": "https://www.drogariaspacheco.com.br/dermazine-1-cristalia-15g-creme-dermatologico/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.89,
      "nome": "Dermazine 1% Cristália Creme Dermatológico 15g",
      "url": "https://www.drogariavenancio.com.br/dermazine-1--cr-derm-15g--ab-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.73,
      "nome": "Dermazine Sulfadiazina De Prata 10mg/g Creme 15g",
      "url": "https://www.panvel.com/panvel/dermazine-sulfadiazina-de-prata-10mg-g-creme-15g/p-89248",
      "disponivel": true
    }
  },
  "med-00675": {
    "paguemenos": {
      "preco": 128.99,
      "nome": "Azulfin 500mg 60 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/azulfin-500mg-com-60-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 128.99,
      "nome": "Azulfin 500mg 60 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/azulfin-500mg-com-60-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 118.89,
      "nome": "Azulfin 500mg Apsen 60 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/azulfin-500mg-apsen-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 128.24,
      "nome": "Azulfin Sulfasalazina 500mg 60 Cápsulas",
      "url": "https://www.panvel.com/panvel/azulfin-sulfasalazina-500mg-60-capsulas/p-341215",
      "disponivel": true
    }
  },
  "med-00677": {
    "paguemenos": {
      "preco": 12.99,
      "nome": "Atropina 1% Colírio 5ml",
      "url": "https://www.paguemenos.com.br/atropina-1porcento-colirio-com-5ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.99,
      "nome": "Atropina 1% Colírio 5ml",
      "url": "https://www.extrafarma.com.br/atropina-1porcento-colirio-com-5ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 12.39,
      "nome": "Atropina Atropina 0,5% Colírio 5ml",
      "url": "https://www.panvel.com/panvel/atropina-atropina-05-colirio-5ml/p-156914",
      "disponivel": true
    }
  },
  "med-00678": {
    "paguemenos": {
      "preco": 111.99,
      "nome": "Sulfato de Glicosamina 1,5g Pó para Solução 30 Sachês Genérico Nova Química",
      "url": "https://www.paguemenos.com.br/sulfato-de-glicosamina-1-5g-com-30-saches-generico-novaquimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 111.99,
      "nome": "Sulfato de Glicosamina 1,5g Pó para Solução 30 Sachês Genérico Nova Química",
      "url": "https://www.extrafarma.com.br/sulfato-de-glicosamina-1-5g-com-30-saches-generico-novaquimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 114.39,
      "nome": "Sulfato de Glicosamina 1,5g Genérico Nova Química 30 Sachês Pó Para Solução De Uso Oral",
      "url": "https://www.drogariasaopaulo.com.br/sulfato-de-glicosamina-generico-mepha-1-5g-30-saches/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 113.29,
      "nome": "Sulfato de Glicosamina 1,5g Genérico Nova Química 30 Sachês Pó Para Solução De Uso Oral",
      "url": "https://www.drogariaspacheco.com.br/sulfato-de-glicosamina-generico-mepha-1-5g-30-saches/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 127.89,
      "nome": "Sulfato de glicosamina Nova quimica 1,5g 30 Saches",
      "url": "https://www.drogariavenancio.com.br/sulfato-de-glicosamina-nova-quimica-15g-30-saches/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 294.83,
      "nome": "Glucoreumin Sulfato De Glicosamina 1500mg Pó Para Solução Oral 30 Sachês",
      "url": "https://www.panvel.com/panvel/glucoreumin-sulfato-de-glicosamina-1500mg-po-para-solucao-oral-30-saches/p-907080",
      "disponivel": true
    }
  },
  "med-00680": {
    "paguemenos": {
      "preco": 108.99,
      "nome": "Ártico Caps 500mg + 400mg 30 Cápsulas Moles",
      "url": "https://www.paguemenos.com.br/artico-500mgmais400mg-com-30-capsulas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 108.99,
      "nome": "Ártico Caps 500mg + 400mg 30 Cápsulas Moles",
      "url": "https://www.extrafarma.com.br/artico-500mgmais400mg-com-30-capsulas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 122.91,
      "nome": "Artico Sulfato de Glicosamina 500mg + Sulfato de Condroitina 400mg 30 Cápsulas Moles",
      "url": "https://www.drogariasaopaulo.com.br/artico-500mg---400mg-eurofarma-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 106.17,
      "nome": "Condroflex Sulfato de Glicosamina 1,5g + Sulfato Sódico de Condroitina 1,2g 30 Sachês Sabor Abacaxi",
      "url": "https://www.drogariaspacheco.com.br/condroflex-zodiac-sabor-abacaxi-30-saches/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 105.19,
      "nome": "Artico 500mg + 400mg Eurofarma 30 Cápsulas Moles",
      "url": "https://www.drogariavenancio.com.br/artico-500mg---400mg-eurofarma-30-capsulas-moles/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 112.55,
      "nome": "Condroflex Sulfato De Glicosamina 1,5g + Sulfato De Condroitina 1,2g Sabor Tangerina 30 Sachês",
      "url": "https://www.panvel.com/panvel/condroflex-sulfato-de-glicosamina-15g-sulfato-de-condroitina-12g-sabor-tangerina-30-saches/p-113690",
      "disponivel": true
    }
  },
  "med-00679": {
    "paguemenos": {
      "preco": 224.99,
      "nome": "Ártico 1,5g + 1,2g Sabor Laranja Granulado 30 Sachês",
      "url": "https://www.paguemenos.com.br/artico-1-5gmais1-2g-laranja-com-30-saches/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 224.99,
      "nome": "Ártico 1,5g + 1,2g Sabor Laranja Granulado 30 Sachês",
      "url": "https://www.extrafarma.com.br/artico-1-5gmais1-2g-laranja-com-30-saches/p",
      "disponivel": true
    }
  },
  "med-00682": {
    "paguemenos": {
      "preco": 6.19,
      "nome": "Sulfato de Neomicina 5mg/g + Bacitracina Zíncica 250UI/g Pomada Dermatológica 15g Genérico EMS",
      "url": "https://www.paguemenos.com.br/sulfato-neomicina-maisbacitracina-pomada-15g-generico-ems-mais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 6.19,
      "nome": "Sulfato de Neomicina 5mg/g + Bacitracina Zíncica 250UI/g Pomada Dermatológica 15g Genérico EMS",
      "url": "https://www.extrafarma.com.br/sulfato-neomicina-maisbacitracina-pomada-15g-generico-ems-mais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 18.16,
      "nome": "Sulfato de Neomicina Genérico Prati Donaduzzi 20gr Pomada",
      "url": "https://www.drogariasaopaulo.com.br/sulfato-de-neomicina-generico-prati-donaduzzi-20g-pomada/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 18.34,
      "nome": "Sulfato de Neomicina Genérico Prati Donaduzzi 20gr Pomada",
      "url": "https://www.drogariaspacheco.com.br/sulfato-de-neomicina-generico-prati-donaduzzi-20g-pomada/p",
      "disponivel": true
    }
  },
  "med-00681": {
    "paguemenos": {
      "preco": 54.99,
      "nome": "Sulfato de Hidroxicloroquina 400mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/sulfato-de-hidroxicloroquina-400mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 54.99,
      "nome": "Sulfato de Hidroxicloroquina 400mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/sulfato-de-hidroxicloroquina-400mg-com-30-comprimidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 67.75,
      "nome": "Sulfato de Hidroxicloroquina 400mg Genérico Medley 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/sulfato-de-hidroxicloroquina-400mg-generico-medley-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 67.75,
      "nome": "Sulfato de Hidroxicloroquina 400mg Genérico Medley 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/sulfato-de-hidroxicloroquina-400mg-generico-medley-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 18.19,
      "nome": "Reuquinol 400mg 6 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/reuquinol-400mg-6cpr/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 100.49,
      "nome": "Reuquinol Sulfato De Hidroxicloroquina 400mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/reuquinol-sulfato-de-hidroxicloroquina-400mg-30-comprimidos-revestidos/p-801390",
      "disponivel": true
    }
  },
  "med-00688": {
    "paguemenos": {
      "preco": 7.99,
      "nome": "Sulfato de Salbutamol 0,48mg/ml Sabor Laranja Xarope 120ml Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/sulfato-de-salbutamol-xarope-120ml-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 7.99,
      "nome": "Sulfato de Salbutamol 0,48mg/ml Sabor Laranja Xarope 120ml Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/sulfato-de-salbutamol-xarope-120ml-generico-prati-donaduzzi/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 5.19,
      "nome": "Sulfato de Salbutamol 0,4mg/ml Genérico Neo Química 120ml Xarope",
      "url": "https://www.drogariasaopaulo.com.br/sulfato-de-salbutamol-2mg-5ml-generico-neo-quimica-xarope-120ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 3.78,
      "nome": "Sulfato de Salbutamol 0,4mg/ml Genérico EMS 120ml",
      "url": "https://www.drogariaspacheco.com.br/sulfato-de-salbutamol-0-4mg-ml-generico-ems-120ml/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 8.79,
      "nome": "Sulfato de Salbutamol 0,48mg/ml Prati Donaduzzi Xarope 120ml",
      "url": "https://www.drogariavenancio.com.br/sulf-salbutamol-048mg-ml-xpe-120ml--g--prati-d/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 17.9,
      "nome": "Aerodini Spray Sulfato Salbutamol 100mcg/dose Suspensão Aerossol 200 Doses",
      "url": "https://www.panvel.com/panvel/aerodini-spray-sulfato-salbutamol-100mcg-dose-suspensao-aerossol-200-doses/p-964480",
      "disponivel": true
    }
  },
  "med-00684": {
    "paguemenos": {
      "preco": 5.79,
      "nome": "Sulfato de Neomicina 5mg/g + Bacitracina Zíncica 250UI/g Pomada Dermatológica 15g Genérico Cimed",
      "url": "https://www.paguemenos.com.br/sulfato-de-neomicinamaisbacitracina-pomada-15g-generico-cimed/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.79,
      "nome": "Sulfato de Neomicina 5mg/g + Bacitracina Zíncica 250UI/g Pomada Dermatológica 15g Genérico Cimed",
      "url": "https://www.extrafarma.com.br/sulfato-de-neomicinamaisbacitracina-pomada-15g-generico-cimed/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 26.89,
      "nome": "Nebacetin 15g Pomada",
      "url": "https://www.drogariavenancio.com.br/nebacetin-15g-pomada/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 27.12,
      "nome": "Nebacetin Pomada 15g",
      "url": "https://www.panvel.com/panvel/nebacetin-pomada-15g/p-17434",
      "disponivel": true
    }
  },
  "med-00683": {
    "paguemenos": {
      "preco": 5.79,
      "nome": "Sulfato de Neomicina 5mg/g + Bacitracina Zíncica 250UI/g Pomada Dermatológica 15g Genérico Medley",
      "url": "https://www.paguemenos.com.br/neomicinamaisbacit-pomada-15g-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.79,
      "nome": "Sulfato de Neomicina 5mg/g + Bacitracina Zíncica 250UI/g Pomada Dermatológica 15g Genérico Medley",
      "url": "https://www.extrafarma.com.br/neomicinamaisbacit-pomada-15g-generico-medley/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 7.99,
      "nome": "Sulfato De Neomicina + Bacitracina Ems 15g Pomada",
      "url": "https://www.drogariavenancio.com.br/sulfato-de-neomicina---bacitracina-ems-15g-pomada/p",
      "disponivel": true
    }
  },
  "med-00689": {
    "paguemenos": {
      "preco": 25.29,
      "nome": "Sulfato de Salbutamol 100mcg Suspensão Aerossol 200 Doses Genérico Glenmark",
      "url": "https://www.paguemenos.com.br/sulfato-de-salbutamol-com-100mcg-dose-generico-glenmark/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 25.29,
      "nome": "Sulfato de Salbutamol 100mcg Suspensão Aerossol 200 Doses Genérico Glenmark",
      "url": "https://www.extrafarma.com.br/sulfato-de-salbutamol-com-100mcg-dose-generico-glenmark/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 28.99,
      "nome": "Aerogold Sulfato de Salbutamol 100mcg/dose 1 Frasco com 19ml + Dispositivo Inalatório",
      "url": "https://www.drogariasaopaulo.com.br/aerogold-100mcg-dose-glenmark-1-frasco-com-19ml---dispositivo-inalatorio/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 33.11,
      "nome": "Aerogold Sulfato de Salbutamol 100mcg/dose 1 Frasco com 19ml + Dispositivo Inalatório",
      "url": "https://www.drogariaspacheco.com.br/aerogold-100mcg-dose-glenmark-1-frasco-com-19ml---dispositivo-inalatorio/p",
      "disponivel": true
    }
  },
  "med-00690": {
    "paguemenos": {
      "preco": 56.99,
      "nome": "Clenil Compositum HFA 50mcg + 100mcg Spray 200 Doses",
      "url": "https://www.paguemenos.com.br/clenil-compositum-hfa-15-5g-spray-com-200-doses/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 56.99,
      "nome": "Clenil Compositum HFA 50mcg + 100mcg Spray 200 Doses",
      "url": "https://www.extrafarma.com.br/clenil-compositum-hfa-15-5g-spray-com-200-doses/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 65.98,
      "nome": "Clenil Compositum HFA Dipropionato de Beclometasona 50mcg/dose + Salbutamol 100mcg/dose 200 Doses Suspensão Aerossol",
      "url": "https://www.drogariasaopaulo.com.br/clenil-compositum-spray-hfa-200-doses/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 41.67,
      "nome": "Clenil Compositum HFA Dipropionato de Beclometasona 50mcg/dose + Salbutamol 100mcg/dose 200 Doses Suspensão Aerossol",
      "url": "https://www.drogariaspacheco.com.br/clenil-compositum-spray-hfa-200-doses/p",
      "disponivel": true
    }
  },
  "med-00694": {
    "paguemenos": {
      "preco": 57.99,
      "nome": "Tacrolimo 0,1% 10g Genérico",
      "url": "https://www.paguemenos.com.br/tacrolimo-generico/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 57.99,
      "nome": "Tacrolimo 0,1% 10g Genérico",
      "url": "https://www.extrafarma.com.br/tacrolimo-generico/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 52.99,
      "nome": "Tacrolimo 0,1% Genérico Leo Pharma 10g Pomada Dermatológica",
      "url": "https://www.drogariasaopaulo.com.br/tacrolimo-0-1-leo-pharma-10g-pomada-dermatologica/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 78.88,
      "nome": "Tarfic Tacrolimo 1mg/g 10g Pomada",
      "url": "https://www.drogariaspacheco.com.br/tarfic-01mg-pomada-libbs-10g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 61.49,
      "nome": "Tacrolimo 1,0mg/g Pomada Dermatológica 10g Leo Pharma",
      "url": "https://www.drogariavenancio.com.br/tacrolimo-1mg-g-pom-der-10g--g--leo-pharma/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 63.92,
      "nome": "Tacrolimo 1mg/g Pomada Dermatológica 10g Leopharma Genérico",
      "url": "https://www.panvel.com/panvel/tacrolimo-1mg-g-pomada-dermatologica-10g-leopharma-generico/p-87800",
      "disponivel": true
    }
  },
  "med-00695": {
    "paguemenos": {
      "preco": 59.49,
      "nome": "Atobach 1mg/g Pomada Dermatológica 10g",
      "url": "https://www.paguemenos.com.br/atobach-0-1porcento-pomada-dermatologica-10g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 59.49,
      "nome": "Atobach 1mg/g Pomada Dermatológica 10g",
      "url": "https://www.extrafarma.com.br/atobach-0-1porcento-pomada-dermatologica-10g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 73.79,
      "nome": "Atobach Tacrolimo 1mg/g 10g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/atobach-pomada-dermatologica-1mg-g-germed-pharma-10g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 65.85,
      "nome": "Atobach Tacrolimo 1mg/g 10g Pomada",
      "url": "https://www.drogariaspacheco.com.br/atobach-pomada-dermatologica-1mg-g-germed-pharma-10g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 64.99,
      "nome": "Atobach 0,3mg/g Germed Pomada Dermatológica 10g",
      "url": "https://www.drogariavenancio.com.br/atobach-03mg-pom-10g-g-/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 74.41,
      "nome": "Atobach Tracolimo Monoidratado 0,1mg/mg Pomada 10g",
      "url": "https://www.panvel.com/panvel/atobach-tracolimo-monoidratado-01mg-mg-pomada-10g/p-110999",
      "disponivel": true
    }
  },
  "med-00696": {
    "paguemenos": {
      "preco": 5.59,
      "nome": "Tadalafila 20mg 4 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/tadalafila-20mg-com-4-comprimidos-genericos-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 5.59,
      "nome": "Tadalafila 20mg 4 Comprimidos Revestidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/tadalafila-20mg-com-4-comprimidos-genericos-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 18.69,
      "nome": "Tadalafila 20mg Genérico Prati-Donaduzzi 4 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/tadalafila-20mg-generico-prati-donaduzzi-4-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 18.73,
      "nome": "Tadalafila 20mg Genérico Eurofarma 4 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/tadalafila-20mg-generico-eurofarma-4-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 5.89,
      "nome": "Tadalafila 20mg Ems 1 Comprimido",
      "url": "https://www.drogariavenancio.com.br/tadalafila-20mg-1com--g--ems/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 5.99,
      "nome": "Tadalafila 20mg 1 Comprimido Revestido Neo Quimica Generico",
      "url": "https://www.panvel.com/panvel/tadalafila-20mg-1-comprimido-revestido-neo-quimica-generico/p-119303",
      "disponivel": true
    }
  },
  "med-00698": {
    "paguemenos": {
      "preco": 26.79,
      "nome": "Tartarato de Metoprolol 100mg 30 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.paguemenos.com.br/tartarato-metoprolol-100mg-com30-gn/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.79,
      "nome": "Tartarato de Metoprolol 100mg 30 Comprimidos Revestidos Genérico Aché",
      "url": "https://www.extrafarma.com.br/tartarato-metoprolol-100mg-com30-gn/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 13.42,
      "nome": "Tartarato de Metoprolol 100mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/tartarato-de-metoprolol-100mg-generico-ems-20-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 9.74,
      "nome": "Tartarato de Metoprolol 100mg Genérico EMS 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/tartarato-de-metoprolol-100mg-generico-ems-20-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 20.47,
      "nome": "Tartarato De Metoprolol 100mg Aché 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/tartarato-de-metoprolol-100mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 63.42,
      "nome": "Seloken Tartarato De Metoprolol 100mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/seloken-tartarato-de-metoprolol-100mg-30-comprimidos/p-415120",
      "disponivel": true
    }
  },
  "med-00702": {
    "paguemenos": {
      "preco": 707.99,
      "nome": "Temozolomida 20mg Com 5 Capsulas Gelatinosas Dura Generico Sunpharma",
      "url": "https://www.paguemenos.com.br/temozolomida-20mg-com-5-capsulas-gelatinosas-dura-generico-sunpharma/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 707.99,
      "nome": "Temozolomida 20mg Com 5 Capsulas Gelatinosas Dura Generico Sunpharma",
      "url": "https://www.extrafarma.com.br/temozolomida-20mg-com-5-capsulas-gelatinosas-dura-generico-sunpharma/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 71.59,
      "nome": "Temozolomida 5mg Genérico Eurofarma 5 Cápsulas Duras",
      "url": "https://www.drogariasaopaulo.com.br/temozolomida-5mg-generico-eurofarma-5-capsulas-duras/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 71.59,
      "nome": "Temozolomida 5mg Genérico Eurofarma 5 Cápsulas Duras",
      "url": "https://www.drogariaspacheco.com.br/temozolomida-5mg-generico-eurofarma-5-capsulas-duras/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 175.89,
      "nome": "Temozolomida 5mg Eurofarma 5 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/temozolomida-5mg-eurofarma-5-capsulas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 170.38,
      "nome": "Temozolomida 5mg 5 Capsulas Eurofarma Generico",
      "url": "https://www.panvel.com/panvel/temozolomida-5mg-5-capsulas-eurofarma-generico/p-110714",
      "disponivel": true
    }
  },
  "med-00703": {
    "paguemenos": {
      "preco": 28.49,
      "nome": "Tenoxicam 20mg 10 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/tenoxicam-20mg-com-10-comprimidos-genericos-neo-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 28.49,
      "nome": "Tenoxicam 20mg 10 Comprimidos Revestidos Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/tenoxicam-20mg-com-10-comprimidos-genericos-neo-quimica/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 22.17,
      "nome": "Teflan 20mg União Química 5 comprimidos revestidos",
      "url": "https://www.drogariasaopaulo.com.br/teflan-20mg-uniao-quimica-5-comprimidos-revestidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 21.41,
      "nome": "Teflan 20mg União Química 5 comprimidos revestidos",
      "url": "https://www.drogariaspacheco.com.br/teflan-20mg-uniao-quimica-5-comprimidos-revestidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 48.69,
      "nome": "Teflan 20mg Genom 10 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/teflan-20mg-genom-10-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.99,
      "nome": "Tenoxicam 20mg 10 Comprimidos Revestidos Neoquímica Genérico",
      "url": "https://www.panvel.com/panvel/tenoxicam-20mg-10-comprimidos-revestidos-neoquimica-generico/p-518130",
      "disponivel": true
    }
  },
  "med-00704": {
    "paguemenos": {
      "preco": 176.99,
      "nome": "Teriflunomida 14mg Com 30 Comprimidos",
      "url": "https://www.paguemenos.com.br/teriflunomida-14mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 176.99,
      "nome": "Teriflunomida 14mg Com 30 Comprimidos",
      "url": "https://www.extrafarma.com.br/teriflunomida-14mg-com-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9104.5,
      "nome": "Aubagio 14mg Com 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/aubagio-14mg-com-30-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 7039.08,
      "nome": "Teriflunomida 14mg 30 Comprimidos Natcofarma Genérico C1",
      "url": "https://www.panvel.com/panvel/teriflunomida-14mg-30-comprimidos-natcofarma-generico-c1/p-95750",
      "disponivel": true
    }
  },
  "med-00727": {
    "paguemenos": {
      "preco": 342.99,
      "nome": "Undecilato de Testosterona 250mg/ml 1 Ampola 4ml Eurofarma Genérico",
      "url": "https://www.paguemenos.com.br/undecilato-de-testosterona-250mg-ml-com-1-ampola-com-4ml-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 342.99,
      "nome": "Undecilato de Testosterona 250mg/ml 1 Ampola 4ml Eurofarma Genérico",
      "url": "https://www.extrafarma.com.br/undecilato-de-testosterona-250mg-ml-com-1-ampola-com-4ml-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 390.38,
      "nome": "Undecilato de Testosterona 250mg/ml Genérico Neo Química 1 ampola 4ml",
      "url": "https://www.drogariasaopaulo.com.br/undecilato-de-testosterona-250mg-ml-generico-neo-quimica-1-ampola-4ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 379.99,
      "nome": "Undecilato de Testosterona 250mg/ml Genérico Neo Química 1 ampola 4ml",
      "url": "https://www.drogariaspacheco.com.br/undecilato-de-testosterona-250mg-ml-generico-neo-quimica-1-ampola-4ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 400,
      "nome": "Undecilato de Testosterona 250mg/ml Eurofarma Solução Injetável 4ml",
      "url": "https://www.drogariavenancio.com.br/testosterona-250mg-ml-injetavel-ampola-4ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 445.72,
      "nome": "Hormus 250mg/ml (undecilato De Testosterona) 1 Ampola De 4 Ml",
      "url": "https://www.panvel.com/panvel/hormus-250mg-ml-undecilato-de-testosterona-1-ampola-de-4-ml/p-118793",
      "disponivel": true
    }
  },
  "med-00707": {
    "paguemenos": {
      "preco": 26.99,
      "nome": "Tiadol 50mg/g Pomada 20g",
      "url": "https://www.paguemenos.com.br/tiadol-pomada-50mg-20g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 26.99,
      "nome": "Tiadol 50mg/g Pomada 20g",
      "url": "https://www.extrafarma.com.br/tiadol-pomada-50mg-20g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 43.89,
      "nome": "Foldan 50mg/g União Química Pomada 45g",
      "url": "https://www.drogariavenancio.com.br/foldan-50mg-g-pom-45g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 45.89,
      "nome": "Foldan Pomada 45g",
      "url": "https://www.panvel.com/panvel/foldan-pomada-45g/p-16845",
      "disponivel": true
    }
  },
  "med-00708": {
    "paguemenos": {
      "preco": 37.29,
      "nome": "Tibolona 2,5mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/tibolona-2-5mg-com-30-comprimidos-genericos-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 37.29,
      "nome": "Tibolona 2,5mg 30 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/tibolona-2-5mg-com-30-comprimidos-genericos-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 42.89,
      "nome": "Tibolona 2,5mg Genérico Neo Química 28 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/tibolona-2-5mg-generico-neo-quimica-28-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 32.55,
      "nome": "Tibolona 2,5mg Genérico EMS 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/tibolona-2-5mg-ems-generico-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 29.32,
      "nome": "Tibolona 2,5 Mg Ems 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/tibolona-25-mg-ems-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 52.49,
      "nome": "Tibolona 2,5mg 28 Comprimidos Neoquimica Genéricos",
      "url": "https://www.panvel.com/panvel/tibolona-25mg-28-comprimidos-neoquimica-genericos/p-653130",
      "disponivel": true
    }
  },
  "med-00709": {
    "paguemenos": {
      "preco": 219.99,
      "nome": "Tiag 90mg 60 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/tiag-90mg-com-60-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 219.99,
      "nome": "Tiag 90mg 60 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/tiag-90mg-com-60-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 237.45,
      "nome": "Brilinta 90mg Astrazeneca 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/brilinta-90mg-30-comprimidos-revestidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 184.64,
      "nome": "Brilinta 90mg Astrazeneca 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/brilinta-90mg-30-comprimidos-revestidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 294.29,
      "nome": "Artag 90mg Libbs 60 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/artag-90mg-libbs-60com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 222.99,
      "nome": "Ticagrelor 90mg 60 Comprimidos Revestidos Torrent Genérico",
      "url": "https://www.panvel.com/panvel/ticagrelor-90mg-60-comprimidos-revestidos-torrent-generico/p-92205",
      "disponivel": true
    }
  },
  "med-00710": {
    "paguemenos": {
      "preco": 17.49,
      "nome": "Coltrax 2mg/ml Solução Injetável 3 Ampolas 2ml",
      "url": "https://www.paguemenos.com.br/coltrax-injetavel-com-3-unidades-de-2mg/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 17.49,
      "nome": "Coltrax 2mg/ml Solução Injetável 3 Ampolas 2ml",
      "url": "https://www.extrafarma.com.br/coltrax-injetavel-com-3-unidades-de-2mg/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.51,
      "nome": "Coltrax Tiocolchicosídeo 2mg/ml 2ml 3 Ampolas Injetáveis",
      "url": "https://www.drogariasaopaulo.com.br/coltrax-injetavel-2mg-sanofi-aventis-3x2ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 17.69,
      "nome": "Coltrax Tiocolchicosídeo 2mg/ml 2ml 3 Ampolas Injetáveis",
      "url": "https://www.drogariaspacheco.com.br/coltrax-injetavel-2mg-sanofi-aventis-3x2ml/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 61.99,
      "nome": "Coltrax 4mg Sanofi 20 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/coltrax-4mg-sanofi-aventis-20-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 71.39,
      "nome": "Coltrax Tiocolchicosido 4mg 20 Comprimidos",
      "url": "https://www.panvel.com/panvel/coltrax-tiocolchicosido-4mg-20-comprimidos/p-382264",
      "disponivel": true
    }
  },
  "med-00711": {
    "paguemenos": {
      "preco": 37.29,
      "nome": "Tioconazol+tinidazol Creme Vaginal 35g Com 7 Aplicadores Genérico Neo Química",
      "url": "https://www.paguemenos.com.br/tioconazolmaistinidazol-creme-vaginal-35g-com-7-aplicadores-generico-neo-quimica/p",
      "disponivel": false
    },
    "extrafarma": {
      "preco": 37.29,
      "nome": "Tioconazol+tinidazol Creme Vaginal 35g Com 7 Aplicadores Genérico Neo Química",
      "url": "https://www.extrafarma.com.br/tioconazolmaistinidazol-creme-vaginal-35g-com-7-aplicadores-generico-neo-quimica/p",
      "disponivel": false
    },
    "drogariasaopaulo": {
      "preco": 101.91,
      "nome": "Takil Tioconazol 100mg/5g + Tinidazol 150mg/5g 35g Creme Vaginal + 7 Aplicadores",
      "url": "https://www.drogariasaopaulo.com.br/takil-creme-vaginal-7-aplicadores-marjan-35g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 90.15,
      "nome": "Takil Tioconazol 100mg/5g + Tinidazol 150mg/5g 35g Creme Vaginal + 7 Aplicadores",
      "url": "https://www.drogariaspacheco.com.br/takil-creme-vaginal-7-aplicadores-marjan-35g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 45.89,
      "nome": "Tioconazol + Tinidazol 20mg/g + 30mg/g Creme Vaginal 35g + 7 Aplicadores Germed Pharma",
      "url": "https://www.drogariavenancio.com.br/tioconazol-tinidazol-cr-35g--g--germed/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 50.99,
      "nome": "Tioconazol/tinidazol 20mg/30mg Creme Vaginal 35g 7 Aplicadores Geolab Genérico",
      "url": "https://www.panvel.com/panvel/tioconazol-tinidazol-20mg-30mg-creme-vaginal-35g-7-aplicadores-geolab-generico/p-98443",
      "disponivel": true
    }
  },
  "med-00712": {
    "paguemenos": {
      "preco": 1738.99,
      "nome": "Mounjaro 2.5mg Tirzepatida Solução Injetável 4 Doses",
      "url": "https://www.paguemenos.com.br/mounjaro-2-5mg-com-4-seringas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1738.99,
      "nome": "Mounjaro 2.5mg Tirzepatida Solução Injetável 4 Doses",
      "url": "https://www.extrafarma.com.br/mounjaro-2-5mg-com-4-seringas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 1928.84,
      "nome": "Mounjaro Tirzepatida 2,5mg/0,5ml 4 Canetas Preenchidas Solução Injetável Subcutânea",
      "url": "https://www.drogariasaopaulo.com.br/mounjaro-2-5mg-eli-lilly-4-seringa-preenchidas-0-5ml-solucao-injetavel-subcutaneo---4-canetas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 1928.84,
      "nome": "Mounjaro Tirzepatida 2,5mg/0,5ml 4 Canetas Preenchidas Solução Injetável Subcutânea",
      "url": "https://www.drogariaspacheco.com.br/mounjaro-25mg-solucao-injetavel--subcutanea-4-seringa-pree-eli-lilly/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 1926.37,
      "nome": "Mounjaro 2,5mg Eli Lilly Solução Injetável 4 Seringas Preenchidas 0,5ml + 4 Canetas Aplicadoras",
      "url": "https://www.drogariavenancio.com.br/mounjaro-25mg-sol-inj-4ser-preenc-05ml---4can-aplic/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 1905.6,
      "nome": "Mounjaro 2,5mg Tirzepatida 0,5ml 4 Canetas Injetáveis Geladeira",
      "url": "https://www.panvel.com/panvel/mounjaro-25mg-tirzepatida-05ml-4-canetas-injetaveis-geladeira/p-89179",
      "disponivel": true
    }
  },
  "med-00715": {
    "paguemenos": {
      "preco": 18.69,
      "nome": "Topiramato 25mg 60 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.paguemenos.com.br/topiramato-25mg-comprimidos60-generico-emsms-p/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 18.69,
      "nome": "Topiramato 25mg 60 Comprimidos Revestidos Genérico EMS",
      "url": "https://www.extrafarma.com.br/topiramato-25mg-comprimidos60-generico-emsms-p/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 29.49,
      "nome": "Topiramato 50mg Genérico Zydus Brasil 60 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/topiramato-50mg-generico-zydus-brasil-60-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 39.99,
      "nome": "Topiramato 25mg Genérico Eurofarma 60 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/topiramato-25mg-generico-eurofarma-60-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 22.99,
      "nome": "Topiramato 25mg Eurofarma 60 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/topiramato-25mg-eurofarma-60-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 41.49,
      "nome": "Topiramato 25mg 60 Comprimidos Revestidos Nova Quimica Generico C1",
      "url": "https://www.panvel.com/panvel/topiramato-25mg-60-comprimidos-revestidos-nova-quimica-generico-c1/p-106786",
      "disponivel": true
    }
  },
  "med-00716": {
    "paguemenos": {
      "preco": 101.7,
      "nome": "Tosilato De Edoxabana Monoidratada 30mg 30 Comprimidos Revestidos Genérico Althaia",
      "url": "https://www.paguemenos.com.br/tosilato-de-edoxabana-monoidratada-30mg-30-comprimidos-revestidos-generico-althaia/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 101.7,
      "nome": "Tosilato De Edoxabana Monoidratada 30mg 30 Comprimidos Revestidos Genérico Althaia",
      "url": "https://www.extrafarma.com.br/tosilato-de-edoxabana-monoidratada-30mg-30-comprimidos-revestidos-generico-althaia/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 92.45,
      "nome": "Tosilato de Edoxabana Monoidratado 30mg Genérico Althaia 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/tosilato-de-edoxabana-monoidratado-30mg-generico-althaia-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 104.31,
      "nome": "Tosilato de Edoxabana Monoidratado 30mg Genérico Althaia 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/tosilato-de-edoxabana-monoidratado-30mg-generico-althaia-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 100.99,
      "nome": "Tosilato de Edoxabana Mono 30mg 30 Comprimidos Althaia",
      "url": "https://www.drogariavenancio.com.br/tosilato-de-edoxabana-mono-60mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 220.36,
      "nome": "Roteas Tosilato De Edoxabana Monoidratado 30mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/roteas-tosilato-de-edoxabana-monoidratado-30mg-30-comprimidos-revestidos/p-96492",
      "disponivel": true
    }
  },
  "med-00718": {
    "paguemenos": {
      "preco": 934.99,
      "nome": "Prosigne 100UI Pó Liofilizado para Solução Injetável 1 Frasco-Ampola",
      "url": "https://www.paguemenos.com.br/prosigne-100ui-po-liofilo-com-1frasco-ampola-com-po-para-solucao-de-uso-intramuscular/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 934.99,
      "nome": "Prosigne 100UI Pó Liofilizado para Solução Injetável 1 Frasco-Ampola",
      "url": "https://www.extrafarma.com.br/prosigne-100ui-po-liofilo-com-1frasco-ampola-com-po-para-solucao-de-uso-intramuscular/p",
      "disponivel": true
    }
  },
  "med-00719": {
    "paguemenos": {
      "preco": 40.59,
      "nome": "Travoprosta 0,04mg/ml Solução Oftálmica 2,5ml Genérico Geolab",
      "url": "https://www.paguemenos.com.br/travoprosta-solucao-oftalmica-0-04mg-ml-frasco-com-2-5ml-generico-geolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 40.59,
      "nome": "Travoprosta 0,04mg/ml Solução Oftálmica 2,5ml Genérico Geolab",
      "url": "https://www.extrafarma.com.br/travoprosta-solucao-oftalmica-0-04mg-ml-frasco-com-2-5ml-generico-geolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 72.51,
      "nome": "Travoptic Travoprosta 0,04mg/ml 2,5ml",
      "url": "https://www.drogariasaopaulo.com.br/travoptic-0-04mg-ml-geolab-2-5ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 40.98,
      "nome": "Travoprosta 0,04mg/mL Genérico Geolab 1 Frasco com 2,5mL de Solução",
      "url": "https://www.drogariaspacheco.com.br/travoprosta-0-04mg-ml-generico-geolab-1-frasco-com-2-5ml-de-solucao/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 40.98,
      "nome": "Travoprosta 0,04mg/ml Geolab Solução Oftálmica 2,5ml",
      "url": "https://www.drogariavenancio.com.br/travoprosta-0-04mg-ml-geolab-solucao-oftalmica-2-5-ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 41.99,
      "nome": "Travoprosta 0,04mg/ml Solucao Oftalmica 2,5ml Geolab Generico",
      "url": "https://www.panvel.com/panvel/travoprosta-004mg-ml-solucao-oftalmica-25ml-geolab-generico/p-107349",
      "disponivel": true
    }
  },
  "med-00723": {
    "paguemenos": {
      "preco": 9.99,
      "nome": "Sulfametoxazol 400mg + Trimetoprima 80mg 20 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.paguemenos.com.br/sulfametoxazol-400mgmaistrimetoprima-80mg-com-20-comprimidos-generico-prati-donaduzzi-mais/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.99,
      "nome": "Sulfametoxazol 400mg + Trimetoprima 80mg 20 Comprimidos Genérico Prati-Donaduzzi",
      "url": "https://www.extrafarma.com.br/sulfametoxazol-400mgmaistrimetoprima-80mg-com-20-comprimidos-generico-prati-donaduzzi-mais/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 31.14,
      "nome": "Bactrim Sulfametoxazol 40mg/ml + Trimetoprima 8mg/ml 100ml Suspensão Oral",
      "url": "https://www.drogariasaopaulo.com.br/bactrim-pediatrico-100ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 25.37,
      "nome": "Bactrim Sulfametoxazol 40mg/ml + Trimetoprima 8mg/ml 100ml Suspensão Oral",
      "url": "https://www.drogariaspacheco.com.br/bactrim-pediatrico-100ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10.89,
      "nome": "Sulfametoxazol + Trimetoprima 400mg + 80mg 20 Comprimidos Genérico Teuto",
      "url": "https://www.drogariavenancio.com.br/sulfametoxazol-trimetoprima-400mg-80mg-20-comprimidos-generico/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 18.49,
      "nome": "Sulfametoxazol+trimetoprima 400mg/80mg 20 Comprimidos Prati Donaduzzi Generico",
      "url": "https://www.panvel.com/panvel/sulfametoxazol-trimetoprima-400mg-80mg-20-comprimidos-prati-donaduzzi-generico/p-107797",
      "disponivel": true
    }
  },
  "med-00725": {
    "paguemenos": {
      "preco": 20.79,
      "nome": "Mydriacyl 1% Solução Oftálmica 5ml",
      "url": "https://www.paguemenos.com.br/mydriacyl-1porcento-5ml-solucao/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 20.79,
      "nome": "Mydriacyl 1% Solução Oftálmica 5ml",
      "url": "https://www.extrafarma.com.br/mydriacyl-1porcento-5ml-solucao/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 19.49,
      "nome": "Mydriacyl Alcon 5ml Solução Oftálmica Estéril",
      "url": "https://www.drogariavenancio.com.br/mydriacyl-alcon-5ml-solucao-oftalmica-esteril/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 21.35,
      "nome": "Ciclomidrin 1% Tropicamida 10mg/ml Colírio 5ml",
      "url": "https://www.panvel.com/panvel/ciclomidrin-1-tropicamida-10mg-ml-colirio-5ml/p-489490",
      "disponivel": true
    }
  },
  "med-00726": {
    "paguemenos": {
      "preco": 34.59,
      "nome": "Varicoss 15mg + 90mg 20 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.paguemenos.com.br/varicoss-15mg-cumarina-mais-90mg-troxerrutina-com-20-drageas/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 34.59,
      "nome": "Varicoss 15mg + 90mg 20 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.extrafarma.com.br/varicoss-15mg-cumarina-mais-90mg-troxerrutina-com-20-drageas/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 30.98,
      "nome": "Venalot H 5mg/ml + 50UI/ml Takeda 120g Creme",
      "url": "https://www.drogariasaopaulo.com.br/venalot-h-creme-takeda-120g/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 33.52,
      "nome": "Venalot H 5mg/ml + 50UI/ml Takeda 120g Creme",
      "url": "https://www.drogariaspacheco.com.br/venalot-h-creme-takeda-120g/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 66.09,
      "nome": "Venalot Takeda 30 Comprimidos De Liberação Prolongada",
      "url": "https://www.drogariavenancio.com.br/venalot-takeda-30-comprimidos-de-liberacao-prolongada/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 70.11,
      "nome": "Venalot Cumarina 15mg 30 Drágeas",
      "url": "https://www.panvel.com/panvel/venalot-cumarina-15mg-30-drageas/p-994680",
      "disponivel": true
    }
  },
  "med-00729": {
    "paguemenos": {
      "preco": 33723.15,
      "nome": "Stelara 130mg Solução Injetável 1 Frasco-Ampola 26ml",
      "url": "https://www.paguemenos.com.br/stelara-crohn-130mg-solucao-com-1-ampola-de-26ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 33723.15,
      "nome": "Stelara 130mg Solução Injetável 1 Frasco-Ampola 26ml",
      "url": "https://www.extrafarma.com.br/stelara-crohn-130mg-solucao-com-1-ampola-de-26ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12825.88,
      "nome": "Epyztek 90mg/mL Solução Injetável SC 0,5mL 1 Seringa Preenchida",
      "url": "https://www.drogariavenancio.com.br/epyztek-90mg-ml-solucao-injetavel-sc-0-5ml-1-seringa-preenchida/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 24271.86,
      "nome": "Stelara 45mg 1 Ampola 0,5ml",
      "url": "https://www.panvel.com/panvel/stelara-45mg-1-ampola-05ml/p-554980",
      "disponivel": true
    }
  },
  "med-00736": {
    "paguemenos": {
      "preco": 15.19,
      "nome": "Valerato de Betametasona 0,5mg/g + Sulfato de Gentamicina 1mg/g + Tolnaftato 10mg/g + Clioquinol 10mg/g Creme Dermatológico 20g Genérico EMS",
      "url": "https://www.paguemenos.com.br/valerato-betametasonamaissulfato-de-gentamicinamaisclioquinolmaistolnaftato-20g-creme-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.19,
      "nome": "Valerato de Betametasona 0,5mg/g + Sulfato de Gentamicina 1mg/g + Tolnaftato 10mg/g + Clioquinol 10mg/g Creme Dermatológico 20g Genérico EMS",
      "url": "https://www.extrafarma.com.br/valerato-betametasonamaissulfato-de-gentamicinamaisclioquinolmaistolnaftato-20g-creme-generico-ems/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.29,
      "nome": "Quadrilon Neo Química Creme 20g",
      "url": "https://www.drogariavenancio.com.br/quadrilon-neo-quimica-creme-20g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 21.49,
      "nome": "Valerato De Betametasona+ Sulfato De Gentamicina+ Tolnaftato+ Clioquinol Pomada 20g Germed Genérico",
      "url": "https://www.panvel.com/panvel/valerato-de-betametasona-sulfato-de-gentamicina-tolnaftato-clioquinol-pomada-20g-germed-generico/p-107505",
      "disponivel": true
    }
  },
  "med-00735": {
    "paguemenos": {
      "preco": 110.99,
      "nome": "Postec 2,5mg/g + 150utr/g Pomada 20g",
      "url": "https://www.paguemenos.com.br/postec-pomada-20g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 110.99,
      "nome": "Postec 2,5mg/g + 150utr/g Pomada 20g",
      "url": "https://www.extrafarma.com.br/postec-pomada-20g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 111.14,
      "nome": "Postec Valerato de Betametasona 2,5mg/g + Hialuronidase 150 UTR/g 20g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/postec-topico-apsen-20g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 114.65,
      "nome": "Postec Valerato de Betametasona 2,5mg/g + Hialuronidase 150 UTR/g 20g Pomada",
      "url": "https://www.drogariaspacheco.com.br/postec-topico-apsen-20g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 122.59,
      "nome": "Postec Apsen 20g Pomada",
      "url": "https://www.drogariavenancio.com.br/postec-apsen-20g-pomada/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 134.41,
      "nome": "Postec Valerato De Betametasona 2,5mg/g + Hialuronidase 150utr/g Pomada 20g",
      "url": "https://www.panvel.com/panvel/postec-valerato-de-betametasona-25mg-g-hialuronidase-150utr-g-pomada-20g/p-985400",
      "disponivel": true
    }
  },
  "med-00737": {
    "paguemenos": {
      "preco": 88.49,
      "nome": "Verutex B 20mg/g + 1mg/g Creme 15g",
      "url": "https://www.paguemenos.com.br/verutex-b-creme-15g/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 88.49,
      "nome": "Verutex B 20mg/g + 1mg/g Creme 15g",
      "url": "https://www.extrafarma.com.br/verutex-b-creme-15g/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 88.59,
      "nome": "Verutex B Ácido Fusídico 20mg/g + Valerato de Betametasona 1mg/g 15g Creme",
      "url": "https://www.drogariasaopaulo.com.br/verutex-b-creme-leo-pharma-15g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 88.09,
      "nome": "Verutex B Ácido Fusídico 20mg/g + Valerato de Betametasona 1mg/g 15g Creme",
      "url": "https://www.drogariaspacheco.com.br/verutex-b-creme-leo-pharma-15g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 89.89,
      "nome": "Verutex B Cr C/15 Gr",
      "url": "https://www.drogariavenancio.com.br/verutex-b-cr-c-15-gr/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 107.42,
      "nome": "Verutex B Ácido Fusídico 20mg/g + Valerato De Betametasona 1mg/g Creme 20mg",
      "url": "https://www.panvel.com/panvel/verutex-b-acido-fusidico-20mg-g-valerato-de-betametasona-1mg-g-creme-20mg/p-808160",
      "disponivel": true
    }
  },
  "med-00738": {
    "paguemenos": {
      "preco": 53.49,
      "nome": "Primogyna 1mg 28 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/primogyna-1mg-drageas-28-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 53.49,
      "nome": "Primogyna 1mg 28 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/primogyna-1mg-drageas-28-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 58.16,
      "nome": "Primogyna Valerato De Estradiol 1mg 28 Drágeas",
      "url": "https://www.drogariasaopaulo.com.br/primogyna-1mg-bayer-28-drageas-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 53.5,
      "nome": "Primogyna Valerato De Estradiol 1mg 28 Drágeas",
      "url": "https://www.drogariaspacheco.com.br/primogyna-1mg-bayer-28-drageas-/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 54.59,
      "nome": "Primogyna 1mg Bayer 28 Drágeas",
      "url": "https://www.drogariavenancio.com.br/primogyna-1mg-bayer-28-drageas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 52.64,
      "nome": "Primogyna Valerato De Estradiol 1mg 28 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/primogyna-valerato-de-estradiol-1mg-28-comprimidos-revestidos/p-450340",
      "disponivel": true
    }
  },
  "med-00739": {
    "paguemenos": {
      "preco": 62.49,
      "nome": "Qlaira 28 Comprimidos",
      "url": "https://www.paguemenos.com.br/qlaira-com-28-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 62.49,
      "nome": "Qlaira 28 Comprimidos",
      "url": "https://www.extrafarma.com.br/qlaira-com-28-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 63.51,
      "nome": "Qlaira Valerato de Estradiol 2mg + Dienogeste 3mg 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/qlaira-bayer-28-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 63.51,
      "nome": "Qlaira Valerato de Estradiol 2mg + Dienogeste 3mg 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/qlaira-bayer-28-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 62.87,
      "nome": "Qlaira Bayer 28 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/qlaira-bayer-28-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 74.17,
      "nome": "Qlaira Valerato De Estradiol + Dienogeste 28 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/qlaira-valerato-de-estradiol-dienogeste-28-comprimidos-revestidos/p-568070",
      "disponivel": true
    }
  },
  "med-00742": {
    "paguemenos": {
      "preco": 15.49,
      "nome": "Lavie 50mg/ml Sabor Cereja Xarope 100ml + Copo Dosador",
      "url": "https://www.paguemenos.com.br/lavie-50mg-ml-xarope-100ml/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 15.49,
      "nome": "Lavie 50mg/ml Sabor Cereja Xarope 100ml + Copo Dosador",
      "url": "https://www.extrafarma.com.br/lavie-50mg-ml-xarope-100ml/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 16.03,
      "nome": "Lavie Valproato De Sódio 50 Mg/Ml 100ml",
      "url": "https://www.drogariasaopaulo.com.br/lavie-50-mg-ml-prati-donaduzzi-100ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 14.76,
      "nome": "Lavie Valproato De Sódio 50 Mg/Ml 100ml",
      "url": "https://www.drogariaspacheco.com.br/lavie-50-mg-ml-prati-donaduzzi-100ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 6.31,
      "nome": "Valproato de sódio Hipolabor 100ml",
      "url": "https://www.drogariavenancio.com.br/valproato-de-sodio-hipolabor-100ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 16.66,
      "nome": "Lavie Valproato De Sódio 50mg Xarope 100ml",
      "url": "https://www.panvel.com/panvel/lavie-valproato-de-sodio-50mg-xarope-100ml/p-110926",
      "disponivel": true
    }
  },
  "med-00759": {
    "paguemenos": {
      "preco": 19.59,
      "nome": "Ácido Valproico 250mg 25 Cápsulas Moles Genérico Biolab",
      "url": "https://www.paguemenos.com.br/acido-valproico-250mg-com-25-capsulas-generico-biolab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 19.59,
      "nome": "Ácido Valproico 250mg 25 Cápsulas Moles Genérico Biolab",
      "url": "https://www.extrafarma.com.br/acido-valproico-250mg-com-25-capsulas-generico-biolab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 28.94,
      "nome": "Depakene Ácido Valproico 50mg/ml 100ml Xarope",
      "url": "https://www.drogariasaopaulo.com.br/depakene-xarope-250mg5ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 23.83,
      "nome": "Depakene Ácido Valproico 50mg/ml 100ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/depakene-xarope-250mg5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 24.32,
      "nome": "Depakene 250mg/5ml Abbott Xarope 100ml",
      "url": "https://www.drogariavenancio.com.br/depakene-250mg-5ml-xarope-com-100ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 25.8,
      "nome": "Depakene Valproato De Sódio 250mg 5ml Xarope 100ml",
      "url": "https://www.panvel.com/panvel/depakene-valproato-de-sodio-250mg-5ml-xarope-100ml/p-201839",
      "disponivel": true
    }
  },
  "med-00744": {
    "paguemenos": {
      "preco": 10.49,
      "nome": "Marevan 5mg 10 Comprimidos",
      "url": "https://www.paguemenos.com.br/marevan-5mg-com-10-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.49,
      "nome": "Marevan 5mg 10 Comprimidos",
      "url": "https://www.extrafarma.com.br/marevan-5mg-com-10-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 11.68,
      "nome": "Marevan Varfarina Sódica 5mg 10 comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/marevan-50mg-farmoquimica-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 9.69,
      "nome": "Marevan Varfarina Sódica 5mg 10 comprimidos",
      "url": "https://www.drogariaspacheco.com.br/marevan-50mg-farmoquimica-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.89,
      "nome": "Marevan 5mg Farmoquímica 10 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/marevan-5mg-farmoquimica-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.78,
      "nome": "Marevan Varfarina Sódica 5mg 10 Comprimidos",
      "url": "https://www.panvel.com/panvel/marevan-varfarina-sodica-5mg-10-comprimidos/p-45039",
      "disponivel": true
    }
  },
  "med-00745": {
    "paguemenos": {
      "preco": 56.99,
      "nome": "Vildagliptina 50mg 28 Comprimidos Genérico Natcofarma",
      "url": "https://www.paguemenos.com.br/vildagliptina-50mg-com-28-comprimidos-generico-natcofarma-brasil/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 56.99,
      "nome": "Vildagliptina 50mg 28 Comprimidos Genérico Natcofarma",
      "url": "https://www.extrafarma.com.br/vildagliptina-50mg-com-28-comprimidos-generico-natcofarma-brasil/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 64.45,
      "nome": "Vildagliptina 50mg Genérico Althaia 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/vildagliptina-50mg-generico-althaia-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 63.35,
      "nome": "Vildagliptina 50mg Genérico Natcofarma Brasil 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/vildagliptina-50mg-generico-natcofarma-brasil-28-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 48.19,
      "nome": "Vildagliptina Althaia 50mg 30 comprimidos",
      "url": "https://www.drogariavenancio.com.br/vildagliptina-althaia-50mg-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 60.49,
      "nome": "Vildagliptina 50mg 30 Comprimidos Althaia Genérico",
      "url": "https://www.panvel.com/panvel/vildagliptina-50mg-30-comprimidos-althaia-generico/p-97889",
      "disponivel": true
    }
  },
  "med-00733": {
    "paguemenos": {
      "preco": 1094.99,
      "nome": "Vacina Abrysvo Contra VSR Vírus Sincicial Respiratório",
      "url": "https://www.paguemenos.com.br/vacina-abrysvo-virus-sincicial-respiratorio-pfizer/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 1094.99,
      "nome": "Vacina Abrysvo Contra VSR Vírus Sincicial Respiratório",
      "url": "https://www.extrafarma.com.br/vacina-abrysvo-virus-sincicial-respiratorio-pfizer/p",
      "disponivel": true
    }
  },
  "med-00110": {
    "paguemenos": {
      "preco": 12.99,
      "nome": "Analgésico Melhoral Adulto 500mg + 30mg 8 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/melhoral-adulto-envelope-com-8-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.99,
      "nome": "Analgésico Melhoral Adulto 500mg + 30mg 8 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/melhoral-adulto-envelope-com-8-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00751": {
    "paguemenos": {
      "preco": 12.49,
      "nome": "Analgésico Doril 500mg + 30mg 6 Comprimidos",
      "url": "https://www.paguemenos.com.br/doril-envelope-com-6-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.49,
      "nome": "Analgésico Doril 500mg + 30mg 6 Comprimidos",
      "url": "https://www.extrafarma.com.br/doril-envelope-com-6-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00111": {
    "paguemenos": {
      "preco": 9.99,
      "nome": "Analgésico Doril Enxaqueca 250mg + 250mg + 65mg 4 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/doril-enxaqueca-envelope-com-4-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 9.99,
      "nome": "Analgésico Doril Enxaqueca 250mg + 250mg + 65mg 4 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/doril-enxaqueca-envelope-com-4-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00756": {
    "paguemenos": {
      "preco": 10.19,
      "nome": "Ácido Mefenâmico 500mg 12 Comprimidos Genérico Medley",
      "url": "https://www.paguemenos.com.br/acido-mefenamico-500mg-com-12-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 10.19,
      "nome": "Ácido Mefenâmico 500mg 12 Comprimidos Genérico Medley",
      "url": "https://www.extrafarma.com.br/acido-mefenamico-500mg-com-12-comprimidos-generico-medley/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 11.59,
      "nome": "Ácido Mefenâmico 500mg Genérico Medley 12 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/acido-mefenamico-500mg-generico-medley-12-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 12.09,
      "nome": "Ácido Mefenâmico 500mg Genérico Medley 12 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/acido-mefenamico-500mg-generico-medley-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 10.32,
      "nome": "Ácido Mefenamico 500mg Medley 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/acido-mefenamico-500mg-medley-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 11.99,
      "nome": "Ácido Mefenâmico 500mg 12 Comprimidos Medley Genérico",
      "url": "https://www.panvel.com/panvel/acido-mefenamico-500mg-12-comprimidos-medley-generico/p-659140",
      "disponivel": true
    }
  },
  "med-00757": {
    "paguemenos": {
      "preco": 34.36,
      "nome": "Ácido Tranexâmico 3% - Gel Creme 30g",
      "url": "https://www.paguemenos.com.br/acido-tranexamico-3-gel-creme-30g-171ak811e8267647/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 34.36,
      "nome": "Ácido Tranexâmico 3% - Gel Creme 30g",
      "url": "https://www.extrafarma.com.br/acido-tranexamico-3-gel-creme-30g-171ak811e8267647/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 34.36,
      "nome": "Ácido tranexâmico 3% - gel creme 30g",
      "url": "https://www.drogariasaopaulo.com.br/acido-tranexamico-3-gel-creme-30g-17tu66091858z713/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 34.36,
      "nome": "Ácido tranexâmico 3% - gel creme 30g",
      "url": "https://www.drogariaspacheco.com.br/acido-tranexamico-3-gel-creme-30g-1v76x608775382e5/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 56.61,
      "nome": "Acido Tranexâmico 250mg Ems 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/acido-tranexamico-250mg-ems-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 49.99,
      "nome": "Ácido Tranexâmico 250mg 12 Comprimidos Ems Genérico",
      "url": "https://www.panvel.com/panvel/acido-tranexamico-250mg-12-comprimidos-ems-generico/p-564950",
      "disponivel": true
    }
  },
  "med-00758": {
    "paguemenos": {
      "preco": 57.99,
      "nome": "Ursacol 50mg 30 Comprimidos",
      "url": "https://www.paguemenos.com.br/ursacol-50mg-cpd-30/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 57.99,
      "nome": "Ursacol 50mg 30 Comprimidos",
      "url": "https://www.extrafarma.com.br/ursacol-50mg-cpd-30/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 32.31,
      "nome": "Ursacol 50mg Zambon 20 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/ursacol-50mg-zambon-20-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 28.52,
      "nome": "Ursacol 50mg Zambon 20 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/ursacol-50mg-zambon-20-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 56.89,
      "nome": "Ursacol 50mg Zambon 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/ursacol-50mg-zambon-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 60.49,
      "nome": "Acido Ursodesoxicólico 150 Mg 30 Comprimidos Ranbaxy Generico",
      "url": "https://www.panvel.com/panvel/acido-ursodesoxicolico-150-mg-30-comprimidos-ranbaxy-generico/p-104930",
      "disponivel": true
    }
  },
  "med-00030": {
    "paguemenos": {
      "preco": 75.99,
      "nome": "Adapaleno + Peróxido De Benzoíla 30g Genérico Nova Química",
      "url": "https://www.paguemenos.com.br/adapaleno-mais-peroxido-de-benzoila-30g-generico-nova-quimica/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 75.99,
      "nome": "Adapaleno + Peróxido De Benzoíla 30g Genérico Nova Química",
      "url": "https://www.extrafarma.com.br/adapaleno-mais-peroxido-de-benzoila-30g-generico-nova-quimica/p",
      "disponivel": true
    }
  },
  "med-00223": {
    "paguemenos": {
      "preco": 176.44,
      "nome": "Dapagliflozina 10mg + Cloridrato De Metformina 1g 30 Comprimidos Revestidos De Liberação Prolongada Genérico Eurofarma",
      "url": "https://www.paguemenos.com.br/dapagliflozina-10mg-mais-cloridrato-de-metformina-1g-30-comprimidos-revestidos-de-liberacao-prolongada-generico-eurofarma/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 176.44,
      "nome": "Dapagliflozina 10mg + Cloridrato De Metformina 1g 30 Comprimidos Revestidos De Liberação Prolongada Genérico Eurofarma",
      "url": "https://www.extrafarma.com.br/dapagliflozina-10mg-mais-cloridrato-de-metformina-1g-30-comprimidos-revestidos-de-liberacao-prolongada-generico-eurofarma/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 177.65,
      "nome": "Xigduo XR Dapagliflozina 10mg + Cloridrato de Metformina 1000mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/xigduo-xr-10mg-1000mg-astrazeneca-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 183.26,
      "nome": "Xigduo XR Dapagliflozina 10mg + Cloridrato de Metformina 1000mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/xigduo-xr-10mg-1000mg-astrazeneca-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 188.9,
      "nome": "Xigduo Xr 10mg + 1000mg Astrazeneca 30 Comprimidos De Liberação Prolongada",
      "url": "https://www.drogariavenancio.com.br/xigduo-xr-10mg---1000mg-astrazeneca-30-comprimidos-de-liberacao-prolongada/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 229.99,
      "nome": "Xigduo Xr Dapagliflozina 5mg + Cloridrato De Metformina 1000mg 60 Comprimidos",
      "url": "https://www.panvel.com/panvel/xigduo-xr-dapagliflozina-5mg-cloridrato-de-metformina-1000mg-60-comprimidos/p-460570",
      "disponivel": true
    }
  },
  "med-00320": {
    "paguemenos": {
      "preco": 12.99,
      "nome": "Dicloridrato de Flunarizina 10mg 50 Comprimidos Genérico Vitamedic",
      "url": "https://www.paguemenos.com.br/dicloridrato-de-flunarizina-10mg-com-50-comprimidos-generico-vitamedic/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 12.99,
      "nome": "Dicloridrato de Flunarizina 10mg 50 Comprimidos Genérico Vitamedic",
      "url": "https://www.extrafarma.com.br/dicloridrato-de-flunarizina-10mg-com-50-comprimidos-generico-vitamedic/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 11.36,
      "nome": "Vertigium Dicloridrato De Flunarizina 10mg 50 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/vertigium-10mg-elite-50-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 11.36,
      "nome": "Vertigium Dicloridrato De Flunarizina 10mg 50 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/vertigium-10mg-elite-50-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.39,
      "nome": "Vertigium 10mg Neo Química 50 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/vertigium-10mg-neo-quimica-50-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00323": {
    "paguemenos": {
      "preco": 110.99,
      "nome": "Dicloridrato de Manidipino 10mg 30 Comprimidos Genérico Pharlab",
      "url": "https://www.paguemenos.com.br/dicloridrato-de-manidipino-10mg-com-30-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 110.99,
      "nome": "Dicloridrato de Manidipino 10mg 30 Comprimidos Genérico Pharlab",
      "url": "https://www.extrafarma.com.br/dicloridrato-de-manidipino-10mg-com-30-comprimidos-generico-pharlab/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 97.59,
      "nome": "Manivasc Dicloridrato De Manidipino 10mg 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/manivasc-10mg-chiesi-14-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 92.99,
      "nome": "Manivasc Dicloridrato De Manidipino 10mg 14 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/manivasc-10mg-chiesi-14-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 121.34,
      "nome": "Dicloridrato De Manidipino 10mg Pharlab 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dicloridrato-de-manidipino-10mg-pharlab-30-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00324": {
    "paguemenos": {
      "preco": 8.99,
      "nome": "Meclin Move 25mg 5 Comprimidos",
      "url": "https://www.paguemenos.com.br/meclin-move-25mg-5-comprimidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 8.99,
      "nome": "Meclin Move 25mg 5 Comprimidos",
      "url": "https://www.extrafarma.com.br/meclin-move-25mg-5-comprimidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 17.74,
      "nome": "Meclin JET Dicloridrato De Meclozina 25mg 10 Comprimidos Mastigáveis",
      "url": "https://www.drogariasaopaulo.com.br/meclin-jet-25mg-tangerina-apsen-10-comprimidos-mastigaveis/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.63,
      "nome": "Naucloz Dicloridrato de Meclozina Monoidratado + Cloridrato de Meclizina 25mg 10 Comprimidos Orodispersíveis",
      "url": "https://www.drogariaspacheco.com.br/naucloz-25mg-ache-10-comprimidos-orodispersiveis/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.69,
      "nome": "Meclin Move 25mg 5 comprimidos",
      "url": "https://www.drogariavenancio.com.br/meclin-25mg-5com/p",
      "disponivel": true
    }
  },
  "med-00358": {
    "paguemenos": {
      "preco": 99.9,
      "nome": "Empagliflozina 25mg 30 Comprimidos Revestidos Genérico Ems",
      "url": "https://www.paguemenos.com.br/empagliflozina-25mg-30-comprimidos-revestidos-generico-ems/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 99.9,
      "nome": "Empagliflozina 25mg 30 Comprimidos Revestidos Genérico Ems",
      "url": "https://www.extrafarma.com.br/empagliflozina-25mg-30-comprimidos-revestidos-generico-ems/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 105.59,
      "nome": "Empagliflozina 10mg Genérico Ems 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/empagliflozina-10mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 105.59,
      "nome": "Empagliflozina 10mg Genérico Ems 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/empagliflozina-10mg-generico-ems-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 75.99,
      "nome": "Empagliflozina 10mg 30 Comprimidos Revestidos Genérico Althaia",
      "url": "https://www.drogariavenancio.com.br/empagliflozina-10mg-30-comprimidos-revestidos-generico-althaia/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 338.42,
      "nome": "Jardiance Duo Empagliflozina 12,5mg + Cloridrato De Metformina 850mg 60 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/jardiance-duo-empagliflozina-125mg-cloridrato-de-metformina-850mg-60-comprimidos-revestidos/p-99238",
      "disponivel": true
    }
  },
  "med-00647": {
    "paguemenos": {
      "preco": 2525.51,
      "nome": "Riluzol 50mg 56 Comprimidos Revestidos",
      "url": "https://www.paguemenos.com.br/riluzol-50mg-56-comprimidos-revestidos/p",
      "disponivel": true
    },
    "extrafarma": {
      "preco": 2525.51,
      "nome": "Riluzol 50mg 56 Comprimidos Revestidos",
      "url": "https://www.extrafarma.com.br/riluzol-50mg-56-comprimidos-revestidos/p",
      "disponivel": true
    },
    "drogariasaopaulo": {
      "preco": 1253.59,
      "nome": "Riluzol 50mg Genérico Cristália 56 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/riluzol-50mg-generico-cristalia-56-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 1168.59,
      "nome": "Riluzol 50mg Genérico Cristália 56 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/riluzol-50mg-generico-cristalia-56-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 2434.23,
      "nome": "Riluzol 50mg 56comprimidos Revestidosestidos Cristalia Genérico",
      "url": "https://www.panvel.com/panvel/riluzol-50mg-56comprimidos-revestidosestidos-cristalia-generico/p-693940",
      "disponivel": true
    }
  },
  "med-00009": {
    "drogariasaopaulo": {
      "preco": 6154.17,
      "nome": "Copaxone 20mg/ml Teva 1ml 28 Ampolas Solução Injetável",
      "url": "https://www.drogariasaopaulo.com.br/copaxone-20mg-biosintetica-28-ampolas/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 4717.86,
      "nome": "Copaxone 20mg Biosintética 1ml 28 Ampolas",
      "url": "https://www.drogariaspacheco.com.br/copaxone-20mg-biosintetica-28-ampolas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 8503.31,
      "nome": "Copaxone Injetável Acetato De Glatiramer 40mg/ml 12 Seringas Preenchidas - Geladeira",
      "url": "https://www.panvel.com/panvel/copaxone-injetavel-acetato-de-glatiramer-40mg-ml-12-seringas-preenchidas-geladeira/p-120343",
      "disponivel": true
    }
  },
  "med-00051": {
    "drogariasaopaulo": {
      "preco": 82.05,
      "nome": "Tericin AT Cloridrato de Tetraciclina 25mg/g + Anfotericina B 12,5mg/g 45g Creme Vaginal + 10 Aplicadores",
      "url": "https://www.drogariasaopaulo.com.br/tericin-at-creme-vaginal-apsen-45g-10-aplicadores/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 63.49,
      "nome": "Tericin AT Cloridrato de Tetraciclina 25mg/g + Anfotericina B 12,5mg/g 45g Creme Vaginal + 10 Aplicadores",
      "url": "https://www.drogariaspacheco.com.br/tericin-at-creme-vaginal-apsen-45g-10-aplicadores/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 64.79,
      "nome": "Tericin At Creme Vaginal 45g 10 Aplicadores",
      "url": "https://www.drogariavenancio.com.br/tericin-at-creme-vaginal-45g-10-aplicadores/p",
      "disponivel": true
    }
  },
  "med-00752": {
    "drogariasaopaulo": {
      "preco": 27.72,
      "nome": "Redoxon Vitamina C 2g 10 Comprimidos Efervescentes",
      "url": "https://www.drogariasaopaulo.com.br/redoxon-efervescente-2g-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 28,
      "nome": "Redoxon Vitamina C 2g 10 Comprimidos Efervescentes",
      "url": "https://www.drogariaspacheco.com.br/redoxon-efervescente-2g-10-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 9.59,
      "nome": "Bio-c União Química 10 Comprimidos Efervescentes",
      "url": "https://www.drogariavenancio.com.br/bio-c-uniao-quimica-10-comprimidos-efervescentes/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 24.47,
      "nome": "Redoxon Vitamina C Gotas 20ml",
      "url": "https://www.panvel.com/panvel/redoxon-vitamina-c-gotas-20ml/p-15733",
      "disponivel": true
    }
  },
  "med-00075": {
    "drogariasaopaulo": {
      "preco": 83.6,
      "nome": "Betalor Besilato de Anlodipino 5mg + Atenolol 25mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/betalor-525mg-biosintetica-30-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 75.65,
      "nome": "Betalor Besilato de Anlodipino 5mg + Atenolol 50mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/betalor-550mg-biosintetica-30-capsulas/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 84.28,
      "nome": "Betalor Besilato De Anlodipino 5mg + Atenolol 25mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/betalor-besilato-de-anlodipino-5mg-atenolol-25mg-30-capsulas/p-856110",
      "disponivel": true
    }
  },
  "med-00076": {
    "drogariasaopaulo": {
      "preco": 131.67,
      "nome": "Olmecor Triplo Olmesartana Medoxomila 20mg + Besilato de Anlodipino 5mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/olmecor-triplo-20mg-torrent-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 129.68,
      "nome": "Olmecor Triplo Olmesartana Medoxomila 20mg + Besilato de Anlodipino 5mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/olmecor-triplo-20mg-torrent-30-comprimidos-revestidos/p",
      "disponivel": true
    }
  },
  "med-00077": {
    "drogariasaopaulo": {
      "preco": 87.09,
      "nome": "Lotar Besilato de Anlodipino 5mg + Losartana Potássica 50mg 30 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/lotar-5-50mg-biosintetica-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 67.71,
      "nome": "Lotar Besilato de Anlodipino 5mg + Losartana Potássica 50mg 30 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/lotar-5-50mg-biosintetica-30-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 87.79,
      "nome": "Lotar Besilato De Anlodipino 5mg + Losartan Potássico 50mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/lotar-besilato-de-anlodipino-5mg-losartan-potassico-50mg-30-capsulas/p-965530",
      "disponivel": true
    }
  },
  "med-00123": {
    "drogariasaopaulo": {
      "preco": 7.6,
      "nome": "Beserol Paracetamol 300mg + Carisoprodol 125mg + Diclofenaco Sódico 50mg + Cafeína 30mg 4 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/beserol-daudt-4-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 7.54,
      "nome": "Beserol Paracetamol 300mg + Carisoprodol 125mg + Diclofenaco Sódico 50mg + Cafeína 30mg 4 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/beserol-daudt-4-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 8.19,
      "nome": "Torsilax Neo Química 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/torsilax-neo-quimica-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 16.99,
      "nome": "Tandene 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/tandene-30-comprimidos/p-849960",
      "disponivel": true
    }
  },
  "med-00507": {
    "drogariasaopaulo": {
      "preco": 26.39,
      "nome": "Clonixinato de Lisina 125mg + Cloridrato de Ciclobenzaprin 5mg Genérico EMS 15 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/clonixinato-de-lisina-cloridrato-de-ciclobenzaprin-generico-ems-15-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 26.39,
      "nome": "Clonixinato de Lisina 125mg + Cloridrato de Ciclobenzaprin 5mg Genérico EMS 15 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/clonixinato-de-lisina-cloridrato-de-ciclobenzaprin-generico-ems-15-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 37.04,
      "nome": "Dolamin 125mg 16 Comprimido Revestido",
      "url": "https://www.panvel.com/panvel/dolamin-125mg-16-comprimido-revestido/p-338401",
      "disponivel": true
    }
  },
  "med-00182": {
    "drogariasaopaulo": {
      "preco": 36.25,
      "nome": "Benziflex Lis Cloridrato de Ciclobenzaprina 5mg + Clonixinato de Lisina 125mg 15 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/benziflex-liz-5mg125mg-15cp-/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 33.68,
      "nome": "Miogesic Lis Clonixinato de Lisina 125mg + Cloridrato de Ciclobenzaprina 5mg 15 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/miogesic-lis-125mg-caixa-15-comprimidos-revestidos-ems/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 34.37,
      "nome": "Clonixinato De Lisina + Cloridrato De Ciclobenzaprin Genérico Ems 15 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/clonixinato-de-lisina---cloridrato-de-ciclobenzaprin-generico-ems-15-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 29.99,
      "nome": "Benziflex Lis Clonixinato Lisina 125mg + Cloridrato De Ciclobenzaprina 5mg 15 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/benziflex-lis-clonixinato-lisina-125mg-cloridrato-de-ciclobenzaprina-5mg-15-comprimidos-revestidos/p-111048",
      "disponivel": true
    }
  },
  "med-00207": {
    "drogariasaopaulo": {
      "preco": 48.21,
      "nome": "Allexofedrin D Cloridrato de Fexofenadina 60mg + Cloridrato de Pseudoefedrina 120mg 10 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/allexofedrin-d-60-120mg-ems-10-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 48.21,
      "nome": "Allexofedrin D Cloridrato de Fexofenadina 60mg + Cloridrato de Pseudoefedrina 120mg 10 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/allexofedrin-d-60-120mg-ems-10-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 50.99,
      "nome": "Allexofedrin D Cloridrato De Fexofenadina 60mg + Cloridrato De Pseudoefedrina 120mg 10 Comprimidos",
      "url": "https://www.panvel.com/panvel/allexofedrin-d-cloridrato-de-fexofenadina-60mg-cloridrato-de-pseudoefedrina-120mg-10-comprimidos/p-519520",
      "disponivel": true
    }
  },
  "med-00226": {
    "drogariasaopaulo": {
      "preco": 66.4,
      "nome": "Meritor Glimepirida 2mg + Metformina 1000mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/meritor-2-1000mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 54.97,
      "nome": "Meritor Glimepirida 2mg + Metformina 1000mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/meritor-2-1000mg-ache-30-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 56.09,
      "nome": "Meritor Glimepirida 2mg + Metformina 1000mg 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/meritor-2-1000mg-ache-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 66.93,
      "nome": "Meritor Glimepirida 2mg + Cloridrato De Metformina 1000mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/meritor-glimepirida-2mg-cloridrato-de-metformina-1000mg-30-comprimidos/p-527800",
      "disponivel": true
    }
  },
  "med-00238": {
    "drogariasaopaulo": {
      "preco": 301.09,
      "nome": "Reduxalt Cloridrato de Naltrexona 8mg + Cloridrato de Bupropiona 90mg 70 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/reduxalt-cloridrato-de-naltrexona-8mg-cloridrato-de-bupropiona-90mg-70-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 316.53,
      "nome": "Reduxalt Cloridrato de Naltrexona 8mg + Cloridrato de Bupropiona 90mg 70 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/reduxalt-cloridrato-de-naltrexona-8mg-cloridrato-de-bupropiona-90mg-70-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 256.99,
      "nome": "Reduxalt 90+8mg 70 Comprimidos Revestidos de Liberação Prolongada",
      "url": "https://www.drogariavenancio.com.br/reduxalt--8-90mg--70com--c1-/p",
      "disponivel": false
    }
  },
  "med-00256": {
    "drogariasaopaulo": {
      "preco": 120.4,
      "nome": "Evista 60mg Eli Lilly 14 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/evista-60mg-14-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 119.23,
      "nome": "Evista 60mg Eli Lilly 14 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/evista-60mg-14-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 202.58,
      "nome": "Cloridrato de Raloxifeno com 28 Comprimidos Revestidos 60mg Blanver",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-raloxifeno-com-28-comprimidos-revestidos-60mg/p",
      "disponivel": false
    }
  },
  "med-00296": {
    "drogariasaopaulo": {
      "preco": 2440.59,
      "nome": "Ferriprox 500mg Chiesi 100 Comprimidos Revestidos",
      "url": "https://www.drogariasaopaulo.com.br/ferriprox-500mg-chiesi-100-comprimidos-revestidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 2440.59,
      "nome": "Ferriprox 500mg Chiesi 100 Comprimidos Revestidos",
      "url": "https://www.drogariaspacheco.com.br/ferriprox-500mg-chiesi-100-comprimidos-revestidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 2634.91,
      "nome": "Ferriprox B 1000mg 50 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/ferriprox-bd-1000mg-50com/p",
      "disponivel": false
    }
  },
  "med-00307": {
    "drogariasaopaulo": {
      "preco": 44.8,
      "nome": "Tobracort Dexametasona 3mg/g + Tobramicina 1mg/g 3,5g Pomada",
      "url": "https://www.drogariasaopaulo.com.br/tobracort-pomada-uniao-quimica-3-5g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 40.37,
      "nome": "Tobracort Dexametasona 3mg/g + Tobramicina 1mg/g 3,5g Pomada",
      "url": "https://www.drogariaspacheco.com.br/tobracort-pomada-uniao-quimica-3-5g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 35.39,
      "nome": "Tobracort Sol Oftalmico Frasco 5 Ml",
      "url": "https://www.drogariavenancio.com.br/tobracort-sol-oftalmico-frasco-5-ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 41.88,
      "nome": "Tobracort Colírio Tobramicina 3mg/ml + Dexametasona 1mg/ml 5ml",
      "url": "https://www.panvel.com/panvel/tobracort-colirio-tobramicina-3mg-ml-dexametasona-1mg-ml-5ml/p-433780",
      "disponivel": true
    }
  },
  "med-00352": {
    "drogariasaopaulo": {
      "preco": 112.79,
      "nome": "Slinda Drospirenona 4mg 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/slinda-24mg-exeltis-28-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 101.4,
      "nome": "Slinda Drospirenona 4mg 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/slinda-24mg-exeltis-28-comprimidos/p",
      "disponivel": true
    }
  },
  "med-00441": {
    "drogariasaopaulo": {
      "preco": 46.99,
      "nome": "Abrilar Hedera Helix L. 7mg/ml 100ml Xarope",
      "url": "https://www.drogariasaopaulo.com.br/abrilar-xarope-farmoquimica-100ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 46.99,
      "nome": "Abrilar Hedera Helix L. 7mg/ml 100ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/abrilar-xarope-farmoquimica-100ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 35.99,
      "nome": "Blumel Hedera Xarope 15mg/ml 100ml",
      "url": "https://www.drogariavenancio.com.br/blumel-hedera-xarope-15mg-ml-100ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 22.99,
      "nome": "Hedra Expec 100ml",
      "url": "https://www.panvel.com/panvel/hedra-expec-100ml/p-103585",
      "disponivel": true
    }
  },
  "med-00411": {
    "drogariasaopaulo": {
      "preco": 26.18,
      "nome": "Efurix Fluoruracila 50mg/g  15g Creme",
      "url": "https://www.drogariasaopaulo.com.br/efurix-creme-icn-15g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 26.18,
      "nome": "Efurix Fluoruracila 50mg/g  15g Creme",
      "url": "https://www.drogariaspacheco.com.br/efurix-creme-icn-15g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 12.87,
      "nome": "Fluoruracila 50mg/ml Solução Injetável 10ml Accord Farmaceutica",
      "url": "https://www.drogariavenancio.com.br/fluoruracila-50mg-ml-accord-solucao-injetavel-10ml/p",
      "disponivel": false
    }
  },
  "med-00432": {
    "drogariasaopaulo": {
      "preco": 1322.59,
      "nome": "Gefitinibe 250mg Genérico Natcofarma do Brasil 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/gefitinibe-250mg-generico-natcofarma-do-brasil-30-comprimidos/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 1232.59,
      "nome": "Gefitinibe 250mg Genérico Natcofarma do Brasil 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/gefitinibe-250mg-generico-natcofarma-do-brasil-30-comprimidos/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 5372.72,
      "nome": "Gefitinibe 250mg Natcofarma 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/gefitinibe-250mg-natcofarma-30-comprimidos-/p",
      "disponivel": false
    }
  },
  "med-00691": {
    "drogariasaopaulo": {
      "preco": 11.81,
      "nome": "Sulfato de Terbutalina 0,3mg/ml + Guaifenesina 13,3mg/ml Genérico Prati Donaduzzi 100ml Xarope",
      "url": "https://www.drogariasaopaulo.com.br/sulfato-de-terbutalina-0-3mg-ml-guaifenesina-generico-nds-100ml/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 8.59,
      "nome": "Sulfato de Terbutalina 0,3mg/ml + Guaifenesina 13,3mg/ml Genérico Prati Donaduzzi 100ml Xarope",
      "url": "https://www.drogariaspacheco.com.br/sulfato-de-terbutalina-0-3mg-ml-guaifenesina-generico-nds-100ml/p",
      "disponivel": false
    }
  },
  "med-00532": {
    "drogariasaopaulo": {
      "preco": 223.67,
      "nome": "Latonan Latanoprosta 0,05mg/ml + Timolol 5mg/ml 2,5ml Solução Oftálmica",
      "url": "https://www.drogariasaopaulo.com.br/latonan-solucao-oftalmica-legrand-2-5ml/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 223.99,
      "nome": "Latonan Latanoprosta 0,05mg/ml + Timolol 5mg/ml 2,5ml Solução Oftálmica",
      "url": "https://www.drogariaspacheco.com.br/latonan-solucao-oftalmica-legrand-2-5ml/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 234.99,
      "nome": "Latonan Solução Oftálmica Legrand 2,5ml",
      "url": "https://www.drogariavenancio.com.br/latonan-solucao-oftalmica-legrand-25ml/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 223.22,
      "nome": "Latonan Latanoprost 50mcg + Maleato De Timolol 5mg/ml Solução Oftálmica 2,5ml",
      "url": "https://www.panvel.com/panvel/latonan-latanoprost-50mcg-maleato-de-timolol-5mg-ml-solucao-oftalmica-25ml/p-833620",
      "disponivel": true
    }
  },
  "med-00546": {
    "drogariasaopaulo": {
      "preco": 3874.97,
      "nome": "Mesilato de Lenvatinibe 4mg Genérico Sun Pharma 30 Cápsulas Duras",
      "url": "https://www.drogariasaopaulo.com.br/mesilato-de-lenvatinibe-4mg-generico-sun-pharma-30-capsulas-duras/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 3792.59,
      "nome": "Mesilato de Lenvatinibe 4mg Genérico Sun Pharma 30 Cápsulas Duras",
      "url": "https://www.drogariaspacheco.com.br/mesilato-de-lenvatinibe-4mg-generico-sun-pharma-30-capsulas-duras/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 4218.43,
      "nome": "Mesilato de Lenvatinibe 4mg 30 Cápsulas Sun Pharma",
      "url": "https://www.drogariavenancio.com.br/mesil-lenvatinibe-4mg-30cap--g--sun-farmaceutica/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 6320.64,
      "nome": "Saumya Mesilato De Lenvatinibe 4mg 30 Cápsulas Duras",
      "url": "https://www.panvel.com/panvel/saumya-mesilato-de-lenvatinibe-4mg-30-capsulas-duras/p-89506",
      "disponivel": true
    }
  },
  "med-00571": {
    "drogariasaopaulo": {
      "preco": 62.59,
      "nome": "Nivux Nimesulida 100mg + Pantoprazol Sódico 20mg 12 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/nivux-100mg-20mg-sem-12-comprimidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 48.96,
      "nome": "Nidue Nimesulida 100mg + Pantoprazol Sódico Sesqui-hidratado 20mg 12 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/nidue-100mg---20mg-germed-pharma-12-comprimidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 57.9,
      "nome": "Nivux 100mg + 20mg Ems 12 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/nivux-12-comprimidos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 64.74,
      "nome": "Nidue Nimesulida 100mg + Pantoprazol 20mg 12 Comprimidos",
      "url": "https://www.panvel.com/panvel/nidue-nimesulida-100mg-pantoprazol-20mg-12-comprimidos/p-108836",
      "disponivel": true
    }
  },
  "med-00602": {
    "drogariasaopaulo": {
      "preco": 17.59,
      "nome": "Pantoprazol Sódico 40mg Genérico Cimed 28 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/pantoprazol-sodico-40mg-generico-cimed-28-capsulas/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 17.59,
      "nome": "Pantoprazol Sódico 40mg Genérico Cimed 28 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/pantoprazol-sodico-40mg-generico-cimed-28-capsulas/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 11.89,
      "nome": "Pantoprazol Sódico 20mg Medley 14 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/pantoprazol-20mg-14com--g--medley/p",
      "disponivel": true
    }
  },
  "med-00600": {
    "drogariasaopaulo": {
      "preco": 4186.02,
      "nome": "Cydikriz 75mg Dr. Reddy's 7 Cápsulas Dura",
      "url": "https://www.drogariasaopaulo.com.br/cydikriz-75mg-7-capsulas-dura/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 4105.99,
      "nome": "Cydikriz 75mg Dr. Reddy's 7 Cápsulas Dura",
      "url": "https://www.drogariaspacheco.com.br/cydikriz-75mg-7-capsulas-dura/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 10906.61,
      "nome": "Ibrance 75mg 21 cápsulas",
      "url": "https://www.drogariavenancio.com.br/ibrance-75mg-21capsulas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 10297.61,
      "nome": "Ibrance Palbociclibe 75mg 21 Cápsulas Duras",
      "url": "https://www.panvel.com/panvel/ibrance-palbociclibe-75mg-21-capsulas-duras/p-118827",
      "disponivel": true
    }
  },
  "med-00617": {
    "drogariasaopaulo": {
      "preco": 12099.08,
      "nome": "Pirfenidona 267mg Genérico Sandoz 270 Cápsulas",
      "url": "https://www.drogariasaopaulo.com.br/pirfenidona-267mg-generico-sandoz-270-capsulas/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 12043.99,
      "nome": "Pirfenidona 267mg Genérico Sandoz 270 Cápsulas",
      "url": "https://www.drogariaspacheco.com.br/pirfenidona-267mg-generico-sandoz-270-capsulas/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 15947.89,
      "nome": "Esbriet 267mg Frasco Com 270 Cápsulas Duras",
      "url": "https://www.drogariavenancio.com.br/esbriet-267mg-frasco-com-270-capsulas-duras/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 19734.73,
      "nome": "Egurinel Pirfenidona 267mg 270 Cápsulas Duras",
      "url": "https://www.panvel.com/panvel/egurinel-pirfenidona-267mg-270-capsulas-duras/p-93786",
      "disponivel": true
    }
  },
  "med-00670": {
    "drogariasaopaulo": {
      "preco": 70.28,
      "nome": "Desenvo Succinato de Desvenlafaxina Monoidratado 50mg 30 Comprimidos",
      "url": "https://www.drogariasaopaulo.com.br/desenvo-50mg-biosintetica-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 70.99,
      "nome": "Desenvo Succinato de Desvenlafaxina Monoidratado 50mg 30 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/desenvo-50mg-biosintetica-30-comprimidos-revestidos/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 45.99,
      "nome": "Desvenlafaxina HCL 50mg Teuto 28 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/succin-desvenlafaxina-50mg-28com--c1--g--teuto/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 83.95,
      "nome": "Andes Succinato De Desvenlafaxina 50mg 30 Comprimidos Revestidos De Liberação Prolongada",
      "url": "https://www.panvel.com/panvel/andes-succinato-de-desvenlafaxina-50mg-30-comprimidos-revestidos-de-liberacao-prolongada/p-900700",
      "disponivel": true
    }
  },
  "med-00700": {
    "drogariasaopaulo": {
      "preco": 1078.79,
      "nome": "Targocid 400mg Sanofi 3ml Ampola + Diluente",
      "url": "https://www.drogariasaopaulo.com.br/targocid-400mg-sanofi-ampola-diluente/p",
      "disponivel": false
    },
    "pacheco": {
      "preco": 743.62,
      "nome": "Targocid 400mg Sanofi 3ml Ampola + Diluente",
      "url": "https://www.drogariaspacheco.com.br/targocid-400mg-sanofi-ampola-diluente/p",
      "disponivel": false
    },
    "venancio": {
      "preco": 451.89,
      "nome": "Targocid 200mg Frasco Ampola 3ml",
      "url": "https://www.drogariavenancio.com.br/targocid-200mg-3ml-1fa--ab-/p",
      "disponivel": false
    }
  },
  "med-00706": {
    "drogariasaopaulo": {
      "preco": 296.4,
      "nome": "Androgel Testosterona 50mg 30 Envelopes de 5g Gel Transdérmico",
      "url": "https://www.drogariasaopaulo.com.br/androgel-50mg-besins-healthcare-30x5g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 299.87,
      "nome": "Androgel Testosterona 50mg 30 Envelopes de 5g Gel Transdérmico",
      "url": "https://www.drogariaspacheco.com.br/androgel-50mg-besins-healthcare-30x5g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 298.09,
      "nome": "Androgel Pump 16,2mg/g Besins Healthcare Gel 60 Acionamentos",
      "url": "https://www.drogariavenancio.com.br/androgel-pump-162mg-g-besins-healthcare-gel-60-acionamentos/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 312.4,
      "nome": "Androgel Pump 16,2 Mg/g (testosterona) Gel Trasndérmico 88g",
      "url": "https://www.panvel.com/panvel/androgel-pump-162-mg-g-testosterona-gel-trasndermico-88g/p-99975",
      "disponivel": true
    }
  },
  "med-00753": {
    "drogariasaopaulo": {
      "preco": 72.25,
      "nome": "Azelan Gel 150mg/g LEO Pharma 1 Bisnaga com 30g",
      "url": "https://www.drogariasaopaulo.com.br/azelan-gel-30g/p",
      "disponivel": true
    },
    "pacheco": {
      "preco": 71.52,
      "nome": "Azelan Gel 150mg/g LEO Pharma 1 Bisnaga com 30g",
      "url": "https://www.drogariaspacheco.com.br/azelan-gel-30g/p",
      "disponivel": true
    },
    "venancio": {
      "preco": 92.31,
      "nome": "Zella 150mg/g Mantecorp Gel 30g",
      "url": "https://www.drogariavenancio.com.br/zella-gel-30g/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 85.03,
      "nome": "Azelan Gel 30g",
      "url": "https://www.panvel.com/panvel/azelan-gel-30g/p-611770",
      "disponivel": true
    }
  },
  "med-00287": {
    "pacheco": {
      "preco": 37.9,
      "nome": "OsteoFix Carbonato de Cálcio 1250mg 200UI 60 Comprimidos",
      "url": "https://www.drogariaspacheco.com.br/osteofix-carbonato-de-calcio-1250mg-200ui-60-comprimidos-935193484/p",
      "disponivel": true
    }
  },
  "med-00011": {
    "venancio": {
      "preco": 12357.72,
      "nome": "Firazyr 10mg/ml Tekeda com 1 Seringa 3ml + agulha",
      "url": "https://www.drogariavenancio.com.br/firazyr-10mg-ml-1ser-3ml-agulha/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 12265.55,
      "nome": "Firazyr Acetato De Icatibanto 10mg 1 Seringa Preenchida",
      "url": "https://www.panvel.com/panvel/firazyr-acetato-de-icatibanto-10mg-1-seringa-preenchida/p-119455",
      "disponivel": true
    }
  },
  "med-00052": {
    "venancio": {
      "preco": 722.84,
      "nome": "Anidulafungina 100mg 1 frasco ampola Wyeth",
      "url": "https://www.drogariavenancio.com.br/anidulafungina-100mg-1fa/p",
      "disponivel": false
    }
  },
  "med-00082": {
    "venancio": {
      "preco": 12682.39,
      "nome": "REBIF 44MCG 0,5ML 12SER(H)",
      "url": "https://www.drogariavenancio.com.br/rebif-44mcg-05ml-12ser-h-/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 18508.44,
      "nome": "Rebif Injetável Betainterferona 1a 22mcg 12 Seringas Preenchidas - Geladeira",
      "url": "https://www.panvel.com/panvel/rebif-injetavel-betainterferona-1a-22mcg-12-seringas-preenchidas-geladeira/p-599600",
      "disponivel": true
    }
  },
  "med-00092": {
    "venancio": {
      "preco": 163.49,
      "nome": "Gamaline V Herbarium 30 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/gamaline-v-herbarium-30-capsulas/p",
      "disponivel": true
    }
  },
  "med-00093": {
    "venancio": {
      "preco": 3189.89,
      "nome": "Bosentana 62,5mg 60 comprimidos Janssen",
      "url": "https://www.drogariavenancio.com.br/bosentana-62-5mg-60tab-br-act/p",
      "disponivel": false
    }
  },
  "med-00133": {
    "venancio": {
      "preco": 442.94,
      "nome": "Cefazolina Sodica Novafarma 1g 50 Ampolas",
      "url": "https://www.drogariavenancio.com.br/cefazolina-sodica-novafarma-1g-50-ampolas/p",
      "disponivel": false
    }
  },
  "med-00142": {
    "venancio": {
      "preco": 173.89,
      "nome": "Citoneurin 5000 Procter & Gamble 60 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/citoneurin-5000-5mg-100mg-100mg-60com/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 26.84,
      "nome": "Nevrix Im Injetável Vitamina B1 + Vitamina B6 + Vitamina B12 3 Ampolas 2ml",
      "url": "https://www.panvel.com/panvel/nevrix-im-injetavel-vitamina-b1-vitamina-b6-vitamina-b12-3-ampolas-2ml/p-103251",
      "disponivel": true
    }
  },
  "med-00158": {
    "venancio": {
      "preco": 7599.77,
      "nome": "Xeljanz 5mg C/60 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/xeljanz-5mg-c-60-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 7718.3,
      "nome": "Xeljanz Citrato Tofacitinibe 5mg 60 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/xeljanz-citrato-tofacitinibe-5mg-60-comprimidos-revestidos/p-390960",
      "disponivel": true
    }
  },
  "med-00172": {
    "venancio": {
      "preco": 3508.89,
      "nome": "Agrylin 0,5mg Ems 100 Cápsulas",
      "url": "https://www.drogariavenancio.com.br/agrylin-ems-05mg-100-capsulas/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 5125.99,
      "nome": "Agrylin Cloridrato Anagrelida 0,5mg 100 Comprimidos",
      "url": "https://www.panvel.com/panvel/agrylin-cloridrato-anagrelida-05mg-100-comprimidos/p-922330",
      "disponivel": true
    }
  },
  "med-00185": {
    "venancio": {
      "preco": 1174.39,
      "nome": "Mimpara 30 Mg - 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/mimpara-30-mg---30-comprimidos-revestidos/p",
      "disponivel": false
    }
  },
  "med-00195": {
    "venancio": {
      "preco": 394.19,
      "nome": "Cloridrato de Dobutamina 12,5mg/mL 10 ampola 20mL Hypofarma",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-dobutamina-125mg-ml-10-ampola-20ml/p",
      "disponivel": false
    }
  },
  "med-00234": {
    "venancio": {
      "preco": 26.84,
      "nome": "Claril Alcon Solução Oftálmica 15ml",
      "url": "https://www.drogariavenancio.com.br/claril-alcon-15ml-solucao-oftalmica/p",
      "disponivel": true
    },
    "panvel": {
      "preco": 10.7,
      "nome": "Cristalin Colírio 15ml",
      "url": "https://www.panvel.com/panvel/cristalin-colirio-15ml/p-888590",
      "disponivel": true
    }
  },
  "med-00249": {
    "venancio": {
      "preco": 3839.35,
      "nome": "Votrient - 200mg, Caixa Com 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/votrient---200mg-caixa-com-30-comprimidos-revestidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 3255.99,
      "nome": "Votrient Cloridrato De Pazopanib 200mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/votrient-cloridrato-de-pazopanib-200mg-30-comprimidos-revestidos/p-683900",
      "disponivel": true
    }
  },
  "med-00258": {
    "venancio": {
      "preco": 1497.89,
      "nome": "Renagel 800mg - 180 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/renagel-800mg---180-comprimidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 1875.39,
      "nome": "Sevclot Sevelamer 800mg 180 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/sevclot-sevelamer-800mg-180-comprimidos-revestidos/p-100484",
      "disponivel": true
    }
  },
  "med-00274": {
    "venancio": {
      "preco": 15132.27,
      "nome": "Cloridrato de Valganciclovir 450mg Dr Reddys 60 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/clor-valganciclovir-450mg-60com--g--dr-reddys/p",
      "disponivel": false
    }
  },
  "med-00275": {
    "venancio": {
      "preco": 1129.79,
      "nome": "Cloridrato de vancomicina ABL 500mg 25 Frasco-ampola",
      "url": "https://www.drogariavenancio.com.br/cloridrato-de-vancomicina-abl-500mg-25-frasco-ampola/p",
      "disponivel": false
    }
  },
  "med-00293": {
    "venancio": {
      "preco": 6219.6,
      "nome": "Dasatinibe Monoidratado 20mg Teva 60 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/dasatinibe-20mg-60com--g--teva/p",
      "disponivel": false
    }
  },
  "med-00292": {
    "venancio": {
      "preco": 13057.42,
      "nome": "Ladizac 30mg 60 comprimidos",
      "url": "https://www.drogariavenancio.com.br/ladizac-30mg-60-comprimidos/p",
      "disponivel": false
    }
  },
  "med-00374": {
    "venancio": {
      "preco": 23.99,
      "nome": "Drospirenona + Etinilestradiol 3 + 0,02mg Eurofarma 24 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/drospirenona-etinilestradiol--3-002-mg-24com--g--eurofarma/p",
      "disponivel": true
    }
  },
  "med-00373": {
    "venancio": {
      "preco": 4676.45,
      "nome": "Brenzys 50mg/ml Organon Solução Injetável 4 Seringas Preenchidas 1,0ml",
      "url": "https://www.drogariavenancio.com.br/brenzys-50mg-ml-organon-solucao-injetavel-4-seringas-preenchidas-10ml/p",
      "disponivel": false
    }
  },
  "med-00384": {
    "venancio": {
      "preco": 969.59,
      "nome": "Implanon 68mg Organon Caixa Com 1 Seringa Implante",
      "url": "https://www.drogariavenancio.com.br/implanon-68mg-caixa-com-1-seringa-implante/p",
      "disponivel": true
    }
  },
  "med-00391": {
    "venancio": {
      "preco": 182.99,
      "nome": "Tebonin 80mg Takeda 30 Comprimidos Revestidos",
      "url": "https://www.drogariavenancio.com.br/tebonin-80mg-takeda-30-comprimidos-revestidos/p",
      "disponivel": true
    }
  },
  "med-00394": {
    "venancio": {
      "preco": 764.89,
      "nome": "Fampridina 10mg 28 Comprimidos Accord Farmaceutica",
      "url": "https://www.drogariavenancio.com.br/fampridina-10mg-accord-28-comprimidos/p",
      "disponivel": false
    }
  },
  "med-00470": {
    "venancio": {
      "preco": 3542.59,
      "nome": "Remsima 100mg 1 frasco ampola",
      "url": "https://www.drogariavenancio.com.br/remsima-100mg-1f-a/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 5126.03,
      "nome": "Avsola Infliximabe 100mg/ml Pó Liofilizado 10ml - Geladeira",
      "url": "https://www.panvel.com/panvel/avsola-infliximabe-100mg-ml-po-liofilizado-10ml-geladeira/p-105894",
      "disponivel": true
    }
  },
  "med-00487": {
    "venancio": {
      "preco": 15562.88,
      "nome": "Lenalidomida 25mg 14 Cápsulas Duras Sun Pharma",
      "url": "https://www.drogariavenancio.com.br/lenalidomida-25mg-14-capsulas-duras/p",
      "disponivel": false
    }
  },
  "med-00628": {
    "venancio": {
      "preco": 19.89,
      "nome": "MEDICAINA 25MG/G+25MG/G CR 5G",
      "url": "https://www.drogariavenancio.com.br/medicaina-25mg-g-25mg-g-cr-5g/p",
      "disponivel": true
    }
  },
  "med-00503": {
    "venancio": {
      "preco": 2609.99,
      "nome": "Linezolida 600 Mg 10 Comprimidos Revestidos Dr Reddys",
      "url": "https://www.drogariavenancio.com.br/linezolida-600-mg-10-comprimidos-revestidos-/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 2366.37,
      "nome": "Linezolida 600mg 10 Comprimidos Revestidos Dr Reddys Generico",
      "url": "https://www.panvel.com/panvel/linezolida-600mg-10-comprimidos-revestidos-dr-reddys-generico/p-108646",
      "disponivel": true
    }
  },
  "med-00539": {
    "venancio": {
      "preco": 3859.19,
      "nome": "Meropenem 500mg Eurofarma Pó Estéril para Solução Injetável 25 Frascos de Ampolas 30ml",
      "url": "https://www.drogariavenancio.com.br/meropenem-500mg-po-sol-inj-25f-a-30ml--g--eurofarma/p",
      "disponivel": false
    }
  },
  "med-00553": {
    "venancio": {
      "preco": 18.89,
      "nome": "Hytas 25mg/ml Solução injetável Frasco-ampola 2ml",
      "url": "https://www.drogariavenancio.com.br/hytas-25mg-ml-solucao-injetavel-frasco-ampola-2ml/p",
      "disponivel": false
    }
  },
  "med-00642": {
    "venancio": {
      "preco": 5995.39,
      "nome": "Lucentis - 10mg/ml, Solução Para Injeção, 1 Frasco-ampola Com 0,23ml",
      "url": "https://www.drogariavenancio.com.br/lucentis---10mg-ml-solucao-para-injecao-1-frasco-ampola-com-023ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 7706.87,
      "nome": "Lucentis Ranibizumabe 10mg Suspensão Injetável Intravítrea 1 Frasco De 0,23ml + Seringa + Agulha",
      "url": "https://www.panvel.com/panvel/lucentis-ranibizumabe-10mg-suspensao-injetavel-intravitrea-1-frasco-de-023ml-seringa-agulha/p-964020",
      "disponivel": true
    }
  },
  "med-00666": {
    "venancio": {
      "preco": 49679.99,
      "nome": "Sofosbuvir 400mg frasco 28 Comprimidos Revestidos Blanver",
      "url": "https://www.drogariavenancio.com.br/sofosbuvir-400mg-frasco-28-comprimidos-revestidos/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 110420.15,
      "nome": "Sovaldi Sofosbuvir 400mg 28 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/sovaldi-sofosbuvir-400mg-28-comprimidos-revestidos/p-466120",
      "disponivel": true
    }
  },
  "med-00669": {
    "venancio": {
      "preco": 49.89,
      "nome": "Unimedrol 125mg com 1 frasco-ampola União Química",
      "url": "https://www.drogariavenancio.com.br/unimedrol-125mg-com-1-frasco-ampola-uniao-quimica/p",
      "disponivel": false
    }
  },
  "med-00699": {
    "venancio": {
      "preco": 945.59,
      "nome": "Piperacilina Sódica + Tazobactam Sódico 2g + 250mg Mylan Pó Injetável 10 Frasco De Ampolas 30ml",
      "url": "https://www.drogariavenancio.com.br/piperacilina-sodica---tazobactam-sodico-2-g---250-mg-po-sol-inj-iv-ct-10-fa-vd-trans-x-30-ml/p",
      "disponivel": false
    }
  },
  "med-00705": {
    "venancio": {
      "preco": 2010.34,
      "nome": "Sondelbay 250mcg/ml Accord Solução Injetável 2,4ml + Caneta aplicadora",
      "url": "https://www.drogariavenancio.com.br/sondelbay-250mcgml-accord-solucao-injetavel-24ml-caneta-aplicadora/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 5059.37,
      "nome": "Forteo Colter Pen Kit Injetável Teriparatida 250mcg/ml 2,4 Ml",
      "url": "https://www.panvel.com/panvel/forteo-colter-pen-kit-injetavel-teriparatida-250mcg-ml-24-ml/p-676950",
      "disponivel": true
    }
  },
  "med-00714": {
    "venancio": {
      "preco": 1199.99,
      "nome": "Actemra 80 Mg - Frasco Com 4 Ml",
      "url": "https://www.drogariavenancio.com.br/actemra-80-mg---frasco-com-4-ml/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 8515.54,
      "nome": "Actemra 162mg/0,9ml Solucao Injetável 4 Seringas Preenchidas 0,9ml Geladeira",
      "url": "https://www.panvel.com/panvel/actemra-162mg-09ml-solucao-injetavel-4-seringas-preenchidas-09ml-geladeira/p-107740",
      "disponivel": true
    }
  },
  "med-00717": {
    "venancio": {
      "preco": 10933.29,
      "nome": "Nexavar 200 Mg 60 Comp.",
      "url": "https://www.drogariavenancio.com.br/nexavar-200-mg-60-comp-/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 11552.89,
      "nome": "Nexavar Tosilato De Sorafenibe 200mg 60 Comprimidos",
      "url": "https://www.panvel.com/panvel/nexavar-tosilato-de-sorafenibe-200mg-60-comprimidos/p-957140",
      "disponivel": true
    }
  },
  "med-00746": {
    "venancio": {
      "preco": 1241.99,
      "nome": "Voriconazol 200mg Biochimico",
      "url": "https://www.drogariavenancio.com.br/voriconazol-200-mg/p",
      "disponivel": false
    },
    "panvel": {
      "preco": 1828.07,
      "nome": "Voriconazol 50mg 14 Comprimidos Revestidos Accord Genérico",
      "url": "https://www.panvel.com/panvel/voriconazol-50mg-14-comprimidos-revestidos-accord-generico/p-486220",
      "disponivel": true
    }
  },
  "med-00639": {
    "venancio": {
      "preco": 111,
      "nome": "Silimalon Vita E 215mg + 200mg 30 Comprimidos",
      "url": "https://www.drogariavenancio.com.br/silimalon-vita-e-215mg-200mg-30-comprimidos/p",
      "disponivel": false
    }
  },
  "med-00026": {
    "panvel": {
      "preco": 231.99,
      "nome": "Aplause 20mg 60 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/aplause-20mg-60-comprimidos-revestidos/p-101452",
      "disponivel": true
    }
  },
  "med-00089": {
    "panvel": {
      "preco": 157.43,
      "nome": "Untral Biotina 2,5mg 30 Cápsulas",
      "url": "https://www.panvel.com/panvel/untral-biotina-25mg-30-capsulas/p-645280",
      "disponivel": true
    }
  },
  "med-00515": {
    "panvel": {
      "preco": 13.09,
      "nome": "Naldecon Noite Paracetamol 800mg + Cloridrato De Fenilefrina 20mg 4 Comprimidos",
      "url": "https://www.panvel.com/panvel/naldecon-noite-paracetamol-800mg-cloridrato-de-fenilefrina-20mg-4-comprimidos/p-884630",
      "disponivel": true
    }
  },
  "med-00516": {
    "panvel": {
      "preco": 3.49,
      "nome": "Stilgrip Granulado 5g",
      "url": "https://www.panvel.com/panvel/stilgrip-granulado-5g/p-370126",
      "disponivel": true
    }
  },
  "med-00204": {
    "panvel": {
      "preco": 3.22,
      "nome": "Resfriliv Mel E Limão 5g",
      "url": "https://www.panvel.com/panvel/resfriliv-mel-e-limao-5g/p-102536",
      "disponivel": true
    }
  },
  "med-00517": {
    "panvel": {
      "preco": 6.99,
      "nome": "Resfenol 5 Cápsulas",
      "url": "https://www.panvel.com/panvel/resfenol-5-capsulas/p-703880",
      "disponivel": true
    }
  },
  "med-00442": {
    "panvel": {
      "preco": 19.99,
      "nome": "Hederaflux Xarope 100ml",
      "url": "https://www.panvel.com/panvel/hederaflux-xarope-100ml/p-113518",
      "disponivel": true
    }
  },
  "med-00453": {
    "panvel": {
      "preco": 136.85,
      "nome": "Concor Hct Hemifumarato Bisoprolol 5mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "url": "https://www.panvel.com/panvel/concor-hct-hemifumarato-bisoprolol-5mg-hidroclorotiazida-125mg-30-comprimidos/p-622540",
      "disponivel": true
    }
  },
  "med-00467": {
    "panvel": {
      "preco": 11.62,
      "nome": "Nuromol Analgésico Com Ibuprofeno 200mg + Paracetamol 500mg 4 Comprimidos",
      "url": "https://www.panvel.com/panvel/nuromol-analgesico-com-ibuprofeno-200mg-paracetamol-500mg-4-comprimidos/p-94626",
      "disponivel": true
    }
  },
  "med-00497": {
    "panvel": {
      "preco": 19.95,
      "nome": "Salonpas Gel-patch 3 Unidades",
      "url": "https://www.panvel.com/panvel/salonpas-gel-patch-3-unidades/p-95517",
      "disponivel": true
    }
  },
  "med-00612": {
    "panvel": {
      "preco": 141.39,
      "nome": "Imunoflan Xarope Sem Acucar 120ml ",
      "url": "https://www.panvel.com/panvel/imunoflan-xarope-sem-acucar-120ml/p-87204",
      "disponivel": true
    }
  },
  "med-00621": {
    "panvel": {
      "preco": 69.34,
      "nome": "Metamucil Sachê Sabor Laranja Com 10 Envelopes 5,85g",
      "url": "https://www.panvel.com/panvel/metamucil-sache-sabor-laranja-com-10-envelopes-585g/p-314137",
      "disponivel": true
    }
  },
  "med-00722": {
    "panvel": {
      "preco": 132.99,
      "nome": "Climatrix 100mg 30 Comprimidos Revestidos",
      "url": "https://www.panvel.com/panvel/climatrix-100mg-30-comprimidos-revestidos/p-57030",
      "disponivel": true
    }
  }
};


/**
 * Programas de desconto de laboratório (PBM) - preço menor com cadastro de CPF
 * no programa do fabricante. Vem dos campos de PBM que as próprias redes VTEX
 * publicam em cada produto (ver extrair_pbm em scrape_precos_vtex.py).
 * medicamentoId -> { descontoMax (% ou null), programas: [nomes], redes: {rede: % ou null}, produtos: [nomes] }
 * Só informativo: não altera preço nem ordenação no app.
 */
const PBM_MEDICAMENTOS = {
  "med-00002": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Aceclofenaco 100mg  Com 12 Comprimidos Genérico-Ranbax"
    ]
  },
  "med-00012": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "venancio": null
    },
    "produtos": [
      "Eligard 45mg Pó + Diluente (Solução Injetável)",
      "Eligard 22,5mg Pó Liofilizado para Suspensão Injetável de Liberação Prolongada 1 Seringa com Pó + 1 Seringa com Diluente",
      "Eligard 45mg Susp Injetável - Zodiac Acetato De Leuprorrelina",
      "Eligard DS 22,5mg Adium Pó Liofilizado para Suspensão Injetável Inj+Ser(h)"
    ]
  },
  "med-00045": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "venancio": null
    },
    "produtos": [
      "Novamox 2x 400mg + 57mg Sabor Cereja Pó para Suspensão Oral 70ml",
      "Novamox 2x 875mg + 125mg 20 Comprimidos Revestidos",
      "Novamox 2x 875mg + 125mg 14 Comprimidos Revestidos",
      "Novamox 2x Amoxicilina Tri-hidratada 875mg + Clavulanato de Potássio 125mg 14 comprimidos"
    ]
  },
  "med-00044": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "pacheco": null
    },
    "produtos": [
      "Amoxil 500mg 21 Cápsulas Duras",
      "Novocilin 875mg 20 Comprimidos",
      "Amoxil Amoxicilina 500mg 21 Comprimidos"
    ]
  },
  "med-00068": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Nesina 25mg 60 Comprimidos Revestidos",
      "Nesina 12,5mg 30 Comprimidos Revestidos",
      "Nesina Met 12,5mg + 850mg 60 Comprimidos Revestidos",
      "Nesina Benzoato De Alogliptina 12,5mg 30 Comprimidos",
      "Nesina Benzoato De Alogliptina 25mg 30 Comprimidos"
    ]
  },
  "med-00081": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Persur 2,5mg 60 Comprimidos",
      "Persur 5mg 30 Comprimidos"
    ]
  },
  "med-00091": {
    "descontoMax": 45,
    "programas": [
      "Cuidados pela vida",
      "Vale mais saúde"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 45
    },
    "produtos": [
      "Bissulfato de Clopidogrel 75mg 28 Comprimidos Revestidos Genérico Ranbaxy",
      "Clopin Bissulfato De Clopidogrel 75mg 30 Comprimidos",
      "Plagrel Bissulfato De Clopidogrel 75mg  28 Comprimidos"
    ]
  },
  "med-00098": {
    "descontoMax": null,
    "programas": [
      "PROGRAMA VIVER ADIUM"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Fenazic 7,5mg 30 Comprimidos Revestidos de Liberação Prolongada",
      "Fenazic 15mg 30 Comprimidos Revestidos de Liberação Prolongada",
      "Fenazic Bromidrato De Darifenacina 15mg 30 Comprimidos Revestidos",
      "Fenazic Bromidrato De Darifenacina 7,5mg 30 Comprimidos",
      "Fenazic 7,5mg Zodiac 30 Comprimidos"
    ]
  },
  "med-00100": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Evortia 5mg 30 Comprimidos Revestidos"
    ]
  },
  "med-00103": {
    "descontoMax": 41,
    "programas": [
      "Faz bem",
      "Cuidados pela vida"
    ],
    "redes": {
      "paguemenos": 40,
      "extrafarma": 40,
      "drogariasaopaulo": 41,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Alenia Fumarato de Formoterol 12mcg + Budesonida 400mcg 60 cápsulas + Inalador",
      "Symbicort Turbuhaler 12mcg + 400mcg Pó Inalante 60 Doses",
      "Symbicort Spray 6/200mcg 120 Doses",
      "Symbicort Spray Fumarato de Formoterol di-hidratado 6mcg + Budesonida 200mcg 120 Doses",
      "Symbicort Spray Fumarato de Formoterol di-hidratado 6mcg + Budesonida 100mcg 120 Doses"
    ]
  },
  "med-00104": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Alenia Fumarato de Formoterol 6mcg + Budesonida 200mcg 60 cápsulas para inalação Refil"
    ]
  },
  "med-00105": {
    "descontoMax": null,
    "programas": [
      "PROGRAMA CUIDAR - MUNDIPHARMA"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Restiva 5mg 4 Adesivos Transdérmicos",
      "Restiva 10mg 2 Adesivos Transdérmicos",
      "Restiva 10mg 4 Adesivos Transdérmicos",
      "Restiva Buprenorfina 5mcg/h 2 Adesivos Transdérmicos",
      "Restiva Buprenorfina 10mcg/h 4 Adesivos Transdérmicos"
    ]
  },
  "med-00146": {
    "descontoMax": 33,
    "programas": [
      "Viver mais",
      "Programas Comerciais Abbvie"
    ],
    "redes": {
      "paguemenos": 33,
      "extrafarma": 33,
      "drogariasaopaulo": 33,
      "pacheco": 33,
      "venancio": null
    },
    "produtos": [
      "Restasis 0,05% Emulsão Oftálmica 30 Flaconetes",
      "Restasis Ciclosporina 0,5mg/ml 30 Flaconetes 0,4ml Emulsão",
      "Restasis 0,05% Allergan 30 Flaconetes"
    ]
  },
  "med-00148": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Cinarizina 75mg 30 Comprimidos Genérico Ranbaxy",
      "Cinarizina 25mg 30 Comprimidos Genérico Ranbaxy"
    ]
  },
  "med-00196": {
    "descontoMax": 41,
    "programas": [
      "Melhor idade"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 41
    },
    "produtos": [
      "Cloridrato de Donepezila 10mg 30 Comprimidos Revestidos Genérico Ranbaxy",
      "Eranz Cloridrato De Donepezila 5mg 28 Comprimidos",
      "Donila Cloridrato De Donepezila 10mg 30 Comprimidos",
      "Donila Cloridrato De Donepezila 5mg 30 Comprimidos"
    ]
  },
  "med-00199": {
    "descontoMax": 25,
    "programas": [],
    "redes": {
      "paguemenos": 20,
      "extrafarma": 20,
      "drogariasaopaulo": 25,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Dorzal 20mg/ml Solução Oftálmica 5ml",
      "Dorzal Cloridrato De Dorzolamida 20mg/ml 5ml",
      "Dorzal 20mg/ml Legrand 5ml Solução Oftálmica"
    ]
  },
  "med-00217": {
    "descontoMax": 25,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": 25,
      "venancio": null
    },
    "produtos": [
      "Lutab 80mg 30 Comprimidos Revestidos",
      "Lutab 20mg 30 Comprimidos Revestidos",
      "Lutab 40mg 30 Comprimidos Revestidos",
      "Lutab Cloridrato De Lurasidona 20mg 30 Comprimidos",
      "Lutab Cloridrato De Lurasidona 40mg 30 Comprimidos"
    ]
  },
  "med-00225": {
    "descontoMax": 30,
    "programas": [
      "RECEITA DE VIDA - MSD",
      "PROGRAMA RECEITA DE VIDA - MSD"
    ],
    "redes": {
      "paguemenos": 30,
      "extrafarma": 30,
      "drogariasaopaulo": null,
      "pacheco": 30,
      "venancio": null
    },
    "produtos": [
      "Nimegon Met 50mg + 500mg 56 Comprimidos Revestidos",
      "Nimegon Met 50mg + 850mg 56 Comprimidos Revestidos",
      "Nimegon Met 50mg + 1000mg 56 Comprimidos Revestidos",
      "Janumet 50mg + 500mg 56 Comprimidos Revestidos",
      "Janumet Fosfato de Sitagliptina 50mg + Cloridrato de Metformina 1000mg 56 Comprimidos"
    ]
  },
  "med-00268": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Cloridrato de Tizanidina 2mg 30 Comprimidos Genérico Ranbaxy"
    ]
  },
  "med-00322": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Dicloridrato De Levocetirizina 5mg Com 10 Comprimidos Genérico Ranbaxy"
    ]
  },
  "med-00347": {
    "descontoMax": 30,
    "programas": [
      "Abrace a vida",
      "Abbott - Abrace a Vida"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 30,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Depakote Er 500mg 60 Comprimidos",
      "Depakote ER Divalproato De Sódio 250mg 60 Comprimidos",
      "Depakote Divalproato De Sódio 500mg 30 Comprimidos ER",
      "Depakote ER Divalproato De Sódio 500mg 60 Comprimidos",
      "Depakote Er 250mg 30 Comprimidos"
    ]
  },
  "med-00355": {
    "descontoMax": 25,
    "programas": [
      "Viver mais",
      "Viver Zodiac",
      "PROGRAMA SOU MAIS VIDA - APSEN",
      "PROGRAMA VIVER ADIUM"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 25,
      "pacheco": 25,
      "venancio": null
    },
    "produtos": [
      "Tanduo 0,5mg + 0,4mg 90 Cápsulas",
      "Combodart Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 90 Cápsulas",
      "Combodart Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 30 Cápsulas",
      "Dutam Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 30 Cápsulas",
      "Dutam Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 90 Cápsulas"
    ]
  },
  "med-00395": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Penvir 500mg 21 Comprimidos Revestidos",
      "Penvir Fanciclovir 500mg 21 Comprimidos",
      "Penvir 500mg Ems 21 Comprimidos Revestidos"
    ]
  },
  "med-00410": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Hormoskin 40mg/g + 0,5mg/g + 0,1mg/g Creme Dermatológico 15g",
      "Hormoskin Hidroquinona 40mg/g + Tretinoína 0,5mg/g + Fluocinolona Acetonida 0,1mg/g 15g Creme",
      "Hormoskin Germed 15g Creme Dermatológico"
    ]
  },
  "med-00360": {
    "descontoMax": 30,
    "programas": [],
    "redes": {
      "paguemenos": 30,
      "extrafarma": 30,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Volare 40mg/0,4ml Solução Injetável 2 Seringas Preenchidas",
      "Volare 20mg Solução Injetável 10 Seringas 0,2ml",
      "Volare 60mg/0,6ml Solução Injetável 2 Seringas",
      "Volare Enoxaparina Sódica 20mg 6 Seringas com 0,2ml + Sistema de Segurança",
      "Volare Enoxaparina Sódica 40mg 6 Seringas com 0,4ml + Sistema de Segurança"
    ]
  },
  "med-00449": {
    "descontoMax": 29,
    "programas": [
      "Cuidados pela vida"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 29,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Diosmin SDU Diosmina 900mg + Hesperidina 100mg Sabor Laranja e Limão 30 sachês de 5g cada",
      "Diosmin 450mg/50mg 60 Comprimidos",
      "Daflon Diosmina 900mg + Hesperidina 100mg 60 Comprimidos",
      "Diosmin Diosmina 450mg + Hesperidina 50mg 60 Comprimidos",
      "Diosmin Diosmina 450mg + Hesperidina 50mg 30 Comprimidos"
    ]
  },
  "med-00456": {
    "descontoMax": 10,
    "programas": [
      "EMS Saúde",
      "Vale mais saúde",
      "VMS"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 10,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Brasart HCT Valsartana 160mg + 25mg 30 Comprimidos Revestidos",
      "Brasart HCT Valsartana 160mg + 12,5mg 90 Comprimidos Revestidos",
      "Brasart HCT Valsartana 160mg + 12,5mg 30 Comprimidos Revestidos",
      "Brasart HCT Valsartana 80mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos",
      "Diovan HCT Valsartana 320mg + Hidroclorotiazida 12,5mg 28 Comprimidos Revestidos"
    ]
  },
  "med-00651": {
    "descontoMax": 31.07,
    "programas": [
      "Vale mais saúde",
      "PROGRAMA CAMINHANDO JUNTOS - KNIGHT"
    ],
    "redes": {
      "paguemenos": 31,
      "extrafarma": 31,
      "drogariasaopaulo": 31.07,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Exelon Patch 9,5mg/24h 30 Adesivos Transdérmicos",
      "Exelon Patch 5 4,6mg/24h 30 Adesivos Transdérmicos",
      "Exelon Rivastigmina 6mg 28 cápsulas",
      "Exelon Rivastigmina 1,5mg 28 Cápsulas",
      "Exelon Rivastigmina 3,0mg 28 Cápsulas"
    ]
  },
  "med-00468": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Modik 50mg/g Creme Dermatológico 12 Sachês",
      "Ixium 50mg/g Creme Dermatológico 12 Sachês 0,25g",
      "Ixium Imiquimode 50mg 12 Sachês",
      "Modik Imiquimode 50mg/g 12 Saches Creme Dermatológico",
      "Ixium 50mg/g Farmoquímica 12 Sachês"
    ]
  },
  "med-00471": {
    "descontoMax": 24.23,
    "programas": [],
    "redes": {
      "paguemenos": 24.23,
      "extrafarma": 24.23,
      "venancio": null
    },
    "produtos": [
      "Fiasp Flextouch 100UI/ml Solução Injetável 3ml 1 Sistema de Aplicação",
      "Fiasp FlexTouch Solução Injetável 100U/ml 3ml",
      "Fiasp Penfill 100u/ml 5x3ml"
    ]
  },
  "med-00496": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Folavive 15mg 30 Comprimidos Revestidos",
      "Folavive Levomefolato de Cálcio 15mg 30 Comprimidos",
      "Folavive 15mg 30 comprimidos revestidos"
    ]
  },
  "med-00501": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Meciclin 300mg 32 Cápsulas",
      "Tetralysal 300mg 28 Cápsulas",
      "Meciclin Limeciclina 300mg 32 Cápsulas",
      "Tetralysal Limeciclina 300mg 28 cápsulas",
      "Meciclin 300mg Germed 32 Cápsulas Duras"
    ]
  },
  "med-00502": {
    "descontoMax": 20,
    "programas": [
      "Abraçar a Vida - Boehringer"
    ],
    "redes": {
      "paguemenos": 20,
      "extrafarma": 20,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Trayenta 5mg 30 Comprimidos",
      "Trayenta Linagliptina 5mg 30 Comprimidos Revestidos"
    ]
  },
  "med-00504": {
    "descontoMax": null,
    "programas": [
      "Novo dia"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Lirux 6 Mg/Ml Solução Injetável 3 Ml + 1 Caneta",
      "Victoza Liraglutida 6mg/ml 3ml 2 Canetas Descartáveis",
      "Olire Liraglutida 6mg 1 Caneta com 3ml Solução Injetável",
      "Lirux Liraglutida 6mg 1 Caneta com 3ml Solução Injetável",
      "Lirux Liraglutida 6mg/ml 6ml Solução Injetável 2 Canetas"
    ]
  },
  "med-00531": {
    "descontoMax": 25,
    "programas": [
      "PROGRAMA CUIDAR - MUNDIPHARMA"
    ],
    "redes": {
      "paguemenos": 25,
      "extrafarma": 25,
      "drogariasaopaulo": 25,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Dorzal MT 20mg/ml + 5mg/ml Solução Oftálmica 5ml",
      "Cosopt 2% + 0,5% Solução Oftálmica 10ml",
      "Dorzal MT Cloridrato de Dorzolamida 20mg/ml + Maleato de Timolol 5mg/ml 5ml",
      "Cosopt Dorzolamida 2% + Maleato de Timolol 0,5% 10ml Solução Oftálmica",
      "Dorzal Mt 20mg + 5mg Legrand 5ml Solução Oftálmica"
    ]
  },
  "med-00528": {
    "descontoMax": 20,
    "programas": [
      "Viver mais",
      "Programas Comerciais Abbvie"
    ],
    "redes": {
      "paguemenos": 20,
      "extrafarma": 20,
      "drogariasaopaulo": 20,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Combigan 2mg/ml + 5mg/ml Solução Oftálmica Estéril 5ml",
      "Combigan 2mg/ml + 5mg/ml Colírio 10ml",
      "Combigan Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml 10ml Gotas",
      "Combigan Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml 5ml solução",
      "Combigan Allergan Solução Oftálmica Estéril 5ml"
    ]
  },
  "med-00540": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Pentasa 2g Granulado de Liberação Prolongada 30 Sachês"
    ]
  },
  "med-00590": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Norfloxacino Comprimidos14 Gn-Rambax"
    ]
  },
  "med-00599": {
    "descontoMax": 40,
    "programas": [
      "Vale mais saúde",
      "VMS"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 40,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Oxcarbazepina 300mg Com 30 Comprimidos Genérico Ranbaxy",
      "Trileptal Oxcarbazepina 300mg 20 Comprimidos",
      "Trileptal Oxcarbazepina 600mg 60 Comprimidos",
      "Trileptal Oxcarbazepina 600mg 20 Comprimidos",
      "Oleptal Oxcarbazepina 300mg 30 Comprimidos Revestidos"
    ]
  },
  "med-00601": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Vegapali 150mg Injetavel 1 Seringa 1,5ml + 2 Agulhas",
      "Vegapali 100mg Injetavel 1 Seringa 1ml + 2 Agulhas",
      "Vegapali 50mg Injetavel 1 Seringa 0,5ml + 2 Agulhas",
      "Vegapali 75mg Injetavel 1 Seringa 0,75ml + 2 Agulhas"
    ]
  },
  "med-00500": {
    "descontoMax": 30,
    "programas": [],
    "redes": {
      "paguemenos": 30,
      "extrafarma": 30,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Dermomax 40mg/g Creme Dermatológico 5g",
      "Dermomax Cloridrato de Lidocaína 40mg/g 30g Creme Dermatológico",
      "Dermomax Cloridrato de Lidocaína 40mg/g 5g Creme Dermatológico",
      "Dermomax Cloridrato de Lidocaina 40mg Creme Dermatológico 30g",
      "Dermomax Cloridrato de Lidocaina 40mg Creme Dermatológico em Bisnaga 5g"
    ]
  },
  "med-00633": {
    "descontoMax": 25,
    "programas": [],
    "redes": {
      "paguemenos": 25,
      "extrafarma": 25,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Flixotide 250mcg Spray 60 Doses",
      "Flutivate 0,5mg/g Creme 30g",
      "Flutivate Propionato De Fluticasona 0,5mg 30g Creme Dermatológico",
      "Flixotide 50mcg Gsk 120 Doses Spray",
      "Flixotide 250mcg Gsk 60 Doses Spray"
    ]
  },
  "med-00635": {
    "descontoMax": 35,
    "programas": [
      "Saúde em evolução"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 35,
      "pacheco": 35,
      "venancio": null
    },
    "produtos": [
      "Pantogar 20mg + 20mg + 20mg + 100mg + 60mg + 60mg 60 Cápsulas Duras",
      "Pantogar 90 Cápsulas",
      "Pantogar Biolab 60 Cápsulas",
      "Pantogar Biolab 90 Cápsulas"
    ]
  },
  "med-00659": {
    "descontoMax": null,
    "programas": [
      "NOVO NORDISK - NOVO DIA"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Wegovy 1mg Semaglutida 4 Doses Injetáveis",
      "Extensior Semaglutida 1mg Solução Injetavel 3ml",
      "Poviztra 1mg Semaglutida 4 Doses Injetáveis",
      "Wegovy 0,5mg Semaglutida Com 4 Doses Injetáveis",
      "Poviztra 0,5mg Semaglutida 4 Doses Injetáveis"
    ]
  },
  "med-00661": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Tamarine Geleia Zero Açúcar Laxante Fitoterápico 250g",
      "Laxante Tamarine 12mg 20 Cápsulas Duras",
      "Laxante Tamarine Geleia Fitoterápico Sabor Ameixa Zero Açúcar 150g",
      "Tamarine Fibras Kids Morango 240ml"
    ]
  },
  "med-00667": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Norditropin FlexPro 5mg/1,5ml Novo Nordisk 1 Dose Injetável",
      "Norditropin FlexPro 10mg/1,5ml Novo Nordisk 1 Dose Injetável",
      "Norditropin FlexPro 15mg/1,5ml Novo Nordisk 1 Dose Injetável"
    ]
  },
  "med-00694": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Tacroz 1,0mg/g Pomada Dermatológica 10g",
      "Tacroz 0,3mg/g Pomada Dermatológica 10g",
      "Tacroz Tacrolimo 0,3mg/g 10g Pomada",
      "Tacroz Tacrolimo 1,0mg/g 10g Pomada",
      "Tacroz 10g"
    ]
  },
  "med-00671": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Selozok 50mg 30 Comprimidos Revestidos de Liberação Controlada",
      "Selozok Succinato De Metoprolol 25mg 30 Comprimidos",
      "Selozok Succinato De Metoprolol 50mg 30 Comprimidos",
      "Selozok Succinato De Metoprolol 100mg 30 Comprimidos"
    ]
  },
  "med-00712": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Mounjaro 12.5mg Tirzepatida 4 Doses Injetáveis",
      "Mounjaro 5mg Tirzepatida 4 Doses Injetáveis",
      "Mounjaro 10mg Tirzepatida 4 Doses Injetáveis",
      "Mounjaro 15mg Tirzepatida 4 Doses Injetáveis",
      "Mounjaro 7.5mg Tirzepatida 4 Doses Injetáveis"
    ]
  },
  "med-00716": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Roteas 30mg 30 Comprimidos Revestidos",
      "Roteas 60mg 30 Comprimidos Revestidos",
      "Roteas Tosilato De Edoxabana 30mg 30 Comprimidos Revestidos",
      "Roteas Tosilato De Edoxabana 60mg 30 Comprimidos Revestidos",
      "Roteas 30mg Daiichi Sankyo 30 Comprimidos"
    ]
  },
  "med-00718": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null
    },
    "produtos": [
      "Prosigne 100UI Pó Liofilizado para Solução Injetável 1 Frasco-Ampola"
    ]
  },
  "med-00734": {
    "descontoMax": 40,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "paguemenos": 40,
      "extrafarma": 40,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Betnovate 1mg/g Creme 30g",
      "Betnovate-N Valerato de Betametasona 1mg/g + Sulfato de Neomicina 5mg/g 30g Creme",
      "Betnovate Valerato de Betametasona 1mg/g 30g Creme",
      "Betnovate Valerato de Betametasona 1mg/g 30g Pomada",
      "Betnovate 1mg Gsk Creme 30g"
    ]
  },
  "med-00228": {
    "descontoMax": 15.51,
    "programas": [
      "Vale mais saúde",
      "VMS"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 15.51,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Galvus Met 50mg + 500mg 56 Comprimidos Revestidos",
      "Galvus Met Vildagliptina 50mg + Cloridrato de Metformina 500mg 56 Comprimidos",
      "Galvus Met Vildagliptina 50mg + Cloridrato de Metformina 850mg 56 Comprimidos",
      "Galvus Met Vildagliptina 50mg + Cloridrato de Metformina 1000mg 56 Comprimidos",
      "Galvus Met 50mg/1000mg Novartis 56 Comprimidos Revestidos"
    ]
  },
  "med-00745": {
    "descontoMax": 15.51,
    "programas": [
      "Vale mais saúde",
      "VMS"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 15.51,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Galvus 50mg 56 Comprimidos",
      "Galvus Vildagliptina 50mg 56 Comprimidos",
      "Galvus 50mg Novartis 56 Comprimidos"
    ]
  },
  "med-00758": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Ursacol 150mg 30 Comprimidos",
      "Ursacol 300mg 30 Comprimidos",
      "Ursacol Ácido Ursodesoxicólico 150mg 30 Comprimidos",
      "Ursacol Ácido Ursodesoxicólico 300mg 30 Comprimidos",
      "Ursacol 300mg Zambon 30 Comprimidos"
    ]
  },
  "med-00358": {
    "descontoMax": 30,
    "programas": [
      "Abraçar a Vida - Boehringer"
    ],
    "redes": {
      "paguemenos": 30,
      "extrafarma": 30,
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Jardiance 10mg 30 Comprimidos",
      "Jardiance 25mg 30 Comprimidos",
      "Jardiance Empagliflozina 25mg 30 Comprimidos Revestidos",
      "Jardiance Empagliflozina 10mg 30 Comprimidos Revestidos",
      "Jardiance Empagliflozina 10mg 30 comprimidos Boehringer"
    ]
  },
  "med-00435": {
    "descontoMax": 40,
    "programas": [
      "SERVIER SEMPRE CUIDANDO"
    ],
    "redes": {
      "paguemenos": null,
      "extrafarma": null,
      "drogariasaopaulo": 40,
      "pacheco": null
    },
    "produtos": [
      "Gliclazida 30mg Com 30 Comprimidos Genérico Ranbaxy",
      "Gliclazida 30mg Com 60 Comprimidos Genérico Ranbaxy",
      "Diamicron MR Gliclazida 60mg 60 Comprimidos",
      "Azukon MR Gliclazida 30mg 30 Comprimidos",
      "Clazi XR Gliclazida 60mg 30 Cápsulas"
    ]
  },
  "med-00303": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Decadron Dexametasona 2mg/ml 1ml 2 Ampolas Injetáveis",
      "Decadron Fosfato Dissódico de Dexametasona 4mg/ml 1 Ampola 2,5ml Injetável",
      "Decadron Fosfato Dissódico de Dexametasona 0,5mg/ml + Sulfato de Neomicina 3,5mg/ml + Fenilefrina 5mg/ml 20ml Solução Nasal",
      "Decadron Dexametasona 4mg 10 Comprimidos",
      "Decadron Dexametasona 0,5mg 20 Comprimidos"
    ]
  },
  "med-00041": {
    "descontoMax": null,
    "programas": [
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Frontal Alprazolam 2mg 30 Comprimidos"
    ]
  },
  "med-00042": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Amoxicilina 875mg + Clavulanato de Potássio 125mg Genérico Germed 14 Comprimidos",
      "Amoxicilina 250mg/5ml + Clavulanato de Potássio 62,5mg/5ml Genérico Sandoz 75ml Suspensão"
    ]
  },
  "med-00161": {
    "descontoMax": 52,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "drogariasaopaulo": 52,
      "pacheco": 52,
      "venancio": null
    },
    "produtos": [
      "Clavulin Amoxicilina 500mg + Clavulanato de Potássio 125mg 30 Comprimidos",
      "Clavulin Amoxicilina 500mg + Clavulanato de Potássio 125mg 21 Comprimidos",
      "Clavulin BD amoxicilina + clavulanato de potássio 875mg GSK"
    ]
  },
  "med-00054": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Arpejo Aripiprazol 20mg 15ml"
    ]
  },
  "med-00058": {
    "descontoMax": null,
    "programas": [
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Citalor Atorvastatina Cálcica 40mg 30 Comprimidos",
      "Citalor Atorvastatina Cálcica 10mg 30 Comprimidos Revestidos",
      "Citalor Atorvastatina Cálcica 20mg 30 Comprimidos Revestidos"
    ]
  },
  "med-00060": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Mefex Axetilcefuroxima 500mg 14 Comprimidos",
      "Mefex Axetilcefuroxima 500mg 10 Comprimidos",
      "Mefex Axetilcefuroxima 250mg 10 Comprimidos",
      "Mefex Axetilcefuroxima 250mg 14 Comprimidos"
    ]
  },
  "med-00074": {
    "descontoMax": 25,
    "programas": [
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": 25
    },
    "produtos": [
      "Norvasc Besilato De Anlodipino 10mg 30 Comprimidos",
      "Norvasc Besilato De Anlodipino 5mg 30 Comprimidos"
    ]
  },
  "med-00075": {
    "descontoMax": 34,
    "programas": [
      "Cuidados pela vida"
    ],
    "redes": {
      "drogariasaopaulo": 34
    },
    "produtos": [
      "Betalor Besilato de Anlodipino 5mg + Atenolol 25mg 30 Cápsulas",
      "Betalor Besilato de Anlodipino 5mg + Atenolol 50mg 30 Cápsulas"
    ]
  },
  "med-00078": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Olzicar Anlo Olmesartana Medoxomila 20mg + Besilato de Anlodipino 5mg 30 Comprimidos",
      "Olzicar Anlo Olmesartana Medoxomila 40mg + Besilato de Anlodipino 10mg 30 Comprimidos"
    ]
  },
  "med-00077": {
    "descontoMax": 30,
    "programas": [
      "Cuidados pela vida"
    ],
    "redes": {
      "drogariasaopaulo": 30
    },
    "produtos": [
      "Lotar Besilato de Anlodipino 5mg + Losartana Potássica 50mg 30 Cápsulas",
      "Lotar Besilato de Anlodipino 5mg + Losartana Potássica 100mg 30 Cápsulas"
    ]
  },
  "med-00079": {
    "descontoMax": 22,
    "programas": [
      "EMS Saúde",
      "Vale mais saúde",
      "VMS"
    ],
    "redes": {
      "drogariasaopaulo": 22,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Brasart BCC Valsartana 320mg + Besilato de Anlodipino 10mg 30 Comprimidos Revestidos",
      "Brasart BCC Valsartana 160mg + Besilato de Anlodipino 5mg 60 Comprimidos Revestidos",
      "Brasart BCC Valsartana 320mg + Besilato de Anlodipino 5mg 30 Comprimidos Revestidos",
      "Brasart BCC Valsartana 160mg + Besilato de Anlodipino 5mg 30 Comprimidos Revestidos",
      "Diovan Amlo Fix Valsartana 320mg + Besilato de Anlodipino 10mg 28 Comprimidos Revestidos"
    ]
  },
  "med-00113": {
    "descontoMax": 20,
    "programas": [
      "Faz bem"
    ],
    "redes": {
      "drogariasaopaulo": 20,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Atacand Candesartana Cilexetila 8mg 30 Comprimidos",
      "Atacand Candesartana Cilexetila 16mg 30 Comprimidos",
      "Atacand 8mg Astrazeneca 30 Comprimidos"
    ]
  },
  "med-00117": {
    "descontoMax": 19.7,
    "programas": [
      "Vale mais saúde",
      "VMS"
    ],
    "redes": {
      "drogariasaopaulo": 19.7,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Tegretol Carbamazepina 200mg 20 Comprimidos",
      "Tegretol CR Carbamazepina 200mg 60 Comprimidos",
      "Tegretol CR Carbamazepina 400mg 20 comprimidos",
      "Tegretol Cr 400mg Com 60 Comprimidos",
      "Tegretol Cr 200mg Com 60 Comprimidos"
    ]
  },
  "med-00129": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Ceclor BD Cefaclor 750mg 14 Comprimidos",
      "Ceclor BD Cefaclor 500mg 10 Comprimidos",
      "Ceclor Cefaclor 375mg/5ml 100ml Suspensão Oral"
    ]
  },
  "med-00137": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Celebra Celecoxibe 200mg 10 Cápsulas",
      "Celebra Celecoxibe 100mg 20 Cápsulas"
    ]
  },
  "med-00141": {
    "descontoMax": 35,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 35,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Toragesic 20mg/ml EMS 10ml Gotas",
      "Toragesic 10mg EMS 10 Comprimidos",
      "Deocil 10mg Diffucap-Chemobras 30 Comprimidos Sub-lingual"
    ]
  },
  "med-00150": {
    "descontoMax": 30,
    "programas": [
      "Saúde em evolução"
    ],
    "redes": {
      "drogariasaopaulo": 30,
      "pacheco": 30,
      "venancio": null
    },
    "produtos": [
      "Lipless Ciprofibrato 100mg 90 Comprimidos",
      "Lipless Ciprofibrato 100mg 30 Comprimidos",
      "Lipless Ciprofibrato 100mg 60 Comprimidos",
      "Lipless 100mg Biolab 60 Comprimidos",
      "Lipless 100mg Biolab 30 Comprimidos"
    ]
  },
  "med-00151": {
    "descontoMax": 31,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 31
    },
    "produtos": [
      "Maxapran Citalopram 20mg 28 Comprimidos"
    ]
  },
  "med-00155": {
    "descontoMax": null,
    "programas": [
      "Melhor idade",
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Viagra Citrato De Sildenafila 25mg 4 Comprimidos",
      "Viagra Citrato De Sildenafila 50mg 4 Comprimidos"
    ]
  },
  "med-00163": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Rivotril Clonazepam 2mg 30 Comprimidos"
    ]
  },
  "med-00175": {
    "descontoMax": null,
    "programas": [
      "Abrace a vida",
      "Sou mais vida"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Betaserc Dicloridrato De Betaistina 24mg 60 Comprimidos",
      "Labirin Dicloridrato De Betaistina 24mg 30 comprimidos",
      "Betaserc Dicloridrato De Betaistina 24mg 30 Comprimidos"
    ]
  },
  "med-00183": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Dolamin Flex Clonixinato de Lisina 125mg + Cloridrato de Ciclobenzaprina 5mg 12 Comprimidos Revestidos",
      "Dolamin Flex Clonixinato de Lisina 125mg + Cloridrato de Ciclobenzaprina 5mg 15 Comprimidos Revestidos"
    ]
  },
  "med-00187": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Cipro Cloridrato De Ciprofloxacino 500mg 6 Comprimidos",
      "Ciprofloxacino 500mg Genérico Cimed 14 Comprimidos"
    ]
  },
  "med-00198": {
    "descontoMax": 25,
    "programas": [
      "PROGRAMA SOU MAIS VIDA - APSEN"
    ],
    "redes": {
      "drogariasaopaulo": 25,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Alois Duo Cloridrato de Memantina 20mg + Cloridrato de Donepezila 10mg 30 Comprimidos",
      "Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 20mg 30 Comprimidos Revestidos",
      "Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 5mg 7 Comprimidos Revestidos",
      "Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 15mg 7 Comprimidos Revestidos",
      "Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 10mg 7 Comprimidos Revestidos"
    ]
  },
  "med-00203": {
    "descontoMax": null,
    "programas": [
      "Cuidados pela vida"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Talerc 10mg Aché 10 Comprimidos"
    ]
  },
  "med-00207": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Allexofedrin D Cloridrato de Fexofenadina 60mg + Cloridrato de Pseudoefedrina 120mg 10 Comprimidos"
    ]
  },
  "med-00209": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Cloridrato de Fluoxetina 20mg Genérico Legrand 30 Comprimidos",
      "Daforin Cloridrato De Fluoxetina 20mg 30 Comprimidos"
    ]
  },
  "med-00213": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Zanidip Cloridrato De Lercanidipino 10mg 30 Comprimidos"
    ]
  },
  "med-00218": {
    "descontoMax": 40,
    "programas": [
      "a:care"
    ],
    "redes": {
      "drogariasaopaulo": 40
    },
    "produtos": [
      "Duspatalin Cloridrato De Mebeverina 200mg 60 Comprimidos",
      "Duspatalin Cloridrato De Mebeverina 200mg 30 Cápsulas"
    ]
  },
  "med-00221": {
    "descontoMax": null,
    "programas": [
      "Merck cuida"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Glifage XR Cloridrato De Metformina 500mg 30 comprimidos",
      "Glifage XR Cloridrato De Metformina 750mg 30 Comprimidos",
      "Glifage XR Cloridrato De Metformina 1g 30 Comprimidos"
    ]
  },
  "med-00422": {
    "descontoMax": 30,
    "programas": [
      "RECEITA DE VIDA - MSD",
      "Receita de vida",
      "PROGRAMA RECEITA DE VIDA - MSD"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": 30,
      "venancio": null
    },
    "produtos": [
      "Januvia Fosfato De Sitagliptina Monoidratado 100mg 28 Comprimidos",
      "Januvia Fosfato De Sitagliptina Monoidratado 25mg 28 Comprimidos",
      "Januvia Fosfato De Sitagliptina Monoidratado 50mg 28 Comprimidos",
      "Nimegon Fosfato De Sitagliptina 50mg Schering 28 Comprimidos",
      "Nimegon Fosfato De Sitagliptina 100mg Schering 28 Comprimidos"
    ]
  },
  "med-00226": {
    "descontoMax": null,
    "programas": [
      "Cuidados pela vida"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Meritor Glimepirida 4mg + Metformina 1000mg 30 Comprimidos",
      "Meritor Glimepirida 2mg + Metformina 1000mg 30 Comprimidos"
    ]
  },
  "med-00229": {
    "descontoMax": null,
    "programas": [
      "Saúde completa"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "venancio": null
    },
    "produtos": [
      "Concerta Cloridrato De Metilfenidato 54mg 30 comprimidos",
      "Attenze 10mg 30 Comprimidos",
      "Ritalina La 40mg Com 30 Cápsulas",
      "Ritalina La 30mg Com 30 Cápsulas",
      "Ritalina La 10mg Com 30 Cápsulas"
    ]
  },
  "med-00239": {
    "descontoMax": null,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Naramig Cloridrato De Naratriptana 2,5mg 4 Comprimidos"
    ]
  },
  "med-00240": {
    "descontoMax": 40,
    "programas": [
      "Saúde em evolução",
      "DIFFUCARE SITE",
      "Longevidade"
    ],
    "redes": {
      "drogariasaopaulo": 40,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Nebilet Cloridrato De Nebivolol 5mg 60 Comprimidos",
      "Nyteb Cloridrato De Nebivolol 5mg 60 Comprimidos",
      "Neblock Cloridrato De Nebivolol 5mg 60 comprimidos",
      "Neblock Cloridrato De Nebivolol 5mg 30 Comprimidos",
      "Nebilet Cloridrato De Nebivolol 5mg 90 Comprimidos"
    ]
  },
  "med-00242": {
    "descontoMax": 20,
    "programas": [
      "Vale mais saúde",
      "VMS"
    ],
    "redes": {
      "drogariasaopaulo": 20,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Patanol S Cloridrato De Olopatadina 2,22 mg/ml 2,5ml Solução Oftalmológica",
      "Patanol S Alcon Solução Oftálmica Estéril 2,5ml"
    ]
  },
  "med-00251": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Piomi Cloridrato De Pioglitazona 30mg 30 Comprimidos",
      "Piomi Cloridrato De Pioglitazona 30mg 60 Comprimidos"
    ]
  },
  "med-00253": {
    "descontoMax": 30,
    "programas": [
      "a:care"
    ],
    "redes": {
      "drogariasaopaulo": 30,
      "venancio": null
    },
    "produtos": [
      "Ritmonorm Cloridrato De Propafenona 300mg 30 Comprimidos",
      "Ritmonorm 300mg Abbott 60 Comprimidos Revestidos"
    ]
  },
  "med-00261": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Tansudart Cloridrato De Tansulosina 0,4mg 30 Cápsulas"
    ]
  },
  "med-00273": {
    "descontoMax": 60.6,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "drogariasaopaulo": 60.6,
      "pacheco": 60.6,
      "venancio": null
    },
    "produtos": [
      "Valtrex Cloridrato De Valaciclovir 500mg 42 Comprimidos",
      "Cloridrato de Valaciclovir 500mg Ranbaxy 10 comprimidos",
      "Herpstal 500mg Germed 42 Comprimidos Revestidos"
    ]
  },
  "med-00278": {
    "descontoMax": 30,
    "programas": [
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": 30
    },
    "produtos": [
      "Geodon Cloridrato De Ziprasidona 40mg 30 Cápsulas",
      "Geodon Cloridrato De Ziprasidona 80mg 30 Cápsulas"
    ]
  },
  "med-00282": {
    "descontoMax": 20.1,
    "programas": [
      "Vale mais saúde"
    ],
    "redes": {
      "drogariasaopaulo": 20.1
    },
    "produtos": [
      "Lepónex Clozapina 100mg 30 Comprimidos"
    ]
  },
  "med-00290": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Edistride Dapagliflozina 10mg 30 Comprimidos",
      "Forxiga Dapagliflozina 10mg 30 Comprimidos Revestidos",
      "Edistride 10mg Dapagliflozina 30 comprimidos",
      "Forxiga 10mg Astrazeneca 30 Comprimidos Revestidos"
    ]
  },
  "med-00301": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Cerazette Desogestrel 75mcg 28 comprimidos"
    ]
  },
  "med-00302": {
    "descontoMax": 10,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 10
    },
    "produtos": [
      "Adinos Desonida 0,5mg 15g Gel",
      "Adinos Desonida 0,5mg/g 30g Gel",
      "Adinos Gen Desonida 0,5mg/g + Sulfato de Gentamicina 1mg/g 30g Gel"
    ]
  },
  "med-00319": {
    "descontoMax": null,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Zyrtec Dicloridrato De Cetirizina 10mg 12 Comprimidos"
    ]
  },
  "med-00562": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Levolukast Montelucaste de Sódio 10mg + Dicloridrato de Levocetirizina 5mg 14 Comprimidos Revestidos",
      "Levolukast Montelucaste de Sódio 10mg + Dicloridrato de Levocetirizina 5mg 7 Comprimidos Revestidos"
    ]
  },
  "med-00328": {
    "descontoMax": 19,
    "programas": [
      "Bayer pra você"
    ],
    "redes": {
      "drogariasaopaulo": 19,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Allurene Dienogeste 2mg 28 Comprimidos",
      "Diost Dienogeste 2mg 30 Comprimidos",
      "Diost 2mg 30 Comprimidos"
    ]
  },
  "med-00329": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Dramin Capsgel Dimenidrinato 25mg 10 Cápsulas"
    ]
  },
  "med-00330": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Dramin B6 Dimenidrinato 25mg/ml + Vitamina B6 5mg/ml 30ml"
    ]
  },
  "med-00331": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Lidexor Dimesilato De Lisdexanfetamina 70mg 30 Cápsulas",
      "Lidexor Dimesilato De Lisdexanfetamina 30mg 30 Cápsulas",
      "Lidexor Dimesilato De Lisdexanfetamina 50mg 30 Cápsulas",
      "Lidexor Dimesilato de Lisdexanfetamina 30 Mg 30 Cápsulas"
    ]
  },
  "med-00542": {
    "descontoMax": 30,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 30
    },
    "produtos": [
      "Cefaliv Cafeína 100mg + Dipirona 350mg + Mesilato de Di-hidroergotamina 1mg 12 Comprimidos"
    ]
  },
  "med-00354": {
    "descontoMax": 47.51,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "drogariasaopaulo": 44.31,
      "pacheco": 47.51,
      "venancio": null
    },
    "produtos": [
      "Avodart Dutasterida 0,5mg 30 comprimidos",
      "Avodart Dutasterida 0,5mg 90 Cápsulas",
      "Avodart 0,5mg Gsk 30 Cápsulas",
      "Avodart 0,5mg Gsk 90 Cápsulas"
    ]
  },
  "med-00366": {
    "descontoMax": 20,
    "programas": [
      "Faz bem"
    ],
    "redes": {
      "drogariasaopaulo": 20,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Nexium Esomeprazol Magnésico 20mg 28 Comprimidos",
      "Nexium Esomeprazol Magnésico 40mg 28 Comprimidos",
      "Esogastro Ibp 500mg + 500mg + 20mg Ems 14 Dias"
    ]
  },
  "med-00365": {
    "descontoMax": 35,
    "programas": [
      "EMS Saúde"
    ],
    "redes": {
      "drogariasaopaulo": 35,
      "pacheco": 25
    },
    "produtos": [
      "Esomex Esomeprazol Magnésico 20mg 28 Comprimidos Revestidos",
      "Esomex Esomeprazol Magnésico 40mg 56 Comprimidos Revestidos",
      "Esomex Esomeprazol Magnésico 40mg 28 Comprimidos Revestidos"
    ]
  },
  "med-00368": {
    "descontoMax": null,
    "programas": [
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Aldactone Espironolactona 25mg 30 Comprimidos",
      "Aldactone Espironolactona 100mg 16 comprimidos",
      "Aldactone Espironolactona 50mg 30 Comprimidos"
    ]
  },
  "med-00375": {
    "descontoMax": null,
    "programas": [
      "EMS Saúde"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Artemidis 35 Etinilestradiol 0,035mg + Acetato de Ciproterona 2mg 21 Comprimidos"
    ]
  },
  "med-00379": {
    "descontoMax": null,
    "programas": [
      "Receita de vida"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Nuvaring Etonogestrel 11,7mg + Etinilestradiol 2,7mg 1 Anel Vaginal",
      "Exelring Exeltis 1 Anel Vaginal",
      "Nuvaring 11,7mg/2,7mg Organon Anel Vaginal + 1 Aplicador"
    ]
  },
  "med-00392": {
    "descontoMax": 50,
    "programas": [
      "RECEITA DE VIDA - MSD"
    ],
    "redes": {
      "drogariasaopaulo": 50,
      "pacheco": 50,
      "venancio": null
    },
    "produtos": [
      "Ezetrol Ezetimiba 10mg 30 Comprimidos",
      "Coledue Ezetimiba 10Mg 30 Comprimidos"
    ]
  },
  "med-00393": {
    "descontoMax": 40,
    "programas": [
      "RECEITA DE VIDA - MSD"
    ],
    "redes": {
      "drogariasaopaulo": 40,
      "pacheco": 40
    },
    "produtos": [
      "Vytorin Ezetimiba 10mg + Sinvastatina 20mg 30 Comprimidos",
      "Vytorin Ezetimiba 10mg + Sinvastatina 40mg 30 Comprimidos Revestidos",
      "Vytorin Ezetimiba 10mg + Sinvastatina 10mg 30 Comprimidos"
    ]
  },
  "med-00401": {
    "descontoMax": 30,
    "programas": [
      "Abbott - Abrace a Vida",
      "a:care"
    ],
    "redes": {
      "drogariasaopaulo": 30,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Lipidil Fenofibrato 160mg 60 Comprimidos",
      "Lipidil Fenofibrato 160mg 90 Comprimidos",
      "Lipidil Fenofibrato 160mg 30 Comprimidos",
      "Lipidil 160mg 60 Comprimidos Revestidos",
      "Lipidil 160mg Abbott 30 Comprimidos Revestidos"
    ]
  },
  "med-00403": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Myrafer Ferripolimaltose 400mg 30 Comprimidos",
      "Myrafer 100mg/ml Myralis Solução Gotas 30ml"
    ]
  },
  "med-00416": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Prelone Fosfato Sódico De Prednisolona 11mg/ml 20ml Gotas",
      "Prelone Prednisolona 20mg 10 Comprimidos",
      "Prelone Prednisolona 5mg 20 Comprimidos"
    ]
  },
  "med-00443": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Concardio Hemifumarato De Bisoprolol 5mg 100 Comprimidos"
    ]
  },
  "med-00444": {
    "descontoMax": 54.7,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 54.7
    },
    "produtos": [
      "Neotiapim Hemifumarato De Quetiapina 25mg 30 Comprimidos",
      "Neotiapim Hemifumarato De Quetiapina 100mg 30 Comprimidos"
    ]
  },
  "med-00455": {
    "descontoMax": 39.82,
    "programas": [
      "Saúde fácil"
    ],
    "redes": {
      "drogariasaopaulo": 39.82,
      "venancio": null
    },
    "produtos": [
      "Micardis HCT Telmisartana 80mg + Hidroclorotiazida 25mg 30 Comprimidos Revestidos",
      "Micardis Hct 80mg/12,5mg Boehringer 30 Comprimidos"
    ]
  },
  "med-00459": {
    "descontoMax": 15,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 15
    },
    "produtos": [
      "Solaquin Hidroquinona 40mg 30g Creme"
    ]
  },
  "med-00469": {
    "descontoMax": 25.64,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 24.2,
      "pacheco": 25.64
    },
    "produtos": [
      "Natrilix SR Indapamida 1,5mg 60 comprimidos",
      "Natrilix Indapamida 1,5mg 30 Comprimidos Revestidos"
    ]
  },
  "med-00478": {
    "descontoMax": 30,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 30,
      "pacheco": 30,
      "venancio": null
    },
    "produtos": [
      "Acnova Isotretinoína 20mg 30 Cápsulas",
      "Isoac Isotretinoína 20mg 30 Cápsulas",
      "Amalfi 20mg Eurofarma 30 Cápsulas",
      "Acnova 20mg 30 Cápsulas",
      "Isoac 20mg 30 cápsulas moles"
    ]
  },
  "med-00483": {
    "descontoMax": 45,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "drogariasaopaulo": 45,
      "pacheco": 45
    },
    "produtos": [
      "Lamictal Lamotrigina 200mg 30 Comprimidos",
      "Lamictal Lamotrigina 50mg 30 Comprimidos"
    ]
  },
  "med-00485": {
    "descontoMax": 20,
    "programas": [
      "Saúde em foco",
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": 20,
      "pacheco": 20,
      "venancio": null
    },
    "produtos": [
      "Arulatan Latanoprosta 50mcg/ml 2,5ml Solução Oftálmica",
      "Xalatan Latanoprosta 50mcg/ml 2,5ml Solução Oftálmica",
      "Xalatan 50mcg/ml Viatris Solução Oftálmica 2,5ml",
      "Drenatan 50mcg/ml Legrand Pharma Solução Oftálmica Colírio 2,5ml"
    ]
  },
  "med-00527": {
    "descontoMax": 25,
    "programas": [
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": 25,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Xalacom Latanoprosta 50mcg/ml + Maleato de Timolol 5mg/ml 2,5ml Gotas",
      "Xalacom Viatris 2,5ml"
    ]
  },
  "med-00494": {
    "descontoMax": null,
    "programas": [
      "Sou mais vida"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Levoxin Levofloxacino 500mg 14 Comprimidos",
      "Levoxin Levofloxacino 500mg  3 Comprimidos"
    ]
  },
  "med-00493": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Livepax Levofloxacino Hemi-Hidratado 750mg 5 Comprimidos",
      "Livepax Levofloxacino Hemi-Hidratado 500mg 10 comprimidos revestidos",
      "Livepax Levofloxacino Hemi-Hidratado 500mg 7 comprimidos revestidos"
    ]
  },
  "med-00499": {
    "descontoMax": null,
    "programas": [
      "a:care",
      "Abbott - Abrace a Vida"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Synthroid Levotiroxina Sódica 50mcg 30 Cápsulas",
      "Synthroid Levotiroxina Sódica 75mcg 30 Cápsulas",
      "Synthroid Levotiroxina Sódica 125mcg 30 Comprimidos",
      "Synthroid Levotiroxina Sódica 137mg 30 Comprimidos",
      "Synthroid Levotiroxina Sódica 150mcg 30 Cápsulas"
    ]
  },
  "med-00227": {
    "descontoMax": null,
    "programas": [
      "Abraçar a Vida - Boehringer"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Trayenta Duo Linagliptina 2,5mg/1000mg 60 comprimidos revestidos",
      "Trayenta Duo Linagliptina 2,5mg/850mg 60 comprimidos revestidos",
      "Trayenta Duo Boehringer 60 Comprimidos Revestidos"
    ]
  },
  "med-00512": {
    "descontoMax": 31,
    "programas": [
      "Saúde em evolução",
      "Cuidados pela vida"
    ],
    "redes": {
      "drogariasaopaulo": 31,
      "pacheco": 30,
      "venancio": null
    },
    "produtos": [
      "Aradois H Losartana Potássica 100mg + Hidroclorotiazida 25mg 60 Comprimidos",
      "Corus H Losartana Potássica 50mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos",
      "Aradois H Losartana Potássica 50mg + Hidroclorotiazida 12,5mg 60 Comprimidos revestidos",
      "Aradois H Losartana Potássica 100mg + Hidroclorotiazida 25mg 90 Comprimidos",
      "Corus H Losartana Potássica 50mg + Hidroclorotiazida 12,5mg 30 comprimidos"
    ]
  },
  "med-00523": {
    "descontoMax": 30,
    "programas": [
      "Abrace a vida"
    ],
    "redes": {
      "drogariasaopaulo": 30,
      "pacheco": 30
    },
    "produtos": [
      "Luvox Maleato De Fluvoxamina 50mg 30 Comprimidos",
      "Luvox Maleato De Fluvoxamina 100mg 30 Comprimidos",
      "Luvox Maleato De Fluvoxamina 100mg 60 Comprimidos"
    ]
  },
  "med-00532": {
    "descontoMax": 25,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 25,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Latonan Latanoprosta 0,05mg/ml + Timolol 5mg/ml 2,5ml Solução Oftálmica",
      "Latonan Solução Oftálmica Legrand 2,5ml"
    ]
  },
  "med-00529": {
    "descontoMax": 45,
    "programas": [
      "Vida mais"
    ],
    "redes": {
      "drogariasaopaulo": 45
    },
    "produtos": [
      "Digedrat Maleato De Trimebutina 200mg 30 Cápsulas",
      "Digedrat Maleato De Trimebutina 200mg 60 cápsulas",
      "Digedrat Maleato De Trimebutina 200mg 20 Cápsulas"
    ]
  },
  "med-00530": {
    "descontoMax": null,
    "programas": [
      "PROGRAMA CUIDAR - MUNDIPHARMA"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Timoptol XE Maleato De Timolol 5mg/ml 5ml Solução Oftálmica Gel"
    ]
  },
  "med-00536": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Mecobe Mecobalamina 500mcg 30 Comprimidos Sublinguais",
      "Mecobe Mecobalamina 1000mcg 30 Comprimidos sublinguais",
      "Mecobe Mecobalamina 1000mcg 90 Comprimidos Sublinguais",
      "Dozemast Mecobalamina 1000mcg 30 Comprimidos Marjan"
    ]
  },
  "med-00549": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Pentasa Mesalazina 2g 30 Sachês",
      "Pentasa Mesalazina 500mg 50 Comprimidos",
      "Pentasa 1g Ferring 28 Supositórios",
      "Pentasa 1g 50 Sachês",
      "Pentasa 2g Ferring 30 Sachês"
    ]
  },
  "med-00543": {
    "descontoMax": 60,
    "programas": [
      "Sou mais vida"
    ],
    "redes": {
      "drogariasaopaulo": 60
    },
    "produtos": [
      "Unoprost Mesilato De Doxazosina 2mg 30 Comprimidos",
      "Unoprost Mesilato De Doxazosina 4mg 30 Comprimidos"
    ]
  },
  "med-00545": {
    "descontoMax": null,
    "programas": [
      "Abraçar a Vida - Boehringer"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Pradaxa Etexilato De Dabigatrana 110mg 30 Comprimidos",
      "Pradaxa Etexilato De Dabigatrana 110mg 60 Cápsulas",
      "Pradaxa Etexilato De Dabigatrana 150mg 60 Cápsulas",
      "Pradaxa Etexilato De Dabigatrana 150mg 30 Cápsulas",
      "Pradaxa Etexilato De Dabigatrana 75mg 30 Comprimidos"
    ]
  },
  "med-00559": {
    "descontoMax": null,
    "programas": [
      "Piloto Myrbetric"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "venancio": null
    },
    "produtos": [
      "Myrbetric Mirabegrona 50mg 30 Comprimidos",
      "Myrbetric 50mg Astellas 30 Comprimidos"
    ]
  },
  "med-00560": {
    "descontoMax": 30,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 30
    },
    "produtos": [
      "Menelat Mirtazapina 30mg 30 Comprimidos Revestidos"
    ]
  },
  "med-00564": {
    "descontoMax": 30,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 30,
      "pacheco": 30,
      "venancio": null
    },
    "produtos": [
      "Bactroban Mupirocina 20mg/g 10g Pomada",
      "Bactroban Gsk Pomada 10g"
    ]
  },
  "med-00569": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Nisulid Nimesulida 100mg 12 Comprimidos"
    ]
  },
  "med-00570": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Maxsulid Betaciclodextrina 400mg 10 Comprimidos"
    ]
  },
  "med-00580": {
    "descontoMax": 10,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 10
    },
    "produtos": [
      "Fentizol Nitrato De Fenticonazol 20mg 30ml Spray",
      "Fentizol Nitrato De Fenticonazol 2g 20g Creme Dermatológico"
    ]
  },
  "med-00593": {
    "descontoMax": 28,
    "programas": [
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": 28
    },
    "produtos": [
      "Olmetec Olmesartana Medoxomila 20mg 30 Comprimidos"
    ]
  },
  "med-00596": {
    "descontoMax": 53,
    "programas": [
      "Siga"
    ],
    "redes": {
      "drogariasaopaulo": 53,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Lipiblock Orlistate 60 Cápsulas",
      "Lipiblock Orlistate 120mg 84 Comprimidos",
      "Lipiblock Orlistate 120mg 42 Comprimidos",
      "Lipiblock Orlistate 120 Mg com 42 Cápsulas",
      "Lipiblock 120mg 60 cápsulas"
    ]
  },
  "med-00613": {
    "descontoMax": 24,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 24,
      "pacheco": 24
    },
    "produtos": [
      "Acertil Perindopril 10mg 30 comprimidos revestidos",
      "Acertil Perindopril Arginina 5mg 30 Comprimidos Revestidos"
    ]
  },
  "med-00627": {
    "descontoMax": null,
    "programas": [
      "Mais Pfizer"
    ],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Lyrica Pregabalina 75mg 28 Cápsulas"
    ]
  },
  "med-00630": {
    "descontoMax": null,
    "programas": [
      "Intimamente bem"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Coltrieno Promestrieno 10mg/g 30g Creme Vaginal + 20 Aplicadores",
      "Colpotrofine 10mg/g Farma Vision 30g Creme Vaginal + 20 Aplicadores",
      "Coltrieno Creme Vaginal 30g + 20 Aplicadores"
    ]
  },
  "med-00632": {
    "descontoMax": 40,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "drogariasaopaulo": 40,
      "pacheco": 40,
      "venancio": null
    },
    "produtos": [
      "Psorex Propionato De Clobetasol 0,5mg/g 50g Loção",
      "Psorex Propionato De Clobetasol 0,5mg/g 30g Creme",
      "Psorex 0,5mg Gsk 30g Creme",
      "Psorex Loção Capilar 0 5mg/g 50g",
      "Psorex 0,5mg Gsk 30g Pomada"
    ]
  },
  "med-00648": {
    "descontoMax": 30,
    "programas": [
      "Cuidados pela vida",
      "EMS Saúde"
    ],
    "redes": {
      "drogariasaopaulo": 30,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Osteotrat Risedronato Sódico 35mg 4 Comprimidos",
      "Osteotrat Risedronato Sódico 35mg 12 Comprimidos",
      "Risedross Risedronato Sódico 35mg 12 Comprimidos",
      "Risedross Risedronato Sódico 35mg 4 Comprimidos Revestidos",
      "Osteotrat 35mg Aché 4 Comprimidos Revestidos"
    ]
  },
  "med-00650": {
    "descontoMax": 17,
    "programas": [
      "Bayer pra você"
    ],
    "redes": {
      "drogariasaopaulo": 17
    },
    "produtos": [
      "Xarelto Rivaroxabana 20mg 28 Comprimidos",
      "Xarelto Rivaroxabana 10mg 30 Comprimidos",
      "Xarelto Rivaroxabana 10mg 10 Comprimidos",
      "Xarelto Rivaroxabana 15mg 28 Comprimidos"
    ]
  },
  "med-00672": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Impere Succinato De Solifenacina 10mg 30 Comprimidos",
      "Impere Succinato De Solifenacina 5mg 30 Comprimidos",
      "Impere 10mg 30 Comprimidos Revestidos",
      "Impere 5mg 30 Comprimidos Revestidos"
    ]
  },
  "med-00680": {
    "descontoMax": 50,
    "programas": [
      "Cuidados pela vida",
      "Viver Zodiac"
    ],
    "redes": {
      "drogariasaopaulo": 50,
      "pacheco": 50,
      "venancio": null
    },
    "produtos": [
      "Artrolive Sulfato de Glicosamina 500mg + Sulfato de Condroitina 400mg 30 Cápsulas",
      "Artrolive Sulfato de Glicosamina 500mg + Sulfato de Condroitina 400mg 90 Cápsulas",
      "Condroflex Sulfato de Condroitina Sódico 400mg + Sulfato de Glicosamina 500mg 90 Cápsulas",
      "Condroflex Sulfato de Glicosamina 500mg + Sulfato de Condroitina Sódico 400mg 60 Cápsulas",
      "Artrolive 400mg + 500mg Aché 90 Cápsulas"
    ]
  },
  "med-00688": {
    "descontoMax": 40.32,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "drogariasaopaulo": 40.32,
      "pacheco": 40.32
    },
    "produtos": [
      "Aerolin Sulfato De Salbutamol 100mcg/dose 200 Doses Spray"
    ]
  },
  "med-00693": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Unizinco Zinco 17,60mg/ml 100ml Solução Oral + Copo Medidor",
      "Unizinco 20mg 14 comprimidos",
      "Unizinco 17,60mg Solução 100ml"
    ]
  },
  "med-00696": {
    "descontoMax": 24,
    "programas": [
      "Lilly melhor para você"
    ],
    "redes": {
      "drogariasaopaulo": 24
    },
    "produtos": [
      "Cialis Diário Tadalafila 5mg 30 Comprimidos"
    ]
  },
  "med-00697": {
    "descontoMax": null,
    "programas": [
      "Programas Comerciais Abbvie"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Alphagan Tartarato De Brimonidina 2mg/ml 5ml Solução Oftálmica",
      "Alphagan-Z Tartarato De Brimonidina 1mg/ml 5ml Solução Oftálmica Estéril",
      "Alphagan P Tartarato De Brimonidina 1,5mg/ml 5ml Solução Oftálmica Estéril",
      "Alphagan Z Allergan Solução Oftálmica Estéril 5ml"
    ]
  },
  "med-00727": {
    "descontoMax": null,
    "programas": [
      "Bayer pra você"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "venancio": null
    },
    "produtos": [
      "Nebido Undecilato De Testosterona 250mg/ml 4ml Solução Intramuscular",
      "Nebido 250mg/ml Grünenthal Solução Injetável 4ml"
    ]
  },
  "med-00709": {
    "descontoMax": 35,
    "programas": [
      "Faz bem"
    ],
    "redes": {
      "drogariasaopaulo": 35
    },
    "produtos": [
      "Brilinta Ticagrelor 90mg 60 Comprimidos Revestidos"
    ]
  },
  "med-00719": {
    "descontoMax": 55,
    "programas": [
      "Vale mais saúde",
      "VMS"
    ],
    "redes": {
      "drogariasaopaulo": 55,
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Travatan Travoprosta 0,04mg/mL 5ml",
      "Travatan Travoprosta 0,04mg/ml 2,5ml Frasco Conta-Gotas Solução Oftálmica",
      "Travatan Bak Free Novartis Solução Oftálmica 5ml",
      "Travatan 0,04mg/ml Alcon 2,5ml Solução Oftálmica"
    ]
  },
  "med-00724": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Mytro Trometamol Cetorolaco 10mg 10 Comprimidos Sublinguais",
      "Mytro Trometamol Cetorolaco 10mg 20 Comprimidos Sublinguais"
    ]
  },
  "med-00743": {
    "descontoMax": 25,
    "programas": [
      "Vale mais saúde",
      "VMS"
    ],
    "redes": {
      "drogariasaopaulo": 25,
      "pacheco": null
    },
    "produtos": [
      "Diovan Valsartana 80mg 28 Comprimidos",
      "Diovan Valsartana 320mg 28 comprimidos",
      "Diovan Valsartana 160mg 28 Comprimidos"
    ]
  },
  "med-00057": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null
    },
    "produtos": [
      "Atenolol 100mg Genérico Legrand 30 Comprimidos"
    ]
  },
  "med-00179": {
    "descontoMax": 25,
    "programas": [
      "Viver mais"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": 25
    },
    "produtos": [
      "Wellbutrin XL Cloridrato De Bupropiona 300mg 30 Comprimidos",
      "Wellbutrin XL Cloridrato De Bupropiona 150mg 30 Comprimidos"
    ]
  },
  "med-00272": {
    "descontoMax": null,
    "programas": [
      "PROGRAMA SOU MAIS VIDA - APSEN"
    ],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Donaren Retard Cloridrato de Trazodona 150mg 60 Comprimidos",
      "Donaren Retard Cloridrato De Trazodona 150mg 30 Comprimidos"
    ]
  },
  "med-00323": {
    "descontoMax": 40,
    "programas": [],
    "redes": {
      "drogariasaopaulo": 40,
      "pacheco": 40
    },
    "produtos": [
      "Manivasc Dicloridrato De Manidipino 10mg 28 Comprimidos"
    ]
  },
  "med-00452": {
    "descontoMax": 40,
    "programas": [
      "Faz bem"
    ],
    "redes": {
      "drogariasaopaulo": 40,
      "pacheco": null
    },
    "produtos": [
      "Atacand HCT Candesartana Cilexetila 16mg + Hidroclorotiazida 12,5mg 30 Comprimidos",
      "Atacand HCT Candesartana Cilexetila 8mg + Hidroclorotiazida 12,5mg 30 Comprimidos"
    ]
  },
  "med-00598": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "drogariasaopaulo": null,
      "pacheco": null
    },
    "produtos": [
      "Eudok Oxalato De Escitalopram 15mg 30 Cápsulas",
      "Eudok Oxalato De Escitalopram 20mg 30 Cápsulas"
    ]
  },
  "med-00094": {
    "descontoMax": null,
    "programas": [
      "DIFFUCARE SITE"
    ],
    "redes": {
      "pacheco": null,
      "venancio": null
    },
    "produtos": [
      "Fluxtar SR Bromazepam 6mg 30 Cápsulas",
      "Fluxtar Sr 6mg Com 30 Cápsulas",
      "Fluxtar Sr 3mg Com 30 Cápsulas"
    ]
  },
  "med-00219": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "pacheco": null
    },
    "produtos": [
      "Alois Cloridrato De Memantina 10mg 60 Comprimidos",
      "Alois Cloridrato De Memantina 10mg  30 Comprimidos"
    ]
  },
  "med-00276": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "pacheco": null
    },
    "produtos": [
      "Efexor XR Cloridrato De Venlafaxina 75mg 30 Cápsulas",
      "Efexor XR Cloridrato De Venlafaxina 150mg 30 Cápsulas"
    ]
  },
  "med-00603": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "pacheco": null
    },
    "produtos": [
      "Restitue Pantoprazol 40mg 30 Comprimidos"
    ]
  },
  "med-00511": {
    "descontoMax": null,
    "programas": [
      "Cuidados pela vida"
    ],
    "redes": {
      "pacheco": null
    },
    "produtos": [
      "Corus Losartana Potássica 25mg 30 Comprimidos Revestidos"
    ]
  },
  "med-00652": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "pacheco": null
    },
    "produtos": [
      "Crestor Rosuvastatina Cálcica 10mg  30 Comprimidos"
    ]
  },
  "med-00653": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "pacheco": null
    },
    "produtos": [
      "Coledue R Ezetimiba 10mg + Rosuvastatina Cálcica 10mg 30 Cápsulas"
    ]
  },
  "med-00343": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Candicort Cetoconazol 20mg + Betametasona 0,64mg Creme 30g"
    ]
  },
  "med-00312": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Diclofenaco Sódico 50mg Medley 20 Comprimidos Revestidos"
    ]
  },
  "med-00238": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Reduxalt 90+8mg 70 Comprimidos Revestidos de Liberação Prolongada"
    ]
  },
  "med-00248": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Paxil Cr 25mg Com 30 Comprimidos",
      "Paxil Cr 12,5mg Com 30 Comprimidos"
    ]
  },
  "med-00608": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Gésico Duo 37,5mg + 325mg 10 Comprimidos"
    ]
  },
  "med-00327": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Vastarel Caps Lp 80mg 30 Capsulas",
      "Neovangy MR 35mg com 30 Comprimidos",
      "Neovangy MR 35mg com 60 Comprimidos"
    ]
  },
  "med-00372": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Ezonia 1mg Eurofarma 30 Comprimidos",
      "Ezonia 3mg Eurofarma 30 Comprimidos",
      "Ezonia 2mg Eurofarma 30 Comprimidos",
      "Prysma 3mg Eurofarma 30 comprimidos",
      "Prysma 2mg Eurofarma 30 comprimidos"
    ]
  },
  "med-00405": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Finalop Libbs 30 Comprimidos Revestidos"
    ]
  },
  "med-00481": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Vimpat 200mg Com 28 Comprimidos",
      "Vimpat Meizler 150mg 28 comprimidos",
      "Vimpat 100mg Com 28 Comprimidos"
    ]
  },
  "med-00548": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Xadago 100mg Cartucho Com 30 Comprimidos"
    ]
  },
  "med-00567": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "NiQuitin Adesivo 21mg 7 Adesivos De Nicotina",
      "NiQuitin Adesivo 14mg 7 Adesivos De Nicotina",
      "NiQuitin Adesivo 7mg 7 Adesivos De Nicotina"
    ]
  },
  "med-00571": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Nivux 100mg + 20mg Ems 12 Comprimidos"
    ]
  },
  "med-00701": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Bramicar 40mg 60 Comprimidos",
      "Bramicar 80mg 60 Comprimidos"
    ]
  },
  "med-00705": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Forteo 250mcg/ml Eli Lilly Caneta Injetável 2,4ml"
    ]
  },
  "med-00753": {
    "descontoMax": null,
    "programas": [],
    "redes": {
      "venancio": null
    },
    "produtos": [
      "Zella 150mg/g Mantecorp Gel 30g"
    ]
  }
};
