import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { ArrowLeft, Clock, Heart, ShieldAlert, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

export default function BlogPostDependenciaEmocional() {
  const whatsappUrl = "/chat?text=" + encodeURIComponent("Hola, leí el artículo sobre dependencia emocional en Centro Amaré y quisiera agendar una sesión inicial de orientación.");

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
              <span>Vínculos & Apego Afectivo</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Dependencia emocional en la pareja: cómo reconocerla, entender tu apego y sanar sin perderte
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Lic. Ernesto Mejía</strong> · Psicólogo Clínico Centro Amaré (JVPP 4102)</span>
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
              
              <p style={{ fontSize: '19px', color: 'var(--color-plum-900)', fontWeight: 500, lineHeight: 1.6, marginBottom: '24px' }}>
                Si el tono de un mensaje de WhatsApp de tu pareja puede arruinarte el día entero o si su silencio de un par de horas te desencadena una taquicardia inmediata y la certeza de que &ldquo;ya no te quiere&rdquo;, sabes exactamente lo que se siente vivir en dependencia emocional.
              </p>

              <p>
                No es debilidad de carácter ni falta de amor propio como dicen las frases simplistas de internet. Clínicamente, la dependencia emocional suele ser la manifestación adulta de un <strong>apego ansioso no resuelto</strong>: un sistema de alerta cerebral que aprendió en la infancia o en relaciones pasadas que el afecto es inestable y que, si no vigilas constantemente al otro, te quedarás solo.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  &ldquo;Amar a alguien con profundidad no es depender. Depender es creer que sin esa persona tu identidad, tu valor y tu derecho a existir se desmoronan por completo.&rdquo;
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                Amor maduro vs. Dependencia emocional: La diferencia clave
              </h2>
              <p>
                En una relación sana existe la <strong>interdependencia</strong>: dos personas completas deciden caminar juntas, cuidarse y disfrutar mutuamente, manteniendo cada una sus propios amigos, hobbies, valores y proyectos. En la dependencia emocional ocurre una simbiosis dolorosa:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '24px 0' }}>
                <div style={{ background: '#FFFFFF', padding: '22px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-plum-900)', marginBottom: '8px', fontWeight: 700 }}>Vínculo Saludable (Interdependencia)</h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '14.5px', color: 'var(--color-ink-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>Deseas estar con tu pareja, pero disfrutas tu soledad sin angustia.</li>
                    <li>Puedes decir &ldquo;no estoy de acuerdo&rdquo; sin terror a que te abandone.</li>
                    <li>Tus metas personales siguen vivas e independientes del otro.</li>
                    <li>La calma interna depende de tu autorregulación, no del humor del otro.</li>
                  </ul>
                </div>

                <div style={{ background: 'var(--color-surface)', padding: '22px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-clay)', marginBottom: '8px', fontWeight: 700 }}>Dependencia Afectiva (Simbiosis)</h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '14.5px', color: 'var(--color-ink-primary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>Si el otro está distante o enojado, sientes una catástrofe corporal inminente.</li>
                    <li>Cedes en límites esenciales con tal de evitar el rechazo o el abandono.</li>
                    <li>Has abandonado tus amistades, pasatiempos y vida personal por adaptarte al otro.</li>
                    <li>Exiges confirmación constante: &ldquo;¿me sigues queriendo? ¿estás seguro?&rdquo;.</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                4 pasos clínicos para recuperar tu centro sin destruir tu relación
              </h2>

              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '16px' }}>
                  <strong>Aprender a surfear la ola de la ansiedad de separación:</strong> Cuando tu pareja no conteste o pida espacio, resiste el impulso de mandar 10 mensajes seguidos. Siéntate, respira sintiendo tus pies en el suelo y observa el miedo en tu pecho. El pico de angustia tarda entre 15 y 20 minutos en descender sin que intervengas.
                </li>
                <li style={{ marginBottom: '16px' }}>
                  <strong>Reactivar tu territorio personal no negociable:</strong> Retoma una actividad que sea exclusivamente tuya: una clase de ejercicio, una salida con amigos sin tu pareja o un proyecto que te apasione. El antídoto para la dependencia no es la soledad hostil, es la riqueza de tu propio mundo.
                </li>
                <li style={{ marginBottom: '16px' }}>
                  <strong>Cuestionar el pensamiento de catástrofe:</strong> Sustituye el <em>&ldquo;si me deja me muero&rdquo;</em> por una verdad adulta: <em>&ldquo;si esta relación terminara, me dolería profundamente, lloraría y pasaría un duelo, pero tengo los recursos emocionales y el valor para reconstruir mi vida&rdquo;</em>.
                </li>
                <li style={{ marginBottom: '16px' }}>
                  <strong>Trabajar la historia de apego en psicoterapia:</strong> La Terapia Cognitivo-Conductual y los modelos de apego permiten reparar las heridas de rechazo de la infancia para que dejes de pedirle a tu pareja adulta que sane el vacío de tu pasado.
                </li>
              </ol>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Sientes que te pierdes a ti mismo/a en tus relaciones?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré acompañamos a personas y parejas a construir vínculos seguros, con límites sanos y sin miedo constante al abandono. Conversa con nuestro equipo clínico.
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
                    <span>Primera sesión diagnóstica sin costo</span>
                  </a>
                  <a
                    href="/terapia-individual"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Ver terapia individual de apego</span>
                  </a>
                </div>
              </div>

              {/* Artículos Relacionados */}
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)' }}>
                <h3 className="font-serif" style={{ fontSize: '20px', color: 'var(--color-plum-900)', marginBottom: '18px' }}>
                  Artículos relacionados recomendados
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <a
                    href="/blog/como-poner-limites-a-tu-familia-desde-la-distancia"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Límites & Culpa</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo poner límites a tu familia sin sentir culpa
                    </h4>
                  </a>
                  <a
                    href="/blog/como-mejorar-la-autoestima-sin-frases-hechas"
                    style={{ textDecoration: 'none', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-clay)', textTransform: 'uppercase' }}>Autoestima Real</span>
                    <h4 style={{ fontSize: '16px', color: 'var(--color-plum-900)', margin: '8px 0 0', fontWeight: 700, lineHeight: 1.4 }}>
                      Cómo mejorar la autoestima sin repetirte frases que no te crees
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
