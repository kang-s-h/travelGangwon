import { useSuspenseQuery } from "@tanstack/react-query";
import type { GalleryItem, GalleryResponse } from "@/api/TourismPhotoService/entity";
import { getTourismPhotoSearch, getTourismPhotoGroup } from "@/api/TourismPhotoService";

const selectUniquePhotos = (data: GalleryResponse): GalleryItem[] => {
  const raw = data.items.item ?? [];
  const map = new Map();
  raw.forEach((item) => {
    if (!map.has(item.galTitle)) map.set(item.galTitle, item);
  });
  return Array.from(map.values());
};

export const useSearchPhoto = () => {
  return useSuspenseQuery({
    queryKey: ['photo'],
    queryFn: getTourismPhotoSearch,
    select: selectUniquePhotos,
  });
};

export const usePhotoGroup = (title: string) => {
  return useSuspenseQuery({
    queryKey: ['photoGroup', title],
    queryFn: () => getTourismPhotoGroup(title),
  });
};
