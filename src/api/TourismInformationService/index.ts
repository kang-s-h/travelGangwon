import { tourismInformationApiClient } from "@/api/index";
import type {
  AttractionResponse,
  AccommodationResponse,
  RoomInfoResponse,
  AccommodationInfoResponse,
  AccommodationDetailResponse,
  FestivalResponse,
  FestivalInfoResponse,
  FestivalDetailResponse,
  AttractionInfoResponse,
  AttractionDetailResponse
} from "./entity";

interface AttractionProps {
  lDongSignguCd: string | '';
  page: number;
}

interface AccommodationProps {
  lDongSignguCd: string | '';
  page: number;
} 

interface FestivalProps {
  lDongSignguCd: string | '';
  startDate: string;
  page: number;
}

export const getTourismInformationAttraction = async ({
  lDongSignguCd,
  page
}: AttractionProps) => {
  const response = await tourismInformationApiClient.get<AttractionResponse>(
    'areaBasedList2',
    {
      params: {
        numOfRows: 15,
        pageNo: page,
        contentTypeId: 12,
        lDongRegnCd: 51,
        lDongSignguCd,
      }
    }
  );
  return response;
}

export const getTourismInformationAccommodation = async ({
  lDongSignguCd,
  page
}: AccommodationProps) => {
  const response = await tourismInformationApiClient.get<AccommodationResponse>(
    'searchStay2',
    {
      params: {
        numOfRows: 15,
        pageNo: page,
        lDongRegnCd: 51,
        lDongSignguCd,
      }
    }
  )
  return response;
}

export const getTourismInformationFestival = async ({
  lDongSignguCd,
  startDate,
  page
}: FestivalProps) => {
  const response = await tourismInformationApiClient.get<FestivalResponse>(
    'searchFestival2',
    {
      params: {
        numOfRows: 15,
        pageNo: page,
        lDongRegnCd: 51,
        lDongSignguCd,
        eventStartDate: startDate,
      }
    }
  )
  return response;
}

export const getTourismInformationRoomInfo = async (contentId : string) => {
  const response = await tourismInformationApiClient.get<RoomInfoResponse>(
    'detailInfo2',
    {
      params: {
        contentTypeId: 32,
        contentId
      }
    }
  )
  return response;
}

export const getTourismInformationAccommodationInfo = async (contentId: string) => {
  const response = await tourismInformationApiClient.get<AccommodationInfoResponse>(
    'detailIntro2',
    {
      params: {
        contentTypeId: 32,
        contentId
      }
    }
  )
  return response;
}

export const getTourismInformationAccommodationDetail = async (contentId: string) => {
  const response = await tourismInformationApiClient.get<AccommodationDetailResponse>(
    'detailCommon2',
    {
      params: {
        contentId
      }
    }
  )
  return response;
}

export const getTourismInformationFestivalInfo = async (contentId: string) => {
  const response = await tourismInformationApiClient.get<FestivalInfoResponse>(
    'detailIntro2',
        {
      params: {
        contentTypeId: 15,
        contentId
      }
    }
  )
  return response;
}

export const getTourismInformationFestivalDetail = async (contentId: string) => {
  const response = await tourismInformationApiClient.get<FestivalDetailResponse>(
    'detailCommon2',
    {
      params: {
        contentId
      }
    }
  )
  return response;
}

export const getTourismInformationAttractionInfo = async (contentId: string) => {
  const response = await tourismInformationApiClient.get<AttractionInfoResponse>(
    'detailIntro2',
        {
      params: {
        contentTypeId: 12,
        contentId
      }
    }
  )
  return response;
}

export const getTourismInformationAttractionDetail = async (contentId: string) => {
  const response = await tourismInformationApiClient.get<AttractionDetailResponse>(
    'detailCommon2',
    {
      params: {
        contentId
      }
    }
  )
  return response;
}
