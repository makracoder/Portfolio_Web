import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_49bpspu",
    "template_z9wqkdf",
    form.current,
    "Zare6TScN8Uh8puEb"
  );

  alert("Message Sent!");
  e.target.reset();
};

return (

<section id="contact" className="section">

<div className="w-full max-w-5xl mx-auto px-4 sm:px-0">

<h2 className="text-center mb-6 glow">
Get In <span className="text-green-400">Touch</span>
</h2>

<p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
Whether it's a project, a collaboration, or just a hello — my inbox is always open.
</p>

<div className="grid md:grid-cols-2 gap-12">

{/* SOCIAL LINKS */}

<div className="space-y-8">

<h3 className="text-xl md:text-2xl font-semibold mb-8 text-green-400">
Let's Connect
</h3>

<div className="flex flex-col gap-4">

<a
href="mailto:a47864683@gmail.com"
className="card glow-border hover-lift flex items-center gap-5 text-sm md:text-base group p-3 md:p-4"
>
<MdEmail className="text-green-400 text-4xl flex-shrink-0 group-hover:scale-110 transition-transform"/>
<span className="group-hover:text-green-400 transition-colors">Email</span>
</a>

<a
href="https://www.linkedin.com/in/adityaa0"
target="_blank"
rel="noopener noreferrer"
className="card glow-border hover-lift flex items-center gap-5 text-sm md:text-base group p-3 md:p-4"
>
<FaLinkedin className="text-green-400 text-4xl flex-shrink-0 group-hover:scale-110 transition-transform"/>
<span className="group-hover:text-green-400 transition-colors">LinkedIn</span>
</a>

<a
href="https://github.com/makracoder"
target="_blank"
rel="noopener noreferrer"
className="card glow-border hover-lift flex items-center gap-5 text-sm md:text-base group p-3 md:p-4"
>
<FaGithub className="text-green-400 text-4xl flex-shrink-0 group-hover:scale-110 transition-transform"/>
<span className="group-hover:text-green-400 transition-colors">GitHub</span>
</a>

<a
href="https://instagram.com/roger._.that__"
target="_blank"
rel="noopener noreferrer"
className="card glow-border hover-lift flex items-center gap-5 text-sm md:text-base group p-3 md:p-4"
>
<FaInstagram className="text-green-400 text-4xl flex-shrink-0 group-hover:scale-110 transition-transform"/>
<span className="group-hover:text-green-400 transition-colors">Instagram</span>
</a>

</div>

</div>


{/* MESSAGE FORM */}

<form
ref={form}
onSubmit={sendEmail}
className="card glow-border space-y-6"
>

<h3 className="text-xl md:text-2xl font-semibold mb-8 text-green-400">
Send Me a Message
</h3>

<input
type="text"
name="user_name"
placeholder="Your Name"
required
className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-green-500/30 placeholder-gray-500 text-white focus:outline-none focus:border-green-400 transition"
/>

<input
type="email"
name="user_email"
placeholder="Your Email"
required
className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-green-500/30 placeholder-gray-500 text-white focus:outline-none focus:border-green-400 transition"
/>

<textarea
name="message"
placeholder="Your Message"
rows="5"
required
className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-green-500/30 placeholder-gray-500 text-white focus:outline-none focus:border-green-400 transition resize-none"
/>

<button
type="submit"
className="neon-btn w-full py-3 text-base font-bold justify-center"
>
Send Message
</button>

</form>

</div>

</div>

</section>

);
}