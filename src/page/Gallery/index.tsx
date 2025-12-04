import { useState, Suspense } from "react";
import MainLayout from "@/layout/MainLayout";
import Pagination from "@/common/Components/Pagination";
import LoadingSpinner from "@/common/Components/LoadingSpinner";
import { useSearchPhotoPagination } from "./hooks/usePhoto";
import PhotoModal from "./components/photoModal";
import GalleryList from "./components/GalleryList";

export default function Gallery() {
  const [page, setPage] = useState(1);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const pageSize = 20;

  const { data: pagingData, isLoading: isPagingLoading } = useSearchPhotoPagination();

  const totalCount = pagingData?.totalCount ?? 0;

  return (
    <MainLayout
      title="사진으로 보는 강원도"
      description="여행자들이 담은 강원도의 풍경 사진들을 감상해보세요!"
    >
      <section className="flex flex-col gap-4">
        <p className="text-xs text-slate-500">
          총 {isPagingLoading ? "..." : totalCount}개 그룹
        </p>
        <div className="flex w-full min-h-[50vh] flex-col justify-center">
          <Suspense fallback={<LoadingSpinner title="관광 사진 정보를 불러오는 중이에요" />}>
            <GalleryList
              page={page}
              onItemClick={setSelectedTitle}
            />
          </Suspense>
        </div>
        <Pagination
          currentPage={page}
          totalCount={totalCount}
          pageSize={pageSize}
          onChange={setPage}
        />
        {selectedTitle && (
          <Suspense
            fallback={
              <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70">
                <div className="rounded-lg bg-slate-900/95 p-6 text-white">
                  <div className="text-sm">이미지를 불러오는 중...</div>
                </div>
              </div>
            }
          >
            <PhotoModal
              title={selectedTitle}
              onClose={() => setSelectedTitle(null)}
            />
          </Suspense>
        )}
      </section>
    </MainLayout>
  );
}
