import { BlogArticle, ServiceLandingInfo } from '../types/blog';

export const BLOG_CATEGORIES = [
  'Alimentação natural',
  'Escolha de ração',
  'Gatos',
  'Filhotes',
  'Rações terapêuticas',
  'Nutrição veterinária online',
] as const;

export const SERVICE_LANDINGS: Record<string, ServiceLandingInfo> = {
  'obesidade-em-caes-e-gatos': {
    slug: 'obesidade-em-caes-e-gatos',
    title: 'Consulta para Cachorro e Gato Obeso | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária Online para Cães e Gatos Obesos',
    description: 'Atendimento veterinário especializado em emagrecimento pet saudável. Plano alimentar individualizado para controle de peso de cães e gatos sem sofrimento.',
    keywords: ['consulta nutricional veterinária online cachorro obeso', 'plano alimentar para cachorro obeso', 'acompanhamento nutricional para pet obeso'],
    benefits: [
      'Cálculo calórico exato para perda progressiva e segura de gordura',
      'Plano alimentar individualizado (Ração Light/Terapêutica ou Alimentação Natural)',
      'Estratégias para aumento da saciedade e redução da ansiedade por comida',
      'Preservação da massa muscular durante o processo de emagrecimento'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães e gatos com sobrepeso ou obesidade já diagnosticada',
      'Pets que ganharam peso após castração ou mudança de rotina',
      'Animais com dificuldade de mobilidade devido ao excesso de peso',
      'Tutores que tentaram reduzir a ração mas o pet continua sem emagrecer'
    ],
    whatsIncluded: [
      'Análise detalhada do histórico de saúde, exames e rotina do pet',
      'Elaboração de plano alimentar individualizado (ração ideal, Alimentação Natural ou mista)',
      'Meta de peso gradativa e tabela de fracionamento das refeições',
      'Atendimento 100% online por médica veterinária para todo o Brasil',
      'Suporte e acompanhamento contínuo pós-consulta via WhatsApp'
    ],
    detailedText: 'A obesidade pet é uma doença metabólica crônica que reduz a expectativa e a qualidade de vida de cães e gatos, sobrecarregando articulações, coração e fígado. Apenas reduzir a quantidade da ração comum sem orientação técnica pode gerar deficiências nutricionais graves. Com o acompanhamento nutricional individualizado da Dra. Thais Vieira, calculamos a energia necessária para que seu amigo perca gordura mantendo-se nutrido, ativo e satisfeito.',
    faqs: [
      {
        question: 'Como funciona o emagrecimento de cães e gatos na consulta online?',
        answer: 'Na consulta online, a Dra. Thais avalia a rotina, fotos, vídeos, peso atual e exames laboratoriais do pet. Em seguida, calcula a necessidade calórica exata para uma perda de peso gradativa e prescreve o plano alimentar ideal.'
      },
      {
        question: 'Meu pet vai passar fome durante a dieta?',
        answer: 'Não. O plano alimentar é elaborado priorizando alimentos ou rações com alto teor de fibras e proteínas de qualidade, promovendo saciedade sem privação de nutrientes.'
      },
      {
        question: 'Qual o valor da consulta nutricional particular?',
        answer: 'O investimento da consulta nutricional veterinária particular é de R$ 200,00, incluindo avaliação completa, prescrição da dieta e suporte direto por WhatsApp.'
      }
    ],
    relatedLinks: [
      { url: '/consulta-nutricional-online-para-caes', text: 'Consulta nutricional para cães' },
      { url: '/artrose-e-problemas-articulares-em-caes', text: 'Nutrição para cães com artrose' },
      { url: '/racao-terapeutica-para-caes-e-gatos', text: 'Rações terapêuticas de peso' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta nutricional veterinária é destinada ao acompanhamento preventivo e clínico nutricional. Não substitui atendimento médico veterinário emergencial presencial.'
  },
  'alergia-alimentar-em-caes-e-gatos': {
    slug: 'alergia-alimentar-em-caes-e-gatos',
    title: 'Consulta para Cachorro com Alergia Alimentar | Dra. Thais Vieira',
    headline: 'Manejo Nutricional e Dieta de Exclusão para Cães e Gatos Alérgicos',
    description: 'Diagnóstico e tratamento nutricional da alergia e intolerância alimentar em pets. Orientações de ração hipoalergênica e Alimentação Natural de exclusão.',
    keywords: ['consulta para cachorro com alergia alimentar', 'orientação de ração para cachorro com alergia', 'alergia alimentar cão e gato'],
    benefits: [
      'Identificação precisa de potenciais ingredientes alergênicos na dieta',
      'Prescrição de Dieta de Exclusão com proteína inédita ou hidrolisada',
      'Redução de coceiras, otites de repetição e diarreias de origem alimentar',
      'Acompanhamento semanal da resposta dermatológica e digestiva'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães e gatos com coceira crônica na pele, patas ou orelhas',
      'Pets com episódios frequentes de vômito, diarreia ou fezes amolecidas',
      'Animais em investigação de DDA (Dermatite de Causa Alimentar)',
      'Tutores buscando opções de Alimentação Natural Hipoalergênica'
    ],
    whatsIncluded: [
      'Análise criteriosa de todas as proteíno-fontes e alimentos já consumidos',
      'Elaboração de protocolo de Dieta de Exclusão ou ração hipoalergênica',
      'Guia prático de petiscos permitidos sem risco de contaminação cruzada',
      'Consulta particular 100% online por R$ 200,00 com suporte via WhatsApp'
    ],
    detailedText: 'As reações adversas ao alimento podem se manifestar na pele ou no trato gastrointestinal do seu cão ou gato. O manejo nutricional com uma médica veterinária especializada permite conduzir a dieta de eliminação de forma rigorosa, devolvendo o conforto, a saúde da pele e o bem-estar do pet sem palpiteiras ou testes aleatórios.',
    faqs: [
      {
        question: 'Como saber se meu cachorro tem alergia alimentar?',
        answer: 'Sinais comuns incluem coceira constante (especialmente nas patas, focinho e região ventral), otites recorrentes e fezes moles. A confirmação é feita através da dieta de exclusão orientada por veterinário.'
      },
      {
        question: 'A Alimentação Natural ajuda em cães alérgicos?',
        answer: 'Sim! A Alimentação Natural permite selecionar uma única fonte de proteína inédita e um carboidrato puro, eliminando aditivos sintéticos e corantes industriais.'
      }
    ],
    relatedLinks: [
      { url: '/alimentacao-natural-para-caes', text: 'Alimentação Natural para Cães' },
      { url: '/racao-terapeutica-para-caes-e-gatos', text: 'Orientação sobre rações hipoalergênicas' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta não substitui atendimento emergencial médico veterinário presencial em casos de anafilaxia ou prostração aguda.'
  },
  'doenca-renal-em-caes-e-gatos': {
    slug: 'doenca-renal-em-caes-e-gatos',
    title: 'Nutricionista Veterinário para Cão e Gato Renal | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária Especializada para Cães e Gatos Renais',
    description: 'Acompanhamento nutricional para cães e gatos com doença renal crônica (DRC). Dieta renal personalizada com controle de fósforo, proteína nobre e hidratação.',
    keywords: ['nutricionista veterinário cachorro com doença renal', 'dieta para gato com doença renal veterinário', 'consulta nutricional veterinária para cão renal'],
    benefits: [
      'Controle rigoroso dos níveis de fósforo, sódio e ureia no sangue',
      'Manutenção do apetite e estímulo à palatabilidade para pets seletivos',
      'Estratégias avançadas para hidratação e proteção da função renal restante',
      'Ajustes de dieta conforme o estágio IRIS da doença renal crônica'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães e gatos com diagnóstico recente de Doença Renal Crônica (DRC)',
      'Pets renais que perderam o interesse pela ração renal comercial',
      'Gatos renais necessitando de maior aporte de líquidos e dieta úmida',
      'Tutores que desejam associar a Alimentação Natural Renal ao tratamento médico'
    ],
    whatsIncluded: [
      'Avaliação minuciosa de exames de ureia, creatinina, SDMA, fósforo e urinálise',
      'Prescrição individualizada de dieta renal caseira ou seleção de ração terapêutica',
      'Suplementação específica (ômega-3 EPA/DHA, quelantes de fósforo quando indicado)',
      'Consulta online em todo o Brasil por R$ 200,00 e acompanhamento por WhatsApp'
    ],
    detailedText: 'A alimentação é um dos pilares mais determinantes na sobrevida e qualidade de vida do cão ou gato com doença renal. O controle adequado de fósforo e a oferta de proteínas de altíssima digestibilidade diminuem a sobrecarga sobre os rins, reduzindo sintomas como náusea e perda de peso.',
    faqs: [
      {
        question: 'Gato ou cão renal pode comer Alimentação Natural?',
        answer: 'Sim, desde que a dieta seja estritamente calculada por médica veterinária para conter teores restritos e seguros de fósforo e proteínas de alta qualidade.'
      },
      {
        question: 'Por que o fósforo é tão importante na dieta renal?',
        answer: 'Rins comprometidos perdem a capacidade de excretar o excesso de fósforo, o que gera náuseas, inapetência e acelera a progressão da lesão renal. Controlar o fósforo pela dieta é crucial.'
      }
    ],
    relatedLinks: [
      { url: '/alimentacao-natural-para-gatos', text: 'Alimentação Natural para Gatos' },
      { url: '/problemas-hepaticos-em-caes-e-gatos', text: 'Suporte nutricional hepático' }
    ],
    emergencyDisclaimer: 'Aviso: Em episódios de crises renais agudas, anúria ou vômitos persistentes, procure atendimento emergencial em hospital veterinário presencial.'
  },
  'problemas-hepaticos-em-caes-e-gatos': {
    slug: 'problemas-hepaticos-em-caes-e-gatos',
    title: 'Alimentação para Cachorro com Problema no Fígado | Dra. Thais Vieira',
    headline: 'Manejo Nutricional Especializado para Cães e Gatos com Doença Hepática',
    description: 'Dieta e nutrição veterinária para pets com alterações nas enzimas hepáticas, hepatopatias e gordura no fígado. Atendimento online para todo o Brasil.',
    keywords: ['alimentação para cachorro com problema no fígado', 'dieta personalizada para cachorro doente', 'nutrição veterinária hepática'],
    benefits: [
      'Proporções adequadas de proteína para regeneração sem causar encefalopatia',
      'Suporte lipídico controlado e micronutrientes antioxidantes',
      'Redução da sobrecarga metabólica sobre o tecido hepático',
      'Estímulo ao consumo alimentar em pacientes com inapetência'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães e gatos com exames alterados de ALT, FA, GGT ou bilirrubina',
      'Pets com diagnóstico de hepatite, lipidose hepática felina ou sobrecarga',
      'Animais em uso contínuo de medicamentos pesados precisando de suporte',
      'Tutores buscando plano alimentar terapêutico seguro'
    ],
    whatsIncluded: [
      'Análise do histórico clínico e exames bioquímicos e de ultrassom',
      'Plano alimentar individualizado com porções e horários fracionados',
      'Orientações sobre rações hepáticas e formulação de dieta caseira cozida',
      'Consulta 100% online por R$ 200,00 com acompanhamento via WhatsApp'
    ],
    detailedText: 'O fígado desempenha centenas de funções metabólicas vitais. Quando afetado por inflamações ou gordura, a nutrição torna-se indispensável para fornecer energia e aminoácidos essenciais para a reparação celular, evitando o acúmulo de toxinas no organismo.',
    faqs: [
      {
        question: 'Cachorro com problema no fígado precisa mudar de comida?',
        answer: 'Sim. A dieta precisa ser ajustada em teor proteico, lipídico e antioxidante para auxiliar na recuperação hepática e não sobrecarregar o órgão.'
      }
    ],
    relatedLinks: [
      { url: '/doenca-renal-em-caes-e-gatos', text: 'Nutrição para pets renais' },
      { url: '/nutricao-pet-online', text: 'Consulta nutricional pet online' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta não substitui atendimento hospitalar de emergência para icterícia severa ou prostração intensa.'
  },
  'artrose-e-problemas-articulares-em-caes': {
    slug: 'artrose-e-problemas-articulares-em-caes',
    title: 'Nutrição para Cachorro com Artrose e Articulações | Dra. Thais Vieira',
    headline: 'Dieta e Suplementação Anti-inflamatória para Cães com Artrose e Displasia',
    description: 'Acompanhamento nutricional focado em saúde articular de cães idosos e com artrose. Controle de peso e suplementação nutracêutica direcionada.',
    keywords: ['nutrição para cachorro com artrose', 'suplementação e dieta para artrose canina', 'cão com dor articular alimentação'],
    benefits: [
      'Ação anti-inflamatória natural através de EPA e DHA purificados',
      'Controle rígido do peso corporal para diminuir o estresse nas articulações',
      'Fortalecimento da cartilagem articular e suporte ao cão idoso',
      'Melhoria no conforto e disposição do animal nas caminhadas'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães idosos com dificuldade para levantar ou mancar ao caminhar',
      'Cães diagnosticados com osteoartrose, displasia coxofemoral ou de cotovelo',
      'Raças de grande porte com predisposição a desgaste articular',
      'Tutores que desejam nutrição anti-inflamatória preventiva'
    ],
    whatsIncluded: [
      'Análise do grau de mobilidade e histórico de saúde do cão',
      'Plano alimentar individualizado focado no peso ideal e modulação inflamatória',
      'Prescrição de nutracêuticos específicos (ômega-3, condroprotetores)',
      'Consulta online para todo o Brasil por R$ 200,00 com suporte no WhatsApp'
    ],
    detailedText: 'A artrose em cães causa dor crônica e perda da mobilidade. Uma dieta equilibrada enriquecida com ácidos graxos essenciais aliada à manutenção do peso magro reduz o impacto contínuo sobre as articulações do pet.',
    faqs: [
      {
        question: 'A alimentação pode diminuir as dores da artrose no cachorro?',
        answer: 'Sim! Ao manter o cão no peso ideal e incluir nutrientes anti-inflamatórios como ômega-3 em doses terapêuticas, diminui-se a sobrecarga mecânica e a inflamação nas articulações.'
      }
    ],
    relatedLinks: [
      { url: '/obesidade-em-caes-e-gatos', text: 'Controle de peso em cães' },
      { url: '/consulta-nutricional-online-para-caes', text: 'Consulta nutricional para cães' }
    ],
    emergencyDisclaimer: 'Aviso: Em episódios de dor articular aguda e incapacidade de locomoção, consulte o veterinário ortopedista presencialmente.'
  },
  'consulta-nutricional-online-para-caes': {
    slug: 'consulta-nutricional-online-para-caes',
    title: 'Consulta Nutricional Online para Cães | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária Online Especializada em Cães',
    description: 'Atendimento nutricional dedicado a cães de todas as idades. Prescrição de Alimentação Natural, escolha de ração e dietas para cães doentes em todo o Brasil.',
    keywords: ['nutrição veterinária online para cães e gatos', 'consulta nutricional online cães', 'alimentação natural para cachorro com doença'],
    benefits: [
      'Análise de perfil de raça, idade, porte e nível de atividade física',
      'Indicação da ração comercial ideal ou formulação de Alimentação Natural',
      'Gramatura exata por refeição e cálculo de petiscos saudáveis',
      'Atendimento 100% online no conforto da sua casa sem estressar o cão'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Tutores de cães filhotes, adultos ou idosos buscando saúde preventiva',
      'Cães com paladar exigente ou enjoados de ração seca',
      'Cães com problemas de saúde que necessitam de dieta especial',
      'Tutores que moram em qualquer região do Brasil'
    ],
    whatsIncluded: [
      'Consulta individualizada com médica veterinária especialista',
      'Plano alimentar completo enviado com instruções claras e detalhadas',
      'Análise da rotina, exames clínicos e preferências do cão',
      'Atendimento por R$ 200,00 com suporte direto por WhatsApp'
    ],
    detailedText: 'Oferecer a nutrição certa ao seu cão transforma sua energia, pelagem, digestão e longevidade. Na consulta online com a Dra. Thais Vieira, você recebe uma orientação clara, humana e técnica, ajustada às suas possibilidades e à rotina da sua família.',
    faqs: [
      {
        question: 'Como é feita a avaliação na consulta online para cães?',
        answer: 'Você envia fotos, vídeos da rotina, exames recentes e responde a um questionário detalhado. Na consulta, conversamos sobre o cão e elaboramos juntos o plano perfeito.'
      }
    ],
    relatedLinks: [
      { url: '/alimentacao-natural-para-caes', text: 'Alimentação Natural para cães' },
      { url: '/obesidade-em-caes-e-gatos', text: 'Emagrecimento de cães' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta nutricional online não substitui atendimento emergencial presencial.'
  },
  'consulta-nutricional-online-para-gatos': {
    slug: 'consulta-nutricional-online-para-gatos',
    title: 'Consulta Nutricional Online para Gatos | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária Online Especializada em Felinos',
    description: 'Atendimento nutricional para gatos focado em saúde renal, prevenção de cálculos urinários, hidratação e transição para alimentação úmida ou natural.',
    keywords: ['consulta nutricional online para gato', 'nutrição felina especializada', 'dieta para gatos online'],
    benefits: [
      'Foco total na fisiologia carnívora estrita e hidratação do gato',
      'Prevenção de cálculos renais e problemas no trato urinário (FLUTD)',
      'Estratégias para transição alimentar sem provocar inapetência',
      'Atendimento sem estresse de transporte ou caixa de transporte'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Tutores de gatos que bebem pouca água ou têm histórico de cistite/cálculos',
      'Gatos castrados com tendência ao ganho de peso',
      'Gatos idosos ou renais precisando de acompanhamento profissional',
      'Tutores querendo introduzir sachês de qualidade ou Alimentação Natural'
    ],
    whatsIncluded: [
      'Análise completa da ingestão hídrica e comportamento do felino',
      'Plano de alimentação úmida, seca de alta qualidade ou Alimentação Natural',
      'Suplementação obrigatória de taurina e vitaminas essenciais',
      'Consulta online por R$ 200,00 com suporte pós-atendimento no WhatsApp'
    ],
    detailedText: 'Os gatos possuem particularidades metabólicas únicas e necessitam de alta ingestão hídrica para proteger os rins. A consulta nutricional felina prescreve estratégias para aumentar o consumo de água e manter seu felino saudável e nutrido.',
    faqs: [
      {
        question: 'Gato pode comer Alimentação Natural com segurança?',
        answer: 'Sim, mas exige rigor técnico com suplementação de taurina, cálcio e vitaminas. Nunca ofereça comida caseira sem cálculo por médica veterinária.'
      }
    ],
    relatedLinks: [
      { url: '/alimentacao-natural-para-gatos', text: 'Alimentação Natural para Gatos' },
      { url: '/doenca-renal-em-caes-e-gatos', text: 'Cuidados com gato renal' }
    ],
    emergencyDisclaimer: 'Aviso: Em casos de obstrução urinária felina (gato sem conseguir urinar), procure hospital veterinário imediatamente.'
  },
  'nutricao-pet-online': {
    slug: 'nutricao-pet-online',
    title: 'Consulta Nutricional Pet Online | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Pet Online para Cães e Gatos em Todo o Brasil',
    description: 'Atendimento veterinário especializado 100% online. Prescrição de dietas personalizadas, cálculo preciso de porções e acompanhamento contínuo para a saúde do seu pet.',
    keywords: ['consulta nutricional pet online', 'veterinária nutróloga online', 'dieta personalizada para cães e gatos'],
    benefits: [
      'Atendimento no conforto do seu lar sem estressar seu pet',
      'Plano alimentar individualizado (Ração ideal ou Alimentação Natural)',
      'Acompanhamento direto via WhatsApp para ajustes de porção',
      'Avaliação completa do perfil do cão ou gato'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Tutores de cães e gatos em qualquer cidade do Brasil',
      'Pets que precisam de orientação preventiva ou curativa na alimentação',
      'Tutores que querem praticidade sem sair de casa'
    ],
    whatsIncluded: [
      'Análise de exames, histórico e hábitos do pet',
      'Cálculo e envio de prescrição nutricional completa',
      'Atendimento particular por R$ 200,00 e suporte direto no WhatsApp'
    ],
    detailedText: 'A consulta nutricional pet online aproxima a medicina veterinária especializada da sua casa. Com análise de rotina e acompanhamento atencioso, oferecemos um plano alimentar sob medida para o seu companheiro.',
    faqs: [
      {
        question: 'Qual o valor da consulta online?',
        answer: 'O valor da consulta nutricional veterinária online é de R$ 200,00.'
      }
    ],
    relatedLinks: [
      { url: '/consulta-nutricional-online-para-caes', text: 'Consulta para Cães' },
      { url: '/consulta-nutricional-online-para-gatos', text: 'Consulta para Gatos' }
    ],
    emergencyDisclaimer: 'Aviso: Não substitui atendimento emergencial presencial.'
  },
  'alimentacao-natural-para-caes': {
    slug: 'alimentacao-natural-para-caes',
    title: 'Alimentação Natural para Cães | Dra. Thais Vieira',
    headline: 'Alimentação Natural Balanceada e Segura para Cães',
    description: 'Aprenda como oferecer uma dieta caseira balanceada (cozida) formulada por médica veterinária. Nutrição de verdade, sem riscos de deficiências nutricionais.',
    keywords: ['alimentação natural para cães', 'dieta caseira balanceada cachorro', 'AN veterinária cães'],
    benefits: [
      'Cardápio sob medida calculado com suplementação mineral e vitamínica exata',
      'Ingredientes frescos e palatáveis ideais para cães seletivos',
      'Excelente suporte para cães com alergias ou estômago sensível',
      'Acompanhamento veterinário com exames periódicos de controle'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães seletivos que rejeitam ração seca',
      'Cães com alergias alimentares ou estômago sensível',
      'Tutores que desejam oferecer comida de verdade com respaldo médico'
    ],
    whatsIncluded: [
      'Formulações de cardápio cozido balanceado',
      'Indicação e cálculo de suplementação vitamínica necessária',
      'Consulta online por R$ 200,00 e acompanhamento por WhatsApp'
    ],
    detailedText: 'A Alimentação Natural para cães traz vitalidade e saúde quando calculada corretamente por médica veterinária. Evite deficiências graves utilizando receitas genéricas de internet e tenha um plano balanceado para o seu cão.',
    faqs: [
      {
        question: 'Comida caseira para cachorro precisa de suplemento?',
        answer: 'Sim! Toda dieta caseira cozida para cães exige suplementação mineral e vitamínica calculada para não causar carências graves.'
      }
    ],
    relatedLinks: [
      { url: '/alergia-alimentar-em-caes-e-gatos', text: 'Alergia alimentar em cães' },
      { url: '/consulta-nutricional-online-para-caes', text: 'Consulta para cães' }
    ],
    emergencyDisclaimer: 'Aviso: Não substitui atendimento emergencial presencial.'
  },
  'alimentacao-natural-para-gatos': {
    slug: 'alimentacao-natural-para-gatos',
    title: 'Alimentação Natural para Gatos | Dra. Thais Vieira',
    headline: 'Alimentação Natural e Úmida com Foco em Saúde Renal dos Gatos',
    description: 'Dietas carnívoras estritas com alta hidratação para felinos. Proteja a saúde urinária do seu gato com orientação nutricional especializada.',
    keywords: ['alimentação natural para gatos', 'dieta úmida gatos renal', 'nutrição felina especializada'],
    benefits: [
      'Preservação da saúde renal e do trato urinário inferior (FLUTD)',
      'Transição suave para evitar inapetência felina severa',
      'Suplementação obrigatória de taurina, vitaminas e minerais essenciais',
      'Opções de dietas úmidas preparadas em casa ou rações úmidas selecionadas'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Gatos que bebem pouca água ou têm tendência a problemas urinários',
      'Tutores interessados em dieta úmida/natural carnívora',
      'Felinos necessitando de nutrição balanceada'
    ],
    whatsIncluded: [
      'Cardápios felinos calculados com suplementação de taurina',
      'Orientações para transição sem estresse',
      'Consulta online por R$ 200,00 com suporte pós-atendimento'
    ],
    detailedText: 'Os gatos necessitam de proteína animal de alto valor biológico e hidratação adequada. A Alimentação Natural felina é formulada respeitando suas necessidades fisiológicas únicas.',
    faqs: [
      {
        question: 'Posso dar comida humana para o meu gato?',
        answer: 'Não. Alimentos temperados ou não balanceados podem causar intoxicação ou carências graves de taurina.'
      }
    ],
    relatedLinks: [
      { url: '/doenca-renal-em-caes-e-gatos', text: 'Gatos com doença renal' },
      { url: '/consulta-nutricional-online-para-gatos', text: 'Consulta online para gatos' }
    ],
    emergencyDisclaimer: 'Aviso: Não substitui atendimento emergencial presencial.'
  },
  'racao-terapeutica-para-caes-e-gatos': {
    slug: 'racao-terapeutica-para-caes-e-gatos',
    title: 'Orientação para Ração Terapêutica | Dra. Thais Vieira',
    headline: 'Plano e Orientação para Ração Terapêutica em Cães e Gatos',
    description: 'Prescrição e acompanhamento técnico para rações coadjuvantes (renais, hipoalergênicas, obesas, gastrointestinais). O alimento como parte do tratamento médico.',
    keywords: ['orientação para ração terapêutica', 'ração medicamentosa cães gatos', 'nutrição clínica veterinária'],
    benefits: [
      'Indicação precisa da linha terapêutica certa para o diagnóstico do pet',
      'Manejamento de transição para aceitação por animais doentes',
      'Combinação de tratamento nutricional com a equipe veterinária assistente',
      'Monitoramento de peso e marcadores biológicos'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Pets diagnosticados com condições de saúde que exigem ração especial',
      'Tutores em dúvida sobre qual marca ou linha de ração terapêutica escolher',
      'Animais com recusa alimentar em relação à ração medicamentosa'
    ],
    whatsIncluded: [
      'Indicação da marca e quantidade diária ideal',
      'Técnicas para melhorar a aceitação da ração terapêutica',
      'Consulta online por R$ 200,00 e acompanhamento WhatsApp'
    ],
    detailedText: 'Rações terapêuticas são parte do tratamento médico veterinário para condições como doença renal, dermatites e obesidade. A orientação especializada garante que seu pet receba a dosagem diária correta.',
    faqs: [
      {
        question: 'Ração terapêutica precisa de indicação veterinária?',
        answer: 'Sim, pois contêm formulações específicas para doenças e não devem ser usadas sem acompanhamento técnico.'
      }
    ],
    relatedLinks: [
      { url: '/obesidade-em-caes-e-gatos', text: 'Plano para pet obeso' },
      { url: '/doenca-renal-em-caes-e-gatos', text: 'Manejo renal' }
    ],
    emergencyDisclaimer: 'Aviso: Não substitui atendimento emergencial presencial.'
  },
  'consulta-online': {
    slug: 'consulta-online',
    title: 'Consulta Nutricional Veterinária Online | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária Online para Cães e Gatos em Todo o Brasil',
    description: 'Atendimento veterinário especializado 100% online. Prescrição de dietas personalizadas, cálculo preciso de porções e acompanhamento contínuo para cães e gatos.',
    keywords: ['consulta nutricional veterinária online', 'consulta online pet nutrólogo', 'veterinária nutrologia online'],
    benefits: [
      'Atendimento 100% online por videochamada no conforto do seu lar',
      'Plano alimentar completo e individualizado para cães e gatos',
      'Cálculo calórico e de gramatura exata para saúde e longevidade',
      'Acompanhamento contínuo por WhatsApp com a Dra. Thais Vieira'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Pets com doenças diagnosticadas (renais, alérgicos, hepáticos, gastrointestinais)',
      'Cães e gatos precisando de plano de emagrecimento saudável',
      'Tutores que desejam migrar para Alimentação Natural balanceada ou dieta mista',
      'Tutores que buscam acompanhamento veterinário completo e contínuo'
    ],
    whatsIncluded: [
      'Análise detalhada de exames laboratoriais, histórico e queixas clínicas',
      'Envio do plano alimentar completo em PDF com orientações de preparo ou marcas',
      'Cálculo de suplementação vitamínico-mineral quando necessário',
      'Suporte direto por WhatsApp durante a adaptação'
    ],
    detailedText: 'A consulta nutricional veterinária completa é o formato indicado para pets com necessidades de saúde específicas, doenças diagnosticadas ou para quem busca dietas personalizadas e suplementadas sob medida.',
    faqs: [
      {
        question: 'Qual a diferença entre a consulta online e a escolha de ração?',
        answer: 'A escolha de ração é um serviço avulso e direto (R$ 100) para pets saudáveis definirem a melhor marca e porção. A consulta online completa (R$ 200) abrange pets com doenças, dietas naturais personalizadas, suplementações e acompanhamento detalhado.'
      }
    ],
    relatedLinks: [
      { url: '/escolha-de-racao', text: 'Escolha de Ração' },
      { url: '/nutricao-pet-online', text: 'Nutrição Pet Online' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta não substitui atendimento médico emergencial presencial.'
  }
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'qual-racao-dar-para-filhote',
    slug: 'qual-racao-dar-para-filhote',
    aliases: ['qual-racao-dar-para-filhote-de-cachorro', 'racao-para-filhote'],
    title: 'Qual ração dar para filhote? Guia para quem tem o primeiro pet',
    metaTitle: 'Qual ração dar para filhote? Guia Completo Primeiro Pet | Dra. Thais Vieira',
    metaDescription: 'Saiba qual ração dar para filhote, como evitar erros comuns no primeiro pet e quando buscar orientação nutricional veterinária.',
    mainKeyword: 'qual ração dar para filhote',
    secondaryKeywords: ['melhor ração para filhote', 'primeiro pet', 'ração para cachorro filhote', 'ração para gato filhote'],
    category: 'Filhotes',
    intent: 'Tutor iniciante que acabou de adotar ou comprar um filhote e está inseguro sobre a alimentação.',
    publishDate: '2026-07-20',
    readTime: '6 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária Nutróloga',
    },
    summary: 'Chegou o seu primeiro filhote em casa? Descubra como escolher a melhor ração para filhote, a frequência correta das refeições e por que o acompanhamento veterinário é indispensável nos primeiros meses.',
    image: 'https://images.pexels.com/photos/30201047/pexels-photo-30201047.jpeg',
    imageAlt: 'Filhote fofo comendo ração em tigela',
    internalLinks: [
      { url: '/escolha-de-racao', text: 'escolha da melhor ração' },
      { url: '/consulta-online', text: 'consulta nutricional online' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Se você tem um filhote e quer escolher a alimentação com segurança, agende uma orientação para escolha de ração com a Dra. Thais Vieira.',
    contentMarkdown: `
A chegada do seu **primeiro pet** em casa é um momento mágico e cheio de alegria, mas também traz muitas dúvidas urgentes: *Qual ração dar para filhote? Quantas vezes ao dia ele precisa comer? Posso dar petiscos ou frutas logo nas primeiras semanas?*

Nos primeiros meses de vida, tanto cães quanto gatos passam pela fase de crescimento mais acelerado. As escolhas nutricionais feitas nessa etapa influenciam diretamente o desenvolvimento ósseo, muscular, imunológico e cognitivo do animal para o resto da vida.

Neste guia prático preparado com autoridade médica veterinária, você vai entender exatamente como alimentar seu filhote com segurança, evitar erros comuns e saber quando procurar orientação profissional.

---

## 1. Por que os filhotes precisam de ração específica?

Filhotes **não são adultos pequenos**. As necessidades de energia, proteínas, cálcio, fósforo e ácidos graxos essenciais (como DHA) são significativamente maiores na fase de crescimento.

Oferecer ração de adulto para um filhote pode provocar déficits graves, estagnação no ganho de peso ou problemas no desenvolvimento esquelético. 

Ao buscar **qual ração dar para filhote**, atente-se às seguintes características fundamentais:
* **Nível Proteico Elevado:** Proteínas de alta digestibilidade para construção muscular e síntese tecidual.
* **Balanço Cálcio e Fósforo:** Proporção milimetricamente ajustada para a ossificação correta (especialmente crítica em cães de porte grande e gigante).
* **Grãos no Tamanho Certo:** Formato e textura adequados para a dentição decídua (dentes de leite) e facilidade de apreensão.
* **Adição de DHA:** Ácido graxo essencial importante para o desenvolvimento do cérebro e da visão do filhote.

---

## 2. Ração Super Premium x Premium x Standard: Qual escolher?

Ao caminhar pelo corredor de pet shop ou pesquisar na internet pela **melhor ração para filhote**, você encontrará diversas categorias comerciais:

1. **Super Premium / Alta Nutrição:** Utilizam fontes de proteínas nobres e altamente digestíveis, possuem suplementação com prebióticos, DHA e menor necessidade de volume por refeição.
2. **Premium / Premium Especial:** Boa relação custo-benefício, com ingredientes selecionados e boa aceitação.
3. **Standard ou Econômicas:** Geralmente possuem menor digestibilidade e requerem porções maiores para atingir o requerimento nutricional.

> **Dica da Dra. Thais:** A escolha da marca deve respeitar a espécie (filhote de cão ou gato), o porte esperado na vida adulta (porte pequeno, médio, grande ou gigante) e a tolerância individual do filhote. Para acertar de primeira sem desperdiçar dinheiro, conheça o serviço dedicado de [escolha de ração](/escolha-de-racao).

---

## 3. Quantas vezes ao dia o filhote deve comer?

O estômago do filhote é pequeno e sua capacidade de armazenamento é limitada, enquanto seu gasto energético é altíssimo. Por isso, a quantidade diária deve ser fracionada em várias porções:

* **De 2 a 4 meses de idade:** Fracionar em 4 refeições diárias.
* **De 4 a 6 meses de idade:** Fracionar em 3 refeições diárias.
* **A partir dos 6 meses:** Fracionar em 2 a 3 refeições diárias.

> **Importante para Gatos Filhotes:** Felinos possuem hábito alimentar fracionado de natureza carnívora. Eles preferem fazer várias pequenas refeições ao longo do dia e da noite.

---

## 4. Ração Seca ou Ração Úmida (Sachê/Lata)?

Ambas podem e devem fazer parte do enriquecimento alimentar do filhote! 

* **Ração Seca:** Prática, auxilia no estímulo da mastigação.
* **Ração Úmida:** Essencial especialmente para **gatos filhotes**, pois aumenta a ingestão hídrica natural e previne futuras complicações renais e urinárias.

Ao introduzir alimento úmido, certifique-se de que a embalagem informe "alimento completo para filhotes" (e não apenas petisco complementar).

---

## 5. Transição Alimentar: Evite diarreias e desconfortos

Ao trazer o filhote para casa, mantenha inicialmente a mesma ração que ele comia no canil ou abrigo por pelo menos 5 a 7 dias. Mudar o ambiente e a alimentação simultaneamente causa estresse e distúrbios gastrointestinais.

Caso queira trocar de marca, faça a **transição gradual ao longo de 7 dias**:
* **Dias 1 e 2:** 75% da ração antiga + 25% da ração nova
* **Dias 3 e 4:** 50% da ração antiga + 50% da ração nova
* **Dias 5 e 6:** 25% da ração antiga + 75% da ração nova
* **Dia 7:** 100% da ração nova

---

## 6. Erros comuns no primeiro pet que você deve evitar

1. **Deixar comida disponível o dia todo para cães:** Pode gerar seletividade alimentar, perda de interesse e obesidade precoce.
2. **Oferecer leite de vaca:** Provoca diarreia severa devido à incapacidade de digerir o alto teor de lactose do leite bovino.
3. **Oferecer alimentos proibidos:** Chocolate, cebola, alho, uva, xilitol e ossos cozidos são altamente tóxicos ou perigosos.
4. **Introduzir Alimentação Natural sem prescrição médica:** A dieta caseira sem suplementação vitamínico-mineral calculada por um especialista causa deformidades ósseas irreversíveis em filhotes.

---

## A importância do acompanhamento nutricional individualizado

Cada filhote é único em sua velocidade de crescimento, nível de atividade física e sensibilidade digestiva. 

Se você acabou de adotar ou comprar seu pet e quer uma orientação prática e acessível para definir a ração exata e a quantidade diária em gramas, conheça o nosso atendimento de [escolha de ração](/escolha-de-racao).

Caso queira um acompanhamento contínuo e mais amplo sobre todas as fases de crescimento, conheça também a [consulta nutricional pet online](/consulta-online)!

---

*Aviso Legal: Este artigo possui caráter estritamente educativo e não substitui a consulta médica veterinária presencial ou teleorientação com exame clínico individualizado. Em caso de apatia, recusa alimentar, diarreia ou vômitos em filhotes, procure atendimento veterinário imediato.*
`
  },
  {
    id: 'alimentacao-natural-para-caes-guia',
    slug: 'alimentacao-natural-para-caes-guia',
    aliases: ['alimentacao-natural-para-cachorro', 'alimentacao-natural-para-caes'],
    title: 'Alimentação Natural para Cães: O Que É, Vantagens e Cuidados Necessários',
    metaTitle: 'Alimentação Natural para Cães: Guia Completo | Dra. Thais Vieira',
    metaDescription: 'Quer migrar para Alimentação Natural para cães com segurança? Saiba como funciona a dieta caseira cozida balanceada, suplementos obrigatórios e cuidados veterinários.',
    mainKeyword: 'alimentação natural para cães',
    secondaryKeywords: ['dieta caseira cachorro', 'AN para cães', 'alimentação saudável cães', 'nutrólogo veterinário cães'],
    category: 'Alimentação natural',
    intent: 'Tutor que busca alternativa à ração comercial e deseja oferecer comida caseira saudável para o cão.',
    publishDate: '2026-07-15',
    readTime: '7 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária Nutróloga',
    },
    summary: 'Saiba o que é a Alimentação Natural (AN) cozida para cães, quais os benefícios para cães com alergia ou seletivos, e por que o cálculo individualizado e a suplementação são vitais.',
    image: 'https://bonapetti.com.br/wp-content/uploads/2021/04/BannerHome.jpg',
    imageAlt: 'Cão feliz e saudável aguardando refeição caseira',
    internalLinks: [
      { url: '/alimentacao-natural-para-caes/', text: 'alimentação natural para cães' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Quer migrar para a Alimentação Natural com segurança? Agende sua avaliação com a Dra. Thais Vieira.',
    contentMarkdown: `
A **Alimentação Natural (AN) para cães** vem conquistando milhares de tutores no Brasil. E não é para menos: refeições preparadas com ingredientes frescos, carnes de qualidade, legumes e carboidratos selecionados trazem visível melhoria na disposição, na pelagem e na digestão dos cães.

Contudo, "alimentação natural" **não é dar restos de comida da mesa do tutor**. A nutrição canina é complexa e exige um balanço exato de aminoácidos, ácidos graxos, minerais e vitaminas.

Neste artigo, você descobrirá como funciona a [alimentação natural para cães](/alimentacao-natural-para-caes/) sob prescrição médica veterinária.

---

## O que é a Alimentação Natural Cozida?

A Alimentação Natural Cozida para cães consiste em uma dieta elaborada exclusivamente com alimentos próprios para consumo animal, preparados sem sal excessivo, sem temperos tóxicos (como alho e cebola) e formulada sob medida por uma médica veterinária especialista em nutrição.

Ela é composta por proporções calculadas de:
1. **Proteínas de Alta Qualidade:** Peito de frango, carne bovina magra, peixes, ovos ou suíno.
2. **Carboidratos e Fibras:** Batata-doce, mandioquinha, arroz integral, abóbora, chuchu, brócolis e cenoura.
3. **Vísceras:** Fontes concentradas de vitaminas (como fígado bovino, coração e moela).
4. **Gorduras Boas:** Óleo de peixe (Ômega 3) e óleos vegetais específicos.
5. **Suplemento Vitamínico-Mineral:** Item 100% obrigatório em todas as dietas caseiras.

---

## Principais Benefícios da Alimentação Natural

* **Alta Palatabilidade:** Excelente aceitação por cães exigentes ou seletivos.
* **Melhoria da Qualidade das Fezes:** Menor volume e odor reduzido devido à alta digestibilidade dos ingredientes.
* **Pele Calma e Pelagem Brilhante:** Auxilia no manejo de cães com dermatites e sensibilidade alimentar.
* **Aumento da Ingestão de Água:** Os alimentos cozidos contêm cerca de 70% a 80% de umidade natural.

---

## O perigo da dieta caseira sem suplementação

Nenhum alimento na natureza possui todos os nutrientes necessários nas proporções perfeitas para um cão. Carnes e vegetais cozidos isolados **não fornecem cálcio suficiente**, nem teores ideais de cobre, zinco, iodo, vitamina D e vitamina E.

A falta do suplemento específico gera deficiências crônicas graves, levando a fraturas por desmineralização óssea, anemia, lesões de pele e alteração cardíaca.

---

## Como iniciar o processo de transição?

Antes de alterar a dieta do seu cão, agende uma [consulta nutricional pet online](/nutricao-pet-online/) ou presencial. A médica veterinária analisará os exames de sangue recentes do pet, avaliará o peso ideal e criará a receita exclusiva em gramas com o suplemento adequado.

*Aviso Legal: Artigo educativo. Nunca substitua a alimentação do seu cão sem supervisão veterinária.*
`
  },
  {
    id: 'alimentacao-natural-e-umida-para-gatos',
    slug: 'alimentacao-natural-e-umida-para-gatos',
    aliases: ['alimentacao-natural-para-gatos-e-segura', 'alimentacao-natural-para-gatos'],
    title: 'Alimentação Natural e Úmida para Gatos: Como Garantir Hidratação e Saúde Renal',
    metaTitle: 'Alimentação Natural e Úmida para Gatos | Dra. Thais Vieira',
    metaDescription: 'Descubra como a alimentação natural e as rações úmidas protegem a saúde renal e urinária dos gatos. Entenda as necessidades carnívoras felinas.',
    mainKeyword: 'alimentação natural para gatos',
    secondaryKeywords: ['dieta úmida gatos', 'saúde renal felina', 'nutrição para gatos', 'gato não bebe água'],
    category: 'Gatos',
    intent: 'Tutor de gatos preocupado com consumo de água, cálculos urinários e nutrição carnívora estrita.',
    publishDate: '2026-07-10',
    readTime: '6 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária Nutróloga',
    },
    summary: 'Os gatos são carnívoros estritos com baixa sede natural. Descubra como a dieta úmida e a Alimentação Natural para gatos previnem doenças renais e urinárias.',
    image: 'https://images.pexels.com/photos/38151497/pexels-photo-38151497.jpeg',
    imageAlt: 'Gato hidratado e saudável olhando atentamente',
    internalLinks: [
      { url: '/alimentacao-natural-para-gatos/', text: 'alimentação natural para gatos' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Proteja os rins do seu gato com um plano alimentar personalizado. Agende uma consulta com a Dra. Thais Vieira.',
    contentMarkdown: `
Os felinos possuem uma fisiologia fascinante e única. Originários de ancestrais do deserto, os gatos não possuem o reflexo de sede tão aguçado quanto os cães. Na natureza, eles obtêm a maior parte da água consumindo suas presas (compostas por cerca de 70% de água).

Quando um gato alimenta-se exclusivamente de ração seca (que contém apenas cerca de 8% a 10% de umidade), ele raramente compensa bebendo água suficiente no potinho. Isso gera urina muito concentrada, abrindo portas para cristais urinários, obstruções uretrais e sobrecarga renal.

Por isso, o investimento em [alimentação natural para gatos](/alimentacao-natural-para-gatos/) e rações úmidas completas é uma das decisões de saúde mais inteligentes que um tutor pode tomar.

---

## 1. O Gato é um Carnívoro Estrito

Diferente dos cães (que são carnívoros facultativos ou adaptáveis), os gatos necessitam obrigatoriamente de nutrientes encontrados nas proteínas animais:
* **Taurina:** Aminoácido vital para o coração e retina.
* **Arginina:** Indispensável para o ciclo da ureia.
* **Vitamina A Pré-formada:** Felinos não convertem betacaroteno em vitamina A.
* **Ácido Araquidônico:** Gordura essencial que só existe em tecidos animais.

---

## 2. Benefícios da Dieta Úmida e Alimentação Natural

1. **Hidratação Constante:** A água está inserida na própria refeição.
2. **Proteção Renal e Urinária:** Aumenta o volume urinário e diminui a densidade dos sais urinários.
3. **Controle de Peso:** Proteínas com baixos carboidratos mantêm a massa magra sem gerar picos glicêmicos.

---

## 3. Cuidado com a Inapetência Felina!

Gatos são extremamente neo-fóbicos (têm receio de alimentos novos). Se a transição alimentar for feita de forma brusca e o gato passar mais de 24 a 48 horas sem comer, ele corre o risco de desenvolver **Lipidose Hepática**, uma complicação grave.

Por esse motivo, toda mudança de dieta felina deve ser orientada com técnicas de transição comportamental e nutricional desenvolvidas em uma [consulta nutricional pet online](/nutricao-pet-online/).

---

*Aviso Legal: Conteúdo educativo. Em caso de inapetência ou prostração no gato, consulte o veterinário imediatamente.*
`
  },
  {
    id: 'racao-terapeutica-para-caes-e-gatos-guia',
    slug: 'racao-terapeutica-para-caes-e-gatos-guia',
    aliases: ['racao-terapeutica-para-caes-e-gatos'],
    title: 'Ração Terapêutica para Cães e Gatos: Quando Usar e Por Que Precisa de Orientação Veterinária',
    metaTitle: 'Ração Terapêutica para Cães e Gatos | Dra. Thais Vieira',
    metaDescription: 'O que são rações coadjuvantes ou terapêuticas? Entenda quando são indicadas para problemas renais, alérgicos, gastrointestinais e obesidade.',
    mainKeyword: 'orientação para ração terapêutica',
    secondaryKeywords: ['ração medicamentosa cães', 'ração renal gatos', 'ração hipoalergênica', 'nutrição clínica veterinária'],
    category: 'Rações terapêuticas',
    intent: 'Tutor de pet diagnosticado com doença crônica procurando entender a prescrição de ração medicamentosa.',
    publishDate: '2026-07-05',
    readTime: '6 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária Nutróloga',
    },
    summary: 'Rações terapêuticas (ou coadjuvantes) funcionam como parte do tratamento médico de cães e gatos com insuficiência renal, alergias, obesidade ou pancreatite.',
    image: 'https://images.pexels.com/photos/8434744/pexels-photo-8434744.jpeg',
    imageAlt: 'Veterinária cuidando carinhosamente de um paciente pet',
    internalLinks: [
      { url: '/racao-terapeutica-para-caes-e-gatos/', text: 'orientação para ração terapêutica' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Seu pet recebeu indicação de ração especial? Agende uma orientação para ração terapêutica com a Dra. Thais Vieira.',
    contentMarkdown: `
As **rações terapêuticas** (também chamadas de rações coadjuvantes ou medicinais) são formulações nutricionais desenvolvidas especificamente para auxiliar no tratamento de doenças agudas ou crônicas em cães e gatos.

Diferente das rações de manutenção diária, as rações terapêuticas possuem modificações profundas nos níveis de fósforo, sódio, proteínas, fibras, eletrólitos e densidade calórica.

Por isso, obter uma [orientação para ração terapêutica](/racao-terapeutica-para-caes-e-gatos/) com um médico veterinário é um passo indispensável para garantir que o alimento ajude no tratamento sem causar outros desequilíbrios.

---

## Principais Linhas Terapêuticas e Suas Indicações

1. **Rações Renais (Renal / Kidney):** Possuem teor reduzido de fósforo e proteína de altíssima digestibilidade para poupar a função dos rins e prevenir crises urêmicas em cães e gatos idosos ou doentes renais.
2. **Rações Hipoalergênicas (Hypoallergenic / Anallergenic):** Utilizam proteínas hidrolisadas (quebradas em partículas tão pequenas que o sistema imunológico não as reconhece como alergênico) para investigar e controlar dermatite atópica e sensibilidade alimentar.
3. **Rações Gastrointestinais (Gastrointestinal / Intestinal):** Baixo teor de gordura, alta digestibilidade e fibras prebióticas para recuperar a mucosa intestinal após episódios de vômitos ou diarreias.
4. **Rações para Obesidade e Saciedade (Satiety / Weight Management):** Ricas em fibras e proteínas, projetadas para promover perda de gordura preservando massa muscular sem passar fome.

---

## Por que elas NÃO devem ser oferecidas por conta própria?

Dar uma ração renal para um cão saudável pode causar privação protéica indesejada. Da mesma forma, oferecer uma ração para obesidade em um filhote em crescimento pode prejudicar seu desenvolvimento.

Através de uma [consulta nutricional pet online](/nutricao-pet-online/), avaliamos o diagnóstico médico, ajustamos a dose diária exata e definimos o tempo de uso necessário.

---

*Aviso Legal: As rações terapêuticas devem ser prescritas obrigatoriamente por um médico veterinário.*
`
  },
  {
    id: 'como-escolher-a-melhor-racao',
    slug: 'como-escolher-a-melhor-racao',
    title: 'Como Escolher a Melhor Ração para Cães e Gatos: Rótulo, Proteína e Ingredientes',
    metaTitle: 'Como Escolher a Melhor Ração para Cães e Gatos | Dra. Thais Vieira',
    metaDescription: 'Aprenda a ler o rótulo da ração do seu pet, identificar os primeiros ingredientes, nível de proteína e evitar pegadinhas no pet shop.',
    mainKeyword: 'como escolher a melhor ração',
    secondaryKeywords: ['rótulo de ração', 'melhor ração cachorro', 'ração super premium vale a pena', 'nutrologia pet'],
    category: 'Escolha de ração',
    intent: 'Tutor querendo aprender a avaliar a qualidade da ração comercial nas prateleiras.',
    publishDate: '2026-06-28',
    readTime: '5 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária Nutróloga',
    },
    summary: 'Aprenda a decifrar a lista de ingredientes da ração, identificar fontes nobres de proteína e escolher a melhor opção dentro do seu orçamento.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Embalagem e tigela de ração selecionada',
    internalLinks: [
      { url: '/escolha-de-racao', text: 'serviço de escolha de ração' },
      { url: '/consulta-online', text: 'consulta online completa' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Dúvidas entre qual marca comprar? Agende o serviço de escolha de ração ou uma avaliação com a Dra. Thais Vieira.',
    contentMarkdown: `
Diante de tantas marcas e opções na prateleira do pet shop, é comum o tutor ficar perdido ao tentar descobrir **como escolher a melhor ração**.

A boa notícia é que o rótulo da embalagem contém as informações mais importantes que você precisa para tomar uma decisão consciente.

---

## O que olhar primeiro na lista de ingredientes?

No Brasil, os ingredientes devem ser descritos em **ordem decrescente de quantidade**. Ou seja: o primeiro ingrediente listado é o que está presente em maior abundância no alimento.

* **Ideal:** Que o primeiro e segundo ingredientes sejam fontes identificadas de proteína animal.
* **Atenção:** Se os primeiros itens da lista forem cereais (como *milho moído*, *farelo de soja* ou *quirera de arroz*), a ração possui base predominantemente vegetal.

---

## Níveis de Garantia: O que significam?

* **Proteína Bruta (Mínimo):** Indica a quantidade total de proteína. Para cães adultos.
* **Extrato Etéreo (Gordura):** Fornece energia e palatabilidade.
* **Matéria Mineral / Cinzas:** Teor de minerais. Mantenha atenção para que não seja excessivamente elevado.

---

## Como definir a ração ideal sem errar?

Em vez de arriscar comprar pacotes caros que o pet pode rejeitar ou que causem desconforto gástrico, você pode contar com uma médica veterinária nutróloga para indicar a ração ideal, calcular a porção diária exata em gramas e listar os petiscos seguros para o seu pet.

Conheça o nosso serviço exclusivo de [escolha de ração](/escolha-de-racao) para cães e gatos saudáveis! Se o seu pet tiver exames alterados ou doenças, conheça também a [consulta nutricional pet online](/nutricao-pet-online/).

---

*Aviso Legal: Artigo educativo.*
`
  },
  {
    id: 'como-funciona-consulta-nutricional-online',
    slug: 'como-funciona-consulta-nutricional-online',
    title: 'Como Funciona a Consulta Nutricional Pet Online? Guia Completo para Tutores',
    metaTitle: 'Como Funciona a Consulta Nutricional Pet Online | Dra. Thais Vieira',
    metaDescription: 'Entenda os passos da teleconsulta nutricional veterinária: anamnese, prescrição de dieta individualizada e suporte contínuo via WhatsApp.',
    mainKeyword: 'consulta nutricional pet online',
    secondaryKeywords: ['nutrólogo veterinário online', 'telemedicina veterinária nutrição', 'atendimento veterinário whatsapp'],
    category: 'Nutrição veterinária online',
    intent: 'Tutor considerando agendar teleconsulta nutricional mas curioso sobre o formato e a eficácia.',
    publishDate: '2026-06-20',
    readTime: '4 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária Nutróloga',
    },
    summary: 'A teleorientação nutricional permite que tutores de todo o Brasil recebam suporte especializado para seus cães e gatos com comodidade e ciência.',
    image: 'https://images.pexels.com/photos/27087012/pexels-photo-27087012.jpeg',
    imageAlt: 'Tutor utilizando computador e cuidando do pet com carinho',
    internalLinks: [
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
      { url: '/consulta-online', text: 'consulta online completa' },
      { url: '/escolha-de-racao', text: 'escolha de ração' }
    ],
    ctaText: 'Quer um plano nutricional exclusivo para seu cão ou gato? Agende agora sua consulta nutricional pet online.',
    contentMarkdown: `
Com o avanço da tecnologia e da regulamentação veterinária no Brasil, a **consulta nutricional pet online** tornou-se a maneira mais prática e humanizada de cuidar da saúde alimentar de cães e gatos em qualquer estado do país.

Sem a necessidade de estressar seu pet transportando-o até uma clínica, você conversa diretamente com a médica veterinária especialista em nutrologia.

---

## Passo a Passo do Atendimento Online

1. **Preenchimento do Formulário Nutricional (Anamnese):** Você nos informa a idade, peso, raça, rotina de exercícios, alimentos atuais e exames recentes do pet.
2. **Sessão em Vídeo ou Alinhamento Direto:** Analisamos os dados do seu pet e conversamos sobre as metas (emagrecimento, transição para alimentação natural, controle de alergia ou escolha da melhor ração).
3. **Envio do Plano Alimentar Personalizado:** Você recebe por e-mail um relatório com o cálculo exato da gramatura, indicação dos alimentos e guia de petiscos.
4. **Suporte e Acompanhamento via WhatsApp:** Acompanhamos o progresso e tiramos dúvidas durante a adaptação do pet.

Agende agora mesmo sua [consulta nutricional pet online](/nutricao-pet-online/)!

---

*Aviso Legal: A teleorientação é realizada em conformidade com as normas regulatórias do Conselho Federal de Medicina Veterinária (CFMV).*
`
  },
  {
    id: 'alimentacao-para-pet-adotado',
    slug: 'alimentacao-para-pet-adotado',
    aliases: ['o-que-dar-para-pet-adotado', 'pet-adotado-alimentacao', 'como-alimentar-cachorro-resgatado'],
    title: 'O que dar para pet adotado? Guia de alimentação para cães e gatos resgatados',
    metaTitle: 'O que dar para Pet Adotado? Guia de Alimentação | Dra. Thais Vieira',
    metaDescription: 'Acabou de adotar um cão ou gato? Saiba o que dar de comer, como fazer a transição de ração sem diarreia e quando escolher a ração ideal.',
    mainKeyword: 'o que dar para pet adotado',
    secondaryKeywords: ['alimentação pet adotado', 'ração para cachorro resgatado', 'como alimentar gato adotado', 'transição de ração'],
    category: 'Escolha de ração',
    intent: 'Tutor que acabou de resgatar ou adotar um pet de abrigo/rua e precisa saber o que dar de comer com segurança.',
    publishDate: '2026-07-28',
    readTime: '5 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária Nutróloga',
    },
    summary: 'Adotou um cachorro ou gato e não sabe qual ração dar ou quanto oferecer? Veja as orientações da veterinária para proteger o estômago e garantir a nutrição certa.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Cão recém-adotado recebendo carinho e comida saudável',
    internalLinks: [
      { url: '/escolha-de-racao', text: 'escolha de ração para cães e gatos' },
      { url: '/consulta-online', text: 'consulta nutricional online' },
      { url: '/nutricao-pet-online', text: 'nutrição pet online' },
    ],
    ctaText: 'Acabou de adotar e quer acertar na ração e na porção? Conheça o serviço de escolha de ração da Dra. Thais Vieira.',
    contentMarkdown: `
Adotar um cão ou gato é um ato de amor transformador. No entanto, os primeiros dias costumam vir acompanhados de muitas dúvidas: **o que dar para pet adotado comer?**, qual ração comprar e como evitar problemas digestivos causados pela mudança brusca de rotina?

Animais resgatados de abrigos, ONGs ou das ruas frequentemente passaram por privações alimentares, dietas de qualidade instável ou períodos de estresse intenso. O estômago e a microbiota intestinal deles precisam de cuidados redobrados.

---

## 1. Descubra o que o pet comia antes (se possível)

Se você adotou de uma ONG ou protetor, pergunte qual marca de ração o pet estava recebendo. Mesmo que não seja a ração de sua preferência a longo prazo, manter essa mesma ração pelos primeiros 5 a 7 dias em casa previne episódios de diarreia decorrentes da soma de estresse e troca alimentar.

---

## 2. Como fazer a transição para a nova ração

Ao introduzir uma ração de melhor qualidade ou adequada ao porte e idade do pet, faça a troca progressiva em 7 dias:

* **Dias 1 e 2:** 75% da ração anterior + 25% da ração nova
* **Dias 3 e 4:** 50% da ração anterior + 50% da ração nova
* **Dias 5 e 6:** 25% da ração anterior + 75% da ração nova
* **Dia 7 em diante:** 100% da nova ração

---

## 3. O erro mais comum: a porção no "olhômetro"

Muitos tutores de pets adotados tendem a encher o pote por compaixão ("ele passou fome antes"). Porém, o excesso de alimento sobrecarrega o pâncreas, causa fezes moles e leva ao ganho acelerado de gordura corporal.

A quantidade diária em gramas deve ser calculada de acordo com o peso corporal ideal, idade (filhote, adulto ou idoso) e nível de atividade física do animal.

---

## 4. Como acertar na escolha da ração sem gastar à toa

Você não precisa gastar fortunas em rações importadas para dar uma vida saudável ao seu pet resgatado. O essencial é encontrar uma fórmula com boa digestibilidade, proteínas de qualidade e que caiba confortavelmente no seu orçamento mensal.

Para não perder tempo com tentativa e erro nem desperdiçar pacotes de ração, você pode contar com o serviço de [escolha de ração para cães e gatos](/escolha-de-racao) da Dra. Thais Vieira. 

Neste atendimento avulso e direto:
1. Definimos a ração ideal para o perfil do seu pet adotado;
2. Calculamos a porção diária exata em gramas;
3. Indicamos petiscos e agrados seguros que não desequilibram a dieta.

Caso seu pet já tenha histórico de exames alterados ou suspeita de alergia alimentar, você também pode optar pela [consulta nutricional pet online](/nutricao-pet-online/).

---

*Aviso Legal: Artigo informativo. Pets recém-adotados devem passar por exame clínico veterinário presencial para desverminação, vacinação e avaliação geral de saúde.*
`
  }
];
