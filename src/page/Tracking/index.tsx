import { useState, Suspense } from "react";
import type { CourseItem } from "@/api/DurunubiService/entity";
import MainLayout from "@/layout/MainLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import CourseList from "./components/CourseList";
import CourseMapModal from "./components/CourseMapModal";

export default function Tracking() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const handleCourseClick = (item: CourseItem) => {
    setSelectedCourse(item);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <>
      <MainLayout
        title="걷기 좋은 강원도 코스"
        description="강원도의 아름다운 풍경을 따라 걷는 걷기 여행 코스를 살펴보세요!"
      >
        <div className="flex justify-center items-center h-150">
          <Suspense fallback={<LoadingSpinner title="코스 정보를 불러오는 중이예요" />}>
            <CourseList onCourseClick={handleCourseClick} />
          </Suspense>
        </div>
      </MainLayout>
      {selectedCourse && (
        <CourseMapModal
          course={selectedCourse}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
