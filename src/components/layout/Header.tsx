import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navLinks } from "../../data/content";
import { personalInfo } from "../../data/content";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the viewport changes or a link is selected.
  useEffect(() => {
    if (!open) return;
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2 text-base font-semibold text-text">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-violet to-electric text-sm font-bold text-white">
            RK
          </span>
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg border border-border bg-card/60 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:text-accent-2 md:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/60 text-text md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
      >
        <nav className="container-site flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-text-muted transition-colors hover:bg-card hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet to-electric px-4 py-3 text-sm font-semibold text-white"
          >
            Contact
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}

export default Header;