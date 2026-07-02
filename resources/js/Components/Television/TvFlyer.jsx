import React from 'react';
import LogoTile from './LogoTile';
import { FLYER_PACKAGES, groupChannelsForPackage } from './data/tv';

/**
 * FlyerPackage - Una columna del folleto (un paquete con sus categorías).
 */
function FlyerPackage({ pkg }) {
  const groups = groupChannelsForPackage(pkg.flag);

  return (
    <div
      className={`flex flex-col justify-between rounded-[2rem] border bg-[#0d1425]/75 p-6 backdrop-blur-md ${
        pkg.featured ? 'border-cyan-500/40 shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]' : 'border-slate-800'
      }`}
    >
      <div>
        {/* Encabezado del paquete */}
        <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-3.5">
          <h3 className="text-base font-black uppercase italic tracking-wider text-slate-100 sm:text-lg">
            {pkg.title}
          </h3>
          <span
            className={`rounded-full bg-slate-800/80 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${pkg.badge}`}
          >
            {pkg.count} Canales
          </span>
        </div>

        {/* Grupos de categorías */}
        <div className="space-y-6">
          {groups.map((group) => (
            <div key={group.label} className="space-y-2">
              <h4 className="border-l-2 border-slate-700 pl-2 text-[10px] font-black uppercase italic tracking-widest text-slate-400 sm:text-xs">
                {group.label}
              </h4>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map((ch) => (
                  <LogoTile key={ch.slug} channel={ch} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * TvFlyer - "Parrilla Oficial (Folleto Recreado)".
 *
 * Recrea el folleto oficial de la parrilla NUPLIN autorizada por TVYMAS: un
 * bloque oscuro con los tres paquetes (FLEX, BÁSICO, BÁSICO+) y sus canales
 * agrupados por categoría, mostrados como baldosas de logo.
 */
export default function TvFlyer() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-[#080d1a] p-6 text-white shadow-2xl transition-all duration-500 sm:p-10">
      {/* Glows decorativos */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Cabecera NUPLIN */}
      <div className="relative z-10 mb-10 mt-4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 text-2xl font-extrabold italic tracking-widest text-white sm:text-4xl">
          <span className="font-black text-cyan-400">▶▶▶</span> NUPLIN{' '}
          <span className="font-black text-cyan-400">▶</span>
        </div>
        <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          Parrilla Oficial Autorizada por TVYMAS
        </p>
        <div className="mt-3 h-0.5 w-32 bg-gradient-to-r from-transparent via-cyan-500/55 to-transparent" />
      </div>

      {/* Paquetes */}
      <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {FLYER_PACKAGES.map((pkg) => (
          <FlyerPackage key={pkg.flag} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
