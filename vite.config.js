// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
    allowedHosts: ['ipanalia-web-novo.onrender.com'], // 👈 Coloque aqui exatamente o domínio que deu erro
  }
})
