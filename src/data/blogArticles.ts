import { BlogArticle, ServiceLandingInfo } from '../types/blog';

export const BLOG_CATEGORIES = [
  'Alimentação natural',
  'Escolha de ração',
  'Gatos',
  'Filhotes',
  'Rações especiais',
  'Nutrição veterinária online',
] as const;

export const SERVICE_LANDINGS: Record<string, ServiceLandingInfo> = {
  'controle-de-peso-em-caes-e-gatos': {
    slug: 'controle-de-peso-em-caes-e-gatos',
    title: 'Consulta Nutricional para Porções e Saciedade | Dra. Thais Vieira',
    headline: 'Orientação Nutricional Veterinária Online para Fracionamento de Refeições e Porções Ideais',
    description: 'Atendimento nutricional veterinário de rotina. Planejamento alimentar individualizado e cálculo de porções em gramas para cães e gatos.',
    keywords: ['consulta nutricional veterinária online porções', 'plano alimentar para cães rotina saudável', 'acompanhamento nutricional pet'],
    benefits: [
      'Cálculo calórico direcionado para saciedade e rotina equilibrada',
      'Plano alimentar individualizado (Ração Selecionada ou Alimentação Natural)',
      'Estratégias para aumento da saciedade e rotina equilibrada de refeições',
      'Acompanhamento contínuo da adaptação do plano ao longo do tempo'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães e gatos precisando de porções diárias calculadas com precisão',
      'Pets que precisam de rotina organizada após castração ou mudança de hábitos',
      'Tutores que buscam equilíbrio nutricional e saciedade saudável para o pet'
    ],
    whatsIncluded: [
      'Análise detalhada da rotina e hábitos do pet',
      'Elaboração de plano alimentar individualizado (ração ideal, Alimentação Natural ou mista)',
      'Tabela de fracionamento das refeições e porção diária exata em gramas',
      'Atendimento online por médica veterinária para todo o Brasil',
      'Suporte e acompanhamento contínuo pós-consulta via WhatsApp'
    ],
    detailedText: 'Calcular a quantidade exata de comida em gramas apoia a vitalidade e a disposição de cães e gatos, favorecendo o bem-estar diário. Reduzir ou aumentar comida no olhômetro pode desbalancear os nutrientes. Com o acompanhamento individualizado da Dra. Thais Vieira, calculamos a energia necessária para que seu amigo fique nutrido, ativo e satisfeito.',
    faqs: [
      {
        question: 'Como funciona o cálculo de porções na consulta online?',
        answer: 'Na consulta online, a Dra. Thais avalia a rotina, fotos, porte e perfil do pet. Em seguida, calcula a necessidade calórica e a quantidade exata em gramas por refeição.'
      },
      {
        question: 'Meu pet vai passar fome durante o processo?',
        answer: 'Não. O plano alimentar é elaborado priorizando alimentos ou rações com teores adequados de fibras e proteínas de qualidade, promovendo saciedade sem privação de nutrientes.'
      },
      {
        question: 'Qual o valor da consulta nutricional particular?',
        answer: 'O investimento da consulta nutricional veterinária particular é de R$ 200,00, incluindo avaliação completa, elaboração do plano alimentar e suporte direto por WhatsApp.'
      }
    ],
    relatedLinks: [
      { url: '/consulta-nutricional-online-para-caes', text: 'Consulta nutricional para cães' },
      { url: '/alimentacao-natural-para-caes', text: 'Alimentação Natural para cães' },
      { url: '/como-escolher-a-melhor-racao', text: 'Como escolher a melhor ração' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta nutricional veterinária é destinada ao acompanhamento nutricional de rotina e suporte alimentar. Não substitui atendimento médico veterinário emergencial presencial.'
  },
  'sensibilidade-alimentar-em-caes-e-gatos': {
    slug: 'sensibilidade-alimentar-em-caes-e-gatos',
    title: 'Orientação para Escolha de Ingredientes e Rotina Alimentar | Dra. Thais Vieira',
    headline: 'Planejamento Nutricional com Ingredientes Selecionados para Cães e Gatos',
    description: 'Manejo alimentar com ingredientes selecionados e de alta aceitação. Orientações de rações de alta qualidade e Alimentação Natural balanceada.',
    keywords: ['consulta para cachorro ingredientes selecionados', 'orientação de ração ingredientes selecionados', 'nutrição cão e gato rotina'],
    benefits: [
      'Identificação criteriosa de ingredientes com excelente aceitação alimentar',
      'Planejamento de dieta com fontes nobres e selecionadas de proteína',
      'Apoio à maciez e brilho da pelagem e bem-estar geral',
      'Acompanhamento do bem-estar diário do pet'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães e gatos com paladar exigente ou preferência por ingredientes selecionados',
      'Pets que precisam de ingredientes suaves e de alta aceitação',
      'Tutores buscando opções de Alimentação Natural com proteína selecionada'
    ],
    whatsIncluded: [
      'Análise criteriosa de todas as proteínas e alimentos já consumidos',
      'Elaboração de planejamento com ingredientes de alta aceitação',
      'Guia prático de petiscos permitidos e seguros',
      'Consulta particular online por R$ 200,00 com suporte via WhatsApp'
    ],
    detailedText: 'A escolha cuidadosa dos ingredientes apoia a vitalidade e a rotina do seu cão ou gato. O acompanhamento nutricional com uma médica veterinária com pós-graduação em nutrição animal permite selecionar os melhores alimentos de forma criteriosa e segura.',
    faqs: [
      {
        question: 'A Alimentação Natural ajuda pets com paladar exigente?',
        answer: 'Sim! A Alimentação Natural permite selecionar proteínas nobres e vegetais frescos, sem corantes ou conservantes artificiais.'
      },
      {
        question: 'Como é feita a adaptação do cardápio?',
        answer: 'Apresentamos uma fonte protéica selecionada e carboidratos de alta digestibilidade de forma gradual para avaliar a tolerância do organismo.'
      }
    ],
    relatedLinks: [
      { url: '/alimentacao-natural-para-caes', text: 'Alimentação Natural para Cães' },
      { url: '/como-escolher-a-melhor-racao', text: 'Como escolher a melhor ração' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta não substitui atendimento emergencial médico veterinário presencial em casos de prostração aguda.'
  },
  'nutricao-especializada-para-caes-e-gatos': {
    slug: 'nutricao-especializada-para-caes-e-gatos',
    title: 'Nutrição Especializada e Hidratação para Pets Idosos | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária com Foco em Hidratação e Equilíbrio',
    description: 'Acompanhamento nutricional focado em hidratação, proteínas nobres e equilíbrio de nutrientes para cães e gatos idosos.',
    keywords: ['nutrição veterinária cães idosos', 'dieta úmida felina hidratação', 'consulta nutricional veterinária hidratação'],
    benefits: [
      'Balanceamento criterioso de fósforo, sódio e proteínas de alta digestibilidade',
      'Estímulo ao apetite e alta palatabilidade para pets exigentes',
      'Estratégias nutricionais com alimentos úmidos para favorecer a hidratação diária',
      'Ajustes graduais respeitando a rotina do animal'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães e gatos idosos que necessitam de acompanhamento nutricional dedicado',
      'Pets que precisam aumentar o consumo hídrico diário',
      'Tutores que desejam associar Alimentação Natural ou úmida ao dia a dia'
    ],
    whatsIncluded: [
      'Avaliação minuciosa da rotina e perfil nutricional do pet',
      'Planejamento individualizado com alimentos úmidos e opções de alta digestibilidade',
      'Consulta online em todo o Brasil por R$ 200,00 e acompanhamento por WhatsApp'
    ],
    detailedText: 'A alimentação e a ingestão adequada de água são pilares determinantes para o conforto e a qualidade de vida do pet. Proteínas de alta digestibilidade e nutrientes balanceados proporcionam maior vitalidade diária.',
    faqs: [
      {
        question: 'Alimentos úmidos ajudam na hidratação?',
        answer: 'Sim! Dietas naturais e alimentos úmidos contêm alto percentual de umidade natural, auxiliando no equilíbrio hídrico diário do cão e do gato.'
      },
      {
        question: 'Gatos idosos aceitam bem a transição?',
        answer: 'Com as orientações certas e transição passo a passo, a maioria dos felinos passa a aceitar com facilidade a dieta mais úmida e apetitosa.'
      }
    ],
    relatedLinks: [
      { url: '/alimentacao-natural-para-gatos', text: 'Alimentação Natural para Gatos' },
      { url: '/nutricao-pet-online', text: 'Consulta nutricional pet online' }
    ],
    emergencyDisclaimer: 'Aviso: Em episódios de urgência, procure hospital veterinário presencial imediatamente.'
  },
  'nutricao-leve-para-caes-e-gatos': {
    slug: 'nutricao-leve-para-caes-e-gatos',
    title: 'Nutrição de Fácil Digestão e Perfil Balanceado | Dra. Thais Vieira',
    headline: 'Manejo Nutricional Veterinário com Fácil Digestão e Gorduras Controladas',
    description: 'Dieta e nutrição veterinária com proteínas nobres de alta absorção e lipídios balanceados. Atendimento online para todo o Brasil.',
    keywords: ['alimentação de fácil digestão para cães', 'dieta personalizada para pet', 'nutrição veterinária equilibrada'],
    benefits: [
      'Proporções adequadas de proteína de alto valor biológico',
      'Perfil lipídico balanceado e controlado',
      'Refeições leves que proporcionam bem-estar digestivo',
      'Estímulo ao consumo alimentar com preparações palatáveis'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Pets que precisam de refeições leves e de alta digestibilidade',
      'Tutores buscando plano alimentar individualizado e seguro'
    ],
    whatsIncluded: [
      'Análise da rotina alimentar e perfil do pet',
      'Plano alimentar individualizado com porções e horários fracionados',
      'Consulta online por R$ 200,00 com acompanhamento via WhatsApp'
    ],
    detailedText: 'Uma alimentação leve e equilibrada fornece energia e nutrientes essenciais de fácil assimilação para manter a disposição diária do animal.',
    faqs: [
      {
        question: 'Como saber se a dieta é de fácil digestão?',
        answer: 'Selecionamos ingredientes cozidos de alta pureza e proteínas nobres com excelente absorção metabólica.'
      }
    ],
    relatedLinks: [
      { url: '/consulta-nutricional-online-para-caes', text: 'Consulta nutricional para cães' },
      { url: '/nutricao-pet-online', text: 'Consulta nutricional pet online' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta não substitui atendimento hospitalar de emergência presencial.'
  },
  'nutricao-e-mobilidade-para-caes': {
    slug: 'nutricao-e-mobilidade-para-caes',
    title: 'Nutrição e Vitalidade Ativa para Cães | Dra. Thais Vieira',
    headline: 'Dieta e Plano Alimentar para Apoio à Disposição e Vitalidade Canina',
    description: 'Acompanhamento nutricional focado em energia e disposição saudável de cães adultos e idosos. Atendimento online em todo o Brasil.',
    keywords: ['nutrição e vitalidade cães', 'dieta saudável cão idoso', 'alimentação cachorro vitalidade'],
    benefits: [
      'Rotina nutricional equilibrada para favorecer a leveza nos passeios',
      'Plano alimentar balanceado com suporte à vitalidade',
      'Acompanhamento nutricional contínuo da rotina do cão',
      'Mais conforto e disposição para brincadeiras'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães adultos e idosos precisando manter a disposição e vitalidade',
      'Raças com rotina ativa de passeios e brincadeiras',
      'Tutores que desejam nutrição com foco em bem-estar geral'
    ],
    whatsIncluded: [
      'Análise do perfil e histórico de rotina do cão',
      'Plano alimentar individualizado focado em porções adequadas e nutrição de qualidade',
      'Orientações sobre manejo nutricional e escolhas alimentares seguras',
      'Consulta online para todo o Brasil por R$ 200,00 com suporte no WhatsApp'
    ],
    detailedText: 'Uma rotina nutricional bem planejada aliada a alimentos de qualidade promove energia e disposição para caminhadas confortáveis em todas as fases da vida canina.',
    faqs: [
      {
        question: 'A alimentação auxilia na disposição do cão?',
        answer: 'Sim! Ao manter uma alimentação balanceada e porções calculadas, favorece-se o conforto e o prazer nas caminhadas diárias.'
      }
    ],
    relatedLinks: [
      { url: '/consulta-nutricional-online-para-caes', text: 'Consulta nutricional para cães' },
      { url: '/como-escolher-a-melhor-racao', text: 'Como escolher a melhor ração' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta oferece orientações sobre alimentação e rotina diária. Em situações de urgência ou emergência, procure atendimento veterinário presencial.'
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
      'Atendimento online no conforto da sua casa sem estressar o cão'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Tutores de cães filhotes, adultos ou idosos buscando plano nutricional adequado',
      'Cães com paladar exigente ou enjoados de ração seca',
      'Cães com paladar exigente ou rotinas alimentares específicas',
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
      { url: '/como-escolher-a-melhor-racao', text: 'Como escolher a melhor ração' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta nutricional online não substitui atendimento emergencial presencial.'
  },
  'consulta-nutricional-online-para-gatos': {
    slug: 'consulta-nutricional-online-para-gatos',
    title: 'Consulta Nutricional Online para Gatos | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária Online para Felinos',
    description: 'Atendimento nutricional para gatos focado em alta hidratação, cuidado com a ingestão hídrica e transição para alimentação úmida ou natural.',
    keywords: ['consulta nutricional online para gato', 'nutrição felina', 'dieta para gatos online'],
    benefits: [
      'Foco total na fisiologia carnívora estrita e hidratação do gato',
      'Estímulo diário à ingestão de água e hidratação felina adequada',
      'Estratégias para transição alimentar sem provocar inapetência',
      'Atendimento sem estresse de transporte ou caixa de transporte'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Tutores de gatos que consomem pouca água na rotina diária',
      'Gatos castrados com tendência ao ganho de peso',
      'Gatos idosos precisando de acompanhamento nutricional profissional',
      'Tutores querendo introduzir sachês de qualidade ou Alimentação Natural'
    ],
    whatsIncluded: [
      'Análise completa da ingestão hídrica e comportamento do felino',
      'Plano de alimentação úmida, seca de alta qualidade ou Alimentação Natural',
      'Balanceamento nutricional completo respeitando a fisiologia felina',
      'Consulta online por R$ 200,00 com suporte pós-atendimento no WhatsApp'
    ],
    detailedText: 'Os gatos possuem particularidades metabólicas únicas e necessitam de alta ingestão hídrica para manter a hidratação e o bem-estar. A consulta nutricional felina orienta estratégias para aumentar o consumo de água e manter seu felino saudável e nutrido.',
    faqs: [
      {
        question: 'Gato pode comer Alimentação Natural com segurança?',
        answer: 'Sim, mas exige rigor técnico com cálculo criterioso por médica veterinária para atender a todos os nutrientes essenciais da espécie.'
      }
    ],
    relatedLinks: [
      { url: '/alimentacao-natural-para-gatos', text: 'Alimentação Natural para Gatos' },
      { url: '/alimentacao-natural-para-gatos', text: 'Alimentação Natural para Gatos' }
    ],
    emergencyDisclaimer: 'Aviso: Esta consulta oferece orientações sobre alimentação de rotina e hidratação felina. Situações de urgência devem ser atendidas presencialmente por hospital veterinário.'
  },
  'nutricao-pet-online': {
    slug: 'nutricao-pet-online',
    title: 'Consulta Nutricional Pet Online | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Pet Online para Cães e Gatos em Todo o Brasil',
    description: 'Atendimento nutricional veterinário online. Planejamento de dietas personalizadas, cálculo preciso de porções e acompanhamento contínuo para a saúde do seu pet.',
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
    detailedText: 'A consulta nutricional pet online aproxima a orientação veterinária qualificada e o atendimento individualizado da sua casa. Com análise de rotina e acompanhamento atencioso, oferecemos um plano alimentar sob medida para o seu companheiro.',
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
      'Excelente suporte para cães com paladar exigente ou digestão sensível',
      'Acompanhamento veterinário com exames periódicos de controle'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Cães seletivos que rejeitam ração seca',
      'Cães com paladar exigente ou digestão sensível',
      'Tutores que desejam oferecer alimentação natural balanceada com acompanhamento veterinário'
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
      { url: '/como-escolher-a-melhor-racao', text: 'Como escolher a melhor ração' },
      { url: '/consulta-nutricional-online-para-caes', text: 'Consulta para cães' }
    ],
    emergencyDisclaimer: 'Aviso: Não substitui atendimento emergencial presencial.'
  },
  'alimentacao-natural-para-gatos': {
    slug: 'alimentacao-natural-para-gatos',
    title: 'Alimentação Natural para Gatos | Dra. Thais Vieira',
    headline: 'Alimentação Natural e Úmida com Alta Hidratação para Gatos',
    description: 'Dietas carnívoras estritas com alta hidratação para felinos. Orientação individualizada sobre alimentação e ingestão de água com médica veterinária com pós-graduação em nutrição animal.',
    keywords: ['alimentação natural para gatos', 'dieta úmida gatos hidratação', 'nutrição felina'],
    benefits: [
      'Orientação individualizada sobre alimentação e ingestão de água',
      'Transição suave para evitar inapetência felina severa',
      'Atendimento integral às exigências nutricionais felinas',
      'Opções de dietas úmidas preparadas em casa ou rações úmidas selecionadas'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Gatos que bebem pouca água ou necessitam de maior hidratação diária',
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
      { url: '/nutricao-pet-online', text: 'Consulta nutricional pet online' },
      { url: '/consulta-nutricional-online-para-gatos', text: 'Consulta online para gatos' }
    ],
    emergencyDisclaimer: 'Aviso: Não substitui atendimento emergencial presencial.'
  },
  'racoes-especiais-para-caes-e-gatos': {
    slug: 'racoes-especiais-para-caes-e-gatos',
    title: 'Orientação para Rações Especiais e Super Premium | Dra. Thais Vieira',
    headline: 'Plano e Orientação para Rações Especiais em Cães e Gatos',
    description: 'Orientação e acompanhamento técnico para rações especiais e Super Premium adaptadas às necessidades de cada fase de vida.',
    keywords: ['orientação para ração especial', 'ração super premium cães gatos', 'nutrição balanceada veterinária'],
    benefits: [
      'Indicação precisa da linha certa para a fase de vida e porte do pet',
      'Manejamento de transição gradual para ótima aceitação',
      'Alinhamento do suporte nutricional à rotina da família',
      'Monitoramento de peso e condição corporal'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Pets que necessitam de opções de nutrição de alta densidade',
      'Tutores em dúvida sobre qual marca ou linha escolher',
      'Animais com paladar seletivo em relação à ração seca'
    ],
    whatsIncluded: [
      'Indicação da marca e porção diária ideal em gramas',
      'Técnicas para melhorar a aceitação da nova ração',
      'Consulta online por R$ 200,00 e acompanhamento WhatsApp'
    ],
    detailedText: 'Rações especiais e Super Premium contêm alta densidade nutricional e ingredientes selecionados. A orientação profissional individualizada proporciona que seu pet receba a quantidade diária correta.',
    faqs: [
      {
        question: 'Ração especial precisa de acompanhamento profissional?',
        answer: 'Sim, contar com orientação veterinária assegura a escolha da linha ideal para o porte, idade e rotina, evitando gastos desnecessários.'
      }
    ],
    relatedLinks: [
      { url: '/escolha-de-racao', text: 'Escolha de Ração' },
      { url: '/como-escolher-a-melhor-racao', text: 'Como escolher a melhor ração' }
    ],
    emergencyDisclaimer: 'Aviso: Não substitui atendimento emergencial presencial.'
  },
  'consulta-online': {
    slug: 'consulta-online',
    title: 'Consulta Nutricional Veterinária Online | Dra. Thais Vieira',
    headline: 'Consulta Nutricional Veterinária Online para Cães e Gatos em Todo o Brasil',
    description: 'Atendimento nutricional veterinário online. Planejamento de dietas personalizadas, cálculo preciso de porções e acompanhamento contínuo para cães e gatos.',
    keywords: ['consulta nutricional veterinária online', 'consulta online pet nutrição', 'veterinária nutrição animal online'],
    benefits: [
      'Atendimento online por videochamada no conforto do seu lar',
      'Plano alimentar completo e individualizado para cães e gatos',
      'Cálculo calórico e de gramatura exata para suporte nutricional integral',
      'Acompanhamento contínuo por WhatsApp com a Dra. Thais Vieira'
    ],
    formatKey: 'online',
    price: 'R$ 200,00',
    whoIsItFor: [
      'Pets com necessidades nutricionais específicas (fase de vida, porte ou sensibilidade digestiva)',
      'Cães e gatos precisando de porções calculadas e peso ideal',
      'Tutores que desejam migrar para Alimentação Natural balanceada ou dieta mista',
      'Tutores que buscam acompanhamento veterinário completo e contínuo'
    ],
    whatsIncluded: [
      'Análise detalhada de exames laboratoriais, histórico alimentar e hábitos do pet',
      'Envio do plano alimentar completo em PDF com orientações de preparo ou marcas',
      'Cálculo e planejamento alimentar sob medida quando necessário',
      'Suporte direto por WhatsApp durante a adaptação'
    ],
    detailedText: 'A consulta nutricional veterinária completa é o formato indicado para pets com necessidades nutricionais individualizadas ou para quem busca dietas personalizadas e balanceadas sob medida.',
    faqs: [
      {
        question: 'Qual a diferença entre a consulta online e a escolha de ração?',
        answer: 'A escolha de ração é uma orientação nutricional avulsa (R$ 150) para selecionar a ração mais adequada, calcular porções e planejar a transição. Já a consulta nutricional completa (R$ 200) abrange plano alimentar individualizado (Alimentação Natural, mista ou ração selecionada), avaliação de rotina e 30 dias de acompanhamento por WhatsApp.'
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
* **Ração Úmida:** Essencial especialmente para **gatos filhotes**, pois aumenta a ingestão hídrica natural e favorece a hidratação e vitalidade ao longo da vida.

Ao introduzir alimento úmido, certifique-se de que a embalagem informe "alimento completo para filhotes" (e não apenas petisco ocasional).

---

## 5. Transição Alimentar: Evite desconfortos gastrointestinais

Ao trazer o filhote para casa, mantenha inicialmente a mesma ração que ele comia no canil ou abrigo por pelo menos 5 a 7 dias. Mudar o ambiente e a alimentação simultaneamente causa estresse e desconforto digestivo.

Caso queira trocar de marca, faça a **transição gradual ao longo de 7 dias**:
* **Dias 1 e 2:** 75% da ração antiga + 25% da ração nova
* **Dias 3 e 4:** 50% da ração antiga + 50% da ração nova
* **Dias 5 e 6:** 25% da ração antiga + 75% da ração nova
* **Dia 7:** 100% da ração nova

---

## 6. Erros comuns no primeiro pet que você deve evitar

1. **Deixar comida disponível o dia todo para cães:** Pode gerar seletividade alimentar, perda de interesse e ganho desordenado de peso.
2. **Oferecer leite de vaca:** Provoca forte sensibilidade gastrointestinal devido à incapacidade de digerir o alto teor de lactose do leite bovino.
3. **Oferecer alimentos proibidos:** Chocolate, cebola, alho, uva, xilitol e ossos cozidos são altamente tóxicos ou perigosos.
4. **Introduzir Alimentação Natural sem acompanhamento profissional:** A dieta caseira sem planejamento balanceado calculado por uma médica veterinária com pós-graduação em nutrição animal causa prejuízos ao crescimento em filhotes.

---

## A importância do acompanhamento nutricional individualizado

Cada filhote é único em sua velocidade de crescimento, nível de atividade física e sensibilidade digestiva. 

Se você acabou de adotar ou comprar seu pet e quer uma orientação prática e acessível para definir a ração exata e a quantidade diária em gramas, conheça o nosso atendimento de [escolha de ração](/escolha-de-racao).

Caso queira um acompanhamento contínuo e mais amplo sobre todas as fases de crescimento, conheça também a [consulta nutricional pet online](/consulta-online)!

---

*Aviso Legal: Este artigo possui caráter estritamente educativo e não substitui a consulta médica veterinária presencial ou teleorientação com exame profissional individualizado. Em caso de apatia, recusa alimentar persistente ou mal-estar em filhotes, procure atendimento veterinário imediato.*
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
    summary: 'Saiba o que é a Alimentação Natural (AN) cozida para cães, quais os benefícios para cães com paladar exigente ou digestão sensível, e por que o cálculo individualizado e o equilíbrio de nutrientes são vitais.',
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
3. **Vísceras e Cortes Nutritivos:** Nutrientes essenciais naturais provenientes de carnes e cortes cozidos selecionados (como miúdos cozidos e moela).
4. **Fontes Lipídicas Saudáveis:** Óleos específicos e gorduras boas dos próprios alimentos.
5. **Equilíbrio Nutricional Integral:** Item essencial em todas as dietas caseiras.

---

## Principais Benefícios da Alimentação Natural

* **Alta Palatabilidade:** Boa aceitação por cães exigentes ou com apetite seletivo.
* **Avaliação da Digestibilidade e Qualidade das Fezes:** Ingredientes de alta digestibilidade que auxiliam na consistência das fezes e na absorção de nutrientes, com acompanhamento individual.
* **Suporte à Pele e Pelagem:** Promove maciez e brilho nos pelos e bem-estar digestivo com ingredientes selecionados.
* **Aumento da Ingestão de Água:** Alimentos cozidos contêm cerca de 70% a 80% de umidade natural, auxiliando na hidratação diária.

---

## O perigo da dieta caseira desequilibrada em nutrientes

Nenhum alimento isolado possui todos os nutrientes necessários nas proporções perfeitas para um cão. Carnes e vegetais cozidos sem cálculo prévio não fornecem um aporte equilibrado para a saúde canina.

A falta do balanceamento nutricional adequado gera carências e desequilíbrios na alimentação, comprometendo a vitalidade, a pelagem e a energia diária do cão.

---

## Como iniciar o processo de transição?

Antes de alterar a dieta do seu cão, agende uma [consulta nutricional pet online](/nutricao-pet-online/). A médica veterinária analisará os exames recentes do pet, avaliará as necessidades diárias e criará o cardápio exclusivo em gramas com o balanço de nutrientes adequado.

*Aviso Legal: Artigo educativo. Nunca substitua a alimentação do seu cão sem supervisão veterinária.*
`
  },
  {
    id: 'alimentacao-natural-e-umida-para-gatos',
    slug: 'alimentacao-natural-e-umida-para-gatos',
    aliases: ['alimentacao-natural-para-gatos-e-segura', 'alimentacao-natural-para-gatos'],
    title: 'Alimentação Natural e Úmida para Gatos: Hidratação e Equilíbrio Nutricional',
    metaTitle: 'Alimentação Natural e Úmida para Gatos | Dra. Thais Vieira',
    metaDescription: 'Descubra como a alimentação natural e as rações úmidas favorecem a hidratação e o bem-estar dos gatos. Entenda as necessidades carnívoras felinas.',
    mainKeyword: 'alimentação natural para gatos',
    secondaryKeywords: ['dieta úmida gatos', 'hidratação felina', 'nutrição para gatos', 'gato não bebe água'],
    category: 'Gatos',
    intent: 'Tutor de gatos preocupado com consumo de água, hidratação equilibrada e nutrição carnívora estrita.',
    publishDate: '2026-07-10',
    readTime: '6 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária com pós-graduação em nutrição animal',
      crmv: 'CRMV-SP 55784',
    },
    summary: 'Os gatos são carnívoros estritos com baixa sede natural. Descubra como a dieta úmida e a Alimentação Natural para gatos auxiliam na hidratação e vitalidade.',
    image: 'https://images.pexels.com/photos/38151497/pexels-photo-38151497.jpeg',
    imageAlt: 'Gato hidratado e saudável olhando atentamente',
    internalLinks: [
      { url: '/alimentacao-natural-para-gatos/', text: 'alimentação natural para gatos' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Apoie o manejo nutricional e a hidratação do seu gato com um plano alimentar personalizado. Agende uma consulta com a Dra. Thais Vieira.',
    contentMarkdown: `
Os felinos possuem uma fisiologia fascinante e única. Originários de ancestrais do deserto, os gatos não possuem o reflexo de sede tão aguçado quanto os cães. Na natureza, eles obtêm a maior parte da água consumindo suas presas (compostas por cerca de 70% de água).

Quando um gato alimenta-se exclusivamente de ração seca (que contém apenas cerca de 8% a 10% de umidade), ele raramente compensa bebendo água suficiente no potinho. Isso gera urina muito concentrada, aumentando o risco de baixa hidratação crônica e urina excessivamente concentrada.

Por isso, o investimento em [alimentação natural para gatos](/alimentacao-natural-para-gatos/) e rações úmidas completas é uma das decisões de saúde mais inteligentes que um tutor pode tomar.

---

## 1. O Gato é um Carnívoro Estrito

Diferente dos cães (que são carnívoros adaptáveis), os gatos dependem fisiologicamente de proteínas de origem animal para o funcionamento adequado de seu organismo.

Por isso, dietas exclusivamente vegetarianas ou restos caseiros não atendem à fisiologia de um felino e colocam sua saúde em risco.

---

## 2. Benefícios da Dieta Úmida e Alimentação Natural

1. **Hidratação Constante:** A água está inserida na própria refeição.
2. **Ingestão Hídrica Balanceada:** Aumenta o consumo de água na rotina e auxilia no equilíbrio dos fluidos corporais.
3. **Saciedade Equilibrada:** Proteínas nobres com teores adequados de energia apoiam a manutenção da condição corporal diária.

---

## 3. Cuidado com a Inapetência Felina!

Gatos são extremamente neo-fóbicos (têm receio de alimentos novos). Se a transição alimentar for feita de forma brusca e o gato passar mais de 24 a 48 horas sem comer, ele corre o risco de desidratação e fraqueza severa.

Por esse motivo, toda mudança de dieta felina deve ser orientada com técnicas de transição comportamental e nutricional desenvolvidas em uma [consulta nutricional pet online](/nutricao-pet-online/).

---

*Aviso Legal: Conteúdo educativo. Em caso de inapetência ou prostração no gato, consulte o veterinário imediatamente.*
`
  },
  {
    id: 'racoes-especiais-para-caes-e-gatos-guia',
    slug: 'racoes-especiais-para-caes-e-gatos-guia',
    aliases: ['racoes-especiais-para-caes-e-gatos'],
    title: 'Rações Especiais e Super Premium para Cães e Gatos: Como Escolher a Melhor Linha',
    metaTitle: 'Rações Especiais para Cães e Gatos | Dra. Thais Vieira',
    metaDescription: 'O que são rações especiais e Super Premium? Entenda como escolher a linha ideal para idade, porte e digestão do seu pet.',
    mainKeyword: 'orientação para ração especial',
    secondaryKeywords: ['ração especial cães', 'ração super premium gatos', 'nutrição animal de alta qualidade'],
    category: 'Rações especiais',
    intent: 'Tutor de pet procurando entender a indicação de rações especiais e super premium.',
    publishDate: '2026-07-05',
    readTime: '6 min de leitura',
    author: {
      name: 'Dra. Thais Vieira',
      role: 'Médica Veterinária com pós-graduação em nutrição animal',
      crmv: 'CRMV-SP 55784',
    },
    summary: 'Rações especiais e Super Premium atuam no dia a dia de cães e gatos proporcionando nutrientes de alta absorção para cada porte e fase de vida.',
    image: 'https://images.pexels.com/photos/8434744/pexels-photo-8434744.jpeg',
    imageAlt: 'Veterinária cuidando carinhosamente de um paciente pet',
    internalLinks: [
      { url: '/como-escolher-a-melhor-racao', text: 'como escolher a melhor ração' },
      { url: '/nutricao-pet-online/', text: 'consulta nutricional pet online' },
    ],
    ctaText: 'Dúvidas sobre qual ração escolher? Agende uma orientação de ração com a Dra. Thais Vieira.',
    contentMarkdown: `
As **rações especiais** (incluindo as linhas Super Premium e fórmulas adaptadas) são opções nutricionais de alta performance desenvolvidas especificamente para atender às exigências de porte, idade e estilo de vida de cães e gatos.

Diferente de alimentos convencionais, as rações especiais possuem fontes nobres de proteínas, fibras selecionadas e densidade calórica calculada para o aproveitamento máximo.

Por isso, obter uma [orientação para escolha de ração](/escolha-de-racao) com uma médica veterinária é um passo indispensável para favorecer a nutrição ideal sem desperdício de dinheiro.

---

## Principais Linhas Especiais e Suas Vantagens

1. **Rações por Fase de Vida (Filhote, Adulto e Sênior):** Ajustam o aporte de proteínas e energia para cada estágio do desenvolvimento do pet.
2. **Rações com Proteínas Selecionadas:** Utilizam ingredientes de alta digestibilidade para pets com sensibilidade a alimentos comuns.
3. **Rações com Fibras Funcionais:** Favorecem a saúde digestiva e o trânsito intestinal regular.
4. **Rações de Alta Saciedade:** Ricas em fibras e proteínas de qualidade, formuladas para manter o pet satisfeito e no peso ideal.

---

## Por que contar com orientação profissional?

Cada pet possui necessidades calóricas únicas de acordo com a idade, castração e gasto energético diário. Oferecer quantidades erradas pode levar ao ganho excessivo de peso ou à falta de nutrientes.

Através de uma [consulta nutricional pet online](/nutricao-pet-online/) ou orientação de ração, avaliamos o perfil do seu pet, indicamos a marca ideal e calculamos a porção diária exata em gramas.

---

*Aviso Legal: Conteúdo educativo sobre nutrição animal.*
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

Conheça o nosso serviço exclusivo de [escolha de ração](/escolha-de-racao) para cães e gatos saudáveis! Se o seu pet tiver rotina ou necessidades nutricionais específicas, conheça também a [consulta nutricional pet online](/nutricao-pet-online/).

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
    summary: 'A teleorientação nutricional permite que tutores de todo o Brasil recebam suporte nutricional qualificado para seus cães e gatos com comodidade e ciência.',
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
2. **Sessão em Vídeo ou Alinhamento Direto:** Analisamos os dados do seu pet e conversamos sobre as metas (manutenção do peso ideal, transição para alimentação natural balanceada, sensibilidade digestiva ou escolha da melhor ração).
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
    metaDescription: 'Acabou de adotar um cão ou gato? Saiba o que dar de comer, como fazer a transição de ração sem desconfortos gastrointestinais e quando escolher a ração ideal.',
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

Caso seu pet já tenha histórico de sensibilidade alimentar ou rotina nutricional específica, você também pode optar pela [consulta nutricional pet online](/nutricao-pet-online/).

---

*Aviso Legal: Artigo informativo. Pets recém-adotados devem passar por exame clínico veterinário presencial para avaliação geral de saúde.*
`
  }
];
