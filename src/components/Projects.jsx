export default function Projects(){

const projects=[
{
name:"PokéFinder",
desc:"Explore Pokémon using PokeAPI",
live:"https://pokemon-app-ebon-eta.vercel.app/",
github:"https://github.com/makracoder/PokemonAPP"
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

<div className="w-full max-w-6xl mx-auto">

<h2 className="text-center mb-4 glow">

Projects

</h2>

<p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
Some of the products and experiments I’ve been building recently.
</p>

<div className="grid md:grid-cols-3 gap-8 md:gap-10">

{projects.map((p,i)=>(
<div
key={i}
className="card glow-border hover-lift h-full flex flex-col gap-5"
>

<h3 className="text-xl md:text-2xl font-semibold mb-1">

{p.name}

</h3>

<p className="text-gray-400 text-sm md:text-base mb-4 flex-grow">

{p.desc}

</p>

<div className="flex gap-4 text-green-400 font-semibold text-sm md:text-base">

<a href={p.live}>Live</a>

<a href={p.github}>GitHub</a>

</div>

</div>
))}

</div>

<div className="flex justify-center mt-10">

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
