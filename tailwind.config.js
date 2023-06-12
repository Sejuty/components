/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "#FFFFFF",
      black: "#1C1C1C",

      primary: {
        dark: "#4A0DAB",
        DEFAULT: "#6A13F4",
        light: "#833BF6",
        lighter: "#C29EFA",
        lightest: "#F0E7FE",
      },

      grey: {
        darkest: "#949494",
        darker: "#B0B0B0",
        dark: "#BFBFBF",
        DEFAULT: "#DEDEDE",
        light: "#D4D4D4",
        lighter: "#EBEBEB",
        lightest: "#FAFAFA",
      },

      green: {
        dark: "#0B4A23",
        DEFAULT: "#16B050",
        light: "#398355",
        lighter: "#9DC2AB",
        lightest: "#E7F0EB",
      },

      yellow: {
        dark: "#AA8911",
        DEFAULT: "#F3C318",
        light: "#F5CD3F",
        lighter: "#FAE6A0",
        lightest: "#FEF9E8",
      },

      red: {
        dark: "#AB2C42",
        DEFAULT: "#F43F5E",
        light: "#F66079",
        lighter: "#FAB0BD",
        lightest: "#FEECEF",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
    },
    outlineWidth: {
      0: "0px",
      1: "2px",
      2: "2px",
    },
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
    },
  },
  plugins: [],
};