import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090B16",
        secondary: "#101426",
        card: "#171A2E",
        violet: "#8B5CF6",
        cyan: "#22D3EE",
        electric: "#6366F1",
        "main-text": "#F8FAFC",
        muted: "#A1A1AA",
        border: "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Sora", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139, 92, 246, 0.45)",
        cyanGlow: "0 0 40px -10px rgba(34, 211, 238, 0.45)",
      },
      backgroundImage: {
        "gradient-violet": "linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #22D3EE 100%)",
        "gradient-radial": "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.15), transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "grain": "grain 0.5s steps(10) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-24px) rotate(3deg)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(-7%, -25%)" },
          "40%": { transform: "translate(5%, -10%)" },
          "50%": { transform: "translate(-10%, 15%)" },
          "60%": { transform: "translate(15%, 5%)" },
          "70%": { transform: "translate(0%, 10%)" },
          "80%": { transform: "translate(-15%, 5%)" },
          "90%": { transform: "translate(-10%, -10%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;