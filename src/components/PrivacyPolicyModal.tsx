import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, CheckCircle2, Lock } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'terms';
}

export function PrivacyPolicyModal({ isOpen, onClose, defaultTab = 'privacy' }: PrivacyPolicyModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(defaultTab);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-stone-900 text-stone-200 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-stone-900/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#a338b9]/20 border border-[#a338b9]/30 flex items-center justify-center text-[#ff2eb7]">
                <Shield size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Transparência & Conformidade</h3>
                <p className="text-xs text-stone-400">Dra. Thais Vieira • CRMV-SP 55784</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer border-none bg-transparent"
              aria-label="Fechar modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex border-b border-stone-800 px-6 pt-3 gap-4 bg-stone-950/40">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`pb-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer bg-transparent ${
                activeTab === 'privacy'
                  ? 'border-[#ff2eb7] text-white'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Lock size={15} />
              Política de Privacidade (LGPD)
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer bg-transparent ${
                activeTab === 'terms'
                  ? 'border-[#ff2eb7] text-white'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <FileText size={15} />
              Termos de Uso & Responsabilidade
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed text-stone-300 font-sans">
            {activeTab === 'privacy' ? (
              <div className="space-y-4">
                <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800 space-y-2">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    Compromisso com a LGPD (Lei nº 13.709/2018)
                  </h4>
                  <p className="text-stone-400 text-xs">
                    Respeitamos integralmente a sua privacidade e a segurança dos dados do seu animal de estimação.
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">1. Coleta de Informações</h5>
                  <p>
                    Coletamos apenas as informações estritamente necessárias para a elaboração do plano alimentar e a prestação do serviço de consultoria nutricional:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-stone-400">
                    <li>Nome do tutor e telefone de contato (WhatsApp);</li>
                    <li>Dados do pet: espécie, raça, idade, peso atual, histórico alimentar e rotina;</li>
                    <li>Exames recentes e histórico clínico enviados voluntariamente pelo tutor.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">2. Finalidade e Uso dos Dados</h5>
                  <p>
                    Os dados coletados destinam-se exclusivamente a:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-stone-400">
                    <li>Cálculo e envio do plano alimentar individualizado em PDF;</li>
                    <li>Comunicação e acompanhamento de dúvidas via WhatsApp durante o período do atendimento contratado;</li>
                    <li>Agendamento de orientações e confirmação de pagamento.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">3. Não Compartilhamento com Terceiros</h5>
                  <p>
                    Não comercializamos, alugamos ou compartilhamos qualquer dado pessoal ou clínico dos pets com fabricantes de rações, laboratórios ou empresas terceirizadas de marketing. O relacionamento é estritamente confidencial entre tutor e profissional veterinária.
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">4. Direitos do Titular</h5>
                  <p>
                    Você pode, a qualquer momento, solicitar a atualização, correção ou exclusão definitiva dos seus dados dos nossos registros enviando um e-mail para <strong className="text-white">thaisvieiravet18@gmail.com</strong>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800 space-y-2">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400" />
                    Atendimento e Escopo de Atuação Profissional
                  </h4>
                  <p className="text-stone-400 text-xs">
                    Atendimento em conformidade com as diretrizes do Conselho Federal de Medicina Veterinária (CFMV).
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">1. Escopo das Consultorias e Planos Alimentares</h5>
                  <p>
                    Os serviços prestados pela Dra. Thais Vieira (CRMV-SP 55784) abrangem teleorientação nutricional, planejamento e cálculo de cardápios para alimentação natural balanceada, escolha criteriosa de ração comercial e acompanhamento nutricional de rotina.
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">2. Limitação de Responsabilidade & Não Substituição Emergencial</h5>
                  <p className="text-stone-300">
                    <strong className="text-amber-300">Importante:</strong> A consulta nutricional online e os artigos informativos deste site não substituem o atendimento médico veterinário presencial ou exames físicos detalhados em casos de urgência, emergência, traumas agudos, convulsões, febre alta, intoxicações ou desconforto respiratório. Diante de qualquer sinal de emergência, o tutor deve procurar imediatamente uma clínica ou hospital veterinário presencial 24h.
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">3. Isenção e Independência Técnica</h5>
                  <p>
                    A indicação de alimentos industriais ou ingredientes caseiros baseia-se unicamente em critérios científicos e nas necessidades metabólicas do animal, sem nenhum vínculo comercial ou remuneração por fabricantes de ração.
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">4. Canais de Contato e Suporte</h5>
                  <p>
                    Dúvidas sobre os termos ou agendamentos podem ser encaminhadas diretamente para o WhatsApp oficial ou pelo e-mail: <strong className="text-white">thaisvieiravet18@gmail.com</strong>.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-stone-800 bg-stone-950/80 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-white text-stone-900 font-bold rounded-xl text-xs hover:bg-stone-200 transition-colors cursor-pointer border-none"
            >
              Compreendi e Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
