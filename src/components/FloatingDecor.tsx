import "./floating-decor.scss";

export default function FloatingDecor() {
  return (
    <div className="decor" aria-hidden>
      <div className="decor__balloon decor__balloon--1">🎈</div>
      <div className="decor__balloon decor__balloon--2">🎈</div>
      <div className="decor__spark decor__spark--1">✨</div>
      <div className="decor__spark decor__spark--2">✨</div>
    </div>
  );
}
