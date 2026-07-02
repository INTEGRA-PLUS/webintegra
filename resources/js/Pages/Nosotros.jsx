import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import AboutHero from '../Components/Nosotros/AboutHero';
import AboutStory from '../Components/Nosotros/AboutStory';
import AboutMissionVision from '../Components/Nosotros/AboutMissionVision';
import AboutValues from '../Components/Nosotros/AboutValues';
import AboutCta from '../Components/Nosotros/AboutCta';

/**
 * Nosotros Page - Página institucional (/nosotros).
 * Compone Navbar + secciones "Sobre Nosotros" + Footer sobre tema blanco.
 */
export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white">
      <Head title="Nosotros" />
      <Navbar />

      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutValues />
      <AboutCta />

      <Footer />
    </div>
  );
}
