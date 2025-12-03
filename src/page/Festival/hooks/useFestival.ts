import { getTourismInformationFestival } from "@/api/TourismInformationService";
import { useSuspenseQuery } from "@tanstack/react-query";

interface FestivalProps{
  lDongSignguCd: string | '';
  page: number;
  startDate: string;
}

export const useFestivalList = ({ lDongSignguCd = '', page = 1, startDate }: FestivalProps) => {
  return useSuspenseQuery({
    queryKey: ['festival', lDongSignguCd, page],
    queryFn: () => getTourismInformationFestival({
      lDongSignguCd,
      page,
      startDate
    })
  })
}
