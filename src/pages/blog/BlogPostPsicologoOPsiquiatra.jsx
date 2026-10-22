import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Stethoscope, CheckCircle2, MessageCircle, HelpCircle } from 'lucide-react';

export default function BlogPostPsicologoOPsiquiatra() {
  const whatsappUrl = "/chat?text=" + encodeURIComponent("Hola, leí la guía de diferencias entre psicólogo y psiquiatra en Centro Amaré y me gustaría orientación para saber qué especialista necesito.");

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
              Psicólogo o Psiquiatra: diferencias clave, a quién consultar primero y cómo se complementan
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Equipo Clínico Centro Amaré</strong> · Registro Profesional JVPP El Salvador</span>
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
                Cuando el malestar emocional se vuelve insostenible, la duda más común suele ser: <em>&ldquo;¿Debo ir al psicólogo o al psiquiatra? ¿Me van a medicar de inmediato? ¿Si tomo una pastilla significa que estoy loco o que nunca podré dejarla?&rdquo;</em>.
              </p>

              <p>
                El estigma y el desconocimiento sobre la salud mental hacen que muchas personas posterguen su atención durante meses por miedo a la medicación o, en el extremo opuesto, busquen un fármaco creyendo que resolverá mágicamente un problema relacional o una crisis de pareja. En este artículo aclaramos las diferencias fundamentales entre ambas profesiones y cómo deciden los especialistas cuándo trabajar en equipo.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;La psicología y la psiquiatría no son disciplinas enemigas ni excluyentes. Son dos ramas de la ciencia de la salud mental que, cuando se combinan de forma ética y coordinada, multiplican la eficacia del tratamiento.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                La diferencia formativa y de enfoque clínico
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '24px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>El Psicólogo Clínico</h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '14.5px', color: 'var(--color-ink-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Formación:</strong> Licenciatura en Psicología + Maestría o Posgrado en Psicoterapia Clínica.</li>
                    <li><strong>Herramienta:</strong> Psicoterapia (TCC, Terapia de Pareja, ACT). No prescribe fármacos.</li>
                    <li><strong>Objetivo:</strong> Reestructurar patrones de pensamiento, sanar heridas afectivas, mejorar la comunicación y desarrollar recursos emocionales.</li>
                  </ul>
                </div>

                <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>El Médico Psiquiatra</h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '14.5px', color: 'var(--color-ink-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Formación:</strong> Doctorado en Medicina (médico cirujano) + Especialidad de 3-4 años en Psiquiatría.</li>
                    <li><strong>Herramienta:</strong> Diagnóstico médico, analítica neurobiológica y psicofarmacología.</li>
                    <li><strong>Objetivo:</strong> Estabilizar desbalances neuroquímicos cerebrales mediante fármacos cuando el sufrimiento impide funcionar.</li>
                  </ul>
                </div>
              </div>

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
