import React, { useState } from "react";
import Carrousel from "../CarrouselManual/Carrousel";
import s from "./Proyects.module.css";
import { SiGithub } from "react-icons/si";

function Proyects() {
  const [viewWidth, setVieWidth] = useState(window.visualViewport.width);

  window.addEventListener("resize", () => {
    setVieWidth(window.visualViewport.width);
  });

  const imgPF = [
    "../../../imgs-pf/Pf screenshot.PNG",
    "../../../imgs-pf/Pf screenshot 2.PNG",
    "../../../imgs-pf/Pf screenshot 3.PNG",
    "../../../imgs-pf/Pf screenshot 4.PNG",
    "../../../imgs-pf/Pf screenshot 5.PNG",
    "../../../imgs-pf/Pf screenshot 6.PNG",
    "../../../imgs-pf/Pf screenshot 7.PNG",
    "../../../imgs-pf/Pf screenshot 8.PNG",
    "../../../imgs-pf/Pf screenshot 9.PNG",
    "../../../imgs-pf/Pf screenshot 10.PNG",
    "../../../imgs-pf/Pf screenshot 11.PNG",
    "../../../imgs-pf/Pf screenshot 12.PNG",
    "../../../imgs-pf/Pf screenshot 13.PNG",
  ];
  const imgPI = [
    "../../../imgs-pi/PI screenshot 2.PNG",
    "../../../imgs-pi/PI screenshot.PNG",
    "../../../imgs-pi/PI screenshot 3.PNG",
    "../../../imgs-pi/PI screenshot 4.PNG",
  ];

  return (
    <div className={s.contain} id="my-proyects">
      <h2 className={s.titleHeader}>Proyectos</h2>
      <div className={s.containProyect}>
        {viewWidth < 9720 ? (
          <div className={s.proyects}>
            <span className={s.titleProyect}>Little Paws</span>
            <Carrousel arrImages={imgPF} />

            <span className={s.containLinks}>
              <a
                href="https://proyecto-final-pf.vercel.app/"
                className={s.linksProyects}
                target="_blank"
              >
                🐾 Ir al proyecto
              </a>
              <a
                href="https://github.com/gitperalta/proyecto-final-pf"
                className={s.linksProyects}
                target="_blank"
              >
                <SiGithub className={s.iconLink} /> Repositorio
              </a>
            </span>
            <p>
              <b>Little Paws</b> (proyecto grupal), es una plataforma en la cual
              se publican mascotas en situación de calle, para que las puedan
              adoptar. Cuenta con un apartado de e-shop, donde se encuentran
              productos para las mascotas, entre otros. Los usuarios tienen la
              posibilidad de registrarse o iniciar sesión, pueden editar su
              perfil y ver su historial, tanto de compras, como adopciones y sus
              publicaciones de mascotas. Los administradores poseen un dashboard
              para tener un control preciso de la plataforma, donde pueden
              agregar productos, bannear usuarios, bloquear publicaciones, entre
              otras cosas.
            </p>
          </div>
        ) : (
          <div></div>
        )}
        {viewWidth < 9720 ? (
          <div className={s.proyects}>
            <span className={s.titleProyect}>Henry Food</span>
            <Carrousel arrImages={imgPI} />
            <span className={s.containLinks}>
              <a
                href="https://henry-food-one.vercel.app/"
                className={s.linksProyects}
                target="_blank"
              >
                🍝 Ir al proyecto
              </a>
              <a
                href="https://github.com/EzeGomez0407/Proyecto-Individual-"
                className={s.linksProyects}
                target="_blank"
              >
                <SiGithub className={s.iconLink} /> Repositorio
              </a>
            </span>
            <p>
              <b>Henry Food</b> (proyecto individual), es una aplicación para
              ver recetas de comidas. Las recetas se pueden filtrar por tipos de
              dietas, ordenar de manera ascendente y descendente, tanto
              alfabeticamente como por puntaje de salud, otras de las
              funcionalidades, es que podemos buscar las recetas por su nombre,
              ingresando el mismo en el buscador que se encuentra en la barra de
              navegación. Tambien se pueden publicar recetas mediante un
              formulario controlado.
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Proyects;
