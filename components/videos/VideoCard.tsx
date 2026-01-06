function formatDuration(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (h > 0) {
        return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    return `${m}:${String(s).padStart(2, "0")}`;
}

function formatViews(count: number) {
    if (count >= 1_000_000) {
        return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
    }

    if (count >= 1_000) {
        return `${(count / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
    }

    return count.toString();
}

function renderTags(tags: string[] | null) {
    if (!Array.isArray(tags) || tags.length === 0) return null;

    const visible = tags.slice(0, 2);
    const extra = tags.length - visible.length;

    return (
        <div className="flex gap-1.5 pt-3 tab:pt-2.5 tab:gap-2">
            {visible.map((tag) => (
                <span
                    key={tag}
                    className="
    font-medium
    h-fit
    bg-[#ECEFF1]
    px-1.5 py-1.5
    text-[13px]
    leading-none
    tracking-[0.005em]
    text-[#767677]
    inline-flex
    items-center
    justify-center
          "
                >
                    {tag}
                </span>
            ))}

            {extra > 0 && (
                <span
                    className="
    font-medium
    h-fit
    bg-[#ECEFF1]
    px-1.5 py-1.5
    text-[13px]
    leading-none
    tracking-[0.005em]
    text-[#767677]
    inline-flex
    items-center
    justify-center
          "
                >
                    +{extra}
                </span>
            )}
        </div>
    );
}


function timeAgo(dateString: string) {
    const seconds = Math.floor(
        (Date.now() - new Date(dateString).getTime()) / 1000
    );

    const intervals: [number, string][] = [
        [31536000, "year"],
        [2592000, "month"],
        [86400, "day"],
        [3600, "hour"],
        [60, "minute"],
    ];

    for (const [secs, label] of intervals) {
        const value = Math.floor(seconds / secs);
        if (value >= 1) {
            return `${value} ${label}${value > 1 ? "s" : ""} ago`;
        }
    }

    return "Just now";
}

export default function VideoCard({ video }: { video: any }) {
    return (
        <div className="flex flex-col">
            <div className="relative aspect-video bg-[#F1F3F5] overflow-hidden">
                <img
                    src={video.video.thumbnailURL}
                    alt={video.title}
                    className="h-full w-full object-cover"
                />

                {video.video?.durationInSeconds && (
                    <span
                        className="
    absolute right-0 bottom-0
    bg-[#1F2022]
    font-medium
    text-xs
    tracking-[0.005em]
    text-[#E2E5E8]
    px-1.5 py-0.5
    laptop:px-2 laptop:py-1
    tab:text-[13px]
  "
                    >
                        {formatDuration(video.video.durationInSeconds)}
                    </span>

                )}
            </div>

            <div className="mt-2">
                <p className="text-sm md:text-[15px] font-medium leading-[1.3] text-[#2E2F31] line-clamp-2">
                    {video.title}
                </p>

                <p className="mt-1 text-xs text-[#767677]">
                    {formatViews(video.viewCount)} views • {timeAgo(video.publishedAt)}
                </p>

                {renderTags(video.tags)}

            </div>
        </div>
    );
}