// Shared TypeScript interfaces for portfolio data.
// Single source of truth — components import from here to avoid duplicated types.

export type ProjectStatus = "completed" | "in-progress" | "planned";

export type ProjectCategory =
  | "healthcare"
  | "ai"
  | "product"
  | "tooling";

export type SkillLevel = "expert" | "advanced" | "proficient" | "familiar";

export interface ProjectLink {
  label: string;
  href: string;
  kind?: "live" | "repo" | "demo" | "docs";
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  image?: string;
  year?: string;
  featured?: boolean;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface SkillEntry {
  name: string;
  level: SkillLevel;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  start: string;
  end?: string;
  summary: string[];
  tech: string[];
  featured?: boolean;
}

export interface CodingProfile {
  platform: string;
  handle: string;
  url: string;
  stat?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}