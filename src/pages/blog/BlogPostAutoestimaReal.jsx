import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Sparkles, CheckCircle2, MessageCircle, Heart } from 'lucide-react';

export default function BlogPostAutoestimaReal() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí el artículo sobre autoestima y autocompasión en Centro Amaré y quisiera agendar una primera sesión de evaluación sin costo.");

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
              <span>Autoestima & Autocompasión Real</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Cómo mejorar la autoestima sin repetirte frases que no te crees: el enfoque de autocompasión
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Lic. Ernesto Mejía</strong> · Psicólogo Clínico Centro Amaré (JVPP 9314)</span>
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
                Seguramente has leído mil veces el consejo típico de autoayuda: <em>&ldquo;Ponte frente al espejo cada mañana y repite 20 veces: soy exitoso, soy hermoso y merezco lo mejor del universo&rdquo;</em>. Si alguna vez lo intentaste, probablemente sentiste una voz interna burlona que te decía por lo bajo: <em>&ldquo;Mentira, sabes que estás hecho un desastre&rdquo;</em>.
              </p>

              <p>
                La ciencia psicológica le da la razón a esa voz escéptica. Un estudio de la Universidad de Waterloo (Wood, Perunovic & Lee) demostró que <strong>las afirmaciones positivas forzadas en personas con baja autoestima en realidad empeoran su estado de ánimo</strong>. El cerebro detecta la discrepancia entre la afirmación artificial y la vivencia real, reforzando la sensación de fracaso.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;La verdadera autoestima no consiste en convencerte de que eres perfecto o invencible. Consiste en cómo te tratas y qué te dices por dentro en el momento exacto en que te equivocas o fracasas.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. Pasar de la autoestima inflada a la autocompasión (Kristin Neff)
              </h2>
              <p>
                La autoestima tradicional depende de la comparación: para sentirte bien contigo mismo tienes que ser &ldquo;mejor que el promedio&rdquo;, tener más dinero, estar más en forma o recibir más likes en redes sociales. El problema es que el día que cometes un error o la vida se tuerce, esa autoestima se evapora de golpe.
              </p>
              <p>
                La <strong>autocompasión</strong>, en cambio, no depende de tus éxitos. Es una postura interna de calidez hacia ti mismo ante el sufrimiento. Se compone de tres pilares clínicos:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', margin: '24px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Amabilidad vs. Juicio Severo</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Tratarte con la misma paciencia con la que tratarías a un buen amigo que está pasando un mal momento, en lugar de insultarte en silencio.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Humanidad Compartida</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Recordar que equivocarse, dudar y sentir dolor es parte de la condición humana, no una falla personal que te hace inferior a los demás.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Mindfulness (Atención Plena)</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Observar tus emociones difíciles sin exagerarlas con historias catastróficas ni reprimirlas fingiendo que &ldquo;aquí no pasa nada&rdquo;.
                  </p>
                </div>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. Autoeficacia: La confianza se construye con acciones, no con pensamientos
              </h2>
              <p>
                Como demostró el psicólogo Albert Bandura, la confianza en uno mismo no se piensa: se acumula con <strong>pequeñas pruebas de autoeficacia</strong>. Si te prometes cada domingo que el lunes harás dos horas de gimnasio, dieta perfecta y leerás un libro al día, y el martes abandonas todo, tu mente registra un mensaje demoledor: <em>&ldquo;no confíes en ti, nunca cumples lo que prometes&rdquo;</em>.
              </p>
              <p>
                El método que funciona:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Hazte promesas tan pequeñas que sea imposible fallar:</strong> En lugar de prometer 2 horas de ejercicio diario, prométete caminar 15 minutos 3 veces por semana. Y cúmplelo sin excepción.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Anota tus micro-logros cotidianos:</strong> El cerebro humano tiene sesgo negativo innato. Al final del día, escribe tres cosas específicas que hiciste bien, por pequeñas que parezcan.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Aprende a tolerar la incomodidad de decir &ldquo;no&rdquo;:</strong> Cada vez que dices &ldquo;sí&rdquo; a los demás por miedo al rechazo, te dices &ldquo;no&rdquo; a ti mismo. Poner un límite es el acto más directo de respeto propio.
                </li>
              </ul>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿La autocrítica y la exigencia interna te están agotando?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré trabajamos con Terapia de Aceptación y Compromiso (ACT) y TCC para ayudarte a construir una relación amable y sólida contigo mismo. Agenda tu primera sesión de 30 min sin costo.
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
                    href="/blog/dependencia-emocional-como-superarla"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Vínculos & Límites</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Dependencia emocional: cómo reconocerla, entender tu apego y sanar sin perderte
                    </h4>
                  </a>
                  <a
                    href="/blog/burnout-o-depresion-diferencias"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Bienestar Emocional</span>
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
