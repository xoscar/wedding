"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // Auto-play on first user interaction (browsers require a gesture)
  useEffect(() => {
    const play = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().then(() => setPlaying(true)).catch(() => {});
      window.removeEventListener("scroll", play);
      window.removeEventListener("click", play);
      window.removeEventListener("touchstart", play);
    };
    window.addEventListener("scroll", play, { once: true, passive: true });
    window.addEventListener("click", play, { once: true });
    window.addEventListener("touchstart", play, { once: true, passive: true });
    return () => {
      window.removeEventListener("scroll", play);
      window.removeEventListener("click", play);
      window.removeEventListener("touchstart", play);
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} src="/winter.mp3" loop preload="none" />
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
