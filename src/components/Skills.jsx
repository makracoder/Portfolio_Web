import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaJs } from "react-icons/fa"
import { SiCplusplus, SiPostman } from "react-icons/si"

export default function Skills(){

const skills=[
{icon:<SiCplusplus size={50}/>,name:"C++"},
{icon:<FaJava size={50}/>,name:"Java"},
{icon:<FaJs size={50}/>,name:"JavaScript"},
{icon:<FaReact size={50}/>,name:"React"},
{icon:<FaHtml5 size={50}/>,name:"HTML"},
{icon:<FaCss3Alt size={50}/>,name:"CSS"},
{icon:<FaGitAlt size={50}/>,name:"Git"},
{icon:<SiPostman size={50}/>,name:"Postman"},
]

return(

<section id="skills" className="section">

<div className="w-full max-w-5xl mx-auto">

<h2 className="text-center mb-4 glow">

Skills & Technologies

</h2>

<p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
Tools and technologies I use to build modern, reliable web experiences.
</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

{skills.map((skill,i)=>(
<div
key={i}
className="card glow-border hover-lift flex flex-col items-center gap-4 cursor-pointer group"
>

<div className="text-green-400 text-5xl md:text-6xl group-hover:text-green-300 transition-colors">
{skill.icon}
</div>

<p className="text-gray-300 font-semibold text-center text-sm md:text-base group-hover:text-green-400 transition-colors">
{skill.name}
</p>

</div>
))}

</div>

</div>

</section>

)

}