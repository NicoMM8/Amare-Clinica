import React from 'react';

export function Marquee({
  children,
  speed = 40,
  reverse = false,
  pauseOnHover = true,
  className = '',
  style = {},
  gradient = true,
}) {
  return (
    <div
      className={`cojeev-marquee-root ${className}`}
      style={{
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        userSelect: 'none',
        gap: '24px',
        width: '100%',
        maskImage: gradient
          ? `linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)`
          : 'none',
        WebkitMaskImage: gradient
          ? `linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)`
          : 'none',
        ...style,
      }}
    >
      <div
        className="cojeev-marquee-track"
        style={{
          display: 'flex',
          flexShrink: 0,
          gap: '24px',
          alignItems: 'center',
          animation: `cojeevMarqueeScroll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {children}
      </div>

      <div
        className="cojeev-marquee-track"
        aria-hidden="true"
        style={{
          display: 'flex',
          flexShrink: 0,
          gap: '24px',
          alignItems: 'center',
          animation: `cojeevMarqueeScroll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {children}
      </div>

      <style>{`
        @keyframes cojeevMarqueeScroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(calc(-100% - 24px));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .cojeev-marquee-track {
            animation: none !important;
          }
        }
        ${pauseOnHover ? `
          .cojeev-marquee-root:hover .cojeev-marquee-track {
            animation-play-state: paused;
          }
        ` : ''}
      `}</style>
    </div>
  );
}

export default Marquee;
