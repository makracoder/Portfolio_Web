import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../hooks/useScrollReveal";

const projects = [
  {
    name: "Eventora",
    desc: "Event management app",
    live: "https://eventora-event-management-platform.vercel.app/",
    github: "https://github.com/makracoder/Eventora-Event-Management-Platform",
  },
  {
    name: "CineWatch",
    desc: "Movie recommendation app using TMDb API",
    live: "https://cine-watch-iota.vercel.app/",
    github: "https://github.com/makracoder/CineWatch",
  },
  {
    name: "TaskFlow",
    desc: "React To-Do app with localStorage",
    live: "https://to-do-app-topaz-seven.vercel.app/",
    github: "https://github.com/makracoder/ToDo-App",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        title="Projects"
        glow
        description="Some of the products and experiments I've been building recently."
      />

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {projects.map((p) => (
          <motion.div
            key={p.name}
            className="card flex flex-col gap-4 h-full"
            variants={fadeUp}
          >
            <div className="flex-1">
              <h3 className="mb-2">{p.name}</h3>
              <p className="text-sm text-[var(--text-muted)]">{p.desc}</p>
            </div>

            <div className="divider !my-0" />

            <div className="flex gap-4">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
              >
                <FaExternalLinkAlt size={12} />
                Live
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-accent transition-colors"
              >
                <FaGithub size={14} />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="https://github.com/makracoder"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <FaGithub size={15} />
          View All Projects
        </a>
      </motion.div>
    </section>
  );
}
