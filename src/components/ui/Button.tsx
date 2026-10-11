import { motion, type Variants } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "link";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends Omit<ComponentProps<"button">, "onDrag" | "onDragStart" | "onDragEnd"> {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-electric text-white shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_-8px_rgba(139,92,246,0.65)] hover:-translate-y-0.5",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 text-text hover:bg-card hover:border-accent/40",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-transparent text-text hover:border-accent/40 hover:bg-accent/5",
  link: "inline-flex items-center justify-center gap-2 text-accent-2 underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const spin: Variants = {
  animate: { rotate: 360 },
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = loading || disabled;

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      disabled={isDisabled}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <motion.span variants={spin} animate="animate" className="inline-block">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </motion.span>
      ) : (
        leftIcon
      )}
      {children}
      {rightIcon}
    </motion.button>
  );
}

export default Button;