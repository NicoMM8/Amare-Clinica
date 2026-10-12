import React from 'react';
import { Globe, Heart, ShieldAlert, Sparkles, Check, X } from 'lucide-react';

export default function CulturalConnection() {
  return (
    <section className="section" id="pertenencia" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <div className="pill-badge" style={{ marginBottom: '16px' }}>
            <Globe size={14} style={{ color: 'var(--color-clay)' }} />
            <span>Pertenencia e Identidad Cultural</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '18px' }}>
            La cultura no es un detalle secundario: es el idioma en el que sienten tus emociones.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--color-ink-secondary)' }}>
            Vivir en Montreal, Los Ángeles, Washington o Madrid implica un esfuerzo diario de adaptación que desgasta. 
            Cuando buscas terapia, lo último que necesitas es invertir la mitad de tu sesión explicando el contexto salvadoreño, 
            el valor de la familia extendida o la culpa de haber migrado.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid-2">
          
          {/* Tarjeta 1: Terapia en el extranjero */}
          <div className="comparison-card comparison-negative">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-ink-muted)', marginBottom: '16px' }}>
              <ShieldAlert size={20} />
              <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Hacer terapia con un profesional extranjero
              </span>
            </div>

            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-ink-primary)' }}>
              La barrera invisible del contexto
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: 'var(--color-ink-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <X size={18} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                <span>Tienes que traducir tus emociones o buscar palabras en otro idioma que no transmiten la misma profundidad.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <X size={18} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                <span>Poco entendimiento de las dinámicas familiares de El Salvador, el esfuerzo del migrante o los modismos culturales.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <X size={18} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                <span>Costos excesivos en Norteamérica o Europa ($150 - $250 USD por sesión) que hacen inviable sostener el proceso completo.</span>
              </li>
            </ul>
          </div>

          {/* Tarjeta 2: Centro Amaré */}
          <div className="comparison-card comparison-positive">
            <span className="positive-pill-tag">El Enfoque Amaré</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-clay)', marginBottom: '16px' }}>
              <Sparkles size={20} />
              <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Tu terapeuta salvadoreño/a en línea
              </span>
            </div>

            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-plum-900)' }}>
              Mismo código cultural, máximo rigor científico
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: 'var(--color-ink-primary)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Check size={18} style={{ color: '#1B873F', flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Hablamos tu mismo idioma sin filtros:</strong> Te expresas con naturalidad y con los matices propios de nuestra tierra.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Check size={18} style={{ color: '#1B873F', flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Especial para parejas transnacionales:</strong> Sesiones simultáneas por Google Meet aunque uno esté en Montreal y el otro en San Salvador.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Check size={18} style={{ color: '#1B873F', flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Tarifa mensual accesible:</strong> Plan mensual de $100 USD (hasta 4 sesiones al mes) para que el costo nunca sea una barrera para tu salud mental.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
