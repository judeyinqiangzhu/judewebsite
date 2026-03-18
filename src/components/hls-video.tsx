import { useEffect, useRef } from "react";
import Hls from "hls.js";

import { cn } from "@/lib/utils";

type HlsVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  desaturated?: boolean;
};

export function HlsVideo({
  src,
  poster,
  className,
  desaturated = false,
}: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={cn("h-full w-full object-cover", className)}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      style={desaturated ? { filter: "saturate(0)" } : undefined}
    />
  );
}
