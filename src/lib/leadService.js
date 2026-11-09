/**
 * Servicio de Captura y Notificación Unificada de Pacientes (Lead Service)
 * Centro Amaré Psicoterapia Online
 * 
 * Funcionalidad:
 * 1. Envía notificación inmediata por correo vía Web3Forms (99.99% uptime)
 * 2. Guarda copia de seguridad en localStorage por resiliencia
 * 3. Abre WhatsApp con mensaje clínico precargado para contacto en caliente
 */

export const CLINIC_EMAIL = 'centroamare.elsalvador@gmail.com';
export const CLINIC_WHATSAPP_PHONE = '50373184781';
export const WEB3FORMS_ACCESS_KEY = '0616396a-bb08-4b74-94ff-bd523e8ed1e3';

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

  // 2. Preparar el payload estructurado para Web3Forms
  const web3Payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: `🔔 Nueva solicitud de cita: ${name || 'Paciente'} (${service})`,
    from_name: 'Centro Amaré Web',
    Nombre: name || 'No especificado',
    'WhatsApp / Teléfono': whatsapp || 'No especificado',
    'Correo Electrónico': email || 'No especificado',
    'Servicio de Interés': service,
    'Canal de Origen': source,
    'Fecha y Hora': new Date().toLocaleString('es-SV', { timeZone: 'America/El_Salvador' }) + ' (El Salvador)',
  };

  if (email && email.includes('@')) {
    web3Payload.replyto = email.trim();
  }

  if (notes && notes.trim()) {
    web3Payload['Notas / Situación'] = notes.trim();
  }

  // Si proviene del Test de Pareja, adjuntamos el detalle clínico
  if (answers && typeof answers === 'object') {
    if (answers.situationShort || answers.situation) {
      web3Payload['Test: Situación'] = answers.situationShort || answers.situation;
    }
    if (answers.reasonShort || answers.reason) {
      web3Payload['Test: Motivo principal'] = answers.reasonShort || answers.reason;
    }
    if (answers.conflictStyleShort || answers.conflictStyle) {
      web3Payload['Test: Estilo de conflicto'] = answers.conflictStyleShort || answers.conflictStyle;
    }
    if (answers.durationShort || answers.duration) {
      web3Payload['Test: Tiempo de desgaste'] = answers.durationShort || answers.duration;
    }
    if (answers.locationShort || answers.location) {
      web3Payload['Test: Ubicación / Huso horario'] = answers.locationShort || answers.location;
    }
    if (answers.goalShort || answers.goal) {
      web3Payload['Test: Meta terapéutica'] = answers.goalShort || answers.goal;
    }
  }

  // 3. Envío asíncrono directo vía Web3Forms API
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(web3Payload),
      signal: controller.signal,
    });

    clearTimeout(timer);
    const result = await response.json().catch(() => ({}));
    return { success: Boolean(response.ok && result.success), provider: 'web3forms' };
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
