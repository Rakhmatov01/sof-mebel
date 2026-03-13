import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenDeep: "#1F3D2B",
        beigeLight: "#F5F2EB",
        goldAccent: "#C6A969",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Bodoni MT", "Didot", "Times New Roman", "serif"],
        brand: ["var(--font-brand)"],
        serif: ["var(--font-instrumental-serif)"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest2: "0.2em",
      },
      boxShadow: {
        soft: "0 14px 44px rgba(31, 61, 43, 0.2)",
        gold: "0 8px 32px rgba(198, 169, 105, 0.25)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up":  "fade-up 0.7s ease-out both",
        "fade-in":  "fade-in 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
