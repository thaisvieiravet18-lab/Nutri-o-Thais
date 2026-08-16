import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const faqs = [
  {
    question: "Como funciona a consulta nutricional veterinária online para cães e gatos?",
    answer: "A consulta nutricional veterinária online para cães e gatos é realizada por videochamada pela Dra. Thais Vieira (médica veterinária com pós-graduação em nutrição animal). Avaliamos histórico de saúde, exames laboratoriais, rotina e preferências do tutor para prescrever um plano alimentar individualizado com Alimentação Natural (AN), Ração Terapêutica ou Dieta Mista."
  },
  {
    question: "Qual é a melhor ração para o meu cachorro ou gato?",
    answer: "A indicação da ração ideal varia conforme espécie, raça, idade, nível de atividade e condições clínicas do pet (como doença renal, alergias ou obesidade). Na orientação para escolha de ração, indicamos as opções mais adequadas sem qualquer conflito de interesses."
  },
  {
    question: "Quanto dar de ração por dia para cães e gatos?",
    answer: "A quantidade de ração depende da necessidade calórica diária do animal. No atendimento, calculamos a quantidade exata por refeição em gramas com base no peso ideal e gasto metabólico, prevenindo a obesidade e a desnutrição."
  },
  {
    question: "Como funciona a dieta para cachorro com doença renal ou gato com doença renal?",
    answer: "Para o cão ou gato com doença renal crônica, elaboramos uma dieta com teores rigorosamente controlados de fósforo, sódio e proteína de altíssima digestibilidade, associando suplementação adequada para proteger a função renal."
  },
  {
    question: "Como é o controle de peso para cães e gatos obesos?",
    answer: "O emagrecimento de cães e gatos com sobrepeso ou obesidade é conduzido com plano nutricional individualizado formulado pela médica veterinária. O plano promove saciedade através de fibras e micronutrientes, sem perda de massa muscular."
  },
  {
    question: "Posso misturar ração com alimentação natural?",
    answer: "Sim, a Alimentação Mista pode trazer benefícios unindo a praticidade da ração à alta palatabilidade da comida natural cozida. No entanto, as proporções e calorias precisam ser calculadas por uma médica veterinária com pós-graduação em nutrição animal para manter o equilíbrio nutricional."
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
