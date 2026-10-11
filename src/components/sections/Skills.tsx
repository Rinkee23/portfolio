import { motion } from "motion/react";
import { skillGroups, skills, skillLevels } from "../../data/skills";
import { SkillBar } from "../ui/SkillBar";
import { staggerContainer, staggerItem } from "../motionVariants";
import { Stethoscope, Database, Server, Cpu, Sparkles } from "lucide-react";

const domainIcons: Record<string, typeof Stethoscope> = {
  Frontend: Cpu,
  Backend: Server,
  Data: Database,
  "Healthcare Domain": Stethoscope,
  Emerging: Sparkles,
};

export function Skills() {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-heading">
      <div className="container-site">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerItem}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-eyebrow">Capabilities</span>
          <h2 id="skills-heading" className="section-title">
            A toolbox built for <span className="gradient-text">healthcare-grade</span> products.
          </h2>
          <p className="mt-4 text-text-muted">
            From interface design to secure backend systems — the stack I use to ship reliable software.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: grouped skill chips */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {skillGroups.map((group) => {
              const Icon = domainIcons[group.name] ?? Sparkles;
              return (
                <motion.div key={group.name} variants={staggerItem} className="glass-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/80">
                      <Icon className="h-5 w-5 text-accent-2" />
                    </div>
                    <h3 className="text-base font-semibold text-text">{group.name}</h3>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: proficiency bars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-semibold text-text">Proficiency at a glance</h3>
            <p className="mt-1 text-sm text-text-muted">
              Levels reflect day-to-day comfort building with each technology.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-text-muted">
              {(["expert", "advanced", "proficient", "familiar"] as const).map((level) => (
                <span key={level} className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent" style={{ opacity: skillLevels[level] / 5 }} />
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;