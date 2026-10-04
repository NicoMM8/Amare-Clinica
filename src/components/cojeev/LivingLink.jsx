import React, { useState } from 'react';
import { motion } from 'motion/react';

export function LivingLink({
  href,
  children,
  direction = 'up-right',
  tone = 'clay',
  className = '',
  target,
  rel,
  style = {}
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`v-living-link ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: tone === 'clay' ? 'var(--v-pink)' : 'var(--v-text)',
        textDecoration: 'none',
        fontWeight: 600,
        position: 'relative',
        cursor: 'pointer',
        ...style
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ position: 'relative', paddingBottom: '3px' }}>
        {children}
        {/* Hand-drawn organic SVG ink underline from 000h */}
        <svg
          viewBox="0 0 120 12"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '100%',
            height: '6px',
            overflow: 'visible',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        >
          <motion.path
            d="M2 8 C 22 3, 37 11, 58 7 S 94 9, 118 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={{ pathLength: 0.35, opacity: 0.4 }}
            animate={{
              pathLength: hovered ? 1 : 0.35,
              opacity: hovered ? 1 : 0.4
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </span>

      {/* 000h Animated Directional Arrow */}
      <span style={{ display: 'inline-flex', width: '16px', height: '16px', overflow: 'hidden' }}>
        <motion.svg
          viewBox="0 0 20 20"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            x: hovered ? 2 : 0,
            y: hovered ? -2 : 0
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <path d="M5 15 L 15 5 M 6 5 H 15 V 14" />
        </motion.svg>
      </span>
    </a>
  );
}
