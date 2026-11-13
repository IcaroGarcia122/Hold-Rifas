import React from "react";

interface HoldLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showHalo?: boolean;
  className?: string;
}

export const HoldLogo: React.FC<HoldLogoProps> = ({
  size = "md",
  showHalo = false,
  className = "",
}) => {
  const logoSrc = "/assets/images/logo_hold_ouro.webp";

  if (size === "sm") {
    // Barra superior: Apenas a imagem do emblema maior, sem escrita ao lado
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center transition-transform hover:scale-105 duration-200">
          <img
            src={logoSrc}
            alt="Hold Prêmios"
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,121,0,0.7)]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  if (size === "lg" || size === "xl") {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        {/* Ambient Neon Glow */}
        {showHalo && (
          <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#FF7900]/30 via-[#FFB000]/20 to-[#FF7900]/35 blur-3xl animate-pulse-halo pointer-events-none" />
        )}

        <img
          src={logoSrc}
          alt="Hold Prêmios Emblema Oficial"
          className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain filter drop-shadow-[0_0_40px_rgba(255,121,0,0.7)]"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Default 'md' size (Footer & Cards)
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center transition-transform hover:scale-105 duration-300">
        <img
          src={logoSrc}
          alt="Hold Prêmios Logo Oficial"
          className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(255,121,0,0.8)]"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};
