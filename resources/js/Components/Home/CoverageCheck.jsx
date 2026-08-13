import React, { useEffect, useRef, useState } from 'react';

export default function CoverageCheck() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="cobertura" className="py-20 bg-white relative overflow-hidden px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Main Card - Banda roja CTA */}
          <div
            className="rounded-[2.5rem] p-10 md:p-14 relative bg-gradient-to-br from-tevesat-primary to-tevesat-primary-light overflow-hidden shadow-[0_40px_90px_-30px_rgba(236,50,55,0.5)]"
          >
            {/* Glow effect */}
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-xl md:text-2xl font-black text-white mb-10 tracking-tight leading-relaxed max-w-3xl mx-auto">
                Descubre si tienes cobertura con la red más confiable. <span className="text-tevesat-tertiary-dark">¡Es fácil y rápido!</span>
              </h2>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="bg-white border border-white/40 rounded-2xl px-6 py-4 text-tevesat-tertiary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tevesat-tertiary-dark transition-all font-bold"
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="bg-white border border-white/40 rounded-2xl px-6 py-4 text-tevesat-tertiary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tevesat-tertiary-dark transition-all font-bold"
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  className="bg-white border border-white/40 rounded-2xl px-6 py-4 text-tevesat-tertiary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tevesat-tertiary-dark transition-all font-bold md:col-span-1"
                />
                <a
                  href="https://wa.me/573334010174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tevesat-tertiary-dark text-white font-black uppercase text-[12px] tracking-tighter hover:bg-white hover:text-tevesat-primary hover:scale-105 transition-all duration-300 py-4 px-6 rounded-2xl shadow-xl text-center flex items-center justify-center"
                >
                  Consulta tu cobertura aquí
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
