import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/url-shortening-api/',
  plugins: [react()],
})

