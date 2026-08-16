import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Video, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Heart,
  Tag,
  Sparkles,
  ShieldCheck,
  Award,
  Scale
} from 'lucide-react';

interface EscolhaDeRacaoPageProps {
  onOpenConsulta: () => void;
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
}

const FAQ_SCHEMA_JSON = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vou ter que comprar uma ração cara?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não necessariamente. Eu trabalho dentro do orçamento que você me disser. A ração adequada nem sempre é a mais cara, é a que atende as necessidades daquele pet."
      }
    },
    {
      "@type": "Question",
      "name": "Meu pet já come uma ração e parece bem. Vale a pena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vale, principalmente para conferir a quantidade. É muito comum o tutor oferecer mais ou menos do que o pet precisa sem saber, e isso só aparece depois de um tempo."
      }
    },
    {
      "@type": "Question",
      "name": "Serve para gato?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Serve. E vale bastante, porque gato tem exigências nutricionais bem diferentes das do cachorro, e a ração felina acaba sendo escolhida errada com frequência."
      }
    },
    {
      "@type": "Question",
      "name": "Meu pet tem uma doença. Serve para ele?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nesse caso não. A dieta precisa ser calculada individualmente, então o indicado é a consulta nutricional completa."
      }
    },
    {
      "@type": "Question",
      "name": "Em quanto tempo eu recebo o plano?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em até 48 horas depois do nosso atendimento."
      }
    }
  ]
};

