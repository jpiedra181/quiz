import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/quiz/',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        home: path.resolve(__dirname, 'home.html'),
        geography: path.resolve(__dirname, 'geography.html'),
        history: path.resolve(__dirname, 'history.html'),
        science: path.resolve(__dirname, 'science.html'),
        literature: path.resolve(__dirname, 'literature.html'),
        math: path.resolve(__dirname, 'math.html')
      }
    }
  }
})