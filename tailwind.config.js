/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
       colors: {
        /* Gamma càlida */
        primary: "#b85c2a",
        secondary: "#4d2b1b",
        accent: "oklch(75% 0.12 60deg)",

        /* Neutres */
        bg: "#fffaf3",
        surface: "#ffffff",
        text: "#222222",
        muted: "#666666",

        /* Estat */
        success: "#4caf50",
        warning: "#ffb300",
        danger: "#d32f2f",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      lineHeight: {
        base: "1.6",
      },
    },
  },
  plugins: [],
}