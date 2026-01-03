/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Novo Fundo Deep Navy (Azul Marinho Profundo)
        background: "#0A192F", 
        // Card ligeiramente mais claro para contraste
        card: "#112240", 
        // O Verde Neon da Identidade Visual
        neon: "#39FF14", 
        purple: "#9d4edd",
        gold: "#ffd700",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Adicionando animação personalizada para o neon
      boxShadow: {
        'neon': '0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)',
      }
    },
  },
  plugins: [],
}