import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';
import port from '@assets/brazil.png';

export default function DisplayNavbar({
  secondaryLayoutUrl,
}: {
  secondaryLayoutUrl: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuItems = ['Home', 'About', 'Projects'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let foundActive = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            foundActive = true;
          }
        });

        // If no section is intersecting, reset activeSection
        if (!foundActive) {
          setActiveSection('');
        }
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleMobileMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  function redirectToSecondaryLayout() {
    window.location.href = secondaryLayoutUrl;
  }

  return (
    <Navbar
      className="dark text-foreground bg-background opacity-80"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link
            color={activeSection === 'home' ? 'warning' : 'foreground'}
            href="#home"
          >
            Home
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link
            color={activeSection === 'about' ? 'warning' : 'foreground'}
            href="#about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={activeSection === 'projects' ? 'warning' : 'foreground'}
            href="#projects"
          >
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          <Button
            target="_blank"
            as={Link}
            href="https://github.com/chouenji"
            variant="flat"
          >
            Github
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            target="_blank"
            as={Link}
            href="https://www.linkedin.com/in/kevindocanto/"
            variant="flat"
          >
            Linkedin
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Avatar
            className="cursor-pointer hover:opacity-80"
            isBordered
            color="success"
            src={port}
            alt="Portuguese"
            onClick={redirectToSecondaryLayout}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={`#${item.toLowerCase()}`}
              onClick={handleMobileMenuItemClick}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
