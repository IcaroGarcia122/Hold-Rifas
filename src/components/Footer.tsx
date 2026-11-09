import React from "react";
import { MessageCircle, Mail, Instagram, ShieldCheck } from "lucide-react";
import { HoldLogo } from "./HoldLogo";
import { SITE_CONFIG } from "../config/site";

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="relative bg-[#050505] border-t border-neutral-900 pt-16 pb-12 overflow-hidden text-neutral-400">
      {/* Subtle top amber line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF7900]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo Hold Centralizada */}
          <div className="mb-6">
            <HoldLogo size="md" />
          </div>

          {/* Pequena Descrição da Marca */}
          <p className="max-w-xl text-sm sm:text-base text-neutral-400 font-sans leading-relaxed mb-8">
            O <strong className="text-white">HOLD BAR SPORTS & MUSIC</strong> une paixão por esportes, música ao vivo e as melhores rifas do Brasil. Transparência garantida, extrações públicas e prêmios entregues na mão dos ganhadores.
          </p>

          {/* Links de Navegação */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 text-sm font-condensed font-bold uppercase tracking-wider text-neutral-300">
            <a href="#" className="hover:text-[#FF7900] transition-colors">
              Início
            </a>
            <a href="#sobre" className="hover:text-[#FF7900] transition-colors">
              Sobre Nós
            </a>
            <a href="#rifas" className="hover:text-[#FF7900] transition-colors">
              Como Funciona
            </a>
            <a href="#premios" className="hover:text-[#FF7900] transition-colors">
              Prêmios Sorteados
            </a>
            <a
              href={SITE_CONFIG.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB000] hover:text-[#FF7900] transition-colors"
            >
              Grupo VIP WhatsApp
            </a>
          </nav>

          {/* Informações de Contato e Avisos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl py-6 my-4 border-y border-neutral-800/80 text-xs text-neutral-400 font-sans">
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#FFB000] shrink-0" />
              <span>{SITE_CONFIG.social.drawNotice}</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4 text-[#FF7900] shrink-0" />
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-medium text-neutral-300"
              >
                {SITE_CONFIG.social.instagramHandle}
              </a>
            </div>
          </div>

          {/* Direitos Reservados e Segurança */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-6 text-xs text-neutral-500 font-sans gap-4">
            <div className="flex items-center gap-2 text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Sorteios transparentes com apuração informada no grupo VIP.</span>
            </div>

            <div className="text-center sm:text-right">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.brandName}. Todos os direitos reservados.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
