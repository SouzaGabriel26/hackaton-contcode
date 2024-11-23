/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkRed: '#723E4E',
        lightRed: '#B03851',
        lightPink: '#EF3353',
        brightOrange: '#F17144',
        darkYellow: '#F4B036'
      }
    },
  },
  plugins: [],
}

