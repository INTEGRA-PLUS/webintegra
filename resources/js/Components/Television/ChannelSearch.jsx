import React, { useMemo, useState } from 'react';
import { Search, SearchX, Tv } from 'lucide-react';
import LogoTile from './LogoTile';
import { CHANNELS, CHANNEL_CATEGORIES } from './data/tv';

const CATEGORIES = ['Todas', ...CHANNEL_CATEGORIES.map((c) => c.label)];

const PACKAGES = [
  { label: 'Todos', flag: null },
  { label: 'FLEX', flag: 'flex' },
  { label: 'BÁSICO', flag: 'basico' },
  { label: 'BÁSICO+', flag: 'basicoPlus' },
];

/**
 * ChannelSearch - "Buscador Interactivo".
 *
 * Panel claro para encontrar canales por nombre, filtrando por categoría y por
 * paquete. Muestra los resultados como baldosas de logo con su nombre.
 */
export default function ChannelSearch() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todas');
  const [pkg, setPkg] = useState(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return CHANNELS.filter((ch) => {
      const matchQuery = term === '' || ch.name.toLowerCase().includes(term);
      const matchCategory = category === 'Todas' || ch.category === category;
      const matchPackage = pkg === null || ch[pkg];
      return matchQuery && matchCategory && matchPackage;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [query, category, pkg]);

  return (
    <div className="rounded-[2.5rem] border border-gray-100 bg-white p-6 shadow-2xl sm:p-10">
      {/* Filtros por paquete */}
      <div className="mb-6 flex flex-wrap gap-2">
        {PACKAGES.map((p) => {
          const active = pkg === p.flag;
          const count = p.flag === null ? CHANNELS.length : CHANNELS.filter((c) => c[p.flag]).length;
          return (
            <button
              key={p.label}
              type="button"
              onClick={() => setPkg(p.flag)}
              className={`rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition-all ${
                active
                  ? 'bg-tevesat-primary text-white shadow-md shadow-tevesat-primary/30'
                  : 'border border-gray-200 bg-white text-gray-500 hover:border-tevesat-primary/40 hover:text-tevesat-primary'
              }`}
            >
              {p.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Buscador + filtro por categoría */}
      <div className="mb-8 flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 md:flex-row">
        <div className="relative w-full md:max-w-xs">
          <Search
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar canal por nombre..."
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm font-medium outline-none transition-all focus:border-tevesat-primary focus:ring-4 focus:ring-tevesat-primary/10"
          />
        </div>

        <div className="flex w-full flex-wrap gap-1.5 pb-1">
          {CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                  active
                    ? 'bg-tevesat-primary text-white shadow-sm'
                    : 'bg-white text-gray-500 hover:bg-tevesat-primary/5 hover:text-tevesat-primary'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contador */}
      <p className="mb-5 flex items-center gap-2 text-sm font-bold text-tevesat-tertiary-dark">
        <Tv size={16} className="text-tevesat-primary" />
        <span className="text-tevesat-primary">{filtered.length}</span> de {CHANNELS.length} canales
      </p>

      {/* Resultados */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-20 text-center">
          <SearchX size={40} className="mb-4 text-gray-300" />
          <p className="font-black text-tevesat-tertiary-dark">No encontramos ese canal</p>
          <p className="mt-1 text-sm font-medium text-gray-400">
            Prueba con otro nombre, categoría o paquete.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {filtered.map((ch) => (
            <div key={ch.slug} className="flex flex-col items-center gap-1.5">
              <LogoTile channel={ch} size="h-14" />
              <span className="w-full truncate text-center text-[10px] font-bold text-gray-500">
                {ch.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
