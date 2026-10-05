import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import DetailHero from '../components/detail/DetailHero';
import MediaGallery from '../components/detail/MediaGallery';
import NextProject from '../components/detail/NextProject';
import ProjectMetadata from '../components/detail/ProjectMetadata';
import { getProjectBySlug, getRelatedProject } from '../data/projects';

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
    <div className="public-page min-h-screen text-white">
      <Navbar />

      <PageTransition>
        <DetailHero project={project} />
        <ProjectMetadata project={project} />
        <MediaGallery project={project} />
        <NextProject project={relatedProject} />
        <div className="mx-auto flex max-w-[1800px] justify-center px-6 pb-2 pt-8 md:justify-start md:px-10 lg:px-14">
          <Link to="/" className="inline-flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-accent-highlight">
            <ArrowLeft className="h-4 w-4" />
            Back to Showcase
          </Link>
        </div>
      </PageTransition>

      <Footer />
    </div>
  );
}
