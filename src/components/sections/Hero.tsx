import { motion } from "motion/react";
import { heroContent } from "../../data/content";
import { personalInfo } from "../../data/content";
import { socialLinks } from "../../data/content";
import { Button } from "../ui/Button";
import { fadeUp, staggerContainer, staggerItem, float } from "../motionVariants";
import { Github, ArrowDown } from "../ui/Icons";

export function Hero() {
  const lines = heroContent.headline.split("\n");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-accent-2/10 blur-[100px]" />
        <motion.div
          variants={float}
          animate="animate"
          className="absolute top-32 right-[15%] hidden h-24 w-24 rounded-2xl border border-border bg-card/40 backdrop-blur-md lg:block"
        />
      </div>

      <div className="container-site w-full py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-text-muted backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
            </span>
            {personalInfo.availability === "open" ? "Open to opportunities" : personalInfo.availabilityNote}
          </motion.span>

          <motion.h1
            variants={staggerItem}
            id="hero-heading"
            className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line.includes("forward") ? (
                  <span className="gradient-text">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-lg text-text-muted md:text-xl"
          >
            {heroContent.subhead}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" className="rounded-xl">
              {heroContent.primaryCta}
            </Button>
            <Button variant="ghost" size="lg" className="rounded-xl">
              {heroContent.secondaryCta}
            </Button>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text"
            >
              <Github className="h-4 w-4" />
              {heroContent.tertiaryCta}
            </a>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-14 flex justify-center">
            <a href="#about" aria-label="Scroll to about" className="rounded-full border border-border bg-card/40 p-2 backdrop-blur-md">
              <ArrowDown className="h-5 w-5 text-text-muted" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;