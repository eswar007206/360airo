import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "lg" | "sm";
  className?: string;
  onClick?: () => void;
}

const sizeStyles = {
  sm: "px-5 py-2.5 text-xs",
  default: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

const AnimatedButton = ({ children, variant = "primary", size = "default", className = "", onClick }: AnimatedButtonProps) => {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className={`
        relative group inline-flex items-center justify-center gap-2.5
        rounded-full font-semibold
        overflow-hidden cursor-pointer
        transition-all duration-500
        ${sizeStyles[size]}
        ${isPrimary
          ? "bg-gradient-to-r from-primary to-[hsl(199,94%,55%)] text-primary-foreground shadow-[0_4px_24px_hsl(211_100%_50%/0.35),0_0_0_1px_hsl(211_100%_50%/0.1)] hover:shadow-[0_8px_40px_hsl(211_100%_50%/0.5),0_0_0_1px_hsl(211_100%_50%/0.2)]"
          : "border border-white/[0.12] bg-white/[0.04] text-foreground backdrop-blur-sm hover:border-white/[0.25] hover:bg-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
        }
        ${className}
      `}
    >
      {/* Shimmer sweep */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </span>

      {/* Inner glow for primary */}
      {isPrimary && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/[0.1]" />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export const AnimatedArrowButton = ({ children, variant = "primary", size = "default", className = "", onClick }: AnimatedButtonProps) => {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className={`
        relative group inline-flex items-center justify-center gap-2.5
        rounded-full font-semibold
        overflow-hidden cursor-pointer
        transition-all duration-500
        ${sizeStyles[size]}
        ${isPrimary
          ? "bg-gradient-to-r from-primary to-[hsl(199,94%,55%)] text-primary-foreground shadow-[0_4px_24px_hsl(211_100%_50%/0.35),0_0_0_1px_hsl(211_100%_50%/0.1)] hover:shadow-[0_8px_40px_hsl(211_100%_50%/0.5),0_0_0_1px_hsl(211_100%_50%/0.2)]"
          : "border border-white/[0.12] bg-white/[0.04] text-foreground backdrop-blur-sm hover:border-white/[0.25] hover:bg-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
        }
        ${className}
      `}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </span>

      {isPrimary && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/[0.1]" />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </motion.button>
  );
};

export default AnimatedButton;
