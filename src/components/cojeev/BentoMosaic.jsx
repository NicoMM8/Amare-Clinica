import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Brain, Globe, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';
import { LivingLink } from './LivingLink';

export function BentoMosaic() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera agendar mi sesión inicial gratuita de 30 minutos en Centro Amaré.");

  return (
    <section className="section" style={{ background: 'var(--v-canvas)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
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
            Psicoterapia Online · El Salvador y Diáspora
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px', color: 'var(--v-text)' }}>
            Un ecosistema clínico diseñado para tu vida real
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--v-text-2)' }}>
            Cada área de tu proceso terapéutico, atendida con rigor científico y sensibilidad cultural. Desde donde estés.
          </p>
        </div>

        {/* 000h Bento Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '16px',
          width: '100%'
        }}>
          
          {/* Bento Tile 1: Terapia de Parejas (Featured Wide 7 cols) */}
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
              minHeight: '320px'
            }}
            className="bento-tile-responsive"
          >
            {/* Background geometric wave mark */}
            <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.08, pointerEvents: 'none' }}>
              <HeartHandshake size={220} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', background: 'rgba(255,255,255,0.18)', padding: '4px 10px', borderRadius: 'var(--r-pill)', textTransform: 'uppercase' }}>
                  Foco Central 01
                </span>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                  Máster en Pareja & Sexología
                </span>
              </div>

              <h3 style={{ fontSize: '26px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.25 }}>
                Terapia de Pareja y Sexología Clínica
              </h3>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '480px' }}>
                Desactivamos los reproches circulares, restablecemos la intimidad afectiva y abordamos disfunciones sexuales con rigor médico y sin tabúes. Sesiones conjuntas adaptadas a parejas a distancia.
              </p>
            </div>

            <div style={{ paddingTop: '24px' }}>
              <LivingLink href={whatsappUrl} target="_blank" tone="white" style={{ color: '#FFFFFF' }}>
                Coordinar sesión para nosotros
              </LivingLink>
            </div>
          </motion.div>

          {/* Bento Tile 2: Ansiedad y Rumiación (5 cols) */}
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
              minHeight: '320px'
            }}
            className="bento-tile-responsive"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Brain size={18} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Neurociencia Clínica 02
                </span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.25 }}>
                Ansiedad y Rumiación Nocturna
              </h3>

              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                Herramientas cognitivo-conductuales (TCC) para bajar la hipervigilancia del sistema nervioso y recuperar el descanso mental.
              </p>
            </div>

            <div style={{ paddingTop: '20px' }}>
              <LivingLink href={whatsappUrl} target="_blank" style={{ color: '#FFFFFF' }}>
                Aprende a calmar tu mente
              </LivingLink>
            </div>
          </motion.div>

          {/* Bento Tile 3: Diáspora Salvadoreña (4 cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 4',
              background: 'var(--v-paper)',
              border: '1.5px solid var(--v-border)',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="bento-tile-responsive"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--v-pink)', marginBottom: '14px' }}>
                <Globe size={18} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Montreal · L.A. · Madrid
                </span>
              </div>
              <h4 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--v-text)', marginBottom: '8px' }}>
                Pertenencia Cultural
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--v-text-2)', lineHeight: 1.6, margin: 0 }}>
                Terapia en tu mismo idioma y código emocional, sin tener que explicar el contexto salvadoreño ni gastar $200/h.
              </p>
            </div>

            <div style={{ paddingTop: '16px' }}>
              <LivingLink href="#pertenencia">
                Por qué importa la cultura
              </LivingLink>
            </div>
          </motion.div>

          {/* Bento Tile 4: Sesión Inicial 30 min Gratis (4 cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 4',
              background: 'var(--v-yellow-soft)',
              border: '1.5px solid rgba(217, 136, 56, 0.25)',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
            className="bento-tile-responsive"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--v-yellow)', marginBottom: '14px' }}>
                <Sparkles size={18} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Sin Compromiso Económico
                </span>
              </div>
              <h4 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--v-text)', marginBottom: '8px' }}>
                30 Minutos de Encuadre
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--v-text-2)', lineHeight: 1.6, margin: 0 }}>
                Conoce a tu psicóloga por Google Meet, expón tu situación y recibe el número exacto de sesiones recomendadas.
              </p>
            </div>

            <div style={{ paddingTop: '16px' }}>
              <LivingLink href={whatsappUrl} target="_blank" tone="clay">
                Agendar primera media hora
              </LivingLink>
            </div>
          </motion.div>

          {/* Bento Tile 5: Modelo en Cuotas de $100/mes (4 cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 4',
              background: 'var(--v-paper)',
              border: '1.5px solid var(--v-border)',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="bento-tile-responsive"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--v-olive)', marginBottom: '14px' }}>
                <CreditCard size={18} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Tarifa Mensual Accesible
                </span>
              </div>
              <h4 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--v-text)', marginBottom: '8px' }}>
                Plan Mensual de $100 USD
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--v-text-2)', lineHeight: 1.6, margin: 0 }}>
                Hasta 4 sesiones mensuales ($25 USD por sesión). Acompañamiento profesional continuo sin permanencia ni costos ocultos.
              </p>
            </div>

            <div style={{ paddingTop: '16px' }}>
              <LivingLink href="/#honorarios">
                Ver plan mensual
              </LivingLink>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
