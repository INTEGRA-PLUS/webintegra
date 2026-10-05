import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Tv } from 'lucide-react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import MovilHero from '../Components/Movil/MovilHero';
import MovilPlan from '../Components/Movil/MovilPlan';
import PortabilidadSteps from '../Components/Movil/PortabilidadSteps';
import { PORTABILIDAD_URL } from '../Components/Movil/data/movil';

/**
 * Movil Page - Telefonía móvil con internet ilimitado y portabilidad (/movil).
 */
export default function Movil() {
  return (
    <div className="min-h-screen bg-white">
      <Head title="Telefonía Móvil" />
      <Navbar />

      <MovilHero />
      <MovilPlan />
      <PortabilidadSteps />

      {/* CTA final: móvil + televisión */}
      <section className="bg-white px-4 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-tevesat-primary to-tevesat-primary-light p-10 text-center shadow-[0_40px_90px_-30px_rgba(159,189,54,0.5)] md:p-16">
            <div className="pointer-events-none absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-white/10 blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
                Móvil, Internet y Televisión en un solo lugar
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-white/90">
                Haz tu portabilidad y complementa tu hogar con nuestros paquetes de televisión.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={PORTABILIDAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-10 py-5 font-black uppercase tracking-widest text-tevesat-primary shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Hacer portabilidad
                </a>
                <Link
                  href="/television"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/60 px-10 py-5 font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10"
                >
                  <Tv size={20} />
                  Ver televisión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
