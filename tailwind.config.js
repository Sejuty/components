/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Inter",
          src: "url('https://fonts.googleapis.com/css2?family=Inter&display=swap')",
        },
      });
    }),
  ],
};
