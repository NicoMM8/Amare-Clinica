/**
 * SchemaMarkup — Centro Amaré
 * 
 * Implementa datos estructurados JSON-LD completos para:
 *  - SEO tradicional (rich snippets válidos en Google, sin spam estructurado)
 *  - GEO (Generative Engine Optimization — citaciones en ChatGPT, Gemini, Perplexity)
 * 
 * Schemas incluidos:
 *  1. WebSite (con enlaces a secciones y páginas)
 *  2. MedicalBusiness (Psicología y Salud Mental, área atendida, catálogo de ofertas transparente)
 *  3. Person (Iris Alarcón — Directora Clínica, credenciales y especialidades)
 *  4. FAQPage (los 7 FAQs canónicos sincronizados 100% con el contenido visible)
 */

import React from 'react';
import { FAQS } from '../data/faqs';

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
    'Centro de psicoterapia online basada en evidencia para adultos y parejas salvadoreñas en El Salvador y la diáspora (Canadá, EE.UU., Europa).',
  inLanguage: 'es',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
  hasPart: [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/test-de-pareja`,
      name: 'Test de Pareja Online: Autoevaluación Clínica',
      description: 'Cuestionario clínico interactivo de 5 pasos para evaluar la situación de la pareja y recibir una recomendación terapéutica personalizada.',
      url: `${SITE_URL}/test-de-pareja`,
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/terapia-de-pareja`,
      name: 'Terapia de Pareja en El Salvador Online',
      url: `${SITE_URL}/terapia-de-pareja`,
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/sexologia-clinica`,
      name: 'Sexología Clínica y Terapia de Intimidad',
      url: `${SITE_URL}/sexologia-clinica`,
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/terapia-individual`,
      name: 'Terapia Individual (TCC y Ansiedad)',
      url: `${SITE_URL}/terapia-individual`,
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/salvadorenos-en-el-exterior`,
      name: 'Psicólogos Salvadoreños Online | Terapia en EE. UU., Canadá y el Exterior',
      url: `${SITE_URL}/salvadorenos-en-el-exterior`,
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/iris-alarcon`,
      name: 'Psicóloga Iris Alarcón El Salvador (JVPP)',
      url: `${SITE_URL}/iris-alarcon`,
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/precios`,
      name: 'Precios y Honorarios — Terapia de Pareja El Salvador',
      url: `${SITE_URL}/precios`,
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog`,
      name: 'Blog y Guías Clínicas de Psicología',
      url: `${SITE_URL}/blog`,
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
    'Centro de psicoterapia clínica basada en evidencia para adultos y parejas. Especialistas en terapia de pareja, sexología clínica y atención transcultural a la diáspora salvadoreña en Canadá, EE.UU. y Europa.',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/logo-nav.png`,
    width: 228,
    height: 96,
  },
  image: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  telephone: '+50373184781',
  email: 'contacto@terapiadeparejaelsalvador.com',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+50373184781',
    contactType: 'customer service',
    contactOption: 'TollFree',
    availableLanguage: ['Spanish', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle El Mirador y 89 Av. Norte, Colonia Escalón',
    addressLocality: 'San Salvador',
    addressRegion: 'San Salvador',
    postalCode: '1101',
    addressCountry: 'SV',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.7013,
    longitude: -89.2244,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'El Salvador' },
    { '@type': 'City', name: 'San Salvador' },
    { '@type': 'City', name: 'Santa Tecla' },
    { '@type': 'City', name: 'Antiguo Cuscatlán' },
    { '@type': 'City', name: 'Santa Ana' },
    { '@type': 'City', name: 'San Miguel' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'AdministrativeArea', name: 'Montreal, Quebec' },
    { '@type': 'AdministrativeArea', name: 'Los Angeles, California' },
    { '@type': 'AdministrativeArea', name: 'Washington, D.C.' },
  ],
  medicalSpecialty: [
    'https://schema.org/MentalHealth',
  ],
  sameAs: [
    'https://www.psico.org/centro-47096',
    'https://wa.me/50373184781',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '6',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Roberto' },
      datePublished: '2025-11-18',
      reviewBody: 'Trabaje junto con mi esposa varios temas que no lograbamos resolver por nuestra cuenta y con las herramientas que Iris nos brindo pudimos salir adelante y sentirnos de nuevo fuertes como pareja',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Adriana' },
      datePublished: '2025-11-05',
      reviewBody: 'Excelente psicóloga, muy profesional y humana. Desde la primera sesión me hizo sentir cómoda y en confianza. Sus consejos y técnicas me han ayudado muchísimo a manejar la ansiedad y mejorar mi bienestar. La recomiendo con todo mi corazón.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Stephanie A' },
      datePublished: '2025-03-03',
      reviewBody: 'Me sentí muy cómoda en las sesiones con Iris, comprendida lo que me dejo ser abierta con ella para que me apoyara con unos problemas personales que tenia',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'A.G.S' },
      datePublished: '2024-06-26',
      reviewBody: 'Me ayudó mucho en mi proceso de separación, la recomiendo mucho, muy buena terapeuta',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'DIANA DIAZ' },
      datePublished: '2025-11-18',
      reviewBody: 'Muy recomendada, me ayudo mucho con mi crecimiento personal, excelente profesional',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Laura' },
      datePublished: '2025-11-18',
      reviewBody: 'me ayudo muchísimo y la recomiendo 100%',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, Debit Card, Bank Transfer (Banco Agrícola, BAC, Cuscatlán), International Transfer',
  employee: {
    '@id': `${SITE_URL}/#iris-alarcon`,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Psicoterapia Online — Centro Amaré',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Primera conversación de valoración — Sin costo (30 min)',
        description:
          'Primera conversación de 30 minutos sin costo por Google Meet. La psicóloga evalúa tu caso y te explica el plan de trabajo con honestidad. Sin compromiso.',
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
          'Hasta 4 sesiones terapéuticas mensuales de 50-60 minutos por Google Meet ($25 USD por sesión). Incluye tareas clínicas entre sesiones y coordinación directa con asistente. Sin permanencia mínima.',
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
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Terapia de Pareja Online',
      alternateName: ['Terapia Integral de Pareja', 'Couple Therapy Online'],
      description:
        'Terapia de pareja online estructurada en 4 fases clínicas (Evaluación y Mapa del Vínculo, Desescalada Emocional, Reconstrucción de Intimidad y Acuerdos, Consolidación y Alta). Enfoque basado en evidencia (Terapia Integral de Pareja + TCC) para salvadoreños en el país y en el exterior.',
      relevantSpecialty: 'https://schema.org/MentalHealth',
      url: `${SITE_URL}/terapia-de-pareja`,
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Terapia Individual (TCC)',
      alternateName: ['Terapia Cognitivo Conductual', 'Individual Therapy Online'],
      description:
        'Terapia individual para adultos: ansiedad, rumiación, apegos, rupturas y regulación emocional. Enfoque TCC y DBT con base científica.',
      relevantSpecialty: 'https://schema.org/MentalHealth',
      url: `${SITE_URL}/terapia-individual`,
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Sexología Clínica',
      alternateName: ['Clinical Sexology', 'Sexología Médica'],
      description:
        'Abordaje riguroso, científico y libre de tabúes de la sexualidad humana. Espacio privado y profesional para parejas e individuos.',
      relevantSpecialty: 'https://schema.org/MentalHealth',
      url: `${SITE_URL}/sexologia-clinica`,
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Psicoterapia Transcultural — Diáspora Salvadoreña',
      alternateName: ['Duelo Migratorio', 'Terapia para Migrantes', 'Transcultural Therapy'],
      description:
        'Atención especializada para salvadoreños en Montreal, Los Ángeles, Washington, Madrid y el mundo. Terapeuta que comparte tu código cultural, sin necesidad de explicar el contexto.',
      relevantSpecialty: 'https://schema.org/MentalHealth',
      url: `${SITE_URL}/terapia-salvadorenos-en-el-extranjero`,
    },
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
  jobTitle: 'Psicóloga Clínica y Directora Clínica',
  identifier: 'JVPP N.° 47096',
  description:
    'Psicóloga Clínica salvadoreña con Máster en Terapia de Pareja y Sexología Clínica. Especialista en TCC, terapia de pareja transnacional y atención a personas y parejas en El Salvador y en el exterior.',
  image: `${SITE_URL}/images/iris-alarcon.jpg`,
  url: `${SITE_URL}/#equipo`,
  sameAs: [
    'https://www.psico.org/centro-47096',
  ],
  worksFor: {
    '@id': `${SITE_URL}/#organization`,
  },
  knowsAbout: [
    'Terapia Cognitivo-Conductual (TCC)',
    'Terapia Integral de Parejas',
    'Sexología Clínica',
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
      credentialCategory: 'license',
      name: 'Registro Profesional Sanitario JVPP N.º 47096',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Junta de Vigilancia de la Profesión en Psicología de El Salvador (JVPP)',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Licenciatura en Psicología Clínica',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Junta de Vigilancia de la Profesión en Psicología de El Salvador (JVPP)',
      },
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
// 4. FAQPage Schema (Sincronizado dinámicamente con FAQS)
// ─────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
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
