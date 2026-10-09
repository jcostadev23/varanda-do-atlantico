"use client";

import Image from "next/image";
import { useState } from "react";
import { apartmentPhotos } from "@/data/apartmentPhotos";

export function PhotoCarousel() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const currentPhoto = apartmentPhotos[currentPhotoIndex];
  const lastPhotoIndex = apartmentPhotos.length - 1;

  function showPreviousPhoto() {
    setCurrentPhotoIndex((photoIndex) => (photoIndex === 0 ? lastPhotoIndex : photoIndex - 1));
  }

  function showNextPhoto() {
    setCurrentPhotoIndex((photoIndex) => (photoIndex === lastPhotoIndex ? 0 : photoIndex + 1));
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-6" aria-label="Apartment photos">
      <figure className="relative overflow-hidden rounded-lg bg-white/85 shadow">
        <p className="absolute top-0 left-0 right-0 z-10 bg-slate-900/75 px-4 py-3 text-sm text-white">
          {currentPhoto.description}
        </p>
        <Image
          src={currentPhoto.imagePath}
          alt={currentPhoto.description}
          width={1600}
          height={1066}
          className="h-[min(28rem,58vh)] w-full object-cover"
          priority
        />
        <figcaption className="sr-only">{currentPhoto.description}</figcaption>
      </figure>

      <div className="mt-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={showPreviousPhoto}
          className="rounded border border-slate-400 bg-white/90 px-4 py-2 text-sm font-medium text-slate-900"
        >
          Previous photo
        </button>
        <p className="text-sm text-slate-800">
          Photo {currentPhotoIndex + 1} of {apartmentPhotos.length}
        </p>
        <button
          type="button"
          onClick={showNextPhoto}
          className="rounded border border-slate-400 bg-white/90 px-4 py-2 text-sm font-medium text-slate-900"
        >
          Next photo
        </button>
      </div>
    </section>
  );
}
