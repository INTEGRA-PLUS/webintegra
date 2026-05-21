import React from 'react';
import { MapPin } from 'lucide-react';

export default function CoverageSection() {
  return (
    <section id="cobertura" className="py-24 md:py-32 px-4 md:px-8 bg-tevesat-tertiary relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-tevesat-secondary/5 rounded-full blur-[120px] -translate-y-1/2 -ml-64"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20 text-white">
          <div className="inline-block bg-white/5 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 mb-6 font-black uppercase text-xs tracking-widest text-tevesat-secondary">
            Nuestra Red
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            LLEGAMOS A <span className="text-tevesat-secondary text-outline-white">CUALQUIER LUGAR</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Nuestra infraestructura de Fibra Óptica está lista para conectarte con la máxima velocidad disponible en el oriente y nororiente de Cali.
          </p>
        </div>

        {/* Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map Placeholder */}
          <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127415.82025254921!2d-76.57723225820311!3d3.4002677999999947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1sen!2sco!4v1715620000000!5m2!1sen!2sco" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(80%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0 grayscale"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-white/10 rounded-[3rem] z-10"></div>
          </div>

          {/* Coverage Info */}
          <div className="text-white">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">Zonas de Fibra Activa</h3>

            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-tevesat-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-500">
                  <div className="w-4 h-4 rounded-full bg-tevesat-tertiary"></div>
                </div>
                <div>
                  <p className="font-black text-xl uppercase tracking-wider mb-2">Cali Oriente</p>
                  <p className="text-white/50 text-base font-medium leading-relaxed italic">Despliegue total con Fibra Óptica Directa.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-500 border border-white/10">
                  <div className="w-4 h-4 rounded-full bg-tevesat-secondary"></div>
                </div>
                <div>
                  <p className="font-black text-xl uppercase tracking-wider mb-2">Cali Nororiente</p>
                  <p className="text-white/50 text-base font-medium leading-relaxed italic">Cobertura total en el nororiente de la ciudad.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-tevesat-primary text-tevesat-tertiary py-6 rounded-2xl font-black uppercase tracking-[0.2em] transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-tevesat-primary/30">
              Verificar Cobertura
            </button>
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 text-center hover:bg-white/10 transition-colors duration-500">
            <p className="text-5xl font-black text-tevesat-secondary mb-4 tracking-tighter">87%</p>
            <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em]">Oriente y Nororiente</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 text-center hover:bg-white/10 transition-colors duration-500">
            <p className="text-5xl font-black text-white mb-4 tracking-tighter">+20</p>
            <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em]">Barrios Conectados</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 text-center hover:bg-white/10 transition-colors duration-500">
            <p className="text-5xl font-black text-white mb-4 tracking-tighter">+5K KM</p>
            <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em]">Fibra Óptica Real</p>
          </div>
        </div>
      </div>
    </section>
  );
}
