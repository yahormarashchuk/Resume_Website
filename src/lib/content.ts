import type { Article, Job, NavItem, Project, SocialLink, Stat, Tool } from "@/types/content";

export const navItems: NavItem[] = [
  { label: "Home", href: "#", icon: "home" },
  { label: "Projects", href: "#projects", icon: "folder" },
  { label: "Experience", href: "#experience", icon: "briefcase" },
  { label: "Tools", href: "#tools", icon: "tool" },
  { label: "Thoughts", href: "#blog", icon: "edit" },
];

export const profile = {
  name: "Yahor Marashchuk",
  bio: "A Full-Stack .NET Developer building multi-tenant SaaS used by 300+ studios across Europe.",
  photo: "/images/profile.jpg",
};

export const profileSocials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yahor-marashchuk", icon: "linkedin" },
  { label: "Email", href: "mailto:yahormarashchuk@gmail.com", icon: "mail" },
];

export const hero = {
  titleSolid: "FULLSTACK",
  titleGhost: "DEVELOPER",
  intro:
    "Passionate about building multi-tenant SaaS and enterprise web applications with C#, ASP.NET Core, Blazor, and Azure.",
};

export const stats: Stat[] = [
  { value: "+4", lines: ["YEARS OF", "EXPERIENCE"] },
  { value: "+300", lines: ["STUDIOS", "SERVED"] },
  { value: "+1000", lines: ["ACTIVE", "USERS"] },
];

export const heroCards = {
  orange: { text: "MULTI-TENANT SAAS, CLEAN ARCHITECTURE", href: "#experience" },
  lime: { text: ".NET, BLAZOR, POSTGRESQL, AZURE", href: "#projects" },
};

export const projects: Project[] = [
  {
    title: "Fitness Studio SaaS",
    subtitle: "Multi-tenant ABP platform for 300+ studios",
    href: "#projects",
    image: "/images/project-fitness-saas.png",
  },
  {
    title: "SEPA Billing & POS",
    subtitle: "Direct-debit runs & Fiskaly fiscalization",
    href: "#projects",
    image: "/images/project-sepa-pos.png",
  },
  {
    title: "B2B E-Commerce",
    subtitle: "Catalog search, pricing & checkout APIs",
    href: "#projects",
    image: "/images/project-b2b-commerce.png",
  },
];

export const jobs: Job[] = [
  {
    company: "Themisoft GmbH",
    description:
      "Core engineer on a multi-tenant ABP fitness platform serving 300+ studios — SEPA billing, OIDC security, OCR automation, and real-time features. Cut backend latency 40% and infrastructure cost 62%.",
    period: "Dec 2023 - Present",
  },
  {
    company: "EPAM Systems",
    description:
      "Built backend services and REST APIs for a B2B e-commerce platform with CQRS, RabbitMQ, and Elasticsearch — cutting search latency from 2s to 150ms.",
    period: "May 2021 - Aug 2022",
  },
];

export const tools: Tool[] = [
  { name: "C#", category: "Language", href: "https://learn.microsoft.com/dotnet/csharp/", image: "/images/tool-csharp.png" },
  { name: ".NET", category: "Backend Framework", href: "https://dotnet.microsoft.com/", image: "/images/tool-dotnet.png" },
  { name: "Blazor", category: "Frontend Framework", href: "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor", image: "/images/tool-blazor.png" },
  { name: "TypeScript", category: "Language", href: "https://www.typescriptlang.org/", image: "/images/tool-typescript.png" },
  { name: "PostgreSQL", category: "Database", href: "https://www.postgresql.org/", image: "/images/tool-postgresql.png" },
  { name: "Redis", category: "Caching & Locks", href: "https://redis.io/", image: "/images/tool-redis.png" },
  { name: "Elasticsearch", category: "Search Engine", href: "https://www.elastic.co/elasticsearch", image: "/images/tool-elasticsearch.png" },
  { name: "RabbitMQ", category: "Messaging", href: "https://www.rabbitmq.com/", image: "/images/tool-rabbitmq.png" },
  { name: "Docker", category: "Containers", href: "https://www.docker.com/", image: "/images/tool-docker.png" },
  { name: "Kubernetes", category: "Orchestration", href: "https://kubernetes.io/", image: "/images/tool-kubernetes.png" },
  { name: "Azure", category: "Cloud & DevOps", href: "https://azure.microsoft.com/", image: "/images/tool-azure.png" },
  { name: "Git", category: "Version Control", href: "https://git-scm.com/", image: "/images/tool-git.png" },
];

export const articles: Article[] = [
  {
    title: "Taming a 6,800-File ABP Codebase",
    excerpt:
      "Working across 1,100+ application services teaches you discipline: strict layering, tenant-aware entities, and migrations you can trust. Here is what keeps a large modular monolith maintainable.",
    date: "Mar 12, 2026",
    readTime: "6min read",
    href: "#blog",
  },
  {
    title: "Cutting Cloud Costs 62% with Redis & Hangfire",
    excerpt:
      "Distributed caching, distributed locks, and consolidated background jobs did more for our Azure bill than any instance right-sizing. A practical walkthrough of what moved the needle.",
    date: "Jan 20, 2026",
    readTime: "5min read",
    href: "#blog",
  },
  {
    title: "From 2 Seconds to 150ms: Search Done Right",
    excerpt:
      "Moving heavy catalog filtering out of EF Core SQL into Elasticsearch with a Redis cache in front reduced search latency by an order of magnitude and cut PostgreSQL CPU load 40%.",
    date: "Nov 4, 2025",
    readTime: "5min read",
    href: "#blog",
  },
];

