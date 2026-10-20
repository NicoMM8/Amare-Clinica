import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Testimonials from '../components/Testimonials';
import { HeroButton } from '../components/ui/hero-button';
import { Award, BookOpen, CheckCircle2, ShieldCheck, HeartHandshake, Brain, Clock, MessageCircle, Star } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function IrisAlarconPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría agendar la primera conversación de 30 minutos sin costo con la psicóloga Iris Alarcón.");

  return (
    <div className="app-wrapper">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '18px' }}>
                <Award size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Dirección Clínica · Registro Profesional JVPP N.º 47096 El Salvador</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.18, color: 'var(--color-plum-900)', marginBottom: '22px' }}>
                Psicóloga Iris Alarcón · El Salvador <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                  Terapeuta de Pareja Certificada y Sexología Clínica
                </span>
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                Soy psicóloga clínica salvadoreña acreditada ante la Junta de Vigilancia de la Profesión en Psicología de El Salvador (Registro Profesional JVPP N.° 47096). Con más de 9 años de experiencia en consulta privada y máster especializado, brindo un espacio seguro, neutral y con rigor científico para parejas y adultos en El Salvador y en el exterior.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('page_iris_hero', '1ª sesión gratis con Iris')}
                >
                  <span>Agendar 1ª conversación de 30 min sin costo</span>
                </HeroButton>

                <HeroButton
                  appearance="ink-sweep"
                  href="/test-de-pareja"
                >
                  <span>Test de pareja (2 min)</span>
                </HeroButton>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-clay)' }} /> Registro Profesional JVPP N.º 47096
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} style={{ color: 'var(--color-clay)' }} /> +9 años de experiencia clínica
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={16} style={{ color: 'var(--color-clay)' }} /> Máster en Pareja y Sexología
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Bio & Credentials Section */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
              
              {/* Photo & Card */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  maxWidth: '380px',
                  margin: '0 auto',
                  background: '#FFFFFF',
                  borderRadius: '28px',
                  padding: '24px',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <div style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    margin: '0 auto 20px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                  }}>
                    <picture>
                      <source srcSet="/images/iris-alarcon.webp" type="image/webp" />
                      <img
                        src="/images/iris-alarcon.jpg"
                        alt="Licda. Iris Alarcón — Psicóloga Clínica Colegiada JVPP El Salvador"
                        width="180"
                        height="180"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </picture>
                  </div>
                  <h2 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '4px' }}>
                    Lic. Iris Alarcón
                  </h2>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                    Psicóloga Clínica Colegiada · Registro JVPP N.º 47096 El Salvador
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Especialista en Terapia Integral de Parejas (IBCT), Terapia Cognitivo-Conductual (TCC) y Sexología Clínica.
                  </p>
                </div>
              </div>

              {/* Trajectory & Philosophy */}
              <div>
                <h2 className="font-serif" style={{ fontSize: '32px', color: 'var(--color-plum-900)', marginBottom: '18px' }}>
                  Psicología con base científica, calidez humana y sin tabúes
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '18px' }}>
                  "Durante más de 9 años de atención clínica en El Salvador y con salvadoreños en el exterior (EE. UU., Canadá, Europa), he visto cómo las parejas desgastan su relación intentando 'aguantar' o discutiendo en bucles interminables."
                </p>
                <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                  "La terapia no consiste en buscar culpables ni en forzar a nadie a cambiar contra su voluntad. Consiste en mapear con rigor científico qué está fallando en la comunicación y brindar herramientas concretas para que ambos miembros recuperen la complicidad y la paz mental."
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--color-plum-900)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-clay)' }} />
                    <span><strong>Acreditación Sanitaria Legal:</strong> Colegiada ante la JVPP de El Salvador (Reg. N.º 47096).</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--color-plum-900)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-clay)' }} />
                    <span><strong>Postgrado Especializado:</strong> Máster en Terapia de Pareja y Sexología Clínica.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--color-plum-900)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-clay)' }} />
                    <span><strong>Enfoques de Mayor Evidencia:</strong> Terapia Integral de Parejas (IBCT), TCC y DBT.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--color-plum-900)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-clay)' }} />
                    <span><strong>Sensibilidad Cultural:</strong> Especializada en dinámicas transnacionales y duelo migratorio.</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                >
                  <MessageCircle size={18} />
                  <span>Hablar con Iris en sesión de 30 min sin costo</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Verified Reviews Section */}
        <Testimonials />

        {/* Clinical Framework & Guarantee */}
        <section className="section" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container" style={{ maxWidth: '880px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="font-serif" style={{ fontSize: '32px', color: 'var(--color-plum-900)', marginBottom: '14px' }}>
                Los 4 principios éticos de mi consulta
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)' }}>
                Lo que puedes esperar al iniciar tu proceso en Centro Amaré:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  1. Neutralidad Absoluta
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                  En terapia de pareja nunca tomo bandos ni dicto quién tiene la razón. Mi función es ayudarles a entender la dinámica y reconstruir el acuerdo.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  2. Cero Jerga Innecesaria
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Hablamos de tus problemas reales en un lenguaje claro, cotidiano y con ejercicios aplicables desde la primera semana.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  3. Alta Terapéutica Formal
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                  El objetivo es su autonomía, no crear una dependencia de por vida con la consulta. Al alcanzar los objetivos, cerramos el tratamiento.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>
                  4. Conexión Cultural Íntima
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Sé qué significa la familia salvadoreña, los sacrificios migratorios y el esfuerzo que implica salir adelante.
                </p>
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
