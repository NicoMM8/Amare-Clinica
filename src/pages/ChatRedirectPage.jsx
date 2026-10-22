import React, { useEffect } from 'react';

/**
 * ChatRedirectPage
 * Trampolín de redirección a WhatsApp para Centro Amaré.
 * Redirige instantáneamente al usuario a wa.me preservando cualquier mensaje precargado.
 * Protege contra penalizaciones de crawler (HTTP 429 rate limiting de Meta a bots de SEO).
 */
export default function ChatRedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const search = window.location.search || '';
        const params = new URLSearchParams(search);
        const text = params.get('text');
        const targetUrl = text 
          ? `https://wa.me/50373184781?text=${encodeURIComponent(text)}`
          : 'https://wa.me/50373184781';
        
        window.location.replace(targetUrl);
      } catch {
        window.location.replace('https://wa.me/50373184781');
      }
    }
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FAF7F5',
      fontFamily: 'Outfit, system-ui, -apple-system, sans-serif',
      color: '#231221',
      padding: '24px',
      textAlign: 'center'
    }}>
      <div style={{
        width: '44px',
        height: '44px',
        border: '3px solid #E5DCD5',
        borderTopColor: '#783A4C',
        borderRadius: '50%',
        animation: 'chatSpin 0.7s linear infinite',
        marginBottom: '20px'
      }} />
      <h1 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '0 0 8px 0', color: '#231221' }}>
        Conectando con WhatsApp de Centro Amaré...
      </h1>
      <p style={{ color: '#685954', fontSize: '0.92rem', maxWidth: '380px', margin: '0 0 24px 0', lineHeight: 1.5 }}>
        Te estamos transfiriendo para coordinar tu consulta con nuestro equipo clínico.
      </p>
      <a
        href="https://wa.me/50373184781"
        id="wa-direct-fallback"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 22px',
          backgroundColor: '#783A4C',
          color: '#FFFFFF',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.88rem'
        }}
      >
        Abrir WhatsApp ahora
      </a>
      <style>{`
        @keyframes chatSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
