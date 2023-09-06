interface ScrollArrowProps {
  targetId: string;
  language: string;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ targetId, language }) => {
  const scrollSmoothly = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const targetOffset = targetSection.getBoundingClientRect().top;
      const initialOffset = window.pageYOffset;
      const startTime = performance.now();
      const duration = 500;

      const smoothScroll = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
        const scrollTo = initialOffset + targetOffset * easeProgress;

        window.scrollTo(0, scrollTo);

        if (progress < 1) {
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
  };

  return (
    <div
      className="scroll-arrow hover:scale-110 hover:text-lg hover:-translate-y-1 cursor-pointer transition ease-in delay-150"
      onClick={scrollSmoothly}
    >
      <span className="text-lg transition font-semibold w-full text-center">
        {language === 'en' ? 'Scroll down' : 'Role para baixo'}
      </span>
      <div className="mt-2 flex justify-center items-center rounded-full text-black bg-white border-black border-4  w-16 h-16 mx-auto text-2xl">
        <i className="fas fa-chevron-down transition"></i>
        <br />
      </div>
    </div>
  );
};

export default ScrollArrow;
