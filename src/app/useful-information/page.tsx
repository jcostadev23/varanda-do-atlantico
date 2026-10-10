import { ContentPanel } from "@/components/ContentPanel";
import { PageHeading } from "@/components/PageHeading";
import { importantInformation } from "@/data/importantInformation";

export default function ImportantInformationPage() {
  return (
    <ContentPanel>
      <PageHeading title="Useful information for a safe and enjoyable stay." />
      <ul className="space-y-6">
        {importantInformation.map((section) => (
          <div>
            <li key={section.title}>
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
                className="text-blue-600 underline hover:text-blue-800"
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
