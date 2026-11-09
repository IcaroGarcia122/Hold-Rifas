import React from "react";
import { Ticket, QrCode, Tv, Trophy } from "lucide-react";

export const HowItWorksBar: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Escolha suas Cotas",
      desc: "Selecione seus números da sorte ou use a escolha aleatória.",
      icon: Ticket,
      color: "#FF7900",
    },
    {
      num: "02",
      title: "Pagamento Instantâneo",
      desc: "Pague com PIX com baixa automática e segurança total.",
      icon: QrCode,
      color: "#FFB000",
    },
    {
      num: "03",
      title: "Apuração ao Vivo",
      desc: "Sorteio transparente com datas sempre avisadas no grupo VIP.",
      icon: Tv,
      color: "#FF7900",
    },
    {
      num: "04",
      title: "Entrega Garantida",
      desc: "Receba o prêmio em mãos no bar ou com frete seguro em casa.",
      icon: Trophy,
      color: "#FFB000",
    },
  ];

  return (
    <section className="relative py-12 bg-neutral-950 border-y border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative p-5 rounded-2xl bg-[#101010] border border-neutral-800/80 hover:border-[#FF7900]/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="relative w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700/80 flex items-center justify-center shrink-0 group-hover:border-[#FF7900] transition-colors">
                  <Icon className="w-6 h-6 text-[#FFB000]" />
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.2 rounded-md bg-[#FF7900] text-black font-condensed font-black text-[10px]">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-lg uppercase italic text-white tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
