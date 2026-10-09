import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import { navigationLinks } from "@/data/navigationLinks";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-slate-300/70 bg-white/80">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          {SITE_NAME}
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-800">
            {navigationLinks.map((navigationLink) => (
              <li key={navigationLink.href}>
                <Link href={navigationLink.href} className="underline-offset-4 hover:underline">
                  {navigationLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
