import { motion } from "motion/react";
import { aboutContent } from "../../data/content";
import { personalInfo } from "../../data/content";
import { fadeUp, staggerContainer, staggerItem, float, floatSlow, scaleIn } from "../motionVariants";

const stats = [
  { value: "4+", label: "Years building web products" },
  { value: "2", label: "Production platforms shipped" },
  { value: "10+", label: "REST APIs & integrations" },
  { value: "∞", label: "Curiosity-driven learning" },
];

export function About() {
  return (
    <section id="about" className="section-shell relative" aria-labelledby="about-heading">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-accent-2/10 blur-[80px]" />
      </div>

      <div className="container-site relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-eyebrow">About Me</span>
          <h2 id="about-heading" className="section-title">
            Curious by nature. <span className="gradient-text">Engineer by craft.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left: narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p variants={staggerItem} className="text-lg leading-relaxed text-text">
              {aboutContent.intro}
            </motion.p>
            <motion.p variants={staggerItem} className="leading-relaxed text-text-muted">
              {aboutContent.philosophy}
            </motion.p>

            <motion.div variants={staggerItem} className="grid gap-4 pt-4 sm:grid-cols-2">
              {aboutContent.interests.map((interest, i) => (
                <motion.div
                  key={interest}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="glass-card p-5 text-left group relative overflow-hidden"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="relative text-sm font-medium text-text z-10">{interest}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="pt-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-2">Currently learning</p>
              <ul className="mt-3 space-y-2">
                {aboutContent.learning.map((item, i) => (
                  <motion.li
                    key={item}
                    variants={staggerItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex items-start gap-2.5 text-sm text-text-muted group"
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: portrait + stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="relative"
          >
            <div className="relative">
              <motion.div
                variants={floatSlow}
                animate="animate"
                className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card-2 p-1"
              >
                <div className="flex h-full w-full items-center justify-center rounded-[22px] bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.25),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(34,211,238,0.18),transparent_60%)]">
                  <div className="text-center">
                    <motion.div
                      variants={float}
                      animate="animate"
                      className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-r from-violet to-electric text-4xl font-bold text-white"
                    >
                      RK
                    </motion.div>
                    <p className="mt-4 text-lg font-semibold text-text">{personalInfo.role}</p>
                    <p className="mt-1 text-sm text-text-muted">{personalInfo.location}</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card */}
              <motion.div
                variants={staggerItem}
                className="glass-card absolute -bottom-6 -left-6 w-44 p-4 shadow-xl"
              >
                <p className="text-xs text-text-muted">Based in</p>
                <p className="mt-1 text-sm font-semibold text-text">{personalInfo.location}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs text-text-muted">Open to work</span>
                </div>
              </motion.div>
            </div>

            {/* Stats row */}
            <motion.div
              variants={staggerContainer}
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="glass-card p-4 text-center group relative overflow-hidden"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="relative text-2xl font-bold gradient-text z-10">{stat.value}</p>
                  <p className="relative mt-1 text-xs text-text-muted z-10">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;