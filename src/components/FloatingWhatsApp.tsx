import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import { trackMetaContact } from "../utils/metaPixel";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none">
      {/* Tooltip message bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-neutral-900 border border-[#FF7900]/50 shadow-[0_4px_25px_rgba(0,0,0,0.8)] text-xs text-white max-w-xs animate-in fade-in slide-in-from-right duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-sans">
            Grupo VIP aberto! <strong>Concorra agora</strong> aos prêmios.
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-white p-0.5 ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={SITE_CONFIG.whatsappGroupUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackMetaContact}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#25D366] to-[#1EBE5D] flex items-center justify-center text-white shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_40px_rgba(37,211,102,0.9)] hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Entrar no Grupo do WhatsApp da Hold Prêmios"
      >
        {/* Radar wave ping */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-md" />

        {/* Online Indicator Dot */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 border-2 border-black flex items-center justify-center text-[9px] font-bold text-white shadow">
          1
        </span>
      </a>
    </aside>
  );
};
