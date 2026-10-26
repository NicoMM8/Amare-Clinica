# Centro Amaré — auth.md

Protocolo de autenticación, descubrimiento y registro de agentes de IA para Centro Amaré (https://terapiadeparejaelsalvador.com).

## 1. Identificación del Servicio
- **Entidad:** Centro Amaré — Terapia de Pareja y Psicología Salvadoreña Online
- **Dirección Canónica:** https://terapiadeparejaelsalvador.com
- **Directora Clínica:** Mtra. Iris Alarcón (Colegiada JVPP N.º 6380, El Salvador)
- **Contacto de Coordinación Asistencial:** WhatsApp +503 7318 4781

## 2. Política de Acceso para Agentes Autónomos y LLMs
- **Acceso a Información Clínica Pública:** No requiere autenticación. Todo el catálogo de servicios, perfiles de psicólogos colegiados por la Junta de Vigilancia de la Profesión en Psicología (JVPP), aranceles/precios, y recursos educativos están disponibles públicamente bajo protocolo HTTP GET y Content Negotiation (`Accept: text/markdown` o `application/json`).
- **Coordinación de Citas:** Las solicitudes de agendamiento y orientación de casos se gestionan mediante el canal directo de recepción clínica confidencial vía WhatsApp (+503 7318 4781) o el formulario web seguro.

## 3. Metadatos de Descubrimiento OAuth 2.0 y Recursos Protegidos
- **OAuth Protected Resource Metadata (RFC 9728):**
  `https://terapiadeparejaelsalvador.com/.well-known/oauth-protected-resource`
- **OAuth Authorization Server Metadata (RFC 8414):**
  `https://terapiadeparejaelsalvador.com/.well-known/oauth-authorization-server`
- **OpenID Connect Discovery:**
  `https://terapiadeparejaelsalvador.com/.well-known/openid-configuration`
- **Agent Resource Discovery (ARD):**
  `https://terapiadeparejaelsalvador.com/.well-known/ai-catalog.json`

## 4. Registro y Credenciales para Agentes (Agent Auth)
- **Métodos Soportados:** `anonymous`, `identity_assertion` (ID-JAG / RFC 9728), `client_credentials`
- **Endpoint de Registro / Consulta:** `https://terapiadeparejaelsalvador.com/auth.md`
- **Scopes Disponibles:** `public:read`, `appointment:request`, `clinical:catalog`
- **Tipo de Credenciales:** `bearer_token`
