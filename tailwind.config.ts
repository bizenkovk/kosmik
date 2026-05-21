import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        kosmik: {
          primary: "#1F1A17",
          secondary: "#46302B",
          blue: "#9F1D2D",
          gold: "#8F1A28",
          softGold: "#C6A15B",
          paper: "#F3EBDD",
          ink: "#1F1A17",
          muted: "#6B625C"
        }
      },
      boxShadow: {
        gold: "0 18px 70px rgba(198, 161, 91, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
