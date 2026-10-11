import { motion } from "motion/react";
import { personalInfo, contactContent } from "../../data/content";
import { staggerContainer, staggerItem } from "../motionVariants";
import { Download, Briefcase, GraduationCap, Star } from "lucide-react";

const highlights = [
  { icon: Briefcase, title: "4+ years", desc: "Building production web products." },
  { icon: GraduationCap, title: "Full-stack", desc: "React through REST APIs and MySQL." },
  { icon: Star, title: "Healthcare focus", desc: "Ambulance, radiology, pathology systems." },
];

export function ResumePreview() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="glass-card relative overflow-hidden p-8 md:p-10"
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <span className="section-eyebrow">Resume</span>
          <h2 id="resume-heading" className="mt-2 text-2xl font-bold text-text md:text-3xl">
            Download my resume
          </h2>
          <p className="mt-3 max-w-xl text-text-muted">
            A concise overview of my experience building healthcare-grade web products,
            secure backend systems, and AI-integrated applications.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <motion.div key={h.title} variants={staggerItem} className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2">
                  <Icon className="h-4 w-4 text-accent-2" />
                  <div>
                    <p className="text-sm font-semibold text-text">{h.title}</p>
                    <p className="text-xs text-text-muted">{h.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.a
          variants={staggerItem}
          href={personalInfo.resumeUrl}
          download
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-electric px-6 py-4 text-base font-semibold text-white shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] transition-all hover:shadow-[0_0_50px_-8px_rgba(139,92,246,0.65)] hover:-translate-y-0.5"
        >
          <Download className="h-5 w-5" />
          {contactContent.resumeLabel}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default ResumePreview;