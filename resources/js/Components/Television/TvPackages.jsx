import React from 'react';
import { Satellite } from 'lucide-react';
import TvPackageCard from './TvPackageCard';
import { TV_PACKAGES, TV_ALLIANCE } from './data/tv';

/**
 * TvPackages - Hero de la página de Televisión (Alianza NUPLIN & TVYMAS).
 *
 * Header con fondo oscuro en degradado y las tarjetas de paquete superpuestas
 * sobre el borde inferior (estilo folleto), sobre una base blanca.
 */
export default function TvPackages() {
  return (
    <section id="planes-tv" className="relative bg-white">
      {/* Bloque hero oscuro */}
      <div
        className="relative overflow-hidden px-4 pt-40 pb-44 md:px-8 md:pb-60"
        style={{
          background:
            'linear-gradient(160deg, #171717 0%, #201013 55%, #2b0e11 100%)',
        }}
      >
        {/* Glows decorativos */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-tevesat-primary/20 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-10 right-1/4 h-96 w-96 rounded-full bg-tevesat-primary/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-sm">
            <Satellite size={16} className="text-tevesat-primary-light" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white">
              {TV_ALLIANCE.eyebrow}
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
            Televisión Digital{' '}
            <span className="bg-gradient-to-r from-tevesat-primary-light to-tevesat-primary bg-clip-text text-transparent">
              IPTV
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/70 md:text-xl">
            Gracias a la integración con <strong className="font-black text-white">NUPLIN</strong> a
            través de <strong className="font-black text-white">TVYMAS</strong>, ofrecemos un
            servicio de televisión interactivo de alta calidad para que disfrutes de tus canales
            favoritos desde cualquier dispositivo.
          </p>
        </div>
      </div>

      {/* Tarjetas superpuestas */}
      <div className="relative z-20 mx-auto -mt-36 max-w-7xl px-4 pb-8 md:-mt-48 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          {TV_PACKAGES.map((pkg) => (
            <TvPackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
