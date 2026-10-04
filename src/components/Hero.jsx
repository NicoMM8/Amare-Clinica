"use client";

import React from 'react';
import { Globe, ShieldCheck, HeartHandshake, Sparkles, MessageCircle, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { HeroButton } from './ui/hero-button';
import { PigmentAtmosphere } from './cojeev/PigmentAtmosphere';

export default function Hero() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría agendar mi sesión inicial gratuita de 30 minutos en Centro Amaré.");

  return (
    <section className="hero-section" id="inicio">
      {/* Organic drifting pigment clouds (Cojeev atmosphere) */}
      <PigmentAtmosphere />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ alignItems: 'center' }}>
          
          {/* ── LEFT COLUMN: Copy & Brand Narrative ──────────── */}
          <div>
            {/* Availability Pill */}
            <div
              className="pill-badge"
              style={{
                marginBottom: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span className="pill-dot" style={{ backgroundColor: 'var(--color-clay)' }}></span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-plum-900)' }}>
                Terapia Online · Disponible para El Salvador y Diáspora
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline font-serif">
              Terapia de pareja{' '}
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                en El Salvador.
              </span>
            </h1>

            {/* Subtitle with authentic brand copy */}
            <p className="hero-subtitle" style={{ maxWidth: '520px' }}>
              <strong>Lo que sientes importa.</strong> Psicoterapia online especializada en vínculos, comunicación y crisis de pareja para salvadoreños en el país, EE.UU., Canadá y Europa. Tu terapeuta ya conoce tu contexto cultural — sin tener que explicarlo desde cero.
            </p>

            {/* CTAs */}
            <div className="hero-actions" style={{ marginBottom: '28px' }}>
              <HeroButton
                appearance="paper-fold"
                variant="clay"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Agendar primera sesión gratuita</span>
              </HeroButton>

              <HeroButton
                appearance="ink-sweep"
                href="/tu-match"
              >
                <span>Evaluar nuestro caso de pareja</span>
              </HeroButton>
            </div>

            {/* Human & Social Proof Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-ink-secondary)' }}>
                <Globe size={16} style={{ color: 'var(--color-clay)' }} />
                <span>Desde El Salvador al mundo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-ink-secondary)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-clay)' }} />
                <span>100% Confidencial</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-ink-secondary)' }}>
                <Clock size={16} style={{ color: 'var(--color-clay)' }} />
                <span>Horarios flexibles</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Clean Therapist Photo ─────────── */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
            {/* Ambient decorative warm glow behind photo card */}
            <div
              style={{
                position: 'absolute',
                inset: '-8px',
                background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(169, 90, 65, 0.14) 0%, rgba(218, 184, 144, 0.06) 60%, transparent 100%)',
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
                boxShadow: '0 16px 40px rgba(35, 18, 33, 0.10)',
                border: '1px solid rgba(34, 40, 74, 0.08)',
              }}
            >
              <img
                src="/images/hero-therapist.jpg"
                alt="Iris Alarcón — Psicóloga Clínica especialista en Terapia de Pareja, Centro Amaré"
                className="hero-visual-img"
                style={{
                  height: '460px',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
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
              <div className="trust-text-title">Mismo código cultural</div>
              <div className="trust-text-sub">Sin explicar el contexto salvadoreño</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <HeartHandshake size={20} />
            </div>
            <div>
              <div className="trust-text-title">Pareja y Sexología Clínica</div>
              <div className="trust-text-sub">Incluso si están en distintos países</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="trust-text-title">Basado en evidencia</div>
              <div className="trust-text-sub">TCC · DBT · Terapia Integral de Parejas</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="trust-text-title">1ª sesión gratuita</div>
              <div className="trust-text-sub">30 min por Google Meet · Sin compromiso</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
