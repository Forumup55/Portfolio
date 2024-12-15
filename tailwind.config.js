/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#9c1f64",
      subtitle: "#777777",
      desc: "#999999",
      border: "#999999",
      dark: "#333333",
      error: "#ED1B24",
      white: colors.white,
      black: colors.black,
      yellow: colors.yellow,
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      transparent: "transparent",
    },
    extend: {},
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        // sm: "1.5rem",
        lg: "1rem",
        // xl: "3rem",
        // "2xl": "4rem",
      },
    },
    fontFamily: {
      outfit: ["Outfit"],
    },
  },
  plugins: [],
};
