const defaultTheme = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Gloria Hallelujah", ...defaultTheme.fontFamily.sans],
        sans: ["Neucha", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          50: "#fff3db",
          100: "#ffdfaf",
          200: "#fdc980",
          300: "#fab44f",
          400: "#f99e1f",
          500: "#e08506",
          600: "#ae6702",
          700: "#7d4a00",
          800: "#4d2b00",
          900: "#1e0e00",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
