import { useRef } from 'react';
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
import slideAnimation from 'src/utils/slideAnimation';

export default function Projects() {
  const projectsRef = useRef(null);

  slideAnimation(projectsRef);

  return (
    <div
      id="projects"
      className="section bg-white  min-h-screen flex flex-col items-center justify-center"
    >
      <div ref={projectsRef} className="mx-auto text-center">
        <h1 className="text-4xl text-center font-bold mb-10">Projects</h1>
        <div className=" w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="project xl:w-full w-[95%] mx-auto gap-4 p-6 rounded-lg shadow-md border-t-2">
            <h3 className="text-xl font-bold mb-2">FriendFinder</h3>
            <Carousel
              width={1000}
              ariaLabel="FriendFinder"
              showStatus={false}
              showThumbs={false}
              className=" flex justify-center"
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
              FriendFinder is a full-stack application that helps you find
              friends.
            </p>
            <h2 className="text-md font-bold mb-2 mt-4 text-center">
              Technologies
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
            <div className="w-full text-center h-10">
              <Button
                as={Link}
                target="_blank"
                className="md:text-xl text-lg mt-3 mr-3 bg-black text-white"
                variant="flat"
                href="https://github.com/chouenji/FriendFinder"
              >
                View on Github
              </Button>
            </div>
          </div>
          <div className="project w-[95%] h-full mx-auto bg-white p-6 rounded-lg shadow-md border-t-2">
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
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={50}
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
              Pet Prodigy is a full-stack application that helps you find a pet
              and discover nearby pet stores.
            </p>
            <h2 className="text-md font-bold mb-2 mt-4 text-center">
              Technologies
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
            <div className="xl:w-full text-center">
              <Button
                as={Link}
                target="_blank"
                variant="flat"
                className="md:text-xl text-lg xl:mt-0 mt-3 mr-3 bg-black text-white"
                href="https://pet-prodigy-production.up.railway.app/"
              >
                View Demo
              </Button>

              <Button
                as={Link}
                target="_blank"
                className="md:text-xl text-lg xl:mt-0 mt-3 mr-3 bg-black text-white"
                variant="flat"
                href="https://github.com/CTP-team-meeter/pet-prodigy"
              >
                View on Github
              </Button>
            </div>
          </div>
          <div className="project xl:w-full w-[95%] mx-auto bg-white p-6 rounded-lg shadow-md border-t-2">
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
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={50}
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
            <p>
              e-Study is a full-stack application inspired by Kahoot that helps
              you study with other users.
            </p>
            <h2 className="text-md font-bold mb-2 mt-4 text-center">
              Technologies
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
                className="md:text-xl text-lg  bg-black text-white mr-3"
                href="https://e-study-production.up.railway.app"
              >
                View Demo
              </Button>
              <Button
                as={Link}
                variant="flat"
                target="_blank"
                className="md:text-xl text-lg xl:mt-0 mt-3 mr-3 bg-black text-white"
                href="https://github.com/chouenji/estudy"
              >
                View on Github
              </Button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
