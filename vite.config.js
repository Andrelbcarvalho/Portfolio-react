// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-react/', // <- ESSENCIAL
  plugins: [react()],
})
