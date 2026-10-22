import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { HeroButton } from '../components/ui/hero-button';
import { Sparkles, ShieldCheck, CheckCircle2, Clock, Heart, Award, ArrowRight, HelpCircle, Lock } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function SexologiaClinicaPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera agendar una primera sesión de 30 minutos sin costo para consulta con la sexóloga clínica.");

  const areas = [
    {
      title: "Discrepancia en el deseo sexual",
      desc: "Cuando un miembro de la pareja desea mayor frecuencia o intimidad que el otro, provocando sentimientos de culpa, rechazo acumulado, presión y silencios incómodos."
    },
    {
      title: "Dificultades y bloqueos íntimos",
      desc: "Tratamiento clínico de la anorgasmia, dolor durante la relación (vaginismo / dispareunia), eyaculación precoz o disfunción eréctil desde una perspectiva biopsicosocial sin fármacos invasivos."
    },
    {
      title: "Reconexión tras etapas de crisis o crianza",
      desc: "Recuperar el erotismo y la intimidad conyugal después de tener hijos, periodos de estrés laboral prolongado, menopausia o secuelas emocionales de una infidelidad."
    },
    {
      title: "Tabúes, educación sexual y límites sanos",
      desc: "Un espacio 100% privado, laico y libre de prejuicios morales para conversar sobre fantasías, comunicación erótica y acuerdos de pareja sin culpa ni vergüenza."
    }
  ];

  const faqs = [
    {
      q: "¿Qué hace una sexóloga clínica en El Salvador?",
      a: "Una sexóloga clínica es una profesional de la psicología con formación especializada de posgrado en salud sexual y relacional. Diagnostica y trata bloqueos emocionales, dificultades de deseo, dolor o disfunciones íntimas mediante pautas científicas y ejercicios prácticos, sin necesidad de exámenes físicos en consulta."
    },
    {
      q: "¿La consulta de sexología se realiza en pareja o de forma individual?",
      a: "Puedes acudir en pareja o de forma individual. Si el motivo de consulta involucra la dinámica conyugal (como la discrepancia de deseo o la falta de intimidad), el trabajo conjunto suele ser muy enriquecedor, pero también es habitual iniciar sesiones individuales para trabajar bloqueos personales."
    },
    {
      q: "¿Cómo se garantiza la confidencialidad médica?",
      a: "Todas las sesiones se realizan bajo estricto secreto profesional regulado por el Código de Ética de la Junta de Vigilancia de la Profesión Psicológica (JVPP) de El Salvador. Las videollamadas están cifradas de extremo a extremo y tus datos nunca se comparten con terceros."
    },
    {
      q: "¿Cuánto cuesta la consulta y cómo funciona la primera sesión?",
      a: "En Centro Amaré ofrecemos una primera sesión de orientación de 30 minutos sin costo. Posteriormente, contamos con sesiones individuales o de pareja y planes mensuales accesibles de $100 USD (4 sesiones al mes = $25/sesión)."
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
                <span>Sexóloga Clínica Colegiada en El Salvador · Registro JVPP 3218</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.18, color: 'var(--color-plum-900)', marginBottom: '22px' }}>
                Sexóloga en El Salvador <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                  Sexología Clínica & Terapia Sexual Online
                </span>
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                La salud íntima es un derecho y un pilar esencial del bienestar personal y de pareja. Consulta con la <strong>Mtra. Iris Alarcón</strong>, sexóloga clínica colegiada ante la JVPP: abordaje científico, cálido y 100% libre de tabúes para El Salvador y la diáspora en el exterior.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
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

              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-clay)' }} /> Secreto profesional JVPP
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} style={{ color: 'var(--color-clay)' }} /> 1ª evaluación gratuita (30 min)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Heart size={16} style={{ color: 'var(--color-clay)' }} /> Parejas o individual
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Lock size={16} style={{ color: 'var(--color-clay)' }} /> Sin exámenes físicos invasivos
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Especialista Spotlight */}
        <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '48px', paddingBottom: '48px', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container" style={{ maxWidth: '840px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap', background: 'var(--color-surface)', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'var(--color-clay)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 700, flexShrink: 0 }}>
                IA
              </div>
              <div style={{ flex: 1, minWidth: '260px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Especialista a Cargo
                </span>
                <h3 className="font-serif" style={{ fontSize: '22px', color: 'var(--color-plum-900)', margin: '4px 0 8px' }}>
                  Mtra. Iris Alarcón · Sexóloga Clínica y Terapeuta de Pareja
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: '0 0 12px', lineHeight: 1.6 }}>
                  Licenciada en Psicología y Máster en Sexología Clínica y Terapia de Pareja. Colegiada ante la <strong>Junta de Vigilancia de la Profesión Psicológica de El Salvador (JVPP N.º 3218)</strong>. Más de 9 años de experiencia clínica acompañando a personas y parejas en San Salvador, todo El Salvador y compatriotas en EE. UU., Canadá y Europa.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', fontWeight: 600, color: 'var(--color-plum-900)' }}>
                  <span>✓ Enfoque biopsicosocial basado en evidencia</span>
                  <span>✓ Modalidad 100% online confidencial</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motivos de consulta */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <h2 className="font-serif" style={{ fontSize: '34px', color: 'var(--color-plum-900)', marginBottom: '14px' }}>
                ¿Cuándo consultar con una sexóloga clínica en El Salvador?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
                Muchas parejas y personas posponen la consulta durante años por vergüenza, resignación o miedo a ser juzgadas. La terapia sexual no busca &ldquo;reparar a nadie&rdquo;, sino desmontar la presión y devolver la calma y el placer a tu vida.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {areas.map((a, i) => (
                <div key={i} className="card-panel" style={{ padding: '28px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '10px' }}>
                    {a.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Enlace al artículo de blog de apoyo */}
            <div style={{ marginTop: '36px', textAlign: 'center' }}>
              <a 
                href="/blog/falta-de-deseo-sexual-en-la-pareja-soluciones"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600, color: 'var(--color-clay)', textDecoration: 'none' }}
              >
                <span>Leer guía clínica: Falta de deseo sexual en la pareja, causas y soluciones</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes SEO */}
        <section className="section" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '14px' }}>
                <HelpCircle size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Preguntas Frecuentes</span>
              </div>
              <h2 className="font-serif" style={{ fontSize: '32px', color: 'var(--color-plum-900)' }}>
                Dudas comunes sobre la consulta de sexología
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
        <section className="section" style={{ paddingTop: '0', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', background: 'var(--color-plum-900)', borderRadius: '24px', padding: '48px 32px', color: '#fff', maxWidth: '840px', margin: '0 auto', boxShadow: 'var(--shadow-md)' }}>
              <h3 className="font-serif" style={{ fontSize: '28px', color: '#fff', marginBottom: '12px' }}>
                Un espacio privado, profesional y sin prejuicios
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.88)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                Puedes consultar en pareja o de manera individual. Primera sesión de 30 minutos sin costo para exponer tus dudas con total discreción médica.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-clay"
                  style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 'var(--r-pill)', textDecoration: 'none', color: '#fff', fontWeight: 600 }}
                  onClick={() => trackWhatsAppClick('page_sexologia_mid', 'Agendar 30 min')}
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
