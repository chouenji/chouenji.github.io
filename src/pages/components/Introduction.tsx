import React, { useEffect, useState } from 'react';
import pp from '@assets/pp.jpg';
import '@styles/introduction.css';
import ScrollArrow from './ScrollArrow';
import { Button, Image, Link } from '@nextui-org/react';

export default function Introduction() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      id="home"
      className={`section flex flex-col items-center justify-center gap-4 min-h-screen max-h-screen ${
        isMounted ? 'slide-in active' : 'slide-in'
      }`}
    >
      <Image
        className="w-64 h-64 rounded-full border-black border-3"
        src={pp}
        alt="Profile"
      />
      <h1 className="text-2xl md:text-2xl lg:text-xl xl:text-4xl font-bold">
        Hello, I'm Kevin do Canto
      </h1>

      <p className="text-xl md:text-2xl font-semibold">
        I'm a Full Stack Developer
      </p>
      <Button
        as={Link}
        href="mailto:kevin.docanto460@gmail.com"
        className="text-2xl bg-black text-white mt-4 font-semibold"
      >
        Contact Me
      </Button>
      <br />
      <br />
      <ScrollArrow targetId="about" />
    </div>
  );
}
