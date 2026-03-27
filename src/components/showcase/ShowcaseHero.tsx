import type { Dictionary } from "@/i18n/types";

export default function ShowcaseHero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-xs text-accent font-mono tracking-wider uppercase">
            {dict.showcase.hero.label}
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
          {dict.showcase.hero.heading}
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted-light text-base sm:text-lg max-w-2xl mx-auto whitespace-pre-line animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {dict.showcase.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
