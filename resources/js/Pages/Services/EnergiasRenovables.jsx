import React from 'react';
import ServiceLayout from '../../Layouts/ServiceLayout';
import { Sun, Battery, LayoutGrid, Zap, Droplet, Gauge } from 'lucide-react';

export default function EnergiasRenovables() {
  const items = [
    {
      title: "Baterías de Todo Tipo",
      description: "Suministro de baterías especializadas de ciclo profundo, AGM, Gel y Litio para sistemas de respaldo y energía solar.",
      icon: <Battery className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Sistemas de Respaldo",
      description: "Instalación y mantenimiento preventivo de sistemas de energía ininterrumpida (UPS) y bancos de baterías corporativos.",
      icon: <Zap className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Paneles Solares",
      description: "Suministro de paneles fotovoltaicos de todas las capacidades y marcas líderes, diseñados para máxima captura energética.",
      icon: <Sun className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Iluminación DC",
      description: "Sistemas de iluminación eficientes alimentados por corriente continua, ideales para proyectos sostenibles y remotos.",
      icon: <LayoutGrid className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Bombeo de Agua DC",
      description: "Soluciones de bombeo solar para agricultura e industria, optimizando el uso de recursos hídricos con energía limpia.",
      icon: <Droplet className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Sistemas Respaldo 1K-8K",
      description: "Configuración de sistemas de respaldo DC de alta capacidad (1K a 8K) para infraestructuras críticas y telecomunicaciones.",
      icon: <Gauge className="w-8 h-8 text-tevesat-primary" />
    }
  ];

  return (
    <ServiceLayout 
      title="Energías Renovables"
      subtitle="Sustentabilidad y autonomía energética. Transformamos la energía del sol en potencia para su futuro."
      bgImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000"
    >
      <section className="py-20 bg-tevesat-tertiary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-10 overflow-hidden hover:border-tevesat-primary/30 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-tevesat-primary/5 rounded-full blur-3xl group-hover:bg-tevesat-primary/20 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 text-tevesat-primary group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row gap-10 items-stretch">
            <div className="flex-1 bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/20 p-12 rounded-[3rem]">
              <h2 className="text-3xl font-black text-white mb-6 uppercase">Compromiso Ambiental</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nuestras soluciones no solo reducen sus costos operativos, sino que también disminuyen la huella de carbono de su organización. Implementamos tecnología de punta para garantizar la máxima eficiencia energética en cada proyecto.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-3xl font-black text-tevesat-primary mb-1">100%</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Limpio</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-3xl font-black text-tevesat-primary mb-1">24/7</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Autonomía</span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-954ff21276d1?q=80&w=1000" 
                alt="Renewable Energy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
