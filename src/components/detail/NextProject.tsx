import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { getProjectStatusConfig } from '../../utils/projectStatus';

interface NextProjectProps {
  project: Project;
}

export default function NextProject({ project }: NextProjectProps) {
  const navigate = useNavigate();
  const status = getProjectStatusConfig(project.status);
  const hasHeroImage = Boolean(project.heroImage.trim());

  return (
    <section className="public-next-project relative overflow-hidden mt-16 border-t border-accent/10 bg-[radial-gradient(circle_at_top_right,rgba(122,24,44,0.18),transparent_34%),linear-gradient(135deg,rgba(14,10,12,1),rgba(8,6,8,1))]">
      {hasHeroImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(38,24,30,0.36),rgba(11,8,10,0.08))]" />
      )}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,24,44,0.24),transparent_34%)]" />
      <div className="public-next-scrim absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-lg">
          <p className="text-accent-gold/80 text-xs font-semibold tracking-[0.2em] uppercase">
            Up Next
          </p>
          <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="text-white/50 text-sm font-light">{project.tagline}</p>
          <p className="text-white/50 text-sm leading-relaxed font-light line-clamp-2">
            {project.summary}
          </p>
          <div className="flex items-center gap-3 text-xs text-white/35">
            <span>{project.category}</span>
            <span className="w-px h-3 bg-white/20" />
            <span>{project.year}</span>
            <span className="w-px h-3 bg-white/20" />
            <span className={status.textClass}>{status.label}</span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/projects/${project.slug}`)}
          className="public-primary-button group flex items-center gap-3 bg-accent text-white px-7 py-3.5 rounded font-semibold text-sm tracking-wide hover:bg-accent-dark transition-all duration-200 flex-none hover:gap-4 shadow-[0_18px_40px_rgba(88,13,29,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View Project
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
