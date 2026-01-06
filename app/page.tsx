"use client";

import { useEffect, useState } from "react";
import { fetchCategories, fetchVideos } from "@/lib/api";
import PageHeader from "@/components/header/PageHeader";
import TopicNav from "@/components/topic-nav/TopicNav";
import FilterBar from "@/components/filters/FilterBar";
import VideoGrid from "@/components/videos/VideoGrid";

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

  const [language, setLanguage] = useState(1);
  const [orderBy, setOrderBy] = useState(1);
  const [category, setCategory] = useState<number | undefined>();
  const [year, setYear] = useState<number | undefined>();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  useEffect(() => {
    fetchVideos({ language, orderBy, category, year }).then(res =>
      setVideos(res.data ?? res)
    );
  }, [language, orderBy, category, year]);

  return (
    <main className="px-4 md:px-8 py-6">
      <PageHeader language={language} setLanguage={setLanguage} />
      <TopicNav
        categories={categories}
        active={category}
        setActive={setCategory}
      />
      <FilterBar
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        year={year}
        setYear={setYear}
      />
      <VideoGrid videos={videos.slice(0, 50)} />
    </main>
  );
}
