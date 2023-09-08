import { useEffect } from 'react';

const activeSectionNav = (setActiveSection: React.Dispatch<string>) => {
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
};

export default activeSectionNav;
