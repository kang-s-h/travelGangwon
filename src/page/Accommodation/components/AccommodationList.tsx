import { useNavigate } from "react-router-dom";
import { useAccommodationList } from "../hooks/useAccommodation";

interface AccommodationListProps {
  signgu: string;
  page: number;
}

export default function AccommodationList({ signgu, page }: AccommodationListProps) {
  const navigate = useNavigate();

  const { data } = useAccommodationList({
    lDongSignguCd: signgu,
    page
  });

  const items = data.items.item ?? [];

  if (items.length === 0) {
    return (
      <div className="rounded-lg bg-white/70 px-4 py-6 text-center text-sm text-slate-500 shadow-sm">
        선택한 조건에 맞는 숙소가 없습니다.
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <button
          key={item.contentid}
          type="button"
          onClick={() => navigate(`/accommodation/${item.contentid}`)}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white/90 text-left shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="relative h-40 w-full overflow-hidden bg-slate-100">
            {item.firstimage ? (
              <img
                src={item.firstimage}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-40 w-full items-center justify-center bg-slate-100 text-xs text-slate-400">
                이미지 준비 중
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-2 px-4 py-3">
            <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="line-clamp-2 text-xs text-slate-600">
              {item.addr1}
            </p>
            <p className="text-[11px] text-slate-500">
              전화 {item.tel}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
