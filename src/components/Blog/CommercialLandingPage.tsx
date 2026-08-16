import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  AlertCircle, 
  HelpCircle, 
  Link as LinkIcon, 
  ChevronDown, 
  ChevronUp, 
  UserCheck, 
  Tag 
} from 'lucide-react';
import { SERVICE_LANDINGS } from '../../data/blogArticles';

interface CommercialLandingPageProps {
  slugKey: string;
  onNavigateBlog: () => void;
  onOpenConsulta: (format: 'online' | 'presencial' | 'insurance') => void;
}

export const CommercialLandingPage: React.FC<CommercialLandingPageProps> = ({
  slugKey,
  onNavigateBlog,
  onOpenConsulta,
}) => {
  const landing = SERVICE_LANDINGS[slugKey] || SERVICE_LANDINGS['nutricao-pet-online'];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (landing) {
      document.title = landing.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', landing.description);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [landing, slugKey]);

  const priceVal = landing.price || 'R$ 200,00';
  const disclaimer = landing.emergencyDisclaimer || 'Aviso: Esta consulta nutricional veterinária é destinada ao acompanhamento preventivo e clínico nutricional. Não substitui atendimento médico veterinário emergencial presencial.';

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20 text-[#374151]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-8 text-left">
          <button
            onClick={onNavigateBlog}
            className="flex items-center gap-1.5 text-[#a338b9] hover:underline font-bold cursor-pointer border-none bg-transparent"
          >
            <ArrowLeft size={14} />
            <span>Voltar ao Blog</span>
          </button>
          <span>/</span>
          <span className="text-stone-800 font-bold">{landing.title.split('|')[0]}</span>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1f293d] to-[#111827] text-white rounded-3xl p-8 md:p-12 shadow-xl text-left border border-stone-800 relative overflow-hidden mb-10">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#a338b9]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
            <Heart size={16} fill="currentColor" />
            <span>Nutrição Veterinária Clínica</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black font-display text-white mb-6 leading-tight">
            {landing.headline}
          </h1>

          <p className="text-stone-300 text-base md:text-lg font-medium leading-relaxed max-w-2xl mb-8">
            {landing.description}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenConsulta(landing.formatKey)}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-8 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer border-none"
            >
              <Phone size={18} />
              <span>Agendar Consulta no WhatsApp ({priceVal})</span>
            </button>
          </div>
        </div>

        {/* Detailed Explanation Text */}
        {landing.detailedText && (
          <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-sm text-left mb-10">
            <h2 className="text-xl md:text-2xl font-extrabold font-display text-stone-900 mb-4">
              Entenda o Cuidado Nutricional Clínico
            </h2>
            <p className="text-stone-700 text-base leading-relaxed">
              {landing.detailedText}
            </p>
          </div>
        )}

        {/* Who Is It For Section */}
        {landing.whoIsItFor && landing.whoIsItFor.length > 0 && (
          <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-sm text-left mb-10">
            <h2 className="text-xl md:text-2xl font-extrabold font-display text-stone-900 mb-6 flex items-center gap-2.5">
              <UserCheck size={24} className="text-[#a338b9]" />
              <span>Para quem é esta consulta:</span>
            </h2>
            <div className="space-y-3">
              {landing.whoIsItFor.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#FAF8F5] rounded-xl border border-stone-100">
                  <CheckCircle2 size={18} className="text-[#a338b9] shrink-0 mt-0.5" />
                  <span className="text-stone-800 font-semibold text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What Is Included Section */}
        <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-sm text-left mb-10">
          <h2 className="text-xl md:text-2xl font-extrabold font-display text-stone-900 mb-6 flex items-center gap-2">
            <ShieldCheck size={24} className="text-[#a338b9]" />
            <span>O que está incluso na consulta:</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(landing.whatsIncluded || landing.benefits).map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-2xl border border-stone-100">
                <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-stone-800 font-semibold text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Card Section */}
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 border border-purple-200 rounded-3xl p-8 md:p-10 shadow-sm text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 text-[#a338b9] font-bold text-xs uppercase tracking-wider mb-3">
            <Tag size={14} />
            <span>Consulta Particular</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-2">
            Investimento na Saúde do Seu Pet
          </h3>
          <div className="text-4xl md:text-5xl font-black text-[#a338b9] my-4">
            {priceVal}
          </div>
          <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
            Atendimento médico veterinário nutricional 100% personalizado, com análise de exames, prescrição sob medida e acompanhamento via WhatsApp.
          </p>
          <button
            onClick={() => onOpenConsulta(landing.formatKey)}
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-8 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer border-none"
          >
            <Phone size={18} />
            <span>Agendar Consulta por {priceVal} no WhatsApp</span>
          </button>
        </div>

        {/* FAQ Section */}
        {landing.faqs && landing.faqs.length > 0 && (
          <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-sm text-left mb-10">
            <h2 className="text-xl md:text-2xl font-extrabold font-display text-stone-900 mb-6 flex items-center gap-2.5">
              <HelpCircle size={24} className="text-[#a338b9]" />
              <span>Perguntas Frequentes</span>
            </h2>
            <div className="space-y-4">
              {landing.faqs.map((faq, idx) => (
                <div key={idx} className="border border-stone-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-5 bg-stone-50 hover:bg-stone-100 font-bold text-stone-900 flex justify-between items-center gap-4 transition-colors cursor-pointer border-none"
                  >
                    <span>{faq.question}</span>
                    {openFaq === idx ? <ChevronUp size={20} className="text-[#a338b9]" /> : <ChevronDown size={20} className="text-stone-500" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 bg-white text-stone-700 text-sm leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Pages Links */}
        {landing.relatedLinks && landing.relatedLinks.length > 0 && (
          <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm text-left mb-10">
            <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <LinkIcon size={18} className="text-[#a338b9]" />
              <span>Páginas Relacionadas:</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {landing.relatedLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', link.url);
                    window.dispatchEvent(new Event('popstate'));
                  }}
                  className="px-4 py-2 bg-stone-100 hover:bg-purple-100 text-[#a338b9] font-bold text-sm rounded-xl transition-colors no-underline inline-flex items-center gap-1.5"
                >
                  <span>{link.text}</span>
                  <ArrowRight size={14} />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Emergency Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-left mb-10 flex items-start gap-3">
          <AlertCircle size={20} className="text-amber-700 shrink-0 mt-0.5" />
          <p className="text-amber-900 text-xs font-semibold leading-relaxed m-0">
            {disclaimer}
          </p>
        </div>

        {/* Final CTA Card */}
        <div className="bg-[#fcf5fe] border border-[#ebdcf2] rounded-3xl p-8 text-center text-stone-900">
          <h3 className="text-xl md:text-2xl font-bold font-display text-stone-900 mb-3">
            Quer saber qual alimentação e quantidade são adequadas para o seu cão ou gato?
          </h3>
          <p className="text-stone-600 text-sm font-medium mb-6 max-w-xl mx-auto">
            Conheça a consulta nutricional veterinária online da Dra. Thais Vieira por R$ 200,00 com atendimento personalizado para todo o Brasil.
          </p>
          <button
            onClick={() => onOpenConsulta(landing.formatKey)}
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-8 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 cursor-pointer border-none"
          >
            <Phone size={18} />
            <span>Falar no WhatsApp para Agendar Consulta</span>
          </button>
        </div>
      </div>
    </div>
  );
};
