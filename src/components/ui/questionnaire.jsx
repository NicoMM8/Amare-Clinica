"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./button";
import { Icon } from "./icon";

// Shape paths for the SelectorGlyph
const leafPath = "M 50 10 C 78 10 92 36 88 64 C 84 82 66 90 50 90 C 34 90 16 82 12 64 C 8 36 22 10 50 10 Z";
const organicPath = "M 91 50 C 91 65 78 85 58 89 C 38 93 18 80 12 60 C 6 40 18 18 38 12 C 58 6 91 35 91 50 Z";
const roundedPath = "M 88 50 C 88 71 70 88 50 88 C 29 88 12 70 12 48 C 12 28 30 12 52 12 C 72 12 88 29 88 50 Z";

// Context for QuestionnaireOptions
const OptionsContext = React.createContext({
  name: "",
  value: "",
  onValueChange: () => {},
  selectorShape: "leaf",
  selectorSize: "default",
  selectorIndicator: "auto",
  showSelectorIndicator: true,
  selectorTone: "pink"
});

export function Questionnaire({
  children,
  presentation = "journey",
  className = "",
  style = {}
}) {
  return (
    <div
      className={`v-quest v-quest--${presentation} ${className}`.trim()}
      data-presentation={presentation}
      style={style}
    >
      {children}
    </div>
  );
}

export function QuestionnaireProgress({ value, total, className = "" }) {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className={`v-quest__progress ${className}`.trim()}>
      <span className="v-quest__progress-text">
        Paso <b>{value}</b> de <b>{total}</b>
      </span>
      <div className="v-quest__progress-bar">
        <div
          className="v-quest__progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="v-quest__progress-pct">{percentage}%</span>
    </div>
  );
}

export function QuestionnaireQuestion({
  children,
  hidden = false,
  inert = false,
  className = "",
  ...props
}) {
  if (hidden) return null;

  return (
    <fieldset
      className={`v-quest__q ${className}`.trim()}
      inert={inert ? "true" : undefined}
      {...props}
    >
      {children}
    </fieldset>
  );
}

export function QuestionnaireOptions({
  children,
  name,
  value,
  onValueChange,
  selectorShape = "leaf",
  selectorSize = "default",
  selectorIndicator = "auto",
  showSelectorIndicator = true,
  selectorTone = "pink",
  className = "",
  ...props
}) {
  return (
    <OptionsContext.Provider
      value={{
        name,
        value,
        onValueChange,
        selectorShape,
        selectorSize,
        selectorIndicator,
        showSelectorIndicator,
        selectorTone
      }}
    >
      <div
        className={`v-quest__opts ${className}`.trim()}
        role="radiogroup"
        {...props}
      >
        {children}
      </div>
    </OptionsContext.Provider>
  );
}

