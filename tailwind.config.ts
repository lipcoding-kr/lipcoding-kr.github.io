
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Mona Sans', 'Inter', 'sans-serif'],
        display: ['Mona Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E53935", // Bauhaus red (legacy, used by 2025)
          muted: "#2196F3",
        },
        secondary: {
          DEFAULT: "#FFEB3B",
          dark: "#1A1A1A",
        },
        // 2026 design tokens (GitHub Dev Days)
        ink: {
          0: "#000000",
          1: "#0a0a0a",
          2: "#141414",
          3: "#1f1f1f",
        },
        primer: {
          cyan: "#58a6ff",
          green: "#3fb950",      // legacy alias
          mint: "#5fed83",        // bright accent (titles, dividers, dots)
          action: "#2ea043",      // button bg
          actionHover: "#46c860",
          purple: "#d2a8ff",
          pink: "#ff7eb6",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ribbon-drift": {
          "0%, 100%": { transform: "translateY(-50%) rotate(-6deg) translateX(0)" },
          "50%": { transform: "translateY(-50%) rotate(-6deg) translateX(20px)" },
        },
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -20px) scale(1.05)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "ribbon-drift": "ribbon-drift 12s ease-in-out infinite",
        "orb-float": "orb-float 14s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
