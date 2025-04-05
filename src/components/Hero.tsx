"use client"

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/hero.webp';
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <section
      className={`relative h-screen bg-black bg-cover bg-center bg-no-repeat snap-start w-full transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundImage: isLoaded ? `url('/hero.webp')` : 'none' }}
    >
      {/* Overlay oscuro */}
      {isLoaded && (
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      )}

      {/* Contenido */}
      {isLoaded && (
        <div className="relative z-10 h-full flex items-center justify-center text-white text-5xl animate-fade-in">
          Bienvenido a mi sitio
        </div>
      )}
    </section>
  );
}
