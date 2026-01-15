
export default function AboutMe(){
    return <section className="grid grid-cols-[auto_67vw] grid-rows-2 gap-5 justify-start items-center">
        <div className='grid-span-1 w-fit'>
            <img src="/perfil.png" className='w-28'/> 
        </div>
        <div className='text-left flex-col items-start'>
            <h1 className='text-6xl'>Desarrollador Web Frontend</h1>
            <h3 className='px-0.5 text-3xl'>Ezequiel Gómez Merlo</h3>
        </div>
        <p className='col-start-2 text-left'>¡Bienvenido! Mi nombre es Ezequiel y soy Desarrollador Frontend con formación en Desarrollo Web Full Stack. Me especializo en la creación de interfaces web utilizando JavaScript y React, centrándome en la experiencia de usuario y en el desarrollo de componentes claros y reutilizables. Valoro el orden en el código y la mantenibilidad. Actualmente busco mi primer oportunidad como Frontend Junior para seguir aprendiendo y crecer profesionalmente.</p>
    </section>
}