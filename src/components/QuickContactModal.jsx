import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, MessageSquare, Send, Sparkles } from 'lucide-react';
import { sendLeadEmail, openWhatsAppChat, COUNTRY_CODES } from '../lib/leadService';
import { trackLeadGenerated } from '../lib/analytics';

export default function QuickContactModal({ isOpen, onClose, initialService = 'Terapia de Pareja' }) {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+503');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailDelivered, setEmailDelivered] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setIsSubmitting(false);
      setEmailDelivered(true);
      setService(initialService);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phoneNumber.trim()) return;

    const fullPhone = countryCode ? `${countryCode} ${phoneNumber.trim()}` : phoneNumber.trim();

    setIsSubmitting(true);

    // 1. Envío asíncrono al correo de la clínica (con estado real de entrega)
    const emailResult = await sendLeadEmail({
      name: name.trim(),
      whatsapp: fullPhone,
      email: email.trim(),
      service,
      source: 'Modal Rápido - Hero',
      notes: notes.trim(),
    });
    const delivered = Boolean(emailResult?.success);
    setEmailDelivered(delivered);

    // 2. Telemetría verificada tras envío del lead (sin PII)
    trackLeadGenerated({
      formName: 'quick_contact_modal',
      serviceType: service,
      emailDelivered: delivered,
      location: 'hero_modal',
    });

    // 3. Apertura simultánea de WhatsApp
    openWhatsAppChat({
      name: name.trim(),
      whatsapp: fullPhone,
      service,
      notes: notes.trim(),
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(35, 18, 33, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '32px 28px',
          boxShadow: '0 24px 64px rgba(35, 18, 33, 0.22)',
          border: '1px solid rgba(35, 18, 33, 0.08)',
          position: 'relative',
          color: 'var(--color-plum-900, #22284A)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar formulario"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--border-subtle, rgba(35, 18, 33, 0.1))',
            background: 'var(--color-canvas, #FAF7F2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-ink-secondary, #5D5458)',
            transition: 'all 0.2s ease',
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          /* Estado de éxito */
          <div style={{ textAlign: 'center', padding: '16px 8px 8px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(183, 89, 64, 0.1)',
                color: 'var(--color-clay, #B75940)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--color-plum-900, #22284A)',
                marginBottom: '10px',
                lineHeight: 1.25,
              }}
            >
              ¡Solicitud recibida con éxito!
            </h3>

            <p style={{ fontSize: '15px', color: 'var(--color-ink-secondary, #5D5458)', lineHeight: 1.6, marginBottom: '22px' }}>
              {emailDelivered
                ? 'Tus datos han quedado registrados en la clínica. Te hemos abierto WhatsApp para acordar el horario de tu sesión de 30 minutos sin costo.'
                : 'Guardamos una copia segura de tu solicitud y te abrimos WhatsApp para coordinar de inmediato tu sesión de 30 minutos sin costo.'}
            </p>

            <div
              style={{
                backgroundColor: 'var(--color-canvas, #FAF7F2)',
                borderRadius: '16px',
                padding: '16px',
                marginBottom: '24px',
                fontSize: '13px',
                color: 'var(--color-ink-secondary, #5D5458)',
                lineHeight: 1.55,
                textAlign: 'left',
                border: '1px solid var(--border-subtle, rgba(35, 18, 33, 0.08))',
              }}
            >
              <strong>¿No se abrió WhatsApp?</strong> No te preocupes. Nuestra asistente clínica te escribirá directamente a tu número (<strong>{countryCode} {phoneNumber}</strong>) o a tu correo en horario de atención.
            </div>

            <button
              type="button"
              onClick={onClose}
              className="v-button v-button--accent"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              Entendido, volver a la web
            </button>
          </div>
        ) : (
          /* Formulario */
          <div>
            {/* Header del Modal */}
            <div style={{ marginBottom: '22px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(183, 89, 64, 0.08)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  color: 'var(--color-clay, #B75940)',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '10px',
                }}
              >
                <Sparkles size={13} />
                <span>1ª Conversación de 30 min sin costo</span>
              </div>

              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(22px, 3vw, 26px)',
                  fontWeight: 600,
                  color: 'var(--color-plum-900, #22284A)',
                  lineHeight: 1.25,
                  margin: '0 0 8px 0',
                }}
              >
                Déjanos tus datos de contacto
              </h2>

              <p style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary, #5D5458)', margin: 0, lineHeight: 1.5 }}>
                La asistente coordinará contigo el día y hora por WhatsApp, o por correo si lo prefieres. Sin compromiso ni costo.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Selector de Servicio */}
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--color-plum-900, #22284A)', marginBottom: '6px' }}>
                  Servicio de interés
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {[
                    { id: 'Terapia de Pareja', label: 'Pareja' },
                    { id: 'Terapia Individual', label: 'Individual' },
                    { id: 'Sexología Clínica', label: 'Sexología' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setService(item.id)}
                      style={{
                        padding: '9px 6px',
                        borderRadius: '10px',
                        border: service === item.id 
                          ? '1.5px solid var(--color-clay, #B75940)' 
                          : '1px solid rgba(35, 18, 33, 0.12)',
                        background: service === item.id 
                          ? 'rgba(183, 89, 64, 0.08)' 
                          : '#FFFFFF',
                        color: service === item.id 
                          ? 'var(--color-clay, #B75940)' 
                          : 'var(--color-ink-primary, #22284A)',
                        fontSize: '13px',
                        fontWeight: service === item.id ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nombre */}
              <div>
                <label htmlFor="quick-modal-name" style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--color-plum-900, #22284A)', marginBottom: '6px' }}>
                  Tu nombre o nombres de la pareja <span style={{ color: 'var(--color-clay, #B75940)' }}>*</span>
                </label>
                <input
                  id="quick-modal-name"
                  type="text"
                  required
                  placeholder="Ej: Carlos y Andrea"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(35, 18, 33, 0.14)',
                    background: 'var(--color-canvas, #FAF7F2)',
                    fontSize: '14.5px',
                    color: 'var(--color-ink-primary, #22284A)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* WhatsApp con Prefijo */}
              <div>
                <label htmlFor="quick-modal-phone" style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--color-plum-900, #22284A)', marginBottom: '6px' }}>
                  Número de WhatsApp <span style={{ color: 'var(--color-clay, #B75940)' }}>*</span>
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{
                      padding: '12px 10px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(35, 18, 33, 0.14)',
                      background: 'var(--color-canvas, #FAF7F2)',
                      fontSize: '13.5px',
                      color: 'var(--color-ink-primary, #22284A)',
                      outline: 'none',
                      cursor: 'pointer',
                      flex: '0 0 auto',
                      maxWidth: '145px',
                      fontFamily: 'inherit',
                    }}
                  >
                    {COUNTRY_CODES.map((c, i) => (
                      <option key={i} value={c.code}>{c.label}</option>
                    ))}
                  </select>

                  <input
                    id="quick-modal-phone"
                    type="tel"
                    required
                    placeholder="7123-4567 o teléfono"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(35, 18, 33, 0.14)',
                      background: 'var(--color-canvas, #FAF7F2)',
                      fontSize: '14.5px',
                      color: 'var(--color-ink-primary, #22284A)',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
              </div>

              {/* Correo Electrónico */}
              <div>
                <label htmlFor="quick-modal-email" style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--color-plum-900, #22284A)', marginBottom: '6px' }}>
                  Correo electrónico <span style={{ fontSize: '11px', color: 'var(--color-ink-secondary, #5D5458)', fontWeight: 400 }}>(para respaldo de cita)</span>
                </label>
                <input
                  id="quick-modal-email"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(35, 18, 33, 0.14)',
                    background: 'var(--color-canvas, #FAF7F2)',
                    fontSize: '14.5px',
                    color: 'var(--color-ink-primary, #22284A)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Notas breves (opcional) */}
              <div>
                <label htmlFor="quick-modal-notes" style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--color-plum-900, #22284A)', marginBottom: '6px' }}>
                  ¿Alguna preferencia de horario o nota breve? <span style={{ fontSize: '11px', color: 'var(--color-ink-secondary, #5D5458)', fontWeight: 400 }}>(opcional)</span>
                </label>
                <textarea
                  id="quick-modal-notes"
                  rows={2}
                  placeholder="Ej: Vivimos en San Salvador / Tardes a partir de las 6 pm"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(35, 18, 33, 0.14)',
                    background: 'var(--color-canvas, #FAF7F2)',
                    fontSize: '13.5px',
                    color: 'var(--color-ink-primary, #22284A)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    resize: 'none',
                  }}
                />
              </div>

              {/* Botón de Envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="v-button v-button--accent"
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '999px',
                  fontWeight: 600,
                  fontSize: '15px',
                  marginTop: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.75 : 1,
                  backgroundColor: 'var(--color-clay, #B75940)',
                  color: '#FFFFFF',
                  border: 'none',
                  boxShadow: '0 8px 20px rgba(183, 89, 64, 0.28)',
                }}
              >
                {isSubmitting ? (
                  <span>Registrando solicitud...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Enviar datos y abrir WhatsApp</span>
                  </>
                )}
              </button>

              {/* Confidencialidad Sanitaria */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  fontSize: '11.5px',
                  color: 'var(--color-ink-secondary, #5D5458)',
                  marginTop: '4px',
                  textAlign: 'center',
                }}
              >
                <ShieldCheck size={14} style={{ color: 'var(--color-clay, #B75940)', flexShrink: 0 }} />
                <span>Privacidad protegida · Registro Profesional Sanitario JVPP N.º 6380</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
