import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // يسمح لأي IP بالوصول للسيرفر
    port: 4000, 
    strictPort: false, // يسمح بتغيير البورت لو مش متاح
    allowedHosts: ['.ngrok-free.app', 'localhost'], // السماح بـ ngrok
  }
})