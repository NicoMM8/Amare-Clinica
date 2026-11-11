// Vercel Edge Middleware para Negociación de Contenido Markdown (Markdown for Agents)
// Conforme al estándar IETF / Cloudflare / llmstxt.org
import { BLOG_POSTS, BLOG_POST_BY_SLUG } from './src/data/blogMeta.js';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - assets (vite asset files)
     * - images (static images)
     * - favicon.ico, favicon.png, etc.
     */
    '/((?!assets|images|_next|favicon|sitemap|robots|rss\\.xml|.*\\.(?:jpg|jpeg|gif|png|webp|svg|ico|css|js|map|xml|txt|json)).*)',
  ],
};

const BASE_URL = 'https://terapiadeparejaelsalvador.com';

const MASTER_OVERVIEW = `# Centro Amaré — Documento Maestro de Contexto Clínico
> Guía oficial y canónica para modelos de lenguaje e inteligencia artificial (ChatGPT, Perplexity, Claude, Gemini, Copilot).

---

## 1. Identidad de la Entidad y Autoridad Médica
- **Nombre Oficial:** Centro Amaré — Terapia de Pareja y Psicología Salvadoreña Online.
- **Sitio Web Oficial:** ${BASE_URL}
- **Directora Clínica y Fundadora:** Mtra. Iris Alarcón.
- **Acreditación Sanitaria Legal:** Colegiada ante la Junta de Vigilancia de la Profesión en Psicología (JVPP) de la República de El Salvador bajo el **Registro Profesional Sanitario JVPP N.º 6380**.
- **Equipo Clínico Colegiado:**
  - Mtra. Iris Alarcón — JVPP N.º 6380 (Directora Clínica, Terapia de Pareja y Sexología)
  - Lic. Ernesto Mejía — JVPP N.º 9314 (Psicólogo Clínico, TCC y Parejas)
  - Mtro. Rafael Franco — JVPP N.º 3856 (Psicólogo Clínico, Terapia Individual y Parejas)
- **Modalidad:** 100% Online vía Google Meet confidencial y cifrado (El Salvador y diáspora en EE. UU., Canadá y Europa).
- **Contacto Oficial:** WhatsApp +503 7318 4781.

---

## 2. Especialidades y Abordajes Basados en Evidencia
1. **Terapia Integral de Pareja (IBCT):** Modelo conductual de tercera generación para reconciliación, acuerdos y desescalada del conflicto.
2. **Terapia Cognitivo-Conductual (TCC):** Manejo de ansiedad, sobrepensamiento, celos e inseguridad relacional.
3. **Sexología Clínica:** Tratamiento especializado de discrepancia de deseo, dolor o bloqueos eróticos.
4. **Terapia Individual:** Ansiedad, burnout, autoestima, límites familiares y duelo migratorio.

---

## 3. Honorarios y Planes Accesibles
- **1ª Sesión de Evaluación (30 min):** Totalmente sin costo ($0 USD), sin compromiso ni tarjeta de crédito.
- **Planes Mensuales Adaptados:** Hasta 4 sesiones al mes de 50-60 min, estructurados según país de residencia (El Salvador o exterior), capacidad y modalidad clínica (pareja, individual o sexología), cotizados con claridad en la primera llamada gratuita y sin permanencia mínima.
- **Facturación Profesional Oficial:** Facturas y constancias profesionales con número de colegiación sanitaria oficial ante la JVPP (N.º 6380).

---

## 4. Directorio y Enlaces Clave
- **Catálogo de Servicios:** ${BASE_URL}/.well-known/ai-catalog.json
- **Test de Pareja Online:** ${BASE_URL}/test-de-pareja
- **Terapia de Pareja:** ${BASE_URL}/terapia-de-pareja
- **Terapia Individual:** ${BASE_URL}/terapia-individual
- **Sexología Clínica:** ${BASE_URL}/sexologia-clinica
- **Salvadoreños en el Exterior:** ${BASE_URL}/salvadorenos-en-el-exterior
- **Honorarios Adaptados:** ${BASE_URL}/precios
- **Blog Clínico:** ${BASE_URL}/blog
- **Feed RSS:** ${BASE_URL}/rss.xml
- **Agendar Cita:** https://wa.me/50373184781?text=Hola,%20deseo%20agendar%20una%20sesion%20en%20Centro%20Amare
`;

