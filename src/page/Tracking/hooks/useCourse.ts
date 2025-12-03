import { useSuspenseQuery } from "@tanstack/react-query";
import { getCourseList } from "@/api/DurunubiService";
import type { CourseResponse, FilteredCourseResponse } from "@/api/DurunubiService/entity";


export const useCourseList = () => {
  return useSuspenseQuery({
    queryKey: ['course'],
    queryFn: () => getCourseList(),
    select: (data: CourseResponse): FilteredCourseResponse => {
      const items = data.items.item;
      const gangwonCourses = items.filter((item) => 
        item.sigun.includes('강원')
      );
      
      return {
        courses: gangwonCourses,
        totalCount: gangwonCourses.length,
      };
    }
  })
}
