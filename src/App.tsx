import { useEffect, useState } from "react";
import Confetti from "./components/ConfettiButton.tsx";
import Hero from "./components/Hero.tsx";
import LetterModal from "./components/LetterModal.tsx";
import PictographGrid from "./components/PictographGrid.tsx";
import FloatingDecor from "./components/FloatingDecor.tsx";
import MusicButton from "./components/MusicButton.tsx";

function App() {
  const [openLetter, setOpenLetter] = useState(false);
  const honoree = "Francivania Tavares da Silva";

  useEffect(() => {
    // Pequeno confete inicial para marcar a abertura
    setTimeout(() => {
      const ev = new CustomEvent("confetti:burst");
      window.dispatchEvent(ev);
    }, 500);
  }, []);

  return (
    <div className="page">
      <FloatingDecor />
      <header className="topbar">
        <div className="brand">🎉 Feliz Aniversário</div>
        <nav className="actions">
          <MusicButton />
          <Confetti label="Soltar confete" />
        </nav>
      </header>

      <main>
        <Hero name={honoree} onOpenLetter={() => setOpenLetter(true)} />
        <section className="section">
          <h2 className="section__title">Comemoração em Ícones</h2>
          <p className="section__subtitle">
            Uma parede de ilustrações para celebrar sua luz.
          </p>
          <PictographGrid />
        </section>
      </main>

      <footer className="footer">Com muito amor 💖</footer>

      <LetterModal
        open={openLetter}
        onClose={() => setOpenLetter(false)}
        name={honoree}
      />
    </div>
  );
}

export default App;
