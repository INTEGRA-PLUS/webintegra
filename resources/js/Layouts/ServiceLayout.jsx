import React from 'react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';

export default function ServiceLayout({ children, title, subtitle, bgImage }) {
  return (
    <div className="min-h-screen bg-tevesat-tertiary-dark">
      <Navbar />
      
      {/* Hero Section for Service */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt={title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tevesat-tertiary-dark/60 via-tevesat-tertiary-dark to-tevesat-tertiary-dark"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-10 flex justify-center">
            <div className="w-24 h-1 bg-tevesat-primary rounded-full"></div>
          </div>
        </div>
      </section>

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}
