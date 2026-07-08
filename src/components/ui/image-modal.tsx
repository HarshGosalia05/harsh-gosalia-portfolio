import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { image: string; title: string; organization: string; year: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function ImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: ImageModalProps) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" || e.key === "Left") {
        handlePrev();
      } else if (e.key === "ArrowRight" || e.key === "Right") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, images]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(nextIndex);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Glassmorphic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative z-10 flex h-[90vh] w-[95vw] max-w-5xl flex-col items-center justify-between p-4 sm:p-6"
        >
          {/* Header Controls */}
          <div className="flex w-full items-center justify-between text-white">
            <div className="font-mono text-xs text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </div>
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Visual Display */}
          <div className="relative flex flex-1 w-full items-center justify-center my-4 overflow-hidden">
            {/* Prev Navigation Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-0 sm:left-4 z-20 rounded-full bg-black/50 border border-white/10 p-3 text-white/80 hover:bg-black/75 hover:text-white transition-all hover:scale-105 cursor-pointer max-sm:p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
            </button>

            {/* Image Viewer */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex h-full w-full items-center justify-center p-2"
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                loading="lazy"
                className="max-h-[60vh] max-w-[85%] rounded-lg object-contain shadow-2xl border border-white/5 bg-neutral-900/50"
              />
            </motion.div>

            {/* Next Navigation Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-0 sm:right-4 z-20 rounded-full bg-black/50 border border-white/10 p-3 text-white/80 hover:bg-black/75 hover:text-white transition-all hover:scale-105 cursor-pointer max-sm:p-2"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
            </button>
          </div>

          {/* Footer Metadata */}
          <div className="w-full text-center text-white bg-black/30 border border-white/5 backdrop-blur px-6 py-4 rounded-xl max-w-2xl">
            <h3 className="font-display text-lg font-semibold tracking-tight text-brand-cyan sm:text-xl">
              {currentItem.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">
              {currentItem.organization} <span className="text-white/40 font-mono mx-1.5">•</span> {currentItem.year}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
