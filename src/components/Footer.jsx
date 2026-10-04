import React from 'react';
import { ArrowUpRight, MessageCircle, Shield } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera información sobre las sesiones en Centro Amaré.");

  return (
    <footer style={{ background: 'var(--color-plum-900)', color: '#FFFFFF', paddingTop: '72px', paddingBottom: '40px' }}>
      <div className="container">
        
        {/* Main Footer Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '40px', 
          paddingBottom: '56px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ 
                background: 'var(--color-canvas)', 
                borderRadius: '8px',
                padding: '4px',
                display: 'inline-flex'
              }}>
                <img 
                  src="/images/logo.png" 
                  alt="Centro Amaré" 
                  style={{ height: '36px', width: 'auto', mixBlendMode: 'multiply' }}
                />
              </div>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
              Centro digital de psicoterapia basada en evidencia para adultos y parejas. Uniendo a salvadoreños en el país y en el exterior con su bienestar emocional.
            </p>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#25D366',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp: +503 7318 4781</span>
            </a>
          </div>

          {/* Col 2: Especialidades */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-clay)', marginBottom: '16px' }}>
              Especialidades
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <li><a href="#especialidades" style={{ transition: 'color 0.2s' }}>Terapia de Pareja</a></li>
              <li><a href="#especialidades" style={{ transition: 'color 0.2s' }}>Sexología Clínica</a></li>
              <li><a href="#especialidades" style={{ transition: 'color 0.2s' }}>Ansiedad y Rumiación</a></li>
              <li><a href="#especialidades" style={{ transition: 'color 0.2s' }}>Apegos y Rupturas</a></li>
              <li><a href="#pertenencia" style={{ transition: 'color 0.2s' }}>Atención a la Diáspora</a></li>
            </ul>
          </div>

          {/* Col 3: Navegación */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-clay)', marginBottom: '16px' }}>
              El Centro
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <li><a href="#triage">Evaluador Interactivo</a></li>
              <li><a href="#equipo">Dirección Clínica (Iris Alarcón)</a></li>
              <li><a href="#honorarios">Proceso y Cuotas Mensuales</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
              <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contacto Directo con Asistente</a></li>
            </ul>
          </div>

          {/* Col 4: Compromiso Ético */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-clay)', marginBottom: '16px' }}>
              Compromiso Clínico
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px', lineHeight: 1.6, marginBottom: '12px' }}>
              Todos los procesos se fundamentan en enfoques con aval científico (TCC, DBT y Terapia Integral de Parejas).
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '12.5px' }}>
              <Shield size={16} style={{ color: 'var(--color-clay)' }} />
              <span>Confidencialidad Médica Garantizada</span>
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer */}
        <div style={{ paddingTop: '28px', paddingBottom: '20px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6 }}>
          Aviso importante: El servicio de Centro Amaré se orienta a psicoterapia ambulatoria para adultos. No constituye un servicio de urgencias médicas ni psiquiátricas de riesgo vital. Si te encuentras en una crisis de riesgo inminente, por favor ponte en contacto inmediato con el número de emergencias o de prevención de tu país o ciudad de residencia.
        </div>

        {/* Copyright */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '12px',
          fontSize: '12.5px',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          <div>
            © {new Date().getFullYear()} Centro Amaré · Todos los derechos reservados.
          </div>
          <div>
            El Salvador · Sesiones 100% Online vía Google Meet
          </div>
        </div>

      </div>
    </footer>
  );
}
