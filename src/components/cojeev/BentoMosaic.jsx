import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Brain, Globe, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';
import { LivingLink } from './LivingLink';

export function BentoMosaic() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola Iris, quisiéramos empezar con una primera conversación de 30 min sin costo.");

  return (
    <section className="section" style={{ background: 'var(--v-canvas)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <span style={{ 
            fontSize: '12px', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em', 
            color: 'var(--v-pink)',
            background: 'var(--v-pink-soft)',
            padding: '5px 14px',
            borderRadius: 'var(--r-pill)',
            display: 'inline-block',
            marginBottom: '12px'
          }}>
            Por qué elegir Centro Amaré
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px', color: 'var(--v-text)' }}>
            Un espacio pensado para tu tranquilidad, vivas donde vivas
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--v-text-2)' }}>
            Cada área de tu proceso terapéutico, atendida con rigor científico, calidez humana y sensibilidad cultural. Desde donde estés.
          </p>
        </div>

        {/* Bento Grid Layout - 4 Cajas limpias y humanas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '20px',
          width: '100%'
        }}>
          
          {/* Caja 1 (Pareja y Sexología): 7 cols */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 7',
              background: 'var(--v-blue)',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '300px'
            }}
            className="bento-tile-responsive"
          >
            <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.08, pointerEvents: 'none' }}>
              <HeartHandshake size={220} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', background: 'rgba(255,255,255,0.18)', padding: '4px 10px', borderRadius: 'var(--r-pill)', textTransform: 'uppercase' }}>
                  Pareja y Sexología
                </span>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>
                  Juntos o a distancia
                </span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.25 }}>
                Hablar de intimidad sin tabúes
              </h3>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, maxWidth: '500px' }}>
                Abordamos tanto la comunicación diaria como la vida sexual de la pareja con naturalidad, respeto y base médica.
              </p>
            </div>

            <div style={{ paddingTop: '24px' }}>
              <LivingLink href="/test-de-pareja" tone="white" style={{ color: '#FFFFFF' }}>
                Evaluar nuestro caso de pareja
              </LivingLink>
            </div>
          </motion.div>

          {/* Caja 2 (Ansiedad y Descanso): 5 cols */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 5',
              background: 'var(--v-pink)',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '300px'
            }}
            className="bento-tile-responsive"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Brain size={18} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Ansiedad y Descanso
                </span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.25 }}>
                Poner en orden lo que sientes
              </h3>

              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                Herramientas claras para calmar la ansiedad, dormir mejor y dejar de darle vueltas a todo por la noche.
              </p>
            </div>

            <div style={{ paddingTop: '20px' }}>
              <LivingLink href={whatsappUrl} target="_blank" style={{ color: '#FFFFFF' }}>
                Aprende a calmar tu mente
              </LivingLink>
            </div>
          </motion.div>

          {/* Caja 3 (Pertenencia): 6 cols */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 6',
              background: 'var(--v-paper)',
              border: '1.5px solid var(--v-border)',
              borderRadius: '24px',
              padding: '34px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '270px',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="bento-tile-responsive"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--v-pink)', marginBottom: '14px' }}>
                <Globe size={18} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Pertenencia e Identidad Cultural
                </span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--v-text)', marginBottom: '10px' }}>
                En Estados Unidos, Canadá, Europa o El Salvador
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--v-text-2)', lineHeight: 1.6, margin: 0 }}>
                Conectas desde tu celular o computadora con alguien que entiende tus raíces sin pagar tarifas de $200 por hora.
              </p>
            </div>

            <div style={{ paddingTop: '20px' }}>
              <LivingLink href="#pertenencia">
                Por qué importa la cultura
              </LivingLink>
            </div>
          </motion.div>

          {/* Caja 4 (Primera Conversación): 6 cols */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 6',
              background: 'var(--v-yellow-soft)',
              border: '1.5px solid rgba(217, 136, 56, 0.25)',
              borderRadius: '24px',
              padding: '34px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '270px'
            }}
            className="bento-tile-responsive"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--v-yellow)', marginBottom: '14px' }}>
                <Sparkles size={18} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Primera Conversación
                </span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--v-text)', marginBottom: '10px' }}>
                30 minutos sin costo
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--v-text-2)', lineHeight: 1.6, margin: 0 }}>
                Antes de pagar nada, conversamos por Google Meet para que nos conozcas, nos cuentes qué te trae y sientas si este es tu lugar.
              </p>
            </div>

            <div style={{ paddingTop: '20px' }}>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--v-pink)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '15px'
                }}
              >
                <span>Primera conversación (30 min sin costo) →</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
