import { useSuspenseQuery } from "@tanstack/react-query";
import {
  getTourismInformationAttractionInfo,
  getTourismInformationAttractionDetail
} from "@/api/TourismInformationService";

export const useAttractionInfo = (contentId: string) => {
  return useSuspenseQuery({
    queryKey: ["attractionInfo", contentId],
    queryFn: () => getTourismInformationAttractionInfo(contentId),
  });
};

export const useAttractionDetail = (contentId: string) => {
  return useSuspenseQuery({
    queryKey: ["attractionDetail", contentId],
    queryFn: () => getTourismInformationAttractionDetail(contentId),
  });
};
