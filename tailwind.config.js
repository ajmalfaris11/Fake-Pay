/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['"Inconsolata"', 'monospace'],
        inter: ['"Inter"', 'sans-serif'],
        mukta: ['"Mukta"', 'sans-serif'],
        noto: ['"Noto Sans Display"', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};