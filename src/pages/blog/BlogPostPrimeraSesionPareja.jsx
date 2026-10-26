import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Users, ShieldCheck, CheckCircle2, MessageCircle, HelpCircle } from 'lucide-react';

export default function BlogPostPrimeraSesionPareja() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí el artículo sobre qué pasa en la primera sesión de terapia de pareja en Centro Amaré y quisiera agendar la sesión inicial sin costo.");

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
              <span>Terapia de Pareja · Guía Paso a Paso</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Qué pasa en la primera sesión de terapia de pareja: lo que nadie te explica antes de entrar
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Mtra. Iris Alarcón</strong> · Directora Clínica Centro Amaré (JVPP 6380)</span>
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
                Antes de dar clic al enlace de la videollamada o de sentarse frente al terapeuta, casi todas las parejas sienten una mezcla de nervios, vergüenza y sospecha. Surgen preguntas que casi nadie se atreve a formular en voz alta: <em>¿Quién va a hablar primero? ¿El terapeuta se va a poner del lado de mi pareja? ¿Tengo que ventilar intimidades vergonzosas el primer día? ¿Y si salimos peor de lo que entramos?</em>
              </p>

              <p>
                La incertidumbre es comprensible. Desnudar los conflictos íntimos frente a un desconocido resulta intimidante. En este artículo te explicamos exactamente cómo funciona la primera sesión en Centro Amaré, qué esperar y qué mitos conviene desmontar desde el primer minuto.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;El terapeuta de pareja no es un juez con toga que decidirá quién tiene la razón ni a quién castigar. El paciente no es uno ni el otro: el paciente es el vínculo que existe entre ambos.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. La regla de oro: Neutralidad activa y sin bandos
              </h2>
              <p>
                Uno de los temores más comunes es que la psicóloga o psicólogo tome partido, especialmente si uno de los miembros habla con más facilidad o es quien tomó la iniciativa de buscar ayuda.
              </p>
              <p>
                En psicología clínica basada en evidencia (como la Terapia Integral de Pareja), el profesional practica la <strong>multipartidaria neutra</strong>: valida el sufrimiento de ambas partes por igual y no permite que una voz domine o silencie a la otra. Si uno interrumpe o ataca, el terapeuta interviene con calidez pero firmeza para regular el ritmo y garantizar que el espacio sea seguro para los dos.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. El protocolo de evaluación inicial: 4 pasos estructurados
              </h2>
              <p>
                Una terapia de pareja rigurosa no improvisa ni salta a dar &ldquo;consejos mágicos&rdquo; en los primeros diez minutos. En Centro Amaré seguimos un protocolo estructurado de evaluación:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', margin: '24px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-clay)', marginBottom: '6px' }}>SESIÓN 1 · CONJUNTA</div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>El mapa del conflicto</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Ambos explican qué los trae a consulta, cómo se conocieron, qué valoran del otro y cómo es la típica discusión que se repite en casa.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-clay)', marginBottom: '6px' }}>SESIONES 2 Y 3 · INDIVIDUALES</div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>Espacio a solas con cada uno</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Una sesión individual con cada miembro de la pareja para explorar historia familiar de apego, temores personales y nivel real de compromiso.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-clay)', marginBottom: '6px' }}>SESIÓN 4 · DEVOLUCIÓN</div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px' }}>Diagnóstico y hoja de ruta</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    El terapeuta les devuelve una radiografía clínica clara: cuál es su trampa de discusión, cuáles son sus fortalezas y qué objetivos específicos trabajarán.
                  </p>
                </div>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                3. La política de confidencialidad y los &ldquo;secretos&rdquo;
              </h2>
              <p>
                ¿Qué pasa si en la sesión individual uno le cuenta al terapeuta algo que su pareja no sabe (por ejemplo, una deuda oculta o una infidelidad en curso)?
              </p>
              <p>
                En psicología de pareja profesional existe la <strong>política de no secretos lesivos</strong>. El terapeuta no puede ser cómplice de un engaño mientras trabaja la reconstrucción del vínculo, ya que eso destruiría la neutralidad. Si surge información crítica no compartida, el terapeuta acompaña a la persona a encontrar la forma de comunicarlo a su pareja en un entorno contenido, o se orienta hacia un proceso terapéutico distinto.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                4. ¿Se sale peor de la primera sesión?
              </h2>
              <p>
                Es honesto decirlo: poner sobre la mesa temas que se han callado durante meses puede generar cierta incomodidad física o agotamiento emocional. Es similar a cuando limpias a fondo una habitación que llevaba años acumulando polvo: el primer paso levanta tierra, pero es el único camino para que el espacio vuelva a ser habitable y luminoso.
              </p>
              <p>
                La inmensa mayoría de las parejas reportan que al terminar la primera sesión sienten un <strong>alivio inmediato</strong>: la sensación de que por fin hay un adulto profesional al mando y que ya no están solos cargando con el peso del conflicto.
              </p>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Listos para dar el primer paso con tranquilidad?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré brindamos una primera llamada diagnóstica de 30 minutos sin costo para que conozcan a su psicóloga, aclaren dudas y decidan si es el espacio que necesitan.
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
                    href="/terapia-de-pareja"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Conocer nuestro protocolo clínico</span>
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
                    href="/blog/cuando-ir-a-terapia-de-pareja"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Decisión & Señales</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      ¿Cuándo ir a terapia de pareja? 8 señales de alerta y el error común de esperar años
                    </h4>
                  </a>
                  <a
                    href="/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Honorarios & Precios</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cuánto cuesta una terapia de pareja en El Salvador: Precios y modalidades 2026
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
