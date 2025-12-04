import { useFestivalInfo, useFestivalDetail } from "../hooks/useFestival";
import LocationMap from "@/components/LocationMap";
import BaseInfoCard from "@/components/BaseInfoCard";
import UsageInfoCard from "@/components/UsageInfoCard";

export default function FestivalContent({ contentId }: { contentId: string }) {
  const { data: infoData } = useFestivalInfo(contentId);
  const { data: detailData } = useFestivalDetail(contentId);

  const baseInfo = detailData.items.item[0];
  const detailInfo = infoData.items.item[0];

  if (!baseInfo) return <div>정보를 찾을 수 없습니다.</div>;

  const usageItems = [
    { label: "주관", value: detailInfo.sponsor1, sub: detailInfo.sponsor1tel },
    { label: "장소", value: detailInfo.eventplace || baseInfo.addr1 },
    { label: "기간", value: detailInfo.eventstartdate && detailInfo.eventenddate ? `${detailInfo.eventstartdate} ~ ${detailInfo.eventenddate}` : "" },
    { label: "시간", value: detailInfo.playtime },
    { label: "요금", value: detailInfo.usetimefestival },
    { label: "프로그램", value: detailInfo.program },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        {baseInfo.title}
      </h1>
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] mb-10">
        <BaseInfoCard info={baseInfo} />
        <UsageInfoCard usageItems={usageItems} />
      </div>
      <LocationMap mapx={baseInfo.mapx} mapy={baseInfo.mapy} />
    </>
  );
}
