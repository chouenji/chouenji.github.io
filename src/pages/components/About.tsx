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
        <h1 className="text-4xl font-bold mb-10">About Me</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto p-10 gap-4">
          <Image
            className="lg:w-full md:w-6/12 w-[300px] mx-auto"
            src={grad}
            alt="Graduation"
          />
          <div className="flex flex-col justify-between gap-x-4 text-center mx-auto">
            <p className="xl:text-xl w-full text-sm text-justify">
              I graduated in <span className="font-bold">Computer Science</span>{' '}
              from Brooklyn College, where I had the opportunity to explore
              various topics in the field of computing, such as algorithms, data
              structures, programming languages, and software development
              methodologies. These studies enhanced skills like critical
              thinking and effective communication.
            </p>
            <br />
            <p className="xl:text-xl text-sm text-justify">
              I have almost 2 years of experience in web application
              development. My goal is to become a Software Engineer, and I am
              actively seeking opportunities to further my professional growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
