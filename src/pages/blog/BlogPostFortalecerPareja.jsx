import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Heart, ShieldCheck, HeartHandshake, CheckCircle2, MessageCircle } from 'lucide-react';

export default function BlogPostFortalecerPareja() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí el artículo sobre cómo fortalecer la relación de pareja en Centro Amaré y me gustaría agendar la sesión de 30 minutos sin costo.");

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
              <span>Terapia de Pareja Preventiva</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Cómo fortalecer tu relación de pareja con ayuda profesional: Guía clínica
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Equipo Clínico Centro Amaré</strong> · Registro Profesional JVPP El Salvador</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> 5 min de lectura</span>
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
                Una relación puede necesitar apoyo profesional aun cuando existe un profundo cariño y compromiso mutuo. Las diferencias y los desacuerdos no son en sí mismos el problema; lo que suele deteriorar el vínculo con el paso de los años es la <strong>forma repetitiva y automática</strong> en la que se gestionan esas diferencias. La psicoterapia de pareja ofrece un marco seguro y estructurado para observar ese ciclo y ensayar conversaciones distintas.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. Identificar y desactivar el ciclo de discusión
              </h2>
              <p>
                En la mayoría de los conflictos de pareja opera una dinámica predecible: una persona insiste o reclama porque teme no ser tomada en cuenta, mientras la otra se retira o se encierra en el silencio porque se siente juzgada o abrumada. Cuanto más insiste una, más se distancia la otra.
              </p>
              <p>
                Nombrar este ciclo en consulta permite comprender que ambas reacciones intentan proteger algo importante (la conexión o la calma), aunque terminen produciendo el efecto contrario: más soledad y distancia. La terapeuta ayuda a desacelerar el diálogo, separar los hechos de las interpretaciones subjetivas y expresar necesidades profundas sin convertirlas en acusaciones.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;Pedir ayuda profesional a tiempo no es un signo de fracaso, sino de madurez. Puede convertir un conflicto recurrente en información valiosa sobre lo que la relación necesita para crecer.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. El arte de reparar después del conflicto
              </h2>
              <p>
                Las parejas más sólidas y satisfechas no son aquellas que nunca discuten, sino las que han desarrollado una alta <strong>capacidad de reparación emocional</strong>. Tras un desencuentro, saben cómo reconocer el impacto que sus palabras tuvieron en la otra persona, asumir responsabilidad específica y acordar qué harán de forma distinta la próxima vez.
              </p>
              <p>
                Una disculpa pierde toda su fuerza sanadora si exige un perdón inmediato o si la misma conducta hiriente se repite al día siguiente. Cultivar pequeños gestos diarios de curiosidad, aprecio verbal y ternura física construye un colchón de seguridad que amortigua los momentos difíciles.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                3. Cuándo acudir a terapia sin esperar a una crisis terminal
              </h2>
              <p>
                La terapia de pareja no debe ser vista como el &ldquo;último recurso antes del juzgado&rdquo;. Es extraordinariamente efectiva en momentos de transición o crecimiento:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Antes de convivir o casarse:</strong> Para alinear expectativas sobre finanzas, proyectos familiares y roles.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Tras la llegada de los hijos o en procesos de crianza:</strong> Para evitar que la paternidad absorba por completo el espacio de la pareja.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Procesos migratorios o adaptación al extranjero:</strong> Para que el estrés laboral y la lejanía no enfríen la intimidad afectiva.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Cierres de ciclo con respeto:</strong> Si la decisión de separarse está tomada, la terapia permite transitar el adiós con madurez, cuidado y paz.
                </li>
              </ul>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                4. Cuatro acuerdos prácticos para empezar desde hoy
              </h2>
              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Un tema a la vez:</strong> Eviten traer una lista de reclamos de los últimos cinco años a una conversación sobre un desacuerdo puntual de hoy.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Pausa convenida si sube el volumen:</strong> Acuerden un tiempo fuera de 20 minutos para que el pulso cardíaco baje antes de decir palabras destructivas.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Pide lo que necesitas, no solo lo que te molesta:</strong> Cambia el <em>&ldquo;nunca me ayudas&rdquo;</em> por un <em>&ldquo;me siento sobrecargado/a hoy, ¿podrías encargarte tú de la cena?&rdquo;</em>.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Protege tiempo de disfrute exclusivo:</strong> Salidas o conversaciones donde esté estrictamente prohibido hablar de problemas, cuentas o logística.
                </li>
              </ol>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Quieren fortalecer su complicidad de pareja?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré les acompañamos mediante la Terapia Integral de Pareja (IBCT), con psicólogas colegiadas y en sesiones online adaptadas a sus horarios.
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
                    href="/test-de-pareja"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Realizar autoevaluación clínica (2 min)</span>
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
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Sexología & Deseo</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Falta de deseo sexual en la pareja: Causas y cómo reactivarla
                    </h4>
                  </a>
                  <a
                    href="/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Precios & Modalidades</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      ¿Cuánto cuesta una terapia de pareja en El Salvador?
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
