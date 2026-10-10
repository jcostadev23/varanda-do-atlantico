import { PageHeading } from "@/components/PageHeading";
import { PhotoCarousel } from "@/components/PhotoCarousel";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-10 text-center sm:px-6 md:py-16">
        <PageHeading title="Your refuge in Ponta do Sol" />
      </section>
      <section className="w-full px-0 sm:px-4">
        <PhotoCarousel />
      </section>
    </main>
  );
}
