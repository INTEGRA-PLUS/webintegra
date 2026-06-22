import React from 'react';
import { Tv, SearchX } from 'lucide-react';
import ChannelLogo from './ChannelLogo';

/**
 * ChannelGrid - Grilla de canales filtrados.
 *
 * @param {Array} channels - lista de canales ya filtrada.
 */
export default function ChannelGrid({ channels }) {
  if (channels.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-gray-200 bg-white py-20 text-center">
        <SearchX size={40} className="mb-4 text-gray-300" />
        <p className="font-black text-tevesat-tertiary-dark">No encontramos ese canal</p>
        <p className="mt-1 text-sm font-medium text-gray-400">
          Prueba con otro nombre o cambia de categoría.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {channels.map((ch) => (
        <div
          key={ch.name}
          className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tevesat-primary/40 hover:shadow-md"
        >
          {/* Logo del canal (con fallback a iniciales) */}
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white">
            <ChannelLogo name={ch.name} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-black leading-tight text-tevesat-tertiary-dark">
              {ch.name}
            </p>
            <p className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <Tv size={11} /> {ch.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
