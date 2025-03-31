import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: "/quiz/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'src/pages/home.html'),
        geography: resolve(__dirname, 'src/pages/geography.html'),
        history: resolve(__dirname, 'src/pages/history.html'),
        math: resolve(__dirname, 'src/pages/math.html'),
        literature: resolve(__dirname, 'src/pages/literature.html'),
        science: resolve(__dirname, 'src/pages/science.html'),
      }
    }
  }
})