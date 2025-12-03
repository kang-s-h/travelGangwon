import { getTourismInformationAccommodationInfo, getTourismInformationAccommodationDetail } from "@/api/TourismInformationService";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useAccommodationInfo = (contentId: string) => {
  return useSuspenseQuery({
    queryKey: ['accommodationInfo', contentId], 
    queryFn: () => getTourismInformationAccommodationInfo(contentId),
  })
}

export const useAccommodationDetail = (contentId: string) => {
  return useSuspenseQuery({
    queryKey: ['accommodationDetail', contentId],
    queryFn:()=> getTourismInformationAccommodationDetail(contentId),
  })
}
