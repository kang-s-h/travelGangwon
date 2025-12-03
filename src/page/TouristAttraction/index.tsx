import { useState, useEffect, Suspense } from "react";
import { twMerge } from "tailwind-merge";
import MainLayout from "@/layout/MainLayout";
import { SIGNGU } from "@/constant/signgu";
import { PAGE_SIZE } from "@/constant/pagination";
import Pagination from "@/common/Components/Pagination";
import LoadingSpinner from "@/common/Components/LoadingSpinner";
import { useAttractionListPagination } from "./hooks/useAttraction";
import AttractionList from "./components/AttractionList";

export default function TouristAttraction() {
  const [signgu, setSigngu] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data: pagingData, isLoading: isPagingLoading } = useAttractionListPagination({
    lDongSignguCd: signgu,
    page,
  });

  const totalCount = pagingData?.totalCount ?? 0;

  useEffect(() => {
    setPage(1);
  }, [signgu]);

  return (
    <MainLayout
      title="강원도 관광지"
      description="강원도의 주요 관광지를 시·군별로 골라서 둘러보세요!"
    >
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              총 {isPagingLoading ? "..." : totalCount}개 장소
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSigngu("")}
              className={
                twMerge(
                  'rounded-full border px-3 py-1 text-xs md:text-sm',
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
                className={
                  twMerge(
                    'rounded-full border px-3 py-1 text-xs md:text-sm',
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
          <Suspense fallback={<LoadingSpinner title="관광 정보를 불러오는 중이에요" />}>
            <AttractionList signgu={signgu} page={page} />
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
