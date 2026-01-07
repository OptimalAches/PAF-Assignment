"use client";

export default function LanguageToggle({
  value,
  onChange,
}: {
  value: number | null;
  onChange: (v: number | null) => void;
}) {
  // Map state → index
  const activeIndex =
    value === null ? 0 : value === 2 ? 1 : 2;

  return (
    <div
      className="
        relative flex h-7 items-center
        border border-[#A3A3A3]
        text-xs font-medium
        overflow-hidden
      "
    >
      {/* BUTTONS */}
      <button
        onClick={() => onChange(null)}
        className={`z-10 flex h-full w-9.5 lg:w-12 items-center justify-center
          ${activeIndex === 0 ? "text-white" : "text-[#404040] hover:bg-[#F6F8F9]"}`}
      >
        ALL
      </button>

      <div className="h-full w-[0.5px] bg-[#A3A3A3]" />

      <button
        onClick={() => onChange(2)}
        className={`z-10 flex h-full w-9.5 lg:w-12 items-center justify-center
          ${activeIndex === 1 ? "text-white" : "text-[#404040] hover:bg-[#F6F8F9]"}`}
      >
        ENG
      </button>

      <div className="h-full w-[0.5px] bg-[#A3A3A3]" />

      <button
        onClick={() => onChange(1)}
        className={`z-10 flex h-full w-9.5 lg:w-12 items-center justify-center
          ${activeIndex === 2 ? "text-white" : "text-[#404040] hover:bg-[#F6F8F9]"}`}
      >
        हिन्दी
      </button>

      {/* SLIDING INDICATOR */}
      <div
        className="
          absolute inset-y-0 left-0
          w-[38.5px] lg:w-[48.5px]
          bg-[#404040]
          transition-transform duration-300 ease-in-out
        "
        style={{
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
    </div>
  );
}