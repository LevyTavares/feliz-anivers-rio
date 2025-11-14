import { useCallback, useEffect } from "react";
import type { Options } from "canvas-confetti";
import "./confetti.scss";

type Props = {
  label?: string;
};

// Carregamento dinâmico para evitar problemas de default export no editor
let confettiFn: ((opts: Options) => void) | null = null;
type ConfettiModule =
  | { default?: (opts: Options) => void }
  | ((opts: Options) => void);
const ensureConfetti = async () => {
  if (!confettiFn) {
    const mod = (await import("canvas-confetti")) as unknown as ConfettiModule;
    confettiFn =
      typeof mod === "function"
        ? mod
        : (mod.default as (opts: Options) => void);
  }
  return confettiFn!;
};

// Configuração base de confete (assíncrona, chama quando o módulo estiver pronto)
const fire = (particleRatio: number, opts: Options = {}) => {
  const count = Math.floor(200 * particleRatio);
  ensureConfetti().then((fn) =>
    fn({
      origin: { y: 0.6 },
      spread: 70,
      gravity: 0.9,
      ticks: 200,
      scalar: 1.0,
      colors: ["#ff5ea8", "#7c4dff", "#ffd166", "#4be3c2", "#ffffff"],
      ...opts,
      particleCount: count,
    })
  );
};

const burst = () => {
  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.9 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92 });
  fire(0.1, { spread: 120, startVelocity: 45 });
};

export default function ConfettiButton({ label = "Confete" }: Props) {
  const onClick = useCallback(() => burst(), []);

  useEffect(() => {
    const handler = () => burst();
    window.addEventListener("confetti:burst", handler);
    return () => window.removeEventListener("confetti:burst", handler);
  }, []);

  return (
    <button
      className="confetti-btn btn-ghost"
      onClick={onClick}
      aria-label={label}
    >
      🎊 {label}
    </button>
  );
}
