import { getTourismInformationAccommodation } from "@/api/TourismInformationService";
import { useSuspenseQuery } from "@tanstack/react-query";

interface AccommodationProps {
  lDongSignguCd: string;
  page: number;
}

export const useAccommodationList = ({ lDongSignguCd = '', page = 1 }: AccommodationProps) => {
  return useSuspenseQuery({
    queryKey: ['accommodation', lDongSignguCd, page],
    queryFn: () => getTourismInformationAccommodation({
      lDongSignguCd,
      page
    })
  });
};
