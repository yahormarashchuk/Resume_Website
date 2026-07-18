export interface NavItem {
  label: string;
  href: string;
  icon: "home" | "folder" | "briefcase" | "tool" | "edit";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "dribbble" | "twitter" | "instagram" | "youtube" | "linkedin" | "mail";
}

export interface Stat {
  value: string;
  lines: [string, string];
}

export interface Project {
  title: string;
  subtitle: string;
  href: string;
  image: string;
}

export interface Job {
  company: string;
  description: string;
  highlights: string[];
  stack: string[];
  period: string;
}

export interface Tool {
  name: string;
  category: string;
  href: string;
  image: string;
}

export interface Article {
  title: string;
  excerpt: string;
  meta: string;
}
