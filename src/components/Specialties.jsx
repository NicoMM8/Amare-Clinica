"use client";

import React, { useState } from 'react';
import { HeartHandshake, Brain, HeartCrack, Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { OptionWheel } from './ui/option-wheel';

const clinicalSpecialties = [
  {
    id: "pareja",
    label: "Dos husos horarios, una misma conversación.",
    description: "Terapia de pareja online con una terapeuta salvadoreña. Para hablar de lo difícil en tu idioma.",
    approach: "Terapia Integral de Pareja + Apego",
  },
  {
    id: "individual",
    label: "Poner límites, entenderte y dejar de repetir patrones.",
    description: "Terapia individual para quienes viven lejos de casa y quieren cuidar su bienestar emocional.",
    approach: "TCC y Regulación Emocional",
  },
  {
    id: "sexologia",
    label: "Sexología e intimidad clínica.",
    description: "Abordaje riguroso, científico y sin tabúes de la sexualidad. Un espacio 100% libre de juicios.",
    approach: "Sexología Clínica Médica",
  },
  {
    id: "diaspora",
    label: "Duelo migratorio y desarraigo.",
    description: "Para conciliar tus dos vidas: tu proyecto fuera con la distancia de tus raíces en El Salvador.",
    approach: "Psicoterapia Transcultural",
  }
];

export default function Specialties() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeSpec = clinicalSpecialties[selectedIdx];
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent(`Hola, me interesa consultar sobre ${activeSpec.label} en Centro Amaré.`);

  return (
    <section className="section" id="especialidades">
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="pill-badge pill-badge-clay" style={{ marginBottom: '14px' }}>
            <span>¿Cuál es tu situación? · Elige tu área</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px' }}>
            Identifica tu situación y empieza a sanar hoy
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)' }}>
            Selecciona el área que mejor describe lo que estás viviendo. Descubre cómo nuestro enfoque clínico comprobado puede ayudarte a recuperar tu bienestar:
          </p>
        </div>

        {/* Option Wheel Interactive Container */}
        <div style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
          <OptionWheel
            presentation="arc"
            side="left"
            selectedIndex={selectedIdx}
            onSelectionChange={setSelectedIdx}
            items={clinicalSpecialties.map((spec, index) => ({
              id: spec.id,
              label: spec.label,
              description: spec.description,
              renderDetail: (activeItem) => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                  <p style={{ fontSize: '15.5px', color: 'var(--color-ink-primary, #1C1819)', maxWidth: '480px', lineHeight: 1.5 }}>
                    {spec.description}
                  </p>
                  
                  <div style={{ fontSize: '13px', color: 'var(--color-ink-secondary)' }}>
                    <strong>Enfoque:</strong> {spec.approach}
                  </div>

                  <a
                    href={"https://wa.me/50373184781?text=" + encodeURIComponent(`Hola, me interesa consultar sobre ${spec.label} en Centro Amaré.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      fontSize: '14px',
                      borderRadius: 'var(--r-pill)',
                      textDecoration: 'none',
                      marginTop: '8px'
                    }}
                  >
                    <MessageCircle size={16} />
                    <span>Agendar sobre este tema (30 min gratis)</span>
                  </a>
                </div>
              )
            }))}
          />
        </div>

      </div>
    </section>
  );
}
