export default function About({ dict }: { dict: any }) {
  const stats = [
    dict.about.stats.speed,
    dict.about.stats.languages,
    dict.about.stats.delivery,
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="gradient-line mb-32" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <span className="reveal font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
          {dict.about.label}
        </span>

        {/* Heading */}
        <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-12 max-w-3xl">
          {dict.about.heading}
        </h2>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Text */}
          <div className="md:col-span-3 space-y-6">
            <p className="reveal text-muted-light text-base sm:text-lg leading-relaxed">
              {dict.about.p1}
            </p>
            <p className="reveal text-muted-light text-base sm:text-lg leading-relaxed">
              {dict.about.p2}
            </p>
          </div>

          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-1 gap-6">
            {stats.map((stat: any, i: number) => (
              <div
                key={i}
                className="reveal border border-white/5 bg-surface-raised rounded-xl p-6 hover:border-accent/20 transition-colors"
              >
                <div className="font-display text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
