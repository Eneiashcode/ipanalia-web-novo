// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0', // 👈 Isso é essencial pro Render detectar!
    allowedHosts: ['ipanalia-web-novo.onrender.com'] // 👈 Adiciona essa linha
  }
})
