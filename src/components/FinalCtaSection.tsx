import React from "react";
import { Sparkles, Zap, Trophy, ArrowDown } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative pt-2 sm:pt-6 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image: Palco Cinemático em Luz Âmbar */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/palco_cinematico.webp"
          alt="Palco Cinemático do Hold Bar Sports & Music"
          loading="lazy"
          decoding="async"
          width="1600"
          height="900"
          className="w-full h-full object-cover object-center brightness-90 filter contrast-110 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Iluminação intensa laranja na base com transparência refinada */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/75 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#FF7900]/25 via-[#FFB000]/10 to-transparent blur-2xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        
        {/* Selo de Urgência no Topo */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#FFB000]/60 text-xs sm:text-sm font-condensed font-bold tracking-widest uppercase text-[#FFB000] mb-4 shadow-[0_0_25px_rgba(255,176,0,0.35)] animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7900]" />
          <span>Vagas Limitadas no Grupo VIP Oficial</span>
        </div>

        {/* Título de Alto Impacto */}
        <h2 className="font-hero text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] uppercase italic tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] max-w-4xl">
          NÃO FIQUE DE FORA DO{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC820] via-[#FFB000] to-[#FF7900] drop-shadow-[0_0_35px_rgba(255,121,0,0.7)]">
            PRÓXIMO SORTEIO!
          </span>
        </h2>

        {/* Texto persuasivo */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-xl text-neutral-200 font-sans max-w-2xl font-normal leading-relaxed drop-shadow-md px-2">
          As rifas mais cobiçadas com cotas a partir de R$ 9,90. Entre agora no grupo oficial e concorra com total transparência!
        </p>

        {/* Seta indicativa animada */}
        <div className="my-3 sm:my-5 flex flex-col items-center animate-bounce">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFB000] drop-shadow-[0_0_10px_rgba(255,176,0,0.8)]" />
        </div>

        {/* Botão de Entrar no Grupo Padronizado com os outros */}
        <div className="w-full sm:w-auto flex justify-center">
          <WhatsAppButton
            title="Entrar no Grupo"
            subtitle="e concorra agora!"
            size="lg"
            className="sm:px-12 sm:py-5"
          />
        </div>

        {/* Badges de Confiança Abaixo do Botão — Sem o card de loteria federal */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-xs text-neutral-300 font-sans w-full max-w-2xl">
          <div className="flex items-center justify-center gap-2 bg-neutral-900/60 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-neutral-800">
            <Zap className="w-4 h-4 text-[#FFB000] shrink-0" />
            <span className="truncate">Apuração Imediata</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-neutral-900/60 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-neutral-800">
            <Trophy className="w-4 h-4 text-[#FF7900] shrink-0" />
            <span className="truncate">Prêmios Entregues</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-neutral-900/60 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-neutral-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate">+3.200 no Grupo</span>
          </div>
        </div>

      </div>
    </section>
  );
};
