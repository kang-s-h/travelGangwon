import { useSuspenseQuery,useQuery } from "@tanstack/react-query";
import { getTourismInformationFestival } from "@/api/TourismInformationService";
import type { FestivalResponse } from "@/api/TourismInformationService/entity";


interface FestivalProps{
  lDongSignguCd: string | '';
  page: number;
  startDate: string;
}

export const useFestivalList = ({ lDongSignguCd = '', page = 1, startDate }: FestivalProps) => {
  return useSuspenseQuery({
    queryKey: ['festival', lDongSignguCd, page, startDate],
    queryFn: () => getTourismInformationFestival({
      lDongSignguCd,
      page,
      startDate
    })
  })
}

export const useFestivalListPagination = ({ lDongSignguCd = '', page = 1, startDate }: FestivalProps) => {
  return useQuery({
    queryKey: ['festival', lDongSignguCd, page, startDate],
    queryFn: () => getTourismInformationFestival({
      lDongSignguCd,
      page,
      startDate
    }),
    select: (data : FestivalResponse) => {
      return {
        totalCount: data.totalCount
      }
    }
  })
}
