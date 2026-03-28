import Link from "next/link";
import type { Dictionary } from "@/i18n/types";
import { showcaseProjects } from "@/data/showcase-projects";

export default function ShowcasePreview({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const previewProjects = showcaseProjects.slice(0, 4);

  return (
    <section id="showcase" className="py-16 md:py-32 relative">
      <div className="gradient-line mb-16 md:mb-32" />
      <div className="max-w-6xl mx-auto px-6">
        <span className="reveal font-mono text-base text-accent tracking-widest uppercase mb-4 block">
          {dict.showcasePreview.label}
        </span>
        <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
          {dict.showcasePreview.heading}
        </h2>
        <p className="reveal text-muted-light text-base sm:text-lg leading-relaxed mb-16 max-w-2xl">
          {dict.showcasePreview.description}
        </p>

        {/* Project preview grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {previewProjects.map((project, i) => {
            const content = dict.showcase.items[project.key];
            return (
              <div
                key={project.key}
                className="reveal group relative rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                />

                <div className="relative p-6 sm:p-8 text-center">
                  <span className="text-4xl block mb-4">{project.icon}</span>
                  <h3 className="font-display text-base font-semibold text-white group-hover:text-accent transition-colors">
                    {content.title}
                  </h3>
                  <span className="font-mono text-[10px] text-muted-light mt-2 block">
                    {content.type}
                  </span>
                </div>

                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-white/20 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <Link
            href={`/${locale}/showcase`}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-surface font-medium rounded-lg hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {dict.showcasePreview.cta}
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
          </Link>
        </div>
      </div>
    </section>
  );
}
