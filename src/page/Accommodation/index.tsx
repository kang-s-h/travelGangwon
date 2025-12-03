import { useState, useEffect } from "react";
import { twMerge } from 'tailwind-merge';
import MainLayout from "@/layout/MainLayout";
import { SIGNGU } from "@/constant/signgu";
import { PAGE_SIZE } from "@/constant/pagination";
import Pagination from "@/common/Components/Pagination";
import AccommodationList from "./components/AccommodationList";
import { useAccommodationList } from "./hooks/useAccommodation";

export default function Accommodation() {
  const [signgu, setSigngu] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data } = useAccommodationList({
    lDongSignguCd: signgu,
    page,
  });

  const items = data.items.item ?? [];

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
              총 {data.totalCount}개 숙소
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
          <AccommodationList items={items} />
        </div>
        <Pagination
          currentPage={page}
          totalCount={data.totalCount}
          pageSize={PAGE_SIZE}
          onChange={setPage}
        />
      </section>
    </MainLayout>
  );
}
