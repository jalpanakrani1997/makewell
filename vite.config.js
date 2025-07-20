import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// vite.config.js
export default defineConfig({
  base: '/makewell/',
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
})
