/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: {
      primary: "#6A13F4",
      secondary: "#F0E7FE",
      tertiary: "#EBEBEB",
      success: "#16B050",
      danger: "#F43F5E",
      warning: "#F3C318",
      clear: "#ffffff",
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Inter",
          src: "./src/fonts/Inter.ttf",
        },
      });
    }),
  ],
};
