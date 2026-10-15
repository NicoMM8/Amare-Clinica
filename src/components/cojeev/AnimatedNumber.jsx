import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

export function AnimatedNumber({
  value,
  duration = 1.6,
  prefix = '',
  suffix = '',
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  
  // Start with the target value so SSR / SSG / SEO / no-JS pre-renders the real numbers (9+, 30 min, $25)
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 28,
    stiffness: 75,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      motionValue.set(0);
      motionValue.set(value);
    }
  }, [isInView, value, motionValue, hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue, hasAnimated]);

  return (
    <span
      ref={ref}
      className={`cojeev-animated-number ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        fontVariantNumeric: 'tabular-nums',
        fontWeight: 700,
        ...style,
      }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default AnimatedNumber;
