import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { HeroButton } from '../components/ui/hero-button';
import { Brain, ShieldCheck, CheckCircle2, Clock, Globe, ArrowRight, Sparkles, Award, Gift, HelpCircle, MapPin } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function TerapiaIndividualPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera agendar mi primera sesión de orientación de 30 minutos sin costo para Terapia Individual en Centro Amaré.");

  const problems = [
    {
      title: "Ansiedad, estrés y agotamiento (Clínica Antiestrés)",
      desc: "Rumiación nocturna constante, hipervigilancia, crisis de pánico, miedo al futuro y dificultad para desconectar la mente del trabajo y el estrés cotidiano."
    },
    {
      title: "Poner límites y superar la culpa",
      desc: "Dificultad para decir 'no', miedo al rechazo o abandono, asumir culpas ajenas y desgaste emocional severo por priorizar siempre las demandas de los demás."
    },
    {
      title: "Rupturas amorosas, duelo y apego afectivo",
      desc: "Procesar el dolor de una separación, desarmar apegos dependientes y reconstruir la identidad personal con herramientas clínicas estructuradas."
    },
    {
      title: "Regulación emocional y depresión",
      desc: "Tratamiento de la desmotivación profunda, apatía, autocrítica destructiva, síndrome del impostor y dificultades para encontrar sentido vital."
    }
  ];

  const faqs = [
    {
      q: "¿Cómo saber si necesito consultar con un psicólogo en El Salvador?",
      a: "Si el sobrepensamiento, la ansiedad, la tristeza o los problemas de relación te impiden disfrutar tu día a día o sientes que tus herramientas habituales ya no alcanzan, la ayuda psicológica profesional te ofrece un marco estructurado y seguro para recuperar el equilibrio."
    },
    {
      q: "¿Ofrecen ayuda psicológica gratuita o de bajo costo?",
      a: "En Centro Amaré brindamos una primera sesión de evaluación diagnóstica de 30 minutos 100% gratuita y sin compromiso. Para el tratamiento continuo, disponemos de planes mensuales accesibles y estructurados según tu país de residencia y necesidad clínica."
    },
    {
      q: "¿Qué credenciales tienen los psicólogos de Centro Amaré?",
      a: "Todo nuestro equipo clínico cuenta con titulación universitaria de licenciatura, maestrías de posgrado en psicoterapia clínica y registro oficial activo ante la Junta de Vigilancia de la Profesión Psicológica (JVPP) de El Salvador."
    },
    {
      q: "¿Atienden a personas en San Salvador y otros departamentos?",
      a: "Sí, al trabajar en modalidad online mediante videollamada cifrada, atendemos a pacientes en San Salvador, Santa Tecla, Antiguo Cuscatlán, San Miguel, Santa Ana y a toda la diáspora salvadoreña en Estados Unidos, Canadá y Europa."
    }
  ];

  return (
    <div className="app-wrapper">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '56px' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
              
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '18px' }}>
                <Award size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Psicólogos en El Salvador · Registro Profesional JVPP</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.18, color: 'var(--color-plum-900)', marginBottom: '22px' }}>
                Psicólogos en El Salvador <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                  Clínica Psicológica y Terapia Online
                </span>
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                Consulta de psicología clínica para adultos en San Salvador, todo El Salvador y la diáspora en el exterior. Terapia basada en evidencia científica (TCC y ACT) para ansiedad, estrés laboral, límites familiares y regulación emocional.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('page_individual_hero', '1ª sesión gratis')}
                >
                  <span>Agendar 1ª sesión de 30 min sin costo</span>
                </HeroButton>

                <HeroButton
                  appearance="ink-sweep"
                  href="/precios"
                >
                  <span>Ver plan mensual ($100/mes)</span>
                </HeroButton>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-clay)' }} /> Secreto profesional estricto JVPP
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} style={{ color: 'var(--color-clay)' }} /> 1ª sesión diagnóstica sin costo (30 min)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={16} style={{ color: 'var(--color-clay)' }} /> Modalidad 100% online por Google Meet
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Ayuda Psicológica Inicial Gratuita (Targeting: ayuda psicologica gratuita) */}
        <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '44px', paddingBottom: '44px', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container" style={{ maxWidth: '840px' }}>
            <div style={{ background: 'var(--color-surface)', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-clay)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Gift size={28} />
              </div>
              <div style={{ flex: 1, minWidth: '260px' }}>
                <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--color-plum-900)', margin: '0 0 6px' }}>
                  ¿Buscas orientación psicológica inicial sin costo?
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: '0 0 12px', lineHeight: 1.6 }}>
                  Sabemos que dar el primer paso puede generar dudas económicas. En Centro Amaré ofrecemos una <strong>primera llamada de 30 minutos 100% gratuita</strong> para evaluar tu caso con un psicólogo colegiado, responder tus preguntas y trazar una propuesta personalizada sin ningún compromiso.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 700, color: 'var(--color-clay)', textDecoration: 'none' }}
                >
                  <span>Solicitar mi sesión de orientación gratuita por WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Motivos de consulta / Áreas Clínicas */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <h2 className="font-serif" style={{ fontSize: '34px', color: 'var(--color-plum-900)', marginBottom: '14px' }}>
                Áreas de atención en nuestra clínica psicológica
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
                Trabajamos con protocolos de Terapia Cognitivo-Conductual (TCC) y Terapias de Tercera Generación (ACT/DBT). Objetivos claros, tareas prácticas y avances medibles desde las primeras semanas.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {problems.map((p, i) => (
                <div key={i} className="card-panel" style={{ padding: '28px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '10px' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Enlaces de interés a guías clínicas */}
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <a 
                href="/blog/como-controlar-la-ansiedad"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14.5px', fontWeight: 600, color: 'var(--color-clay)', textDecoration: 'none' }}
              >
                <span>Guía: Cómo controlar la ansiedad según la TCC</span>
                <ArrowRight size={15} />
              </a>
              <a 
                href="/blog/como-elegir-un-psicologo-en-el-salvador"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14.5px', fontWeight: 600, color: 'var(--color-clay)', textDecoration: 'none' }}
              >
                <span>Guía: Cómo elegir psicólogo en El Salvador (JVPP)</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Cobertura Local (SEO local departamentos) */}
        <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
            <div className="pill-badge pill-badge-clay" style={{ marginBottom: '14px' }}>
              <MapPin size={15} style={{ color: 'var(--color-clay)' }} />
              <span>Cobertura Nacional e Internacional</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '30px', color: 'var(--color-plum-900)', marginBottom: '14px' }}>
              Psicólogos en San Salvador y todo el territorio salvadoreño
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 24px' }}>
              Atendemos de forma regular a pacientes en <strong>San Salvador, Santa Tecla, Antiguo Cuscatlán, San Miguel, Santa Ana, Sonsonate</strong> y a compatriotas residentes en el exterior (California, Texas, Virginia, Maryland, Canadá y España) mediante sesiones online en su propio código cultural y horario flexible.
            </p>
          </div>
        </section>

        {/* Preguntas Frecuentes FAQ */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '14px' }}>
                <HelpCircle size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Preguntas Frecuentes</span>
              </div>
              <h2 className="font-serif" style={{ fontSize: '32px', color: 'var(--color-plum-900)' }}>
                Dudas sobre la atención psicológica en El Salvador
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {faqs.map((f, idx) => (
                <div key={idx} style={{ background: '#FFFFFF', padding: '24px', borderRadius: '18px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                    {f.q}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner CTA */}
        <section className="section" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', background: 'var(--color-plum-900)', borderRadius: '24px', padding: '48px 32px', color: '#fff', maxWidth: '840px', margin: '0 auto', boxShadow: 'var(--shadow-md)' }}>
              <h3 className="font-serif" style={{ fontSize: '28px', color: '#fff', marginBottom: '12px' }}>
                Tu bienestar mental no puede seguir esperando
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.88)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                Comienza hoy con una primera sesión diagnóstica de 30 minutos sin costo para conocer a tu terapeuta y aclarar tus dudas con total discreción.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clay"
                  style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 'var(--r-pill)', textDecoration: 'none', color: '#fff', fontWeight: 600 }}
                  onClick={() => trackWhatsAppClick('page_individual_mid', 'Agendar 30 min')}
                >
                  <span>Hablar con la asistente por WhatsApp →</span>
                </a>
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
