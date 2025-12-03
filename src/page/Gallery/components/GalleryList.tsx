import type { GalleryItem } from "@/api/TourismPhotoService/entity";

interface GalleryListProps {
  items: GalleryItem[];
  onItemClick: (title: string) => void;
}

export default function GalleryList({ items, onItemClick }: GalleryListProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-lg bg-white/70 px-4 py-6 text-center text-sm text-slate-500 shadow-sm">
        사진 데이터가 없습니다.
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <button
          key={item.galContentId}
          type="button"
          onClick={() => onItemClick(item.galTitle)}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white/90 text-left shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="relative h-40 w-full overflow-hidden bg-slate-100">
            <img
              src={item.galWebImageUrl}
              alt={item.galTitle}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1 px-3 py-2">
            <p className="line-clamp-2 text-xs font-medium text-slate-900">
              {item.galTitle}
            </p>
            <p className="text-[11px] text-slate-500">
              {item.galPhotographyLocation}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
