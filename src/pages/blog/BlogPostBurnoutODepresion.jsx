import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, BatteryCharging, AlertTriangle, CheckCircle2, MessageCircle, HelpCircle } from 'lucide-react';

export default function BlogPostBurnoutODepresion() {
  const whatsappUrl = "/chat?text=" + encodeURIComponent("Hola, leí el artículo sobre burnout y depresión en Centro Amaré y quisiera agendar una primera sesión de evaluación sin costo.");

  return (
    <div className="app-wrapper">
      <Navbar />

      <main id="main-content">
        {/* Header Article */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <a 
              href="/blog" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', color: 'var(--color-clay)', fontWeight: 600, textDecoration: 'none', marginBottom: '20px' }}
            >
              <ArrowLeft size={16} /> Volver al Blog de Psicología
            </a>

            <div className="pill-badge pill-badge-clay" style={{ marginBottom: '16px' }}>
              <span>Estrés Crónico & Depresión</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Burnout o depresión: cómo diferenciarlos cuando el agotamiento laboral se vuelve emocional
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Mtro. Rafael Franco</strong> · Psicólogo Clínico Centro Amaré (JVPP 5144)</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> 6 min de lectura</span>
              <span>•</span>
              <span>Actualizado 2026</span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="section" style={{ paddingTop: '0', paddingBottom: '72px' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            
            <div className="article-body" style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--color-ink-primary)' }}>
              
              <p style={{ fontSize: '19px', color: 'var(--color-plum-900)', fontWeight: 500, lineHeight: 1.6, marginBottom: '24px' }}>
                Te despiertas cansado después de dormir ocho horas. Te cuesta concentrarte, sientes una apatía profunda hacia tus responsabilidades y cualquier notificación del trabajo te genera un nudo en el estómago y ganas de llorar. ¿Es cansancio normal por exceso de trabajo (burnout) o estás entrando en un cuadro de depresión?
              </p>

              <p>
                Ambos trastornos comparten síntomas como la fatiga crónica, los problemas de sueño y la irritabilidad. Sin embargo, no se originan igual ni se tratan de la misma forma. Confundirlos puede llevarte a tomar decisiones equivocadas (como renunciar impulsivamente a un trabajo cuando el problema es depresivo, o tomar pastillas sin poner límites laborales cuando el problema es un entorno tóxico de explotación).
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;Hay una pregunta clínica muy sencilla que ordena casi toda la confusión: Si te dieran tres semanas de vacaciones pagadas en un lugar tranquilo sin trabajo, ¿volvería tu ilusión por leer, reír y disfrutar? Si la respuesta es sí, es burnout. Si la respuesta es &lsquo;me llevaría la tristeza en la maleta&rsquo;, estamos ante una depresión.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                Las tres dimensiones clínicas del Síndrome de Burnout
              </h2>
              <p>
                Reconocido por la Organización Mundial de la Salud (OMS) en la CIE-11 como un fenómeno ocupacional, el burnout se compone de tres pilares específicos:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', margin: '24px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>1. Agotamiento emocional extremo</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Sensación de que la &ldquo;batería interna&rdquo; está al 2% y no recarga ni los fines de semana. Dolores de cabeza, bruxismo nocturno y caída de defensas.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>2. Despersonalización y cinismo</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Para protegerte del dolor, te vuelves frío, irónico o distante con tus clientes, pacientes, jefes o compañeros. Todo te irrita.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>3. Pérdida del sentido de logro</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Sientes que hagas lo que hagas nada tiene valor, que eres incompetente o que tu esfuerzo no cambia nada en la empresa.
                  </p>
                </div>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                Cuándo el burnout se convierte en depresión clínica
              </h2>
              <p>
                El burnout surge circunscrito al ámbito laboral o académico. Pero cuando el estrés crónico y los niveles elevados de cortisol se mantienen durante meses o años sin descanso ni límites, el cerebro sufre alteraciones neuroinflamatorias y el malestar &ldquo;hace metástasis&rdquo; hacia todas las demás áreas de la vida:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Anhedonia global:</strong> Ya no solo no disfrutas el trabajo, tampoco disfrutas jugar con tus hijos, salir con tu pareja o escuchar tu música favorita.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Sentimiento de culpa existencial:</strong> Sientes que eres una carga para tu familia o que tu vida carece por completo de propósito.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Desesperanza hacia el futuro:</strong> La certeza irracional de que las cosas nunca van a mejorar.
                </li>
              </ul>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                ¿Qué hacer para frenar la espiral?
              </h2>
              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Higiene digital y desconexión estricta:</strong> Silenciar notificaciones y correos laborales después de las 6:00 p.m. y durante todo el fin de semana. Tu cerebro necesita saber que la jornada terminó.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Aprender a decir &ldquo;no&rdquo; sin justificarte durante diez minutos:</strong> Poner límites asertivos a la sobrecarga que no te corresponde.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Evaluación psicológica profesional:</strong> Un proceso terapéutico te ayuda a desmantelar la autoexigencia desmedida (creer que tu valor depende únicamente de tu rendimiento) y a recuperar tu bienestar.
                </li>
              </ol>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Sientes que el agotamiento está ganando la batalla?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  No esperes a un colapso físico o emocional. En Centro Amaré te brindamos una primera sesión diagnóstica de 30 minutos sin costo con psicólogos colegiados especializados.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}
                  >
                    <MessageCircle size={18} />
                    <span>Primera sesión de 30 min sin costo</span>
                  </a>
                  <a
                    href="/terapia-individual"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Ver terapia individual online</span>
                  </a>
                </div>
              </div>

              {/* Artículos Relacionados */}
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)' }}>
                <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--color-plum-900)', marginBottom: '18px' }}>
                  Artículos relacionados recomendados
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <a
                    href="/blog/como-controlar-la-ansiedad"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Ansiedad & Estrés</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo controlar la ansiedad: qué funciona de verdad según la psicología clínica
                    </h4>
                  </a>
                  <a
                    href="/blog/como-mejorar-la-autoestima-sin-frases-hechas"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Salud Personal</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo mejorar la autoestima sin repetirte frases que no te crees
                    </h4>
                  </a>
                </div>
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
