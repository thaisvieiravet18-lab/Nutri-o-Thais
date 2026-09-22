import React from 'react';
import { 
  Sparkles, 
  Heart, 
  ArrowUpRight, 
  ShieldCheck, 
  MessageCircle, 
  Clock, 
  Check, 
  Scale, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  Flame,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './LayoutComponents';

interface WelcomingExperienceSectionProps {
  setIsModalOpen: (open: boolean) => void;
  openConsulta: (format: 'online' | 'presencial' | 'insurance' | 'racao') => void;
}

export function WelcomingExperienceSection({ setIsModalOpen, openConsulta }: WelcomingExperienceSectionProps) {
  const steps = [
    {
      number: "1",
      stepBadge: "1º Passo",
      title: "Uma consulta para conhecer seu pet de verdade",
      badgeColor: "from-amber-400 to-orange-500",
      circleRing: "border-amber-400 shadow-[0_0_30px_rgba(251,146,60,0.45)]",
      pillClass: "bg-amber-400/20 text-amber-300 border-amber-400/40",
      icon: <MessageCircle className="w-5 h-5 text-amber-300" />,
      tagline: "Online pelo WhatsApp ou Google Meet, com escuta atenta e sem julgamentos.",
      description: "Vou conhecer a saúde, o peso, os exames, a alimentação atual, as preferências do seu pet e a rotina da família. A partir disso, decidiremos juntos se a melhor opção é ração, alimentação natural ou mista..",
      highlights: [
        "Avaliação da saúde, exames e rotina",
        "Escolha entre ração, natural ou mista",
        "Estratégia possível para sua família"
      ],
      resultNote: "Um cuidado que considera o pet e a realidade de quem cuida dele."
    },
    {
      number: "2",
      stepBadge: "2º Passo",
      title: "Você saberá exatamente o que colocar no potinho",
      badgeColor: "from-[#ff38bc] to-[#a338b9]",
      circleRing: "border-[#ff38bc] shadow-[0_0_30px_rgba(255,56,188,0.45)]",
      pillClass: "bg-pink-400/20 text-pink-300 border-pink-400/40",
      icon: <Scale className="w-5 h-5 text-pink-300" />,
      tagline: "Nada de escolher alimentos ou quantidades no achismo.",
      description: "Preparo um plano personalizado, calculado conforme o peso, a saúde, o gasto de energia e o objetivo do seu pet. Você recebe as quantidades em gramas, a divisão das refeições, orientações sobre petiscos e como fazer a transição alimentar.",
      highlights: [
        "Porções diárias calculadas em gramas",
        "Petiscos e extras incluídos no plano",
        "Orientação para uma transição gradual"
      ],
      resultNote: "Mais clareza para alimentar seu pet com segurança todos os dias."
    },
    {
      number: "3",
      stepBadge: "3º Passo",
      title: "Você recebe o plano e acompanhamento para colocá-lo em prática.",
      badgeColor: "from-[#a338b9] to-purple-500",
      circleRing: "border-[#a338b9] shadow-[0_0_30px_rgba(163,56,185,0.45)]",
      pillClass: "bg-purple-400/20 text-purple-300 border-purple-400/40",
      icon: <Clock className="w-5 h-5 text-purple-300" />,
      tagline: "Você não fica sozinho para aplicar o plano.",
      description: "Durante 30 dias, acompanho a adaptação pelo WhatsApp, respondo suas dúvidas e avalio como seu pet está reagindo. Se algo não funcionar bem na rotina, faço os ajustes necessários. Quando o objetivo envolver mudança de peso, também acompanho as pesagens e a evolução.",
      highlights: [
        "Dúvidas diretamente comigo no WhatsApp",
        "Acompanhamento do peso e da adaptação",
        "Ajustes no plano quando necessários"
      ],
      resultNote: "Meu cuidado continua depois que o plano chega ao potinho."
    }
  ];

  return (
    <section 
      className="pt-24 pb-20 md:pt-32 md:pb-28 px-4 md:px-8 relative z-10 -mt-16 rounded-[3.5rem] md:rounded-[4.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3),0_30px_70px_rgba(0,0,0,0.4)] overflow-hidden text-white bg-[#0a020f]" 
      id="orientacao-racao"
    >
      {/* Background image & atmospheric lighting */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/33834938/pexels-photo-33834938.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Cuidado carinhoso com pet" 
          className="w-full h-full object-cover object-center opacity-30 filter contrast-105 scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a020f] via-[#12031d]/92 to-[#07010a]" />
      </div>

      {/* Radiant ambient glow orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#a338b9]/25 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-amber-500/15 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#a338b9]/30 border border-[#a338b9]/40 text-[#f5d0fe] text-xs font-bold uppercase tracking-[0.25em] px-4.5 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles size={13} className="text-amber-300 fill-amber-300" />
              <span>Como Funciona o Acompanhamento</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white leading-[1.15]">
              Pare de ter dúvidas sobre o que colocar no potinho
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans">
              Entre tantas rações, opções e dicas da internet, é normal se sentir perdido. 
              <span className="text-amber-200 font-semibold"> Veja como é simples o caminho até a alimentação ideal do seu pet:</span>
            </p>
          </FadeIn>
        </div>

        {/* CONNECTED STEPS ROADMAP */}
        <div className="relative pt-4">

          {/* DESKTOP CONNECTING LINE (Visible on lg screens) */}
          <div className="hidden lg:block absolute top-[68px] left-[17%] right-[17%] h-[4px] -z-0">
            {/* Base track */}
            <div className="w-full h-full bg-white/15 rounded-full" />
            {/* Glowing gradient line linking Step 1, Step 2, Step 3 */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-[#ff38bc] to-[#a338b9] rounded-full shadow-[0_0_20px_rgba(255,56,188,0.7)]" />
            {/* Animated glowing beam flowing through the track */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent animate-beam" />
            </div>
          </div>

          {/* 3 STEPS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
            {steps.map((st, index) => (
              <FadeIn key={st.number} delay={index * 0.15} className="h-full">
                <div className="h-full flex flex-col items-center text-center group">
                  
                  {/* STEP NUMBER IN A PROMINENT GLOWING CIRCLE */}
                  <div className="relative mb-6">
                    {/* Circle ring wrapper */}
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 ${st.circleRing} bg-[#16021f] p-2 flex items-center justify-center shadow-2xl relative transition-transform duration-300 group-hover:scale-105`}>
                      {/* Inner solid gradient circle */}
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${st.badgeColor} flex flex-col items-center justify-center text-white shadow-inner`}>
                        <span className="text-3xl sm:text-4xl font-black font-display tracking-tighter leading-none">
                          {st.number}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider opacity-90 leading-tight mt-0.5">
                          Passo
                        </span>
                      </div>
                    </div>

                    {/* Step badge pill floating below circle */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className={`text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-md ${st.pillClass} backdrop-blur-md inline-flex items-center gap-1.5`}>
                        {st.icon}
                        <span>{st.stepBadge}</span>
                      </span>
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="w-full flex-1 bg-stone-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between text-left shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/25 hover:bg-stone-900/95 mt-3">
                    
                    <div className="space-y-4">
                      {/* Step Title */}
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white leading-snug">
                        {st.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-amber-200 text-xs sm:text-sm font-semibold">
                        {st.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
                        {st.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-2">
                        {st.highlights.map((hl, hIdx) => (
                          <div 
                            key={hIdx} 
                            className="flex items-start gap-2 text-xs text-stone-200"
                          >
                            <CheckCircle2 size={14} className="text-[#ff7ae2] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connection indicator */}
                    <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400 font-medium">
                      <span>{st.resultNote}</span>
                      {index < steps.length - 1 ? (
                        <ArrowRight size={13} className="text-amber-300 shrink-0" />
                      ) : (
                        <Check size={13} className="text-emerald-400 shrink-0" />
                      )}
                    </div>

                  </div>

                  {/* MOBILE CONNECTING LINE (Visible between steps on mobile/tablet) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex flex-col items-center my-6 gap-1.5">
                      <div className="w-1 h-12 bg-gradient-to-b from-amber-400 via-[#ff38bc] to-[#a338b9] rounded-full shadow-[0_0_15px_rgba(255,56,188,0.6)]" />
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[#ff7ae2] uppercase tracking-widest backdrop-blur-sm">
                        <span>Conecta ao {index + 2}º Passo</span>
                        <ArrowRight size={11} className="rotate-90" />
                      </div>
                    </div>
                  )}

                </div>
              </FadeIn>
            ))}
          </div>

        </div>

        {/* SOCIAL PROOF RIBBON */}
        <FadeIn delay={0.4}>
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex items-center gap-3 text-left">
              <div className="w-11 h-11 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30">
                <Sparkles size={20} className="fill-amber-300" />
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base tracking-wide">
                  Mais de 200 pets já receberam um plano pensado para sua saúde, suas necessidades e a rotina da família
                </p>
                <p className="text-stone-300/90 text-xs sm:text-sm mt-0.5 font-normal">
                  Cães e gatos com digestão regulada, peso saudável e tutores tranquilos.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-300 font-medium bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Atendimento online para todo o Brasil</span>
            </div>
          </div>
        </FadeIn>

        {/* CARD INVESTIMENTO */}
        <FadeIn delay={0.42}>
          <div 
            id="card-investimento-plano"
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#240630]/90 via-[#180321]/90 to-[#12011a]/95 border-2 border-[#a338b9]/40 hover:border-[#ff38bc]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(163,56,185,0.2)] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 text-left"
          >
            {/* Soft ambient background glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#ff38bc]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#a338b9]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Informações e Texto */}
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#a338b9]/25 border border-[#a338b9]/45 text-[#ff7ae2] text-[11px] font-black uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-amber-300" />
                  <span>Investimento</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
                    R$ 200
                  </span>
                  <span className="text-xs sm:text-sm text-stone-300 font-medium">
                    (valor único)
                  </span>
                </div>

                <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-medium">
                  Mais clareza para você e uma alimentação pensada para a saúde, as necessidades e a rotina do seu pet
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs text-stone-300 font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Consulta completa (Meet/WhatsApp)</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Plano alimentar em gramas</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>30 dias de suporte no WhatsApp</span>
                  </span>
                </div>
              </div>

              {/* Botão de Ação Rápida */}
              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5 items-stretch sm:items-center md:items-end">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-7 py-4 bg-gradient-to-r from-[#ff2eb7] via-[#a338b9] to-[#ff841f] hover:from-[#ff4ac1] hover:to-[#ff9b44] text-white font-black rounded-2xl text-xs sm:text-sm uppercase tracking-wider shadow-[0_12px_32px_rgba(255,46,183,0.4)] hover:shadow-[0_16px_40px_rgba(255,46,183,0.6)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-none"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight size={16} />
                </button>
                <span className="text-[11px] text-stone-400 text-center md:text-right">
                  Pagamento seguro via Cartão ou Pix
                </span>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* ACTION BUTTONS */}
        <FadeIn delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <motion.button 
              id="btn-plano-pensado-pet"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative group w-full sm:w-auto flex-1 max-w-lg py-5 px-8 sm:px-10 bg-gradient-to-r from-[#ff2eb7] via-[#a338b9] to-[#ff841f] hover:from-[#ff4ac1] hover:to-[#ff9b44] text-white font-black rounded-2xl sm:rounded-3xl uppercase tracking-wider shadow-[0_18px_50px_rgba(255,46,183,0.55),0_0_55px_rgba(163,56,185,0.45)] hover:shadow-[0_22px_60px_rgba(255,46,183,0.75),0_0_70px_rgba(255,132,31,0.55)] transition-all duration-300 flex flex-col items-center justify-center gap-1.5 cursor-pointer border-2 border-white/40 ring-4 ring-[#ff38bc]/35 hover:ring-[#ff38bc]/60 ring-offset-2 ring-offset-[#0a020f] overflow-hidden"
            >
              {/* Shimmer light sweep on hover/idle */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

              <span className="relative z-10 tracking-wider flex items-center justify-center gap-2 font-display text-base sm:text-lg md:text-xl font-black text-center drop-shadow-md">
                <span>Quero um plano pensado para o meu pet</span>
                <Sparkles size={20} className="fill-amber-300 text-amber-200 shrink-0 animate-pulse" />
              </span>
              <span className="relative z-10 inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-amber-100 bg-black/25 px-3.5 py-0.5 rounded-full border border-white/15 normal-case tracking-normal shadow-sm">
                <Check size={13} className="text-emerald-400 stroke-[3]" />
                <span>Consulta completa + 30 dias de acompanhamento</span>
              </span>
            </motion.button>

            <button 
              onClick={() => openConsulta('online')}
              className="w-full sm:w-auto py-4 px-7 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-all border border-white/20 hover:border-white/35 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Tirar dúvidas no WhatsApp</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Trust assurances */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[11px] text-stone-400 font-bold font-sans pt-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck size={14} className="text-emerald-400" /> Sem vínculo comercial com marcas
            </span>
            <span className="text-stone-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Clock size={14} className="text-amber-400" /> 30 dias de suporte no WhatsApp
            </span>
            <span className="text-stone-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Check size={14} className="text-purple-300" /> Cães e gatos saudáveis ou com acompanhamento clínico
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

