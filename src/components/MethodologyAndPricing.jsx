import React from 'react';
import { Check, Clock, Sparkles, Shield, FileText } from 'lucide-react';
import { HeroButton } from './cojeev/HeroButton';
import { PaymentMethodBadges } from './PaymentLogos';

const clinicalPhases = [
  {
    number: "1",
    tag: "Entender qué está pasando",
    timeline: "Sesiones 1 a 3",
    title: "Escuchar a ambos sin buscar culpables",
    description: "Conocemos su historia y detectamos exactamente en qué punto se estancan cuando discuten. Aquí nadie viene a recibir regaños: venimos a entender por qué duele.",
    result: "Claridad sobre la dinámica de conflicto y mapa de trabajo conjunto sin juzgar."
  },
  {
    number: "2",
    tag: "Bajar la tensión en casa",
    timeline: "Sesiones 4 a 8",
    title: "Frenar las peleas circulares y el silencio",
    description: "Se llevan herramientas prácticas desde el primer mes para hablar de lo difícil sin herirse, calmar la ansiedad y detener las discusiones antes de que escalen.",
    result: "Disminución inmediata de la reactividad y regreso de la calma cotidiana."
  },
  {
    number: "3",
    tag: "Volver a encontrarse",
    timeline: "Sesiones 9 a 13",
    title: "Acuerdos reales, intimidad y confianza",
    description: "Vamos a la raíz: sexualidad, reparto de cargas, límites con las familias o cómo sanar heridas pasadas. Construimos acuerdos reales que sí puedan cumplir en su día a día.",
    result: "Reconexión afectiva, intimidad segura y acuerdos duraderos que sí se cumplen."
  },
  {
    number: "4",
    tag: "Seguir solos como equipo",
    timeline: "Sesiones 14 a 16",
    title: "Cierre del proceso y autonomía",
    description: "Nuestra meta no es que se queden en terapia toda la vida. Cuando ya tienen las herramientas y la calma de vuelta, cerramos el proceso. Y a los 3 meses tienen una sesión de refuerzo incluida por si la necesitan.",
    result: "Autonomía completa y tranquilidad, con sesión de refuerzo a los 3 meses."
  }
];

