import React from 'react';
import { MessageCircle, HeartHandshake, DollarSign, BookOpen, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export default function EnlacesBioPage() {
  const whatsappUrl = "https://wa.me/50373184781?text=" + encodeURIComponent("Hola, vi el perfil en Instagram y me gustaría agendar la primera conversación de 30 min sin costo.");

  const links = [
    {
      title: "Agendar 1ª Sesión de 30 min sin costo",
      subtitle: "Por videollamada de Google Meet · Sin compromiso",
      href: whatsappUrl,
      isExternal: true,
      isPrimary: true,
      icon: MessageCircle,
      badge: "Recomendado"
    },
    {
      title: "Test Clínico de Pareja",
      subtitle: "Autoevaluación de tu relación en 5 pasos (2 min sin costo)",
      href: "/test-de-pareja",
      isPrimary: false,
      icon: Sparkles,
      badge: "Sin costo"
    },
    {
      title: "Honorarios y Plan Mensual ($100 USD)",
      subtitle: "Hasta 4 sesiones al mes ($25/sesión) · Sin permanencia",
      href: "/precios",
      isPrimary: false,
      icon: DollarSign,
    },
    {
      title: "Guía: ¿Cuánto cuesta la terapia de pareja?",
      subtitle: "Precios y comparativa en El Salvador y el exterior",
      href: "/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador",
      isPrimary: false,
      icon: BookOpen,
    },
    {
      title: "Salvadoreños en el Exterior (EE. UU., Canadá, Europa)",
      subtitle: "Psicólogo salvadoreño online en tu mismo código cultural",
      href: "/salvadorenos-en-el-exterior",
      isPrimary: false,
      icon: Globe,
    },
    {
      title: "Conoce a Iris Alarcón (Directora Clínica)",
      subtitle: "Psicóloga colegiada ante la JVPP de El Salvador",
      href: "/iris-alarcon",
      isPrimary: false,
      icon: ShieldCheck,
    },
    {
      title: "Visitar Sitio Web Oficial",
      subtitle: "terapiadeparejaelsalvador.com",
      href: "/",
      isPrimary: false,
      icon: HeartHandshake,
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-canvas)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 16px 60px',
      fontFamily: 'var(--font-sans, "Nunito Sans", sans-serif)'
    }}>
      {/* Profile Card Header */}
      <div style={{ textAlign: 'center', maxWidth: '420px', width: '100%', marginBottom: '28px' }}>
        
        <div style={{
          position: 'relative',
          width: '96px',
          height: '96px',
          margin: '0 auto 16px',
          borderRadius: '50%',
          padding: '3px',
          background: 'linear-gradient(135deg, var(--color-clay) 0%, var(--color-plum-900) 100%)',
          boxShadow: '0 8px 24px rgba(34, 40, 74, 0.16)'
        }}>
          <img
            src="/images/iris-alarcon.webp"
            alt="Licda. Iris Alarcón — Directora Clínica Centro Amaré"
            width="90"
            height="90"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              background: '#FFFFFF'
            }}
          />
        </div>

        <h1 className="font-serif" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-plum-900)', marginBottom: '4px' }}>
          Centro Amaré
        </h1>

        <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-clay)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
          Terapia de Pareja · Psicóloga Salvadoreña Online
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--color-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--r-pill)',
          padding: '4px 12px',
          fontSize: '12px',
          color: 'var(--color-plum-900)',
          fontWeight: 600
        }}>
          <ShieldCheck size={14} style={{ color: 'var(--color-clay)' }} />
          <span>Registro Profesional JVPP El Salvador</span>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.5, marginTop: '14px', marginBottom: 0 }}>
          Atención psicológica online para parejas y adultos en El Salvador y el exterior (EE. UU., Canadá, Europa).
        </p>
      </div>

      {/* Buttons List */}
      <div style={{ width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {links.map((link, idx) => {
          const Icon = link.icon;
          return (
            <a
              key={idx}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "nofollow noopener noreferrer" : undefined}
              onClick={() => {
                if (link.isExternal) trackWhatsAppClick('enlaces_bio', link.title);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: link.isPrimary ? '18px 20px' : '15px 18px',
                borderRadius: '20px',
                background: link.isPrimary ? 'var(--color-clay)' : '#FFFFFF',
                color: link.isPrimary ? '#FFFFFF' : 'var(--color-plum-900)',
                border: link.isPrimary ? 'none' : '1px solid var(--border-subtle)',
                boxShadow: link.isPrimary ? '0 8px 20px rgba(169, 90, 65, 0.28)' : 'var(--shadow-xs)',
                textDecoration: 'none',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                position: 'relative'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: link.isPrimary ? 'rgba(255, 255, 255, 0.2)' : 'var(--color-canvas)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Icon size={20} style={{ color: link.isPrimary ? '#FFFFFF' : 'var(--color-clay)' }} />
              </div>

              <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.3, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>{link.title}</span>
                  {link.badge && (
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      background: link.isPrimary ? '#FFFFFF' : 'var(--color-clay)',
                      color: link.isPrimary ? 'var(--color-clay)' : '#FFFFFF',
                      padding: '2px 7px',
                      borderRadius: 'var(--r-pill)'
                    }}>
                      {link.badge}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '12.5px', color: link.isPrimary ? 'rgba(255, 255, 255, 0.88)' : 'var(--color-ink-muted)', marginTop: '2px' }}>
                  {link.subtitle}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Clinical About snippet */}
      <div style={{
        marginTop: '32px',
        maxWidth: '460px',
        width: '100%',
        background: '#FFFFFF',
        borderRadius: '16px',
        padding: '20px 22px',
        border: '1px solid var(--border-subtle)',
        textAlign: 'center',
        boxShadow: 'var(--shadow-xs)'
      }}>
        <p style={{ fontSize: '13px', color: 'var(--color-plum-900)', fontWeight: 700, margin: '0 0 6px 0' }}>
          Clínica Psicológica Especializada · Centro Amaré
        </p>
        <p style={{ fontSize: '12px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
          Atención psicológica online para parejas y adultos en El Salvador, Estados Unidos, Canadá y el exterior. Profesionales acreditados ante la Junta de Vigilancia de la Profesión en Psicología (JVPP).
        </p>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '28px', textAlign: 'center', fontSize: '12px', color: 'var(--color-ink-muted)' }}>
        <p style={{ margin: '0 0 4px' }}>
          Centro Amaré · Licda. Iris Alarcón (JVPP N.º 47096)
        </p>
        <p style={{ margin: 0 }}>
          terapiadeparejaelsalvador.com · San Salvador, El Salvador
        </p>
      </div>
    </div>
  );
}
