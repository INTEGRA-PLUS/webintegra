import React from 'react';
import { MapPin } from 'lucide-react';

export default function CoverageSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-tevesat-primary/10 rounded-full blur-[120px] -translate-y-1/2 -ml-64"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20 text-white">
          <div className="inline-block bg-tevesat-primary/10 backdrop-blur-md px-4 py-1 rounded-full border border-tevesat-primary/20 mb-6 font-black uppercase text-xs tracking-widest text-tevesat-primary">
            Nuestra Red
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
            LLEGAMOS A <span className="text-tevesat-primary uppercase italic">CUALQUIER LUGAR</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Nuestra infraestructura está lista para conectarte con la máxima velocidad disponible en Villavicencio y municipios aledaños.
            <br />
            <span className="text-tevesat-primary/80">También contamos con cobertura en veredas y fincas.</span>
          </p>
        </div>

        {/* Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map Image */}
          <div className="relative group rounded-[3rem] overflow-hidden bg-black border border-white/5 shadow-2xl">
            <img 
              src="/images/cobertura.png" 
              alt="Mapa de Cobertura Integra" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Coverage Info */}
          <div className="text-white">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">Zonas de Cobertura Activa</h3>

            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-tevesat-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-tevesat-primary/20">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div>
                  <p className="font-black text-xl uppercase tracking-wider mb-2 text-white">Villavicencio Centro</p>
                  <p className="text-white/50 text-base font-medium leading-relaxed italic">Despliegue total en casco urbano con Fibra Óptica Directa.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-500 border border-white/10">
                  <div className="w-4 h-4 rounded-full bg-tevesat-primary"></div>
                </div>
                <div>
                  <p className="font-black text-xl uppercase tracking-wider mb-2 text-white">Municipios Aledaños</p>
                  <p className="text-white/50 text-base font-medium leading-relaxed italic">Acacías, Restrepo, Cumaral y más sectores de la región.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-500 border border-white/10">
                  <div className="w-4 h-4 rounded-full bg-tevesat-primary"></div>
                </div>
                <div>
                  <p className="font-black text-xl uppercase tracking-wider mb-2 text-white">Veredas y Fincas</p>
                  <p className="text-white/50 text-base font-medium leading-relaxed italic">Llevamos internet de alta calidad a zonas rurales, veredas y fincas.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://wa.me/573142497234" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-tevesat-primary text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-tevesat-primary/30 text-center block"
            >
              Verificar Cobertura
            </a>
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 text-center hover:bg-white/10 transition-colors duration-500">
            <p className="text-5xl font-black text-tevesat-primary mb-4 tracking-tighter shadow-tevesat-primary/10">87%</p>
            <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em]">Área Metropolitana</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 text-center hover:bg-white/10 transition-colors duration-500">
            <p className="text-5xl font-black text-white mb-4 tracking-tighter">+45</p>
            <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em]">Municipios Conectados</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 text-center hover:bg-white/10 transition-colors duration-500">
            <p className="text-5xl font-black text-white mb-4 tracking-tighter">+10K KM</p>
            <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em]">Fibra Óptica Real</p>
          </div>
        </div>
      </div>
    </section>
  );
}
