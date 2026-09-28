import React from 'react';
import { 
  Sparkles, 
  Heart, 
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './LayoutComponents';

interface FooterCTAProps {
  setIsModalOpen: (open: boolean) => void;
  openConsulta: (format: 'online' | 'presencial' | 'insurance' | 'racao') => void;
}

export function FooterCTA({ setIsModalOpen, openConsulta }: FooterCTAProps) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Oiie Thais quero agendar um horario com voce');
    window.open(`https://api.whatsapp.com/send?phone=5511916539562&text=${text}`, '_blank');
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 md:px-8 text-white relative overflow-hidden text-center border-t border-[#a338b9]/25 rounded-t-[3.5rem] md:rounded-t-[4.5rem] shadow-[0_-20px_50px_rgba(163,56,185,0.12)] z-20 -mt-16 bg-stone-950">
      {/* Background Image with optimized visibility and text contrast */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/8434727/pexels-photo-8434727.jpeg?auto=compress&cs=tinysrgb&w=1200&q=70" 
          alt="Atendimento nutricional veterinário para cães e gatos" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        {/* Dark cosmic overlay with moderate transparency so the image is beautifully visible while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15041a]/90 via-[#08000a]/85 to-[#040005]/90" />
      </div>

      {/* Subtle background glow spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#a338b9]/15 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#d4abe4]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-[#a338b9]/25 border border-[#a338b9]/35 px-4.5 py-1.5 rounded-full backdrop-blur-md">
            <Heart size={14} className="text-[#ff7ae2] fill-[#ff7ae2]" />
            <span className="text-[11px] font-black text-[#d4abe4] tracking-[0.25em] uppercase font-sans">
              Saúde & Bem-Estar
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-display tracking-tight max-w-3xl mx-auto leading-tight text-white">
            Cuidado nutricional para cada fase da vida
          </h2>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto mt-4">
            Cada refeição é planejada para atender às necessidades nutricionais do seu cão ou gato, com plano individualizado e acompanhamento contínuo.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="pt-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 max-w-xl mx-auto">
            <motion.button 
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-5 bg-gradient-to-r from-[#ff38bc] via-[#a338b9] to-[#fb923c] text-white font-black rounded-2xl text-xs sm:text-sm uppercase tracking-wider relative overflow-hidden shadow-[0_15px_45px_rgba(163,56,185,0.45)] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-0.5 border-none"
            >
              <motion.div 
                animate={{ x: ['-200%', '200%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-15deg] pointer-events-none"
              />
              <span className="tracking-widest flex items-center gap-1.5 font-display text-sm sm:text-base text-center">
                Quero um plano pensado para o meu pet <Sparkles size={15} className="fill-white shrink-0" />
              </span>
              <span className="text-[10px] font-bold text-amber-100 normal-case tracking-normal">Atendimento humanizado e 30 dias de suporte via WhatsApp</span>
            </motion.button>

            <motion.button 
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-5 bg-white/5 text-white font-black rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all border border-white/20 hover:border-white/40 cursor-pointer flex flex-col items-center justify-center gap-0.5"
            >
              <span className="tracking-widest flex items-center gap-1.5 font-bold uppercase overflow-hidden leading-none select-none text-center">Falar com Dra. Thais <ArrowUpRight size={14} /></span>
              <span className="text-[10px] font-bold text-stone-200 normal-case tracking-normal">Tirar dúvidas antes de agendar</span>
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[11px] text-stone-300 font-bold font-sans pt-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" /> Orientação nutricional independente
            </span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-amber-400" /> 30 dias de acompanhamento contínuo
            </span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-purple-300" /> Acompanhamento nutricional individualizado
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
