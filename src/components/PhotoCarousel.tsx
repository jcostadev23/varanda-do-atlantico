"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { apartmentPhotos } from "@/data/apartmentPhotos";

export function PhotoCarousel() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const currentPhoto = apartmentPhotos[currentPhotoIndex];
  const lastPhotoIndex = apartmentPhotos.length - 1;

  function showPreviousPhoto() {
    setCurrentPhotoIndex((photoIndex) =>
      photoIndex === 0 ? lastPhotoIndex : photoIndex - 1,
    );
  }

  function showNextPhoto() {
    setCurrentPhotoIndex((photoIndex) =>
      photoIndex === lastPhotoIndex ? 0 : photoIndex + 1,
    );
  }

  function handlePointerDown(event: React.PointerEvent<HTMLElement>) {
    touchStartX.current = event.clientX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLElement>) {
    if (touchStartX.current === null) return;

    const deltaX = event.clientX - touchStartX.current;
    const swipeThreshold = 50;

    if (Math.abs(deltaX) >= swipeThreshold) {
      if (deltaX > 0) {
        showPreviousPhoto();
      } else {
        showNextPhoto();
      }
    }

    touchStartX.current = null;
  }

  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 md:py-6 mb-4"
      aria-label="Apartment photos"
    >
      <figure
        className="overflow-hidden rounded-2xl bg-white/85 shadow touch-pan-y select-none"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <p className="px-4 py-3 text-sm text-white font-bold bg-teal opacity-90">
          {currentPhoto.description}
        </p>

        <Image
          src={currentPhoto.imagePath}
          alt={currentPhoto.description}
          width={1600}
          height={1066}
          sizes="(max-width: 768px) 100vw, 1600px"
          className="block h-[58vh] w-full object-cover object-center"
          priority
          draggable={false}
        />

        <figcaption className="sr-only">{currentPhoto.description}</figcaption>
      </figure>

      <div className="mt-4 flex items-center justify-between gap-4">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={showPreviousPhoto}
          className="rounded-2xl border bg-coral border-white px-4 py-2 text-sm font-medium text-zinc-200 min-w-20"
        >
          Previous
        </button>

        <p className="text-md text-slate-900 font-semibold">
          Photo {currentPhotoIndex + 1} of {apartmentPhotos.length}
        </p>

        <button
          type="button"
          aria-label="Next photo"
          onClick={showNextPhoto}
          className="rounded-2xl border bg-coral border-white px-4 py-2 text-sm font-medium text-white min-w-20"
        >
          Next
        </button>
      </div>
    </section>
  );
}
