import type { ReactNode } from "react";

type ContentPanelProps = {
  children: ReactNode;
};

export function ContentPanel({ children }: ContentPanelProps) {
  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 py-8">
      <div className="rounded-lg bg-white/90 p-6 shadow">{children}</div>
    </main>
  );
}
