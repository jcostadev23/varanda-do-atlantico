import { ContentPanel } from "@/components/ContentPanel";
import { PageHeading } from "@/components/PageHeading";
import { UsefulInformation } from "@/data/usefulInformation";

export default function UsefulInformationPage() {
  console.log("Estou aki dentro");
  return (
    <ContentPanel>
      <PageHeading title="Useful information for a safe and enjoyable stay." />
      <ul className="space-y-6">
        {UsefulInformation.map((section) => (
          <div>
            <li key={section.title} className="mb-6">
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                {section.title}
              </h2>
              <ol className="list-decimal space-y-1 pl-5 text-slate-800">
                {section.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ol>
            </li>
            {section.source && (
              <a
                href={section.source.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border bg-coral border-white px-4 py-2 text-sm font-medium text-white min-w-40"
              >
                {section.source.label}
              </a>
            )}
          </div>
        ))}
      </ul>
    </ContentPanel>
  );
}
