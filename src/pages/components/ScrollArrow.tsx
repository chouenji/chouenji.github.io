interface ScrollArrowProps {
  targetId: string;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ targetId }) => {
  const scrollSmoothly = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const targetOffset = targetSection.getBoundingClientRect().top;
      const initialOffset = window.pageYOffset;
      const startTime = performance.now();
      const duration = 800; // Adjust the duration as needed

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
      className="scroll-arrow hover:scale-110 hover:text-lg hover:-translate-y-1 cursor-pointer"
      onClick={scrollSmoothly}
    >
      <span className="text-lg transition font-semibold">Scroll</span>
      <br />
      <i className="fas fa-chevron-down transition ml-2 text-3xl"></i>
    </div>
  );
};

export default ScrollArrow;
