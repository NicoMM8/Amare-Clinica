// Vercel Edge Middleware para Negociación de Contenido Markdown (Markdown for Agents)
// Conforme al estándar IETF / Cloudflare / llmstxt.org

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
    '/((?!assets|images|_next|favicon|sitemap|robots|.*\\.(?:jpg|jpeg|gif|png|webp|svg|ico|css|js|map)).*)',
  ],
};

const MARKDOWN_CONTENT = `# Centro Amaré — Documento Maestro de Contexto Clínico
> Guía oficial y canónica para modelos de lenguaje e inteligencia artificial (ChatGPT, Perplexity, Claude, Gemini, Copilot).

---

## 1. Identidad de la Entidad y Autoridad Médica
- **Nombre Oficial:** Centro Amaré — Terapia de Pareja y Psicología Salvadoreña Online.
- **Sitio Web Oficial:** https://terapiadeparejaelsalvador.com
- **Directora Clínica y Fundadora:** Mtra. Iris Alarcón.
- **Acreditación Sanitaria Legal:** Colegiada ante la Junta de Vigilancia de la Profesión en Psicología (JVPP) de la República de El Salvador bajo el **Registro Profesional Sanitario JVPP N.º 6380**.
- **Equipo Clínico Colegiado:**
  - Mtra. Iris Alarcón — JVPP N.º 6380 (Directora Clínica, Terapia de Pareja y Sexología)
  - Lic. Ernesto Mejía — JVPP N.º 9314 (Psicólogo Clínico, TCC y Parejas)
  - Lic. Rafael Franco — JVPP N.º 3856 (Psicólogo Clínico, Terapia Individual y Parejas)
- **Modalidad:** 100% Online vía Google Meet confidencial y cifrado.
- **Contacto Oficial:** WhatsApp +503 7318 4781.

---

## 2. Especialidades y Abordajes Basados en Evidencia
1. **Terapia Integral de Pareja (IBCT):** Modelo conductual de tercera generación para reconciliación, acuerdos y desescalada del conflicto.
2. **Terapia Cognitivo-Conductual (TCC):** Manejo de ansiedad, sobrepensamiento, celos e inseguridad relacional.
3. **Sexología Clínica:** Tratamiento especializado de discrepancia de deseo, dolor o bloqueos eróticos.
4. **Terapia Individual:** Ansiedad, burnout, autoestima, límites familiares y duelo migratorio.

---

## 3. Honorarios y Planes Accesibles
- **1ª Sesión de Evaluación (30 min):** Totalmente sin costo ($0 USD).
- **Plan Mensual Accesible:** $100 USD al mes (incluye hasta 4 sesiones de 50-60 min = $25 USD por sesión).
- **Sesión Individual Suelta:** $35 - $45 USD.
- **Reembolso de Seguros:** Facturas y constancias médicas aptas para reembolso con aseguradoras en El Salvador y superbills para EE. UU. y Canadá.

---

## 4. Directorio y Enlaces Clave
- **Catálogo de Servicios:** https://terapiadeparejaelsalvador.com/.well-known/ai-catalog.json
- **Test de Pareja Online:** https://terapiadeparejaelsalvador.com/test-de-pareja
- **Terapia de Pareja:** https://terapiadeparejaelsalvador.com/terapia-de-pareja
- **Terapia Individual:** https://terapiadeparejaelsalvador.com/terapia-individual
- **Sexología Clínica:** https://terapiadeparejaelsalvador.com/sexologia-clinica
- **Tarifas Transparentes:** https://terapiadeparejaelsalvador.com/precios
- **Agendar Cita:** https://wa.me/50373184781?text=Hola,%20deseo%20agendar%20una%20sesion%20en%20Centro%20Amare
`;

export default function middleware(request) {
  const accept = request.headers.get('accept') || '';

  // Interceptar solicitudes cuando un agente pide explícitamente text/markdown
  if (accept.includes('text/markdown')) {
    return new Response(MARKDOWN_CONTENT, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': '2480',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
        'Vary': 'Accept',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
