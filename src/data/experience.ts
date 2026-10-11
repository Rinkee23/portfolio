// Professional experience data.

import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "healthcare-tech",
    role: "Full-Stack Developer",
    company: "Healthcare Technology Partner",
    location: "India (Remote)",
    start: "2022",
    summary: [
      "Engineered a full-stack healthcare operations platform coordinating ambulance dispatch, radiology, and pathology bookings.",
      "Designed and secured REST APIs serving clinical and administrative clients, with token-based auth and role-based access control.",
      "Integrated AI voice-call services for automated patient intake and appointment reminders.",
      "Built operational dashboards tracking utilization, turnaround times, and fleet performance.",
      "Introduced webhook-based event distribution with retry and dead-letter handling for external integrations.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express.js", "REST APIs", "MySQL", "Tailwind CSS", "AI voice-call APIs"],
    featured: true,
  },
  {
    id: "web-platform",
    role: "React Developer",
    company: "Web Platform Agency",
    location: "India",
    start: "2020",
    end: "2022",
    summary: [
      "Delivered client-facing React applications with TypeScript and Tailwind CSS.",
      "Built and consumed REST APIs and webhooks across multiple integrations.",
      "Collaborated on authentication flows and secure session management.",
    ],
    tech: ["React", "TypeScript", "JavaScript", "REST APIs", "Webhooks", "Authentication"],
  },
  {
    id: "php-laravel",
    role: "Backend Developer",
    company: "SaaS Product Company",
    location: "India",
    start: "2018",
    end: "2020",
    summary: [
      "Developed backend services with Laravel and PHP for a multi-tenant SaaS product.",
      "Designed MySQL schemas and optimized slow queries for high-traffic endpoints.",
      "Authored REST APIs consumed by internal dashboards and mobile clients.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "REST APIs"],
  },
];

export const featuredExperience = experience.filter((e) => e.featured);