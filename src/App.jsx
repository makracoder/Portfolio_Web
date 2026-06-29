import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BackgroundEffects from "./components/BackgroundEffects";

function App() {
  return (
    <div className="relative w-full min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <BackgroundEffects />
      <Navbar />

      <main className="container-main main-content section-stack">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Stats />
        <Contact />
      </main>
    </div>
  );
}

export default App;
