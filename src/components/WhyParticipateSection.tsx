import React from "react";
import {
  ShieldCheck,
  Zap,
  Users2,
  Sparkles,
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export const WhyParticipateSection: React.FC = () => {
  return (
    <section id="rifas" className="relative pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-28 lg:pb-12 bg-[#050505] overflow-hidden border-t border-neutral-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF7900]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#FFB000]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LADO ESQUERDO: Título e os 3 Diferenciais — Alinhado para Mobile */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-[#FF7900]/30 text-xs font-condensed font-bold tracking-widest uppercase text-[#FFB000] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7900]" />
              <span>Vantagens Exclusivas</span>
            </div>

            {/* Título Principal */}
            <h2 className="font-condensed font-black text-4xl sm:text-6xl lg:text-7xl uppercase italic tracking-tight text-white leading-[0.9]">
              POR QUE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB000] via-[#FF7900] to-[#FF4500]">
                PARTICIPAR?
              </span>
            </h2>

            {/* Texto de Apoio Obrigatório */}
            <p className="mt-4 sm:mt-5 text-base sm:text-xl text-neutral-300 font-sans leading-relaxed max-w-xl">
              "Aqui você concorre a prêmios incríveis, com total transparência e em um ambiente de confiança!"
            </p>

            {/* Três Diferenciais com Ícones Grandes */}
            <div className="mt-7 sm:mt-8 space-y-4 sm:space-y-6 w-full text-left">
              
              {/* 1. SORTEIOS TRANSPARENTES */}
              <div className="group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-[#FF7900]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,121,0,0.2)]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FF7900]/20 to-[#FFB000]/10 border border-[#FF7900]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6 sm:w-9 sm:h-9 text-[#FF7900] drop-shadow-[0_0_8px_rgba(255,121,0,0.6)]" />
                </div>
                <div>
                  <h3 className="font-condensed font-black text-lg sm:text-2xl uppercase italic text-white tracking-wide">
                    1. SORTEIOS TRANSPARENTES
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    Sorteios transparentes transmitidos ao vivo para toda a comunidade. Datas e horários sempre avisados no grupo oficial.
                  </p>
                </div>
              </div>

              {/* 2. RESULTADO RÁPIDO */}
              <div className="group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-[#FFB000]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,176,0,0.2)]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FFB000]/20 to-[#FF7900]/10 border border-[#FFB000]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6 sm:w-9 sm:h-9 text-[#FFB000] drop-shadow-[0_0_8px_rgba(255,176,0,0.6)]" />
                </div>
                <div>
                  <h3 className="font-condensed font-black text-lg sm:text-2xl uppercase italic text-white tracking-wide">
                    2. RESULTADO RÁPIDO
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    Apuração imediata assim que as cotas são finalizadas. Divulgação ao vivo no grupo do WhatsApp e pagamento instantâneo.
                  </p>
                </div>
              </div>

              {/* 3. COMUNIDADE ATIVA */}
              <div className="group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-[#FF7900]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,121,0,0.2)]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FF7900]/20 to-[#FFB000]/10 border border-[#FF7900]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Users2 className="w-6 h-6 sm:w-9 sm:h-9 text-[#FF7900] drop-shadow-[0_0_8px_rgba(255,121,0,0.6)]" />
                </div>
                <div>
                  <h3 className="font-condensed font-black text-lg sm:text-2xl uppercase italic text-white tracking-wide">
                    3. COMUNIDADE ATIVA
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    Mais de 3.200 membros participando com descontos exclusivos, sorteios relâmpago de cotas grátis e resenha esportiva.
                  </p>
                </div>
              </div>

            </div>

            {/* Botão de Entrada Rápida */}
            <div className="mt-7 sm:mt-8 w-full sm:w-auto flex justify-center lg:justify-start">
              <WhatsAppButton
                title="Entrar no Grupo"
                subtitle="e concorra agora!"
                size="md"
              />
            </div>

          </div>

          {/* LADO DIREITO: Imagem Oficial do Smartphone com Chat do WhatsApp */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center pt-2 pb-0">
            {/* Ambient Orange Background Glow */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#FF7900]/25 to-[#FFB000]/15 blur-3xl pointer-events-none" />

            {/* Imagem do Smartphone em Alta Definição */}
            <div className="relative z-10 w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] lg:max-w-[450px] flex justify-center">
              <img
                src="/assets/images/smartphone_whatsapp.webp"
                alt="Smartphone com Chat do WhatsApp do Hold Bar VIP"
                loading="lazy"
                decoding="async"
                width="450"
                height="600"
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] hover:scale-[1.02] transition-transform duration-500 select-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Disclaimer */}
            <div className="text-center mt-3">
              <span className="text-[11px] text-neutral-400 font-sans tracking-wide">
                Grupo VIP oficial no WhatsApp &bull; Mais de 3.200 membros participando
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
