import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function QuizTeaser() {
  return (
    <section className="section" style={{ paddingTop: '10px', paddingBottom: '50px' }}>
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, var(--color-surface) 0%, #FFFFFF 100%)',
            borderRadius: '28px',
            border: '1.5px solid var(--border-hairline)',
            padding: '44px 36px',
            boxShadow: 'var(--shadow-sm)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            alignItems: 'center',
            gap: '36px',
          }}
          className="quiz-teaser-grid"
        >
          {/* Left Column: Copy */}
          <div>
            <div
              className="pill-badge pill-badge-clay"
              style={{
                marginBottom: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--color-clay)' }} />
              <span>Autoevaluación Gratuita · 2 minutos</span>
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(24px, 3.2vw, 36px)',
                fontWeight: 600,
                color: 'var(--color-plum-900)',
                lineHeight: 1.25,
                marginBottom: '14px',
              }}
            >
              ¿No están seguros de por dónde comenzar?
            </h3>

            <p
              style={{
                fontSize: '15.5px',
                color: 'var(--color-ink-secondary)',
                lineHeight: 1.65,
                marginBottom: '20px',
                maxWidth: '540px',
              }}
            >
              Cada pareja vive una etapa distinta. Respondan 5 preguntas breves en nuestro test clínico interactivo y reciban una orientación personalizada sobre el abordaje terapéutico ideal para su situación.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: 'var(--color-ink-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-clay)' }} />
                <span>100% Confidencial y anónimo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-clay)' }} />
                <span>Sin registrar tarjeta</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-clay)' }} />
                <span>Recomendación inmediata</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card Button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                background: 'var(--color-plum-900)',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '32px 28px',
                width: '100%',
                maxWidth: '380px',
                textAlign: 'center',
                boxShadow: '0 16px 36px rgba(35, 18, 33, 0.16)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px',
                  color: 'var(--color-clay)',
                }}
              >
                <HeartHandshake size={28} />
              </div>

              <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
                Test Clínico de Pareja
              </div>

              <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, marginBottom: '22px' }}>
                Evalúa el nivel de desgaste, el motivo prioritario y la disposición de ambos miembros.
              </p>

              <a
                href="/tu-match"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '13px 20px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  borderRadius: 'var(--r-pill)',
                  textDecoration: 'none',
                  background: 'var(--color-clay)',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 18px rgba(169, 90, 65, 0.35)',
                }}
              >
                <span>Hacer el Test de Pareja (2 min)</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .quiz-teaser-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 28px !important;
            padding: 32px 24px !important;
          }
          .quiz-teaser-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .quiz-teaser-grid > div:first-child > div:last-child {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
