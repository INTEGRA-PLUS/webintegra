import React, { useState, useMemo } from 'react';
import ChannelFinder from './ChannelFinder';
import ChannelGrid from './ChannelGrid';
import { CHANNELS } from './data/tv';

/**
 * ChannelGuide - Sección "Parrilla Oficial" con buscador interactivo al lado.
 *
 * Maneja el estado de búsqueda (texto + categoría) y filtra la parrilla en
 * tiempo real. Delega la presentación en ChannelFinder (panel lateral) y
 * ChannelGrid (grilla de canales).
 */
export default function ChannelGuide() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todas');

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return CHANNELS.filter((ch) => {
      const matchCategory = category === 'Todas' || ch.category === category;
      const matchQuery = term === '' || ch.name.toLowerCase().includes(term);
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  return (
    <section className="relative overflow-hidden bg-gray-50 px-4 py-24 md:px-8">
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary-deep">
            Todos nuestros canales
          </span>
          <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-5xl">
            Parrilla <span className="italic text-tevesat-primary-deep">Oficial</span>
          </h2>
          <p className="mx-auto mt-3 text-sm font-bold uppercase tracking-widest text-gray-400">
            (Folleto Recreado)
          </p>
        </div>

        {/* Buscador (lado) + parrilla */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ChannelFinder
              query={query}
              onQueryChange={setQuery}
              activeCategory={category}
              onCategoryChange={setCategory}
              resultCount={filtered.length}
              totalCount={CHANNELS.length}
            />
          </div>

          <div className="lg:col-span-8">
            <ChannelGrid channels={filtered} />
          </div>
        </div>
      </div>
    </section>
  );
}
