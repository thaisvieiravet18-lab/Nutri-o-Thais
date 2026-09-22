import { BlogArticle, ServiceLandingInfo } from '../types/blog';

export const BLOG_CATEGORIES = [
  'Alimentação natural',
  'Escolha de ração',
  'Gatos',
  'Filhotes',
  'Rações coadjuvantes',
  'Nutrição veterinária online',
] as const;

export const SERVICE_LANDINGS: Record<string, ServiceLandingInfo> = {
  'obesidade-em-caes-e-gatos': {
    slug: 'obesidade-em-caes-e-gatos',
    title: 'Consulta para Cachorro e Gato Obeso | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária Online para Cães e Gatos Obesos',
    description: 'Atendimento nutricional veterinário para emagrecimento pet saudável. Plano alimentar individualizado para controle de peso de cães e gatos.',
    keywords: ['consulta nutricional veterinária online cachorro obeso', 'plano alimentar para cachorro obeso', 'acompanhamento nutricional para pet obeso'],
    benefits: [
      'Cálculo calórico direcionado para perda progressiva e segura de gordura',
      'Plano alimentar individualizado (Ração Específica ou Alimentação Natural)',
      'Estratégias para aumento da saciedade e redução da ansiedade por comida',
      'Acompanhamento do peso e da condição muscular durante o processo de emagrecimento'
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
    detailedText: 'O sobrepeso pet é uma condição clínica persistente que reduz a expectativa e a qualidade de vida de cães e gatos, sobrecarregando articulações, coração e fígado. Apenas reduzir a quantidade da ração comum sem orientação técnica pode desbalancear a dieta. Com o acompanhamento nutricional individualizado da Dra. Thais Vieira, calculamos a energia necessária para que seu amigo perca gordura mantendo-se nutrido, ativo e satisfeito.',
    faqs: [
      {
        question: 'Como funciona o emagrecimento de cães e gatos na consulta online?',
        answer: 'Na consulta online, a Dra. Thais avalia a rotina, fotos, vídeos, peso atual e exames laboratoriais do pet. Em seguida, calcula a necessidade calórica exata para uma perda de peso gradativa e estrutura o plano alimentar ideal.'
      },
      {
        question: 'Meu pet vai passar fome durante a dieta?',
        answer: 'Não. O plano alimentar é elaborado priorizando alimentos ou rações com alto teor de fibras e proteínas de qualidade, promovendo saciedade sem privação de nutrientes.'
      },
      {
        question: 'Qual o valor da consulta nutricional particular?',
        answer: 'O investimento da consulta nutricional veterinária particular é de R$ 200,00, incluindo avaliação completa, elaboração do plano alimentar e suporte direto por WhatsApp.'
      }
    ],
    relatedLinks: [
      { url: '/consulta-nutricional-online-para-caes', text: 'Consulta nutricional para cães' },
      { url: '/artrose-e-problemas-articulares-em-caes', text: 'Nutrição para cães com artrose' },
      { url: '/racao-coadjuvante-para-caes-e-gatos', text: 'Rações coadjuvantes de peso' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta nutricional veterinária é destinada ao acompanhamento nutricional de rotina e suporte alimentar. Não substitui atendimento médico veterinário emergencial presencial.'
  },
  'alergia-alimentar-em-caes-e-gatos': {
    slug: 'alergia-alimentar-em-caes-e-gatos',
    title: 'Consulta para Cachorro com Alergia Alimentar | Dra. Thais Vieira',
    headline: 'Manejo Nutricional e Dieta de Exclusão para Cães e Gatos Alérgicos',
    description: 'Manejo e suporte nutricional da alergia e intolerância alimentar em pets. Orientações de ração hipoalergênica e Alimentação Natural de exclusão.',
    keywords: ['consulta para cachorro com alergia alimentar', 'orientação de ração para cachorro com alergia', 'alergia alimentar cão e gato'],
    benefits: [
      'Identificação precisa de potenciais ingredientes alergênicos na dieta',
      'Planejamento de Dieta de Exclusão com proteína inédita ou hidrolisada',
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
      'Guia prático de petiscos permitidos com orientações para reduzir o risco de contaminação cruzada',
      'Consulta particular 100% online por R$ 200,00 com suporte via WhatsApp'
    ],
    detailedText: 'As reações adversas ao alimento podem se manifestar na pele ou no trato gastrointestinal do seu cão ou gato. O manejo nutricional com uma médica veterinária com pós-graduação em nutrição animal permite conduzir a dieta de eliminação de forma criteriosa, com acompanhamento da resposta individual ao plano alimentar, sem palpiteiras ou testes aleatórios.',
    faqs: [
      {
        question: 'Como saber se meu cachorro tem alergia alimentar?',
        answer: 'Sinais comuns incluem coceira constante (especialmente nas patas, focinho e região ventral), otites recorrentes e fezes moles. A confirmação é feita através da dieta de exclusão orientada por veterinário.'
      },
      {
        question: 'A Alimentação Natural ajuda em cães alérgicos?',
        answer: 'Sim! A Alimentação Natural permite selecionar uma única fonte de proteína inédita e um carboidrato puro, sem corantes industriais ou ingredientes artificiais.'
      }
    ],
    relatedLinks: [
      { url: '/alimentacao-natural-para-caes', text: 'Alimentação Natural para Cães' },
      { url: '/racao-coadjuvante-para-caes-e-gatos', text: 'Orientação sobre rações hipoalergênicas' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta não substitui atendimento emergencial médico veterinário presencial em casos de anafilaxia ou prostração aguda.'
  },
  'doenca-renal-em-caes-e-gatos': {
    slug: 'doenca-renal-em-caes-e-gatos',
    title: 'Nutrição Veterinária para Cão e Gato Renal | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária para Cães e Gatos Renais',
    description: 'Acompanhamento nutricional para cães e gatos com sensibilidade renal crônica. Dieta renal personalizada com controle de fósforo, proteína nobre e hidratação.',
    keywords: ['nutrição veterinária cachorro com necessidade renal', 'dieta para gato com suporte renal veterinário', 'consulta nutricional veterinária para cão renal'],
    benefits: [
      'Controle rigoroso dos níveis de fósforo, sódio e ureia no sangue',
      'Manutenção do apetite e estímulo à palatabilidade para pets seletivos',
      'Estratégias nutricionais para favorecer a hidratação e apoiar a função renal',
      'Ajustes de dieta conforme o estágio IRIS do quadro renal'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães e gatos com diagnóstico recente de sensibilidade renal crônica',
      'Pets renais que perderam o interesse pela ração renal comercial',
      'Gatos renais necessitando de maior aporte de líquidos e dieta úmida',
      'Tutores que desejam associar a Alimentação Natural Renal ao suporte clínico'
    ],
    whatsIncluded: [
      'Avaliação minuciosa de exames de ureia, creatinina, SDMA, fósforo e urinálise',
      'Planejamento individualizado de dieta renal caseira ou seleção de ração coadjuvante',
      'Manejo com ajuste nutricional individualizado e balanceamento de fósforo',
      'Consulta online em todo o Brasil por R$ 200,00 e acompanhamento por WhatsApp'
    ],
    detailedText: 'A alimentação é um dos pilares mais determinantes na sobrevida e qualidade de vida do cão ou gato com suporte renal. O controle adequado de fósforo e a oferta de proteínas de altíssima digestibilidade diminuem a sobrecarga sobre os rins, reduzindo sintomas como náusea e perda de peso.',
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
    headline: 'Manejo Nutricional Veterinário para Cães e Gatos com Necessidade Hepática',
    description: 'Dieta e nutrição veterinária para pets com alterações nas enzimas hepáticas, hepatopatias e gordura no fígado. Atendimento online para todo o Brasil.',
    keywords: ['alimentação para cachorro com problema no fígado', 'dieta personalizada para cachorro doente', 'nutrição veterinária hepática'],
    benefits: [
      'Proporções adequadas de proteína para regeneração sem causar encefalopatia',
      'Suporte nutricional e lipídico controlado',
      'Redução da sobrecarga metabólica sobre o tecido hepático',
      'Estímulo ao consumo alimentar em pacientes com inapetência'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães e gatos com exames alterados de ALT, FA, GGT ou bilirrubina',
      'Pets com diagnóstico de hepatite, lipidose hepática felina ou sobrecarga',
      'Animais em acompanhamento prolongado precisando de suporte',
      'Tutores buscando plano alimentar clínico seguro'
    ],
    whatsIncluded: [
      'Análise do histórico clínico e exames bioquímicos e de ultrassom',
      'Plano alimentar individualizado com porções e horários fracionados',
      'Orientações sobre rações hepáticas e planejamento de dieta caseira cozida',
      'Consulta 100% online por R$ 200,00 com acompanhamento via WhatsApp'
    ],
    detailedText: 'O fígado desempenha centenas de funções metabólicas vitais. Quando afetado por inflamações ou gordura, a nutrição torna-se indispensável para fornecer energia e aminoácidos essenciais para a reparação celular, evitando o acúmulo de toxinas no organismo.',
    faqs: [
      {
        question: 'Cachorro com problema no fígado precisa mudar de comida?',
        answer: 'Sim. A dieta precisa ser ajustada em teor proteico e perfil nutricional para auxiliar no bem-estar hepático sem sobrecarregar o órgão.'
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
    headline: 'Dieta e Plano Alimentar para Cães com Artrose e Displasia',
    description: 'Acompanhamento nutricional focado em saúde articular de cães idosos e com artrose. Controle de peso e suporte articular direcionado.',
    keywords: ['nutrição para cachorro com artrose', 'dieta para artrose canina', 'cão com dor articular alimentação'],
    benefits: [
      'Controle do peso corporal para diminuir a sobrecarga nas articulações',
      'Plano alimentar balanceado e suporte ao cão idoso',
      'Acompanhamento nutricional contínuo da rotina do cão',
      'Melhoria no conforto e disposição do animal nas caminhadas'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães idosos com dificuldade para levantar ou mancar ao caminhar',
      'Cães diagnosticados com osteoartrose, displasia coxofemoral ou de cotovelo',
      'Raças de grande porte com predisposição a desgaste articular',
      'Tutores que desejam nutrição com foco em bem-estar articular'
    ],
    whatsIncluded: [
      'Análise do grau de mobilidade e histórico de saúde do cão',
      'Plano alimentar individualizado focado no peso ideal e nutrição adequada',
      'Orientações sobre manejo nutricional e escolhas alimentares seguras',
      'Consulta online para todo o Brasil por R$ 200,00 com suporte no WhatsApp'
    ],
    detailedText: 'A artrose em cães causa dor crônica e perda da mobilidade. Uma dieta equilibrada aliada à manutenção do peso magro reduz o impacto contínuo sobre as articulações do pet.',
    faqs: [
      {
        question: 'A alimentação pode ajudar o cachorro com artrose?',
        answer: 'Sim! Ao manter o cão no peso ideal através de um plano nutricional balanceado, diminui-se a sobrecarga mecânica nas articulações.'
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
    headline: 'Consulta Nutricional Veterinária Online para Cães',
    description: 'Atendimento nutricional dedicado a cães de todas as idades. Planejamento de Alimentação Natural, escolha de ração e dietas especiais em todo o Brasil.',
    keywords: ['nutrição veterinária online para cães e gatos', 'consulta nutricional online cães', 'alimentação natural para cachorro suporte'],
    benefits: [
      'Análise de perfil de raça, idade, porte e nível de atividade física',
      'Indicação da ração comercial ideal ou planejamento de Alimentação Natural',
      'Gramatura exata por refeição e cálculo de petiscos saudáveis',
      'Atendimento 100% online no conforto da sua casa sem estressar o cão'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Tutores de cães filhotes, adultos ou idosos buscando plano nutricional adequado',
      'Cães com paladar exigente ou enjoados de ração seca',
      'Cães com problemas de saúde que necessitam de dieta especial',
      'Tutores que moram em qualquer região do Brasil'
    ],
    whatsIncluded: [
      'Consulta individualizada com médica veterinária com pós-graduação em nutrição animal',
      'Plano alimentar completo enviado com instruções claras e detalhadas',
      'Análise da rotina, exames clínicos e preferências do cão',
      'Atendimento por R$ 200,00 com suporte direto por WhatsApp'
    ],
    detailedText: 'Oferecer a nutrição adequada ao seu cão apoia a disposição, pelagem e digestão em todas as fases da vida. Na consulta online com a Dra. Thais Vieira, você recebe uma orientação clara, humana e técnica, ajustada às suas possibilidades e à rotina da sua família.',
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
    headline: 'Consulta Nutricional Veterinária Online para Felinos',
    description: 'Atendimento nutricional para gatos focado em saúde renal, cuidado com o trato urinário, hidratação e transição para alimentação úmida ou natural.',
    keywords: ['consulta nutricional online para gato', 'nutrição felina', 'dieta para gatos online'],
    benefits: [
      'Foco total na fisiologia carnívora estrita e hidratação do gato',
      'Suporte ao trato urinário e estímulo à hidratação (FLUTD)',
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
      'Balanceamento nutricional completo respeitando a fisiologia felina',
      'Consulta online por R$ 200,00 com suporte pós-atendimento no WhatsApp'
    ],
    detailedText: 'Os gatos possuem particularidades metabólicas únicas e necessitam de alta ingestão hídrica para proteger os rins. A consulta nutricional felina orienta estratégias para aumentar o consumo de água e manter seu felino saudável e nutrido.',
    faqs: [
      {
        question: 'Gato pode comer Alimentação Natural com segurança?',
        answer: 'Sim, mas exige rigor técnico com cálculo criterioso por médica veterinária para atender a todos os nutrientes essenciais da espécie.'
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
    description: 'Atendimento nutricional veterinário 100% online. Planejamento de dietas personalizadas, cálculo preciso de porções e acompanhamento contínuo para a saúde do seu pet.',
    keywords: ['consulta nutricional pet online', 'nutrição veterinária online', 'dieta personalizada para cães e gatos'],
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
      'Pets que precisam de orientação nutricional detalhada na alimentação',
      'Tutores que querem praticidade sem sair de casa'
    ],
    whatsIncluded: [
      'Análise de exames, histórico e hábitos do pet',
      'Cálculo e envio de plano alimentar completo',
      'Atendimento particular por R$ 200,00 e suporte direto no WhatsApp'
    ],
    detailedText: 'A consulta nutricional pet online aproxima a medicina veterinária e o atendimento clínico individualizado da sua casa. Com análise de rotina e acompanhamento atencioso, oferecemos um plano alimentar sob medida para o seu companheiro.',
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
    description: 'Aprenda como oferecer uma dieta caseira balanceada (cozida) planejada por médica veterinária. Nutrição de verdade, com nutrição completa e segura.',
    keywords: ['alimentação natural para cães', 'dieta caseira balanceada cachorro', 'AN veterinária cães'],
    benefits: [
      'Cardápio sob medida calculado com equilíbrio nutricional exato',
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
      'Elaboração de cardápio cozido balanceado',
      'Cálculo e planejamento completo das necessidades diárias',
      'Consulta online por R$ 200,00 e acompanhamento por WhatsApp'
    ],
    detailedText: 'A Alimentação Natural para cães traz vitalidade e saúde quando calculada corretamente por médica veterinária. Evite utilizar orientações genéricas da internet; procure um plano alimentar individualizado para o seu cão.',
    faqs: [
      {
        question: 'Comida caseira para cachorro precisa de cálculo profissional?',
        answer: 'Sim! Toda dieta caseira cozida para cães exige planejamento completo calculado por médica veterinária para não causar carências graves.'
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
    description: 'Dietas carnívoras estritas com alta hidratação para felinos. Orientação individualizada sobre alimentação e ingestão de água com médica veterinária com pós-graduação em nutrição animal.',
    keywords: ['alimentação natural para gatos', 'dieta úmida gatos renal', 'nutrição felina'],
    benefits: [
      'Orientação individualizada sobre alimentação e ingestão de água',
      'Transição suave para evitar inapetência felina severa',
      'Atendimento integral às exigências nutricionais felinas',
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
      'Cardápios felinos calculados de acordo com a espécie',
      'Orientações para transição sem estresse',
      'Consulta online por R$ 200,00 com suporte pós-atendimento'
    ],
    detailedText: 'Os gatos necessitam de proteína animal de alto valor biológico e hidratação adequada. A Alimentação Natural felina é planejada respeitando suas necessidades fisiológicas únicas.',
    faqs: [
      {
        question: 'Posso dar comida humana para o meu gato?',
        answer: 'Não. Alimentos com temperos inadequados ou sem balanceamento correto podem trazer prejuízos à saúde do gato.'
      }
    ],
    relatedLinks: [
      { url: '/doenca-renal-em-caes-e-gatos', text: 'Gatos com sensibilidade renal' },
      { url: '/consulta-nutricional-online-para-gatos', text: 'Consulta online para gatos' }
    ],
    emergencyDisclaimer: 'Aviso: Não substitui atendimento emergencial presencial.'
  },
  'racao-coadjuvante-para-caes-e-gatos': {
    slug: 'racao-coadjuvante-para-caes-e-gatos',
    title: 'Orientação para Ração Coadjuvante Especial | Dra. Thais Vieira',
    headline: 'Plano e Orientação para Ração Coadjuvante em Cães e Gatos',
    description: 'Orientação e acompanhamento técnico para rações coadjuvantes (renais, hipoalergênicas, saciedade, gastrointestinais). O alimento como suporte nutricional diário.',
    keywords: ['orientação para ração coadjuvante', 'ração coadjuvante cães gatos', 'nutrição clínica veterinária'],
    benefits: [
      'Indicação precisa da linha coadjuvante certa para a fase do pet',
      'Manejamento de transição para aceitação por animais doentes',
      'Alinhamento do suporte nutricional com a equipe veterinária assistente',
      'Monitoramento de peso e marcadores biológicos'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Pets diagnosticados com condições de saúde que exigem ração especial',
      'Tutores em dúvida sobre qual marca ou linha de ração coadjuvante escolher',
      'Animais com recusa alimentar em relação à ração coadjuvante'
    ],
    whatsIncluded: [
      'Indicação da marca e quantidade diária ideal',
      'Técnicas para melhorar a aceitação da ração coadjuvante',
      'Consulta online por R$ 200,00 e acompanhamento WhatsApp'
    ],
    detailedText: 'Rações coadjuvantes são aliadas importantes para condições como sensibilidade renal, pele sensível e sobrepeso. A orientação profissional individualizada proporciona que seu pet receba a quantidade diária correta.',
    faqs: [
      {
        question: 'Ração coadjuvante precisa de indicação veterinária?',
        answer: 'Sim, pois contêm composições específicas para necessidades clínicas e não devem ser usadas sem acompanhamento profissional.'
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
    description: 'Atendimento veterinário clínico 100% online. Planejamento de dietas personalizadas, cálculo preciso de porções e acompanhamento contínuo para cães e gatos.',
    keywords: ['consulta nutricional veterinária online', 'consulta online pet nutrição', 'veterinária nutrição animal online'],
    benefits: [
      'Atendimento 100% online por videochamada no conforto do seu lar',
      'Plano alimentar completo e individualizado para cães e gatos',
      'Cálculo calórico e de gramatura exata para suporte nutricional integral',
      'Acompanhamento contínuo por WhatsApp com a Dra. Thais Vieira'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Pets com acompanhamento clínico (renais, alérgicos, hepáticos, gastrointestinais)',
      'Cães e gatos precisando de plano de emagrecimento saudável',
      'Tutores que desejam migrar para Alimentação Natural balanceada ou dieta mista',
      'Tutores que buscam acompanhamento veterinário completo e contínuo'
    ],
    whatsIncluded: [
      'Análise detalhada de exames laboratoriais, histórico e queixas clínicas',
      'Envio do plano alimentar completo em PDF com orientações de preparo ou marcas',
      'Cálculo e planejamento alimentar sob medida quando necessário',
      'Suporte direto por WhatsApp durante a adaptação'
    ],
    detailedText: 'A consulta nutricional veterinária completa é o formato indicado para pets com necessidades clínicas específicas ou para quem busca dietas personalizadas e balanceadas sob medida.',
    faqs: [
      {
        question: 'Qual a diferença entre a consulta online e a escolha de ração?',
        answer: 'A escolha de ração é uma orientação nutricional avulsa (R$ 150) para selecionar a ração mais adequada, calcular porções e planejar a transição. Já a consulta nutricional completa (R$ 200) abrange plano alimentar individualizado (Alimentação Natural, mista ou ração coadjuvante), avaliação clínica e 30 dias de acompanhamento por WhatsApp.'
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
      role: 'Médica Veterinária com pós-graduação em nutrição animal',
      crmv: 'CRMV-SP 55784',
    },
    summary: 'Chegou o seu primeiro filhote em casa? Descubra como escolher a melhor ração para filhote, a frequência correta das refeições e por que o acompanhamento veterinário é indispensável nos primeiros meses.',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=1200&h=675&q=80',
    imageAlt: 'Filhote fofo de cachorro olhando atento e saudável',
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

Filhotes **não são adultos pequenos**. As necessidades de energia, proteínas, cálcio e fósforo são significativamente maiores na fase de crescimento.

Oferecer ração de adulto para um filhote pode provocar déficits, estagnação no ganho de peso ou problemas no desenvolvimento esquelético. 

Ao buscar **qual ração dar para filhote**, atente-se às seguintes características fundamentais:
* **Nível Proteico Elevado:** Proteínas de alta digestibilidade para construção muscular e síntese tecidual.
* **Balanço Cálcio e Fósforo:** Proporção ajustada para a ossificação correta (especialmente crítica em cães de porte grande e gigante).
* **Grãos no Tamanho Certo:** Formato e textura adequados para a dentição decídua (dentes de leite) e facilidade de apreensão.
* **Perfil Nutricional Completo:** Alimento desenvolvido especificamente para suportar o desenvolvimento saudável do filhote.

---

## 2. Ração Super Premium x Premium x Standard: Qual escolher?

Ao caminhar pelo corredor de pet shop ou pesquisar na internet pela **melhor ração para filhote**, você encontrará diversas categorias comerciais:

1. **Super Premium / Alta Nutrição:** Utilizam fontes de proteínas nobres e altamente digestíveis, com excelente aproveitamento e menor necessidade de volume por refeição.
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

Ambas podem e devem fazer parte do estímulo alimentar positivo do filhote! 

* **Ração Seca:** Prática, auxilia no estímulo da mastigação.
* **Ração Úmida:** Essencial especialmente para **gatos filhotes**, pois aumenta a ingestão hídrica natural e favorece a saúde renal e urinária ao longo da vida.

Ao introduzir alimento úmido, certifique-se de que a embalagem informe "alimento completo para filhotes" (e não apenas petisco ocasional).

---

## 5. Transição Alimentar: Evite diarreias e desconfortos

Ao trazer o filhote para casa, mantenha inicialmente a mesma ração que ele comia no canil ou abrigo por pelo menos 5 a 7 dias. Mudar o ambiente e a alimentação simultaneamente causa estresse e desconforto digestivo.

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
4. **Introduzir Alimentação Natural sem acompanhamento profissional:** A dieta caseira sem planejamento balanceado calculado por uma médica veterinária com pós-graduação em nutrição animal causa prejuízos ao crescimento em filhotes.

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
    metaDescription: 'Quer migrar para Alimentação Natural para cães com segurança? Saiba como funciona a dieta caseira cozida balanceada, nutrientes essenciais obrigatórios e cuidados veterinários.',
    mainKeyword: 'alimentação natural para cães',
    secondaryKeywords: ['dieta caseira cachorro', 'AN para cães', 'alimentação saudável cães'],
    category: 'Alimentação natural',
    intent: 'Tutor que busca alternativa à ração comercial e deseja oferecer comida caseira saudável para o cão.',
    publishDate: '2026-07-15',
    readTime: '7 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária com pós-graduação em nutrição animal',
      crmv: 'CRMV-SP 55784',
    },
    summary: 'Saiba o que é a Alimentação Natural (AN) cozida para cães, quais os benefícios para cães com alergia ou seletivos, e por que o cálculo individualizado e o equilíbrio de nutrientes são vitais.',
    image: 'https://bonapetti.com.br/wp-content/uploads/2021/04/BannerHome.jpg',
    imageAlt: 'Cão feliz e saudável aguardando refeição caseira',
    internalLinks: [
      { url: '/alimentacao-natural-para-caes/', text: 'alimentação natural para cães' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Quer migrar para a Alimentação Natural com segurança? Agende sua avaliação com a Dra. Thais Vieira.',
    contentMarkdown: `
A **Alimentação Natural (AN) para cães** vem conquistando milhares de tutores no Brasil. E não é para menos: refeições preparadas com ingredientes frescos, carnes de qualidade, legumes e carboidratos selecionados permitem uma avaliação atenta e o acompanhamento contínuo da disposição, da pelagem e da digestão dos cães, respeitando a individualidade de cada organismo.

Contudo, "alimentação natural" **não é dar restos de comida da mesa do tutor**. A nutrição canina é complexa e exige um balanço rigoroso de proteínas, fontes energéticas e nutrientes essenciais.

Neste artigo, você descobrirá como funciona a [alimentação natural para cães](/alimentacao-natural-para-caes/) calculada por médica veterinária.

---

## O que é a Alimentação Natural Cozida?

A Alimentação Natural Cozida para cães consiste em uma dieta elaborada exclusivamente com alimentos próprios para consumo animal, preparados sem sal excessivo, sem temperos tóxicos (como alho e cebola) e calculada sob medida por uma médica veterinária com pós-graduação em nutrição animal.

Ela é composta por proporções calculadas de:
1. **Proteínas de Alta Qualidade:** Peito de frango, carne bovina magra, peixes, ovos ou suíno.
2. **Carboidratos e Fibras:** Batata-doce, mandioquinha, arroz integral, abóbora, chuchu, brócolis e cenoura.
3. **Vísceras:** Fontes de nutrientes fundamentais (como fígado bovino, coração e moela).
4. **Fontes Lipídicas Saudáveis:** Óleos específicos e gorduras boas dos próprios alimentos.
5. **Equilíbrio Nutricional Integral:** Item 100% fundamental em todas as dietas caseiras.

---

## Principais Benefícios da Alimentação Natural

* **Alta Palatabilidade:** Boa aceitação por cães exigentes ou com apetite seletivo.
* **Avaliação da Digestibilidade e Qualidade das Fezes:** Ingredientes de alta digestibilidade que auxiliam na consistência das fezes e na absorção de nutrientes, com acompanhamento individual.
* **Suporte à Saúde da Pele e Pelagem:** Auxilia no manejo nutricional de cães com dermatites e sensibilidade alimentar.
* **Aumento da Ingestão de Água:** Alimentos cozidos contêm cerca de 70% a 80% de umidade natural, auxiliando na hidratação diária.

---

## O perigo da dieta caseira desequilibrada em nutrientes

Nenhum alimento isolado possui todos os nutrientes necessários nas proporções perfeitas para um cão. Carnes e vegetais cozidos sem cálculo prévio não fornecem um aporte equilibrado para a saúde canina.

A falta do balanceamento nutricional adequado gera desequilíbrios graves, levando a fraqueza óssea, anemia, lesões de pele e alteração cardíaca.

---

## Como iniciar o processo de transição?

Antes de alterar a dieta do seu cão, agende uma [consulta nutricional pet online](/nutricao-pet-online/) ou presencial. A médica veterinária analisará os exames recentes do pet, avaliará o peso ideal e criará o cardápio exclusivo em gramas com o balanço de nutrientes adequado.

*Aviso Legal: Artigo educativo. Nunca substitua a alimentação do seu cão sem supervisão veterinária.*
`
  },
  {
    id: 'alimentacao-natural-e-umida-para-gatos',
    slug: 'alimentacao-natural-e-umida-para-gatos',
    aliases: ['alimentacao-natural-para-gatos-e-segura', 'alimentacao-natural-para-gatos'],
    title: 'Alimentação Natural e Úmida para Gatos: Hidratação e Saúde Renal em Equilíbrio',
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
      role: 'Médica Veterinária com pós-graduação em nutrição animal',
      crmv: 'CRMV-SP 55784',
    },
    summary: 'Os gatos são carnívoros estritos com baixa sede natural. Descubra como a dieta úmida e a Alimentação Natural para gatos auxiliam na saúde renal e urinária.',
    image: 'https://images.pexels.com/photos/38151497/pexels-photo-38151497.jpeg',
    imageAlt: 'Gato hidratado e saudável olhando atentamente',
    internalLinks: [
      { url: '/alimentacao-natural-para-gatos/', text: 'alimentação natural para gatos' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Apoie o manejo nutricional e a hidratação do seu gato com um plano alimentar personalizado. Agende uma consulta com a Dra. Thais Vieira.',
    contentMarkdown: `
Os felinos possuem uma fisiologia fascinante e única. Originários de ancestrais do deserto, os gatos não possuem o reflexo de sede tão aguçado quanto os cães. Na natureza, eles obtêm a maior parte da água consumindo suas presas (compostas por cerca de 70% de água).

Quando um gato alimenta-se exclusivamente de ração seca (que contém apenas cerca de 8% a 10% de umidade), ele raramente compensa bebendo água suficiente no potinho. Isso gera urina muito concentrada, abrindo portas para cristais urinários, obstruções uretrais e sobrecarga renal.

Por isso, o investimento em [alimentação natural para gatos](/alimentacao-natural-para-gatos/) e rações úmidas completas é uma das decisões de saúde mais inteligentes que um tutor pode tomar.

---

## 1. O Gato é um Carnívoro Estrito

Diferente dos cães (que são carnívoros adaptáveis), os gatos dependem fisiologicamente de proteínas de origem animal para o funcionamento adequado de seu organismo.

Por isso, dietas exclusivamente vegetarianas ou restos caseiros não atendem à fisiologia de um felino e colocam sua saúde em risco.

---

## 2. Benefícios da Dieta Úmida e Alimentação Natural

1. **Hidratação Constante:** A água está inserida na própria refeição.
2. **Suporte Renal e Hidratação Urinária:** Aumenta o volume urinário e auxilia na diluição dos solutos urinários.
3. **Controle de Peso:** Proteínas com teores balanceados de carboidratos apoiam a manutenção da condição corporal.

---

## 3. Cuidado com a Inapetência Felina!

Gatos são extremamente neo-fóbicos (têm receio de alimentos novos). Se a transição alimentar for feita de forma brusca e o gato passar mais de 24 a 48 horas sem comer, ele corre o risco de desenvolver **Lipidose Hepática**, uma complicação grave.

Por esse motivo, toda mudança de dieta felina deve ser orientada com técnicas de transição comportamental e nutricional desenvolvidas em uma [consulta nutricional pet online](/nutricao-pet-online/).

---

*Aviso Legal: Conteúdo educativo. Em caso de inapetência ou prostração no gato, consulte o veterinário imediatamente.*
`
  },
  {
    id: 'racao-coadjuvante-para-caes-e-gatos-guia',
    slug: 'racao-coadjuvante-para-caes-e-gatos-guia',
    aliases: ['racao-coadjuvante-para-caes-e-gatos'],
    title: 'Ração Coadjuvante para Cães e Gatos: Quando Usar e Por Que Precisa de Orientação Veterinária',
    metaTitle: 'Ração Coadjuvante para Cães e Gatos | Dra. Thais Vieira',
    metaDescription: 'O que são rações coadjuvantes? Entenda quando são indicadas para necessidades renais, pele sensível, digestivas e de peso.',
    mainKeyword: 'orientação para ração coadjuvante',
    secondaryKeywords: ['ração coadjuvante cães', 'ração renal gatos', 'ração hipoalergênica', 'nutrição clínica veterinária'],
    category: 'Rações coadjuvantes',
    intent: 'Tutor de pet em acompanhamento procurando entender a indicação de ração coadjuvante.',
    publishDate: '2026-07-05',
    readTime: '6 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária com pós-graduação em nutrição animal',
      crmv: 'CRMV-SP 55784',
    },
    summary: 'Rações coadjuvantes atuam no manejo diário de cães e gatos com necessidades renais, alergias, sobrepeso ou sensibilidade digestiva.',
    image: 'https://images.pexels.com/photos/8434744/pexels-photo-8434744.jpeg',
    imageAlt: 'Veterinária cuidando carinhosamente de um paciente pet',
    internalLinks: [
      { url: '/racao-coadjuvante-para-caes-e-gatos/', text: 'orientação para ração coadjuvante' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Seu pet recebeu indicação de ração especial? Agende uma orientação de ração com a Dra. Thais Vieira.',
    contentMarkdown: `
As **rações coadjuvantes** (também chamadas de rações especiais) são opções nutricionais desenvolvidas especificamente para apoiar o bem-estar de cães e gatos com alterações clínicas em acompanhamento.

Diferente das rações de manutenção diária, as rações coadjuvantes possuem ajustes minuciosos nos níveis de fósforo, sódio, proteínas, fibras e densidade calórica.

Por isso, obter uma [orientação para ração coadjuvante](/racao-coadjuvante-para-caes-e-gatos/) com uma médica veterinária é um passo indispensável para apoiar a saúde do animal sem causar outros desequilíbrios.

---

## Principais Linhas Coadjuvantes e Suas Indicações

1. **Rações Renais (Renal / Kidney):** Possuem teor reduzido de fósforo e proteína de altíssima digestibilidade para apoiar a função dos rins em cães e gatos idosos ou com sensibilidade renal.
2. **Rações Hipoalergênicas (Hypoallergenic / Anallergenic):** Utilizam proteínas hidrolisadas (quebradas em partículas menores) para auxiliar no manejo de sensibilidade alimentar.
3. **Rações Gastrointestinais (Gastrointestinal / Intestinal):** Baixo teor de gordura, alta digestibilidade e fibras funcionais para apoiar o trato digestivo.
4. **Rações para Obesidade e Saciedade (Satiety / Weight Management):** Ricas em fibras e proteínas, projetadas para promover perda de gordura com acompanhamento do peso, da saciedade e da condição muscular.

---

## Por que elas NÃO devem ser oferecidas por conta própria?

Dar uma ração renal para um cão saudável pode causar restrição protéica indesejada. Da mesma forma, oferecer uma ração para obesidade em um filhote em crescimento pode prejudicar seu desenvolvimento.

Através de uma [consulta nutricional pet online](/nutricao-pet-online/), avaliamos a necessidade do animal, calculamos a porção diária exata em gramas e acompanhamos a evolução.

---

*Aviso Legal: As rações coadjuvantes devem ser recomendadas por médico veterinário.* 
`
  },
  {
    id: 'como-escolher-a-melhor-racao',
    slug: 'como-escolher-a-melhor-racao',
    title: 'Como Escolher a Melhor Ração para Cães e Gatos: Rótulo, Proteína e Ingredientes',
    metaTitle: 'Como Escolher a Melhor Ração para Cães e Gatos | Dra. Thais Vieira',
    metaDescription: 'Aprenda a ler o rótulo da ração do seu pet, identificar os primeiros ingredientes, nível de proteína e evitar pegadinhas no pet shop.',
    mainKeyword: 'como escolher a melhor ração',
    secondaryKeywords: ['rótulo de ração', 'melhor ração cachorro', 'ração super premium vale a pena', 'nutrição pet'],
    category: 'Escolha de ração',
    intent: 'Tutor querendo aprender a avaliar a qualidade da ração comercial nas prateleiras.',
    publishDate: '2026-06-28',
    readTime: '5 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária com pós-graduação em nutrição animal',
      crmv: 'CRMV-SP 55784',
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

## Níveis Nutricionais no Rótulo: O que significam?

* **Proteína Bruta (Mínimo):** Indica a quantidade total de proteína para a fase do animal.
* **Teor de Gordura (Lipídeos):** Fornece energia e palatabilidade para a rotina diária.

---

## Como definir a ração ideal sem errar?

Em vez de arriscar comprar pacotes caros que o pet pode rejeitar ou que causem desconforto gástrico, você pode contar com uma médica veterinária com pós-graduação em nutrição animal para indicar a ração ideal, calcular a porção diária exata em gramas e listar os petiscos seguros para o seu pet.

Conheça o nosso serviço exclusivo de [escolha de ração](/escolha-de-racao) para cães e gatos saudáveis! Se o seu pet tiver exames alterados ou necessidades clínicas, conheça também a [consulta nutricional pet online](/nutricao-pet-online/).

---

*Aviso Legal: Artigo educativo.*
`
  },
  {
    id: 'como-funciona-consulta-nutricional-online',
    slug: 'como-funciona-consulta-nutricional-online',
    title: 'Como Funciona a Consulta Nutricional Pet Online? Guia Completo para Tutores',
    metaTitle: 'Como Funciona a Consulta Nutricional Pet Online | Dra. Thais Vieira',
    metaDescription: 'Entenda os passos da teleconsulta nutricional veterinária: anamnese, elaboração de dieta individualizada e suporte contínuo via WhatsApp.',
    mainKeyword: 'consulta nutricional pet online',
    secondaryKeywords: ['nutrição veterinária online', 'orientação nutricional pet online', 'atendimento veterinário whatsapp'],
    category: 'Nutrição veterinária online',
    intent: 'Tutor considerando agendar teleconsulta nutricional mas curioso sobre o formato e a eficácia.',
    publishDate: '2026-06-20',
    readTime: '4 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária com pós-graduação em nutrição animal',
      crmv: 'CRMV-SP 55784',
    },
    summary: 'A teleorientação nutricional permite que tutores de todo o Brasil recebam suporte clínico para seus cães e gatos com comodidade e ciência.',
    image: 'https://images.pexels.com/photos/27087012/pexels-photo-27087012.jpeg',
    imageAlt: 'Tutor utilizando computador e cuidando do pet com carinho',
    internalLinks: [
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
      { url: '/consulta-online', text: 'consulta online completa' },
      { url: '/escolha-de-racao', text: 'orientação de ração' }
    ],
    ctaText: 'Quer um plano nutricional exclusivo para seu cão ou gato? Agende agora sua consulta nutricional pet online.',
    contentMarkdown: `
Com o avanço da tecnologia e da regulamentação veterinária no Brasil, a **consulta nutricional pet online** tornou-se a maneira mais prática e humanizada de cuidar da saúde alimentar de cães e gatos em qualquer estado do país.

Sem a necessidade de estressar seu pet transportando-o até uma clínica, você conversa diretamente com a médica veterinária com pós-graduação em nutrição animal.

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
      role: 'Médica Veterinária com pós-graduação em nutrição animal',
      crmv: 'CRMV-SP 55784',
    },
    summary: 'Adotou um cachorro ou gato e não sabe qual ração dar ou quanto oferecer? Veja as orientações da veterinária para proteger o estômago e oferecer a nutrição certa.',
    image: 'https://images.pexels.com/photos/16620556/pexels-photo-16620556.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Cachorro preto resgatado com peitoral passeando feliz ao ar livre',
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

Se você adotou de uma ONG ou protetor, pergunte qual marca de ração o pet estava recebendo. Mesmo que não seja a ração de sua preferência a longo prazo, manter essa mesma ração pelos primeiros 5 a 7 dias em casa reduz o risco de desconforto intestinal decorrente de estresse e troca rápida.

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

Você não precisa gastar fortunas em rações importadas para dar uma vida saudável ao seu pet resgatado. O essencial é encontrar uma ração com boa digestibilidade, proteínas de qualidade e que caiba confortavelmente no seu orçamento mensal.

Para não perder tempo com tentativa e erro nem desperdiçar pacotes de ração, você pode contar com o serviço de [escolha de ração para cães e gatos](/escolha-de-racao) da Dra. Thais Vieira. 

Neste atendimento avulso e direto:
1. Definimos a ração ideal para o perfil do seu pet adotado;
2. Calculamos a porção diária exata em gramas;
3. Indicamos petiscos e agrados seguros que não desequilibram a dieta.

Caso seu pet já tenha histórico de exames alterados ou suspeita de alergia alimentar, você também pode optar pela [consulta nutricional pet online](/nutricao-pet-online/).

---

*Aviso Legal: Artigo informativo. Pets recém-adotados devem passar por exame clínico veterinário presencial para avaliação geral de saúde.*
`
  }
];
