export interface ShowcaseProject {
  key: string;
  githubUrl: string;
  demoUrl: string | null;
  priceRange: string;
  buildTime: string;
  icon: string;
  gradient: string;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    key: 'ai-customer-chatbot',
    githubUrl: 'https://github.com/JJolSung/ai-customer-chatbot',
    demoUrl: 'https://ai-customer-chatbot-demo.vercel.app',
    priceRange: '$300 ~ $2,000',
    buildTime: '1~2 days',
    icon: '🤖',
    gradient: 'from-violet-500/50 via-purple-500/50 to-fuchsia-500/50',
  },
  {
    key: 'landing-page-templates',
    githubUrl:
      'https://github.com/JJolSung/landing-page-templates?tab=readme-ov-file',
    demoUrl: 'https://landing-page-templates-three.vercel.app/',
    priceRange: '$200 ~ $2,000',
    buildTime: '1 day',
    icon: '🚀',
    gradient: 'from-cyan-500/50 via-sky-500/50 to-blue-500/50',
  },
  {
    key: 'business-dashboard',
    githubUrl: 'https://github.com/JJolSung/business-dashboard',
    demoUrl: 'https://business-dashboard-demo.vercel.app',
    priceRange: '$500 ~ $5,000',
    buildTime: '2~3 days',
    icon: '📊',
    gradient: 'from-emerald-500/50 via-green-500/50 to-teal-500/50',
  },
  {
    key: 'workflow-automation',
    githubUrl: 'https://github.com/JJolSung/workflow-automation',
    demoUrl: 'https://workflow-automation-demo.vercel.app',
    priceRange: '$300 ~ $3,000',
    buildTime: '1~2 days',
    icon: '⚡',
    gradient: 'from-amber-500/50 via-orange-500/50 to-yellow-500/50',
  },
  {
    key: 'saas-starter-kit',
    githubUrl: 'https://github.com/JJolSung/saas-starter-kit',
    demoUrl: 'https://saas-starter-kit-demo.vercel.app',
    priceRange: '$2,000 ~ $15,000',
    buildTime: '3~4 days',
    icon: '🏗️',
    gradient: 'from-rose-500/50 via-pink-500/50 to-red-500/50',
  },
  {
    key: 'booking-management-app',
    githubUrl: 'https://github.com/JJolSung/booking-management-app',
    demoUrl: null,
    priceRange: '$1,000 ~ $10,000',
    buildTime: '3~4 days',
    icon: '📱',
    gradient: 'from-indigo-500/50 via-blue-500/50 to-violet-500/50',
  },
];
