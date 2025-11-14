import "./hero.scss";

type Props = {
  name: string;
  onOpenLetter: () => void;
};

export default function Hero({ name, onOpenLetter }: Props) {
  return (
    <section
      className="hero"
      aria-label={`Homenagem de aniversário para ${name}`}
    >
      <div className="hero__content">
        <h1 className="hero__title">
          Feliz Aniversário, <span className="hero__name">{name}</span>!
        </h1>
        <p className="hero__subtitle">
          Hoje celebramos a sua vida, sua força e toda a alegria que você
          espalha.
        </p>
        <div className="hero__actions">
          <button className="btn-primary" onClick={onOpenLetter}>
            Abrir carta especial
          </button>
          <a className="btn-ghost" href="#galeria">
            <a className="btn-ghost" href="#galeria">
              Ver ícones
            </a>
          </a>
        </div>
      </div>
    </section>
  );
}
