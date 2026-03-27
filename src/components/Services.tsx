const serviceIcons: Record<string, string> = {
  webapp: "⚡",
  mobile: "📲",
  ai: "🤖",
  landing: "🚀",
};

import type { Dictionary } from "@/i18n/types";

export default function Services({ dict }: { dict: Dictionary }) {
  const serviceKeys = ["webapp", "mobile", "ai", "landing"];

  return (
    <section id="services" className="py-32 relative">
      <div className="gradient-line mb-32" />
      <div className="max-w-6xl mx-auto px-6">
        <span className="reveal font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
          {dict.services.label}
        </span>
        <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-16 max-w-3xl">
          {dict.services.heading}
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {serviceKeys.map((key, i) => {
            const service = dict.services.items[key];
            return (
              <div
                key={key}
                className="reveal group relative border border-white/5 bg-surface-raised rounded-2xl p-8 hover:border-accent/20 transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-500 rounded-2xl" />

                <div className="relative">
                  {/* Icon + Timeline */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-3xl">{serviceIcons[key]}</span>
                    <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {service.timeline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
