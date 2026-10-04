import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

// Avatares de color generados a partir del nombre (sin fotos reales — HIPAA / confidencialidad)
function InitialAvatar({ name, colorPair }) {
  const initials = name
    .split(/[&\s]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase();

  const [bg, text] = colorPair;

  return (
    <div style={{
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: bg,
      color: text,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: '16px',
      flexShrink: 0,
      letterSpacing: '-0.02em',
      border: '2.5px solid rgba(255,255,255,0.9)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
    }}>
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const cases = [
    {
      author: "Andrea & Mauricio",
      location: "Montreal, Canadá",
      context: "Pareja salvadoreña · 10 años fuera del país",
      title: "Recuperamos la complicidad sin tener que explicar de dónde venimos",
      text: "Llevábamos dos años discutiendo por tonterías y durmiendo como dos extraños. Habíamos probado con un terapeuta aquí en Quebec, pero se sentía frío y lejano; teníamos que gastar tiempo explicando cómo nos criaron o la relación con nuestras familias en El Salvador. Con Centro Amaré fue directo al corazón de nuestra dinámica desde la primera sesión.",
      treatment: "Terapia de Pareja y Comunicación Asertiva",
      colorPair: ['#22284A', '#FFFFFF'],
    },
    {
      author: "Karla M.",
      location: "Los Ángeles, California",
      context: "Salvadoreña en el exterior · Profesional",
      title: "Aprendí a poner límites y detuve el insomnio por sobrepensamiento",
      text: "Emigré sola y con el tiempo me volví autoexigente al extremo. En mis relaciones siempre terminaba cediendo, con miedo a que se enojaran conmigo y cargando una culpa que no era mía. En Amaré no me dieron frases de autoayuda barata: me enseñaron herramientas cognitivo-conductuales para reconocer la manipulación y calmar mi ansiedad.",
      treatment: "Terapia Individual (TCC y Apegos)",
      colorPair: ['#A95A41', '#FFFFFF'],
    },
    {
      author: "Rodrigo & Sofía",
      location: "San Salvador, El Salvador",
      context: "Pareja · 6 años de matrimonio",
      title: "Poder abordar temas de sexualidad con profesionalismo médico",
      text: "Nos daba mucha pena hablar de dificultades en la intimidad y falta de deseo. En el país la sexología clínica sigue siendo un tabú. Encontrar a una profesional con posgrado en sexología que nos tratara con naturalidad y base médica salvó nuestro matrimonio. La atención por videollamada nos dio la privacidad exacta que necesitábamos.",
      treatment: "Sexología Clínica y Reconexión de Pareja",
      colorPair: ['#3C477D', '#FFFFFF'],
    }
  ];

  return (
    <section className="section bg-grid-subtle">
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <div className="pill-badge" style={{ marginBottom: '14px' }}>
            <Quote size={14} style={{ color: 'var(--color-clay)' }} />
            <span>Experiencias reales de nuestros pacientes</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px' }}>
            Personas como tú que dieron el primer paso
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)' }}>
            El proceso no es magia; es compromiso mutuo y método. Estas son algunas de las transformaciones vividas al encontrar un espacio seguro y sin prejuicios.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3">
          {cases.map((item, idx) => (
            <div key={idx} className="card-panel" style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: '32px' }}>
              
              {/* Top: Stars + Location */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#A95A41" color="#A95A41" />
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-ink-muted)' }}>
                  <MapPin size={12} style={{ color: 'var(--color-clay)' }} />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Quote mark decorativa */}
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--color-clay-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                flexShrink: 0
              }}>
                <Quote size={18} color="var(--color-clay)" />
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-plum-900)', marginBottom: '12px', lineHeight: 1.35 }}>
                {item.title}
              </h3>

              {/* Body text */}
              <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.7, marginBottom: '24px', flex: 1 }}>
                {item.text}
              </p>

              {/* Footer: Avatar + Author + Treatment */}
              <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <InitialAvatar name={item.author} colorPair={item.colorPair} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '14.5px', color: 'var(--color-plum-900)', lineHeight: 1.2 }}>
                    {item.author}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-ink-muted)', marginTop: '2px' }}>
                    {item.context}
                  </div>
                  <div style={{ 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    color: 'var(--color-clay)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.04em',
                    marginTop: '5px',
                    background: 'var(--color-clay-subtle)',
                    display: 'inline-block',
                    padding: '2px 8px',
                    borderRadius: 'var(--r-sm)'
                  }}>
                    {item.treatment}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Social proof note */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '48px', 
          fontSize: '13px', 
          color: 'var(--color-ink-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <div style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            background: 'var(--color-clay)',
            flexShrink: 0
          }} />
          <span>Nombres cambiados para proteger la confidencialidad de los pacientes. Historias reales con autorización.</span>
        </div>

      </div>
    </section>
  );
}
