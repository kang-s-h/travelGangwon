import { getTourismInformationRoomInfo } from "@/api/TourismInformationService";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useRoomInfo = (contentId: string) => {
  return useSuspenseQuery({
    queryKey: ['roomInfo', contentId],
    queryFn: () => getTourismInformationRoomInfo(contentId),
  });
};
