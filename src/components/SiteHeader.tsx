import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import { navigationLinks } from "@/data/navigationLinks";
import { SiteLogoBackground } from "./SiteLogoBackground";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-slate-300/70 bg-white/80">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          <div className="flex items-center gap-2">
            <SiteLogoBackground />
            <div className="text-2xl font-bold text-[#BA9D71]">{SITE_NAME}</div>
          </div>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center md:justify-center justify-between gap-x-2 gap-y-2 text-sm font-semibold text-teal">
            {navigationLinks.map((navigationLink) => (
              <li key={navigationLink.href}>
                <Link
                  href={navigationLink.href}
                  aria-label={navigationLink.label}
                  title={navigationLink.label}
                  className="inline-flex items-center gap-2 hover:text-teal-500"
                >
                  <i
                    className={navigationLink.icon}
                    aria-hidden="true"
                    style={{ fontSize: "22px", lineHeight: 1 }}
                  />

                  <span className="hidden sm:inline">
                    {navigationLink.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
