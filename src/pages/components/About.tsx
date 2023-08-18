import React, { useRef, useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';
import grad from '@assets/grad.png';
import ScrollArrow from './ScrollArrow';

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
        className={`mx-auto text-center mb-10 ${isMounted ? 'slide-in' : ''}`}
      >
        <h1 className="text-4xl font-bold mb-10">About Me</h1>
        <div className="w-9/12 flex flex-col lg:flex-row items-center justify-center mx-auto">
          <Image className="xl:w-6/12 w-10/12 md:w-6/12 mx-auto" src={grad} />
          <div className="md:w-1/2 p-4 text-center mx-auto">
            <p className="md:text-lg text-sm text-justify">
              Passionate about creating web applications that are both
              innovative and visually appealing. Currently looking for full-time
              opportunities as a software engineer.
            </p>
            <br />
            <p className="md:text-lg text-sm text-justify">
              My academic journey encompasses a Bachelor's degree in Computer
              Science from Brooklyn College and an Associate's degree in
              Information Systems from Kingsborough Community College.
            </p>
          </div>
        </div>
      </div>
      <ScrollArrow targetId="projects" />
    </div>
  );
}
