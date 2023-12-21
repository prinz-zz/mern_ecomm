import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1111,
    proxy:{
      "/api": {
        target: 'http://localhost:2323',
        secure:false,
      },
    }
  }
})
