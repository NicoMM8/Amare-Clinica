import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

/* ── 1. Icono La Palma: Comunicación (Dos Torogoces frente a frente con flor de diálogo) ── */
function IconComunicacion() {
  return (
    <svg width="86" height="86" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Medallón artesanal La Palma */}
      <circle cx="42" cy="42" r="39" fill="#FFF8F0" stroke="#E29D38" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="42" cy="42" r="35" fill="#FAF0E6" stroke="#2A2128" strokeWidth="1.5" />
      
      {/* Sol naciente en el fondo */}
      <path d="M30 42C30 35.37 35.37 30 42 30C48.63 30 54 42 54 42H30Z" fill="#F4CF68" />
      
      {/* Ave Torogoz izquierda */}
      <path d="M19 46C19 39 24 35 28 36C32 37 33 42 33 47C33 52 27 54 23 54C20 54 19 50 19 46Z" fill="#3B5B88" stroke="#2A2128" strokeWidth="1.6" />
      <path d="M28 36L34 35L30 38" stroke="#2A2128" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="#E29D38" />
      <circle cx="26" cy="38" r="1.5" fill="#2A2128" />
      {/* Ala izquierda */}
      <path d="M22 44C24 44 27 46 26 50C23 50 21 47 22 44Z" fill="#5F7D64" stroke="#2A2128" strokeWidth="1.2" />
      
      {/* Ave Torogoz derecha */}
      <path d="M65 46C65 39 60 35 56 36C52 37 51 42 51 47C51 52 57 54 61 54C64 54 65 50 65 46Z" fill="#5F7D64" stroke="#2A2128" strokeWidth="1.6" />
      <path d="M56 36L50 35L54 38" stroke="#2A2128" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="#E29D38" />
      <circle cx="58" cy="38" r="1.5" fill="#2A2128" />
      {/* Ala derecha */}
      <path d="M62 44C60 44 57 46 58 50C61 50 63 47 62 44Z" fill="#3B5B88" stroke="#2A2128" strokeWidth="1.2" />
      
      {/* Corazón / Flor central de conexión */}
      <path d="M42 34C40.5 30 35.5 30 34.5 34C33 40 40 44.5 42 46.5C44 44.5 51 40 49.5 34C48.5 30 43.5 30 42 34Z" fill="#B75940" stroke="#2A2128" strokeWidth="1.5" />
      
      {/* Rama de cafeto en la base */}
      <path d="M22 60C32 57 52 57 62 60" stroke="#2A2128" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="58" r="2.5" fill="#B75940" stroke="#2A2128" strokeWidth="1" />
      <circle cx="50" cy="58" r="2.5" fill="#B75940" stroke="#2A2128" strokeWidth="1" />
      <path d="M42 58V50" stroke="#5F7D64" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ── 2. Icono La Palma: Aceptación y Diferencias (Dos perfiles folclóricos y sol de armonía) ── */
function IconAceptacion() {
  return (
    <svg width="86" height="86" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Medallón artesanal La Palma */}
      <circle cx="42" cy="42" r="39" fill="#FFF8F0" stroke="#B75940" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="42" cy="42" r="35" fill="#FAF0E6" stroke="#2A2128" strokeWidth="1.5" />

      {/* Sol de La Palma en la cima */}
      <circle cx="42" cy="24" r="7" fill="#F4CF68" stroke="#2A2128" strokeWidth="1.5" />
      <path d="M42 13V16M33 18L35 20M51 18L49 20M42 32V34" stroke="#2A2128" strokeWidth="1.5" strokeLinecap="round" />

      {/* Perfil izquierdo (mujer / cabello estilizado) */}
      <path d="M24 58C24 48 29 42 34 42C35 45 35 48 33 50C31 52 30 55 31 58H24Z" fill="#3B5B88" stroke="#2A2128" strokeWidth="1.5" />
      <circle cx="30" cy="46" r="1.5" fill="#FFF8F0" />

      {/* Perfil derecho (hombre / sombrero campesino) */}
      <path d="M60 58C60 48 55 42 50 42C49 45 49 48 51 50C53 52 54 55 53 58H60Z" fill="#5F7D64" stroke="#2A2128" strokeWidth="1.5" />
      <circle cx="54" cy="46" r="1.5" fill="#FFF8F0" />
      <path d="M48 40C52 38 56 38 60 40" stroke="#2A2128" strokeWidth="1.8" strokeLinecap="round" />

      {/* Corazón artesanal en el centro que une ambos */}
      <path d="M42 42C40.5 37 34 37 33 42C31.5 48 40 54 42 56C44 54 52.5 48 51 42C50 37 43.5 37 42 42Z" fill="#B75940" stroke="#2A2128" strokeWidth="1.5" />
      <path d="M42 40V55" stroke="#FAF0E6" strokeWidth="1.4" strokeDasharray="2 2" />

      {/* Base de tierra / colina */}
      <path d="M18 64C30 60 54 60 66 64" stroke="#2A2128" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── 3. Icono La Palma: Convivencia y Roles (Casita tradicional de teja y cafetal en flor) ── */
function IconRoles() {
  return (
    <svg width="86" height="86" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Medallón artesanal La Palma */}
      <circle cx="42" cy="42" r="39" fill="#FFF8F0" stroke="#5F7D64" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="42" cy="42" r="35" fill="#FAF0E6" stroke="#2A2128" strokeWidth="1.5" />

      {/* Techo de teja tradicional */}
      <path d="M26 36L42 22L58 36H26Z" fill="#B75940" stroke="#2A2128" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M34 29L38 36M46 29L42 36M50 33L54 36" stroke="#FAF0E6" strokeWidth="1.2" strokeLinecap="round" />

      {/* Fachada de la casita */}
      <rect x="30" y="36" width="24" height="24" fill="#FFF8F0" stroke="#2A2128" strokeWidth="1.8" />
      {/* Puerta rústica con arco */}
      <path d="M38 60V48C38 46 40 44 42 44C44 44 46 46 46 48V60H38Z" fill="#3B5B88" stroke="#2A2128" strokeWidth="1.4" />
      
      {/* Cafeto izquierdo con fruto */}
      <path d="M23 60V46C23 44 26 42 28 44" stroke="#5F7D64" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="48" r="2.2" fill="#B75940" stroke="#2A2128" strokeWidth="1" />
      <circle cx="28" cy="44" r="2.2" fill="#B75940" stroke="#2A2128" strokeWidth="1" />

      {/* Cafeto derecho con fruto */}
      <path d="M61 60V46C61 44 58 42 56 44" stroke="#5F7D64" strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="48" r="2.2" fill="#B75940" stroke="#2A2128" strokeWidth="1" />
      <circle cx="56" cy="44" r="2.2" fill="#B75940" stroke="#2A2128" strokeWidth="1" />

      {/* Suelo / colina base */}
      <path d="M16 63C28 60 56 60 68 63" stroke="#2A2128" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── 4. Icono La Palma: Sexualidad e Intimidad (Flor tradicional en floración y luna de La Palma) ── */
function IconSexualidad() {
  return (
    <svg width="86" height="86" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Medallón artesanal La Palma */}
      <circle cx="42" cy="42" r="39" fill="#FFF8F0" stroke="#B75940" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="42" cy="42" r="35" fill="#FAF0E6" stroke="#2A2128" strokeWidth="1.5" />

      {/* Luna dorada artesanal en la esquina superior */}
      <path d="M54 20C50 20 46 23 46 27C46 31 50 34 54 34C51 34 49 31 49 27C49 23 51 20 54 20Z" fill="#F4CF68" stroke="#2A2128" strokeWidth="1.4" />
      <circle cx="34" cy="24" r="1.5" fill="#E29D38" />
      <circle cx="38" cy="28" r="1.2" fill="#E29D38" />

      {/* Flor central estilizada de La Palma */}
      {/* Pétalo central */}
      <path d="M42 34C39 40 39 48 42 54C45 48 45 40 42 34Z" fill="#B75940" stroke="#2A2128" strokeWidth="1.5" />
      {/* Pétalos laterales izquierdos */}
      <path d="M40 44C32 40 27 46 32 52C36 53 39 48 40 44Z" fill="#E29D38" stroke="#2A2128" strokeWidth="1.4" />
      {/* Pétalos laterales derechos */}
      <path d="M44 44C52 40 57 46 52 52C48 53 45 48 44 44Z" fill="#E29D38" stroke="#2A2128" strokeWidth="1.4" />
      {/* Corazón en el núcleo de la flor */}
      <circle cx="42" cy="46" r="4.5" fill="#FAF0E6" stroke="#2A2128" strokeWidth="1.4" />
      <circle cx="42" cy="46" r="2" fill="#B75940" />

      {/* Hojas verdes en la base */}
      <path d="M42 54V64M34 58C37 57 40 58 42 61M50 58C47 57 44 58 42 61" stroke="#5F7D64" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── 5. Icono La Palma: Infidelidad y Confianza (Corazón artesanal restaurado con brote de vida) ── */
function IconInfidelidad() {
  return (
    <svg width="86" height="86" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Medallón artesanal La Palma */}
      <circle cx="42" cy="42" r="39" fill="#FFF8F0" stroke="#3B5B88" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="42" cy="42" r="35" fill="#FAF0E6" stroke="#2A2128" strokeWidth="1.5" />

      {/* Mitad izquierda del corazón (añil/terracota) */}
      <path d="M40 28C35 22 25 24 23 32C20 42 34 52 40 58V28Z" fill="#B75940" stroke="#2A2128" strokeWidth="1.6" />
      {/* Mitad derecha del corazón (añil suave) */}
      <path d="M44 28C49 22 59 24 61 32C64 42 50 52 44 58V28Z" fill="#D97A62" stroke="#2A2128" strokeWidth="1.6" />

      {/* Puntadas artesanales de reparación (Kintsugi / bordado salvadoreño) */}
      <path d="M38 34L46 32M37 42L47 40M39 50L45 48" stroke="#FAF0E6" strokeWidth="2" strokeLinecap="round" />

      {/* Brote verde que renace del centro */}
      <path d="M42 26V16" stroke="#5F7D64" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 18C38 16 38 13 41 13C43 13 43 16 42 18Z" fill="#5F7D64" stroke="#2A2128" strokeWidth="1.2" />
      <path d="M42 16C46 14 46 11 43 11C41 11 41 14 42 16Z" fill="#5F7D64" stroke="#2A2128" strokeWidth="1.2" />

      {/* Base decorativa */}
      <path d="M24 64C34 61 50 61 60 64" stroke="#2A2128" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── 6. Icono La Palma: Celos e Inseguridad (Ventana artesanal que se abre hacia la libertad y calma) ── */
function IconCelos() {
  return (
    <svg width="86" height="86" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Medallón artesanal La Palma */}
      <circle cx="42" cy="42" r="39" fill="#FFF8F0" stroke="#E29D38" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="42" cy="42" r="35" fill="#FAF0E6" stroke="#2A2128" strokeWidth="1.5" />

      {/* Sol radiante de fondo */}
      <circle cx="56" cy="24" r="6" fill="#F4CF68" stroke="#2A2128" strokeWidth="1.4" />
      <path d="M56 15V17M48 20L50 21M63 20L61 21" stroke="#2A2128" strokeWidth="1.3" strokeLinecap="round" />

      {/* Paloma de La Palma volando libre */}
      <path d="M48 30C48 26 43 23 39 24C36 25 35 28 36 31C37 34 42 36 45 35L48 30Z" fill="#FFF8F0" stroke="#2A2128" strokeWidth="1.5" />
      {/* Ala alzada */}
      <path d="M42 27L46 18C42 18 39 22 42 27Z" fill="#FFF8F0" stroke="#2A2128" strokeWidth="1.4" />
      <circle cx="39" cy="26" r="1.2" fill="#2A2128" />

      {/* Ventana / cerrojo rústico abierto abajo */}
      <rect x="26" y="44" width="32" height="18" rx="2" fill="#FFF8F0" stroke="#2A2128" strokeWidth="1.6" />
      {/* postigo izquierdo abierto */}
      <path d="M26 44L18 42V60L26 62V44Z" fill="#3B5B88" stroke="#2A2128" strokeWidth="1.5" />
      {/* postigo derecho abierto */}
      <path d="M58 44L66 42V60L58 62V44Z" fill="#3B5B88" stroke="#2A2128" strokeWidth="1.5" />
      {/* corazón central en la ventana */}
      <path d="M42 49C40.5 46 37 46 36 49C35 53 41 57 42 58C43 57 49 53 48 49C47 46 43.5 46 42 49Z" fill="#B75940" />

      {/* Suelo */}
      <path d="M18 64C30 62 54 62 66 64" stroke="#2A2128" strokeWidth="2" strokeLinecap="round" />
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
