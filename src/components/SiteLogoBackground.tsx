import Image from "next/image";

export function SiteLogoBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={720}
        height={720}
        className="h-auto w-[min(72vw,36rem)] opacity-20"
        priority
      />
    </div>
  );
}
