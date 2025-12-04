import { twMerge } from "tailwind-merge";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalCount,
  pageSize,
  onChange,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const PAGES_PER_GROUP = 5;

  if (totalPages <= 1) return null;

  const startPage = Math.floor((currentPage - 1) / PAGES_PER_GROUP) * PAGES_PER_GROUP + 1;

  const pageNumbers = Array.from(
    { length: PAGES_PER_GROUP },
    (_, i) => startPage + i
  ).filter((page) => page <= totalPages);

  const handleChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onChange(page);
  };

  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-sm">
      <button
        type="button"
        onClick={() => handleChange(1)}
        className="px-2.5 pagination-button"
        disabled={currentPage === 1}
      >
        ≪
      </button>
      <button
        type="button"
        onClick={() => handleChange(currentPage - 1)}
        className="px-3 pagination-button"
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <div className="flex items-center gap-1">
        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => handleChange(page)}
            className={twMerge(
              "rounded-full px-3 py-1 text-xs transition-all",
              page === currentPage
                ? "bg-sky-600 text-white shadow-sm scale-105"
                : "text-slate-600 hover:bg-slate-100 hover:scale-105 active:scale-90"
            )}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => handleChange(currentPage + 1)}
        className="px-3 pagination-button"
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
      <button
        type="button"
        onClick={() => handleChange(totalPages)}
        className="px-2.5 pagination-button"
        disabled={currentPage === totalPages}
      >
        ≫
      </button>
    </div>
  );
}
