import React from "react";

interface LotteryBallProps {
  number: string | number;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "orange" | "dark";
  className?: string;
  floatingAnimation?: "slow" | "reverse" | "none";
}

export const LotteryBall: React.FC<LotteryBallProps> = ({
  number,
  size = "md",
  variant = "gold",
  className = "",
  floatingAnimation = "none",
}) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-xs",
    md: "w-14 h-14 text-sm sm:w-16 sm:h-16 sm:text-base",
    lg: "w-20 h-20 text-lg sm:w-24 sm:h-24 sm:text-xl",
  }[size];

  const variantClasses = {
    gold: "lottery-ball-gold text-black",
    orange: "lottery-ball-orange text-white",
    dark: "lottery-ball-dark text-[#FFB000]",
  }[variant];

  const animClass =
    floatingAnimation === "slow"
      ? "animate-float-slow"
      : floatingAnimation === "reverse"
      ? "animate-float-reverse"
      : "";

  return (
    <div
      className={`relative rounded-full select-none flex items-center justify-center font-condensed font-black tracking-tight ${sizeClasses} ${variantClasses} ${animClass} ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Specular highlight bubble */}
      <div className="absolute top-1.5 left-2.5 w-4 h-2.5 sm:w-6 sm:h-3.5 rounded-full bg-white/55 blur-[1px] rotate-[-25deg] pointer-events-none" />
      
      {/* Number Badge in center */}
      <div className="relative w-[56%] h-[56%] rounded-full bg-black/45 border border-white/20 flex items-center justify-center shadow-inner">
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {number}
        </span>
      </div>

      {/* Subtle outer neon ring */}
      <div className="absolute -inset-0.5 rounded-full border border-white/10 pointer-events-none" />
    </div>
  );
};
