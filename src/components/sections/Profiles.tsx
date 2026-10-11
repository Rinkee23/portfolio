import { motion } from "motion/react";
import { codingProfiles } from "../../data/content";
import { ProfileBadge } from "../ui/ProfileBadge";
import { staggerContainer, staggerItem } from "../motionVariants";

export function Profiles() {
  return (
    <section id="profiles" className="section-shell" aria-labelledby="profiles-heading">
      <div className="container-site">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerItem}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-eyebrow">Where I Build</span>
          <h2 id="profiles-heading" className="section-title">
            Find my work across <span className="gradient-text">developer platforms</span>.
          </h2>
          <p className="mt-4 text-text-muted">
            Open-source contributions, coding practice, and professional profiles.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {codingProfiles.map((profile) => (
            <ProfileBadge key={profile.platform} profile={profile} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Profiles;