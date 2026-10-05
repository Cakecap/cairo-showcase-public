import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import ProjectRail from '../components/ProjectRail';
import { getFeaturedProject, projects } from '../data/projects';
import { Project } from '../types';

export default function HomePage() {
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(getFeaturedProject);
  const heroSectionRef = useRef<HTMLElement>(null);
  const scrollFrameRefs = useRef<number[]>([]);

  const cancelPendingScrollFrames = () => {
    scrollFrameRefs.current.forEach((frame) => window.cancelAnimationFrame(frame));
    scrollFrameRefs.current = [];
  };

  useEffect(() => () => cancelPendingScrollFrames(), []);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = decodeURIComponent(location.hash.replace(/^#/, ''));
    const scrollFrame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(scrollFrame);
  }, [location.hash]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    cancelPendingScrollFrames();

    if (!heroSectionRef.current) {
      return;
    }

    if (prefersReducedMotion) {
      window.scrollTo(0, Math.max(heroSectionRef.current.getBoundingClientRect().top + window.scrollY, 0));
      return;
    }

    scrollFrameRefs.current = [
      window.requestAnimationFrame(() => {
        scrollFrameRefs.current = [
          window.requestAnimationFrame(() => {
            const heroSection = heroSectionRef.current;
            if (!heroSection) {
              scrollFrameRefs.current = [];
              return;
            }

            window.scrollTo({
              top: Math.max(heroSection.getBoundingClientRect().top + window.scrollY, 0),
              behavior: 'smooth',
            });
            scrollFrameRefs.current = [];
          }),
        ];
      }),
    ];
  };

  const categories = Array.from(new Set(projects.map((project) => project.category))).sort(
    (left, right) => left.localeCompare(right)
  );

  return (
    <div className="public-page min-h-screen text-white">
      <Navbar />

      <PageTransition>
        <section ref={heroSectionRef}>
          <Hero project={selectedProject} />
        </section>

        <div id="projects" className="public-home-rail-section scroll-mt-28 pt-8 pb-4">
          <ProjectRail
            label="Featured Projects"
            projects={projects}
            activeProjectSlug={selectedProject.slug}
            onProjectSelect={handleProjectSelect}
          />
        </div>

        <section id="categories" className="scroll-mt-28 px-6 py-10 md:px-10 lg:px-14">
          <div className="public-card mx-auto max-w-[1800px] rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(21,16,18,0.78),rgba(11,8,10,0.9))] px-6 py-6 md:px-8 md:py-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="h-5 w-0.5 rounded-full bg-accent" />
                  <h2 className="text-xl font-bold tracking-tight text-white">Categories</h2>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Browse the current showcase by research and innovation area.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {categories.map((category) => (
                  <span key={category} className="rounded-full border border-accent/20 bg-accent/8 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/65">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about-cairo" className="scroll-mt-28 px-6 py-12 md:px-10 lg:px-14">
          <div className="public-card mx-auto max-w-[1800px] rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(21,16,18,0.82),rgba(11,8,10,0.92))] px-7 py-8 md:px-10 md:py-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-5 w-0.5 rounded-full bg-accent" />
                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">About CAIRO</h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
                CAIRO UTM showcases research, innovation, and technology-driven solutions developed
                through academic, institutional, and industry collaboration. This platform presents
                selected projects in a visual, accessible, and presentation-ready format.
              </p>
            </div>
          </div>
        </section>
      </PageTransition>

      <Footer />
    </div>
  );
}
