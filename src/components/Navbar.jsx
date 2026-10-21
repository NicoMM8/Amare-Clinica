import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';
import { LivingCoilingArrow } from './ui/hero-button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navHovered, setNavHovered] = useState(false);

  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, me gustaría agendar una primera conversación.");

  const handleWhatsAppClick = (location) => {
    trackWhatsAppClick(location, 'Primera sesión gratis');
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* Brand */}
        <a 
          href="/" 
          className="brand-logo" 
          aria-label="Centro Amaré — Inicio"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            lineHeight: 1,
            padding: 0,
            margin: 0
          }}
        >
          <picture style={{ display: 'flex', alignItems: 'center' }}>
            <source srcSet="/images/logo-nav.webp" type="image/webp" />
            <img 
              src="/images/logo-nav.png" 
              alt="Centro Amaré — Terapia de Pareja" 
              width="114"
              height="48"
              style={{ 
                height: '48px', 
                width: 'auto', 
                display: 'block', 
                objectFit: 'contain' 
              }}
            />
          </picture>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="/#especialidades" className="nav-link">Especialidades</a></li>
          <li><a href="/salvadorenos-en-el-exterior" className="nav-link">Salvadoreños en el Exterior</a></li>
          <li><a href="/#equipo" className="nav-link">Equipo Clínico</a></li>
          <li><a href="/precios" className="nav-link">Honorarios</a></li>
          <li><a href="/blog" className="nav-link">Guías</a></li>
          <li><a href="/#faq" className="nav-link">Preguntas</a></li>
        </ul>

        {/* Action Button & Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="nofollow noopener noreferrer" 
            className="v-nav-cojeev-btn"
            onClick={() => handleWhatsAppClick('navbar')}
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}
            aria-label="1ª conversación sin costo por WhatsApp"
          >
            <span className="v-hero-button__window">
              <span className="v-hero-button__label">
                <span className="nav-cta-text-desktop">1ª conversación sin costo</span>
                <span className="nav-cta-text-mobile">Agendar</span>
              </span>
            </span>
            <LivingCoilingArrow hovered={navHovered} />
          </a>

          {/* Hamburger button (Solo visible en móvil/tablet) */}
          <button 
            type="button"
            className="nav-mobile-toggle"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          left: '16px',
          right: '16px',
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-lg)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 101
        }}>
          <a href="/#especialidades" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Especialidades Clínicas</a>
          <a href="/test-de-pareja" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-clay)' }}>Test de Pareja (2 min)</a>
          <a href="/salvadorenos-en-el-exterior" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Salvadoreños en el Exterior</a>
          <a href="/#equipo" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Equipo Clínico</a>
          <a href="/precios" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Honorarios y Modalidades</a>
          <a href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Guías y Recursos</a>
          <a href="/#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Preguntas Frecuentes</a>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-hairline)', margin: '4px 0' }} />
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="nofollow noopener noreferrer" 
            className="btn-clay"
            onClick={() => handleWhatsAppClick('navbar_mobile_drawer')}
            style={{ width: '100%', padding: '14px', borderRadius: 'var(--r-pill)', color: '#fff', textAlign: 'center', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <MessageSquare size={18} />
            <span>1ª conversación sin costo</span>
          </a>
        </div>
      )}
    </div>
  );
}
