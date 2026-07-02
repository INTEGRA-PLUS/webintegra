import React from 'react';
import { History } from 'lucide-react';
import { STORY_PARAGRAPHS, STATS } from './data/nosotros';

/**
 * AboutStory - Trayectoria de la empresa + banda de estadísticas.
 *
 * Bloque de dos columnas (texto + imagen con badge flotante) y, superpuesta
 * sobre el borde inferior, una tarjeta blanca con los indicadores clave.
 */
export default function AboutStory() {
  return (
    <section className="relative bg-white px-4 pt-24 md:px-8 md:pt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5">
            <History size={14} className="animate-pulse text-tevesat-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500">
              Nuestra Trayectoria
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-black leading-[1.1] tracking-tight text-tevesat-tertiary-dark md:text-4xl">
            Historia de <span className="text-tevesat-primary">superación</span> y conectividad
          </h2>

          <div className="space-y-4">
            {STORY_PARAGRAPHS.map((p, idx) => (
              <p
                key={idx}
                className={`leading-relaxed text-gray-500 ${
                  idx === 0
                    ? 'border-l-4 border-tevesat-primary/30 pl-6 text-lg font-medium italic'
                    : 'text-base font-medium'
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Imagen con badge */}
        <div className="group relative">
          <div className="absolute -top-8 -right-8 -z-10 h-full w-full rounded-[3.5rem] border-2 border-tevesat-primary/15 transition-transform duration-700 group-hover:translate-x-3 group-hover:-translate-y-3" />
          <div className="relative overflow-hidden rounded-[3rem] border-8 border-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.3)]">
            <img
              src="/images/media__1774657267411.png"
              alt={`Equipo e infraestructura de ${import.meta.env.VITE_NOMBRE_EMPRESA}`}
              className="h-[340px] w-full scale-110 object-cover transition-transform duration-1000 group-hover:scale-100"
            />
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-gray-100 bg-tevesat-tertiary-dark p-4 shadow-xl">
              <p className="text-[10px] font-black uppercase tracking-wide text-tevesat-primary-light">
                Red propia
              </p>
              <p className="mt-1 text-lg font-black italic leading-none text-white">Fibra Óptica</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banda de estadísticas */}
      <div className="mx-auto mt-20 max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] border border-gray-100 bg-white p-10 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.25)] md:p-14">
          <div className="pointer-events-none absolute top-0 right-0 -mr-40 -mt-40 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 -ml-40 -mb-40 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-2 gap-10 md:grid-cols-4 md:divide-x md:divide-gray-100">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-black tracking-tighter text-tevesat-primary md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
