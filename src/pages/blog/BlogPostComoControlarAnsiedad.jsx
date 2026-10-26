import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Activity, ShieldCheck, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

export default function BlogPostComoControlarAnsiedad() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí la guía clínica sobre cómo controlar la ansiedad en Centro Amaré y quisiera consultar por una sesión de evaluación sin costo.");

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
              <span>Ansiedad Clínica · Enfoque TCC</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Cómo controlar la ansiedad: qué funciona de verdad según la psicología clínica y en qué orden
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Lic. Ernesto Mejía</strong> · Psicólogo Clínico Centro Amaré (JVPP 9314)</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> 7 min de lectura</span>
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
                Si alguna vez has intentado calmar un ataque de ansiedad respirando hondo y sentiste que te faltaba aún más el aire y que el pecho te latía con más furia, no hiciste nada mal. Lo que casi nadie explica es que <strong>las técnicas contra la ansiedad no fallan por ser malas: fallan por el momento y el objetivo con el que se aplican</strong>.
              </p>

              <p>
                Cuando usas la respiración diafragmática, un té o una aplicación del móvil como un intento desesperado de <em>apagar la taquicardia ya</em>, tu cerebro interpreta exactamente lo contrario: &ldquo;si tengo que hacer todo esto de urgencia, significa que mi cuerpo está en un peligro mortal&rdquo;. Y la alarma se intensifica.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;La ansiedad no se cura luchando contra ella. Se resuelve cuando le demuestras a tu sistema nervioso que puedes experimentar sus síntomas sin salir corriendo ni catastrofizar.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                La trampa de la ansiedad: La lucha que alimenta el fuego
              </h2>
              <p>
                La ansiedad es una respuesta biológica normal diseñada para salvarte de un depredador. Ante una amenaza percibida, segrega adrenalina y cortisol: el corazón bombea sangre a las piernas (taquicardia), la respiración se acelera para oxigenar los músculos (sensación de ahogo) y el estómago detiene la digestión (nudo estomacal).
              </p>
              <p>
                El problema en el ser humano moderno es el <strong>miedo al miedo</strong>:
              </p>

              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-subtle)', margin: '24px 0' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '8px' }}>El bucle de retroalimentación:</div>
                <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.7 }}>
                  1. Sientes un síntoma físico inocuo (mareo por cansancio o un latido más fuerte) <br />
                  → 2. Pensamiento automático: <em>&ldquo;¿Y si me va a dar un infarto o me vuelvo loco?&rdquo;</em> <br />
                  → 3. El cerebro se asusta y libera más adrenalina <br />
                  → 4. La taquicardia sube y confirmas tu temor: <em>&ldquo;¡Ves! ¡Algo malo me está pasando!&rdquo;</em> <br />
                  → 5. Empiezas a evitar salir, conducir o quedarte solo/a para que no te repita.
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                El orden clínico que sí funciona (según la Terapia Cognitivo-Conductual)
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '24px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-clay)', marginBottom: '6px' }}>PASO 1 · COMPRENSIÓN PSICOEDUCATIVA</div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>Nombrar la falsa alarma</h3>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-ink-secondary)' }}>
                    Comprender fisiológicamente que una taquicardia por ansiedad no es una arritmia maligna, y que la sensación de asfixia ocurre por exceso de oxígeno (hiperventilación), no por falta de aire. El cuerpo está funcionando a la perfección ante un peligro imaginario.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-clay)', marginBottom: '6px' }}>PASO 2 · DEJAR DE LUCHAR CON EL SÍNTOMA</div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>Aceptación somática y desensibilización</h3>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-ink-secondary)' }}>
                    En lugar de tensarte y pedirle a tu corazón que pare, le dices internamente: <em>&ldquo;Vale corazón, late rápido si quieres. Sé que es adrenalina y sé que en 15 minutos tu curva bajará sola&rdquo;</em>. Al quitarle la resistencia, la adrenalina se metaboliza más rápido.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-clay)', marginBottom: '6px' }}>PASO 3 · REESTRUCTURACIÓN DE PENSAMIENTOS CATASTRÓFICOS</div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>Separar probabilidad de posibilidad</h3>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-ink-secondary)' }}>
                    Cuestionar los pensamientos del tipo <em>&ldquo;me voy a desmayar&rdquo;</em> con evidencia científica: en la ansiedad la presión arterial sube (por la adrenalina), mientras que para desmayarse la presión tiene que caer en picado. Por tanto, es fisiológicamente casi imposible desmayarse por un ataque de pánico puro.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-clay)', marginBottom: '6px' }}>PASO 4 · DESMANTELAR CONDUCTAS DE EVITACIÓN</div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>Exposición gradual guiada</h3>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-ink-secondary)' }}>
                    Volver poco a poco a los lugares que evitabas (centros comerciales, tráfico, reuniones, volar). La única forma de que el cerebro desactive la fobia es comprobar en carne propia que fuiste al lugar, sentiste incomodidad y saliste ileso.
                  </p>
                </div>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                ¿Cómo ayudar a una persona con ansiedad sin empeorarla?
              </h2>
              <p>
                Si convives con una pareja o familiar que padece ansiedad severa, los instintos más cariñosos a menudo juegan en contra:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>No le digas &ldquo;tranquilízate&rdquo; ni &ldquo;no pasa nada&rdquo;:</strong> Siente que la estás invalidando. Cambia la frase por: <em>&ldquo;Veo que estás asustado/a. Estoy aquí contigo, respiremos a tu ritmo, sé que es feo pero estás a salvo&rdquo;</em>.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>No te conviertas en su &ldquo;conducta de seguridad permanente&rdquo;:</strong> Si solo sale a la calle cuando vas tú o te pide que confirmes 20 veces al día que no se va a morir, esa sobreprotección cronifica el problema. La meta de la psicoterapia es devolverle su autonomía y seguridad.
                </li>
              </ul>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿La ansiedad está limitando tu día a día?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  No tienes que aprender a &ldquo;vivir resignado/a con la angustia&rdquo;. La Terapia Cognitivo-Conductual cuenta con una eficacia clínica superior al 80% para el tratamiento de trastornos de ansiedad y pánico.
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
                    <span>Primera sesión diagnóstica sin costo</span>
                  </a>
                  <a
                    href="/blog/ataques-de-ansiedad"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Leer guía de ataques de pánico</span>
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
                    href="/blog/ataques-de-ansiedad"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Crisis & Fisiología</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Ataques de pánico y ansiedad: qué son, cuánto duran y qué hacer en el momento
                    </h4>
                  </a>
                  <a
                    href="/blog/burnout-o-depresion-diferencias"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Estrés & Agotamiento</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Burnout o depresión: cómo diferenciarlos cuando el agotamiento se vuelve emocional
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
