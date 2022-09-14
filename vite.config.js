import { fileURLToPath, URL } from 'node:url'

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
  server: {
    port: 8080,
    proxy: {
      '^/conf': {
        target: 'http://localhost:8084',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/conf/, '')
      },
      '^/scripts': {
        target: 'http://localhost:8083',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scripts/, '')

      },
    },
  }

})
