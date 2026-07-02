import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Planes', href: '/planes' },
    { label: 'Televisión', href: '/television' },
    { label: 'Speedtest', href: '/speedtest' },
    { label: 'Nosotros', href: '/nosotros', spa: true },
    { label: 'PQRS', href: '/pqrs' },
    { label: 'Contacto', href: '/#contacto' },
  ];

  const services = [
    { label: 'Cableado Estructurado', href: '/servicios/cableado-estructurado' },
    { label: 'Manos Remotas', href: '/servicios/manos-remotas' },
    { label: 'Ciberseguridad', href: '/servicios/ciberseguridad' },
    { label: 'Redes Inalámbricas', href: '/servicios/redes-inalambricas' },
    { label: 'Energías Renovables', href: '/servicios/energias-renovables' },
    { label: 'CCTV', href: '/servicios/cctv' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-20 transition-all duration-500 rounded-3xl px-8 border ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]'
            : 'bg-white/60 backdrop-blur-md border-gray-100/80'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center rounded-xl bg-tevesat-tertiary-dark p-1.5 shadow-sm">
                <img
                  src="/images/empresa/logo.png"
                  alt={import.meta.env.VITE_NOMBRE_EMPRESA}
                  className="h-9 md:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const LinkTag = link.spa ? Link : 'a';
              return (
                <LinkTag
                  key={link.label}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-tevesat-primary transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-tevesat-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                </LinkTag>
              );
            })}

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-tevesat-primary transition-all duration-300">
                Servicios
                <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)] transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                <div className="grid gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="block px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:bg-tevesat-primary hover:text-white transition-all"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
              className="text-tevesat-tertiary-dark"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-lg rounded-2xl border border-gray-100 p-4 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)] max-h-[80vh] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const LinkTag = link.spa ? Link : 'a';
                return (
                  <LinkTag
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-sm font-bold text-tevesat-tertiary-dark hover:bg-tevesat-primary hover:text-white transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </LinkTag>
                );
              })}

              <div className="border-t border-gray-100 my-2 pt-2">
                <span className="block px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400">Servicios</span>
                {services.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block px-4 py-3 rounded-xl text-sm font-bold text-tevesat-tertiary-dark hover:bg-tevesat-primary hover:text-white transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>

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
