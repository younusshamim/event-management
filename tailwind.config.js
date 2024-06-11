/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        eventTheme: {
          primary: colors.green[900],
        },
      },
    ],
  },

  theme: {
    extend: {
      colors: {
        primary: {
          lighter: colors.green[50],
          DEFAULT: colors.green[900],
          dark: colors.green[950],
          foreground: colors.white,
        },
      },
    },
  },

  plugins: [require("daisyui")],
};
