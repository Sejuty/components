/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const spacing = {};
const heightWidth = {};
const fontSize = {};
const borderRadius = {};

//------------------------------
// @Spacing (margin,padding,gap)
//-------------------------------
for (let i = 0; i <= 128; i++) {
  spacing[i * 2] = `${i * 2}px`;
}

//------------------------------
// @FontSize
//-------------------------------
for (let i = 10; i <= 30; i++) {
  fontSize[i] = [`${i}px`, `${i + 3}px`];
}
//------------------------------
// @Width
// Default have 0 to 256px
//-------------------------------
for (let i = 130; i <= 500; i++) {
  heightWidth[i * 2] = `${i * 2}px`;
}

for (let i = 0; i <= 40; i++) {
  borderRadius[i] = `${i}px`;
}
borderRadius[100] = "100px";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {},
    colors: {
      white: {
        DEFAULT: "#ffffff",
      },
      black: {
        300: "#262626",
        400: "#1C1B1F",
        500: "#030205",
        600: "#010101",
        DEFAULT: "#000000",
      },
      primary: {
        lightest: "#FFFBFE",
        lighter: "#F0E7FE",
        light: "#8541F6",
        DEFAULT: "#6A13F4",
        dark: "#6A14F4",
        darker: "#510EBA",
      },
      magenta: {
        light: "#CFB4FC",
        DEFAULT: "#E83CF7",
      },
      gray: {
        light: "#F4F5F7",
        DEFAULT: "#9B9B9B",
        dark: "#CFD8DC",
        darker: "#BCBDBE",
      },
      green: {
        light: "#78FAB1",
        lighter: "#D3FDE8",
      },
      red: {
        DEFAULT: "#F42A41",
      },
    },
    fontSize: {
      xs: ["10px", { lineHeight: "140%", letterSpacing: "0.25px" }],
      sm: ["12px", { lineHeight: "140%", letterSpacing: "0.75px" }],
      md: ["14px", { lineHeight: "140%", letterSpacing: "0.25px" }],
      lg: ["16px", { lineHeight: "140%", letterSpacing: "0.25px" }],
      xl: ["18px", { lineHeight: "140%", letterSpacing: "-0.1px" }],
    },
    borderRadius: {
      ...borderRadius,
      full: "9999px",
    },
    borderWidth: {
      default: "0.5px",
      0: "0",
      1: "1px",
      2: "2px",
    },

    spacing: {
      ...spacing,
    },
    extend: {
      width: {
        ...heightWidth,
      },
      height: {
        ...heightWidth,
      },
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
