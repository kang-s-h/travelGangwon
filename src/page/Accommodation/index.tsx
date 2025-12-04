import { useState, useEffect, Suspense } from "react";
import { twMerge } from 'tailwind-merge';
import MainLayout from "@/layout/MainLayout";
import { SIGNGU } from "@/constant/signgu";
import { PAGE_SIZE } from "@/constant/pagination";
import Pagination from "@/components/Pagination";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useAccommodationListPagination } from "./hooks/useAccommodation";
import AccommodationList from "./components/AccommodationList";

export default function Accommodation() {
  const [signgu, setSigngu] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data: pagingData, isLoading: isPagingLoading } = useAccommodationListPagination({
    lDongSignguCd: signgu,
    page,
  });

  const totalCount = pagingData?.totalCount ?? 0;

  useEffect(() => {
    setPage(1);
  }, [signgu]);
  return (
    <MainLayout
      title="강원도 숙소"
      description="여행 지역에 따라 강원도의 다양한 숙소를 찾아보세요!"
    >
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              총 {isPagingLoading ? "..." : totalCount}개 숙소
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSigngu("")}
              className={twMerge(
                'rounded-full border px-3 py-1 text-xs md:text-sm cursor-pointer',
                signgu === ""
                  ? "border-sky-500 bg-sky-500 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              )}
            >
              전체
            </button>
            {SIGNGU.map((s) => (
              <button
                key={s.DongSignguCd}
                type="button"
                onClick={() => setSigngu(s.DongSignguCd)}
                className={twMerge(
                  'rounded-full border px-3 py-1 text-xs md:text-sm cursor-pointer',
                  signgu === s.DongSignguCd
                    ? "border-sky-500 bg-sky-500 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                )}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex w-full min-h-[50vh] flex-col justify-center">
          <Suspense fallback={<LoadingSpinner title="숙소 정보를 불러오는 중이예요" />}>
            <AccommodationList signgu={signgu} page={page} />
          </Suspense>
        </div>
        <Pagination
          currentPage={page}
          totalCount={totalCount}
          pageSize={PAGE_SIZE}
          onChange={setPage}
        />
      </section>
    </MainLayout>
  );
}
