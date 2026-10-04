/**
 * SchemaMarkup — Centro Amaré
 * 
 * Implementa datos estructurados JSON-LD completos para:
 *  - SEO tradicional (rich snippets en Google)
 *  - GEO (Generative Engine Optimization — citaciones en IA como ChatGPT, Gemini, Perplexity)
 * 
 * Schemas incluidos:
 *  1. WebSite (con SearchAction)
 *  2. MedicalBusiness
 *  3. Person (Iris Alarcón)
 *  4. FAQPage (los 7 FAQs)
 *  5. OfferCatalog (precios y servicios)
 */

const SITE_URL = 'https://terapiadeparejaelsalvador.com';

// ─────────────────────────────────────────────
// 1. WebSite Schema
// ─────────────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Centro Amaré',
  alternateName: 'Centro Amaré Psicoterapia Online',
  url: SITE_URL,
  description:
    'Centro digital de psicoterapia basada en evidencia para adultos y parejas salvadoreñas en El Salvador y la diáspora (Canadá, EE.UU., Europa).',
  inLanguage: 'es',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
  hasPart: [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/tu-match`,
      name: 'Evaluación y Matching de Pareja Online',
      description: 'Cuestionario clínico interactivo de 5 pasos para evaluar la situación de la pareja y recibir una recomendación terapéutica personalizada.',
      url: `${SITE_URL}/tu-match`,
    }
  ]
};

// ─────────────────────────────────────────────
// 2. MedicalBusiness Schema
// ─────────────────────────────────────────────
const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: 'Centro Amaré',
  alternateName: 'Centro Amaré Psicoterapia Online Salvadoreña',
  legalName: 'Centro Amaré',
  description:
    'Centro digital de psicoterapia basada en evidencia para adultos y parejas. Especialistas en terapia de pareja, sexología clínica y atención transcultural a la diáspora salvadoreña en Canadá, EE.UU. y Europa.',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/logo.png`,
  },
  image: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  telephone: '+50373184781',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+50373184781',
    contactType: 'customer service',
    contactOption: 'TollFree',
    availableLanguage: ['Spanish'],
  },
  // Atiende online a nivel internacional
  areaServed: [
    { '@type': 'Country', name: 'El Salvador' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'Country', name: 'Mexico' },
    { '@type': 'AdministrativeArea', name: 'Montreal, Quebec' },
    { '@type': 'AdministrativeArea', name: 'Los Angeles, California' },
  ],
  medicalSpecialty: [
    'https://schema.org/MentalHealth',
    'https://schema.org/Psychiatry',
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, Bank Transfer, International Transfer',
  // Empleada / Directora Clínica
  employee: {
    '@id': `${SITE_URL}/#iris-alarcon`,
  },
  // Servicios disponibles
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Psicoterapia Online — Centro Amaré',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Sesión Inicial de Encuadre — Gratuita (30 min)',
        description:
          'Primera sesión gratuita de 30 minutos por Google Meet. La psicóloga evalúa tu caso y te explica el plan terapéutico. Sin compromiso.',
        price: '0',
        priceCurrency: 'USD',
        eligibleRegion: [
          { '@type': 'Country', name: 'El Salvador' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'United States' },
        ],
      },
      {
        '@type': 'Offer',
        name: 'Plan Mensual — Hasta 4 Sesiones de 50-60 min',
        description:
          'Hasta 4 sesiones terapéuticas mensuales de 50-60 minutos por Google Meet. Incluye tareas clínicas entre sesiones y coordinación directa con asistente.',
        price: '100',
        priceCurrency: 'USD',
        billingPeriod: 'P1M',
        eligibleRegion: [
          { '@type': 'Country', name: 'El Salvador' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Spain' },
        ],
      },
    ],
  },
  // Servicios médicos
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Terapia de Pareja Online',
      alternateName: ['Terapia Integral de Pareja', 'Couple Therapy Online'],
      description:
        'Terapia de pareja online estructurada en 4 fases clínicas (Evaluación y Mapa del Vínculo, Desescalada Emocional, Reconstrucción de Intimidad y Acuerdos, Consolidación y Alta). Enfoque basado en evidencia (Terapia Integral de Pareja + TCC) para salvadoreños en el país y en el exterior.',
      relevantSpecialty: 'https://schema.org/MentalHealth',
      url: `${SITE_URL}/#honorarios`,
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Terapia Individual (TCC)',
      alternateName: ['Terapia Cognitivo Conductual', 'Individual Therapy Online'],
      description:
        'Terapia individual para adultos: ansiedad, rumiación, apegos, rupturas y regulación emocional. Enfoque TCC y DBT con base científica.',
      relevantSpecialty: 'https://schema.org/MentalHealth',
      url: `${SITE_URL}/#especialidades`,
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Sexología Clínica',
      alternateName: ['Clinical Sexology', 'Sexología Médica'],
      description:
        'Abordaje riguroso, científico y libre de tabúes de la sexualidad humana. Espacio privado y profesional para parejas e individuos.',
      relevantSpecialty: 'https://schema.org/MentalHealth',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Psicoterapia Transcultural — Diáspora Salvadoreña',
      alternateName: ['Duelo Migratorio', 'Terapia para Migrantes', 'Transcultural Therapy'],
      description:
        'Atención especializada para salvadoreños en Montreal, Los Ángeles, Washington, Madrid y el mundo. Terapeuta que comparte tu código cultural, sin necesidad de explicar el contexto.',
      relevantSpecialty: 'https://schema.org/MentalHealth',
    },
  ],
  // Reseñas (testimonios estructurados)
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '3',
    reviewCount: '3',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Andrea & Mauricio' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Recuperamos la complicidad sin tener que explicar de dónde venimos. Con Centro Amaré fue directo al corazón de nuestra dinámica desde la primera sesión.',
      datePublished: '2026-01-15',
      name: 'Recuperamos la complicidad',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Karla M.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Aprendí a poner límites y detuve el insomnio por sobrepensamiento. Me enseñaron herramientas cognitivo-conductuales reales, no frases de autoayuda barata.',
      datePublished: '2026-02-20',
      name: 'Aprendí a poner límites',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rodrigo & Sofía' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Poder abordar temas de sexualidad con profesionalismo médico salvó nuestro matrimonio. La atención por videollamada nos dio la privacidad exacta que necesitábamos.',
      datePublished: '2026-03-10',
      name: 'Terapia de sexología que salvó nuestro matrimonio',
    },
  ],
  sameAs: [
    `https://wa.me/50373184781`,
  ],
};

