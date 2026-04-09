import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0e]/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center gap-1">
            <span className="text-[#06b6d4] font-black text-xl tracking-tighter leading-none">
              CAIRO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mb-3 opacity-90" />
          </div>
          <span className="text-white/90 font-light text-sm tracking-[0.25em] uppercase mt-0.5">
            Showcase
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Projects', 'Research', 'Innovation', 'About'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/60 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:block text-white/60 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
          >
            Contact
          </a>
          <button className="px-4 py-1.5 border border-white/25 hover:border-white/60 text-white text-sm font-medium tracking-wide rounded transition-all duration-200 hover:bg-white/5">
            Submit Project
          </button>
        </div>
      </div>
    </header>
  );
}
