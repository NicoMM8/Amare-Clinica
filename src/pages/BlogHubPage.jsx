import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { 
  BookOpen, Clock, ArrowRight, ShieldCheck, HeartHandshake, 
  DollarSign, Compass, Sparkles, Heart, AlertTriangle, 
  Activity, Award, Stethoscope, BatteryCharging, Users 
} from 'lucide-react';

export const BLOG_POSTS = [
  {
    slug: 'cuando-ir-a-terapia-de-pareja',
    title: '¿Cuándo ir a terapia de pareja? 8 señales de alerta y el error común de esperar años',
    excerpt: 'Las parejas esperan un promedio de 4 a 6 años antes de consultar. Cómo identificar el ciclo de demanda-retirada y por qué la intervención temprana cambia el pronóstico.',
    readTime: '6 min de lectura',
    category: 'Terapia de Pareja',
    filterGroup: 'pareja',
    date: 'Actualizado 2026',
    author: 'Mtra. Iris Alarcón (JVPP 6380)',
    icon: AlertTriangle,
    image: '/images/blog/cuando-terapia.webp'
  },
  {
    slug: 'primera-sesion-terapia-de-pareja',
    title: 'Qué pasa en la primera sesión de terapia de pareja: lo que nadie te explica antes de entrar',
    excerpt: 'Quién habla primero, la política de confidencialidad y por qué el psicólogo no es un juez que busca culpables. El protocolo de 4 sesiones de evaluación.',
    readTime: '6 min de lectura',
    category: 'Terapia de Pareja',
    filterGroup: 'pareja',
    date: 'Actualizado 2026',
    author: 'Mtra. Iris Alarcón (JVPP 6380)',
    icon: Users,
    image: '/images/blog/primera-sesion.webp'
  },
  {
    slug: 'dependencia-emocional-como-superarla',
    title: 'Dependencia emocional en la pareja: cómo reconocerla, entender tu apego y sanar sin perderte',
    excerpt: 'Miedo al abandono, hipervigilancia en WhatsApp y la pérdida de la propia identidad. Protocolo de 4 pasos para recuperar el centro individual.',
    readTime: '6 min de lectura',
    category: 'Vínculos & Apego',
    filterGroup: 'pareja',
    date: 'Actualizado 2026',
    author: 'Lic. Ernesto Mejía (JVPP 9314)',
    icon: Heart,
    image: '/images/blog/controlar-ansiedad.webp'
  },
  {
    slug: 'se-puede-perdonar-una-infidelidad-guia-pareja',
    title: '¿Se puede perdonar una infidelidad? Fases clínicas para sanar o cerrar en paz',
    excerpt: 'Shock inicial, obsesión por los detalles y la posibilidad real de reconstruir la confianza. Qué dice la psicología clínica sobre el perdón y cuándo soltar.',
    readTime: '7 min de lectura',
    category: 'Infidelidad & Confianza',
    filterGroup: 'pareja',
    date: 'Actualizado 2026',
    author: 'Mtra. Iris Alarcón (JVPP 6380)',
    icon: ShieldCheck,
    image: '/images/blog/infidelidad-perdon.webp'
  },
  {
    slug: 'falta-de-deseo-sexual-en-la-pareja-soluciones',
    title: 'Falta de deseo sexual en la pareja: Por qué se apaga la intimidad y cómo reactivarla',
    excerpt: 'Deseo espontáneo vs. receptivo, sobrecarga cotidiana y la paradoja del erotismo en parejas estables. Claves de sexología clínica sin presión.',
    readTime: '6 min de lectura',
    category: 'Sexología Clínica',
    filterGroup: 'pareja',
    date: 'Actualizado 2026',
    author: 'Mtra. Iris Alarcón (JVPP 6380)',
    icon: Sparkles,
    image: '/images/blog/deseo-sexual.webp'
  },
  {
    slug: 'fortalecer-relacion-pareja-ayuda-profesional',
    title: 'Cómo fortalecer tu relación de pareja con ayuda profesional: Guía clínica',
    excerpt: 'Desactivar ciclos de discusión repetitivos, reparar tras el conflicto y cuidar la complicidad. Por qué no hay que esperar a una crisis terminal para consultar.',
    readTime: '5 min de lectura',
    category: 'Terapia de Pareja',
    filterGroup: 'pareja',
    date: 'Actualizado 2026',
    author: 'Equipo Clínico Centro Amaré',
    icon: HeartHandshake,
    image: '/images/blog/cuando-terapia.webp'
  },
  {
    slug: 'crianza-en-pareja-desacuerdos-hijos-soluciones',
    title: 'Crianza en pareja: cómo resolver los desacuerdos con los hijos sin desgastar el matrimonio',
    excerpt: 'El policía bueno vs. policía malo, pactos de no desautorización y cómo proteger el vínculo conyugal mientras educas hijos emocionalmente sanos.',
    readTime: '6 min de lectura',
    category: 'Crianza & Pareja',
    filterGroup: 'diaspora',
    date: 'Actualizado 2026',
    author: 'Mtra. Iris Alarcón (JVPP 6380)',
    icon: Users,
    image: '/images/blog/crianza-en-pareja.webp'
  },
  {
    slug: 'como-controlar-la-ansiedad',
    title: 'Cómo controlar la ansiedad: qué funciona de verdad según la psicología clínica y en qué orden',
    excerpt: 'Por qué respirar hondo a veces aumenta la angustia y cómo aplicar el orden cognitivo-conductual (TCC) de 4 pasos para desactivar la falsa alarma cerebral.',
    readTime: '7 min de lectura',
    category: 'Ansiedad & Emociones',
    filterGroup: 'ansiedad',
    date: 'Actualizado 2026',
    author: 'Lic. Ernesto Mejía (JVPP 9314)',
    icon: Activity,
    image: '/images/blog/controlar-ansiedad.webp'
  },
  {
    slug: 'ataques-de-ansiedad',
    title: 'Ataques de pánico y ansiedad: qué son, síntomas físicos, cuánto duran y qué hacer mientras pasa',
    excerpt: 'Taquicardia, parestesias y sensación de asfixia: por qué casi todos los síntomas son físicos y la técnica de anclaje 5-4-3-2-1 para superar el pico.',
    readTime: '7 min de lectura',
    category: 'Ansiedad & Pánico',
    filterGroup: 'ansiedad',
    date: 'Actualizado 2026',
    author: 'Mtro. Rafael Franco (JVPP 3856)',
    icon: AlertTriangle,
    image: '/images/blog/ataques-panico.webp'
  },
  {
    slug: 'burnout-o-depresion-diferencias',
    title: 'Burnout o depresión: cómo diferenciarlos cuando el agotamiento laboral se vuelve emocional',
    excerpt: 'La pregunta que ordena la mayor parte de la confusión clínica, las 3 fases del síndrome de burnout y cuándo el estrés crónico deriva en depresión mayor.',
    readTime: '6 min de lectura',
    category: 'Estrés & Bienestar',
    filterGroup: 'ansiedad',
    date: 'Actualizado 2026',
    author: 'Mtro. Rafael Franco (JVPP 3856)',
    icon: BatteryCharging,
    image: '/images/blog/burnout-depresion.webp'
  },
  {
    slug: 'como-mejorar-la-autoestima-sin-frases-hechas',
    title: 'Cómo mejorar la autoestima sin repetirte frases que no te crees: el enfoque de autocompasión',
    excerpt: 'El peligro de las afirmaciones frente al espejo que el cerebro rechaza, los 3 pilares de la autocompasión (Neff) y la acumulación de autoeficacia real.',
    readTime: '6 min de lectura',
    category: 'Autoestima Real',
    filterGroup: 'ansiedad',
    date: 'Actualizado 2026',
    author: 'Lic. Ernesto Mejía (JVPP 9314)',
    icon: Sparkles,
    image: '/images/blog/burnout-depresion.webp'
  },
  {
    slug: 'como-elegir-un-psicologo-en-el-salvador',
    title: 'Cómo elegir un buen psicólogo en El Salvador: colegiatura JVPP, enfoques científicos y qué preguntar',
    excerpt: 'Cómo verificar el registro profesional ante el Consejo Superior de Salud Pública (CSSP), evitar el intrusismo de coaches y evaluar la afinidad terapéutica.',
    readTime: '6 min de lectura',
    category: 'Orientación Legal & Clínica',
    filterGroup: 'ayuda',
    date: 'Actualizado 2026',
    author: 'Mtra. Iris Alarcón (JVPP 6380)',
    icon: Award,
    image: '/images/blog/primera-sesion.webp'
  },
  {
    slug: 'psicologo-o-psiquiatra-diferencias',
    title: 'Psicólogo o Psiquiatra: diferencias clave, a quién consultar primero y cómo se complementan',
    excerpt: 'Cuándo la psicoterapia es el tratamiento de primera línea y cuándo es necesaria la evaluación médica psicofarmacológica coordinada sin tabúes.',
    readTime: '6 min de lectura',
    category: 'Orientación Clínica',
    filterGroup: 'ayuda',
    date: 'Actualizado 2026',
    author: 'Equipo Clínico Centro Amaré',
    icon: Stethoscope,
    image: '/images/blog/primera-sesion.webp'
  },
  {
    slug: 'cuanto-cuesta-una-terapia-de-pareja-en-el-salvador',
    title: 'Cuánto cuesta una terapia de pareja en El Salvador (Precios y guía 2026)',
    excerpt: 'Comparativa transparente de honorarios entre clínicas privadas en San Salvador, plataformas del extranjero y centros online. Cómo funciona el plan mensual.',
    readTime: '5 min de lectura',
    category: 'Honorarios & Precios',
    filterGroup: 'ayuda',
    date: 'Actualizado 2026',
    author: 'Mtra. Iris Alarcón (JVPP 6380)',
    icon: DollarSign,
    image: '/images/blog/cuando-terapia.webp'
  },
  {
    slug: 'duelo-migratorio-que-es-como-manejarlo',
    title: 'Duelo migratorio: qué es, sus fases y cómo manejarlo en el extranjero',
    excerpt: 'Pérdidas acumuladas, culpa por irse y la paradoja de no encajar ni allá ni acá. Estrategias psicológicas clínicas para la diáspora salvadoreña.',
    readTime: '6 min de lectura',
    category: 'Duelo & Diáspora',
    filterGroup: 'diaspora',
    date: 'Actualizado 2026',
    author: 'Equipo Clínico Centro Amaré',
    icon: Compass,
    image: '/images/blog/duelo-migratorio.webp'
  },
  {
    slug: 'como-afecta-emigrar-a-la-relacion-de-pareja',
    title: 'Cómo afecta emigrar a la relación de pareja: Guía para salvadoreños en EE. UU. y Canadá',
    excerpt: 'El choque cultural, el ritmo laboral extenuante y la soledad en el extranjero ponen a prueba el vínculo amoroso. Claves clínicas para sanar la desconexión afectiva.',
    readTime: '6 min de lectura',
    category: 'Pareja y Migración',
    filterGroup: 'diaspora',
    date: 'Actualizado 2026',
    author: 'Mtra. Iris Alarcón (JVPP 6380)',
    icon: Compass,
    image: '/images/blog/emigrar-pareja.webp'
  },
  {
    slug: 'como-poner-limites-a-tu-familia-desde-la-distancia',
    title: 'Cómo poner límites a tu familia desde la distancia sin sentir culpa',
    excerpt: 'Remesas, exigencias familiares y la culpa migratoria que agota a los salvadoreños en el exterior. Pautas psicológicas (TCC) para cuidar tus límites sin romper los lazos.',
    readTime: '6 min de lectura',
    category: 'Familia & Límites',
    filterGroup: 'diaspora',
    date: 'Actualizado 2026',
    author: 'Mtra. Iris Alarcón (JVPP 6380)',
    icon: HeartHandshake,
    image: '/images/blog/duelo-migratorio.webp'
  }
];

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
              {filteredPosts.map((post, idx) => {
                const IconComp = post.icon;
                return (
                  <article 
                    key={idx}
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

                      <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '12px', color: 'var(--color-ink-muted)' }}>
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
