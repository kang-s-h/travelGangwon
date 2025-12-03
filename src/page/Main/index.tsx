import { Link } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import { SECTIONS } from "@/constant/mainpage";

function MainPage() {

  return (
    <MainLayout
      title="강원도 이곳저곳"
      description="강원도의 여행지, 축제, 숙소, 걷기 코스와 사진까지 한 번에 탐색할 수 있는 여행 가이드입니다."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {SECTIONS.map((section) => (
          <Link
            key={section.to}
            to={section.to}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${section.color} p-5 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-md`}
          >
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
                  {section.badge}
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                  {section.title}
                </h2>
                <p className="text-xs text-slate-600 md:text-sm">
                  {section.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-medium text-sky-700">
                <span className="flex items-center gap-1">
                  자세히 둘러보기
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </MainLayout>
  );
}

export default MainPage;
