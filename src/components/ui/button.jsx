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
  withHeart = true,
  ...props
}) {
  const baseClass = 'v-button';
  const variantClass = `v-button--${variant}`;
  const sizeClass = size !== 'default' ? `v-button--${size}` : '';

  const showHeart = withHeart && variant !== 'ghost' && !disabled;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()}
      style={style}
      {...props}
    >
      <span className="v-button__content">{children}</span>
      {showHeart && (
        <span className="v-heart-sprout" aria-hidden="true">
          <svg className="v-heart-sprout__svg v-heart-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg className="v-heart-sprout__svg v-heart-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
      )}
    </button>
  );
}

export default Button;
