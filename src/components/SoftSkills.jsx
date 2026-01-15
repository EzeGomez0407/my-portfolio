export default function SoftSkills(){
    return <section>
        <section className="flex items-center justify-around flex-wrap gap-5">
                <SoftSkill>Trabajo en equipo</SoftSkill>
                <SoftSkill>Responsabilidad Puntualidad</SoftSkill>
                <SoftSkill>Capacidad de adaptación</SoftSkill>
                <SoftSkill>Aprendizaje rápido</SoftSkill>
        </section>
    </section>
}

function SoftSkill({children}){
    return (
        <article className="bg-[#0000006e] border border-[#444] px-5 py-2.5 w-45 rounded-sm h-19 flex items-center">
            <h4 className="text-[18px]">{children}</h4>
        </article>
    )
}