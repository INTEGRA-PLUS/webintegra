import React from 'react';
import { Head } from '@inertiajs/react';
import { Gauge } from 'lucide-react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import SpeedTest from '../Components/SpeedTest/SpeedTest';

/**
 * Speedtest Page - Test de velocidad (/speedtest).
 */
export default function Speedtest() {
  return (
    <div className="min-h-screen bg-white">
      <Head title="Test de Velocidad" />
      <Navbar />

      {/* Hero + medidor */}
      <section className="relative overflow-hidden bg-white px-4 pt-40 pb-24 md:px-8">
        <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-tevesat-primary/10 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
            backgroundSize: '34px 34px',
          }}
        />

        <div className="relative z-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tevesat-primary/20 bg-tevesat-primary/5 px-5 py-2">
              <Gauge size={16} className="text-tevesat-primary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
                Test de Velocidad
              </span>
            </div>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-6xl">
              Mide tu <span className="italic text-tevesat-primary">velocidad real</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg font-medium leading-relaxed text-gray-500">
              Comprueba en segundos la velocidad de descarga, subida y la latencia de tu
              conexión. Para resultados precisos, conéctate por cable y cierra otras descargas.
            </p>
          </div>

          <SpeedTest />
        </div>
      </section>

      <Footer />
    </div>
  );
}
