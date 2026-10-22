import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Award, ShieldCheck, CheckCircle2, MessageCircle, AlertTriangle } from 'lucide-react';

export default function BlogPostComoElegirPsicologo() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí la guía sobre cómo elegir un psicólogo en El Salvador en Centro Amaré y quisiera agendar una primera sesión de evaluación sin costo.");

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
              <span>Salud Mental en El Salvador · Guía Legal & Clínica</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Cómo elegir un buen psicólogo en El Salvador: colegiatura JVPP, enfoques científicos y qué preguntar
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
                Cuando te duele una muela o necesitas una cirugía, investigas con lupa las credenciales del especialista. Sin embargo, cuando se trata de la mente y las emociones, muchas personas en El Salvador eligen terapeuta por el primer anuncio de redes sociales, por una recomendación casual o por un perfil de Instagram con frases bonitas.
              </p>

              <p>
                Poner tu historia, tus traumas o tu matrimonio en manos de alguien sin preparación clínica formal puede empeorar tus síntomas o hacerte perder meses de tiempo y dinero. En esta guía te explicamos <strong>cómo filtrar con criterio profesional</strong> para encontrar un terapeuta ético, capacitado y legalmente habilitado en El Salvador.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;La psicoterapia es un acto de salud médica y humana regulado por la ley salvadoreña. No es una charla entre amigos ni coaching de superación personal: exige posgrados clínicos y colegiatura activa.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. El filtro indispensable: Colegiatura JVPP / CSSP
              </h2>
              <p>
                En El Salvador, para ejercer legalmente la psicología clínica es obligatorio estar autorizado y registrado ante la <strong>Junta de Vigilancia de la Profesión Psicológica (JVPP)</strong>, dependencia del Consejo Superior de Salud Pública (CSSP).
              </p>
              <p>
                Todo psicólogo profesional posee un <strong>número de registro JVPP</strong>. Si un terapeuta o supuesto &ldquo;consejero emocional&rdquo; esquiva la pregunta o te dice que &ldquo;eso no hace falta porque trabaja con bioenergía o coaching&rdquo;, estás ante un caso de intrusismo profesional. En Centro Amaré, todos nuestros psicólogos cuentan con colegiatura JVPP vigente y verificable.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. Exigir enfoques basados en la evidencia científica
              </h2>
              <p>
                No todas las corrientes psicológicas tienen el mismo respaldo de eficacia en ensayos clínicos. Pregunta siempre qué modelo terapéutico utiliza:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', margin: '24px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Terapia Cognitivo-Conductual (TCC)</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Estándar de oro mundial para ansiedad, fobias, pánico y depresión. Práctica, con objetivos claros y tareas entre sesiones.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Terapia Integral de Pareja (IBCT)</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Enfoque de tercera generación con la mayor tasa de recuperación empírica en relaciones sentimentales, infidelidad y crisis de convivencia.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Terapia de Aceptación y Compromiso (ACT)</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Excelente para regulación de emociones complejas, culpa, duelo migratorio y construcción de una vida con sentido basada en valores.
                  </p>
                </div>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                3. Las 4 preguntas clave para hacer antes de agendar
              </h2>
              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>¿Cuál es su número de inscripción en la JVPP de El Salvador?</strong> (Un profesional ético responderá con orgullo y transparencia).
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>¿Qué experiencia y formación específica tiene en el problema que me ocurre?</strong> (Un buen terapeuta de adultos puede no tener especialidad en terapia de pareja o sexología clínica; busca quien domine tu motivo de consulta).
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>¿Cómo es la estructura de las sesiones y la confidencialidad?</strong> (Debe asegurarte secreto profesional estricto según el código de ética médica).
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>¿Ofrece una sesión o llamada inicial para evaluar si hay afinidad?</strong> (La alianza terapéutica es el predictor más importante del éxito; tener un primer contacto sin compromiso te da tranquilidad).
                </li>
              </ol>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  Conoce a nuestro equipo de psicólogos colegiados
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré todos los procesos terapéuticos son liderados por psicólogos clínicos graduados con maestría y registro JVPP. Agenda tu primera sesión de 30 minutos sin costo.
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
                    href="/iris-alarcon"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Ver credenciales y equipo clínico</span>
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
                    href="/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Guía de Costos</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cuánto cuesta una consulta psicológica en El Salvador: Honorarios y comparativa 2026
                    </h4>
                  </a>
                  <a
                    href="/blog/psicologo-o-psiquiatra-diferencias"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Orientación Especializada</span>
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
