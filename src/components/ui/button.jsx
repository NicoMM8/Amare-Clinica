import React from 'react';

export function Button({
  children,
  variant = 'default', // 'ghost' | 'secondary' | 'accent' | 'default'
  size = 'default',    // 'sm' | 'default' | 'lg'
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  style = {},
  ...props
}) {
  const baseClass = 'v-button';
  const variantClass = `v-button--${variant}`;
  const sizeClass = size !== 'default' ? `v-button--${size}` : '';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
