import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import TvPackages from '../Components/Television/TvPackages';
import ChannelCategories from '../Components/Television/ChannelCategories';
import ChannelGuide from '../Components/Television/ChannelGuide';
import TvCta from '../Components/Television/TvCta';

/**
 * Television Page - Página de Televisión DGO (/television).
 * Compone Navbar + secciones de TV + Footer en tema blanco.
 */
export default function Television() {
  return (
    <div className="min-h-screen bg-white">
      <Head title="Televisión" />
      <Navbar />

      <TvPackages />
      <ChannelCategories />
      <ChannelGuide />
      <TvCta />

      <Footer />
    </div>
  );
}
