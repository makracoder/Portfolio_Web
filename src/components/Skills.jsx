import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Java", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    title: "Core CS",
    skills: ["Data Structures & Algorithms", "OOP", "Operating Systems"],
  },
  {
    title: "Web/Concepts",
    skills: ["RESTful APIs", "JWT Authentication", "JSON"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Render", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        title="Skills & Technologies"
        glow
        description="Tools and technologies I use to build modern, reliable web experiences."
      />

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="card-static flex flex-col h-full"
            variants={fadeUp}
          >
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
