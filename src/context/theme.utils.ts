import type { Theme } from "./ThemeContext";

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme") as Theme | null;
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getInitialReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("reducedMotion");
  if (saved === "true" || saved === "false") return saved === "true";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}