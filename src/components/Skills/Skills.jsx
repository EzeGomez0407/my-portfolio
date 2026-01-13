import React, { useState } from "react";
import s from "./Skills.module.css";
import CardSkills from "../CardSkills/CardSkills";
import { softSkill, techSkill } from "../../data/skills";

function Skills() {
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
    <section id="skills" className={s.containSkills}>
      {/* <div className={s.containSkills}> */}
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
          Mostrar menos
        </button>
      ) : (
        vieWidth < 720 && (
          <button
            onClick={handlerOnClick}
            name="ver-menos"
            className={s.btnViewMore}
          >
            Mostrar más
          </button>
        )
      )}
      {/* </div> */}
    </section>
  );
}

export default Skills;
