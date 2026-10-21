import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';
import SchemaMarkup from './components/SchemaMarkup';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoupleTherapyIntro from './components/CoupleTherapyIntro';
import CoupleMatchingQuiz from './components/CoupleMatchingQuiz';
import CulturalConnection from './components/CulturalConnection';
import Specialties from './components/Specialties';
import TheTeam from './components/TheTeam';
import MethodologyAndPricing from './components/MethodologyAndPricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import QuizTeaser from './components/QuizTeaser';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { CityMarquee } from './components/cojeev/CityMarquee';

// Subpáginas de especialidad y conversión
import TerapiaParejaPage from './pages/TerapiaParejaPage';
import SexologiaClinicaPage from './pages/SexologiaClinicaPage';
import TerapiaIndividualPage from './pages/TerapiaIndividualPage';
import TerapiaDiasporaPage from './pages/TerapiaDiasporaPage';
import PreciosPage from './pages/PreciosPage';
import IrisAlarconPage from './pages/IrisAlarconPage';
import BlogHubPage from './pages/BlogHubPage';
import BlogPostEmigrarPareja from './pages/blog/BlogPostEmigrarPareja';
import BlogPostPreciosTerapia from './pages/blog/BlogPostPreciosTerapia';
import BlogPostLimitesFamilia from './pages/blog/BlogPostLimitesFamilia';
import BlogPostInfidelidad from './pages/blog/BlogPostInfidelidad';
import BlogPostFaltaDeseo from './pages/blog/BlogPostFaltaDeseo';
import BlogPostDueloMigratorio from './pages/blog/BlogPostDueloMigratorio';
import BlogPostFortalecerPareja from './pages/blog/BlogPostFortalecerPareja';
import EnlacesBioPage from './pages/EnlacesBioPage';
import PrivacidadPage from './pages/PrivacidadPage';
import NotFoundPage from './pages/NotFoundPage';

