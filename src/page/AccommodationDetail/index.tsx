import { Suspense } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import LoadingSpinner from "@/common/Components/LoadingSpinner";
import AccommodationContent from "./components/AccommodationContent";

export default function AccommodationDetail() {
  const { id } = useParams<{ id: string }>();
  const contentId = id ?? "";

  return (
    <MainLayout title="" description="">
      <section className="flex flex-col gap-6">
        <div className="min-h-[50vh]">
          <Suspense fallback={<LoadingSpinner title="숙소 정보를 불러오는 중이에요" />}>
            <AccommodationContent contentId={contentId} />
          </Suspense>
        </div>
      </section>
    </MainLayout>
  );
}
