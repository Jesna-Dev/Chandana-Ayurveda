"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryCategories, type GalleryImage } from "@/lib/site";
import { Close } from "./Icons";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  // Only offer filters for categories that actually have photos
  const categories = galleryCategories.filter((c) => images.some((img) => img.category === c));
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);

  const shown = filter === "All" ? images : images.filter((img) => img.category === filter);

  const count = shown.length;
  const close = () => setOpen(null);
  const step = (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + count) % count));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % count));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + count) % count));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, count]);

  const current = open === null ? null : shown[open];

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              filter === c
                ? "border-forest bg-forest text-white"
                : "border-black/15 text-muted hover:border-forest hover:text-forest"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shown.map((img, i) => (
          <li key={img.src} className="mb-4 break-inside-avoid">
            <button
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-2xl"
              aria-label={`View photo: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-xs uppercase tracking-[0.2em] text-gold">{img.category}</span>
                <span className="mt-1 block font-serif text-xl text-white">{img.alt}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-forest/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <div className="flex items-center justify-between px-6 py-5 text-white/70">
            <span className="text-sm">
              {open! + 1} / {shown.length}
            </span>
            <button onClick={close} aria-label="Close" className="p-1 hover:text-white">
              <Close className="h-7 w-7" />
            </button>
          </div>
          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain px-4 sm:px-20" />
            <button
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md hover:bg-white/20 sm:left-6"
            >
              ←
            </button>
            <button
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md hover:bg-white/20 sm:right-6"
            >
              →
            </button>
          </div>
          <div className="px-6 py-6 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{current.category}</p>
            <p className="mt-1 font-serif text-xl text-white">{current.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