export const EscolhaDeRacaoPage: React.FC<EscolhaDeRacaoPageProps> = ({
  onOpenConsulta,
  onNavigateHome,
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Escolha de Ração para Cães e Gatos | Dra. Thais Vieira';
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = 'Escolho a ração certa para o seu pet, a quantidade por dia e os petiscos. Atendimento online, R$ 150. Para quem acabou de adotar ou é de primeira viagem.';
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Inject FAQ Schema into document head
    let scriptTag = document.getElementById('faq-schema-escolha-racao') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'faq-schema-escolha-racao';
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(FAQ_SCHEMA_JSON);
      document.head.appendChild(scriptTag);
    } else {
      scriptTag.text = JSON.stringify(FAQ_SCHEMA_JSON);
    }

    return () => {
      const existing = document.getElementById('faq-schema-escolha-racao');
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNavigateConsultaCompleta = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/consulta-online');
    } else {
      onOpenConsulta();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-24 text-[#374151] font-sans antialiased">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-8 text-left">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 text-[#a338b9] hover:underline font-bold cursor-pointer border-none bg-transparent p-0"
          >
            <ArrowLeft size={14} />
            <span>Início</span>
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate ? onNavigate('/blog') : onNavigateHome()}
            className="text-stone-500 hover:text-[#a338b9] cursor-pointer border-none bg-transparent p-0"
          >
            Blog
          </button>
          <span>/</span>
          <span className="text-stone-800 font-bold">Escolha de Ração</span>
        </div>

        {/* EDITORIAL HERO SECTION */}
        <article className="bg-white rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden text-left mb-12">
          {/* Top Byline and Category */}
          <div className="p-6 sm:p-8 md:p-10 pb-0">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-[#a338b9]/10 border-2 border-[#a338b9]/30 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1573024027027-a82b1b0f783e?q=80&w=300&auto=format&fit=crop" 
                    alt="Dra. Thais Vieira - Médica Veterinária" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900 leading-tight">Dra. Thais Vieira</div>
                  <div className="text-xs text-stone-500">Médica Veterinária • Nutrologia Pet</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#a338b9] bg-[#FAF2FF] px-3 py-1 rounded-full border border-[#a338b9]/20">
                  <Sparkles size={12} />
                  Atendimento Online
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  R$ 150,00
                </span>
              </div>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-stone-900 mb-6 leading-snug">
              Escolha da ração ideal para o seu pet
            </h1>
          </div>

          {/* Featured Editorial Photo */}
          <div className="px-6 sm:px-8 md:px-10 mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-sm bg-stone-100 aspect-[16/9] sm:aspect-[21/9]">
              <img 
                src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1400&q=80" 
                alt="Cachorro saudável feliz ao lado da tigela de ração equilibrada" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 text-white text-xs sm:text-sm font-medium flex items-center justify-between">
                <span>Orientação nutricional individualizada para cães e gatos</span>
                <span className="hidden sm:inline-block bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs">Atendimento 100% Online</span>
              </div>
            </div>
          </div>

          {/* Text Content / Opening */}
          <div className="px-6 sm:px-8 md:px-10 pb-8 sm:pb-10">
            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed mb-8">
              <p className="font-normal text-stone-800">
                Se você acabou de adotar, ou se é a primeira vez que você cuida de um pet, a parte mais difícil costuma ser a comida. Qual ração comprar. Quanto colocar no pote. Se pode dar petisco, e qual.
              </p>
              <p className="font-normal text-stone-700">
                É isso que eu resolvo nesse atendimento. Eu escolho a melhor ração para o seu pet, calculo a quantidade que ele precisa por dia e te digo quais petiscos pode oferecer. Tudo pensando na qualidade de vida desse pet que está chegando.
              </p>
              
              <div className="bg-[#FAF2FF] border border-[#a338b9]/30 rounded-2xl p-5 sm:p-6 my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#a338b9] flex items-center gap-1.5">
                    <Video size={15} />
                    <span>Formato do Atendimento</span>
                  </div>
                  <p className="text-stone-900 font-bold text-lg sm:text-xl">
                    É online, por videochamada, e custa R$ 150.
                  </p>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Inclui análise do pet, recomendação da ração e envio de plano escrito em até 48h.
                  </p>
                </div>

                <button
                  onClick={onOpenConsulta}
                  className="w-full sm:w-auto py-3.5 px-6 bg-[#a338b9] hover:bg-[#812099] text-white font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 ease-out flex items-center justify-center gap-2 cursor-pointer border-none shadow-md shrink-0"
                >
                  <Calendar size={16} />
                  <span>Quero agendar</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* SECTION 2: PARA QUEM É (Visual Editorial Cards) */}
        <section className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm text-left mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a338b9] mb-2">
            <Heart size={15} fill="currentColor" />
            <span>Indicação Prática</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 mb-6">
            Para quem é
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200/70 overflow-hidden flex flex-col">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=600&auto=format&fit=crop" 
                  alt="Filhote resgatado e adotado recentemente"
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Recém-adotado
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-stone-800 text-sm font-semibold leading-relaxed">
                  Para quem adotou agora e não sabe por onde começar.
                </p>
                <div className="pt-3 text-xs text-stone-500 flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-[#a338b9]" />
                  <span>Ajuste seguro desde o primeiro dia</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200/70 overflow-hidden flex flex-col">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=600&auto=format&fit=crop" 
                  alt="Tutor de primeira viagem cuidando do cachorrinho"
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Primeiro pet
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-stone-800 text-sm font-semibold leading-relaxed">
                  Para pais de pet de primeira viagem.
                </p>
                <div className="pt-3 text-xs text-stone-500 flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-[#a338b9]" />
                  <span>Sem dúvidas no corredor do pet shop</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200/70 overflow-hidden flex flex-col">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=600&auto=format&fit=crop" 
                  alt="Gatinho fofo e saudável no pote de ração"
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Conferência de porção
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-stone-800 text-sm font-semibold leading-relaxed">
                  E também para quem já tem o pet há um tempo, mas nunca teve certeza se está oferecendo a quantidade certa.
                </p>
                <div className="pt-3 text-xs text-stone-500 flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-[#a338b9]" />
                  <span>Evita sobrepeso silencioso no futuro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: O QUE A GENTE VÊ NA CONSULTA */}
        <section className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm text-left mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a338b9] mb-2">
            <FileText size={15} />
            <span>Conteúdo do Atendimento</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 mb-6">
            O que a gente vê na consulta
          </h2>

          <div className="space-y-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/60 flex items-start gap-4 transition-colors hover:bg-stone-50">
              <div className="w-8 h-8 rounded-full bg-[#FAF2FF] text-[#a338b9] border border-[#a338b9]/30 flex items-center justify-center shrink-0 font-bold text-sm">
                1
              </div>
              <div className="pt-1">
                <p className="text-stone-800 text-sm sm:text-base font-semibold leading-relaxed">
                  Qual ração comprar, com marca e linha, dentro do que cabe no seu orçamento.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/60 flex items-start gap-4 transition-colors hover:bg-stone-50">
              <div className="w-8 h-8 rounded-full bg-[#FAF2FF] text-[#a338b9] border border-[#a338b9]/30 flex items-center justify-center shrink-0 font-bold text-sm">
                2
              </div>
              <div className="pt-1">
                <p className="text-stone-800 text-sm sm:text-base font-semibold leading-relaxed">
                  Quanto oferecer por dia, em gramas, e como dividir entre as refeições.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/60 flex items-start gap-4 transition-colors hover:bg-stone-50">
              <div className="w-8 h-8 rounded-full bg-[#FAF2FF] text-[#a338b9] border border-[#a338b9]/30 flex items-center justify-center shrink-0 font-bold text-sm">
                3
              </div>
              <div className="pt-1">
                <p className="text-stone-800 text-sm sm:text-base font-semibold leading-relaxed">
                  Quais petiscos você pode dar, que quantidade e com que frequência.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/60 flex items-start gap-4 transition-colors hover:bg-stone-50">
              <div className="w-8 h-8 rounded-full bg-[#FAF2FF] text-[#a338b9] border border-[#a338b9]/30 flex items-center justify-center shrink-0 font-bold text-sm">
                4
              </div>
              <div className="pt-1">
                <p className="text-stone-800 text-sm sm:text-base font-semibold leading-relaxed">
                  O que é melhor evitar.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/60 flex items-start gap-4 transition-colors hover:bg-stone-50">
              <div className="w-8 h-8 rounded-full bg-[#FAF2FF] text-[#a338b9] border border-[#a338b9]/30 flex items-center justify-center shrink-0 font-bold text-sm">
                5
              </div>
              <div className="pt-1">
                <p className="text-stone-800 text-sm sm:text-base font-semibold leading-relaxed">
                  Como fazer a troca de ração sem o pet passar mal.
                </p>
              </div>
            </div>

            {/* Highlight Conclusion */}
            <div className="p-5 rounded-2xl bg-[#FAF2FF] border border-[#a338b9]/30 flex items-start gap-4 mt-4">
              <div className="w-8 h-8 rounded-full bg-[#a338b9] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-sm">
                ✓
              </div>
              <div className="pt-1">
                <p className="text-[#a338b9] text-sm sm:text-base font-bold leading-relaxed">
                  Depois da nossa conversa, você recebe tudo por escrito, para consultar quando precisar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: QUANDO O CAMINHO É OUTRO */}
        <section className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm text-left mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
            <AlertCircle size={15} />
            <span>Atenção Clínica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 mb-4">
            Quando o caminho é outro
          </h2>

          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 mb-6">
            <p className="text-stone-800 font-medium text-sm sm:text-base leading-relaxed">
              Se o seu pet já tem alguma doença diagnosticada, se você quer fazer alimentação natural, ou se ele precisa emagrecer, esse não é o atendimento certo. Nesses casos a dieta precisa ser calculada individualmente, e isso é a consulta nutricional completa.
            </p>
          </div>

          <div>
            <a
              href="/consulta-online"
              onClick={handleNavigateConsultaCompleta}
              className="inline-flex items-center gap-2 text-[#a338b9] font-bold text-sm sm:text-base hover:underline cursor-pointer border-none bg-transparent p-0"
            >
              <span>Se for o seu caso, veja como funciona a consulta completa.</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* SECTION 5: COMO FUNCIONA */}
        <section className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm text-left mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a338b9] mb-2">
            <Sparkles size={15} />
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 mb-8">
            Como funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/60 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#a338b9] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
                  1
                </div>
                <h3 className="font-bold text-stone-900 text-base mb-2">Agendamento & Questionário</h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Você agenda e preenche um questionário rápido sobre o seu pet: peso, idade, rotina, o que ele come hoje.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/60 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#a338b9] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
                  2
                </div>
                <h3 className="font-bold text-stone-900 text-base mb-2">Videochamada com a Dra.</h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  A gente conversa por videochamada. Eu explico a recomendação e você pode tirar todas as suas dúvidas ali.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/60 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#a338b9] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
                  3
                </div>
                <h3 className="font-bold text-stone-900 text-base mb-2">Plano por Escrito</h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Depois eu te envio o plano por escrito em até 48h, pronto para você consultar sempre que precisar.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenConsulta}
              className="w-full sm:w-auto py-4 px-8 bg-[#a338b9] hover:bg-[#812099] text-white font-bold rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-none shadow-md"
            >
              <Calendar size={18} />
              <span>Quero agendar meu atendimento (R$ 150)</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* SECTION 6: PERGUNTAS QUE SEMPRE ME FAZEM */}
        <section className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm text-left mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a338b9] mb-2">
            <MessageSquare size={15} />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 mb-6">
            Perguntas que sempre me fazem
          </h2>

          <div className="divide-y divide-stone-200/70">
            {/* FAQ 1 */}
            <div className="py-4">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex justify-between items-center text-left py-2 font-bold text-stone-900 hover:text-[#a338b9] transition-colors cursor-pointer border-none bg-transparent"
              >
                <span className="font-display text-base sm:text-lg pr-4">Vou ter que comprar uma ração cara?</span>
                <span className="shrink-0 text-[#a338b9]">
                  {openFaq === 0 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === 0 && (
                <div className="pt-2 pb-2 text-stone-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Não necessariamente. Eu trabalho dentro do orçamento que você me disser. A ração adequada nem sempre é a mais cara, é a que atende as necessidades daquele pet.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="py-4">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex justify-between items-center text-left py-2 font-bold text-stone-900 hover:text-[#a338b9] transition-colors cursor-pointer border-none bg-transparent"
              >
                <span className="font-display text-base sm:text-lg pr-4">Meu pet já come uma ração e parece bem. Vale a pena?</span>
                <span className="shrink-0 text-[#a338b9]">
                  {openFaq === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === 1 && (
                <div className="pt-2 pb-2 text-stone-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Vale, principalmente para conferir a quantidade. É muito comum o tutor oferecer mais ou menos do que o pet precisa sem saber, e isso só aparece depois de um tempo.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="py-4">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex justify-between items-center text-left py-2 font-bold text-stone-900 hover:text-[#a338b9] transition-colors cursor-pointer border-none bg-transparent"
              >
                <span className="font-display text-base sm:text-lg pr-4">Serve para gato?</span>
                <span className="shrink-0 text-[#a338b9]">
                  {openFaq === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === 2 && (
                <div className="pt-2 pb-2 text-stone-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Serve. E vale bastante, porque gato tem exigências nutricionais bem diferentes das do cachorro, e a ração felina acaba sendo escolhida errada com frequência.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="py-4">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex justify-between items-center text-left py-2 font-bold text-stone-900 hover:text-[#a338b9] transition-colors cursor-pointer border-none bg-transparent"
              >
                <span className="font-display text-base sm:text-lg pr-4">Meu pet tem uma doença. Serve para ele?</span>
                <span className="shrink-0 text-[#a338b9]">
                  {openFaq === 3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === 3 && (
                <div className="pt-2 pb-2 text-stone-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Nesse caso não. A dieta precisa ser calculada individualmente, então o indicado é a consulta nutricional completa.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="py-4">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex justify-between items-center text-left py-2 font-bold text-stone-900 hover:text-[#a338b9] transition-colors cursor-pointer border-none bg-transparent"
              >
                <span className="font-display text-base sm:text-lg pr-4">Em quanto tempo eu recebo o plano?</span>
                <span className="shrink-0 text-[#a338b9]">
                  {openFaq === 4 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === 4 && (
                <div className="pt-2 pb-2 text-stone-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Em até 48 horas depois do nosso atendimento.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FINAL CONVERSION EDITORIAL FOOTER */}
        <div className="bg-gradient-to-br from-[#FAF2FF] via-white to-[#FAF2FF] border-2 border-[#a338b9]/30 rounded-3xl p-6 sm:p-8 md:p-10 text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a338b9]">Atendimento Individual</span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900">
              Pronto para acertar na alimentação do seu pet?
            </h3>
            <p className="text-stone-600 text-sm max-w-lg">
              Agende sua orientação de escolha de ração por videochamada (R$ 150) e receba o cálculo exato por dia.
            </p>
          </div>

          <button
            onClick={onOpenConsulta}
            className="w-full sm:w-auto py-4 px-8 bg-[#a338b9] hover:bg-[#812099] text-white font-bold rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-none shadow-md shrink-0"
          >
            <Calendar size={18} />
            <span>Agendar agora</span>
          </button>
        </div>

      </div>
    </div>
  );
};
