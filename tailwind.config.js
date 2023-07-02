/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: ({ colors }) => ({
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        "mood-gray": "#0F172A",
        "custom-black": {
          900: "#0a0c0f",
          800: "#1a1c1f",
          700: "#2a2c2f",
          600: "#3a3c3f",
          500: "#4a4c4f",
          400: "#5a5c5f",
          300: "#6a6c6f",
          200: "#7a7c7f",
          100: "#8a8c8f",
          50: "#9a9c9f",
        },
        "custom-white": {
          900: "#fafcff",
          800: "#eaecef",
          700: "#dadcdf",
          600: "#cacccf",
          500: "#babcbf",
          400: "#aaacaf",
        },
        woodsmoke: {
          50: "#f6f6f7",
          100: "#e1e2e6",
          200: "#c2c4cd",
          300: "#9c9eac",
          400: "#77798a",
          500: "#5c5e70",
          600: "#484a59",
          700: "#3c3d49",
          800: "#33343c",
          900: "#2d2d34",
          950: "#09090b",
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
