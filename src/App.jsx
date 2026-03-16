import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Projects from "./components/Projects"
// import Achievements from "./components/Achievements"
import Skills from "./components/Skills"
import About from "./components/About"
import Contact from "./components/Contact"
function App(){

return(

<div className="w-full bg-gradient-to-b from-dark-bg via-dark-secondary to-black min-h-screen">

<Navbar/>

<main className="container-main pt-14 md:pt-20 pb-12 md:pb-16 space-y-28 md:space-y-36">

  <Hero/>

  <About/>

  <Skills/>

  <Stats/>

  <Projects/>

  <Contact/>

</main>

</div>

)

}

export default App
