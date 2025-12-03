import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface MainLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const navItems = [
  { to: "/touristAttraction", label: "관광지" },
  { to: "/festival", label: "축제" },
  { to: "/accommodation", label: "숙소" },
  { to: "/tracking", label: "걷기 여행" },
  { to: "/gallery", label: "포토 갤러리" },
];

export default function MainLayout({ title, description, children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <Link to="/main" className="group flex items-baseline gap-2">
            <span className="text-lg font-bold text-center tracking-tight text-sky-700 transition-colors group-hover:text-sky-600 md:text-2xl">
              <span className="hidden whitespace-nowrap md:inline">강원도 </span>
              <span className="whitespace-nowrap pr-2">이곳 저곳</span>
            </span>
            <span className="hidden text-xs text-slate-500 md:inline">
              Gangwon Travel Guide
            </span>
          </Link>
          <nav className="flex gap-2 text-sm md:gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => twMerge(
                  "flex items-center text-center justify-center rounded-full px-3 py-1.5 transition-colors md:px-4 md:py-2",
                  isActive
                    ? "bg-sky-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:py-10">
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            {title}
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 md:text-base">
            {description}
          </p>
        </section>
        {children}
      </main>
    </div>
  );
}
