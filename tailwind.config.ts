import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ordem: {
          black: "#0A0A0A", // Preto Óptico
          white: "#F0F0F0", // Branco Gélido
          green: "#00FF00", // Verde Terminal
          red: "#8B0000",   // Vermelho Sangue
          yellow: "#FFFFCC", // Amarelo Estático
          gold: "#FFD700",   // Dourado PE
          purple: "#9D00FF", // Roxo Ocultista
          blue: "#00BFFF",   // Azul Sanidade
          cyan: "#00FFFF",  // Ciano Elétrico
          ooze: "#2E2E2E",  // Lodo
        },
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'], // Fallback para fonte digital
      },
      animation: {
        'pulse-red': 'pulse-red 2s infinite',
        'flicker': 'flicker 0.15s infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { backgroundColor: 'rgba(139, 0, 0, 0)' },
          '50%': { backgroundColor: 'rgba(139, 0, 0, 0.3)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'glitch': {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
