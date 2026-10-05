import { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';

interface ContentModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function ContentModal({
  isOpen,
  title,
  onClose,
  children,
}: ContentModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6">
      <div
        className="absolute inset-0 bg-[rgba(5,5,6,0.78)] backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="content-modal-title"
        className="public-content-modal relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(26,26,28,0.98),rgba(14,14,16,0.98))] shadow-[0_32px_90px_rgba(0,0,0,0.56),0_0_0_1px_rgba(122,24,44,0.08)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/8 px-5 py-4 md:px-6">
          <h2
            id="content-modal-title"
            className="text-white text-base md:text-lg font-semibold tracking-tight"
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.06] text-white/72 transition-all duration-200 hover:border-accent/30 hover:bg-accent/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(85vh-4.5rem)] px-5 py-5 md:px-6 md:py-6 text-white/80">
          {children}
        </div>
      </div>
    </div>
  );
}
