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
          <Image className="md:w-6/12 w-8/12 mx-auto" src={grad} />
          <div className="md:w-1/2 p-4 text-center mx-auto">
            <p className="md:text-lg text-sm text-justify">
              Graduado em Ciência da Computação pelo Brooklyn College, minha
              jornada acadêmica envolveu explorar diversos assuntos relevantes,
              como algoritmos, estruturas de dados, linguagens de programação e
              metodologias de desenvolvimento de software. Esses estudos
              aprimoraram habilidades como pensamento crítico e comunicação
              eficaz.
            </p>
            <br />
            <p className="md:text-lg text-sm text-justify">
              Nessa jornada, estou emocionado em anunciar minha busca ativa por
              cargos como Engenheiro de Software. Prosperando em resolução de
              problemas e inovação, estou ansioso para contribuir com minhas
              habilidades para uma equipe dinâmica.
            </p>
          </div>
        </div>
        <ScrollArrow targetId="projetos" />
      </div>
    </div>
  );
}
