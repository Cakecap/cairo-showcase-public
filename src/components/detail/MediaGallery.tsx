import { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Project } from '../../types';

interface MediaGalleryProps {
  project: Project;
}

export default function MediaGallery({ project }: MediaGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allMedia = [
    ...project.galleryImages.map((src) => ({ type: 'image' as const, src })),
    ...(project.demoVideoUrl ? [{ type: 'video' as const, src: project.demoVideoUrl }] : []),
  ];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + allMedia.length) % allMedia.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % allMedia.length : null));

  return (
    <section className="max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 py-10 border-t border-white/5">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-0.5 h-5 bg-[#06b6d4] rounded-full" />
        <h2 className="text-white text-xl font-bold tracking-tight">Media Gallery</h2>
        <span className="text-white/30 text-sm">({allMedia.length} items)</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {project.demoVideoUrl && (
          <div
            className="group relative col-span-2 row-span-2 aspect-video bg-[#111116] rounded-sm overflow-hidden cursor-pointer border border-white/6 hover:border-[#06b6d4]/30 transition-colors duration-300"
            onClick={() => openLightbox(allMedia.findIndex((m) => m.type === 'video'))}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/10 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/18 group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
              <div className="text-center">
                <p className="text-white/80 text-sm font-semibold">Demo Video</p>
                <p className="text-white/40 text-xs mt-0.5">{project.title}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        )}

        {project.galleryImages.map((src, i) => (
          <div
            key={src}
            className="group relative aspect-video bg-[#111116] rounded-sm overflow-hidden cursor-pointer border border-white/6 hover:border-[#06b6d4]/30 transition-all duration-300"
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
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-10"
            onClick={closeLightbox}
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {allMedia.length > 1 && (
            <>
              <button
                className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-10"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-10"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          <div
            className="max-w-5xl max-h-[80vh] w-full mx-8 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {allMedia[lightboxIndex].type === 'video' ? (
              <iframe
                src={allMedia[lightboxIndex].src}
                className="w-full aspect-video rounded-sm"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={allMedia[lightboxIndex].src}
                alt="Gallery"
                className="max-w-full max-h-[80vh] object-contain rounded-sm"
              />
            )}
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {allMedia.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === lightboxIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
