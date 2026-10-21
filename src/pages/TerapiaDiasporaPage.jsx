import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { HeroButton } from '../components/ui/hero-button';
import { BentoMosaic } from '../components/cojeev/BentoMosaic';
import { Globe, ShieldCheck, CheckCircle2, Clock, Check, X, ArrowRight } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function TerapiaDiasporaPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, vivo en el extranjero y quisiera información para agendar la sesión inicial sin costo de 30 minutos en Centro Amaré.");

  return (
    <div className="app-wrapper">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '18px' }}>
                <Globe size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Psicólogos Salvadoreños Online · EE. UU., Canadá y el Exterior</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.18, color: 'var(--color-plum-900)', marginBottom: '22px' }}>
                Psicólogos salvadoreños online para quienes viven lejos de casa
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                Vivas en Estados Unidos, Canadá, Europa o en El Salvador, aquí hablamos tu idioma y entendemos tu contexto sin que tengas que explicar de dónde vienes. Atención psicológica con psicóloga clínica colegiada (JVPP), adaptada a tu huso horario y en tu mismo código cultural.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  onClick={() => trackWhatsAppClick('page_diaspora_hero', '1ª sesión sin costo')}
                >
                  <span>Agendar 1ª sesión de 30 min sin costo</span>
                </HeroButton>

                <HeroButton
                  appearance="ink-sweep"
                  href="/test-de-pareja"
                >
                  <span>Hacer test de pareja online</span>
                </HeroButton>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={16} style={{ color: 'var(--color-clay)' }} /> Montreal, Los Ángeles, Washington, Madrid
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} style={{ color: 'var(--color-clay)' }} /> Adaptado a tu huso horario
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-clay)' }} /> $100 USD/mes vs $200/h fuera
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Comparativa */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
              <h2 className="font-serif" style={{ fontSize: '34px', color: 'var(--color-plum-900)', marginBottom: '14px' }}>
                Cerca de tus raíces, aunque vivas a miles de kilómetros
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)' }}>
                Las emociones más profundas se sienten y se sanan en la lengua materna y con los códigos compartidos de tu tierra.
              </p>
            </div>

            <div className="grid-2">
              <div className="comparison-card comparison-negative">
                <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-ink-primary)' }}>
                  Hacer terapia con un profesional extranjero
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: 'var(--color-ink-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <X size={18} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                    <span>Tienes que traducir tus sentimientos o usar términos en inglés o francés que no capturan la misma hondura.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <X size={18} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                    <span>Incomprensión de las dinámicas de la familia salvadoreña, la culpa migratoria o las remesas.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <X size={18} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                    <span>Tarifas elevadísimas ($150 a $250 USD por sesión) que hacen inviable sostener el proceso completo.</span>
                  </li>
                </ul>
              </div>

              <div className="comparison-card comparison-positive">
                <span className="positive-pill-tag">Centro Amaré</span>
                <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-plum-900)' }}>
                  Tu psicóloga salvadoreña online
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: 'var(--color-ink-primary)' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Check size={18} style={{ color: '#1B873F', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Tu misma forma de hablar:</strong> Te expresas con naturalidad y con los matices propios de nuestra tierra.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Check size={18} style={{ color: '#1B873F', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Parejas a distancia o binacionales:</strong> Conexión simultánea por Google Meet con ajuste de husos horarios.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Check size={18} style={{ color: '#1B873F', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Plan mensual de $100 USD:</strong> Hasta 4 sesiones mensuales para que el costo no sea obstáculo.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GEO & Timezone Adaptability Section */}
        <section className="section" style={{ backgroundColor: 'var(--color-canvas)', paddingTop: '64px', paddingBottom: '64px' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '12px' }}>
                <span>Cobertura Internacional y Flexibilidad</span>
              </div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                Horarios vespertinos y de fin de semana adaptados a EST, CST, PST y CET
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '680px', margin: '0 auto' }}>
                Coordinamos las sesiones privadas por Google Meet teniendo en cuenta tu jornada laboral y huso horario, sin importar en qué ciudad del mundo residas.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '18px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
                <h3 className="font-serif" style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  Zona Este (EST)
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', marginBottom: '10px', lineHeight: 1.5 }}>
                  <strong>Montreal, Washington D.C., Nueva York, Miami.</strong>
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-clay)', fontWeight: 600 }}>
                  Sesiones desde las 6:00 PM o mañanas de sábado.
                </span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '18px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
                <h3 className="font-serif" style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  Zona Centro (CST)
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', marginBottom: '10px', lineHeight: 1.5 }}>
                  <strong>Houston, Dallas, Chicago, San Salvador.</strong>
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-clay)', fontWeight: 600 }}>
                  Mismo huso horario o 1 hora de diferencia.
                </span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '18px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
                <h3 className="font-serif" style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  Zona Pacífico (PST)
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', marginBottom: '10px', lineHeight: 1.5 }}>
                  <strong>Los Ángeles, San Francisco, Seattle.</strong>
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-clay)', fontWeight: 600 }}>
                  Horarios de tarde y fin de semana disponibles.
                </span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '18px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
                <h3 className="font-serif" style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  Europa Central (CET)
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', marginBottom: '10px', lineHeight: 1.5 }}>
                  <strong>Madrid, Barcelona, Milán, París.</strong>
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-clay)', fontWeight: 600 }}>
                  Franjas adaptadas al mediodía y tarde noche europea.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Mosaic Transcultural & Especialidades */}
        <BentoMosaic />

        {/* Banner CTA */}
        <section className="section" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', background: 'var(--color-plum-900)', borderRadius: '24px', padding: '44px 32px', color: '#fff', maxWidth: '840px', margin: '0 auto' }}>
              <h3 className="font-serif" style={{ fontSize: '28px', color: '#fff', marginBottom: '12px' }}>
                Conéctate con tu bienestar desde donde estés
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                Agenda tu sesión inicial de 30 minutos sin costo. Nuestra asistente coordinará el horario ideal según tu ciudad de residencia.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-clay"
                style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 'var(--r-pill)', textDecoration: 'none', color: '#fff', fontWeight: 600 }}
                onClick={() => trackWhatsAppClick('page_diaspora_mid', 'Agendar 30 min')}
              >
                <span>Escribir por WhatsApp a la asistente →</span>
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
