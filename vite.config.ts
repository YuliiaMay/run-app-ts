import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "/run-app-ts/",
    port: 3000,
  },  
  base: "/run-app-ts/"
})
