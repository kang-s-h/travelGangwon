import { getTourismInformationAttraction } from "@/api/TourismInformationService";
import { useSuspenseQuery,useQuery } from "@tanstack/react-query";

interface AttractionProps{
  lDongSignguCd: string | '';
  page: number;
}

export const useAttractionList = ({ lDongSignguCd = '', page = 1 }: AttractionProps) => {
  return useSuspenseQuery({
    queryKey: ['attraction', lDongSignguCd, page],
    queryFn: () => getTourismInformationAttraction({
      lDongSignguCd,
      page
    }),
  })
}

export const useAttractionListPagination = ({ lDongSignguCd = '', page = 1 }: AttractionProps) => {
  return useQuery({
    queryKey: ['attraction', lDongSignguCd ,page],
    queryFn: () => getTourismInformationAttraction({
      lDongSignguCd,
      page
    }),
    select: (data) => {
      return {totalCount : data.totalCount}
    }
  })
}
