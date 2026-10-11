import { motion } from "motion/react";
import { contactContent, personalInfo } from "../../data/content";
import { socialLinks } from "../../data/content";
import { Button } from "../ui/Button";
import { staggerContainer, staggerItem } from "../motionVariants";
import { Mail, Send, MapPin, Calendar } from "lucide-react";
import { Github, LinkedIn } from "../ui/Icons";

import type { ComponentType, SVGProps } from "react";

const channelIcon: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Email: Mail,
  LinkedIn: LinkedIn,
  GitHub: Github,
};

export function Contact() {
  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-heading">
      <div className="container-site">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerItem}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-eyebrow">Get In Touch</span>
          <h2 id="contact-heading" className="section-title">
            Have a meaningful problem to solve?
          </h2>
          <p className="mt-4 text-text-muted">
            Let's build something useful, thoughtful, and technically excellent.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]"
        >
          {/* Contact channels */}
          <div className="glass-card p-6 text-left">
            <h3 className="text-lg font-semibold text-text">Reach out directly</h3>
            <p className="mt-1 text-sm text-text-muted">
              I typically respond within a couple of business days.
            </p>
            <ul className="mt-6 space-y-3">
              {contactContent.channels.map((channel) => {
                const Icon = channelIcon[channel.label] ?? Mail;
                return (
                  <li key={channel.href}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-border bg-card/40 p-3 transition-colors hover:border-accent/40"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/80">
                        <Icon className="h-5 w-5 text-accent-2" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text">{channel.label}</p>
                        <p className="text-xs text-text-muted">{channel.value}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA card */}
          <div className="glass-card relative overflow-hidden p-6">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-2/10 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/80">
                <Mail className="h-6 w-6 text-accent-2" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-text">Prefer a PDF?</h3>
              <p className="mt-2 text-text-muted">
                Download my resume for a quick read, or send it straight to your inbox.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button variant="primary" size="lg" className="w-full justify-center">
                  <Mail className="h-4 w-4" />
                  {contactContent.resumeLabel}
                </Button>
                <a
                  href={socialLinks.email}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent/40 hover:text-accent-2"
                >
                  <Send className="h-4 w-4" />
                  Say hello
                </a>
              </div>
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-text-muted">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{personalInfo.availabilityNote}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;