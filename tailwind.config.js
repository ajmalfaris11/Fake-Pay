// tailwind.config.js or tailwind.config.cjs
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
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
});
