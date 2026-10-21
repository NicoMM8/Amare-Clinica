import React from 'react';
import { CheckCircle2, MessageCircle, Award, BookOpen, Calendar, UserCheck, ShieldCheck } from 'lucide-react';
import { AnimatedNumber } from './cojeev/AnimatedNumber';

export default function TheTeam() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera agendar la primera conversación de 30 minutos sin costo con el equipo de Centro Amaré.");

  return (
    <section className="section" id="equipo" style={{ background: 'var(--color-surface)', padding: '96px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="pill-badge" style={{ marginBottom: '18px' }}>
            <span>Respaldo Clínico Oficial · Registro JVPP N.º 47096 El Salvador</span>
          </div>

          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '18px', lineHeight: 1.25 }}>
            Equipo Clínico de Centro Amaré ·{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
              Dirección, Supervisión y Acompañamiento
            </span>
          </h2>

          <p style={{ fontSize: '17px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, margin: '0 auto 28px' }}>
            Hablar de tu relación o de tu vida emocional requiere confianza absoluta. En Centro Amaré no dejamos tu bienestar al azar: la <strong style={{ color: 'var(--color-plum-900)' }}>Mtra. Iris Alarcón</strong> supervisa cada protocolo clínico bajo estándares bioéticos, mientras que nuestro equipo de psicólogos colegiados —liderado en consulta activa por el <strong style={{ color: 'var(--color-plum-900)' }}>Lic. Ernesto Mejía</strong>— te acompaña con calidez humana y herramientas científicas claras.
          </p>

          {/* Animated Clinical Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '12px',
            background: 'var(--v-beige, #F4ECE4)',
            borderRadius: '18px',
            padding: '18px 16px',
            border: '1px solid var(--v-border, rgba(35, 18, 33, 0.08))',
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', color: 'var(--color-clay-text, #8B3822)', lineHeight: 1, fontWeight: 700 }}>
                <AnimatedNumber value={9} suffix="+" />
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-ink-secondary)', marginTop: '4px', fontWeight: 600 }}>
                Años de experiencia
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', color: 'var(--color-clay-text, #8B3822)', lineHeight: 1, fontWeight: 700 }}>
                <AnimatedNumber value={30} suffix=" min" />
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-ink-secondary)', marginTop: '4px', fontWeight: 600 }}>
                1ª conversación sin costo
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', color: 'var(--color-clay-text, #8B3822)', lineHeight: 1, fontWeight: 700 }}>
                <AnimatedNumber value={25} prefix="$" />
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-ink-secondary)', marginTop: '4px', fontWeight: 600 }}>
                USD / sesión en plan
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '19px', color: 'var(--color-clay-text, #8B3822)', lineHeight: 1, fontWeight: 700, letterSpacing: '0.02em' }}>
                N.º 47096
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-ink-secondary)', marginTop: '4px', fontWeight: 600 }}>
                Registro JVPP Oficial
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Team Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
          marginBottom: '40px'
        }} className="team-cards-grid">

          {/* Card 1: Iris Alarcón (Directora Clínica) */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-hairline)',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(35, 18, 33, 0.06)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              background: 'linear-gradient(150deg, var(--color-plum-900) 0%, var(--color-plum-700) 100%)',
              height: '140px',
              position: 'relative',
              padding: '16px'
            }}>
              <span style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                fontSize: '10.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '4px 10px',
                borderRadius: 'var(--r-pill)',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}>
                Dirección & Supervisión
              </span>

              <div style={{
                position: 'absolute',
                bottom: '-42px',
                left: '20px',
                width: '92px',
                height: '92px',
                borderRadius: '18px',
                border: '3px solid #FFFFFF',
                background: 'var(--color-canvas-subtle)',
                overflow: 'hidden',
                boxShadow: '0 6px 20px rgba(0,0,0,0.16)'
              }}>
                <picture>
                  <source srcSet="/images/iris-alarcon.webp" type="image/webp" />
                  <img
                    src="/images/iris-alarcon.jpg"
                    alt="Mtra. Iris Alarcón — Directora Clínica y Psicóloga Colegiada JVPP"
                    width="92"
                    height="92"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>

            <div style={{ padding: '54px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '21px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '4px' }}>
                Mtra. Iris Alarcón
              </h3>
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay-text, #8B3822)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                Directora Clínica · Fundadora
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: 'var(--color-plum-900)', background: 'var(--color-clay-subtle)', padding: '2px 8px', borderRadius: 'var(--r-pill)', width: 'fit-content', marginBottom: '14px' }}>
                <span>Registro JVPP N.º 47096</span>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                Máster en Terapia de Pareja y Sexología Clínica. Supervisa la formulación de cada caso clínico y garantiza el rigor bioético y científico de la clínica.
              </p>
              <a
                href="/iris-alarcon"
                style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-clay)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Ver credenciales y perfil →</span>
              </a>
            </div>
          </div>

          {/* Card 2: Lic. Ernesto Mejía (Terapeuta Activo Principal) */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '2px solid var(--color-clay-subtle)',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(158, 75, 51, 0.10)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}>
            <div style={{
              background: 'linear-gradient(150deg, #9E4B33 0%, #7A3622 100%)',
              height: '140px',
              position: 'relative',
              padding: '16px'
            }}>
              <span style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                fontSize: '10.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '4px 10px',
                borderRadius: 'var(--r-pill)',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}>
                Atención Clínica Activa
              </span>

              <div style={{
                position: 'absolute',
                bottom: '-42px',
                left: '20px',
                width: '92px',
                height: '92px',
                borderRadius: '18px',
                border: '3px solid #FFFFFF',
                background: 'var(--color-canvas-subtle)',
                overflow: 'hidden',
                boxShadow: '0 6px 20px rgba(0,0,0,0.16)'
              }}>
                <picture>
                  <source srcSet="/images/ernesto-mejia.webp" type="image/webp" />
                  <img
                    src="/images/ernesto-mejia.jpg"
                    alt="Lic. Ernesto Mejía — Psicólogo Clínico de Centro Amaré"
                    width="92"
                    height="92"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>

            <div style={{ padding: '54px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '21px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '4px' }}>
                Lic. Ernesto Mejía
              </h3>
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay-text, #8B3822)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                Psicólogo Clínico Colegiado
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: 'var(--color-plum-900)', background: 'var(--color-clay-subtle)', padding: '2px 8px', borderRadius: 'var(--r-pill)', width: 'fit-content', marginBottom: '14px' }}>
                <span>Acreditado JVPP El Salvador</span>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                Terapeuta de cabecera en Centro Amaré para sesiones online. Especializado en terapia vincular de parejas, gestión de conflictos y salud emocional individual.
              </p>
              <div style={{
                background: 'var(--color-canvas)',
                borderLeft: '3px solid var(--color-clay)',
                padding: '8px 12px',
                borderRadius: '0 8px 8px 0',
                fontSize: '12px',
                fontStyle: 'italic',
                color: 'var(--color-plum-900)',
                lineHeight: 1.5
              }}>
                "Un espacio de escucha empática para traducir reclamos en acuerdos duraderos."
              </div>
            </div>
          </div>

          {/* Card 3: Rafael Franco (Especialista Clínico) */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-hairline)',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(35, 18, 33, 0.06)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              background: 'linear-gradient(150deg, var(--color-plum-800) 0%, var(--color-plum-950) 100%)',
              height: '140px',
              position: 'relative',
              padding: '16px'
            }}>
              <span style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                fontSize: '10.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '4px 10px',
                borderRadius: 'var(--r-pill)',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}>
                Cuadro Clínico Especialista
              </span>

              <div style={{
                position: 'absolute',
                bottom: '-42px',
                left: '20px',
                width: '92px',
                height: '92px',
                borderRadius: '18px',
                border: '3px solid #FFFFFF',
                background: 'var(--color-clay-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 20px rgba(0,0,0,0.16)'
              }}>
                <span style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-clay)' }}>RF</span>
              </div>
            </div>

            <div style={{ padding: '54px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '21px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '4px' }}>
                Mtro. Rafael Franco
              </h3>
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay-text, #8B3822)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                Psicólogo Clínico · Psicoterapeuta
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: 'var(--color-plum-900)', background: 'var(--color-clay-subtle)', padding: '2px 8px', borderRadius: 'var(--r-pill)', width: 'fit-content', marginBottom: '14px' }}>
                <span>Acreditado JVPP El Salvador</span>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                Maestro en psicología clínica con sólida trayectoria en psicoterapia de adultos y procesos afectivos complejos, aportando rigor al cuadro interdisciplinar.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-ink-muted)' }}>
                <ShieldCheck size={14} style={{ color: 'var(--color-clay)' }} />
                <span>Interconsulta y asesoría clínica</span>
              </div>
            </div>
          </div>

        </div>

        {/* Coordination Banner (Damaris Choto) */}
        <div style={{
          background: 'var(--v-beige, #F4ECE4)',
          borderRadius: '24px',
          border: '1px solid var(--v-border, rgba(35, 18, 33, 0.10))',
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', maxWidth: '640px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: '#FFFFFF',
              border: '2px solid var(--color-clay-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Calendar size={26} style={{ color: 'var(--color-clay)' }} />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: 'var(--color-clay-text, #8B3822)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                <UserCheck size={13} />
                <span>Atención al Paciente & Agenda</span>
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-plum-900)', margin: '0 0 4px' }}>
                Damaris Choto · Coordinadora de Agenda
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.55, margin: 0 }}>
                Damaris te atenderá directamente por WhatsApp. Te ayudará a resolver dudas de horarios, tarifas y coordinará tu primera llamada de 30 minutos sin costo con el terapeuta clínico del equipo más adecuado para ustedes.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', gap: '10px', textDecoration: 'none', padding: '14px 24px', fontSize: '15px' }}
            >
              <MessageCircle size={18} />
              <span>Contactar con Coordinación de Agenda</span>
            </a>
            <span style={{ fontSize: '11.5px', color: 'var(--color-ink-muted)' }}>
              1ª conversación de 30 min sin costo ni compromiso
            </span>
          </div>
        </div>

      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 960px) {
          .team-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

