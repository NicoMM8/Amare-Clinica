import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, ShieldCheck, HeartHandshake, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

export default function BlogPostInfidelidad() {
  const whatsappUrl = "/chat?text=" + encodeURIComponent("Hola, leí el artículo sobre infidelidad en Centro Amaré y me gustaría agendar la sesión de 30 minutos sin costo.");

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
              <span>Infidelidad & Confianza</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              ¿Se puede perdonar una infidelidad? Fases clínicas para sanar la herida o cerrar en paz
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Equipo Clínico Centro Amaré</strong> · Dirección: Licda. Iris Alarcón (JVPP N.º 47096)</span>
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
                El descubrimiento de una infidelidad suele vivirse como un terremoto emocional de escala mayor. No solo se quiebra la confianza depositada en la pareja; también colapsa la certeza sobre el pasado compartido y la seguridad en el futuro. Ante el shock, la pregunta inmediata suele ser tajante: <em>&ldquo;¿Es posible volver a confiar o estamos condenados al resentimiento continuo?&rdquo;</em>
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. El trauma del engaño: Por qué se siente como estrés postraumático
              </h2>
              <p>
                En psicología clínica de pareja (particularmente bajo los modelos de Janis Abrahms Spring y Sue Johnson), la reacción tras un engaño presenta síntomas clínicamente idénticos a los del trauma: pensamientos intrusivos en bucle, hipervigilancia extrema (revisar el teléfono compulsivamente, rastrear ubicaciones), insomnio, ataques de llanto y cambios bruscos de humor.
              </p>
              <p>
                Comprender esto es fundamental: la persona herida no está &ldquo;exagerando&rdquo; ni &ldquo;obsesionándose por gusto&rdquo;; su sistema nervioso está respondiendo a una amenaza real a su apego primario. Exigirle que &ldquo;pase la página rápido&rdquo; solo agudiza la herida y perpetúa la desconexión.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;El perdón no es un interruptor que se apaga y se enciende con un 'perdóname'. Es un proceso bilateral que exige transparencia radical por un lado y la voluntad de no usar la culpa como arma punitiva por el otro.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. Las 3 fases clínicas del abordaje de una infidelidad
              </h2>
              <p>
                En Centro Amaré trabajamos la recuperación de la infidelidad mediante un protocolo estructurado en tres etapas diferenciadas:
              </p>
              
              <h3 style={{ fontSize: '20px', color: 'var(--color-plum-900)', fontWeight: 700, marginTop: '24px', marginBottom: '10px' }}>
                Fase A: Contención de la crisis y freno a la hemorragia emocional
              </h3>
              <p>
                El objetivo no es decidir de inmediato si van a divorciarse o continuar, sino estabilizar el dolor. En esta etapa se establecen límites de protección: cese absoluto de todo contacto con la tercera persona, acuerdos temporales de transparencia comunicativa y un espacio terapéutico neutral donde las preguntas no se conviertan en interrogatorios destructivos.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--color-plum-900)', fontWeight: 700, marginTop: '24px', marginBottom: '10px' }}>
                Fase B: Comprender el significado sin justificar el acto
              </h3>
              <p>
                Hay una diferencia abismal entre <strong>justificar</strong> una traición (nunca es responsabilidad de la persona engañada) y <strong>comprender</strong> las vulnerabilidades que existían en el vínculo o en la historia individual del transgresor (evitación emocional, búsqueda de validación externa, soledad no dicha). Sin entender el porqué, el miedo a que se repita nunca desaparece.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--color-plum-900)', fontWeight: 700, marginTop: '24px', marginBottom: '10px' }}>
                Fase C: Decisión y reconstrucción o cierre digno
              </h3>
              <p>
                Si la pareja decide continuar, no se trata de &ldquo;volver a lo de antes&rdquo; (lo de antes no protegió a la pareja), sino de fundar una segunda relación con la misma persona, con nuevas reglas de intimidad, afecto y vulnerabilidad. Y si deciden separarse, la terapia permite hacerlo sin odio destructivo, cuidando la salud mental de ambos y de los hijos si los hay.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                3. Señales de que la relación sí puede reconstruirse
              </h2>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Arrepentimiento genuino vs. lástima por ser descubierto:</strong> Quien cometió la falta valida el dolor del otro sin ponerse a la defensiva ni decir <em>&ldquo;ya te pedí perdón diez veces, supéralo&rdquo;</em>.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Transparencia voluntaria:</strong> Rendición de cuentas sin necesidad de que la pareja tenga que actuar como investigadora privada.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Paciencia ante las recaídas emocionales:</strong> Entender que habrá días buenos y días de intensa desconfianza, y acompañarlos con calma.
                </li>
              </ul>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Están atravesando el dolor de una infidelidad?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  No tienen que transitar esta herida en soledad o en discusiones circulares. En Centro Amaré ofrecemos un espacio clínico seguro, confidencial y sin juicios morales para clarificar qué rumbo tomar.
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
                    <span>Hablar con el equipo (30 min sin costo)</span>
                  </a>
                  <a
                    href="/test-de-pareja"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Evaluar su caso con el test online</span>
                  </a>
                </div>
              </div>

              {/* Artículos Relacionados */}
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)' }}>
                <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--color-plum-900)', marginBottom: '18px' }}>
                  Artículos relacionados del blog
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <a
                    href="/blog/falta-de-deseo-sexual-en-la-pareja-soluciones"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Sexología & Intimidad</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Falta de deseo sexual en la pareja: Por qué se apaga la intimidad y cómo reactivarla
                    </h4>
                  </a>
                  <a
                    href="/blog/como-afecta-emigrar-a-la-relacion-de-pareja"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Pareja y Migración</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo afecta emigrar a la relación de pareja: Guía para salvadoreños
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
