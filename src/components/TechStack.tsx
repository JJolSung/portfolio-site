const techCategories = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "Flutter", "TypeScript", "Tailwind CSS", "Dart"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "Deno", "Hono", "PostgreSQL", "Prisma"],
  },
  {
    label: "Cloud & Infra",
    items: ["Supabase", "Firebase", "Cloudflare", "AWS", "Vercel", "LangChain"],
  },
  {
    label: "Tools",
    items: ["Claude Code", "Figma", "Git", "Sentry"],
  },
];

import type { Dictionary } from "@/i18n/types";

export default function TechStack({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-16 md:py-32 relative">
      <div className="gradient-line mb-16 md:mb-32" />
      <div className="max-w-6xl mx-auto px-6">
        <span className="reveal font-mono text-base text-accent tracking-widest uppercase mb-4 block">
          {dict.techStack.label}
        </span>
        <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-16 max-w-3xl">
          {dict.techStack.heading}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((cat, i) => (
            <div key={cat.label} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <h3 className="font-mono text-base text-muted tracking-widest uppercase mb-4">
                {cat.label}
              </h3>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-lg border border-white/5 bg-surface-raised hover:border-accent/30 hover:bg-accent/5 transition-all cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted group-hover:bg-accent transition-colors" />
                    <span className="text-base text-muted-light group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
