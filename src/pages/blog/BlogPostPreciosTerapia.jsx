import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, DollarSign, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

export default function BlogPostPreciosTerapia() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí la guía de precios de terapia de pareja en Centro Amaré y quisiera agendar la sesión inicial gratuita de 30 minutos.");

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
              <span>Precios & Guía Económica 2026</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Cuánto cuesta una terapia de pareja en El Salvador (Precios y guía completa 2026)
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Lic. Iris Alarcón</strong> (Registro JVPP El Salvador)</span>
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
                Una de las preguntas más frecuentes antes de dar el paso hacia la terapia es: <em>¿cuánto me va a costar realmente?</em> En El Salvador y para quienes residen fuera en Estados Unidos o Canadá, la falta de información transparente genera incertidumbre y muchas parejas retrasan su atención por temor a incurrir en gastos inasumibles.
              </p>

              <p>
                En esta guía desglosamos los costos promedio del mercado salvadoreño en 2026, los honorarios de clínicas presenciales, plataformas internacionales y cómo nuestro modelo de plan mensual hace que la salud mental sea accesible y sostenible.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. Rango de precios de terapia de pareja en El Salvador (2026)
              </h2>
              <p>
                Actualmente, el costo de una sesión de terapia de pareja en El Salvador varía según la modalidad y la experiencia del profesional:
              </p>

              {/* Table of Market Comparison */}
              <div style={{ overflowX: 'auto', margin: '28px 0', background: '#FFFFFF', borderRadius: '18px', border: '1px solid var(--border-subtle)', padding: '16px 20px', boxShadow: 'var(--shadow-xs)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '540px', fontSize: '14.5px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border-subtle)' }}>
                      <th style={{ padding: '12px', color: 'var(--color-plum-900)' }}>Opción / Modalidad</th>
                      <th style={{ padding: '12px', color: 'var(--color-plum-900)' }}>Costo por sesión</th>
                      <th style={{ padding: '12px', color: 'var(--color-plum-900)' }}>Costo mensual (4 ses.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-hairline)' }}>
                      <td style={{ padding: '12px', fontWeight: 600 }}>Clínicas privadas en San Salvador / Santa Tecla</td>
                      <td style={{ padding: '12px' }}>$45 – $75 USD</td>
                      <td style={{ padding: '12px' }}>$180 – $300 USD</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-hairline)' }}>
                      <td style={{ padding: '12px', fontWeight: 600 }}>Terapia privada en EE. UU. o Canadá (presencial/online)</td>
                      <td style={{ padding: '12px' }}>$150 – $250 USD</td>
                      <td style={{ padding: '12px' }}>$600 – $1,000 USD</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-hairline)' }}>
                      <td style={{ padding: '12px', fontWeight: 600 }}>Plataformas masivas de bajo costo (sin especialidad)</td>
                      <td style={{ padding: '12px' }}>$20 – $30 USD</td>
                      <td style={{ padding: '12px' }}>$80 – $120 USD (terapeutas rotativos)</td>
                    </tr>
                    <tr style={{ background: 'var(--color-canvas)' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: 'var(--color-plum-900)' }}>Centro Amaré (Plan Mensual Especializado)</td>
                      <td style={{ padding: '12px', fontWeight: 700, color: 'var(--color-clay)' }}>$25 USD / sesión</td>
                      <td style={{ padding: '12px', fontWeight: 700, color: 'var(--color-clay)' }}>$100 USD / mes (hasta 4 sesiones)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. ¿Por qué cobrar por sesión suelta perjudica el tratamiento?
              </h2>
              <p>
                El modelo tradicional de pago por sesión genera una barrera psicológica involuntaria: cada semana la pareja debe decidir si “vale la pena gastar $50 o $60 dólares más”. Ante cualquier imprevisto financiero o cuando una sesión resulta emocionalmente movilizadora, la tentación de abandonar o espaciar las citas es enorme.
              </p>
              <p>
                La evidencia en psicología relacional (IBCT) demuestra que la constancia semanal durante las primeras 6 a 8 semanas es determinante para consolidar cambios en la convivencia.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                3. El modelo de Centro Amaré: Tarifa fija y primera sesión gratis
              </h2>
              <p>
                Para eliminar la incertidumbre, en <a href="/" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>Centro Amaré</a> hemos estructurado un esquema transparente:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>1ª Conversación Exploratoria (30 min): Sin costo ($0 USD).</strong> Sirve para que conozcan a la psicóloga Iris Alarcón, expongan su caso y comprueben si el espacio se ajusta a lo que necesitan antes de pagar un solo dólar.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Plan Mensual Fijo de $100 USD:</strong> Incluye hasta 4 sesiones mensuales de 50 a 60 minutos por Google Meet (lo que representa solo $25 USD por sesión).
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Sin contratos de permanencia:</strong> Se abona mes a mes. Pueden pausar o cerrar el proceso cuando hayan alcanzado los objetivos clínicos.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Pagos seguros internacionales:</strong> Aceptamos tarjetas internacionales de crédito/débito y transferencias bancarias en El Salvador (Banco Agrícola, BAC, Cuscatlán).
                </li>
              </ul>

              {/* Callout */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  Consulta las modalidades y agenda sin costo
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  Empieza evaluando su caso en una videollamada privada de 30 minutos sin costo y sin ningún compromiso.
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
                    <span>Agendar sesión de 30 min sin costo</span>
                  </a>
                  <a
                    href="/precios"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Ver tabla completa de honorarios</span>
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
