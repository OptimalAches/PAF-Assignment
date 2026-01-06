import { Suspense } from "react";
import OnYouTubeClient from "./OnYouTubeClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-24 text-sm text-[#767677]">
          Loading videos…
        </div>
      }
    >
      <OnYouTubeClient />
    </Suspense>
  );
}