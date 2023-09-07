import React, { useRef, useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';
import grad from '@assets/grad.png';

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
        className={`mx-auto text-center ${isMounted ? 'slide-in' : ''}`}
      >
        <h1 className="text-4xl font-bold mb-10">Sobre Mim</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto p-10 gap-4">
          <Image
            className="lg:w-full md:w-6/12 w-[300px] mx-auto"
            src={grad}
            alt="Graduação"
          />
          <div className="flex flex-col justify-between gap-x-4 text-center mx-auto">
            <p className="xl:text-xl w-full text-sm text-justify">
              Me graduei em{' '}
              <span className="font-bold">Ciência da Computação </span>
              pelo Brooklyn College, no qual tive a oportunidade de explorar
              diversos assuntos na área da computação, como algoritmos,
              estruturas de dados, linguagens de programação e metodologias de
              desenvolvimento de software. Esses estudos aprimoraram habilidades
              como pensamento crítico e comunicação eficaz.
            </p>
            <br />
            <p className="xl:text-xl text-sm text-justify">
              Obtenho quase 2 anos de experiência em desenvolvimento de
              aplicações web. Meu objetivo é me tornar um Engenheiro de Software
              e estou em busca de oportunidades para me desenvolver
              profissionalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
