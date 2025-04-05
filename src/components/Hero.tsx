import React from 'react';

export default function Hero() {
    return (
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat snap-start w-full"
        style={{ backgroundImage: `url('/hero.webp')` }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
  
        {/* Contenido con animación */}
        <div className="relative z-10 h-full flex items-center justify-center text-white text-5xl animate-fade-in">
          Bienvenido a mi sitio
        </div>
      </section>
    );
  }
