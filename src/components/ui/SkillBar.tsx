import { motion } from "motion/react";
import type { SkillEntry, SkillLevel } from "../../data/types";
import { skillLevels } from "../../data/skills";
import { staggerItem } from "../motionVariants";

const levelMeta: Record<SkillLevel, { label: string; width: string }> = {
  expert: { label: "Expert", width: "100%" },
  advanced: { label: "Advanced", width: "80%" },
  proficient: { label: "Proficient", width: "60%" },
  familiar: { label: "Familiar", width: "40%" },
};

interface SkillBarProps {
  skill: SkillEntry;
}

export function SkillBar({ skill }: SkillBarProps) {
  const meta = levelMeta[skill.level];

  return (
    <motion.div variants={staggerItem} className="group">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-text">{skill.name}</span>
        <span className="text-xs text-text-muted">{meta.label}</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border/60">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: meta.width }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
        />
      </div>
    </motion.div>
  );
}

export default SkillBar;