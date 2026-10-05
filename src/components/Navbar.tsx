import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cairoLogo from '../../logos/logo-cairo-fullwhite-removebg-preview.png';
import PublicThemeToggle from './PublicThemeToggle';

const navItems = [
  { label: 'Projects', targetId: 'projects' },
  { label: 'Categories', targetId: 'categories' },
  { label: 'About CAIRO', targetId: 'about-cairo' },
  { label: 'Contact', targetId: 'contact' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTarget = (targetId: string) => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavClick = (targetId: string) => {
    if (location.pathname === '/') {
      window.history.replaceState(null, '', `#${targetId}`);
      scrollToTarget(targetId);
      return;
    }

    navigate({
      pathname: '/',
      hash: `#${targetId}`,
    });
  };

  return (
    <header
      className={`public-nav fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-accent/10 shadow-[0_24px_60px_rgba(0,0,0,0.45)]'
          : 'bg-gradient-to-b from-black/75 via-[rgba(18,10,14,0.35)] to-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 h-[5.75rem] md:h-[6.75rem] grid grid-cols-[1fr_auto_1fr] items-center">
        <Link to="/" className="group justify-self-start flex items-center pr-6 md:pr-8">
          <img
            src={cairoLogo}
            alt="CAIRO Showcase"
            className="public-logo h-[4.5rem] md:h-[5.5rem] w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
          />
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-8 justify-self-center">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => handleNavClick(item.targetId)}
              className="text-sm font-medium tracking-wide transition-colors duration-200 text-white/60 hover:text-accent-highlight"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center justify-self-end">
          <PublicThemeToggle />
        </div>
      </div>
    </header>
  );
}
