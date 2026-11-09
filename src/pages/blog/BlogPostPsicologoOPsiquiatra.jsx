import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Stethoscope, CheckCircle2, MessageCircle, HelpCircle } from 'lucide-react';

export default function BlogPostPsicologoOPsiquiatra() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí la guía de diferencias entre psicólogo y psiquiatra en Centro Amaré y me gustaría orientación para saber qué especialista necesito.");

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
              <span>Salud Mental & Especialidades</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Psicólogo, Psicoanalista o Psiquiatra: diferencias clave, a quién consultar primero y cómo se complementan
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Equipo Clínico Centro Amaré</strong> · Registro Profesional JVPP El Salvador</span>
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
                Cuando el malestar emocional se vuelve insostenible, la duda más común suele ser: <em>&ldquo;¿Cuál es la diferencia entre psicólogo, psicoanalista y psiquiatra? ¿A quién debo acudir primero y quién puede recetar medicamentos?&rdquo;</em>.
              </p>

              <p>
                El estigma y la confusión entre términos en salud mental hacen que muchas personas posterguen su atención durante meses por miedo a la medicación o, en el extremo opuesto, busquen una pastilla creyendo que resolverá mágicamente un conflicto de pareja, o piensen que toda terapia psicológica consiste en acostarse en un diván durante años. En esta guía aclaramos las diferencias reales entre las tres figuras profesionales y cómo deciden cuándo trabajar en equipo.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;La psicología clínica, el psicoanálisis y la psiquiatría abordan dimensiones distintas de la salud mental. Comprender qué hace cada profesional evita perder tiempo y dinero en el enfoque equivocado.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                Diferencia formativa y enfoque entre psicólogo, psicoanalista y psiquiatra
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px', margin: '24px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>El Psicólogo Clínico</h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '14.5px', color: 'var(--color-ink-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Formación:</strong> Licenciatura en Psicología (acreditación JVPP en El Salvador) + Maestría o Posgrado en Psicoterapia Clínica.</li>
                    <li><strong>Herramienta:</strong> Psicoterapia basada en evidencia (TCC, DBT, ACT, Terapia Integral de Pareja).</li>
                    <li><strong>¿Receta fármacos?</strong> No prescribe medicación.</li>
                    <li><strong>Objetivo:</strong> Modificar patrones actuales de pensamiento, emoción y comunicación con estrategias prácticas y medibles.</li>
                  </ul>
                </div>

                <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>El Psicoanalista</h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '14.5px', color: 'var(--color-ink-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Formación:</strong> Psicólogo o médico con formación específica de posgrado en una escuela psicoanalítica.</li>
                    <li><strong>Herramienta:</strong> Asociación libre, análisis de sueños, transferencia e interpretación del inconsciente.</li>
                    <li><strong>¿Receta fármacos?</strong> No (salvo que cuente además con título médico psiquiátrico).</li>
                    <li><strong>Objetivo:</strong> Explorar conflictos profundos de la historia infantil en procesos largos y poco directivos.</li>
                  </ul>
                </div>

                <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>El Médico Psiquiatra</h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '14.5px', color: 'var(--color-ink-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Formación:</strong> Doctorado en Medicina + Especialidad médica de 3 a 4 años en Psiquiatría.</li>
                    <li><strong>Herramienta:</strong> Diagnóstico clínico médico, evaluación neurobiológica y psicofarmacología.</li>
                    <li><strong>¿Receta fármacos?</strong> Sí, es el único autorizado para prescribir y ajustar medicación psiquiátrica.</li>
                    <li><strong>Objetivo:</strong> Estabilizar desbalances neuroquímicos severos que impiden funcionar en el día a día.</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                Psicólogo clínico vs. Psicoanalista: por qué no son lo mismo
              </h2>
              <p>
                Es frecuente usar las palabras &ldquo;psicólogo&rdquo; y &ldquo;psicoanalista&rdquo; como sinónimos, pero su forma de trabajar en consulta es muy distinta. Aunque ambos ayudan a través de la palabra y no recetan medicamentos, el método cambia por completo:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Psicoanálisis tradicional:</strong> Nació con Sigmund Freud. El terapeuta suele adoptar una postura más silenciosa y neutral mientras el paciente habla libremente sobre su infancia, sus sueños o sus asociaciones para hacer consciente lo inconsciente. Suelen ser procesos de varios años.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Psicología clínica basada en evidencia (TCC, DBT, IBCT):</strong> Es el estándar actual que aplicamos en Centro Amaré. Las sesiones son dialogadas, estructuradas y enfocadas en lo que te hace sufrir <em>hoy</em> (ansiedad, depresión leve o moderada, conflictos de pareja, límites familiares). Se trabaja con objetivos claros y herramientas concretas entre sesiones.
                </li>
              </ul>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                ¿A cuál consultar primero en la mayoría de los casos?
              </h2>
              <p>
                Para problemas cotidianos como <strong>crisis de pareja, infidelidad, celos, problemas de autoestima, duelo migratorio, estrés laboral o dificultades en las relaciones familiares</strong>, el psicólogo clínico es la primera puerta de entrada natural. En psicoterapia se exploran las causas vivenciales del dolor y se adquieren herramientas prácticas.
              </p>
              <p>
                Sin embargo, la consulta psiquiátrica (o un trabajo coordinado en conjunto) es imperativo cuando:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  Existe una <strong>depresión severa</strong> con imposibilidad para levantarse de la cama, pérdida acusada de peso o ideas de autolesión / suicidio.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  Las crisis de pánico o la ansiedad son tan intensas e incapacitantes que la persona no logra concentrarse ni trabajar en los ejercicios de la psicoterapia.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  Hay sospecha de trastornos del estado de ánimo con fases de euforia desmedida (trastorno bipolar) o alteraciones de la realidad (alucinaciones o delirios).
                </li>
                <li style={{ marginBottom: '10px' }}>
                  Insomnio severo de varios meses que no responde a pautas de higiene del sueño.
                </li>
              </ul>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                El mito de la medicación: &ldquo;Me voy a hacer adicto&rdquo;
              </h2>
              <p>
                Los antidepresivos modernos (ISRS como sertralina o escitalopram) <strong>no causan adicción física ni tolerancia</strong>. No son drogas recreativas. Su función es regular la disponibilidad de serotonina en las sinapsis neuronales para que el cerebro recupere su plasticidad.
              </p>
              <p>
                El fármaco actúa como un &ldquo;salvavidas en medio del mar&rdquo;: te saca la cabeza del agua para que no te ahogues, pero es la psicoterapia la que te enseña a nadar y a llegar a la orilla. Una vez recuperada la estabilidad y adquiridas las herramientas cognitivas, el psiquiatra retira la medicación de forma gradual y segura.
              </p>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Tienes dudas sobre qué tipo de atención necesitas?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré realizamos una evaluación psicológica inicial de 30 minutos sin costo. Si tu caso requiere evaluación médica psiquiátrica complementaria, te derivamos de manera ética y coordinada.
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
                    href="/blog/como-elegir-un-psicologo-en-el-salvador"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Criterios de Elección</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo elegir un psicólogo en El Salvador: colegiatura JVPP y qué preguntar
                    </h4>
                  </a>
                  <a
                    href="/blog/burnout-o-depresion-diferencias"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Salud Emocional</span>
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
