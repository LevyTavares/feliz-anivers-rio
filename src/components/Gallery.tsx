import { useMemo } from "react";
import "./gallery.scss";

const defaultPhotos = [
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483030096298-4ca1287af8b5?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
];

export default function Gallery() {
  // Permite substituir por imagens locais em public/photos/1.jpg ... 6.jpg
  const photos = useMemo(() => {
    const local = Array.from({ length: 12 }, (_, i) => `/photos/${i + 1}.jpg`);
    return [...local, ...defaultPhotos];
  }, []);

  return (
    <div id="galeria" className="gallery">
      {photos.map((src, i) => (
        <figure key={i} className="gallery__item">
          <img
            src={src}
            alt={`Foto ${i + 1}`}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).classList.add("hide");
            }}
          />
        </figure>
      ))}
    </div>
  );
}
