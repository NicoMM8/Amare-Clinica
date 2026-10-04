import React from 'react';
import { SelectorGlyph } from './SelectorGlyph';

export function Questionnaire({ children, className = '', ...props }) {
  return (
    <div data-slot="questionnaire" className={`v-quest ${className}`} {...props}>
      {children}
    </div>
  );
}

export function QuestionnaireProgress({ value, total, label = 'Preguntas respondidas' }) {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  return (
    <div data-slot="questionnaire-progress" className="v-quest__progress">
      <b>{value} de {total}</b>
      <div className="v-quest__progress-bar" role="progressbar" aria-valuenow={value} aria-valuemax={total} aria-label={label}>
        <div className="v-quest__progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export function QuestionnaireQuestion({ children, legend, hint, className = '', ...props }) {
  return (
    <fieldset data-slot="questionnaire-question" className={`v-quest__q ${className}`} {...props}>
      {legend && <legend className="v-quest__legend">{legend}</legend>}
      {hint && <p style={{ margin: '0 0 12px', fontSize: '14.5px', color: 'var(--v-text-2)' }}>{hint}</p>}
      {children}
    </fieldset>
  );
}

export function QuestionnaireOptions({ children, className = '', ...props }) {
  return (
    <div data-slot="questionnaire-options" className={`v-quest__opts ${className}`} role="radiogroup" {...props}>
      {children}
    </div>
  );
}

export function QuestionnaireOption({
  value,
  checked,
  onChange,
  shape = 'organic',
  children,
  className = '',
  ...props
}) {
  return (
    <label
      data-slot="questionnaire-option"
      data-state={checked ? 'checked' : 'unchecked'}
      className={`v-quest__opt ${className}`}
      {...props}
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className="v-quest__opt-body">
        {children}
      </div>
      <div data-slot="questionnaire-selector" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SelectorGlyph shape={shape} state={checked} size={30} />
      </div>
    </label>
  );
}
