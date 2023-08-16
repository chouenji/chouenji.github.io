import React, { useRef, useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';
import grad from '@assets/grad.png';

export default function About() {
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
      id="about"
      className="section bg-black text-white min-h-screen flex flex-col items-center justify-center"
    >
      <div
        ref={aboutRef}
        className={`mx-auto text-center ${isMounted ? 'slide-in' : ''}`}
      >
        <div className="text-4xl font-bold mb-6">About Me</div>
        <div className="flex flex-col items-center text-justify">
          <Image className="w-96 mx-auto" src={grad} />
          <br />
          <p className="w-10/12 sm:text-sm md:text-base lg:text-lg xl:text-xl md:ml-3 ml-0 mb-3 text-left md:text-justify">
            I earned a Bachelor's degree in Computer Science from Brooklyn
            College and an Associate's degree in Information Systems from
            Kingsborough Community College. Exploring various fields, I
            discovered my true passion in web development. I acquired expertise
            in both frontend and backend development. Today, I proudly identify
            as a full stack developer, proficient in crafting comprehensive
            solutions across the entire development spectrum.
          </p>
        </div>
      </div>
    </div>
  );
}
