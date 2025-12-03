export interface CourseItem {
  routeIdx: string;
  crsIdx: string;
  crsKorNm: string;
  crsDstnc: string;
  crsTotlRqrmHour: string;
  crsLevel: string;
  crsCycle: string;
  crsContents: string;
  crsSummary: string;
  crsTourInfo: string;
  travelerinfo: string;
  sigun: string;
  brdDiv: string;
  gpxpath: string;
  createdtime: string;
  modifiedtime: string;
}

export interface CourseResponse {
  items: {
    item: CourseItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface FilteredCourseResponse {
  courses: CourseItem[];
  totalCount: number;
}
