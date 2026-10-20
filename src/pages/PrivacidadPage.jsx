import React from 'react';
import { Shield, Lock, EyeOff, FileText, CheckCircle2, ArrowLeft, MessageCircle } from 'lucide-react';

export default function PrivacidadPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, leí su política de privacidad y quisiera realizar una consulta previa.");

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-canvas)', color: 'var(--color-ink-primary)' }}>
      {/* Top Header / Nav */}
      <header style={{ 
        borderBottom: '1px solid var(--color-plum-100)', 
        backgroundColor: '#FFFFFF',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a 
            href="/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--color-plum-900)', 
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '14px'
            }}
          >
            <ArrowLeft size={18} />
            <span>Volver a la página principal</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-ink-secondary)' }}>
            <Shield size={16} style={{ color: 'var(--color-clay)' }} />
            <span>Acreditación Sanitaria JVPP El Salvador</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="container" style={{ maxWidth: '820px', padding: '64px 20px 96px' }}>
        
        {/* Badge & Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(169, 90, 65, 0.1)',
            color: 'var(--color-clay)',
            padding: '6px 16px',
            borderRadius: 'var(--r-pill)',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '16px'
          }}>
            <Lock size={14} />
            <span>Compromiso Ético y Confidencialidad YMYL</span>
          </div>

          <h1 className="font-serif" style={{
            fontSize: 'clamp(30px, 4.2vw, 44px)',
            fontWeight: 700,
            color: 'var(--color-plum-900)',
            lineHeight: 1.2,
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Política de Privacidad y Secreto Profesional Clínico
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'var(--color-ink-secondary)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            En Centro Amaré, la intimidad de tu proceso individual o de pareja es inviolable. Cumplimos con los más altos estándares éticos de la Junta de Vigilancia de la Profesión en Psicología (JVPP) de El Salvador y las directrices internacionales de protección de datos sanitarios.
          </p>
        </div>

        {/* 3 Key Trust Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '20px',
          marginBottom: '56px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '24px',
            borderRadius: 'var(--r-xl)',
            border: '1px solid var(--color-plum-100)',
            boxShadow: '0 4px 16px rgba(34, 40, 74, 0.04)'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(34, 40, 74, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: 'var(--color-plum-900)' }}>
              <EyeOff size={20} />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '8px' }}>
              Secreto Profesional
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
              Todo lo conversado en sesión está bajo estricto secreto deontológico legal garantizado por la JVPP.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '24px',
            borderRadius: 'var(--r-xl)',
            border: '1px solid var(--color-plum-100)',
            boxShadow: '0 4px 16px rgba(34, 40, 74, 0.04)'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(169, 90, 65, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: 'var(--color-clay)' }}>
              <Lock size={20} />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '8px' }}>
              Sesiones Encriptadas
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
              Videollamadas punto a punto vía Google Meet / Zoom con cifrado seguro. Nunca se graban sin autorización escrita.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '24px',
            borderRadius: 'var(--r-xl)',
            border: '1px solid var(--color-plum-100)',
            boxShadow: '0 4px 16px rgba(34, 40, 74, 0.04)'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(37, 211, 102, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#128C7E' }}>
              <Shield size={20} />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '8px' }}>
              Sin Venta de Datos
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, margin: 0 }}>
              Cero cookies publicitarias invasivas. Jamás comercializamos tu información con terceros o anunciantes.
            </p>
          </div>
        </div>

        {/* Detailed Legal Sections */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '40px 36px',
          borderRadius: 'var(--r-2xl)',
          border: '1px solid var(--color-plum-100)',
          lineHeight: 1.7,
          fontSize: '15.5px',
          color: 'var(--color-ink-primary)'
        }}>

          <h2 className="font-serif" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '12px' }}>
            1. Responsable del Tratamiento y Acreditación Profesional
          </h2>
          <p style={{ marginBottom: '24px' }}>
            El sitio web <strong>terapiadeparejaelsalvador.com</strong> opera bajo la dirección clínica de la <strong>Licda. Iris Alarcón</strong>, psicóloga clínica legalmente acreditada e inscrita ante la <strong>Junta de Vigilancia de la Profesión en Psicología (JVPP) de la República de El Salvador</strong>. El ejercicio profesional se rige por la legislación de salud salvadoreña y los principios universales de la bioética médica.
          </p>

          <h2 className="font-serif" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '12px' }}>
            2. Confidencialidad en el Test Clínico de Pareja (/test-de-pareja)
          </h2>
          <p style={{ marginBottom: '24px' }}>
            La herramienta interactiva de evaluación de pareja ubicada en la ruta <code>/test-de-pareja</code> ha sido diseñada bajo el principio de <em>Privacidad por Diseño (Privacy by Design)</em>:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Procesamiento local:</strong> Las respuestas del test se computan temporalmente en la memoria de tu propio dispositivo.</li>
            <li><strong>Sin almacenamiento en bases de datos públicas:</strong> No guardamos tus respuestas en servidores de tracking accesibles a terceros.</li>
            <li><strong>Envío voluntario:</strong> La información solo se comparte con la terapeuta si tú o tu pareja deciden presionar conscientemente el botón para enviar el resultado a través de WhatsApp.</li>
          </ul>

          <h2 className="font-serif" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '12px' }}>
            3. Seguridad en las Sesiones Online y Protección de Pacientes en el Exterior
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Para pacientes residentes en El Salvador, Estados Unidos, Canadá o Europa:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Las sesiones clínicas se realizan a través de enlaces privados con encriptación TLS de grado industrial (Google Meet / Zoom Healthcare).</li>
            <li><strong>Prohibición de grabación no consentida:</strong> Queda terminantemente prohibido grabar el audio o video de las sesiones tanto por parte del profesional como del paciente, salvo autorización clínica recíproca, expresa y por escrito para fines terapéuticos específicos.</li>
            <li>Las notas de evolución clínica se custodian bajo custodia restringida de acuerdo con la normativa de secreto médico.</li>
          </ul>

          <h2 className="font-serif" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '12px' }}>
            4. Transparencia en Pagos y Tarifas Internacionales
          </h2>
          <p style={{ marginBottom: '24px' }}>
            La primera sesión exploratoria de 30 minutos es 100% gratuita y no requiere introducir ningún dato de tarjeta bancaria. Para los planes mensuales posteriores ($100 USD / mes), los pagos se procesan a través de proveedores financieros certificados (transferencias bancarias directas, Wompi/Banco Agrícola en El Salvador, o plataformas con certificación PCI-DSS para el extranjero). Centro Amaré nunca tiene acceso ni almacena los números completos de tus tarjetas bancarias.
          </p>

          <h2 className="font-serif" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '12px' }}>
            5. Derechos de Acceso, Rectificación y Supresión
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Tienes derecho en cualquier momento a solicitar el acceso a tus notas de derivación, la rectificación de datos inexactos o la cancelación de tu ficha de contacto. Puedes ejercer estos derechos enviando una solicitud formal a través de nuestro canal seguro de WhatsApp oficial o al correo institucional.
          </p>

          <div style={{
            marginTop: '36px',
            padding: '24px',
            backgroundColor: 'rgba(34, 40, 74, 0.03)',
            borderRadius: 'var(--r-lg)',
            borderLeft: '4px solid var(--color-plum-900)',
            fontSize: '14px',
            color: 'var(--color-ink-secondary)'
          }}>
            <strong>Nota médica sobre emergencias:</strong> Este servicio ofrece psicoterapia ambulatoria programada y no sustituye a los servicios de urgencias psiquiátricas. En caso de riesgo inminente personal o de terceros, contacta con las líneas locales de emergencia de tu país de residencia (ej. 911 en EE. UU./El Salvador).
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '15px', color: 'var(--color-ink-secondary)', marginBottom: '16px' }}>
            ¿Tienes alguna duda sobre el manejo confidencial de tu caso?
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
            <MessageCircle size={18} />
            <span>Consultar directamente por WhatsApp</span>
          </a>
        </div>

      </main>
    </div>
  );
}
