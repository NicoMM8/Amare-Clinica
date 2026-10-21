import * as React from "react";
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
const arrowHead = "M24 7C26 9 29 12 32 14C29 16 26 19 24 21";
const arrowCoil = "M14 12C3 1 3 25 14 23C25 21 21 4 14 12";
const arrowOpening = "M19 7C24 7 28 10 32 14C29 18 24 21 19 21";
const arrowStem = "M7 14C15 14 24 14 32 14";
const stemCoil = "M7 14C7 14 8 14 9 14";

export function HeroButton({
  children,
  appearance = "paper-fold",
  shape = "organic",
  size = "default",
  variant = "clay",
  href,
  onClick,
  target,
  rel,
  className = "",
  style = {}
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
  const btnClass = `v-hero-button ${variantClass} ${sizeClasses} ${className}`.trim();

  const buttonContent = (
    <>
      {/* 000h Paint layer for paper-fold lifting corner */}
      <span className="v-hero-button__paint" aria-hidden="true">
        <i className="v-paper-fold-flap" />
        <i className="v-paper-fold-shadow" />
      </span>

      <span className="v-hero-button__window">
        <span className="v-hero-button__label">{children}</span>
        <span className="v-hero-button__label v-hero-button__label--clone" aria-hidden="true">{children}</span>
      </span>

      {/* 000h living coiling arrow */}
      <span className="v-hero-button__arrow" aria-hidden="true">
        <svg viewBox="0 0 40 28" width="34" height="24" fill="none">
          <path
            d={arrowStem}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d={arrowHead}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* 000h floating heart sprout on hover */}
      <span className="v-heart-sprout" aria-hidden="true">
        <svg className="v-heart-sprout__svg v-heart-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg className="v-heart-sprout__svg v-heart-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </span>
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
        href={href}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={effectiveRel}
        data-hero-appearance={appearance}
        data-hero-shape={shape}
        className={btnClass}
        style={combinedStyle}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      data-hero-appearance={appearance}
      data-hero-shape={shape}
      className={btnClass}
      style={combinedStyle}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {buttonContent}
    </button>
  );
}

export function HeroButtonExample({
  variant = "paper-fold",
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
    : "paper-fold";
  const concept = heroConcepts[variant] ?? heroConcepts["paper-fold"];
  
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
    </div>
  );
}

export default function Demo() {
  return (
    <HeroButtonExample variant="paper-fold" />
  );
}
