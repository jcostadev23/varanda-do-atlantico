import { SERVICE_EMAIL_ADDRESS, SERVICE_PHONE_NUMBER } from "@/constants/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-slate-300/70 bg-white/80">
      <p className="mx-auto max-w-5xl px-4 py-4 text-sm text-slate-800">
        Service contact: {SERVICE_PHONE_NUMBER} · {SERVICE_EMAIL_ADDRESS}
      </p>
    </footer>
  );
}
