import React from 'react';

export default function ImageBanner() {
  return (
    <section className="w-full bg-tevesat-tertiary-dark">
      <div className="w-full relative overflow-hidden h-[400px] md:h-[550px] lg:h-[650px] xl:h-[600px] group">
        <img
          src="/images/banner_red_theme.png"
          alt={`Promoción ${import.meta.env.VITE_NOMBRE_EMPRESA}`}
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        
        {/* Modern Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 w-full">
            <div className="max-w-2xl">
              <div className="inline-block bg-tevesat-primary px-6 py-2 rounded-full mb-8 animate-bounce-slow">
                <span className="text-white font-black uppercase text-xs tracking-widest italic">Oferta Limitada</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase italic">
                INTERNET <br />
                <span className="text-tevesat-primary">MÓVIL</span> <br />
                RÁPIDO Y <br />
                CONFIABLE.
              </h2>
              
              <p className="text-white/60 text-xl font-medium mb-10 max-w-md border-l-4 border-tevesat-primary pl-6 italic">
                Conéctate con la red más sofisticada del país. Planes que se adaptan a tu ritmo de vida.
              </p>
              
              <button className="bg-white text-tevesat-tertiary-dark px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] transform hover:scale-105 active:scale-95 transition-all shadow-2xl hover:bg-tevesat-primary hover:text-white">
                Comienza Ahora
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-tevesat-primary/5 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
