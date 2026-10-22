"use client";

import React from 'react';
import { HeartHandshake, Brain, MessageCircle } from 'lucide-react';

export default function Specialties() {
  const whatsappPareja = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría agendar la sesión exploratoria de 30 minutos sin costo para Terapia de Pareja.");
  const whatsappIndividual = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría agendar la sesión exploratoria de 30 minutos sin costo para Terapia Individual.");

  return (
    <section className="section" id="especialidades" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        
        {/* Header con H2 exacto para posicionamiento SEO */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div className="pill-badge pill-badge-clay" style={{ marginBottom: '14px' }}>
            <span>Nuestras Áreas de Atención</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px', color: 'var(--color-plum-900)' }}>
            Especialidades en terapia de pareja, sexología y psicología individual
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
            Acompañamiento psicológico online para personas y parejas en El Salvador, Estados Unidos, Canadá y Europa:
          </p>
        </div>

        {/* ── 2 TARJETAS PILAR (H3 con Keywords exactas de Cola Larga) ── */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '28px', 
            maxWidth: '1020px', 
            margin: '0 auto 52px' 
          }}
        >
          {/* Tarjeta 1: Terapia de Pareja y Sexología Clínica */}
          <div 
            className="card-panel" 
            style={{ 
              background: '#FFFFFF', 
              padding: '36px 32px', 
              borderRadius: '24px', 
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--color-clay-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HeartHandshake size={24} style={{ color: 'var(--color-clay)' }} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay-text, #8B3822)', background: 'var(--color-canvas)', padding: '5px 12px', borderRadius: 'var(--r-pill)' }}>
                  Para Parejas (Juntas o a Distancia)
                </span>
              </div>

              <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '14px', lineHeight: 1.3 }}>
                Terapia de Pareja y Sexología Clínica
              </h3>

              <p style={{ fontSize: '15px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '22px' }}>
                Para parejas que sienten que solo discuten, que han perdido el deseo o la complicidad, que atraviesan una infidelidad o que sufren el desgaste de emigrar. Dejen de "aguantar" y aprendan a comunicarse con calma.
              </p>

              <div style={{ fontSize: '13px', color: 'var(--color-plum-900)', background: 'var(--color-canvas)', padding: '10px 14px', borderRadius: '12px', marginBottom: '24px' }}>
                <strong>Base científica:</strong> Terapia Integral de Pareja (IBCT) y Sexología Clínica
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)' }}>
              <a
                href={whatsappPareja}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Agendar primera conversación de 30 minutos sin costo para Terapia de Pareja vía WhatsApp"
                style={{ fontSize: '13.5px', padding: '10px 20px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={16} />
                <span>1ª conversación sin costo</span>
              </a>

              <a
                href="/terapia-de-pareja"
                style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-clay-text, #8B3822)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Conocer cómo trabajamos en pareja →</span>
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Terapia Individual para Adultos y Salvadoreños en el Exterior */}
          <div 
            className="card-panel" 
            style={{ 
              background: '#FFFFFF', 
              padding: '36px 32px', 
              borderRadius: '24px', 
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--color-clay-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Brain size={24} style={{ color: 'var(--color-clay)' }} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay-text, #8B3822)', background: 'var(--color-canvas)', padding: '5px 12px', borderRadius: 'var(--r-pill)' }}>
                  Para Ti (Proceso Individual)
                </span>
              </div>

              <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '14px', lineHeight: 1.3 }}>
                Terapia Individual para Adultos y Salvadoreños en el Exterior
              </h3>

              <p style={{ fontSize: '15px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '22px' }}>
                Para cuando el sobrepensamiento no te deja dormir, sientes que cargas con todo el mundo, te cuesta poner límites a tu familia sin sentir culpa o repites siempre los mismos patrones en tus relaciones.
              </p>

              <div style={{ fontSize: '13px', color: 'var(--color-plum-900)', background: 'var(--color-canvas)', padding: '10px 14px', borderRadius: '12px', marginBottom: '24px' }}>
                <strong>Metodología basada en evidencia:</strong> Terapia Cognitivo-Conductual (TCC) y Regulación Emocional (DBT)
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)' }}>
              <a
                href={whatsappIndividual}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Agendar primera conversación de 30 minutos sin costo para Terapia Individual vía WhatsApp"
                style={{ fontSize: '13.5px', padding: '10px 20px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={16} />
                <span>1ª conversación sin costo</span>
              </a>

              <a
                href="/terapia-individual"
                style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-clay-text, #8B3822)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Conocer la terapia individual →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
