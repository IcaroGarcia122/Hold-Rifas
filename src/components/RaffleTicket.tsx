import React from "react";

interface RaffleTicketProps {
  number?: string;
  prize?: string;
  rotation?: string;
  className?: string;
  variant?: "gold" | "orange";
}

export const RaffleTicket: React.FC<RaffleTicketProps> = ({
  number = "08492",
  prize = "SORTEIO VIP",
  rotation = "-rotate-6",
  className = "",
  variant = "gold",
}) => {
  const isGold = variant === "gold";

  return (
    <div
      className={`relative select-none filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-105 hover:z-20 ${rotation} ${className}`}
    >
      <div
        className={`w-48 sm:w-56 h-24 sm:h-28 rounded-xl p-[1px] ${
          isGold
            ? "bg-gradient-to-r from-[#FFB000] via-[#FF7900] to-[#FFB000]"
            : "bg-gradient-to-r from-[#FF7900] via-[#FF5500] to-[#FFB000]"
        }`}
      >
        <div className="relative w-full h-full bg-[#141414] rounded-xl overflow-hidden flex items-stretch">
          {/* Left coupon body */}
          <div className="flex-1 p-2.5 sm:p-3 flex flex-col justify-between border-r border-dashed border-neutral-700 relative">
            {/* Top cutout circle */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#050505] border border-neutral-800" />
            {/* Bottom cutout circle */}
            <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-[#050505] border border-neutral-800" />

            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="font-condensed font-black text-xs uppercase tracking-wider text-white">
                HOLD <span className="text-[#FF7900]">BAR</span>
              </span>
              <span className="text-[9px] font-condensed font-bold uppercase tracking-widest text-[#FFB000] bg-[#FFB000]/10 px-1.5 py-0.5 rounded border border-[#FFB000]/30">
                OFICIAL
              </span>
            </div>

            {/* Middle info */}
            <div>
              <div className="text-[10px] font-condensed tracking-wider text-neutral-400 uppercase">
                {prize}
              </div>
              <div className="font-mono text-base sm:text-lg font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFB000] to-[#FF7900]">
                COTA #{number}
              </div>
            </div>

            {/* Simulated barcode */}
            <div className="flex items-center gap-[2px] h-3 opacity-60">
              <span className="w-[1.5px] h-full bg-white" />
              <span className="w-[3px] h-full bg-white" />
              <span className="w-[1px] h-full bg-white" />
              <span className="w-[2px] h-full bg-white" />
              <span className="w-[4px] h-full bg-white" />
              <span className="w-[1.5px] h-full bg-white" />
              <span className="w-[2.5px] h-full bg-white" />
              <span className="w-[1px] h-full bg-white" />
              <span className="w-[3px] h-full bg-white" />
              <span className="w-[2px] h-full bg-white" />
              <span className="w-[1px] h-full bg-white" />
              <span className="w-[4px] h-full bg-white" />
            </div>
          </div>

          {/* Right coupon stub */}
          <div className="w-12 sm:w-14 bg-gradient-to-b from-neutral-900 to-[#121212] flex flex-col items-center justify-center p-1.5 text-center">
            <span className="font-condensed font-black text-[9px] tracking-widest text-[#FF7900] uppercase rotate-90 whitespace-nowrap">
              HOLD TICKET
            </span>
            <div className="w-4 h-4 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/40 flex items-center justify-center my-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFB000]" />
            </div>
            <span className="text-[8px] font-mono text-neutral-400 rotate-90">
              {number}
            </span>
          </div>

          {/* Glossy reflective sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
