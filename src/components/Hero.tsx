import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { Project } from '../types';

interface HeroProps {
  project: Project;
}

const statusColors: Record<string, string> = {
  Active: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
  Completed: 'text-sky-400 border-sky-400/40 bg-sky-400/10',
  Ongoing: 'text-amber-400 border-amber-400/40 bg-amber-400/10',
  Prototype: 'text-violet-400 border-violet-400/40 bg-violet-400/10',
};

export default function Hero({ project }: HeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1000px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s]"
        style={{ backgroundImage: `url(${project.heroImage})` }}
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/60 via-transparent to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-10 lg:px-14 max-w-[1800px] mx-auto left-0 right-0">
        <div className="max-w-2xl xl:max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-[#06b6d4] text-xs font-semibold tracking-[0.2em] uppercase">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded border tracking-wide ${
                statusColors[project.status] ?? 'text-white/60 border-white/20'
              }`}
            >
              {project.status}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50 text-xs tracking-wide">{project.year}</span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-[#06b6d4] font-light tracking-wide leading-snug max-w-xl">
            {project.tagline}
          </p>

          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg font-light">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45 tracking-wide pt-1">
            <span className="flex items-center gap-1.5">
              <span className="text-white/25">PIC</span>
              <span className="text-white/65">{project.pic}</span>
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span>{project.duration}</span>
            <span className="w-px h-3 bg-white/20" />
            <span>{project.cost}</span>
            <span className="w-px h-3 bg-white/20" />
            <span className="flex items-center gap-1.5">
              {project.technology.slice(0, 3).map((t) => (
                <span key={t} className="text-white/50 bg-white/8 px-2 py-0.5 rounded text-[11px] border border-white/10">
                  {t}
                </span>
              ))}
            </span>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => navigate(`/projects/${project.slug}`)}
              className="group flex items-center gap-2.5 bg-white text-black px-6 py-3 rounded font-semibold text-sm tracking-wide hover:bg-white/90 transition-all duration-200 hover:gap-3"
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              View Project
            </button>
            {project.demoVideoUrl && (
              <button className="group flex items-center gap-2.5 bg-white/12 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded font-semibold text-sm tracking-wide hover:bg-white/18 transition-all duration-200">
                <Play className="w-4 h-4 fill-white" />
                Watch Demo
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown className="w-5 h-5 text-white" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0e] to-transparent pointer-events-none" />
    </section>
  );
}
