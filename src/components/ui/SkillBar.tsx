import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import type { SkillEntry, SkillLevel } from "../../data/types";
import { staggerItem } from "../motionVariants";

const levelMeta: Record<SkillLevel, { label: string; width: string; color: string }> = {
  expert: { label: "Expert", width: "100%", color: "from-emerald-500 to-emerald-400" },
  advanced: { label: "Advanced", width: "80%", color: "from-accent to-accent-2" },
  proficient: { label: "Proficient", width: "60%", color: "from-amber-500 to-amber-400" },
  familiar: { label: "Familiar", width: "40%", color: "from-slate-500 to-slate-400" },
};

const levelDescriptions: Record<SkillLevel, string> = {
  expert: "Deep mastery — can architect, optimize, and teach this technology.",
  advanced: "Strong proficiency — builds complex features independently.",
  proficient: "Solid working knowledge — productive with occasional reference.",
  familiar: "Basic understanding — can contribute with guidance.",
};

interface SkillBarProps {
  skill: SkillEntry;
}

export function SkillBar({ skill }: SkillBarProps) {
  const meta = levelMeta[skill.level];
  const description = levelDescriptions[skill.level];
  const progress = useMotionValue(0);
  const progressSpring = useSpring(progress, { stiffness: 300, damping: 30 });
  const barWidth = useTransform(progressSpring, [0, 1], ["0%", meta.width]);
  const tooltipOpacity = useTransform(progressSpring, [0, 1], [0, 1]);
  const tooltipY = useTransform(progressSpring, [0, 1], [4, 0]);

  return (
    <motion.div
      variants={staggerItem}
      className="group relative"
      onMouseEnter={() => progress.set(1)}
      onMouseLeave={() => progress.set(0)}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-text">{skill.name}</span>
        <motion.span
          className="text-xs text-text-muted"
          style={{ opacity: progressSpring }}
        >
          {meta.label}
        </motion.span>
      </div>
      <div className="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-border/60">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: meta.width }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-0 h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--color-accent), var(--color-accent-2))`,
            width: barWidth,
          }}
        />
        {/* Tooltip */}
        <motion.div
          className="absolute -bottom-8 left-0 right-0 flex justify-center"
          style={{ opacity: tooltipOpacity, y: tooltipY }}
        >
          <div className="glass-card px-3 py-1.5 text-xs text-text text-center whitespace-nowrap shadow-lg">
            {description}
          </div>
        </motion.div>
      </div>
      {/* Level indicator dots */}
      <div className="mt-3 flex items-center gap-1">
        {["expert", "advanced", "proficient", "familiar"].map((level, i) => (
          <motion.span
            key={level}
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor:
                ["expert", "advanced", "proficient", "familiar"].indexOf(skill.level) >= i
                  ? "var(--color-accent)"
                  : "var(--color-border)",
              opacity: ["expert", "advanced", "proficient", "familiar"].indexOf(skill.level) >= i ? 1 : 0.3,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillBar;