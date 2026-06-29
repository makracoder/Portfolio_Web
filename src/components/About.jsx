import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaUsers } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../hooks/useScrollReveal";

const features = [
  {
    icon: FaCode,
    title: "Clean Code",
    desc: "Writing maintainable and scalable code.",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solving",
    desc: "Tackling complex problems with strong logic.",
  },
  {
    icon: IoRocketOutline,
    title: "Performance",
    desc: "Optimizing applications for speed and efficiency.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    desc: "Working effectively in teams.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader
        title="About"
        highlight="Me"
        description="A passionate developer dedicated to building impactful software"
      />

      <motion.div
        className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {/* Profile Card */}
        <motion.div className="card-static flex flex-col items-center text-center" variants={fadeUp}>
          <img
            src="plus38.jpeg"
            alt="Aditya Gupta"
            className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover mb-6"
            style={{
              border: "2px solid var(--border-accent)",
              boxShadow: "0 0 32px var(--neon-glow-soft)",
            }}
          />

          <div className="w-full flex flex-col gap-5 text-left">
            <div>
              <span className="label text-[var(--text-muted)] normal-case tracking-normal text-xs">
                Education
              </span>
              <p className="font-semibold text-[var(--text-primary)] mt-1">
                B.Tech @ IIIT Trichy
              </p>
            </div>

            <div>
              <span className="label text-[var(--text-muted)] normal-case tracking-normal text-xs">
                Location
              </span>
              <p className="text-[var(--text-primary)] mt-1">Kolkata, India</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[var(--text-muted)]">CGPA</span>
                <span className="font-semibold text-[var(--text-primary)]">8.45</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "84.5%" }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Journey Content */}
        <motion.div className="flex flex-col gap-8" variants={fadeUp}>
          <div>
            <h3 className="mb-4">My Journey</h3>
            <div className="flex flex-col gap-4">
              <p className="text-[var(--text-secondary)]">
                I&apos;m Aditya Gupta, currently pursuing B.Tech in Computer Science at
                IIIT Trichy. I enjoy solving challenging problems and building
                scalable web applications.
              </p>
              <p className="text-[var(--text-secondary)]">
                I have solved <b className="text-[var(--text-primary)] font-semibold">1400+</b> problems across competitive programming
                platforms and achieved Knight rating on LeetCode. I secured
                <b className="text-[var(--text-primary)] font-semibold"> AIR 7</b> in <b className="text-[var(--text-primary)] font-semibold">UPSC NDA 2023</b> demonstrating strong discipline and
                analytical thinking.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="card flex gap-4 items-start">
                <div className="card-icon">
                  <feature.icon />
                </div>
                <div>
                  <h4 className="mb-1">{feature.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
