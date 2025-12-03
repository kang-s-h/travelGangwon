import EmptyIcon from '@/assets/gif/empty.gif';
import type { FestivalItem } from "@/api/TourismInformationService/entity";
import FestivalCard from './FestivalCard';

interface CurrentFestivalProps {
  items: FestivalItem[];
}

export default function CurrentFestival({ items }: CurrentFestivalProps) {
  return (
    <section className="space-y-3">
      <h2 className="mt-2 text-sm font-semibold text-rose-800">
        🎉 현재 이런 축제가 진행중이에요
      </h2>
      {items.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FestivalCard
              key={item.contentid}
              item={item}
              badgeText="진행중"
              isActive={true}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col w-full h-52 items-center justify-center rounded-2xl bg-white/90 shadow-sm ring-2 ring-rose-200">
          <img
            src={EmptyIcon}
            alt="현재 진행 중인 축제가 없습니다."
            className="w-20 h-20 mb-3"
          />
          <p className="text-lg font-semibold text-slate-500">
            현재 진행중인 축제가 없어요 ㅠㅠ
          </p>
        </div>
      )}
    </section>
  );
}
