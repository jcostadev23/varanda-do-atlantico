import { ContentPanel } from "@/components/ContentPanel";
import { PageHeading } from "@/components/PageHeading";
import { madeiraSuggestions } from "@/data/madeiraSuggestions";

export default function SuggestionsPage() {
  return (
    <ContentPanel>
      <PageHeading title="Things to do in Madeira" />
      <ul className="space-y-6">
        {madeiraSuggestions.map((madeiraSuggestion) => (
          <li key={madeiraSuggestion.title} className="md:mb-8">
            <div className="mb-4">
              <h2 className="mb-1 text-lg font-semibold text-slate-900">
                {madeiraSuggestion.title}
              </h2>
              <p className="text-slate-800">{madeiraSuggestion.description}</p>
            </div>

            <a
              rel="noopener noreferrer"
              className="rounded-2xl border bg-coral border-white px-4 py-2 text-sm font-medium text-white min-w-40"
              href={madeiraSuggestion.source.link}
              target="_blank"
            >
              {madeiraSuggestion.source.label}
            </a>
          </li>
        ))}
      </ul>
    </ContentPanel>
  );
}
