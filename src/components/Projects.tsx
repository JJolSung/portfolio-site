import type { Dictionary } from '@/i18n/types';

export default function Projects({ dict }: { dict: Dictionary }) {
  const projects = [
    { key: 'MUSUBEE', icon: '📱' },
    { key: 'movatech', icon: '🌐' },
    { key: 'lohas', icon: '🏨' },
  ];

  return (
    <section id='projects' className='py-32 relative'>
      <div className='gradient-line mb-32' />
      <div className='max-w-6xl mx-auto px-6'>
        <span className='reveal font-mono text-xs text-accent tracking-widest uppercase mb-4 block'>
          {dict.projects.label}
        </span>
        <h2 className='reveal font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-16 max-w-3xl'>
          {dict.projects.heading}
        </h2>

        <div className='space-y-6'>
          {projects.map((project, i) => {
            const data = dict.projects.items[project.key];
            return (
              <div
                key={project.key}
                className='reveal group border border-white/5 bg-surface-raised rounded-2xl p-8 sm:p-10 hover:border-accent/20 transition-all duration-300'
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className='flex flex-col lg:flex-row lg:items-start gap-6'>
                  {/* Icon + Title */}
                  <div className='flex-1'>
                    <div className='flex items-center gap-4 mb-3'>
                      <span className='text-3xl'>{project.icon}</span>
                      <div>
                        <h3 className='font-display text-xl sm:text-2xl font-semibold text-white group-hover:text-accent transition-colors'>
                          {data.title}
                        </h3>
                        <p className='text-sm text-muted'>{data.subtitle}</p>
                      </div>
                    </div>

                    <p className='text-muted-light text-base leading-relaxed mt-4 max-w-2xl'>
                      {data.description}
                    </p>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 mt-6'>
                      {data.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className='text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-muted-light bg-surface'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  {data.link && (
                    <a
                      href={data.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='shrink-0 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dim transition-colors mt-2 lg:mt-0'
                    >
                      <span className='font-mono'>Visit</span>
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M7 17L17 7M17 7H7M17 7v10'
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
