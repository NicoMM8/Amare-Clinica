# Centro Amaré — auth.md

Política de acceso y descubrimiento de recursos públicos para agentes de IA y rastreadores en Centro Amaré (https://terapiadeparejaelsalvador.com).

## 1. Identificación del Servicio
- **Entidad:** Centro Amaré — Terapia de Pareja y Psicología Salvadoreña Online
- **Dirección Canónica:** https://terapiadeparejaelsalvador.com
- **Directora Clínica:** Mtra. Iris Alarcón (Colegiada JVPP N.º 6380, El Salvador)
- **Modalidad:** Atención clínica 100% online por Google Meet (El Salvador y diáspora salvadoreña)
- **Contacto de Coordinación Asistencial:** WhatsApp +503 7318 4781

## 2. Política de Acceso Público (Sin OAuth ni Tokens Bearer)
- **Acceso Abierto de Lectura (`GET`):** Todo el contenido clínico público, catálogo de servicios, credenciales del equipo JVPP, estructura de honorarios (1ª sesión de 30 min sin costo y planes mensuales adaptados por país) y guías del blog está disponible de forma pública sin registro, sin OAuth (`/auth/authorize` no aplica) y sin tokens Bearer.
- **Negociación de Contenido:** Las rutas principales responden en HTML pre-renderizado (`text/html`) o en Markdown estructurado mediante negociación HTTP (`Accept: text/markdown`).
- **Coordinación de Citas Clínicas:** Por confidencialidad médica y secreto profesional (JVPP El Salvador), la coordinación de citas se realiza únicamente mediante recepción humana por WhatsApp (+503 7318 4781) o a través de los formularios cifrados de la web (`QuickContactModal` y `/test-de-pareja`).

## 3. Puntos de Descubrimiento Activos
- **API / Resource Catalog (RFC 9727):** `https://terapiadeparejaelsalvador.com/.well-known/api-catalog`
- **Catálogo de Servicios IA:** `https://terapiadeparejaelsalvador.com/.well-known/ai-catalog.json`
- **Agent Skills:** `https://terapiadeparejaelsalvador.com/.well-known/agent-skills/index.json`
- **Contexto Maestro LLM:** `https://terapiadeparejaelsalvador.com/llms.txt` y `https://terapiadeparejaelsalvador.com/llms-full.txt`
- **Feed RSS Editorial:** `https://terapiadeparejaelsalvador.com/rss.xml`
- **Mapa del Sitio:** `https://terapiadeparejaelsalvador.com/sitemap.xml`
