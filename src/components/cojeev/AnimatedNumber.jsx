import React, { useEffect, useRef, useState } from 'react';

export function AnimatedNumber({
  value,
  duration = 1.2,
  prefix = '',
  suffix = '',
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();
          const start = 0;
          const end = Number(value);
          if (isNaN(end)) return;
          const startTime = performance.now();
          const animDuration = duration * 1000;

          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / animDuration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(start + (end - start) * ease));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(end);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

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
