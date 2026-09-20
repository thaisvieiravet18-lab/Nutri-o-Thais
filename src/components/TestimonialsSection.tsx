import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { FadeIn } from './LayoutComponents';

interface Testimonial {
  name: string;
  pet: string;
  location: string;
  text: string;
  rating: number;
  badge: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Juliana Mendes',
    pet: 'Tutor(a) do Thor (Golden Retriever)',
    location: 'São Paulo - SP',
    rating: 5,
    badge: 'Controle de Peso e Ração',
    text: 'A Dra. Thais transformou a saúde do Thor! Ele estava com sobrepeso e vivia com problemas de pele. Com a orientação precisa da ração e das porções em gramas, ele emagreceu com saúde e tem muito mais energia.'
  },
  {
    name: 'Rodrigo Pires',
    pet: 'Tutor(a) da Mia e do Frederico (Gatos SRD)',
    location: 'Campinas - SP',
    rating: 5,
    badge: 'Nutrição Felina',
    text: 'Atendimento online impecável! Ela entende tudo sobre comportamento de gatos e montou uma rotina com sachês e ração de alta qualidade que resolveu a hidratação dos dois. O suporte no WhatsApp faz toda a diferença.'
  },
  {
    name: 'Carla Vasconcellos',
    pet: 'Tutor(a) da Mel (Spitz Alemão)',
    location: 'Belo Horizonte - MG',
    rating: 5,
    badge: 'Alimentação Natural Balanceada',
    text: 'A Mel é extremamente seletiva para comer. A consulta com a Dra. Thais foi um divisor de águas: carinhosa, explicou tudo sem julgamentos e preparou uma alimentação balanceada que a Mel devora feliz todos os dias.'
  }
];

export function TestimonialsSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        {TESTIMONIALS.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="h-full">
            <div className="h-full bg-white/90 backdrop-blur-sm border border-stone-200/80 rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:border-[#a338b9]/40 hover:shadow-[0_15px_35px_rgba(163,56,185,0.08)] transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#a338b9] uppercase tracking-wider bg-[#f4e2f7] px-2.5 py-1 rounded-full border border-[#ebdcf2]">
                    {item.badge}
                  </span>
                </div>

                <div className="relative">
                  <Quote size={24} className="text-stone-200 absolute -top-2 -left-1 pointer-events-none" />
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans relative z-10 pt-3">
                    "{item.text}"
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 font-display">{item.name}</h4>
                  <p className="text-xs text-[#a338b9] font-medium">{item.pet}</p>
                  <p className="text-[11px] text-stone-600">{item.location}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600" title="Atendimento Verificado">
                  <CheckCircle size={16} />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Trust metric summary badge */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-stone-600 font-medium pt-2">
        <div className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-stone-200/80 shadow-xs">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="font-bold text-stone-900">5.0 de 5 estrelas</span>
          <span>• Avaliações comprovadas de tutores</span>
        </div>
      </div>
    </div>
  );
}
