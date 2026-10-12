import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { trackWhatsAppClick } from '../lib/analytics';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, tengo una pregunta antes de agendar mi sesión en Centro Amaré.");

  return (
    <section className="section" id="faq">
      <div className="container-narrow">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="pill-badge" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} style={{ color: 'var(--color-clay)' }} />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px' }}>
            Preguntas frecuentes antes de comenzar
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)' }}>
            Resolver sus dudas con claridad es el primer paso para sentirse en un lugar seguro y profesional.
          </p>
        </div>

        {/* FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
                <button 
                  type="button" 
                  className="faq-trigger" 
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span style={{ color: isOpen ? 'var(--color-clay)' : 'var(--color-plum-900)', transition: 'color 0.2s ease' }}>
                    {faq.q}
                  </span>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: isOpen ? 'var(--color-clay-subtle)' : 'var(--color-canvas-subtle)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease'
                  }}>
                    <ChevronDown 
                      size={18} 
                      style={{ 
                        color: isOpen ? 'var(--color-clay)' : 'var(--color-ink-secondary)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease'
                      }} 
                    />
                  </div>
                </button>

                {/* Always present in the DOM for Googlebot & LLM scrapers */}
                <div 
                  id={`faq-answer-${idx}`}
                  className="faq-content"
                  style={{
                    display: isOpen ? 'block' : 'none',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7, color: 'var(--color-ink-secondary)' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div style={{ 
          marginTop: '48px', 
          padding: '24px 32px', 
          background: 'var(--color-surface)', 
          borderRadius: 'var(--r-2xl)', 
          border: '1px solid var(--border-hairline)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--color-plum-900)' }}>
              ¿Tienen alguna duda específica que no aparece aquí?
            </div>
            <div style={{ fontSize: '14px', color: 'var(--color-ink-muted)' }}>
              Escríbanle directamente a nuestra asistente y les contestará a la brevedad.
            </div>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '14px', padding: '10px 20px' }}
            onClick={() => trackWhatsAppClick('faq_footer', 'Consultar por WhatsApp')}
          >
            <MessageSquare size={16} />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
