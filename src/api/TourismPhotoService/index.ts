import { photoApiClient } from "@/api/index";
import type { GalleryResponse, PhotoGroupResponse } from "./entity";

export const getTourismPhotoList = async () => {
  const response = await photoApiClient.get<GalleryResponse>('galleryList1', {
    params: {
        numOfRows: 6053,
        pageNo: 1,
      }
  })
  return response;
}

export const getTourismPhotoSearch = async () => {
  const response = await photoApiClient.get<GalleryResponse>(
    'gallerySearchList1',
    {
      params: {
        numOfRows: 900,
        pageNo: 1,
        keyword: '강원'
      }
    }
  ) 
  return response;
}

export const getTourismPhotoGroup = async (title: string) => {
  const response = await photoApiClient.get<PhotoGroupResponse>(
    'galleryDetailList1',
    {
      params: {
        title
      }
    }
  )
  return response;
}
