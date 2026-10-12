import { motion } from "motion/react";
import { ArrowUpRight, Braces, Compass, Lightbulb, MapPin, Sparkles, Workflow } from "lucide-react";
import { aboutContent, personalInfo } from "../../data/content";

const stats = [
  { value: "4+", label: "Years building" },
  { value: "2", label: "Platforms shipped" },
  { value: "10+", label: "APIs & integrations" },
];
const icons = [Lightbulb, Workflow, Braces, Compass, Sparkles];

export function About() {
  return (
    <section id="about" className="section-shell about-editorial relative overflow-hidden" aria-labelledby="about-heading">
      <div className="about-watermark" aria-hidden="true">ABOUT</div>
      <div className="container-site relative z-10">
        <div className="about-topline"><span className="section-eyebrow !mb-0">A little about me</span><span className="about-index">01 <i /> THE PERSON BEHIND THE PIXELS</span></div>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }}>
            <h2 id="about-heading" className="about-heading">Curious by nature.<br /><span className="about-heading-accent">Engineer by craft.</span></h2>
            <div className="about-copy-rule"><span /></div>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text">{aboutContent.intro}</p>
            <p className="mt-5 max-w-2xl leading-relaxed text-text-muted">{aboutContent.philosophy}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutContent.interests.slice(0, 4).map((interest, index) => {
                const Icon = icons[index];
                return <motion.div key={interest} whileHover={{ x: 5 }} className="about-interest"><span className="about-interest-icon"><Icon className="h-4 w-4" /></span><span>{interest}</span><ArrowUpRight className="about-interest-arrow h-3.5 w-3.5" /></motion.div>;
              })}
            </div>
            <div className="about-now mt-7"><span className="about-now-dot" /><div><span className="about-now-label">RIGHT NOW</span><p>{aboutContent.currentFocus}</p></div></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .75, delay: .12 }} className="about-portrait-wrap">
            <div className="about-orbit about-orbit-a" aria-hidden="true" /><div className="about-orbit about-orbit-b" aria-hidden="true" />
            <div className="about-portrait-card"><img src="/rinkee1.png" alt="Rinkee Kushwaha, software engineer" /><div className="about-portrait-overlay" /><div className="about-portrait-caption"><span className="about-caption-mark">RK</span><div><strong>{personalInfo.name}</strong><span>{personalInfo.role}</span></div></div></div>
            <div className="about-location"><MapPin className="h-4 w-4 text-cyan" /><span>{personalInfo.location}</span><span className="about-location-divider" /><span className="about-location-open"><i /> Open to work</span></div>
            <div className="about-stats">{stats.map((stat, i) => <div key={stat.label} className="about-stat"><span className="about-stat-number">{stat.value}</span><span className="about-stat-label">{stat.label}</span>{i < stats.length - 1 && <i className="about-stat-divider" />}</div>)}</div>
            <div className="about-learning"><span className="about-learning-icon"><Sparkles className="h-4 w-4" /></span><div><span>ALWAYS LEARNING</span><p>{aboutContent.learning[0]}</p></div></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
