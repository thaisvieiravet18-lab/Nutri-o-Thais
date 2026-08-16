import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const faqs = [
  {
    question: "Como funciona a consulta nutricional veterinária online para cães e gatos?",
    answer: "A consulta nutricional veterinária online para cães e gatos é realizada por videochamada pela Dra. Thais Vieira (nutricionista e nutróloga veterinária online). Avaliamos histórico de saúde, exames laboratoriais, rotina e preferências do tutor para prescrever um plano alimentar online com Alimentação Natural (AN), Ração Terapêutica ou Dieta Mista."
  },
  {
    question: "Qual é a melhor ração para o meu cachorro ou gato?",
    answer: "A resposta para 'qual é a melhor ração?' varia conforme a raça, idade, nível de atividade e condições clínicas do pet (como doença renal, alergias ou obesidade). Na consulta online para escolher ração, indicamos as marcas de ração super premium e terapêuticas mais adequadas sem conflito de interesses."
  },
  {
    question: "Quanto dar de ração por dia para cães e gatos?",
    answer: "A dúvida 'quanto dar de ração?' depende da necessidade calórica diária do animal. Na consultoria online, calculamos a gramagem exata por refeição com base no peso ideal e gasto metabólico, prevenindo a obesidade e a subnutrição."
  },
  {
    question: "Como funciona a dieta para cachorro com doença renal ou gato com doença renal?",
    answer: "Para o cão renal ou felino com insuficiência renal, elaboramos uma dieta veterinária online com teores rigorosamente controlados de fósforo, sódio e proteína de altíssima digestibilidade, associando suplementos protetores para preservar a função renal."
  },
  {
    question: "Como é o controle de peso para cães e gatos obesos?",
    answer: "O emagrecimento de cães e gatos obeso é feito com dieta para cachorro obeso e dieta para gato obeso formulada pela nutricionista veterinária. O plano garante saciedade através de fibras solúveis e micronutrientes sem promover perda de massa magra."
  },
  {
    question: "Posso misturar ração com alimentação natural?",
    answer: "Sim, a Alimentação Mista traz excelentes benefícios, unindo a praticidade da ração com a alta palatabilidade da comida natural cozida. No entanto, as proporções precisam ser calculadas por uma nutricionista de cães e gatos online para manter o equilíbrio nutricional."
  }
];

export const FAQItem = ({ question, answer }: { question: string, answer: string, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200/60 py-4 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left text-base md:text-lg font-bold text-stone-800 hover:text-primary transition-colors py-3 focus:outline-none focus:ring-0 cursor-pointer"
      >
        <span className="pr-4 font-display font-bold leading-snug">{question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0">
          <ChevronDown size={18} className="text-primary-light" />
        </motion.span>
      </button>
      {/* Static text always present in HTML for SSR SEO */}
      <div className={isOpen ? "block" : "hidden md:block opacity-90 text-stone-600 text-sm"}>
        <p className="mt-2 pb-3 text-stone-700 text-sm md:text-base leading-relaxed font-normal">{answer}</p>
      </div>
    </div>
  );
};
