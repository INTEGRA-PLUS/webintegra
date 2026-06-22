import React from 'react';
import { Search, SlidersHorizontal, Tv2, X } from 'lucide-react';
import { CHANNEL_CATEGORIES } from './data/tv';

/**
 * ChannelFinder - Buscador interactivo de canales (panel lateral).
 *
 * Controlado por el contenedor: recibe el término de búsqueda, la categoría
 * activa y los contadores; emite cambios mediante callbacks.
 *
 * @param {string}   query
 * @param {Function} onQueryChange
 * @param {string}   activeCategory  - 'Todas' o una etiqueta de categoría.
 * @param {Function} onCategoryChange
 * @param {number}   resultCount
 * @param {number}   totalCount
 */
export default function ChannelFinder({
  query,
  onQueryChange,
  activeCategory,
  onCategoryChange,
  resultCount,
  totalCount,
}) {
  const categories = ['Todas', ...CHANNEL_CATEGORIES.map((c) => c.label)];

  return (
    <div className="lg:sticky lg:top-28">
      <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)]">
        {/* Encabezado del panel */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tevesat-primary text-white shadow-lg shadow-tevesat-primary/20">
            <SlidersHorizontal size={20} strokeWidth={2.4} />
          </div>
          <div>
            <h3 className="text-lg font-black leading-none tracking-tight text-tevesat-tertiary-dark">
              Buscador Interactivo
            </h3>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Encuentra tu canal
            </p>
          </div>
        </div>

        {/* Campo de búsqueda */}
        <div className="relative mb-6">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Buscar canal..."
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-11 pr-10 text-sm font-bold text-tevesat-tertiary-dark placeholder-gray-400 transition-all focus:border-tevesat-primary focus:outline-none focus:ring-2 focus:ring-tevesat-primary/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-tevesat-primary"
              aria-label="Limpiar búsqueda"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Filtro por categoría */}
        <p className="mb-3 text-[11px] font-black uppercase tracking-widest text-gray-400">
          Categorías
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-wider transition-all duration-300 ${
                  active
                    ? 'bg-tevesat-primary text-white shadow-md shadow-tevesat-primary/30'
                    : 'border border-gray-200 bg-white text-gray-500 hover:border-tevesat-primary/40 hover:text-tevesat-primary'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Contador de resultados */}
        <div className="flex items-center gap-3 rounded-2xl bg-tevesat-primary/5 px-5 py-4">
          <Tv2 size={20} className="text-tevesat-primary" />
          <p className="text-sm font-bold text-tevesat-tertiary-dark">
            <span className="text-tevesat-primary">{resultCount}</span> de {totalCount} canales
          </p>
        </div>
      </div>
    </div>
  );
}
