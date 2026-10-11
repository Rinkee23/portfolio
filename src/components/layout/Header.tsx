import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navLinks } from "../../data/content";
import { personalInfo } from "../../data/content";
import { Menu, X, Sun, Moon, Eye, EyeOff } from "lucide-react";
import { useTheme } from "../../context/useTheme";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, reducedMotion, toggleReducedMotion } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/60 text-text transition-colors hover:bg-card hover:border-accent/40"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={toggleReducedMotion}
            aria-label={reducedMotion ? "Enable animations" : "Disable animations"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/60 text-text transition-colors hover:bg-card hover:border-accent/40"
          >
            {reducedMotion ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-lg border border-border bg-card/60 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:text-accent-2 md:inline-flex"
          >
            Contact
          </a>
        </div>

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
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet to-electric px-4 py-3 text-sm font-semibold text-white"
            >
              Contact
            </a>
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-sm font-medium text-text">Theme</span>
              <button
                onClick={toggleTheme}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card/60 text-text transition-colors hover:bg-card hover:border-accent/40"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-sm font-medium text-text">Animations</span>
              <button
                onClick={toggleReducedMotion}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card/60 text-text transition-colors hover:bg-card hover:border-accent/40"
              >
                {reducedMotion ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}

export default Header;