import { motion } from "motion/react";
import type { Experience } from "../../data/types";
import { staggerItem } from "../motionVariants";
import { Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const dateRange = experience.end ? `${experience.start} – ${experience.end}` : `${experience.start} – Present`;

  return (
    <motion.article
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-md transition-colors hover:border-accent/40"
    >
      <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80">
        <Building2 className="h-5 w-5 text-accent-2" />
      </div>

      <div className="p-6 pl-16">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-text">{experience.role}</h3>
          {experience.featured && (
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-2">
              Featured
            </span>
          )}
        </div>
        <p className="mt-0.5 text-sm font-medium text-accent-2">{experience.company}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {dateRange}
          </span>
          {experience.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {experience.location}
            </span>
          )}
        </div>

        <ul className="mt-4 space-y-2.5">
          {experience.summary.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;