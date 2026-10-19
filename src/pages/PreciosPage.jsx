import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { HeroButton } from '../components/ui/hero-button';
import { CreditCard, Check, ShieldCheck, Clock, HelpCircle, ArrowRight, FileText } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';
import { PaymentMethodBadges } from '../components/PaymentLogos';

export default function PreciosPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, vi el Plan Mensual en la web y me gustaría agendar la primera conversación.");

  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '18px' }}>
                <CreditCard size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Precios y Honorarios Transparentes</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.18, color: 'var(--color-plum-900)', marginBottom: '22px' }}>
                Precios de Terapia de Pareja <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                  en El Salvador y Online
                </span>
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                Sin sorpresas, sin permanencia obligatoria ni deudas posteriores. Un modelo accesible para cuidar la salud de tu vínculo con el máximo rigor profesional.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <HeroButton
                  appearance="paper-fold"
                  variant="clay"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('page_precios_hero', '1ª sesión gratis')}
                >
                  <span>Agendar 1ª sesión de 30 min sin costo</span>
                </HeroButton>

                <HeroButton
                  appearance="ink-sweep"
                  href="/test-de-pareja"
                >
                  <span>Test de pareja (2 min)</span>
                </HeroButton>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '60px', paddingBottom: '80px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', maxWidth: '920px', margin: '0 auto' }}>
              
              {/* Tarjeta 1: Sesión Inicial Gratis */}
              <div className="card-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1.5px solid var(--border-subtle)' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-ink-muted)', background: 'var(--color-canvas)', padding: '4px 10px', borderRadius: 'var(--r-pill)' }}>
                    Paso 1 · Sin compromiso
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '16px', marginBottom: '10px' }}>
                    Primera Conversación
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '42px', fontWeight: 700, color: 'var(--color-plum-900)' }}>$0</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-ink-muted)' }}>USD / 30 minutos</span>
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                    Espacio privado por Google Meet para conocernos, escuchar su motivo de consulta y explicarles con claridad la hoja de ruta recomendada.
                  </p>

                  <div style={{
                    background: 'var(--color-canvas)',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    marginBottom: '20px',
                    border: '1px dashed var(--color-clay-border)',
                    fontSize: '12.5px',
                    color: 'var(--color-ink-secondary)',
                    lineHeight: 1.5
                  }}>
                    <strong>¿Qué pasa en estos 30 min?</strong> No tienes que contarlo todo de golpe. Nos conocemos por videollamada, me cuentan brevemente qué les preocupa y vemos si hacen "clic" conmigo antes de decidir empezar.
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                      <Check size={18} style={{ color: 'var(--color-clay)' }} />
                      <span>30 minutos con la psicóloga</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                      <Check size={18} style={{ color: 'var(--color-clay)' }} />
                      <span>Sin ingresar tarjeta de crédito</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                      <Check size={18} style={{ color: 'var(--color-clay)' }} />
                      <span>Estimación de sesiones necesarias</span>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: '100%', textAlign: 'center', padding: '13px' }}
                  onClick={() => trackWhatsAppClick('page_precios_free_card', 'Agendar gratis')}
                >
                  <span>Agendar 30 min sin costo</span>
                </a>
              </div>

              {/* Tarjeta 2: Plan Mensual Destacado */}
              <div className="card-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '2px solid var(--color-clay)', background: '#FFFFFF', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-13px', right: '28px', background: 'var(--color-clay)', color: '#fff', fontSize: '11.5px', fontWeight: 700, padding: '4px 14px', borderRadius: 'var(--r-pill)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Recomendado
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-clay)', background: 'var(--color-clay-subtle)', padding: '4px 10px', borderRadius: 'var(--r-pill)' }}>
                    Paso 2 · Proceso Clínico
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '16px', marginBottom: '10px' }}>
                    Plan Mensual Cómodo
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '42px', fontWeight: 700, color: 'var(--color-clay)' }}>$100</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-ink-muted)' }}>USD / mes</span>
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    Hasta 4 sesiones mensuales de 50 a 60 minutos (equivalente a <strong>$25 USD por sesión</strong>). <strong>Misma tarifa fija para Terapia de Pareja o Individual</strong>, sin costes ocultos ni permanencia.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                      <Check size={18} style={{ color: 'var(--color-clay)' }} />
                      <span>Hasta 4 sesiones al mes de 50-60 min</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                      <Check size={18} style={{ color: 'var(--color-clay)' }} />
                      <span>Válido para Parejas o Individual</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                      <Check size={18} style={{ color: 'var(--color-clay)' }} />
                      <span>Ejercicios clínicos guiados entre sesiones</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
                      <Check size={18} style={{ color: 'var(--color-clay)' }} />
                      <span>Sin permanencia: pausan cuando quieran</span>
                    </div>
                  </div>

                  {/* Métodos de Pago con Logos Reales */}
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{ display: 'block', fontSize: '11.5px', fontWeight: 600, color: 'var(--color-ink-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Pagos sin comisiones de remesa:
                    </span>
                    <PaymentMethodBadges compact={false} />
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clay"
                  style={{ width: '100%', textAlign: 'center', padding: '13px', borderRadius: 'var(--r-pill)', color: '#fff', textDecoration: 'none', fontWeight: 600 }}
                  onClick={() => trackWhatsAppClick('page_precios_monthly_card', 'Comenzar plan')}
                >
                  <span>Iniciar con sesión de 30 min sin costo →</span>
                </a>
              </div>

            </div>

            {/* Facturación Oficial y Reembolso de Seguro Médico */}
            <div style={{
              marginTop: '40px',
              maxWidth: '920px',
              margin: '40px auto 0',
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '28px 32px',
              border: '1.5px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', maxWidth: '640px' }}>
                <div style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '14px', 
                  background: 'var(--color-clay-subtle)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <FileText size={24} style={{ color: 'var(--color-clay)' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                      Factura Médica para Reembolso de Seguro (JVPP)
                    </h3>
                    <span style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      color: '#27AE60', 
                      background: 'rgba(39, 174, 96, 0.12)', 
                      padding: '3px 10px', 
                      borderRadius: 'var(--r-pill)' 
                    }}>
                      El Salvador · EE. UU. · Canadá
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
                    Entregamos factura profesional y recibos detallados con registro sanitario oficial de la <strong>Junta de Vigilancia de la Profesión en Psicología de El Salvador (JVPP N.º 47096)</strong>. Si cuentas con seguro privado de salud en El Salvador o póliza en EE. UU./Canadá con cobertura ambulatoria o beneficios fuera de red (<em>out-of-network / superbills</em>), podrás gestionar tu reembolso sin dificultades.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/50373184781?text=Hola,%20quisiera%20consultar%20sobre%20la%20facturaci%C3%B3n%20para%20el%20reembolso%20de%20mi%20seguro%20m%C3%A9dico."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '13.5px', padding: '11px 20px', whiteSpace: 'nowrap' }}
              >
                Consultar por tu seguro →
              </a>
            </div>
          </div>
        </section>

        {/* Formas de Pago */}
        <section className="section" style={{ paddingTop: '60px', paddingBottom: '70px' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="font-serif" style={{ fontSize: '30px', color: 'var(--color-plum-900)', marginBottom: '14px' }}>
                Métodos de pago seguros aceptados
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65, marginBottom: '32px' }}>
                Si resides en El Salvador, aceptamos transferencia bancaria directa (Banco Agrícola, BAC Credomatic, Banco Cuscatlán). Si resides en el extranjero (Canadá, EE.UU., Europa), aceptamos tarjetas de crédito y débito mediante pasarelas con cifrado bancario seguro.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--color-surface)', padding: '12px 24px', borderRadius: 'var(--r-pill)', border: '1px solid var(--border-hairline)', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-clay)' }} />
                <span>Transacciones con cifrado seguro · Recibo oficial entregado en cada pago</span>
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
