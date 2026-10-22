/**
 * whatsapp.js — Generador de enlaces de WhatsApp para Centro Amaré
 * 
 * En lugar de exponer directamente 120+ enlaces externos directos a wa.me
 * (lo cual provoca que crawlers de auditoría como SemrushBot saturen la IP de Meta
 * y reciban respuestas HTTP 429 "Too Many Requests" que marcan falsos enlaces rotos),
 * usamos el trampolín interno /chat?text=...
 * 
 * - En Vercel: /chat realiza un 307 Redirect transparente e instantáneo en <15ms hacia wa.me.
 * - Para el usuario: Abre WhatsApp exactamente igual que antes, con su texto precargado intacto.
 * - Para robots SEO: Disallow: /chat en robots.txt les prohíbe rastrearlo, logrando 0 enlaces rotos.
 */

export const WA_PHONE_NUMBER = '50373184781';
export const WA_RAW_BASE = `https://wa.me/${WA_PHONE_NUMBER}`;

/**
 * Devuelve la URL interna para abrir WhatsApp con un mensaje precargado opcional.
 * @param {string} [message] - Mensaje a precargar en el chat
 * @returns {string} - URL interna /chat o /chat?text=...
 */
export function getWhatsAppChatUrl(message = '') {
  if (!message || !message.trim()) {
    return '/chat';
  }
  return `/chat?text=${encodeURIComponent(message.trim())}`;
}

export default getWhatsAppChatUrl;
