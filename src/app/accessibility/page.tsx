import { ContentPanel } from "@/components/ContentPanel";
import { PageHeading } from "@/components/PageHeading";
import { accessibilityGuides } from "@/data/accessibilityGuides";

export default function AccessibilityPage() {
  return (
    <ContentPanel>
      <PageHeading title="How to use the apartment" />
      <ul className="space-y-6">
        {accessibilityGuides.map((accessibilityGuide) => (
          <li key={accessibilityGuide.title}>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">
              {accessibilityGuide.title}
            </h2>
            <ol className="list-decimal space-y-1 pl-5 text-slate-800">
              {accessibilityGuide.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </ContentPanel>
  );
}
