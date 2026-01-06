export default function LanguageToggle({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex gap-2 text-sm">
      {[
        { label: "ALL", val: 1 },
        { label: "ENG", val: 2 },
        { label: "हिंदी", val: 3 },
      ].map(opt => (
        <button
          key={opt.val}
          onClick={() => onChange(opt.val)}
          className={`px-3 py-1 rounded ${
            value === opt.val ? "bg-black text-white" : "border"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
