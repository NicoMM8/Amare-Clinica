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
    title: 'Terapia de Pareja El Salvador Online | 1ª Sesión Gratis',
    description: 'Terapia de pareja e individual online en El Salvador y el exterior con psicólogos colegiados. Recupera tu relación. Agenda tu 1ª sesión de 30 min gratis.',
    canonical: `${BASE_URL}/`,
  },
  {
    path: '/test-de-pareja',
    file: 'test-de-pareja/index.html',
    title: 'Test de Pareja Online: Autoevaluación Clínica | Centro Amaré',
    description: 'Cuestionario clínico interactivo de 5 pasos para parejas. Evalúa el nivel de desgaste, la comunicación y recibe una orientación psicológica personalizada.',
    canonical: `${BASE_URL}/test-de-pareja`,
  },
  {
    path: '/tu-match',
    file: 'tu-match/index.html',
    title: 'Test de Pareja Online: Autoevaluación Clínica | Centro Amaré',
    description: 'Cuestionario clínico interactivo de 5 pasos para parejas.',
    canonical: `${BASE_URL}/test-de-pareja`,
    noindex: true,
  },
  {
    path: '/terapia-de-pareja',
    file: 'terapia-de-pareja/index.html',
    title: 'Terapia de Pareja en El Salvador Online | Centro Amaré',
    description: 'Terapia de pareja online con equipo clínico colegiado especialista. Protocolo clínico en 4 fases para resolver conflictos, infidelidad y desgaste relacional.',
    canonical: `${BASE_URL}/terapia-de-pareja`,
  },
  {
    path: '/sexologia-clinica',
    file: 'sexologia-clinica/index.html',
    title: 'Sexóloga en El Salvador | Sexología Clínica & Terapia Sexual · Centro Amaré',
    description: 'Consulta con sexóloga clínica colegiada en El Salvador (JVPP 47096) y online. Tratamiento de falta de deseo, bloqueos y reconexión íntima. 1ª sesión de 30 min gratis.',
    canonical: `${BASE_URL}/sexologia-clinica`,
  },
  {
    path: '/terapia-individual',
    file: 'terapia-individual/index.html',
    title: 'Psicólogos en El Salvador · Clínica Psicológica Online | Centro Amaré',
    description: 'Psicólogos en El Salvador colegiados ante la JVPP. Consulta de clínica psicológica online en San Salvador y el exterior para ansiedad, estrés y límites. 1ª sesión de 30 min gratis.',
    canonical: `${BASE_URL}/terapia-individual`,
  },
  {
    path: '/salvadorenos-en-el-exterior',
    file: 'salvadorenos-en-el-exterior/index.html',
    title: 'Psicólogos Salvadoreños Online en el Exterior | Centro Amaré',
    description: 'Psicólogos salvadoreños online para quienes viven fuera. Terapia de pareja e individual en EE. UU., Canadá y Europa. Tarifas accesibles de $100/mes ($25/sesión).',
    canonical: `${BASE_URL}/salvadorenos-en-el-exterior`,
  },
  {
    path: '/diaspora-salvadorena',
    file: 'diaspora-salvadorena/index.html',
    title: 'Psicólogos Salvadoreños en el Exterior | Centro Amaré',
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
    title: 'Psicóloga Iris Alarcón El Salvador · JVPP | Centro Amaré',
    description: 'Conoce a Iris Alarcón, Directora Clínica de Centro Amaré. Psicóloga colegiada ante la JVPP de El Salvador, máster en pareja y sexología con +9 años de experiencia.',
    canonical: `${BASE_URL}/iris-alarcon`,
  },
  {
    path: '/sobre-nosotros',
    file: 'sobre-nosotros/index.html',
    title: 'Sobre Centro Amaré | Historia y Misión Clínica en El Salvador y el Mundo',
    description: 'Conoce la historia de Centro Amaré. Fundado en 2017 por la Mtra. Iris Alarcón en San Salvador, somos la clínica de psicología digital que promueve el bienestar de parejas y adultos en El Salvador y la diáspora.',
    canonical: `${BASE_URL}/sobre-nosotros`,
  },
  {
    path: '/precios',
    file: 'precios/index.html',
    title: 'Precios y Honorarios — Terapia de Pareja | Centro Amaré',
    description: 'Precios transparentes de psicoterapia y terapia de pareja: 1ª sesión de 30 min sin costo. Plan mensual de $100 USD (hasta 4 sesiones al mes = $25/sesión).',
    canonical: `${BASE_URL}/precios`,
  },
  {
    path: '/blog',
    file: 'blog/index.html',
    title: 'Blog de Psicología y Pareja en El Salvador | Centro Amaré',
    description: 'Recursos, guías clínicas y respuestas transparentes sobre precios, migración y terapia de pareja por psicóloga colegiada en El Salvador.',
    canonical: `${BASE_URL}/blog`,
  },
  {
    path: '/blog/duelo-migratorio-que-es-como-manejarlo',
    file: 'blog/duelo-migratorio-que-es-como-manejarlo/index.html',
    title: 'Duelo Migratorio: Qué Es y Cómo Manejarlo | Centro Amaré',
    description: 'Pérdidas acumuladas, culpa por irse y cómo integrar dos mundos sin perder tu origen. Orientación psicológica clínica para migrantes salvadoreños.',
    canonical: `${BASE_URL}/blog/duelo-migratorio-que-es-como-manejarlo`,
  },
  {
    path: '/blog/fortalecer-relacion-pareja-ayuda-profesional',
    file: 'blog/fortalecer-relacion-pareja-ayuda-profesional/index.html',
    title: 'Cómo Fortalecer tu Relación de Pareja con Ayuda Profesional | Centro Amaré',
    description: 'Ciclos de discusión, reparación emocional y acuerdos clave. Guía de terapia de pareja basada en evidencia para parejas en El Salvador y el exterior.',
    canonical: `${BASE_URL}/blog/fortalecer-relacion-pareja-ayuda-profesional`,
  },
  {
    path: '/blog/se-puede-perdonar-una-infidelidad-guia-pareja',
    file: 'blog/se-puede-perdonar-una-infidelidad-guia-pareja/index.html',
    title: '¿Se Puede Perdonar una Infidelidad? Guía Clínica | Centro Amaré',
    description: 'Fases clínicas para sanar la herida de un engaño o cerrar en paz. Transparencia radical, cese de hipervigilancia y reconstrucción del apego en terapia de pareja.',
    canonical: `${BASE_URL}/blog/se-puede-perdonar-una-infidelidad-guia-pareja`,
  },
  {
    path: '/blog/falta-de-deseo-sexual-en-la-pareja-soluciones',
    file: 'blog/falta-de-deseo-sexual-en-la-pareja-soluciones/index.html',
    title: 'Falta de Deseo Sexual en la Pareja: Causas y Soluciones | Centro Amaré',
    description: 'Deseo espontáneo vs. receptivo, la rutina y la sobrecarga cotidiana. Pautas de sexología clínica para reactivar la intimidad y el erotismo sin presiones.',
    canonical: `${BASE_URL}/blog/falta-de-deseo-sexual-en-la-pareja-soluciones`,
  },
  {
    path: '/blog/como-afecta-emigrar-a-la-relacion-de-pareja',
    file: 'blog/como-afecta-emigrar-a-la-relacion-de-pareja/index.html',
    title: 'Cómo Afecta Emigrar a la Pareja | Centro Amaré',
    description: 'Guía psicológica clínica para parejas salvadoreñas en el exterior: soledad, desgaste laboral y cómo recuperar la intimidad con Terapia Integral (IBCT).',
    canonical: `${BASE_URL}/blog/como-afecta-emigrar-a-la-relacion-de-pareja`,
  },
  {
    path: '/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador',
    file: 'blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador/index.html',
    title: 'Cuánto Cuesta una Terapia de Pareja en El Salvador | Amaré',
    description: 'Comparativa de costos de terapia de pareja en San Salvador, clínicas privadas y centros online. Cuánto invertir y plan mensual de $100 USD.',
    canonical: `${BASE_URL}/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador`,
  },
  {
    path: '/blog/como-poner-limites-a-tu-familia-desde-la-distancia',
    file: 'blog/como-poner-limites-a-tu-familia-desde-la-distancia/index.html',
    title: 'Poner Límites a la Familia a la Distancia | Centro Amaré',
    description: 'Remesas, demandas familiares y la culpa migratoria que agota a los salvadoreños en el exterior. Pautas clínicas para cuidar tus límites sin romper lazos.',
    canonical: `${BASE_URL}/blog/como-poner-limites-a-tu-familia-desde-la-distancia`,
  },
  {
    path: '/blog/cuando-ir-a-terapia-de-pareja',
    file: 'blog/cuando-ir-a-terapia-de-pareja/index.html',
    title: '¿Cuándo ir a Terapia de Pareja? 8 Señales de Alerta | Centro Amaré',
    description: 'Las parejas esperan de 4 a 6 años antes de consultar. 8 señales de alerta, el patrón de demanda-retirada y por qué consultar a tiempo salva la relación.',
    canonical: `${BASE_URL}/blog/cuando-ir-a-terapia-de-pareja`,
  },
  {
    path: '/blog/primera-sesion-terapia-de-pareja',
    file: 'blog/primera-sesion-terapia-de-pareja/index.html',
    title: 'Qué Pasa en la Primera Sesión de Terapia de Pareja | Centro Amaré',
    description: 'Quién habla primero, la política de confidencialidad y por qué el psicólogo no es un juez. Conoce el protocolo estructurado de evaluación en 4 fases.',
    canonical: `${BASE_URL}/blog/primera-sesion-terapia-de-pareja`,
  },
  {
    path: '/blog/dependencia-emocional-como-superarla',
    file: 'blog/dependencia-emocional-como-superarla/index.html',
    title: 'Dependencia Emocional en la Pareja: Cómo Superarla | Centro Amaré',
    description: 'Miedo al abandono, hipervigilancia y pérdida de identidad. Comprende tu estilo de apego y sigue los 4 pasos clínicos para recuperar tu centro.',
    canonical: `${BASE_URL}/blog/dependencia-emocional-como-superarla`,
  },
  {
    path: '/blog/como-controlar-la-ansiedad',
    file: 'blog/como-controlar-la-ansiedad/index.html',
    title: 'Cómo Controlar la Ansiedad según la Psicología Clínica (TCC) | Centro Amaré',
    description: 'Por qué respirar hondo a veces aumenta la angustia. Conoce el orden cognitivo-conductual (TCC) de 4 pasos para desactivar la falsa alarma cerebral.',
    canonical: `${BASE_URL}/blog/como-controlar-la-ansiedad`,
  },
  {
    path: '/blog/ataques-de-ansiedad',
    file: 'blog/ataques-de-ansiedad/index.html',
    title: 'Ataques de Pánico y Ansiedad: Síntomas Físicos y Qué Hacer | Centro Amaré',
    description: 'Taquicardia, parestesias y sensación de asfixia: por qué los síntomas son físicos, cuánto dura el pico y la técnica de anclaje 5-4-3-2-1.',
    canonical: `${BASE_URL}/blog/ataques-de-ansiedad`,
  },
  {
    path: '/blog/como-elegir-un-psicologo-en-el-salvador',
    file: 'blog/como-elegir-un-psicologo-en-el-salvador/index.html',
    title: 'Cómo Elegir un Psicólogo en El Salvador (JVPP) | Centro Amaré',
    description: 'Cómo verificar el registro profesional ante la JVPP / CSSP en El Salvador, diferenciar terapias basadas en evidencia y qué preguntar en la 1ª llamada.',
    canonical: `${BASE_URL}/blog/como-elegir-un-psicologo-en-el-salvador`,
  },
  {
    path: '/blog/psicologo-o-psiquiatra-diferencias',
    file: 'blog/psicologo-o-psiquiatra-diferencias/index.html',
    title: 'Psicólogo o Psiquiatra: Diferencias y Cuándo Consultar | Centro Amaré',
    description: 'Diferencias clave entre psicólogo y psiquiatra. Cuándo la psicoterapia es primera línea y cuándo es necesaria la interconsulta médica ética.',
    canonical: `${BASE_URL}/blog/psicologo-o-psiquiatra-diferencias`,
  },
  {
    path: '/blog/burnout-o-depresion-diferencias',
    file: 'blog/burnout-o-depresion-diferencias/index.html',
    title: 'Burnout o Depresión: Cómo Diferenciarlos | Centro Amaré',
    description: 'La pregunta clave para diferenciar el agotamiento laboral de la depresión clínica. Señales tempranas del burnout y pautas clínicas para detener la espiral.',
    canonical: `${BASE_URL}/blog/burnout-o-depresion-diferencias`,
  },
  {
    path: '/blog/como-mejorar-la-autoestima-sin-frases-hechas',
    file: 'blog/como-mejorar-la-autoestima-sin-frases-hechas/index.html',
    title: 'Cómo Mejorar la Autoestima sin Frases Hechas | Centro Amaré',
    description: 'El peligro de las afirmaciones positivas tóxicas. El modelo de autocompasión de Kristin Neff y cómo construir autoeficacia con pequeñas acciones.',
    canonical: `${BASE_URL}/blog/como-mejorar-la-autoestima-sin-frases-hechas`,
  },
  {
    path: '/blog/crianza-en-pareja-desacuerdos-hijos-soluciones',
    file: 'blog/crianza-en-pareja-desacuerdos-hijos-soluciones/index.html',
    title: 'Crianza en Pareja: Resolver Desacuerdos con los Hijos | Centro Amaré',
    description: 'El policía bueno vs. policía malo, pactos de no desautorización y cómo proteger el vínculo conyugal mientras educas hijos emocionalmente sanos.',
    canonical: `${BASE_URL}/blog/crianza-en-pareja-desacuerdos-hijos-soluciones`,
  },
  {
    path: '/enlaces',
    file: 'enlaces/index.html',
    title: 'Enlaces Oficiales y Cita Online | Centro Amaré',
    description: 'Acceso directo a la primera sesión gratuita de 30 min, test de pareja, honorarios y recursos clínicos de Centro Amaré.',
    canonical: `${BASE_URL}/enlaces`,
    noindex: true,
  },
  {
    path: '/privacidad',
    file: 'privacidad/index.html',
    title: 'Política de Privacidad y Secreto Profesional Clínico | Centro Amaré',
    description: 'Compromiso ético, secreto médico JVPP El Salvador, sesiones online encriptadas y privacidad en la evaluación interactiva de pareja.',
    canonical: `${BASE_URL}/privacidad`,
  },
  {
    path: '/cookies',
    file: 'cookies/index.html',
    title: 'Política de Cookies y Privacidad Digital | Centro Amaré',
    description: 'Información transparente sobre el uso de cookies técnicas y de análisis sin rastreo invasivo en Centro Amaré.',
    canonical: `${BASE_URL}/cookies`,
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

    // Usamos el stylesheet externo para maximizar el cacheo en navegador y mantener un ratio texto/HTML óptimo en auditorías SEO
    const baseTemplateProcessed = baseTemplate

    // 3. Renderizar cada una de las 17 rutas con su metadata personalizada
    for (const route of routes) {
      const appHtml = render(route.path)
      let pageHtml = baseTemplateProcessed.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      )

      // Title
      if (route.title) {
        pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
        pageHtml = pageHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`)
        pageHtml = pageHtml.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
      }

      // Canonical & Hreflang
      if (route.canonical) {
        pageHtml = pageHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonical}" />`)
        pageHtml = pageHtml.replace(/<link rel="alternate" hreflang="es" href=".*?" \/>/, `<link rel="alternate" hreflang="es" href="${route.canonical}" />`)
        pageHtml = pageHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${route.canonical}" />`)
      }

      // Description
      if (route.description) {
        pageHtml = pageHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
        pageHtml = pageHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)
        pageHtml = pageHtml.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`)
      }

      // Robots / Noindex
      if (route.noindex) {
        pageHtml = pageHtml.replace('<head>', '<head>\n    <meta name="robots" content="noindex, follow" />')
      }

      // ── Datos Estructurados enriquecidos (BreadcrumbList y BlogPosting YMYL) ──
      const cleanTitle = route.title ? route.title.split('|')[0].trim() : ''
      const routeSchemas = []

      if (route.path !== '/' && !route.noindex) {
        if (route.path.startsWith('/blog/')) {
          // Breadcrumbs para artículos del Blog
          routeSchemas.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Inicio',
                'item': `${BASE_URL}/`
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Blog',
                'item': `${BASE_URL}/blog`
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': cleanTitle,
                'item': route.canonical
              }
            ]
          })

          // BlogPosting con Autoría Médica E-E-A-T
          routeSchemas.push({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': `${route.canonical}#article`,
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': route.canonical
            },
            'headline': cleanTitle,
            'description': route.description,
            'image': `${BASE_URL}/og-preview-amare.jpg`,
            'author': {
              '@type': 'Person',
              'name': 'Mtra. Iris Alarcón',
              'jobTitle': 'Directora Clínica y Psicóloga Colegiada',
              'url': `${BASE_URL}/iris-alarcon`,
              'hasCredential': {
                '@type': 'EducationalOccupationalCredential',
                'credentialCategory': 'license',
                'name': 'Registro Profesional Sanitario JVPP N.º 47096'
              }
            },
            'publisher': {
              '@type': 'Organization',
              '@id': `${BASE_URL}/#organization`,
              'name': 'Centro Amaré',
              'url': `${BASE_URL}/`,
              'logo': {
                '@type': 'ImageObject',
                'url': `${BASE_URL}/images/logo-nav.png`
              }
            },
            'datePublished': '2026-01-15T08:00:00-06:00',
            'dateModified': '2026-10-22T12:00:00-06:00',
            'inLanguage': 'es'
          })
        } else {
          // Breadcrumbs para subpáginas principales de servicio
          const pageNames = {
            '/terapia-de-pareja': 'Terapia de Pareja',
            '/sexologia-clinica': 'Sexología Clínica',
            '/terapia-individual': 'Terapia Individual',
            '/salvadorenos-en-el-exterior': 'Salvadoreños en el Exterior',
            '/iris-alarcon': 'Mtra. Iris Alarcón (JVPP)',
            '/sobre-nosotros': 'Sobre Nosotros',
            '/precios': 'Precios y Honorarios',
            '/blog': 'Blog de Psicología',
            '/test-de-pareja': 'Test de Pareja Online',
            '/privacidad': 'Política de Privacidad',
            '/cookies': 'Política de Cookies'
          }

          const pageName = pageNames[route.path] || cleanTitle
          routeSchemas.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Inicio',
                'item': `${BASE_URL}/`
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': pageName,
                'item': route.canonical
              }
            ]
          })
        }
      }

      if (routeSchemas.length > 0) {
        const schemaScripts = routeSchemas
          .map(s => `\n    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
          .join('')
        pageHtml = pageHtml.replace('</head>', `${schemaScripts}\n  </head>`)
      }

      // Limpiar comentarios HTML en producción para optimizar payload y cumplir auditorías
      pageHtml = pageHtml.replace(/<!--(?!\[if)[\s\S]*?-->/g, '')

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
