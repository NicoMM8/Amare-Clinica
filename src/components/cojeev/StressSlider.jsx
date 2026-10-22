import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { HeroButton } from './HeroButton';

export function StressSlider() {
  const [value, setValue] = useState(65);

  const getDiagnosis = (val) => {
    if (val < 35) {
      return {
        level: "Tensión leve / Fase preventiva",
        color: "var(--v-olive)",
        bg: "var(--v-olive-soft)",
        desc: "Notas pequeñas fricciones en la comunicación o días de sobrecarga mental. Es el mejor momento para adquirir herramientas preventivas antes de que se convierta en distancia afectiva.",
        recommended: "Taller breve de comunicación / Encuadre inicial"
      };
    } else if (val < 75) {
      return {
        level: "Desgaste moderado / Bucle repetitivo",
        color: "var(--v-pink)",
        bg: "var(--v-pink-soft)",
        desc: "Cualquier conversación tiende a terminar en reproche, o sientes que tu mente no descansa ni al dormir. El patrón está consolidado y requiere desmantelar la rumiación con base científica.",
        recommended: "Terapia Integral de Parejas o TCC Individual"
      };
    } else {
      return {
        level: "Sobrecarga aguda / Crisis de desconexión",
        color: "#96422C",
        bg: "#F9ECE8",
        desc: "Sensación de insomnio, pecho apretado o convivir como extraños bajo el mismo techo. Se necesita contención clínica prioritaria para calmar el sistema nervioso y recuperar el rumbo.",
        recommended: "Sesión inicial prioritaria de 30 minutos"
      };
    }
  };

  const current = getDiagnosis(value);
  const whatsappUrl = `/chat?text=${encodeURIComponent(`Hola, usé el termómetro clínico en la web (nivel de tensión: ${value}% - ${current.level}). Quisiera agendar mi sesión inicial gratuita de 30 min.`)}`;

  return (
    <div style={{
      background: 'var(--v-paper)',
      border: '1.5px solid var(--v-border)',
      borderRadius: '24px',
      padding: '36px',
      boxShadow: 'var(--shadow-md)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <span style={{ 
            fontSize: '11.5px', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '0.07em', 
            color: 'var(--v-pink)',
            background: 'var(--v-pink-soft)',
            padding: '4px 10px',
            borderRadius: 'var(--r-pill)',
            display: 'inline-block',
            marginBottom: '6px'
          }}>
            Herramienta Interactiva · Auto-Calibración
          </span>
          <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--v-text)', margin: 0 }}>
            Termómetro de Desgaste Emocional y Pareja
          </h3>
        </div>

        <div style={{ 
          fontSize: '28px', 
          fontWeight: 700, 
          fontVariantNumeric: 'tabular-nums', 
          color: current.color 
        }}>
          {value}%
        </div>
      </div>

      <p style={{ fontSize: '14.5px', color: 'var(--v-text-2)', marginBottom: '28px', lineHeight: 1.5 }}>
        Desliza para calibrar el nivel de estrés, desconexión con tu pareja o sobrepensamiento que estás experimentando hoy:
      </p>

      {/* 000h Rubber Strand Track Slider */}
      <div style={{ position: 'relative', margin: '24px 0 36px' }}>
        {/* Rubber Track SVG */}
        <div style={{ height: '24px', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <svg
            viewBox="0 0 100 24"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', overflow: 'visible', position: 'absolute' }}
          >
            {/* Background Rail */}
            <path
              d="M 2 12 Q 50 12 98 12"
              fill="none"
              stroke="var(--v-beige)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Active Rubber Fill with dynamic sag */}
            <motion.path
              d={`M 2 12 Q ${value / 2} ${12 + (value > 50 ? 2 : -2)} ${value} 12`}
              fill="none"
              stroke="var(--v-pink)"
              strokeWidth="7"
              strokeLinecap="round"
              animate={{
                d: `M 2 12 Q ${value / 2} ${12 + (value > 50 ? 2.5 : -1.5)} ${Math.max(4, value)} 12`
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          </svg>

          {/* Native Range Input driving the interaction */}
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'grab',
              zIndex: 3
            }}
          />

          {/* 000h Animated Organic Thumb */}
          <motion.div
            style={{
              position: 'absolute',
              left: `${value}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'var(--v-ink)',
              border: '3px solid #FFFFFF',
              boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              pointerEvents: 'none',
              zIndex: 2
            }}
            animate={{
              scale: [1, 1.15, 1],
              x: '-50%',
              y: '-50%'
            }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--v-text-3)', marginTop: '8px' }}>
          <span>Tranquilidad</span>
          <span>Desgaste habitual</span>
          <span>Sobrecarga crítica</span>
        </div>
      </div>

      {/* Dynamic Diagnostic Feedback Box */}
      <motion.div
        key={current.level}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        style={{
          background: current.bg,
          border: `1.5px solid ${current.color}33`,
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '24px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Sparkles size={16} style={{ color: current.color }} />
          <strong style={{ fontSize: '15px', color: current.color }}>
            {current.level}
          </strong>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--v-text)', margin: '0 0 12px', lineHeight: 1.6 }}>
          {current.desc}
        </p>

        <div style={{ fontSize: '12.5px', color: 'var(--v-text-2)' }}>
          <strong>Abordaje sugerido:</strong> {current.recommended}
        </div>
      </motion.div>

      {/* Action */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <HeroButton
          variant="clay"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Primera conversación (30 min sin costo)</span>
        </HeroButton>

        <span style={{ fontSize: '12.5px', color: 'var(--v-text-3)' }}>
          Conversación privada sin costo por Google Meet
        </span>
      </div>
    </div>
  );
}
