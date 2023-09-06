import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button, Image, Link } from '@nextui-org/react';

import profile1 from '@assets/project1.png';
import profile1b from '@assets/project1b.png';
import project1c from '@assets/project1c.png';
import profile2 from '@assets/project2.png';
import profile2b from '@assets/project2b.png';
import project2c from '@assets/project2c.png';
import profile3 from '@assets/project3.png';
import profile3b from '@assets/project3b.png';
import project3c from '@assets/project3c.png';

export default function Projetos() {
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
      id="projetos"
      ref={projectsRef}
      className={`section bg-white min-h-screen flex flex-col items-center justify-center ${
        isMounted ? 'slide-in' : ''
      }`}
    >
      <h1 className="text-4xl text-center font-bold mb-6">Projetos</h1>
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="project p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">FriendFinder</h3>
          <Carousel
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
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
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
            FriendFinder é uma aplicação full-stack que ajuda você a encontrar
            um amigo.
          </p>
          <h2 className="text-md font-bold mb-2 mt-4 text-center">
            Tecnologias
          </h2>
          <ul className="flex flex-wrap justify-center list-disc gap-2 mt-4">
            <li className="mr-6">React</li>
            <li className="mr-6">TypeScript</li>
            <li className="mr-6">Tailwind</li>
            <li className="mr-6">Node.js</li>
            <li className="mr-6">Express</li>
            <li className="mr-6">PostgreSQL</li>
          </ul>
          <br />
          <div className="w-full text-center">
            <Button
              as={Link}
              target="_blank"
              variant="flat"
              className="md:text-xl text-lg mt-3 mr-3"
              href="https://github.com/chouenji/FriendFinder"
            >
              Ver no Github
            </Button>
          </div>
        </div>
        <div className="project bg-white p-6 rounded-lg shadow-md border-t-2">
          <h3 className="text-xl font-bold mb-2">Pet Prodigy</h3>
          <Carousel
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
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
          >
            <Image
              className="mb-4 border-2 border-black"
              src={profile2}
              alt="Pet Prodigy"
            />
            <Image
              className="mb-4 border-2 border-black"
              src={profile2b}
              alt="Pet Prodigy"
            />
            <Image
              className=" mb-4 border-2 border-black"
              src={project2c}
              alt="Pet Prodigy"
            />
          </Carousel>
          <p>
            Pet Prodigy é uma aplicação full-stack que ajuda você a encontrar um
            animal de estimação.
          </p>
          <h2 className="text-md font-bold mb-2 mt-4 text-center">
            Tecnologias
          </h2>
          <ul className="flex flex-wrap justify-center list-disc gap-2 mt-4">
            <li className="mr-6">React</li>
            <li className="mr-6">TypeScript</li>
            <li className="mr-6">Tailwind</li>
            <li className="mr-6">Node.js</li>
            <li className="mr-6">Express</li>
            <li className="mr-6">MongoDB</li>
          </ul>
          <br />
          <div className="w-full text-center">
            <Button
              as={Link}
              target="_blank"
              variant="flat"
              className="md:text-xl text-lg mr-3"
              href="https://pet-prodigy-production.up.railway.app/"
            >
              Ver Demo
            </Button>

            <Button
              as={Link}
              target="_blank"
              variant="flat"
              className="md:text-xl text-lg xl:mt-0 mt-3 mr-3"
              href="https://github.com/CTP-team-meeter/pet-prodigy"
            >
              Ver no Github
            </Button>
          </div>
        </div>
        <div className="project bg-white p-6 rounded-lg shadow-md border-t-2">
          <h3 className="text-xl font-bold mb-2">e-Study</h3>
          <Carousel
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
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
          >
            <Image
              className="mx-auto mb-4 border-2 border-black"
              src={profile3}
              alt="e-Study"
            />
            <Image
              className=" mx-auto mb-4 border-2 border-black"
              src={profile3b}
              alt="e-Study"
            />
            <Image
              className="mx-auto mb-4 border-2 border-black"
              src={project3c}
              alt="e-Study"
            />
          </Carousel>
          <p>
            e-Study é uma aplicação full-stack inspirada no Kahoot que ajuda
            você a estudar com outros usuários.
          </p>
          <h2 className="text-md font-bold mb-2 mt-4 text-center">
            Tecnologias
          </h2>

          <ul className="flex flex-wrap justify-center list-disc gap-2 mt-4">
            <li className="mr-6">React</li>
            <li className="mr-6">Tailwind</li>
            <li className="mr-6">Node.js</li>
            <li className="mr-6">Express</li>
            <li className="mr-6">PostgreSQL</li>
            <li className="mr-6">Sequelize</li>
          </ul>
          <br />
          <div className="w-full text-center">
            <Button
              as={Link}
              target="_blank"
              variant="flat"
              href="https://e-study-production.up.railway.app"
              className="md:text-xl text-lg mr-3"
            >
              Ver Demo
            </Button>

            <Button
              as={Link}
              target="_blank"
              variant="flat"
              className="md:text-xl text-lg xl:mt-0 mt-3 mr-3"
              href="https://github.com/chouenji/estudy"
            >
              Ver no Github
            </Button>
          </div>
        </div>
        <div></div>
        <Link href="#início" className="justify-center items-center">
          <Button className="text-xl p-6 mb-2" variant="flat" color="success">
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  );
}
