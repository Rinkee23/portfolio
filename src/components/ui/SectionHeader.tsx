import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      className={`max-w-3xl ${alignClass} mb-14 md:mb-16 ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-text-muted text-lg">{subtitle}</p>}
    </motion.div>
  );
}

export default SectionHeader;