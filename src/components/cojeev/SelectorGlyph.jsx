import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Authentic 000h SelectorGlyph shapes from 000h by Cojeev
const organicPath = "M 91 50 C 91 65 78 85 58 89 C 38 93 18 80 12 60 C 6 40 18 18 38 12 C 58 6 91 35 91 50 Z";
const pebblePath = "M 88 50 C 88 71 70 88 50 88 C 29 88 12 70 12 48 C 12 28 30 12 52 12 C 72 12 88 29 88 50 Z";

export function SelectorGlyph({
  shape = 'organic',
  tone = 'pink',
  state = false,
  size = 28
}) {
  const active = Boolean(state);
  const fill = active ? 'var(--v-pink)' : 'var(--v-canvas)';
  const stroke = active ? 'var(--v-pink)' : 'var(--v-edge)';

  return (
    <span
      data-slot="selector-glyph"
      style={{
        display: 'inline-grid',
        placeItems: 'center',
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
        position: 'relative'
      }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        style={{ overflow: 'visible', display: 'block' }}
      >
        {/* 000h Organic contour path */}
        <motion.path
          d={shape === 'pebble' ? pebblePath : organicPath}
          fill={fill}
          stroke={stroke}
          strokeWidth="3.5"
          initial={false}
          animate={{
            scale: active ? [0.85, 1.08, 1] : 1,
            fill: fill,
            stroke: stroke
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* 000h Checked Mark inside the organic contour */}
        <AnimatePresence>
          {active && (
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
      </motion.svg>
    </span>
  );
}
