import { SERVICE_EMAIL_ADDRESS, SERVICE_PHONE_NUMBER } from "@/constants/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-slate-300/70 bg-white/80">
      <div className="mx-auto max-w-5xl px-4 py-4 text-sm text-slate-800 flex justify-center">
        <div className="flex gap-2">
          <span className="font-bold">Service contact:</span>
          <span>{SERVICE_PHONE_NUMBER} </span> -{" "}
          <span>{SERVICE_EMAIL_ADDRESS}</span>
        </div>
      </div>
    </footer>
  );
}
