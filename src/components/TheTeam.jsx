import React from 'react';
import { Check, CheckCircle2, MessageCircle, Award, BookOpen, Calendar, UserCheck, ShieldCheck } from 'lucide-react';
import { AnimatedNumber } from './cojeev/AnimatedNumber';

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.71 14.81 12.13 15.86C14.15 16.73 14.56 16.55 15 16.51C15.44 16.47 16.41 15.94 16.61 15.36C16.82 14.79 16.82 14.3 16.76 14.2C16.7 14.1 16.53 14.04 16.28 13.91C16.03 13.79 14.8 13.18 14.57 13.1C14.34 13.01 14.18 12.97 14.01 13.22C13.85 13.47 13.38 14.02 13.24 14.18C13.1 14.34 12.96 14.36 12.71 14.24C12.46 14.12 11.66 13.85 10.71 13C9.97 12.34 9.47 11.53 9.33 11.28C9.18 11.03 9.31 10.9 9.44 10.77C9.55 10.66 9.69 10.48 9.81 10.33C9.94 10.19 9.98 10.08 10.06 9.92C10.14 9.75 10.1 9.61 10.04 9.49C9.98 9.36 9.5 8.18 9.3 7.69C9.1 7.21 8.9 7.27 8.75 7.26L8.53 7.33Z" />
    </svg>
  );
}

export default function TheTeam() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera agendar la primera conversación de 30 minutos sin costo con el equipo de Centro Amaré.");
  const irisWhatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría consultar la disponibilidad de la Mtra. Iris Alarcón en Centro Amaré.");
  const ernestoWhatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría agendar la primera sesión de terapia con el Lic. Ernesto Mejía en Centro Amaré.");
  const rafaelWhatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría agendar una consulta con el Mtro. Rafael Franco en Centro Amaré.");

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
          <div className="team-pro-card">
            <div className="team-pro-img-container">
              <span className="team-pro-badge team-pro-badge--clay">
                Psicología & Sexología
              </span>
              <picture>
                <source srcSet="/images/equipo-iris-alarcon.webp" type="image/webp" />
                <img
                  src="/images/equipo-iris-alarcon.jpg"
                  alt="Mtra. Iris Alarcón — Directora Clínica y Psicóloga Colegiada JVPP"
                  width="700"
                  height="525"
                  className="team-pro-img"
                  loading="lazy"
                />
              </picture>
            </div>

            <div className="team-pro-body">
              <h3 className="team-pro-name">
                Mtra. Iris Alarcón
              </h3>
              <p className="team-pro-role">
                Directora Clínica y Fundadora
              </p>
              <div className="team-pro-license">
                <Check size={15} strokeWidth={2.8} />
                <span>JVPP 47096</span>
              </div>
              <p className="team-pro-desc">
                Máster en Terapia de Pareja y Sexología Clínica. Supervisa la formulación de cada caso clínico y garantiza el rigor bioético y científico del equipo.
              </p>
              <a
                href={irisWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="team-pro-whatsapp-btn"
                aria-label="Agendar con la Mtra. Iris Alarcón por WhatsApp"
              >
                <WhatsAppIcon size={18} />
                <span>Agendar con Iris</span>
              </a>
            </div>
          </div>

          {/* Card 2: Lic. Ernesto Mejía (Psicólogo Clínico Colegiado) */}
          <div className="team-pro-card">
            <div className="team-pro-img-container">
              <span className="team-pro-badge team-pro-badge--clay">
                Terapia de Pareja
              </span>
              <picture>
                <source srcSet="/images/equipo-ernesto-mejia.webp" type="image/webp" />
                <img
                  src="/images/equipo-ernesto-mejia.jpg"
                  alt="Lic. Ernesto Mejía — Psicólogo Clínico de Centro Amaré"
                  width="700"
                  height="525"
                  className="team-pro-img"
                  loading="lazy"
                />
              </picture>
            </div>

            <div className="team-pro-body">
              <h3 className="team-pro-name">
                Lic. Ernesto Mejía
              </h3>
              <p className="team-pro-role">
                Psicólogo Clínico Colegiado
              </p>
              <div className="team-pro-license">
                <Check size={15} strokeWidth={2.8} />
                <span>JVPP Acreditado El Salvador</span>
              </div>
              <p className="team-pro-desc">
                Terapeuta de cabecera en Centro Amaré para sesiones online. Especializado en terapia vincular de parejas, desescalada de conflictos y apego.
              </p>
              <a
                href={ernestoWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="team-pro-whatsapp-btn"
                aria-label="Agendar con el Lic. Ernesto Mejía por WhatsApp"
              >
                <WhatsAppIcon size={18} />
                <span>Agendar con Ernesto</span>
              </a>
            </div>
          </div>

          {/* Card 3: Mtro. Rafael Franco (Psicólogo Clínico Psicoterapeuta) */}
          <div className="team-pro-card">
            <div className="team-pro-img-container">
              <span className="team-pro-badge team-pro-badge--clay">
                Psicología Clínica
              </span>
              <picture>
                <source srcSet="/images/equipo-rafael-franco.webp" type="image/webp" />
                <img
                  src="/images/equipo-rafael-franco.jpg"
                  alt="Mtro. Rafael Franco — Psicólogo Clínico y Psicoterapeuta"
                  width="700"
                  height="525"
                  className="team-pro-img"
                  loading="lazy"
                />
              </picture>
            </div>

            <div className="team-pro-body">
              <h3 className="team-pro-name">
                Mtro. Rafael Franco
              </h3>
              <p className="team-pro-role">
                Psicólogo Clínico y Psicoterapeuta
              </p>
              <div className="team-pro-license">
                <Check size={15} strokeWidth={2.8} />
                <span>JVPP Acreditado El Salvador</span>
              </div>
              <p className="team-pro-desc">
                Maestro en psicología clínica con amplia trayectoria en psicoterapia de adultos, procesos afectivos complejos y asesoría clínica interdisciplinar.
              </p>
              <a
                href={rafaelWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="team-pro-whatsapp-btn"
                aria-label="Agendar con el Mtro. Rafael Franco por WhatsApp"
              >
                <WhatsAppIcon size={18} />
                <span>Agendar con Rafael</span>
              </a>
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
              rel="noopener noreferrer"
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

    </section>
  );
}

