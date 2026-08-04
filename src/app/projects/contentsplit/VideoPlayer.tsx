"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // play() can be aborted during remount/navigation; ignore.
      });
    }

    return () => {
      video.pause();
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.videoPlayer}
          controls
          muted
          loop
          playsInline
          aria-label="ContentSplit content transformation flow walkthrough"
        >
          <source
            src="/contentsplit-walkthrough.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
