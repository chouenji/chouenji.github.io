import React, { useRef, useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';
import grad from '@assets/grad.png';
import ScrollArrow from './ScrollArrow';

export default function Sobre() {
  const [isMounted, setIsMounted] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    if (aboutRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slide-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(aboutRef.current);
    }
  }, []);

  return (
    <div
      id="sobre"
      className="section bg-black text-white min-h-screen flex flex-col items-center justify-center"
    >
      <div
        ref={aboutRef}
        className={`mx-auto text-center mb-10 ${isMounted ? 'slide-in' : ''}`}
      >
        <h1 className="text-4xl font-bold mb-10">Sobre Mim</h1>
        <div className="w-9/12 flex flex-col lg:flex-row items-center justify-center mx-auto">
          <Image className="xl:w-6/12 w-10/12 md:w-6/12 mx-auto" src={grad} />
          <div className="md:w-1/2 p-4 text-center mx-auto">
            <p className="md:text-lg text-sm text-justify">
              Formado com graduação em Ciência da Computação pelo Brooklyn
              College e obtive um diploma de associado em Sistemas de Informação
              pelo Kingsborough Community College.
            </p>
            <br />
            <p className="md:text-lg text-sm text-justify">
              Apaixonado por criar aplicações web que sejam inovadoras e
              visualmente atraentes. Atualmente em busca de oportunidades
              full-time como engenheiro de software.
            </p>
          </div>
        </div>
      </div>
      <ScrollArrow targetId="projetos" />
    </div>
  );
}
