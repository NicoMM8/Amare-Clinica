import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { HeroButton } from '../components/ui/hero-button';
import { Brain, ShieldCheck, CheckCircle2, Clock, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function TerapiaIndividualPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera agendar mi primera sesión gratuita de 30 minutos para Terapia Individual.");

  const problems = [
    {
      title: "Ansiedad, estrés y sobrepensamiento",
      desc: "Rumiación nocturna constante, hipervigilancia, miedo al futuro y dificultad para desconectar la mente del trabajo o las preocupaciones."
    },
    {
      title: "Poner límites y patrones de complacencia",
      desc: "Dificultad para decir 'no', miedo al rechazo o abandono, asumir culpas ajenas y desgaste emocional por priorizar siempre a los demás."
    },
    {
      title: "Rupturas amorosas y duelo afectivo",
      desc: "Procesar el dolor de una separación, desarmar apegos dependientes y reconstruir la identidad personal con herramientas clínicas."
    },
    {
      title: "Regulación emocional y autocrítica severa",
      desc: "Exigencia desmedida con uno mismo, síndrome del impostor, frustración recurrente o cambios bruscos de estado de ánimo."
    }
  ];

  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '18px' }}>
                <Brain size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Psicología Online El Salvador · Psicóloga Clínica Colegiada JVPP</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.18, color: 'var(--color-plum-900)', marginBottom: '22px' }}>
                Psicología Online El Salvador · Terapia Individual <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                  Terapia para Ansiedad y Límites Online
                </span>
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                Consulta con psicóloga clínica en El Salvador para adultos en el país y en el exterior. Terapia para ansiedad y límites online con base científica (TCC y DBT): herramientas prácticas para dejar de sobrepensar, poner límites sin culpa y recuperar tu bienestar.
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

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-clay)' }} /> 100% Confidencial
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} style={{ color: 'var(--color-clay)' }} /> 30 min iniciales sin costo
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={16} style={{ color: 'var(--color-clay)' }} /> Google Meet privado
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Motivos de consulta */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
              <h2 className="font-serif" style={{ fontSize: '34px', color: 'var(--color-plum-900)', marginBottom: '14px' }}>
                ¿En qué te podemos ayudar?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)' }}>
                No te damos frases de autoayuda genéricas: te enseñamos protocolos cognitivo-conductuales prácticos para intervenir en tus pensamientos y hábitos.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {problems.map((p, i) => (
                <div key={i} className="card-panel" style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--color-plum-900)', marginBottom: '10px' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner CTA */}
        <section className="section" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', background: 'var(--color-plum-900)', borderRadius: '24px', padding: '44px 32px', color: '#fff', maxWidth: '840px', margin: '0 auto' }}>
              <h3 className="font-serif" style={{ fontSize: '28px', color: '#fff', marginBottom: '12px' }}>
                Da el primer paso hoy mismo
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                En la primera sesión de 30 minutos sin costo, la terapeuta escucha tu situación personal y define un plan de trabajo claro.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clay"
                style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 'var(--r-pill)', textDecoration: 'none', color: '#fff', fontWeight: 600 }}
                onClick={() => trackWhatsAppClick('page_individual_mid', 'Agendar 30 min')}
              >
                <span>Agendar sesión de encuadre (30 min gratis) →</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
