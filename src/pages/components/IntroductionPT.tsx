import { useEffect, useState } from 'react';
import pp from '@assets/pp.jpg';
import '@styles/introduction.css';
import ScrollArrow from './ScrollArrow';
import { Button, Link } from '@nextui-org/react';

export default function Introduction() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      id="início"
      className={`section flex flex-col items-center mt-20 gap-2 min-h-screen ${
        isMounted ? 'slide-in active' : 'slide-in'
      }`}
    >
      <img
        className="w-64 h-64 rounded-full border-black border-3"
        src={pp}
        alt="Perfil"
      />
      <h1 className="text-2xl md:text-2xl lg:text-xl xl:text-4xl font-bold">
        Olá, eu sou Kevin do Canto
      </h1>

      <p className="text-xl md:text-2xl font-semibold">
        Sou um Desenvolvedor Full Stack
      </p>
      <Button
        as={Link}
        href="mailto:kevin.docanto460@gmail.com"
        className="text-2xl p-6 bg-black text-white mt-4 font-semibold"
        variant="flat"
      >
        Contate-me
      </Button>
      <ScrollArrow targetId="sobre" />
    </div>
  );
}
