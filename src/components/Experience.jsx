import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../hooks/useScrollReveal";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "CULT SSB (Online SSB Mentorship Platform)",
    period: "Nov 2025 – Feb 2026",
    highlights: [
      "Developed and maintained the official CULT SSB website using HTML, CSS, JavaScript, and React.js.",
      "Built responsive UI components and improved mobile compatibility, reducing bounce rate by 25%.",
      "Designed and managed a student data system using Firebase/REST APIs to store candidate details and responses.",
      "Optimized page load performance, improving average load time from 4.5s to under 2s.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader title="Experience" glow />

      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {experiences.map((exp) => (
          <motion.article key={exp.role} className="card-static" variants={fadeUp}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="card-icon w-12 h-12 shrink-0">
                <FaBriefcase size={18} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-[var(--text-primary)]">{exp.role}</h3>
                    <p className="text-sm text-accent mt-1">{exp.company}</p>
                  </div>
                  <span className="text-mono text-xs text-[var(--text-muted)] whitespace-nowrap shrink-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                    >
                      <span className="text-accent mt-1.5 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
