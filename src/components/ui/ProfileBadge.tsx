import { motion } from "motion/react";
import type { CodingProfile } from "../../data/types";
import { staggerItem } from "../motionVariants";

const platformMeta: Record<string, { icon: string; color: string }> = {
  GitHub: { icon: "G", color: "bg-slate-700/80 text-white" },
  LinkedIn: { icon: "in", color: "bg-blue-600/90 text-white" },
  LeetCode: { icon: "LC", color: "bg-orange-500/90 text-white" },
  Codeforces: { icon: "CF", color: "bg-indigo-500/90 text-white" },
  Stack Overflow: { icon: "SO", color: "bg-orange-600/90 text-white" },
  X: { icon: "X", color: "bg-black/80 text-white" },
  Twitter: { icon: "X", color: "bg-black/80 text-white" },
};

interface ProfileBadgeProps {
  profile: CodingProfile;
}

export function ProfileBadge({ profile }: ProfileBadgeProps) {
  const meta = platformMeta[profile.platform] ?? { icon: profile.platform[0], color: "bg-border text-text-muted" };

  return (
    <motion.a
      variants={staggerItem}
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${meta.color}`}>
        {meta.icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-text">{profile.platform}</p>
        <p className="text-xs text-text-muted">@{profile.handle}</p>
      </div>
      {profile.stat && (
        <span className="rounded-full border border-border bg-card/80 px-2.5 py-1 text-xs font-medium text-accent-2">
          {profile.stat}
        </span>
      )}
    </motion.a>
  );
}

export default ProfileBadge;