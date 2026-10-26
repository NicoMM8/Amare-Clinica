/**
 * Analytics Utility — Centro Amaré
 * 
 * Configurado para Google Analytics 4 (GA4) y Meta Pixel.
 * Si el ID no está configurado (G-XXXXXXXXXX por defecto), los eventos se registran de forma segura
 * o se muestran en consola en modo desarrollo sin romper la aplicación.
 */

export const GA_MEASUREMENT_ID = typeof window !== 'undefined' && window.__GA_ID__ 
  ? window.__GA_ID__ 
  : 'G-7RM70HX1YH';

/**
 * Registra un evento de conversión personalizado
 * @param {string} action - Nombre del evento (ej: 'click_whatsapp_hero', 'start_quiz')
 * @param {object} params - Parámetros adicionales
 */
export function trackEvent(action, params = {}) {
  try {
    // Disparo nativo para Google Tag Manager (GTM triggers)
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: action,
        ...params,
      });
    }

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action, {
        ...params,
        send_to: GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' ? GA_MEASUREMENT_ID : undefined,
      });
    }

    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackCustom', action, params);
    }
    
    // Log en desarrollo para validar que el tracking funciona
    if (import.meta.env?.DEV) {
      console.log(`[Analytics Event] ${action}:`, params);
    }
  } catch (err) {
    console.warn('[Analytics Error]', err);
  }
}

/**
 * Evento específico para conversión de WhatsApp
 * @param {string} location - Ubicación del botón (ej: 'hero', 'navbar', 'pricing', 'floating')
 * @param {string} label - Texto o contexto
 */
export function trackWhatsAppClick(location = 'unknown', label = '') {
  trackEvent('conversion_whatsapp', {
    event_category: 'contact',
    event_label: label,
    cta_location: location,
    value: 1,
  });
}
