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
    
    <div className="flex items-center justify-between ">
      <h1 className="
    font-nhgt
    font-bold
    tracking-[0.02em]
    text-[#1F2022]
    leading-none

    text-[24px]
    py-6

    md:text-[28px]
    md:py-8

    lg:text-[32px]
    lg:py-10">
        On YouTube
      </h1>

      <LanguageToggle
        value={language}
        onChange={setLanguage}
      />
    </div>

  );
}