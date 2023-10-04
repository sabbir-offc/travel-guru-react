/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    themes: ["light", "dark", "cupcake"],
    extend: {
      backgroundImage: {
        'home-bg': "url('/public/images/bg.png')",
      },
      fontFamily: {
        'montserrat': "'Montserrat', sans- serif",
        'bebas': "'Bebas Neue', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

