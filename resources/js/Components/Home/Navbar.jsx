import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Planes', href: '#planes' },
    { label: 'Quiénes somos', href: '#quienes-somos' },
    { label: 'Mi Pago', href: '#mi-pago' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tevesat-tertiary-dark/80 backdrop-blur-md shadow-2xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-20 transition-all duration-500 rounded-3xl px-8 border ${
          isScrolled 
            ? 'bg-tevesat-secondary/40 backdrop-blur-2xl border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'bg-white/5 backdrop-blur-md border-white/10'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3 group">
              <img 
                src="/images/empresa/logo.png" 
                alt={import.meta.env.VITE_NOMBRE_EMPRESA} 
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="flex flex-col">
                <span className="text-white font-black text-xs md:text-sm tracking-tighter leading-none group-hover:text-tevesat-primary transition-colors uppercase">{import.meta.env.VITE_NOMBRE_EMPRESA}</span>
              </div>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.2em] text-white/70 hover:text-tevesat-primary transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-tevesat-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-tevesat-primary text-white border-2 border-transparent px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-transparent hover:border-tevesat-primary hover:text-tevesat-primary transition-all duration-500 transform hover:scale-105 shadow-[0_10px_30px_rgba(236,50,55,0.3)]">
              Contratar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-tevesat-tertiary-dark/95 backdrop-blur-lg rounded-2xl border border-white/10 p-4 shadow-2xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-tevesat-primary hover:text-white transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full mt-4 bg-tevesat-primary text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-tevesat-primary-light transition shadow-lg shadow-tevesat-primary/20">
                Compra ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
