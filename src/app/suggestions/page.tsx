import { ContentPanel } from "@/components/ContentPanel";
import { PageHeading } from "@/components/PageHeading";
import { madeiraSuggestions } from "@/data/madeiraSuggestions";

export default function SuggestionsPage() {
  return (
    <ContentPanel>
      <PageHeading title="Things to do on Madeira" />
      <ul className="space-y-6">
        {madeiraSuggestions.map((madeiraSuggestion) => (
          <li key={madeiraSuggestion.title}>
            <h2 className="mb-1 text-lg font-semibold text-slate-900">
              {madeiraSuggestion.title}
            </h2>
            <p className="text-slate-800">{madeiraSuggestion.description}</p>
          </li>
        ))}
      </ul>
    </ContentPanel>
  );
}
