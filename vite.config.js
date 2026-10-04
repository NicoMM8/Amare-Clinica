import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // Mejora Core Web Vitals: genera chunks más pequeños
    rollupOptions: {
      output: {
        // Vite 8 usa Rolldown: manualChunks debe ser una función
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor'
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) {
            return 'motion'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons'
          }
        }
      }
    },
    // Target moderno para mejor compresión
    target: 'es2020',
    // Vite 8 usa OXC como minificador por defecto (más rápido que esbuild)
    // No es necesario especificar minify explícitamente
    // CSS code-splitting
    cssCodeSplit: true,
    // Reportar el tamaño de los chunks
    reportCompressedSize: true,
  },
  // Cabeceras HTTP de seguridad y rendimiento en dev
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    }
  }
})
