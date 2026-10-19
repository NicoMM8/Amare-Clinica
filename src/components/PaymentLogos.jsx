import React from 'react';

/**
 * Authentic SVG Vector Logos for Payment Methods
 * Displays real Visa, Mastercard, Stripe, PayPal, Zelle and Bitcoin badges.
 */

export function VisaLogo({ height = 14, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 50 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Visa"
      style={{ display: 'block' }}
    >
      <path 
        d="M19.8 0.5L13.1 15.5H8.7L5.3 3.7C5.1 3 4.9 2.7 4.3 2.4C3.3 1.9 1.6 1.5 0.1 1.2L0.2 0.5H7.3C8.2 0.5 9 1.1 9.2 2.1L11 11.2L15.3 0.5H19.8ZM36.7 10.6C36.7 6.6 31 6.3 31 4.5C31 4 31.5 3.4 32.7 3.3C33.3 3.2 34.9 3.1 36.7 4L37.4 0.7C36.4 0.3 35.1 0 33.5 0C29.5 0 26.7 2.1 26.7 5.1C26.6 7.4 28.7 8.6 30.2 9.3C31.8 10.1 32.3 10.6 32.3 11.2C32.3 12.3 31 12.7 29.8 12.7C27.7 12.8 26.5 12.2 25.5 11.8L24.8 15.2C25.8 15.7 27.6 16 29.5 16C33.7 16 36.7 13.9 36.7 10.6ZM47.4 15.5H50L47.7 0.5H44.4C43.6 0.5 43 0.9 42.7 1.6L36.5 15.5H40.8L41.7 13.2H46.9L47.4 15.5ZM42.8 10.1L45 4.3L46.2 10.1H42.8ZM25.5 0.5L22.2 15.5H18.1L21.4 0.5H25.5Z" 
        fill="#1434CB" 
      />
    </svg>
  );
}

export function MastercardLogo({ height = 18, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 32 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mastercard"
      style={{ display: 'block' }}
    >
      <circle cx="11" cy="10" r="8" fill="#EB001B" />
      <circle cx="21" cy="10" r="8" fill="#F79E1B" />
      <path 
        d="M16 4.4a8 8 0 0 1 2.8 5.6A8 8 0 0 1 16 15.6 8 8 0 0 1 13.2 10 8 8 0 0 1 16 4.4z" 
        fill="#FF5F00" 
      />
    </svg>
  );
}

export function StripeLogo({ height = 16, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 44 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stripe"
      style={{ display: 'block' }}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M42.88 9.53c0-3.66-1.84-5.36-4.9-5.36-3.87 0-6.19 3.01-6.19 6.8 0 4.45 2.76 6.78 6.57 6.78 1.86 0 3.26-.41 4.32-1.02v-2.81c-1.06.56-2.22.86-3.67.86-1.46 0-2.73-.55-2.92-2.31h6.74c.03-.3.05-.66.05-.94zm-6.8-1.08c0-1.54.91-2.2 2.05-2.2 1.11 0 1.94.66 1.94 2.2h-3.99zM26.4 4.42c-1.39 0-2.3.65-2.82 1.11l-.19-.88h-3.41v16.98l3.78-.8.02-3.89c.53.42 1.34.95 2.58.95 2.87 0 5.4-2.33 5.4-6.85.01-4.32-2.58-6.52-5.36-6.52zm-.86 9.87c-1.15 0-1.84-.44-2.24-.87l-.02-5.26c.44-.48 1.15-.93 2.26-.93 1.74 0 2.83 1.57 2.83 3.53 0 2.02-1.09 3.53-2.83 3.53zM15.44 3.09l3.79-.81V.42l-3.79.8v1.87zm0 1.33h3.79v12.96h-3.79V4.42zm-5.37.07c-1.14 0-1.92.51-2.42 1.25l-.17-1.07H4.07v12.96h3.76V9.45c0-1.82 1.25-2.54 2.37-2.54.4 0 .76.06 1.04.16V4.49h-1.17zm-6.2 3.86C2.69 7.74 1.8 7.42 1.8 6.75c0-.52.54-.88 1.4-.88 1.23 0 2.78.38 4 .99V4.11C5.89 3.65 4.54 3.42 3.19 3.42 1.16 3.42 0 4.51 0 6.64c0 3.32 4.14 2.83 4.14 4.51 0 .61-.63.97-1.54.97-1.4 0-3.15-.57-4.43-1.28v2.79c1.46.61 2.96.88 4.38.88 2.1 0 3.38-1.03 3.38-3.17 0-3.48-4.1-2.91-4.1-4.69z" 
        fill="#635BFF" 
      />
    </svg>
  );
}

