import React, { useState } from "react";
import {
  CheckCircle2,
  Shield,
  Sparkles,
  X,
  Maximize2,
  ArrowRight,
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE_CONFIG } from "../config/site";

interface CarouselItem {
  id: string;
  title: string;
  image: string;
  tag: string;
}

export const VideoSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);

  const items = SITE_CONFIG.carouselItems;
  // Duplicate list to achieve continuous seamless marquee loop
  const marqueeItems = [...items, ...items];


  return (
    <section
      id="premios"
      className="relative py-16 lg:py-24 bg-[#050505] overflow-hidden border-t border-neutral-900"
    >
      {/* Background ambient orange lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF7900]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FFB000]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Título & Header Centralizado */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#FF7900]/30 text-xs font-condensed font-bold tracking-widest uppercase text-[#FFB000] mb-3 shadow-[0_0_20px_rgba(255,121,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7900]" />
            <span>Prêmios & Ganhadores Oficiais • Hold Bar</span>
          </div>

          <h2 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl uppercase italic tracking-tight text-white leading-none">
            PRÊMIOS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB000] via-[#FF7900] to-[#FF4500]">
              REAIS!
            </span>
          </h2>

          <p className="mt-3 text-xl sm:text-2xl font-condensed font-bold text-[#FFB000] tracking-wide uppercase italic">
            "Aqui no Hold, a sorte realmente acontece!"
          </p>
        </div>

        {/* 1. CARROSSEL INFINITO DE IMAGENS EM UMA LINHA SÓ (SAINDO DA DIREITA PARA A ESQUERDA) */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Gradient Shadows on Left and Right for smooth edge fade */}
          <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-28 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-28 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track: rápido no mobile, suave no desktop */}
          <div className="animate-marquee flex gap-3.5 sm:gap-6 items-center px-4">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setSelectedItem(item)}
                className="group relative w-[230px] xs:w-[250px] sm:w-[290px] md:w-[320px] shrink-0 rounded-3xl bg-[#121212] border border-neutral-800/90 hover:border-[#FF7900] p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,121,0,0.4)] cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Glow ambient inside card */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#FF7900]/20 rounded-full blur-2xl group-hover:bg-[#FF7900]/40 transition-all pointer-events-none" />

                {/* Badge Superior */}
                <div className="flex items-center justify-between mb-2 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 border border-[#FF7900]/40 text-[10px] font-condensed font-bold uppercase tracking-wider text-[#FFB000]">
                    {item.tag}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-[#FF7900] transition-colors">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>

                {/* Imagem do Produto/Ganhador em Destaque */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80 mb-2.5 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="426"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Nome do Produto Embaixo — Sem subdescrição */}
                <div className="w-full py-2.5 px-3 rounded-xl bg-neutral-900/90 border border-neutral-800 group-hover:border-[#FF7900]/80 group-hover:bg-[#1a1a1a] transition-all flex items-center justify-between">
                  <h4 className="font-condensed font-black text-sm sm:text-base uppercase italic tracking-wide text-white group-hover:text-[#FFB000] truncate">
                    {item.title}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-[#FF7900] group-hover:translate-x-1 transition-transform shrink-0 ml-1.5" />
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 2. GALERIA ESTÁTICA COM TODAS AS IMAGENS (SEM CARROSSEL) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-6">
            {items.map((item) => (
              <div
                key={`grid-${item.id}`}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl sm:rounded-3xl bg-[#121212] border border-neutral-800/90 hover:border-[#FF7900] p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(255,121,0,0.35)] cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Glow ambient inside card */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#FF7900]/20 rounded-full blur-2xl group-hover:bg-[#FF7900]/40 transition-all pointer-events-none" />

                {/* Badge Superior */}
                <div className="flex items-center justify-between mb-2 z-10">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/70 border border-[#FF7900]/40 text-[9px] sm:text-[10px] font-condensed font-bold uppercase tracking-wider text-[#FFB000] truncate max-w-[75%]">
                    {item.tag}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-[#FF7900] transition-colors shrink-0">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>

                {/* Imagem do Produto/Ganhador em Destaque */}
                <div className="relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80 mb-2.5 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="426"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Nome do Produto Embaixo */}
                <div className="w-full py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-neutral-900/90 border border-neutral-800 group-hover:border-[#FF7900]/80 group-hover:bg-[#1a1a1a] transition-all flex items-center justify-between mt-auto">
                  <h4 className="font-condensed font-black text-xs sm:text-base uppercase italic tracking-wide text-white group-hover:text-[#FFB000] truncate">
                    {item.title}
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7900] group-hover:translate-x-1 transition-transform shrink-0 ml-1.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilares de Credibilidade e Botão Central de WhatsApp */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800">
              <CheckCircle2 className="w-6 h-6 text-[#FF7900] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-condensed font-bold text-lg uppercase text-white tracking-wide">
                  Entrega em Mãos ou com Seguro
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">
                  Receba seu prêmio pessoalmente nos eventos do Hold Bar ou entregue na sua casa com nota fiscal e rastreio blindado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800">
              <Shield className="w-6 h-6 text-[#FFB000] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-condensed font-bold text-lg uppercase text-white tracking-wide">
                  Sorteios Avisados no Grupo VIP
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">
                  Datas e horários sempre informados com antecedência dentro do nosso grupo oficial do WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal para Visualização da Imagem Inteira Sem Cortes */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[94vh] overflow-y-auto rounded-3xl bg-[#141414] border border-[#FF7900]/60 p-4 sm:p-6 shadow-2xl shadow-black flex flex-col"
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-neutral-900/90 text-neutral-400 hover:text-white border border-neutral-700 cursor-pointer transition-colors shadow-lg"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="pr-12 mb-3">
              <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#FF7900]">
                Hold Bar • {selectedItem.tag}
              </span>
              <h3 className="font-condensed font-black text-2xl sm:text-4xl uppercase italic text-white tracking-wide">
                {selectedItem.title}
              </h3>
            </div>

            {/* Imagem Grande em Destaque — Inteira Sem Cortes */}
            <div className="w-full rounded-2xl overflow-hidden mb-5 border border-neutral-800 bg-black/95 flex items-center justify-center p-2 sm:p-3 min-h-[260px] max-h-[72vh]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[66vh] w-auto max-w-full object-contain rounded-xl select-none mx-auto block"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Ações */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <div className="flex-1">
                <WhatsAppButton
                  title="Quero Concorrer no Grupo"
                  subtitle="datas e números avisados no VIP"
                  size="sm"
                  fullWidth
                />
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-sans font-bold text-sm border border-neutral-700 cursor-pointer transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