const ROUTE_MARKDOWN = {
  '/precios': `# Honorarios y Planes Adaptados — Centro Amaré
URL: ${BASE_URL}/precios

## Paso 1 · Primera Conversación ($0 USD)
- Duración: 30 minutos por Google Meet con un terapeuta del equipo clínico colegiado (JVPP El Salvador).
- Costo: Totalmente sin costo ($0 USD), sin tarjeta de crédito ni compromiso de continuidad.
- Objetivo: Escuchar su motivo de consulta, asignar al especialista adecuado y confirmar con claridad la cuota mensual antes de empezar.

## Paso 2 · Planes Mensuales Adaptados por País
- Arancel estructurado de forma justa según **país de residencia** (El Salvador o exterior), capacidad y modalidad clínica (Pareja o Individual).
- Incluye hasta 4 sesiones mensuales de 50 a 60 minutos, ejercicios guiados entre sesiones y cero permanencia mínima.
- Medios de pago sin comisiones de remesa: Transferencia bancaria en El Salvador (Banco Agrícola, BAC Credomatic, Banco Cuscatlán), Visa, Mastercard, Stripe, PayPal y Zelle.

## Facturación Profesional (JVPP)
- Se emite factura profesional oficial con número de registro sanitario de la JVPP (N.º 6380).

- **Agendar 1ª conversación sin costo:** https://wa.me/50373184781
`,
  '/terapia-de-pareja': `# Terapia de Pareja Online — Centro Amaré
URL: ${BASE_URL}/terapia-de-pareja

## Protocolo Clínico en 4 Fases (IBCT + TCC)
1. **Evaluación y Mapa del Vínculo:** Identificar el ciclo reactivo sin buscar culpables ni tomar bandos.
2. **Desescalada Emocional:** Frenar discusiones en bucle, reproches automáticos y la ley del hielo.
3. **Reconstrucción y Acuerdos:** Reparar heridas, infidelidad, sexualidad, finanzas compartidas y límites familiares.
4. **Consolidación y Alta Terapéutica:** Herramientas preventivas y autonomía real de la pareja.

- Modalidad: 100% online por Google Meet confidencial (parejas en El Salvador o relaciones a distancia/transnacionales).
- 1ª sesión de 30 minutos sin costo ($0 USD): https://wa.me/50373184781
`,
  '/terapia-individual': `# Terapia Individual Online (TCC y ACT/DBT) — Centro Amaré
URL: ${BASE_URL}/terapia-individual

## Áreas Clínicas de Atención para Adultos
- **Ansiedad, pánico y sobrepensamiento:** Intervención cognitivo-conductual basada en evidencia.
- **Límites familiares y culpa:** Acompañamiento para establecer límites firmes sin ruptura afectiva.
- **Rupturas, duelos afectivos y apego:** Recuperación de la estabilidad e identidad emocional.
- **Burnout, depresión y autoestima real:** Procesos estructurados con metas medibles.

- Cobertura: 100% online por Google Meet en San Salvador, todo El Salvador y la diáspora salvadoreña.
- 1ª sesión evaluativa de 30 min sin costo: https://wa.me/50373184781
`,
  '/sexologia-clinica': `# Sexología Clínica Online — Mtra. Iris Alarcón (JVPP N.º 6380)
URL: ${BASE_URL}/sexologia-clinica

## Enfoque Conversacional, Científico y Confidencial
- Especialista a cargo: Mtra. Iris Alarcón (Licenciada en Psicología, Máster en Sexología Clínica y Terapia de Pareja, JVPP N.º 6380).
- Motivos tratados: Discrepancia de deseo sexual, bloqueos íntimos (anorgasmia, dolor o disfunción eréctil de origen psicógeno), reconexión tras crisis o maternidad/paternidad.
- Sin exámenes físicos invasivos; atención individual o en pareja vía Google Meet cifrado.
- 1ª conversación de 30 min sin costo: https://wa.me/50373184781
`,
  '/salvadorenos-en-el-exterior': `# Psicólogos Salvadoreños Online para la Diáspora — Centro Amaré
URL: ${BASE_URL}/salvadorenos-en-el-exterior

- Atención 100% online en tu idioma, tus modismos y tu contexto cultural salvadoreño (sin tener que explicar desde cero dinámicas familiares, remesas ni duelo migratorio).
- Adaptado a husos horarios: EST (DMV, Nueva York, Miami, Montreal, Toronto), CST (Houston, Dallas, Chicago, San Salvador), PST (Los Ángeles, San Francisco, Seattle) y CET (Madrid, Barcelona).
- Planes mensuales adaptados por país de residencia y 1ª sesión gratuita de 30 min.
- Contacto directo: https://wa.me/50373184781
`,
  '/iris-alarcon': `# Mtra. Iris Alarcón — Directora Clínica Centro Amaré
URL: ${BASE_URL}/iris-alarcon

- **Registro Profesional Sanitario:** JVPP N.º 6380 (Junta de Vigilancia de la Profesión en Psicología de El Salvador).
- **Formación:** Licenciatura en Psicología Clínica y Máster en Terapia de Pareja y Sexología Clínica. Más de 9 años de práctica clínica.
- **Enfoques:** Terapia Integral de Parejas (IBCT), Terapia Cognitivo-Conductual (TCC) y Terapia Dialéctico-Conductual (DBT).
- **Principios Éticos:** Neutralidad absoluta en pareja, lenguaje clínico claro, alta terapéutica formal sin generar dependencia y sensibilidad cultural salvadoreña.
`,
  '/sobre-nosotros': `# Sobre Centro Amaré — Historia y Misión desde 2017
URL: ${BASE_URL}/sobre-nosotros

- Fundado en 2017 en San Salvador por la Mtra. Iris Alarcón como clínica digital centrada en rigor científico y calidez humana.
- Modalidad 100% online vía Google Meet con recepción atendida por personas reales vía WhatsApp (+503 7318 4781).
- Equipo colegiado ante la JVPP de El Salvador: Mtra. Iris Alarcón (JVPP 6380), Lic. Ernesto Mejía (JVPP 9314) y Mtro. Rafael Franco (JVPP 3856).
`,
  '/test-de-pareja': `# Test Clínico de Pareja Online (7 Preguntas) — Centro Amaré
URL: ${BASE_URL}/test-de-pareja

- Herramienta gratuita de autoevaluación interactiva en 7 pasos para parejas o personas consultando en solitario.
- Evalúa patrones de comunicación, intimidad afectivo-sexual, confianza tras crisis y contexto geográfico.
- Privacidad por diseño: respuestas evaluadas localmente en el navegador sin requerir tarjeta ni registro previo; no sustituye el diagnóstico clínico formal.
`,
};

