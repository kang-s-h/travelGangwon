import useKakaoMap from "@/util/kakaoMap/useKakaoMap";

interface LocationProps {
  mapx: string;
  mapy: string;
}


export default function LocationMap({ mapx, mapy }: LocationProps) {
  useKakaoMap({ lat: mapy, lng: mapx });

  return (
    <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/70">
      <p className="mb-3 text-sm font-semibold text-slate-900">
        위치
      </p>
      <div id="map" className="h-64 w-full rounded-xl md:h-80" />
    </div>
  );
}
