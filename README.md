# Feliz Aniversário – Site em React + SCSS

Um site simples, bonito e responsivo para homenagear Francivania Tavares da Silva. Feito com React + TypeScript + Vite e estilos em SCSS, com animações de confete, carta especial, galeria e música opcional.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço indicado (geralmente http://localhost:5173).

## Personalizar fotos e música

- Fotos: coloque imagens em `public/photos` com os nomes `1.jpg`, `2.jpg`, ... até `12.jpg` (ou quanto quiser). A galeria também tem algumas imagens de fallback online; imagens que não existirem localmente serão ignoradas automaticamente.
- Música: coloque um arquivo `public/song.mp3`. No topo há um botão para tocar/pausar; se o arquivo não existir, o botão mostrará uma dica para adicionar a música.

## Estrutura principal

- `src/components/Hero.tsx`: seção de abertura com o nome e chamadas de ação.
- `src/components/LetterModal.tsx`: carta especial em modal.
- `src/components/Gallery.tsx`: galeria de fotos responsiva.
- `src/components/ConfettiButton.tsx`: botão de confete (usa `canvas-confetti`).
- `src/components/FloatingDecor.tsx`: decorações flutuantes.
- `src/components/MusicButton.tsx`: botão para tocar/pausar a música.
- `src/styles/`: variáveis, mixins e estilos globais em SCSS.

## Build e deploy

```bash
npm run build
npm run preview
```

Você pode fazer deploy estático em serviços como Netlify ou Vercel apontando a pasta `dist/`.

## Dedicatória

Feito com carinho para celebrar a vida de Francivania Tavares da Silva. 🎂💐✨
