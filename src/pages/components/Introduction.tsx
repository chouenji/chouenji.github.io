import React, { useEffect, useState } from 'react';
import pp from '@assets/pp.jpg';
import '@styles/introduction.css';

export default function Introduction() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      id="home"
      className={`section flex flex-col items-center justify-center gap-4 h-screen ${
        isMounted ? 'slide-in active' : 'slide-in'
      }`}
    >
      <img
        className="w-64 h-64 rounded-full border-black border-2"
        src={pp}
        alt="Profile"
      />
      <h1 className="text-4xl font-bold">Hello, I'm Kevin do Canto</h1>
      <p className="text-2xl font-semibold">I'm a Full Stack Developer</p>
    </div>
  );
}
