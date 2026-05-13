import React, { useEffect, useRef, useState } from 'react';

export default function CoverageCheck() {
  const [isVisible, setIsVisible] = useState(false);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [barrio, setBarrio] = useState('');
  const sectionRef = useRef(null);

  const handleConsultaClick = () => {
    const text = `Hola, quiero consultar la cobertura en mi sector.\nNombre: ${nombre}\nTeléfono: ${telefono}\nBarrio o sector: ${barrio}`;
    const url = `https://api.whatsapp.com/send/?phone=%2B573122425591&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
  };

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
    <section ref={sectionRef} className="py-20 bg-tevesat-tertiary relative overflow-hidden">
      {/* Sleek Orange Separator (Thin line with gradient) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tevesat-secondary to-transparent opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >
          {/* Main Card */}
          <div
            className="rounded-[2.5rem] p-10 md:p-14 relative bg-gradient-to-br from-tevesat-tertiary-light/40 to-tevesat-tertiary border border-white/10 overflow-hidden"
            style={{ boxShadow: '2px 2px 20px 10px #b6c44e3d inset' }}
          >
            {/* Glow effect */}
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-tevesat-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-xl md:text-2xl font-black text-white mb-10 tracking-tight leading-relaxed max-w-3xl mx-auto">
                Descubre si tienes cobertura con la red más confiable. <span className="text-tevesat-secondary">¡Es fácil y rápido!</span>
              </h2>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-tevesat-secondary transition-all font-bold"
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-tevesat-secondary transition-all font-bold"
                />
                <input
                  type="text"
                  placeholder="Barrio o sector"
                  value={barrio}
                  onChange={(e) => setBarrio(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-tevesat-secondary transition-all font-bold md:col-span-1"
                />
                <button 
                  onClick={handleConsultaClick}
                  className="bg-tevesat-secondary text-tevesat-tertiary font-black uppercase text-xs tracking-tighter hover:bg-white hover:scale-105 transition-all duration-300 py-4 px-6 rounded-2xl shadow-xl shadow-tevesat-secondary/20"
                >
                  Consulta tu cobertura aquí
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
