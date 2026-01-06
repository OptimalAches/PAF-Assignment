import { Video } from "@/types/video";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div>
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full rounded"
      />
      <p className="mt-2 text-sm font-medium">{video.title}</p>
    </div>
  );
}
