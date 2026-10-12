/**
 * prerender.mjs — SSG Script para Centro Amaré
 * 
 * Pre-renderiza el HTML de todas las rutas estáticas usando Vite SSR + React renderToString.
 * Genera HTML completo para cada ruta con su propio title, description, canonical y OG tags:
 *  - Googlebot (indexación SEO óptima y sin canibalización de URLs)
 *  - Motores de IA generativa como ChatGPT, Gemini, Perplexity (GEO)
 * 
 * Uso: node prerender.mjs (ejecutado por `npm run build` vía postbuild)
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE_URL = 'https://terapiadeparejaelsalvador.com'

const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'Terapia de Pareja El Salvador Online | Centro Amaré — Psicóloga Salvadoreña',
    description: 'Terapia de pareja online en El Salvador y la diáspora. Psicóloga clínica con Máster en Pareja y Sexología. Atiende San Salvador, Santa Tecla, Canadá y EE.UU. 1ª sesión gratuita de 30 min. Desde $100/mes.',
    canonical: `${BASE_URL}/`,
  },
  {
    path: '/tu-match',
    file: 'tu-match/index.html',
    title: 'Test de Compatibilidad y Matching de Pareja Online | Centro Amaré',
    description: 'Autoevaluación clínica interactiva de 5 pasos para parejas. Identifica el nivel de desgaste, la disposición y recibe una recomendación terapéutica personalizada.',
    canonical: `${BASE_URL}/tu-match`,
  },
  {
    path: '/terapia-de-pareja',
    file: 'terapia-de-pareja/index.html',
    title: 'Terapia de Pareja en El Salvador Online | Centro Amaré',
    description: 'Terapia de pareja online con psicóloga salvadoreña especialista. Protocolo clínico en 4 fases para resolver conflictos, infidelidad y desgaste relacional.',
    canonical: `${BASE_URL}/terapia-de-pareja`,
  },
  {
    path: '/sexologia-clinica',
    file: 'sexologia-clinica/index.html',
    title: 'Sexología Clínica y Terapia Sexual en El Salvador | Centro Amaré',
    description: 'Consulta de sexología clínica online médica y libre de tabúes. Abordaje de dificultades de deseo, bloqueos y reconexión íntima para parejas e individuos.',
    canonical: `${BASE_URL}/sexologia-clinica`,
  },
  {
    path: '/terapia-individual',
    file: 'terapia-individual/index.html',
    title: 'Terapia Individual Online en El Salvador (TCC) | Centro Amaré',
    description: 'Psicoterapia cognitivo-conductual (TCC) para adultos: ansiedad, rumiación, apegos y límites. Atención online en El Salvador y el extranjero.',
    canonical: `${BASE_URL}/terapia-individual`,
  },
  {
    path: '/terapia-salvadorenos-en-el-extranjero',
    file: 'terapia-salvadorenos-en-el-extranjero/index.html',
    title: 'Terapia para Salvadoreños en el Extranjero y Diáspora | Centro Amaré',
    description: 'Psicoterapia online en tu mismo código cultural para salvadoreños en Montreal, Los Ángeles, Washington y Europa. Tarifas accesibles de $100/mes.',
    canonical: `${BASE_URL}/terapia-salvadorenos-en-el-extranjero`,
  },
  {
    path: '/precios',
    file: 'precios/index.html',
    title: 'Precios y Honorarios — Terapia de Pareja El Salvador | Centro Amaré',
    description: 'Precios transparentes de psicoterapia y terapia de pareja: 1ª sesión de 30 min sin costo. Plan mensual de $100 USD (hasta 4 sesiones al mes = $25/sesión).',
    canonical: `${BASE_URL}/precios`,
  },
]

async function prerender() {
  console.log('\n🔄 Centro Amaré — Pre-rendering SSG...\n')

  const distPath = path.resolve(__dirname, 'dist')
  const templatePath = path.resolve(distPath, 'index.html')

  if (!fs.existsSync(templatePath)) {
    console.error('❌  dist/index.html no encontrado. Ejecuta vite build primero.')
    return
  }

  try {
    // 1. Compilar el entry SSR con Vite
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

    // 2. Importar el bundle SSR compilado
    const ssrEntryPath = path.resolve(__dirname, 'dist-ssr/entry-server.js')
    if (!fs.existsSync(ssrEntryPath)) {
      throw new Error('dist-ssr/entry-server.js no fue generado por el build SSR')
    }

    const { render } = await import(pathToFileURL(ssrEntryPath).href)
    const baseTemplate = fs.readFileSync(templatePath, 'utf-8')

    // 3. Renderizar cada una de las 7 rutas con su metadata personalizada
    for (const route of routes) {
      const appHtml = render(route.path)
      let pageHtml = baseTemplate.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      )

      // Title
      if (route.title) {
        pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
        pageHtml = pageHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`)
        pageHtml = pageHtml.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
      }

      // Canonical
      if (route.canonical) {
        pageHtml = pageHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonical}" />`)
        pageHtml = pageHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${route.canonical}" />`)
      }

      // Description
      if (route.description) {
        pageHtml = pageHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
        pageHtml = pageHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)
        pageHtml = pageHtml.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`)
      }

      const outFilePath = path.resolve(distPath, route.file)
      const outDir = path.dirname(outFilePath)
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true })
      }
      fs.writeFileSync(outFilePath, pageHtml)
      const kbSize = (pageHtml.length / 1024).toFixed(1)
      console.log(`✅  Pre-rendering → dist/${route.file} (${kbSize} kB)`)
    }

    // 4. Limpiar el directorio SSR temporal
    fs.rmSync(path.resolve(__dirname, 'dist-ssr'), { recursive: true, force: true })

    console.log(`\n🎉 Total: ${routes.length} páginas prerenderizadas listas para Googlebot e IAs.\n`)

  } catch (err) {
    console.error('❌  Error durante el pre-rendering:')
    console.error('   ', err.message)
    const ssrDir = path.resolve(__dirname, 'dist-ssr')
    if (fs.existsSync(ssrDir)) {
      fs.rmSync(ssrDir, { recursive: true, force: true })
    }
  }
}

prerender()
