import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { HeroButton } from '../components/ui/hero-button';
import { 
  Building2, 
  Sparkles, 
  Award, 
  HeartHandshake, 
  Globe, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2, 
  Brain, 
  Compass, 
  Users, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Sobre Centro Amaré — Historia y Misión Clínica",
  "url": "https://terapiadeparejaelsalvador.com/sobre-nosotros",
  "description": "Historia, misión y pilares clínicos de Centro Amaré. Clínica de psicología y terapia de pareja fundada en 2017 en El Salvador.",
  "mainEntity": {
    "@type": "MedicalBusiness",
    "name": "Centro Amaré",
    "foundingDate": "2017",
    "founder": {
      "@type": "Person",
      "name": "Mtra. Iris Alarcón",
      "jobTitle": "Directora Clínica y Fundadora",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Registro Profesional Sanitario JVPP N.º 47096"
      }
    },
    "knowsAbout": [
      "Terapia de Pareja",
      "Sexología Clínica",
      "Terapia Cognitivo-Conductual (TCC)",
      "Terapia Dialéctico-Conductual (DBT)",
      "Terapia Integral de Parejas (IBCT)",
      "Duelo Migratorio y Terapia para la Diáspora Salvadoreña"
    ],
    "areaServed": [
      { "@type": "Country", "name": "El Salvador" },
      { "@type": "Country", "name": "Estados Unidos" },
      { "@type": "Country", "name": "Canadá" },
      { "@type": "Country", "name": "España" },
      { "@type": "Country", "name": "Australia" }
    ]
  }
};

