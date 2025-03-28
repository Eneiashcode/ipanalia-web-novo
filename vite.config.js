import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // 👈 essencial pra não dar erro 404 nas rotas
  }
})
