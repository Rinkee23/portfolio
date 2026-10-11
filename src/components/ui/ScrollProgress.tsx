"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setProgress(scrollPercent);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[100] bg-transparent pointer-events-none"
      style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))" }}
      aria-hidden="true"
    >
      <motion.div
        className="h-full"
        animate={{ scaleX: progress }}
        style={{ transformOrigin: "left center", background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))" }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </motion.div>
  );
}

export default ScrollProgress;