export default function FilterBar({
  orderBy,
  setOrderBy,
  year,
  setYear,
}: {
  orderBy: number;
  setOrderBy: (v: number) => void;
  year?: number;
  setYear: (v?: number) => void;
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-4 text-sm">
        {[
          { label: "Latest", val: 1 },
          { label: "Most Viewed", val: 2 },
          { label: "Oldest", val: 3 },
        ].map(opt => (
          <button
            key={opt.val}
            onClick={() => setOrderBy(opt.val)}
            className={orderBy === opt.val ? "font-semibold" : ""}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <select
        className="border px-2 py-1 text-sm"
        value={year ?? ""}
        onChange={e =>
          setYear(e.target.value ? Number(e.target.value) : undefined)
        }
      >
        <option value="">Year</option>
        {Array.from({ length: 15 }).map((_, i) => {
          const y = 2024 - i;
          return (
            <option key={y} value={y}>
              {y}
            </option>
          );
        })}
      </select>
    </div>
  );
}
