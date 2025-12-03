import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import ForestMp4 from "@/assets/mp4/forest.mp4";
import SeaMp4 from "@/assets/mp4/sea.mp4";

function StartPage() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={
          twMerge(
            `absolute inset-0 h-full w-full object-cover transition-opacity duration-700`,
            isHovered ? "opacity-0" : "opacity-100"
          )
        }
      >
        <source src={SeaMp4} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={
          twMerge(
            `absolute inset-0 h-full w-full object-cover transition-opacity duration-700`,
            isHovered ? "opacity-100" : "opacity-0"
          )
        }
      >
        <source src={ForestMp4} type="video/mp4" />
      </video>
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 bg-gradient-to-b from-black/10 via-black/40 to-black/70 px-4 text-center">
        <div className="space-y-4">
          <p className="text-sm font-medium tracking-[0.3em] text-sky-100">
            GANGWON TRAVEL GUIDE
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow md:text-6xl">
            강원도 이곳저곳
          </h1>
          <p className="mx-auto max-w-xl text-sm text-sky-50 md:text-base">
            바다, 산, 도시와 마을까지.
            <br />
            강원도의 여행지 · 축제 · 숙소 정보를 한곳에서 둘러보세요.
          </p>
        </div>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate("/main")}
          className="cursor-pointer rounded-full bg-white/80 px-10 py-3 text-sm font-semibold tracking-wide text-sky-800 shadow-lg shadow-sky-900/20 backdrop-blur transition hover:bg-white"
        >
          지금 강원도 여행 시작하기
        </button>
      </div>
    </div>
  );
}

export default StartPage;
