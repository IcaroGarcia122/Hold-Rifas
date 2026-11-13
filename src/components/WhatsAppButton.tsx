import React from "react";
import { ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import { trackMetaContact } from "../utils/metaPixel";

interface WhatsAppButtonProps {
  title?: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  title = "Entrar no Grupo",
  subtitle = "e concorra agora!",
  size = "md",
  className = "",
  onClick,
  fullWidth = false,
}) => {
  const sizeConfig = {
    sm: {
      padding: "px-4 py-2 sm:px-5 sm:py-2.5",
      iconSize: "w-5 h-5",
      titleSize: "text-sm",
      subtitleSize: "text-[10px]",
      chevronSize: "w-5 h-5 stroke-[3]",
      gap: "gap-2.5 sm:gap-3",
    },
    md: {
      padding: "px-6 sm:px-8 py-3.5 sm:py-4",
      iconSize: "w-7 h-7 sm:w-8 sm:h-8",
      titleSize: "text-base sm:text-lg",
      subtitleSize: "text-xs sm:text-sm",
      chevronSize: "w-6 h-6 sm:w-7 sm:h-7 stroke-[3.5]",
      gap: "gap-4 sm:gap-5",
    },
    lg: {
      padding: "px-7 sm:px-10 py-4 sm:py-5",
      iconSize: "w-8 h-8 sm:w-10 sm:h-10",
      titleSize: "text-lg sm:text-2xl",
      subtitleSize: "text-xs sm:text-base",
      chevronSize: "w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5]",
      gap: "gap-4 sm:gap-6",
    },
    xl: {
      padding: "px-8 sm:px-12 py-5 sm:py-6",
      iconSize: "w-10 h-10 sm:w-12 sm:h-12",
      titleSize: "text-2xl sm:text-3xl md:text-4xl",
      subtitleSize: "text-sm sm:text-lg",
      chevronSize: "w-8 h-8 sm:w-10 sm:h-10 stroke-[4]",
      gap: "gap-5 sm:gap-8",
    },
  }[size];

  const handleClick = () => {
    trackMetaContact();
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={SITE_CONFIG.whatsappGroupUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-between rounded-full bg-gradient-to-r from-[#FFB000] via-[#FFA200] to-[#FF8C00] shadow-[0_0_35px_rgba(255,165,0,0.65),0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_60px_rgba(255,165,0,0.95)] hover:scale-[1.02] active:scale-98 transition-all duration-300 border border-amber-300/40 select-none ${
        sizeConfig.padding
      } ${sizeConfig.gap} ${fullWidth ? "w-full" : "w-full sm:w-auto"} ${className}`}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {/* WhatsApp Black Icon */}
        <div className="shrink-0 flex items-center justify-center">
          <svg
            className={`${sizeConfig.iconSize} text-black fill-black`}
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.07 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C16.58 3.67 20.28 7.37 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15ZM16.56 14.37C16.31 14.25 15.09 13.65 14.86 13.57C14.64 13.49 14.47 13.45 14.31 13.7C14.14 13.95 13.66 14.51 13.51 14.68C13.37 14.85 13.22 14.87 12.97 14.75C12.72 14.62 11.93 14.36 10.99 13.52C10.25 12.87 9.76 12.06 9.61 11.81C9.47 11.56 9.6 11.43 9.72 11.31C9.83 11.2 9.97 11.02 10.09 10.87C10.22 10.73 10.26 10.62 10.34 10.45C10.42 10.29 10.38 10.14 10.32 10.02C10.26 9.9 9.76 8.68 9.56 8.18C9.36 7.69 9.16 7.76 9.01 7.75H8.54C8.37 7.75 8.1 7.81 7.87 8.06C7.65 8.31 7.01 8.91 7.01 10.13C7.01 11.35 7.9 12.52 8.02 12.69C8.15 12.85 9.77 15.36 12.26 16.43C12.85 16.69 13.31 16.84 13.67 16.95C14.27 17.14 14.81 17.12 15.24 17.05C15.72 16.98 16.71 16.45 16.92 15.87C17.12 15.29 17.12 14.79 17.06 14.68C17 14.58 16.81 14.5 16.56 14.37Z" />
          </svg>
        </div>

        {/* Text Block */}
        <div className="flex flex-col text-left leading-tight whitespace-nowrap min-w-0">
          <span className={`font-sans font-bold text-black tracking-tight whitespace-nowrap ${sizeConfig.titleSize}`}>
            {title}
          </span>
          {subtitle && (
            <span className={`font-sans font-medium text-black/90 whitespace-nowrap ${sizeConfig.subtitleSize}`}>
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* White Chevron Arrow Right */}
      <ChevronRight
        className={`${sizeConfig.chevronSize} text-white shrink-0 group-hover:translate-x-1 transition-transform ml-1`}
      />
    </a>
  );
};
