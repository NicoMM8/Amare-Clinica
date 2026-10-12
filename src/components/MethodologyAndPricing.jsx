import React from 'react';
import { Check, ShieldCheck, Clock, CreditCard, Sparkles, UserCheck, HeartHandshake, Compass, ArrowRight, Shield } from 'lucide-react';
import { HeroButton } from './cojeev/HeroButton';

const clinicalPhases = [
  {
    number: "1",
    tag: "Diagnóstico sin juicios",
    timeline: "Sesiones 1 a 3",
    title: "Evaluación y Mapa del Vínculo",
    description: "Analizamos en profundidad la historia de la pareja, las heridas previas y el ciclo exacto donde quedan atrapados al discutir. La psicóloga no busca culpables ni toma partido: mapea cómo funciona su relación.",
    result: "Mapa claro de qué alimenta el conflicto y hoja de ruta con objetivos compartidos."
  },
  {
    number: "2",
    tag: "Detener el desgaste",
    timeline: "Sesiones 4 a 8",
    title: "Desescalada y Regulación Emocional",
    description: "Entrenamos pautas inmediatas para frenar las discusiones circulares, los reproches automáticos y los silencios que distancian. Aprenden a expresar necesidades emocionales sin atacar ni ponerse a la defensiva.",
    result: "Disminución notable de la reactividad y recuperación de la calma en el hogar."
  },
  {
    number: "3",
    tag: "Intimidad y complicidad",
    timeline: "Sesiones 9 a 13",
    title: "Reconstrucción y Acuerdos Reales",
    description: "Abordamos los temas de fondo: afecto, sexualidad, corresponsabilidad cotidiana, límites familiares o reconstrucción de confianza tras crisis e infidelidades. Construimos acuerdos claros, equitativos y sostenibles.",
    result: "Recuperación de la complicidad y la certeza de volver a sentirse un equipo."
  },
  {
    number: "4",
    tag: "Autonomía sostenible",
    timeline: "Sesiones 14 a 16",
    title: "Consolidación y Alta Terapéutica",
    description: "Afianzamos las herramientas adquiridas, prevenimos recaídas ante futuras crisis o cambios de vida y cerramos el tratamiento. Nuestro compromiso ético es que sigan su camino sin depender de la terapia.",
    result: "Alta clínica definitiva y plena autonomía, con sesión de refuerzo a los 3 meses si la necesitan."
  }
];

