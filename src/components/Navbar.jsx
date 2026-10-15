import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <li><a href="/iris-alarcon" className="nav-link">Iris Alarcón</a></li>
          <li><a href="/precios" className="nav-link">Honorarios</a></li>
          <li><a href="/blog" className="nav-link">Guías</a></li>
          <li><a href="/#faq" className="nav-link">Preguntas</a></li>
        </ul>

        {/* Action Button & Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '14px' }}
            onClick={() => handleWhatsAppClick('navbar')}
          >
            <span>1ª conversación sin costo →</span>
          </a>

          {/* Hamburger button */}
          <button 
            type="button"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              display: 'inline-flex', 
              padding: '8px', 
              color: 'var(--color-plum-900)',
              borderRadius: '8px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
          <a href="/iris-alarcon" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Iris Alarcón (Sobre Mí)</a>
          <a href="/precios" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Honorarios y Modalidades</a>
          <a href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Guías y Recursos</a>
          <a href="/#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Preguntas Frecuentes</a>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-hairline)', margin: '4px 0' }} />
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
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
