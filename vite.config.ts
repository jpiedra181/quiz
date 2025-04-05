import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/quiz/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        geography: resolve(__dirname, 'geography/index.html'),
        history: resolve(__dirname, 'history/index.html'),
        science: resolve(__dirname, 'science/index.html'),
        home: resolve(__dirname, 'home/index.html'),
        literature: resolve(__dirname, 'literature/index.html'),
        math: resolve(__dirname, 'math/index.html'),
      },
    }
  }
})