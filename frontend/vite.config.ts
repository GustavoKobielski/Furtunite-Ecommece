import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Aqui você define que o @ aponta para a pasta src
    }
  },
  server: {
    port: 3000, // Substitua com a porta desejada
  },
})
