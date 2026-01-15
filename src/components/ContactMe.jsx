import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
// import { BsTwitterX } from "react-icons/bs";

export default function ContactMe(){
    return <section className="flex justify-around items-center flex-wrap gap-3.5">
        <Contact href={'https://www.linkedin.com/in/eze-gomez-merlo/'} social={'Linkedin'}>
            <SiLinkedin className="text-[#0e76a8] text-xl"/>
        </Contact>
        <Contact href={'https://github.com/EzeGomez0407'} social={'Github'}>
            <SiGithub className="text-black text-xl"/>
        </Contact>
        <Contact href={'mailto:gomezmerloe@gmail.com'} social={'Gmail'}>
            <SiGmail className="text-[#EA4335] text-xl"/>
        </Contact>
    </section>
}

function Contact({children, href, social}){
    return <article className="flex items-center gap-2 font-bold">
        <a href={href}>{social}</a>
        {children}
    </article>
}