import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { HeroButton } from '../components/ui/hero-button';
import { Sparkles, ShieldCheck, CheckCircle2, Clock, Heart, MessageSquare } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function SexologiaClinicaPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera agendar una primera sesión de 30 minutos sin costo para consulta de Sexología Clínica.");

  const areas = [
    {
      title: "Discrepancia en el deseo sexual",
      desc: "Cuando uno de los dos desea mayor frecuencia o intimidad que el otro, generando culpa, rechazo acumulado y tensión en la pareja."
    },
    {
      title: "Dificultades y bloqueos íntimos",
      desc: "Abordaje clínico de la anorgasmia, dolor durante la relación, eyaculación precoz o disfunción eréctil desde una perspectiva biopsicosocial."
    },
    {
      title: "Reconexión tras etapas de crisis o crianza",
      desc: "Recuperar el erotismo y la intimidad después de tener hijos, periodos de estrés laboral prolongado o cirugías."
    },
    {
      title: "Tabúes, educación sexual y límites",
      desc: "Un espacio 100% privado y profesional para conversar sobre fantasías, dudas y acuerdos eróticos sin vergüenza ni juicio moral."
    }
  ];

  return (
    <div className="app-wrapper">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '18px' }}>
                <Sparkles size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Especialidad Médica y Clínica · Centro Amaré</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.18, color: 'var(--color-plum-900)', marginBottom: '22px' }}>
                Sexología Clínica en El Salvador <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                  Rigurosa, Médica y Libre de Tabúes
                </span>
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                La intimidad es un pilar fundamental de la salud y del vínculo de pareja. Abordamos dificultades en el deseo, bloqueos y disfunciones con rigor científico, confidencialidad médica y absoluta empatía.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('page_sexologia_hero', '1ª sesión gratis')}
                >
                  <span>Agendar 1ª sesión de 30 min sin costo</span>
                </HeroButton>

                <HeroButton
                  appearance="ink-sweep"
                  href="/test-de-pareja"
                >
                  <span>Test de pareja e intimidad (2 min)</span>
                </HeroButton>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-clay)' }} /> Secreto profesional estricto
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} style={{ color: 'var(--color-clay)' }} /> 1ª conversación sin costo (30 min)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Heart size={16} style={{ color: 'var(--color-clay)' }} /> Parejas o individual
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
                Áreas de abordaje en sexología clínica
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)' }}>
                Muchas dificultades sexuales se prolongan durante años por vergüenza a consultar. La intervención clínica adecuada transforma la calidad de vida y el vínculo.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {areas.map((a, i) => (
                <div key={i} className="card-panel" style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--color-plum-900)', marginBottom: '10px' }}>
                    {a.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {a.desc}
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
                Un espacio privado, médico y sin prejuicios
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                Puedes consultar en pareja o de manera individual. Primera sesión de 30 minutos por Google Meet para exponer tu motivo de consulta con total discreción.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clay"
                style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 'var(--r-pill)', textDecoration: 'none', color: '#fff', fontWeight: 600 }}
                onClick={() => trackWhatsAppClick('page_sexologia_mid', 'Agendar 30 min')}
              >
                <span>Hablar con la asistente por WhatsApp →</span>
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
