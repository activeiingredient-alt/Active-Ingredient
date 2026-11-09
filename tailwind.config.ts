import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — warm neutrals only, no accent colours.
        paper: "#FAF7F2",
        cream: "#F2ECE1",
        sand: "#E9E1D4",
        ink: "#241A12",
        muted: "#5E5145",
        espresso: "#2B1709",
        "espresso-deep": "#1C0E05",
        hairline: "rgba(43, 23, 9, 0.16)",
        "hairline-soft": "rgba(43, 23, 9, 0.09)",
      },
      fontFamily: {
        sans: [
          "Instrument Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: ["Newsreader", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        label: "0.22em",
        wide2: "0.14em",
      },
      maxWidth: {
        page: "1320px",
        prose2: "64ch",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        driftSlow: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-16px, -12px, 0)" },
        },
        driftSlower: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(13px, 9px, 0)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.92", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.012)" },
        },
      },
      animation: {
        drift: "driftSlow 26s ease-in-out infinite",
        "drift-slow": "driftSlower 34s ease-in-out infinite",
        breathe: "breathe 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
