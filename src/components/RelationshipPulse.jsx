import React, { useState } from 'react';
import { 
  RotateCcw, 
  HeartCrack, 
  Globe, 
  Flame, 
  Sprout, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2 
} from 'lucide-react';

const MOODS = [
  {
    id: 'loop',
    title: 'Discusiones en bucle',
    icon: RotateCcw,
    summary: 'Peleamos por lo mismo y terminamos distanciados',
    method: 'Terapia Integral de Pareja (IBCT)',
    tagColor: '#BA5E45',
    diagnostic: 'Cuando las discusiones se repiten con frecuencia, el problema real no suele ser el motivo puntual, sino un ciclo de desconexión emocional defensiva.',
    solution: 'Con el protocolo IBCT identificamos los detonantes exactos de cada uno, frenamos la reactividad automática y transformamos los reproches en acuerdos constructivos que sí se cumplen en casa.',
    whatsappQuery: 'Hola, nos sentimos identificados con las discusiones en bucle y quisiéramos coordinar la primera conversación de 30 min sin costo.'
  },
  {
    id: 'trust',
    title: 'Herida por infidelidad',
    icon: HeartCrack,
    summary: 'Dudas sobre si perdonar o cómo volver a confiar',
    method: 'Protocolo de Reparación del Vínculo',
    tagColor: '#C2654D',
    diagnostic: 'Una ruptura de confianza genera hipervigilancia, dolor agudo y confusión sobre si es posible salvar la relación o si vale la pena intentarlo.',
    solution: 'En consulta neutral y confidencial, no venimos a juzgar ni a culpar. Brindamos un espacio seguro para procesar la herida, responder las preguntas necesarias sin destruir y evaluar con madurez el futuro de ambos.',
    whatsappQuery: 'Hola, estamos atravesando una crisis de confianza/infidelidad y nos gustaría agendar una primera sesión sin costo.'
  },
  {
    id: 'distance',
    title: 'Amor a distancia / Diáspora',
    icon: Globe,
    summary: 'Uno está en EE.UU./Canadá o ambos emigraron',
    method: 'Enfoque Transnacional e Identidad',
    tagColor: '#3D5A80',
    diagnostic: 'La distancia geográfica o el estrés de adaptarse a otro país multiplica las dudas, la soledad y la falta de acuerdos claros a futuro.',
    solution: 'Facilitamos videollamadas privadas simultáneas adaptadas a los husos horarios de cada uno (EST, CST, PST o Europa), entendiendo su código cultural salvadoreño sin necesidad de traducir emociones.',
    whatsappQuery: 'Hola, somos una pareja que vive en países/ciudades distintas y quisiéramos consultar sobre la terapia online simultánea.'
  },
  {
    id: 'intimacy',
    title: 'Frialdad y rutina íntima',
    icon: Flame,
    summary: 'Poco afecto o nos sentimos como compañeros de casa',
    method: 'Sexología Clínica y TCC Afectiva',
    tagColor: '#8D5B4C',
    diagnostic: 'El deseo no desaparece solo; con frecuencia queda sepultado bajo el cansancio laboral, la rutina familiar o conversaciones pendientes no resueltas.',
    solution: 'Desde la sexología médica y basada en evidencia, abordamos los bloqueos con naturalidad y respeto, creando pautas prácticas y graduales para reactivar la complicidad y la intimidad mutua.',
    whatsappQuery: 'Hola, nos gustaría consultar sobre el abordaje de sexología clínica e intimidad de pareja en Centro Amaré.'
  },
  {
    id: 'preventive',
    title: 'Prevenir y consolidar',
    icon: Sprout,
    summary: 'Estamos bien y queremos alinear el futuro juntos',
    method: 'Fortalecimiento Vincular Preventivo',
    tagColor: '#2E7D32',
    diagnostic: 'La terapia no es solo para salvar un barco que se hunde; es una de las decisiones más lúcidas antes de convivir, casarse o tener hijos.',
    solution: 'Revisamos expectativas de convivencia, límites con familias de origen, acuerdos de finanzas compartidas y mapas de vida para blindar la relación a largo plazo.',
    whatsappQuery: 'Hola, queremos iniciar un proceso preventivo para fortalecer nuestra relación antes de dar un paso importante.'
  }
];

