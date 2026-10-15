import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Globe, 
  ShieldCheck, 
  MessageSquare,
  Clock,
  RotateCcw
} from 'lucide-react';

export default function CoupleMatchingQuiz({ onGoHome }) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Intro, 1..5: Questions, 6: Result
  const [answers, setAnswers] = useState({
    situation: '',
    reason: '',
    duration: '',
    durationShort: '',
    location: '',
    locationShort: '',
    goal: '',
    goalShort: '',
  });

  const questions = [
    {
      id: 'situation',
      title: '¿Cuál es la situación actual para iniciar el proceso?',
      subtitle: 'Esto nos permite adaptar el encuadre clínico inicial según la disposición de ambos.',
      options: [
        { label: 'Ambos queremos participar en la terapia de pareja', sub: 'Queremos trabajar juntos en la relación', short: 'Ambos queremos participar' },
        { label: 'Solo yo tengo iniciativa por ahora (mi pareja tiene dudas)', sub: 'Podemos comenzar con enfoque individual vincular', short: 'Iniciativa individual (pareja con dudas)' },
        { label: 'Estamos en una crisis severa y dudamos si continuar juntos', sub: 'Buscamos claridad para decidir con madurez y respeto', short: 'Crisis severa / evaluar continuidad' },
        { label: 'Queremos fortalecer la relación de manera preventiva', sub: 'Antes de convivir, casarnos o asumir una nueva etapa', short: 'Fortalecimiento preventivo del vínculo' },
      ],
    },
    {
      id: 'reason',
      title: '¿Cuál es el principal motivo que sienten que deben resolver?',
      subtitle: 'Selecciona la dificultad que genera mayor desgaste en el día a día.',
      options: [
        { label: 'Problemas de comunicación y discusiones en bucle', sub: 'Hablamos de lo mismo y nunca llegamos a acuerdos', short: 'Comunicación y discusiones' },
        { label: 'Pérdida de intimidad, afecto o deseo sexual', sub: 'Nos sentimos como compañeros de casa, no como pareja', short: 'Intimidad y deseo sexual' },
        { label: 'Crisis tras una infidelidad o pérdida de confianza', sub: 'Necesitamos reparar la herida y saber si es posible volver a confiar', short: 'Infidelidad / pérdida de confianza' },
        { label: 'Conflictos sobre roles, tareas, finanzas o crianza', sub: 'El desequilibrio en las cargas genera resentimiento diario', short: 'Roles, finanzas o crianza' },
        { label: 'Celos, hipervigilancia o dinámicas de control', sub: 'La angustia y la sospecha desgastan la tranquilidad mutua', short: 'Celos y desconfianza' },
        { label: 'Desgaste por la distancia o el estrés migratorio', sub: 'La lejanía o la adaptación han enfriado el vínculo', short: 'Distancia y estrés migratorio' },
      ],
    },
    {
      id: 'duration',
      title: '¿Cuánto tiempo llevan sintiendo este desgaste?',
      subtitle: 'Conocer la duración ayuda a dimensionar la intervención terapéutica.',
      options: [
        { label: 'Menos de 6 meses', sub: 'Es una crisis reciente o un problema específico', short: 'Menos de 6 meses' },
        { label: 'Entre 6 meses y 2 años', sub: 'Los patrones se han vuelto repetitivos y crónicos', short: 'De 6 meses a 2 años' },
        { label: 'Más de 2 años', sub: 'Hemos intentado todo y necesitamos orientación profesional', short: 'Más de 2 años' },
      ],
    },
    {
      id: 'location',
      title: '¿Dónde se encuentran ubicados actualmente?',
      subtitle: 'Ofrecemos cobertura online flexible adaptada a diferentes husos horarios.',
      options: [
        { label: 'Ambos vivimos en El Salvador', sub: 'Sesiones online cómodas sin traslados ni tráfico', short: 'En El Salvador' },
        { label: 'Ambos vivimos en el extranjero (EE.UU., Canadá, Europa)', sub: 'Mismo código cultural salvadoreño sin tarifas de $200/h', short: 'En el extranjero (EE.UU. / Canadá / Europa)' },
        { label: 'Pareja a distancia / transnacional', sub: 'Uno en El Salvador y el otro en el exterior conectándose a la vez', short: 'Pareja a distancia / transnacional' },
      ],
    },
    {
      id: 'goal',
      title: '¿Cuál es su mayor prioridad con esta terapia?',
      subtitle: 'Tu objetivo será la guía central en la planificación de las sesiones.',
      options: [
        { label: 'Aprender a comunicarnos y resolver diferencias sin destruirnos', sub: 'Desactivar reproches y hablar con asertividad', short: 'Comunicarnos sin reproches' },
        { label: 'Recuperar la complicidad, el afecto y la vida íntima', sub: 'Volver a sentirnos un equipo cercano y amoroso', short: 'Recuperar complicidad e intimidad' },
        { label: 'Sanar el dolor del pasado y reconstruir la confianza', sub: 'Cerrar heridas y establecer acuerdos sólidos', short: 'Sanar heridas y reconstruir confianza' },
        { label: 'Tomar una decisión honesta y madura sobre nuestro futuro', sub: 'Decidir desde la tranquilidad y no desde el miedo', short: 'Decidir con madurez nuestro futuro' },
      ],
    },
  ];

  const handleSelectOption = (field, opt) => {
    setAnswers(prev => ({ 
      ...prev, 
      [field]: opt.label,
      [`${field}Short`]: opt.short || opt.label
    }));
    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const currentQ = questions[currentStep - 1];

  const isIndividualInitiative = 
    answers.situationShort === 'Iniciativa individual (pareja con dudas)' || 
    answers.situation.includes('Solo yo tengo iniciativa');

  const buildWhatsAppMessage = () => {
    const greeting = isIndividualInitiative
      ? 'Hola, completé el Test de Pareja en la web y me gustaría agendar la primera conversación de 30 min sin costo.'
      : 'Hola, acabamos de completar el Test de Pareja en la web y nos gustaría agendar la primera conversación de 30 min sin costo.';

    let msg = `${greeting}\n\n`;
    if (answers.situationShort || answers.situation) {
      msg += `• Situación: ${answers.situationShort || answers.situation}\n`;
    }
    if (answers.reasonShort || answers.reason) {
      msg += `• Motivo principal: ${answers.reasonShort || answers.reason}\n`;
    }
    if (answers.locationShort || answers.location) {
      msg += `• Ubicación: ${answers.locationShort || answers.location}\n`;
    }
    return encodeURIComponent(msg);
  };

  const whatsappMatchUrl = `https://wa.me/50373184781?text=${buildWhatsAppMessage()}`;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-canvas)',
        color: 'var(--color-plum-900)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── TOP NAVBAR MINIMALISTA ─────────────────────────── */}
      <header
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'rgba(245, 240, 232, 0.92)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          padding: '14px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onGoHome) onGoHome();
              else window.location.href = '/';
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: 'var(--color-plum-900)',
              fontWeight: 700,
              fontSize: '17px',
            }}
          >
            <img
              src="/favicon.png"
              alt="Centro Amaré"
              style={{ width: '32px', height: '32px', display: 'block' }}
            />
            <span>Centro Amaré</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-secondary)' }}>
              Evaluación de Pareja · Test Clínico
            </span>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (onGoHome) onGoHome();
                else window.location.href = '/';
              }}
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--color-clay)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>Volver a la web</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── CONTENIDO PRINCIPAL ────────────────────────────── */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px 80px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '680px', margin: '0 auto' }}>

          {/* ══════════════ STEP 0: PANTALLA INICIAL ══════════════ */}
          {currentStep === 0 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(169, 90, 65, 0.1)',
                color: 'var(--color-clay)',
                padding: '6px 16px',
                borderRadius: 'var(--r-pill)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '20px'
              }}>
                <Heart size={14} />
                <span>Test Clínico de Pareja · 5 Preguntas Clave</span>
              </div>

              {/* Avatar de Iris en círculo suave */}
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                <img
                  src="/images/hero-therapist-480.webp"
                  alt="Psicología de Pareja"
                  width="92"
                  height="92"
                  style={{
                    width: '92px',
                    height: '92px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 8px 24px rgba(34, 40, 74, 0.14)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--r-pill)',
                    padding: '3px 12px',
                    boxShadow: 'var(--shadow-sm)',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Sparkles size={12} style={{ color: 'var(--color-clay)' }} />
                  <span style={{ fontSize: '11.5px', fontWeight: 600, color: 'var(--color-plum-900)' }}>
                    Especialista en Terapia de Pareja
                  </span>
                </div>
              </div>

              {/* Titular enfocado 100% en parejas */}
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(32px, 4.8vw, 48px)',
                  fontWeight: 600,
                  color: 'var(--color-plum-900)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  marginBottom: '18px',
                  marginTop: '16px',
                }}
              >
                Merecen una especialista que realmente entienda su historia de pareja
              </h1>

              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 18.5px)',
                  color: 'var(--color-ink-secondary)',
                  lineHeight: 1.6,
                  maxWidth: '560px',
                  margin: '0 auto 36px',
                }}
              >
                Una psicóloga con Máster en Pareja y Sexología que comprende su contexto cultural, el desgaste que atraviesan y la forma en la que quieren sanar su vínculo.
              </p>

              {/* Botón de inicio */}
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--color-plum-900)',
                  color: '#FFFFFF',
                  padding: '16px 36px',
                  borderRadius: 'var(--r-pill)',
                  fontWeight: 700,
                  fontSize: '16px',
                  boxShadow: '0 8px 24px rgba(34, 40, 74, 0.25)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  border: 'none',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-plum-700)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-plum-900)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Evaluar nuestro caso de pareja</span>
                <ArrowRight size={18} />
              </button>

              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--color-ink-muted)',
                  marginTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                }}
              >
                <span>2 a 3 minutos</span>
                <span>·</span>
                <span>Sin costo</span>
                <span>·</span>
                <span>Explora con calma</span>
              </div>
            </div>
          )}

          {/* ══════════════ STEPS 1 a 5: PREGUNTAS INTERACTIVAS ══════════════ */}
          {currentStep >= 1 && currentStep <= questions.length && (
            <div>
              {/* Barra de progreso */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--color-ink-secondary)',
                      fontSize: '13px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <ArrowLeft size={16} />
                    <span>Atrás</span>
                  </button>
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-ink-muted)' }}>
                    Paso {currentStep} de {questions.length}
                  </span>
                </div>

                <div
                  style={{
                    height: '5px',
                    borderRadius: '999px',
                    backgroundColor: 'var(--color-canvas-subtle)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      backgroundColor: 'var(--color-clay)',
                      width: `${(currentStep / questions.length) * 100}%`,
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
              </div>

              {/* Título de la pregunta */}
              <div style={{ marginBottom: '28px' }}>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(24px, 3.2vw, 32px)',
                    fontWeight: 600,
                    color: 'var(--color-plum-900)',
                    lineHeight: 1.25,
                    marginBottom: '10px',
                  }}
                >
                  {currentQ.title}
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Opciones */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentQ.id] === opt.label;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(currentQ.id, opt)}
                      style={{
                        backgroundColor: isSelected ? 'var(--color-clay-subtle)' : 'var(--color-surface)',
                        border: isSelected ? '2px solid var(--color-clay)' : '1.5px solid var(--border-subtle)',
                        borderRadius: 'var(--r-xl)',
                        padding: '18px 22px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                      }}
                      onMouseOver={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--color-clay)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--border-subtle)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: 'var(--color-plum-900)',
                            lineHeight: 1.3,
                            marginBottom: '4px',
                          }}
                        >
                          {opt.label}
                        </div>
                        <div style={{ fontSize: '13px', color: 'var(--color-ink-secondary)' }}>
                          {opt.sub}
                        </div>
                      </div>

                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          border: isSelected ? '6px solid var(--color-clay)' : '2px solid var(--border-subtle)',
                          backgroundColor: '#FFFFFF',
                          flexShrink: 0,
                          transition: 'all 0.2s ease',
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ══════════════ STEP 6: RESULTADO (MATCH CONFIRMADO) ══════════════ */}
          {currentStep > questions.length && (
            <div>
              {/* Tarjeta de resultado */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '28px',
                  padding: '40px 32px',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center',
                }}
              >
                {/* Badge de coincidencia */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(37, 211, 102, 0.12)',
                    border: '1px solid rgba(37, 211, 102, 0.3)',
                    padding: '6px 16px',
                    borderRadius: 'var(--r-pill)',
                    marginBottom: '24px',
                  }}
                >
                  <Sparkles size={16} style={{ color: '#128C7E' }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#128C7E' }}>
                    ✦ Evaluación completada: Su caso es apto para abordaje en terapia de pareja
                  </span>
                </div>

                {/* Micro-ajuste 1: Nota clínica dinámica para Opción B (Iniciativa individual) */}
                {isIndividualInitiative && (
                  <div
                    style={{
                      backgroundColor: 'rgba(169, 90, 65, 0.08)',
                      border: '1px solid rgba(169, 90, 65, 0.25)',
                      borderRadius: 'var(--r-lg)',
                      padding: '14px 18px',
                      maxWidth: '540px',
                      margin: '0 auto 24px',
                      textAlign: 'left',
                      fontSize: '13.5px',
                      lineHeight: 1.55,
                      color: 'var(--color-plum-900)',
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--color-clay)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={15} />
                      <span>Nota clínica personalizada:</span>
                    </div>
                    No necesitas que tu pareja esté convencida hoy. Podemos iniciar con la conversación exploratoria de 30 min contigo (enfoque individual vincular) para darte herramientas y evaluar cómo invitarle sin presión.
                  </div>
                )}

                {/* Perfil del Especialista Ideal: Iris Alarcón */}
                <div style={{ marginBottom: '24px' }}>
                  <img
                    src="/images/hero-therapist-480.webp"
                    alt="Especialista en Terapia de Pareja"
                    width="110"
                    height="110"
                    style={{
                      width: '110px',
                      height: '110px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 16px',
                      border: '4px solid var(--color-canvas)',
                      boxShadow: '0 8px 24px rgba(34, 40, 74, 0.14)',
                      display: 'block',
                    }}
                  />
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '26px',
                      fontWeight: 700,
                      color: 'var(--color-plum-900)',
                      marginBottom: '4px',
                    }}
                  >
                    Iris Alarcón
                  </h3>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-clay)', marginBottom: '8px' }}>
                    Psicóloga Clínica Colegiada · Máster en Pareja y Sexología (JVPP)
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
                    Las respuestas de su autoevaluación indican que su caso se beneficia de un protocolo de intervención en comunicación, acuerdos y reconexión emocional adaptado a su contexto.
                  </p>
                </div>

                {/* Resumen del plan sugerido */}
                <div
                  style={{
                    backgroundColor: 'var(--color-canvas)',
                    borderRadius: 'var(--r-xl)',
                    padding: '20px 24px',
                    textAlign: 'left',
                    marginBottom: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '13.5px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-clay)', flexShrink: 0 }} />
                    <span><strong>Enfoque recomendado:</strong> Terapia Integral de Parejas (IBCT) + TCC Vincular</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-clay)', flexShrink: 0 }} />
                    <span><strong>Modalidad:</strong> Online por Google Meet (ambos juntos o en videollamada simultánea)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-clay)', flexShrink: 0 }} />
                    <span><strong>Primer paso:</strong> Sesión inicial gratuita de 30 minutos sin compromiso económico</span>
                  </div>
                </div>

                {/* Botón principal a WhatsApp */}
                <a
                  href={whatsappMatchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    backgroundColor: 'var(--color-clay)',
                    color: '#FFFFFF',
                    padding: '16px 32px',
                    borderRadius: 'var(--r-pill)',
                    fontWeight: 700,
                    fontSize: '16px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(169, 90, 65, 0.35)',
                    transition: 'all 0.2s ease',
                    width: '100%',
                    maxWidth: '440px',
                    marginBottom: '16px',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-clay-hover)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-clay)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>
                    {isIndividualInitiative 
                      ? 'Agendar mi conversación exploratoria (30 min)' 
                      : 'Agendar nuestra primera conversación (30 min)'}
                  </span>
                  <ArrowRight size={18} />
                </a>

                {/* Micro-ajuste 3: Botón de respaldo para Desktop sin WhatsApp Web */}
                <div
                  style={{
                    maxWidth: '460px',
                    margin: '0 auto 16px',
                    padding: '12px 16px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '12.5px',
                    color: 'var(--color-ink-secondary)',
                    lineHeight: 1.55,
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <span style={{ fontWeight: 600, color: 'var(--color-plum-900)' }}>
                    💻 ¿Estás desde una computadora sin WhatsApp Web?
                  </span>
                  <div style={{ marginTop: '4px' }}>
                    Escríbenos directo desde tu celular al{' '}
                    <a
                      href="https://wa.me/50373184781"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--color-clay)', fontWeight: 700, textDecoration: 'none' }}
                    >
                      +503 7318 4781
                    </a>
                    {' '}o agenda por correo a{' '}
                    <a
                      href="mailto:contacto@terapiadeparejaelsalvador.com?subject=Consulta%20Test%20de%20Pareja"
                      style={{ color: 'var(--color-plum-900)', textDecoration: 'underline', fontWeight: 600 }}
                    >
                      contacto@terapiadeparejaelsalvador.com
                    </a>
                  </div>
                </div>

                {/* Garantía de Confidencialidad y Privacidad YMYL */}
                <div style={{
                  maxWidth: '460px',
                  margin: '0 auto 16px',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(34, 40, 74, 0.04)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 40, 74, 0.08)',
                  fontSize: '12.5px',
                  color: 'var(--color-ink-secondary)',
                  lineHeight: 1.5,
                  textAlign: 'center'
                }}>
                  🔒 <strong>Confidencialidad médica garantizada:</strong> Tus respuestas se evalúan en privado dentro de tu navegador y no se guardan en servidores públicos. Solo se envían a la terapeuta si decides remitir el mensaje vía WhatsApp. Consulta nuestra <a href="/privacidad" style={{ color: 'var(--color-clay)', textDecoration: 'underline', fontWeight: 600 }}>Política de Privacidad y Secreto Clínico</a>.
                </div>

                {/* Reiniciar o volver */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '12px' }}>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-ink-muted)',
                      fontSize: '13px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <RotateCcw size={14} />
                    <span>Repetir evaluación</span>
                  </button>

                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onGoHome) onGoHome();
                      else window.location.href = '/';
                    }}
                    style={{
                      color: 'var(--color-plum-900)',
                      fontSize: '13px',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    Volver a la página principal
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