export default function SobreNosotrosPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí sobre la historia de Centro Amaré y me gustaría coordinar la primera conversación de valoración de 30 minutos sin costo.");

  // Video State
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Dynamic SEO Metadata for About Page (navegación en cliente)
    document.title = "Sobre Centro Amaré | Historia y Misión Clínica en El Salvador y el Mundo";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Conoce la historia de Centro Amaré. Fundado en 2017 por la Mtra. Iris Alarcón en San Salvador, somos la clínica de psicología digital que promueve el bienestar de parejas y adultos en El Salvador y la diáspora.";
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        // Autoplay may be restricted until interaction
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="app-wrapper">
      {/* Schema JSON-LD disponible para SSR / SSG y Googlebot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Navbar />

      <main id="main-content">
        {/* ── 1. HERO SECTION: PROPÓSITO & INSIGNIA ────────────────────── */}
        <section
          className="section"
          style={{
            paddingTop: '48px',
            paddingBottom: '64px',
            backgroundColor: 'var(--color-canvas, #FAF7F2)',
            position: 'relative',
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
              
              {/* Badge Identidad */}
              <div 
                className="pill-badge pill-badge-clay" 
                style={{ 
                  marginBottom: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Sparkles size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Nuestra Historia y Misión Clínica · Desde 2017</span>
              </div>

              {/* H1 Principal con la frase insignia */}
              <h1 
                className="font-serif" 
                style={{ 
                  fontSize: 'clamp(32px, 4.4vw, 54px)', 
                  lineHeight: 1.18, 
                  color: 'var(--color-plum-900, #231221)', 
                  marginBottom: '24px',
                  letterSpacing: '-0.02em',
                }}
              >
                Un lugar digital que promueve el bienestar emocional de los{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay, #9E4B33)' }}>
                  salvadoreños en todo el mundo
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p 
                style={{ 
                  fontSize: '18px', 
                  color: 'var(--color-ink-secondary, #5D5458)', 
                  lineHeight: 1.75, 
                  marginBottom: '34px',
                  maxWidth: '760px',
                  margin: '0 auto 34px',
                }}
              >
                Centro Amaré nació en San Salvador con una convicción que todavía guía cada una de nuestras consultas: la salud mental no puede ser un laberinto de teléfonos que nadie contesta ni de citas que se pierden. Creemos en una psicología moderna, fundamentada en ciencia y ejercida con un respeto humano absoluto por tu tiempo y tu dolor.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('sobre_nosotros_hero', '1ª sesión gratis')}
                >
                  <span>1ª conversación sin costo (30 min)</span>
                </HeroButton>

                <HeroButton
                  appearance="ink-sweep"
                  href="/#equipo"
                >
                  <span>Conoce al equipo clínico</span>
                </HeroButton>
              </div>

              {/* Trust Indicators */}
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '24px', 
                  flexWrap: 'wrap', 
                  justifyContent: 'center',
                  fontSize: '13.5px', 
                  color: 'var(--color-ink-secondary)' 
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Building2 size={16} style={{ color: 'var(--color-clay)' }} /> Fundado en San Salvador en 2017
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-clay)' }} /> Psicólogos Colegiados JVPP
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={16} style={{ color: 'var(--color-clay)' }} /> Conexión con la diáspora salvadoreña
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. VIDEO EDITORIAL SHOWCASE (CINEMATIC BRAND CENTERPIECE) ──── */}
        <section 
          className="section"
          style={{ 
            background: 'linear-gradient(180deg, var(--color-surface, #FFFFFF) 0%, #FAF7F2 100%)', 
            paddingTop: '80px', 
            paddingBottom: '96px',
            borderTop: '1px solid var(--border-hairline, rgba(35, 18, 33, 0.08))',
            borderBottom: '1px solid var(--border-hairline, rgba(35, 18, 33, 0.08))',
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
              
              {/* Header con presencia editorial */}
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div 
                  className="pill-badge pill-badge-clay" 
                  style={{ 
                    marginBottom: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Sparkles size={14} style={{ color: 'var(--color-clay)' }} />
                  <span>Símbolo & Identidad en Movimiento · 10 Segundos</span>
                </div>
                
                <h2 
                  className="font-serif" 
                  style={{ 
                    fontSize: 'clamp(28px, 3.8vw, 44px)', 
                    color: 'var(--color-plum-900)',
                    lineHeight: 1.2,
                    marginBottom: '14px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  El alma de Centro Amaré: del mándala al trazo orgánico
                </h2>

                <p style={{ fontSize: '17px', color: 'var(--color-ink-secondary)', maxWidth: '720px', margin: '0 auto', lineHeight: 1.65 }}>
                  Una animación que sintetiza nuestra evolución: el sol de nuestra tierra, la calma de ser escuchado sin juicio y la apertura de dos vidas que florecen juntas.
                </p>
              </div>

              {/* Cinematic Video Showcase Card (Ample size & Warm Ambient Shadow) */}
              <div 
                style={{
                  position: 'relative',
                  backgroundColor: '#FAF7F2',
                  borderRadius: '28px',
                  border: '1.5px solid rgba(158, 75, 51, 0.22)',
                  boxShadow: '0 32px 85px -15px rgba(158, 75, 51, 0.22), 0 12px 35px -8px rgba(35, 18, 33, 0.12)',
                  overflow: 'hidden',
                  maxWidth: '980px',
                  margin: '0 auto 48px',
                }}
              >
                {/* Top Ambient Bar inside player */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '20px',
                    zIndex: 10,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    padding: '6px 14px',
                    borderRadius: 'var(--r-pill, 999px)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--color-plum-900)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.6)'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-clay)' }} />
                  <span>Identidad Clínica Oficial · Centro Amaré</span>
                </div>

                <div style={{ position: 'relative', minHeight: '360px', backgroundColor: '#FAF7F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <video
                    ref={videoRef}
                    src="/videos/motion-graphic-centro-amare.mp4"
                    poster="/videos/motion-graphic-poster-end.webp"
                    autoPlay
                    playsInline
                    muted={isMuted}
                    loop
                    preload="auto"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    style={{
                      width: '100%',
                      display: 'block',
                      maxHeight: '520px',
                      objectFit: 'contain',
                      backgroundColor: '#FAF7F2',
                    }}
                  />

                  {/* Big Center Play Button if paused */}
                  {!isPlaying && (
                    <button
                      onClick={togglePlay}
                      aria-label="Reproducir animación del logo de Centro Amaré"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '74px',
                        height: '74px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-clay, #9E4B33)',
                        color: '#FFFFFF',
                        border: '3px solid #FAF7F2',
                        boxShadow: '0 10px 32px rgba(35, 18, 33, 0.3)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'}
                    >
                      <Play size={32} style={{ marginLeft: '4px' }} />
                    </button>
                  )}

                  {/* Corner Sound & Pause Controls */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '18px',
                      right: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      zIndex: 10,
                    }}
                  >
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(35, 18, 33, 0.85)',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        backdropFilter: 'blur(8px)',
                        transition: 'transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
                    </button>

                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(35, 18, 33, 0.85)',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        backdropFilter: 'blur(8px)',
                        transition: 'transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </div>
                </div>

                {/* Editorial Caption Bar */}
                <div 
                  style={{ 
                    padding: '18px 28px', 
                    backgroundColor: '#FAF7F2',
                    borderTop: '1px solid rgba(35, 18, 33, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '14px'
                  }}
                >
                  <span style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', fontStyle: 'italic' }}>
                    “Desde El Salvador al mundo: ciencia, calidez y pertenencia cultural.”
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    MANIFIESTO VISUAL · CENTRO AMARÉ
                  </span>
                </div>
              </div>

              {/* 3-Column Visual Metaphor Row (Tríptico del Símbolo) */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: '24px',
                  maxWidth: '980px',
                  margin: '0 auto'
                }}
              >
                <div 
                  style={{ 
                    backgroundColor: 'var(--color-surface, #FFFFFF)', 
                    padding: '24px 22px', 
                    borderRadius: '20px', 
                    border: '1px solid var(--border-hairline)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ color: 'var(--color-clay)', fontWeight: 700, fontSize: '14px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-clay)' }} />
                    El Rostro Sereno
                  </div>
                  <p style={{ fontSize: '13.8px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    La tranquilidad de ser escuchado por primera vez sin juicio, con rigor clínico y respeto absoluto por tu dolor.
                  </p>
                </div>

                <div 
                  style={{ 
                    backgroundColor: 'var(--color-surface, #FFFFFF)', 
                    padding: '24px 22px', 
                    borderRadius: '20px', 
                    border: '1px solid var(--border-hairline)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ color: 'var(--color-clay)', fontWeight: 700, fontSize: '14px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-clay)' }} />
                    El Sol y la Semilla
                  </div>
                  <p style={{ fontSize: '13.8px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Nuestras raíces salvadoreñas: un puente cultural que une a quienes viven en el país y a quienes migraron a la diáspora.
                  </p>
                </div>

                <div 
                  style={{ 
                    backgroundColor: 'var(--color-surface, #FFFFFF)', 
                    padding: '24px 22px', 
                    borderRadius: '20px', 
                    border: '1px solid var(--border-hairline)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ color: 'var(--color-clay)', fontWeight: 700, fontSize: '14px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-clay)' }} />
                    Las Hojas Orgánicas
                  </div>
                  <p style={{ fontSize: '13.8px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Dos vidas que se encuentran, aprenden a desactivar el conflicto y florecen juntas hacia un vínculo consciente.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. EL ORIGEN (2017): LA HISTORIA REAL ────────────────────── */}
        <section className="section" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: 'var(--color-canvas)' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
              
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '16px' }}>
                <Clock size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Cómo empezó todo</span>
              </div>

              <h2 
                className="font-serif" 
                style={{ 
                  fontSize: 'clamp(28px, 3.8vw, 44px)', 
                  color: 'var(--color-plum-900)', 
                  lineHeight: 1.22, 
                  marginBottom: '28px' 
                }}
              >
                De un pequeño chalet familiar a un centro sin barreras de distancia
              </h2>

              <div style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <p>
                  En el año <strong>2017</strong>, Centro Amaré nació como una pequeña consulta privada en San Salvador. Era apenas un despacho dentro de un chalet donde convivían otros proyectos de mi familia, cada quien empujando su propio emprendimiento. En aquel inicio, la identidad tenía colores púrpura y rojo, y el logo era un mándala dibujado con la ilusión de crear un espacio donde las personas fueran recibidas con verdadera dignidad.
                </p>

                <p>
                  La idea nació de una experiencia personal muy cruda. Siendo estudiante de psicología, necesité buscar terapia para mí misma. Y me topé de frente con lo que vivían los salvadoreños todos los días: los teléfonos sonaban y nadie contestaba; los psicólogos estaban saturados; o te daban una cita a semanas vista y, al llegar al consultorio, no tenían registro de tu llegada.
                </p>

                <div 
                  style={{ 
                    borderLeft: '3px solid var(--color-clay)', 
                    paddingLeft: '22px', 
                    margin: '8px 0',
                    fontStyle: 'italic',
                    color: 'var(--color-plum-900)',
                    fontSize: '17.5px'
                  }}
                >
                  “Si para alguien que estaba inmerso en el medio académico de la psicología era un calvario encontrar una atención formal y puntual, ¿qué le esperaba a una persona o una pareja que buscaba ayuda en un momento de crisis?”
                </div>

                <p>
                  En aquel 2017 logramos un posicionamiento web pionero en El Salvador, porque muy pocos terapeutas habían incursionado en el entorno digital. Sin embargo, ocurrió lo predecible: la demanda nos saturó y no contábamos aún con la estructura para sostener el proyecto con la excelencia que merecía.
                </p>

                <p>
                  Hoy la historia es diferente. Con casi una década de experiencia clínica acumulada, formación de posgrado especializada en pareja y sexología, y un equipo de profesionales colegiados ante la <strong>Junta de Vigilancia de la Profesión en Psicología (JVPP)</strong>, Centro Amaré se consolidó como una clínica digital sólida, organizada y concebida para que nunca sientas que tu salud mental es tratada a la ligera.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. NUESTRA RAZÓN DE SER: EL PACIENTE EN EL CENTRO ───────── */}
        <section 
          className="section" 
          style={{ 
            backgroundColor: 'var(--color-surface)', 
            paddingTop: '80px', 
            paddingBottom: '80px',
            borderTop: '1px solid var(--border-hairline)',
            borderBottom: '1px solid var(--border-hairline)'
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
              
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '16px' }}>
                <Compass size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Nuestra Misión</span>
              </div>

              <h2 
                className="font-serif" 
                style={{ 
                  fontSize: 'clamp(28px, 3.8vw, 42px)', 
                  color: 'var(--color-plum-900)', 
                  lineHeight: 1.22, 
                  marginBottom: '20px' 
                }}
              >
                Ser el centro de referencia digital para el bienestar de los salvadoreños
              </h2>

              <p style={{ fontSize: '17px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '36px' }}>
                Más allá de cualquier número, nuestro propósito es dejar una huella real en la comunidad salvadoreña. En nuestro país y en toda Latinoamérica, la salud mental ha sido históricamente una asignatura postergada. Creemos que cuando se acompaña a una persona a sanar o a una pareja a desactivar la hostilidad, el impacto positivo resuena en sus hijos, en su familia extendida y en toda la sociedad.
              </p>

              {/* Grid de 2 perfiles: Pareja y Persona Individual */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                
                {/* Card 1: Parejas y Diáspora */}
                <div 
                  style={{ 
                    backgroundColor: '#FAF7F2', 
                    borderRadius: '20px', 
                    padding: '30px', 
                    border: '1px solid var(--border-hairline)' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(158, 75, 51, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <HeartHandshake size={22} style={{ color: 'var(--color-clay)' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                        Para Parejas Salvadoreñas
                      </h3>
                      <span style={{ fontSize: '12px', color: 'var(--color-clay)', fontWeight: 600 }}>
                        En El Salvador o a miles de kilómetros
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                    Parejas de 30 a 45 años, viviendo por ejemplo en Montreal, Virginia o San Salvador, que después de años de relación sienten que la rutina, el cansancio o los silencios apagaron la complicidad. Les ayudamos a comunicarse sin reproches, a negociar roles y a reconstruir la intimidad sexual sin incomodidad.
                  </p>
                </div>

                {/* Card 2: Persona Individual */}
                <div 
                  style={{ 
                    backgroundColor: '#FAF7F2', 
                    borderRadius: '20px', 
                    padding: '30px', 
                    border: '1px solid var(--border-hairline)' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(158, 75, 51, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Users size={22} style={{ color: 'var(--color-clay)' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                        Para la Persona Adulta
                      </h3>
                      <span style={{ fontSize: '12px', color: 'var(--color-clay)', fontWeight: 600 }}>
                        Límites, apego y claridad emocional
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                    Mujeres y hombres profesionales (muchas veces viviendo solos en el exterior, como en Los Ángeles o Madrid) que buscan romper patrones dañinos, frenar el exceso de pensamientos que les quita el sueño, aprender a poner límites firmes a sus familias y construir vínculos sanos sin perder su paz mental.
                  </p>
                </div>

              </div>

              {/* El Diferencial de la Pertenencia Cultural */}
              <div 
                style={{ 
                  backgroundColor: 'rgba(158, 75, 51, 0.05)', 
                  border: '1px dashed var(--color-clay-border, rgba(158, 75, 51, 0.3))', 
                  borderRadius: '18px', 
                  padding: '24px 28px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start'
                }}
              >
                <Globe size={24} style={{ color: 'var(--color-clay)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '6px' }}>
                    El valor de la pertenencia cultural: un terapeuta que te comprende a la primera
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
                    En la psicología anglosajona o europea, el choque cultural es una barrera invisible. Muchos terapeutas fuera no comprenden lo que pesan las expectativas familiares salvadoreñas, la culpa de migrar o la dinámica de pareja cuando uno vive en Canadá y otro en Australia. En Amaré no tienes que explicar de cero tus raíces: tu terapeuta comparte tu idioma, tu historia y tu cultura.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. TECNOLOGÍA ÁGIL, TRATO 100% HUMANO (SIN BOTS) ────────── */}
        <section className="section" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: 'var(--color-canvas)' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
              
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '16px' }}>
                <MessageCircle size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Nuestra Filosofía de Servicio</span>
              </div>

              <h2 
                className="font-serif" 
                style={{ 
                  fontSize: 'clamp(28px, 3.8vw, 42px)', 
                  color: 'var(--color-plum-900)', 
                  lineHeight: 1.22, 
                  marginBottom: '20px' 
                }}
              >
                Tecnología moderna, pero sin poner a las personas a hablar con robots
              </h2>

              <p style={{ fontSize: '17px', color: 'var(--color-ink-secondary)', lineHeight: 1.75, marginBottom: '28px' }}>
                Nos encanta la tecnología porque nos permite enlazar dos husos horarios diferentes por Google Meet con un solo clic. Pero la tecnología debe estar al servicio de la calidez, no para levantar muros fríos entre el paciente y la clínica.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                
                <div style={{ backgroundColor: 'var(--color-surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ color: 'var(--color-clay)', fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>
                    1. Mensaje directo por WhatsApp
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
                    Cuando escribes, no te recibe un menú automatizado infinito. Te atiende nuestra asistente, una persona real que te orienta con respeto sobre honorarios, disponibilidad y dudas.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ color: 'var(--color-clay)', fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>
                    2. Enlace puntual por Google Meet
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
                    Tu enlace llega directo a tu calendario o WhatsApp. Sin descargar aplicaciones invasivas ni registros engorrosos. Solo das clic desde tu laptop o teléfono.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ color: 'var(--color-clay)', fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>
                    3. 1ª conversación de 30 min sin costo
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
                    No te pedimos pagar antes de saber si hay afinidad. Conversas 30 minutos con el terapeuta asignado a tu caso para que evalúen juntos si se sienten cómodos antes de iniciar.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ── 6. RIGOR CIENTÍFICO: LOS 4 PILARES CLÍNICOS ──────────────── */}
        <section 
          className="section" 
          style={{ 
            backgroundColor: 'var(--color-surface)', 
            paddingTop: '80px', 
            paddingBottom: '80px',
            borderTop: '1px solid var(--border-hairline)',
            borderBottom: '1px solid var(--border-hairline)'
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
              
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '16px' }}>
                <Brain size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Metodología Basada en Evidencia</span>
              </div>

              <h2 
                className="font-serif" 
                style={{ 
                  fontSize: 'clamp(28px, 3.8vw, 42px)', 
                  color: 'var(--color-plum-900)', 
                  lineHeight: 1.22, 
                  marginBottom: '20px' 
                }}
              >
                Ciencia, no consejos vacíos ni frases hechas
              </h2>

              <p style={{ fontSize: '17px', color: 'var(--color-ink-secondary)', lineHeight: 1.75, marginBottom: '36px' }}>
                No creemos en la autoayuda superficial ni en promesas mágicas de reconciliación en dos días. Nuestro abordaje terapéutico descansa sobre cuatro marcos con amplísimo respaldo empírico internacional:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                
                {/* Pilar 1: TCC */}
                <div style={{ padding: '26px', borderRadius: '18px', backgroundColor: '#FAF7F2', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-clay)' }} />
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                      Terapia Cognitivo-Conductual (TCC)
                    </h3>
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                    Identifica y reestructura distorsiones del pensamiento (catastrofismo, lectura de mente, generalizaciones) que disparan la ansiedad, los celos o el desgaste en la convivencia cotidiana.
                  </p>
                </div>

                {/* Pilar 2: DBT */}
                <div style={{ padding: '26px', borderRadius: '18px', backgroundColor: '#FAF7F2', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-clay)' }} />
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                      Terapia Dialéctico-Conductual (DBT)
                    </h3>
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                    Herramientas prácticas de regulación emocional, tolerancia al malestar y comunicación asertiva para evitar que una discusión menor termine en una explosión de ira o en días de ley del hielo.
                  </p>
                </div>

                {/* Pilar 3: Terapia Humanista */}
                <div style={{ padding: '26px', borderRadius: '18px', backgroundColor: '#FAF7F2', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-clay)' }} />
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                      Terapia Humanista Centrada en la Persona
                    </h3>
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                    Un espacio libre de juicios morales donde la persona es escuchada con aceptación genuina, facilitando el autoconocimiento y la toma de decisiones alineada a sus propios valores.
                  </p>
                </div>

                {/* Pilar 4: Terapia Integral de Pareja (IBCT) */}
                <div style={{ padding: '26px', borderRadius: '18px', backgroundColor: '#FAF7F2', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-clay)' }} />
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                      Terapia Integral de Pareja y Sexología
                    </h3>
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                    Combina la aceptación emocional de las diferencias irreconciliables con acuerdos de cambio concretos, desescalada de círculos viciosos y reconexión del deseo y la intimidad afectiva.
                  </p>
                </div>

              </div>

              {/* Ética: Evitar dependencia terapéutica */}
              <div 
                style={{ 
                  backgroundColor: '#FAF7F2', 
                  borderRadius: '16px', 
                  padding: '24px 28px', 
                  border: '1px solid var(--border-hairline)' 
                }}
              >
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  Nuestro compromiso ético: no crear dependencia en terapia
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                  Un proceso de psicoterapia en Centro Amaré tiene un inicio, objetivos definidos y un cierre planificado (generalmente entre 16 y 20 sesiones completas según la complejidad de la situación). La meta del terapeuta es darte las herramientas para que vivas tu vida con autonomía, no retenerte indefinidamente en consulta.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── 7. CTA BANNER FINAL: DAR EL PRIMER PASO ─────────────────── */}
        <section 
          className="section" 
          style={{ 
            backgroundColor: 'var(--color-canvas)', 
            paddingTop: '80px', 
            paddingBottom: '90px' 
          }}
        >
          <div className="container">
            <div 
              style={{ 
                maxWidth: '820px', 
                margin: '0 auto', 
                backgroundColor: 'var(--color-surface)', 
                borderRadius: '28px', 
                padding: '48px 36px', 
                textAlign: 'center',
                border: '1px solid var(--border-hairline)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '16px' }}>
                <HeartHandshake size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Primer Encuentro Clínico</span>
              </div>

              <h2 
                className="font-serif" 
                style={{ 
                  fontSize: 'clamp(26px, 3.6vw, 40px)', 
                  color: 'var(--color-plum-900)', 
                  lineHeight: 1.25, 
                  marginBottom: '16px' 
                }}
              >
                No tienes que resolver todo hoy. Solo da el primer paso.
              </h2>

              <p 
                style={{ 
                  fontSize: '16.5px', 
                  color: 'var(--color-ink-secondary)', 
                  lineHeight: 1.7, 
                  maxWidth: '620px', 
                  margin: '0 auto 32px' 
                }}
              >
                Conversemos 30 minutos sin costo por Google Meet. Nos cuentan qué les preocupa, conocen al profesional de nuestro equipo asignado a su caso y deciden con calma si es el momento de empezar.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('sobre_nosotros_cta_final', '1ª sesión gratis')}
                >
                  <span>Agendar 1ª conversación de 30 min sin costo</span>
                </HeroButton>

                <HeroButton
                  appearance="ink-sweep"
                  href="/precios"
                >
                  <span>Ver honorarios y plan mensual ($100 USD)</span>
                </HeroButton>
              </div>

              <div style={{ marginTop: '24px', fontSize: '13px', color: 'var(--color-ink-secondary)' }}>
                Atención 100% confidencial · Secreto profesional médico-sanitario estricto
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
