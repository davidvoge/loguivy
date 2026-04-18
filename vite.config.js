import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // Racine des sources (HTML, CSS traité par Vite)
  root: path.resolve(__dirname, 'project'),
  server: {
    port: 5173,
    open: true,
  },
  build: {
    // Sortie à la racine du dépôt — la plupart des hébergeurs / CI attendent `./dist`
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
})
