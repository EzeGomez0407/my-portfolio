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
        <b>Hola!</b> Mi nombre es Ezequiel, soy técnico electromecánico, o lo
        era, porque conocí el mundo IT, por el cual tomé una desicion que dio un
        giro completo a mi vida, ahora soy Full Stack Developer, con más de 800
        horas de experiencias teórico-prácticas.
      </p>

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
