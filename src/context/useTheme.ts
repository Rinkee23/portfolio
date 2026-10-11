import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "./ThemeContext.ts";

// Const arrow-function export — treated as a constant by the fast-refresh rule.
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;