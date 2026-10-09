import { ContentPanel } from "@/components/ContentPanel";
import { PageHeading } from "@/components/PageHeading";
import { localUtilities } from "@/data/localUtilities";

export default function UtilitiesPage() {
  return (
    <ContentPanel>
      <PageHeading title="Nearby places" />
      <ul className="space-y-8">
        {localUtilities.map((localUtilityCategory) => (
          <li key={localUtilityCategory.categoryName}>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              {localUtilityCategory.categoryName}
            </h2>
            <ul className="space-y-3">
              {localUtilityCategory.places.map((localPlace) => (
                <li key={localPlace.name}>
                  <p className="font-medium text-slate-900">{localPlace.name}</p>
                  <p className="text-slate-800">{localPlace.details}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ContentPanel>
  );
}
