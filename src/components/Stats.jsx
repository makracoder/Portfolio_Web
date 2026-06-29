import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../hooks/useScrollReveal";

const stats = [
  {
    title: "LeetCode",
    desc: "Rating 1850+ | 1400+ problems",
    link: "https://leetcode.com/u/hunter_148",
  },
  {
    title: "Codeforces",
    desc: "Rating 1250+ | Pupil",
    link: "https://codeforces.com/profile/hunter_148",
  },
  {
    title: "Codolio",
    desc: "Code Quality & Performance",
    link: "https://codolio.com/profile/hunter_148",
  },
];

export default function Stats() {
  return (
    <section className="section">
      <SectionHeader
        title="Coding Profiles"
        glow
        description="Where I practice, compete, and track my problem-solving progress."
      />

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {stats.map((s) => (
          <motion.a
            key={s.title}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col items-center text-center gap-3 py-8 group"
            variants={fadeUp}
          >
            <h3 className="text-accent">{s.title}</h3>
            <p className="text-sm text-[var(--text-muted)]">{s.desc}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
