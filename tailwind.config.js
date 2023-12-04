/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#fbe8de',
        'bluegray': '#e1eaf4',
      },
      maxWidth: {
        '800': '800px',
      },
      spacing: {
        '15': '60px',
      },
      fontFamily: {
        'grifter': ["Grifter", 'sans-serif'],
      }
    },
  },
  plugins: [],
}
