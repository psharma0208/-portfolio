import type { ExperienceItem, NavItem, ProjectItem, SkillCategory, SocialLink } from "./types";

export const site = {
  name: "Prashant Kumar Sharma",
  role: "Java Backend Developer",
  experienceLabel: "2+ Years Experience",
  company: "Entire Techno Solution",
  location: "India",
  phoneDisplay: "+91 9798450952",
  phoneHref: "tel:+919798450952",
  email: "pkumarsharma9262@gmail.com",
  emailHref: "mailto:pkumarsharma9262@gmail.com",
  linkedin: "https://linkedin.com/in/psharma0208",
  github: "https://github.com/psharma0208",
  resumeHref: "/resume.pdf",
  ogImage: "/og.svg",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Ready", href: "#ai" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  { label: "Email", href: site.emailHref },
];

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    skills: ["Java", "Spring Boot", "Spring Security", "JWT", "REST APIs"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "JSP", "jQuery"],
  },
  { category: "Database", skills: ["MySQL", "Redis"] },
  { category: "Cloud & DevOps", skills: ["AWS", "Docker", "CI/CD", "Vercel"] },
  { category: "AI", skills: ["OpenAI API", "Prompt Engineering", "AI Integration"] },
];

export const experience: ExperienceItem[] = [
  {
    company: "Entire Techno Solution",
    role: "Java Backend Developer",
    location: "India",
    start: "2023",
    end: "Present",
    highlights: [
      "Built and maintained production-grade backend services for education platforms.",
      "Designed REST APIs with secure authentication/authorization and clear versioning.",
      "Improved database queries and endpoints for reliability under real traffic.",
      "Collaborated with frontend and QA to ship stable releases and reduce regressions.",
    ],
    metrics: ["Production-grade systems", "Scalable API design", "Performance-focused improvements"],
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "REST APIs"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "International Schooling",
    description:
      "School ERP platform featuring payments, reporting, and robust backend APIs supporting daily operations.",
    highlights: ["School ERP", "Payment gateway integration", "Reporting system", "REST APIs"],
    tech: ["Spring Boot", "MySQL", "JSP", "Java"],
  },
  {
    name: "K8 Schooling",
    description:
      "Education management platform with authentication, role-based access, and admin-focused workflows.",
    highlights: ["Authentication", "Role-based access", "Admin dashboard", "REST APIs"],
    tech: ["Java", "REST APIs", "MySQL"],
  },
  {
    name: "Seri India",
    description:
      "Production-grade education platform focused on backend architecture, database optimization, and stability.",
    highlights: ["Backend architecture", "Database optimization", "Production stability"],
    tech: ["Spring Boot", "JavaScript", "MySQL"],
  },
];
