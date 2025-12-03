import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import type { FestivalItem } from "@/api/TourismInformationService/entity";


interface FestivalCardProps {
  item: FestivalItem;
  badgeText: string;
  isActive: boolean;
}

export default function FestivalCard({ item, badgeText, isActive = false }: FestivalCardProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/festival/${item.contentid}`)}
      className={
        twMerge('group flex flex-col overflow-hidden rounded-2xl bg-white/90 text-left shadow-sm',
          isActive
            ? "ring-2 ring-rose-200"
            : "ring-1 ring-slate-200/70"
        )}
    >
      <div className="relative h-40 w-full overflow-hidden bg-slate-100">
        {item.firstimage ? (
          <img
            src={item.firstimage}
            alt={item.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
            이미지 준비 중
          </div>
        )}
        <span className="absolute right-2 top-2 rounded-full bg-rose-600/90 px-2 py-1 text-[10px] font-semibold text-white shadow-sm">
          {badgeText}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">
          {item.title}
        </h3>
        <p className="line-clamp-2 text-xs text-slate-600">
          {item.addr1}
        </p>
        <p className="text-[11px] text-slate-500">
          {item.eventstartdate} ~ {item.eventenddate}
        </p>
      </div>
    </button>
  );
}
