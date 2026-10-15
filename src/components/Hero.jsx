"use client";

import React from 'react';
import { Globe, HeartHandshake, Clock, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { HeroButton } from './ui/hero-button';
import { PigmentAtmosphere } from './cojeev/PigmentAtmosphere';

function WhatsAppIcon({ size = 20, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.71 14.81 12.13 15.86C14.15 16.73 14.56 16.55 15 16.51C15.44 16.47 16.41 15.94 16.61 15.36C16.82 14.79 16.82 14.3 16.76 14.2C16.7 14.1 16.53 14.04 16.28 13.91C16.03 13.79 14.8 13.18 14.57 13.1C14.34 13.01 14.18 12.97 14.01 13.22C13.85 13.47 13.38 14.02 13.24 14.18C13.1 14.34 12.96 14.36 12.71 14.24C12.46 14.12 11.66 13.85 10.71 13C9.97 12.34 9.47 11.53 9.33 11.28C9.18 11.03 9.31 10.9 9.44 10.77C9.55 10.66 9.69 10.48 9.81 10.33C9.94 10.19 9.98 10.08 10.06 9.92C10.14 9.75 10.1 9.61 10.04 9.49C9.98 9.36 9.5 8.18 9.3 7.69C9.1 7.21 8.9 7.27 8.75 7.26L8.53 7.33Z" />
    </svg>
  );
}

export default function Hero() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, vengo de la web y me gustaría agendar una primera conversación sin costo.");

  return (
    <section className="hero-section" id="inicio">
      {/* Organic drifting pigment clouds (Cojeev atmosphere) */}
      <PigmentAtmosphere />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ alignItems: 'center' }}>
          
          {/* ── LEFT COLUMN: Copy & Brand Narrative ──────────── */}
          <div>
            {/* Main Headline with SEO H1 wrapper */}
            <h1 className="hero-headline font-serif" style={{ margin: 0, padding: 0 }}>
              <span
                className="pill-badge"
                style={{
                  marginBottom: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)',
                  fontFamily: 'var(--font-sans, "Nunito Sans", sans-serif)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: 'normal',
                  textTransform: 'none',
                  color: 'var(--color-plum-900)'
                }}
              >
                <span className="pill-dot" style={{ backgroundColor: 'var(--color-clay)' }}></span>
                <span>Terapia de Pareja en El Salvador y Online para Salvadoreños en el Exterior</span>
              </span>
              <span style={{ display: 'block', fontSize: 'inherit', lineHeight: 'inherit' }}>
                Terapia salvadoreña,{' '}
                <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                  estés donde estés.
                </span>
              </span>
            </h1>

            {/* Subtitle with authentic brand copy */}
            <p className="hero-subtitle" style={{ maxWidth: '520px' }}>
              Terapia de pareja e individual online. Para hablar de lo difícil en tu idioma, con método científico y siempre con una persona real al otro lado.
            </p>

            {/* CTAs */}
            <div className="hero-actions" style={{ marginBottom: '10px' }}>
              <HeroButton
                appearance="paper-fold"
                variant="clay"
                href="/test-de-pareja"
              >
                <span>Evaluar nuestro caso de pareja</span>
              </HeroButton>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-appointment-pill"
                style={{
                  backgroundColor: 'transparent',
                  border: '1.5px solid var(--color-plum-900)',
                  color: 'var(--color-plum-900)',
                  boxShadow: 'none',
                }}
              >
                <span>Escríbenos por WhatsApp</span>
                <WhatsAppIcon size={19} />
              </a>
            </div>

            {/* Trust capsule con avatar de Licda. Iris Alarcón */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-pill)',
                padding: '6px 16px 6px 6px',
                marginBottom: '24px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <img
                src="/images/iris-alarcon-clinica.webp"
                alt="Licda. Iris Alarcón — Directora Clínica y Psicóloga Colegiada"
                width="40"
                height="40"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #FFFFFF',
                  boxShadow: '0 2px 6px rgba(34, 40, 74, 0.15)',
                  flexShrink: 0
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1.25 }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                  1ª conversación de 30 min sin costo con la Licda. Iris Alarcón
                </span>
                <span style={{ fontSize: '11.5px', color: 'var(--color-ink-muted)' }}>
                  Psicóloga Clínica Colegiada · Registro JVPP N.º 47096 · Vía Google Meet
                </span>
              </div>
            </div>

            {/* Human & Social Proof Row (Iconos en color Salvia) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13.5px', color: 'var(--color-ink-primary)' }}>
                <Globe size={16} style={{ color: 'var(--color-sage)' }} />
                <span>Desde El Salvador al mundo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13.5px', color: 'var(--color-ink-primary)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-sage)' }} />
                <span>Privacidad profesional</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13.5px', color: 'var(--color-ink-primary)' }}>
                <Clock size={16} style={{ color: 'var(--color-sage)' }} />
                <span>A tu ritmo</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Lifestyle Photo (Daniela profile - Unobravo/Selia aesthetic) ── */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
            {/* Ambient decorative warm glow behind photo card */}
            <div
              style={{
                position: 'absolute',
                inset: '-8px',
                background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(170, 90, 64, 0.12) 0%, rgba(217, 184, 147, 0.08) 60%, transparent 100%)',
                filter: 'blur(20px)',
                zIndex: 0,
                borderRadius: '32px',
                pointerEvents: 'none',
              }}
            />

            <div 
              className="hero-visual-card" 
              style={{ 
                position: 'relative', 
                zIndex: 1,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(34, 40, 74, 0.10)',
                border: '1px solid rgba(34, 40, 74, 0.08)',
              }}
            >
              <picture>
                <source srcSet="/images/hero-daniela-960.webp 960w, /images/hero-daniela-480.webp 480w" sizes="(max-width: 600px) 100vw, 480px" type="image/webp" />
                <source srcSet="/images/hero-daniela-960.jpg" type="image/jpeg" />
                <img
                  src="/images/hero-daniela-960.jpg"
                  alt="Terapia psicológica online para salvadoreños en el exterior — Centro Amaré"
                  className="hero-visual-img"
                  width="480"
                  height="460"
                  fetchPriority="high"
                  style={{
                    height: '460px',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </picture>

              {/* Glassmorphism Floating Trust Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '18px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 12px 30px rgba(34, 40, 74, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  zIndex: 2,
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                      Terapia Online en Tu Idioma
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#25D366' }} title="Disponible online" />
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-clay)', fontWeight: 600 }}>
                    Hablamos tu idioma y también tu contexto.
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'var(--color-clay-subtle)',
                    padding: '5px 10px',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: 'var(--color-clay)',
                  }}
                >
                  <Sparkles size={13} fill="currentColor" />
                  <span>En vivo</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── TRUST STRIP: Brand Clinical Pillars ──────────── */}
        <div className="trust-strip" style={{ marginTop: '56px' }}>
          <div className="trust-item">
            <div className="trust-icon-box">
              <Globe size={20} />
            </div>
            <div>
              <div className="trust-text-title">Nos entendemos a la primera</div>
              <div className="trust-text-sub">Sin tener que explicar cómo son nuestras familias o de dónde vienes.</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <HeartHandshake size={20} />
            </div>
            <div>
              <div className="trust-text-title">Pareja y Sexología Clínica</div>
              <div className="trust-text-sub">Conectados a la vez, vivan en la misma casa o en distintos países.</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="trust-text-title">Método con base científica</div>
              <div className="trust-text-sub">Herramientas prácticas (TCC, DBT e Integral de Pareja), sin jerga clínica.</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="trust-text-title">1ª conversación sin costo</div>
              <div className="trust-text-sub">30 min por Google Meet para conocernos, sin ningún compromiso.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
