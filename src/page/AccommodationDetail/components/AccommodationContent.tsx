import BaseInfoCard from "@/common/Components/BaseInfoCard";
import { useAccommodationInfo, useAccommodationDetail } from "../hooks/useAccommodationDetail";
import { useRoomInfo } from "../hooks/useRoom";
import AccommodationRoomList from "./AccommodationRoomList";
import LocationMap from "@/common/Components/LocationMap";
import UsageInfoCard from "@/common/Components/UsageInfoCard";

export default function AccommodationContent({ contentId }: { contentId: string }) {
  const { data: detailData } = useAccommodationDetail(contentId);
  const { data: infoData } = useAccommodationInfo(contentId);
  const { data: roomData } = useRoomInfo(contentId);

  const baseInfo = detailData.items.item[0];
  const detailInfo = infoData.items.item[0];
  const rooms = roomData.items.item ?? [];

  const usageItems = [
    { label: "체크인", value: detailInfo.checkintime },
    { label: '체크아웃', value: detailInfo.checkouttime },
    { label: '객실 수', value: detailInfo.roomcount },
    { label: '주차', value: detailInfo.parkinglodging },
    { label: '예약 안내', value: detailInfo.reservationlodging },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        {baseInfo.title}
      </h1>
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] mb-10">
        <BaseInfoCard info={baseInfo} />
        <aside className="space-y-4">
          <UsageInfoCard usageItems={usageItems} />
          <AccommodationRoomList rooms={rooms} />
        </aside>
      </div>
      <LocationMap mapx={baseInfo.mapx} mapy={baseInfo.mapy} />
    </>
  );
}
