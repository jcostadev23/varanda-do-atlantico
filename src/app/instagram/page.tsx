import { ContentPanel } from "@/components/ContentPanel";
import { PageHeading } from "@/components/PageHeading";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/constants/site";
import { instagramPrompts } from "@/data/instagramInvite";

export default function InstagramPage() {
  return (
    <ContentPanel>
      <PageHeading title="See Madeira through our guests' eyes" />
      <div className="space-y-6 text-slate-800">
        <p>
          Behind every stay at Varanda do Atlantico is a story: the first look
          at the ocean, a walk through Ponta do Sol, a trail that felt like
          another world. Our Instagram page collects those moments so you can
          peek at the island before you arrive — and leave your own mark when
          you go.
        </p>
        <p>
          Follow {INSTAGRAM_HANDLE} to see the apartment, the views, and the
          places guests fall in love with. If something here made you pause —
          the terrace, a sunset, a favourite corner of Madeira — post it and tag
          us. Your photos help the next guest feel the place before they even
          unpack.
        </p>
        <p>
          We read every tag. They are how we learn what you loved, and how the
          page stays alive with real stays instead of staged pictures.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border bg-coral border-white px-4 py-2 text-sm font-medium text-white min-w-40"
        >
          {INSTAGRAM_HANDLE}
        </a>
        <ul className="space-y-6 mt-6">
          {instagramPrompts.map((prompt) => (
            <li key={prompt.title}>
              <h2 className="mb-1 text-lg font-semibold text-slate-900">
                {prompt.title}
              </h2>
              <p>{prompt.description}</p>
            </li>
          ))}
        </ul>
        <p>
          When you post, tag {INSTAGRAM_HANDLE} so we can find your photos and
          share them with other travellers curious about Madeira.
        </p>
      </div>
    </ContentPanel>
  );
}
