import { motion } from "framer-motion";
import { FaGithub, FaCode, FaDownload } from "react-icons/fa";
import { fadeUp, staggerContainer } from "../hooks/useScrollReveal";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="section relative w-full min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Local ambient glow */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 255, 77, 0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 255, 77, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div className="flex flex-col gap-6" variants={fadeUp}>
          <div>
            <p className="label mb-3">Welcome to my portfolio</p>
            <h1>
              Hi, I&apos;m <span className="glow">Aditya Gupta</span>
            </h1>
          </div>

          <motion.p className="text-[var(--text-secondary)] text-lg max-w-lg" variants={fadeUp}>
            Full-Stack Developer crafting modern web experiences with React & TailwindCSS. Passionate about competitive programming, clean code, and building scalable solutions.
          </motion.p>

          <motion.p className="text-[var(--text-muted)] text-sm text-mono" variants={fadeUp}>
            B.Tech CSE @ IIIT Trichy | Problem Solver | Open Source Contributor
          </motion.p>

          <motion.div className="flex flex-wrap gap-3 pt-2" variants={fadeUp}>
            <a
              href="https://github.com/makracoder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaGithub size={15} />
              GitHub
            </a>
            <a href="#projects" className="btn btn-secondary">
              <FaCode size={14} />
              View Work
            </a>
            <a
              href="public/Aditya's Resume (2).pdf"
              download
              className="btn btn-ghost"
            >
              <FaDownload size={13} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div className="flex justify-center lg:justify-end" variants={fadeUp}>
          <motion.div
            className="relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Outer ring */}
            <div
              className="absolute -inset-4 rounded-full opacity-60 hero-ring"
              style={{
                background:
                  "conic-gradient(from 180deg, transparent, rgba(124, 255, 77, 0.3), transparent)",
              }}
            />
            <div className="absolute -inset-1 rounded-full border border-[var(--border-accent)]" />
            <div className="absolute -inset-3 rounded-full border border-[var(--border)]" />

            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <img
                src="/profile_pic.jpg"
                alt="Aditya Gupta"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="scroll-indicator">
          <motion.div
            className="scroll-indicator-dot"
            animate={{ y: [0, 6, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
