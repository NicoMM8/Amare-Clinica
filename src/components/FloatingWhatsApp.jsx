import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría agendar mi sesión inicial gratuita de 30 minutos en Centro Amaré.");

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Hablar con la asistente por WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Sesión Gratis (WhatsApp)</span>
    </a>
  );
}
