import React, { useState } from "react";
import s from "./AboutMe.module.css";
import CardSkills from "../CardSkills/CardSkills";
import { softSkill, techSkill } from "../../skills";

function AboutMe() {
  const [more, setMore] = useState(4);
  const [vieWidth, setVieWidth] = useState(window.visualViewport.width);

  window.addEventListener("resize", () => {
    setVieWidth(window.visualViewport.width);
  });

  const handlerOnClick = (e) => {
    console.log(e.target.name);
    e.target.name === "ver-mas" ? setMore(-1) : setMore(4);
  };

  return (
    <div id="about-me" className={s.containAboutMe}>
      <p className={s.aboutMe_p}>
        <b>¡Bienvenido!</b> Mi nombre es Ezequiel, mi objetivo principal es
        embarcarme en mi primer desafío profesional en el campo de IT, donde
        pueda aplicar mis habilidades y conocimientos en desarrollo de software.
        <br />
        <br />A lo largo de mi trayecto en el aprendizaje autodidacta, he
        adquirido una base sólida en varias tecnologías. Estoy familiarizado con
        metodologías ágiles y tengo experiencia práctica en la resolución de
        problemas y el desarrollo de soluciones creativas.
        {/* <b>Hola!</b> Mi nombre es Ezequiel, estoy en busca de una oportuniad
        laboral en la cual pueda demostrar mis conocimientos y habilidades en el
        desarrollo web */}
      </p>

      {/* "Apasionado de la programación y en búsqueda de mi primer experiencia en el mundo de las tecnologías de la información (IT)"

¡Bienvenido !  Mi objetivo principal es embarcarme en mi primer desafío profesional en el campo de IT, donde pueda aplicar mis habilidades y conocimientos en desarrollo de software.

A lo largo de mi trayecto en el aprendizaje autodidacta, he adquirido una base sólida en varias tecnologías. Estoy familiarizado con metodologías ágiles y tengo experiencia práctica en la resolución de problemas y el desarrollo de soluciones creativas.

Mi motivación intrínseca me impulsa constantemente a expandir mis conocimientos y habilidades en el área de IT. A través de cursos en línea, tutoriales y proyectos personales, continúo explorando nuevas tecnologías y frameworks para mantenerme actualizado en este campo en constante evolución.

En este portfolio, encontrarás ejemplos de mis proyectos pasados, donde podrás apreciar mi capacidad para enfrentar desafíos técnicos, mi atención al detalle y mi enfoque en la calidad del código. Además, también podrás explorar mis habilidades de trabajo en equipo y mi capacidad para colaborar eficazmente con otros profesionales de IT.

Estoy ansioso por embarcarme en mi primer desafío profesional en IT y contribuir con mis habilidades y entusiasmo a un equipo dinámico. Si compartes mi pasión por la programación y estás interesado en colaborar en proyectos emocionantes, no dudes en ponerte en contacto conmigo.
 */}

      <div className={s.containSkills}>
        <h2 className={s.subTitle}>Habilidades interpersonales</h2>
        <div className={s.skills}>
          {softSkill.map((skill, i) => (
            <CardSkills title={skill.title} info={skill.info} key={i} />
          ))}
        </div>
        <h2 className={s.subTitle}>Habilidades técnicas</h2>
        <div className={s.skills}>
          {vieWidth < 720
            ? techSkill
                .slice(0, more)
                .map((skill, i) => (
                  <CardSkills
                    title={skill.title}
                    tech={true}
                    Icon={skill.icon}
                    key={i}
                  />
                ))
            : techSkill.map((skill, i) => (
                <CardSkills
                  title={skill.title}
                  tech={true}
                  Icon={skill.icon}
                  key={i}
                />
              ))}
        </div>
        {vieWidth < 720 && more === 4 ? (
          <button
            onClick={handlerOnClick}
            name="ver-mas"
            className={s.btnViewMore}
          >
            Mostrar más
          </button>
        ) : (
          vieWidth < 720 && (
            <button
              onClick={handlerOnClick}
              name="ver-menos"
              className={s.btnViewMore}
            >
              Mostrar menos
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default AboutMe;
