import type { Dictionary } from "@/i18n/types";

export default function Hero({ dict, locale }: { dict: Dictionary; locale: string }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-xs text-accent font-mono tracking-wider uppercase">
            Available for work
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
          <span className="text-muted-light font-light">{dict.hero.greeting}</span>
          <br />
          {dict.hero.name}
        </h1>

        {/* Title */}
        <p
          className="font-display text-xl sm:text-2xl md:text-3xl text-accent font-medium mb-6 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {dict.hero.title}
        </p>

        {/* Subtitle */}
        <p
          className="text-muted-light text-base sm:text-lg max-w-2xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {dict.hero.subtitle}
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-surface font-medium rounded-lg hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {dict.hero.cta}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href={`https://www.movatech.org/${locale}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 text-white rounded-lg hover:border-white/30 hover:bg-white/5 transition-all"
          >
            MOVA Tech ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs text-muted font-mono">{dict.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
