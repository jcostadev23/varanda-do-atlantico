import { PhotoCarousel } from "@/components/PhotoCarousel";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-10 text-center sm:px-6 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          O seu refugio na Ponta do Sol
        </h2>
      </section>
      <section className="w-full px-0 sm:px-4">
        <PhotoCarousel />
      </section>
    </main>
  );
}
