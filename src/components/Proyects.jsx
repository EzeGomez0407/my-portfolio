import { GoDotFill } from "react-icons/go";

export default function Proyects() {
  return (
    <section className="flex justify-center items-center gap-4 flex-wrap">
      <Proyect
        title={"Sistema de inventario para obras de construcción"}
        urlWeb={"https://inventario-herramienta-0llp.onrender.com"}
        urlImg={
          "tool_inventary.png"
        }
        urlGit={"https://github.com/EzeGomez0407/radio-cce"}
        proyectType={"PROYECTO REAL"}
      >
        <b>Aplicación web para la gestión de obras de construcción e inventario de herramientas.</b>
        <ul>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            CRUD de obras y herramientas
          </li>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Transferencia de herramientas entre obras
          </li>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Registro histórico de movimientos
          </li>
        </ul>
        Stack: React · JavaScript · Node.js · PostgreSQL
      </Proyect>
      <Proyect
        title={"Web Iglesia + Radio Online"}
        urlWeb={"https://radio-cce.onrender.com/"}
        urlImg={
          "FM_CCE_image.jpg"
        }
        urlGit={"https://github.com/EzeGomez0407/radio-cce"}
        proyectType={"PROYECTO REAL"}
      >
        <b>Sitio web institucional para una iglesia con transmisión de radio en vivo.</b>
        <ul>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Reproducción de radio online directamente desde la web
          </li>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Visualización de eventos y actividades de la iglesia
          </li>
          <li className="flex items-center gap-1.5 text-[18px] w-fit">
            <GoDotFill className="text-[10px] " />
            Diseño claro y accesible para todo tipo de usuarios
          </li>
        </ul>
        Stack: React · JavaScript · Tailwind CSS
      </Proyect>
      <Proyect
        title={"Henry Food"}
        urlWeb={"https://henry-food-one.vercel.app/"}
        urlImg={"PI_image.jpg"}
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
    </section>
  );
}

import { SiGithub } from "react-icons/si";

function Proyect({ children, title, urlImg, urlWeb, urlGit, proyectType }) {
  return (
    <article className="relative flex flex-col items-center justify-start gap-4 w-fit h-155 p-3 bg-[#00000042] inset-shadow-sm inset-shadow-black rounded-xl ">
      <h4 className="text-blue-200 font-medium text-[18px] w-80">{title}</h4>
      <img src={urlImg} className="w-80 h-auto" />
      <div className="flex items-center gap-1.5 justify-around w-80">
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
      <p className="text-left w-80 text-[20px] mb-1.5">{children}</p>
      <div className="absolute bottom-3 right-3 w-full text-right ">
        <span className="italic shadow-sm shadow-black px-1.5 py-1">
          {proyectType}
        </span>
      </div>
    </article>
  );
}
