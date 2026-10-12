import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera información para agendar mi primera sesión de encuadre gratuita de 30 minutos en Centro Amaré.");

  const handleWhatsAppClick = (location) => {
    trackWhatsAppClick(location, 'Primera sesión gratis');
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* Brand */}
        <a href="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center', height: '56px', overflow: 'hidden' }}>
          <picture>
            <source srcSet="/images/logo-transparent.webp" type="image/webp" />
            <img 
              src="/images/logo-transparent.png" 
              alt="Centro Amaré — Terapia de Pareja" 
              style={{ height: '160px', width: 'auto', objectFit: 'contain', marginLeft: '-16px' }}
            />
          </picture>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="/#especialidades" className="nav-link">Especialidades</a></li>
          <li><a href="/#pertenencia" className="nav-link">Diáspora Salvadoreña</a></li>
          <li><a href="/#equipo" className="nav-link">Iris Alarcón</a></li>
          <li><a href="/#honorarios" className="nav-link">Honorarios</a></li>
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
            <span>Primera sesión gratis →</span>
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
          <a href="/tu-match" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-clay)' }}>Evaluador Interactivo</a>
          <a href="/#pertenencia" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Diáspora y Cultura</a>
          <a href="/#equipo" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Nuestro Equipo</a>
          <a href="/#honorarios" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-plum-900)' }}>Precios y Proceso</a>
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
            <span>Hablar con la asistente</span>
          </a>
        </div>
      )}
    </div>
  );
}
