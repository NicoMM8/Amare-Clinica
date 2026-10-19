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
      tag: "COMUNICACIÓN EN PAREJA",
      title: '“Hablamos, pero no nos entendemos”',
      desc: "Sienten que cualquier conversación cotidiana termina en la misma pelea de siempre, en reproches del pasado o en días enteros de silencio para evitar otro conflicto.",
      whatsappQuery: "Hola, sentimos que cualquier conversación termina en discusión y quisiéramos coordinar la 1ª conversación sin costo.",
      internalLink: "/terapia-de-pareja"
    },
    {
      iconComponent: IconAceptacion,
      tag: "ACEPTACIÓN Y DIFERENCIAS",
      title: "Querer cambiar al otro",
      desc: "El cansancio de sentir que tu pareja no te entiende como antes, o la frustración constante de esperar que reaccione igual que tú.",
      whatsappQuery: "Hola, sentimos diferencias en la relación que nos están desgastando y nos gustaría agendar la 1ª conversación sin costo.",
      internalLink: "/terapia-de-pareja"
    },
    {
      iconComponent: IconRoles,
      tag: "CONVIVENCIA Y ROLES",
      title: "El peso de la rutina, la casa y el dinero",
      desc: "Sentir que uno de los dos carga con todo el peso mental del hogar, los hijos, las finanzas o el apoyo a la familia en El Salvador, acumulando un resentimiento silencioso.",
      whatsappQuery: "Hola, la carga de la rutina y las finanzas nos están pesando y quisiéramos consultar por la 1ª conversación sin costo.",
      internalLink: "/terapia-de-pareja"
    },
    {
      iconComponent: IconSexualidad,
      tag: "SEXUALIDAD E INTIMIDAD",
      title: '“Parecemos compañeros de cuarto”',
      desc: "Cuando el cansancio, la rutina o los bloqueos íntimos apagan el deseo. Les cuesta hablar de sexualidad sin incomodidad y extrañan volver a sentirse pareja.",
      whatsappQuery: "Hola, sentimos frialdad e incomodidad en la intimidad y nos gustaría consultar sobre el abordaje de sexología clínica.",
      internalLink: "/sexologia-clinica"
    },
    {
      iconComponent: IconInfidelidad,
      tag: "INFIDELIDAD Y CONFIANZA",
      title: "Dolor tras una infidelidad o mentira",
      desc: "Cuando se rompe la confianza y duele seguir, pero también duele soltar. Les acompañamos a sanar la herida y decidir con claridad si es posible reconstruir la relación.",
      whatsappQuery: "Hola, estamos pasando por un momento difícil de confianza en la pareja y nos gustaría agendar la 1ª conversación sin costo.",
      internalLink: "/terapia-de-pareja"
    },
    {
      iconComponent: IconCelos,
      tag: "CELOS E INSEGURIDAD",
      title: "Inseguridad, celos y angustia",
      desc: "Vivir revisando el teléfono, con miedo constante o sintiendo que tienes que dar explicaciones de todo. Les ayudamos a recuperar la paz mental y la libertad en el vínculo.",
      whatsappQuery: "Hola, los celos y la inseguridad nos están haciendo daño y quisiéramos iniciar una primera conversación sin costo.",
      internalLink: "/terapia-individual"
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
          {/* Columna Izquierda: Redacción limpia con negritas estratégicas para escaneo */}
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
              Vivir fuera de El Salvador —entre <strong>turnos largos, el cansancio y la distancia con la familia</strong>— casi no deja tiempo para sentarse a hablar con calma. Y si viven dentro del país, <strong>el ritmo diario y el tráfico</strong> hacen que vayan postergando lo importante hasta que el silencio pesa en casa.
              <br /><br />
              Cuando cuesta entenderse o hablar de intimidad, <strong>intentar explicárselo en otro idioma a un terapeuta que no conoce tus raíces agota el doble</strong>. En Centro Amaré tienen un espacio de terapia de pareja online y en El Salvador donde <strong>no necesitas traducir lo que sientes</strong> ni justificar tu historia.
            </p>
          </div>

          {/* Columna Derecha: Fotografía 4:3 de pareja real + Floating UI Card de Google Meet */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="intro-banner-image-container"
          >
            <picture style={{ width: '100%', display: 'block' }}>
              <source srcSet="/images/pareja-terapia-online.webp" type="image/webp" />
              <img
                src="/images/pareja-terapia-online.jpg"
                alt="Ilustración tradicional salvadoreña estilo La Palma — Terapia de pareja y pertenencia cultural en Centro Amaré"
                width="990"
                height="768"
                loading="lazy"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: 'auto',
                  aspectRatio: '4 / 3',
                  borderRadius: '24px',
                  display: 'block',
                  boxShadow: '0 16px 36px rgba(35, 18, 33, 0.12)',
                  border: '1px solid var(--border-subtle)',
                  objectFit: 'cover',
                }}
              />
            </picture>

            {/* Floating Live Telehealth UI Card */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                background: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '16px',
                padding: '9px 13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 10px 28px rgba(34, 40, 74, 0.18)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                maxWidth: 'calc(100% - 32px)',
                zIndex: 2,
              }}
            >
              <img
                src="/images/iris-alarcon.jpg"
                alt="Licda. Iris Alarcón en videollamada"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--color-clay)',
                  flexShrink: 0,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span className="animate-radar-dot" style={{ width: '6px', height: '6px' }} />
                  <span style={{ fontSize: '10.5px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Consulta Online · Google Meet
                  </span>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-plum-900)', lineHeight: 1.2 }}>
                  Licda. Iris Alarcón (JVPP N.º 47096)
                </span>
                <span style={{ fontSize: '10.5px', color: 'var(--color-ink-muted)' }}>
                  Sesión privada y simultánea
                </span>
              </div>
            </div>
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
                Lo que pasa puertas adentro
              </span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(26px, 3.4vw, 38px)',
                fontWeight: 600,
                color: 'var(--color-plum-900)',
                lineHeight: 1.25,
                marginBottom: '16px',
              }}
            >
              Problemas más comunes que trabajamos en terapia de pareja
            </h2>

            <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
              La mayoría de las parejas no llegan a consulta porque se acabó el amor, sino porque llevan meses “aguantando” el desgaste sin saber cómo salir del mismo círculo.
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
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComponent />
                  </div>

                  {/* Etiqueta pequeña enlazada para SEO e Interlinking */}
                  <a
                    href={prob.internalLink}
                    className="card-tag"
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      color: 'var(--color-clay, #B75940)',
                      background: 'var(--color-clay-subtle, #FDF0EB)',
                      padding: '4px 10px',
                      borderRadius: 'var(--r-pill, 999px)',
                      marginBottom: '10px',
                      textDecoration: 'none',
                      transition: 'background 0.2s ease, transform 0.2s ease',
                    }}
                    title={`Ver especialidad: ${prob.tag}`}
                  >
                    {prob.tag}
                  </a>

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--color-plum-900)',
                      lineHeight: 1.3,
                      marginBottom: '12px',
                    }}
                  >
                    {prob.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14.5px',
                      color: 'var(--color-ink-secondary)',
                      lineHeight: 1.65,
                      margin: '0 0 16px 0',
                    }}
                  >
                    {prob.desc}
                  </p>

                  {/* Micro-CTA de alta conversión hacia WhatsApp específico */}
                  <div style={{ marginTop: 'auto', paddingTop: '6px' }}>
                    <a
                      href={`https://wa.me/50373184781?text=${encodeURIComponent(prob.whatsappQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: 'var(--color-clay)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease',
                      }}
                      className="problem-card-cta"
                    >
                      <span>Hablar sobre esto</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
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
                <span>Un espacio sin bandos ni culpables</span>
              </div>
              <h4 style={{ fontSize: '22px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>
                ¿Sienten que están pasando por algo de esto?
              </h4>
              <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.8)', margin: 0, lineHeight: 1.6 }}>
                No tienen que esperar a estar al límite para pedir ayuda. Empiecen con una primera conversación de 30 minutos sin costo por Google Meet para conocernos y ver cómo podemos acompañarles.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
              <a
                href={"https://wa.me/50373184781?text=" + encodeURIComponent("Hola Iris, leí los motivos de consulta en la web de Centro Amaré y queremos empezar con una primera conversación de 30 min sin costo.")}
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
                <span>Empieza con una primera conversación (30 min sin costo)</span>
                <ArrowRight size={16} />
              </a>
              <span style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.7)', paddingLeft: '4px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={13} style={{ color: 'var(--color-clay)' }} />
                <span>Te atiende una persona real por WhatsApp · Sin robots</span>
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Responsive adjustments */}
      <style>{`
        .problem-card:hover .problem-card-cta {
          gap: 9px !important;
          color: var(--v-pink-deep, #9A432D) !important;
        }
        .problem-card .card-tag:hover {
          background: rgba(183, 89, 64, 0.18) !important;
        }
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
