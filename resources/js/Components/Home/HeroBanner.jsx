export default function HeroBanner() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-start overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero.png" 
          alt="Velonet Family" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tevesat-tertiary-dark via-tevesat-tertiary-dark/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-tevesat-tertiary-dark/80 via-transparent to-tevesat-tertiary-dark/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-4 md:px-16 lg:px-24 max-w-5xl">
        <div className="inline-block bg-tevesat-primary/10 backdrop-blur-md px-4 py-1 rounded-full border border-tevesat-primary/20 mb-6 animate-fadeIn">
          <span className="text-tevesat-primary-light font-black uppercase text-xs tracking-[0.2em]">Protección avanzada y respaldo total</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] animate-fadeIn">
          SEGURIDAD Y<br />
          <span className="text-tevesat-primary drop-shadow-[0_2px_10px_rgba(37,37,37,0.5)]">RESPALDO</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl font-medium animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Somos tu mejor aliaddo.<br />
          Tu tranquilidad es nuestra prioridad con soluciones integrales de alta tecnología.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://wa.me/573142497234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-tevesat-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-wider hover:bg-tevesat-primary-light hover:scale-105 transition-all duration-300 shadow-2xl shadow-tevesat-primary/40 text-center"
          >
            Me interesa
          </a>
          <a 
            href="https://wa.me/573142497234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-wider hover:bg-white/10 transition-all text-center"
          >
            Ver cobertura
          </a>
        </div>

        {/* Tech Badges */}
        <div className="mt-16 flex flex-wrap gap-8 items-center opacity-60 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-white font-black text-xs">S</span>
            </div>
            <span className="text-white font-bold text-xs uppercase">Soporte 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-white font-black text-xs">R</span>
            </div>
            <span className="text-white font-bold text-xs uppercase">Respaldo Total</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-10 animate-vertical-bounce hidden lg:block">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-tevesat-primary rounded-full"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes vertical-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-fadeIn { animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-vertical-bounce { animation: vertical-bounce 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
