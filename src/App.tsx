/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorksBar } from "./components/HowItWorksBar";
import { VideoSection } from "./components/VideoSection";
import { WhyParticipateSection } from "./components/WhyParticipateSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  useEffect(() => {
    // Pré-carregamento em background durante tempo ocioso (idle time)
    // Garante que todas as imagens abaixo da dobra apareçam instantaneamente no primeiro scroll
    const prefetchAssets = () => {
      const imagesToWarm = [
        "/assets/images/prize_ps5.webp",
        "/assets/images/prize_boombox4.webp",
        "/assets/images/prize_geladeira.webp",
        "/assets/images/prize_luxor.webp",
        "/assets/images/prize_iphone.webp",
        "/assets/images/prize_smarttv.webp",
        "/assets/images/prize_ar_condicionado.webp",
        "/assets/images/prize_scooter.webp",
        "/assets/images/prize_moto_ganhador.webp",
        "/assets/images/smartphone_whatsapp.webp",
        "/assets/images/palco_cinematico.webp",
      ];
      imagesToWarm.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        const handle = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
          prefetchAssets,
          { timeout: 1200 }
        );
        return () => {
          if ("cancelIdleCallback" in window) {
            (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
          }
        };
      } else {
        const timer = setTimeout(prefetchAssets, 400);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#FF7900] selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Principal com Logo 3D Metálico e Bolas Numeradas */}
        <Hero />

        {/* 2. Barra de Como Funciona em 4 Passos */}
        <HowItWorksBar />

        {/* 3. Seção de Ganhadores e Prêmios — Carrossel Infinito com Carrossel de Palavras */}
        <VideoSection />

        {/* 4. Seção — Por Que Participar? com Mockup do Smartphone */}
        <WhyParticipateSection />


        {/* 6. Perguntas Frequentes (FAQ) — Acima do CTA Final */}
        <FaqSection />

        {/* 7. CTA Final de Alta Conversão com Silhueta de Show */}
        <FinalCtaSection />
      </main>

      {/* 7. Footer Minimalista e Elegante */}
      <Footer />

      {/* 8. Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
