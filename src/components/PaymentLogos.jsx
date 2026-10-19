import React from 'react';

/**
 * Authentic SVG Vector Logos for Payment Methods
 * Displays real Visa, Mastercard, Stripe, PayPal, Zelle and Bitcoin / Chivo badges
 * with pixel-perfect official geometry and symmetrical 3x2 grid layout.
 */

export function VisaLogo({ height = 15, className = "" }) {
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

export function MastercardLogo({ height = 15, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 34 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mastercard"
      style={{ display: 'block' }}
    >
      <circle cx="11" cy="10" r="8" fill="#EB001B" />
      <circle cx="23" cy="10" r="8" fill="#F79E1B" />
      <path 
        d="M17 4.35a8 8 0 0 1 2.85 5.65A8 8 0 0 1 17 15.65 8 8 0 0 1 14.15 10 8 8 0 0 1 17 4.35z" 
        fill="#FF5F00" 
      />
    </svg>
  );
}

/**
 * Official Stripe full vector wordmark
 */
export function StripeLogo({ height = 14, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 512 214" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stripe"
      style={{ display: 'block' }}
    >
      <path 
        fill="#635BFF" 
        d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774"
      />
    </svg>
  );
}

export function PayPalLogo({ height = 15, className = "" }) {
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

export function ZelleLogo({ height = 14, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zelle"
      style={{ display: 'block' }}
    >
      <path 
        fill="#7414CA" 
        d="M13.559 24h-2.841a.483.483 0 0 1-.483-.483v-2.765H5.638a.667.667 0 0 1-.666-.666v-2.234a.67.67 0 0 1 .142-.412l8.139-10.382h-7.25a.667.667 0 0 1-.667-.667V3.914c0-.367.299-.666.666-.666h4.23V.483c0-.266.217-.483.483-.483h2.841c.266 0 .483.217.483.483v2.765h4.323c.367 0 .666.299.666.666v2.137a.67.67 0 0 1-.142.412L9.403 16.19h7.25a.667.667 0 0 1 .667.667v2.234c0 .367-.299.666-.666.666h-4.23v2.765c0 .266-.217.483-.483.483z" 
      />
    </svg>
  );
}

export function BitcoinLogo({ height = 15, className = "" }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bitcoin"
      style={{ display: 'block' }}
    >
      <path 
        fill="#F7931A" 
        d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.065-.25l.525-2.14-1.315-.33-.54 2.153c-.28-.067-.565-.13-.85-.192l.005-.007-1.85-.462-.357 1.434s.997.228.977.242c.545.135.643.495.627.78l-.628 2.527c.038.01.088.025.142.047l-.145-.036-0.88 3.535c-.067.165-.238.413-.625.317.025.037-.977-.242-.977-.242l-.67 1.545 1.745.435c.325.08.645.165.96.248l-.54 2.19 1.315.33.54-2.17c.36.095.71.185 1.058.27l-.54 2.17 1.315.33.545-2.19c2.24.424 3.924.25 4.634-1.782.57-1.607-.028-2.533-1.19-3.133.847-.195 1.485-.75 1.655-1.9zm-2.96 4.155c-.4 1.61-3.102.74-3.975.524l.71-2.855c.873.218 3.693.645 3.265 2.331zm.402-4.178c-.365 1.47-2.61.724-3.336.544l.644-2.59c.726.18 3.097.532 2.692 2.046z"
      />
    </svg>
  );
}

/**
 * Reusable Payment Badges strip showcasing authentic logos in a balanced 3x2 grid.
 */
export function PaymentMethodBadges({ compact = false }) {
  const items = [
    { 
      name: "Visa", 
      title: "Tarjetas Visa (débito y crédito)",
      content: <VisaLogo height={compact ? 13 : 15} /> 
    },
    { 
      name: "Mastercard", 
      title: "Tarjetas Mastercard (débito y crédito)",
      content: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <MastercardLogo height={compact ? 13 : 15} />
          <span style={{ fontSize: compact ? '10px' : '11px', fontWeight: 700, color: '#1E293B', letterSpacing: '-0.02em' }}>
            mastercard
          </span>
        </span>
      ) 
    },
    { 
      name: "Stripe", 
      title: "Procesamiento seguro con Stripe (cobro internacional)",
      content: <StripeLogo height={compact ? 12 : 14} /> 
    },
    { 
      name: "PayPal", 
      title: "Pagos y transferencias por PayPal",
      content: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <PayPalLogo height={compact ? 13 : 15} />
          <span style={{ fontSize: compact ? '10px' : '11px', fontWeight: 700, color: '#003087', letterSpacing: '-0.02em' }}>
            PayPal
          </span>
        </span>
      ) 
    },
    { 
      name: "Zelle", 
      title: "Transferencias directas por Zelle (EE. UU.)",
      content: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <ZelleLogo height={compact ? 12 : 14} />
          <span style={{ fontSize: compact ? '10px' : '11px', fontWeight: 700, color: '#7414CA', letterSpacing: '-0.01em' }}>
            zelle
          </span>
        </span>
      ) 
    },
    { 
      name: "Bitcoin / Chivo", 
      title: "Bitcoin y Chivo Wallet (sin comisiones)",
      content: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <BitcoinLogo height={compact ? 13 : 15} />
          <span style={{ fontSize: compact ? '10px' : '11px', fontWeight: 600, color: '#D97706', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
            Bitcoin · Chivo
          </span>
        </span>
      ) 
    },
  ];

  return (
    <div 
      className="payment-badges-grid"
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: compact ? '6px' : '8px', 
        width: '100%',
      }}
    >
      {items.map((item) => (
        <div
          key={item.name}
          title={item.title}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(34, 40, 74, 0.12)',
            padding: compact ? '4px 6px' : '6px 8px',
            borderRadius: '8px',
            boxShadow: '0 1px 2px rgba(34, 40, 74, 0.04)',
            height: compact ? '30px' : '34px',
            transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease, border-color 0.18s ease',
            cursor: 'default',
          }}
          className="payment-badge-pill"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}

export default PaymentMethodBadges;
