import { SiJavascript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";

export default function TechSkill(){
    return <section className="flex items-center justify-around flex-wrap gap-4">
        <Techs Icon={<SiJavascript className='text-6xl'/>}>Javascript</Techs>
        <Techs Icon={<GrReactjs className='text-6xl'/>}>React</Techs>
        <Techs Icon={<RiTailwindCssFill className='text-6xl'/>}>Tailwind</Techs>
        <Techs Icon={<IoLogoNodejs className='text-6xl'/>}>Node.js</Techs>
    </section>
}

function Techs({children, Icon}){
    return <article className="flex flex-col items-center border-b-2 gap-2 pb-5 px-6">
    <h4 className='text-[20px] font-extrabold'>{children}</h4>
    {Icon}
</article>
}