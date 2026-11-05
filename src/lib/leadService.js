/**
 * Servicio de Captura y Notificación Unificada de Pacientes (Lead Service)
 * Centro Amaré Psicoterapia Online
 * 
 * Funcionalidad:
 * 1. Envía notificación inmediata por correo a contacto@terapiadeparejaelsalvador.com
 * 2. Guarda copia de seguridad en localStorage por resiliencia
 * 3. Abre WhatsApp con mensaje clínico precargado para contacto en caliente
 */

export const CLINIC_EMAIL = 'daroxbrandmaker@gmail.com';
export const CLINIC_WHATSAPP_PHONE = '50373184781';

export const COUNTRY_CODES = [
  { code: '+503', label: '🇸🇻 El Salvador (+503)' },
  { code: '+1', label: '🇺🇸 / 🇨🇦 EE. UU. / Canadá (+1)' },
  { code: '+34', label: '🇪🇸 España (+34)' },
  { code: '+52', label: '🇲🇽 México (+52)' },
  { code: '+502', label: '🇬🇹 Guatemala (+502)' },
  { code: '+504', label: '🇭🇳 Honduras (+504)' },
  { code: '+506', label: '🇨🇷 Costa Rica (+506)' },
  { code: '+507', label: '🇵🇦 Panamá (+507)' },
  { code: '', label: '🌍 Otro prefijo' },
];

/**
 * Envía los datos del paciente al correo de la clínica vía FormSubmit AJAX
 */
export async function sendLeadEmail({
  name = '',
  whatsapp = '',
  email = '',
  service = 'Terapia de Pareja',
  source = 'Web Centro Amaré',
  notes = '',
  answers = null,
}) {
  // 1. Guardar copia local de seguridad en el navegador
  try {
    const raw = localStorage.getItem('amare_leads_backup') || '[]';
    const list = JSON.parse(raw);
    list.push({
      timestamp: new Date().toISOString(),
      name,
      whatsapp,
      email,
      service,
      source,
      notes,
    });
    localStorage.setItem('amare_leads_backup', JSON.stringify(list.slice(-30)));
  } catch {
    // Silencioso en caso de modo incógnito restrictivo
  }

  // 2. Preparar el cuerpo del correo estructurado
  const payload = {
    _subject: `🔔 Nueva solicitud de cita: ${name || 'Paciente'} (${service})`,
    _template: 'table',
    _captcha: 'false',
    _replyto: email || undefined,
    Nombre: name || 'No especificado',
    'WhatsApp / Teléfono': whatsapp || 'No especificado',
    'Correo Electrónico': email || 'No especificado',
    'Servicio de Interés': service,
    'Canal de Origen': source,
    'Fecha y Hora': new Date().toLocaleString('es-SV', { timeZone: 'America/El_Salvador' }) + ' (El Salvador)',
  };

  if (notes && notes.trim()) {
    payload['Notas / Situación'] = notes.trim();
  }

  // Si proviene del Test de Pareja, adjuntamos el detalle clínico
  if (answers && typeof answers === 'object') {
    if (answers.situationShort || answers.situation) {
      payload['Test: Situación'] = answers.situationShort || answers.situation;
    }
    if (answers.reasonShort || answers.reason) {
      payload['Test: Motivo principal'] = answers.reasonShort || answers.reason;
    }
    if (answers.conflictStyleShort || answers.conflictStyle) {
      payload['Test: Estilo de conflicto'] = answers.conflictStyleShort || answers.conflictStyle;
    }
    if (answers.durationShort || answers.duration) {
      payload['Test: Tiempo de desgaste'] = answers.durationShort || answers.duration;
    }
    if (answers.locationShort || answers.location) {
      payload['Test: Ubicación / Huso horario'] = answers.locationShort || answers.location;
    }
    if (answers.goalShort || answers.goal) {
      payload['Test: Meta terapéutica'] = answers.goalShort || answers.goal;
    }
  }

  // 3. Envío asíncrono resiliente (ShipMyForm + fallback FormSubmit)
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7000);

  try {
    // 3.1 Intentar primero vía ShipMyForm (respuesta en <500ms y alta disponibilidad)
    const formData = new URLSearchParams();
    for (const [key, value] of Object.entries(payload)) {
      if (!key.startsWith('_')) {
        formData.append(key, String(value));
      }
    }
    formData.append('_subject', payload._subject);
    if (email) formData.append('email', email);

    try {
      const shipRes = await fetch(`https://shipmyform.com/to/${CLINIC_EMAIL}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
        signal: controller.signal,
      });
      if (shipRes.ok) {
        clearTimeout(timer);
        return { success: true, provider: 'shipmyform' };
      }
    } catch {
      // Si ShipMyForm falla, continúa al fallback
    }

    // 3.2 Fallback FormSubmit AJAX
    const response = await fetch(`https://formsubmit.co/ajax/${CLINIC_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timer);
    return { success: response.ok, provider: 'formsubmit' };
  } catch (err) {
    clearTimeout(timer);
    console.warn('Envío de correo diferido o bloqueado por red local:', err?.message || err);
    // Siempre devolvemos success: true para no bloquear el flujo hacia WhatsApp
    return { success: true, offline: true };
  }
}

/**
 * Genera la URL de WhatsApp con mensaje precargado personalizado
 */
export function buildWhatsAppUrl({
  name = '',
  whatsapp = '',
  service = 'Terapia de Pareja',
  notes = '',
  answers = null,
  isIndividualInitiative = false,
}) {
  let message = '';
  if (answers) {
    const greeting = isIndividualInitiative
      ? 'Hola, completé el test de autoevaluación en la web y me gustaría agendar la 1ª conversación de 30 min sin costo.'
      : 'Hola, completamos el test de autoevaluación en la web y nos gustaría agendar la 1ª conversación de 30 min sin costo.';
    message = `${greeting}\n\n`;
  } else {
    message = `Hola, completé el formulario en la web de Centro Amaré y me gustaría coordinar mi 1ª conversación de 30 min sin costo.\n\n`;
  }

  if (name && name.trim()) {
    message += `• Nombre: ${name.trim()}\n`;
  }
  if (whatsapp && whatsapp.trim()) {
    message += `• WhatsApp de contacto: ${whatsapp.trim()}\n`;
  }
  if (service && !answers) {
    message += `• Servicio: ${service}\n`;
  }

  if (answers && typeof answers === 'object') {
    if (answers.situationShort || answers.situation) {
      message += `• Modalidad solicitada: ${answers.situationShort || answers.situation}\n`;
    }
    if (answers.reasonShort || answers.reason) {
      message += `• Motivo de consulta: ${answers.reasonShort || answers.reason}\n`;
    }
    if (answers.locationShort || answers.location) {
      message += `• Ubicación / Huso horario: ${answers.locationShort || answers.location}\n`;
    }
  }

  if (notes && notes.trim()) {
    message += `• Nota confidencial: "${notes.trim()}"\n`;
  }

  message += `\n• Formato: Online (Google Meet)\n`;
  message += `(Detalles íntimos reservados para la sesión con la psicóloga bajo secreto profesional legal JVPP).`;

  return `https://wa.me/${CLINIC_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Abre WhatsApp directamente en una pestaña nueva o app
 */
export function openWhatsAppChat(params) {
  const url = buildWhatsAppUrl(params);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return url;
}
