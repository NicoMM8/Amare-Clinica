"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./button";
import { Icon } from "./icon";

// Shape paths for the Cojeev SelectorGlyph
const leafPath = "M 50 10 C 78 10 92 36 88 64 C 84 82 66 90 50 90 C 34 90 16 82 12 64 C 8 36 22 10 50 10 Z";
const organicPath = "M 91 50 C 91 65 78 85 58 89 C 38 93 18 80 12 60 C 6 40 18 18 38 12 C 58 6 91 35 91 50 Z";
const roundedPath = "M 88 50 C 88 71 70 88 50 88 C 29 88 12 70 12 48 C 12 28 30 12 52 12 C 72 12 88 29 88 50 Z";
const circlePath = "M 50 12 C 71 12 88 29 88 50 C 88 71 71 88 50 88 C 29 88 12 71 12 50 C 12 29 29 12 50 12 Z";
const pebblePath = "M 46 12 C 74 10 92 28 89 54 C 86 78 68 88 44 88 C 22 88 10 74 12 50 C 14 26 24 14 46 12 Z";
const flowerPath = "M 50 16 C 54 26 62 26 72 20 C 78 28 74 36 82 44 C 74 52 78 60 72 68 C 62 62 54 62 50 72 C 46 62 38 62 28 68 C 22 60 26 52 18 44 C 26 36 22 28 28 20 C 38 26 46 26 50 16 Z";

const getShapePath = (shapeName) => {
  switch (shapeName) {
    case "organic": return organicPath;
    case "rounded": return roundedPath;
    case "circle": return circlePath;
    case "pebble": return pebblePath;
    case "flower": return flowerPath;
    case "leaf":
    default:
      return organicPath;
  }
};

const getToneColor = (toneName) => {
  if (toneName === "blue" || toneName === "ink") return "var(--color-plum-900, #22284A)";
  if (toneName === "olive") return "var(--color-moss, #768B78)";
  if (toneName === "yellow") return "var(--color-gold, #D4A373)";
  return "var(--color-clay, #AA5A40)";
};

// Context for QuestionnaireOptions
const OptionsContext = React.createContext({
  name: "",
  value: "",
  onValueChange: () => {},
  selectorShape: "organic",
  selectorSize: "default",
  selectorIndicator: "flower",
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

export function QuestionnaireProgress({ value, total, label = "Preguntas respondidas", className = "" }) {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className={`v-quest__progress ${className}`.trim()} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={total} aria-label={label}>
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
  selectorShape = "organic",
  selectorSize = "default",
  selectorIndicator = "flower",
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
        data-tone={selectorTone}
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
  selectorShape,
  selectorTone,
  selectorSize,
  selectorIndicator,
  showSelectorIndicator,
  inputProps = {},
  className = ""
}) {
  const ctx = React.useContext(OptionsContext);
  const isSelected = ctx.value === optionValue;
  const shape = selectorShape || ctx.selectorShape || "organic";
  const tone = selectorTone || ctx.selectorTone || "pink";
  const size = selectorSize || ctx.selectorSize || "default";
  const indicator = selectorIndicator || ctx.selectorIndicator || "flower";
  const showIndicator = showSelectorIndicator !== undefined ? showSelectorIndicator : (ctx.showSelectorIndicator !== false);
  const sizePx = size === "sm" ? 26 : size === "lg" ? 38 : 32;

  const handleClick = () => {
    if (!disabled && ctx.onValueChange) {
      ctx.onValueChange(optionValue);
    }
  };

  const renderIndicatorGlyph = () => {
    if (indicator === "flower") {
      return (
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
          <circle cx="50" cy="35" r="5" fill="#FFFFFF" />
          <circle cx="50" cy="65" r="5" fill="#FFFFFF" />
          <circle cx="35" cy="50" r="5" fill="#FFFFFF" />
          <circle cx="65" cy="50" r="5" fill="#FFFFFF" />
        </motion.g>
      );
    }
    if (indicator === "dot") {
      return (
        <motion.circle
          cx="50"
          cy="50"
          r="9"
          fill="#FFFFFF"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      );
    }
    if (indicator === "diamond") {
      return (
        <motion.path
          d="M 50 30 L 70 50 L 50 70 L 30 50 Z"
          fill="#FFFFFF"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        />
      );
    }
    // checkmark or auto
    return (
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
    );
  };

  return (
    <div
      role="radio"
      aria-checked={isSelected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      data-state={isSelected ? "checked" : "unchecked"}
      data-disabled={disabled || undefined}
      data-tone={tone}
      className={`v-quest__opt ${isSelected ? "v-quest__opt--selected" : ""} ${disabled ? "v-quest__opt--disabled" : ""} ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={(e) => {
        if ((e.key === " " || e.key === "Enter") && !disabled) {
          e.preventDefault();
          handleClick();
        }
      }}
      style={{
        "--selector-size": `${sizePx}px`,
      }}
    >
      <input
        type="radio"
        name={ctx.name}
        value={optionValue}
        checked={isSelected}
        onChange={() => {}}
        disabled={disabled}
        tabIndex={-1}
        aria-hidden="true"
        {...inputProps}
      />
      <div className="v-quest__opt-content">
        {children}
      </div>

      {showIndicator && (
        <span
          className="v-quest__opt-indicator"
          style={{
            width: `${sizePx}px`,
            height: `${sizePx}px`,
            display: "grid",
            placeItems: "center",
            flexShrink: 0
          }}
        >
          <svg viewBox="0 0 100 100" width={sizePx} height={sizePx} style={{ overflow: "visible" }}>
            <motion.path
              d={getShapePath(shape)}
              fill={isSelected ? getToneColor(tone) : "var(--v-canvas, #FAF7F2)"}
              stroke={isSelected ? getToneColor(tone) : "var(--border-subtle, rgba(35, 18, 33, 0.16))"}
              strokeWidth="4"
              initial={false}
              animate={{
                scale: isSelected ? [0.88, 1.08, 1] : 1
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
            <AnimatePresence>
              {isSelected && renderIndicatorGlyph()}
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
