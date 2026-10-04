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
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
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
        if (href === '/tu-match' || href === '/') {
          e.preventDefault();
          window.history.pushState({}, '', href);
          setCurrentPath(href);
          window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // ── Si el usuario está en la página del Matching Quiz ─────
  if (currentPath === '/tu-match') {
    return <CoupleMatchingQuiz onGoHome={() => navigateTo('/')} />;
  }

  // ── Landing Page Principal ────────────────────────────────
  return (
    <div className="app-wrapper">
      {/* ── Datos estructurados JSON-LD (SEO + GEO) ─── */}
      <SchemaMarkup />

      {/* Navigation with 000h aesthetic */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section with 000h HeroButton and PigmentAtmosphere */}
        <Hero />

        {/* ── Introducción e Ilustración Terapia de Pareja ─── */}
        <CoupleTherapyIntro />

        {/* 000h Bento Grid Architecture (Ecosistema Clínico) */}
        <BentoMosaic />

        {/* Salvadoran Diaspora & Cultural Belonging Section */}
        <CulturalConnection />

        {/* Prioritized Clinical Specialties */}
        <Specialties />

        {/* The Clinicians (Iris Alarcón + Associated Specialist) */}
        <TheTeam />

        {/* Methodology, 30 min Free Intake & $100/mo Installments */}
        <MethodologyAndPricing />

        {/* Patient Stories & Real Diaspora Cases */}
        <Testimonials />

        {/* FAQ Accordion */}
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
