import React from 'react';
import ServiceLayout from '../../Layouts/ServiceLayout';
import { ShieldAlert, Lock, UserCheck, ShieldCheck, FileCheck, Landmark, Search, Filter, Eye, Target } from 'lucide-react';

export default function Ciberseguridad() {
  const items = [
    {
      title: "Análisis de vulnerabilidad",
      description: "Identificación proactiva de debilidades en su red y sistemas para prevenir ataques antes de que sucedan.",
      icon: <Search className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Control de acceso (RBAC)",
      description: "Implementación de políticas de acceso basadas en roles para asegurar que cada usuario solo acceda a lo necesario.",
      icon: <UserCheck className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Protección Antivirus EDR",
      description: "Soluciones avanzadas de protección para endpoints con detección y respuesta ante incidentes en tiempo real.",
      icon: <ShieldCheck className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Firma Digital",
      description: "Seguridad y autenticidad para sus documentos electrónicos mediante certificados digitales validados.",
      icon: <FileCheck className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Next-Gen Firewall",
      description: "Gestión perimetral avanzada con filtrado de paquetes, detección de intrusos (IDS/IPS) y VPN seguras.",
      icon: <Lock className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Pruebas de Penetración",
      description: "Simulacros de ataques reales para evaluar la resistencia de sus defensas tecnológicas (Pentesting).",
      icon: <Target className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Detección XDR",
      description: "Visibilidad holística y respuesta automatizada a amenazas a través de múltiples capas de seguridad.",
      icon: <Eye className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Marco MITRE ATT&CK",
      description: "Alineación de estrategias de defensa basadas en tácticas y técnicas reales utilizadas por atacantes globales.",
      icon: <Landmark className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Filtrado SPF y Email",
      description: "Protección contra phishing y suplantación de identidad mediante protocolos de seguridad en el correo electrónico.",
      icon: <Filter className="w-8 h-8 text-tevesat-primary" />
    }
  ];

  return (
    <ServiceLayout 
      title="Ciberseguridad"
      subtitle="Proteja su activo más valioso: la información. Implementamos defensas de grado militar para su negocio."
      bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000"
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

          <div className="mt-20 relative overflow-hidden rounded-[4rem] bg-[#0a0a0a] border border-white/5 p-10 md:p-20">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full fill-tevesat-primary">
                <path d="M200 0L400 100V300L200 400L0 300V100L200 0ZM200 50L50 125V275L200 350L350 275V125L200 50Z" />
              </svg>
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tevesat-primary/20 text-tevesat-primary border border-tevesat-primary/30 mb-8">
                <ShieldAlert size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Seguridad Prioritaria</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">No espere a ser la próxima víctima de un ciberataque.</h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Nuestras certificaciones y metodologías aseguran que su infraestructura cumpla con los estándares más exigentes de la industria. Analizamos, protegemos y respondemos ante cualquier amenaza.
              </p>
              <button className="bg-tevesat-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-tevesat-primary/90 transition-all shadow-[0_20px_50px_rgba(127,171,60,0.3)]">
                Agendar Consultoría
              </button>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
