import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "gold" = deep crimson → ember amber (masculine)
        gold: {
          50:  "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc5c5",
          300: "#FF8080",
          400: "#DC2626",
          500: "#B91C1C",
          600: "#991B1B",
          700: "#7F1D1D",
          800: "#5C1212",
          900: "#3D0B0B",
          DEFAULT: "#B91C1C",
        },
        // "silver" = warm ivory / parchment
        silver: {
          50:  "#FAF7F2",
          100: "#F5F0E8",
          200: "#EDE4D4",
          300: "#D8CDB8",
          400: "#C4B49A",
          500: "#A89880",
          600: "#8A7864",
          700: "#6A5A4A",
          800: "#4A3C30",
          900: "#2E2418",
          DEFAULT: "#C4B49A",
        },
        // Obsidian = charcoal-noir
        obsidian: {
          DEFAULT: "#07060A",
          50:  "#1C1820",
          100: "#141218",
          200: "#0E0C12",
          300: "#07060A",
        },
        // Ember = amber-gold accent
        ember: {
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          DEFAULT: "#F59E0B",
        },
        // Crimson = direct red shades
        crimson: {
          50:  "#FFF1F1",
          100: "#FFE0E0",
          300: "#FF6B6B",
          400: "#EF4444",
          500: "#DC2626",
          600: "#B91C1C",
          700: "#991B1B",
          800: "#7F1D1D",
          900: "#450A0A",
          DEFAULT: "#DC2626",
        },
      },
      fontFamily: {
        sans:    ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Primary gradient: deep blood-red → crimson → ember-amber
        "gold-gradient":   "linear-gradient(135deg, #7F1D1D 0%, #DC2626 55%, #F59E0B 100%)",
        "silver-gradient": "linear-gradient(135deg, #A89880 0%, #F5F0E8 50%, #A89880 100%)",
        // CTA buttons
        "wine-gradient":   "linear-gradient(135deg, #450A0A 0%, #991B1B 60%, #B91C1C 100%)",
        // Ember accent
        "ember-gradient":  "linear-gradient(135deg, #B45309 0%, #F59E0B 50%, #FCD34D 100%)",
        // Backgrounds
        "dark-gradient":   "linear-gradient(180deg, #07060A 0%, #0E0C12 50%, #07060A 100%)",
        "hero-gradient":   "radial-gradient(ellipse 85% 70% at 50% -10%, rgba(153,27,27,0.25) 0%, transparent 65%)",
        "glow-crimson":    "radial-gradient(circle, rgba(185,28,28,0.4) 0%, transparent 70%)",
        "veil":            "linear-gradient(180deg, transparent 0%, rgba(7,6,10,0.95) 100%)",
      },
      boxShadow: {
        "gold-glow":    "0 0 30px rgba(185,28,28,0.4), 0 0 70px rgba(127,29,29,0.2)",
        "gold-glow-sm": "0 0 14px rgba(220,38,38,0.5), 0 2px 20px rgba(127,29,29,0.25)",
        "ember-glow":   "0 0 25px rgba(245,158,11,0.4), 0 0 50px rgba(180,83,9,0.2)",
        "glass":        "0 4px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glass-lg":     "0 8px 60px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      backdropBlur: { xs: "2px" },
      animation: {
        "shimmer":     "shimmer 2.5s linear infinite",
        "float":       "float 7s ease-in-out infinite",
        "breathe":     "breathe 4s ease-in-out infinite",
        "pulse-red":   "pulseRed 3s ease-in-out infinite",
        "border-flow": "borderFlow 4s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-18px) rotate(0.5deg)" },
          "66%":      { transform: "translateY(-8px) rotate(-0.5deg)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.65", transform: "scale(1)" },
          "50%":      { opacity: "1",    transform: "scale(1.08)" },
        },
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(185,28,28,0.2)" },
          "50%":      { boxShadow: "0 0 55px rgba(220,38,38,0.6)" },
        },
        borderFlow: {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
