import React from 'react';
import { Star, CheckCircle, ExternalLink, Quote, ShieldCheck } from 'lucide-react';

// Avatares de color con iniciales de los pacientes reales
function InitialAvatar({ name, colorPair }) {
  const initials = name
    .split(/[&\s]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase();

  const [bg, text] = colorPair;

  return (
    <div style={{
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      background: bg,
      color: text,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: '14.5px',
      flexShrink: 0,
      letterSpacing: '-0.02em',
      border: '2px solid rgba(255,255,255,0.9)',
      boxShadow: '0 2px 8px rgba(35, 18, 33, 0.10)'
    }}>
      {initials}
    </div>
  );
}

export default function Testimonials() {
  // Reseñas 100% reales extraídas del perfil oficial de Centro Amaré en Psico.org
  // Fuente verificada: https://www.psico.org/centro-47096
  const verifiedReviews = [
    {
      author: "Roberto",
      date: "18/11/2025",
      tag: "Terapia de Pareja",
      headline: "Volver a sentirnos fuertes como pareja",
      text: "Trabaje junto con mi esposa varios temas que no lograbamos resolver por nuestra cuenta y con las herramientas que Iris nos brindo pudimos salir adelante y sentirnos de nuevo fuertes como pareja.",
      colorPair: ['#22284A', '#FFFFFF'],
    },
    {
      author: "Adriana",
      date: "05/11/2025",
      tag: "Ansiedad y Bienestar",
      headline: "Muy profesional y humana desde la primera sesión",
      text: "Excelente psicóloga, muy profesional y humana. Desde la primera sesión me hizo sentir cómoda y en confianza. Sus consejos y técnicas me han ayudado muchísimo a manejar la ansiedad y mejorar mi bienestar. La recomiendo con todo mi corazón.",
      colorPair: ['#3D5A45', '#FFFFFF'],
    },
    {
      author: "Stephanie A.",
      date: "03/03/2025",
      tag: "Apoyo Personal y Confianza",
      headline: "Me sentí muy cómoda y comprendida",
      text: "Me sentí muy cómoda en las sesiones con Iris, comprendida lo que me dejo ser abierta con ella para que me apoyara con unos problemas personales que tenia.",
      colorPair: ['#8B3822', '#FFFFFF'],
    },
    {
      author: "A.G.S.",
      date: "26/06/2024",
      tag: "Proceso de Separación",
      headline: "Acompañamiento clínico en separación",
      text: "Me ayudó mucho en mi proceso de separación, la recomiendo mucho, muy buena terapeuta.",
      colorPair: ['#3C477D', '#FFFFFF'],
    },
    {
      author: "Diana Díaz",
      date: "18/11/2025",
      tag: "Crecimiento Personal",
      headline: "Excelente profesional, muy recomendada",
      text: "Muy recomendada, me ayudo mucho con mi crecimiento personal, excelente profesional.",
      colorPair: ['#3D5A45', '#FFFFFF'],
    },
    {
      author: "Laura",
      date: "18/11/2025",
      tag: "Acompañamiento Psicológico",
      headline: "Recomendada al 100%",
      text: "me ayudo muchísimo y la recomiendo 100%",
      colorPair: ['#22284A', '#FFFFFF'],
    },
  ];

  const psicoOrgUrl = "https://www.psico.org/centro-47096";

  return (
    <section className="section bg-grid-subtle" id="testimonios" style={{ background: 'var(--color-surface)', paddingTop: '64px', paddingBottom: '72px' }}>
      <div className="container">
        
        {/* Header con Sello de Verificación Psico.org */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="pill-badge pill-badge-clay" style={{ marginBottom: '14px' }}>
            <ShieldCheck size={14} style={{ color: 'var(--color-clay)' }} />
            <span>Opiniones Verificadas en Psico.org</span>
          </div>

          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px', color: 'var(--color-plum-900)', lineHeight: 1.25 }}>
            Experiencias reales de quienes se atendieron con Iris Alarcón
          </h2>

          <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 24px' }}>
            Valoraciones públicas y espontáneas registradas por pacientes reales en el directorio profesional independiente de psicología:
          </p>

          {/* Calificación Global Destacada */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#FFFFFF',
            padding: '10px 20px',
            borderRadius: 'var(--r-pill, 999px)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 4px 14px rgba(35, 18, 33, 0.05)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--color-clay, #B75940)" color="var(--color-clay, #B75940)" />
              ))}
            </div>
            <strong style={{ fontSize: '15px', color: 'var(--color-plum-900)' }}>5.0 / 5.0</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>·</span>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-secondary)', fontWeight: 600 }}>6 opiniones en Psico.org</span>
            <a
              href={psicoOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '12.5px',
                fontWeight: 600,
                color: 'var(--color-clay-text, #8B3822)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                marginLeft: '6px'
              }}
            >
              <span>Ver ficha oficial</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Grid de las 6 Reseñas Reales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          maxWidth: '1160px',
          margin: '0 auto'
        }}>
          {verifiedReviews.map((item, idx) => (
            <div
              key={idx}
              className="card-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px 24px',
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-xs)'
              }}
            >
              <div>
                {/* Header de la Card: Estrellas + Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--color-clay, #B75940)" color="var(--color-clay, #B75940)" />
                    ))}
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--color-clay-text, #8B3822)',
                    background: 'var(--color-clay-subtle)',
                    padding: '3px 9px',
                    borderRadius: 'var(--r-pill)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {item.tag}
                  </span>
                </div>

                {/* Titular interpretativo */}
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '10px', lineHeight: 1.35 }}>
                  "{item.headline}"
                </h3>

                {/* Texto textual exacto del paciente */}
                <p style={{
                  fontSize: '14px',
                  color: 'var(--color-ink-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '20px',
                  fontStyle: 'normal'
                }}>
                  "{item.text}"
                </p>
              </div>

              {/* Footer con Autor, Fecha y Sello Psico.org */}
              <div style={{
                borderTop: '1px solid var(--border-hairline)',
                paddingTop: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <InitialAvatar name={item.author} colorPair={item.colorPair} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--color-plum-900)' }}>
                      {item.author}
                    </div>
                    <div style={{ fontSize: '11.5px', color: 'var(--color-ink-muted)' }}>
                      {item.date}
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11.5px',
                  color: 'var(--color-ink-muted)',
                  background: 'var(--color-canvas)',
                  padding: '3px 8px',
                  borderRadius: 'var(--r-sm, 6px)'
                }}>
                  <CheckCircle size={12} style={{ color: '#166534' }} />
                  <span>Psico.org</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Nota al pie y Enlace al Directorio Externo */}
        <div style={{
          textAlign: 'center',
          marginTop: '44px',
          padding: '18px 24px',
          background: 'var(--color-canvas)',
          borderRadius: 'var(--r-xl)',
          maxWidth: '780px',
          margin: '44px auto 0',
          border: '1px solid var(--border-hairline)'
        }}>
          <p style={{ fontSize: '13px', color: 'var(--color-ink-secondary)', margin: '0 0 10px', lineHeight: 1.55 }}>
            Todas las opiniones son transcripciones textuales y verificables de pacientes en la plataforma sanitaria independiente <strong>Psico.org</strong> (Directorio de Psicología en San Salvador).
          </p>
          <a
            href={psicoOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--color-clay-text, #8B3822)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Ver perfil completo y opiniones en Psico.org</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
