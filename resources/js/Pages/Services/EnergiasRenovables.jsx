import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../../Components/Home/Navbar';
import Footer from '../../Components/Home/Footer';
import EnergiaHero from '../../Components/Energias/EnergiaHero';
import EnergiaServices from '../../Components/Energias/EnergiaServices';
import EnergiaImpact from '../../Components/Energias/EnergiaImpact';
import EnergiaCommitment from '../../Components/Energias/EnergiaCommitment';
import EnergiaCta from '../../Components/Energias/EnergiaCta';

/**
 * Energías Renovables - Página de servicio con identidad natural/ambiental
 * (paleta verde). No usa el ServiceLayout oscuro para tener su propio estilo.
 */
export default function EnergiasRenovables() {
  return (
    <div className="min-h-screen bg-white">
      <Head title="Energías Renovables" />
      <Navbar />

      <EnergiaHero />
      <EnergiaServices />
      <EnergiaImpact />
      <EnergiaCommitment />
      <EnergiaCta />

      <Footer />
    </div>
  );
}
