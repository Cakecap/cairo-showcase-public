import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectRail from '../components/ProjectRail';
import Footer from '../components/Footer';
import { getFeaturedProject, railCategories } from '../data/projects';

export default function HomePage() {
  const featured = getFeaturedProject();

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <Navbar />

      <main>
        <Hero project={featured} />

        <div className="pt-8 pb-4 space-y-2">
          {railCategories
            .filter((rail) => rail.projects.length > 0)
            .map((rail) => (
              <ProjectRail key={rail.label} label={rail.label} projects={rail.projects} />
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
