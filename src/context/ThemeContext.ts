import { createContext } from "react";

export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
}

// Constant export — allowed by react/only-export-components (allowConstantExport).
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;