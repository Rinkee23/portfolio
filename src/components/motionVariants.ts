// Shared Motion (framer-motion) variants for consistent, accessible animations.
// Reused by section and component-level animations.

import type { Variants } from "motion/react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerItemFast: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const float: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
  },
};

export const floatSlow: Variants = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    transition: { duration: 10, ease: "easeInOut", repeat: Infinity },
  },
};

export const shimmer: Variants = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: { duration: 3, ease: "linear", repeat: Infinity },
  },
};

export const pulseGlow: Variants = {
  animate: {
    boxShadow: [
      "0 0 20px -5px rgba(139, 92, 246, 0.4)",
      "0 0 40px -5px rgba(139, 92, 246, 0.6)",
      "0 0 20px -5px rgba(139, 92, 246, 0.4)",
    ],
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const letterStagger: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const cardHover: Variants = {
  rest: { y: 0, boxShadow: "none" },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3), 0 0 60px -10px rgba(139, 92, 246, 0.15)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export const borderReveal: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};