import React from "react";
import s from "./CardSkills.module.css";

function CardSkills({ title, info, tech, Icon }) {
  return tech ? (
    <div className={tech ? s.cardTech : s.card}>
      <h4 className={s.title}>{title}</h4>
      <Icon className={s.icon} id="icon" />
    </div>
  ) : (
    <div className={s.card}>
      <h4 className={s.title}>{title}</h4>
    </div>
  );
}

export default CardSkills;
