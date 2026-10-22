import React from 'react';

/**
 * Colección de Iconos Artesanales de Centro Amaré
 * Estilo dibujo orgánico a mano alzada / Trazo cálido en terracota y crema
 * Basados en la identidad visual de la clínica.
 */

// 1. Sesión Online · Cercanía a Distancia (Laptop con brote/corazón)
export function IconSesionOnline({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Pantalla del laptop */}
      <rect x="16" y="16" width="32" height="23" rx="3.5" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Base / teclado del laptop */}
      <path d="M11 44C13 41.5 17 41 21 41H43C47 41 51 41.5 53 44C52 46.5 48 47 42 47H22C16 47 12 46.5 11 44Z" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hoja / corazón en pantalla */}
      <path d="M26 27C27.5 24 31 23.5 33 26C35 23.5 38.5 24 38 28C37.5 32 32 35 32 35C32 35 27 32 26 27Z" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 28V33" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 2. Dos Husos Horarios · Una Conversación (Reloj con sol a la izquierda y luna a la derecha)
export function IconDosHusosHorarios({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Esfera del reloj central */}
      <circle cx="34" cy="33" r="14" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Manecillas (10:10 o 12:15) */}
      <path d="M34 24V33H40" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Sol a la izquierda (día en el país de residencia) */}
      <circle cx="14" cy="33" r="3.2" fill={color} />
      <path d="M14 26V28M14 38V40M7 33H9M19 33H21M9 28L10.5 29.5M17.5 36.5L19 38M9 38L10.5 36.5M17.5 29.5L19 28" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Luna creciente a la derecha (noche en El Salvador / huso horario distinto) */}
      <path d="M52 27C55 29 56 32 56 35C56 39 53 42 50 43C53 40 53 34 50 30C50.5 29 51.2 28 52 27Z" fill={color} stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

// 3. Escucha Activa · Comprensión (Oreja con ondas de escucha)
export function IconEscuchaActiva({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Silueta exterior de la oreja */}
      <path d="M28 15C20 15 15 20 15 28C15 35 19 39 21 44C22.5 47 21 51 17 53" stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cartílago interior y canal */}
      <path d="M23 25C21 27 21 32 25 34C28 35.5 27 40 25 43" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      {/* Ondas sonoras de comprensión (3 arcos concéntricos) */}
      <path d="M35 27C38 30 38 36 35 39" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M42 22C47 28 47 38 42 44" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M49 17C56 26 56 44 49 51" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

// 4. Terapia de Pareja · Conexión (Dos hojas/manos que se unen con destello)
export function IconTerapiaPareja({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Hoja / mano izquierda inclinada */}
      <path d="M30 22C24 28 17 35 18 45C26 47 33 41 31 22Z" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 41C25 36 28 30 29 25" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Hoja / mano derecha inclinada hacia el centro */}
      <path d="M34 22C40 28 47 35 46 45C38 47 31 41 33 22Z" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 41C39 36 36 30 35 25" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Destello de conexión / chispa en el punto de encuentro */}
      <path d="M32 10V14" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M26 12L28 15" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M38 12L36 15" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

// 5. Intimidad · Vínculo (Dos anillos entrelazados)
export function IconIntimidad({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Anillo izquierdo */}
      <ellipse cx="27" cy="33" rx="13" ry="16" transform="rotate(-8 27 33)" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      {/* Anillo derecho entrelazado */}
      <ellipse cx="40" cy="33" rx="13" ry="16" transform="rotate(8 40 33)" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

// 6. Comunicación · Diálogo (Dos burbujas de conversación con punto de voz)
export function IconComunicacion({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Burbuja izquierda */}
      <path d="M24 43C16 43 11 37 11 29C11 20 17 14 27 14C37 14 43 20 43 28C43 31 41.5 34 39 36.5L40 44L33 41.5C30 42.5 27 43 24 43Z" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Burbuja derecha superpuesta */}
      <path d="M39 24C45 23 53 26 53 34C53 41 47 46 41 46C38 46 36 45 34 44L28 47L29 41C26.5 38.5 25.5 35.5 26.5 32" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Punto de voz / resonancia interior */}
      <circle cx="43" cy="34" r="3" fill={color} />
    </svg>
  );
}

// 7. Ansiedad · Pensamientos (Madeja enredada que se desenreda hasta un punto)
export function IconAnsiedad({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Enredo orgánico de pensamientos (garabato fluido continuo) */}
      <path d="M26 19C19 20 13 25 14 33C15 41 23 46 30 44C36 42 39 35 36 27C34 21 27 20 22 24C17 28 17 37 23 41C29 44 37 40 37 32C37 25 31 23 26 27C21 31 23 39 30 38C34 37 34 31 30 31" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hilo que se desenreda y avanza hacia la claridad */}
      <path d="M31 42C37 46 45 46 51 44" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      {/* Punto final de alivio */}
      <circle cx="56" cy="44" r="3.2" fill={color} />
    </svg>
  );
}

// 8. Calma · Respiración (Espiral zen que fluye en una onda serena)
export function IconCalma({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Espiral de respiración que se expande hacia la derecha */}
      <path d="M27 34C28 32 27 29 24 29C21 29 19 32 19 35C19 40 24 43 28 43C34 43 38 38 38 32C38 25 32 20 25 20C17 20 12 27 12 35C12 44 19 50 28 50C36 50 44 45 50 44" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Punto de quietud */}
      <circle cx="56" cy="44" r="3" fill={color} />
    </svg>
  );
}

// 9. Crecimiento · A Tu Ritmo (Brote/plántula con semilla solar)
export function IconCrecimiento({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Tallo central */}
      <path d="M32 50V33" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Hoja izquierda que se abre */}
      <path d="M32 37C24 37 18 31 19 25C26 24 31 29 32 37Z" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hoja derecha que se abre */}
      <path d="M32 37C40 37 46 31 45 25C38 24 33 29 32 37Z" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Semilla solar flotante arriba */}
      <circle cx="32" cy="18" r="3.4" fill={color} />
    </svg>
  );
}

// 10. Pertenencia · Hogar (Casita con sol en el tejado)
export function IconPertenencia({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Tejado de dos aguas */}
      <path d="M18 36L32 24L46 36" stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Paredes del hogar */}
      <path d="M22 35V52H42V35" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Puerta abierta */}
      <path d="M29 52V42H35V52" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sol sobre el tejado */}
      <circle cx="32" cy="15" r="3.8" fill={color} />
      <path d="M32 8V10M25 11L26.5 12.5M39 11L37.5 12.5M23 16H25M41 16H39" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 11. Privacidad · Confianza (Candado con hoja/corazón de protección)
export function IconPrivacidad({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Grillete superior del candado */}
      <path d="M24 28V20C24 15 28 11 33 11C38 11 42 15 42 20V28" stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cuerpo del candado */}
      <rect x="18" y="27" width="30" height="25" rx="6" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hoja / corazón en el interior */}
      <path d="M26 38C28 42 33 44 38 36C36 40 32 41 26 38Z" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 12. Proceso · Paso a Paso (Camino serpenteante con meta superior)
export function IconProceso({ size = 46, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Camino en forma de S que asciende paso a paso */}
      <path d="M19 50C28 48 35 48 41 45C47 42 45 36 37 34C28 32 26 27 33 24C38 22 41 20 37 17" stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Punto de llegada / meta */}
      <circle cx="38" cy="11" r="3.4" fill={color} />
    </svg>
  );
}
