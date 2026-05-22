export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  metrics: string[];
  tech: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubHref?: string;
  demoHref?: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

