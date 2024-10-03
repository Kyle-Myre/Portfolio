import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Set the base path if your app is deployed in a subdirectory
  base: './',
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Allow the use of @ as an alias for /src
    },
  },
})
