import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, tengo una consulta rápida sobre la terapia online en Centro Amaré.");

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const threshold = window.innerWidth <= 768 ? 320 : 420;
        setIsVisible(window.scrollY > threshold);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`floating-whatsapp ${isVisible ? 'floating-whatsapp--visible' : ''}`}
      aria-label="Hablar con la asistente de Centro Amaré por WhatsApp"
      onClick={() => trackWhatsAppClick('floating_button', 'WhatsApp flotante')}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.92)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <MessageCircle size={18} style={{ color: 'var(--color-clay, #B75940)' }} />
      <span className="floating-whatsapp-label">1ª conversación sin costo</span>
    </a>
  );
}
