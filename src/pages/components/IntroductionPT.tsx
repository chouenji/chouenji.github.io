import React, { useEffect, useState } from 'react';
import pp from '@assets/pp.jpg';
import '@styles/introduction.css';
import ScrollArrow from './ScrollArrow';

export default function Introduction() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      id="início"
      className={`section flex flex-col items-center justify-center gap-4 h-screen ${
        isMounted ? 'slide-in active' : 'slide-in'
      }`}
    >
      <img
        className="w-64 h-64 rounded-full border-black border-3"
        src={pp}
        alt="Perfil"
      />
      <h1 className="text-2xl md:text-2xl lg:text-xl xl:text-4xl font-bold">
        Olá eu sou Kevin do Canto
      </h1>

      <p className="text-xl md:text-2xl font-semibold">
        Sou um Desenvolvedor Full Stack
      </p>
      <br />
      <br />
      <br />
      <ScrollArrow targetId="sobre" />
    </div>
  );
}
