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
          <Image className="md:w-6/12 w-8/12 mx-auto" src={grad} />
          <div className="md:w-1/2 p-4 text-center mx-auto">
            <p className="md:text-lg text-sm text-justify">
              A graduate with a Bachelor's in Computer Science from Brooklyn
              College, my academic journey has involved exploring my academic
              journey has involved exploring various relevant subjects such as
              algorithms, data structures, programming languages, and software
              development methodologies. These studies have honed skills like
              critical thinking and effective communication.
            </p>
            <br />
            <p className="md:text-lg text-sm text-justify">
              On this journey, I'm thrilled to announce my active pursuit of
              roles as a Software Engineer. Thriving in problem-solving and
              innovation, I'm eager to contribute my skills to a dynamic team.
            </p>
          </div>
        </div>
        <ScrollArrow targetId="projects" />
      </div>
    </div>
  );
}
