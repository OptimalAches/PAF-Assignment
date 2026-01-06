export default function TopicNav({
  categories,
  active,
  setActive,
}: {
  categories: any[];
  active?: number;
  setActive: (v?: number) => void;
}) {
  return (
    <div className="flex gap-4 overflow-x-auto py-2 mb-4 text-sm">
      <button
        onClick={() => setActive(undefined)}
        className={!active ? "font-semibold" : ""}
      >
        All Videos
      </button>

      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={active === cat.id ? "font-semibold" : ""}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}
