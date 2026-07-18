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
  bio: "Full-Stack .NET Developer with 4+ years shipping multi-tenant SaaS used by 300+ studios across Europe.",
  photo: "/images/yahor-profile-indigo-v3.webp",
};

export const profileSocials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yahor-marashchuk-63528b377",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:yahormarashchuk@gmail.com", icon: "mail" },
];

export const hero = {
  titleSolid: "FULLSTACK",
  titleGhost: "DEVELOPER",
  intro:
    "I build multi-tenant SaaS on C#, ASP.NET Core, Blazor & Azure — and I ship measurable impact: −40% backend latency, −62% cloud costs, ~75% less manual work through automation.",
};

export const stats: Stat[] = [
  { value: "+4", lines: ["YEARS OF", "EXPERIENCE"] },
  { value: "+300", lines: ["STUDIOS ON MY", "PLATFORM"] },
  { value: "−62%", lines: ["CLOUD COSTS", "DELIVERED"] },
];

export const heroCards = [
  {
    eyebrow: "Availability",
    title: "Open to work",
    icon: "layers",
    href: "#contact",
    tags: ["EU Blue Card", "Germany"],
  },
  {
    eyebrow: "Core stack",
    title: ".NET · Blazor",
    icon: "stack",
    href: "#tools",
    tags: ["PostgreSQL", "Azure"],
  },
  {
    eyebrow: "Driving license",
    title: "Class B",
    icon: "car",
    href: "#contact",
    tags: ["Car licensed"],
  },
  {
    eyebrow: "Based in",
    title: "Bad Waldsee, DE",
    icon: "location",
    href: "#contact",
    tags: ["Remote-friendly"],
  },
] as const;

export const projects: Project[] = [
  {
    title: "Fitness Studio SaaS",
    subtitle: "300+ tenants, thousands of users across Germany, Austria & Poland",
    href: "#projects",
    image: "/images/project-fitness-saas.png",
  },
  {
    title: "SEPA Billing & POS",
    subtitle: "Direct-debit automation & fiscalization — ~75% less manual back-office work",
    href: "#projects",
    image: "/images/project-sepa-pos.png",
  },
  {
    title: "B2B E-Commerce",
    subtitle: "Search re-architecture: 2s → 150ms, PostgreSQL CPU load −40%",
    href: "#projects",
    image: "/images/project-b2b-commerce.png",
  },
];

export const jobs: Job[] = [
  {
    company: "Themisoft GmbH",
    description:
      "Full-Stack .NET Developer on a 10-project ABP platform with 6,800+ C# files, 1,100+ application services, and 580+ EF Core migrations. The SaaS supports 300+ fitness studios and thousands of active users across Germany, Austria, and Poland.",
    highlights: [
      "Own end-to-end delivery across contracts, memberships, SEPA direct debit, payments, Fiskaly POS fiscalization, bookings, campaigns, communications, and studio administration.",
      "Built subdomain-based multi-tenancy, tenant-aware entities, OpenIddict/OIDC flows, JWT issuer validation, and permission-based access; integrated FinAPI, SEPA, Fiskaly, eBrief, and MailKit.",
      "Cut backend response time 40% and increased throughput 35% through EF Core/PostgreSQL optimization; reduced cloud costs ~62% with Redis and Hangfire, and reduced manual work ~75% through Tesseract OCR and document automation.",
      "Maintain 300+ xUnit tests, review pull requests, support production issues, and helped onboard two developers.",
    ],
    stack: ["C#", ".NET 10", "ASP.NET Core", "ABP", "Blazor", "PostgreSQL", "Redis", "Hangfire", "SignalR", "Azure"],
    period: "Dec 2023 - Present",
  },
  {
    company: "EPAM Systems",
    description:
      "Junior .NET Backend Developer on a microservice-based B2B e-commerce platform for a European industrial-equipment distributor, supporting corporate ordering, dynamic pricing, catalog search, inventory, checkout, and order processing.",
    highlights: [
      "Developed REST APIs and backend workflows for Catalog Service, Pricing Engine, Inventory Background Worker, cart, checkout, and order processing using MediatR/CQRS and RabbitMQ.",
      "Moved heavy catalog filtering from EF Core SQL to Elasticsearch with Redis caching, reducing average search latency from 1.5-2 seconds to ~150 ms and PostgreSQL CPU load by 40%.",
      "Resolved inventory race conditions and malformed XML/JSON supplier feeds using Kibana logs; added unit and integration coverage with xUnit, Moq, AutoFixture, and Bogus.",
      "Delivered in Dockerized Azure DevOps CI/CD with AKS and Helm as part of a cross-functional Scrum team.",
    ],
    stack: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL", "CQRS", "RabbitMQ", "Redis", "Elasticsearch", "Docker", "AKS"],
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
    title: "Inside a 300-Tenant SaaS: Lessons from 6,800+ C# Files",
    excerpt:
      "A 10-project modular monolith with 1,100+ application services and 580+ EF Core migrations only stays maintainable through strict boundaries, tenant-aware domain rules, disciplined migrations, and tests that protect business-critical workflows.",
    meta: "Architecture · Production",
  },
  {
    title: "Cutting Cloud Costs 62% with Redis & Hangfire",
    excerpt:
      "Redis-backed caching and distributed locks, combined with consolidated Hangfire workloads and better query shaping, improved throughput by 35% while helping reduce measured cloud infrastructure costs by approximately 62%.",
    meta: "Performance · Production",
  },
  {
    title: "From Paperwork to Workflow: OCR in Production",
    excerpt:
      "Tesseract OCR, barcode and webcam capture, and PDF processing turned repetitive document handling into a reliable workflow. The result was about 75% less manual back-office work without removing human review where it matters.",
    meta: "Automation · Production",
  },
  {
    title: "From 2 Seconds to 150ms: Search Done Right",
    excerpt:
      "Moving filtering and aggregations from EF Core-generated SQL to Elasticsearch, with Redis caching in front, reduced average catalog latency from 1.5-2 seconds to ~150 ms and lowered PostgreSQL CPU load by 40%.",
    meta: "Search · Production",
  },
  {
    title: "Why C# 14 Extension Members Matter",
    excerpt:
      "Extension blocks in .NET 10 go beyond familiar extension methods: they can group behavior and expose extension properties, helping APIs read more naturally while keeping reusable operations organized around the types they extend.",
    meta: ".NET 10 · LinkedIn",
  },
  {
    title: "Practical AI Skills Over Flashy Demos",
    excerpt:
      "The AI tools worth keeping are the ones that improve everyday engineering: clearer reasoning, more predictable output, stronger discipline, and lower token usage. Practicality and repeatability matter more than a one-off impressive demo.",
    meta: "AI Tooling · LinkedIn",
  },
];
