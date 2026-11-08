import { SERVICE_EMAIL_ADDRESS, SERVICE_PHONE_NUMBER } from "@/constants/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-slate-300/70 bg-teal">
      <div className="mx-auto max-w-5xl px-4 py-4 text-sm font-semibold text-white flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="font-bold">Service contact:</span>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${SERVICE_PHONE_NUMBER.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="inline-flex items-center gap-2 hover:text-[#BA9D71]"
          >
            <i className="fi fi-brands-whatsapp" aria-hidden="true" />
            <span>{SERVICE_PHONE_NUMBER}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${SERVICE_EMAIL_ADDRESS}`}
            aria-label="Send us an email"
            className="inline-flex items-center gap-2 hover:text-[#BA9D71]"
          >
            <i className="fi fi-rr-envelope" aria-hidden="true" />
            <span>{SERVICE_EMAIL_ADDRESS}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
