import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Permite usar @/ para a pasta src
    },
  },
  build: {
    // Desativa source maps em produção (melhor performance e segurança)
    sourcemap: false,
    // Configurações avançadas do Rollup para dividir o código
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa bibliotecas pesadas em arquivos diferentes
          vendor: ['react', 'react-dom', 'framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  server: {
    // Abre o navegador automaticamente ao iniciar o dev server
    open: true,
  }
})