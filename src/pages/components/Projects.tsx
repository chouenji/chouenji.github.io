import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Image, Link } from '@nextui-org/react';

import profile1 from '../../assets/project1.png';
import profile1b from '../../assets/project1b.png';
import project1c from '../../assets/project1c.png';
import profile2 from '../../assets/project2.png';
import profile2b from '../../assets/project2b.png';
import project2c from '../../assets/project2c.png';
import profile3 from '../../assets/project3.png';
import profile3b from '../../assets/project3b.png';
import project3c from '../../assets/project3c.png';

export default function Projects() {
  const [isMounted, setIsMounted] = useState(false);

  const projectsRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    if (projectsRef.current) {
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
      observer.observe(projectsRef.current);
    }
  }, []);

  return (
    <div
      id="projects"
      ref={projectsRef}
      className={`section text-center h-screen ${isMounted ? 'slide-in' : ''}`}
    >
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p>Here are some of my projects</p>
      <div className="project p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">FriendFinder</h3>
        <Carousel
          width={1000}
          ariaLabel="FriendFinder"
          showStatus={false}
          showThumbs={false}
          className="mt-8 flex justify-center"
          emulateTouch
          autoPlay
          infiniteLoop
          showArrows
          interval={2000}
          transitionTime={500}
        >
          <Image
            className="mb-4 border-2 border-black"
            src={profile1}
            alt="FriendFinder"
          />
          <Image
            className="mb-4 border-2 border-black"
            src={profile1b}
            alt="FriendFinder"
          />
          <Image
            className="mb-4 border-2 border-black"
            src={project1c}
            alt="FriendFinder"
          />
        </Carousel>
        <p>
          FriendFinder is a full-stack application that helps you find a friend.
          It uses Node.js and Express.js for the backend and Tailwind for the
          frontend.
        </p>
        <Link
          target="_blank"
          className="text-lg text-orange-400 hover:text-orange-300"
          href="https://github.com/chouenji/FriendFinder"
        >
          View on Github
        </Link>
      </div>
      <div className="project  bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">Pet Prodigy</h3>
        <Carousel
          width={1000}
          ariaLabel="FriendFinder"
          showStatus={false}
          showThumbs={false}
          className="mt-8 flex justify-center"
          emulateTouch
          autoPlay
          infiniteLoop
          showArrows
          interval={2000}
          transitionTime={500}
        >
          <Image
            width={1000}
            className="mx-auto mb-4 border-2 border-black"
            src={profile2}
            alt="Pet Prodigy"
          />
          <Image
            width={1000}
            className="mx-auto mb-4 border-2 border-black"
            src={profile2b}
            alt="Pet Prodigy"
          />
          <Image
            width={1000}
            className="mx-auto mb-4 border-2 border-black"
            src={project2c}
            alt="Pet Prodigy"
          />
        </Carousel>
        <p>
          Pet Prodigy is a full-stack application that helps you find a pet.
        </p>
        <Link
          target="_blank"
          className="text-xl mr-4 text-orange-400 hover:text-orange-300"
          href="https://pet-prodigy-production.up.railway.app/"
        >
          View Live
        </Link>
        <Link
          target="_blank"
          className="text-xl text-orange-400 hover:text-orange-300"
          href="https://github.com/CTP-team-meeter/pet-prodigy"
        >
          View on Github
        </Link>
      </div>
      <div className="project bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">e-Study</h3>
        <Carousel
          width={1000}
          ariaLabel="FriendFinder"
          showStatus={false}
          showThumbs={false}
          className="mt-8 flex justify-center"
          emulateTouch
          autoPlay
          infiniteLoop
          showArrows
          interval={2000}
          transitionTime={500}
        >
          <Image
            width={1000}
            className="mx-auto mb-4 border-2 border-black"
            src={profile3}
            alt="e-Study"
          />
          <Image
            width={1000}
            className=" mx-auto mb-4 border-2 border-black"
            src={profile3b}
            alt="e-Study"
          />
          <Image
            width={1000}
            className="mx-auto mb-4 border-2 border-black"
            src={project3c}
            alt="e-Study"
          />
        </Carousel>
        <p className="">
          e-Study is a full-stack application inspired by Kahoot that helps you
          study with other users.
        </p>
        <Link
          target="_blank"
          href="https://e-study-production.up.railway.app"
          className="text-xl text-orange-400 hover:text-orange-300 mr-4"
        >
          View Live
        </Link>
        <Link
          target="_blank"
          className="text-xl text-orange-400 hover:text-orange-300"
          href="https://github.com/chouenji/estudy"
        >
          View on Github
        </Link>
      </div>
    </div>
  );
}
