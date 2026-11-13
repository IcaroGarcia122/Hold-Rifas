import React from "react";
import { ShieldCheck, Trophy } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE_CONFIG } from "../config/site";

export const Hero: React.FC = () => {
  return (
    <section className="relative lg:min-h-screen pt-24 pb-8 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image: Rifa Hold Prêmios no Bar Dourado (Otimizada com Picture Responsivo) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/assets/images/hero_hold_bar_mobile.webp"
            type="image/webp"
          />
          <img
            src="/assets/images/hero_hold_bar.webp"
            alt="Hold Prêmios — Rifas e Sorteios"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width="1440"
            height="900"
            className="w-full h-full object-cover object-[70%_center] sm:object-[65%_center] lg:object-center select-none brightness-88 sm:brightness-100 transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </picture>
        {/* Camada de ambientação equilibrada: um pouco mais escura no mobile para contraste perfeito */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/25 lg:bg-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/75 via-black/35 to-[#050505]/85 lg:hidden pointer-events-none" />

        {/* Gradiente escuro lateral esquerdo para máxima legibilidade no desktop */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#050505]/95 via-[#050505]/75 to-transparent max-w-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LADO ESQUERDO: Tipografia Extrema, Slogan Aumentado e Botão CTA — Alinhado para Mobile */}
          <div className="lg:col-span-7 flex flex-col items-center text-center sm:items-start sm:text-left overflow-visible">
            
            {/* Título Principal */}
            <h1 className="font-hero text-6xl sm:text-7xl md:text-8xl xl:text-9xl leading-[0.88] select-none my-1 tracking-tight overflow-visible">
              <span className="block hero-rifas-text overflow-visible">
                HOLD
              </span>
              <span className="block hero-hold-bar-text -mt-1 sm:-mt-2 overflow-visible">
                PRÊMIOS
              </span>
            </h1>

            {/* Slogan / Texto de Apoio — Aumentado para máximo destaque */}
            <div className="mt-5 sm:mt-6 max-w-2xl overflow-visible">
              <p className="font-condensed font-bold text-2xl sm:text-3xl lg:text-4xl uppercase italic tracking-wide text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Concorra a prêmios incríveis e faça parte da nossa comunidade!
              </p>
              <p className="mt-2.5 text-base sm:text-lg lg:text-xl text-[#FFB000] font-sans font-medium leading-relaxed">
                Toda semana novos sorteios com apuração transparente e entrega comprovada.
              </p>
            </div>

            {/* Botão CTA Único Arredondado (Pill) */}
            <div className="mt-7 sm:mt-10 w-full sm:w-auto flex justify-center sm:justify-start">
              <WhatsAppButton
                title="Entrar no Grupo"
                subtitle="e concorra agora!"
                size="md"
              />
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-neutral-800/80 grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-md text-neutral-400">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-white font-condensed font-bold text-base sm:text-xl">
                  <ShieldCheck className="w-4 h-4 text-[#FF7900] shrink-0" />
                  <span>100% Auditado</span>
                </div>
                <span className="text-[11px] sm:text-xs text-neutral-400 font-sans mt-0.5">
                  No Grupo VIP
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-white font-condensed font-bold text-base sm:text-xl">
                  <Trophy className="w-4 h-4 text-[#FFB000] shrink-0" />
                  <span>{SITE_CONFIG.stats.totalWinners} Ganhadores</span>
                </div>
                <span className="text-[11px] sm:text-xs text-neutral-400 font-sans mt-0.5">
                  Prêmios entregues
                </span>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: Espaço limpo e espaçoso para a arte original do fundo brilhar */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center min-h-[480px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
};
