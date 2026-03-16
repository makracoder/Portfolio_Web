import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-green-500/30">
      <div className="container-main py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold glow">
          {'< Adi.dev />'}
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-green-400 transition relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="hover:text-green-400 transition relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#skills" className="hover:text-green-400 transition relative group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#projects" className="hover:text-green-400 transition relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="hover:text-green-400 transition relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="https://github.com/makracoder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 neon-btn text-sm"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-400 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-green-500/20">
        <div className="container-main mt-3 flex flex-col gap-3 glass p-4 rounded-b-lg">
          <a href="#" className="text-green-400">Home</a>
          <a href="#about" className="text-green-400">About</a>
          <a href="#skills" className="text-green-400">Skills</a>
          <a href="#projects" className="text-green-400">Projects</a>
          <a href="#contact" className="text-green-400">Contact</a>
          <a
            href="https://github.com/makracoder"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn text-center"
          >
            GitHub
          </a>
        </div>
        </div>
      )}
    </nav>
  );
}
