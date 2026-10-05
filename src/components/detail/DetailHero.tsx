import { ArrowLeft, Play, ExternalLink, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../types';
import { getProjectStatusConfig } from '../../utils/projectStatus';

interface DetailHeroProps {
  project: Project;
}

export default function DetailHero({ project }: DetailHeroProps) {
  const navigate = useNavigate();
  const status = getProjectStatusConfig(project.status);
  const hasHeroImage = Boolean(project.heroImage.trim());
  const isValidDemoUrl = (url?: string) =>
    typeof url === 'string' && /^(https?:)?\/\//.test(url.trim());
  const demoVideos = (
    project.demoVideos?.length
      ? project.demoVideos
      : project.demoVideoUrl
        ? [{ label: 'Primary Demo', url: project.demoVideoUrl }]
        : []
  ).filter((video) => {
    const label = video.label?.trim();
    return Boolean(label) && isValidDemoUrl(video.url);
  });
  const hasDemoVideos = demoVideos.length > 0;
  const hasProjectPageLink = Boolean(project.projectPageUrl);
  const isExternalProjectPage =
    typeof project.projectPageUrl === 'string' &&
    /^(https?:)?\/\//.test(project.projectPageUrl);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);

  const projectPageButtonClasses = `public-secondary-button flex items-center gap-2.5 px-6 py-3 rounded font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
    hasProjectPageLink
      ? 'bg-[linear-gradient(180deg,rgba(42,31,36,0.82),rgba(22,16,20,0.78))] backdrop-blur-md border border-white/18 text-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-[linear-gradient(180deg,rgba(56,36,43,0.88),rgba(28,18,22,0.84))] hover:border-accent/38 hover:text-white hover:shadow-[0_18px_42px_rgba(0,0,0,0.34),0_0_24px_rgba(122,24,44,0.14)] focus-visible:ring-accent/35'
      : 'bg-[linear-gradient(180deg,rgba(29,22,26,0.74),rgba(18,13,16,0.72))] backdrop-blur-md border border-white/10 text-white/42 cursor-not-allowed shadow-[0_10px_24px_rgba(0,0,0,0.18)] focus-visible:ring-white/10'
  }`;

  useEffect(() => {
    setIsDemoOpen(false);
    setActiveDemoIndex(0);
  }, [project.slug]);

  useEffect(() => {
    if (!isDemoOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDemoOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDemoOpen]);

  return (
    <>
      <section className="public-detail-hero relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(122,24,44,0.24),transparent_34%),linear-gradient(135deg,rgba(14,10,12,1),rgba(8,6,8,1))]">
      {hasHeroImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(38,24,30,0.4),rgba(11,8,10,0.08))]" />
      )}
      <div className="public-hero-dim absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,24,44,0.28),transparent_34%)]" />
      <div className="public-hero-side-gradient absolute inset-0 bg-gradient-to-r from-black/85 via-[rgba(24,12,16,0.68)] to-transparent" />
      <div className="public-hero-bottom-gradient absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="relative z-10 flex flex-col h-full min-h-[70vh] md:min-h-[80vh] max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 pt-28 pb-16 justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/55 hover:text-accent-highlight text-sm transition-colors duration-200 w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Showcase
        </button>

        <div className="public-detail-copy max-w-2xl xl:max-w-3xl space-y-5 mt-auto">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-white/65 text-xs font-semibold tracking-[0.2em] uppercase">
              {project.category}
            </span>
            <span className="w-px h-3 bg-white/25" />
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded border tracking-wide ${status.badgeClasses}`}
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

          <p className="text-lg text-white/65 font-light tracking-wide leading-snug">
            {project.tagline}
          </p>

          <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-lg font-light">
            {project.summary}
          </p>

          {project.technology.length > 0 ? (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] text-white/55 bg-accent/8 border border-accent/12 px-2.5 py-1 rounded-sm tracking-wide font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              disabled={!hasDemoVideos}
              aria-disabled={!hasDemoVideos}
              onClick={() => {
                if (hasDemoVideos) {
                  setActiveDemoIndex(0);
                  setIsDemoOpen(true);
                }
              }}
              className={`flex items-center gap-2.5 px-6 py-3 rounded font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                hasDemoVideos
                  ? 'public-primary-button bg-accent text-white hover:bg-accent-dark shadow-[0_18px_40px_rgba(88,13,29,0.35)] focus-visible:ring-accent/40'
                  : 'bg-accent/20 text-white/45 border border-white/10 cursor-not-allowed shadow-[0_10px_24px_rgba(0,0,0,0.18)] focus-visible:ring-white/10'
              }`}
            >
              <Play className={`w-4 h-4 ${hasDemoVideos ? 'fill-white' : 'fill-white/45'}`} />
              Watch Demo
            </button>
            {hasProjectPageLink ? (
              <a
                href={project.projectPageUrl}
                target={isExternalProjectPage ? '_blank' : undefined}
                rel={isExternalProjectPage ? 'noreferrer noopener' : undefined}
                className={projectPageButtonClasses}
              >
                <ExternalLink className="w-4 h-4" />
                Project Page
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className={projectPageButtonClasses}
              >
                <ExternalLink className="w-4 h-4" />
                Project Page
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="public-hero-bottom-gradient absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {isDemoOpen && hasDemoVideos &&
        createPortal(
          <div
            className="fixed inset-0 z-[140] bg-[rgba(5,4,6,0.9)] backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setIsDemoOpen(false)}
          >
            <div
              className="relative w-full max-w-5xl rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(26,26,28,0.98),rgba(14,14,16,0.98))] shadow-[0_32px_90px_rgba(0,0,0,0.52),0_0_0_1px_rgba(122,24,44,0.16)] overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-white/8">
                <div>
                  <p className="text-white text-sm font-semibold tracking-wide">Watch Demo</p>
                  <p className="text-white/45 text-xs mt-0.5">{project.title}</p>
                  {demoVideos.length > 1 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {demoVideos.map((video, index) => (
                        <button
                          key={`${video.label}-${index}`}
                          type="button"
                          className={`px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide border transition-all duration-200 ${
                            index === activeDemoIndex
                              ? 'bg-accent/18 border-accent/40 text-white shadow-[0_0_18px_rgba(122,24,44,0.18)]'
                              : 'bg-white/[0.04] border-white/10 text-white/55 hover:bg-white/[0.06] hover:border-accent/22 hover:text-white/75'
                          }`}
                          onClick={() => setActiveDemoIndex(index)}
                        >
                          {video.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  aria-label="Close demo"
                  className="w-9 h-9 rounded-full border border-white/10 bg-black/20 text-white/80 flex items-center justify-center hover:bg-accent/14 hover:border-accent/30 transition-colors duration-200"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsDemoOpen(false);
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-black">
                <iframe
                  key={demoVideos[activeDemoIndex].url}
                  src={demoVideos[activeDemoIndex].url}
                  title={`${project.title} ${demoVideos[activeDemoIndex].label}`}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
