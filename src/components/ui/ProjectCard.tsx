import { motion, useMotionValue, useTransform } from "motion/react";
import type { Project } from "../../data/types";
import { staggerItem } from "../motionVariants";
import { Folder, ExternalLink, Code2 } from "lucide-react";
import { Github } from "./Icons";
import type { ComponentType, SVGProps } from "react";

const statusConfig: Record<Project["status"], { label: string; classes: string }> = {
  completed: { label: "Completed", classes: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
  "in-progress": { label: "In Progress", classes: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
  planned: { label: "Planned", classes: "bg-slate-500/10 text-slate-300 border-slate-500/30" },
};

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const kindIcon: Record<NonNullable<Project["links"][number]["kind"]>, IconComponent> = {
  live: ExternalLink,
  repo: Github,
  demo: ExternalLink,
  docs: Code2,
};

const categoryIcons: Record<Project["category"], IconComponent> = {
  healthcare: Folder,
  ai: Code2,
  product: Folder,
  tooling: Code2,
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const CategoryIcon = categoryIcons[project.category] ?? Folder;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 0, 50], [10, 0, -10]);
  const rotateY = useTransform(x, [-50, 0, 50], [-10, 0, 10]);

  return (
    <motion.article
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`group relative flex flex-col rounded-2xl border bg-card/60 backdrop-blur-md transition-colors hover:border-accent/40 ${
        featured ? "border-accent/30" : "border-border"
      }`}
      style={{ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-accent-2/5 blur-xl" />
      </div>

      {/* Image/Thumbnail */}
      {project.image && (
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <motion.img
            src={project.image}
            alt={`${project.name} preview`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${status.classes}`}>
              {status.label}
            </span>
            {featured && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-300">
                Featured
              </span>
            )}
          </div>
        </div>
      )}

      <div className="relative flex flex-1 flex-col gap-4 p-6">
        {!project.image && (
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80">
                <CategoryIcon className="h-5 w-5 text-accent-2" />
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
        )}

        {project.image && (
          <div className="flex items-center gap-3 pt-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80">
              <CategoryIcon className="h-5 w-5 text-accent-2" />
            </div>
            <div>
              <span className="text-xs text-text-muted">{project.year}</span>
            </div>
          </div>
        )}

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