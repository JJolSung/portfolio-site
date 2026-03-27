export interface Dictionary {
  nav: {
    about: string;
    projects: string;
    services: string;
    contact: string;
    showcase: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
    scroll: string;
  };
  about: {
    label: string;
    heading: string;
    p1: string;
    p2: string;
    stats: {
      speed: { value: string; label: string };
      languages: { value: string; label: string };
      delivery: { value: string; label: string };
    };
  };
  techStack: {
    label: string;
    heading: string;
  };
  projects: {
    label: string;
    heading: string;
    items: Record<
      string,
      {
        title: string;
        subtitle: string;
        description: string;
        link?: string;
        tags: string[];
      }
    >;
  };
  services: {
    label: string;
    heading: string;
    note: string;
    showcaseLink: string;
    items: Record<
      string,
      {
        title: string;
        description: string;
        timeline: string;
      }
    >;
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    email: string;
    portfolio: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  showcase: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      label: string;
      heading: string;
      subtitle: string;
    };
    labels: {
      price: string;
      buildTime: string;
      note: string;
      demo: string;
      github: string;
      cta: string;
      ctaDescription: string;
    };
    items: Record<
      string,
      {
        title: string;
        type: string;
        description: string;
        tags: string[];
      }
    >;
  };
}
