import { RefObject, useEffect } from 'react';
const useAnimation = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slide-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    }
  }, []);
};

export default useAnimation;
