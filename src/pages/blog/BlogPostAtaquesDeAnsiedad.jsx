import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, ShieldAlert, CheckCircle2, MessageCircle, AlertTriangle, HeartPulse } from 'lucide-react';

export default function BlogPostAtaquesDeAnsiedad() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí el artículo sobre ataques de ansiedad y pánico en Centro Amaré y quisiera consultar por una sesión diagnóstica.");

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
              <span>Ataques de Pánico · Guía Somática</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Ataques de pánico y ansiedad: qué son, síntomas físicos, cuánto duran y qué hacer mientras pasa
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Mtro. Rafael Franco</strong> · Psicólogo Clínico Centro Amaré (JVPP 5144)</span>
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
                Un ataque de pánico se siente aterradoramente real: el corazón golpea con fuerza las costillas, el aire no entra en los pulmones, las manos se duermen y una convicción fulminante te invade: <em>&ldquo;me estoy muriendo de un infarto o me estoy volviendo loco&rdquo;</em>.
              </p>

              <p>
                Por eso, más del 70% de las personas que sufren su primer ataque de pánico terminan en la sala de emergencias de un hospital o con un cardiólogo antes de llegar a la consulta de un psicólogo. Y tiene todo el sentido del mundo: <strong>los síntomas son casi 100% físicos</strong>. Sin embargo, cuando los médicos hacen el electrocardiograma y los análisis de sangre, las palabras son siempre las mismas: <em>&ldquo;Físicamente está usted perfecto, lo suyo son nervios&rdquo;</em>.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;Un ataque de pánico se siente como una emergencia médica de gravedad extrema, pero fisiológicamente es inofensivo. No te va a dar un paro cardíaco, no te vas a quedar sin aire y tu mente no va a perder el control.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                ¿Por qué el cuerpo reacciona de forma tan violenta?
              </h2>
              <p>
                Durante una crisis de pánico, la amígdala cerebral acciona la palanca del sistema simpático sin que haya un peligro real en la habitación. Libera una descarga masiva de adrenalina y noradrenalina que desencadena la cascada física:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', margin: '24px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Taquicardia y palpitaciones</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    El corazón se acelera para bombear sangre oxigenada a las piernas por si necesitas correr. No es un infarto: el corazón humano sano está preparado para latir a 160 pulsaciones durante horas de ejercicio.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Hormigueo en manos y labios</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Al hiperventilar (respirar rápido y superficial), expulsas demasiado dióxido de carbono (CO2). Esto cambia temporalmente el pH sanguíneo y provoca parestesias (adormecimiento en dedos y boca). Es molesto pero 100% reversible.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Sensación de ahogo o nudo en garganta</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Llamado médicamente <em>globo histérico</em>. Los músculos de la laringe se contraen por tensión nerviosa. Tienes suficiente oxígeno en sangre (suele marcar 98-99% en pulsioxímetro); la sensación de asfixia es una ilusión somática.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Desrealización y despersonalización</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Sentir que el entorno es una película artificial o sentirte desconectado de tu propio cuerpo. Es un mecanismo de defensa cerebral para anestesiarte ante un dolor que percibe como insoportable.
                  </p>
                </div>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                ¿Cuánto dura realmente una crisis de pánico?
              </h2>
              <p>
                Aunque la persona sienta que la pesadilla dura horas, <strong>la curva fisiológica de un ataque de pánico puro alcanza su pico máximo entre los 10 y 15 minutos</strong>, y luego el sistema parasimpático se activa automáticamente para enfriar el organismo.
              </p>
              <p>
                Si sientes que dura dos horas, no es un único ataque continuo: es una cadena de pequeños picos provocados por tu propia hipervigilancia mental cada vez que notas que tu pulso aún no ha vuelto a la normalidad absoluta.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                Qué hacer en el momento: El protocolo de anclaje 5-4-3-2-1
              </h2>
              <p>
                Cuando la mente se llena de pensamientos catastróficos, hay que sacarla del bucle interno y conectarla con los sentidos físicos del entorno inmediato:
              </p>

              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>5 cosas que puedas ver:</strong> Nombra en voz alta 5 objetos específicos a tu alrededor (el reloj de la pared, la textura del pantalón, el enchufe, la lámpara, una planta).
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>4 cosas que puedas tocar:</strong> Toca la tela de tu ropa, la mesa fría, tus propios dedos, el suelo firme bajo tus zapatos.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>3 sonidos que puedas oír:</strong> El ruido de un motor a lo lejos, el refrigerador, tu propia respiración.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>2 olores que puedas percibir:</strong> El café, tu perfume o el jabón de manos.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>1 sabor que puedas notar:</strong> Un trago de agua fresca o la sensación en tu lengua.
                </li>
              </ol>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Vives con miedo a que se repita otro ataque de pánico?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  El trastorno de pánico y la agorafobia se tratan con alta eficacia mediante protocolos de exposición interoceptiva y TCC. En Centro Amaré te acompañamos paso a paso para recuperar tu tranquilidad.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
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
                    <span>Conocer terapia individual online</span>
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
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Tratamiento TCC</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo controlar la ansiedad: qué funciona de verdad y en qué orden según la psicología clínica
                    </h4>
                  </a>
                  <a
                    href="/blog/psicologo-o-psiquiatra-diferencias"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Orientación Médica</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Psicólogo o Psiquiatra: diferencias, cuándo acudir a cada uno y cómo se complementan
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
