/**
 * prerender.mjs — SSG Script para Centro Amaré
 * 
 * Pre-renderiza el HTML de todas las rutas estáticas usando Vite SSR + React renderToString.
 * Genera HTML completo para cada ruta con su propio title, description, canonical, OG tags,
 * datos estructurados JSON-LD por tipo de página y feed RSS 2.0 (`/rss.xml`):
 *  - Googlebot (indexación SEO óptima y sin canibalización de URLs)
 *  - Motores de IA generativa como ChatGPT, Gemini, Perplexity (GEO)
 * 
 * Uso: node prerender.mjs (ejecutado por `npm run build` vía postbuild)
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'
import { BLOG_POSTS, BLOG_POST_BY_SLUG } from './src/data/blogMeta.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE_URL = 'https://terapiadeparejaelsalvador.com'

function escapeAttr(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeXml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const VIRTUAL_SERVICE_CHANNEL = {
  '@type': 'ServiceChannel',
  serviceUrl: BASE_URL,
  availableLanguage: ['Spanish', 'English'],
  serviceLocation: {
    '@type': 'VirtualLocation',
    name: 'Videoconsulta confidencial por Google Meet (100% Online)',
    url: BASE_URL,
  },
}

const AREA_SERVED_ONLINE = [
  { '@type': 'Country', name: 'El Salvador' },
  { '@type': 'Country', name: 'United States' },
  { '@type': 'Country', name: 'Canada' },
  { '@type': 'Country', name: 'Spain' },
]

function buildSubpageSchemas(route, cleanTitle) {
  const schemas = []

  if (route.path === '/terapia-de-pareja') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': ['Service', 'MedicalTherapy'],
      name: 'Terapia de Pareja Online — Centro Amaré',
      serviceType: 'Psicoterapia de Pareja Basada en Evidencia (IBCT y TCC)',
      description: route.description,
      url: route.canonical,
      provider: { '@id': `${BASE_URL}/#organization` },
      availableChannel: VIRTUAL_SERVICE_CHANNEL,
      areaServed: AREA_SERVED_ONLINE,
      offers: [
        {
          '@type': 'Offer',
          name: 'Primera sesión de valoración de pareja (30 min)',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/OnlineOnly',
        },
        {
          '@type': 'Offer',
          name: 'Plan Mensual Adaptado de Terapia de Pareja',
          description: 'Hasta 4 sesiones mensuales de 50-60 minutos por Google Meet con honorarios adaptados según país de residencia.',
          url: `${BASE_URL}/precios`,
          availability: 'https://schema.org/OnlineOnly',
        },
      ],
    })
  } else if (route.path === '/terapia-individual') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': ['Service', 'MedicalTherapy'],
      name: 'Terapia Psicológica Individual Online — Centro Amaré',
      serviceType: 'Psicoterapia Clínica Individual para Adultos (TCC, ACT y DBT)',
      description: route.description,
      url: route.canonical,
      provider: { '@id': `${BASE_URL}/#organization` },
      availableChannel: VIRTUAL_SERVICE_CHANNEL,
      areaServed: AREA_SERVED_ONLINE,
      offers: [
        {
          '@type': 'Offer',
          name: 'Primera sesión de evaluación diagnóstica individual (30 min)',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/OnlineOnly',
        },
        {
          '@type': 'Offer',
          name: 'Plan Mensual Adaptado de Terapia Individual',
          description: 'Sesiones semanales por Google Meet con arancel adaptado según país de residencia.',
          url: `${BASE_URL}/precios`,
          availability: 'https://schema.org/OnlineOnly',
        },
      ],
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo saber si necesito consultar con un psicólogo en El Salvador?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Si el sobrepensamiento, la ansiedad, la tristeza o los problemas de relación te impiden disfrutar tu día a día o sientes que tus herramientas habituales ya no alcanzan, la ayuda psicológica profesional te ofrece un marco estructurado y seguro para recuperar el equilibrio.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Ofrecen ayuda psicológica gratuita o de bajo costo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En Centro Amaré brindamos una primera sesión de evaluación diagnóstica de 30 minutos 100% gratuita y sin compromiso. Para el tratamiento continuo, disponemos de planes mensuales accesibles y estructurados según tu país de residencia y necesidad clínica.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué credenciales tienen los psicólogos de Centro Amaré?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Todo nuestro equipo clínico cuenta con titulación universitaria de licenciatura, maestrías de posgrado en psicoterapia clínica y registro oficial activo ante la Junta de Vigilancia de la Profesión Psicológica (JVPP) de El Salvador.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Atienden a personas en San Salvador y otros departamentos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, al trabajar en modalidad online mediante videollamada cifrada, atendemos a pacientes en San Salvador, Santa Tecla, Antiguo Cuscatlán, San Miguel, Santa Ana y a toda la diáspora salvadoreña en Estados Unidos, Canadá y Europa.',
          },
        },
      ],
    })
  } else if (route.path === '/sexologia-clinica') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': ['Service', 'MedicalTherapy'],
      name: 'Sexología Clínica y Terapia Sexual Online — Centro Amaré',
      serviceType: 'Sexología Clínica y Terapia Sexual Conversacional',
      description: route.description,
      url: route.canonical,
      provider: { '@id': `${BASE_URL}/#organization` },
      availableChannel: VIRTUAL_SERVICE_CHANNEL,
      areaServed: AREA_SERVED_ONLINE,
      offers: [
        {
          '@type': 'Offer',
          name: 'Primera sesión de orientación en sexología clínica (30 min)',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/OnlineOnly',
        },
        {
          '@type': 'Offer',
          name: 'Plan Mensual Adaptado de Sexología Clínica',
          description: 'Atención en pareja o individual 100% online adaptada por país de residencia.',
          url: `${BASE_URL}/precios`,
          availability: 'https://schema.org/OnlineOnly',
        },
      ],
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué hace una sexóloga en El Salvador y cuándo consultar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una sexóloga clínica es una psicóloga con posgrado en salud sexual y relacional. Ayuda a resolver problemas de deseo, bloqueos o falta de intimidad con técnicas científicas. La consulta es conversacional, cómoda y no requiere exámenes físicos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿La consulta de sexología se realiza en pareja o de forma individual?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Puedes elegir la modalidad que prefieras. Si el motivo involucra la convivencia o el deseo mutuo, hacerlo en pareja es muy efectivo. También puedes iniciar sesiones individuales si deseas tratar dudas personales primero.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo se garantiza la confidencialidad médica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Todas las consultas tienen secreto profesional médico según la ley de El Salvador (JVPP 6380). Las videollamadas por Google Meet están cifradas de punto a punto y tus datos nunca se comparten con terceros.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta la consulta y cómo se agenda?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Inicias con una primera sesión de 30 minutos sin costo. Si decides continuar, te ofrecemos planes mensuales accesibles y estructurados según tu país de residencia y necesidad clínica.',
          },
        },
      ],
    })
  } else if (route.path === '/salvadorenos-en-el-exterior') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': ['Service', 'MedicalTherapy'],
      name: 'Psicólogos Salvadoreños Online en el Exterior — Centro Amaré',
      serviceType: 'Psicoterapia Online Transcultural para la Diáspora Salvadoreña',
      description: route.description,
      url: route.canonical,
      provider: { '@id': `${BASE_URL}/#organization` },
      availableChannel: VIRTUAL_SERVICE_CHANNEL,
      areaServed: AREA_SERVED_ONLINE,
      offers: {
        '@type': 'Offer',
        name: 'Primera sesión de orientación para salvadoreños en el exterior (30 min)',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/OnlineOnly',
      },
    })
  } else if (route.path === '/precios') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': ['Service', 'MedicalTherapy'],
      name: 'Honorarios y Planes Mensuales Adaptados — Centro Amaré',
      description: route.description,
      url: route.canonical,
      provider: { '@id': `${BASE_URL}/#organization` },
      availableChannel: VIRTUAL_SERVICE_CHANNEL,
      offers: [
        {
          '@type': 'Offer',
          name: 'Primera Conversación Clínica (30 minutos)',
          price: '0',
          priceCurrency: 'USD',
          description: 'Espacio privado por Google Meet para escuchar su motivo de consulta, conocer al terapeuta asignado y definir el arancel mensual según país de residencia.',
          availability: 'https://schema.org/OnlineOnly',
        },
        {
          '@type': 'Offer',
          name: 'Planes Mensuales Adaptados por País (Hasta 4 sesiones al mes de 50-60 min)',
          description: 'Planes mensuales flexibles válidos para terapia de pareja o individual en El Salvador y el exterior, sin permanencia mínima y con factura JVPP apta para reembolso.',
          url: route.canonical,
          availability: 'https://schema.org/OnlineOnly',
        },
      ],
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Por qué adaptan las tarifas según el país de residencia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Creemos que el acceso a psicoterapia especializada con respaldo sanitario JVPP debe ser viable tanto para familias que viven dentro de El Salvador como para compatriotas que residen en EE. UU., Canadá o Europa. Ajustar el arancel mensual según tu país, modalidad y momento actual permite sostener el proceso clínico completo sin interrupciones por razones económicas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿En qué momento conocemos el precio exacto de nuestro plan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Durante tu primera conversación exploratoria de 30 minutos por Google Meet —totalmente sin costo y sin ingresar ninguna tarjeta— escuchamos tu motivo de consulta, te asignamos al profesional idóneo y te confirmamos con claridad la cuota mensual exacta antes de que tomes cualquier decisión.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Hay permanencia mínima o penalización si decidimos pausar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ninguna. Se abona mes a mes e incluye la entrega de factura clínica oficial JVPP apta para reembolso de seguros privados. Pueden pausar o cerrar su proceso con libertad una vez alcanzados los objetivos terapéuticos.',
          },
        },
      ],
    })
  } else if (route.path === '/iris-alarcon') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${BASE_URL}/iris-alarcon#person`,
      name: 'Mtra. Iris Alarcón',
      givenName: 'Iris',
      familyName: 'Alarcón',
      jobTitle: 'Directora Clínica, Psicóloga Clínica y Sexóloga',
      identifier: 'JVPP N.° 6380',
      description: route.description,
      image: `${BASE_URL}/images/iris-alarcon.jpg`,
      url: route.canonical,
      sameAs: ['https://www.psico.org/centro-47096'],
      worksFor: { '@id': `${BASE_URL}/#organization` },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'license',
          name: 'Registro Profesional Sanitario JVPP N.º 6380',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Junta de Vigilancia de la Profesión en Psicología de El Salvador (JVPP)',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'postgraduate',
          name: 'Máster en Terapia de Pareja y Sexología Clínica',
        },
      ],
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo atiende a salvadoreños residentes en Estados Unidos u otros países?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las sesiones se coordinan de manera 100% online por Google Meet con horarios adaptados a las zonas horarias de Estados Unidos (Este, Centro, Montaña y Pacífico) y Canadá. Hablamos en tu propio código cultural salvadoreño, comprendiendo las dinámicas migratorias familiares y sin barreras de lenguaje ni de comprensión.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué respaldo y garantía profesional ofrece la acreditación de la JVPP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La Junta de Vigilancia de la Profesión en Psicología (JVPP) de El Salvador regula y certifica el ejercicio legal de la psicoterapia en el país. El registro N.° 6380 certifica título universitario homologado, idoneidad profesional y apego estricto al código de bioética médica y secreto profesional.',
          },
        },
        {
          '@type': 'Question',
          name: '¿En qué consiste la primera conversación de 30 minutos sin costo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es un primer encuentro inicial por videollamada para conocer tu motivo de consulta o el de tu pareja, explicarte la metodología de trabajo y acordar si iniciamos un plan de acompañamiento. No genera ningún compromiso de contratación posterior.',
          },
        },
      ],
    })
  } else if (route.path === '/test-de-pareja') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: cleanTitle,
      url: route.canonical,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      provider: { '@id': `${BASE_URL}/#organization` },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué pasa si mi pareja no está lista para responder el test o acudir a terapia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es muy frecuente que uno de los miembros de la pareja sienta la necesidad de ayuda antes que el otro. El test contempla la opción individual: podemos comenzar con un enfoque vincular individual con uno de ustedes para entender la dinámica y generar cambios saludables en la interacción sin presionar a la otra parte.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Este test sustituye el diagnóstico de un psicólogo profesional?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Se trata de una herramienta clínica de autoevaluación y orientación inicial que estructura sus motivos de consulta para facilitar el primer contacto con nuestro equipo acreditado por la JVPP en El Salvador.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo funciona la primera sesión gratuita de 30 minutos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Al completar el cuestionario, pueden solicitar una conversación de orientación de 30 minutos sin costo por videollamada. En ella evaluamos su situación particular, resolvemos dudas sobre la metodología y establecemos si la terapia de pareja es el abordaje más indicado.',
          },
        },
      ],
    })
  } else if (route.path === '/blog') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${BASE_URL}/blog#blog`,
      name: 'Blog & Guías de Psicología — Centro Amaré',
      description: route.description,
      url: route.canonical,
      inLanguage: 'es',
      publisher: { '@id': `${BASE_URL}/#organization` },
      blogPost: BLOG_POSTS.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: `${BASE_URL}/blog/${post.slug}`,
        datePublished: `${post.datePublished}T08:00:00-06:00`,
        dateModified: `${post.dateModified}T12:00:00-06:00`,
        author:
          post.authorType === 'Organization'
            ? { '@type': 'Organization', name: post.authorName, url: `${BASE_URL}${post.authorUrl}` }
            : { '@type': 'Person', name: post.authorName, url: `${BASE_URL}${post.authorUrl}` },
      })),
    })
  }

  return schemas
}

function generateRssXml() {
  const sortedPosts = [...BLOG_POSTS].sort((a, b) =>
    b.dateModified.localeCompare(a.dateModified)
  )
  const lastBuildDate = new Date('2026-11-09T14:00:00Z').toUTCString()

  const itemsXml = sortedPosts
    .map((post) => {
      const postUrl = `${BASE_URL}/blog/${post.slug}`
      const pubDate = new Date(`${post.datePublished}T14:00:00Z`).toUTCString()
      const enclosureUrl = post.image
        ? `${BASE_URL}${post.image.replace('.webp', '.jpg')}`
        : `${BASE_URL}/og-preview-amare.jpg`

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(postUrl)}</link>
      <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <author>contacto@terapiadeparejaelsalvador.com (${escapeXml(post.authorName)})</author>
      <description>${escapeXml(post.excerpt)}</description>
      <enclosure url="${escapeXml(enclosureUrl)}" type="image/jpeg" />
    </item>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog Clínico Centro Amaré — Terapia de Pareja y Psicología</title>
    <link>${BASE_URL}/blog</link>
    <description>Guías clínicas escritas por psicólogos colegiados JVPP sobre terapia de pareja, ansiedad, sexología clínica, límites familiares y duelo migratorio.</description>
    <language>es</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`
}

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
    description: 'Cuestionario clínico interactivo de 7 preguntas para parejas. Evalúa el nivel de desgaste, la comunicación y recibe orientación psicológica personalizada.',
    canonical: `${BASE_URL}/test-de-pareja`,
  },
  {
    path: '/tu-match',
    file: 'tu-match/index.html',
    title: 'Test de Pareja Online: Autoevaluación Clínica | Centro Amaré',
    description: 'Cuestionario clínico interactivo de 7 preguntas para parejas.',
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
    title: 'Sexóloga en El Salvador | Sexología Clínica · Centro Amaré',
    description: 'Consulta con sexóloga clínica colegiada en El Salvador (JVPP 6380) y online para deseo, bloqueos y reconexión íntima. 1ª sesión de 30 min gratis.',
    canonical: `${BASE_URL}/sexologia-clinica`,
  },
  {
    path: '/terapia-individual',
    file: 'terapia-individual/index.html',
    title: 'Psicólogos en El Salvador · Clínica Online | Centro Amaré',
    description: 'Psicólogos colegiados ante la JVPP en El Salvador. Terapia clínica online para ansiedad, estrés y límites. Agenda tu 1ª sesión de 30 min sin costo.',
    canonical: `${BASE_URL}/terapia-individual`,
  },
  {
    path: '/salvadorenos-en-el-exterior',
    file: 'salvadorenos-en-el-exterior/index.html',
    title: 'Psicólogos Salvadoreños Online en el Exterior | Centro Amaré',
    description: 'Psicólogos salvadoreños online para quienes viven fuera. Terapia en EE. UU., Canadá y Europa con planes adaptados por país y 1ª sesión gratis.',
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
    description: 'Conoce a la Mtra. Iris Alarcón, Directora Clínica de Centro Amaré. Psicóloga JVPP El Salvador, máster en pareja y sexología con +9 años de experiencia.',
    canonical: `${BASE_URL}/iris-alarcon`,
  },
  {
    path: '/sobre-nosotros',
    file: 'sobre-nosotros/index.html',
    title: 'Sobre Centro Amaré | Misión y Equipo en El Salvador',
    description: 'Conoce Centro Amaré, fundado en 2017 por la Mtra. Iris Alarcón en San Salvador. Psicología online con respaldo JVPP en El Salvador y la diáspora.',
    canonical: `${BASE_URL}/sobre-nosotros`,
  },
  {
    path: '/precios',
    file: 'precios/index.html',
    title: 'Precios y Honorarios — Terapia de Pareja | Centro Amaré',
    description: 'Honorarios de terapia de pareja e individual en El Salvador y el exterior: 1ª sesión de 30 min sin costo y planes mensuales adaptados a tu país.',
    canonical: `${BASE_URL}/precios`,
  },
  {
    path: '/blog',
    file: 'blog/index.html',
    title: 'Blog de Psicología y Pareja en El Salvador | Centro Amaré',
    description: 'Recursos, guías clínicas y respuestas claras sobre costos, migración y terapia de pareja por psicólogos colegiados en El Salvador.',
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
    title: 'Fortalecer la Relación de Pareja con Terapia | Centro Amaré',
    description: 'Ciclos de discusión, reparación emocional y acuerdos clave. Guía de terapia de pareja basada en evidencia para parejas en El Salvador y el exterior.',
    canonical: `${BASE_URL}/blog/fortalecer-relacion-pareja-ayuda-profesional`,
  },
  {
    path: '/blog/se-puede-perdonar-una-infidelidad-guia-pareja',
    file: 'blog/se-puede-perdonar-una-infidelidad-guia-pareja/index.html',
    title: '¿Se Puede Perdonar una Infidelidad? Guía Clínica | Amaré',
    description: 'Fases clínicas para sanar tras un engaño o cerrar en paz. Transparencia radical, cese de hipervigilancia y reconstrucción en terapia de pareja.',
    canonical: `${BASE_URL}/blog/se-puede-perdonar-una-infidelidad-guia-pareja`,
  },
  {
    path: '/blog/falta-de-deseo-sexual-en-la-pareja-soluciones',
    file: 'blog/falta-de-deseo-sexual-en-la-pareja-soluciones/index.html',
    title: 'Falta de Deseo Sexual en Pareja: Soluciones | Centro Amaré',
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
    description: 'Comparativa de costos de terapia de pareja en San Salvador, EE. UU. y modalidades online. Cómo funcionan los planes adaptados de Centro Amaré.',
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
    title: 'Dependencia Emocional en Pareja: Cómo Superarla | Amaré',
    description: 'Miedo al abandono, hipervigilancia y pérdida de identidad. Comprende tu estilo de apego y sigue los 4 pasos clínicos para recuperar tu centro.',
    canonical: `${BASE_URL}/blog/dependencia-emocional-como-superarla`,
  },
  {
    path: '/blog/como-controlar-la-ansiedad',
    file: 'blog/como-controlar-la-ansiedad/index.html',
    title: 'Cómo Controlar la Ansiedad con Técnicas TCC | Centro Amaré',
    description: 'Por qué respirar hondo a veces aumenta la angustia. Conoce el orden cognitivo-conductual (TCC) de 4 pasos para desactivar la falsa alarma cerebral.',
    canonical: `${BASE_URL}/blog/como-controlar-la-ansiedad`,
  },
  {
    path: '/blog/ataques-de-ansiedad',
    file: 'blog/ataques-de-ansiedad/index.html',
    title: 'Ataques de Pánico y Ansiedad: Qué Hacer | Centro Amaré',
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
    title: 'Psicólogo, Psicoanalista o Psiquiatra: Diferencias | Centro Amaré',
    description: 'Diferencia entre psicólogo, psicoanalista y psiquiatra: formación, quién receta medicación y a cuál acudir primero en crisis emocionales o de pareja.',
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
    const baseTemplateProcessed = baseTemplate

    // 3. Renderizar cada ruta con su metadata y schemas estructurados
    for (const route of routes) {
      const appHtml = render(route.path)
      let pageHtml = baseTemplateProcessed.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      )

      // Title & OG/Twitter titles
      if (route.title) {
        pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${escapeXml(route.title)}</title>`)
        pageHtml = pageHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${escapeAttr(route.title)}" />`)
        pageHtml = pageHtml.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`)
      }

      // Canonical & Hreflang & OG URL
      if (route.canonical) {
        pageHtml = pageHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonical}" />`)
        pageHtml = pageHtml.replace(/<link rel="alternate" hreflang="es" href=".*?" \/>/, `<link rel="alternate" hreflang="es" href="${route.canonical}" />`)
        pageHtml = pageHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${route.canonical}" />`)
      }

      // Description
      if (route.description) {
        pageHtml = pageHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escapeAttr(route.description)}" />`)
        pageHtml = pageHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${escapeAttr(route.description)}" />`)
        pageHtml = pageHtml.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`)
      }

      // Robots / Noindex (reemplazo único para evitar doble etiqueta meta robots)
      if (route.noindex) {
        pageHtml = pageHtml.replace(
          /<meta name="robots"[^>]*\/>/,
          '<meta name="robots" content="noindex, follow" />'
        )
      }

      // ── Datos Estructurados & OpenGraph específicos por tipo de página ──
      const cleanTitle = route.title ? route.title.split('|')[0].trim() : ''
      const routeSchemas = []
      const extraHeadTags = []

      if (route.path !== '/' && !route.noindex) {
        if (route.path.startsWith('/blog/')) {
          const slug = route.path.replace('/blog/', '')
          const meta = BLOG_POST_BY_SLUG[slug]
          if (!meta) {
            throw new Error(`Falta metadata en blogMeta.js para la ruta ${route.path}`)
          }

          const articleImgJpg = meta.image
            ? `${BASE_URL}${meta.image.replace('.webp', '.jpg')}`
            : `${BASE_URL}/og-preview-amare.jpg`

          pageHtml = pageHtml.replace(
            '<meta property="og:type" content="website" />',
            '<meta property="og:type" content="article" />'
          )
          pageHtml = pageHtml.replace(
            /<meta property="og:image" content=".*?" \/>/,
            `<meta property="og:image" content="${articleImgJpg}" />`
          )
          pageHtml = pageHtml.replace(
            /<meta property="og:image:secure_url" content=".*?" \/>/,
            `<meta property="og:image:secure_url" content="${articleImgJpg}" />`
          )
          pageHtml = pageHtml.replace(
            /<meta name="twitter:image" content=".*?" \/>/,
            `<meta name="twitter:image" content="${articleImgJpg}" />`
          )

          extraHeadTags.push(
            `<meta property="article:published_time" content="${meta.datePublished}T08:00:00-06:00" />`,
            `<meta property="article:modified_time" content="${meta.dateModified}T12:00:00-06:00" />`,
            `<meta property="article:author" content="${escapeAttr(meta.authorName)}" />`,
            `<meta property="article:section" content="${escapeAttr(meta.category)}" />`
          )

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
                'name': meta.title,
                'item': route.canonical
              }
            ]
          })

          // BlogPosting con autoría clínica real sincronizada con blogMeta.js
          const authorEntity = meta.authorType === 'Organization'
            ? {
                '@type': 'Organization',
                '@id': `${BASE_URL}/#organization`,
                'name': meta.authorName,
                'url': `${BASE_URL}${meta.authorUrl}`
              }
            : {
                '@type': 'Person',
                'name': meta.authorName,
                'jobTitle': meta.authorJobTitle,
                'url': `${BASE_URL}${meta.authorUrl}`,
                'hasCredential': {
                  '@type': 'EducationalOccupationalCredential',
                  'credentialCategory': 'license',
                  'name': meta.authorJvpp
                }
              }

          routeSchemas.push({
            '@context': 'https://schema.org',
            '@type': ['BlogPosting', 'Article'],
            '@id': `${route.canonical}#article`,
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': route.canonical
            },
            'headline': meta.title,
            'description': meta.excerpt || route.description,
            'articleSection': meta.category,
            'image': [articleImgJpg, `${BASE_URL}/og-preview-amare.jpg`],
            'author': authorEntity,
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
            'datePublished': `${meta.datePublished}T08:00:00-06:00`,
            'dateModified': `${meta.dateModified}T12:00:00-06:00`,
            'inLanguage': 'es'
          })
        } else {
          // Breadcrumbs para subpáginas principales
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

          // Schemas específicos de servicio, perfil clínico, FAQ (AEO/GEO) o Blog
          routeSchemas.push(...buildSubpageSchemas(route, cleanTitle))
        }
      }

      if (extraHeadTags.length > 0 || routeSchemas.length > 0) {
        const metaBlock = extraHeadTags.map(t => `\n    ${t}`).join('')
        const schemaScripts = routeSchemas
          .map(s => `\n    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
          .join('')
        pageHtml = pageHtml.replace('</head>', `${metaBlock}${schemaScripts}\n  </head>`)
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

    // 4. Generar Feed RSS 2.0 en dist/rss.xml y public/rss.xml
    const rssXml = generateRssXml()
    fs.writeFileSync(path.resolve(distPath, 'rss.xml'), rssXml, 'utf-8')
    fs.writeFileSync(path.resolve(__dirname, 'public/rss.xml'), rssXml, 'utf-8')
    console.log('✅  RSS 2.0 generado → dist/rss.xml y public/rss.xml (17 artículos)')

    // 5. Limpiar el directorio SSR temporal
    fs.rmSync(path.resolve(__dirname, 'dist-ssr'), { recursive: true, force: true })

    console.log(`\n🎉 Total: ${routes.length} páginas prerenderizadas + rss.xml listos para Googlebot e IAs.\n`)

  } catch (err) {
    console.error('❌  Error durante el pre-rendering:')
    console.error('   ', err.message)
    const ssrDir = path.resolve(__dirname, 'dist-ssr')
    if (fs.existsSync(ssrDir)) {
      fs.rmSync(ssrDir, { recursive: true, force: true })
    }
    process.exitCode = 1
  }
}

prerender()
