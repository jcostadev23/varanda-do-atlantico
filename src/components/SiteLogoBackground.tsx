import Image from "next/image";

export function SiteLogoBackground() {
  return (
    <div
      className="pointer-events-none flex items-center justify-center"
      aria-hidden="true"
    >
      <Image
        src="/logo.png"
        alt="Varanda do Atlantico Logo"
        width={50}
        height={50}
        priority
      />
    </div>
  );
}
