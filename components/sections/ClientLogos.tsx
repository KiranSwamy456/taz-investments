const LOGO_ROWS = [
  [
    { name: "TruBuild", className: "text-xl font-bold tracking-tighter" },
    { name: "Orbii.AI", className: "text-xl font-mono tracking-widest uppercase" },
    { name: "GreenForest Solutions", className: "text-xl font-display font-medium" },
    { name: "Maharat", className: "text-xl font-bold" },
    { name: "Manga Productions", className: "text-xl font-serif italic" },
    { name: "HashMyBag", className: "text-xl font-sans font-medium" },
  ],
  [
    { name: "AirMeLive", className: "text-xl font-serif lowercase" },
    { name: "Pluck Fresh", className: "text-xl font-bold tracking-tight" },
    { name: "H.O.P.E", className: "text-xl font-display font-bold" },
    { name: "Markat", className: "text-xl font-sans font-black tracking-tighter uppercase" },
    { name: "Cocoon Nest", className: "text-xl font-medium tracking-tight" },
  ],
  [
    { name: "World Startup Expo", className: "text-xl font-display font-medium" },
    { name: "FASHIONISTAZ", className: "text-xl font-sans font-bold uppercase tracking-wide" },
    { name: "Indoor Farming", className: "text-xl font-serif" },
    { name: "Blockchain", className: "text-xl font-mono tracking-widest" },
    { name: "The Useless Company", className: "text-xl font-display italic" },
  ],
] as const;

export function ClientLogos() {
  return (
    <section className="border-y border-border/50 px-6 py-16 sm:py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-y-8 sm:gap-y-10 md:gap-y-12">
          {LOGO_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 sm:gap-x-8 md:justify-between lg:gap-x-10"
            >
              {row.map((logo) => (
                <span key={logo.name} className={`${logo.className} text-base sm:text-lg md:text-xl`}>
                  {logo.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
