import PageHeader from "@/components/header/PageHeader";
import TopicNav from "@/components/topic-nav/TopicNav";
import FilterBar from "@/components/filters/FilterBar";
import VideoGrid from "@/components/videos/VideoGrid";

export default function Page() {
  return (
    <main>
      <PageHeader />
      <TopicNav />
      <FilterBar />
      <VideoGrid />
    </main>
  );
}