// ─────────────────────────────────────────────
// 3. Person — Iris Alarcón
// ─────────────────────────────────────────────
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#iris-alarcon`,
  name: 'Iris Alarcón',
  givenName: 'Iris',
  familyName: 'Alarcón',
  jobTitle: 'Psicóloga Clínica',
  description:
    'Psicóloga Clínica salvadoreña con Máster en Terapia de Pareja y Sexología Clínica. Más de 9 años de experiencia en consulta privada. Especialista en TCC, terapia de pareja transnacional y atención a la diáspora salvadoreña.',
  image: `${SITE_URL}/images/hero-therapist.jpg`,
  url: `${SITE_URL}/#equipo`,
  worksFor: {
    '@id': `${SITE_URL}/#organization`,
  },
  knowsAbout: [
    'Terapia Cognitivo-Conductual (TCC)',
    'Terapia Integral de Parejas',
    'Sexología Clínica Médica',
    'Terapia Dialéctico-Conductual (DBT)',
    'Psicología Transcultural',
    'Duelo Migratorio',
    'Terapia para la Diáspora Salvadoreña',
    'Regulación Emocional',
    'Apego y Vínculos Afectivos',
    'Ansiedad y Rumiación',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Licenciatura en Psicología Clínica',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'postgraduate',
      name: 'Máster en Terapia de Pareja y Sexología Clínica',
    },
  ],
  nationality: {
    '@type': 'Country',
    name: 'El Salvador',
  },
};

// ─────────────────────────────────────────────
// 4. FAQPage Schema
// ─────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo funciona la sesión inicial gratuita de 30 minutos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una sesión de encuadre por Google Meet sin ningún compromiso económico. La asistente coordina tu horario y te envía el enlace. En esos 30 minutos, la psicóloga escucha tu motivo de consulta, evalúa tu contexto y te explica con claridad cómo se abordaría tu caso y cuántas sesiones se recomiendan. Si decides continuar, se formaliza el plan en cuotas mensuales; si decides no hacerlo, no habrás pagado nada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mi pareja tiene dudas o resistencia a hacer terapia, ¿cómo proceder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es muy común que uno de los dos sienta más urgencia que el otro. En la sesión inicial gratuita de 30 minutos, el objetivo no es juzgar ni buscar culpables, sino abrir un espacio neutral donde ambos puedan expresar qué les incomoda sin miedo al reproche. Muchos pacientes que venían con dudas descubren en esa primera media hora que la terapia no es un tribunal, sino una herramienta para aliviar el desgaste cotidiano.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vivimos en países o ciudades distintas (ej. uno en Canadá y otro en El Salvador), ¿es posible hacer terapia de pareja online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Totalmente. Es una de nuestras mayores especialidades. La videollamada por Google Meet permite conectar a ambos miembros de la pareja desde enlaces simultáneos en diferentes husos horarios. Adaptamos la agenda para que los horarios coincidan sin problemas con su rutina laboral.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué el contacto inicial es por WhatsApp con una persona y no con un bot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Porque en salud mental la empatía empieza desde el primer hola. No queremos que una persona que está atravesando angustia o una crisis de pareja sea atendida por un contestador automático con menús infinitos. Nuestra asistente te recibe, responde tus dudas de manera humana y busca el horario más conveniente para tu videollamada con la psicóloga.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se realizan los pagos si vivo en el exterior (Canadá, EE.UU., Europa)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aceptamos pagos internacionales de manera 100% segura mediante tarjeta de crédito o débito a través de pasarelas con cifrado bancario, así como transferencias bancarias internacionales o locales en El Salvador. La cuota mensual es fija y transparente, sin cargos sorpresa de divisas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué ocurre después de completar las 16 o 20 sesiones de terapia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Por ética profesional y según los protocolos de la psicología basada en evidencia, el proceso tiene un cierre formal llamado alta terapéutica. Evitamos expresamente generar dependencia con el terapeuta. Si has adquirido las herramientas de comunicación, regulación emocional y resolución de conflictos, nuestro trabajo ha terminado con éxito para que disfrutes tu vida con plena autonomía.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa con la confidencialidad de mis sesiones de psicoterapia online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La confidencialidad es absoluta bajo el secreto profesional de la psicología clínica. Las sesiones se realizan a través de Google Meet con conexiones cifradas de extremo a extremo, en despachos privados y seguros donde solo estás tú (o tu pareja) y la terapeuta.',
      },
    },
  ],
};

// ─────────────────────────────────────────────
// Componente React
// ─────────────────────────────────────────────
export default function SchemaMarkup() {
  const schemas = [websiteSchema, medicalBusinessSchema, personSchema, faqSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
        />
      ))}
    </>
  );
}
