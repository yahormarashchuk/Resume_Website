import type { Article, BudgetOption, Job, NavItem, Project, SocialLink, Stat, Tool } from "@/types/content";

export const navItems: NavItem[] = [
  { label: "Home", href: "#", icon: "home" },
  { label: "Projects", href: "#projects", icon: "folder" },
  { label: "Experience", href: "#experience", icon: "briefcase" },
  { label: "Tools", href: "#tools", icon: "tool" },
  { label: "Thoughts", href: "#blog", icon: "edit" },
];

export const profile = {
  name: "Aaabad Ahmed",
  bio: "A Software Engineer who has developed countless innovative solutions.",
  photo: "/images/profile.jpg",
};

export const profileSocials: SocialLink[] = [
  { label: "Dribbble", href: "https://dribbble.com/", icon: "dribbble" },
  { label: "Twitter", href: "https://twitter.com/", icon: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
];

export const hero = {
  titleSolid: "SOFTWARE",
  titleGhost: "ENGINEER",
  intro:
    "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
};

export const stats: Stat[] = [
  { value: "+12", lines: ["YEARS OF", "EXPERIENCE"] },
  { value: "+46", lines: ["PROJECTS", "COMPLETED"] },
  { value: "+20", lines: ["WORLDWIDE", "CLIENTS"] },
];

export const heroCards = {
  orange: { text: "DYNAMIC ANIMATION, MOTION DESIGN", href: "#experience" },
  lime: { text: "FRAMER, FIGMA, WORDPRESS, REACTJS", href: "#projects" },
};

export const projects: Project[] = [
  { title: "NajmAI", subtitle: "SaaS Framer Template", href: "#projects", image: "/images/project-najmai.jpg" },
  { title: "Damas", subtitle: "Free Framer Template", href: "#projects", image: "/images/project-damas.png" },
  { title: "Majd", subtitle: "Free Portfolio Template", href: "#projects", image: "/images/project-majd.png" },
];

export const jobs: Job[] = [
  {
    company: "PixelForge Studios",
    description:
      "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    period: "Jan 2020 - Present",
  },
  {
    company: "BlueWave Innovators",
    description:
      "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    period: "Jun 2017 - Dec 2019",
  },
  {
    company: "TrendCraft Solutions",
    description:
      "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
    period: "Mar 2015 - May 2017",
  },
];

export const tools: Tool[] = [
  { name: "Framer", category: "Website Builder", href: "https://framer.com", image: "/images/tool-framer.png" },
  { name: "Figma", category: "Design Tool", href: "https://www.figma.com/", image: "/images/tool-figma.png" },
  {
    name: "Lemon Squeezy",
    category: "Payments Provider",
    href: "https://www.lemonsqueezy.com/",
    image: "/images/tool-lemonsqueezy.png",
  },
  { name: "ChatGPT", category: "AI Assistant", href: "https://chat.openai.com/", image: "/images/tool-chatgpt.png" },
  { name: "Notion", category: "Productivity Tool", href: "https://www.notion.so/", image: "/images/tool-notion.png" },
  { name: "Nextjs", category: "React framework", href: "https://nextjs.org/", image: "/images/tool-nextjs.png" },
];

export const articles: Article[] = [
  {
    title: "Starting and Growing a Career in Web Design",
    excerpt:
      "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    readTime: "6min read",
    href: "#blog",
  },
  {
    title: "Create a Landing Page That Performs Great",
    excerpt:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
    date: "Mar 15, 2022",
    readTime: "6min read",
    href: "#blog",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    excerpt:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
    date: "Feb 28, 2022",
    readTime: "6min read",
    href: "#blog",
  },
];

export const budgetOptions: BudgetOption[] = [
  { label: "Select…", value: "" },
  { label: "<$3k", value: "<$3k" },
  { label: "$3k - $5k", value: "$3k - $5k" },
  { label: "$5k - $10k", value: "$5k - $10k" },
  { label: ">$10k", value: ">$10k" },
];

export const footer = {
  madeBy: { label: "Templyo", href: "https://templyo.io/templates" },
  poweredBy: { label: "Framer", href: "https://www.framer.com" },
  socials: [
    { label: "Dribbble", href: "https://dribbble.com/", icon: "dribbble" },
    { label: "Twitter", href: "https://twitter.com/", icon: "twitter" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "Email", href: "mailto:your@email.com", icon: "mail" },
  ] satisfies SocialLink[],
};
