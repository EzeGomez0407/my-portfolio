import { GoDotFill } from "react-icons/go";

export default function Proyects() {
  return (
    <section className="flex justify-center items-center gap-4 flex-wrap">
      <Proyect
        title={"Henry Food"}
        urlWeb={"https://henry-food-one.vercel.app/"}
        urlImg={
          "PI_image.jpg"
        }
        urlGit={"https://github.com/EzeGomez0407/Proyecto-Individual-"}
        proyectType={"PROYECTO ACADÉMICO INDIVIDUAL"}
      >
        <b>Aplicación web para búsqueda y gestión de recetas.</b>
        <ul className="">
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Filtros por tipo de dieta
          </li>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Búsqueda por nombre
          </li>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Ordenamiento alfabético y por puntaje
          </li>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Creación de recetas mediante formulario controlado
          </li>
        </ul>
        Stack: React · JavaScript ·Redux · CSS
      </Proyect>
      <Proyect
        title={"App ToDo"}
        urlWeb={"https://app-to-do-sigma.vercel.app/"}
        urlImg={
          "https://res.cloudinary.com/dhn7thh3k/image/upload/f_auto/q_auto/c_fill,w_436/img-app-todo-1_x4kewk?_a=DAJHqpDbZAA0"
        }
        urlGit={"https://github.com/EzeGomez0407/App-To-Do"}
        proyectType={"PROYECTO PERSONAL"}
      >
        <b>Aplicación web para la gestión de tareas.</b>
        <ul>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Creación, edición y eliminación de tareas
          </li>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Marcado de tareas completadas
          </li>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Organización simple y clara de pendientes
          </li>
        </ul>
        Stack: React · JavaScript · CSS
      </Proyect>
    </section>
  );
}

import { SiGithub } from "react-icons/si";
function Proyect({ children, title, urlImg, urlWeb, urlGit, proyectType }) {
  return (
    <article className="flex flex-col items-center justify-between gap-2 w-fit h-145 p-3 bg-[#00000042] inset-shadow-sm inset-shadow-black rounded-xl ">
      <h4 className="text-blue-200 font-medium text-[18px]">{title}</h4>
      <img src={urlImg} className="w-96 h-auto" />
      <div className="flex items-center gap-1.5 my-2 justify-around w-80">
        <a
          href={urlWeb}
          target="_blank"
          rel="noreferrer"
          className="flex items-center bg-blue-200  py-1 px-2.5 rounded-full text-[#242424] font-medium"
        >
          🌐 Visitar
        </a>
        <a
          href={urlGit}
          target="_blank"
          rel="noreferrer"
          className="flex items-center bg-blue-200  py-1 px-2.5 rounded-full text-[#242424] font-medium"
        >
          <SiGithub className="mr-1.5 text-black" /> Repositorio{" "}
        </a>
      </div>
      <p className="text-left w-96 text-[20px]">{children}</p>
      <div className="relative w-full text-right ">
        <span className="italic shadow-sm shadow-black px-1.5 py-1">
          {proyectType}
        </span>
      </div>
    </article>
  );
}
