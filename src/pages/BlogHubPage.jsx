import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { BookOpen, Clock, ArrowRight, ShieldCheck, HeartHandshake, DollarSign, Compass } from 'lucide-react';

export const BLOG_POSTS = [
  {
    slug: 'como-afecta-emigrar-a-la-relacion-de-pareja',
    title: 'Cómo afecta emigrar a la relación de pareja: Guía para salvadoreños en EE. UU. y Canadá',
    excerpt: 'El choque cultural, el ritmo laboral extenuante y la soledad en el extranjero ponen a prueba el vínculo amoroso. Claves clínicas para sanar la desconexión afectiva.',
    readTime: '6 min de lectura',
    category: 'Pareja y Migración',
    date: 'Actualizado 2026',
    author: 'Lic. Iris Alarcón (JVPP)',
    icon: Compass
  },
  {
    slug: 'cuanto-cuesta-una-terapia-de-pareja-en-el-salvador',
    title: 'Cuánto cuesta una terapia de pareja en El Salvador (Precios y guía 2026)',
    excerpt: 'Comparativa transparente de honorarios entre clínicas privadas en San Salvador, plataformas del extranjero y centros online. Cuánto invertir y cómo funciona el plan mensual.',
    readTime: '5 min de lectura',
    category: 'Honorarios & Precios',
    date: 'Actualizado 2026',
    author: 'Lic. Iris Alarcón (JVPP)',
    icon: DollarSign
  },
  {
    slug: 'como-poner-limites-a-tu-familia-desde-la-distancia',
    title: 'Cómo poner límites a tu familia desde la distancia sin sentir culpa',
    excerpt: 'Remesas, exigencias familiares y la culpa migratoria que agota a los salvadoreños en el exterior. Pautas psicológicas (TCC) para cuidar tus límites sin romper los lazos con los tuyos.',
    readTime: '6 min de lectura',
    category: 'Psicología Individual & Familia',
    date: 'Actualizado 2026',
    author: 'Lic. Iris Alarcón (JVPP)',
    icon: HeartHandshake
  }
];

export default function BlogHubPage() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main id="main-content">
        {/* Header */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
              <div className="pill-badge pill-badge-clay" style={{ marginBottom: '18px' }}>
                <BookOpen size={15} style={{ color: 'var(--color-clay)' }} />
                <span>Recursos Clínicos & Artículos Pilares</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.18, color: 'var(--color-plum-900)', marginBottom: '20px' }}>
                Blog & Guías de Psicología <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-clay)' }}>
                  para El Salvador y el Exterior
                </span>
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7 }}>
                Artículos clínicos escritos con rigor médico por la psicóloga <strong>Iris Alarcón (JVPP)</strong>. Respuestas fundamentadas a las dudas más comunes sobre terapia de pareja, costos y salud emocional en el extranjero.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '64px', paddingBottom: '80px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', maxWidth: '1120px', margin: '0 auto' }}>
              {BLOG_POSTS.map((post, idx) => {
                const IconComp = post.icon;
                return (
                  <article 
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '24px',
                      padding: '36px 30px',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', background: 'var(--color-canvas)', padding: '5px 12px', borderRadius: 'var(--r-pill)' }}>
                          {post.category}
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--color-ink-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={13} /> {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-serif" style={{ fontSize: '22px', color: 'var(--color-plum-900)', lineHeight: 1.35, marginBottom: '14px' }}>
                        <a href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          {post.title}
                        </a>
                      </h2>

                      <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                        {post.excerpt}
                      </p>
                    </div>

                    <div style={{ paddingTop: '18px', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '12.5px', color: 'var(--color-ink-muted)' }}>
                        {post.author}
                      </span>
                      <a 
                        href={`/blog/${post.slug}`}
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          color: 'var(--color-clay)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Leer guía</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
