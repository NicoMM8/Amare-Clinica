import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría agendar mi sesión inicial gratuita de 30 minutos en Centro Amaré.");

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Hablar con la asistente de Centro Amaré por WhatsApp"
      onClick={() => trackWhatsAppClick('floating_button', 'WhatsApp flotante')}
    >
      <MessageCircle size={20} className="floating-whatsapp-icon" />
      <span className="floating-whatsapp-label">1ª Sesión 30 min gratis</span>
    </a>
  );
}
