import { motion } from "motion/react";
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, Code2, Mail, Sparkles } from "lucide-react";
import { heroContent, personalInfo, socialLinks } from "../../data/content";
import { Button } from "../ui/Button";
import { Github, LinkedIn } from "../ui/Icons";

const stack = ["React", "TypeScript", "Node.js", "MySQL"];

export function Hero() {
  return (
    <section id="home" className="hero-scene relative flex min-h-[760px] items-center overflow-hidden pt-24" aria-labelledby="hero-heading">
      <div className="hero-stars" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="container-site relative z-10 w-full py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-4">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative z-20 text-center lg:text-left">
            <span className="hero-kicker"><span className="availability-dot" /> Software Engineer <span className="text-cyan">/</span> Full-Stack Developer</span>
            <h1 id="hero-heading" className="hero-title mt-6 text-4xl font-bold leading-[1.06] sm:text-5xl md:text-6xl lg:text-[4.35rem]">
              I build <span className="gradient-text">digital experiences.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-muted md:text-lg lg:mx-0">{heroContent.subhead}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button variant="primary" size="lg" className="rounded-xl" onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}>{heroContent.primaryCta}<ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button variant="ghost" size="lg" className="rounded-xl" onClick={() => window.open(personalInfo.resumeUrl, "_blank")}><ArrowDownToLine className="mr-2 h-4 w-4" />{heroContent.secondaryCta}</Button>
            </div>
            <div className="mt-7 flex items-center justify-center gap-6 lg:justify-start">
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hero-social"><Github className="h-4 w-4" /> GitHub</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hero-social"><LinkedIn className="h-4 w-4" /> LinkedIn</a>
              <a href={`mailto:${personalInfo.email}`} className="hero-social"><Mail className="h-4 w-4" /> Email</a>
            </div>
          </motion.div>

          <motion.div className="hero-stage relative mx-auto mt-2 w-full max-w-[560px] lg:mt-0" initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12 }}>
            <motion.div className="hero-orbit" animate={{ rotate: 360 }} transition={{ duration: 48, ease: "linear", repeat: Infinity }} aria-hidden="true"><span /><span /><span /></motion.div>
            <div className="hero-halo" aria-hidden="true" />
            <div className="hero-photo-frame"><img src="/rinkee2.png" alt="Rinkee Kushwaha" className="hero-photo" /><div className="hero-photo-shade" /></div>
            <motion.div className="hero-float-card hero-code-card" animate={{ y: [0, -9, 0], rotateY: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><Code2 className="h-5 w-5 text-cyan" /><span className="code-lines"><i /><i /><i /></span><span className="code-label">building thoughtful<br />digital experiences</span></motion.div>
            <motion.div className="hero-float-card hero-stack-card" animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}><span className="stack-heading"><Sparkles className="h-3.5 w-3.5 text-cyan" /> My toolkit</span>{stack.map((item, i) => <span className="stack-item" key={item}><b>{String(i + 1).padStart(2, "0")}</b>{item}</span>)}</motion.div>
            <div className="hero-note"><span className="availability-dot" /> Available for opportunities <ArrowUpRight className="h-3.5 w-3.5" /></div>
            <div className="hero-monogram" aria-hidden="true">RK</div>
          </motion.div>
        </div>
        <a href="#about" className="hero-scroll mx-auto mt-12 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.24em] text-text-faint"><ArrowDown className="h-3.5 w-3.5" /> Scroll to explore</a>
      </div>
    </section>
  );
}

export default Hero;