export default function MethodologyAndPricing() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiéramos empezar con una primera conversación de 30 min sin costo con el equipo de Centro Amaré.");

  return (
    <section className="section" id="honorarios">
      <div className="container">
        
        {/* ── SECCIÓN 4: METODOLOGÍA Y AUTORIDAD CLÍNICA ── */}
        <div style={{ textAlign: 'center', maxWidth: '1120px', margin: '0 auto 48px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="pill-badge pill-badge-clay" style={{ marginBottom: '14px' }}>
              <span>Ciencia con trato humano</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px', lineHeight: 1.25, color: 'var(--color-plum-900)' }}>
              Cómo trabajamos: Psicología con base científica, explicada con claridad
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-ink-secondary)', lineHeight: 1.65, marginBottom: '28px' }}>
              Sin promesas mágicas ni palabras raras. Sabrás qué estamos trabajando en cada etapa para que avances a tu propio ritmo:
            </p>
          </div>

          {/* 4 Core Pillars of Clinical Evidence en 1 sola fila de 4 columnas */}
          <div className="methodology-pillars-grid">
            <div style={{ background: '#FFFFFF', padding: '20px 18px', borderRadius: 'var(--r-xl)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
              <strong style={{ display: 'block', color: 'var(--color-plum-900)', fontSize: '14.5px', marginBottom: '8px' }}>
                Terapia Integral de Pareja (IBCT)
              </strong>
              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
                Para salir de las peleas repetitivas, volver a escucharse y reconstruir el afecto.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '20px 18px', borderRadius: 'var(--r-xl)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
              <strong style={{ display: 'block', color: 'var(--color-plum-900)', fontSize: '14.5px', marginBottom: '8px' }}>
                Terapia Cognitivo-Conductual (TCC)
              </strong>
              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
                Herramientas prácticas para calmar la ansiedad, el insomnio y los pensamientos que no se apagan.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '20px 18px', borderRadius: 'var(--r-xl)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
              <strong style={{ display: 'block', color: 'var(--color-plum-900)', fontSize: '14.5px', marginBottom: '8px' }}>
                Terapia Dialéctico-Conductual (DBT)
              </strong>
              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
                Para aprender a regular emociones intensas, bajar la tensión y hablar sin herirse.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '20px 18px', borderRadius: 'var(--r-xl)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
              <strong style={{ display: 'block', color: 'var(--color-plum-900)', fontSize: '14.5px', marginBottom: '8px' }}>
                Enfoque Humanista
              </strong>
              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
                Porque detrás de cada pantalla siempre hay una persona real que te escucha con calidez y sin juzgar.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Clinical Phases Pathway (Compacto, sin cajitas de resultado para ahorrar altura) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '20px', 
          marginBottom: '40px' 
        }}>
          {clinicalPhases.map((phase, idx) => (
            <div 
              key={idx} 
              className="card-panel" 
              style={{ 
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                background: '#FFFFFF',
                position: 'relative'
              }}
            >
              {/* Header row with step number and timeline */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '10px', 
                  background: 'var(--color-plum-900)', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 700, 
                  fontSize: '15px',
                  boxShadow: '0 4px 10px rgba(34, 40, 74, 0.2)'
                }}>
                  {phase.number}
                </div>
                <span style={{ 
                  fontSize: '11.5px', 
                  fontWeight: 700, 
                  color: 'var(--color-clay-text, #8B3822)', 
                  background: 'var(--color-clay-subtle)',
                  padding: '3px 9px',
                  borderRadius: 'var(--r-pill)',
                  letterSpacing: '0.02em'
                }}>
                  {phase.timeline}
                </span>
              </div>

              <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                {phase.tag}
              </div>

              <h3 style={{ fontSize: '17px', marginBottom: '10px', color: 'var(--color-plum-900)', lineHeight: 1.3 }}>
                {phase.title}
              </h3>

              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.55, margin: 0 }}>
                {phase.description}
              </p>
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
                Nuestro equipo clínico nunca toma bandos. Actuamos como mediadores científicos para desactivar el conflicto y sanar el vínculo.
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
                Conocen a su terapeuta especialista y evalúan la química profesional antes de asumir cualquier compromiso.
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
                Sesiones privadas por Google Meet con horarios adaptados a El Salvador, EE. UU., Canadá y Europa (incluyendo tardes y fines de semana).
              </span>
            </div>
          </div>
        </div>

        {/* ── SECCIÓN 6: TABLA COMPARATIVA Y HONORARIOS (GEO & FEATURED SNIPPETS) ── */}
        <div style={{ maxWidth: '1180px', margin: '0 auto 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="pill-badge pill-badge-clay" style={{ marginBottom: '12px' }}>
              <span>Transparencia Total · Sin Letra Pequeña</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
              Honorarios y modalidades de atención psicológica
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)', maxWidth: '640px', margin: '0 auto' }}>
              Tarifas claras en dólares estadounidenses (USD) para quienes viven en El Salvador o en el exterior:
            </p>
          </div>

          {/* 2-Column Desktop Grid: Tabla Comparativa + Plan Mensual $100 */}
          <div className="pricing-dual-grid">
            
            {/* Columna Izquierda: Tabla Estructurada para Google Featured Snippets y Motores de IA */}
            <div style={{ 
              overflowX: 'auto', 
              background: '#FFFFFF', 
              borderRadius: '24px', 
              border: '1px solid var(--border-subtle)', 
              boxShadow: 'var(--shadow-sm)', 
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--color-plum-900)', marginBottom: '16px' }}>
                  Modalidades de consulta
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border-subtle)' }}>
                      <th style={{ padding: '12px 14px', color: 'var(--color-plum-900)', fontSize: '13.5px', fontWeight: 700 }}>Modalidad</th>
                      <th style={{ padding: '12px 14px', color: 'var(--color-plum-900)', fontSize: '13.5px', fontWeight: 700 }}>Duración</th>
                      <th style={{ padding: '12px 14px', color: 'var(--color-plum-900)', fontSize: '13.5px', fontWeight: 700 }}>Inversión</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                    <tr style={{ borderBottom: '1px solid var(--border-hairline)' }}>
                      <td style={{ padding: '14px', color: 'var(--color-plum-900)', fontWeight: 600 }}>
                        1ª conversación exploratoria
                        <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-ink-muted)', fontWeight: 400 }}>
                          Conocernos, evaluar tu caso y trazar un plan
                        </span>
                      </td>
                      <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>30 min</td>
                      <td style={{ padding: '14px' }}>
                        <span style={{ color: '#166534', fontWeight: 700, background: 'rgba(22, 101, 52, 0.12)', padding: '4px 10px', borderRadius: 'var(--r-pill)', display: 'inline-block', fontSize: '12px' }}>
                          Sin costo ($0)
                        </span>
                      </td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--border-hairline)' }}>
                      <td style={{ padding: '14px', color: 'var(--color-plum-900)', fontWeight: 600 }}>
                        Terapia de Pareja Online
                        <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-ink-muted)', fontWeight: 400 }}>
                          Ambos en videollamada privada
                        </span>
                      </td>
                      <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>50 - 60 min</td>
                      <td style={{ padding: '14px' }}>
                        <span style={{ fontWeight: 700, color: 'var(--color-plum-900)', fontSize: '14px' }}>$25 USD por sesión</span>
                        <span style={{ display: 'block', fontSize: '11.5px', color: 'var(--color-ink-muted)' }}>
                          en plan mensual ($100/mes)
                        </span>
                      </td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--border-hairline)' }}>
                      <td style={{ padding: '14px', color: 'var(--color-plum-900)', fontWeight: 600 }}>
                        Terapia Individual Online
                        <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-ink-muted)', fontWeight: 400 }}>
                          1 a 1 personalizada con tareas
                        </span>
                      </td>
                      <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>50 min</td>
                      <td style={{ padding: '14px' }}>
                        <span style={{ fontWeight: 700, color: 'var(--color-plum-900)', fontSize: '14px' }}>Tarifa fija ($25/sesión)</span>
                        <span style={{ display: 'block', fontSize: '11.5px', color: 'var(--color-ink-muted)' }}>
                          en plan mensual ($100/mes)
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: '14px', color: 'var(--color-plum-900)', fontWeight: 600 }}>
                        Sesión de Refuerzo Post-Proceso
                        <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-ink-muted)', fontWeight: 400 }}>
                          Seguimiento a los 3 meses
                        </span>
                      </td>
                      <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>50 min</td>
                      <td style={{ padding: '14px' }}>
                        <span style={{ color: 'var(--color-clay-text, #8B3822)', fontWeight: 600, background: 'var(--color-clay-subtle)', padding: '4px 10px', borderRadius: 'var(--r-pill)', display: 'inline-block', fontSize: '12px' }}>
                          Incluida en plan
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)', fontSize: '12.5px', color: 'var(--color-ink-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={16} style={{ color: 'var(--color-clay)', flexShrink: 0 }} />
                <span>Precios en USD para El Salvador, Estados Unidos, Canadá y Europa.</span>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Plan Mensual $100 USD */}
            <div className="pricing-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '14px' }}>
                  <div>
                    <span className="pricing-badge-popular">Plan mensual transparente</span>
                    <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginTop: '4px', marginBottom: '6px' }}>
                      Plan Mensual Cómodo y Accesible
                    </h3>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div className="price-display" style={{ justifyContent: 'flex-end', margin: '0 0 2px' }}>
                      <span className="price-currency" style={{ fontSize: '22px' }}>$</span>
                      <span className="price-amount" style={{ fontSize: '44px' }}>100</span>
                      <span className="price-frequency" style={{ fontSize: '13px' }}>USD / mes</span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--color-clay)', fontWeight: 600 }}>
                      Hasta 4 sesiones ($25/sesión)
                    </span>
                  </div>
                </div>

                <div style={{ 
                  background: 'var(--color-canvas)', 
                  borderRadius: 'var(--r-lg)', 
                  padding: '14px 18px', 
                  marginBottom: '16px', 
                  border: '1px solid var(--border-hairline)'
                }}>
                  <p style={{ fontSize: '13px', color: 'var(--color-ink-secondary)', margin: 0, lineHeight: 1.55 }}>
                    <strong>Misma tarifa para Pareja o Individual:</strong> $100 USD al mes incluye hasta 4 sesiones semanales de 50 a 60 minutos por Google Meet ($25/sesión). Sin recargo adicional para terapia de pareja y sin permanencia: pausan o terminan cuando quieran.
                  </p>
                </div>

                {/* Línea tranquilizadora sobre los 30 min sin costo */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: 'var(--r-lg)',
                  padding: '12px 16px',
                  marginBottom: '18px',
                  border: '1px dashed var(--color-clay-border)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}>
                  <Sparkles size={16} style={{ color: 'var(--color-clay)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontSize: '12.5px', color: 'var(--color-ink-secondary)', margin: 0, lineHeight: 1.5 }}>
                      <strong>¿Qué pasa en esos primeros 30 minutos?</strong> No tienen que contarlo todo de golpe. Nos conocemos por Google Meet, nos cuentan brevemente qué les preocupa, resolvemos sus dudas y vemos si hacen "clic" con el terapeuta de nuestro equipo asignado a su caso antes de decidir empezar.
                    </p>
                    <p style={{ fontSize: '12.5px', color: 'var(--color-ink-secondary)', margin: '8px 0 0 0', lineHeight: 1.5 }}>
                      <strong>¿Cómo funciona el pago del Plan Mensual ($100 USD)?</strong> Incluye tus 4 sesiones del mes ($25 USD por sesión), ya sea en modalidad de pareja o individual. Puedes abonarlo de forma segura desde El Salvador o el exterior (tarjeta o transferencia local sin comisiones de remesa), o consultar con coordinación la tarifa por sesión individual suelta si prefieres avanzar quincenalmente.
                    </p>
                  </div>
                </div>

                {/* Checklist */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-ink-primary)' }}>
                    <Check size={16} style={{ color: 'var(--color-clay)', flexShrink: 0 }} />
                    <span>1ª conversación sin costo</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-ink-primary)' }}>
                    <Check size={16} style={{ color: 'var(--color-clay)', flexShrink: 0 }} />
                    <span>Válido para Parejas o Individual</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-ink-primary)' }}>
                    <Check size={16} style={{ color: 'var(--color-clay)', flexShrink: 0 }} />
                    <span>Ejercicios clínicos entre sesiones</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-ink-primary)' }}>
                    <Check size={16} style={{ color: 'var(--color-clay)', flexShrink: 0 }} />
                    <span>Sin permanencia: pausan libremente</span>
                  </div>
                </div>

                {/* Métodos de Pago Internacionales (Logos Reales) */}
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ display: 'block', fontSize: '11.5px', fontWeight: 600, color: 'var(--color-ink-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Pagos directos sin comisiones de remesa:
                  </span>
                  <PaymentMethodBadges compact={false} />
                </div>
              </div>

              {/* Main Action */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Escríbenos por WhatsApp</span>
                </HeroButton>

                <span style={{ fontSize: '12px', color: 'var(--color-ink-muted)' }}>
                  Coordinación directa por WhatsApp
                </span>
              </div>
            </div>

          </div>

          {/* Facturación Oficial y Reembolso de Seguro Médico */}
          <div style={{
            marginTop: '28px',
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '24px 28px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-xs)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', maxWidth: '820px' }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '12px', 
                background: 'var(--color-clay-subtle)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <FileText size={22} style={{ color: 'var(--color-clay)' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                    Factura Médica con Registro JVPP para Reembolso de Seguro
                  </h3>
                  <span style={{ 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    color: '#166534', 
                    background: 'rgba(22, 101, 52, 0.12)', 
                    padding: '3px 9px', 
                    borderRadius: 'var(--r-pill)' 
                  }}>
                    Válido en El Salvador, EE. UU. y Canadá
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.55 }}>
                  Emitimos factura y recibos clínicos detallados con número de colegiación sanitaria oficial ante la Junta de Vigilancia de la Profesión en Psicología de El Salvador (<strong>JVPP N.º 6380</strong>). Si cuentas con póliza privada en El Salvador o seguro internacional en EE. UU. o Canadá con cobertura ambulatoria o beneficios fuera de red (<em>out-of-network / superbills</em>), podrás solicitar tu reintegro directamente con tu aseguradora.
                </p>
              </div>
            </div>
            
            <a
              href="https://wa.me/50373184781?text=Hola,%20quisiera%20consultar%20sobre%20la%20facturaci%C3%B3n%20para%20el%20reembolso%20de%20mi%20seguro%20m%C3%A9dico."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '13px', padding: '10px 18px', whiteSpace: 'nowrap' }}
            >
              Consultar por tu seguro →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
