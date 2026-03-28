import React from 'react';

export default function ImageBanner() {
  return (
    <section className="w-full bg-white">
      <div className="w-full relative overflow-hidden h-[400px] md:h-[550px] lg:h-[650px] xl:h-[550px]">
        <img
          src="/images/banner2.png"
          alt="Promoción Redes Tevesat S.A.S"
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
        />
        {/* Subtle Overlay to make it feel more integrated */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
