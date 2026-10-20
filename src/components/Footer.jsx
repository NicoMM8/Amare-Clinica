import React from 'react';
import { ArrowUpRight, MessageCircle, Shield } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, quisiera dar el primer paso y agendar una primera conversación.");

  return (
    <footer style={{ background: 'var(--color-plum-900)', color: '#FFFFFF', paddingTop: '72px', paddingBottom: '40px' }}>
      <div className="container">
        
        {/* Footer CTA Banner (Brand Guide) */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 'var(--r-2xl)',
          padding: '44px 32px',
          textAlign: 'center',
          maxWidth: '780px',
          margin: '0 auto 64px'
        }}>
          <h2 className="font-serif" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#FFFFFF', marginBottom: '12px' }}>
            No eres la única persona que atraviesa esto.
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '17px', marginBottom: '26px' }}>
            Da el primer paso hacia relaciones más sanas.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clay"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: 'var(--r-pill)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none'
            }}
          >
            <span>Empieza con una primera conversación</span>
          </a>
        </div>

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
            <div style={{ marginBottom: '18px' }}>
              <picture>
                <source srcSet="/images/logo-footer.webp" type="image/webp" />
                <img 
                  src="/images/logo-footer.png" 
                  alt="Centro Amaré — Terapia de Pareja y Psicología" 
                  width="142"
                  height="60"
                  style={{ 
                    height: '60px', 
                    width: 'auto', 
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
              </picture>
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
            <h3 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-clay)', marginBottom: '16px' }}>
              Especialidades
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <li><a href="/terapia-de-pareja" style={{ transition: 'color 0.2s' }}>Terapia de Pareja</a></li>
              <li><a href="/sexologia-clinica" style={{ transition: 'color 0.2s' }}>Sexología Clínica</a></li>
              <li><a href="/terapia-individual" style={{ transition: 'color 0.2s' }}>Terapia Individual (TCC)</a></li>
              <li><a href="/salvadorenos-en-el-exterior" style={{ transition: 'color 0.2s' }}>Salvadoreños en el Exterior</a></li>
              <li><a href="/precios" style={{ transition: 'color 0.2s' }}>Precios y Honorarios</a></li>
            </ul>
          </div>

          {/* Col 3: Navegación & Blog */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-clay)', marginBottom: '16px' }}>
              El Centro & Recursos
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <li><a href="/test-de-pareja" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>Test de Pareja (2 min)</a></li>
              <li><a href="/iris-alarcon">Iris Alarcón (Sobre Mí)</a></li>
              <li><a href="/blog">Blog & Guías Clínicas</a></li>
              <li><a href="/privacidad">Política de Privacidad</a></li>
              <li><a href="/privacidad#cookies">Política de Cookies</a></li>
              <li><a href="/#faq">Preguntas Frecuentes</a></li>
              <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contacto con Asistente</a></li>
            </ul>
          </div>

          {/* Col 4: Compromiso Ético y JVPP */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-clay)', marginBottom: '16px' }}>
              Acreditación Sanitaria JVPP N.º 47096
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '13px', lineHeight: 1.6, marginBottom: '12px' }}>
              Directora Clínica: <strong>Lic. Iris Alarcón</strong>, Psicóloga Colegiada con <strong>Registro Profesional JVPP N.º 47096</strong> (Junta de Vigilancia de la Profesión en Psicología de El Salvador).
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.9)', fontSize: '12.5px', marginBottom: '8px' }}>
              <Shield size={16} style={{ color: 'var(--color-clay)' }} />
              <span>Clínica Legalmente Acreditada en El Salvador</span>
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
              Procesos avalados: TCC, DBT, Sexología y Terapia Integral de Parejas (IBCT).
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer */}
        <div style={{ paddingTop: '28px', paddingBottom: '20px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6 }}>
          Aviso importante: El servicio de Centro Amaré se orienta a psicoterapia ambulatoria para adultos. No constituye un servicio de urgencias médicas ni psiquiátricas de riesgo vital. Si te encuentras en una crisis de riesgo inminente, por favor ponte en contacto inmediato con el número de emergencias o de prevención de tu país o ciudad de residencia.
        </div>

        {/* Copyright & Legal JVPP Registry */}
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
            © {new Date().getFullYear()} Centro Amaré · Todos los derechos reservados · Registro Profesional JVPP N.º 47096 · <a href="/privacidad" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'underline' }}>Política de Privacidad</a> · <a href="/privacidad#cookies" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'underline' }}>Política de Cookies</a>
          </div>
          <div>
            terapiadeparejaelsalvador.com · San Salvador, El Salvador · Sesiones 100% Online vía Google Meet
          </div>
        </div>

      </div>
    </footer>
  );
}
