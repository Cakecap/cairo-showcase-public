import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Project } from '../../types';

interface MediaGalleryProps {
  project: Project;
}

export default function MediaGallery({ project }: MediaGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = project.galleryImages;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex]);

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <>
      <section className="public-detail-section max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 py-10 border-t border-accent/10">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-0.5 h-5 bg-accent rounded-full" />
        <h2 className="text-white text-xl font-bold tracking-tight">Media Gallery</h2>
        <span className="text-white/30 text-sm">({galleryImages.length} items)</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {galleryImages.map((src, i) => (
          <div
            key={src}
            className="public-gallery-tile group relative aspect-video bg-surface rounded-sm overflow-hidden cursor-pointer border border-white/6 hover:border-accent/28 transition-all duration-300"
            onClick={() => openLightbox(i)}
          >
            <img
              src={src}
              alt={`${project.title} gallery ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>

      {lightboxIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[140] bg-[rgba(5,4,6,0.95)] backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/40 border border-accent/20 flex items-center justify-center hover:bg-accent/16 transition-colors duration-200 z-10"
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {galleryImages.length > 1 && (
              <>
                <button
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-accent/20 flex items-center justify-center hover:bg-accent/16 transition-colors duration-200 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-accent/20 flex items-center justify-center hover:bg-accent/16 transition-colors duration-200 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            <div
              className="max-w-5xl max-h-[80vh] w-full mx-8 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex]}
                alt="Gallery"
                className="max-w-full max-h-[80vh] object-contain rounded-sm"
              />
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    i === lightboxIndex ? 'bg-accent-soft scale-125' : 'bg-white/25 hover:bg-accent/55'
                  }`}
                />
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
