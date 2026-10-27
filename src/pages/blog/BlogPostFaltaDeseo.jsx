import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Sparkles, HeartHandshake, CheckCircle2, MessageCircle } from 'lucide-react';

export default function BlogPostFaltaDeseo() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí el artículo sobre falta de deseo e intimidad en Centro Amaré y me gustaría agendar la sesión de 30 minutos sin costo.");

  return (
    <div className="app-wrapper">
      <Navbar />

      <main id="main-content">
        {/* Header Article */}
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <a 
              href="/blog" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', color: 'var(--color-clay)', fontWeight: 600, textDecoration: 'none', marginBottom: '20px' }}
            >
              <ArrowLeft size={16} /> Volver al Blog de Psicología
            </a>

            <div className="pill-badge pill-badge-clay" style={{ marginBottom: '16px' }}>
              <span>Sexología Clínica & Deseo</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Falta de deseo sexual en la pareja: Por qué se apaga la intimidad y cómo reactivarla
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Equipo Clínico Centro Amaré</strong> · Sexología Clínica y Terapia de Pareja</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> 6 min de lectura</span>
              <span>•</span>
              <span>Actualizado 2026</span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="section" style={{ paddingTop: '0', paddingBottom: '72px' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            
            <div className="article-body" style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--color-ink-primary)' }}>
              
              {/* Direct Clinical Answer for AI / AEO */}
              <div style={{ background: 'var(--color-surface)', padding: '20px 24px', borderRadius: '16px', borderLeft: '4px solid var(--color-plum-700)', marginBottom: '28px' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: 'var(--color-plum-900)' }}>
                  Respuesta clínica en breve
                </p>
                <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-ink-primary)' }}>
                  La falta de deseo en parejas estables no significa falta de amor: responde comúnmente al paso del deseo espontáneo al deseo receptivo, a la rutina y a la sobrecarga mental. Para reactivarlo, la sexología clínica recomienda eliminar la presión del coito obligatorio, priorizar el contacto afectivo no sexual, negociar espacios de intimidad sin prisa y resolver tensiones no expresadas.
                </p>
              </div>

              <p style={{ fontSize: '19px', color: 'var(--color-plum-900)', fontWeight: 500, lineHeight: 1.6, marginBottom: '24px' }}>
                Una de las consultas más frecuentes en sexología clínica es la discrepancia de deseo: uno de los miembros de la pareja desea mayor frecuencia de intimidad, mientras el otro siente que las ganas han desaparecido o se han convertido en una obligación pesada. Con el tiempo, ambos evitan el contacto físico para no provocar falsas expectativas o dolorosas frustraciones.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. El mito del &ldquo;deseo espontáneo&rdquo; en relaciones de largo plazo
              </h2>
              <p>
                La cultura popular nos vende que el deseo debería aparecer como un relámpago espontáneo, tal como en los primeros meses de enamoramiento. Sin embargo, la investigación contemporánea (particularmente el modelo de respuesta sexual de la Dra. Rosemary Basson) demuestra que en relaciones estables de más de dos o tres años, el deseo suele ser <strong>receptivo</strong>, no espontáneo.
              </p>
              <p>
                Esto significa que las ganas no surgen de la nada mientras lavas los platos o revisas correos de trabajo; surgen <em>después</em> de encontrarse en un clima de seguridad afectiva, relajación física, caricias sin exigencia de coito y estimulación adecuada. Esperar &ldquo;sentir ganas&rdquo; antes de crear el contexto adecuado hace que los meses pasen sin ningún acercamiento.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;El deseo sexual necesita dos cosas paradójicas para florecer: seguridad afectiva para confiar, y un espacio de autonomía y misterio para desear. Cuando una pareja se convierte en compañeros de logística doméstica, el erotismo suele ser la primera víctima.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. Los tres ladrones invisibles de la intimidad
              </h2>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>La sobrecarga mental y el cansancio acumulado:</strong> En parejas salvadoreñas (tanto en el país como en la diáspora), las exigencias laborales y el cuidado familiar agotan las reservas de energía. El cuerpo prioriza el descanso antes que la excitación erótica.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>El resentimiento acumulado de discusiones no resueltas:</strong> Es biológicamente muy difícil desear a alguien con quien sientes frialdad, injusticia en el reparto de tareas o falta de validación emocional durante el día. El juego previo no empieza en la cama; empieza en el trato cotidiano.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>La presión y la ansiedad de rendimiento:</strong> Cuando un abrazo se interpreta como una demanda inminente de sexo, la persona con menor deseo comienza a evitar incluso los gestos más básicos de cariño (tomarse de la mano, besos espontáneos), enfriando por completo el vínculo.
                </li>
              </ul>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                3. Pautas desde la Sexología Clínica para reencontrarse
              </h2>
              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Desvincular el afecto del coito (Focalización Sensorial):</strong> Practicar caricias, masajes y abrazos con el acuerdo explícito de que no habrá sexo con penetración. Esto elimina la ansiedad de rendimiento y devuelve el placer al contacto piel con piel.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Hablar de erotismo sin reproches:</strong> Expresar qué cosas te encienden y qué cosas te apagan sin culpar a la otra persona, transformando el problema de &ldquo;tú no quieres&rdquo; a &ldquo;cómo podemos ambos cultivar el contexto para disfrutar juntos&rdquo;.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Agendar el tiempo de pareja:</strong> Aunque suene poco romántico a primera vista, las parejas saludables no dejan su intimidad al azar de lo que sobre tras el cansancio del día; protegen espacios sagrados de conexión compartida.
                </li>
              </ol>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Sienten que la complicidad íntima se ha enfriado?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré combinamos la psicoterapia de pareja basada en evidencia con la sexología clínica, abordando la intimidad con naturalidad, calidez y rigor científico.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}
                  >
                    <MessageCircle size={18} />
                    <span>Consultar con el equipo (30 min sin costo)</span>
                  </a>
                  <a
                    href="/test-de-pareja"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Hacer autoevaluación de pareja</span>
                  </a>
                </div>
              </div>

              {/* Artículos Relacionados */}
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)' }}>
                <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--color-plum-900)', marginBottom: '18px' }}>
                  Artículos relacionados del blog
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <a
                    href="/blog/se-puede-perdonar-una-infidelidad-guia-pareja"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Infidelidad & Confianza</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      ¿Se puede perdonar una infidelidad? Fases clínicas para sanar
                    </h4>
                  </a>
                  <a
                    href="/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Precios & Modalidades</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      ¿Cuánto cuesta una terapia de pareja en El Salvador?
                    </h4>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
