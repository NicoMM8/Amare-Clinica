import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

/* ── 1. Icono Ilustrado: Problemas de comunicación (Mano que sostiene un corazón cálido) ── */
function IconComunicacion() {
  return (
    <svg width="86" height="86" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Fondo orgánico suave */}
      <circle cx="40" cy="40" r="36" fill="#FDF0EB" />
      {/* Resplandor suave */}
      <circle cx="40" cy="36" r="22" fill="#FCE4D9" opacity="0.6" />
      {/* Corazón en terracota cálida */}
      <path
        d="M40 31C37 23 25.5 23 23.5 31C21 41 35 48.5 40 51.5C45 48.5 59 41 56.5 31C54.5 23 43 23 40 31Z"
        fill="#B75940"
      />
      {/* Reflejo / brillo en el corazón */}
      <path
        d="M27.5 30C28.5 26 33.5 26 35.5 29.5"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Mano estilizada en perspectiva que abraza el corazón */}
      <path
        d="M17 56C22 53.5 27 52.5 33 54.5C38 56 43 54.5 47 50C49 48 52 49 52 51.5C50 56.5 44 59.5 38 60C30 60.5 23 59 17 56Z"
        fill="#E5B59D"
      />
      {/* Manga en tono salvia */}
      <path
        d="M13 59C17 57 21 56.5 25 58L23 63C19 62 15 61.5 13 59Z"
        fill="#778F79"
      />
      {/* Líneas suaves de expresión / comunicación */}
      <path d="M57 22C60 24 61.5 27 61.5 30" stroke="#B75940" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      <path d="M62 18C66 21 68 25 68 30" stroke="#B75940" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/* ── 2. Icono Ilustrado: Aceptación del otro (Manos entrelazadas formando corazón) ── */
