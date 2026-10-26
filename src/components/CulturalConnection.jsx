import React from 'react';
import { Globe, Heart, ShieldAlert, Sparkles, Check, X } from 'lucide-react';

export default function CulturalConnection() {
  return (
    <section className="section" id="pertenencia" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <div className="pill-badge" style={{ marginBottom: '16px' }}>
            <Globe size={14} style={{ color: 'var(--color-clay)' }} />
            <span>Pertenencia e Identidad Cultural</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '18px', color: 'var(--color-plum-900)' }}>
            Hablamos tu idioma. Y también entendemos tu contexto.
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--color-ink-secondary)', margin: 0 }}>
            Quienes hemos crecido en El Salvador tenemos códigos familiares, formas de querer y silencios que no siempre se entienden desde fuera.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid-2">
          
          {/* Tarjeta 1: Terapia en el extranjero */}
          <div className="comparison-card comparison-negative">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-plum-800)', marginBottom: '16px' }}>
              <ShieldAlert size={20} />
              <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Hacer terapia en otro idioma o cultura
              </span>
            </div>

            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-ink-primary)' }}>
              El cansancio de tener que explicarlo todo
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: 'var(--color-ink-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <X size={18} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                <span>Tener que traducir lo que sientes o buscar palabras neutras porque en otro idioma tus emociones no suenan igual.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <X size={18} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                <span>Invertir media sesión explicando cómo es tu familia en El Salvador, la culpa por estar lejos o el peso de salir adelante fuera.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <X size={18} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                <span>Consultas privadas en EE. UU., Canadá o Europa de $150 a $250 USD por sesión que obligan a abandonar el proceso a la mitad.</span>
              </li>
            </ul>
          </div>

          {/* Tarjeta 2: Centro Amaré */}
          <div className="comparison-card comparison-positive">
            <span className="positive-pill-tag">El Enfoque Amaré</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-clay)', marginBottom: '16px' }}>
              <Sparkles size={20} />
              <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                El Enfoque de Centro Amaré
              </span>
            </div>

            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-plum-900)' }}>
              Terapia salvadoreña con rigor científico
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: 'var(--color-ink-primary)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Check size={18} style={{ color: '#1B873F', flexShrink: 0, marginTop: '2px' }} />
                <span>Hablas como hablas en casa: sin filtros, con tus expresiones y con alguien que entiende de dónde vienes desde el primer minuto.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Check size={18} style={{ color: '#1B873F', flexShrink: 0, marginTop: '2px' }} />
                <span>Pensado para parejas dentro y fuera del país: se conectan al mismo enlace de Google Meet, vivan juntos o en husos horarios distintos.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Check size={18} style={{ color: '#1B873F', flexShrink: 0, marginTop: '2px' }} />
                <span>Un costo justo para sostener tu proceso: Planes mensuales accesibles adaptados a tu país y sin contratos de permanencia.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
