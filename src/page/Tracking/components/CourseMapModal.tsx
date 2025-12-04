import { useEffect } from "react";
import type { CourseItem } from "@/api/DurunubiService/entity";
import { COURSE_IMAGE_MAP } from "@/constant/durunubi";
import { formatBrTag } from "@/util/formatBrTag";

interface CourseMapModalProps {
  course: CourseItem;
  onClose: () => void;
}

export default function CourseMapModal({ course, onClose }: CourseMapModalProps) {
  const imageUrl = COURSE_IMAGE_MAP[course.crsIdx];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="flex w-full max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-3 md:px-6 md:py-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-base font-semibold text-slate-900 truncate md:text-lg">
              {course.crsKorNm}
            </h2>
            <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-sky-50 px-2 py-0.5 text-sky-700">
                {course.sigun}
              </span>
              <span>거리 {course.crsDstnc}</span>
              <span>소요 {course.crsTotlRqrmHour}</span>
              <span>난이도 {course.crsLevel}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="relative h-[300px] w-full overflow-hidden bg-slate-50 md:h-[500px]">
            <img
              src={imageUrl}
              alt={`${course.crsKorNm} 지도`}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="border-t border-slate-200 px-4 py-4 md:px-6">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">코스 소개</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {formatBrTag(course.crsSummary)}
              {formatBrTag(course.crsContents)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
