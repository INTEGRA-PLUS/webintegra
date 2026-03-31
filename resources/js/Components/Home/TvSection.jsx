import React from 'react';

export default function TvSection() {
  return (
    <section className="bg-tevesat-tertiary-dark relative overflow-hidden py-16 md:py-0">
      {/* Abstract Glowing Curves */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-tevesat-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tevesat-primary/30 to-transparent -rotate-12 blur-sm"></div>
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tevesat-primary/50 to-transparent rotate-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center relative z-10">
        {/* Left Side: Content */}
        <div className="md:w-1/2 text-white text-center md:text-left py-12 md:py-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 leading-[1.1] tracking-tight text-white">
            DISFRUTA DE LOS <br />
            <span className="text-tevesat-primary">MEJORES CANALES</span> <br />
            DE TELEVISIÓN, PARA <br />
            TU FAMILIA.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-tevesat-primary text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:bg-tevesat-primary-light transition-all w-full sm:w-auto shadow-tevesat-primary/20">
              Compra sin complicaciones
            </button>
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
               <span className="text-tevesat-primary font-black italic text-xl">DGO</span>
               <div className="w-px h-6 bg-white/20"></div>
               <div className="flex flex-col">
                  <span className="text-white/60 text-[8px] font-black uppercase tracking-tighter">Powered by</span>
                  <span className="text-white text-lg font-black italic leading-none">GOFLEX</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Family Image */}
        <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[600px] transform hover:scale-[1.03] transition-transform duration-1000">
            {/* Glossy orb element like DGO in ref */}
            <div className="absolute -top-10 left-10 w-24 h-24 bg-tevesat-primary/20 backdrop-blur-xl rounded-full border border-tevesat-primary/30 flex items-center justify-center p-4 shadow-2xl animate-bounce-slow">
               <span className="text-white font-black italic text-2xl drop-shadow-md">DGO</span>
            </div>
            
            <img 
              src="/images/tv_family.png" 
              alt={`Familia viendo televisión ${import.meta.env.VITE_NOMBRE_EMPRESA}`} 
              className="w-full h-auto rounded-[3.5rem] shadow-2xl border-4 border-tevesat-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
