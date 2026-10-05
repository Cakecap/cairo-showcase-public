import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const VISIBILITY_SCROLL_Y = 420;

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > VISIBILITY_SCROLL_Y);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`public-back-to-top fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 flex items-center justify-center w-12 h-12 md:w-[3.25rem] md:h-[3.25rem] rounded-full border border-accent/40 bg-[linear-gradient(180deg,rgba(33,18,24,0.94),rgba(16,9,12,0.88))] text-white/88 shadow-[0_0_0_1px_rgba(122,24,44,0.18),0_14px_30px_rgba(0,0,0,0.34),0_0_18px_rgba(122,24,44,0.12)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-accent/75 hover:bg-[linear-gradient(180deg,rgba(72,18,31,0.96),rgba(30,10,15,0.92))] hover:text-white hover:shadow-[0_0_0_1px_rgba(144,0,33,0.38),0_0_30px_rgba(144,0,33,0.34),0_18px_42px_rgba(0,0,0,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-3 opacity-0 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-[1.125rem] h-[1.125rem] md:w-5 md:h-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.12)]" />
    </button>
  );
}
