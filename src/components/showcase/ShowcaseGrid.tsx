import type { Dictionary } from "@/i18n/types";
import { showcaseProjects } from "@/data/showcase-projects";
import ShowcaseCard from "./ShowcaseCard";

export default function ShowcaseGrid({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Note */}
        <div className="reveal flex items-center gap-3 mb-10 px-5 py-3.5 rounded-xl border border-accent/10 bg-accent/5 max-w-2xl mx-auto">
          <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-muted-light leading-relaxed">
            {dict.showcase.labels.note}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {showcaseProjects.map((project, i) => {
            const content = dict.showcase.items[project.key];
            return (
              <ShowcaseCard
                key={project.key}
                project={project}
                content={content}
                labels={dict.showcase.labels}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
