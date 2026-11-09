/**
 * Analytics & Consent Utility — Centro Amaré
 *
 * Centraliza el consentimiento (Google Consent Mode v2 + Microsoft Clarity Consent V2 + DNT/GPC)
 * y el envío de telemetría hacia Google Tag Manager (GTM-TX23HRJH -> GA4 G-W0VEPM26P4 / Clarity z8n4y8i6eo).
 *
 * Política anti-doble-conteo:
 * - GTM-TX23HRJH ya dispara automáticamente `whatsapp_click` (Key Event) en enlaces <a href="https://wa.me/...">
 *   y `test_click` en enlaces a `/test-de-pareja`, además de `page_view` en `history.pushState` (Enhanced Measurement).
 * - Por eso `trackWhatsAppClick` emite `whatsapp_cta_detail` para enriquecer la ubicación exacta del CTA
 *   sin duplicar `whatsapp_click` en GA4.
 * - Los formularios que abren WhatsApp por JavaScript (`window.open`) sin hacer clic en <a> emiten `generate_lead`
 *   únicamente tras validar y completar el envío asíncrono del lead.
 */

export const GTM_CONTAINER_ID = 'GTM-TX23HRJH';

const PII_KEYS = new Set([
  'name',
  'nombre',
  'email',
  'correo',
  'phone',
  'telefono',
  'whatsapp',
  'notes',
  'notas',
  'message',
  'mensaje',
]);

export function isDntActive() {
  if (typeof window === 'undefined') return true;
  return Boolean(
    window.__DNT_ACTIVE__ ||
    (typeof navigator !== 'undefined' &&
      (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true)) ||
    window.doNotTrack === '1'
  );
}

export function getStoredConsent() {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem('amare_cookie_consent');
  } catch {
    return null;
  }
}

function sanitizeParams(params = {}) {
  const clean = {};
  if (!params || typeof params !== 'object') return clean;
  for (const [key, val] of Object.entries(params)) {
    if (val === undefined || val === null) continue;
    if (PII_KEYS.has(String(key).toLowerCase())) continue;
    clean[key] = val;
  }
  return clean;
}

/**
 * Concede consentimiento de analítica y carga GTM-TX23HRJH si DNT/GPC no están activos.
 */
export function grantAnalyticsConsent() {
  try {
    localStorage.setItem('amare_cookie_consent', 'accepted');
  } catch {
    // ignore storage errors
  }

  if (typeof window === 'undefined' || isDntActive()) {
    return false;
  }

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  if (typeof window.clarity === 'function') {
    window.clarity('consentv2', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
    });
  }

  if (typeof window.__loadAmareGTM === 'function') {
    window.__loadAmareGTM();
  }

  window.dataLayer.push({
    event: 'amare_consent_update',
    consent_status: 'accepted',
  });

  return true;
}

/**
 * Deniega consentimiento de analítica y revoca cookies de GA4/Clarity.
 */
export function denyAnalyticsConsent() {
  try {
    localStorage.setItem('amare_cookie_consent', 'declined');
  } catch {
    // ignore storage errors
  }

  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  if (typeof window.clarity === 'function') {
    window.clarity('consentv2', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
    });
    window.clarity('consent', false);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'amare_consent_update',
    consent_status: 'declined',
  });
}

/**
 * Restablece preferencias almacenadas y vuelve a modo denegado hasta nueva elección.
 */
export function resetAnalyticsConsent() {
  try {
    localStorage.removeItem('amare_cookie_consent');
    sessionStorage.removeItem('amare_cookie_consent');
  } catch {
    // ignore
  }

  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  if (typeof window.clarity === 'function') {
    window.clarity('consentv2', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
    });
    window.clarity('consent', false);
  }
}

/**
 * Registra un evento personalizado seguro (sin PII, respetando DNT/GPC y rechazo de cookies).
 * @param {string} action - Nombre del evento GA4 / dataLayer
 * @param {object} params - Parámetros de atribución (sin PII)
 */
export function trackEvent(action, params = {}) {
  try {
    if (typeof window === 'undefined') return;
    if (isDntActive() || getStoredConsent() === 'declined') return;

    const cleanParams = sanitizeParams(params);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: action,
      ...cleanParams,
    });

    if (typeof window.gtag === 'function') {
      window.gtag('event', action, cleanParams);
    }

    if (import.meta.env?.DEV) {
      console.log(`[Analytics Event] ${action}:`, cleanParams);
    }
  } catch (err) {
    if (import.meta.env?.DEV) {
      console.warn('[Analytics Error]', err);
    }
  }
}

/**
 * Registra metadata de ubicación del CTA WhatsApp (`whatsapp_cta_detail`)
 * complementando el Key Event automático `whatsapp_click` de GTM-TX23HRJH sin duplicarlo.
 */
export function trackWhatsAppClick(location = 'unknown', label = '', extra = {}) {
  trackEvent('whatsapp_cta_detail', {
    event_category: 'contact',
    cta_channel: 'whatsapp',
    cta_location: location,
    event_label: label,
    ...extra,
  });
}

/**
 * Evento estándar GA4 para leads confirmados por formulario (`QuickContactModal` o `CoupleMatchingQuiz`).
 */
export function trackLeadGenerated({
  formName = 'unknown',
  serviceType = 'general',
  emailDelivered = false,
  location = 'unknown',
} = {}) {
  trackEvent('generate_lead', {
    currency: 'USD',
    value: 0,
    form_name: formName,
    service_type: serviceType,
    lead_source: location,
    method: 'form_and_whatsapp',
    email_delivered: Boolean(emailDelivered),
  });
}
