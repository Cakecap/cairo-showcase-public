import { ArrowLeft, Play, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../types';

interface DetailHeroProps {
  project: Project;
}

const statusConfig: Record<string, { label: string; classes: string }> = {
  Active: { label: 'Active', classes: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' },
  Completed: { label: 'Completed', classes: 'text-sky-400 bg-sky-400/10 border-sky-400/30' },
  Ongoing: { label: 'Ongoing', classes: 'text-amber-400 bg-amber-400/10 border-amber-400/30' },
  Prototype: { label: 'Prototype', classes: 'text-violet-400 bg-violet-400/10 border-violet-400/30' },
};

export default function DetailHero({ project }: DetailHeroProps) {
  const navigate = useNavigate();
  const status = statusConfig[project.status] ?? statusConfig['Active'];

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${project.heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="relative z-10 flex flex-col h-full min-h-[70vh] md:min-h-[80vh] max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 pt-28 pb-16 justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-200 w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Showcase
        </button>

        <div className="max-w-2xl xl:max-w-3xl space-y-5 mt-auto">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[#06b6d4] text-xs font-semibold tracking-[0.2em] uppercase">
              {project.category}
            </span>
            <span className="w-px h-3 bg-white/25" />
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded border tracking-wide ${status.classes}`}
            >
              {status.label}
            </span>
            <span className="w-px h-3 bg-white/25" />
            <span className="text-white/45 text-xs tracking-wide">{project.year}</span>
            <span className="w-px h-3 bg-white/25" />
            <span className="text-white/45 text-xs tracking-wide">{project.duration}</span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[0.95] tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg text-[#06b6d4] font-light tracking-wide leading-snug">
            {project.tagline}
          </p>

          <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-lg font-light">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.technology.map((tech) => (
              <span
                key={tech}
                className="text-[11px] text-white/55 bg-white/6 border border-white/10 px-2.5 py-1 rounded-sm tracking-wide font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            {project.demoVideoUrl && (
              <button className="flex items-center gap-2.5 bg-white text-black px-6 py-3 rounded font-semibold text-sm tracking-wide hover:bg-white/90 transition-all duration-200">
                <Play className="w-4 h-4 fill-black" />
                Watch Demo
              </button>
            )}
            <button className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded font-semibold text-sm tracking-wide hover:bg-white/16 transition-all duration-200">
              <ExternalLink className="w-4 h-4" />
              Project Page
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0e] to-transparent pointer-events-none" />
    </section>
  );
}
