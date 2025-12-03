import {
  getTourismInformationFestivalInfo,
  getTourismInformationFestivalDetail,
} from "@/api/TourismInformationService";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFestivalInfo = (contentId: string) => {
  return useSuspenseQuery({
    queryKey: ["festivalInfo", contentId],
    queryFn: () => getTourismInformationFestivalInfo(contentId),
  });
};

export const useFestivalDetail = (contentId: string) => {
  return useSuspenseQuery({
    queryKey: ["festivalDetail", contentId],
    queryFn: () => getTourismInformationFestivalDetail(contentId),
  });
};
