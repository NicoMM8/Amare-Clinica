import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { HeroButton } from '../components/ui/hero-button';
import { HeartHandshake, ShieldCheck, CheckCircle2, Clock, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function TerapiaParejaPage() {
  const whatsappUrl = "/chat?text=" + encodeURIComponent("Hola, me interesa agendar una sesión inicial gratuita de 30 minutos para Terapia de Pareja.");

  const reasons = [
    {
      title: "Discusiones circulares y falta de acuerdos",
      desc: "Cuando cualquier conversación cotidiana se convierte en reproche, grito o silencio defensivo que dura días."
    },
    {
      title: "Pérdida de intimidad y afecto",
      desc: "Sensación de convivir como compañeros de casa o socios de vida, sin complicidad erótica ni cercanía emocional."
    },
    {
      title: "Infidelidad y reconstrucción de la confianza",
      desc: "Protocolo clínico para procesar el dolor de una traición, reparar heridas y decidir si es posible reedificar un vínculo sólido."
    },
    {
      title: "Parejas a distancia o transnacionales",
      desc: "Sesiones conjuntas por Google Meet adaptadas a parejas con un miembro en El Salvador y el otro en EE.UU., Canadá o Europa."
    }
  ];

  const phases = [
    { num: "1", title: "Evaluación y Mapa del Vínculo", desc: "Mapeamos el ciclo reactivo donde se atascan, sin juzgar ni buscar culpables." },
    { num: "2", title: "Desescalada Emocional", desc: "Técnicas inmediatas para detener reproches automáticos y recuperar la calma en casa." },
    { num: "3", title: "Reconstrucción y Acuerdos", desc: "Trabajo profundo en afecto, sexualidad, límites familiares y finanzas compartidas." },
    { num: "4", title: "Consolidación y Alta", desc: "Autonomía definitiva con herramientas preventivas para el futuro." }
  ];

  return (
    <div className="app-wrapper">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '18px' }}>
                <HeartHandshake size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Especialidad Clínica Principal · Centro Amaré</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.18, color: 'var(--color-plum-900)', marginBottom: '22px' }}>
                Protocolo Clínico de Terapia de Pareja <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                  Psicología Basada en Evidencia (IBCT & TCC)
                </span>
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                Nuestro servicio especializado de <a href="/" style={{ color: 'var(--color-clay)', fontWeight: 600, textDecoration: 'underline' }}>terapia de pareja en El Salvador</a> y online para quienes viven en el exterior ofrece un acompañamiento riguroso para desactivar el conflicto, sanar el desgaste acumulado y recuperar la complicidad con una psicóloga clínica acreditada por la JVPP.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('page_terapia_pareja_hero', '1ª sesión sin costo')}
                >
                  <span>Agendar 1ª sesión de 30 min sin costo</span>
                </HeroButton>

                <HeroButton
                  appearance="ink-sweep"
                  href="/test-de-pareja"
                >
                  <span>Hacer test de pareja (2 min)</span>
                </HeroButton>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-clay)' }} /> Privacidad y secreto profesional
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} style={{ color: 'var(--color-clay)' }} /> 1ª sesión de 30 min sin costo
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={16} style={{ color: 'var(--color-clay)' }} /> Plan mensual de $100 USD
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Motivos de consulta */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
              <h2 className="font-serif" style={{ fontSize: '34px', color: 'var(--color-plum-900)', marginBottom: '14px' }}>
                ¿Cuándo es momento de iniciar terapia de pareja?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)' }}>
                La mayoría de parejas no llegan a consulta por falta de amor, sino por dinámicas de desgaste que no logran desarmar por sí solas.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {reasons.map((r, i) => (
                <div key={i} className="card-panel" style={{ padding: '28px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--color-clay-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <Sparkles size={18} style={{ color: 'var(--color-clay)' }} />
                  </div>
                  <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--color-plum-900)', marginBottom: '10px' }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fases clínicas */}
        <section className="section" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
              <div className="pill-badge" style={{ marginBottom: '12px' }}>
                <span>Metodología Clínica Estructurada</span>
              </div>
              <h2 className="font-serif" style={{ fontSize: '34px', color: 'var(--color-plum-900)', marginBottom: '14px' }}>
                Nuestro método en 4 fases clínicas
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-ink-secondary)' }}>
                Protocolo basado en Terapia Integral de Pareja (IBCT) y TCC: objetivo, claro y con metas medibles desde la primera sesión.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {phases.map((p, i) => (
                <div key={i} className="card-panel" style={{ background: '#FFFFFF', padding: '26px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--color-plum-900)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginBottom: '16px' }}>
                    {p.num}
                  </div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-plum-900)', marginBottom: '10px' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Guías clínicas y recursos de lectura */}
            <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span className="pill-badge pill-badge-clay" style={{ marginBottom: '10px' }}>
                  <span>Lecturas y Recursos Clínicos</span>
                </span>
                <h3 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)' }}>
                  Guías recomendadas por nuestro equipo de terapeutas
                </h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <a
                  href="/blog/crianza-en-pareja-desacuerdos-hijos-soluciones"
                  style={{ textDecoration: 'none', background: '#FFFFFF', padding: '22px', borderRadius: '18px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', display: 'block' }}
                >
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Crianza & Familia</span>
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-plum-900)', margin: '8px 0 6px', fontWeight: 700, lineHeight: 1.35 }}>
                    Crianza en pareja: resolver desacuerdos con los hijos sin desgastar el vínculo
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Estrategias clínicas para alinear criterios educativos y evitar que los hijos se conviertan en frente de batalla.
                  </p>
                </a>
                <a
                  href="/blog/cuando-ir-a-terapia-de-pareja"
                  style={{ textDecoration: 'none', background: '#FFFFFF', padding: '22px', borderRadius: '18px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', display: 'block' }}
                >
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Prevención & Diagnóstico</span>
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-plum-900)', margin: '8px 0 6px', fontWeight: 700, lineHeight: 1.35 }}>
                    ¿Cuándo ir a terapia de pareja? 8 señales de alerta antes del punto de no retorno
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Identifica a tiempo los patrones de silencio, reproche o frialdad antes de que el desgaste sea irreversible.
                  </p>
                </a>
                <a
                  href="/blog/se-puede-perdonar-una-infidelidad-guia-pareja"
                  style={{ textDecoration: 'none', background: '#FFFFFF', padding: '22px', borderRadius: '18px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', display: 'block' }}
                >
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Confianza & Crisis</span>
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-plum-900)', margin: '8px 0 6px', fontWeight: 700, lineHeight: 1.35 }}>
                    ¿Se puede perdonar una infidelidad? Guía clínica para reconstruir la confianza
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Protocolo en etapas para procesar el dolor, transparentar dudas y decidir con madurez el futuro de la relación.
                  </p>
                </a>
              </div>
            </div>

            {/* Banner CTA */}
            <div style={{ marginTop: '56px', textAlign: 'center', background: 'var(--color-plum-900)', borderRadius: '24px', padding: '44px 32px', color: '#fff' }}>
              <h3 className="font-serif" style={{ fontSize: '28px', color: '#fff', marginBottom: '12px' }}>
                ¿Quieren saber cómo se aplicaría a su situación?
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                En la primera sesión de 30 minutos sin costo por Google Meet, la terapeuta escucha su contexto y les entrega una hoja de ruta clara.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clay"
                style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 'var(--r-pill)', textDecoration: 'none', color: '#fff', fontWeight: 600 }}
                onClick={() => trackWhatsAppClick('page_terapia_pareja_mid', 'Primera conversación 30 min')}
              >
                <span>Empieza con una primera conversación (30 min sin costo) →</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
