"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const hasAutoPlayed = useRef(false);

  // Auto-play on first user interaction (browsers require a user activation event)
  useEffect(() => {
    const play = () => {
      if (hasAutoPlayed.current) return;
      hasAutoPlayed.current = true;
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().then(() => setPlaying(true)).catch(() => {
        hasAutoPlayed.current = false; // reset so next interaction retries
      });
    };
    // pointerdown and keydown are user activation events in all browsers
    // (scroll is NOT — audio.play() will be rejected)
    document.addEventListener("pointerdown", play);
    document.addEventListener("keydown", play);
    return () => {
      document.removeEventListener("pointerdown", play);
      document.removeEventListener("keydown", play);
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/winter.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-emerald-950 text-amber-50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
      >
        {playing ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
