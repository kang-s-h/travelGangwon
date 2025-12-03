export interface GalleryItem {
  galContentId: string;
  galContentTypeId: string;
  galTitle: string;
  galWebImageUrl: string;
  galCreatedtime: string;
  galModifiedtime: string;
  galPhotographyMonth: string;
  galPhotographyLocation: string;
  galPhotographer: string;
  galSearchKeyword: string;
}

export interface GalleryResponse {
  items: {
    item: GalleryItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface PhotoGroupItem {
  galContentId: string;
  galContentTypeId: string;
  galTitle: string;
  galWebImageUrl: string;
  galCreatedtime: string;
  galModifiedtime: string;
  galPhotographyMonth: string;
  galPhotographyLocation: string;
  galPhotographer: string;
  galSearchKeyword: string;
}

export interface PhotoGroupResponse {
  items: {
    item: PhotoGroupItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
