import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="container-main flex items-center justify-between h-16">
        <a href="#" className="text-mono text-lg font-semibold glow m-0 tracking-tight">
          {"< Adi.dev />"}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/makracoder"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub size={15} />
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-accent transition-colors hover:bg-[var(--neon-muted)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)]">
          <div className="container-main py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--neon-muted)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/makracoder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mt-2 justify-center"
              onClick={closeMenu}
            >
              <FaGithub size={15} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
