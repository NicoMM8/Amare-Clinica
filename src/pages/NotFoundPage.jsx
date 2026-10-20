import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main id="main-content" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '48px 32px',
          maxWidth: '520px',
          textAlign: 'center',
          boxShadow: '0 12px 32px rgba(34, 40, 74, 0.08)'
        }}>
          <div style={{ fontSize: '44px', marginBottom: '12px' }} aria-hidden="true">🌿</div>
          <h1 className="font-serif" style={{ fontSize: '30px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
            Página no encontrada (404)
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--color-ink-secondary)', marginBottom: '28px' }}>
            La página que buscas no existe o ha cambiado de lugar. Puedes volver al inicio o conocer nuestras opciones de terapia.
          </p>
          <a href="/" className="btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
            Volver al Inicio
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
