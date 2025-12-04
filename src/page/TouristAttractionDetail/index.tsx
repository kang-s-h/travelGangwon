import { Suspense } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import AttractionContent from "./components/AttractionContent";

export default function TouristAttractionDetail() {
  const { id } = useParams<{ id: string }>();
  const contentId = id ?? "";

  return (
    <MainLayout title="" description="">
      <section className="flex flex-col gap-6">
        <div className="min-h-[50vh]">
          <Suspense fallback={<LoadingSpinner title="관광지 상세 정보를 불러오는 중이에요" />}>
            <AttractionContent contentId={contentId} />
          </Suspense>
        </div>
      </section>
    </MainLayout>
  );
}
