/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      azzurro: '#b6d6f5c2',
      arancione: '#ff8303',
      white: '#ffffff',
      black: '#000000',
      darkerBlue: '#3E859F',
      background: '#8ca0b0',
      grey: '#9e9e9e'
    },
  },
  plugins: [],
}
