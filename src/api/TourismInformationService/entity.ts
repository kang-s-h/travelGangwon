export interface TourismDefaultItem {
  contentid: string;
  contenttypeid: string;
  title: string;
  createdtime: string;
  modifiedtime: string;
  tel: string;
  telname: string;
  homepage: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  areacode: string;
  sigungucode: string;
  lDongRegnCd: string;
  lDongSignguCd: string;
  lclsSystm1: string;
  lclsSystm2: string;
  lclsSystm3: string;
  cat1: string;
  cat2: string;
  cat3: string;
  addr1: string;
  addr2: string;
  zipcode: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  overview: string;
}

export interface AttractionItem {
  addr1: string;
  addr2: string;
  areacode: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  createdtime: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  sigungucode: string;
  tel: string;
  title: string;
  zipcode: string;
  lDongRegnCd: string;
  lDongSignguCd: string;
  lclsSystm1: string;
  lclsSystm2: string;
  lclsSystm3: string;
}

export interface AttractionResponse {
  items: {
    item: AttractionItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

//detailCommon2
export interface AttractionDetailItem {
  contentid: string;
  contenttypeid: string;
  title: string;
  createdtime: string;
  modifiedtime: string;
  tel: string;
  telname: string;
  homepage: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  areacode: string;
  sigungucode: string;
  lDongRegnCd: string;
  lDongSignguCd: string;
  lclsSystm1: string;
  lclsSystm2: string;
  lclsSystm3: string;
  cat1: string;
  cat2: string;
  cat3: string;
  addr1: string;
  addr2: string;
  zipcode: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  overview: string;
}

export interface AttractionDetailResponse {
  items: {
    item: AttractionDetailItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

// detailIntro2
export interface AttractionInfoItem {
  contentid: string;
  contenttypeid: string;
  heritage1: string;
  heritage2: string;
  heritage3: string;
  infocenter: string;
  opendate: string;
  restdate: string;
  expguide: string;
  expagerange: string;
  accomcount: string;
  useseason: string;
  usetime: string;
  parking: string;
  chkbabycarriage: string;
  chkpet: string;
  chkcreditcard: string;
}

export interface AttractionInfoResponse {
  items: {
    item: AttractionInfoItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface FestivalItem {
  addr1: string;
  addr2: string;
  zipcode: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  createdtime: string;
  eventstartdate: string;
  eventenddate: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  areacode: string;
  sigungucode: string;
  tel: string;
  title: string;
  lDongRegnCd: string;
  lDongSignguCd: string;
  lclsSystm1: string;
  lclsSystm2: string;
  lclsSystm3: string;
  progresstype: string;
  festivaltype: string;
}

export interface FestivalResponse {
  items: {
    item: FestivalItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export type FestivalDetailItem = TourismDefaultItem;

export interface FestivalDetailResponse {
  items: {
    item: FestivalDetailItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface FestivalInfoItem {
  contentid: string;
  contenttypeid: string;
  sponsor1: string;
  sponsor1tel: string;
  sponsor2: string;
  sponsor2tel: string;
  eventenddate: string;
  playtime: string;
  eventplace: string;
  eventhomepage: string;
  agelimit: string;
  bookingplace: string;
  placeinfo: string;
  subevent: string;
  program: string;
  eventstartdate: string;
  usetimefestival: string;
  discountinfofestival: string;
  spendtimefestival: string;
  festivalgrade: string;
  progresstype: string;
  festivaltype: string;
}

export interface FestivalInfoResponse {
  items: {
    item: FestivalInfoItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface AccommodationItem {
  addr1: string;
  addr2: string;
  areacode: string;
  sigungucode: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  createdtime: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  tel: string;
  title: string;
  zipcode: string;
  lDongRegnCd: string;
  lDongSignguCd: string;
  lclsSystm1: string;
  lclsSystm2: string;
  lclsSystm3: string;
}

export interface AccommodationResponse {
  items: {
    item: AccommodationItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface RoomInfoItem {
  contentid: string;
  contenttypeid: string;
  roomcode: string;
  roomtitle: string;
  roomsize1: string;
  roomcount: string;
  roombasecount: string;
  roommaxcount: string;
  roomoffseasonminfee1: string;
  roomoffseasonminfee2: string;
  roompeakseasonminfee1: string;
  roompeakseasonminfee2: string;
  roomintro: string;
  roombathfacility: string;
  roombath: string;
  roomhometheater: string;
  roomaircondition: string;
  roomtv: string;
  roompc: string;
  roomcable: string;
  roominternet: string;
  roomrefrigerator: string;
  roomtoiletries: string;
  roomsofa: string;
  roomcook: string;
  roomtable: string;
  roomhairdryer: string;
  roomsize2: string;
  roomimg1: string;
  roomimg1alt: string;
  cpyrhtDivCd1: string;
  roomimg2: string;
  roomimg2alt: string;
  cpyrhtDivCd2: string;
  roomimg3: string;
  roomimg3alt: string;
  cpyrhtDivCd3: string;
  roomimg4: string;
  roomimg4alt: string;
  cpyrhtDivCd4: string;
  roomimg5: string;
  roomimg5alt: string;
  cpyrhtDivCd5: string;
}

export interface RoomInfoResponse {
  items: {
    item: RoomInfoItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export type AccommodationDetailItem = TourismDefaultItem;

export interface AccommodationDetailResponse { // detailCommon
  items: {
    item: AccommodationDetailItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface AccommodationInfoItem { 
  contentid: string;
  contenttypeid: string;
  roomcount: string;
  roomtype: string;
  refundregulation: string;
  checkintime: string;
  checkouttime: string;
  chkcooking: string;
  seminar: string;
  sports: string;
  sauna: string;
  beauty: string;
  beverage: string;
  karaoke: string;
  barbecue: string;
  campfire: string;
  bicycle: string;
  fitness: string;
  publicpc: string;
  publicbath: string;
  subfacility: string;
  foodplace: string;
  reservationurl: string;
  pickup: string;
  infocenterlodging: string;
  parkinglodging: string;
  reservationlodging: string;
  scalelodging: string;
  accomcountlodging: string;
}

export interface AccommodationInfoResponse {//detailIntro
  items: {
    item: AccommodationInfoItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
