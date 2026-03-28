import type { Dictionary } from "@/i18n/types";

export default function ShowcaseCTA({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  return (
    <section className="py-16 md:py-32 relative">
      <div className="gradient-line mb-16 md:mb-32" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {dict.showcase.labels.cta}
          </h2>
          <p className="text-muted-light text-base sm:text-lg leading-relaxed mb-12">
            {dict.showcase.labels.ctaDescription}
          </p>
          <a
            href={`/${locale}#contact`}
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-surface font-medium rounded-lg hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {dict.showcase.labels.ctaButton}
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
        </div>
      </div>
    </section>
  );
}
