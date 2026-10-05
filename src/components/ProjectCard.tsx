import { useNavigate } from 'react-router-dom';
import { Project } from '../types';
import { getProjectStatusConfig } from '../utils/projectStatus';

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
  onSelect?: (project: Project) => void;
}

export default function ProjectCard({
  project,
  isActive = false,
  onSelect,
}: ProjectCardProps) {
  const navigate = useNavigate();
  const isPreviewSelector = typeof onSelect === 'function';
  const status = getProjectStatusConfig(project.status);
  const hasPosterImage = Boolean(project.posterImage.trim());
  const handleClick = () => {
    if (isPreviewSelector) {
      onSelect(project);
      return;
    }

    navigate(`/projects/${project.slug}`);
  };

  return (
    <button
      type="button"
      aria-pressed={isPreviewSelector ? isActive : undefined}
      aria-label={
        isPreviewSelector ? `Preview ${project.title} on homepage` : `Open ${project.title}`
      }
      className="public-project-card group relative flex-none w-[165px] md:w-[190px] lg:w-[210px] cursor-pointer select-none text-left bg-transparent border-0 p-0"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-sm aspect-[2/3] bg-surface-elevated">
        {hasPosterImage ? (
          <img
            src={project.posterImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,24,44,0.18),transparent_38%),linear-gradient(180deg,rgba(30,22,26,0.98),rgba(14,10,12,0.98))]" />
        )}

        <div className="public-card-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/8 transition-colors duration-300" />

        <div className="absolute top-2.5 left-2.5">
          <span className="text-[10px] font-semibold text-white/70 tracking-[0.12em] uppercase bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded-sm border border-accent/12">
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
                className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`}
              />
              <span className={`text-[10px] tracking-wide ${status.textClass}`}>{status.label}</span>
              <span className="w-px h-2.5 bg-white/20 mx-0.5" />
              <span className="text-white/40 text-[10px]">{project.year}</span>
            </div>
          </div>
        </div>

      </div>

      <div
        className={`absolute -inset-0.5 rounded-sm transition-opacity duration-300 pointer-events-none ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        style={{
          boxShadow: isActive
            ? '0 0 0 1px rgba(122, 24, 44, 0.5), 0 24px 56px rgba(88, 13, 29, 0.3)'
            : '0 0 0 1px rgba(122, 24, 44, 0.3), 0 22px 48px rgba(88, 13, 29, 0.22)',
        }}
      />
    </button>
  );
}
