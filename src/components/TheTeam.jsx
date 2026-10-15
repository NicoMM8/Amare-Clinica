import React from 'react';
import { CheckCircle2, MessageCircle, Award, BookOpen } from 'lucide-react';
import { AnimatedNumber } from './cojeev/AnimatedNumber';

export default function TheTeam() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola Iris, quisiera hablar contigo en una primera conversación de 30 min sin costo.");

  return (
    <section className="section" id="equipo" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        
        {/* Two-column layout: text + card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center'
        }}
          className="team-layout-grid"
        >

          {/* Left: Header + credentials */}
          <div>
            <div className="pill-badge" style={{ marginBottom: '20px' }}>
              <span>Respaldo Clínico Oficial · Registro JVPP El Salvador</span>
            </div>

            <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', marginBottom: '20px', lineHeight: 1.25 }}>
              Conoce a Iris Alarcón ·{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                Psicóloga Clínica y Terapeuta de Pareja
              </span>
            </h2>

            <p style={{ fontSize: '17px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              Hablar de tu relación o de tu vida íntima requiere confianza. Soy Iris Alarcón, psicóloga clínica salvadoreña colegiada ante la Junta de Vigilancia de la Profesión en Psicología (JVPP). Mi trabajo no es hacer de juez ni decirte quién tiene la razón, sino darles un espacio seguro y herramientas científicas claras para que vuelvan a escucharse.
            </p>

            {/* 000h Animated Clinical Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(72px, 1fr))',
              gap: '10px',
              background: 'var(--v-beige, #F4ECE4)',
              borderRadius: '16px',
              padding: '16px 14px',
              marginBottom: '28px',
              border: '1px solid var(--v-border, rgba(35, 18, 33, 0.08))'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px', color: 'var(--color-clay)', lineHeight: 1 }}>
                  <AnimatedNumber value={9} suffix="+" />
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-ink-secondary)', marginTop: '4px', fontWeight: 600 }}>
                  Años experiencia
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px', color: 'var(--color-clay)', lineHeight: 1 }}>
                  <AnimatedNumber value={30} suffix="m" />
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-ink-secondary)', marginTop: '4px', fontWeight: 600 }}>
                  1ª charla gratis
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px', color: 'var(--color-clay)', lineHeight: 1 }}>
                  <AnimatedNumber value={25} prefix="$" />
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-ink-secondary)', marginTop: '4px', fontWeight: 600 }}>
                  USD / sesión
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px', color: 'var(--color-clay)', lineHeight: 1 }}>
                  <AnimatedNumber value={100} suffix="%" />
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-ink-secondary)', marginTop: '4px', fontWeight: 600 }}>
                  Confidencial
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                { icon: Award, text: 'Máster en Terapia de Pareja y Sexología Clínica' },
                { icon: BookOpen, text: 'Licenciada en Psicología Clínica · Colegiada JVPP El Salvador' },
                { icon: CheckCircle2, text: 'Más de 9 años acompañando a adultos y parejas en consulta privada' },
                { icon: CheckCircle2, text: 'Atención online para El Salvador y salvadoreños en EE. UU., Canadá y Europa' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--color-clay-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={16} style={{ color: 'var(--color-clay)' }} />
                  </div>
                  <span style={{ fontSize: '14.5px', color: 'var(--color-ink-primary)', lineHeight: 1.5, paddingTop: '6px' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', gap: '10px', textDecoration: 'none' }}
                >
                  <MessageCircle size={18} />
                  <span>Hablar con Iris (1ª conversación sin costo)</span>
                </a>

                <a
                  href="/iris-alarcon"
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-clay)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Ver perfil y credenciales completas →</span>
                </a>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--color-ink-muted)' }}>
                ✨ 30 minutos sin costo · Coordinación humana directa por WhatsApp
              </span>
            </div>
          </div>

          {/* Right: Profile Card */}
          <div>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              border: '1px solid var(--border-hairline)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(35, 18, 33, 0.10)',
            }}>

              {/* Photo header */}
              <div style={{
                background: 'linear-gradient(150deg, var(--color-plum-900) 0%, var(--color-plum-700) 100%)',
                height: '220px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                padding: '20px',
              }}>
                {/* Badge Dirección Clínica */}
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '5px 12px',
                  borderRadius: 'var(--r-pill)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  Directora Clínica
                </span>

                {/* Photo */}
                <div style={{
                  position: 'absolute',
                  bottom: '-48px',
                  left: '32px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '20px',
                  border: '4px solid #FFFFFF',
                  background: 'var(--color-canvas-subtle)',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                }}>
                  <picture>
                    <source srcSet="/images/hero-therapist-480.webp" type="image/webp" />
                    <img
                      src="/images/hero-therapist-480.webp"
                      alt="Dirección Clínica — Centro Amaré Psicoterapia"
                      width="120"
                      height="120"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '64px 32px 32px' }}>
                <h3 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '4px' }}>
                  Iris Alarcón
                </h3>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                  Psicóloga Clínica · Máster en Pareja y Sexología
                </p>

                <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                  Con más de 9 años de experiencia en consulta clínica privada. Especializada en Terapia Cognitivo Conductual y abordaje integral para parejas salvadoreñas. Te ayudo a dejar de sobrevivir y empezar a vivir.
                </p>

                {/* Quote */}
                <div style={{
                  background: 'var(--color-canvas)',
                  borderLeft: '3px solid var(--color-clay)',
                  padding: '14px 18px',
                  borderRadius: '0 var(--r-md) var(--r-md) 0',
                  fontSize: '13.5px',
                  fontStyle: 'italic',
                  color: 'var(--color-plum-900)',
                  lineHeight: 1.6
                }}>
                  "Ir a terapia no es que te digan qué hacer con tu vida. Es entender por qué repites ciertos caminos y tener herramientas reales para elegir distinto."
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Responsive styles via inline media query workaround */}
      <style>{`
        @media (max-width: 900px) {
          .team-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>

    </section>
  );
}
