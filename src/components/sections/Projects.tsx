import { motion } from "motion/react";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { staggerContainer, staggerItem } from "../motionVariants";
import { Sparkles, Stethoscope } from "lucide-react";

const healthcareFeatures = [
  "Ambulance dispatch & scheduling",
  "Radiology & pathology booking engines",
  "Secure REST APIs with auth & RBAC",
  "Operational dashboards",
  "AI voice-call patient intake",
];

export function Projects() {
  return (
    <section id="work" className="section-shell" aria-labelledby="projects-heading">
      <div className="container-site">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerItem}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-eyebrow">Selected Work</span>
          <h2 id="projects-heading" className="section-title">
            Products shipped, and <span className="gradient-text">ones on the way</span>.
          </h2>
          <p className="mt-4 text-text-muted">
            A focus on healthcare operations, with AI-powered tooling on the horizon.
          </p>
        </motion.div>

        {/* Healthcare spotlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerItem}
          className="mt-16 glass-card relative overflow-hidden p-8 md:p-10"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent-2/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/80">
                <Stethoscope className="h-6 w-6 text-accent-2" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-text">Healthcare Operations Platform</h3>
              <p className="mt-3 text-text-muted">
                A full-stack platform coordinating ambulance, radiology, and pathology workflows behind a
                secure REST API surface with real-time dashboards.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {healthcareFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Project grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={project.featured} />
          ))}
        </motion.div>

        {/* AI spotlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerItem}
          className="mt-16 glass-card p-8 md:p-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card/80">
              <Sparkles className="h-6 w-6 text-accent-2" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text">AI Job Portal &amp; Resume Analyzer</h3>
              <p className="mt-1 text-text-muted">
                In-progress project pairing a curated job board with an AI resume scoring engine.
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
              In Progress
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js", "Express.js", "REST APIs", "MySQL", "OpenAI API"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;