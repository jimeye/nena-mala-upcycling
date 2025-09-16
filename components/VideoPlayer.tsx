'use client';

import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  poster: string;
  sources: { src: string; type: string; media?: string }[];
  className?: string;
};

export default function VideoPlayer({ poster, sources, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    let observer: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
            setPlaying(true);
          } else {
            el.pause();
            setPlaying(false);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer && observer.disconnect();
    };
  }, []);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-auto"
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        poster={poster}
      >
        {sources.map((s, i) => (
          <source key={i} src={s.src} type={s.type} media={s.media} />
        ))}
      </video>

      <button
        type="button"
        aria-label={playing ? 'Pause video' : 'Play video'}
        onClick={toggle}
        className="absolute bottom-3 right-3 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
      >
        {playing ? (
          <span className="block w-0 h-0 border-l-4 border-l-transparent border-t-6 border-t-white border-b-6 border-b-white" style={{ borderLeftWidth: 0, width: 0 }} />
        ) : (
          <span className="block w-0 h-0" style={{
            width: 0,
            height: 0,
            borderLeft: '10px solid white',
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent'
          }} />
        )}
      </button>
    </div>
  );
}


