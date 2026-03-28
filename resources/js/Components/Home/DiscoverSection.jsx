import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function DiscoverSection() {
  const cards = [
    {
      title: 'Internet',
      description: 'Disfruta de una conexión 100% fibra óptica.',
      image: '/images/gamer_man_velonet_1774657602850.png',
    },
    {
      title: 'Móvil',
      description: 'Mantente conectado donde quiera que estés con nuestros planes móviles.',
      image: '/images/mobile_woman_velonet_1774657616513.png',
    },
    {
      title: 'TV',
      description: 'Transforma tus noches en pura diversión con los mejores canales de TV en vivo y streaming.',
      image: '/images/tv_remote_woman_velonet_1774657629715.png',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Text and CTA */}
        <div className="lg:w-1/3 text-left">
          <h2 className="text-3xl md:text-4xl font-black text-velonet-purple mb-10 leading-tight">
            ¡Descubre todo lo que Velonet hace por ti!
          </h2>
          
          <button className="flex items-center gap-3 bg-gradient-to-r from-velonet-purple to-velonet-orange text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl shadow-velonet-orange/20">
            Compra ahora <MessageCircle size={24} />
          </button>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-2xl shadow-black/5 hover:-translate-y-4 transition-all duration-500">
              {/* Image Container */}
              <div className="rounded-[1.5rem] overflow-hidden mb-6 aspect-square">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="text-xl font-black text-velonet-purple mb-2 tracking-tight">
                {card.title}
              </h3>
              
              {/* Orange Underline */}
              <div className="w-12 h-1 bg-velonet-orange rounded-full mb-4"></div>
              
              <p className="text-gray-500 font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
