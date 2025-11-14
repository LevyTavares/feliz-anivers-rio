import "./pictograph-grid.scss";

const PICTOS = [
  "🎂",
  "🎉",
  "💐",
  "🎁",
  "✨",
  "💖",
  "🕯️",
  "🌟",
  "🎈",
  "🍰",
  "🥂",
  "🌸",
  "🎊",
  "🍾",
  "🧁",
  "💝",
  "🌺",
  "🌼",
  "🎶",
  "🫶",
  "💫",
  "🌻",
  "🍬",
  "🍩",
];

export default function PictographGrid() {
  const items = Array.from({ length: 24 }, (_, i) => PICTOS[i % PICTOS.length]);
  return (
    <div id="galeria" className="pictos">
      {items.map((icon, i) => (
        <div key={i} className="pictos__item" aria-hidden>
          <span className="pictos__emoji">{icon}</span>
        </div>
      ))}
    </div>
  );
}
