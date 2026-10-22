import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Heart, AlertTriangle, CheckCircle2, MessageCircle, HelpCircle } from 'lucide-react';

export default function BlogPostCuandoIrTerapiaPareja() {
  const whatsappUrl = "/chat?text=" + encodeURIComponent("Hola, leí el artículo sobre cuándo ir a terapia de pareja en Centro Amaré y me gustaría consultar sobre una primera sesión sin costo.");

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
              <span>Terapia de Pareja · Señales de Alerta</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              ¿Cuándo ir a terapia de pareja? 8 señales de alerta y el error común de esperar años
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Mtra. Iris Alarcón</strong> · Directora Clínica Centro Amaré (JVPP 47096)</span>
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
                Casi nadie llega a terapia de pareja la primera vez que discute por las finanzas, las familias de origen o la falta de tiempo juntos. Las investigaciones del <em>Gottman Institute</em> revelan un dato revelador y doloroso: <strong>las parejas esperan un promedio de entre 4 y 6 años desde que comienzan los problemas crónicos antes de buscar ayuda profesional</strong>.
              </p>

              <p>
                Para cuando finalmente llaman a la consulta, el problema ya no es el desacuerdo original. Es el resentimiento acumulado, la descalificación cotidiana y la soledad compartida: estar bajo el mismo techo pero sintiéndose a kilómetros de distancia.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;La terapia de pareja no es una sala de emergencias para cuando el divorcio ya está firmado en la cabeza de uno de los dos. Es una herramienta clínica para desactivar los patrones destructivos mientras todavía existe afecto y voluntad de cuidar la relación.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                Las 8 señales clínicas de que es momento de consultar
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '28px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>
                    1. La misma discusión en bucle infinito
                  </h3>
                  <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--color-ink-secondary)' }}>
                    Pasan los meses e incluso los años y vuelven a pelear por exactamente el mismo detonante: la puntualidad, las compras, la familia política o el teléfono móvil. Cada discusión termina en reproche o en un silencio tenso de varios días, sin que se llegue a ninguna solución real.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>
                    2. El patrón de &ldquo;demanda vs. retirada&rdquo; (persecución y silencio)
                  </h3>
                  <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--color-ink-secondary)' }}>
                    Uno de los dos eleva el tono, exige respuestas o insiste en hablar de inmediato porque siente pánico a la desconexión. El otro se siente atacado, se encierra en una coraza y opta por irse o guardar silencio hermético. Cuanto más insiste uno, más huye el otro.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>
                    3. La intimidad física y sexual se ha convertido en una obligación o un desierto
                  </h3>
                  <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--color-ink-secondary)' }}>
                    El contacto no verbal afectuoso (abrazos espontáneos, caricias, miradas cómplices) ha desaparecido. La vida íntima es nula o se vive como una fuente de tensión, presión y culpa, no como un espacio de disfrute y conexión.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>
                    4. &ldquo;Compañeros de piso&rdquo; en lugar de pareja
                  </h3>
                  <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--color-ink-secondary)' }}>
                    Se organizan de maravilla para pagar las cuentas, llevar a los niños al colegio y comprar las cosas de la casa, pero no tienen conversaciones emocionales íntimas. Han dejado de compartir sueños, vulnerabilidades y risas.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>
                    5. El desprecio y la ironía sutil en la vida diaria
                  </h3>
                  <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--color-ink-secondary)' }}>
                    Comentarios sarcásticos delante de familiares o amigos, poner los ojos en blanco cuando el otro habla, burlarse de sus opiniones o minimizar sus logros. El desprecio es el predictor clínico número uno de ruptura.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>
                    6. Una herida de confianza o infidelidad (emocional o física)
                  </h3>
                  <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--color-ink-secondary)' }}>
                    Mensajes secretos, gastos ocultos, traición afectiva o infidelidad sexual. La persona lastimada vive en hipervigilancia revisando teléfonos, mientras la otra se siente asfixiada o frustrada porque &ldquo;ya pidió disculpas&rdquo;.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>
                    7. Fantasear frecuentemente con estar solo o con otra persona
                  </h3>
                  <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--color-ink-secondary)' }}>
                    Sentir un alivio profundo cuando tu pareja sale de viaje o no está en casa, e imaginar constantemente cómo sería tu vida cotidiana si estuvieras soltero/a o con alguien diferente.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>
                    8. Miedo a hablar para &ldquo;no armar una pelea&rdquo;
                  </h3>
                  <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--color-ink-secondary)' }}>
                    Caminar sobre cáscaras de huevo. Te guardas tus desacuerdos, toleras situaciones que te duelen y dejas de ser tú mismo/a para evitar que la otra persona explote o te retire la palabra.
                  </p>
                </div>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                El gran mito: &ldquo;Si vamos a terapia es porque ya fracasamos&rdquo;
              </h2>
              <p>
                En El Salvador y en la cultura hispana, durante generaciones se enseñó que &ldquo;los trapos sucios se lavan en casa&rdquo; y que pedir ayuda es admitir debilidad. Ese mandato cultural ha provocado que miles de parejas aguanten décadas de sufrimiento innecesario o terminen en divorcios destructivos que dañan a los hijos.
              </p>
              <p>
                En Centro Amaré trabajamos con la <strong>Terapia Integral de Pareja (IBCT)</strong> y enfoques sistémicos basados en evidencia. El objetivo nunca es buscar culpables ni juzgar quién tiene la razón. El terapeuta actúa como un facilitador neutro que les ayuda a:
              </p>

              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  Comprender las vulnerabilidades y temores que se esconden detrás de cada queja o reproche.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  Aprender a discutir sin lastimar la dignidad del otro.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  Reconstruir la complicidad afectiva y el erotismo sin exigencias ni chantajes.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  O si la decisión es separarse, transitar el cierre con madurez, respeto y protegiendo a la familia.
                </li>
              </ul>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Te identificas con 2 o más de estas señales?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  No esperen a que el desgaste sea irreversible. En Centro Amaré ofrecemos una sesión diagnóstica de 30 minutos sin costo para evaluar su caso y trazar un plan claro de trabajo.
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
                    href="/test-de-pareja"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Hacer test de pareja gratuito</span>
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
                    href="/blog/primera-sesion-terapia-de-pareja"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Qué Esperar</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Qué pasa en la primera sesión de terapia de pareja: lo que nadie te explica antes de entrar
                    </h4>
                  </a>
                  <a
                    href="/blog/dependencia-emocional-como-superarla"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Apego & Vínculos</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Dependencia emocional en la pareja: cómo reconocerla y sanar sin perderte
                    </h4>
                  </a>
                  <a
                    href="/blog/crianza-en-pareja-desacuerdos-hijos-soluciones"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Crianza & Desacuerdos</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Crianza en pareja: resolver desacuerdos con los hijos sin desgastar el vínculo
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
