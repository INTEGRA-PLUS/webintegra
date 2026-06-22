import React from 'react';
import { MapPin } from 'lucide-react';

export default function CoverageSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 px-4 md:px-8 md:py-32">
      {/* Acento decorativo */}
      <div className="absolute top-1/2 left-0 -ml-64 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-tevesat-primary/5 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Título */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-block rounded-full border border-tevesat-primary/20 bg-tevesat-primary/5 px-4 py-1 text-xs font-black uppercase tracking-widest text-tevesat-primary">
            Nuestra Red
          </div>
          <h2 className="mb-6 text-5xl font-black leading-tight text-tevesat-tertiary-dark md:text-7xl">
            LLEGAMOS A <span className="uppercase italic text-tevesat-primary">CUALQUIER LUGAR</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-gray-500">
            Nuestra infraestructura está lista para conectarte con la máxima velocidad disponible en Villavicencio y municipios aledaños.
            <br />
            <span className="text-tevesat-primary">También contamos con cobertura en veredas y fincas.</span>
          </p>
        </div>

        {/* Mapa */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[3rem] border border-gray-100 bg-white shadow-[0_40px_90px_-30px_rgba(0,0,0,0.3)]">
            <img
              src="/images/cobertura.png"
              alt="Mapa de Cobertura Integra"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-tevesat-tertiary-dark/20 via-transparent to-transparent"></div>
          </div>

          {/* Info de cobertura */}
          <div>
            <h3 className="mb-10 text-3xl font-black uppercase leading-[0.9] tracking-tighter text-tevesat-tertiary-dark">Zonas de Cobertura Activa</h3>

            <div className="mb-12 space-y-10">
              <div className="group flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-tevesat-primary shadow-lg shadow-tevesat-primary/20 transition-transform duration-500 group-hover:rotate-12">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                </div>
                <div>
                  <p className="mb-2 text-xl font-black uppercase tracking-wider text-tevesat-tertiary-dark">Villavicencio Centro</p>
                  <p className="text-base font-medium italic leading-relaxed text-gray-500">Despliegue total en casco urbano con Fibra Óptica Directa.</p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white transition-transform duration-500 group-hover:rotate-12">
                  <div className="h-4 w-4 rounded-full bg-tevesat-primary"></div>
                </div>
                <div>
                  <p className="mb-2 text-xl font-black uppercase tracking-wider text-tevesat-tertiary-dark">Municipios Aledaños</p>
                  <p className="text-base font-medium italic leading-relaxed text-gray-500">Acacías, Restrepo, Cumaral y más sectores de la región.</p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white transition-transform duration-500 group-hover:rotate-12">
                  <div className="h-4 w-4 rounded-full bg-tevesat-primary"></div>
                </div>
                <div>
                  <p className="mb-2 text-xl font-black uppercase tracking-wider text-tevesat-tertiary-dark">Veredas y Fincas</p>
                  <p className="text-base font-medium italic leading-relaxed text-gray-500">Llevamos internet de alta calidad a zonas rurales, veredas y fincas.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/573142497234"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full transform rounded-2xl bg-tevesat-primary py-6 text-center font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-tevesat-primary/30 transition-all duration-300 hover:scale-105 hover:bg-tevesat-primary-light active:scale-95"
            >
              Verificar Cobertura
            </a>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2">
            <p className="mb-4 text-5xl font-black tracking-tighter text-tevesat-primary">87%</p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Área Metropolitana</p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2">
            <p className="mb-4 text-5xl font-black tracking-tighter text-tevesat-tertiary-dark">+45</p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Municipios Conectados</p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2">
            <p className="mb-4 text-5xl font-black tracking-tighter text-tevesat-tertiary-dark">+10K KM</p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Fibra Óptica Real</p>
          </div>
        </div>
      </div>
    </section>
  );
}
