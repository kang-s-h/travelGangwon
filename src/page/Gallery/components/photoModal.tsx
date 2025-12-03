import { useState, useEffect } from "react";
import { usePhotoGroup } from "../hooks/usePhoto";

interface PhotoModalProps {
  title: string;
  onClose: () => void;
}

export default function PhotoModal({ title, onClose }: PhotoModalProps) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const { data: groupData } = usePhotoGroup(title);
  const groupItems = groupData.items.item;
  const currentPhoto = groupItems[photoIndex];

  const handleClose = () => {
    setPhotoIndex(0);
    onClose();
  };

  const handlePrev = () => {
    setPhotoIndex(prev =>
      prev === 0 ? groupItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setPhotoIndex(prev =>
      prev === groupItems.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900/95 p-4 text-white shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-xs text-slate-300">
            {title} · {photoIndex + 1}/{groupItems.length}
          </div>
          <button
            onClick={handleClose}
            className="rounded-full bg-white/10 px-3 py-1 text-xs hover:bg-white/20"
          >
            닫기
          </button>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-black/40">
            <img
              src={currentPhoto.galWebImageUrl}
              alt={currentPhoto.galTitle}
              className="max-h-[420px] w-full object-contain"
            />
          </div>
          {groupItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="photo-button md:left-[-60px]"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="photo-button right-2 md:right-[-60px]"
              >
                →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
