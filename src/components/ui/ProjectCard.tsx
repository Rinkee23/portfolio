import { motion } from "motion/react";
import type { Project } from "../../data/types";
import { staggerItem } from "../motionVariants";
import { ExternalLink, Github, Code2, Folder } from "lucide-react";

const statusConfig: Record<Project["status"], { label: string; classes: string }> = {
  completed: { label: "Completed", classes: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
  "in-progress": { label: "In Progress", classes: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
  planned: { label: "Planned", classes: "bg-slate-500/10 text-slate-300 border-slate-500/30" },
};

const kindIcon: Record<NonNullable<Project["links"][number]["kind"]>, typeof Folder> = {
  live: ExternalLink,
  repo: Github,
  demo: ExternalLink,
  docs: Code2,
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <motion.article
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`group relative flex flex-col rounded-2xl border bg-card/60 backdrop-blur-md transition-colors hover:border-accent/40 ${
        featured ? "border-accent/30" : "border-border"
      }`}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-accent-2/5 blur-xl" />
      </div>

      <div className="relative flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80">
              <Folder className="h-5 w-5 text-accent-2" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text">{project.name}</h3>
              <span className="text-xs text-text-muted">{project.year}</span>
            </div>
          </div>
          <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${status.classes}`}>
            {status.label}
          </span>
        </div>

        <p className="text-sm font-medium text-accent-2">{project.tagline}</p>
        <p className="text-sm text-text-muted">{project.description}</p>

        <ul className="mt-1 space-y-1.5">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
          {project.links.map((link) => {
            const LinkIcon = kindIcon[link.kind ?? "repo"];
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent-2"
              >
                <LinkIcon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;