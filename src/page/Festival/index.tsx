import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import MainLayout from "@/layout/MainLayout";
import { SIGNGU } from "@/constant/signgu";
import { PAGE_SIZE } from "@/constant/pagination";
import Pagination from "@/common/Components/Pagination";
import { useFestivalList } from "./hooks/useFestival";
import FestivalList from "./components/FestivalList";

export default function Festival() {
  const [signgu, setSigngu] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const today = dayjs().format('YYYYMMDD');

  const { data } = useFestivalList({
    lDongSignguCd: signgu,
    startDate: "20250101",
    page,
  });

  const items = data.items.item ?? [];

  useEffect(() => {
    setPage(1);
  }, [signgu]);

  return (
    <MainLayout
      title="강원도 축제"
      description="계절마다 달라지는 강원도의 축제를 지역별로 확인해보세요!"
    >
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              기준일 {today} · 총 {data.totalCount}개 축제
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSigngu("")}
              className={
                twMerge("rounded-full border px-3 py-1 text-xs md:text-sm",
                  signgu === ""
                    ? "border-rose-500 bg-rose-500 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50")
              }
            >
              전체
            </button>
            {SIGNGU.map((s) => (
              <button
                key={s.DongSignguCd}
                type="button"
                onClick={() => setSigngu(s.DongSignguCd)}
                className={
                  twMerge("rounded-full border px-3 py-1 text-xs md:text-sm",
                    signgu === s.DongSignguCd
                      ? "border-rose-500 bg-rose-500 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  )}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex w-full min-h-[50vh] flex-col justify-center">
          <FestivalList items={items} />
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

