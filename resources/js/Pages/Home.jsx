import React from 'react';
import Navbar from '../Components/Home/Navbar';
import HeroBanner from '../Components/Home/HeroBanner';
import ServicesBar from '../Components/Home/ServicesBar';
import PlansSection from '../Components/Home/PlansSection';
import DiscoverSection from '../Components/Home/DiscoverSection';
import CoverageCheck from '../Components/Home/CoverageCheck';
import WhyTevesat from '../Components/Home/WhyTevesat';
import TvSection from '../Components/Home/TvSection';
import MyPayment from '../Components/Home/MyPayment';
import CoverageSection from '../Components/Home/CoverageSection';
import ContactForm from '../Components/Home/ContactForm';
import ImageBanner from '../Components/Home/ImageBanner';
import Footer from '../Components/Home/Footer';
import PromotionModal from '../Components/Home/PromotionModal';


/**
 * Home Page - Página principal de ${import.meta.env.VITE_NOMBRE_EMPRESA}
 * Integra todos los componentes de la página de inicio
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-tevesat-tertiary-dark">
      {/* Navbar - Sticky */}
      <Navbar />

      {/* Hero Banner - Sección principal */}
      <HeroBanner />

      {/* Services Bar - Servicios principales */}
      <ServicesBar />

      {/* Professional Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Plans Section - Planes de internet con tabs */}
      <PlansSection />

      {/* Professional Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Discover Section - Servicios adicionales */}
      <DiscoverSection />

      {/* Coverage Check - Formulario con animación */}
      <CoverageCheck />

      {/* Why Tevesat - Beneficios */}
      <WhyTevesat />

      {/* TV Selection - Canales para la familia */}
      <TvSection />

      {/* My Payment - Métodos de pago */}
      <MyPayment />

      {/* Coverage Section - Cobertura */}
      <CoverageSection />

      {/* Professional Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Contact Form - Formulario de contacto */}
      <ContactForm />

      {/* Image Banner - Promocional */}
      <ImageBanner />

      {/* Footer - Pie de página */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/573001234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-orange border-4 border-white"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Promotion Modal - Shows on page load */}
      <PromotionModal />
    </div>
  );
}
