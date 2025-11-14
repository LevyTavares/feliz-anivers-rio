# Feliz Aniversário – Site em React + SCSS

Um site simples, bonito e responsivo para homenagear Francivania Tavares da Silva. Feito com React + TypeScript + Vite e SCSS, com animações de confete, carta especial, grade de pictogramas (ilustrações via emojis) e um botão que toca a melodia de “Parabéns pra você” usando WebAudio. Não requer imagens ou arquivos de áudio externos.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço indicado (geralmente http://localhost:5173).

## Personalização rápida

- Nome da homenageada: altere a constante `honoree` em `src/App.tsx`.
- Texto da carta: edite o conteúdo em `src/components/LetterModal.tsx`.
- Ícones/ilustrações: ajuste o array `PICTOS` em `src/components/PictographGrid.tsx` (pode trocar/emendar emojis; se preferir, substituímos por SVGs estilizados).
- Cores e tema: altere as variáveis em `src/styles/_variables.scss`.
- Favicon: substitua `public/favicon.svg` (o arquivo atual já usa bolo + confete).

## Estrutura principal

- `src/components/Hero.tsx`: seção de abertura com o nome e chamadas de ação.
- `src/components/LetterModal.tsx`: carta especial em modal.
- `src/components/PictographGrid.tsx`: grade responsiva de pictogramas (emojis) — não usa imagens.
- `src/components/ConfettiButton.tsx`: confete (import dinâmico de `canvas-confetti`).
- `src/components/ParabensButton.tsx`: toca/para a melodia de “Parabéns” via WebAudio (sem arquivos externos).
- `src/components/FloatingDecor.tsx`: decorações flutuantes.
- `src/styles/`: variáveis, mixins e estilos globais em SCSS.
- `public/favicon.svg` e `index.html`: ícone e metadados (viewport-fit / theme-color).

Observação: Há um `Gallery.tsx` opcional no projeto, mas ele não é usado por padrão (as imagens foram substituídas por pictogramas, conforme solicitado).

## Build e deploy

```bash
npm run build
npm run preview
```

Você pode fazer deploy estático em serviços como Netlify ou Vercel apontando a pasta `dist/`.

## Mobile e acessibilidade

- Layout otimizado para celulares (incluindo iPhone 11): a página usa `viewport-fit=cover` e aplica `env(safe-area-inset-*)` para respeitar as áreas seguras de notch/bordas em `topbar`, `main` e `footer`.
- Componentes com rótulos e teclas de atalho naturais (fechar carta via ESC; foco navegável).

## Dedicatória

Feito com carinho para celebrar a vida de Francivania Tavares da Silva. 🎂💐✨
