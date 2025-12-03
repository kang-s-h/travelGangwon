import { durunubiApiClient } from "@/api/index";
import type { CourseResponse } from "./entity";

export const getCourseList = async() => {
  const response = await durunubiApiClient.get<CourseResponse>('courseList', {
    params: {
      numOfRows: 250,
      pageNo: 1,
    }
  })
  
  return response;
}
