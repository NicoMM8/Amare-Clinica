import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, HeartHandshake, CheckCircle2, MessageCircle, Shield } from 'lucide-react';

export default function BlogPostLimitesFamilia() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí el artículo sobre límites familiares y culpa en Centro Amaré y me gustaría agendar la sesión de 30 minutos sin costo.");

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
              <span>Psicología Individual & Familia Salvadoreña</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Cómo poner límites a tu familia desde la distancia sin sentir culpa
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Lic. Iris Alarcón</strong> (Registro JVPP El Salvador)</span>
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
                Para la inmensa mayoría de salvadoreños que residen en Estados Unidos, Canadá o Europa, el éxito migratorio viene acompañado de una pesada carga invisible: la expectativa de convertirse en el soporte económico y emocional incondicional de toda la familia en El Salvador.
              </p>

              <p>
                Cuando intentas priorizar tu propio descanso, comprar una casa con tu pareja o simplemente decir <em>"este mes no puedo enviar dinero extra"</em>, una sensación desgarradora de traición e ingratitud te invade. ¿Cómo cuidar tus límites sin romper los lazos con la gente que amas?
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. La anatomía de la culpa migratoria
              </h2>
              <p>
                En la cultura salvadoreña, la familia suele ser profundamente solidaria pero también hiperconectada y con fronteras difusas. Quien emigra suele interiorizar el mandato implícito de que “su deber es salvar a los que se quedaron”.
              </p>
              <p>
                Desde la <strong>Terapia Cognitivo-Conductual (TCC)</strong> y la psicología relacional, identificamos tres distorsiones frecuentes que alimentan esta culpa:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>La ilusión de omnipotencia:</strong> Creer que eres el único responsable del bienestar financiero y emocional de tus padres, hermanos y sobrinos.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Confundir amor con sacrificio destructivo:</strong> Sentir que decir "no" significa que has dejado de querer a tu familia o que te has vuelto "creído" por vivir fuera.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Desconocimiento del costo de vida en el exterior:</strong> Con frecuencia la familia en El Salvador asume que ganar en dólares significa que todo sobra, sin dimensionar el costo real de rentas, impuestos, seguros y frío extremo.
                </li>
              </ul>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. El impacto devastador en tu relación de pareja actual
              </h2>
              <p>
                Cuando los límites con la familia de origen no están claros, la factura la paga tu pareja. Si envías remesas imprevistas a espaldas de tu cónyuge o permites que las opiniones de familiares dicten las decisiones de tu hogar, generas desconfianza y resentimiento crónico.
              </p>
              <p>
                En consulta de terapia de pareja en <a href="/" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>Centro Amaré</a>, uno de los motivos de consulta más recurrentes en la diáspora es: <em>"Siento que mi pareja siempre pone a su familia de El Salvador antes que a mí y a nuestros hijos"</em>.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                3. Guía paso a paso para poner límites con firmeza y ternura
              </h2>
              <p>
                Poner límites no es pelear ni cortar el teléfono. Es definir hasta dónde puedes llegar sin destruirte en el camino:
              </p>
              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Establece un presupuesto fijo y predecible:</strong> Si apoyas económicamente a tus padres, define una suma mensual fija que esté consensuada con tu pareja. Cualquier gasto extraordinario debe ser evaluado con calma, no atendido de inmediato por chantaje o prisa.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Diferencia emergencia real de mala administración:</strong> Salvar a adultos funcionales de las consecuencias de sus propias decisiones les impide madurar y te agota a ti.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Aprende a tolerar la incomodidad del silencio:</strong> Cuando dices "no", es natural que la otra persona se enoje o guarde distancia. Poner un límite implica aceptar que no puedes controlar cómo reacciona el otro.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Sustituye la presencia económica por presencia afectiva:</strong> Llama para conversar de sus vidas, no solo cuando hay transacciones de por medio.
                </li>
              </ol>

              {/* Callout */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  Aprende a poner límites y recuperar tu tranquilidad
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré trabajamos con salvadoreños en el exterior mediante terapia individual (TCC y regulación emocional) para desarmar la culpa y vivir en calma.
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
                    href="/terapia-individual"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Conocer terapia individual online</span>
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
                    href="/blog/como-afecta-emigrar-a-la-relacion-de-pareja"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Pareja y Migración</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo afecta emigrar a la relación de pareja: Guía para salvadoreños
                    </h4>
                  </a>
                  <a
                    href="/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Honorarios y Guía</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      ¿Cuánto cuesta una terapia de pareja en El Salvador?
                    </h4>
                  </a>
                  <a
                    href="/blog/duelo-migratorio-que-es-como-manejarlo"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Identidad & Raíces</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Duelo migratorio: qué es, síntomas y cómo manejarlo sin perder tu raíz
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
