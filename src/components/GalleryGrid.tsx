"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Photo = { src: string; alt: string; portrait?: boolean };

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  const current = index !== null ? photos[index] : null;

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((p, i) => (
          <li key={p.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-cream"
              aria-label={`Open photo: ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.portrait ? 1440 : 1920}
                height={p.portrait ? 1920 : 1440}
                quality={90}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition duration-700 group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-12 text-left text-sm text-paper opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {p.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 text-paper backdrop-blur-sm"
          onClick={() => setIndex(null)}
        >
          <div className="flex items-center justify-between p-4 sm:p-6">
            <p className="text-sm text-paper/70">
              {index! + 1} / {photos.length}
            </p>
            <button type="button" aria-label="Close" autoFocus className="grid size-11 place-items-center rounded-full hover:bg-white/10" onClick={() => setIndex(null)}>
              <X className="size-6" />
            </button>
          </div>

          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image key={current.src} src={current.src} alt={current.alt} fill quality={90} sizes="100vw" className="object-contain px-4 sm:px-20" />
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => step(-1)}
              className="absolute top-1/2 left-2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => step(1)}
              className="absolute top-1/2 right-2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          <p className="p-6 text-center text-paper/80">{current.alt}</p>
        </div>
      )}
    </>
  );
}
