// Portfolio project data.
// Healthcare platform experience is the flagship focus; the AI Job Portal is
// tracked as an in-progress project per the user's request.

import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "healthcare-platform",
    name: "Healthcare Operations Platform",
    tagline: "End-to-end operations platform for ambulance, radiology, and pathology services.",
    description:
      "A full-stack healthcare operations platform that coordinates patient logistics across ambulance dispatch, radiology bookings, and pathology labs. The system exposes a REST API layer, enforces authenticated access, and surfaces real-time operational dashboards for clinical and administrative staff.",
    status: "completed",
    category: "healthcare",
    stack: ["React", "TypeScript", "Node.js", "Express.js", "REST APIs", "MySQL", "Tailwind CSS"],
    highlights: [
      "Ambulance dispatch and scheduling workflows with real-time status tracking.",
      "Radiology and pathology booking engines with availability and conflict handling.",
      "Secure REST API surface with token-based authentication and role-based access control.",
      "Operational dashboards for utilization, turnaround times, and fleet performance.",
      "AI voice-call integration for automated patient intake and appointment reminders.",
    ],
    links: [
      { label: "Live Demo", href: "https://example.com/healthcare-platform", kind: "live" },
      { label: "Source", href: "https://github.com/rinkee-kushwaha/healthcare-platform", kind: "repo" },
    ],
    year: "2024",
    featured: true,
  },
  {
    id: "ai-job-portal",
    name: "AI Job Portal & Resume Analyzer",
    tagline: "An AI-powered job board with an automated resume scoring engine.",
    description:
      "A planned-to-in-progress project that pairs a curated job board with an AI resume analyzer. The analyzer parses resumes, scores them against job descriptions, and surfaces match insights to candidates and recruiters alike.",
    status: "in-progress",
    category: "ai",
    stack: ["React", "TypeScript", "Node.js", "Express.js", "REST APIs", "MySQL", "OpenAI API"],
    highlights: [
      "AI-driven resume parsing and job-description matching.",
      "Candidate ranking and recruiter insight dashboards.",
      "RESTful job listing, application, and analytics APIs.",
    ],
    links: [
      { label: "Repo", href: "https://github.com/rinkee-kushwaha/ai-job-portal", kind: "repo" },
    ],
    year: "2025",
    featured: true,
  },
  {
    id: "webhook-relay",
    name: "Webhook Relay & Event Bus",
    tagline: "Reliable webhook ingestion and event distribution for healthcare integrations.",
    description:
      "A backend service that ingests external healthcare events, validates and transforms payloads, and distributes them to downstream consumers with retry and dead-letter handling.",
    status: "completed",
    category: "tooling",
    stack: ["Node.js", "Express.js", "REST APIs", "MySQL", "Redis"],
    highlights: [
      "Idempotent webhook ingestion with signature verification.",
      "Configurable routing and retry policies per event type.",
      "Dead-letter queue and replay tooling for failed deliveries.",
    ],
    links: [{ label: "Source", href: "https://github.com/rinkee-kushwaha/webhook-relay", kind: "repo" }],
    year: "2023",
  },
  {
    id: "auth-security-toolkit",
    name: "Authentication Security Toolkit",
    tagline: "Reusable toolkit for hardening auth across Node.js services.",
    description:
      "A collection of authentication and security primitives — token rotation, refresh-token management, and request validation — extracted from production healthcare work and reused across services.",
    status: "completed",
    category: "tooling",
    stack: ["Node.js", "TypeScript", "Express.js", "JWT"],
    highlights: [
      "Token rotation with refresh-token reuse detection.",
      "Pluggable validation middleware for auth payloads.",
      "Audit logging hooks for sensitive operations.",
    ],
    links: [{ label: "Source", href: "https://github.com/rinkee-kushwaha/auth-security-toolkit", kind: "repo" }],
    year: "2023",
  },
  {
    id: "dashboard-suite",
    name: "Analytics Dashboard Suite",
    tagline: "Modular dashboards for operational and clinical metrics.",
    description:
      "A reusable dashboard shell built with React and Tailwind CSS, wired to backend analytics endpoints. Designed for healthcare utilization metrics but general enough for any operational domain.",
    status: "completed",
    category: "product",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Modular widget system with drag-and-drop layout persistence.",
      "Real-time metric streaming over WebSocket connections.",
      "Responsive, accessible charting components.",
    ],
    links: [{ label: "Live Demo", href: "https://example.com/dashboard-suite", kind: "live" }],
    year: "2024",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);