export function PayPalLogo({ height = 17, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 18 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PayPal"
      style={{ display: 'block' }}
    >
      <path 
        d="M14.8 5.6C14.4 8.1 12.7 9.9 10 9.9H7.4L6.2 17.5H2l2.5-16h5.8c2.3 0 3.8 1.3 3.5 4.1z" 
        fill="#003087" 
      />
      <path 
        d="M16.1 3.9C15.6 7.2 13.3 9.4 9.9 9.4H7.6L6.2 18.2H9.4l.8-5.1h1.3c3.2 0 5.5-2.1 6-5.6.3-1.4.1-2.6-.4-3.6z" 
        fill="#0079C1" 
      />
      <path 
        d="M9.9 9.4c-.3 0-.5 0-.8.1l-.7 4.7h1.3c3.2 0 5.5-2.1 6-5.6.1-.7.1-1.3-.1-1.9-.9 1.7-2.9 2.7-5.7 2.7z" 
        fill="#001C64" 
      />
    </svg>
  );
}

export function ZelleLogo({ height = 16, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zelle"
      style={{ display: 'block' }}
    >
      <rect width="20" height="20" rx="4" fill="#7414CA" />
      <path 
        d="M5.5 6.5h7.2l-4.8 7h5" 
        stroke="#FFFFFF" 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path d="M10 4.5v1.5M10 14v1.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BitcoinLogo({ height = 17, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bitcoin"
      style={{ display: 'block' }}
    >
      <circle cx="10" cy="10" r="10" fill="#F7931A" />
      <path 
        d="M12.4 8.5c.3-.7.1-1.5-.4-1.8-.5-.4-1.3-.5-2.2-.4V5h-.8v1.2h-.6V5h-.8v1.3H6.2v1h.6c.3 0 .4.2.4.4v4.7c0 .2-.1.4-.4.4h-.6v1h1.3v1.3h.8v-1.3h.6v1.3h.8v-1.3c1.5 0 2.5-.4 2.9-1.5.4-.8.1-1.6-.5-2 .7-.4 1-1 .8-1.7zm-2.9-1.4c.6 0 1.4.1 1.4.8 0 .7-.7.8-1.3.8H8.6V7.1h.9zm.4 4.3c-.7 0-1.6.1-1.6.8 0 .8.8.9 1.5.9h1c.7 0 1.5-.1 1.5-.9 0-.8-.8-.8-1.5-.8h-.9z" 
        fill="#FFFFFF" 
      />
    </svg>
  );
}

/**
 * Reusable Payment Badges strip showcasing authentic logos
 */
export function PaymentMethodBadges({ compact = false }) {
  const items = [
    { name: "Visa", icon: <VisaLogo height={compact ? 12 : 14} /> },
    { name: "Mastercard", icon: <MastercardLogo height={compact ? 15 : 18} /> },
    { name: "Stripe", icon: <StripeLogo height={compact ? 13 : 15} /> },
    { 
      name: "PayPal", 
      icon: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <PayPalLogo height={compact ? 14 : 16} />
          <span style={{ fontSize: compact ? '11px' : '11.5px', fontWeight: 700, color: '#003087', letterSpacing: '-0.02em' }}>
            PayPal
          </span>
        </span>
      ) 
    },
    { 
      name: "Zelle", 
      icon: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <ZelleLogo height={compact ? 13 : 15} />
          <span style={{ fontSize: compact ? '11px' : '11.5px', fontWeight: 700, color: '#7414CA', letterSpacing: '-0.01em' }}>
            Zelle
          </span>
        </span>
      ) 
    },
    { 
      name: "Bitcoin", 
      icon: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <BitcoinLogo height={compact ? 13 : 15} />
          <span style={{ fontSize: compact ? '11px' : '11.5px', fontWeight: 700, color: '#D97706', letterSpacing: '-0.01em' }}>
            Bitcoin / Chivo
          </span>
        </span>
      ) 
    },
  ];

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: compact ? '6px' : '8px', 
        flexWrap: 'wrap' 
      }}
    >
      {items.map((item) => (
        <div
          key={item.name}
          title={`Aceptamos ${item.name}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(34, 40, 74, 0.12)',
            padding: compact ? '4px 8px' : '5px 10px',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(34, 40, 74, 0.05)',
            height: compact ? '28px' : '32px',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
          }}
          className="payment-badge-pill"
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default PaymentMethodBadges;
