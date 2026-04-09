import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface NextProjectProps {
  project: Project;
}

export default function NextProject({ project }: NextProjectProps) {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden mt-16 border-t border-white/5">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${project.heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0e]/90 to-[#0a0a0e]/60" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-lg">
          <p className="text-white/35 text-xs font-semibold tracking-[0.2em] uppercase">
            Up Next
          </p>
          <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="text-[#06b6d4] text-sm font-light">{project.tagline}</p>
          <p className="text-white/50 text-sm leading-relaxed font-light line-clamp-2">
            {project.summary}
          </p>
          <div className="flex items-center gap-3 text-xs text-white/35">
            <span>{project.category}</span>
            <span className="w-px h-3 bg-white/20" />
            <span>{project.year}</span>
            <span className="w-px h-3 bg-white/20" />
            <span>{project.status}</span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/projects/${project.slug}`)}
          className="group flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded font-semibold text-sm tracking-wide hover:bg-white/90 transition-all duration-200 flex-none hover:gap-4"
        >
          View Project
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
