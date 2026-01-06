"use client";

import LanguageToggle from "./LanguageToggle";

export default function PageHeader({
  language,
  setLanguage,
}: {
  language: number | null;
  setLanguage: (v: number | null) => void;
}) {
  return (
    
      <div className="flex items-center justify-between">
        {/* TITLE */}
        <h1
          className="
            py-3.5
            text-2xl leading-none font-medium tracking-[0.02em]
            text-[#2E2F31]
            lg:py-8 lg:pb-7
            lg:text-[28px] lg:leading-[28px] lg:font-bold
          "
        >
          On YouTube
        </h1>

        {/* LANGUAGE TOGGLE (DESKTOP ONLY) */}
        <div className="hidden lg:block">
          <LanguageToggle
            value={language}
            onChange={setLanguage}
          />
        </div>
      </div>
    
  );
}