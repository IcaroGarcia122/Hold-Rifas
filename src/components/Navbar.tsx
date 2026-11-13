import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HoldLogo } from "./HoldLogo";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE_CONFIG } from "../config/site";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Prêmios", href: "#premios" },
    { label: "Como Participar", href: "#rifas" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-gradient-to-b from-black/80 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform hover:scale-[1.02]"
            aria-label="Hold Prêmios Home"
          >
            <HoldLogo size="sm" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-condensed font-bold tracking-widest text-sm uppercase text-neutral-300 hover:text-[#FF7900] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF7900] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action - Entrar no Grupo (Estilo Imagem de Referência) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <WhatsAppButton
              size="sm"
              title="Entrar no Grupo"
              subtitle=""
            />
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg bg-neutral-900/80 border border-neutral-800"
            aria-label="Abrir menu de navegação"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#FF7900]" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-neutral-800/80 bg-[#090909]/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-condensed font-bold tracking-wider text-base uppercase text-neutral-200 hover:text-[#FF7900] px-3 py-2 rounded-lg hover:bg-neutral-800/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-800">
                <WhatsAppButton
                  fullWidth
                  title="Entrar no Grupo"
                  subtitle="e concorra agora!"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