function App({ initialPath = '/' }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return initialPath;
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Intercepta clicks en enlaces internos para navegación SPA suave
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a');
      if (target) {
        const href = target.getAttribute('href');
        // Si es una ruta interna (no ancla hash puro ni enlace externo)
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          const [path, hash] = href.split('#');
          // Si es navegación a otra página
          if (path && path !== window.location.pathname) {
            e.preventDefault();
            window.history.pushState({}, '', href);
            setCurrentPath(path);
            if (hash) {
              setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const navigateTo = (path) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // ── Normalización de ruta (soporta con o sin barra final '/') ──
  const cleanPath = (currentPath || '').replace(/\/+$/, '') || '/';

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const titles = {
      '/': 'Terapia de Pareja El Salvador Online | Centro Amaré — Clínica de Psicología',
      '/test-de-pareja': 'Test de Pareja Online: Autoevaluación Clínica de Relación | Centro Amaré',
      '/tu-match': 'Test de Pareja Online: Autoevaluación de Relación | Centro Amaré',
      '/terapia-de-pareja': 'Terapia de Pareja en El Salvador Online | Centro Amaré',
      '/sexologia-clinica': 'Sexología Clínica y Terapia Sexual en El Salvador | Centro Amaré',
      '/terapia-individual': 'Psicología Online El Salvador · Clínica de Psicología JVPP | Centro Amaré',
      '/salvadorenos-en-el-exterior': 'Psicólogos Salvadoreños Online | Terapia en el Exterior — Centro Amaré',
      '/iris-alarcon': 'Licda. Iris Alarcón | Directora Clínica Centro Amaré (JVPP)',
      '/precios': 'Precios y Honorarios — Terapia de Pareja El Salvador | Centro Amaré',
      '/blog': 'Blog & Recursos Clínicos | Centro Amaré',
      '/blog/se-puede-perdonar-una-infidelidad-guia-pareja': '¿Se Puede Perdonar una Infidelidad? Guía Clínica de Pareja | Centro Amaré',
      '/blog/falta-de-deseo-sexual-en-la-pareja-soluciones': 'Falta de Deseo Sexual en la Pareja: Causas y Soluciones | Centro Amaré',
      '/blog/duelo-migratorio-que-es-como-manejarlo': 'Duelo Migratorio: Qué Es y Cómo Manejarlo | Centro Amaré',
      '/blog/fortalecer-relacion-pareja-ayuda-profesional': 'Cómo Fortalecer tu Relación de Pareja con Ayuda Profesional | Centro Amaré',
      '/privacidad': 'Política de Privacidad y Secreto Profesional | Centro Amaré'
    };
    if (titles[cleanPath]) {
      document.title = titles[cleanPath];
    }
  }, [cleanPath]);

  // ── Enrutamiento por subpáginas ────────────────────────────
  if (cleanPath === '/test-de-pareja' || cleanPath === '/tu-match' || cleanPath === '/evaluacion-de-pareja') {
    return <CoupleMatchingQuiz onGoHome={() => navigateTo('/')} />;
  }

  if (cleanPath === '/terapia-de-pareja') {
    return <TerapiaParejaPage />;
  }

  if (cleanPath === '/sexologia-clinica') {
    return <SexologiaClinicaPage />;
  }

  if (cleanPath === '/terapia-individual') {
    return <TerapiaIndividualPage />;
  }

  if (cleanPath === '/salvadorenos-en-el-exterior' || cleanPath === '/diaspora-salvadorena' || cleanPath === '/terapia-salvadorenos-en-el-extranjero') {
    return <TerapiaDiasporaPage />;
  }

  if (cleanPath === '/iris-alarcon') {
    return <IrisAlarconPage />;
  }

  if (cleanPath === '/precios') {
    return <PreciosPage />;
  }

  if (cleanPath === '/blog' || cleanPath === '/recursos') {
    return <BlogHubPage />;
  }

  if (cleanPath === '/blog/duelo-migratorio-que-es-como-manejarlo') {
    return <BlogPostDueloMigratorio />;
  }

  if (cleanPath === '/blog/fortalecer-relacion-pareja-ayuda-profesional') {
    return <BlogPostFortalecerPareja />;
  }

  if (cleanPath === '/blog/se-puede-perdonar-una-infidelidad-guia-pareja') {
    return <BlogPostInfidelidad />;
  }

  if (cleanPath === '/blog/falta-de-deseo-sexual-en-la-pareja-soluciones') {
    return <BlogPostFaltaDeseo />;
  }

  if (cleanPath === '/blog/como-afecta-emigrar-a-la-relacion-de-pareja') {
    return <BlogPostEmigrarPareja />;
  }

  if (cleanPath === '/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador') {
    return <BlogPostPreciosTerapia />;
  }

  if (cleanPath === '/blog/como-poner-limites-a-tu-familia-desde-la-distancia') {
    return <BlogPostLimitesFamilia />;
  }

  if (cleanPath === '/enlaces' || cleanPath === '/links') {
    return <EnlacesBioPage />;
  }

  if (cleanPath === '/privacidad' || cleanPath === '/politica-de-privacidad' || cleanPath === '/cookies' || cleanPath === '/politica-de-cookies') {
    return <PrivacidadPage />;
  }

  // Si no es la ruta raíz ('/' o ''), se trata de una página no existente (404 real)
  if (cleanPath !== '/' && cleanPath !== '') {
    return <NotFoundPage />;
  }

  // ── Landing Page Principal (Estructurada para Máxima Conversión) ─
  return (
    <div className="app-wrapper">
      {/* Enlace accesible para saltar navegación (WCAG AA) */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* ── Datos estructurados JSON-LD (SEO + GEO) ─── */}
      <SchemaMarkup />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Hero: Propuesta de valor + CTA de alta intención */}
        <Hero />

        {/* 000h Marquee: Presencia transnacional y sellos de confianza */}
        <CityMarquee />

        {/* 2. Empatía con el problema: 6 motivos y dinámicas frecuentes + Micro-CTA */}
        <CoupleTherapyIntro />

        {/* 3. Autoridad y Confianza: Iris Alarcón (Directora Clínica) */}
        <TheTeam />

        {/* 4. Conexión Cultural: Diáspora salvadoreña (EE.UU., Canadá, Europa) */}
        <CulturalConnection />

        {/* 5. Especialidades Interactivas: Elige tu situación */}
        <Specialties />

        {/* 6. Prueba Social: Testimonios de pacientes antes de hablar de costos */}
        <Testimonials />

        {/* 7. Metodología Clínica en 4 fases + Plan mensual accesible */}
        <MethodologyAndPricing />

        {/* 9. Quiz Interactivo / Matching Teaser (Captura de tráfico indeciso) */}
        <QuizTeaser />

        {/* 10. FAQ: Desactivación de objeciones restantes */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}

export default App;
