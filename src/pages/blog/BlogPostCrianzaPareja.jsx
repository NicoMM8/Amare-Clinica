import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Users, CheckCircle2, MessageCircle, AlertCircle, Heart } from 'lucide-react';

export default function BlogPostCrianzaPareja() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí el artículo sobre crianza en pareja y desacuerdos con los hijos en Centro Amaré y quisiera agendar una primera sesión sin costo.");

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
              <span>Pareja & Crianza Familiar</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Crianza en pareja: cómo resolver los desacuerdos con los hijos sin desgastar el matrimonio
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Mtra. Iris Alarcón</strong> · Directora Clínica Centro Amaré (JVPP 3218)</span>
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
                La llegada y la educación de los hijos es una de las mayores fuentes de alegría, pero también una de las pruebas de fuego más intensas para cualquier relación de pareja. Estadísticamente, la satisfacción conyugal suele descender notablemente durante los primeros años de crianza y durante la adolescencia de los hijos si los padres no logran coordinarse como un equipo sólido.
              </p>

              <p>
                Los desacuerdos no nacen de la maldad, sino de las <strong>historias de origen diferentes</strong>: uno fue criado con disciplina estricta y cree que la firmeza es indispensable; el otro creció con sobreprotección y teme que cualquier límite &ldquo;traume al niño&rdquo;. El resultado: desautorizaciones delante de los hijos, resentimiento mutuo y un hogar donde los niños aprenden a manipular las grietas entre mamá y papá.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;El mejor regalo emocional que los padres pueden darle a sus hijos no son juguetes caros ni permisividad absoluta: es ver a sus padres quererse, respetarse y formar un frente unido de cuidado y protección.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                La trampa clásica: &ldquo;El policía bueno y el policía malo&rdquo;
              </h2>
              <p>
                Cuando uno de los miembros de la pareja asume el rol del &ldquo;estricto&rdquo; que pone normas y límites, el otro tiende a compensar asumiendo el rol del &ldquo;permisivo&rdquo; que consiente y rescata al niño. Cuanto más blando es uno, más rígido se vuelve el otro para evitar el caos.
              </p>
              <p>
                Esta dinámica genera un doble daño:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>A los hijos:</strong> Les genera inseguridad y confusión de normas, o aprenden a aliarse con un progenitor contra el otro.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>A la pareja:</strong> El &ldquo;policía malo&rdquo; se siente solo y juzgado como el villano de la casa, mientras el &ldquo;policía bueno&rdquo; se siente sobrecargado emocionalmente.
                </li>
              </ul>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                4 reglas de oro para blindar la pareja durante la crianza
              </h2>

              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '14px' }}>
                  <strong>Pacto de no desautorización en público:</strong> Si tu pareja acaba de poner un límite a tu hijo que consideras desproporcionado, respalda la autoridad en ese momento y discutan el ajuste a solas en el dormitorio sin la presencia de los niños.
                </li>
                <li style={{ marginBottom: '14px' }}>
                  <strong>Reunión semanal de &ldquo;comité de padres&rdquo; (15 minutos):</strong> Un espacio tranquilo para revisar horarios, permisos de fin de semana, uso de pantallas y responsabilidades escolares antes de que surjan los momentos de crisis.
                </li>
                <li style={{ marginBottom: '14px' }}>
                  <strong>Proteger la conyugalidad:</strong> Antes de ser padres, fueron pareja. Salir a cenar a solas una vez al mes o apagar la televisión 30 minutos antes para conversar sin hablar de pañales, tareas o colegios mantiene viva la llama.
                </li>
                <li style={{ marginBottom: '14px' }}>
                  <strong>Distinguir conducta de identidad:</strong> Corregir el comportamiento del hijo sin descalificar la capacidad de tu pareja como madre o padre.
                </li>
              </ol>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Los desacuerdos de crianza están afectando su matrimonio?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré trabajamos con orientación parental y terapia de pareja sistémica para alinear estilos educativos y devolver la paz a su hogar. Agenda tu primera sesión de 30 minutos sin costo.
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
                    href="/terapia-de-pareja"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Conocer terapia de pareja online</span>
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
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Señales de Alerta</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      ¿Cuándo ir a terapia de pareja? 8 señales de alerta y el error común de esperar años
                    </h4>
                  </a>
                  <a
                    href="/blog/fortalecer-relacion-pareja-ayuda-profesional"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Terapia Preventiva</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo fortalecer tu relación de pareja con ayuda profesional: Guía clínica
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
