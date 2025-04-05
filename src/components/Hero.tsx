'use client';

import React, { useState, useEffect } from 'react';
import message from '../data/HeroMessage.json';

// 🔸 Tipo correcto para los datos del JSON
interface Message {
  h1: string;
  h2: string;
}

// 🔹 Usamos React.FC sin props, ya que no recibe ninguno
const Hero: React.FC = () => {
  const { h1, h2 }: Message = message;
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
      {isLoaded && <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />}

      {isLoaded && (
        <div className="relative z-10 h-full flex items-center text-center justify-center text-white animate-fade-in flex-col gap-4">
          <div className='mx-8'>
          <h1 className='oswald text-6xl md:text-8xl mb-10'>{h1}</h1>
          <h2 className='oswald text-3xl md:text-4xl '>{h2}</h2>
          </div>
  
        </div>
      )}
    </section>
  );
};

export default Hero;