export function QuestionnaireOption({
  children,
  value: optionValue,
  disabled = false,
  inputProps = {},
  className = ""
}) {
  const ctx = React.useContext(OptionsContext);
  const isSelected = ctx.value === optionValue;

  const handleClick = () => {
    if (!disabled && ctx.onValueChange) {
      ctx.onValueChange(optionValue);
    }
  };

  const getToneColor = () => {
    if (ctx.selectorTone === "blue") return "var(--color-plum-900, #331A30)";
    return "var(--color-clay, #B75940)";
  };

  const getShapePath = () => {
    if (ctx.selectorShape === "organic") return organicPath;
    if (ctx.selectorShape === "rounded") return roundedPath;
    return leafPath;
  };

  return (
    <div
      role="radio"
      aria-checked={isSelected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      data-state={isSelected ? "checked" : "unchecked"}
      data-disabled={disabled || undefined}
      className={`v-quest__opt ${isSelected ? "v-quest__opt--selected" : ""} ${disabled ? "v-quest__opt--disabled" : ""} ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={(e) => {
        if ((e.key === " " || e.key === "Enter") && !disabled) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="v-quest__opt-content">
        {children}
      </div>

      {ctx.showSelectorIndicator && (
        <span
          className="v-quest__opt-indicator"
          style={{
            width: "32px",
            height: "32px",
            display: "grid",
            placeItems: "center",
            flexShrink: 0
          }}
        >
          <svg viewBox="0 0 100 100" width="30" height="30" style={{ overflow: "visible" }}>
            <motion.path
              d={getShapePath()}
              fill={isSelected ? getToneColor() : "var(--v-canvas, #FAF7F2)"}
              stroke={isSelected ? getToneColor() : "var(--border-subtle, rgba(35, 18, 33, 0.16))"}
              strokeWidth="4"
              initial={false}
              animate={{
                scale: isSelected ? [0.88, 1.08, 1] : 1
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
            <AnimatePresence>
              {isSelected && (
                <motion.path
                  d="M 28 50 L 43 65 L 72 34"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </AnimatePresence>
          </svg>
        </span>
      )}
    </div>
  );
}

export function QuestionnaireOptionBody({ children, className = "" }) {
  return (
    <div className={`v-quest__opt-body ${className}`.trim()}>
      {children}
    </div>
  );
}

export function QuestionnaireExample({
  variant = "journey",
  size = "default",
  shape = "leaf",
  indicator = "auto",
  showIndicator = true,
  customQuestions,
  onFinish
}) {
  const id = React.useId();
  const [answers, setAnswers] = React.useState(["", ""]);
  const [step, setStep] = React.useState(0);
  const [saved, setSaved] = React.useState("");
  const headings = React.useRef([]);
  const focusNext = React.useRef(false);
  const presentation =
    variant === "journey" || variant === "worksheet" ? variant : "stacked";

  const defaultQuestions = [
    {
      title: "¿Qué formato de acompañamiento necesitas?",
      hint: "Selecciona el encuadre clínico que mejor describe tu situación actual.",
      options: [
        {
          value: "pareja",
          label: "Terapia de Pareja y Vínculo",
          detail: "Para desactivar reproches circulares, recuperar la intimidad o resolver crisis a distancia.",
        },
        {
          value: "individual",
          label: "Psicoterapia Individual",
          detail: "Para ansiedad, sobrepensamiento, límites personales o adaptación cultural fuera del país.",
        },
        {
          value: "evaluar",
          label: "No lo tengo claro aún",
          detail: "Te orientamos en la primera llamada de 30 minutos sin ningún compromiso.",
        },
      ],
    },
    {
      title: "¿Desde qué zona horaria o lugar te conectarás?",
      hint: "Adaptamos las sesiones a tu jornada laboral y huso horario.",
      options: [
        {
          value: "diaspora-na",
          label: "Canadá / Estados Unidos (Montreal, Toronto, L.A., D.C.)",
          detail: "Horarios vespertinos y fines de semana disponibles.",
        },
        {
          value: "salvador",
          label: "El Salvador / Centroamérica (CST)",
          detail: "Horarios flexibles con tarifa accesible y método transparente.",
        },
        {
          value: "europa-otro",
          label: "Europa u otra región del mundo",
          detail: "Coordinación personalizada para encajar diferencias horarias.",
        },
      ],
    },
  ];

  const questions = customQuestions || defaultQuestions;
  const completed = answers.filter(Boolean).length;

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
    setAnswers(["", ""]);
    setSaved("");
    move(0);
  };

  const save = () => {
    if (completed < 2) return;
    const q1 = questions[0].options.find(o => o.value === answers[0])?.label || answers[0];
    const q2 = questions[1].options.find(o => o.value === answers[1])?.label || answers[1];
    setSaved(`Orientación lista: ${q1} · ${q2}.`);
    if (onFinish) {
      onFinish({ modality: answers[0], location: answers[1], summary: `${q1} · ${q2}` });
    }
  };

  return (
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
            <p>Evaluador confidencial (1 min)</p>
            <h3>Encuentra el camino clínico adecuado para ti.</h3>
          </div>
        </header>

        <QuestionnaireProgress value={completed} total={questions.length} />

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
                  setSaved("");
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
          {presentation === "journey" && step === 0 ? (
            <Button
              variant="secondary"
              onClick={() => move(1)}
              disabled={!answers[0]}
            >
              Siguiente pregunta
              <Icon name="arrow-right" size="sm" />
            </Button>
          ) : (
            <Button variant="accent" type="submit" disabled={completed !== 2}>
              Ver recomendación y agendar
              <Icon name="arrow-up-right" size="sm" />
            </Button>
          )}
          <Button variant="ghost" type="reset">
            Reiniciar
          </Button>
        </footer>

        <p className="v-questionnaire-example__result" role="status">
          {saved ||
            (completed === 2
              ? "Tus 2 respuestas están listas. Pulsa para ver tu encuadre recomendado."
              : `Faltan ${2 - completed} ${completed === 1 ? "pregunta" : "preguntas"}. Puedes cambiar tus respuestas.`)}
        </p>
      </Questionnaire>
    </form>
  );
}

export default function Demo() {
  return (
    <QuestionnaireExample variant="journey" shape="leaf" indicator="auto" showIndicator={true} />
  );
}
