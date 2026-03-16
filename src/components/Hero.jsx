import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      id="hero"
      className="section relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10 px-2 sm:px-0">
        {/* Text Content */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <p className="text-green-400 font-semibold text-xs sm:text-sm mb-2 tracking-wide uppercase">Welcome to my portfolio</p>
            <h1>
              Hi, I'm <span className="glow">Aditya Gupta</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-gray-400 leading-relaxed"
            variants={itemVariants}
          >
            Full-Stack Developer crafting modern web experiences with React & TailwindCSS. Passionate about competitive programming, clean code, and building scalable solutions.
          </motion.p>

          <motion.p 
            className="text-gray-500"
            variants={itemVariants}
          >
            B.Tech CSE @ IIIT Trichy | Problem Solver | Open Source Contributor
          </motion.p>

          <motion.div 
            className="flex gap-4 flex-wrap pt-4"
            variants={itemVariants}
          >
            <a
              href="https://github.com/makracoder"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="#projects"
              className="neon-btn"
            >
              <FaCode /> View Work
            </a>
            <a
              href="/Agres.pdf"
              download
              className="neon-btn"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-72 h-72"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 border border-green-500/40 rounded-full"></div>
            <div className="absolute inset-4 border border-green-500/20 rounded-full"></div>
            
            <img
              src="/profile_pic.jpg"
              alt="Aditya Gupta"
              className="w-full h-full object-cover rounded-full border-2 border-green-500/60"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-green-400 rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
