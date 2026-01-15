export default function Proyects(){
    return <section className="flex justify-center items-center gap-4 flex-wrap">
        <Proyect title={'Henry Food'} urlWeb={'https://henry-food-one.vercel.app/'} urlImg={'https://res.cloudinary.com/dhn7thh3k/image/upload/f_auto/q_auto/c_fill,w_436/PI_screenshot_2_xlqmyx?_a=DAJHqpDbZAA0'} urlGit={'https://github.com/EzeGomez0407/Proyecto-Individual-'} proyectType={'PROYECTO ACADÉMICO INDIVIDUAL'}>
            Henry Food, es una aplicación para ver recetas de comidas. Las recetas se pueden filtrar por tipos de dietas, ordenar de manera ascendente y descendente, tanto alfabeticamente como por puntaje de salud, otras de las funcionalidades, es que podemos buscar las recetas por su nombre, ingresando el mismo en el buscador que se encuentra en la barra de navegación. Tambien se pueden publicar recetas mediante un formulario controlado.
        </Proyect>
        <Proyect title={'App ToDo'} urlWeb={'https://app-to-do-sigma.vercel.app/'} urlImg={'https://res.cloudinary.com/dhn7thh3k/image/upload/f_auto/q_auto/c_fill,w_436/img-app-todo-1_x4kewk?_a=DAJHqpDbZAA0'} urlGit={'https://github.com/EzeGomez0407/App-To-Do'} proyectType={'PROYECTO PERSONAL'}>
            Henry Food, es una aplicación para ver recetas de comidas. Las recetas se pueden filtrar por tipos de dietas, ordenar de manera ascendente y descendente, tanto alfabeticamente como por puntaje de salud, otras de las funcionalidades, es que podemos buscar las recetas por su nombre, ingresando el mismo en el buscador que se encuentra en la barra de navegación. Tambien se pueden publicar recetas mediante un formulario controlado.
        </Proyect>
    </section>
}

import {SiGithub} from 'react-icons/si'
function Proyect({children, title, urlImg, urlWeb, urlGit, proyectType}){
    return (
        <article className="relative flex flex-col items-center gap-2 w-fit p-3 bg-[#00000042] inset-shadow-sm inset-shadow-black rounded-xl ">
            <h4 className="text-blue-200 font-medium text-[18px]">{title}</h4>
            <img src={urlImg} className="w-80 h-auto" />
            <div className="flex items-center gap-1.5 my-2 justify-around w-80">
                <a href={urlWeb} target="_blank" rel="noreferrer" className='flex items-center bg-blue-200  py-1 px-2.5 rounded-full text-[#242424] font-medium'>🌐 Visitar</a>
                <a href={urlGit} target="_blank" rel="noreferrer" className='flex items-center bg-blue-200  py-1 px-2.5 rounded-full text-[#242424] font-medium'><SiGithub className='mr-1.5 text-black'/> Repositorio </a>
            </div>
            <p className="text-left w-80 ">{children}</p>
            <div className="relative w-full text-right ">
                <span className='italic shadow-sm shadow-black px-1.5 py-1'>{proyectType}</span>
            </div>
        </article>
    )
}

