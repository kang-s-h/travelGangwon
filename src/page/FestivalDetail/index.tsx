import { Suspense } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import LoadingSpinner from "@/common/Components/LoadingSpinner";
import FestivalContent from "./components/FestivalContent";

export default function FestivalDetail() {
  const { id } = useParams<{ id: string }>();
  const contentId = id ?? "";

  return (
    <MainLayout title="" description="">
      <section className="flex flex-col gap-6">
        <div className="min-h-[50vh]">
          <Suspense fallback={<LoadingSpinner title="축제 상세 정보를 불러오는 중이에요" />}>
            <FestivalContent contentId={contentId} />
          </Suspense>
        </div>
      </section>
    </MainLayout>
  );
}
