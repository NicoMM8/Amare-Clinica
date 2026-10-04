"use client";

import * as React from "react";
import {
  Questionnaire,
  QuestionnaireProgress,
  QuestionnaireQuestion,
  QuestionnaireOptions,
  QuestionnaireOption,
  QuestionnaireOptionBody,
} from "@/components/ui/questionnaire";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { HeroButton } from "@/components/ui/hero-button";

export function QuestionnaireExample({
  variant = "journey",
  size = "default",
  shape = "leaf",
  indicator = "auto",
  showIndicator = true,
}) {
  const id = React.useId();
  const [answers, setAnswers] = React.useState(["", "", ""]);
  const [step, setStep] = React.useState(0);
  const [saved, setSaved] = React.useState(false);
  const headings = React.useRef([]);
  const focusNext = React.useRef(false);

  const presentation =
    variant === "journey" || variant === "worksheet" ? variant : "stacked";

  const questions = [
    {
      title: "¿Qué tipo de acompañamiento buscas?",
      hint: "Elige la modalidad que mejor describa tu punto de partida.",
      options: [
        {
          value: "pareja",
          label: "Terapia de Pareja y Relacional",
          detail: "Para resolver reproches en bucle, falta de intimidad sexual o estrés de relación a distancia.",
        },
        {
          value: "individual",
          label: "Psicoterapia Individual",
          detail: "Para gestionar ansiedad, sobrepensamiento, límites personales o duelo migratorio.",
        },
        {
          value: "orientacion",
          label: "Aún no lo tengo del todo claro",
          detail: "Evaluaremos tu situación juntos en los primeros 30 minutos sin compromiso.",
        },
      ],
    },
    {
      title: "¿Cuál es tu principal motivo de consulta?",
      hint: "Lo que más energía te está quitando en este momento.",
      options: [
        {
          value: "comunicacion-ansiedad",
          label: "Ansiedad o comunicación bloqueada",
          detail: "Sensación de saturación mental, insomnio o conversaciones que siempre terminan en discusión.",
        },
        {
          value: "intimidad-limites",
          label: "Intimidad, sexualidad o límites",
          detail: "Desconexión afectiva, heridas de confianza o dificultad para decir que no.",
        },
        {
          value: "desarraigo",
          label: "Adaptación, desarraigo o soledad",
          detail: "El peso emocional de vivir en el extranjero o conciliar tu vida lejos de El Salvador.",
        },
      ],
    },
    {
      title: "¿Desde dónde te conectarás a las sesiones?",
      hint: "Para asignarte horarios acordes a tu huso horario y país de residencia.",
      options: [
        {
          value: "canada-usa",
          label: "Canadá o Estados Unidos (Montreal, Toronto, L.A., Texas)",
          detail: "Disponibilidad vespertina adaptada a husos horarios EDT/PDT/CDT.",
        },
        {
          value: "el-salvador",
          label: "El Salvador / Centroamérica (CST)",
          detail: "Horarios regulares diurnos y vespertinos.",
        },
        {
          value: "europa-otro",
          label: "Europa u otra región internacional",
          detail: "Coordinación especial para compatibilizar franjas horarias.",
        },
      ],
    },
  ];

  const completed = answers.filter(Boolean).length;
  const totalQuestions = questions.length;

  React.useEffect(() => {
    if (focusNext.current) {
      headings.current[step]?.focus();
      focusNext.current = false;
    }
  }, [step]);

  const move = (next) => {
    focusNext.current = true;
    setStep(next);
  };

  const startAgain = () => {
    setAnswers(["", "", ""]);
    setSaved(false);
    move(0);
  };

  const save = () => {
    if (completed < totalQuestions) return;
    setSaved(true);
  };

  // Generate WhatsApp message with triage answers
  const getWhatsAppSummary = () => {
    const q1 = questions[0].options.find(o => o.value === answers[0])?.label || answers[0];
    const q2 = questions[1].options.find(o => o.value === answers[1])?.label || answers[1];
    const q3 = questions[2].options.find(o => o.value === answers[2])?.label || answers[2];

    const message = `Hola Centro Amaré, he completado el evaluador clínico online:
• Modalidad: ${q1}
• Motivo: ${q2}
• Ubicación: ${q3}

Me gustaría coordinar mi sesión inicial gratuita de 30 minutos por Google Meet.`;

    return "https://wa.me/50373184781?text=" + encodeURIComponent(message);
  };

  return (
    <section id="triage" className="section bg-grid-subtle" style={{ position: "relative" }}>
      <div className="container-narrow">
        <form
          className="v-questionnaire-example"
          onSubmit={(event) => {
            event.preventDefault();
            save();
          }}
          onReset={startAgain}
        >
          <Questionnaire presentation={presentation}>
            <header className="v-questionnaire-example__intro">
              <span className="v-questionnaire-example__tab" aria-hidden="true">
                <Icon name="sparkles" />
              </span>
              <div>
                <p>Evaluador Clínico Confidencial (1 min)</p>
                <h3>Encuentra el camino de acompañamiento para tu vida real.</h3>
              </div>
            </header>

            {!saved && (
              <QuestionnaireProgress value={step + 1} total={totalQuestions} />
            )}

            {!saved ? (
              <>
                <div className="v-questionnaire-example__questions">
                  {questions.map((question, index) => (
                    <QuestionnaireQuestion
                      key={question.title}
                      hidden={presentation === "journey" && step !== index}
                      inert={presentation === "journey" && step !== index}
                    >
                      <legend
                        id={`${id}-question-${index}`}
                        tabIndex={-1}
                        ref={(node) => {
                          headings.current[index] = node;
                        }}
                      >
                        <span className="v-questionnaire-example__heading">
                          <span
                            className="v-questionnaire-example__number"
                            aria-hidden="true"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="v-questionnaire-example__title">
                            {question.title}
                          </span>
                        </span>
                      </legend>
                      <p
                        className="v-questionnaire-example__hint"
                        id={`${id}-hint-${index}`}
                      >
                        {question.hint}
                      </p>
                      <QuestionnaireOptions
                        name={`${id}-answer-${index}`}
                        aria-labelledby={`${id}-question-${index}`}
                        aria-describedby={`${id}-hint-${index}`}
                        value={answers[index]}
                        onValueChange={(value) => {
                          setAnswers((current) =>
                            current.map((answer, position) =>
                              position === index ? value : answer,
                            ),
                          );
                        }}
                        selectorShape={shape}
                        selectorSize={size}
                        selectorIndicator={indicator}
                        showSelectorIndicator={showIndicator}
                        selectorTone={index === 0 ? "pink" : "blue"}
                      >
                        {question.options.map((option) => (
                          <QuestionnaireOption
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                            inputProps={{ required: true }}
                          >
                            <QuestionnaireOptionBody>
                              <b>{option.label}</b>
                              <small>{option.detail}</small>
                            </QuestionnaireOptionBody>
                          </QuestionnaireOption>
                        ))}
                      </QuestionnaireOptions>
                    </QuestionnaireQuestion>
                  ))}
                </div>

                <footer className="v-questionnaire-example__footer">
                  {presentation === "journey" && (
                    <Button
                      variant="ghost"
                      onClick={() => move(step - 1)}
                      disabled={step === 0}
                    >
                      <Icon name="arrow-left" size="sm" />
                      Atrás
                    </Button>
                  )}
                  {presentation === "journey" && step < totalQuestions - 1 ? (
                    <Button
                      variant="secondary"
                      onClick={() => move(step + 1)}
                      disabled={!answers[step]}
                    >
                      Siguiente pregunta
                      <Icon name="arrow-right" size="sm" />
                    </Button>
                  ) : (
                    <Button
                      variant="accent"
                      type="submit"
                      disabled={completed !== totalQuestions}
                    >
                      Ver mi plan clínico recomendado
                      <Icon name="arrow-up-right" size="sm" />
                    </Button>
                  )}
                  <Button variant="ghost" type="reset">
                    Reiniciar
                  </Button>
                </footer>

                <p className="v-questionnaire-example__result" role="status">
                  {completed === totalQuestions
                    ? "Tus respuestas están completas. Haz clic para ver tu recomendación."
                    : `Pregunta ${step + 1} de ${totalQuestions}. Puedes cambiar cualquier respuesta.`}
                </p>
              </>
            ) : (
              /* Results Panel when questionnaire is completed */
              <div
                style={{
                  background: "var(--v-paper)",
                  border: "1.5px solid var(--v-pink)",
                  borderRadius: "var(--r-panel)",
                  padding: "32px",
                  display: "grid",
                  gap: "24px",
                  boxShadow: "0 10px 30px rgba(183, 89, 64, 0.12)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--v-pink)" }}>
                  <Icon name="check" size="lg" />
                  <span style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Encuadre Clínico Personalizado
                  </span>
                </div>

                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-plum-900)", marginBottom: "8px" }}>
                    Tu perfil clínico está listo para ser valorado.
                  </h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--v-text-2)" }}>
                    Hemos configurado tu pre-evaluación según tus respuestas. En la sesión inicial de 30 minutos por Google Meet, la psicóloga te explicará la hoja de ruta terapéutica y responderá todas tus dudas sin compromiso.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "14px",
                    background: "var(--v-canvas)",
                    padding: "16px 20px",
                    borderRadius: "14px"
                  }}
                >
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--v-text-3)", textTransform: "uppercase" }}>1ª Sesión</span>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--v-pink)" }}>30 min Gratuita</div>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--v-text-3)", textTransform: "uppercase" }}>Modalidad</span>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--v-text)" }}>100% Online (Google Meet)</div>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--v-text-3)", textTransform: "uppercase" }}>Asistencia</span>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--v-text)" }}>Coordinación por WhatsApp</div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <HeroButton
                    appearance="paper-fold"
                    variant="clay"
                    href={getWhatsAppSummary()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Enviar respuestas y coordinar 30 min gratis</span>
                  </HeroButton>

                  <Button variant="ghost" onClick={startAgain} style={{ alignSelf: "center" }}>
                    <Icon name="reset" size="sm" />
                    Volver a responder el cuestionario
                  </Button>
                </div>
              </div>
            )}
          </Questionnaire>
        </form>
      </div>
    </section>
  );
}

export default function Demo() {
  return (
    <QuestionnaireExample
      variant="journey"
      shape="leaf"
      indicator="auto"
      showIndicator={true}
    />
  );
}
