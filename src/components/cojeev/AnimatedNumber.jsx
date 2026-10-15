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
  const [displayValue, setDisplayValue] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 28,
    stiffness: 75,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

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
      {isInView ? displayValue : 0}
      {suffix}
    </span>
  );
}

export default AnimatedNumber;
