import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "¿Cómo funciona la sesión inicial gratuita de 30 minutos?",
      a: "Es una sesión de encuadre por Google Meet sin ningún compromiso económico. La asistente coordina tu horario y te envía el enlace. En esos 30 minutos, la psicóloga escucha tu motivo de consulta, evalúa tu contexto y te explica con claridad cómo se abordaría tu caso y cuántas sesiones se recomiendan. Si decides continuar, se formaliza el plan en cuotas mensuales; si decides no hacerlo, no habrás pagado nada."
    },
    {
      q: "¿Y si mi pareja no quiere venir a terapia o tiene dudas?",
      a: "Es muy habitual que la iniciativa nazca de uno de los dos. Si tu pareja no se siente lista o tiene reservas, puedes iniciar el proceso de forma individual. Trabajar en tus propios patrones relacionales, límites y herramientas de comunicación transforma positivamente la dinámica de la pareja. Además, en la sesión inicial gratuita de 30 minutos comprobamos que la terapia no es un tribunal para buscar culpables ni forzar decisiones, lo que con frecuencia anima a la otra persona a sumarse con total tranquilidad."
    },
    {
      q: "Vivimos en países o ciudades distintas (ej. uno en Canadá y otro en El Salvador), ¿es posible?",
      a: "Totalmente. Es una de nuestras mayores especialidades. La videollamada por Google Meet permite conectar a ambos miembros de la pareja desde enlaces simultáneos en diferentes husos horarios. Adaptamos la agenda para que los horarios coincidan sin problemas con su rutina laboral."
    },
    {
      q: "¿Por qué el contacto inicial es por WhatsApp con una persona y no con un bot?",
      a: "Porque en salud mental la empatía empieza desde el primer 'hola'. No queremos que una persona que está atravesando angustia o una crisis de pareja sea atendida por un contestador automático con menús infinitos. Nuestra asistente te recibe, responde tus dudas de manera humana y busca el horario más conveniente para tu videollamada con la psicóloga."
    },
    {
      q: "¿Cómo se realizan los pagos si vivo en el exterior (Canadá, EE.UU., Europa)?",
      a: "Aceptamos pagos internacionales de manera 100% segura mediante tarjeta de crédito o débito a través de pasarelas con cifrado bancario, así como transferencias bancarias internacionales o locales en El Salvador. La cuota mensual es fija y transparente, sin cargos sorpresa de divisas."
    },
    {
      q: "¿Qué ocurre después de completar las 16 o 20 sesiones?",
      a: "Por ética profesional y según los protocolos de la psicología basada en evidencia, el proceso tiene un cierre formal (alta terapéutica). Evitamos expresamente generar dependencia con el terapeuta. Si has adquirido las herramientas de comunicación, regulación emocional y resolución de conflictos, nuestro trabajo ha terminado con éxito para que disfrutes tu vida con plena autonomía."
    },
    {
      q: "¿Qué pasa con la confidencialidad de mis sesiones?",
      a: "La confidencialidad es absoluta bajo el secreto profesional de la psicología clínica. Las sesiones se realizan a través de Google Meet con conexiones cifradas de extremo a extremo, en despachos privados y seguros donde solo estás tú (o tu pareja) y la terapeuta."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, tengo una pregunta antes de agendar mi sesión en Centro Amaré.");

  return (
    <section className="section" id="faq">
      <div className="container-narrow">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="pill-badge" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} style={{ color: 'var(--color-clay)' }} />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px' }}>
            Preguntas frecuentes antes de comenzar
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--color-ink-secondary)' }}>
            Resolver tus dudas con claridad es el primer paso para sentirte en un lugar seguro y profesional.
          </p>
        </div>

        {/* FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button 
                  type="button" 
                  className="faq-trigger" 
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span style={{ color: isOpen ? 'var(--color-clay)' : 'var(--color-plum-900)', transition: 'color 0.2s ease' }}>
                    {faq.q}
                  </span>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: isOpen ? 'var(--color-clay-subtle)' : 'var(--color-canvas-subtle)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease'
                  }}>
                    <ChevronDown 
                      size={18} 
                      style={{ 
                        color: isOpen ? 'var(--color-clay)' : 'var(--color-ink-secondary)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease'
                      }} 
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-content">
                    <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7, color: 'var(--color-ink-secondary)' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div style={{ 
          marginTop: '48px', 
          padding: '24px 32px', 
          background: 'var(--color-surface)', 
          borderRadius: 'var(--r-2xl)', 
          border: '1px solid var(--border-hairline)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--color-plum-900)' }}>
              ¿Tienes alguna duda específica que no aparece aquí?
            </div>
            <div style={{ fontSize: '14px', color: 'var(--color-ink-muted)' }}>
              Escríbele directamente a nuestra asistente y te contestará a la brevedad.
            </div>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '14px', padding: '10px 20px' }}
          >
            <MessageSquare size={16} />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
