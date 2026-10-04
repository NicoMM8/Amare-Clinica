/**
 * prerender.mjs — SSG Script para Centro Amaré
 * 
 * Pre-renderiza el HTML de la landing usando Vite SSR + React renderToString.
 * El output es dist/index.html con todo el contenido visible para:
 *  - Googlebot (indexación SEO)
 *  - Modelos de IA como Gemini, ChatGPT, Perplexity (GEO)
 * 
 * Uso: node prerender.mjs (ejecutado por `npm run build` vía postbuild)
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function prerender() {
  console.log('\n🔄 Centro Amaré — Pre-rendering SSG...\n')

  const distPath = path.resolve(__dirname, 'dist')
  const templatePath = path.resolve(distPath, 'index.html')

  if (!fs.existsSync(templatePath)) {
    console.error('❌  dist/index.html no encontrado. Ejecuta vite build primero.')
    return
  }

  try {
    // 1. Compilar el entry SSR con Vite (genera un bundle Node.js-compatible)
    await build({
      logLevel: 'error',
      build: {
        ssr: true,
        outDir: path.resolve(__dirname, 'dist-ssr'),
        rollupOptions: {
          input: path.resolve(__dirname, 'src/entry-server.jsx'),
          output: {
            format: 'esm',
          }
        }
      }
    })

    // 2. Importar el bundle SSR compilado y renderizar
    const ssrEntryPath = path.resolve(__dirname, 'dist-ssr/entry-server.js')
    
    if (!fs.existsSync(ssrEntryPath)) {
      throw new Error('dist-ssr/entry-server.js no fue generado por el build SSR')
    }

    const { render } = await import(pathToFileURL(ssrEntryPath).href)
    const appHtml = render()

    // 3. Leer template e inyectar el HTML pre-renderizado
    let template = fs.readFileSync(templatePath, 'utf-8')
    const finalHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    )

    // 4. Guardar el HTML final
    fs.writeFileSync(templatePath, finalHtml)

    // 5. Limpiar el directorio SSR temporal
    fs.rmSync(path.resolve(__dirname, 'dist-ssr'), { recursive: true, force: true })

    const kbSize = (finalHtml.length / 1024).toFixed(1)
    console.log(`✅  Pre-rendering completado → dist/index.html (${kbSize} kB)`)
    console.log('    🔍 Google ahora puede indexar todo el contenido.\n')

  } catch (err) {
    console.error('❌  Error durante el pre-rendering:')
    console.error('   ', err.message)
    // Limpiar dir temporal si existe
    const ssrDir = path.resolve(__dirname, 'dist-ssr')
    if (fs.existsSync(ssrDir)) {
      fs.rmSync(ssrDir, { recursive: true, force: true })
    }
    // No fallar el build — el SPA funciona igualmente
    console.log('⚠️   Continuando con SPA mode (contenido visible en navegador pero no en crawlers)\n')
  }
}

prerender()
