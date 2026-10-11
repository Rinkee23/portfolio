// Technical skills data, grouped by domain for the skills section.

import type { SkillEntry, SkillGroup, SkillLevel } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Motion", "React Router", "HTML5", "CSS3"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "Laravel", "PHP", "REST APIs", "Webhooks", "Authentication", "JWT"],
  },
  {
    name: "Data & Infrastructure",
    items: ["MySQL", "Redis", "REST API design", "System architecture", "Deployment automation", "Cloud infrastructure"],
  },
  {
    name: "Healthcare Domain",
    items: ["Ambulance dispatch", "Radiology booking", "Pathology labs", "Operational dashboards", "HIPAA-aware design", "Clinical data workflows"],
  },
  {
    name: "Emerging",
    items: ["AI voice-call integrations", "AI-assisted workflows", "LLM tooling", "Type-system patterns"],
  },
];

// Detailed skill inventory with proficiency levels for the radar-style breakdown.
export const skills: SkillEntry[] = [
  { name: "React", level: "expert", category: "Frontend" },
  { name: "TypeScript", level: "expert", category: "Frontend" },
  { name: "JavaScript", level: "expert", category: "Frontend" },
  { name: "Tailwind CSS", level: "expert", category: "Frontend" },
  { name: "Node.js", level: "advanced", category: "Backend" },
  { name: "Express.js", level: "advanced", category: "Backend" },
  { name: "Laravel", level: "proficient", category: "Backend" },
  { name: "PHP", level: "proficient", category: "Backend" },
  { name: "REST APIs", level: "expert", category: "Backend" },
  { name: "Webhooks", level: "advanced", category: "Backend" },
  { name: "Authentication", level: "advanced", category: "Backend" },
  { name: "MySQL", level: "advanced", category: "Data" },
  { name: "Redis", level: "familiar", category: "Data" },
  { name: "Motion", level: "proficient", category: "Frontend" },
  { name: "AI Integrations", level: "proficient", category: "Emerging" },
];

export const skillLevels: Record<SkillLevel, number> = {
  expert: 5,
  advanced: 4,
  proficient: 3,
  familiar: 2,
};