import React from 'react';
import { Shield, Globe, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const scrollToPlans = (e) => {
    e.preventDefault();
    const plansSection = document.getElementById('planes');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 px-4 md:px-8">
      {/* Acentos decorativos suaves */}
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] -mr-96 -mt-96 rounded-full bg-tevesat-primary/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          {/* Izquierda: títulos de servicios */}
          <div className="space-y-12 lg:col-span-3">
            <div className="group cursor-default">
              <h3 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">Soluciones Corporativas</h3>
              <h2 className="text-3xl font-black leading-tight text-tevesat-tertiary-dark transition-colors duration-300 group-hover:text-tevesat-primary md:text-4xl">
                SERVICIOS PARA <span className="italic">EMPRESAS</span>
              </h2>
              <div className="mt-4 h-1 w-12 bg-tevesat-primary transition-all duration-700 group-hover:w-full" />
            </div>

            <div className="group cursor-default">
              <h3 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">Conectividad Total</h3>
              <h2 className="text-3xl font-black leading-tight text-tevesat-tertiary-dark transition-colors duration-300 group-hover:text-tevesat-primary md:text-4xl">
                SERVICIOS PARA <span className="italic">HOGAR</span>
              </h2>
              <div className="mt-4 h-1 w-12 bg-tevesat-primary transition-all duration-700 group-hover:w-full" />
            </div>
          </div>

          {/* Centro: imagen */}
          <div className="group relative lg:col-span-5">
            <div className="absolute -inset-4 rounded-[3rem] bg-tevesat-primary/10 blur-2xl transition-all duration-700 group-hover:bg-tevesat-primary/20" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000"
                alt="Diseño de Servicios Integra"
                className="h-full w-full transform object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tevesat-tertiary-dark/70 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="mb-2 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/90">
                  <Shield size={18} className="text-white" />
                  Garantía de Conexión
                </div>
              </div>
            </div>
          </div>

          {/* Derecha: promesa y CTA */}
          <div className="space-y-8 lg:col-span-4 lg:pl-8">
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] italic text-tevesat-primary">
                Nuestra Promesa
              </h4>
              <p className="text-4xl font-black leading-[0.9] tracking-tighter text-tevesat-tertiary-dark md:text-5xl">
                SOMOS EL <br />
                <span className="italic text-tevesat-primary">RESPALDO</span> <br />
                DE NUESTROS CLIENTES
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-600">
                <Globe size={24} className="flex-shrink-0 text-tevesat-primary" />
                <p className="text-lg font-bold leading-tight text-tevesat-tertiary-dark">
                  INTERNET HOGAR Y EMPRESAS <br />
                  <span className="text-sm font-medium uppercase tracking-widest text-gray-400">Al alcance de todos, zona rural y urbana</span>
                </p>
              </div>

              <a
                href="#planes"
                onClick={scrollToPlans}
                className="group flex transform items-center justify-between rounded-2xl bg-tevesat-primary px-8 py-6 font-black uppercase tracking-widest text-white shadow-xl shadow-tevesat-primary/30 transition-all duration-500 hover:scale-105 hover:bg-tevesat-primary-light active:scale-95"
              >
                Ver nuestros planes
                <ArrowRight size={24} className="transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
