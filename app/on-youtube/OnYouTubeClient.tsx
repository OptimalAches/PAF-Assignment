"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import PageHeader from "@/components/header/PageHeader";
import TopicNav from "@/components/topic-nav/TopicNav";
import FilterBar from "@/components/filters/FilterBar";
import VideoGrid from "@/components/videos/VideoGrid";

import { fetchCategories, fetchVideos } from "@/lib/api";

export default function Page() {

  // ---------- DATA --------------

  const [categories, setCategories] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);


  // ---------- FILTER STATE ----------

  const searchParams = useSearchParams();
  const router = useRouter();

  const [language, setLanguage] = useState<number | null>(() => {
    const v = searchParams.get("language");
    return v ? Number(v) : null;
  });

  const [orderBy, setOrderBy] = useState<number>(() => {
    const v = searchParams.get("orderBy");
    return v ? Number(v) : 1;
  });

  const [categoryId, setCategoryId] = useState<string | null>(() => {
    return searchParams.get("categoryId");
  });

  const [year, setYear] = useState<number | null>(() => {
    const v = searchParams.get("year");
    return v ? Number(v) : null;
  });


  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const params = new URLSearchParams();

    if (language !== null) params.set("language", String(language));
    if (orderBy !== 1) params.set("orderBy", String(orderBy));
    if (categoryId !== null) params.set("categoryId", categoryId);
    if (year !== null) params.set("year", String(year));

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [language, orderBy, categoryId, year]);




  // ---------- FETCH CATEGORIES (ONCE) ----------

  useEffect(() => {
    fetchCategories()
      .then((cats) => {
        console.log("FETCHED categories:", cats);
        setCategories(Array.isArray(cats) ? cats : []);
      })
      .catch((err) => {
        console.error("CATEGORY ERROR:", err);
        setCategories([]);
      });
  }, []);


  // ---------- RESET FILTERS ----------

  const resetFilters = () => {
    setLanguage(null);
    setCategoryId(null);
    setOrderBy(1);
    setYear(null);

    router.replace("?", { scroll: false });
  };



  // ---------- FETCH VIDEOS (ON FILTER CHANGE) ---------

  useEffect(() => {
    let active = true;
    setLoading(true);

    fetchVideos({
      language,
      categoryId,
      orderBy,
      year,
    })
      .then((data) => {
        if (active) setVideos(data);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [language, categoryId, orderBy, year]);




  // ---------- RENDER ----------
  return (

    <main className="bg-white">
      <div className="mx-auto max-w-384">
        
          {/* ===== Header ===== */}
          <div className="px-3 md:px-10 tab:px-6 laptop:px-[68px]">
            <PageHeader language={language} setLanguage={setLanguage} />
          </div>

          {/* ===== Topic Nav + Filters ===== */}
          <div className="sticky top-0 z-10 bg-white">
            <div className="px-3 md:px-10 tab:px-6 laptop:px-[68px]">
              <TopicNav
                categories={categories}
                active={categoryId}
                setActive={setCategoryId}
              />
            </div>

            {/* Divider */}
            <div className="h-[0.5px] w-full bg-[#D8DCDF]" />

            <div className="px-3 md:px-10 tab:px-6 laptop:px-[68px]">
              <FilterBar
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                year={year}
                setYear={setYear}
              />
            </div>
          </div>
        
        {/* ===== Videos Render===== */}
        <div className="px-3 md:px-10 tab:px-6 laptop:px-[68px]">
          {loading ? (
            /* ===== Loader ===== */
            <div className="flex items-center justify-center py-24">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#CACED1] border-t-[#1F2022]" />
            </div>
          ) : videos.length === 0 ? (
            /* ===== No Results ===== */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              {/* Icon */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#ECEFF1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9AA0A6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>

              {/* Text */}
              <p className="text-base font-medium text-[#2E2F31]">
                No results found.
              </p>

              {/* Action */}
              <button
                onClick={resetFilters}
                className="mt-4 text-sm font-medium uppercase underline text-[#2E2F31] hover:text-black"
              >
                Remove Filters
              </button>
            </div>
          ) : (
            /* ===== Videos ===== */
            <VideoGrid videos={videos} />
          )}

        </div>
      </div>
    </main>

  );
}