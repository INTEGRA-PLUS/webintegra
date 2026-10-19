import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function DiscoverSection() {
  const cards = [
    {
      title: 'Internet',
      description: 'Disfruta de una conexión 100% fibra óptica.',
      image: '/images/gamer_man_velonet_1774657602850.png',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tevesat-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Text and CTA */}
        <div className="lg:w-1/3 text-left">
          <h2 className="text-3xl md:text-4xl font-black text-tevesat-tertiary-dark mb-10 leading-tight">
            ¡Descubre todo lo que <span className="text-tevesat-primary-deep">{import.meta.env.VITE_NOMBRE_EMPRESA}</span> hace por ti!
          </h2>

          <button className="flex items-center gap-4 text-tevesat-tertiary-dark group bg-gray-50 pr-8 pl-2 py-2 rounded-full border border-gray-200 hover:bg-tevesat-primary hover:text-tevesat-tertiary-dark hover:border-tevesat-primary transition-all duration-300 shadow-lg">
            Compra ahora <MessageCircle size={24} />
          </button>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] hover:-translate-y-4 transition-all duration-500 group">
              {/* Image Container */}
              <div className="rounded-[1.5rem] overflow-hidden mb-6 aspect-square relative">
                <img src={card.image} alt={`Promoción ${import.meta.env.VITE_NOMBRE_EMPRESA} ${card.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-tevesat-tertiary-dark/30 to-transparent"></div>
              </div>

              <h3 className="text-xl font-black text-tevesat-tertiary-dark mb-2 tracking-tight">
                {card.title}
              </h3>

              {/* Orange Underline */}
              <div className="w-12 h-1 bg-tevesat-primary rounded-full mb-4 group-hover:w-20 transition-all duration-500"></div>

              <p className="text-gray-500 font-bold leading-relaxed group-hover:text-tevesat-primary-deep transition-colors italic text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