function IconAceptacion() {
  return (
    <svg width="86" height="86" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Fondo suave */}
      <circle cx="40" cy="40" r="36" fill="#FFF5EC" />
      {/* Aura central cálida */}
      <circle cx="40" cy="38" r="20" fill="#FCE7D6" opacity="0.8" />
      {/* Silueta del corazón en el centro de las manos */}
      <path
        d="M40 33C38 27.5 30 27 28 33C26 39.5 36.5 46 40 48.5C43.5 46 54 39.5 52 33C50 27 42 27.5 40 33Z"
        fill="#B75940"
      />
      {/* Mano izquierda (tono piel cálido) */}
      <path
        d="M16 42C20 37 28 33 34 38C36.5 40 37 43.5 34.5 46L27 53.5C23.5 56 18.5 52 16 48C14.5 46 14.5 43.5 16 42Z"
        fill="#E8BAA2"
      />
      {/* Mano derecha (tono complementario) */}
      <path
        d="M64 42C60 37 52 33 46 38C43.5 40 43 43.5 45.5 46L53 53.5C56.5 56 61.5 52 64 48C65.5 46 65.5 43.5 64 42Z"
        fill="#DCA990"
      />
      {/* Unión de dedos / pulgares con contorno suave */}
      <path
        d="M34 38C37 41 43 41 46 38"
        stroke="#C68972"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── 3. Icono Ilustrado: Roles de cada uno (Poste indicador con flechas) ── */
function IconRoles() {
  return (
    <svg width="86" height="86" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Fondo suave */}
      <circle cx="40" cy="40" r="36" fill="#EEF4F0" />
      {/* Pequeña colina / base */}
      <ellipse cx="40" cy="62" rx="22" ry="5.5" fill="#DCE7E0" />
      {/* Poste de madera */}
      <rect x="37.5" y="16" width="5" height="46" rx="2.5" fill="#9C7A60" />
      {/* Cartel superior apuntando a la derecha (Salvia) */}
      <path
        d="M27 22H50L56 28L50 34H27V22Z"
        fill="#6E8A71"
      />
      <rect x="31" y="26.5" width="16" height="3" rx="1.5" fill="#FFFFFF" opacity="0.75" />
      {/* Cartel inferior apuntando a la izquierda (Terracota) */}
      <path
        d="M53 36H30L24 42L30 48H53V36Z"
        fill="#B75940"
      />
      <rect x="33" y="40.5" width="16" height="3" rx="1.5" fill="#FFFFFF" opacity="0.75" />
      {/* Pequeña plantita en la base */}
      <path d="M31 61C31 57 34 54 36 53" stroke="#5F7561" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 61C48 57 45 55 43 54" stroke="#5F7561" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── 4. Icono Ilustrado: Sexualidad e intimidad (Corazón con cerradura/chispa) ── */
function IconSexualidad() {
  return (
    <svg width="86" height="86" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Fondo suave */}
      <circle cx="40" cy="40" r="36" fill="#FDF0EB" />
      {/* Resplandor cálido */}
      <circle cx="40" cy="38" r="22" fill="#FCE0D2" opacity="0.8" />
      {/* Corazón principal en terracota vibrante */}
      <path
        d="M40 25C36 17 22 17 19.5 27C16.5 38.5 34 48.5 40 52.5C46 48.5 63.5 38.5 60.5 27C58 17 44 17 40 25Z"
        fill="#B75940"
      />
      {/* Cerradura / punto de intimidad central */}
      <circle cx="40" cy="33.5" r="5" fill="#FFF9F5" />
      <path
        d="M38 36L37 44H43L42 36"
        fill="#FFF9F5"
      />
      <circle cx="40" cy="34.5" r="2.5" fill="#D98838" />
      {/* Destellos de conexión y complicidad */}
      <path d="M56 19L58.5 15L61 19L58 17.5L56 19Z" fill="#D98838" />
      <path d="M22 20L24.5 16.5L27 20L24.5 18L22 20Z" fill="#D98838" />
      <path d="M40 57V61" stroke="#A95A41" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/* ── 5. Icono Ilustrado: Infidelidad (Corazón quebrado con fractura visible) ── */
function IconInfidelidad() {
  return (
    <svg width="86" height="86" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Fondo suave */}
      <circle cx="40" cy="40" r="36" fill="#FDEEEF" />
      {/* Mitad izquierda del corazón (desplazada) */}
      <path
        d="M36 26C32 18.5 19 18.5 16.5 27.5C13.5 38 28 47.5 34.5 52L37 45.5L32 39.5L38.5 35L34.5 30.5L36 26Z"
        fill="#B75940"
      />
      {/* Mitad derecha del corazón (separada con zigzag) */}
      <path
        d="M41 26L39.5 30.5L43.5 35L38 39.5L42.5 45.5L40 52C46.5 47.5 61 38 58 27.5C55.5 18.5 42.5 18.5 38.5 26H41Z"
        fill="#C86A50"
      />
      {/* Pequeños puntos de sutura para sanar la herida */}
      <path d="M35 32L42 31" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
      <path d="M33 40L40 39" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
      <path d="M35 48L42 47" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

/* ── 6. Icono Ilustrado: Celos y control (Burbuja de mensaje con alerta) ── */
function IconCelos() {
  return (
    <svg width="86" height="86" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Fondo suave */}
      <circle cx="40" cy="40" r="36" fill="#EEF2F8" />
      {/* Rayos de alerta de hipervigilancia */}
      <path d="M40 13V17" stroke="#22284A" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M28 17L30.5 20.5" stroke="#22284A" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 17L49.5 20.5" stroke="#22284A" strokeWidth="2" strokeLinecap="round" />
      {/* Burbuja de diálogo */}
      <path
        d="M20 27C20 22.5 24 19 29 19H51C56 19 60 22.5 60 27V42C60 46.5 56 50 51 50H32L22 57V50C20.5 48.5 20 45.5 20 42V27Z"
        fill="#CBD7EA"
      />
      {/* Sobre dentro de la burbuja */}
      <rect x="27" y="28" width="26" height="16" rx="3" fill="#FFFFFF" />
      {/* Pliegue del sobre */}
      <path d="M27 29L40 38L53 29" stroke="#B75940" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Pequeño sello de candado */}
      <circle cx="40" cy="37" r="3" fill="#B75940" />
    </svg>
  );
}

export default function CoupleTherapyIntro() {
  const commonProblems = [
    {
      iconComponent: IconComunicacion,
      title: "Problemas de comunicación",
      desc: "La dificultad para transmitir necesidades, quejas y deseos sin herirse impide construir acuerdos y conduce a discusiones circulares o silencios defensivos.",
    },
    {
      iconComponent: IconAceptacion,
      title: "Aceptación del otro",
      desc: "La no aceptación de las diferencias y características personales de la pareja genera decepción, reproches constantes y resentimiento acumulado.",
    },
    {
      iconComponent: IconRoles,
      title: "Roles de cada uno",
      desc: "Conflictos sobre las tareas del hogar, decisiones sobre los hijos, gastos económicos o proyectos de vida son fuentes continuas de fricción.",
    },
    {
      iconComponent: IconSexualidad,
      title: "Sexualidad e intimidad",
      desc: "La disminución del deseo o los bloqueos íntimos hacen que la distancia sea cada vez más explícita. Recuperar la conexión erótica es vital para el bienestar.",
    },
    {
      iconComponent: IconInfidelidad,
      title: "Infidelidad",
      desc: "La infidelidad quiebra la seguridad y genera profundo dolor. Cuando se decide perdonar y avanzar, es indispensable reconstruir las bases de una nueva relación.",
    },
    {
      iconComponent: IconCelos,
      title: "Celos y control",
      desc: "Los celos y la hipervigilancia causan angustia en ambas partes. Superarlos es necesario para restaurar la tranquilidad y la confianza mutua.",
    },
  ];

  return (
    <section
      className="section"
      style={{
        paddingTop: '20px',
        paddingBottom: '90px',
        backgroundColor: 'var(--color-canvas)',
      }}
    >
      <div className="container">
        
        {/* ── 1. DEFINICIÓN E ILUSTRACIÓN ──────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            alignItems: 'center',
            gap: '48px',
            marginBottom: '80px',
          }}
          className="intro-banner-grid"
        >
          {/* Columna Izquierda: Redacción limpia (sin el párrafo que pediste quitar) */}
          <div className="intro-banner-text">
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 600,
                color: 'var(--color-plum-900)',
                lineHeight: 1.25,
                letterSpacing: '-0.025em',
                marginBottom: '18px',
              }}
            >
              Dos husos horarios, una misma conversación: Terapia de pareja en tu propio código cultural
            </h2>

            <p
              style={{
                fontSize: 'clamp(16px, 1.4vw, 17.5px)',
                color: 'var(--color-ink-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
                margin: 0,
              }}
            >
              Vivir fuera de El Salvador —o llevar el ritmo de trabajo actual dentro del país— deja poco espacio para hablar con calma. Cuando surgen discusiones repetitivas, distancia afectiva o dificultades en la intimidad, intentar explicarlo en otro idioma o a un profesional que no conoce tus raíces agota el doble.
              <br /><br />
              En Centro Amaré ofrecemos un espacio seguro de terapia de pareja online y en El Salvador donde no tienes que traducir tus emociones ni justificar tu historia familiar.
            </p>
          </div>

          {/* Columna Derecha: Ilustración sobre fondo canvas */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="intro-banner-image-container"
          >
            <picture>
              <source srcSet="/images/terapia-pareja-banner-1120.webp 1120w, /images/terapia-pareja-banner-560.webp 560w" sizes="(max-width: 600px) 100vw, 560px" type="image/webp" />
              <img
                src="/images/terapia-pareja-banner-1120.jpg"
                alt="Sesión de terapia psicológica de pareja en Centro Amaré"
                width="560"
                height="313"
                loading="lazy"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: 'auto',
                  borderRadius: '24px',
                  display: 'block',
                  mixBlendMode: 'multiply',
                }}
              />
            </picture>
          </div>
        </div>

        {/* ── 2. MOTIVOS DE CONSULTA FRECUENTES ────────────────── */}
        <div style={{ marginTop: '20px' }}>
          
          {/* Cabecera del bloque */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 52px' }}>
            <div
              className="pill-badge"
              style={{
                marginBottom: '14px',
                background: 'var(--color-surface)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--color-clay)' }} />
              <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-plum-900)' }}>
                Motivos de consulta frecuentes
              </span>
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(26px, 3.4vw, 38px)',
                fontWeight: 600,
                color: 'var(--color-plum-900)',
                lineHeight: 1.25,
                marginBottom: '16px',
              }}
            >
              Problemas más comunes a solucionar en terapia de pareja
            </h3>

            <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
              La mayoría de parejas no llegan a consulta por falta de amor, sino por dinámicas de desgaste que con el acompañamiento adecuado se pueden transformar.
            </p>
          </div>

          {/* Grid de 6 Tarjetas centradas con iconos de dibujo */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '28px',
            }}
            className="problems-grid"
          >
            {commonProblems.map((prob, idx) => {
              const IconComponent = prob.iconComponent;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--r-2xl)',
                    padding: '36px 26px',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                  className="problem-card"
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'var(--color-clay-border)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-hairline)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  {/* Icono de estilo dibujo / ilustración vectorial */}
                  <div
                    style={{
                      marginBottom: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComponent />
                  </div>

                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--color-plum-900)',
                      lineHeight: 1.3,
                      marginBottom: '12px',
                    }}
                  >
                    {prob.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '14.5px',
                      color: 'var(--color-ink-secondary)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {prob.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ── Banner de Micro-Conversión / Rescate Inmediato ── */}
          <div
            style={{
              marginTop: '44px',
              background: 'linear-gradient(135deg, var(--color-plum-900) 0%, #1e1724 100%)',
              borderRadius: '24px',
              padding: '36px 32px',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '28px',
              flexWrap: 'wrap',
              boxShadow: '0 16px 36px rgba(35, 18, 33, 0.16)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            className="intro-cta-banner"
          >
            <div style={{ maxWidth: '580px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', padding: '4px 12px', borderRadius: 'var(--r-pill)', fontSize: '12px', fontWeight: 600, marginBottom: '12px' }}>
                <ShieldCheck size={14} style={{ color: 'var(--color-clay)' }} />
                <span>Espacio neutral · Sin juzgar ni buscar culpables</span>
              </div>
              <h4 style={{ fontSize: '22px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>
                ¿Se sienten identificados con alguna de estas dinámicas?
              </h4>
              <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.8)', margin: 0, lineHeight: 1.6 }}>
                No tienen que resolverlo solos ni esperar a que la relación se rompa. La primera sesión de 30 minutos es gratuita por Google Meet para conocernos y trazar un camino.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
              <a
                href={"https://wa.me/50373184781?text=" + encodeURIComponent("Hola Iris, leí los motivos de consulta en la web de Centro Amaré y nos gustaría agendar la sesión inicial gratuita de 30 minutos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 26px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--color-clay)',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 20px rgba(169, 90, 65, 0.35)'
                }}
              >
                <MessageCircle size={18} />
                <span>Agendar sesión de encuadre (30 min gratis)</span>
                <ArrowRight size={16} />
              </a>
              <span style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.65)', paddingLeft: '4px' }}>
                🔒 Coordinación humana directa por WhatsApp · Sin bots
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 960px) {
          .problems-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 860px) {
          .intro-banner-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            text-align: center;
          }
          .intro-banner-text p {
            margin-left: auto;
            margin-right: auto;
          }
          .intro-banner-image-container img {
            max-width: 440px !important;
          }
        }
        @media (max-width: 600px) {
          .problems-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .problem-card {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
