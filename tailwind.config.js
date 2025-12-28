/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Ativa o modo escuro manual (Sol/Lua)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        card: "#161616",
        neon: "#00ffcc", // A cor principal do seu site
        purple: "#9d4edd",
        gold: "#ffd700",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}