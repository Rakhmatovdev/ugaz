import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000, // Portni 3000 ga o'zgartirish
  // },
})
