import React, { useState, useEffect } from 'react';
import './App.css';
import SchemaMarkup from './components/SchemaMarkup';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoupleTherapyIntro from './components/CoupleTherapyIntro';
import CoupleMatchingQuiz from './components/CoupleMatchingQuiz';
import { BentoMosaic } from './components/cojeev/BentoMosaic';
import CulturalConnection from './components/CulturalConnection';
import Specialties from './components/Specialties';
import TheTeam from './components/TheTeam';
import MethodologyAndPricing from './components/MethodologyAndPricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import QuizTeaser from './components/QuizTeaser';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

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
import EnlacesBioPage from './pages/EnlacesBioPage';
import PrivacidadPage from './pages/PrivacidadPage';

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

  // ── Enrutamiento por subpáginas ────────────────────────────
  if (currentPath === '/test-de-pareja' || currentPath === '/tu-match' || currentPath === '/evaluacion-de-pareja') {
    return <CoupleMatchingQuiz onGoHome={() => navigateTo('/')} />;
  }

  if (currentPath === '/terapia-de-pareja') {
    return <TerapiaParejaPage />;
  }

  if (currentPath === '/sexologia-clinica') {
    return <SexologiaClinicaPage />;
  }

  if (currentPath === '/terapia-individual') {
    return <TerapiaIndividualPage />;
  }

  if (currentPath === '/salvadorenos-en-el-exterior' || currentPath === '/diaspora-salvadorena' || currentPath === '/terapia-salvadorenos-en-el-extranjero') {
    return <TerapiaDiasporaPage />;
  }

  if (currentPath === '/iris-alarcon') {
    return <IrisAlarconPage />;
  }

  if (currentPath === '/precios') {
    return <PreciosPage />;
  }

  if (currentPath === '/blog' || currentPath === '/recursos') {
    return <BlogHubPage />;
  }

  if (currentPath === '/blog/como-afecta-emigrar-a-la-relacion-de-pareja') {
    return <BlogPostEmigrarPareja />;
  }

  if (currentPath === '/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador') {
    return <BlogPostPreciosTerapia />;
  }

  if (currentPath === '/blog/como-poner-limites-a-tu-familia-desde-la-distancia') {
    return <BlogPostLimitesFamilia />;
  }

  if (currentPath === '/enlaces' || currentPath === '/links') {
    return <EnlacesBioPage />;
  }

  if (currentPath === '/privacidad' || currentPath === '/politica-de-privacidad') {
    return <PrivacidadPage />;
  }

  // ── Landing Page Principal (Estructurada para Máxima Conversión) ─
  return (
    <div className="app-wrapper">
      {/* ── Datos estructurados JSON-LD (SEO + GEO) ─── */}
      <SchemaMarkup />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero: Propuesta de valor + CTA de alta intención */}
        <Hero />

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

        {/* 8. Ecosistema Clínico Integral (Bento Mosaic de apoyo) */}
        <BentoMosaic />

        {/* 9. Quiz Interactivo / Matching Teaser (Captura de tráfico indeciso) */}
        <QuizTeaser />

        {/* 10. FAQ: Desactivación de objeciones restantes */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
