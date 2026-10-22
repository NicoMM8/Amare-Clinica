import React from 'react';
import { Shield, Cookie, CheckCircle2, ArrowLeft, MessageCircle, Settings, Eye } from 'lucide-react';

export default function CookiesPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, tengo una pregunta sobre la privacidad y cookies de Centro Amaré.");

  const resetCookieConsent = () => {
    try {
      localStorage.removeItem('amare_cookie_consent');
      sessionStorage.removeItem('amare_cookie_consent');
      const banner = document.getElementById('cookie-consent-banner');
      if (banner) {
        banner.style.display = 'block';
      }
      alert('Tus preferencias de cookies han sido restablecidas. Puedes volver a configurarlas en el aviso inferior.');
    } catch {
      // ignore
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-canvas)', color: 'var(--color-ink-primary)' }}>
      {/* Top Header / Nav */}
      <header style={{ 
        borderBottom: '1px solid var(--border-subtle)', 
        backgroundColor: '#FFFFFF',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a 
            href="/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--color-plum-900)', 
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '14px'
            }}
          >
            <ArrowLeft size={18} />
            <span>Volver a la página principal</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-ink-secondary)' }}>
            <Shield size={16} style={{ color: 'var(--color-clay)' }} />
            <span>Privacidad y Confidencialidad Digital</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="container" style={{ maxWidth: '820px', padding: '64px 20px 96px' }}>
        
        {/* Badge & Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(169, 90, 65, 0.1)',
            color: 'var(--color-clay)',
            padding: '6px 16px',
            borderRadius: 'var(--r-pill, 999px)',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '16px'
          }}>
            <Cookie size={14} />
            <span>Transparencia Digital y Cookies</span>
          </div>

          <h1 className="font-serif" style={{
            fontSize: 'clamp(30px, 4.2vw, 44px)',
            fontWeight: 700,
            color: 'var(--color-plum-900)',
            lineHeight: 1.2,
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Política de Cookies y Privacidad Digital
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'var(--color-ink-secondary)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            En Centro Amaré consideramos la privacidad de las personas y parejas como un principio inviolable. Solo utilizamos cookies técnicas imprescindibles y analítica anónima respetuosa para garantizar que la web funcione de forma segura y ágil.
          </p>
        </div>

        {/* 3 Key Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '20px',
          marginBottom: '56px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '24px',
            borderRadius: 'var(--r-xl, 20px)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 4px 16px rgba(35, 18, 33, 0.04)'
          }}>
            <CheckCircle2 size={24} style={{ color: '#1B873F', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '8px' }}>
              Cero Cookies de Publicidad
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
              No vendemos datos ni utilizamos cookies de retargeting publicitario o píxeles de redes sociales comerciales.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '24px',
            borderRadius: 'var(--r-xl, 20px)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 4px 16px rgba(35, 18, 33, 0.04)'
          }}>
            <Eye size={24} style={{ color: 'var(--color-clay)', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '8px' }}>
              Analítica Anonimizada
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
              Métricas agregadas para saber qué guías clínicas son más útiles, con direcciones IP enmascaradas.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '24px',
            borderRadius: 'var(--r-xl, 20px)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 4px 16px rgba(35, 18, 33, 0.04)'
          }}>
            <Shield size={24} style={{ color: 'var(--color-plum-900)', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '8px' }}>
              Respeto a Do Not Track
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
              Si tu navegador tiene activada la señal DNT o GPC, no activamos herramientas de analítica opcional.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '40px 32px',
          borderRadius: 'var(--r-2xl, 24px)',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 8px 24px rgba(35, 18, 33, 0.04)',
          lineHeight: 1.7,
          fontSize: '15.5px',
          color: 'var(--color-ink-secondary)'
        }}>
          
          <h2 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '16px' }}>
            1. ¿Qué es una cookie?
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Una cookie es un pequeño archivo de texto que los sitios web guardan en tu navegador o dispositivo cuando los visitas. Su función principal es recordar preferencias técnicas (como si ya aceptaste un aviso o qué paso del test de pareja llevas activo) y generar estadísticas anónimas de rendimiento.
          </p>

          <h2 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '16px' }}>
            2. Tipos de cookies que utiliza Centro Amaré
          </h2>
          <p style={{ marginBottom: '16px' }}>
            En <strong>terapiadeparejaelsalvador.com</strong> únicamente empleamos dos categorías de cookies:
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-subtle)', color: 'var(--color-plum-900)' }}>
                  <th style={{ padding: '10px 12px' }}>Cookie</th>
                  <th style={{ padding: '10px 12px' }}>Tipo</th>
                  <th style={{ padding: '10px 12px' }}>Finalidad</th>
                  <th style={{ padding: '10px 12px' }}>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>amare_cookie_consent</td>
                  <td style={{ padding: '10px 12px' }}>Técnica / Necesaria</td>
                  <td style={{ padding: '10px 12px' }}>Almacena tu decisión sobre el banner de cookies.</td>
                  <td style={{ padding: '10px 12px' }}>1 año</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>_ga, _ga_*</td>
                  <td style={{ padding: '10px 12px' }}>Analítica Anónima</td>
                  <td style={{ padding: '10px 12px' }}>Google Analytics 4: métricas agregadas de visitas con IP anónima.</td>
                  <td style={{ padding: '10px 12px' }}>Hasta 2 años</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>_clck, _clsk</td>
                  <td style={{ padding: '10px 12px' }}>Analítica de Usabilidad</td>
                  <td style={{ padding: '10px 12px' }}>Microsoft Clarity: detectar errores de navegación en la web respetando DNT.</td>
                  <td style={{ padding: '10px 12px' }}>1 año / Sesión</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '16px' }}>
            3. Cómo gestionar o deshabilitar las cookies
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Puedes restringir, bloquear o borrar las cookies de cualquier sitio web modificando la configuración de tu navegador habitual:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '28px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
            <li style={{ marginBottom: '8px' }}><strong>Apple Safari:</strong> Ajustes &gt; Safari &gt; Privacidad y seguridad.</li>
            <li style={{ marginBottom: '8px' }}><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio.</li>
            <li style={{ marginBottom: '8px' }}><strong>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos guardados.</li>
          </ul>

          <div style={{
            background: 'var(--color-canvas)',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <strong style={{ color: 'var(--color-plum-900)', display: 'block', marginBottom: '4px' }}>
                ¿Deseas cambiar tu preferencia de consentimiento en esta web?
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
                Haz clic en el botón para borrar tu elección y volver a ver el aviso de cookies.
              </span>
            </div>
            <button
              type="button"
              onClick={resetCookieConsent}
              style={{
                background: 'var(--color-plum-900)',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px 20px',
                borderRadius: 'var(--r-pill, 999px)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '13.5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Settings size={15} />
              <span>Restablecer preferencias</span>
            </button>
          </div>

          <h2 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '16px' }}>
            4. Secreto profesional y protección del paciente
          </h2>
          <p style={{ margin: 0 }}>
            Para conocer en detalle cómo protegemos tus datos personales, tu expediente terapéutico y el secreto profesional amparado por la Junta de Vigilancia de la Profesión en Psicología (JVPP), te invitamos a consultar nuestra <a href="/privacidad" style={{ color: 'var(--color-clay)', fontWeight: 600, textDecoration: 'underline' }}>Política de Privacidad y Secreto Clínico</a>.
          </p>

        </div>

        {/* Contact CTA */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: 'var(--color-ink-secondary)', marginBottom: '16px' }}>
            ¿Tienes alguna consulta adicional sobre la privacidad de tu proceso?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: 'var(--r-pill, 999px)',
              backgroundColor: 'var(--color-clay)',
              color: '#FFFFFF',
              fontWeight: 600
            }}
          >
            <MessageCircle size={18} />
            <span>Consultar con nuestra asistente por WhatsApp</span>
          </a>
        </div>

      </main>
    </div>
  );
}
