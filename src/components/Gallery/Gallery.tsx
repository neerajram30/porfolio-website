"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { galleryPhotos } from "../config/gallery";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selected = selectedIndex === null ? null : galleryPhotos[selectedIndex];
  const isOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
    // Keep the dialog open and preserve focus while moving between photos.
  }, [isOpen]);

  const move = (direction: number) => {
    setSelectedIndex((index) => index === null ? null :
      (index + direction + galleryPhotos.length) % galleryPhotos.length);
  };

  return (
    <section id="gallery" className="relative w-full px-4 py-16 sm:px-6 sm:py-24 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-indigo-400 light:text-indigo-600">
            <Camera className="h-3.5 w-3.5" /> Moments &amp; Memories
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white light:text-slate-900 sm:text-4xl md:text-5xl">
            My <span className="gradient-text">Gallery</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 light:text-slate-600 sm:text-base">
            From tech summits to outdoor adventures. Select a photo to take a closer look.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {galleryPhotos.map((photo, index) => (
            <button
              key={photo.image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-haspopup="dialog"
              aria-label={`Preview ${photo.title}`}
              className="bento-card group overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 light:bg-white">
                <Image src={photo.image} alt={photo.title} fill placeholder="blur"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105" />
                <span className="absolute bottom-3 right-3 rounded-full border border-white/20 light:border-slate-900/10 bg-slate-950/70 light:bg-slate-100/70 p-2 text-white light:text-slate-900" aria-hidden="true">
                  <Expand className="h-4 w-4" />
                </span>
              </div>
              <h3 className="px-5 py-4 text-base font-semibold text-slate-100 light:text-slate-900 group-hover:text-indigo-300 light:group-hover:text-indigo-700">{photo.title}</h3>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="gallery-preview-title"
        aria-describedby="gallery-preview-description"
        onCancel={() => setSelectedIndex(null)}
        onClose={() => setSelectedIndex(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setSelectedIndex(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        }}
        className="m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-5xl overflow-y-auto rounded-2xl border border-white/15 light:border-slate-900/10 bg-slate-950 light:bg-slate-100 p-0 text-slate-100 light:text-slate-900 shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        {selected && (
          <div>
            <div className="flex items-center justify-between border-b border-white/10 light:border-slate-900/10 px-4 py-3">
              <span className="font-mono text-xs text-slate-400 light:text-slate-600">{selectedIndex! + 1} / {galleryPhotos.length}</span>
              <button type="button" autoFocus onClick={() => setSelectedIndex(null)} aria-label="Close preview"
                className="rounded-full p-2 text-slate-300 light:text-slate-700 hover:bg-white/10 light:hover:bg-slate-900/10 focus-visible:outline-indigo-400">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative h-[45dvh] bg-black sm:h-[60dvh]">
              <Image src={selected.image} alt={selected.title} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
              <div aria-live="polite">
                <h3 id="gallery-preview-title" className="text-lg font-bold text-white light:text-slate-900 sm:text-xl">{selected.title}</h3>
                <p id="gallery-preview-description" className="mt-2 text-sm leading-relaxed text-slate-400 light:text-slate-600">{selected.description}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={() => move(-1)} aria-label="Previous photo" className="rounded-full border border-white/15 light:border-slate-900/10 p-2 hover:bg-indigo-500/20 focus-visible:outline-indigo-400"><ChevronLeft className="h-5 w-5" /></button>
                <button type="button" onClick={() => move(1)} aria-label="Next photo" className="rounded-full border border-white/15 light:border-slate-900/10 p-2 hover:bg-indigo-500/20 focus-visible:outline-indigo-400"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
