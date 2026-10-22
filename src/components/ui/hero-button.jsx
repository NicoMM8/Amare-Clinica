import * as React from "react";
import { motion } from "motion/react";
import { Meta } from "./typography";

export const heroButtonAppearances = [
  "organic",
  "capsule",
  "split-arrow",
  "paper-fold",
  "pressed-key",
  "ribbon",
  "ticket",
  "seal",
  "ink-sweep",
  "orbit",
  "sliding-window",
  "stacked-paper",
  "spotlight"
];

export const heroConcepts = {
  organic: {
    label: "Make something yours",
    cue: "The original living contour and coiling arrow.",
  },
  capsule: {
    label: "Take the next step",
    cue: "The same drawing arrow, inside a regular resting rim.",
  },
  "split-arrow": {
    label: "Start something",
    cue: "The arrow has its own sliding tab.",
  },
  "paper-fold": {
    label: "Sesión inicial gratuita (30 min)",
    cue: "A folded corner lifts from the paper · Confidencialidad profesional",
  },
  "pressed-key": {
    label: "Make it happen",
    cue: "A raised key settles under your pointer.",
  },
  ribbon: {
    label: "Follow your curiosity",
    cue: "A directional ribbon pulls its trailing stripes.",
  },
  ticket: {
    label: "Keep my place",
    cue: "A perforated admission ticket with a moving stub.",
  },
  seal: { label: "Made for you", cue: "An organic seal turns its inner rim." },
  "ink-sweep": {
    label: "Leave your mark",
    cue: "A stroke of ink grows behind the words.",
  },
  orbit: {
    label: "Explore an idea",
    cue: "A small satellite follows the arrow's orbit.",
  },
  "sliding-window": {
    label: "A fresh perspective",
    cue: "The words roll through a clipped window.",
  },
  "stacked-paper": {
    label: "Start a collection",
    cue: "Two offset sheets fan beneath the top page.",
  },
  spotlight: {
    label: "Find your focus",
    cue: "A quiet pool of light follows the pointer.",
  },
};

// Official 000h Cojeev arrow drawing paths
export const arrowHead = "M24 7C26 9 29 12 32 14C29 16 26 19 24 21";
export const arrowCoil = "M14 12C3 1 3 25 14 23C25 21 21 4 14 12";
export const arrowOpening = "M19 7C24 7 28 10 32 14C29 18 24 21 19 21";
export const arrowStem = "M7 14C15 14 24 14 32 14";
export const stemCoil = "M7 14C7 14 8 14 9 14";

export function LivingCoilingArrow({ hovered = false, className = "" }) {
  return (
    <span className={`v-hero-button__arrow ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 40 28" width="34" height="24" fill="none">
        <motion.path
          d={arrowStem}
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={false}
          animate={{
            d: hovered ? [arrowStem, stemCoil, arrowStem, arrowStem] : arrowStem,
            pathLength: hovered ? [1, 0.1, 0.85, 1] : 1
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d={arrowHead}
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{
            d: hovered ? [arrowHead, arrowCoil, arrowOpening, arrowHead] : arrowHead
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </span>
  );
}

export function HeroButton({
  children,
  appearance = "organic",
  shape = "organic",
  size = "default",
  variant = "clay",
  href,
  onClick,
  target,
  rel,
  className = "",
  style = {},
  disabled = false,
  type = "button",
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);

  const isPaperFold = appearance === "paper-fold";
  const isInkSweep = appearance === "ink-sweep";

  const sizeClasses = {
    sm: "v-hero-button--sm",
    default: "",
    lg: "v-hero-button--lg"
  }[size] || "";

  const effectiveVariant = (isInkSweep && variant === "clay") ? "ink" : variant;
  const variantClass = effectiveVariant === "clay" 
    ? "v-hero-button--clay" 
    : (effectiveVariant === "whatsapp" || effectiveVariant === "green") 
      ? "v-hero-button--whatsapp" 
      : "";
  const disabledClass = disabled ? "v-hero-button--disabled" : "";
  const btnClass = `v-hero-button ${variantClass} ${sizeClasses} ${disabledClass} ${className}`.trim();

  const buttonContent = (
    <>
      {/* 000h Paint layer for paper-fold lifting corner */}
      {isPaperFold && (
        <span className="v-hero-button__paint" aria-hidden="true">
          <i className="v-paper-fold-flap" />
          <i className="v-paper-fold-shadow" />
        </span>
      )}

      <span className="v-hero-button__window">
        <span className="v-hero-button__label">{children}</span>
      </span>

      {/* 000h living coiling arrow with motion path morph */}
      <LivingCoilingArrow hovered={!disabled && hovered} />
    </>
  );

  const combinedStyle = {
    ...style,
    borderRadius: 'var(--r-pill, 999px)'
  };

  if (href) {
    const isExternal = href.startsWith('http');
    const effectiveRel = rel || (isExternal ? "nofollow noopener noreferrer" : undefined);
    return (
      <a
        href={disabled ? undefined : href}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={effectiveRel}
        data-hero-appearance={appearance}
        data-hero-shape={shape}
        aria-disabled={disabled || undefined}
        className={btnClass}
        style={combinedStyle}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        onMouseEnter={() => !disabled && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...rest}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      data-hero-appearance={appearance}
      data-hero-shape={shape}
      className={btnClass}
      style={combinedStyle}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...rest}
    >
      {buttonContent}
    </button>
  );
}

export function HeroButtonExample({
  variant = "organic",
  size = "default",
  compact,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  customLabel,
  customCue,
  onClick
}) {
  const [count, setCount] = React.useState(0);
  const appearance = heroButtonAppearances.includes(variant)
    ? variant
    : "organic";
  const concept = heroConcepts[variant] ?? heroConcepts.organic;
  
  const label = customLabel || concept.label;
  const cue = customCue || concept.cue;

  const handleClick = (e) => {
    setCount((n) => n + 1);
    if (onClick) onClick(e);
  };

  return (
    <div className="v-hero-demo" data-compact={compact || undefined}>
      <HeroButton
        appearance={appearance}
        shape={variant === "capsule" ? "capsule" : "organic"}
        size={size === "sm" ? "sm" : size === "lg" ? "lg" : "default"}
        variant="clay"
        href={href}
        target={target}
        rel={rel}
        onClick={handleClick}
      >
        {label}
      </HeroButton>
      <Meta>{cue}</Meta>
      <Meta role="status" aria-live="polite">
        {count
          ? `${count} ${count === 1 ? "local action" : "local actions"}.`
          : "Hover, focus or activate to try it."}
      </Meta>
    </div>
  );
}

export default function Demo() {
  return (
    <HeroButtonExample variant="organic" />
  );
}
