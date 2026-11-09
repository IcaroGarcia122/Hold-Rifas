import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como faço para participar das rifas?",
    answer:
      "É muito simples e rápido! Basta clicar em qualquer botão de 'Entrar no Grupo' nesta página. Dentro do nosso grupo oficial do WhatsApp você visualiza as rifas ativas, escolhe seus números da sorte e garante suas cotas.",
  },
  {
    question: "Quais são os dias e horários dos sorteios?",
    answer:
      "Não definimos dias ou horários fixos. Todas as datas de apuração, horários e fechamento de cotas são sempre avisados com antecedência diretamente dentro do nosso grupo oficial do WhatsApp.",
  },
  {
    question: "Como realizo o pagamento das minhas cotas?",
    answer:
      "O pagamento é realizado de forma 100% segura e instantânea via Pix. Após selecionar seus números no grupo, você faz o pagamento e a confirmação é imediata.",
  },
  {
    question: "Como funciona a apuração e como sei se ganhei?",
    answer:
      "A apuração é transparente e divulgada ao vivo para todos os participantes dentro do grupo VIP. Assim que o resultado sai, nossa equipe também entra em contato diretamente com o ganhador.",
  },
  {
    question: "Como recebo o meu prêmio?",
    answer:
      "Você pode retirar o prêmio pessoalmente no Hold Bar ou enviamos com frete segurado e código de rastreamento diretamente para o seu endereço em qualquer lugar do Brasil.",
  },
  {
    question: "Posso garantir mais de uma cota na mesma rifa?",
    answer:
      "Sim! Você pode escolher quantas cotas desejar na mesma rifa para aumentar ainda mais as suas chances de levar o prêmio para casa.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#050505] overflow-hidden border-t border-neutral-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7900]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#FF7900]/30 text-xs font-condensed font-bold tracking-widest uppercase text-[#FFB000] mb-3 shadow-[0_0_20px_rgba(255,121,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7900]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl uppercase italic tracking-tight text-white leading-none">
            PERGUNTAS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB000] via-[#FF7900] to-[#FF4500]">
              FREQUENTES
            </span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-neutral-400 font-sans max-w-xl mx-auto">
            Tudo o que você precisa saber sobre o funcionamento das rifas, pagamentos e entrega dos prêmios.
          </p>
        </div>

        {/* Lista Accordion */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#121212] border-[#FF7900]/60 shadow-[0_0_25px_rgba(255,121,0,0.15)]"
                    : "bg-[#0b0b0b] border-neutral-800/80 hover:border-neutral-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${
                      isOpen ? "text-[#FFB000]" : "text-neutral-500"
                    }`} />
                    <span className="font-condensed font-bold text-base sm:text-xl uppercase italic tracking-wide text-white">
                      {item.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isOpen
                      ? "bg-[#FF7900] border-[#FF7900] text-black rotate-180"
                      : "bg-neutral-900 border-neutral-700 text-neutral-400"
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed border-t border-neutral-800/50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
