export default function Projects(){

const projects=[
{
name:"Eventora",
desc:"Event management app",
live:"https://eventora-event-management-platform.vercel.app/",
github:"https://github.com/makracoder/Eventora-Event-Management-Platform"
},
{
name:"CineWatch",
desc:"Movie recommendation app using TMDb API",
live:"https://cine-watch-iota.vercel.app/",
github:"https://github.com/makracoder/CineWatch"
},
{
name:"TaskFlow",
desc:"React To-Do app with localStorage",
live:"https://to-do-app-topaz-seven.vercel.app/",
github:"https://github.com/makracoder/ToDo-App"
}
]

return(

<section id="projects" className="section">

<div className="w-full max-w-6xl mx-auto px-4 sm:px-0">

<h2 className="text-center mb-6 glow">

Projects

</h2>

<p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
Some of the products and experiments I've been building recently.
</p>

<div className="grid md:grid-cols-3 gap-8">

{projects.map((p,i)=>(
<div
key={i}
className="card glow-border hover-lift h-full flex flex-col gap-6"
>

<h3 className="text-xl md:text-2xl font-semibold mb-0">

{p.name}

</h3>

<p className="text-gray-400 text-sm md:text-base mb-0 flex-grow">

{p.desc}

</p>

<div className="flex gap-8 text-green-400 font-semibold text-sm md:text-base pt-4 border-t border-green-500/20">

<a href={p.live} className="hover:text-green-300 transition">Live</a>

<a href={p.github} className="hover:text-green-300 transition">GitHub</a>

</div>

</div>
))}

</div>

<div className="flex justify-center mt-16">

<a
href="https://github.com/makracoder"
target="_blank"
rel="noopener noreferrer"
className="bg-blue-500 px-8 py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
>
View All Projects
</a>

</div>

</div>

</section>

)

}
