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
    description: 'Terapia de pareja en El Salvador y online para la diáspora. Psicóloga clínica colegiada (JVPP). 1ª sesión de 30 min sin costo. Hablamos tu código cultural.',
    canonical: `${BASE_URL}/`,
  },
  {
    path: '/test-de-pareja',
    file: 'test-de-pareja/index.html',
    title: 'Test de Pareja Online: Autoevaluación Clínica de Relación | Centro Amaré',
    description: 'Cuestionario clínico interactivo de 5 pasos para parejas. Evalúa el nivel de desgaste, la comunicación y recibe una orientación psicológica personalizada.',
    canonical: `${BASE_URL}/test-de-pareja`,
  },
  {
    path: '/tu-match',
    file: 'tu-match/index.html',
    title: 'Test de Pareja Online: Autoevaluación de Relación | Centro Amaré',
    description: 'Cuestionario clínico interactivo de 5 pasos para parejas.',
    canonical: `${BASE_URL}/test-de-pareja`,
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
    title: 'Psicología Online El Salvador · Psicóloga Clínica JVPP | Centro Amaré',
    description: 'Terapia individual online en El Salvador para ansiedad, sobrepensamiento, límites y apegos. Enfoque TCC y DBT con base científica.',
    canonical: `${BASE_URL}/terapia-individual`,
  },
  {
    path: '/salvadorenos-en-el-exterior',
    file: 'salvadorenos-en-el-exterior/index.html',
    title: 'Psicólogos Salvadoreños Online | Terapia en EE. UU., Canadá y el Mundo — Centro Amaré',
    description: 'Psicólogos salvadoreños online para quienes viven fuera. Terapia de pareja e individual en EE. UU., Canadá y Europa. Tarifas accesibles de $100/mes ($25/sesión).',
    canonical: `${BASE_URL}/salvadorenos-en-el-exterior`,
  },
  {
    path: '/diaspora-salvadorena',
    file: 'diaspora-salvadorena/index.html',
    title: 'Psicólogos Salvadoreños Online | Terapia en el Exterior — Centro Amaré',
    description: 'Psicoterapia online para salvadoreños en el exterior.',
    canonical: `${BASE_URL}/salvadorenos-en-el-exterior`,
  },
  {
    path: '/terapia-salvadorenos-en-el-extranjero',
    file: 'terapia-salvadorenos-en-el-extranjero/index.html',
    title: 'Terapia para Salvadoreños en el Extranjero | Centro Amaré',
    description: 'Psicoterapia online en tu mismo código cultural para salvadoreños en el extranjero.',
    canonical: `${BASE_URL}/salvadorenos-en-el-exterior`,
  },
  {
    path: '/iris-alarcon',
    file: 'iris-alarcon/index.html',
    title: 'Psicóloga Iris Alarcón El Salvador | Terapeuta de Pareja Certificada (JVPP)',
    description: 'Conoce a Iris Alarcón, Directora Clínica de Centro Amaré. Psicóloga colegiada ante la JVPP de El Salvador, máster en pareja y sexología con +9 años de experiencia.',
    canonical: `${BASE_URL}/iris-alarcon`,
  },
  {
    path: '/precios',
    file: 'precios/index.html',
    title: 'Precios y Honorarios — Terapia de Pareja El Salvador | Centro Amaré',
    description: 'Precios transparentes de psicoterapia y terapia de pareja: 1ª sesión de 30 min sin costo. Plan mensual de $100 USD (hasta 4 sesiones al mes = $25/sesión).',
    canonical: `${BASE_URL}/precios`,
  },
  {
    path: '/blog',
    file: 'blog/index.html',
    title: 'Blog y Guías de Terapia de Pareja y Psicología Salvadoreña | Centro Amaré',
    description: 'Recursos, guías clínicas y respuestas transparentes sobre precios, migración y terapia de pareja por psicóloga colegiada en El Salvador.',
    canonical: `${BASE_URL}/blog`,
  },
  {
    path: '/blog/como-afecta-emigrar-a-la-relacion-de-pareja',
    file: 'blog/como-afecta-emigrar-a-la-relacion-de-pareja/index.html',
    title: 'Cómo afecta emigrar a la relación de pareja: Guía para salvadoreños en EE. UU. y Canadá',
    description: 'Guía psicológica clínica para parejas salvadoreñas en el exterior: soledad, desgaste laboral y cómo recuperar la intimidad con Terapia Integral (IBCT).',
    canonical: `${BASE_URL}/blog/como-afecta-emigrar-a-la-relacion-de-pareja`,
  },
  {
    path: '/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador',
    file: 'blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador/index.html',
    title: 'Cuánto cuesta una terapia de pareja en El Salvador (Precios y guía 2026)',
    description: 'Comparativa de costos de terapia de pareja en San Salvador, clínicas privadas y centros online. Cuánto invertir y plan mensual de $100 USD.',
    canonical: `${BASE_URL}/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador`,
  },
  {
    path: '/blog/como-poner-limites-a-tu-familia-desde-la-distancia',
    file: 'blog/como-poner-limites-a-tu-familia-desde-la-distancia/index.html',
    title: 'Cómo poner límites a tu familia desde la distancia sin sentir culpa | Centro Amaré',
    description: 'Remesas, demandas familiares y la culpa migratoria que agota a los salvadoreños en el exterior. Pautas clínicas para cuidar tus límites sin romper lazos.',
    canonical: `${BASE_URL}/blog/como-poner-limites-a-tu-familia-desde-la-distancia`,
  },
  {
    path: '/enlaces',
    file: 'enlaces/index.html',
    title: 'Enlaces Oficiales y Cita Online | Centro Amaré — Terapia de Pareja',
    description: 'Acceso directo a la primera sesión gratuita de 30 min, test de pareja, honorarios y recursos clínicos de Centro Amaré.',
    canonical: `${BASE_URL}/enlaces`,
  },
  {
    path: '/privacidad',
    file: 'privacidad/index.html',
    title: 'Política de Privacidad y Secreto Profesional Clínico | Centro Amaré',
    description: 'Compromiso ético, secreto médico JVPP El Salvador, sesiones online encriptadas y privacidad en la evaluación interactiva de pareja.',
    canonical: `${BASE_URL}/privacidad`,
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
