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
        home: path.resolve(__dirname, './src/pages/home.html'),
        geography: path.resolve(__dirname, './src/pages/geography.html'),
        history: path.resolve(__dirname, './src/pages/history.html'),
        science: path.resolve(__dirname, './src/pages/science.html'),
        literature: path.resolve(__dirname, './src/pages/literature.html'),
        math: path.resolve(__dirname, './src/pages/math.html')
      }
    }
  }
})