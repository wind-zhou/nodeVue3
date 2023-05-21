import { fileURLToPath, URL } from 'node:url'
import sass from 'sass'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  buildOptions: {
    scss: {
      implementation: sass
    }
  }
})


