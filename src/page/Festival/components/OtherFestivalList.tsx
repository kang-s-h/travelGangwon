import dayjs from "dayjs";
import FestivalCard from "./FestivalCard";
import type { FestivalItem } from "@/api/TourismInformationService/entity";

interface OtherFestivalListProps {
  items: FestivalItem[];
}

export default function OtherFestivalList({ items }: OtherFestivalListProps) {
  const today = dayjs().format('YYYYMMDD');

  const getDDayLabel = (startDateStr: string) => {
    const originalStart = dayjs(startDateStr, "YYYYMMDD");

    const adjustedStart = originalStart.year(2026);
    const currentDate = dayjs(today, "YYYYMMDD");
    const dDay = adjustedStart.diff(currentDate, "day");

    if (dDay === 0) return "D-DAY";
    if (dDay > 0) return `D-${dDay}`;
    return `D+${Math.abs(dDay)}`;
  };

  if (items.length === 0) return null;

  return (
    <section className="space-y-3">
      <h2 className="mt-2 text-sm font-semibold text-slate-900">
        이런 축제도 있어요
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <FestivalCard
            key={item.contentid}
            item={item}
            badgeText={getDDayLabel(item.eventstartdate)}
            isActive={false}
          />
        ))}
      </div>
    </section>
  );
}
