import LanguageToggle from "./LanguageToggle";

export default function PageHeader({
  language,
  setLanguage,
}: {
  language: number;
  setLanguage: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-semibold">On YouTube</h1>
      <LanguageToggle value={language} onChange={setLanguage} />
    </div>
  );
}
