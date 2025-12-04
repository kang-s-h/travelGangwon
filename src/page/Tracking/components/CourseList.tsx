import type { CourseItem } from "@/api/DurunubiService/entity";
import { useCourseList } from "../hooks/useCourse";
import { formatBrTag } from "@/util/formatBrTag";

interface CourseListProps {
  onCourseClick: (item: CourseItem) => void;
}

function CourseList({ onCourseClick }: CourseListProps) {
  const { data } = useCourseList();

  if (data.courses.length === 0) {
    return (
      <div className="rounded-lg bg-white/70 px-4 py-6 text-center text-sm text-slate-500 shadow-sm">
        강원도 걷기 코스 정보가 없습니다.
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <p className="text-xs text-slate-500">
        총 {data.totalCount}개 코스
      </p>
      <div className="grid gap-4 md:grid-cols-2 overflow-scroll h-150">
        {data.courses.map((item) => (
          <button
            type="button"
            key={`${item.routeIdx}-${item.crsIdx}`}
            onClick={() => onCourseClick(item)}
            className="flex cursor-pointer flex-col gap-2 rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/70 transition hover:shadow-md hover:ring-sky-200"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="line-clamp-1 text-left text-sm font-semibold text-slate-900">
                {item.crsKorNm}
              </h3>
              <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[11px] text-sky-700">
                {item.sigun}
              </span>
            </div>
            <p className="text-left text-[11px] text-slate-500">
              거리 {item.crsDstnc} · 소요 {item.crsTotlRqrmHour} · 난이도 {item.crsLevel}
            </p>
            <p className="line-clamp-2 text-left text-xs text-slate-600">
              {formatBrTag(item.crsSummary || item.crsContents)}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
export default CourseList;
