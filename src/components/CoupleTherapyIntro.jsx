import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import {
  IconComunicacion,
  IconEscuchaActiva,
  IconPertenencia,
  IconIntimidad,
  IconPrivacidad,
  IconAnsiedad,
  IconDosHusosHorarios,
  IconTerapiaPareja,
} from './icons/AmareArtisanIcons';

export default function CoupleTherapyIntro() {
  const commonProblems = [
    {
      iconSrc: '/images/iconos-amare/terracota/comunicacion.webp',
      caption: "comunicación · diálogo",
      tag: "COMUNICACIÓN EN PAREJA",
      title: '“Hablamos, pero no nos entendemos”',
      desc: "Sienten que cualquier conversación cotidiana termina en la misma pelea de siempre, en reproches del pasado o en días enteros de silencio para evitar otro conflicto.",
      whatsappQuery: "Hola, sentimos que cualquier conversación termina en discusión y quisiéramos coordinar la 1ª conversación sin costo.",
      internalLink: "/terapia-de-pareja"
    },
    {
      iconSrc: '/images/iconos-amare/terracota/escucha-activa.webp',
      caption: "escucha activa · comprensión",
      tag: "ACEPTACIÓN Y DIFERENCIAS",
      title: "Querer cambiar al otro",
      desc: "El cansancio de sentir que tu pareja no te entiende como antes, o la frustración constante de esperar que reaccione igual que tú.",
      whatsappQuery: "Hola, sentimos diferencias en la relación que nos están desgastando y nos gustaría agendar la 1ª conversación sin costo.",
      internalLink: "/terapia-de-pareja"
    },
    {
      iconSrc: '/images/iconos-amare/terracota/pertenencia.webp',
      caption: "pertenencia · hogar",
      tag: "CONVIVENCIA Y ROLES",
      title: "El peso de la rutina, la casa y el dinero",
      desc: "Sentir que uno de los dos carga con todo el peso mental del hogar, los hijos, las finanzas o el apoyo a la familia en El Salvador, acumulando un resentimiento silencioso.",
      whatsappQuery: "Hola, la carga de la rutina y las finanzas nos están pesando y quisiéramos consultar por la 1ª conversación sin costo.",
      internalLink: "/terapia-de-pareja"
    },
    {
      iconSrc: '/images/iconos-amare/terracota/intimidad.webp',
      caption: "intimidad · vínculo",
      tag: "SEXUALIDAD E INTIMIDAD",
      title: '“Parecemos compañeros de cuarto”',
      desc: "Cuando el cansancio, la rutina o los bloqueos íntimos apagan el deseo. Les cuesta hablar de sexualidad sin incomodidad y extrañan volver a sentirse pareja.",
      whatsappQuery: "Hola, sentimos frialdad e incomodidad en la intimidad y nos gustaría consultar sobre el abordaje de sexología clínica.",
      internalLink: "/sexologia-clinica"
    },
    {
      iconSrc: '/images/iconos-amare/terracota/privacidad.webp',
      caption: "privacidad · confianza",
      tag: "INFIDELIDAD Y CONFIANZA",
      title: "Dolor tras una infidelidad o mentira",
      desc: "Cuando se rompe la confianza y duele seguir, pero también duele soltar. Les acompañamos a sanar la herida y decidir con claridad si es posible reconstruir la relación.",
      whatsappQuery: "Hola, estamos pasando por un momento difícil de confianza en la pareja y nos gustaría agendar la 1ª conversación sin costo.",
      internalLink: "/terapia-de-pareja"
    },
    {
      iconSrc: '/images/iconos-amare/terracota/ansiedad.webp',
      caption: "ansiedad · pensamientos",
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
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '14px',
                background: 'rgba(183, 89, 64, 0.08)',
                padding: '5px 14px 5px 6px',
                borderRadius: 'var(--r-pill, 999px)',
              }}
            >
              <img
                src="/images/iconos-amare/terracota/dos-husos-horarios.webp"
                alt="Dos husos horarios"
                width="24"
                height="24"
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-clay)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Dos husos horarios · Una conversación
              </span>
            </div>

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
              Cuando cuesta entenderse o hablar de intimidad, intentar explicárselo en otro idioma a un terapeuta ajeno a tus raíces <strong>agota el doble</strong>. En Centro Amaré tienen un espacio de terapia de pareja online y en El Salvador donde <strong>no necesitas traducir lo que sientes</strong> ni justificar tu historia.
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
                width="580"
                height="435"
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
                src="/images/iris-alarcon.webp"
                alt="Licda. Iris Alarcón en videollamada"
                width="36"
                height="36"
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
                  {/* Icono artesanal ORIGINAL extraído del Brand Book con textura terracota */}
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      backgroundColor: 'var(--color-clay, #B75940)',
                      marginBottom: '12px',
                      boxShadow: '0 8px 20px rgba(183, 89, 64, 0.22)',
                      transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className="artisan-icon-badge"
                  >
                    <img
                      src={prob.iconSrc}
                      alt={prob.caption}
                      width="74"
                      height="74"
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>

                  {/* Subtítulo artesanal de la ilustración */}
                  {prob.caption && (
                    <span
                      style={{
                        fontSize: '11.5px',
                        letterSpacing: '0.04em',
                        color: 'var(--color-clay, #B75940)',
                        fontWeight: 600,
                        marginBottom: '10px',
                        textTransform: 'lowercase',
                        lineHeight: 1.2,
                      }}
                    >
                      {prob.caption}
                    </span>
                  )}

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
                      color: 'var(--color-clay-text, #8B3822)',
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
                      rel="nofollow noopener noreferrer"
                      aria-label={`Hablar por WhatsApp sobre ${prob.title}`}
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: 'var(--color-clay-text, #8B3822)',
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
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>
                ¿Sienten que están pasando por algo de esto?
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.8)', margin: 0, lineHeight: 1.6 }}>
                No tienen que esperar a estar al límite para pedir ayuda. Empiecen con una primera conversación de 30 minutos sin costo por Google Meet para conocernos y ver cómo podemos acompañarles.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
              <a
                href={"https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí los motivos de consulta en la web de Centro Amaré y queremos empezar con una primera conversación de 30 min sin costo.")}
                target="_blank"
                rel="nofollow noopener noreferrer"
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
        .problem-card:hover .artisan-icon-badge {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 26px rgba(183, 89, 64, 0.35) !important;
        }
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
