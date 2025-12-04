import BaseInfoCard from "@/components/BaseInfoCard";
import { useAttractionDetail, useAttractionInfo } from "../hooks/useAttraction";
import UsageInfoCard from "@/components/UsageInfoCard";
import LocationMap from "@/components/LocationMap";

function AttractionContent({ contentId }: { contentId: string }) {
  const { data: infoData } = useAttractionInfo(contentId);
  const { data: detailData } = useAttractionDetail(contentId);

  const baseInfo = detailData.items.item?.[0];
  const detailInfo = infoData.items.item?.[0];

  const usageItems = [
    { label: "개장일", value: detailInfo.opendate },
    { label: "휴무일", value: detailInfo.restdate },
    { label: "이용시간", value: detailInfo.usetime },
    { label: "주차", value: detailInfo.parking },
    { label: "장애/유모차", value: detailInfo.chkbabycarriage },
    { label: "반려동물", value: detailInfo.chkpet },
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

export default AttractionContent;
