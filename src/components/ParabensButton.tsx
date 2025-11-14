import { useEffect, useRef, useState } from "react";
import "./parabens-button.scss";

type Note = { n: keyof typeof NOTES; d?: number };

const NOTES = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.0,
  A4: 440.0,
  Bb4: 466.16,
  C5: 523.25,
} as const;

// Melodia "Parabéns pra você" (aproximação simples)
const MELODY: Note[] = [
  { n: "C4" },
  { n: "C4" },
  { n: "D4" },
  { n: "C4" },
  { n: "F4" },
  { n: "E4", d: 0.5 },
  { n: "C4" },
  { n: "C4" },
  { n: "D4" },
  { n: "C4" },
  { n: "G4" },
  { n: "F4", d: 0.5 },
  { n: "C4" },
  { n: "C4" },
  { n: "C5" },
  { n: "A4" },
  { n: "F4" },
  { n: "E4" },
  { n: "D4", d: 0.5 },
  { n: "Bb4" },
  { n: "Bb4" },
  { n: "A4" },
  { n: "F4" },
  { n: "G4" },
  { n: "F4", d: 0.6 },
];

export default function ParabensButton() {
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<() => void>(() => {});
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => stopRef.current();
  }, []);

  const ensureCtx = () => {
    const W = window as unknown as {
      AudioContext: typeof AudioContext;
      webkitAudioContext?: typeof AudioContext;
    };
    if (!ctxRef.current)
      ctxRef.current = new (W.AudioContext || W.webkitAudioContext!)();
    return ctxRef.current;
  };

  const play = async () => {
    const ctx = ensureCtx();
    if (ctx.state === "suspended") await ctx.resume();

    const now = ctx.currentTime;
    let t = now;
    const gain = ctx.createGain();
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.7, t);

    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.connect(gain);

    const base = 0.34; // duração base por nota
    for (const { n, d } of MELODY) {
      const dur = (d ?? 1) * base;
      const f = NOTES[n];
      osc.frequency.setValueAtTime(f, t);
      // mini envelope
      gain.gain.cancelScheduledValues(t);
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.7, t + 0.04);
      gain.gain.linearRampToValueAtTime(0.001, t + dur - 0.02);
      t += dur;
    }

    // Stop e cleanup
    osc.start(now);
    osc.stop(t);
    const stop = () => {
      try {
        osc.stop();
      } catch {
        /* noop */
      }
      gain.disconnect();
      osc.disconnect();
      setPlaying(false);
    };
    stopRef.current = stop;
    setPlaying(true);
    osc.onended = stop;
  };

  const toggle = () => {
    if (playing) {
      stopRef.current();
    } else {
      play();
    }
  };

  return (
    <button
      className="parabens-btn btn-ghost"
      onClick={toggle}
      aria-label={playing ? "Parar melodia" : "Tocar Parabéns"}
    >
      {playing ? "⏹️ Parar" : "🎶 Parabéns"}
    </button>
  );
}
