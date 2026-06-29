import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../hooks/useScrollReveal";

const socialLinks = [
  { icon: MdEmail, label: "Email", href: "mailto:a47864683@gmail.com" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/adityaa0", external: true },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/makracoder", external: true },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/roger._.that__", external: true },
];

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm("service_49bpspu", "template_z9wqkdf", form.current, "Zare6TScN8Uh8puEb")
      .then(() => {
        alert("Message Sent!");
        e.target.reset();
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="section">
      <SectionHeader
        title="Get In"
        highlight="Touch"
        description="Whether it's a project, a collaboration, or just a hello — my inbox is always open."
      />

      <motion.div
        className="grid lg:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {/* Social Links */}
        <motion.div variants={fadeUp}>
          <h3 className="text-accent mb-6">Let&apos;s Connect</h3>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="card social-link group"
              >
                <div className="card-icon">
                  <link.icon size={18} />
                </div>
                <span className="font-medium text-[var(--text-secondary)] group-hover:text-accent transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="card-static flex flex-col gap-5"
          variants={fadeUp}
        >
          <h3 className="text-accent">Send Me a Message</h3>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="input"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="input"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="input resize-none"
          />

          <button
            type="submit"
            disabled={sending}
            className="btn btn-primary w-full py-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
