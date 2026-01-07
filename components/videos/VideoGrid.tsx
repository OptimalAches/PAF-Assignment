import VideoCard from "./VideoCard";

export default function VideoGrid({ videos }: { videos: any[] }) {
  if (!Array.isArray(videos) || videos.length === 0) return null;

  return (
    <div className="mt-3 mb-3 lg:mt-6 lg:mb-6">
      <div
        className="
          flex flex-col gap-3
          md:grid md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          md:gap-x-8
          md:gap-y-10
        "
      >
        {videos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  );
}