export default function RelationshipPulse() {
  const [selectedId, setSelectedId] = useState('loop');

  const getWhatsAppUrl = (msg) => {
    return `https://wa.me/50373184781?text=${encodeURIComponent(msg)}`;
  };

  const handleSelectMood = (moodId) => {
    setSelectedId(moodId);
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setTimeout(() => {
        const diagnosticEl = document.getElementById('relationship-diagnostic-card');
        if (diagnosticEl) {
          diagnosticEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 60);
    }
  };

  return (
    <section className="section" style={{ paddingTop: '16px', paddingBottom: '60px' }}>
      <div className="container" style={{ maxWidth: '1180px' }}>
        
        {/* Main interactive wrapper card */}
        <div 
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF7F2 100%)',
            borderRadius: '28px',
            border: '1px solid var(--border-subtle)',
            padding: 'clamp(28px, 4vw, 44px) clamp(20px, 3.5vw, 40px)',
            boxShadow: '0 14px 40px rgba(34, 40, 74, 0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle background glow */}
          <div 
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(186, 94, 69, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 32px' }}>
            <div 
              className="badge-pill" 
              style={{ 
                marginBottom: '14px', 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(186, 94, 69, 0.08)',
                color: 'var(--color-clay)',
                border: '1px solid rgba(186, 94, 69, 0.2)',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--color-clay)' }} />
              <span>Autoevaluación Clínica en 1 Clic</span>
            </div>

            <h2 
              className="font-serif" 
              style={{ 
                fontSize: 'clamp(26px, 3.4vw, 38px)', 
                lineHeight: 1.2, 
                color: 'var(--color-plum-900)',
                margin: '0 0 12px 0'
              }}
            >
              ¿Qué momento sienten más desafiante en su relación hoy?
            </h2>

            <p style={{ fontSize: '15.5px', color: 'var(--color-ink-secondary)', margin: 0, lineHeight: 1.55 }}>
              Sin registros ni correo. Selecciona una situación para conocer el abordaje terapéutico recomendado por el equipo:
            </p>
          </div>

          {/* Interactive Mood Selector Buttons (Grid en Desktop, Carrusel Horizontal en Móvil) */}
          <div 
            role="tablist"
            aria-label="Selecciona la situación de tu pareja"
            className="pulse-mood-grid"
          >
            {MOODS.map((mood) => {
              const isSelected = mood.id === selectedId;
              const MoodIcon = mood.icon;
              return (
                <button
                  key={mood.id}
                  type="button"
                  role="tab"
                  id={`tab-${mood.id}`}
                  aria-controls={`diagnostic-panel-${mood.id}`}
                  aria-selected={isSelected}
                  onClick={() => handleSelectMood(mood.id)}
                  className="pulse-mood-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    padding: '16px 18px',
                    borderRadius: '18px',
                    border: isSelected 
                      ? '2px solid var(--color-clay)' 
                      : '1.5px solid var(--border-subtle)',
                    background: isSelected 
                      ? '#FFFFFF' 
                      : 'rgba(255, 255, 255, 0.65)',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isSelected ? 'translateY(-3px)' : 'none',
                    boxShadow: isSelected 
                      ? '0 10px 25px rgba(186, 94, 69, 0.16)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.02)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
                    <div 
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: isSelected ? 'var(--color-clay)' : 'var(--color-clay-subtle)',
                        color: isSelected ? '#FFFFFF' : 'var(--color-clay)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <MoodIcon size={18} />
                    </div>
                    {isSelected && (
                      <span 
                        style={{ 
                          width: '7px', 
                          height: '7px', 
                          borderRadius: '50%', 
                          background: 'var(--color-clay)' 
                        }} 
                      />
                    )}
                  </div>
                  <strong style={{ fontSize: '15px', color: 'var(--color-plum-900)', marginBottom: '4px', lineHeight: 1.25 }}>
                    {mood.title}
                  </strong>
                  <span style={{ fontSize: '12px', color: 'var(--color-ink-muted)', lineHeight: 1.4 }}>
                    {mood.summary}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Diagnostic Guidance Cards (Todos renderizados en el DOM para Indexación SEO y Motores de IA) */}
          <div id="relationship-diagnostic-card">
            {MOODS.map((mood) => {
              const isActive = mood.id === selectedId;
              return (
                <div 
                  key={mood.id}
                  id={`diagnostic-panel-${mood.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${mood.id}`}
                  aria-hidden={!isActive}
                  className={isActive ? "animate-slide-up" : ""}
                  style={{
                    display: isActive ? 'grid' : 'none',
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: 'clamp(22px, 3vw, 32px)',
                    border: '1.5px solid rgba(186, 94, 69, 0.25)',
                    boxShadow: '0 12px 30px rgba(34, 40, 74, 0.08)',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px',
                    alignItems: 'center'
                  }}
                >
                  {/* Left: Clinical Diagnosis & Guidance */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      <span 
                        style={{
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          background: mood.tagColor,
                          padding: '4px 12px',
                          borderRadius: 'var(--r-pill)',
                          letterSpacing: '0.02em'
                        }}
                      >
                        {mood.method}
                      </span>
                      <span style={{ fontSize: '12.5px', color: 'var(--color-ink-muted)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <ShieldCheck size={14} style={{ color: '#27AE60' }} />
                        Protocolo basado en evidencia (JVPP)
                      </span>
                    </div>

                    <h3 
                      className="font-serif" 
                      style={{ 
                        fontSize: 'clamp(20px, 2.4vw, 24px)', 
                        color: 'var(--color-plum-900)', 
                        margin: '0 0 10px 0',
                        lineHeight: 1.3
                      }}
                    >
                      {mood.title}: Lo que la ciencia clínica recomienda
                    </h3>

                    <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: '0 0 10px 0' }}>
                      <strong>Comprender la raíz:</strong> {mood.diagnostic}
                    </p>

                    <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                      <strong>Cómo lo abordamos en Centro Amaré:</strong> {mood.solution}
                    </p>
                  </div>

                  {/* Right: Direct Action Box */}
                  <div 
                    style={{
                      background: 'var(--color-canvas)',
                      borderRadius: '18px',
                      padding: '24px',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: 'var(--color-plum-900)' }}>
                      <HeartHandshake size={18} style={{ color: 'var(--color-clay)' }} />
                      <span>Próximo paso recomendado:</span>
                    </div>

                    <a
                      href="/test-de-pareja"
                      className="btn-appointment-pill"
                      style={{
                        backgroundColor: 'var(--color-clay)',
                        color: '#FFFFFF',
                        padding: '13px 20px',
                        fontSize: '14.5px',
                        justifyContent: 'center',
                        boxShadow: '0 6px 20px rgba(183, 89, 64, 0.3)',
                        textAlign: 'center'
                      }}
                    >
                      <span>Evaluar nuestro caso en el Test (2 min)</span>
                      <ArrowRight size={16} />
                    </a>

                    <a
                      href={getWhatsAppUrl(mood.whatsappQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-appointment-pill"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1.5px solid var(--color-plum-900)',
                        color: 'var(--color-plum-900)',
                        boxShadow: 'none',
                        padding: '12px 18px',
                        fontSize: '14px',
                        justifyContent: 'center',
                        textAlign: 'center'
                      }}
                    >
                      <span>Consultar por WhatsApp (30 min sin costo)</span>
                    </a>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-ink-muted)', marginTop: '2px' }}>
                      <CheckCircle2 size={14} style={{ color: '#27AE60' }} />
                      <span>1ª conversación sin costo con el equipo clínico</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
