export default function Stats(){

const stats=[
{
title:"LeetCode",
desc:"Rating 1850+ | 1400+ problems",
link:"https://leetcode.com/u/hunter_148"
},
{
title:"Codeforces",
desc:"Rating 1250+ | Pupil",
link:"https://codeforces.com/profile/hunter_148"
},
{
title:"Codelio",
desc:"Code Quality & Performance",
link:"https://codolio.com/profile/hunter_148"
}
]

return(

<section className="section">

<div className="w-full max-w-6xl mx-auto px-4 sm:px-0">

<h2 className="text-center mb-6 glow">

Coding Profiles

</h2>

<p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
Where I practice, compete, and track my problem-solving progress.
</p>

<div className="grid md:grid-cols-3 gap-8">

{stats.map((s,i)=>(
<a 
href={s.link}
target="_blank"
rel="noopener noreferrer"
key={i}
className="card glow-border hover-lift text-center h-full flex flex-col justify-center gap-4"
>

<h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-0">
{s.title}
</h3>

<p className="text-gray-400 text-sm md:text-base mb-0">
{s.desc}
</p>

</a>
))}

</div>

</div>

</section>

)

}
