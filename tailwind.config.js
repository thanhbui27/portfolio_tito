// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('./assets/icons/background.svg')",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        grayCustom: "#626262",
        red: {
          300: "#FCB6B6",
          900: "#B40000",
        },
        orange: {
          200: "#FCD1B6",
        },
        blue: {
          100: "#DFF0F7",
          300: "#B4C7FE",
        },
        greenLight: {
          100: "#DFF0F7",
          200: "#DDFF94",
        },
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
    },
    fontFamily: {
      Quicksand: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
    },
    animation: {
      "spin-slow": "spin 15s linear infinite",
      "spin-reverse": "reverse-spin 15s linear infinite",
    },
    keyframes: {
      "reverse-spin": {
        from: {
          transform: "rotate(360deg)",
        },
      },
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },
  plugins: [],
};
