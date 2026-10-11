import { useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext.ts";
import { getInitialTheme, getInitialReducedMotion } from "./theme.utils";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [reducedMotion, setReducedMotion] = useState<boolean>(getInitialReducedMotion);

  const applyTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const applyReducedMotion = (value: boolean) => {
    setReducedMotion(value);
    localStorage.setItem("reducedMotion", String(value));
    document.documentElement.classList.toggle("reduce-motion", value);
  };

  // Sync the DOM on first paint so the resolved theme is applied immediately.
  if (typeof window !== "undefined") {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("reduce-motion", reducedMotion);
  }

  const setTheme = (newTheme: Theme) => applyTheme(newTheme);
  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");
  const toggleReducedMotion = () => applyReducedMotion(!reducedMotion);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, reducedMotion, toggleReducedMotion }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;