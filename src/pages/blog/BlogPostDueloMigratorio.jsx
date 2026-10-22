import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Compass, ShieldCheck, HeartHandshake, CheckCircle2, MessageCircle } from 'lucide-react';

export default function BlogPostDueloMigratorio() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí el artículo sobre duelo migratorio en Centro Amaré y me gustaría agendar la sesión de 30 minutos sin costo.");

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
              <span>Duelo & Migración</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Duelo migratorio: qué es, sus fases y cómo manejarlo en el extranjero
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Equipo Clínico Centro Amaré</strong> · Psicología para la Diáspora Salvadoreña</span>
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
                El <strong>duelo migratorio</strong> reúne el conjunto de pérdidas que experimenta una persona al dejar su país de origen: personas amadas, lugares familiares, costumbres cotidianas, estatus social, el idioma del día a día y una versión conocida de uno mismo. A diferencia de otros tipos de pérdida, este duelo puede manifestarse incluso cuando migrar fue un anhelo planeado y la nueva vida ofrece estabilidad y oportunidades.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. Un duelo múltiple, recurrente y muchas veces invisible
              </h2>
              <p>
                A diferencia de la muerte de un ser querido, en la migración los elementos perdidos <em>siguen existiendo pero están lejos</em>. Esto genera una paradoja dolorosa: una videollamada dominical acerca por una hora y, al colgar, deja una sensación punzante de lejanía y silencio.
              </p>
              <p>
                Visitar El Salvador produce una alegría inmensa pero con frecuencia viene acompañada de una sensación desconcertante: la de sentir que ya no encajas completamente ni allá ni acá. Este fenómeno, conocido clínicamente como <strong>duelo recurrente</strong>, no significa un retroceso en tu proceso; refleja simplemente que la adaptación cambia según las etapas y las circunstancias vitales.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;Extrañar y avanzar pueden ocurrir al mismo tiempo. Sentir nostalgia por tu tierra y tus costumbres no significa que hayas fracasado en tu nueva vida; ambas vivencias forman parte de una adaptación psicológica honesta.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. La culpa por irse y la presión por &ldquo;estar siempre bien&rdquo;
              </h2>
              <p>
                Quien migra a menudo carga con un mandato silencioso: <em>&ldquo;Tengo que demostrar que valió la pena el sacrificio&rdquo;</em>. Esto provoca que muchos salvadoreños en EE. UU., Canadá o Europa callen su tristeza, soledad o agotamiento ante sus familias en El Salvador para no preocuparlas.
              </p>
              <p>
                A esto se suma la culpa por no estar presente en el envejecimiento de los padres, en los cumpleaños de los sobrinos o en los momentos difíciles. Intentar compensar esa ausencia con sobrecarga laboral o envíos económicos por encima de las posibilidades reales termina pasando una factura muy alta a la salud mental y a la relación de pareja.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                3. Integrar dos contextos sin perder tu identidad
              </h2>
              <p>
                Adaptarse a un nuevo país no exige borrar tu origen ni convertirte en alguien distinto. No se trata de una elección forzada entre &ldquo;aquí&rdquo; o &ldquo;allá&rdquo;. La salud emocional se alcanza cuando logras <strong>ampliar tu identidad</strong>:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  Mantener tus tradiciones culinarias, tu lenguaje y tus expresiones salvadoreñas en el hogar como un ancla de calidez.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  Aprender con curiosidad los códigos del entorno local sin sentir que estás traicionando tus raíces.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  Construir redes de pertenencia y apoyo mutuo donde puedas expresarte con autenticidad.
                </li>
              </ul>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                4. Estrategias prácticas para transitar el duelo migratorio
              </h2>
              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Nombra tus pérdidas concretas:</strong> En lugar de juzgarte con un <em>&ldquo;¿por qué no me siento feliz si lo tengo todo?&rdquo;</em>, valida qué extrañas específicamente (el clima, las pláticas cotidianas, el sentido de comunidad).
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Crea rituales de presencia sin hiperconexión:</strong> Acuerda horarios fijos para hablar con tu familia sin vivir pendiente del teléfono las 24 horas del día.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Construye un espacio de pertenencia local:</strong> Un club deportivo, un grupo de voluntariado o amistades con quienes compartir actividades fuera del trabajo.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Revisa acuerdos económicos de forma realista:</strong> Comunica con claridad tus límites presupuestarios para que la ayuda a tu país de origen sea sana y sostenible para todos.
                </li>
              </ol>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Sientes el peso del duelo migratorio o la soledad en el exterior?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré brindamos psicoterapia online especializada para la diáspora salvadoreña en Estados Unidos, Canadá y Europa. Terapia individual o de pareja en tu propio código cultural.
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
                    <span>Agendar 1ª sesión de 30 min sin costo</span>
                  </a>
                  <a
                    href="/salvadorenos-en-el-exterior"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Conocer el servicio para el exterior</span>
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
                    href="/blog/como-poner-limites-a-tu-familia-desde-la-distancia"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Familia y Límites</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo poner límites a tu familia desde la distancia sin culpa
                    </h4>
                  </a>
                  <a
                    href="/blog/como-afecta-emigrar-a-la-relacion-de-pareja"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Pareja y Diáspora</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo afecta emigrar a la relación de pareja: Guía práctica
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
