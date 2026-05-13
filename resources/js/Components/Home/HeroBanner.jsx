import React from 'react';

const AnimatedNetworkBackground = () => {
  // Estrellas generadas para el fondo
  const stars = Array.from({ length: 80 }).map((_, i) => ({
    cx: Math.random() * 1920,
    cy: Math.random() * 1080,
    r: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.8 + 0.2,
    dur: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#0A1128] via-[#0D183A] to-[#0A1128] z-0">
      <svg className="w-full h-full object-cover" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          </pattern>
          <linearGradient id="ground-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#0A1128" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Fondo de Cuadrícula */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Estrellas / Nodos Flotantes */}
        <g className="animate-stars opacity-50">
          {stars.map((star, i) => (
            <circle 
              key={i}
              cx={star.cx} 
              cy={star.cy} 
              r={star.r} 
              fill="white" 
              opacity={star.opacity}
            >
              <animate attributeName="opacity" values="0.1;1;0.1" dur={`${star.dur}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* Conexiones de Datos (Arcos curvos) */}
        <g stroke="#B6C44E" strokeWidth="2" fill="none" className="opacity-70">
          <path d="M -100 800 Q 100 500 300 650" className="animated-data-path" />
          <path d="M 300 650 Q 550 250 800 500" className="animated-data-path" />
          <path d="M 800 500 Q 1100 300 1400 600" className="animated-data-path" />
          <path d="M 1400 600 Q 1700 400 2000 700" className="animated-data-path" />
        </g>

        {/* Torres de Telecomunicación */}
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none">
          {/* Torre 1 */}
          <g transform="translate(300, 650)">
            <path d="M 0 0 L -30 500 M 0 0 L 30 500 M -15 250 L 15 250 M -24 400 L 24 400 M -6 100 L 6 100" />
            <circle cx="0" cy="0" r="8" fill="#B6C44E" filter="url(#glow)" className="animate-pulse" />
            <circle cx="0" cy="0" r="25" fill="none" stroke="#B6C44E" strokeWidth="1" className="animate-ping-slow" />
          </g>
          {/* Torre 2 */}
          <g transform="translate(800, 500)">
            <path d="M 0 0 L -40 600 M 0 0 L 40 600 M -20 300 L 20 300 M -33 500 L 33 500 M -7 100 L 7 100 M -13 200 L 13 200" />
            <circle cx="0" cy="0" r="8" fill="#B6C44E" filter="url(#glow)" className="animate-pulse" />
            <circle cx="0" cy="0" r="35" fill="none" stroke="#B6C44E" strokeWidth="1" className="animate-ping-slow" style={{animationDelay: '1.5s'}} />
          </g>
          {/* Torre 3 */}
          <g transform="translate(1400, 600)">
            <path d="M 0 0 L -35 550 M 0 0 L 35 550 M -18 280 L 18 280 M -28 440 L 28 440 M -6 100 L 6 100" />
            <circle cx="0" cy="0" r="8" fill="#B6C44E" filter="url(#glow)" className="animate-pulse" />
            <circle cx="0" cy="0" r="25" fill="none" stroke="#B6C44E" strokeWidth="1" className="animate-ping-slow" style={{animationDelay: '0.7s'}} />
          </g>
        </g>
        
        {/* Suelo / Base Oscura */}
        <rect x="0" y="850" width="1920" height="230" fill="url(#ground-grad)" />
      </svg>
      <style>{`
        .animated-data-path {
          stroke-dasharray: 6 15;
          animation: dash-flow 25s linear infinite;
          stroke-linecap: round;
        }
        @keyframes dash-flow {
          to { stroke-dashoffset: -1000; }
        }
        @keyframes pan-stars {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 15px); }
          100% { transform: translate(0, 0); }
        }
        .animate-stars {
          animation: pan-stars 40s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default function HeroBanner() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-start overflow-hidden pt-16 bg-tevesat-tertiary">
      
      {/* Nuevo Fondo Animado SVG */}
      <AnimatedNetworkBackground />

      {/* Dark Overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/70 to-transparent pointer-events-none z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-left px-4 md:px-16 lg:px-24 max-w-5xl">
        <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 mb-6 animate-fadeIn shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <span className="text-tevesat-primary font-black uppercase text-xs tracking-[0.2em]">Más cobertura, más diversión</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] animate-fadeIn">
          VIVE EL<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tevesat-primary to-tevesat-secondary drop-shadow-2xl">PODER DEL</span><br />
          WI-FI 5G
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl font-medium animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          La tecnología más avanzada para tu hogar.<br />
          Conecta todos tus dispositivos sin perder velocidad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <a href="https://api.whatsapp.com/send/?phone=+573122425591&text=Hola%2C%20quiero%20conocer%20más%20sobre%20los%20planes%20de%20internet%20de%20Tevesat." target="_blank" rel="noopener noreferrer">
            <button className="bg-tevesat-primary text-tevesat-tertiary px-10 py-5 rounded-2xl font-black uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(182,196,78,0.4)] relative overflow-hidden group">
              <span className="relative z-10">Me interesa</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </a>
          <a href="#planes">
            <button className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-wider hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Ver cobertura
            </button>
          </a>
        </div>

        {/* Tech Badges */}
        <div className="mt-16 flex flex-wrap gap-8 items-center opacity-80 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-tevesat-secondary/20 group-hover:border-tevesat-secondary/50 transition-all duration-300">
              <span className="text-white font-black text-sm group-hover:text-tevesat-secondary transition-colors">6</span>
            </div>
            <span className="text-white font-bold text-xs uppercase tracking-widest">Wifi 6 Tech</span>
          </div>
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-tevesat-primary/20 group-hover:border-tevesat-primary/50 transition-all duration-300">
              <span className="text-white font-black text-sm group-hover:text-tevesat-primary transition-colors">G</span>
            </div>
            <span className="text-white font-bold text-xs uppercase tracking-widest">Gigabit Ready</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-10 animate-vertical-bounce hidden lg:block">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2 backdrop-blur-sm">
            <div className="w-1 h-3 bg-tevesat-secondary rounded-full"></div>
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
        .animate-fadeIn { animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-vertical-bounce { animation: vertical-bounce 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
