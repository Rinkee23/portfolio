import { personalInfo, socialLinks } from "../../data/content";
import { contactContent } from "../../data/content";
import { Github, LinkedIn, Mail, Heart } from "lucide-react";

const iconByLabel: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: LinkedIn,
  Email: Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg/60">
      <div className="container-site py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#home" className="flex items-center gap-2 text-base font-semibold text-text">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-violet to-electric text-sm font-bold text-white">
              RK
            </span>
            {personalInfo.name}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {contactContent.channels.map((channel) => {
              const Icon = iconByLabel[channel.label] ?? Mail;
              return (
                <a
                  key={channel.href}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-2"
                >
                  <Icon className="h-4 w-4" />
                  {channel.label}
                </a>
              );
            })}
          </div>

          <p className="max-w-xl text-sm text-text-muted">
            Built with React, TypeScript, Vite, Tailwind CSS, and Motion. Crafted with care.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-text-muted">
            © {year} {personalInfo.name}. Made with <Heart className="h-3.5 w-3.5 text-accent" /> in India.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;