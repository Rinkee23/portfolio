import { motion } from "motion/react";
import { experience } from "../../data/experience";
import { ExperienceCard } from "../ui/ExperienceCard";
import { staggerContainer, staggerItem } from "../motionVariants";
import { Building2, Stethoscope, ShieldCheck, CalendarClock } from "lucide-react";

const focusAreas = [
  {
    icon: Stethoscope,
    title: "Ambulance & Patient Logistics",
    desc: "Coordinating dispatch, booking, and handoff across clinical touchpoints.",
  },
  {
    icon: Building2,
    title: "Radiology & Pathology Booking",
    desc: "Availability-aware scheduling with conflict resolution and status tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    desc: "Token-based auth, role-based access control, and audit-ready operations.",
  },
  {
    icon: CalendarClock,
    title: "Operational Dashboards",
    desc: "Real-time utilization, turnaround times, and fleet performance metrics.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-shell" aria-labelledby="experience-heading">
      <div className="container-site">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerItem}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-eyebrow">Professional Journey</span>
          <h2 id="experience-heading" className="section-title">
            Building production software for <span className="gradient-text">healthcare operations</span>.
          </h2>
          <p className="mt-4 text-text-muted">
            A track record of shipping reliable systems — from secure REST APIs to real-time operational dashboards.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: focus areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-2">Healthcare platform expertise</h3>
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div key={area.title} variants={staggerItem} className="glass-card flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card/80">
                    <Icon className="h-5 w-5 text-accent-2" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{area.title}</p>
                    <p className="text-sm text-text-muted">{area.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;