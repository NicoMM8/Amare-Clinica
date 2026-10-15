import React from 'react';
import { Marquee } from './Marquee';
import { ShieldCheck, Video, Heart, Globe, Sparkles, Clock, CheckCircle } from 'lucide-react';

const marqueeItems = [
  { icon: Globe, text: "San Salvador · Montreal · Los Ángeles · Houston · Madrid" },
  { icon: Video, text: "100% Online vía Google Meet Cifrado" },
  { icon: ShieldCheck, text: "Respaldo Clínico Oficial · Registro JVPP El Salvador" },
  { icon: Heart, text: "Terapia de Pareja y Sexología Clínica" },
  { icon: Sparkles, text: "1ª conversación (30 min sin costo)" },
  { icon: Clock, text: "Plan mensual sin permanencia ($100 USD / mes)" },
  { icon: CheckCircle, text: "Sin traducir tus emociones ni justificar tus raíces" },
];

export function CityMarquee() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--v-border, rgba(35, 18, 33, 0.08))',
        borderBottom: '1px solid var(--v-border, rgba(35, 18, 33, 0.08))',
        background: 'var(--v-canvas, #FAF7F2)',
        padding: '16px 0',
        overflow: 'hidden',
      }}
    >
      <Marquee speed={35} pauseOnHover={true}>
        {marqueeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--r-pill, 999px)',
                background: 'var(--v-paper, #FFFFFF)',
                border: '1px solid var(--v-border, rgba(35, 18, 33, 0.09))',
                boxShadow: '0 1px 3px rgba(35, 18, 33, 0.03)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--v-text, #1C1819)',
                whiteSpace: 'nowrap',
              }}
            >
              <Icon size={14} style={{ color: 'var(--color-clay, #B75940)' }} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default CityMarquee;
