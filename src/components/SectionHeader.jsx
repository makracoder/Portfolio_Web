import { motion } from "framer-motion";

export default function SectionHeader({ title, highlight, description, glow = false }) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className={glow ? "glow" : undefined}>
        {title}
        {highlight && <> <span className="glow">{highlight}</span></>}
      </h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
