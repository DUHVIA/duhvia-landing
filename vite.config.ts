import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // base: "/duhvia-landing/", // COMENTADO: Usar '/' (default) para dominio personalizado (duhvia.com)
  plugins: [react(), tailwindcss()],
})
