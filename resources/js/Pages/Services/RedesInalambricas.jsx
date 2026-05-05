import React from 'react';
import ServiceLayout from '../../Layouts/ServiceLayout';
import { Wifi, Radio, Router, Network, Share2, CircleHelp, Lock, Zap } from 'lucide-react';

export default function RedesInalambricas() {
  const items = [
    {
      title: "Redes LAN y WAN",
      description: "Diseño y despliegue de infraestructuras de red local y de área amplia para interconexión de sedes con alta disponibilidad.",
      icon: <Network className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Redes MESH",
      description: "Sistemas de red en malla para cobertura total sin interrupciones en grandes superficies, eliminando zonas muertas.",
      icon: <Share2 className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Punto a Multipunto (PMP)",
      description: "Soluciones de conectividad inalámbrica para múltiples ubicaciones desde un nodo central, ideal para campus o sectores rurales.",
      icon: <Radio className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Punto a Punto (PTP)",
      description: "Enlaces inalámbricos de alta capacidad para unir dos puntos distantes con latencia mínima y gran ancho de banda.",
      icon: <Zap className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Red WiFi 6 / 6E",
      description: "Implementación del último estándar inalámbrico para soportar mayor densidad de dispositivos y velocidades Gigabit.",
      icon: <Wifi className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Hotspot WiFi",
      description: "Sistemas de acceso público o para clientes con gestión de ancho de banda y portales cautivos personalizados.",
      icon: <Router className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "WiFi Protegido",
      description: "Capas de seguridad avanzadas WPA3 y aislamiento de clientes para redes WiFi corporativas y seguras.",
      icon: <Lock className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Soporte WiFi Profesional",
      description: "Análisis de espectro, mapas de calor y optimización de canales para resolver problemas de interferencia.",
      icon: <CircleHelp className="w-8 h-8 text-tevesat-primary" />
    }
  ];

  return (
    <ServiceLayout 
      title="Redes Inalámbricas"
      subtitle="Conectividad sin límites. Diseñamos redes WiFi de alto rendimiento para entornos corporativos, residenciales e industriales."
      bgImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000"
    >
      <section className="py-20 bg-tevesat-tertiary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-tevesat-primary/50 transition-all duration-300 group"
              >
                <div className="mb-6 bg-tevesat-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-tevesat-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-tevesat-primary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?q=80&w=1000" 
                alt="Wireless Tech"
                className="relative z-10 rounded-[3rem] shadow-2xl border border-white/10"
              />
            </div>
            <div>
              <h2 className="text-4xl font-black text-white mb-8 uppercase leading-tight">Máxima Cobertura, <br/><span className="text-tevesat-primary">Cero Zonas Muertas</span></h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Nuestras soluciones de Redes MESH y WiFi 6 aseguran que cada rincón de su espacio cuente con una señal potente y estable. Optimizamos el tráfico para que sus videoconferencias, streaming y aplicaciones críticas funcionen sin cortes.
              </p>
              <ul className="space-y-4 mb-10">
                {['Roaming sin interrupciones', 'Gestión centralizada en la nube', 'Seguridad de grado empresarial', 'Soporte técnico especializado'].map((text) => (
                  <li key={text} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-2 h-2 bg-tevesat-primary rounded-full"></div>
                    {text}
                  </li>
                ))}
              </ul>
              <button className="bg-tevesat-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Consultar Planes
              </button>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
