import dayjs from "dayjs";
import EmptyIcon from '@/assets/gif/empty.gif';
import { useFestivalList } from "../hooks/useFestival";
import CurrentFestival from "./CurrentFestivalList";
import OtherFestivalList from "./OtherFestivalList";

interface FestivalListProps {
  signgu: string;
  page: number;
  startDate: string;
}

export default function FestivalList({ signgu, page, startDate }: FestivalListProps) {
  const { data } = useFestivalList({
    lDongSignguCd: signgu,
    page,
    startDate
  });

  const items = data.items.item ?? [];
  const today = dayjs().format('YYYYMMDD');
  const todayDate = dayjs(today, "YYYYMMDD");

  const currentFestivals = items.filter((item) => {
    const start = dayjs(item.eventstartdate, "YYYYMMDD");
    const end = dayjs(item.eventenddate, "YYYYMMDD");
    return (
      todayDate.isSame(start, "day") ||
      todayDate.isSame(end, "day") ||
      (todayDate.isAfter(start, "day") && todayDate.isBefore(end, "day"))
    );
  });

  const otherFestivals = items.filter(
    (item) => !currentFestivals.find((f) => f.contentid === item.contentid)
  );

  if (items.length === 0) {
    return (
      <div className="flex flex-col w-full h-52 items-center justify-center">
        <img src={EmptyIcon} alt="축제가 없습니다." className="w-20 h-20 mb-3" />
        <p className="text-lg font-semibold text-slate-500">
          이 지역은 개최하는 축제가 없어요
        </p>
      </div>
    );
  }

  return (
    <>
      <CurrentFestival items={currentFestivals} />
      <OtherFestivalList items={otherFestivals} />
    </>
  );
}
