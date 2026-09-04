import React from 'react';
import ServiceLayout from '../../Layouts/ServiceLayout';
import { Cable, Wifi, Zap, Tv, ShieldCheck, Activity } from 'lucide-react';

export default function Cableado() {
  const items = [
    {
      title: "Cableado de fibra óptica",
      description: "Implementación de redes de fibra óptica de última generación para garantizar la máxima velocidad y estabilidad en la transmisión de datos a largas distancias.",
      icon: <Activity className="w-8 h-8 text-tevesat-primary-deep" />
    },
    {
      title: "Cableado UTP",
      description: "Instalación de cableado estructurado categoría 6, 6A y 7 para redes LAN empresariales, asegurando un rendimiento óptimo y reducción de interferencias.",
      icon: <Cable className="w-8 h-8 text-tevesat-primary-deep" />
    },
    {
      title: "Cableado DC y AC",
      description: "Soluciones integrales de alimentación eléctrica para equipos de red, incluyendo sistemas de corriente continua (DC) y corriente alterna (AC).",
      icon: <Zap className="w-8 h-8 text-tevesat-primary-deep" />
    },
    {
      title: "Suministro de Internet y TV",
      description: "Integración de servicios de conectividad de alta velocidad y televisión digital para edificios, condominios y empresas.",
      icon: <Tv className="w-8 h-8 text-tevesat-primary-deep" />
    },
    {
      title: "Certificado de cableado y fibra",
      description: "Certificación profesional de puntos de red y enlaces de fibra óptica bajo estándares internacionales para garantizar el cumplimiento técnico.",
      icon: <ShieldCheck className="w-8 h-8 text-tevesat-primary-deep" />
    },
    {
      title: "Otros servicios",
      description: "Mantenimiento preventivo, peinado de racks, migración de centros de datos y auditoría de infraestructura de red.",
      icon: <Wifi className="w-8 h-8 text-tevesat-primary-deep" />
    }
  ];

  return (
    <ServiceLayout 
      title="Cableado Estructurado y Redes de Datos"
      subtitle="Diseñamos e implementamos la infraestructura de conectividad que su empresa necesita para operar con máxima eficiencia."
      bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000"
    >
      <section className="py-20 bg-tevesat-tertiary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-6 bg-tevesat-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-tevesat-primary/20 to-transparent border border-tevesat-primary/30 p-10 rounded-[3rem] overflow-hidden relative">
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-black text-white mb-6 uppercase">Infraestructura de Clase Mundial</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  En {import.meta.env.VITE_NOMBRE_EMPRESA} nos especializamos en crear soluciones de cableado que no solo cumplen con las necesidades actuales, sino que están preparadas para el crecimiento futuro. Utilizamos materiales de la más alta calidad y seguimos las normativas TIA/EIA para asegurar que su red sea un activo confiable para su negocio.
                </p>
                <button className="bg-tevesat-primary text-tevesat-tertiary-dark px-10 py-4 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                  Solicitar Auditoría
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000" 
                  alt="Network Setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
