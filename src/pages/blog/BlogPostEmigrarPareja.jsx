import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { HeroButton } from '../../components/ui/hero-button';
import { ArrowLeft, Clock, ShieldCheck, HeartHandshake, CheckCircle2, MessageCircle } from 'lucide-react';

export default function BlogPostEmigrarPareja() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí el artículo sobre migración y pareja en Centro Amaré y me gustaría agendar la sesión gratuita de 30 minutos.");

  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
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
              <span>Diáspora Salvadoreña & Pareja</span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.22, color: 'var(--color-plum-900)', marginBottom: '18px' }}>
              Cómo afecta emigrar a la relación de pareja: Guía para salvadoreños en EE. UU. y Canadá
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--color-ink-muted)', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span>Por <strong>Lic. Iris Alarcón</strong> (Registro JVPP El Salvador)</span>
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
                Emigrar desde El Salvador hacia Estados Unidos, Canadá o Europa suele presentarse como una historia de superación y éxito económico. Sin embargo, detrás de la estabilidad laboral existe un costo silencioso que pocas familias se atreven a nombrar: el profundo desgaste que la adaptación cultural y el ritmo de vida extranjero provocan en la relación de pareja.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                1. El shock de los roles: Cuando la rutina deja sin tiempo al afecto
              </h2>
              <p>
                En El Salvador, la vida suele estar sostenida por una red extensa: abuelas, tíos, vecinos y amistades de toda la vida que ayudan con el cuidado de los hijos o amortiguan el estrés cotidiano. Al mudarse a ciudades como Montreal, Los Ángeles, Houston, Washington o Toronto, esa red desaparece de golpe.
              </p>
              <p>
                La pareja pasa a ser el único soporte mutuo. Las jornadas de doble turno, las distancias kilométricas y los horarios cruzados provocan que dos personas que se aman terminen conviviendo como socios de una empresa logística, no como amantes ni compañeros íntimos.
              </p>

              <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '18px', borderLeft: '4px solid var(--color-clay)', margin: '28px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-plum-900)', fontSize: '16px' }}>
                  "Muchos pacientes salvadoreños me dicen en consulta: 'Nos levantamos, trabajamos, pagamos cuentas y dormimos. Ya ni nos miramos a los ojos'. Ese es el primer síntoma de desconexión por sobrecarga migratoria."
                </p>
              </div>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                2. El duelo migratorio asimétrico: Uno avanza, el otro añora
              </h2>
              <p>
                Rara vez los dos miembros de la pareja asimilan la migración a la misma velocidad. Es muy frecuente que uno de ellos se adapte con mayor soltura al idioma y al entorno profesional, mientras el otro experimenta un duelo migratorio intenso, aislamiento social y sensación de desarraigo.
              </p>
              <p>
                Esta asimetría genera resentimientos: quien se siente solo reprocha frialdad o abandono, y quien trabaja extenuado siente que sus sacrificios no son valorados. Sin intervención oportuna, estas quejas se transforman en discusiones circulares destructivas.
              </p>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                3. Por qué la terapia tradicional con psicólogos anglosajones o francófonos falla
              </h2>
              <p>
                Cuando una pareja salvadoreña en el exterior decide buscar ayuda, frecuentemente recurre a profesionales locales del país de destino. Sin embargo, surgen dos grandes barreras:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>La barrera emocional del idioma:</strong> Una cosa es trabajar en inglés o francés, y otra muy distinta es conectar con tus heridas primarias, el enojo o la tristeza profunda en una lengua que no es tu idioma materno.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>La incomprensión de la cultura salvadoreña:</strong> Un terapeuta sin contexto latinoamericano rara vez comprende la presión de las remesas, el compromiso con los padres ancianos en El Salvador o la dificultad de poner límites a la familia extendida sin sentir culpa.
                </li>
              </ul>

              <h2 className="font-serif" style={{ fontSize: '26px', color: 'var(--color-plum-900)', marginTop: '36px', marginBottom: '16px' }}>
                4. Claves clínicas desde la Terapia Integral de Pareja (IBCT)
              </h2>
              <p>
                En <a href="/" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>Centro Amaré</a> abordamos estas crisis mediante la <strong>Terapia Integral de Pareja (IBCT)</strong>, el enfoque con mayor evidencia científica internacional para parejas con desgaste acumulado:
              </p>
              <ol style={{ paddingLeft: '24px', marginBottom: '28px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Desactivar el bucle de ataque-defensa:</strong> Aprender a nombrar la vulnerabilidad detrás del reclamo (miedo a la soledad, cansancio extremo) en lugar de lanzar juicios destructivos.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Reconstruir la intimidad y la complicidad erótica:</strong> Proteger micro-momentos semanales no negociables donde el trabajo y las remesas queden fuera de la conversación.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Establecer un proyecto común como equipo:</strong> Definir qué significa esta etapa en el extranjero para ambos y hasta dónde están dispuestos a llegar juntos.
                </li>
              </ol>

              {/* Callout Box */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', margin: '40px 0', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', color: 'var(--color-plum-900)', marginBottom: '12px' }}>
                  ¿Están viviendo este desgaste en su relación?
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  En Centro Amaré ofrecemos terapia de pareja online adaptada a tu huso horario en EE. UU., Canadá o Europa, con una profesional salvadoreña acreditada por la JVPP.
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
                    <span>Agendar 1ª sesión de 30 min sin costo</span>
                  </a>
                  <a
                    href="/test-de-pareja"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '12px 24px' }}
                  >
                    <span>Hacer test de pareja online (2 min)</span>
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
