import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Project } from '../types';
import { getProjectStatusConfig } from '../utils/projectStatus';

interface HeroProps {
  project: Project;
}

export default function Hero({ project }: HeroProps) {
  const navigate = useNavigate();
  const status = getProjectStatusConfig(project.status);
  const hasHeroImage = Boolean(project.heroImage.trim());
  const heroMetaItems = [
    project.pic
      ? (
          <span key="pic" className="flex items-center gap-1.5">
            <span className="text-accent-gold/70">PIC</span>
            <span className="text-white/65">{project.pic}</span>
          </span>
        )
      : null,
    project.duration ? <span key="duration">{project.duration}</span> : null,
    project.cost ? <span key="cost">{project.cost}</span> : null,
  ].filter(Boolean);

  return (
    <section className="public-hero relative w-full h-screen min-h-[640px] max-h-[1000px] overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(122,24,44,0.24),transparent_34%),linear-gradient(135deg,rgba(14,10,12,1),rgba(8,6,8,1))]">
      {hasHeroImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s] hero-bg-reveal"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(38,24,30,0.42),rgba(11,8,10,0.06))]" />
      )}

      <div className="public-hero-dim absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,24,44,0.3),transparent_36%)]" />
      <div className="public-hero-side-gradient absolute inset-0 bg-gradient-to-r from-black/90 via-[rgba(24,12,16,0.68)] to-transparent" />
      <div className="public-hero-bottom-gradient public-hero-full-fade absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
      <div className="public-hero-bottom-gradient public-hero-full-fade absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

      <div
        className="public-hero-content absolute inset-0 z-10 flex flex-col justify-end pb-24 px-6 md:px-10 lg:px-14 max-w-[1800px] mx-auto left-0 right-0 hero-reveal hero-reveal-delayed"
      >
        <div className="public-hero-copy max-w-2xl xl:max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded border tracking-wide ${status.badgeClasses}`}
            >
              {status.label}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50 text-xs tracking-wide">{project.year}</span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-light tracking-wide leading-snug max-w-xl">
            {project.tagline}
          </p>

          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg font-light">
            {project.summary}
          </p>

          {(heroMetaItems.length > 0 || project.technology.length > 0) && (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45 tracking-wide pt-1">
              {heroMetaItems.map((item, index) => (
                <div key={index} className="flex items-center gap-x-5 gap-y-2">
                  {index > 0 ? <span className="w-px h-3 bg-white/20" /> : null}
                  {item}
                </div>
              ))}
              {project.technology.length > 0 ? (
                <>
                  {heroMetaItems.length > 0 ? <span className="w-px h-3 bg-white/20" /> : null}
                  <span className="flex items-center gap-1.5">
                    {project.technology.slice(0, 3).map((t) => (
                      <span key={t} className="text-white/55 bg-accent/8 px-2 py-0.5 rounded text-[11px] border border-accent/12">
                        {t}
                      </span>
                    ))}
                  </span>
                </>
              ) : null}
            </div>
          )}

          <div className="flex items-center pt-2">
            <button
              onClick={() => navigate(`/projects/${project.slug}`)}
              className="public-primary-button group flex items-center gap-2.5 bg-accent text-white px-6 py-3 rounded font-semibold text-sm tracking-wide hover:bg-accent-dark transition-all duration-200 hover:gap-3 shadow-[0_18px_40px_rgba(88,13,29,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              View Project
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown className="w-5 h-5 text-white" />
      </div>

      <div className="public-hero-bottom-gradient public-hero-edge-fade absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
