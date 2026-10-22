import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { trackWhatsAppClick } from '../lib/analytics';

import { Accordion } from './cojeev/Accordion';

export default function FAQ() {
  const whatsappUrl = "/chat?text=" + encodeURIComponent("Hola, tengo una pregunta antes de agendar mi primera conversación sin costo en Centro Amaré.");

  const accordionItems = FAQS.map((faq) => ({
    title: faq.q,
    content: faq.a,
  }));

  return (
    <section className="section" id="faq">
      <div className="container-narrow">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="pill-badge" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} style={{ color: 'var(--color-clay)' }} />
            <span>Respuestas Claras · Modalidad Online & Pagos</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px', color: 'var(--color-plum-900)' }}>
            Preguntas frecuentes sobre nuestra terapia online desde El Salvador
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            Resolver tus dudas sobre husos horarios, pagos internacionales y confidencialidad médica con total claridad:
          </p>
        </div>

        {/* 000h Animated Accordion */}
        <Accordion items={accordionItems} defaultOpenIndex={0} />

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