export default function MethodologyAndPricing() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera agendar mi primera sesión de encuadre gratuita de 30 minutos en Centro Amaré.");

  return (
    <section className="section" id="honorarios">
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
          <div className="pill-badge pill-badge-clay" style={{ marginBottom: '14px' }}>
            <span>Metodología Clínica · Sin Improvisaciones</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px', lineHeight: 1.2 }}>
            Metodología clínica en 4 fases y precios accesibles en El Salvador
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
            No venimos a hablar sin rumbo ni a buscar culpables. Aplicamos protocolos clínicos basados en evidencia (Terapia Integral de Pareja + TCC) diseñados para desactivar el conflicto, reconstruir la intimidad y darles autonomía real.
          </p>
        </div>

        {/* 4 Clinical Phases Pathway */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '20px', 
          marginBottom: '40px' 
        }}>
          {clinicalPhases.map((phase, idx) => (
            <div 
              key={idx} 
              className="card-panel" 
              style={{ 
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#FFFFFF',
                position: 'relative'
              }}
            >
              <div>
                {/* Header row with step number and timeline */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '38px', 
                    height: '38px', 
                    borderRadius: '12px', 
                    background: 'var(--color-plum-900)', 
                    color: '#fff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontWeight: 700, 
                    fontSize: '16px',
                    boxShadow: '0 4px 10px rgba(34, 40, 74, 0.2)'
                  }}>
                    {phase.number}
                  </div>
                  <span style={{ 
                    fontSize: '12px', 
                    fontWeight: 700, 
                    color: 'var(--color-clay)', 
                    background: 'var(--color-clay-subtle)',
                    padding: '4px 10px',
                    borderRadius: 'var(--r-pill)',
                    letterSpacing: '0.02em'
                  }}>
                    {phase.timeline}
                  </span>
                </div>

                <div style={{ fontSize: '11.5px', fontWeight: 600, color: 'var(--color-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  {phase.tag}
                </div>

                <h3 style={{ fontSize: '18.5px', marginBottom: '12px', color: 'var(--color-plum-900)', lineHeight: 1.3 }}>
                  {phase.title}
                </h3>

                <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {phase.description}
                </p>
              </div>

              {/* Tangible outcome box (Psiky Brand standard) */}
              <div style={{
                background: 'var(--color-canvas)',
                padding: '12px 14px',
                borderRadius: 'var(--r-md)',
                borderLeft: '3px solid var(--color-clay)',
                fontSize: '12.5px',
                lineHeight: 1.5,
                color: 'var(--color-plum-900)'
              }}>
                <strong style={{ display: 'block', color: 'var(--color-clay)', marginBottom: '2px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Resultado esperado:
                </strong>
                {phase.result}
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Guarantees Strip (Micro-confianza) */}
        <div style={{
          background: 'var(--color-surface)',
          borderRadius: 'var(--r-2xl)',
          padding: '24px 32px',
          border: '1px solid var(--border-hairline)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          marginBottom: '56px',
          boxShadow: 'var(--shadow-xs)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--color-clay-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Shield size={18} style={{ color: 'var(--color-clay)' }} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-plum-900)', marginBottom: '3px' }}>
                Espacio neutral e imparcial
              </strong>
              <span style={{ fontSize: '13px', color: 'var(--color-ink-secondary)', lineHeight: 1.5 }}>
                La psicóloga nunca toma bandos. Es una mediadora científica para sanar el vínculo.
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--color-clay-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Sparkles size={18} style={{ color: 'var(--color-clay)' }} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-plum-900)', marginBottom: '3px' }}>
                1ª Sesión de 30 min sin costo
              </strong>
              <span style={{ fontSize: '13px', color: 'var(--color-ink-secondary)', lineHeight: 1.5 }}>
                Conocen a su psicóloga y evalúan la química profesional antes de cualquier compromiso.
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--color-clay-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Clock size={18} style={{ color: 'var(--color-clay)' }} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-plum-900)', marginBottom: '3px' }}>
                Flexibilidad horaria real
              </strong>
              <span style={{ fontSize: '13px', color: 'var(--color-ink-secondary)', lineHeight: 1.5 }}>
                Google Meet privado con horarios adaptados a El Salvador, EE.UU., Canadá y Europa.
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Card Section */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="pricing-card">
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="pricing-badge-popular">Plan mensual transparente</span>
                <h3 className="font-serif" style={{ fontSize: '28px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  Plan Mensual Cómodo y Accesible
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-ink-secondary)', maxWidth: '480px' }}>
                  Para que la inversión nunca frene su proceso terapéutico, ofrecemos una cuota mensual fija y predecible:
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div className="price-display" style={{ justifyContent: 'flex-end', margin: '0 0 4px' }}>
                  <span className="price-currency">$</span>
                  <span className="price-amount">100</span>
                  <span className="price-frequency">USD / mes</span>
                </div>
                <span style={{ fontSize: '12.5px', color: 'var(--color-clay)', fontWeight: 600 }}>
                  Hasta 4 sesiones al mes ($25/sesión)
                </span>
              </div>
            </div>

            <div style={{ 
              background: 'var(--color-canvas)', 
              borderRadius: 'var(--r-xl)', 
              padding: '20px 24px', 
              margin: '28px 0', 
              border: '1px solid var(--border-hairline)'
            }}>
              <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--color-plum-900)', marginBottom: '6px' }}>
                ¿Cómo funciona el plan mensual?:
              </strong>
              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', margin: 0, lineHeight: 1.6 }}>
                Por <strong>$100 USD al mes</strong> reciben hasta 4 sesiones terapéuticas (una sesión semanal de 50 a 60 minutos por Google Meet), lo que equivale a solo <strong>$25 USD por sesión</strong>. Se abona mes a mes durante el tiempo que dure el acompañamiento. <strong>Sin permanencia mínima ni deudas posteriores:</strong> pausan o cierran el proceso cuando consideren oportuno.
              </p>
            </div>

            {/* Checklist of what is included */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                <Check size={18} style={{ color: 'var(--color-clay)' }} />
                <span>1ª Sesión de 30 min sin costo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                <Check size={18} style={{ color: 'var(--color-clay)' }} />
                <span>Hasta 4 sesiones mensuales de 50-60 min</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                <Check size={18} style={{ color: 'var(--color-clay)' }} />
                <span>Pautas y ejercicios prácticos entre sesiones</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                <Check size={18} style={{ color: 'var(--color-clay)' }} />
                <span>Coordinación ágil y directa con asistente</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                <Check size={18} style={{ color: 'var(--color-clay)' }} />
                <span>Pago seguro internacional (tarjeta o transferencia)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                <Check size={18} style={{ color: 'var(--color-clay)' }} />
                <span>Sin permanencia: pausan o terminan cuando quieran</span>
              </div>
            </div>

            {/* Main Action */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <HeroButton
                appearance="paper-fold"
                variant="clay"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Agendar sesión inicial gratuita (30 min)</span>
              </HeroButton>

              <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>
                Coordinación directa por WhatsApp · Google Meet privado
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
