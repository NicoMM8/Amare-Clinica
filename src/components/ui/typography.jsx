import React from 'react';

export function Meta({ children, className = '', role, 'aria-live': ariaLive, ...props }) {
  return (
    <span 
      className={`v-meta ${className}`}
      role={role}
      aria-live={ariaLive}
      style={{
        display: 'block',
        fontSize: '12px',
        color: 'var(--v-text-3, #8C8287)',
        letterSpacing: '0.01em',
        lineHeight: 1.4,
        marginTop: '6px',
        transition: 'color 0.2s ease',
        ...props.style
      }}
      {...props}
    >
      {children}
    </span>
  );
}

export default Meta;
