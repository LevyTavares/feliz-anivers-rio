import { useEffect, useRef } from "react";
import "./letter-modal.scss";

type Props = {
  open: boolean;
  onClose: () => void;
  name: string;
};

export default function LetterModal({ open, onClose, name }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="letter-title"
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="modal__card">
        <h3 id="letter-title" className="modal__title">
          Para você, {name} 💐
        </h3>
        <div className="modal__body">
          <p>
            Hoje é dia de agradecer a sua vida e tudo que você representa. Sua
            generosidade, alegria e coragem iluminam os dias de quem tem a sorte
            de estar ao seu lado.
          </p>
          <p>
            Que este novo ciclo venha com muita saúde, paz e momentos
            inesquecíveis. Você é inspiração e amor — e merece o mundo!
          </p>
          <p>Com carinho, sua família. 🎂✨</p>
        </div>
        <div className="modal__actions">
          <button className="btn-primary" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
