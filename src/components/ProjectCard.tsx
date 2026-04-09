import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const statusDots: Record<string, string> = {
  Active: 'bg-emerald-400',
  Completed: 'bg-sky-400',
  Ongoing: 'bg-amber-400',
  Prototype: 'bg-violet-400',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="group relative flex-none w-[165px] md:w-[190px] lg:w-[210px] cursor-pointer select-none"
      onClick={() => navigate(`/projects/${project.slug}`)}
    >
      <div className="relative overflow-hidden rounded-sm aspect-[2/3] bg-[#1a1a22]">
        <img
          src={project.posterImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        <div className="absolute inset-0 bg-[#06b6d4]/0 group-hover:bg-[#06b6d4]/5 transition-colors duration-300" />

        <div className="absolute top-2.5 left-2.5">
          <span className="text-[10px] font-semibold text-white/70 tracking-[0.12em] uppercase bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded-sm border border-white/10">
            {project.category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold text-sm leading-tight tracking-tight mb-1">
            {project.title}
          </h3>

          <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-300 ease-in-out">
            <p className="text-white/55 text-[11px] leading-snug mb-2 line-clamp-2">
              {project.tagline}
            </p>
            <div className="flex items-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  statusDots[project.status] ?? 'bg-white/40'
                }`}
              />
              <span className="text-white/45 text-[10px] tracking-wide">{project.status}</span>
              <span className="w-px h-2.5 bg-white/20 mx-0.5" />
              <span className="text-white/40 text-[10px]">{project.year}</span>
            </div>
          </div>
        </div>

        <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>

      <div className="absolute -inset-0.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: '0 0 0 1px rgba(6, 182, 212, 0.25)' }}
      />
    </div>
  );
}
