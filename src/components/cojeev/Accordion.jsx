import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              background: 'var(--v-paper, #FFFFFF)',
              border: `1.5px solid ${isOpen ? 'var(--color-clay-text, #8B3822)' : 'var(--v-border, rgba(35, 18, 33, 0.08))'}`,
              borderRadius: '18px',
              overflow: 'hidden',
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
              boxShadow: isOpen
                ? '0 6px 20px rgba(139, 56, 34, 0.08)'
                : '0 1px 3px rgba(35, 18, 33, 0.02)',
            }}
          >
            <button
              id={`accordion-button-${idx}`}
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${idx}`}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                padding: '20px 24px',
                background: isOpen ? 'var(--v-pink-soft, #F9ECE8)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.2s ease',
              }}
            >
              <span
                style={{
                  fontSize: '16.5px',
                  fontWeight: 600,
                  color: isOpen ? 'var(--color-clay-text, #8B3822)' : 'var(--v-text, #1C1819)',
                  lineHeight: 1.35,
                  transition: 'color 0.2s ease',
                }}
              >
                {item.title}
              </span>

              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isOpen ? 'rgba(139, 56, 34, 0.15)' : 'var(--v-beige, #F4ECE4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: isOpen ? 'var(--color-clay-text, #8B3822)' : 'var(--v-text-2, #5D5458)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            <div
              id={`accordion-body-${idx}`}
              role="region"
              aria-labelledby={`accordion-button-${idx}`}
              style={{
                display: isOpen ? 'block' : 'none',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  padding: '16px 24px 22px',
                  fontSize: '15px',
                  lineHeight: 1.68,
                  color: 'var(--v-text-2, #5D5458)',
                }}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
