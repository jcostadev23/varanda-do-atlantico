import { ContentPanel } from "@/components/ContentPanel";
import { PageHeading } from "@/components/PageHeading";
import { localUtilities } from "@/data/localUtilities";

export default function UtilitiesPage() {
  return (
    <ContentPanel>
      <PageHeading title="Nearby places" />
      <ul className="space-y-8">
        {localUtilities.map((utility) => (
          <a
            key={`${utility.category}-${utility.name}`}
            href={utility.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            <h3 className="font-semibold text-slate-900">{utility.name}</h3>
            <p className="text-sm text-slate-500">{utility.location}</p>
            <p className="mt-2 text-sm text-slate-700">{utility.description}</p>
          </a>
        ))}
      </ul>
    </ContentPanel>
  );
}
