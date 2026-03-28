"use client";

import { useRef, useEffect } from "react";
import type { ShowcaseProject } from "@/data/showcase-projects";

interface ShowcaseCardProps {
  project: ShowcaseProject;
  content: {
    title: string;
    type: string;
    description: string;
    tags: string[];
  };
  labels: {
    price: string;
    buildTime: string;
    demo: string;
    github: string;
  };
  index: number;
}

export default function ShowcaseCard({
  project,
  content,
  labels,
  index,
}: ShowcaseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (!isTouchDevice || !cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("card-centered", entry.isIntersecting);
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal group relative"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Glow effect on hover */}
      <div
        className={`card-glow absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 [@media(hover:hover)]:group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10 will-change-[opacity,filter] [transform:translateZ(0)]`}
      />

      {/* Gradient border */}
      <div
        className={`card-glow absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Card content */}
      <div className="card-body relative bg-surface-raised rounded-2xl p-8 border border-white/5 group-hover:border-transparent transition-colors duration-500">
        {/* Header: type badge + icon */}
        <div className="flex items-start justify-between mb-5">
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-light border border-white/10 px-2.5 py-1 rounded-md">
            {content.type}
          </span>
          <span className="text-3xl">{project.icon}</span>
        </div>

        {/* Title */}
        <h3 className="card-title font-display text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {content.title}
        </h3>

        {/* Description */}
        <p className="text-base text-muted-light leading-relaxed mb-6">
          {content.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-muted-light bg-surface hover:border-white/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-1.5 font-mono text-base text-accent bg-accent/10 px-3 py-1.5 rounded-full">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {project.priceRange}
          </div>
          <div className="flex items-center gap-1.5 font-mono text-base text-muted-light border border-white/10 px-3 py-1.5 rounded-full">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {project.buildTime}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-surface text-base font-medium rounded-lg hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {labels.demo}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-white text-base rounded-lg hover:border-white/30 hover:bg-white/5 transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {labels.github}
          </a>
        </div>
      </div>
    </div>
  );
}
