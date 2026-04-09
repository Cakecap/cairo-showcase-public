import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DetailHero from '../components/detail/DetailHero';
import ProjectMetadata from '../components/detail/ProjectMetadata';
import MediaGallery from '../components/detail/MediaGallery';
import NextProject from '../components/detail/NextProject';
import { getProjectBySlug, getRelatedProject } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const relatedProject = getRelatedProject(project.slug);

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <Navbar />

      <main>
        <DetailHero project={project} />
        <ProjectMetadata project={project} />
        <MediaGallery project={project} />
        <NextProject project={relatedProject} />
      </main>

      <Footer />
    </div>
  );
}
