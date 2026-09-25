import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const faqs = [
  {
    question: "Como funciona a consulta nutricional veterinária online para cães e gatos?",
    answer: "A consulta nutricional veterinária online para cães e gatos é realizada por videochamada pela Dra. Thais Vieira (médica veterinária com pós-graduação em nutrição animal). Avaliamos histórico, rotina, exames de rotina e preferências do tutor para estruturar um plano alimentar individualizado com Alimentação Natural (AN), Ração Selecionada ou Dieta Mista."
  },
  {
    question: "Qual é a melhor ração para o meu cachorro ou gato?",
    answer: "A indicação da ração ideal varia conforme espécie, raça, idade, porte, nível de atividade física e preferências do pet. Na orientação para escolha de ração, indicamos as marcas e linhas mais adequadas dentro do seu orçamento sem qualquer conflito de interesses."
  },
  {
    question: "Quanto dar de ração por dia para cães e gatos?",
    answer: "A quantidade de ração depende da necessidade calórica diária do animal. No atendimento, calculamos a quantidade exata por refeição em gramas com base no peso ideal e gasto metabólico, promovendo saciedade e o equilíbrio nutricional."
  },
  {
    question: "Como funciona a adaptação para pets com paladar exigente ou rotinas especiais?",
    answer: "Para pets exigentes ou que precisam de cuidados na rotina diária, elaboramos uma adaptação gradual e balanceada com ingredientes seguros, alta palatabilidade e nutrientes de alta qualidade para favorecer a vitalidade e a hidratação."
  },
  {
    question: "Como funciona o ajuste para manter o peso ideal do cão ou gato?",
    answer: "O equilíbrio de peso é conduzido com plano nutricional individualizado e porções diárias sob medida estruturadas pela médica veterinária. O plano favorece saciedade através de fibras e proteínas selecionadas, com acompanhamento do bem-estar e da condição corporal."
  },
  {
    question: "Posso misturar ração com alimentação natural?",
    answer: "Sim, a Alimentação Mista pode trazer benefícios unindo a praticidade da ração à alta palatabilidade e hidratação da alimentação natural balanceada. No entanto, as proporções e calorias precisam ser calculadas por médica veterinária para manter o equilíbrio nutricional diário."
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
