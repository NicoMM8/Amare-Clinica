import React, { useState } from 'react';
import { LivingCoilingArrow } from './hero-button';

export function Button({
  children,
  variant = 'default', // 'ghost' | 'secondary' | 'accent' | 'default'
  size = 'default',    // 'sm' | 'default' | 'lg'
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  style = {},
  withArrow = false,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const baseClass = 'v-button';
  const variantClass = `v-button--${variant}`;
  const sizeClass = size !== 'default' ? `v-button--${size}` : '';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()}
      style={style}
      {...props}
    >
      <span className="v-button__content">{children}</span>
      {withArrow && <LivingCoilingArrow hovered={hovered} />}
    </button>
  );
}

export default Button;
