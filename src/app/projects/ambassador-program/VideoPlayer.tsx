"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.videoPlayer}
          controls
          preload="none"
          playsInline
          poster="/Desktop - 22.png"
          aria-label="Ambassador program walkthrough"
          onPlay={() => setPlaying(true)}
        >
          <source src="/ambassador-walkthrough.mp4" type="video/mp4" />
        </video>
        {!playing && (
          <button
            className={styles.playOverlay}
            onClick={handlePlay}
            aria-label="Play video"
          >
            <svg viewBox="0 0 72 72" className={styles.playIcon} fill="none">
              <circle cx="36" cy="36" r="34" stroke="currentColor" strokeWidth="2" fill="rgba(0,0,0,0.4)" />
              <path d="M30 24v24l20-12z" fill="currentColor" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
