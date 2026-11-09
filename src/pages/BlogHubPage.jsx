import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogMeta';

export { BLOG_POSTS };

const CATEGORIES = [
  { id: 'todos', label: 'Todos los artículos' },
  { id: 'pareja', label: 'Terapia de Pareja & Vínculos' },
  { id: 'ansiedad', label: 'Ansiedad, Estrés & Emociones' },
  { id: 'ayuda', label: 'Elegir Psicólogo en El Salvador' },
  { id: 'diaspora', label: 'Diáspora, Familia & Crianza' }
];

export default function BlogHubPage() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredPosts = activeFilter === 'todos' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.filterGroup === activeFilter);

  return (
    <div className="app-wrapper">
      <Navbar />

      <main id="main-content">
        {/* Header */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '48px' }}>
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

              <p style={{ fontSize: '18px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                Artículos clínicos escritos con rigor médico y empatía por el equipo de Centro Amaré. Respuestas fundamentadas a las dudas más comunes sobre terapia de pareja, ansiedad, límites familiares y salud mental.
              </p>

              {/* Categorías / Filtros */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', margin: '0 auto' }}>
                {CATEGORIES.map(cat => {
                  const isActive = activeFilter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveFilter(cat.id)}
                      style={{
                        background: isActive ? 'var(--color-plum-900)' : '#FFFFFF',
                        color: isActive ? '#FFFFFF' : 'var(--color-ink-secondary)',
                        border: isActive ? '1px solid var(--color-plum-900)' : '1px solid var(--border-subtle)',
                        padding: '8px 18px',
                        borderRadius: 'var(--r-pill)',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                      }}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '48px', paddingBottom: '80px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', maxWidth: '1120px', margin: '0 auto' }}>
              {filteredPosts.map((post) => (
                  <article 
                    key={post.slug}
                    className="blog-card-article"
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                  >
                    {/* Imagen Ilustrada Editorial de Cabecera */}
                    {post.image && (
                      <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: 'var(--color-surface)' }}>
                        <a href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
                          <picture>
                            <source srcSet={post.image} type="image/webp" />
                            <img
                              src={post.image.replace('.webp', '.jpg')}
                              alt={post.title}
                              width="720"
                              height="405"
                              loading="lazy"
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.35s ease'
                              }}
                              className="blog-card-img"
                            />
                          </picture>
                        </a>
                      </div>
                    )}

                    <div style={{ padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', background: 'var(--color-canvas)', padding: '5px 12px', borderRadius: 'var(--r-pill)' }}>
                            {post.category}
                          </span>
                          <span style={{ fontSize: '12px', color: 'var(--color-ink-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Clock size={13} /> {post.readTime}
                          </span>
                        </div>

                        <h2 className="font-serif" style={{ fontSize: '21px', color: 'var(--color-plum-900)', lineHeight: 1.35, marginBottom: '12px' }}>
                          <a href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {post.title}
                          </a>
                        </h2>

                        <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
                          {post.excerpt}
                        </p>
                      </div>

                      <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '12px', color: 'var(--color-ink-muted)' }}>
                          <span>{post.author}</span>
                          <time dateTime={post.dateModified} style={{ fontSize: '11.5px', opacity: 0.9 }}>{post.dateLabel}</time>
                        </div>
                        <a 
                          href={`/blog/${post.slug}`}
                          style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            color: 'var(--color-clay)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            flexShrink: 0
                          }}
                        >
                          <span>Leer guía</span>
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
