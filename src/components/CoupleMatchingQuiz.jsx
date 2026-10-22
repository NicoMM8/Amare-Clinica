import React, { useState, useRef, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw,
  ShieldCheck,
  ArrowRight,
  Laptop,
  MessageSquare,
  FileText,
  HelpCircle
} from 'lucide-react';
import {
  Questionnaire,
  QuestionnaireProgress,
  QuestionnaireQuestion,
  QuestionnaireOptions,
  QuestionnaireOption,
  QuestionnaireOptionBody,
} from './ui/questionnaire';
import { Button } from './ui/button';
import { HeroButton } from './cojeev/HeroButton';
import { Icon } from './ui/icon';

const STORAGE_KEY = 'amare_quiz_draft_v1';

export default function CoupleMatchingQuiz({ onGoHome }) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Intro, 1..7: Questions, 8: Open Notes, 9: Result
  const [answers, setAnswers] = useState({
    situation: '',
    situationShort: '',
    reason: '',
    reasonShort: '',
    conflictStyle: '',
    conflictStyleShort: '',
    duration: '',
    durationShort: '',
    therapyHistory: '',
    therapyHistoryShort: '',
    location: '',
    locationShort: '',
    goal: '',
    goalShort: '',
    notes: '',
  });

  const headings = useRef([]);
  const focusNext = useRef(false);

  // Restaurar progreso previo de localStorage si el usuario recarga la página
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answers) {
          setAnswers(parsed.answers);
        }
        if (typeof parsed.step === 'number' && parsed.step > 0 && parsed.step <= 9) {
          setCurrentStep(parsed.step);
        }
      }
    } catch {
      // Ignorar si localStorage no está disponible
    }
  }, []);

  const saveToStorage = (updatedAnswers, nextStep) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        answers: updatedAnswers,
        step: nextStep
      }));
    } catch {
      // Ignorar
    }
  };

  const questions = [
    {
      id: 'situation',
      title: '¿Cuál es la situación actual para iniciar el proceso?',
      subtitle: 'Esto nos permite adaptar el primer paso según el momento en que se encuentre cada uno.',
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
      id: 'conflictStyle',
      title: '¿Cómo suelen terminar sus discusiones o momentos de desacuerdo?',
      subtitle: 'Entender el ciclo de conflicto es clave para desactivar la escalada del dolor.',
      options: [
        { label: 'Discusión intensa con reproches dolorosos o gritos', sub: 'Cuesta frenar la conversación antes de herirnos', short: 'Discusión intensa / reproches' },
        { label: 'Ley del hielo, silencios prolongados o distanciamiento por días', sub: 'Uno se encierra y la otra persona siente ansiedad o frustración', short: 'Ley del hielo y distanciamiento' },
        { label: 'Sensación de caminar sobre cáscaras de huevo', sub: 'Evitamos temas importantes por miedo a la reacción del otro', short: 'Evitación por miedo a pelear' },
        { label: 'Desconexión fría y resignación', sub: 'Ya casi no peleamos, pero convivimos como extraños', short: 'Desconexión y resignación' },
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
      id: 'therapyHistory',
      title: '¿Han recibido ayuda psicológica o de pareja anteriormente?',
      subtitle: 'Nos orienta sobre el nivel de experiencia previa en procesos terapéuticos.',
      options: [
        { label: 'Es nuestra primera vez en terapia', sub: 'Buscamos una guía profesional clara y sin juzgarnos', short: 'Primera vez en terapia' },
        { label: 'Hemos tenido terapia individual por separado', sub: 'Nos sirvió a nivel personal, pero falta trabajar el vínculo de pareja', short: 'Terapia individual previa' },
        { label: 'Intentamos terapia de pareja antes sin los resultados esperados', sub: 'Buscamos un método más estructurado, cálido y práctico', short: 'Experiencia previa sin éxito' },
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

  useEffect(() => {
    if (focusNext.current && currentStep >= 1 && currentStep <= questions.length) {
      headings.current[currentStep - 1]?.focus();
      focusNext.current = false;
    }
    // Asegurar scroll al tope en cada cambio de paso del test
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [currentStep, questions.length]);

  const move = (next) => {
    focusNext.current = true;
    setCurrentStep(next);
    saveToStorage(answers, next);
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const handleSelectOption = (field, opt) => {
    const updatedAnswers = { 
      ...answers, 
      [field]: opt.label,
      [`${field}Short`]: opt.short || opt.label
    };
    setAnswers(updatedAnswers);

    const nextStep = currentStep < questions.length ? currentStep + 1 : questions.length + 1;
    saveToStorage(updatedAnswers, nextStep);

    // Micro-delay suave para que el usuario aprecie la animación orgánica Cojeev antes de avanzar
    setTimeout(() => {
      setCurrentStep(prev => {
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
        if (prev < questions.length) {
          focusNext.current = true;
          return prev + 1;
        } else {
          return questions.length + 1; // Paso de notas personales abiertas
        }
      });
    }, 320);
  };

  const currentQ = questions[currentStep - 1] || questions[0];

  const isIndividualInitiative = 
    answers.situationShort === 'Iniciativa individual (pareja con dudas)' || 
    answers.situation.includes('Solo yo tengo iniciativa');

  const startAgain = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setAnswers({
      situation: '',
      situationShort: '',
      reason: '',
      reasonShort: '',
      conflictStyle: '',
      conflictStyleShort: '',
      duration: '',
      durationShort: '',
      therapyHistory: '',
      therapyHistoryShort: '',
      location: '',
      locationShort: '',
      goal: '',
      goalShort: '',
      notes: '',
    });
    move(0);
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

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
    if (answers.conflictStyleShort || answers.conflictStyle) {
      msg += `• Dinámica de discusión: ${answers.conflictStyleShort || answers.conflictStyle}\n`;
    }
    if (answers.durationShort || answers.duration) {
      msg += `• Tiempo de desgaste: ${answers.durationShort || answers.duration}\n`;
    }
    if (answers.therapyHistoryShort || answers.therapyHistory) {
      msg += `• Experiencia previa: ${answers.therapyHistoryShort || answers.therapyHistory}\n`;
    }
    if (answers.locationShort || answers.location) {
      msg += `• Ubicación: ${answers.locationShort || answers.location}\n`;
    }
    if (answers.goalShort || answers.goal) {
      msg += `• Prioridad: ${answers.goalShort || answers.goal}\n`;
    }
    if (answers.notes && answers.notes.trim()) {
      msg += `• En nuestras palabras: "${answers.notes.trim()}"\n`;
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
          backgroundColor: 'rgba(250, 247, 242, 0.94)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          padding: '12px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '840px',
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
              fontSize: '16.5px',
            }}
          >
            <img
              src="/favicon.png"
              alt="Centro Amaré"
              style={{ width: '30px', height: '30px', display: 'block' }}
            />
            <span>Centro Amaré</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-secondary)', display: 'none', md: 'inline' }}>
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
        id="main-content"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px 80px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '720px', margin: '0 auto' }}>

          {/* ══════════════ STEP 0: INTRO ESTILO COJEEV UI ══════════════ */}
          {currentStep === 0 && (
            <div className="v-questionnaire-example" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
              <Questionnaire presentation="journey">
                {/* Cabecera Centrada y Equilibrada */}
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(183, 89, 64, 0.08)',
                      padding: '6px 14px',
                      borderRadius: 'var(--r-pill, 999px)',
                      marginBottom: '14px',
                    }}
                  >
                    <Heart size={13} style={{ color: 'var(--color-clay)' }} fill="var(--color-clay)" />
                    <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-clay)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      Autoevaluación Clínica · 2 a 3 min
                    </span>
                  </div>

                  <h1 className="font-serif" style={{ fontSize: 'clamp(24px, 3.6vw, 34px)', lineHeight: 1.25, color: 'var(--color-plum-900)', margin: '0 0 10px 0' }}>
                    Test de Pareja Online: Autoevaluación Clínica
                  </h1>

                  <p style={{ fontSize: '15px', color: 'var(--color-ink-secondary)', margin: '0 auto', maxWidth: '520px', lineHeight: 1.55, textTransform: 'none', letterSpacing: 'normal' }}>
                    Descubran el estado actual de su vínculo y reciban orientación clínica personalizada sin costo.
                  </p>
                </div>

                {/* Avatar cápsula Iris Alarcón */}
                <div style={{ textAlign: 'center', margin: '20px 0 16px' }}>
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '16px' }}>
                    <img
                      src="/images/iris-alarcon.webp"
                      alt="Licda. Iris Alarcón - Psicóloga y Sexóloga Clínica JVPP"
                      width="96"
                      height="96"
                      style={{
                        width: '96px',
                        height: '96px',
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
                        Equipo de Terapia de Pareja · Registro JVPP
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '16px',
                      color: 'var(--color-ink-secondary)',
                      lineHeight: 1.6,
                      maxWidth: '540px',
                      margin: '14px auto 30px',
                    }}
                  >
                    Un equipo clínico con Máster en Pareja y Sexología que comprende su contexto cultural, el desgaste que atraviesan y la forma en la que quieren sanar su vínculo.
                  </p>

                  <HeroButton
                    appearance="paper-fold"
                    variant="clay"
                    onClick={() => move(1)}
                    style={{
                      height: '52px',
                      padding: '0 28px',
                      fontSize: '15.5px',
                      boxShadow: '0 8px 24px rgba(183, 89, 64, 0.32)',
                    }}
                  >
                    Evaluar nuestro caso de pareja
                  </HeroButton>

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
              </Questionnaire>

              {/* ── GUÍA CLÍNICA DE AUTOEVALUACIÓN Y PREGUNTAS FRECUENTES ── */}
              <section
                style={{
                  marginTop: '56px',
                  textAlign: 'left',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '48px',
                }}
                aria-label="Guía clínica sobre el test de pareja y terapia"
              >
                <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(22px, 3.2vw, 28px)',
                      color: 'var(--color-plum-900)',
                      lineHeight: 1.3,
                      marginBottom: '12px',
                    }}
                  >
                    ¿Qué evalúa este test clínico de relación de pareja?
                  </h2>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--color-ink-secondary)',
                      maxWidth: '560px',
                      margin: '0 auto',
                      lineHeight: 1.6,
                    }}
                  >
                    Diseñado por terapeutas de pareja colegiados ante la JVPP en El Salvador para identificar las dinámicas relacionales prioritarias.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '20px',
                    marginBottom: '40px',
                  }}
                >
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '18px',
                      padding: '24px',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--color-clay)' }} />
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', margin: 0 }}>
                        Patrones de Comunicación
                      </h3>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                      Detecta si existen discusiones en bucle, reproches defensivos, escaladas verbales o silencios prolongados (ley del hielo) que bloquean los acuerdos cotidianos.
                    </p>
                  </div>

                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '18px',
                      padding: '24px',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <Heart size={18} style={{ color: 'var(--color-clay)' }} />
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', margin: 0 }}>
                        Conexión Emocional e Intimidad
                      </h3>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                      Evalúa el nivel de reciprocidad afectiva, la presencia de distancia emocional y el bienestar en la vida erótica o sexual de la pareja.
                    </p>
                  </div>

                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '18px',
                      padding: '24px',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <ShieldCheck size={18} style={{ color: 'var(--color-clay)' }} />
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', margin: 0 }}>
                        Confianza y Reparación Vincular
                      </h3>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                      Analiza la seguridad mutua tras episodios de infidelidad, mentiras, celos, sospechas o heridas del pasado no resueltas.
                    </p>
                  </div>

                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '18px',
                      padding: '24px',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <Laptop size={18} style={{ color: 'var(--color-clay)' }} />
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', margin: 0 }}>
                        Entorno, Migración y Cargas
                      </h3>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                      Examina el impacto de la distancia geográfica, el estrés de la diáspora salvadoreña, la crianza de hijos y la intervención de las familias de origen.
                    </p>
                  </div>
                </div>

                {/* Privacidad por diseño */}
                <div
                  style={{
                    background: 'rgba(158, 75, 51, 0.05)',
                    border: '1px solid rgba(158, 75, 51, 0.2)',
                    borderRadius: '18px',
                    padding: '24px 28px',
                    marginBottom: '40px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}
                >
                  <ShieldCheck size={24} style={{ color: 'var(--color-clay)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--color-plum-900)', margin: '0 0 6px 0' }}>
                      100% Anónimo y Confidencial · Privacidad por Diseño
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                      No solicitamos registro de usuario, contraseñas ni datos bancarios. Sus respuestas son procesadas de manera anónima y sólo se utilizan para ofrecerles una orientación clínica personalizada de acuerdo con la ética médica y el secreto profesional.
                    </p>
                  </div>
                </div>

                {/* Preguntas frecuentes sobre el test y la terapia */}
                <div style={{ marginBottom: '20px' }}>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '20px',
                      color: 'var(--color-plum-900)',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <HelpCircle size={20} style={{ color: 'var(--color-clay)' }} />
                    Preguntas frecuentes sobre la evaluación de pareja
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '18px 22px', border: '1px solid var(--border-subtle)' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-plum-900)', margin: '0 0 8px 0' }}>
                        ¿Qué pasa si mi pareja no está lista para responder el test o acudir a terapia?
                      </h4>
                      <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                        Es muy frecuente que uno de los miembros de la pareja sienta la necesidad de ayuda antes que el otro. El test contempla la opción individual: podemos comenzar con un enfoque vincular individual con uno de ustedes para entender la dinámica y generar cambios saludables en la interacción sin presionar a la otra parte.
                      </p>
                    </div>

                    <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '18px 22px', border: '1px solid var(--border-subtle)' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-plum-900)', margin: '0 0 8px 0' }}>
                        ¿Este test sustituye el diagnóstico de un psicólogo profesional?
                      </h4>
                      <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                        No. Se trata de una herramienta clínica de autoevaluación y orientación inicial que estructura sus motivos de consulta para facilitar el primer contacto con nuestro equipo acreditado por la JVPP en El Salvador.
                      </p>
                    </div>

                    <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '18px 22px', border: '1px solid var(--border-subtle)' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-plum-900)', margin: '0 0 8px 0' }}>
                        ¿Cómo funciona la primera sesión gratuita de 30 minutos?
                      </h4>
                      <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                        Al completar el cuestionario, pueden solicitar una conversación de orientación de 30 minutos sin costo por videollamada. En ella evaluamos su situación particular, resolvemos dudas sobre la metodología y establecemos si la terapia de pareja es el abordaje más indicado.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ══════════════ STEPS 1 a 5: PREGUNTAS EN FORMATO COJEEV UI ══════════════ */}
          {currentStep >= 1 && currentStep <= questions.length && (
            <div className="v-questionnaire-example" style={{ maxWidth: '680px', margin: '0 auto', width: '100%' }}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (currentStep < questions.length) {
                    move(currentStep + 1);
                  } else {
                    move(questions.length + 1);
                  }
                }}
                onReset={startAgain}
              >
                <Questionnaire presentation="journey">
                  <header className="v-questionnaire-example__intro">
                    <span className="v-questionnaire-example__tab" aria-hidden="true">
                      <Heart size={20} style={{ color: 'var(--v-pink)' }} />
                    </span>
                    <div>
                      <p>Evaluación Clínica de Pareja</p>
                      <h3>Encuentra el camino clínico adecuado para su vínculo.</h3>
                    </div>
                  </header>

                  {/* Barra de progreso Cojeev */}
                  <QuestionnaireProgress value={currentStep} total={questions.length} />

                  <div className="v-questionnaire-example__questions">
                    {questions.map((question, index) => {
                      const isCurrent = currentStep === (index + 1);
                      return (
                        <QuestionnaireQuestion
                          key={question.id}
                          hidden={!isCurrent}
                          inert={!isCurrent}
                        >
                          <legend
                            id={`quiz-question-${index}`}
                            tabIndex={-1}
                            ref={(node) => {
                              headings.current[index] = node;
                            }}
                            style={{ outline: 'none', border: 'none', padding: 0, marginBottom: '6px' }}
                          >
                            <span className="v-questionnaire-example__heading">
                              <span
                                className="v-questionnaire-example__number"
                                aria-hidden="true"
                              >
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="v-questionnaire-example__title font-serif">
                                {question.title}
                              </span>
                            </span>
                          </legend>

                          <p
                            className="v-questionnaire-example__hint"
                            id={`quiz-hint-${index}`}
                          >
                            {question.subtitle}
                          </p>

                          <QuestionnaireOptions
                            name={`quiz-answer-${question.id}`}
                            aria-labelledby={`quiz-question-${index}`}
                            aria-describedby={`quiz-hint-${index}`}
                            value={answers[question.id]}
                            onValueChange={(selectedLabel) => {
                              const foundOpt = question.options.find(o => o.label === selectedLabel);
                              if (foundOpt) {
                                handleSelectOption(question.id, foundOpt);
                              }
                            }}
                            selectorShape="circle"
                            selectorSize="default"
                            selectorIndicator="check"
                            showSelectorIndicator={true}
                            selectorTone="clay"
                          >
                            {question.options.map((opt) => (
                              <QuestionnaireOption
                                key={opt.label}
                                value={opt.label}
                                inputProps={{ required: true }}
                              >
                                <QuestionnaireOptionBody>
                                  <b>{opt.label}</b>
                                  <small>{opt.sub}</small>
                                </QuestionnaireOptionBody>
                              </QuestionnaireOption>
                            ))}
                          </QuestionnaireOptions>
                        </QuestionnaireQuestion>
                      );
                    })}
                  </div>

                  {/* Footer de navegación Cojeev UI con HeroButton auténtico */}
                  <footer className="v-questionnaire-example__footer">
                    <Button
                      variant="ghost"
                      onClick={() => move(currentStep - 1)}
                    >
                      <Icon name="arrow-left" size="sm" />
                      Atrás
                    </Button>

                    {currentStep < questions.length ? (
                      <HeroButton
                        appearance="paper-fold"
                        variant="clay"
                        onClick={() => move(currentStep + 1)}
                        disabled={!answers[currentQ.id]}
                        style={{
                          height: '48px',
                          padding: '0 24px',
                          fontSize: '15px',
                          boxShadow: answers[currentQ.id] ? '0 8px 24px rgba(183, 89, 64, 0.32)' : 'none',
                        }}
                      >
                        Siguiente pregunta
                      </HeroButton>
                    ) : (
                      <HeroButton
                        appearance="paper-fold"
                        variant="clay"
                        type="submit"
                        disabled={!answers[currentQ.id]}
                        style={{
                          height: '48px',
                          padding: '0 24px',
                          fontSize: '15px',
                          boxShadow: answers[currentQ.id] ? '0 8px 24px rgba(183, 89, 64, 0.32)' : 'none',
                        }}
                      >
                        Siguiente: Espacio para escribir
                      </HeroButton>
                    )}

                    <Button
                      variant="ghost"
                      type="button"
                      onClick={startAgain}
                    >
                      Reiniciar
                    </Button>
                  </footer>

                  <p className="v-questionnaire-example__result" role="status">
                    {currentStep === questions.length && answers[currentQ.id]
                      ? "Has respondido las 7 preguntas clínicas. Puedes continuar para compartir un detalle en tus palabras o ver directamente tu recomendación."
                      : `Pregunta ${currentStep} de ${questions.length} · ${questions.length - currentStep} ${questions.length - currentStep === 1 ? 'pregunta restante' : 'preguntas restantes'}.`}
                  </p>
                </Questionnaire>
              </form>
            </div>
          )}

          {/* ══════════════ STEP 8: MENSAJE PERSONAL / CUÉNTANOS TU CASO (OPCIONAL) ══════════════ */}
          {currentStep === questions.length + 1 && (
            <div className="v-questionnaire-example" style={{ maxWidth: '680px', margin: '0 auto', width: '100%' }}>
              <Questionnaire presentation="journey">
                <header className="v-questionnaire-example__intro">
                  <span className="v-questionnaire-example__tab" aria-hidden="true" style={{ background: 'var(--v-pink-soft)', color: 'var(--v-pink)' }}>
                    <MessageSquare size={20} />
                  </span>
                  <div>
                    <span className="pill-badge pill-badge-clay" style={{ marginBottom: '6px', display: 'inline-block', fontSize: '11px' }}>
                      Paso Opcional · Espacio de Confianza
                    </span>
                    <h2 className="font-serif" style={{ fontSize: 'clamp(20px, 3.2vw, 26px)', lineHeight: 1.25, color: 'var(--color-plum-900)', margin: '4px 0 6px' }}>
                      ¿Deseas compartir algo más o qué es lo que más te duele de esta situación?
                    </h2>
                    <p style={{ fontSize: '14.5px', color: 'var(--color-ink-secondary)', margin: 0 }}>
                      Puedes escribir con tus propias palabras lo que consideres importante. Tu terapeuta lo leerá con total confidencialidad antes de su primera conversación.
                    </p>
                  </div>
                </header>

                <div style={{ marginTop: '20px', marginBottom: '24px' }}>
                  <textarea
                    value={answers.notes || ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      const updated = { ...answers, notes: val };
                      setAnswers(updated);
                      saveToStorage(updated, currentStep);
                    }}
                    placeholder="Ejemplo: Nos queremos mucho pero sentimos que cualquier desacuerdo termina en reproches o silencios de días. Nos gustaría volver a sentirnos tranquilos y cercanos..."
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '16px 18px',
                      borderRadius: '16px',
                      border: '1.5px solid var(--v-border)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'var(--v-text)',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      boxShadow: 'inset 0 2px 4px rgba(35, 18, 33, 0.04)',
                      outline: 'none',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--v-pink)';
                      e.target.style.boxShadow = '0 0 0 3px var(--v-pink-soft)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--v-border)';
                      e.target.style.boxShadow = 'inset 0 2px 4px rgba(35, 18, 33, 0.04)';
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', fontSize: '12.5px', color: 'var(--color-ink-muted)' }}>
                    <span>Confidencial y protegido por secreto profesional</span>
                    <span>{answers.notes?.length ? `${answers.notes.length} caracteres` : 'Opcional'}</span>
                  </div>
                </div>

                <footer className="v-questionnaire-example__footer" style={{ gap: '12px', flexWrap: 'wrap' }}>
                  <Button
                    variant="ghost"
                    onClick={() => move(questions.length)}
                  >
                    <Icon name="arrow-left" size="sm" />
                    Atrás
                  </Button>

                  <HeroButton
                    appearance="paper-fold"
                    variant="clay"
                    onClick={() => move(questions.length + 2)}
                    style={{
                      height: '48px',
                      padding: '0 24px',
                      fontSize: '15px',
                      boxShadow: '0 8px 24px rgba(183, 89, 64, 0.32)',
                    }}
                  >
                    Ver resultado y especialista
                  </HeroButton>

                  {!answers.notes?.trim() && (
                    <Button
                      variant="ghost"
                      onClick={() => move(questions.length + 2)}
                      style={{ fontSize: '13px' }}
                    >
                      Saltar este paso
                    </Button>
                  )}
                </footer>
              </Questionnaire>
            </div>
          )}

          {/* ══════════════ STEP 9: RESULTADO (MATCH CONFIRMADO) ══════════════ */}
          {currentStep > questions.length + 1 && (
            <div className="v-questionnaire-example" style={{ maxWidth: '680px', margin: '0 auto' }}>
              <div
                style={{
                  backgroundColor: 'var(--v-paper)',
                  borderRadius: '28px',
                  padding: '40px 32px',
                  boxShadow: '0 12px 36px rgba(35, 18, 33, 0.08)',
                  border: '1px solid var(--v-border)',
                  textAlign: 'center',
                }}
              >
                {/* Header intro Cojeev */}
                <header className="v-questionnaire-example__intro" style={{ marginBottom: '24px', justifyContent: 'center' }}>
                  <span className="v-questionnaire-example__tab" aria-hidden="true" style={{ background: 'var(--v-pink-soft)', color: 'var(--v-pink)' }}>
                    <Sparkles size={20} />
                  </span>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: 'var(--v-pink)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Evaluación Completada · 100%
                    </p>
                    <h3 className="font-serif" style={{ margin: 0, fontSize: '22px', color: 'var(--v-text)' }}>
                      Su caso es apto para abordaje en terapia de pareja
                    </h3>
                  </div>
                </header>

                {/* Badge de coincidencia clínica */}
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
                    Evaluación completada: Protocolo adaptado a su historia vincular
                  </span>
                </div>

                {/* Nota clínica personalizada para Opción B (Iniciativa individual) */}
                {isIndividualInitiative && (
                  <div
                    style={{
                      backgroundColor: 'rgba(183, 89, 64, 0.08)',
                      border: '1px solid rgba(183, 89, 64, 0.25)',
                      borderRadius: 'var(--r-card)',
                      padding: '16px 20px',
                      maxWidth: '560px',
                      margin: '0 auto 24px',
                      textAlign: 'left',
                      fontSize: '13.5px',
                      lineHeight: 1.55,
                      color: 'var(--v-text)',
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--v-pink)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={15} />
                      <span>Nota clínica personalizada:</span>
                    </div>
                    No necesitas que tu pareja esté convencida hoy. Podemos iniciar con la conversación exploratoria de 30 min contigo (enfoque individual vincular) para darte herramientas y evaluar cómo invitarle sin presión.
                  </div>
                )}

                {/* Perfil del Especialista Ideal: Iris Alarcón */}
                <div style={{ marginBottom: '28px' }}>
                  <img
                    src="/images/iris-alarcon.webp"
                    alt="Licda. Iris Alarcón - Especialista en Terapia de Pareja JVPP"
                    width="110"
                    height="110"
                    style={{
                      width: '110px',
                      height: '110px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 16px',
                      border: '4px solid var(--v-canvas)',
                      boxShadow: '0 8px 24px rgba(34, 40, 74, 0.14)',
                      display: 'block',
                    }}
                  />
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: 'var(--v-text)',
                      marginBottom: '4px',
                    }}
                  >
                    Equipo Clínico de Centro Amaré
                  </h3>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--v-pink)', marginBottom: '8px' }}>
                    Dirección Clínica: Licda. Iris Alarcón · Registro JVPP N.º 47096
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--v-text-2)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
                    Las respuestas de su autoevaluación indican que su caso se beneficia de nuestro protocolo de intervención en comunicación, acuerdos y reconexión emocional. Les asignaremos la terapeuta del equipo idónea según su motivo de consulta y huso horario.
                  </p>
                </div>

                {/* Resumen del plan sugerido */}
                <div
                  style={{
                    backgroundColor: 'var(--v-canvas)',
                    borderRadius: 'var(--r-card)',
                    padding: '20px 24px',
                    textAlign: 'left',
                    marginBottom: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '13.5px',
                    border: '1px solid var(--v-border)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--v-pink)', flexShrink: 0 }} />
                    <span><strong>Enfoque recomendado:</strong> Terapia Integral de Parejas (IBCT) + TCC Vincular</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--v-pink)', flexShrink: 0 }} />
                    <span><strong>Modalidad:</strong> Online por Google Meet (ambos juntos o en videollamada simultánea)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--v-pink)', flexShrink: 0 }} />
                    <span><strong>Primer paso:</strong> Sesión inicial de 30 minutos sin costo ni compromiso económico</span>
                  </div>
                  {answers.notes && answers.notes.trim() && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', paddingTop: '8px', borderTop: '1px dashed var(--v-border)' }}>
                      <FileText size={16} style={{ color: 'var(--v-pink)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '13px' }}><strong>Mensaje para la terapeuta:</strong> &ldquo;{answers.notes.trim()}&rdquo;</span>
                    </div>
                  )}
                </div>

                {/* Botón principal a WhatsApp */}
                <a
                  href={whatsappMatchUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="v-button v-button--accent"
                  style={{
                    padding: '16px 32px',
                    fontSize: '16px',
                    textDecoration: 'none',
                    width: '100%',
                    maxWidth: '460px',
                    marginBottom: '16px',
                    display: 'inline-flex',
                  }}
                >
                  <span>
                    {isIndividualInitiative 
                      ? 'Agendar mi conversación exploratoria (30 min)' 
                      : 'Agendar nuestra primera conversación con el equipo (30 min)'}
                  </span>
                  <ArrowRight size={18} />
                </a>

                {/* Botón de respaldo para Desktop sin WhatsApp Web */}
                <div
                  style={{
                    maxWidth: '480px',
                    margin: '0 auto 16px',
                    padding: '12px 16px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid var(--v-border)',
                    fontSize: '12.5px',
                    color: 'var(--v-text-2)',
                    lineHeight: 1.55,
                    textAlign: 'center',
                    boxShadow: '0 1px 3px rgba(35, 18, 33, 0.04)',
                  }}
                >
                  <span style={{ fontWeight: 600, color: 'var(--v-text)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Laptop size={15} style={{ color: 'var(--v-text-2)' }} />
                    <span>¿Estás desde una computadora sin WhatsApp Web?</span>
                  </span>
                  <div style={{ marginTop: '4px' }}>
                    Escríbenos directo desde tu celular al{' '}
                    <a
                      href="https://wa.me/50373184781"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      style={{ color: 'var(--v-pink)', fontWeight: 700, textDecoration: 'none' }}
                    >
                      +503 7318 4781
                    </a>
                    {' '}o agenda por correo a{' '}
                    <a
                      href="mailto:contacto@terapiadeparejaelsalvador.com?subject=Consulta%20Test%20de%20Pareja"
                      style={{ color: 'var(--v-text)', textDecoration: 'underline', fontWeight: 600 }}
                    >
                      contacto@terapiadeparejaelsalvador.com
                    </a>
                  </div>
                </div>

                {/* Garantía de Confidencialidad y Privacidad YMYL */}
                <div style={{
                  maxWidth: '480px',
                  margin: '0 auto 20px',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(34, 40, 74, 0.04)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 40, 74, 0.08)',
                  fontSize: '12.5px',
                  color: 'var(--v-text-2)',
                  lineHeight: 1.5,
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '6px' }}>
                    <ShieldCheck size={16} style={{ color: 'var(--v-pink)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Confidencialidad médica garantizada:</strong> Tus respuestas se evalúan en privado dentro de tu navegador y no se guardan en servidores públicos. Solo se envían a la terapeuta si decides remitir el mensaje vía WhatsApp. Consulta nuestra <a href="/privacidad" style={{ color: 'var(--v-pink)', textDecoration: 'underline', fontWeight: 600 }}>Política de Privacidad y Secreto Clínico</a>.</span>
                  </div>
                </div>

                {/* Reiniciar o volver */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '12px' }}>
                  <button
                    type="button"
                    onClick={startAgain}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--v-text-3)',
                      fontSize: '13px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
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
                      color: 'var(--v-text)',
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
