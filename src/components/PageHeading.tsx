type PageHeadingProps = {
  title: string;
};

export function PageHeading({ title }: PageHeadingProps) {
  return (
    <h1 className="md:mb-6 text-2xl font-semibold text-slate-900">{title}</h1>
  );
}
