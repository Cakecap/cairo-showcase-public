import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectRailProps {
  label: string;
  projects: Project[];
}

export default function ProjectRail({ label, projects }: ProjectRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  if (projects.length === 0) return null;

  const updateScrollState = () => {
    const el = railRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = railRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    setTimeout(updateScrollState, 400);
  };

  return (
    <div className="relative group/rail mb-10">
      <div className="px-6 md:px-10 lg:px-14 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-0.5 h-4 bg-[#06b6d4] rounded-full" />
          <h2 className="text-white font-semibold text-base md:text-lg tracking-tight">
            {label}
          </h2>
          <span className="text-white/30 text-sm font-light">({projects.length})</span>
        </div>
        <a href="#" className="text-[#06b6d4] text-xs font-medium tracking-wide hover:text-[#06b6d4]/70 transition-colors duration-200 hidden md:block">
          View All →
        </a>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <button
            className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-r from-[#0a0a0e] to-transparent flex items-center justify-start pl-1 opacity-0 group-hover/rail:opacity-100 transition-opacity duration-200"
            onClick={() => scroll('left')}
          >
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
              <ChevronLeft className="w-4 h-4 text-white" />
            </div>
          </button>
        )}

        {canScrollRight && (
          <button
            className="absolute right-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-l from-[#0a0a0e] to-transparent flex items-center justify-end pr-1 opacity-0 group-hover/rail:opacity-100 transition-opacity duration-200"
            onClick={() => scroll('right')}
          >
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </button>
        )}

        <div
          ref={railRef}
          onScroll={updateScrollState}
          className="flex gap-3 overflow-x-auto scroll-smooth px-6 md:px-10 lg:px-14 pb-4 scrollbar-hide"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <div className="flex-none w-4 md:w-6 lg:w-10" />
        </div>
      </div>
    </div>
  );
}
