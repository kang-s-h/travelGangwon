import { extractUrlFromTag } from "@/util/extractUrlFromTag";
import type { TourismDefaultItem } from "@/api/TourismInformationService/entity";

interface BaseInfoProps {
  info: TourismDefaultItem;
}

export default function BaseInfoCard({ info }: BaseInfoProps) {
  const filteredHomePage = extractUrlFromTag(info.homepage);

  return (
    <article className="space-y-4 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-200/70">
      <div className="relative mb-3 h-52 w-full overflow-hidden rounded-xl bg-slate-100 md:h-64">
        {info.firstimage && (
          <img src={info.firstimage} alt={info.title} className="h-full w-full object-cover" />
        )}
        {!info.firstimage && (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-sm text-slate-400">
              이미지 없음
            </p>
          </div>
        )}
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-slate-700">
          <span className="font-medium">
            주소 :{' '}
          </span>
          {info.addr1}
        </p>
        <p className="text-slate-700">
          <span className="font-medium">
            전화 :{' '}
          </span>
          {info.tel}
        </p>
        <p className="text-slate-700">
          <span className="font-medium">
            홈페이지 :{' '}
          </span>
          {filteredHomePage && (
            <a href={filteredHomePage} target="_blank" rel="noreferrer" className="text-sky-600 underline">
              바로가기
            </a>
          )}
        </p>
      </div>
      <div className="mt-4 rounded-xl bg-sky-50 px-4 py-3 text-sm text-slate-700">
        <p className="mb-1 text-xs font-semibold text-sky-700">
          소개
        </p>
        <p className="whitespace-pre-line text-xs md:text-sm max-h-40 overflow-scroll">{info.overview}</p>
      </div>
    </article>
  );
}
