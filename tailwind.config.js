/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["'Roboto Condensed'", 'sans-serif'],
      Alata: ["'Alata'", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
