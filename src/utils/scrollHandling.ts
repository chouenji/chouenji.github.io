import { useEffect } from 'react';

const scrollHandling = (
  setVisible: React.Dispatch<boolean>,
  prevScrollPos: number,
  setPrevScrollPos: React.Dispatch<number>
) => {
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
};

export default scrollHandling;
