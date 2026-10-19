"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, HeartHandshake, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { PigmentAtmosphere } from './cojeev/PigmentAtmosphere';
import { HeroButton } from './cojeev/HeroButton';

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
  const [importaHovered, setImportaHovered] = useState(false);
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, vengo de la web y me gustaría agendar una primera conversación sin costo.");

  return (
    <section className="hero-section" id="inicio">
      <PigmentAtmosphere />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* ── TWO-COLUMN HERO GRID (Clean, airy & borderless) ── */}
        <div className="hero-grid">
          
          {/* ── LEFT COLUMN: Content & Social Proof ── */}
          <div className="hero-content">
            
            {/* Main SEO H1 (Clinical Eyebrow + Emotional Headline) */}
            <h1 
              className="hero-headline font-serif" 
              style={{ 
                margin: '0 0 16px 0', 
                fontSize: 'clamp(36px, 4.4vw, 56px)', 
                lineHeight: 1.12, 
                letterSpacing: '-0.025em', 
                color: 'var(--color-plum-900)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '14px'
              }}
              onMouseEnter={() => setImportaHovered(true)}
              onMouseLeave={() => setImportaHovered(false)}
            >
              {/* Eyebrow con Palabras Clave SEO: Terapia de Pareja y Sexología Clínica Online en El Salvador y el Exterior */}
              <span 
                className="badge-pill font-sans" 
                style={{ 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  letterSpacing: 'normal',
                  textTransform: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  alignSelf: 'flex-start'
                }}
              >
                <span className="badge-dot" aria-hidden="true" />
                <span>Terapia de Pareja y Sexología Clínica Online en El Salvador y el Exterior</span>
              </span>

              {/* Titular Emocional de Marca con 'importa' Animado */}
              <span style={{ display: 'block' }}>
                Lo que sientes{' '}
                <span 
                  style={{ 
                    position: 'relative', 
                    display: 'inline-block',
                    color: 'var(--color-clay)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setImportaHovered(true)}
                  onMouseLeave={() => setImportaHovered(false)}
                >
                  importa
                  {/* Hand-drawn organic SVG ink underline from Cojeev */}
                  <svg
                    viewBox="0 0 120 14"
                    preserveAspectRatio="none"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '8px',
                      overflow: 'visible',
                      pointerEvents: 'none'
                    }}
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M2 9 C 24 3, 40 12, 62 8 S 98 10, 118 4"
                      fill="none"
                      stroke="var(--color-clay)"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0.45, opacity: 0.75 }}
                      animate={{
                        pathLength: importaHovered ? 1 : 0.45,
                        opacity: importaHovered ? 1 : 0.75
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Empathetic & Clear Subtitle */}
            <p 
              style={{ 
                fontSize: 'clamp(15px, 1.6vw, 17.5px)', 
                lineHeight: 1.6, 
                color: 'var(--color-ink-secondary)', 
                margin: '0 0 18px 0', 
                maxWidth: '520px' 
              }}
            >
              Centro Amaré es la clínica de psicología y terapia de pareja para salvadoreños en el país y en el exterior. Para hablar de lo difícil en tu idioma, con método científico y profesionales colegiadas al otro lado.
            </p>

            {/* Social Proof / Rating */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '14px', 
                fontWeight: 600, 
                color: 'var(--color-plum-900)', 
                marginBottom: '20px' 
              }}
            >
              <span style={{ color: '#128C7E', fontSize: '18px', lineHeight: 1 }} aria-hidden="true">★</span>
              <span>Valorado <strong>Excelente</strong> (5.0/5) por parejas y pacientes</span>
            </div>

            {/* Authority Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14.5px', color: 'var(--color-plum-900)' }}>
                <span className="hero-bullet-check" aria-hidden="true">✓</span>
                <span><strong>Equipo clínico colegiado</strong> con +9 años de experiencia y acreditación sanitaria</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14.5px', color: 'var(--color-plum-900)' }}>
                <span className="hero-bullet-check" aria-hidden="true">✓</span>
                <span><strong>Mismo código cultural:</strong> El Salvador, EE.UU., Canadá y Europa</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14.5px', color: 'var(--color-plum-900)' }}>
                <span className="hero-bullet-check" aria-hidden="true">✓</span>
                <span><strong>Videollamada simultánea</strong> si están en ciudades o países distintos</span>
              </div>
            </div>

            {/* CTA Action Group */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <HeroButton
                  href="/test-de-pareja"
                  appearance="paper-fold"
                  variant="clay"
                  style={{
                    height: '52px',
                    padding: '0 26px',
                    fontSize: '15.5px',
                    boxShadow: '0 8px 24px rgba(183, 89, 64, 0.32)',
                  }}
                >
                  Evaluar nuestro caso de pareja
                </HeroButton>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-appointment-pill"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid var(--color-plum-900)',
                    color: 'var(--color-plum-900)',
                    boxShadow: '0 4px 14px rgba(34, 40, 74, 0.08)',
                    height: '52px',
                    padding: '0 22px',
                    fontSize: '15px',
                    borderRadius: 'var(--r-pill)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '9px',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  <span>WhatsApp directo</span>
                  <WhatsAppIcon size={18} />
                </a>
              </div>

              <span style={{ 
                fontSize: '13.5px', 
                fontWeight: 500, 
                color: 'rgba(34, 40, 74, 0.75)', 
                marginTop: '6px', 
                marginLeft: '2px',
                lineHeight: 1.45
              }}>
                Primera conversación (30 min sin costo) con el equipo clínico · Sin compromiso
              </span>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Full Team Photography ── */}
          <div className="hero-visual-card">
            <picture style={{ width: '100%', height: '100%', display: 'block' }}>
              <source srcSet="/images/equipo-clinico-amare-960.webp 960w, /images/equipo-clinico-amare-480.webp 480w" sizes="(max-width: 600px) 100vw, 560px" type="image/webp" />
              <source srcSet="/images/equipo-clinico-amare-960.jpg" type="image/jpeg" />
              <img
                src="/images/equipo-clinico-amare-960.jpg"
                alt="Equipo de psicólogos clínicos y terapia de pareja colegiados — Centro Amaré El Salvador"
                className="hero-visual-img"
                fetchPriority="high"
                width="960"
                height="717"
                style={{
                  width: '100%',
                  display: 'block',
                }}
              />
            </picture>

            {/* Top-Right Floating Live Trust Badge */}
            <div
              className="animate-float-delayed"
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: 'var(--r-pill)',
                padding: '7px 15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(34, 40, 74, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                fontSize: '12.5px',
                fontWeight: 600,
                color: 'var(--color-plum-900)',
                zIndex: 2,
              }}
            >
              <Clock size={14} style={{ color: 'var(--color-clay)' }} />
              <span>Atención en tu propio huso horario</span>
            </div>

            {/* Subtle Ambient Live Badge in the photo */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: 'var(--r-pill)',
                padding: '8px 18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                boxShadow: '0 8px 24px rgba(34, 40, 74, 0.14)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--color-plum-900)',
                zIndex: 2,
              }}
            >
              <span className="animate-radar-dot" />
              <span>Sesiones online por Google Meet · Sin traslados</span>
            </div>
          </div>

        </div>

        {/* ── TRUST STRIP: Brand Clinical Pillars below Frame ── */}
        <div className="trust-strip" style={{ marginTop: '48px' }}>
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
              <div className="trust-text-sub">Herramientas prácticas (TCC, DBT e Integral de Pareja), sin rodeos.</div>
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
