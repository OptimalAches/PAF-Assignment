import VideoCard from "./VideoCard";
import { Video } from "@/types/video";

export default function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {videos.map(v => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}
