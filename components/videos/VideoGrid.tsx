import VideoCard from "./VideoCard";

export default function VideoGrid({ videos }: { videos: any[] }) {
  if (!Array.isArray(videos) || videos.length === 0) return null;

  return (
    <div className="mt-6 mb-6">
      <div className=" grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-x-6 md:gap-x-8
    gap-y-8 md:gap-y-10">
        {videos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  );
}