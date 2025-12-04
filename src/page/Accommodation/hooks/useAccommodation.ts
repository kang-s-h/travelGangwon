import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getTourismInformationAccommodation } from "@/api/TourismInformationService";
import type { AccommodationResponse } from "@/api/TourismInformationService/entity";


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

export const useAccommodationListPagination = ({ lDongSignguCd = '', page = 1 }: AccommodationProps) => {
  return useQuery({
    queryKey: ['accommodation', lDongSignguCd, page],
    queryFn: () => getTourismInformationAccommodation({
      lDongSignguCd,
      page
    }),
    select: (data: AccommodationResponse) => {
      return {
        totalCount: data.totalCount
      }
    }
  })
}