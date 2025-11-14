import { useEffect, useRef, useState } from "react";
import "./music-button.scss";

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio("/song.mp3");
    audio.loop = true;
    audioRef.current = audio;
    audio.addEventListener("error", () => setAvailable(false));
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (!playing) {
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch {
      // ignore autoplay restrictions
    }
  };

  const label = !available
    ? "Adicionar música"
    : playing
    ? "Pausar música"
    : "Tocar música";
  const icon = !available ? "🎵" : playing ? "⏸️" : "▶️";

  return (
    <button
      className="music-btn btn-ghost"
      onClick={toggle}
      title={!available ? "Coloque um arquivo /public/song.mp3" : undefined}
    >
      {icon} {label}
    </button>
  );
}
