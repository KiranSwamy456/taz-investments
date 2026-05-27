type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section data-scroll-tone className="border-b border-border px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <span className="mb-6 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