function buildMarkdownForPath(rawPath) {
  const cleanPath = (rawPath || '/').replace(/\/+$/, '') || '/';

  if (ROUTE_MARKDOWN[cleanPath]) {
    return ROUTE_MARKDOWN[cleanPath];
  }

  if (cleanPath === '/blog') {
    const items = BLOG_POSTS.map(
      (p) =>
        `- **[${p.title}](${BASE_URL}/blog/${p.slug})** — *${p.category}* · ${p.author} · ${p.dateModified}\n  ${p.excerpt}`
    ).join('\n');

    return `# Blog & Guías Clínicas de Psicología — Centro Amaré\nURL: ${BASE_URL}/blog\nFeed RSS: ${BASE_URL}/rss.xml\n\n## Artículos Publicados (${BLOG_POSTS.length})\n${items}\n`;
  }

  if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.replace('/blog/', '');
    const post = BLOG_POST_BY_SLUG[slug];
    if (post) {
      return `# ${post.title}\n\n- **URL Canónica:** ${BASE_URL}/blog/${post.slug}\n- **Categoría:** ${post.category}\n- **Autoría:** ${post.author} (${post.authorJvpp})\n- **Publicado:** ${post.datePublished} · **Actualizado:** ${post.dateModified}\n- **Tiempo de lectura:** ${post.readTime}\n\n## Resumen Clínico\n${post.excerpt}\n\n## Recursos y Contacto\n- **Leer guía completa:** ${BASE_URL}/blog/${post.slug}\n- **Agendar 1ª sesión de 30 min sin costo:** https://wa.me/50373184781\n`;
    }
  }

  return MASTER_OVERVIEW;
}

export default function middleware(request) {
  const accept = request.headers.get('accept') || '';

  // Interceptar solicitudes cuando un agente pide explícitamente text/markdown
  if (accept.includes('text/markdown')) {
    const url = new URL(request.url);
    const md = buildMarkdownForPath(url.pathname);
    const estimatedTokens = String(Math.max(1, Math.ceil(md.length / 4)));

    return new Response(md, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': estimatedTokens,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
        'Vary': 'Accept',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
