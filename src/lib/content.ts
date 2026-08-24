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
  bio: "Backend .NET Developer with 4+ years building production SaaS for 300+ studios across Europe.",
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
  titleSolid: "BACKEND",
  titleGhost: "DEVELOPER",
  intro:
    "I build multi-tenant .NET SaaS backends for payments, German compliance, and production traffic — with measured results: −40% response time, +35% throughput, −62% compute cost.",
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
    title: ".NET · ASP.NET Core",
    icon: "stack",
    href: "#tools",
    tags: ["PostgreSQL", "Redis"],
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
    subtitle: "300+ studios and 2,000-5,000 active users across Germany, Austria & Poland",
    href: "#projects",
    image: "/images/project-fitness-saas.png",
  },
  {
    title: "SEPA Billing & POS",
    subtitle: "SEPA pain.008, PSD2 banking & KassenSichV-compliant POS workflows",
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
      "Backend Developer (.NET) / Full-Stack on an ABP-based multi-tenant SaaS used by 300+ fitness studios and 2,000-5,000 active users across Germany, Austria, and Poland.",
    highlights: [
      "Designed and shipped backend modules for contracts, memberships, SEPA direct debit, payments, POS/accounting, bookings, campaigns, communications, and studio administration.",
      "Implemented subdomain tenant resolution, tenant-aware entities and filters, permission-based authorization, OpenIddict/OIDC, JWT, and cookie/bearer authentication.",
      "Integrated FinAPI/PSD2, SEPA pain.008, Fiskaly TSE for KassenSichV/GoBD-compliant receipts, eBrief, and MailKit with secure tokens, callback validation, idempotency, and retry/backoff policies.",
      "Improved response time 40% and throughput 35% through EF Core/PostgreSQL optimization; cut background-processing compute cost ~62% with Redis locks, Hangfire consolidation, and queue partitioning.",
      "Built OCR and document-scanning workflows that reduced manual back-office work ~75%; handled incidents, hotfixes, data-integrity checks, tests, code reviews, and onboarding for two developers.",
    ],
    stack: ["C#", ".NET 8/9", "ASP.NET Core", "ABP", "EF Core", "PostgreSQL", "Redis", "Hangfire", "SignalR", "Azure"],
    period: "Dec 2023 - Aug 2026",
  },
  {
    company: "EPAM Systems",
    description:
      "Junior .NET Backend Developer on a microservice-based B2B e-commerce platform for a European industrial-equipment distributor, supporting corporate ordering, dynamic pricing, catalog search, inventory, checkout, and order processing.",
    highlights: [
      "Developed REST APIs and backend workflows for Catalog Service, Pricing Engine, Inventory Background Worker, cart, checkout, order processing, and inventory synchronization.",
      "Owned a high-load pricing endpoint used on every cart update and catalog search with filtering, pagination, and aggregations.",
      "Moved heavy catalog filtering from EF Core SQL to Elasticsearch with Redis caching, reducing average search latency from 1.5-2 seconds to ~150 ms and PostgreSQL CPU load by 40%.",
      "Diagnosed an inventory-deduction race condition and malformed XML/JSON supplier feeds through Kibana; added unit and integration coverage with xUnit, Moq, AutoFixture, and Bogus.",
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
    title: "Building Backends for 300+ SaaS Tenants",
    excerpt:
      "Subdomain tenant resolution, tenant-aware entities and global filters, permission-based access, and issuer validation must work together so every request reaches the right studio and the right data.",
    meta: "Multi-Tenancy · Production",
  },
  {
    title: "Reliable SEPA, PSD2 & German POS Integrations",
    excerpt:
      "Payment and compliance integrations need more than a successful HTTP call: secure token handling, callback signatures, idempotency keys, retry policies, auditability, and careful handling of financial data.",
    meta: "Payments · Compliance",
  },
  {
    title: "40% Faster EF Core & PostgreSQL Workloads",
    excerpt:
      "Covering indexes, projections, split queries, N+1 elimination, and EXPLAIN ANALYZE-driven query shaping reduced measured response time by 40% and increased throughput by 35%.",
    meta: "Data · Performance",
  },
  {
    title: "Cutting Background Compute Cost by 62%",
    excerpt:
      "Redis distributed locking, Hangfire job consolidation, and queue partitioning reduced duplicate work and helped cut compute cost for the background-processing workload by approximately 62%.",
    meta: "Distributed Systems · Production",
  },
  {
    title: "From 2 Seconds to 150ms: Search Done Right",
    excerpt:
      "Moving filtering and aggregations from EF Core-generated SQL to Elasticsearch, with Redis caching in front, reduced average catalog latency from 1.5-2 seconds to ~150 ms and lowered PostgreSQL CPU load by 40%.",
    meta: "Search · Production",
  },
  {
    title: "Deepening Observability & AI in .NET",
    excerpt:
      "Currently exploring .NET Aspire and OpenTelemetry for observable distributed systems, plus Semantic Kernel, Azure OpenAI, and pgvector-backed RAG for practical LLM integration in .NET applications.",
    meta: "Currently Learning",
  },
];
